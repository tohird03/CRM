let appContent = document.querySelector(".app-content")
let elFormAddHomework = document.querySelector(".add__hometaskTeacher")
let elHomeworkAddBtn = document.querySelector(".homework")
let elBodyBgHomework = document.querySelector('.bg_modal');
let elInputHomeworkId = document.querySelector('.homeworkId');
const elSideBarList = document.querySelector(".nav-list")

appContent.addEventListener("click", e => {
    if(e.target.matches(".homework")){
        elInputHomeworkId.value = e.target.id
        elFormAddHomework.classList.remove("d-none")
        elBodyBgHomework.setAttribute('class', 'overlay')
    }
})

if(elBodyBgHomework){
  elBodyBgHomework.addEventListener('click', function() {
    elFormAddHomework.classList.add("d-none")
    elBodyBgHomework.setAttribute("class", "hidden__bg")
  })
}



// PAGE RELOAD

const elLinkHomework = document.querySelector("#Homeworks")
const elLinkGroups = document.querySelector("#Groups")

const elStudentHomeTask = document.querySelector(".student__home")
const elTeacherGroups = document.querySelector(".add_groups")

elSideBarList.addEventListener("click", e => {
  if(e.target.id == "Groups"){
      elStudentHomeTask.classList.add("d-none")
      elTeacherGroups.classList.remove("d-none")

      elLinkHomework.classList.remove("active")
      elLinkGroups.classList.add("active")
  } else if(e.target.id == "Homeworks") {
    elStudentHomeTask.classList.remove("d-none")
    elTeacherGroups.classList.add("d-none")

    elLinkHomework.classList.add("active")
    elLinkGroups.classList.remove("active")
  }
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

// NAVBAR EVENTS
const elNavbarGradeCard = document.querySelector(".navbar-mainbg")
const elGradeNotSent = document.querySelector(".grade__notsent")
const elGradeSent = document.querySelector(".grade__sent")

elNavbarGradeCard.addEventListener("click", e => {
  if(e.target.matches(".not__grade-sentNav")){
    elGradeNotSent.classList.remove("d-none")
    elGradeSent.classList.remove("d-block")

    elGradeNotSent.classList.add("d-block")
    elGradeSent.classList.add("d-none")
  }else if(e.target.matches(".grade__sentNav")){
    elGradeNotSent.classList.remove("d-block")
    elGradeSent.classList.remove("d-none")

    elGradeNotSent.classList.add("d-none")
    elGradeSent.classList.add("d-block")
  }
})