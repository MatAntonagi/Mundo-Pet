import dayjs from "dayjs";

const main = document.querySelector("main")
const selectedDate = document.getElementById("date-schedule")
const newScheduleBTN = document.getElementById("new-schedule-btn")
const formContainer = document.querySelector(".form-container")
const nameTutor = document.getElementById("responsible-name")

// Captura o evento de click no botao do main e abre form de novo agendamento com foco no primeiro input e add blur no main
newScheduleBTN.addEventListener("click", () => {
    if(formContainer.classList.contains("disappear")) {
        formContainer.classList.remove("disappear"),
        main.classList.add("blur")
        nameTutor.focus()
    }
})

selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")