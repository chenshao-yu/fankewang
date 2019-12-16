let you = youxuan.map(function (ele) {
    let sss = ele.sss.map(function (ele,index) {
            return `<li class="liss${index}"><img src=${ele.list.src}>
                <h3>${ele.list.tt}</h3>
                <span>${ele.list.cz}</span></li>`
            console.log(ele.list.src);
            
        }).join("");
        // console.log(ele);

    
    // console.log(ele);
    return `<h2>${ele.tile}</h2><ul>${sss}</ul>`

}).join("");
let xuan = document.querySelector(".youxuan");
xuan.innerHTML = you

let you2 = youxuan2.map(function (ele) {
    let sss2 = ele.sss.map(function (ele,index) {
            return `<li class="liss${index}"><img src=${ele.list.src}>
                <h3>${ele.list.tt}</h3>
                <span>${ele.list.cz}</span></li>`
            log
        }).join("");
        // console.log(ele);

    
    // console.log(ele);
    return `<ul>${sss2}</ul>`

}).join("");
let xuan2 = document.querySelector(".youxuan2");
xuan2.innerHTML = you2

//裤子
let kuzia = kuzi.map(function (ele) {
    let sss3 = ele.sss.map(function (ele) {
            return `<li><img src=${ele.list.src}>
                <h3>${ele.list.tt}</h3>
                <span>${ele.list.cz}</span></li>`
            
        }).join("");
    return `<ul>${sss3}</ul>`

}).join("");
let kuzi2 = document.querySelector(".kuzi");
kuzi2.innerHTML = kuzia

// 更多
let geng = gengduo.map(function(ele){
    return `<li><img src=${ele}></li>` 
}).join("");
let gen = `<h2>更多精品</h2><ul>${geng}</ul>`;
let duo = document.querySelector(".gengduo");
duo.innerHTML = gen