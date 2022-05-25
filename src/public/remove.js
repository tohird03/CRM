const elAddTeachBtn = document.querySelector(".add_teachers")
const elAddStudentBtn = document.querySelector(".add_student")
const elAddGroupsBtn = document.querySelector(".add_groups")
const elAddCoursesBtn = document.querySelector(".add_courses")

elAddTeachBtn.addEventListener("click", e => {
    if(e.target.matches(".remove")){
        fetch(`http://localhost:9000/teacher/${e.target.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: e.target.id
            })
        })
        .then(res => res.json())
        .then(data => {
            window.location.reload(true)
        })
    }
})
elAddStudentBtn.addEventListener("click", e => {
    if(e.target.matches(".remove")){
        fetch(`http://localhost:9000/student/${e.target.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: e.target.id
            })
        })
        .then(res => res.json())
        .then(data => {
            window.location.reload(true)
        })
    }
})
elAddGroupsBtn.addEventListener("click", e => {
    if(e.target.matches(".remove")){
        fetch(`http://localhost:9000/group/${e.target.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: e.target.id
            })
        })
        .then(res => res.json())
        .then(data => {
            window.location.reload(true)
        })
    }
})
elAddCoursesBtn.addEventListener("click", e => {
    if(e.target.matches(".remove")){
        fetch(`http://localhost:9000/course/${e.target.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: e.target.id
            })
        })
        .then(res => res.json())
        .then(data => {
            window.location.reload(true)
        })
    }
})