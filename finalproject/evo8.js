window.onload = function(){
  let form = document.getElementById("tv");

  form.addEventListener("submit", function(event){
    event.preventDefault();
    faveTVValue = form.elements[0].value;
    faveTVValue = faveTVValue.toString();
    faveTVValue = faveTVValue.split(' ').join('+');

    const apiURL = `http://api.tvmaze.com/search/shows?q=${faveTVValue}`;
    fetch(apiURL).then(function(response){
        return response.json();
    })
    .then(function(data){
      if (data.length == 0){
        let p = document.getElementById("showtitle");
        let p2 = document.getElementById("showstatus");
        let p3 = document.getElementById("premiere");
        let img = document.getElementById("image");
        let div = document.getElementById("summary");
        let h2 = document.getElementById("titlehead");
        let h22 = document.getElementById("statushead");
        let h23 = document.getElementById("premierehead");
        h2.innerText = ""
        h22.innerText = ""
        h23.innerText = ""
        p.innerText = "Hmmm, your show didn't come up. The database is broken, your spelling is incorrect, or it isn't in the database at all. Please try again!";
        p2.innerText = "";
        p3.innerText = "";
        img.removeAttribute("src");
        div.innerHTML = "";
      } else {
      console.log(data);
      let title = data[0].show.name;
      let status = data[0].show.status;
      let premiere = data[0].show.premiered;
      let picture = data[0].show.image.original;
      let summary = data[0].show.summary;
      let p = document.getElementById("showtitle");
      let p2 = document.getElementById("showstatus");
      let p3 = document.getElementById("premiere");
      let img = document.getElementById("image");
      let div = document.getElementById("summary");
      let h2 = document.getElementById("titlehead");
      let h22 = document.getElementById("statushead");
      let h23 = document.getElementById("premierehead");
      h2.innerText = "Show Title"
      h22.innerText = "Status"
      h23.innerText = "Premiered On"
      p.innerText = title;
      p2.innerText = status;
      p3.innerText = premiere;
      img.setAttribute("src", picture);
      div.innerHTML = summary;
      }
    });
  });
}