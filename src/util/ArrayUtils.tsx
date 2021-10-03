export const removeFromArray = <T extends unknown>(
    arr: T[],
    element: T
): T[] => {
    const idx = arr.indexOf(element);

    if (idx >= 0) {
        const clone = [...arr];

        clone.splice(idx, 1);

        return clone;
    }

    return arr;
};
