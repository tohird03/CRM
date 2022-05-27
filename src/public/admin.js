const ellAppContent = document.querySelector(".app__graoupContent")
const elGroupsIdAdd = document.querySelector(".groupsIdAdd")
let elFormAddHomework = document.querySelector(".form__change-teacherAdd")
let elBodyBgHomework = document.querySelector('.hidden_notTeacher');

ellAppContent.addEventListener("click", e => {
    if(e.target.matches(".not_teacher")) {
        elGroupsIdAdd.value = e.target.id
        elFormAddHomework.classList.remove("d-none")
        elBodyBgHomework.setAttribute('class', 'overlay')
    }
})

elBodyBgHomework.addEventListener('click', function() {
    elFormAddHomework.classList.add("d-none")
    elBodyBgHomework.setAttribute("class", "hidden__bg")
})