document.getElementById("kontakt-form").addEventListener("submit", async function(event) {
    event.preventDefault(); 

    const formData = new FormData(this);

    try {
        const response = await fetch("skicka_mail.js", {
            method: "POST",
            body: formData
        });

        const result = await response.text();
        alert(result); 

    } catch (error) {
        console.error("Ett fel uppstod:", error);
        alert("Något gick fel. Försök igen senare.");
    }
});
