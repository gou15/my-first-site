let game0 = {
    name: "Crash Bandicoot",
    price: 1060,
    sold: 20,
    console: "PS4",
}
let game1 = {
    name: "Lego Marvel Super Heroes",
    price: 700,
    sold: 25,
    console: "XBOX",
}
let game2 = {
    name: "GTA5",
    price: 1449,
    sold: 30,
    console: "PS4",
}
let game3 = {
    name: "Mortal Kombat 11",
    price: 1190,
    sold: 34,
    console: "PS4",
}
let game4 = {
    name: "GTA5",
    price: 1250,
    sold: 60,
    console: "XBOX",
}
let game5 = {
    name: "Fifa 17",
    price: 890,
    sold: 15,
    console: "PS4",
}
let game6 = {
    name: "Uncharted 4",
    price: 950,
    sold: 30,
    console: "PS4",
}
let game7 = {
    name: "Mortal Combat",
    price: 940,
    sold: 30,
    console: "XBOX",
}
let game8 = {
    name: "N4S",
    price: 790,
    sold: 10,
    console: "PS4",
}
let game9 = {
    name: "Lego Batman",
    price: 1000,
    sold: 18,
    console: "PS4",
}
let game10 = {
    name: "Fifa 17",
    price: 1290,
    sold: 12,
    console: "PS4",
}
let game11 = {
    name: "Res Evil 7",
    price: 1390,
    sold: 10,
    console: "PS4",
}
let game12 = {
    name: "DragonBall",
    price: 1390,
    sold: 25,
    console: "XBOX",
}
let games = [game0, game1, game2, game3, game4, game5, game6, game7, game8, game9, game10, game11, game12];

games.forEach(function(game){
    console.log("name - " + game.name)
    console.log("price - " + game.price)
    console.log("sold - " + game.sold)
    console.log("console - " + game.console)
});