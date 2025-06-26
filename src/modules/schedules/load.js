import { hoursLoad } from "../form/hours-load.js"

// Seleciona o input de data.
const selectedDate = document.getElementById("date-form")

export function schedulesDay() {
    // obtem a data do input
    const date = selectedDate.value

    // Renderiza as horas disponiveis.
    hoursLoad({ date })
}