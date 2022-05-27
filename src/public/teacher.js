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
