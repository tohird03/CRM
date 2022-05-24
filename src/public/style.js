//NAVBAR JS
document.querySelector(".jsFilter").addEventListener("click", function () {
  document.querySelector(".filter-menu").classList.toggle("active");
});

document.querySelector(".grid").addEventListener("click", function () {
  document.querySelector(".list").classList.remove("active");
  document.querySelector(".grid").classList.add("active");
  document.querySelector(".products-area-wrapper").classList.add("gridView");
  document
    .querySelector(".products-area-wrapper")
    .classList.remove("tableView");
});

document.querySelector(".list").addEventListener("click", function () {
  document.querySelector(".list").classList.add("active");
  document.querySelector(".grid").classList.remove("active");
  document.querySelector(".products-area-wrapper").classList.remove("gridView");
  document.querySelector(".products-area-wrapper").classList.add("tableView");
});

var modeSwitch = document.querySelector('.mode-switch');
modeSwitch.addEventListener('click', function () {                                        document.documentElement.classList.toggle('light');
 modeSwitch.classList.toggle('active');
});

//ADD BTNS
const elAddTeachers = document.querySelector(".add_teachers")
const elAddStudent = document.querySelector(".add_student")
const elAddGroups = document.querySelector(".add_groups")
const elAddCourses = document.querySelector(".add_courses")

const elLinkTeachers = document.querySelector("#Teachers")
const elLinkStudent = document.querySelector("#Student")
const elLinkGroups = document.querySelector("#Groups")
const elLinkCourses = document.querySelector("#Courses")

const elSideBarList = document.querySelector(".sidebar-list")

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