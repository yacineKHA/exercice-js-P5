
function checkAge(age) {
    if (!Number.isFinite(age)) {
        throw new Error(`L'âge doit être un nombre.`);
    }

    if (age < 18) {
        return "Vous êtes mineur";
    }

    if (age <= 65) {
        return "Vous êtes majeur";
    }

    return "Vous êtes senior";
}

export default checkAge;

