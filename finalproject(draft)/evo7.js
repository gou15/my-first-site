window.onload = function(){
    
    let number = 0;
    let number2 = 0;
    let message = null;
    let confirm = false;
    const button = document.getElementById("start");

    let checkNumber = function(){
        number = window.prompt("Enter a non-zero positive whole number", 1)
        if (isNaN(number)){
            alert("That's not a number, try again.")
            number = null;
            checkNumber();
        }
        else if (number == null){
            alert("That's not a number, try again.")
            number = null;
            checkNumber();
        }
        else if (number <= 0){
            alert("That number is less than 0, try again.")
            number = null;
            checkNumber();
        }
        else if (number % 2 != 0 && number % 2 != 1) {
            alert("That's not a whole number. Get rid of that decimal and try again.")
            number = null;
            checkNumber();
        }
        else {
            alert("Number " + number + " accepted, button disabled. Carry on.")
            number = parseInt(number)
            button.removeEventListener("click", checkNumber);
        }
    }
    let checkNumber2 = function(){
        number2 = window.prompt("Give us another number, whole and negative this time.", -1)
        if (isNaN(number2)){
            alert("That's not a number, try again.")
            number2 = null;
            checkNumber2();
        }
        else if (number2 == null){
            alert("That's not a number, try again.")
            number2 = null;
            checkNumber2();
        }
        else if (number2 >= 0){
            alert("That number is zero or higher, try again.")
            number2 = null;
            checkNumber2();
        }
        else if (number2 % 2 != 0 && number2 %2 != -1){
            alert("That's not a whole number. Get rid of that decimal and try again.")
            number2 = null;
            checkNumber2();
        }
        else {
            alert("Number " + number2 + " accepted. Carry on.")
            number2 = parseInt(number2)
        }
    }
    button.addEventListener("click", checkNumber);

    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    const div3 = document.getElementById("div3");
    const div4 = document.getElementById("div4");
    const div5 = document.getElementById("div5");
    const div6 = document.getElementById("div6");
    const goAgain = document.getElementById("goAgain");
    const time = document.getElementById("time");
    
    div1.onclick = function(){
        if (number === null || number === 0){
            alert("You gotta click the button first.")
        }
        else{
            div1.classList.replace("next", "clicked");
            div1.innerHTML = `<p>Your number is ${number}</p>`
            div2.classList.replace("after", "next");
        }
    }
    div2.onclick = function(){
        if (div2.classList.contains("after")){
            alert("This box is red; go click on the blue box please.")
        }
        else{
            div2.classList.replace("next", "clicked");
            let numberPlusTen = number + 10;
            let numberTimesTen = number * 10;
            let numberDivByTen = number / 10;
            let numberSquared = number * number;
            div2.innerHTML = `<p>Your number plus ten is ${numberPlusTen}</p><p>Your number times ten is ${numberTimesTen}</p><p>Your number divided by ten is ${numberDivByTen}</p><p>Your number squared is ${numberSquared}</p>`
            div3.classList.replace("after", "next");
        }
    }
    div3.onclick = function(){
        if (div3.classList.contains("after")){
            alert("This box is red; go click on the blue box please.")
        }
        else{
            checkNumber2();
            div3.classList.replace("next", "clicked");
            let numberPlusnumber2 = number + number2;
            let numberTimesnumber2 = number * number2;
            let numberDivBynumber2 = number / number2;
            let number2DivBynumber = number2 / number;
            div3.innerHTML = `<p>Adding your first number and second results in ${numberPlusnumber2}</p><p>Multiplying them results in ${numberTimesnumber2}</p><p>Your first number divided by your second is ${numberDivBynumber2}</p><p>Your second number divided by your first is ${number2DivBynumber}</p>`
            div4.classList.replace("after", "next");
        }
    }
    div4.onclick = function(){
        if (div4.classList.contains("after")){
            alert("This box is red; go click on the blue box please.")
        }
        else{
            div4.classList.replace("next", "clicked");
            for(let n = number; n <= (number + 1000); n++){
                console.log(n);
            }
            div4.innerHTML = "<p>Open your console to see the next 1000 digits after your number lol</p>"
            div5.classList.replace("after", "next");
        }
    }
    div5.onclick = function(){
        if (div5.classList.contains("after")){
            alert("This box is red; go click on the blue box please.")
        }
        else{
            div5.classList.replace("next", "clicked");
            let numberAsString = number.toString()
            if (numberAsString.charAt(1)){
                message = "The second digit from the left of your number is " + numberAsString.charAt(1)
            }
            else{
                message = "Your number has no second digit so it returns false... sorry."
            }
            div5.innerHTML = `<p>Your number is ${numberAsString.length} digit(s) long.</p><p>${message}</p><p>The last digit in your number is ${numberAsString.charAt(numberAsString.length - 1)}</p><p><a href = "https://lmgtfy.com/?q=${number}" target = "_blank">Let me Google your number for you</a></p>`
            div6.classList.replace("after", "next");
        }
    }
    div6.onclick = function(){
        if (div6.classList.contains("after")){
            alert("This box is red; go click on the blue box please.")
        }
        else{
            div6.classList.replace("next", "clicked");
            time.innerText = "Decrease your number by 1 every second: " + number
            confirm = false;
            let n = number;
            let countdown = function(){
                n--
                time.innerText = "Decrease your number by 1 every second: " + n;
            }
            id = setInterval(countdown, 1000);
            goAgain.innerText = "Go Again or Stop Timer?"
        }
    }

    let goAgainFunction = function(){
        event.preventDefault();
        confirm = window.confirm("Click OK to reset or Cancel to stop the timer");
        if (confirm == true){
            clearInterval(id);
            div1.classList.replace("clicked", "next");
            div2.classList.replace("clicked", "after");
            div3.classList.replace("clicked", "after");
            div4.classList.replace("clicked", "after");
            div5.classList.replace("clicked", "after");
            div6.classList.replace("clicked", "after");
            div2.classList.replace("next", "after");
            div3.classList.replace("next", "after");
            div4.classList.replace("next", "after");
            div5.classList.replace("next", "after");
            div6.classList.replace("next", "after");
            div1.innerHTML = ""
            div2.innerHTML = ""
            div3.innerHTML = ""
            div4.innerHTML = ""
            div5.innerHTML = ""
            div1.innerText = "Box 1"
            div2.innerText = "Box 2"
            div3.innerText = "Box 3"
            div4.innerText = "Box 4"
            div5.innerText = "Box 5"
            time.innerText = "Last box!"
            goAgain.innerText = "";
            number = 0;
            number2 = 0;
            n = 0;
            message = null;
            button.addEventListener("click", checkNumber);
        }
        else if (confirm == false){
            clearInterval(id);
        }
    }

    goAgain.addEventListener("click", goAgainFunction);

    let html = document.querySelector("html");
    html.addEventListener("mousemove", function(event) {
        let x = document.getElementById("x")
        let y = document.getElementById("y")
        x.innerText = `Mouse Position x-axis = ${event.clientX}`;
        y.innerText = `Mouse Position y-axis = ${event.clientY}`;
    });
};
