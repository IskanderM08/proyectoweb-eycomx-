emailjs.init("gOah8RCtt9fE1RPOt");

document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const params = {
        nombre: document.getElementById("nombre").value,
        correo: document.getElementById("correo").value,
        telefono: document.getElementById("telefono").value,
        servicio: document.getElementById("servicio").value,
        mensaje: document.getElementById("mensaje").value
    };

    emailjs.send("service_0v64mj3", "template_vwq1l9w", params)
        .then((response) => {
            alert("Correo enviado con éxito");
            console.log("Correo enviado:", response.status, response.text);
        })
        .catch((error) => {
            alert("Hubo un error al enviar el correo. Por favor, inténtalo de nuevo.");
            console.error("Error:", error);
        });
});

