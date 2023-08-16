const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function getMilk() {
  rl.question(
    "Hi, I'm the robot, how much money do I have? ",
    (enteredMoney) => {
      let money = enteredMoney; // Declara e atribui valor à variável money

      console.log(
        "I'm going to the market with " +
          money +
          "$ to buy some bottles of milk!"
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

      askForBottlePrice(money)
        .then((change) => {
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
          rl.close();
        })
        .catch((error) => {
          console.error("Error occurred:", error);
          rl.close();
        });
    }
  );
}

function askForBottlePrice(money) {
  return new Promise((resolve, reject) => {
    rl.question(
      "Hi, I'm the robot, how much does a bottle of milk cost? ",
      (bottlePrice) => {
        let price = bottlePrice;
        console.log(
          "You can buy " +
            Math.floor(money / price) +
            " bottles of milk with $" +
            money
        );
        let change = money % price;
        resolve(change);
      }
    );
  });
}

getMilk();
