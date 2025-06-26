import dayjs from "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"

const body = document.querySelector("body")
const scheduleContainer = document.querySelector(".schedule-container")
const formContainer = document.querySelector(".form-container")
const form = document.querySelector("form")
const closeBtn = document.getElementById("btn-close")
const selectedDate = document.getElementById("date-form")
const clientName = document.getElementById("responsible-name")
const petName = document.getElementById("pet-name")
const numberPhone = document.getElementById("phone")
const description = document.getElementById("description")
const hourSelect = document.querySelector("select")

// Data atual para carregar o input.
const inputToday = dayjs(new Date()).format("YYYY-MM-DD")


// Carrega a data atual e Define a data minima como sendo a data atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

// Fecha o Form no icone "X".
closeBtn.addEventListener("click", () =>{
    if(!formContainer.classList.contains("disappear")){
        formContainer.classList.add("disappear"),
        scheduleContainer.classList.remove("blur")
        body.classList.remove("no-scroll")
    }
})

form.onsubmit = async (event) => {
    // Previne o comportamento padrão de carregamento.
    event.preventDefault()

    try {
        // Recupera o nome do cliente
        const name = clientName.value.trim()
        if(!name) {
            return alert("Informe o nome do tutor.")
        }

        // Recupera o nome do pet
        const pet = petName.value.trim()
        if(!pet) {
            return alert("Informe o nome do Pet")
        }

        const phone = numberPhone.value
        if(!phone){
            return alert("Insira um contato.")
        }

        const detail = description.value
        if(!detail){
            return alert("Insira a descrição do serviço.")
        }

        // Recupera o horario
        const selectedValue = hourSelect.value;
        const selectedOptionHour = hourSelect.options[hourSelect.selectedIndex];
        if(!selectedValue){
            return alert("Selecione a hora desejada.")
        }

        // Recupera somente a hora
        const [hour] = selectedOptionHour.innerText.split(":")

        // Insere a hora na data
        const when = dayjs(selectedDate.value).add(hour, "hour")

        // Gera um id
        const id = new Date().getTime().toString()
        
        await scheduleNew({
            name,
            pet,
            phone,
            detail,
            when,
            id
        })


    } catch (error) {
        alert("Não foi possivel realizar o agendamento.")
    }
}