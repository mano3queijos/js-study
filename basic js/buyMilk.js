const readlineSync = require("readline-sync");

function getMilk() {
  const enteredMoney = readlineSync.question(
    "Hi, I'm the robot, how much money do I have? "
  );
  let money = parseFloat(enteredMoney);

  console.log(
    "I'm going to the market with " + money + "$ to buy some bottles of milk!"
  );

  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  const bottlePrice = readlineSync.questionFloat(
    "Hi, I'm the robot, how much does a bottle of milk cost? "
  );
  let price = parseFloat(bottlePrice);
  console.log(
    "You can buy " +
      Math.floor(money / price) +
      " bottles of milk with $" +
      money
  );

  let change = money % price;
  console.log("You will have $" + change + " left after buying milk.");

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

getMilk();
