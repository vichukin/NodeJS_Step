
const greatings = require("./Greatings.js");
const invitations = require("./Invitations.js");
const os = require("os");
console.log(os.userInfo().username);
console.log(os.userInfo().homedir);
console.log(invitations.currentDate);
invitations.getMessage("Dima");
const User = require("./User.js");
let user = new User("Дима",17);
user.printInfo();
user.sayHi();
console.log(invitations.name);
const inv2 = require("./Invitations.js");
inv2.name="Vadym";
console.log(inv2.name);
console.log(invitations.name);
const welcom = require("./Welcome")
// global.surname="Vychkin";
welcom.getEveningGreetings("Vychkin");
welcom.getMorningGreetings("Vychkin");
console.log(process.argv[0]);
console.log(process.argv[1]);
console.log(`surname: ${process.argv[2]}`);
console.log(process.argv[3]);