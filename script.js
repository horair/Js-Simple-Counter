var pTag = document.querySelector(".pTag");
var dec = document.querySelector(".dec");
var inc = document.querySelector(".inc");
var c = 0;

display();

inc.addEventListener("click",function() {
    c++;
    display();
})


dec.addEventListener("click",function() {
    if (c == 0) {
        alert("Value must be greater than zero");
    }
        else {
            c--;
            display();
        }
    
})

function display() {
    pTag.innerHTML = c;
}