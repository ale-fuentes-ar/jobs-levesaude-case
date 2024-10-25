import { handler } from './buscarAgendas';

describe('buscarAgendas', () => {
  it('deve retornar a lista de médicos', async () => {
    const result = await handler(null, null, null);
    expect(result.statusCode).toBe(200);
    expect(JSON.parse(result.body).medicos.length).toBeGreaterThan(0);
  });
});