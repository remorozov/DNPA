// contacts tg vb whts

let social = document.getElementsByClassName("contacts_menu_img");
for (let a of social) {
    a.addEventListener("mouseover", function() {
        a.className = "animate__animated animate__heartBeat animate__infinite";
    });
    a.addEventListener("mouseout", function() {
        a.className = "";
    });
}
let product_item = document.getElementsByClassName("product_item");
let pop_up = document.getElementById("pop_up");
let pop_up_close = document.getElementsByClassName("pop_up_close")[0];
pop_up_close.addEventListener("click", function() {
    pop_up.hidden = true;
});
pop_up.hidden = true;

for (let a of product_item) {
    a.addEventListener("dblclick", function() {
        pop_up.style.opacity = "1";
        pop_up.hidden = false;
    });
}

// FAQ

let answers = [
    "Основной способ нанесения печати на упаковку для нашего предприятия – флексопечать. <br><br>Фотополимерное клише (фотополимерная флексоформа) – производится из светочувствительного фотополимера с помощью лазерной гравировки и позволяет получить качественный оттиск Вашего дизайна на гибкой упаковке.",
    "В зависимости от сложности упаковки минимальный заказ от 300кг до 500кг. <br><br>В случае комплексного заказа (несколько видов продукции) – минимальный тираж считается на печатную сборку. Наши специалисты смогут точнее ответить после обсуждения подробностей Вашего заказа.",
    "Стоимость зависит от многих параметров: геометрических размеров, барьерных свойств упаковки, сложности и красочности дизайна, тиража продукции. Наши специалисты подберут оптимальное решение.",
    "Стандартный срок изготовления 14 календарных дней со дня согласования макета для Вашей продукции. Для повторных тиражей – сроки по согласованию, в зависимости от загрузки производственных мощностей.",
];
let question_item = document.getElementsByClassName("question_item");
let question_answer_answer = document.getElementsByClassName(
    "question_answer_answer"
)[0];
let question_answer = document.getElementsByClassName("question_answer")[0];
for (let a = 0; a < question_item.length; a++) {
    question_item[a].addEventListener("mouseover", function() {
        question_answer.style.opacity = "1";
        question_answer_answer.innerHTML = answers[a];
    });
    question_item[a].addEventListener("mouseout", function() {
        question_answer.style.opacity = "0";
        question_answer_answer.innerHTML = "";
    });
}

// scroll off FAQ




// filter for product
let product_filter = document.getElementsByClassName('product_filter')[0]
let product_row_item = document.getElementsByClassName('product_row_item')
for (let a of product_row_item){
    a.addEventListener('mouseover',function(){
        a.style.zIndex = '4'
        product_filter.style.zIndex = '3'
        product_filter.style.opacity = '0.5'
    })
    a.addEventListener('mouseout',function(){
        a.style.zIndex = '2'
        product_filter.style.zIndex = '1'
        product_filter.style.opacity = '0'
    })
}