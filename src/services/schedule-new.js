import { apiConfig } from "./api-config.js"

export async function scheduleNew({ name, pet, phone, detail, when, id}) {
    try {
        // Faz a requisição para enviar os dados do agendamento.
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, pet, phone, detail, when, id })
        })
        // Exibe aviso de agendamento realizado.
        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        console.log(error)
        alert("Não foi possivel agendar, tente novamente mais tarde.")
    }
}