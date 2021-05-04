const readlineSync = require('readline-sync');
class UserRegistration {
    /**
     * regex pattern for username, email, phone number and password
     */
    REGEX_USER_FIRST_NAME = /^[A-Z]{1}[a-z]{2,}$/
    REGEX_USER_LAST_NAME = /^[A-Z]{1}[a-z]{2,}$/
    REGEX_EMAIL = /^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})*$/
    REGEX_PHONE_NUMBER = /^[+][9][1][ ][0-9]{10}$/
    REGEX_PASSWORD = /^(?=.*[0-9])(?=.*[@#$%]{1})(?=.*[A-Z]).{8,}$/

    /**
     * 
     *common mathod for every pattern 
     */
    checkValidation = (value) => {

        if (value) {

            console.log("valid ");
            return true;
        }
        else {
            console.log("invalid")
            return false;
        }
    }

    /**
     * method for entry of user first and last name 
     */
    nameEntryFirst = (firstName) => {
        try {
            // let firstName = readlineSync.question("Enter your first name: ");
            const firstPattern = this.REGEX_USER_FIRST_NAME.exec(firstName);

            if (firstPattern) {
                return this.checkValidation(firstPattern)
            }
            else {
                this.nameEntryFirst();
            }
        } catch (error) {
            console.log(error);
        }

    }


    nameEntryLast = (lastName) => {
        try {
            //let lastName = readlineSync.question("Enter your last name: ");
            const lastPattern = this.REGEX_USER_FIRST_NAME.exec(lastName);
            if (lastPattern) {
                return this.checkValidation(lastPattern);
            }
            else {
                this.nameEntryLast();
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
                this.checkValidation(emailPattern);
            }
            else {
                this.userEmail();
            }
        } catch (error) {
            console.log(error);
        }
    }

    /**
     * me+thod for entry of user phone number
     */
    userPhoneNumber = () => {
        try {
            let phoneNumber = readlineSync.question("Enter your Phone number: ");
            const phonePattern = this.REGEX_PHONE_NUMBER.exec(phoneNumber);
            if (phonePattern) {
                this.checkValidation(phoneNumber);
            }
            else {
                this.userPhoneNumber();
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
                this.checkValidation(password);
            }
            else {
                this.userPassword();
            }
        } catch (error) {
            console.log(error);
        }
    }

}

module.exports = new UserRegistration();
