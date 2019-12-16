let table = picture.map(function(ele,index){
    return `<div class="tu${index}"><img src=${ele}></div>`
}).join("");
let Tabl=document.querySelector(".picture");
Tabl.innerHTML = table;