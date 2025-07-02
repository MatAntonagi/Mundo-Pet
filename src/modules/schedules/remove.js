const periods = document.querySelectorAll('.period');

import { schedules } from "../schedules/load.js";
import { cancelSchedule } from "../../services/schedule-cancel.js";

// Gera evento de click para cada lista de horários.
periods.forEach((period) => {
    // captura o evento de click
    period.addEventListener("click", async (event) => {
        // Verifica se esta clicando no icone de remover.
        if(event.target.classList.contains("remove")) {
            // obtem o id do agendamento.
            const item = event.target.closest("li")
            const { id } = item.dataset;
            
            // Verifica se o id existe.
            if(!id) {
                return alert("Agendamento não encontrado.")
            }
            
            // confirma se deseja cancelar o agendamento.
            const isConfirm = confirm("Deseja cancelar este agendamento?");
           
            if(isConfirm) {
                // chama a função de cancelamento do agendamento.
                await cancelSchedule({ id });

                // atualiza a lista de agendamentos.
                await schedules();
            }
        }
    })
})