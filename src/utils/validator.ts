import chalk from "chalk";

class Validator {
    static isNotEmpty(value: string, fieldName: string): boolean {
        if (!value || value.trim().length === 0) {
            console.log(chalk.red(`Error: ${fieldName} cannot be empty.`));
            return false;
        }
        return true;
    }

    static isValidFilePath(value: string, fieldName: string): boolean {
        if (!Validator.isNotEmpty(value, fieldName)) return false;

        const invalidChars = /[<>"|?*]/;
        if (invalidChars.test(value)) {
            console.log(chalk.red(`Error: ${fieldName} contains invalid characters.`));
            return false;
        }
        return true;
    }

    static isAlphanumeric(value: string, fieldName: string): boolean {
        if (!Validator.isNotEmpty(value, fieldName)) return false;

        const pattern = /^[a-zA-Z0-9_-]+$/;
        if (!pattern.test(value)) {
            console.log(chalk.red(`Error: ${fieldName} must only contain letters, numbers, hyphens, or underscores.`));
            return false;
        }
        return true;
    }

    static hasMinLength(value: string, min: number, fieldName: string): boolean {
        if (!Validator.isNotEmpty(value, fieldName)) return false;

        if (value.trim().length < min) {
            console.log(chalk.red(`Error: ${fieldName} must be at least ${min} characters long.`));
            return false;
        }
        return true;
    }
}

export default Validator;
