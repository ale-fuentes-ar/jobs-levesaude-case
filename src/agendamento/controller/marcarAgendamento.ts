import { APIGatewayEvent, Context, Callback } from "aws-lambda";

interface AgendamentoRequest {
  medico_id: number;
  paciente_nome: string;
  data_horario: string;
}

export const handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  const body: AgendamentoRequest = JSON.parse(event.body || "{}");

  if (!body.medico_id || !body.paciente_nome || !body.data_horario) {
    return {
      statusCode: 400,
      body: JSON.stringify({ mensagem: "Dados de agendamento inválidos" }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      mensagem: "Agendamento realizado com sucesso",
      agendamento: {
        medico: `Dr. ${body.medico_id === 1 ? "João Silva" : "Maria Souza"}`,
        paciente: body.paciente_nome,
        data_horario: body.data_horario,
      },
    }),
  };
};
