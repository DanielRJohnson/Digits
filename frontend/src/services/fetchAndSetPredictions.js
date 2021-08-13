export default async function fetchAndSetPredictions(
  image,
  setProbabilities,
  setProbsLoading
) {
  setProbsLoading(true);
  fetch("http://localhost:3001/api/getPrediction", {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ base64img: image }),
  })
    .then((response) => response.json())
    .then((jsonData) => {
      setProbabilities(jsonData.prediction[0]);
      setProbsLoading(false);
    });
}
