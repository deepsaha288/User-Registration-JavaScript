var readlineSync = require('readline-sync');
class UserRegistration {

    User = () => {
        try {
            let regex = /^[+][9][1][ ][0-9]{10}$/
            //Take input from user and matches with regex pattern 
            let phoneNumber = readlineSync.question("Enter your Phone number: ");
            const pattern = regex.exec(phoneNumber);
            if (pattern) {
                console.log("Matches");
            }
            else {
                console.log("Not matches");
            }
        } catch (error) {
            console.log(error); //handle the exception
        }
    }
}
module.exports = new UserRegistration();
