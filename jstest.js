window.onload = function(){
    let html = document.querySelector("html");
    html.addEventListener("mousemove", function(event) {
        console.log("X" + event.clientX);
        console.log("Y" + event.clientY);
        if (event.clientX == 326){
            alert("Found the gold fucker");
        }
    });
}



window.onload = function(){
    let form = document.getElementById("playerdata");
    let parentdiv = document.getElementById("parent");
    let firstNameValue = form.elements[0];
    let lastNameValue = form.elements[1];
    let emailValue = form.elements[2];
    let faveTVValue = form.elements[3];
    let difficultyValue = null;
    let viewPortWidth;
    let viewPortHeight;
  
    form.addEventListener("submit", function(event){
        event.preventDefault();
        firstNameValue = form.elements[0].value;
        lastNameValue = form.elements[1].value;
        emailValue = form.elements[2].value;
        faveTVValue = form.elements[3].value;
        window.alert("First Name " + firstNameValue)
        window.alert("Last Name " + lastNameValue)
        window.alert("Email Address " + emailValue)
        window.alert("Favorite TV Show " + faveTVValue)
        if (form.elements[4].checked == true){
          difficultyValue = form.elements[4].id;
          window.alert("Game Difficulty " + difficultyValue)
        } else if (form.elements[5].checked == true){
          difficultyValue = form.elements[5].id;
          window.alert("Game Difficulty " + difficultyValue)
        } else if (form.elements[6].checked == true){
          difficultyValue = form.elements[6].id;
          window.alert("Game Difficulty " + difficultyValue)
        }
        if (typeof window.innerWidth != 'undefined') {
          viewPortWidth = window.innerWidth,
          viewPortHeight = window.innerHeight
        }
        console.log(viewPortWidth + " " + viewPortHeight)
        parentdiv.innerHTML = '<div class = "blue" id = "blue"></div><div class = "green" id = "green"></div>'
        let topLeftBlue = document.getElementById("blue");
        let bottomRightGreen = document.getElementById("green");
        let flasher = function(){
          topLeftBlue.classList.toggle("blue");
          bottomRightGreen.classList.toggle("green");
          topLeftBlue.addEventListener("click", function(){
            let p = document.createElement("p");
            p.innerText = "Clicked on blue!";
            parentdiv.appendChild("p");
          });
          bottomRightGreen.addEventListener("click", function(){
            let p = document.createElement("p");
            p.innerText = "Clicked on green!";
            parentdiv.appendChild("p");
          });
        }
        timer = setInterval(flasher, 100);
    });
  }