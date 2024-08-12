document
  .getElementById("quoteButton")
  .addEventListener(
    "click",
    fetchQuote
  ); /* Fügt dem Button ein Klick-Event hinzu, das die Funktion fetchQuote aufruft */

function fetchQuote() {
  fetch(
    "https://api.api-ninjas.com/v1/quotes"
  ) /* Sendet eine Anfrage an die API, um ein zufälliges Zitat zu erhalten */
    .then((response) => {
      /* Verarbeitet die Antwort */
      if (!response.ok) {
        /* Überprüft, ob die Antwort erfolgreich war */
        throw new Error(
          "Netzwerkantwort war nicht ok " + response.statusText
        ); /* Wirft einen Fehler, wenn die Antwort nicht erfolgreich war */
      }
      return response.json(); /* Wandelt die Antwort in ein JSON-Objekt um */
    })
    .then((data) => {
      /* Verarbeitet die Daten aus der API-Antwort */
      document.getElementById(
        "quote"
      ).textContent = `"${data.content}" - ${data.author}`; /* Setzt den Text des Zitats und des Autors in das Div-Element */
    })
    .catch((error) => {
      /* Fängt Fehler ab, die während des Fetch-Vorgangs aufgetreten sind */
      document.getElementById("quote").textContent =
        "Es gab ein Problem beim Abrufen des Zitats: " +
        error.message; /* Zeigt eine Fehlermeldung an */
    });
}
