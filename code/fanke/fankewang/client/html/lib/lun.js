class Lbt {
    constructor(options) {
        this.selector = options.el;
        this.el = document.querySelector(options.el);
        this.imgList = options.imgList;
        this.time = options.time;
        this.init();
        this.index = 0; // 当前显示的页面索引
    }
    init() {
        this.renderCSS(this.selector);
        this.renderHTML();
        this.addEvent();
    }
    renderCSS(selector) {
        let css = `a {
        text-decoration: none;
    }
    ol li,
    ul li {
        list-style: none;
    }
    ${selector} {
        position: relative;
    }
    ${selector} .img-box {
        height: 100%;
        position: relative;
    }
    ${selector} .img-box li {
        height: 100%;
        width: 100%;
        position: absolute;
        transition: all 1s;
        opacity: 0;
        font-size: 50px;
    }
    ${selector} .img-box li img {
        height: 100%;
    }
    ${selector} .img-box li.active {
        z-index: 1;
        opacity: 1;
    }
    ${selector} .img-box a {
        display: block;
        font-size: 60px;
        line-height: 600px;
        text-align: center;
    }
    ${selector} .list-box {
        position: absolute;
        bottom: 0;
        z-index: 2;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    ${selector} .list-box li {
        width: 12px;
        height: 12px;
        background-color: #fff;
        border-radius: 50%;
        float: left;
        margin-right: 10px;
    }
    ${selector} .list-box li:last-child {
        margin-right: 0;
    }
    ${selector} .box-btn button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
    }
    ${selector} .box-btn-left {
        left: 0;
    }
    ${selector} .box-btn-right {
        right: 0;
    }
    ${selector} .list-box li.active {
        background-color: #B81C22;
    }`;
        let style = document.createElement("style");
        style.innerHTML = css;
        document.head.appendChild(style);
    }
    renderHTML() {
        let {
            el,
            imgList
        } = this;
        let lis = imgList.map((item, index) => {
            return `<li class="${index ? "" : "active"}"><a href="${item.url}"><img src="${item.img}" alt="" /></a></li>`
        }).join("");
        let roundList = imgList.map((item, index) => {
            return `<li class="${index ? "" : "active"}"></li>`
        }).join("");

        el.innerHTML = `
    <ul class="img-box">${lis}</ul>
    <ul class="list-box">${roundList}</ul>
    <div class="box-btn">
        <button class="box-btn-left"style="background: url(http://i3.vanclimg.com/cms/20160918/focus_lr0918.png) no-repeat scroll 0px 0px;width: 30px; height: 67px;border:none;outline: none;"></button>
        <button class="box-btn-right" style="background: url(http://i3.vanclimg.com/cms/20160918/focus_lr0918.png) no-repeat scroll -52px 0px;width: 30px;border:none;outline: none;
        height: 67px;"></button>
    </div>`;
    }
    animate(index) {
        let {
            imgLi,
            roundList
        } = this;
        for (let i = 0; i < imgLi.length; i++) {
            imgLi[i].classList.remove("active");
            roundList[i].classList.remove('active');
        }
        roundList[index].classList.add('active');
        imgLi[index].classList.add('active');
    }
    qie(val) {
        if (val == "next" && ++this.index == this.imgList.length) this.index = 0;
        if (val == "prev" && --this.index == -1) this.index = this.imgList.length - 1;
        this.animate(this.index);
    }
    autoplay() {
        this.timer = null;
        this.timer = setInterval(() => this.qie("next"), this.time);
        this.el.onmouseenter = () => clearInterval(this.timer);
        this.el.onmouseleave = () => this.timer = setInterval(() => this.qie("next"), this.time);
    }
    addEvent() {
        let {
            el
        } = this;
        // 获取元素
        this.imgLi = el.querySelectorAll('.img-box li');
        this.roundList = el.querySelectorAll('.list-box li');
        this.prev = el.querySelector('.box-btn-left');
        this.next = el.querySelector('.box-btn-right');

        // 给左右按钮添加点击事件
        this.next.onclick = () => this.qie("next");
        this.prev.onclick = () => this.qie("prev");


        // 给小圆点添加点击事件
        for (let j = 0; j < this.roundList.length; j++) this.roundList[j].onmouseenter = () => this.animate(this
            .index = j);
        this.autoplay();
    }
}