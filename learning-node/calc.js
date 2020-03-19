const calc = {
    sum(){
        return [...arguments].reduce((total, actual) => total += actual, 0);
    },
    sub(){
        return [...arguments].reduce((total, actual) => total -= actual, 0);
    }
}

module.exports = calc;