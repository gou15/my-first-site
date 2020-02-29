let maths = {
    add: function(n1, n2){
        if (typeof n1 != 'number' || typeof n2 != 'number'){
            console.error ("Please use numbers")
        }
        else{
            console.log(n1 + n2);
        }  
    },
    subtract: function(n1, n2){
        if (typeof n1 != 'number' || typeof n2 != 'number'){
            console.error ("Please use numbers")
        }
        else{
            console.log(n1 - n2);
        }  
    },
    multiply: function(n1, n2){
        if (typeof n1 != 'number' || typeof n2 != 'number'){
            console.error ("Please use numbers")
        }
        else{
            console.log(n1 * n2);
        }  
    },
    divide: function(n1, n2){
        if (typeof n1 != 'number' || typeof n2 != 'number'){
            console.error ("Please use numbers")
        }
        else{
            console.log(n1 / n2);
        }  
    },
    remainder: function(n1, n2){
        if (typeof n1 != 'number' || typeof n2 != 'number'){
            console.error ("Please use numbers")
        }
        else{
            console.log(n1 % n2);
        }  
    },
}
maths.add(2, 10)
maths.subtract(10, 5)
maths.multiply(3, 100)
maths.divide(40, 2)
maths.remainder(20, 2)