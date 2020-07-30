
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
let swiper_slide = document.getElementsByClassName('swiper-slide')
let pop_up = document.getElementById('pop_up')
let pop_up_close = document.getElementsByClassName('pop_up_close')[0]
pop_up_close.addEventListener('click',function(){
  pop_up.hidden = true
})
pop_up.hidden = true

for (let a of swiper_slide){
  a.addEventListener('click',function(){
    pop_up.style.opacity = '1'
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
let question_answer_answer = document.getElementsByClassName('question_answer_answer')[0]
let question_answer = document.getElementsByClassName('question_answer')[0]
for (let a = 0; a < question_item.length;a++){
  question_item[a].addEventListener('mouseover', function(){
    question_answer.style.opacity = '1'
    question_answer_answer.innerHTML = answers[a]
  })
  question_item[a].addEventListener('mouseout', function(){
    question_answer.style.opacity = '0'
    question_answer_answer.innerHTML = ""
  })
}

