let greet = (fName, lName, callback) => {
    console.log(`Hi ${fName} ${lName}`);
    callback();
};

module.exports = greet;