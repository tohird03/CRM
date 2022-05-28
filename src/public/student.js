const elStudent = document.querySelector(".student")
const elStudentHomewrok = document.querySelector(".homework_student")
const elLinkHomework = document.querySelector("#Homework")
const elLinkStudent = document.querySelector("#Student")
const elSideBarList = document.querySelector(".nav-list")

elSideBarList.addEventListener("click", e => {
    if(e.target.id == "Student"){
        elStudentHomewrok.classList.add("d-none")
        elStudent.classList.remove("d-none")

        elLinkHomework.classList.remove("active")
        elLinkStudent.classList.add("active")
    } else if(e.target.id == "Homework") {
        elStudentHomewrok.classList.remove("d-none")
        elStudent.classList.add("d-none")

        elLinkStudent.classList.remove("active")
        elLinkHomework.classList.add("active")
    }
})

let appContent = document.querySelector(".homework_student-Add")
let elFormAddHomework = document.querySelector(".form__change-homework")
let elHomeworkAddBtn = document.querySelector(".homework")
let elBodyBgHomework = document.querySelector('.hidden__homework');
let elInputHomeworkId = document.querySelector('.homeworkId');

appContent?.addEventListener("click", e => {
    if(e.target.matches(".homework")){
        elInputHomeworkId.value = e.target.id
        elFormAddHomework.classList.remove("d-none")
        elBodyBgHomework.setAttribute('class', 'overlay')
    }
})

elBodyBgHomework?.addEventListener('click', function() {
  elFormAddHomework.classList.add("d-none")
  elBodyBgHomework.setAttribute("class", "hidden__bg")
})

// ---------Responsive-navbar-active-animation-----------
function test() {
    var tabsNewAnim = $("#navbarSupportedContent");
    var selectorNewAnim = $("#navbarSupportedContent").find("li").length - 3;
    var activeItemNewAnim = tabsNewAnim.find(".active");
    var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
    var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
    var itemPosNewAnimTop = activeItemNewAnim.position();
    var itemPosNewAnimLeft = activeItemNewAnim.position();
    $(".hori-selector").css({
      top: itemPosNewAnimTop.top + "px",
      left: itemPosNewAnimLeft.left + "px",
      height: activeWidthNewAnimHeight + "px",
      width: activeWidthNewAnimWidth + "px"
    });
    $("#navbarSupportedContent").on("click", "li", function (e) {
      $("#navbarSupportedContent ul li").removeClass("active");
      $(this).addClass("active");
      var activeWidthNewAnimHeight = $(this).innerHeight();
      var activeWidthNewAnimWidth = $(this).innerWidth();
      var itemPosNewAnimTop = $(this).position();
      var itemPosNewAnimLeft = $(this).position();
      $(".hori-selector").css({
        top: itemPosNewAnimTop.top + "px",
        left: itemPosNewAnimLeft.left + 10 + "px",
        height: activeWidthNewAnimHeight + "px",
        width: activeWidthNewAnimWidth + "px"
      });
    });
  }
  $(document).ready(function () {
    setTimeout(function () {
      test();
    });
  });
  $(window).on("resize", function () {
    setTimeout(function () {
      test();
    });
  });
  $(".navbar-toggler").click(function () {
    $(".navbar-collapse").slideToggle(300);
    setTimeout(function () {
      test();
    });
  });

  // --------------add active class-on another-page move----------
  jQuery(document).ready(function ($) {
    // Get current path and find target link
    var path = window.location.pathname.split("/").pop();

    // Account for home page with empty path
    if (path == "") {
      path = "index.html";
    }

    var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
    // Add active class to target link
    target.parent().addClass("active");
});

const elNavbarTop = document.querySelector(".navbar-expand-custom")
const elNotSent = document.querySelector(".not__sent")
const elSent = document.querySelector(".sent")
const elAllHomework = document.querySelector(".all__homework")
const elAllgrade = document.querySelector(".student__all-grade")

elNavbarTop.addEventListener("click", e => {
    if(e.target.matches(".notsend__homework-nav")){
        elNotSent.classList.remove("d-none")
        elSent.classList.remove("d-block")
        elAllHomework.classList.remove("d-block")
        elAllgrade.classList.remove("d-block")

        elNotSent.classList.add("d-block")
        elSent.classList.add("d-none")
        elAllHomework.classList.add("d-none")
        elAllgrade.classList.add("d-none")
    }else if(e.target.matches(".send__homework-nav")){
        elNotSent.classList.remove("d-block")
        elSent.classList.remove("d-none")
        elAllHomework.classList.remove("d-block")
        elAllgrade.classList.remove("d-block")

        elNotSent.classList.add("d-none")
        elSent.classList.add("d-block")
        elAllHomework.classList.add("d-none")
        elAllgrade.classList.add("d-none")
    }else if(e.target.matches(".all__homework-nav")){
        elNotSent.classList.remove("d-block")
        elSent.classList.remove("d-block")
        elAllHomework.classList.remove("d-none")
        elAllgrade.classList.remove("d-block")

        elNotSent.classList.add("d-none")
        elSent.classList.add("d-none")
        elAllHomework.classList.add("d-block")
        elAllgrade.classList.add("d-none")
    }else if(e.target.matches(".grade__nav")){
        elNotSent.classList.remove("d-block")
        elSent.classList.remove("d-block")
        elAllHomework.classList.remove("d-block")
        elAllgrade.classList.remove("d-none")

        elNotSent.classList.add("d-none")
        elSent.classList.add("d-none")
        elAllHomework.classList.add("d-none")
        elAllgrade.classList.add("d-block")
    }
})