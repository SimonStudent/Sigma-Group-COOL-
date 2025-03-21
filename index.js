// Lägg till en eventlyssnare för formulärets skickande
document.getElementById("kontakt-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Förhindrar att sidan laddas om när formuläret skickas

    // Hämta formulärdata
    const formData = new FormData(this);

    // Använd EmailJS för att skicka formulärdata
    emailjs.sendForm('service_zkp9ykf', 'template_xyfas1m', formData)
        .then(function(response) {
            console.log('SUCCESS', response);
            alert('Meddelandet har skickats!');
        }, function(error) {
            console.log('FAILED', error);
            alert('Något gick fel, försök igen.');
        });
});
