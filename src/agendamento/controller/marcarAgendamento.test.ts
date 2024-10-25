import { handler } from './marcarAgendamento';

describe('marcarAgendamento', () => {
  it('deve retornar erro para dados inválidos', async () => {
    const result = await handler({ body: '{}' } as any, null, null);
    expect(result.statusCode).toBe(400);
  });

  it('deve realizar agendamento com sucesso', async () => {
    const result = await handler({ body: JSON.stringify({ medico_id: 1, paciente_nome: 'Carlos Almeida', data_horario: '2024-10-05 09:00' }) } as any, null, null);
    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body).mensagem).toBe('Agendamento realizado com sucesso');
  });
});