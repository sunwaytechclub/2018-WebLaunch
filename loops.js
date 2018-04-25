for(var counter1 = 0; counter1 < 10; counter1++) {
  console.log("Counter 1: " + counter1);
}

var counter2 = 0;
while(counter2 < 10) {
  console.log("Counter 2: " + counter2);
  counter2++;
}

var cookieDrawer = ["Cookie 1",
                    "Cookie 2",
                    "Cookie 3",
                    "Cookie 4",
                    "Cookie 5"];

// Iterator loop
for (let cookie of cookieDrawer) {
  console.log("Eating " + cookie);
}

var input;

do {
  console.log("do-while loop doing its thing");
  input = prompt("Enter 0, do the right thing:");
  console.log("You entered %d", input);
} while(input != 0);

