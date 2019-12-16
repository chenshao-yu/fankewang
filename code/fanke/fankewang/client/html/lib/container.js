let oul = Tshirt.map(function (ele) {
    let oli = ele.map(function(ele){
        return `<img src="${ele.src}" >
                <div class="new-miaosha-productname"><span>${ele.title}</span>
                    </div>
                <div class="new-miaosha-price"><span class="new-miaosha-oldprice">${ele. original}</span><span class="new-miaosha-saleprice">${ele.price}</span><span class="new-miaosha-afterdeposit">${ele.filling}</span>
                    </div>`
    }).join("")
    return `<li>${oli}</li>`

}).join("");
let ooul=`<ul>${oul}</ul>`
let ose = document.querySelector('#seckill_2017_container');
ose.innerHTML = ooul