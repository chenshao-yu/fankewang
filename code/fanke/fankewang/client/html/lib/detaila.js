$(()=>{

// 放大镜
class fadManager {
    constructor(data) {
        this.data = data;
        this.root = null;
        // 当前遮罩对应的索引
        this.mask = 1;
        // box的边框
        this.border = 1;
    }
    init() {
        this.render();
        this.toggle();
        // 一进来就调用这个方法，传入索引为一
        this.faj(0);
    }
    render() {
        // 先进行页面的渲染
        // 渲染小盒子
        let res1 = `<div class="mask"></div>`;
        let res2 = this.data.maxs.map((ele, index) =>
                `<img src=${ele} alt="" class=${index==0?'current':""}>`)
            .join("");
        let html1 = `<div class="minBox">${res2}${res1}</div>`;
        // 渲染大盒子
        let res3 = this.data.maxs.map((ele, index) =>
                `<img src=${ele} alt="" class=${index==0?'current':""}>`)
            .join("");

        let html2 = `<div class="maxBox">${res3}</div>`;
        // 渲染按钮
        let res4 = this.data.mins.map((ele, index) =>
                `<img src=${ele} alt="" class=${index==0?'active':""}>`)
            .join("");

        let html3 = `<div  class="btn">${res4}</div>`;
          // 创建一个根节点
          this.root = document.createElement("div");
          this.root.className = "box";
          // 设置根节点的内容插到页面上去
          this.root.innerHTML = html1 + html2 + html3;
          // document.body.appendChild(this.root);
          $(".amplification").html(this.root)
    }
    toggle() {
        // 实现切换效果
        // 先获取对应的标签
        let oBtns = this.root.children[2].children,
            oMaxBoxs = this.root.children[1].children,
            oMinBoxs = this.root.children[0].children
        // 给按钮一个划入事件
        Array.from(oBtns).forEach((ele, index) => {
            ele.onmouseenter = () => {
                //显示当前状态，先排他 
                Array.from(oBtns).forEach(ele => ele.className = "");
                Array.from(oMaxBoxs).forEach(ele => ele.className = "");
                for (let i = 0, len = oMinBoxs.length; i < len - 1; i++) {
                    oMinBoxs[i].className = "";
                }
                oMaxBoxs[index].className = "current";
                ele.className = "active";
                oMinBoxs[index].className = "current";
                // 调用放大镜的方法
                this.faj(index);
            }
        })
    }
    faj(index) {
        //实现放大镜效果 
        // 先获取对应的标签
        let oMin = this.root.children[0];
        let oMask = this.root.children[0].children[this.mask];
        let oMax = this.root.children[1];
        let oMaxImgs = oMax.children;
        // 移入的时候，让对应的显示出来；移出的时候，让对应的消失
        oMin.onmouseenter = function () {
            oMask.style.display = "block";
            oMax.style.display = "block";
        }
        oMin.onmouseleave = function () {
            oMask.style.display = "none";
            oMax.style.display = "none";
        }
        // 给box一个移动事件
        this.root.onmousemove = (e) => {
            e = e || window.event;
            // 遮罩走动的距离
            let oMaskX = e.pageX - this.root.offsetLeft - this.border - oMask.offsetWidth / 2;
            let oMaskY = e.pageY - this.root.offsetTop - this.border - oMask.offsetHeight / 2;
            // 遮罩移动的最大距离
            let maxX = this.root.offsetWidth - oMask.offsetWidth;
            let maxY = this.root.offsetHeight - oMask.offsetHeight;
            // 让遮罩不走出去,给他一个临界值判断
            if (oMaskX >= maxX) {
                oMaskX = maxX;
            } else if (oMaskX <= 0) {
                oMaskX = 0;
            }
            if (oMaskY >= maxY) {
                oMaskY = maxY;
            } else if (oMaskY <= 0) {
                oMaskY = 0;
            }
            //让遮罩跟随鼠标走动
            oMask.style.left = oMaskX + "px";
            oMask.style.top = oMaskY + "px";
            // 当遮罩走多少，相应的大图片也要按一定的比例走多少，这个比例一定是一个定值
            let biliX = (oMaxImgs[index].offsetWidth - oMax.offsetWidth) / maxX;
            let biliY = (oMaxImgs[index].offsetHeight - oMax.offsetHeight) / maxY;
            // 大图片走动的距离,大图片向反的方向走
            oMaxImgs[index].style.left = -oMaskX * biliX + "px";
            oMaxImgs[index].style.top = -oMaskY * biliY + "px";
        }
    }
}
//放大镜 图片传输
// 购物车js
                        // src=http://p2.vanclimg.com/300/300/product/6/3/8/6386633/mid/6386633-1j201910101056222379.jpg&qg=267&title=凡客基础多色家居套装 女款 黑色
                        /* 对查询字符串进行转码和切割(去除问号) */
                        let str = decodeURI(window.location.search.slice(1))
                        console.log(str);
                        /* 设计函数：name=zs & age=10&className=H5 */
                        function queryStringObj(queryString) {
                                var o = {};
                                var arr = queryString.split("&"); //用&分割

                                arr.forEach(function (item) {
                                        var data1 = item.split("=");
                                        var key = data1[0];
                                        var val = data1[1];
                                        
                                        o[key] = val;
                                })
                                return o;

                        }
                        var data1 = queryStringObj(str);

})