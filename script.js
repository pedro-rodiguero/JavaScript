function getAdmins(map) {
    let admins = [];
    for ([key, value] of map) {
        if (value === 'Admin') {
            admins.push(key);
        }
    }
    return admins;
}

const users = new Map();

users.set('Luke', 'Admin');
users.set('Peter', 'Admin');
users.set('John', 'User');
users.set('Joseph', 'User');

console.log(getAdmins(users));