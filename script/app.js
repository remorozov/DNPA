const clientWidth = document.body.clientWidth;
var a_list = document.getElementsByTagName("a");
if (clientWidth > 1100) {
  window.onload = function () {
    history.pushState("", document.title, window.location.pathname);
    // к этому моменту страница загружена
    parallax.style.top = 0;
    parallax.style.left = 0;
    parallax.onwheel = function () {
      if (event.ctrlKey) {
        return false;
      }
      var scale = 1.0;
    };
  };
  new fullpage("#fullpage", {
    menu: "#menu",
    autoScrolling: true,
    scrollingSpeed: 1500,
    easing: "easeInOutCubic",
    anchors: ["a", "b", "c", "d", "e", "f", "g", "h"],
    onLeave: (origin, destination, direction) => {
      const section = destination.item;
      const title = section.getElementsByClassName("product_title")
      const advertising_text = section.getElementsByClassName(
        "advertising_text"
      )
      const advertising_autor = section.getElementsByClassName(
        "advertising_autor"
      );
      const contacts_menu = document.getElementsByClassName('contacts_menu')[0]
      const parallax = document.getElementById("parallax");
      const coords = parallax.getBoundingClientRect();
      const header_ul_li = document.getElementsByClassName('header_ul_li')
      // timelines
      const tl = new TimelineMax({ delay: 0.5 });
      const tl2 = new TimelineMax({ delay: 0.4 });
      const tl3 = new TimelineMax({ delay: 0.3 });
      const tl4 = new TimelineMax({ delay: 0.4 });
      // timer for FAQ
      const tl5 = new TimelineMax({delay:0.5});
      const tl6 = new TimelineMax({delay:0.6});
      const tl7 = new TimelineMax({delay:0.7});
      const tl8 = new TimelineMax({delay:0.8});
      const tl9 = new TimelineMax({delay:0.9});
      const tl10 = new TimelineMax({delay:1});
      const tl11 = new TimelineMax({delay:1.2});
      //   scroll
      // down
      if (destination.index == "0" && direction == "down") {

        tl3.fromTo(
          parallax,
          1,
          { y: "0" },
          { y: -(destination.index + 1) * 40 }
        );
      }
      if (destination.index == "1" && direction == "down") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
        );
      }
      if (destination.index == "2" && direction == "down") {

        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
        );
      }
      if (destination.index == "3" && direction == "down") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
        );
      }
      if (destination.index == "4" && direction == "down") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
        );
      }
      if (destination.index == "5" && direction == "down") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
        );
      }
      if (destination.index == "6" && direction == "down") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
        );
      }
      if (destination.index == "7" && direction == "down") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
        );
      }
      if (destination.index == "8" && direction == "down") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
        );
      }

      if (destination.index == "0" && direction == "up") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
        );
      }
      if (destination.index == "1" && direction == "up") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
        );
      }
      if (destination.index == "2" && direction == "up") {

        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
        );
      }
      if (destination.index == "3" && direction == "up") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
        );
      }
      if (destination.index == "4" && direction == "up") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
        );
      }
      if (destination.index == "5" && direction == "up") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
        );
      }
      if (destination.index == "6" && direction == "up") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
          );
        }
        if (destination.index == "7" && direction == "up") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
          );
      }
      if (destination.index == "8" && direction == "up") {
        tl3.fromTo(
          parallax,
          1,
          { y: coords.top },
          { y: -(destination.index + 1) * 40 }
          );
        }
        
        // animation for all pages
        
      if (destination.index === 0) {
        a_list[1].style.color = "rgb(190, 191, 195)";
        a_list[2].style.color = "rgb(190, 191, 195)";
        a_list[3].style.color = "rgb(190, 191, 195)";
        a_list[4].style.color = "rgb(190, 191, 195)";
        a_list[5].style.color = "rgb(190, 191, 195)";
        a_list[6].style.color = "rgb(190, 191, 195)";
        a_list[7].style.color = "rgb(190, 191, 195)";
        for (let n = 1; n <= 7; n++) {
          if (a_list[n].className == "header_button_active") {
            a_list[n].className = "header_button";
          }
        }
        tl.fromTo(contacts_menu, 0.5,{height: contacts_menu.style.height,width: contacts_menu.style.width},{height: 250,width:90})
        for (let a of header_ul_li){
          tl3.fromTo(a, 0.5, {opacity:0,y:150,scale:1.2},{opacity:1,y:0,scale:1})
        }
      }
      if (destination.index === 1) {
        const slider = document.getElementsByClassName("slider");
        a_list[1].style.color = "rgb(190, 191, 195)";
        a_list[2].style.color = "rgb(190, 191, 195)";
        a_list[3].style.color = "rgb(190, 191, 195)";
        a_list[4].style.color = "rgb(190, 191, 195)";
        a_list[5].style.color = "rgb(190, 191, 195)";
        a_list[6].style.color = "rgb(190, 191, 195)";
        a_list[7].style.color = "rgb(190, 191, 195)";
        for (let n = 1; n <= 7; n++) {
          if (a_list[n].className == "header_button_active") {
            a_list[n].className = "header_button";
          }
        }
        tl4.fromTo(
          slider,
          0.7,
          { scale: 1.4, opacity: 0, x: 500, y: 200 },
          { scale: 1, opacity: 1, x: 0, y: 0 }
          );
        tl.fromTo(
          advertising_text,
          0.4,
          { y: "300", opacity: 0 },
          { y: "0", opacity: 1 }
          );
        tl.fromTo(
          advertising_autor,
          0.3,
          { x: "300", opacity: 0 },
          { x: "0", opacity: 1 }
          );
          tl.fromTo(contacts_menu, 0.5,{height: contacts_menu.style.height,width: contacts_menu.style.width},{height: 250,width:90})
        
      }
      if (destination.index === 2) {
        const slider1 = document.getElementsByClassName("slider1");
        a_list[1].style.color = "white";
        a_list[1].className += "_active";
        a_list[2].style.color = "rgb(190, 191, 195)";
        a_list[3].style.color = "rgb(190, 191, 195)";
        a_list[4].style.color = "rgb(190, 191, 195)";
        a_list[5].style.color = "rgb(190, 191, 195)";
        a_list[6].style.color = "rgb(190, 191, 195)";
        a_list[7].style.color = "rgb(190, 191, 195)";
        for (let n = 2; n <= 7; n++) {
          if (a_list[n].className == "header_button_active") {
            a_list[n].className = "header_button";
          }
        }
        tl4.fromTo(
          slider1,
          1,
          { scale: 1.4, opacity: -0.5, x: -500, y: 500 },
          { scale: 1, opacity: 1, x: 0, y: 0 }
        );
        tl.fromTo(
          advertising_text,
          0.5,
          { y: "300", opacity: 0 },
          { y: "0", opacity: 1 }
          );
        tl.fromTo(
          advertising_autor,
          0.5,
          { x: "300", opacity: 0 },
          { x: "0", opacity: 1 }
        );
        tl.fromTo(contacts_menu, 0.5,{height: contacts_menu.style.height,width: contacts_menu.style.width},{height: 250,width:90})

      }
      if (destination.index === 3) {
        const services_item = document.getElementsByClassName("services_item");
        a_list[1].style.color = "rgb(190, 191, 195)";
        a_list[2].style.color = "white";
        a_list[2].className += "_active";
        a_list[3].style.color = "rgb(190, 191, 195)";
        a_list[4].style.color = "rgb(190, 191, 195)";
        a_list[5].style.color = "rgb(190, 191, 195)";
        a_list[6].style.color = "rgb(190, 191, 195)";
        a_list[7].style.color = "rgb(190, 191, 195)";
        for (let n = 1; n <= 7; n++) {
          if (n == 2) {
            n++;
          }
          if (a_list[n].className == "header_button_active") {
            a_list[n].className = "header_button";
          }
        }
        tl2.fromTo(
          services_item[0],
          0.5,
          { x: "-300", opacity: 0 },
          { x: "0", opacity: 1 }
        );
        tl2.fromTo(
          services_item[1],
          0.4,
          { x: "1300", opacity: 0 },
          { x: "0", opacity: 1 }
        );
        tl2.fromTo(
          services_item[2],
          0.4,
          { x: "-300", opacity: 0 },
          { x: "0", opacity: 1 }
        );
        tl.fromTo(contacts_menu, 0.5,{height: contacts_menu.style.height,width: contacts_menu.style.width},{height: 250,width:90})

      }
      if (destination.index === 4) {
        const slider2 = document.getElementsByClassName("slider2");
        a_list[1].style.color = "rgb(190, 191, 195)";
        a_list[2].style.color = "rgb(190, 191, 195)";
        a_list[3].style.color = "white";
        a_list[3].className += "_active";
        a_list[4].style.color = "rgb(190, 191, 195)";
        a_list[5].style.color = "rgb(190, 191, 195)";
        a_list[6].style.color = "rgb(190, 191, 195)";
        a_list[7].style.color = "rgb(190, 191, 195)";
        for (let n = 1; n <= 7; n++) {
          if (n == 3) {
            n++;
          }
          if (a_list[n].className == "header_button_active") {
            a_list[n].className = "header_button";
          }
        }
        tl4.fromTo(
          slider2,
          0.7,
          { scale: 1.4, opacity: 0, x: 500, y: 200 },
          { scale: 1, opacity: 1, x: 0, y: 0 }
        );
        tl.fromTo(
          advertising_text,
          0.4,
          { y: "300", opacity: 0 },
          { y: "0", opacity: 1 }
        );
        tl.fromTo(
          advertising_autor,
          0.3,
          { x: "300", opacity: 0 },
          { x: "0", opacity: 1 }
        );
        tl.fromTo(contacts_menu, 0.5,{height: contacts_menu.style.height,width: contacts_menu.style.width},{height: 250,width:90})

      }
      if (destination.index === 5) {
        const slider2 = document.getElementsByClassName("slider2");
        a_list[1].style.color = "rgb(190, 191, 195)";
        a_list[2].style.color = "rgb(190, 191, 195)";
        a_list[3].style.color = "rgb(190, 191, 195)";
        a_list[4].style.color = "white";
        a_list[4].className += "_active";
        a_list[5].style.color = "rgb(190, 191, 195)";
        a_list[6].style.color = "rgb(190, 191, 195)";
        a_list[7].style.color = "rgb(190, 191, 195)";
        for (let n = 1; n <= 7; n++) {
          if (n == 4) {
            n++;
          }
          if (a_list[n].className == "header_button_active") {
            a_list[n].className = "header_button";
          }
        }
        tl.fromTo(contacts_menu, 0.5,{height: contacts_menu.style.height,width: contacts_menu.style.width},{height: 250,width:90})

      }
      if (destination.index === 6) {
        const slider2 = document.getElementsByClassName("slider2")
        let question_item = document.getElementsByClassName('question_item')
        tl5.fromTo(question_item[0],0.5,{x:-650},{x:-40})
        tl6.fromTo(question_item[1],0.5,{x:-650},{x:-40})
        tl7.fromTo(question_item[2],0.5,{x:-650},{x:-40})
        tl8.fromTo(question_item[3],0.5,{x:-650},{x:-40})
        tl9.fromTo(question_item[4],0.5,{x:-650},{x:-40})
        tl10.fromTo(question_item[5],0.5,{x:-650},{x:-40})
        tl11.fromTo(question_item[6],0.5,{x:-650},{x:-40})
        
        
        a_list[1].style.color = "rgb(190, 191, 195)"
        a_list[2].style.color = "rgb(190, 191, 195)"
        a_list[3].style.color = "rgb(190, 191, 195)"
        a_list[4].style.color = "rgb(190, 191, 195)"
        a_list[5].style.color = "white"
        a_list[5].className += "_active"
        a_list[6].style.color = "rgb(190, 191, 195)"
        a_list[7].style.color = "rgb(190, 191, 195)"
        for (let n = 1; n <= 7; n++) {
          if (n == 5) {
            n++;
          }
          if (a_list[n].className == "header_button_active") {
            a_list[n].className = "header_button";
          }
        }
        tl.fromTo(contacts_menu, 0.5,{height: contacts_menu.style.height,width: contacts_menu.style.width},{height: 250,width:90})
      }
      if (destination.index === 7) {
        const slider2 = document.getElementsByClassName("slider2");
        a_list[1].style.color = "rgb(190, 191, 195)";
        a_list[2].style.color = "rgb(190, 191, 195)";
        a_list[3].style.color = "rgb(190, 191, 195)";
        a_list[4].style.color = "rgb(190, 191, 195)";
        a_list[5].style.color = "rgb(190, 191, 195)";
        a_list[6].style.color = "white";
        a_list[6].className += "_active";
        a_list[7].style.color = "rgb(190, 191, 195)";
        for (let n = 1; n <= 7; n++) {
          if (n == 6) {
            n++;
          }
          if (a_list[n].className == "header_button_active") {
            a_list[n].className = "header_button";
          }
        }
        tl4.fromTo(contacts_menu, 1, {x:0},{width:'50%',height: '80%',})
      }
      a_list[1].addEventListener("click", function () {
        parallax.style.position.top == "-500px";
      });
    },
  });
}
