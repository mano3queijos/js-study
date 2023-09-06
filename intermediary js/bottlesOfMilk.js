function bottlesOfMilk() {
  var bottles = 100;
  while (bottles != 1) {
    console.log(
      bottles + " bottles of milk on the wall\n" + bottles + " bottles of milk."
    );
    bottles--;

    console.log(
      "Take one down, pass it around\n" + bottles + " Bottles Of Milk\n"
    );
  }
}

bottlesOfMilk();
