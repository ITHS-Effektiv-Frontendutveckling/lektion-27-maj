import { User, Admin } from './user.js';

const adaUser = new User('Ada', 'pwd123', 'ada@lovelace.com');
const chrisUser = new User('Chris', 'pwd123', 'chris@chris.com');
console.log(adaUser.getUser());
console.log(chrisUser.getUser());

console.log(adaUser.getUsername());

adaUser.setNewPassword('pwd321');
console.log(adaUser.getUser());

const adminUser = new Admin('Ada', 'pwd123', 'ada@lovelace.com', 'admin');
console.log(adminUser);