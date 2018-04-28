var cookieDrawer = ["Cookie 1",
                    "Cookie 2",
                    "Cookie 3",
                    "Cookie 4",
                    "Cookie 5"];

var counter1 = 0;
while(counter1 < cookieDrawer.length) {
  console.log("Eating " + cookieDrawer[counter1]);
  counter1++;
}

var input;
while(input != 0) {
  input = prompt("Enter 0, do the right thing:");
  console.log("You entered %d", input);
}

