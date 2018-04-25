var cookieDrawer = ["Cookie 1",
                    "Cookie 2",
                    "Cookie 3",
                    "Cookie 4",
                    "Cookie 5"];

console.log("Eating %s", cookieDrawer[0]);
console.log("Eating %s", cookieDrawer[1]);
console.log("Eating %s", cookieDrawer[2]);
console.log("Eating %s", cookieDrawer[3]);
console.log("Eating %s", cookieDrawer[4]);

var cookieObject = {
  name: "cookie",
  flavour: "chocolate",
  shape: "round",
  rating: 10
}

console.log("I am eating a %s %s, it is %s flavoured, and I rate it %d out of 10!",
              cookieObject.shape,
              cookieObject.name,
              cookieObject.flavour,
              cookieObject.rating);