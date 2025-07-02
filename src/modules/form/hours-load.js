import dayjs from "dayjs"

import { openingHours } from "../../utils/opening-hours.js"
import { scheduleFetchByDay } from "../../services/schedule-fetch-by-day.js"

const hours = document.getElementById("hour")

export async function hoursLoad({date}){
    // limpa a lista de horários
    hours.innerHTML = ""

    // Cria um Placeholder para select.
    const placeholder = document.createElement("option")
    placeholder.textContent = "Selecione um horario"
    placeholder.disabled = true
    placeholder.selected = true
    placeholder.value = ""

    hours.append(placeholder)

    const dailySchedules = await scheduleFetchByDay({ date })

    const opening = openingHours.map((hour) => {
        // Recupera as horas
        const [ scheduleHour ] = hour.split(":")

        // Adiciona a hora na data e verifica se está no passado.
        const isHourPast = dayjs(date).add(scheduleHour, "hour").isBefore(dayjs())
        const unavailable = !dailySchedules.some((schedule) => {
            // Verifica se o horário já está agendado.
            return dayjs(schedule.when).format("HH:mm") === hour
        }) && !isHourPast;
        
        return {
            hour,
            available: unavailable
        }
    })

    // Renderiza os horarios.
    opening.forEach(({ hour, available }) => {
        const option = document.createElement("option")
        option.value = hour
        option.textContent = hour

        if (!available) {
            option.disabled = true;
        }

        hours.append(option)
    })
}