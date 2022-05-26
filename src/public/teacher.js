let appContent = document.querySelector(".app-content")
let elFormAddHomework = document.querySelector(".form__change-homework")
let elHomeworkAddBtn = document.querySelector(".homework")
let elBodyBgHomework = document.querySelector('.hidden__homework');
let elInputHomeworkId = document.querySelector('.homeworkId');

appContent.addEventListener("click", e => {
    if(e.target.matches(".homework")){
        elInputHomeworkId.value = e.target.id
        elFormAddHomework.classList.remove("d-none")
        elBodyBgHomework.setAttribute('class', 'overlay')
    }
})

elBodyBgHomework.addEventListener('click', function() {
  elFormAddHomework.classList.add("d-none")
  elBodyBgHomework.setAttribute("class", "hidden__bg")
})