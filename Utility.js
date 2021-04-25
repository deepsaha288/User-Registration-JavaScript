var readlineSync = require('readline-sync');
class UserRegistration {

    User = () => {
        try {
            let regex = /^(?=.*[0-9])(?=.*[@#$%]{1})(?=.*[A-Z]).{8,}$/
            //Take input from user and matches with regex pattern 
            let password = readlineSync.question("Enter your Password atleast 1 special character: ");
            const pattern = regex.exec(password);
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
