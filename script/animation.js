let product_img = document.getElementsByClassName("product_img");
let product_name = document.getElementsByClassName("product_name");

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
let header_title = document.querySelector(".header_title");
let strText = header_title.textContent;
let splitText = strText.split("").slice(13, 23);
header_title.textContent = ""
for (let i = 0; i < splitText.length; i++) {
  if (splitText[i] == ' '){
    splitText[i] = '&nbsp;'
  }
  header_title.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0
let timer = setInterval(onTick,50)

function onTick(){
  const span = header_title.querySelectorAll('span')[char]
  span.classList.add('fade')
  char++
  if (char == splitText.length){
    complete();
    return;
  }
}


function complete(){
  clearInterval(timer)
  timer = null
}