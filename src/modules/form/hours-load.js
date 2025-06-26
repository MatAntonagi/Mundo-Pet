import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"

const hours = document.getElementById("hour")

export function hoursLoad({date}){
    // limpa a lista de horários
    hours.innerHTML = ""

    // Cria um Placeholder para select.
    const placeholder = document.createElement("option")
    placeholder.textContent = "Selecione um horario"
    placeholder.disabled = true
    placeholder.selected = true
    placeholder.value = ""

    hours.append(placeholder)

    const opening = openingHours.map((hour) => {
        // Recupera as horas
        const [ scheduleHour ] = hour.split(":")

        // Adiciona a hora na data e verifica se está no passado.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())
        
        return {
            hour,
            available: isHourPast,
        }
    })

    // Renderiza os horarios.
    opening.forEach(({ hour, available}) => {
        const option = document.createElement("option")

        option.textContent = hour

        if (!available) {
            option.disabled = true;
        }

        hours.append(option)
    })
}