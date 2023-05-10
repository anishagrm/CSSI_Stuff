console.log("script running");


const items = document.querySelectorAll(".card-image");

let arrCart = []
// Make every image clickable!
items.forEach((item) => {
  item.addEventListener("click", (e) => {
  
    let lastChild = item.lastElementChild;
    let itemName = lastChild.textContent
    arrCart.push(itemName)
    console.log(arrCart)
    // Change the background yellow
    item.classList.toggle("has-background-light");
    item.classList.toggle("has-background-warning");


    // // If its the last question, unhide the result.
    // if (choice[0] === "activity") {
    //   let resultID;

    //   if (quizTaker.logical > quizTaker.creative) {
    //     resultID = "#logical-";
    //   } else {
    //     resultID = "#creative-";
    //   }

    //   if (quizTaker.introvert > quizTaker.extrovert) {
    //     resultID += "introvert";
    //   } else {
    //     resultID += "extrovert";
    //   }

    //   let result = document.querySelector(resultID);
    //   console.log(result);
    //   result.classList.remove("hidden");
    // }

   
  });
});
