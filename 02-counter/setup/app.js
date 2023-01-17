//set initial count

let count = 0;

//select value and buttons

const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click", function(event){
        const classes = event.currentTarget.classList;

        if (classes.contains("increase")){
            count++;
        }
        if (classes.contains("decrease")){
            count--;
        }
        if (classes.contains("reset")){
            count = 0;
        }

        value.textContent = count;

        if (count > 0){
            value.style.color = "#0d2"
        }
        else if(count < 0){
            value.style.color = "red"
        }
        else{
            value.style.color = "#102a42"
        }

    });
});