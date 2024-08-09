function add(number1, number2) {
    if (!Number.isFinite(number1) || !Number.isFinite(number2)) {
        throw new Error('Les paramètres doivent être de type number ou float.');
    }
    const result = number1 + number2;
    return result;
}

export default add;
