// 0-rock
// 1-paper
// 2-scissors

function getRandomInt (max) {
return Math.floor(Math.random() * max);
}

function RPS (playerStroke) {
let machineStroke = getRandomInt(3);
let playerWinner = "игрок(человек)";
let machineWinner = "машина(компьютер)";
let kamen = "камень";
let bumaga = "бумага";
let nozhnicy = "ножницы";
let winner = "";
let machineResult = "";

if ( machineStroke == 0) {
machineResult = kamen;
}
else if ( machineStroke == 1) {
machineResult = bumaga;
}
else {
machineResult = nozhnicy;
}


let text = `Вы показали ${playerStroke}, компьютер показывает ${machineResult}.`;

if (playerStroke == "камень") {
if (machineResult == "бумага") {
	winner = machineWinner;
	}
else if (machineResult == "ножницы") {
		winner = playerWinner;
		}
	}

else if (playerStroke == "бумага") {
if (machineResult == "камень") {
	winner = playerWinner;
	}
else if (machineResult == "ножницы") {
		winner = machineWinner
		}
	}

else if (playerStroke == "ножницы") {
if (machineResult == "камень") {
	winner = machineWinner;
	}
else if (machineResult == "бумага") {
	winner = playerWinner;
	}
}
if (machineResult == playerStroke) {
	console.log (`${text} Победила дружба`);
	}
else {
console.log(`${text} Победил ${winner}`);
}
}