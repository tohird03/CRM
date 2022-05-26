//ADD BTNS
const elAddTeachers = document.querySelector(".add_teachers")
const elAddStudent = document.querySelector(".add_student")
const elAddGroups = document.querySelector(".add_groups")
const elAddCourses = document.querySelector(".add_courses")

const elLinkTeachers = document.querySelector("#Teachers")
const elLinkStudent = document.querySelector("#Student")
const elLinkGroups = document.querySelector("#Groups")
const elLinkCourses = document.querySelector("#Courses")

const elSideBarList = document.querySelector(".nav-list")

elSideBarList.addEventListener("click", e => {
  if(e.target.matches(".sideBar_btn")){
    if(e.target.id == "Teachers"){
      elLinkTeachers.classList.add("active")
      elLinkStudent.classList.remove("active")
      elLinkGroups.classList.remove("active")
      elLinkCourses.classList.remove("active")

      elAddTeachers.classList.remove("d-none")
      elAddStudent.classList.remove("d-block")
      elAddGroups.classList.remove("d-block")
      elAddCourses.classList.remove("d-block")

      elAddTeachers.classList.add("d-block")
      elAddStudent.classList.add("d-none")
      elAddGroups.classList.add("d-none")
      elAddCourses.classList.add("d-none")

    }
    if(e.target.id == "Student"){
      elLinkTeachers.classList.remove("active")
      elLinkStudent.classList.add("active")
      elLinkGroups.classList.remove("active")
      elLinkCourses.classList.remove("active")

      elAddTeachers.classList.remove("d-block")
      elAddStudent.classList.remove("d-none")
      elAddGroups.classList.remove("d-block")
      elAddCourses.classList.remove("d-block")

      elAddTeachers.classList.add("d-none")
      elAddStudent.classList.add("d-block")
      elAddGroups.classList.add("d-none")
      elAddCourses.classList.add("d-none")
    }
    if(e.target.id == "Groups"){
      elLinkTeachers.classList.remove("active")
      elLinkStudent.classList.remove("active")
      elLinkGroups.classList.add("active")
      elLinkCourses.classList.remove("active")

      elAddTeachers.classList.remove("d-block")
      elAddStudent.classList.remove("d-block")
      elAddGroups.classList.remove("d-none")
      elAddCourses.classList.remove("d-block")

      elAddTeachers.classList.add("d-none")
      elAddStudent.classList.add("d-none")
      elAddGroups.classList.add("d-block")
      elAddCourses.classList.add("d-none")
    }
    if(e.target.id == "Courses"){
      elLinkTeachers.classList.remove("active")
      elLinkStudent.classList.remove("active")
      elLinkGroups.classList.remove("active")
      elLinkCourses.classList.add("active")

      elAddTeachers.classList.remove("d-block")
      elAddStudent.classList.remove("d-block")
      elAddGroups.classList.remove("d-block")
      elAddCourses.classList.remove("d-none")

      elAddTeachers.classList.add("d-none")
      elAddStudent.classList.add("d-none")
      elAddGroups.classList.add("d-none")
      elAddCourses.classList.add("d-block")
    }
  }
})


//MODAl
let elFormChangeTeacher = document.querySelector(".form__change-teacher")
let elTeacherAddBtn = document.querySelector(".teacher__addBtn")

let elFormChangeTables = document.querySelector(".form__change-courses")
let elCoursesAddBtn = document.querySelector(".courses__addBtn")

let elFormChangeGroups = document.querySelector(".form__change-groups")
let elGroupsAddBtn = document.querySelector(".groups__addBtn")

let elFormChangStudent = document.querySelector(".form__change-student")
let elStudentAddBtn = document.querySelector(".student__addBtn")


let elBodyBgTeacher = document.querySelector('.hidden__teacher');
let elBodyBgGroups = document.querySelector('.hidden__groups');
let elBodyBgCourses = document.querySelector('.hidden__courses');
let elBodyBgStudent = document.querySelector('.hidden__student');

elTeacherAddBtn.addEventListener("click", e => {
  elFormChangeTeacher.classList.remove("d-none")
  elBodyBgTeacher.setAttribute('class', 'overlay')
})
elCoursesAddBtn.addEventListener("click", e => {
  elFormChangeTables.classList.remove("d-none")
  elBodyBgCourses.setAttribute('class', 'overlay')
})
elStudentAddBtn.addEventListener("click", e => {
  elFormChangStudent.classList.remove("d-none")
  elBodyBgStudent.setAttribute('class', 'overlay')
})
elGroupsAddBtn.addEventListener("click", e => {
  elFormChangeGroups.classList.remove("d-none")
  elBodyBgGroups.setAttribute('class', 'overlay')
})

elBodyBgTeacher.addEventListener('click', function() {
  elFormChangeTeacher.classList.add("d-none")
  elBodyBgTeacher.setAttribute("class", "hidden__bg")
})
elBodyBgCourses.addEventListener('click', function() {
  elFormChangeTables.classList.add("d-none")
  elBodyBgCourses.setAttribute("class", "hidden__bg")
})
elBodyBgGroups.addEventListener('click', function() {
  elFormChangeGroups.classList.add("d-none")
  elBodyBgGroups.setAttribute("class", "hidden__bg")
})
elBodyBgStudent.addEventListener('click', function() {
  elFormChangStudent.classList.add("d-none")
  elBodyBgStudent.setAttribute("class", "hidden__bg")
})
