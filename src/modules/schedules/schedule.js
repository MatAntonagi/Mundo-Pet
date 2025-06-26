import dayjs from "dayjs";

const body = document.querySelector("body")
const scheduleContainer = document.querySelector(".schedule-container")
const selectedDate = document.getElementById("date-schedule")
const newScheduleBTN = document.getElementById("new-schedule-btn")
const formContainer = document.querySelector(".form-container")
const nameTutor = document.getElementById("responsible-name")

// Captura o evento de click no botao do main e abre form de novo agendamento com foco no primeiro input e add blur no main
newScheduleBTN.addEventListener("click", () => {
    if(formContainer.classList.contains("disappear")) {
        formContainer.classList.remove("disappear"),
        scheduleContainer.classList.add("blur")
        body.classList.add("no-scroll")
        nameTutor.focus()
    }
})

// Carrega a data atual para o input de data.
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

// Recupera os periodos de atendimentos.
const morning = document.getElementById("morning")
const afternoon = document.getElementById("afternoon")
const evening = document.getElementById("evening")

// Cria funçao para exibir aviso caso não tenha agendamentos.
function scheduleMessage(container){
    //cria a UL
    const ul = document.createElement("ul")
    ul.classList.add("period")
    // Cria LI
    const li = document.createElement("li")
    //Cria Strong
    const strong = document.createElement("strong")
    strong.textContent = "Não há agendamentos para esse período!"

    // monta a estrutura
    li.appendChild(strong)
    ul.appendChild(li)
    container.appendChild(ul)
}

// Caso o periodo não tenha nem um agendamento aparece um aviso.
const periods = [morning, afternoon, evening]

periods.forEach(period => {
    if(!period.querySelector("ul")){
        scheduleMessage(period)
    }
})