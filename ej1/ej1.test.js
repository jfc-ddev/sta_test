import { fetchAndControlURLS } from "./ej1";

global.fetch = jest.fn();

describe("fetchAndControlURLS", () => {
  const MOCK_URLS = [
    "http://localhost:3000/api/users",
    "http://localhost:3000/api/products",
    "http://localhost:3000/api/quotes",
    "http://localhost:3000/api/weather",
    "http://localhost:3000/api/jokes",
    "http://localhost:3000/api/time",
    "http://localhost:3000/api/languages",
    "http://localhost:3000/api/countries",
    "http://localhost:3000/api/random",
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return correct responses for each URL", async () => {
    fetch.mockImplementation((url) =>
      Promise.resolve({
        text: () => Promise.resolve(`Result - ${url}`),
      })
    );

    const result = await fetchAndControlURLS(MOCK_URLS, 2);

    expect(result).toEqual([
      "Result - http://localhost:3000/api/users",
      "Result - http://localhost:3000/api/products",
      "Result - http://localhost:3000/api/quotes",
      "Result - http://localhost:3000/api/weather",
      "Result - http://localhost:3000/api/jokes",
      "Result - http://localhost:3000/api/time",
      "Result - http://localhost:3000/api/languages",
      "Result - http://localhost:3000/api/countries",
      "Result - http://localhost:3000/api/random",
    ]);
  });
});
