var button = document.querySelector(".show-cat");
// console.log(button.innerText);

var cat = document.querySelector(".cat");
// console.log(cat.innerHTML)

button.addEventListener("click", function() {
   if(cat.classList.contains("show")){
    cat.classList.remove("show");
    button.innerText = "Wait, come back!";
    cat.classList.add("disappear");
   // console.log("Yes.");
   }else{
    cat.classList.add("show");
    button.innerText = "Shoo, cat!!";
    cat.classList.remove("disappear");
   // console.log("No.")
   }
}); 
// console.log(button.innerHTML);

