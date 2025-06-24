import dayjs from "dayjs"

const main = document.querySelector("main")
const formContainer = document.querySelector(".form-container")
const form = document.querySelector("form")
const closeBtn = document.getElementById("btn-close")
const selectedDate = document.getElementById("date-form")
const selectedHour = document.querySelector("#hour")


// Carrega a data atual.
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

// Define a data minima como sendo a data atual.
selectedDate.min = dayjs(new Date()).format("YYYY-MM-DD")

// Carrega a proxima hora.
const nextHour = dayjs().add(1, "hour").minute(0).second(0) 
selectedHour.value = nextHour.format("HH:mm")

// Fecha o Form.
closeBtn.addEventListener("click", () =>{
    if(!formContainer.classList.contains("disappear")){
        formContainer.classList.add("disappear"),
        main.classList.remove("blur")
    }
})

form.onsubmit = (event) => {
    // Previne o comportamento padrão de carregamento.
    event.preventDefault()

}