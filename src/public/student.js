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
        elLinkStudent
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
