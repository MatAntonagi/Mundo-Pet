import { schedules } from "../schedules/load"

// seleciona o input de data
const dateInput = document.getElementById("date-schedule")

// Recupera a lista de horários quando o dia mudar.
dateInput.onchange = () => schedules()