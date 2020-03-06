let n = 0;
function showNumbers(start, end){
    if (end > start){
        while (end > start){
            start++;
            console.log(start);
            n++;
        }
    }
    if (start > end){
        while (start > end){
            start--;
            console.log(start);
            n++;
        }
    }
    if (start == end && n == 0){
        console.log(`${start} and ${end} are same number`)
    }
}
showNumbers(1000, 1000);