import { schedulesDay } from "../schedules/load"

// seleciona o input de data do form
const selectedDate = document.getElementById("date-form")

// Recupera a lista de horários quando o dia mudar.
selectedDate.onchange = () => schedulesDay()