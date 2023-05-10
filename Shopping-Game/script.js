console.log("script running");


const items = document.querySelectorAll(".card-image");

var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

let arrCart = []
let totalCost = 0
let itemDup = {}
let costDisplay = document.getElementById("costDisplay")
// Make every image clickable!
items.forEach((item) => {
  item.addEventListener("click", (e) => {
  
    let lastChild = item.lastElementChild;
    var itemCost = lastChild.textContent
    totalCost += parseFloat(itemCost)
    console.log(totalCost)
    //arrCart.push(itemCost)
    // console.log(arrCart)
    // Change the background yellow
    // item.classList.toggle("has-background-light");
    // item.classList.toggle("has-background-warning");
   itemDup = item
  var cartList = document.getElementById("cartList");
  var thing = document.createElement("figure");
  var breaktag = document.createElement("br");
  thing.appendChild(itemDup);
    
  cartList.appendChild(thing);
  cartList.appendChild(breaktag)

   costDisplay.innerHTML = formatter.format(totalCost)
   
  });
});

// arrCart.forEach((item) =>{
  
// });
