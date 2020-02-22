let playerName = "Darian Durant is lame";
let teams = "BC Lions, Calgary Stampeders, Edmonton Eskimos, Saskatchewan Roughriders & Winnipeg Blue Bombers";
let message = "Regina is the best Canadian city, Go Riders";
const quarterback = (playerName.toUpperCase().slice(0, 14) + playerName.slice(14,16));
const team = (teams.charAt(66)).toUpperCase().concat (teams.slice(67, 72));
const participle = (message.slice(9, 19));
const direction = (message.slice(message.length - 9, message.length));
const result = quarterback.concat(participle, team, " player, ", direction, "!!");
console.log(result);