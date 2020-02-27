function getShapePerimeter(base, height){
    if (((base + height) * 2) > 100){
        return "Perimeter is too big!"
    }
    else if (((base + height) * 2) <= 100 && base > 0 || height > 0){
        return "Perimeter is fine."
    }
    else{
        return "Check parameters... something didn't work"
    }
}
console.log (getShapePerimeter(-29, -25))