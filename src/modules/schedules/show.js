import dayjs from "dayjs";
import { schedules } from "./load";

// Seleciona os periodos.
const periodMorning = document.getElementById("period-morning")
const periodAfternoon = document.getElementById("period-afternoon")
const periodEvening = document.getElementById("period-evening")


export function scheduleShow({ dailySchedules }){
    try {
        periodMorning.innerHTML = ""
        periodAfternoon.innerHTML = ""
        periodEvening.innerHTML = ""
        // Renderiza os agendamentos por periodos.
        dailySchedules.forEach((schedule) => {
            const item = document.createElement("li")
            item.dataset.id = schedule.id
            const time = document.createElement("strong")
            time.classList.add("hour")
            const names = document.createElement("span")
            const namePet = document.createElement("strong")
            const service = document.createElement("span")
            const phone = document.createElement("span")
            phone.classList.add("phone-input")
            const remove = document.createElement("p")
            remove.classList.add("remove")

            time.textContent = dayjs(schedule.when).format("HH:mm")
            namePet.textContent = schedule.pet
            service.textContent = schedule.detail
            phone.textContent = schedule.phone
            remove.textContent = "Remover Agendamento"

            names.appendChild(namePet)
            names.append(" / ", schedule.name)
            item.append(time, names, service, phone, remove)
            

            // Obtem somente a hora
            const hour = dayjs(schedule.when).hour()

            //Renderiza o agendamento na sessão
            if(hour <= 12){
                periodMorning.appendChild(item)
            } else if (hour > 12 && hour <= 18){
                periodAfternoon.appendChild(item)
            } else {
                periodEvening.appendChild(item)
            }
        })
    } catch (error) {
        alert("Não foi possivel exibir os agendamentos.")
    }
}