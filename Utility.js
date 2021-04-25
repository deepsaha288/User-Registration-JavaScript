var readlineSync = require('readline-sync');
class UserRegistration {
    /**
     * regex pattern for username, email, phone number and password
     */
    REGEX_USERNAME = /^[A-Z]{1}[a-z]{2,}$/
    REGEX_EMAIL = /^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})*$/
    REGEX_PHONE_NUMBER = /^[+][9][1][ ][0-9]{10}$/
    REGEX_PASSWORD = /^(?=.*[0-9])(?=.*[@#$%]{1})(?=.*[A-Z]).{8,}$/

    /**
     * method for entry of user first and last name 
     */
    nameEntry = () => {
        try {
            let firstName = readlineSync.question("Enter your first name: ");
            let lastName = readlineSync.question("Enter your last name: ");
            const firstPattern = this.REGEX_USERNAME.exec(firstName);
            const lastPattern = this.REGEX_USERNAME.exec(lastName);
            if (firstPattern, lastPattern) {
                console.log("Matches");
            }
            else {
                console.log("Not matches");
            }
        } catch (error) {
            console.log(error);
        }

    }

    /**
     * method for entry of user email 
     */
    userEmail = () => {
        try {
            let email = readlineSync.question("Enter your Email id: ");
            const emailPattern = this.REGEX_EMAIL.exec(email);
            if (emailPattern) {
                console.log("Matches");
            }
            else {
                console.log("Not matches");
            }
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * method for entry of user phone number
     */
    userPhoneNumber = () => {
        try {
            let phoneNumber = readlineSync.question("Enter your Phone number: ");
            const phonePattern = this.REGEX_PHONE_NUMBER.exec(phoneNumber);
            if (phonePattern) {
                console.log("Matches");
            }
            else {
                console.log("Not matches");
            }
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * method for user entry of password
     */
    userPassword = () => {
        try {
            let password = readlineSync.question("Enter your Password: ");
            const passwordPattern = this.REGEX_PASSWORD.exec(password);
            if (passwordPattern) {
                console.log("Matches");
            }
            else {
                console.log("Not matches");
            }
        } catch (error) {
            console.log(error);
        }
    }
}
module.exports = new UserRegistration();
