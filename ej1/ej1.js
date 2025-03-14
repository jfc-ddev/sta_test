export async function fetchAndControlURLS(urls, maxConcurrency) {
  const results = [];
  const executingUrls = [];

  for (const url of urls) {
    const promise = fetch(url)
      .then((response) => response.text())
      .then((data) => {
        console.log(`Completed: ${url}`);
        return data;
      })
      .catch((err) => {
        console.error(`Error ${url}:`, err);
        return err;
      });

    results.push(promise);

    if (maxConcurrency <= urls.length) {
      const e = promise.finally(() =>
        executingUrls.splice(executingUrls.indexOf(e), 1)
      );
      executingUrls.push(e);

      if (executingUrls.length >= maxConcurrency) {
        await Promise.race(executingUrls);
      }
    }
  }

  return Promise.all(results);
}

/**
 * const urls = [
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

fetchWithConcurrency(urls, 2).then((responses) => {
  console.log("Results:", responses);
});

 */
