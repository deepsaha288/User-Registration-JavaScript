var readlineSync = require('readline-sync');
class UserRegistration {

    User = () => {
        try {
            let regex = /^[0-9a-zA-Z]+([._+-][0-9a-zA-Z]+)*@[0-9a-zA-Z]+.[a-zA-Z]{2,4}([.][a-zA-Z]{2})*$/
            //Take input from user and matches with regex pattern 
            let userEmail = readlineSync.question("Enter your Email id: ");
            const pattern = regex.exec(userEmail);
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
