import { api, resetDatabase, game } from "../setup";

beforeEach((done) => {
  resetDatabase();
  done();
});

describe('PUT "games/:id" actualización de un juego. - (Integration)', () => {
  it("Al actualizar correctamente un juego recibimos un status 200.", async () => {
    const result = await api.post("/api/v1/games/").send(game);

    const response = await api
      .put(`/api/v1/games/${result.body}`)
      .send({ title: "Titulo actualizado." });

    expect(response.status).toBe(200);
  });

  it("Se actualiza el titulo del juego guardado.", async () => {
    const game_1 = {
      title: "Juego a actiualizar",
      description: "Esto es una descripción.",
    };
    const result = await api.post("/api/v1/games/").send(game_1);
    const id = result.body;
    const gameResult = await api.get(`/api/v1/games/${id}`);

    expect(gameResult.body.title).toEqual(game_1.title);

    await api.put(`/api/v1/games/${id}`).send({ title: "Titulo actualizado." });

    const response = await api.get(`/api/v1/games/${id}`);

    expect(response.body.title).toEqual("Titulo actualizado.");
  });

  it("Al actualizar correctamente un juego recibimos un ID.", async () => {
    const result = await api.post("/api/v1/games/").send({
      title: "Juego a actiualizar",
      description: "Esto es una descripción.",
    });

    const response = await api
      .put(`/api/v1/games/${result.body}`)
      .send({ title: "Titulo actualizado." });

    expect(response.body.id).toBeDefined();
  });

  it("Se intenta actualizar un juego inexistente, recibimos un status 404 y un message.", async () => {
    const response = await api
      .put("/api/v1/games/id-inexistente")
      .send({ title: "Titulo actualizado." });

    expect(response.status).toBe(404);
    expect(response.body.message).toBeDefined();
  });
});

afterAll((done) => {
  resetDatabase();
  done();
});
