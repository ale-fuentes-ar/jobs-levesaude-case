import { APIGatewayEvent, Context, Callback } from "aws-lambda";

interface Medico {
  id: number;
  nome: string;
  especialidade: string;
  horarios_disponiveis: string[];
}

export const handler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback
) => {
  const medicos: Medico[] = [
    {
      id: 1,
      nome: "Dr. João Silva",
      especialidade: "Cardiologista",
      horarios_disponiveis: [
        "2024-10-05 09:00",
        "2024-10-05 10:00",
        "2024-10-05 11:00",
      ],
    },
    {
      id: 2,
      nome: "Dra. Maria Souza",
      especialidade: "Dermatologista",
      horarios_disponiveis: ["2024-10-06 14:00", "2024-10-06 15:00"],
    },
  ];

  return {
    statusCode: 200,
    body: JSON.stringify({ medicos }),
  };
};
