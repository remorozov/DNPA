
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

let swiper_slide = document.getElementsByClassName('swiper-slide')
let pop_up = document.getElementById('pop_up')
let pop_up_close = document.getElementsByClassName('pop_up_close')[0]
pop_up_close.addEventListener('click',function(){
  pop_up.hidden = true
})
pop_up.hidden = true

for (let a of swiper_slide){
  a.addEventListener('click',function(){
    pop_up.hidden = false
  })
}

// FAQ

let answers = [
  "Основной способ нанесения печати на упаковку для нашего предприятия – флексопечать. Фотополимерное клише (фотополимерная флексоформа) – производится из светочувствительного фотополимера с помощью лазерной гравировки и позволяет получить качественный оттиск Вашего дизайна на гибкой упаковке.",
  "В зависимости от сложности упаковки минимальный заказ от 300кг до 500кг. В случае комплексного заказа (несколько видов продукции) – минимальный тираж считается на печатную сборку. Наши специалисты смогут точнее ответить после обсуждения подробностей Вашего заказа.",
  "Стоимость зависит от многих параметров: геометрических размеров, барьерных свойств упаковки, сложности и красочности дизайна, тиража продукции. Наши специалисты подберут оптимальное решение.",
  "Стандартный срок изготовления 14 календарных дней со дня согласования макета для Вашей продукции. Для повторных тиражей – сроки по согласованию, в зависимости от загрузки производственных мощностей."
]
let question_item = document.getElementsByClassName('question_item')
console.log(question_item)
let question_answer_answer = document.getElementsByClassName('question_answer_answer')[0]
console.log(question_answer_answer)


for (let a = 0; a < question_item.length;a++){
  question_item[a].addEventListener('mouseover', function(){
    question_answer_answer.innerHTML = answers[a]
  })
  question_item[a].addEventListener('mouseout', function(){
    question_answer_answer.innerHTML = ""
  })
}

