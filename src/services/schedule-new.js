import { apiConfig } from "./api-config.js"

export async function scheduleNew({ name, pet, phone, detail, when, id}) {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, pet, phone, detail, when, id })
        })

        alert("Agendamento realizado com sucesso!")
    } catch (error) {
        console.log(error)
        alert("Não foi possivel agendar, tente novamente mais tarde.")
    }
}