const colors = ["green", "red", "rgb(133,122,200)", "#f15025", "blue", "whitesmoke", "coral", "purple", "yellow", "brown", "beige", "orange", "black", "grey"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // get random number between 0 and 3
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

