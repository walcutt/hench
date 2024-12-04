export function getValueAtPath(obj, fieldPath) {
    const pathSequence = fieldPath.split('.');

    let pointer = obj;

    for(let i = 0; i < pathSequence.length; i++) {
        pointer = pointer[pathSequence[i]];
    }

    return pointer;
}

export function copyAndMutateAtPath(obj, fieldPath, val) {
    const copy = deepCopy(obj);

    const changed = mutateAtPath(copy, fieldPath, val);

    return changed;
}

function mutateAtPath(obj, fieldPath, val) {
    if(fieldPath === "") {
        return val;
    }

    const pathSequence = fieldPath.split('.');

    let pointer = obj;

    for(let i = 0; i < pathSequence.length - 1; i++) {
        pointer = pointer[pathSequence[i]];
    }

    pointer[pathSequence[pathSequence.length - 1]] = val;

    return obj;
}

export function deepCopy(obj) {
    return structuredClone(obj);
}

export function getDataPathFromString(dataPathString) {
    const arraySplit = dataPathString.indexOf('[');

    const isArray = arraySplit > 0;

    if(isArray) {
        const preTokens = dataPathString.split('[');
        const postTokens = preTokens[1].split(']');

        const prefix = preTokens[0];
        const postfixRaw = postTokens[1];
        const postfix = postfixRaw.indexOf('.') === 0 ? postfixRaw.slice(1) : postfixRaw;
        const index = parseInt(postTokens[0]);

        return {
            path: prefix,
            isArray: true,
            index: index,
            subPath: postfix,
        };
    } else {
        return {
            path: dataPathString,
            isArray: false,
            index: 0,
            subPath: null,
        };
    }
}

export function updateField(actor, dataPathString, value) {
    const dataPath = getDataPathFromString(dataPathString);

    console.log(`Converted ${dataPathString} to:`);
    console.log(dataPath);
    console.log(`Writing: ${value}`);

    if(dataPath.isArray) {
        const initial = getValueAtPath(actor, dataPath.path);
        const copy = initial.map(e => deepCopy(e));
        copy[dataPath.index] = copyAndMutateAtPath(initial[dataPath.index], dataPath.subPath, value);

        actor.update({
            [dataPath.path]: copy,
        });
    } else {
        actor.update({
            [dataPath.path]: value
        });
    }
}