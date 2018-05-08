  // getElementById
  function getElementByIdEg() {
    var elementText = document.getElementById("getElementByIdExample");
    alert(elementText.innerHTML);
    alert(elementText.innerText);
  }

  // getElementById
  function getElementsByClassNameEg() {
    var classText = document.getElementsByClassName("getElementsByClassNameExample");
    // alert(classText[0].innerHTML);
    alert(classText[0].innerText);
  }

  function getElementByTagNameEg() {
    var tagname = document.getElementsByTagName("h3");
    alert(tagname[0].innerHTML);
  }

  function createElementEg() {
    var liText = prompt("Enter your item here: ");
    var newLi = document.createElement("LI");
    var createNew = document.createTextNode(liText);
    newLi.appendChild(createNew);
    document.getElementById("list").appendChild(newLi);
  }

  function getElementStyle() {
    var element = document.getElementById("colorEg");
    alert("The color of the text is " + element.style.color);
  }

  function changeElementStyle() {
    var element = document.getElementById("colorChanger");
    element.style.color = "green";
  }

  function changeColorHover(color) {
    var element = document.getElementById("colorHover");
    element.style.color = color;
  }

  function addItem() {
    var liText = prompt("Add: ");
    var newLi = document.createElement("LI");
    var createNew = document.createTextNode(liText);
    newLi.appendChild(createNew);
    document.getElementById("todolist").appendChild(newLi);
  }

  function removeItem() {
    var list = document.getElementById("todolist");
    list.removeChild(list.childNodes[0]);
  }

  // This is a JavaScript object
  var fruits = {
    0:{
      "name": "Apple",
      "price": 50,
      "weight": 125
    },
    1:{
      "name": "Orange",
      "price": 60,
      "weight": 230
    },
    2:{
      "name": "Pear",
      "price": 35,
      "weight": 200
    },
    3:{
      "name": "Durian",
      "price": 120,
      "weight": 500
    }
  }

  function looper(input) {
    var objectSize = 0;
    while(objectSize < Object.keys(fruits).length){
      var newLi = document.createElement("LI");
      var fruitPrint = document.createTextNode(fruits[objectSize][input]);
      newLi.setAttribute("id","fruitItem");
      newLi.appendChild(fruitPrint);
      document.getElementById("loopTest").appendChild(newLi);
      objectSize++;
    }
  }

  function clearFruits() {
    var list = document.getElementById("loopTest");
    while(list.firstChild){
      list.removeChild(list.firstChild);
    }
  }
