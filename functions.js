function countToFive() {
  var counter = 1;

  while(counter <= 5) {
    console.log("Counter: " + counter);
    counter++;
  }
}

countToFive();
countToFive();
countToFive();
countToFive();
countToFive();

// Or, we can make a number adder
function add(num1, num2) {
  return num1 + num2;
}

console.log(add(100, 23));