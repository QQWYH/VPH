// class Slider {
//     constructor(data) {
//         this.data = data;
//         this.slider = null;
//         this.sliderNav = null;
//         this.sliderControl = null;
//         this.sliderList = null;


//         this.timer = null;
//         this.index = 0;
//         this.len = this.data.length;
//         this.sliderNavItemWidth = 1146;
//     }
//     init() {
//         this.createUI();//前端
//         this.setSliderItembackgroundColor();//随机背景颜色
//         this.autoPlay();//自动跳转
//         this.addSlider();//鼠标移入移出
//         this.addEventSliderControl();//点击滑动图片
//         this.addEventSliderList();//点击豆豆
//     }
//     // 自动播放
//     autoPlay() {
//         this.timer = setInterval(() => {
//             this.index++;
//             if (this.index == this.len) {
//                 this.index = 0;
//             }
//             this.selectListItem(this.index)
//             this.sliderNav.style.left = -(this.index * this.sliderNavItemWidth) + "px";
//         }, 2000)
//     }

//     // 鼠标移入移出
//     addSlider() {
//         this.slider.onmouseenter = () => clearInterval(this.timer);
//         this.slider.onmouseleave = () => this.autoPlay();
//     }
//     // 左右箭头
//     addEventSliderControl() {
//         this.sliderControl.onclick = (e) => {
//             e.e || window.event;
//             let target = e.target || e.srcElement;
//             if (target.className == "left") {
//                 this.index--;
//                 if (this.index == -1) {
//                     this.index = this.len - 1;
//                 }
//                 this.sliderNav.style.left = -(this.index * this.sliderNavItemWidth) + "px";
//             }
//             if (target.className == "right") {
//                 this.index++;
//                 if (this.index == this.len) {
//                     this.index = 0;
//                 }
//                 this.sliderNav.style.left = -(this.index * this.sliderNavItemWidth) + "px";
//             }
//             this.selectListItem(this.index);
//         }
//     }

//     addEventSliderList() {
//         let self = this;
//         let listItems = Array.from(this.sliderList.children);
//         listItems.forEach((item, idx) => {
//             item.onclick = function () {
//                 self.selectListItem(idx);
//                 self.index = idx;
//                 self.sliderNav.style.left = -(self.index * self.sliderNavItemWidth) + "px";
//             }
//         })
//     }

//     selectListItem(idx) {
//         let listItems = Array.from(this.sliderList.children);
//         listItems.forEach(item => item.classList.remove("active"));
//         listItems[idx].classList.add("active");
//     }

//     createUI() {
//         this.createSliderNav();
//         this.createSliderControl();
//         this.createSliderList();

//         this.slider = document.createElement("div");
//         this.slider.className = "slider";
//         this.slider.appendChild(this.sliderNav);
//         this.slider.appendChild(this.sliderControl);
//         this.slider.appendChild(this.sliderList);
//         document.bannercn.appendChild(this.slider);
//     }
//     //图片盒子
//     createSliderNav() {
//         this.sliderNav = document.createElement("ul");
//         this.sliderNav.className = "sliderNav";
//         this.sliderNav.innerHTML = this.data.map(item => `<li class="sliderNav-item"><img src="${item}"></li>`).join("");
//     }
//     // 左右箭头
//     createSliderControl() {
//         this.sliderControl = document.createElement("div");
//         this.sliderControl.className = "sliderControl";
//         this.sliderControl.innerHTML = `<span class="left">&lt;</span> <span class="right">&gt;</span>`;
//     }
//     // 豆豆
//     createSliderList() {
//         this.sliderList = document.createElement("ol");
//         this.sliderList.className = "sliderList";
//         this.sliderList.innerHTML = this.data.map((item, idx) => `<li class="sliderList ${idx == 0 ? "active" : ""}">${idx + 1}</li>
//             `).join("");
//     }
//     // setSliderItembackgroundColor() {
//     //     Array.from(this.sliderNav.children).forEach(item => item.style.background = this.getColor())
//     // }
//     // getColor() {
//     //     let r = parseInt(Math.random() * 256);
//     //     let g = parseInt(Math.random() * 256)
//     //     let b = parseInt(Math.random() * 256)
//     //     return `rgb(${r}, ${g}, ${b})`;
//     // }
// }

// let slider = new Slider(["../images/baner-gos.jpg", "../images/baner.jpg"])
// slider.init();