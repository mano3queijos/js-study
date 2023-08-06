
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getMilk() {
    rl.question("Hi, I'm the robot, how much money do I have? ", (enteredMoney) => {
        money = enteredMoney;

        console.log("I'm going to the market with " + money + "$ to buy some bottles of milk!");

        robotPathGoing();
        askForBottlePrice(money);

    });
}
function robotPathGoing(){
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");
}

function robotPathcomingBack(){
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");
}

function askForBottlePrice(money) {
    rl.question("Hi, I'm the robot, how much does a bottle of milk cost? ", (bottlePrice) => {
        console.log("You can buy " + (money / bottlePrice) + " bottles of milk with $" + money);
        askForTheBottle();
    });
}

function askForTheBottle() {
    rl.question("Do you want to buy the bottles? (yes/no) ", (answer) => {
        if (answer.toLowerCase() === 'yes') {
            console.log("Okay, thank you!");
            rl.close();
            robotPathcomingBack();
        } else {
          console.log("ah, ok")
        }
    });
}

getMilk();
