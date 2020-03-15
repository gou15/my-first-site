window.onload = function(){
    let allBoxes = ["div1", "div2", "div3", "div4"];
    let body = document.querySelector("body");
    allBoxes.forEach(function(box){
        let div = document.createElement("div");
        div.classList.add(box);
        body.appendChild(div);
        div.addEventListener("mouseover", function(){
            div.style.border = ("5px dotted red");
        });
        div.addEventListener("click", function(){
            window.alert("This is div " + div.classList);
        });
        div.addEventListener("mouseout", function(){
            div.style.border = ("1px solid black");
        })
    });
}