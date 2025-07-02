import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"
import { hoursLoad } from "../form/hours-load.js"
import dayjs from "dayjs"
import { scheduleShow } from "../schedules/show.js"

// Seleciona o input de data.
const selectedDate = document.getElementById("date-form")

export async function schedulesDay() {
    // obtem a data do input
    const date = selectedDate.value
    
    // Busca na API os agendamentos.
    const dailySchedules = await scheduleFetchByDay({ date })

    // Renderiza as horas disponiveis.
    hoursLoad({ date })
}

const dateInput = document.getElementById("date-schedule")
// Define valor inicial como hoje
dateInput.value = dayjs().format("YYYY-MM-DD")

// Executa a função quando o usuário altera a data
dateInput.addEventListener("change", schedules)

// Mostra automaticamente o dia atual ao abrir a pag.
schedules()

export async function schedules() {
    // obtem a data do input de schedule.
    const date = dateInput.value

    // Busca na API os agendamentos.
    const dailySchedules = await scheduleFetchByDay({ date })
    // Exibe os agendamentos
    scheduleShow({ dailySchedules })
}