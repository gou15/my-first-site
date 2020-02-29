let user = {
    username: "batman",
    password: "Alfred1960ROCKS!"
};
console.log(user.username, user.password);
console.log(user.username.charAt(0).toUpperCase() + user.username.substring(1), user.password.substring(0, 6) + " " + user.password.substring(10, user.password.length));