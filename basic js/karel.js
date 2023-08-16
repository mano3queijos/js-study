/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
      putBeeper();

moveToTheRightSide();
moveToTheRightSide();
moveToTheRightSide();
moveToTheRightSide();

}
function moveToTheRightSide(){
   turnLeft();
            move();

   turnRight();
            move();
   putBeeper();



   }


/////

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to 
 * write any Karel program you want.
 **/
function main(){
   
run();
run();
run();
run();
zag();
minZig();
minZig();
minZag();
   turnRight();

move();
putBeeper();
}
function minZig(){
   turnRight();
zig();

}
function minZag(){
   turnRight();
move();
}
function zag(){
   move();
turnLeft();
move();
putBeeper();
zig();
}
function zig(){
move();
 move();
 putBeeper();

}
function run(){
zig();
zig();
turnLeft();

   
}
