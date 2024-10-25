# Case | Leve Saúde 2024
<img src="https://img.shields.io/badge/by-Alejandro.Fuentes-informational?style=for-the-badge&logoColor=white&color=004767" alt="" /> <img src="https://img.shields.io/badge/for-Leve_Saude-informational?style=for-the-badge&logoColor=white&color=004767" alt="" />
<img src="https://img.shields.io/badge/AWS_-232F3E?style=for-the-badge&logo=amazonwebservices&logoColor=white" />
<img src="https://img.shields.io/badge/AWS_-FF9900?style=for-the-badge&logo=awslambda&logoColor=white" />



## CASE

## Descrição
Esta API permite buscar agendas de médicos e agendar consultas.

## Tecnologias Utilizadas
- Node.js
- TypeScript
- Serverless Framework
- AWS Lambda

## Como Rodar Localmente

1. Instale as dependências:
   ```bash
   npm install


## Teste | REST

<span style="color:green;">GET</span> Agendas
http://localhost:3000/dev/agendas


<span style="color:brown;">POST</span> Agendamento
http://localhost:3000/dev/agendamento

Body -> raw (json)
{
  "medico_id": 1,
  "paciente_nome": "Carlos Almeida",
  "data_horario": "2024-10-05 09:00"
}