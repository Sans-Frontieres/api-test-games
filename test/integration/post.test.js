import { api, resetDatabase, game } from "../setup";

beforeEach((done) => {
  resetDatabase();
  done();
});

// # Test Crea un nuevo juego

describe('POST "/games" creacion de un juegos. - (Integration)', () => {
  it.skip("La creación exitosa devuelve un código de estado 201", async () => {
    const response = await api.post("/api/v1/games/").send(game);

    expect(response.status).toBe(201);
  });

  it("La creación exitosa devuelve un ID.", async () => {
    const response = await api.post("/api/v1/games/").send(game);

    // TODO: resolver metodos
    // expect(response.body).toBeString();
    expect(response.body).toBeDefined();
  });
});

afterAll((done) => {
  resetDatabase();
  done();
});
