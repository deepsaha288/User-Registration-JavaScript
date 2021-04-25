var readlineSync = require('readline-sync');
class UserRegistration {
    User = () => {
        let read = /^[A-Z]{1}[a-z]{2,}$/
        var userName = readlineSync.question("Enter your first name: ");
        const result = read.exec(userName);
        if (result) {
            console.log("Matches");
        }
        else {
            console.log("not matches");
        }
    }

}
module.exports = new UserRegistration();
