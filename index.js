console.log("JavaScript-filen har laddats!");
document.addEventListener("DOMContentLoaded", function () {
    emailjs.init("45x89A9eAilD5HBze"); // Initiera EmailJS med vår nyckel

    document.getElementById("kontakt-form").addEventListener("submit", function (event) {
        event.preventDefault(); // Stoppa vanlig formulärskickning

        // Hämta data från formuläret
        var namn = document.getElementById("namn").value;
        var email = document.getElementById("email").value;
        var meddelande = document.getElementById("meddelande").value;

        // Skapa e-postdata för EmailJS
        var emailData = {
            namn: namn,
            email: email,
            meddelande: meddelande,
        };

        // Skicka e-post via EmailJS
        emailjs.send("service_zkp9ykf", "template_xyfas1m", emailData)
            .then(function (response) {
                console.log("E-post skickad!", response);
                alert("Meddelandet har skickats!");
            })
            .catch(function (error) {
                console.error("Fel vid e-postskickning:", error);
                alert("Något gick fel. Försök igen.");
            });
    });
});
