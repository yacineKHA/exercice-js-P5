function printNumbers(n) {
    if (!Number.isFinite(n)) {
        throw new Error(`n doit être un nombre`);
    }

    let result= "";

    for (let i = 1; i <= n; i++) {
        result += i + " ";
    }

    return result;
}

export default printNumbers;
