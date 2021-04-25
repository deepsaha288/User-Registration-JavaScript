var readlineSync = require('readline-sync');
class UserRegistration {
    User = () => {
        try {
            let regex = /^[A-Z]{1}[a-z]{2,}$/
            var userName = readlineSync.question("Enter your last name: ");
            const pattern = regex.exec(userName);
            if (pattern) {
                console.log("Matches");
            }
            else {
                console.log("not matches");
            }
        } catch (error) {
            console.log(error);
        }

    }
}
module.exports = new UserRegistration();
