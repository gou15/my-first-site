player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function(damage){
        this.energy = this.energy - damage;
    },
    recoverEnergy: function(energyUp){
        this.energy = this.energy + energyUp;
    },
    loseLife: function(){
        this.lives = this.lives - 1;
    },
    recoverLife: function(){
        this.lives = this.lives + 1;
    },
}
if (player.energy <= 0){
    player.loseLife();
    player.energy = 100;
}
while (player.energy > 100){
    player.energy - 1;
}
while (player.lives > 99){
    player.lives - 1;
}

player.name = "Dude";
player.loseLife(1);
player.loseEnergy(10);
player.loseEnergy(5);
player.loseEnergy(15);
player.loseEnergy(20);
player.recoverEnergy(10);
player.loseEnergy(30);
player.loseEnergy(40);
player.loseLife(1);
player.recoverLife(1);
player.recoverLife(1);
console.log(`The player ${player.name} has ${player.energy} energy and ${player.lives} lives`)