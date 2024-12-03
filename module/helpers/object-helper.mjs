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