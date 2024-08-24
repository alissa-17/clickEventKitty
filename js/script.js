var button = document.querySelector(".show-cat");
// console.log(button.innerText);

var cat = document.querySelector(".cat");
// console.log(cat.innerHTML)

button.addEventListener("click", function() {
    button.innerText = "It's working.";
    cat.classList.add("show");
}); 
// console.log(button.innerHTML);

