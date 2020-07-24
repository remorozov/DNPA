let product_img = document.getElementsByClassName("product_img");
let product_name = document.getElementsByClassName("product_name");
var images = ['goods1.jpg', 'goods2.jpg'];
product_name[0].addEventListener("mouseover", function () {
  product_img[0].style.transform = "scale(1.3)";
  product_img[0].style.transition = ".3s ease-in-out";
});
product_name[0].addEventListener("mouseout", function () {
  product_img[0].style.transform = "scale(1)";
  product_img[0].style.transition = ".3s ease-in-out";
});

product_name[1].addEventListener("mouseover", function () {
  product_img[1].style.transform = "scale(1)";
  product_img[1].style.transition = ".3s ease-in-out";
});
product_name[1].addEventListener("mouseout", function () {
  product_img[1].style.transform = "scale(1.5)";
  product_img[1].style.transition = ".3s ease-in-out";
});

product_name[2].addEventListener("mouseover", function () {
  product_img[2].style.transform = "scale(1)";
  product_img[2].style.transform = "rotate(0)";
  product_img[2].style.transition = ".3s ease-in-out";
});
product_name[2].addEventListener("mouseout", function () {
  product_img[2].style.transform = "scale(1.5) rotate(15deg)";
  product_img[2].style.transition = ".3s ease-in-out";
});

product_name[3].addEventListener("mouseover", function () {
  product_img[3].style.filter = "grayscale(0%)";
  product_img[3].style.transition = ".3s ease-in-out";
});
product_name[3].addEventListener("mouseout", function () {
  product_img[3].style.filter = "grayscale(100%)";
  product_img[3].style.transition = ".3s ease-in-out";
});

product_name[4].addEventListener("mouseover", function () {
  product_img[4].style.opacity = "0.5";
  product_img[4].style.transition = ".3s ease-in-out";
});
product_name[4].addEventListener("mouseout", function () {
  product_img[4].style.opacity = "0.8";
  product_img[4].style.transition = ".3s ease-in-out";
});

product_name[5].addEventListener("mouseover", function () {
  product_img[5].style.opacity = "0.7";
  product_img[5].style.transition = ".3s ease-in-out";
});
product_name[5].addEventListener("mouseout", function () {
  product_img[5].style.opacity = "1";
  product_img[5].style.transition = ".3s ease-in-out";
});

// contacts tg vb whts

let social = document.getElementsByClassName("contacts_menu_img");
for (let a of social) {
  a.addEventListener("mouseover", function () {
    a.className = "animate__animated animate__heartBeat animate__infinite";
  });
  a.addEventListener("mouseout", function () {
    a.className = "";
  });
}

// header animation
let product_title = document.querySelectorAll(".product_title");

let strText = [];
for (let i = 0; i < product_title.length; i++) {
  strText.push(product_title[i].textContent);
}

for (let i of strText) {
  let str = i;
  for (let a of str) {
    if (a == " ") {
      a = "&nbsp;";
    }
  }
}

let splitText = [];
for (let a = 0; a < strText.length; a++) {
  if (a == 0) {
    splitText.push(strText[a].split("").slice(13, 23));
  }
  if (a == 1) {
    splitText.push(strText[a].split(""));
  }
  if (a == 2) {
    splitText.push(strText[a].split("").slice(13, 54));
  }
  if (a == 3) {
    splitText.push(strText[a].split("").slice(13, 106));
  }
  if (a == 4) {
    splitText.push(strText[a].split(""));
  }
}
splitText[3].splice(66, 12);
for (let a of product_title) {
  a.textContent = "";
}
// let splitText = strText.split("").slice(13, 23);
// header_title.textContent = ""
for (let n = 0; n < product_title.length; n++) {
  
    for (let char of splitText[n]){
      if (char == ' '){
         char = '&nbsp;'
      }
      product_title[n].innerHTML += '<span>'+char+'</span>'
    }
  
}
let char = 0;
let char1 = 0;
let char2 = 0;
let char3 = 0;
let char4 = 0;

let timer = setInterval(function(){onTick(0)}, 50);
let timer1 = setInterval(function(){onTick1(1)}, 50);
let timer2 = setInterval(function(){onTick2(2)}, 50);
let timer3 = setInterval(function(){onTick3(3)}, 50);
let timer4 = setInterval(function(){onTick4(4)}, 50);





function onTick(a) {
  
  const span = product_title[a].querySelectorAll("span")[char];
  span.classList.add("fade");
  char++;
  if (char == splitText[a].length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval();
  timer = null;
}


function onTick1(a) {
  
  const span = product_title[a].querySelectorAll("span")[char1];
  span.classList.add("fade");
  char1++;
  if (char1 == splitText[a].length) {
    complete1();
    return;
  }
}

function complete1() {
  clearInterval();
  timer1 = null;
}

function onTick2(a) {
  
  const span = product_title[a].querySelectorAll("span")[char2];
  span.classList.add("fade");
  char2++;
  if (char2 == splitText[a].length) {
    complete2();
    return;
  }
}

function complete2() {
  clearInterval();
  timer2 = null;
}

function onTick3(a) {
  
  const span = product_title[a].querySelectorAll("span")[char3];
  span.classList.add("fade");
  char3++;
  if (char3 == splitText[a].length) {
    complete3();
    return;
  }
}

function complete3() {
  clearInterval();
  timer3 = null;
}

function onTick4(a) {
  
  const span = product_title[a].querySelectorAll("span")[char4];
  span.classList.add("fade");
  char4++;
  if (char4 == splitText[a].length) {
    complete4();
    return;
  }
}

function complete4() {
  clearInterval();
  timer4 = null;
}

