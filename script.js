let input = document.querySelector('.input');
let button = document.querySelector('.enter');
let list = document.querySelector('.list');

let listProduct =[];

function displayList() {
    list.innerHTML ="";
    listProduct.forEach(function(item) {
    let li = document.createElement("li");
    li.innerHTML = item;
    list.appendChild(li)
});
input.value ="";
}

displayList();
function updateList(){
    listProduct.push(input.value)
}

button.addEventListener("click", function(){
    updateList();
    displayList();
}
)