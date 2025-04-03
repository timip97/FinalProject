(function () {
    emailjs.init({
        publicKey: "9tpla-uiKisqGx_71",
    });
})();

document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
        event.preventDefault(); 

        var formData = Object.fromEntries(new FormData(event.target).entries());
        const emailMessage = `You have a new invtation reponse with the following details: 
        Attendance: ${formData.attendance}, 
        Adults: ${formData.adults}, 
        Children: ${formData.children}, 
        Adult menu: ${formData.adult_menu}, 
        Children menu: ${formData.children_menu}, 
        Allergies: ${formData.allergies}, 
        Aditional Message: ${formData.message}`;

        var templateParams = {
            name: "Invitation Completed",
            message: emailMessage,
        };

        emailjs.send("service_nxub0ay", "template_6d7lrll", templateParams).then(
            (response) => {
                alert("The email was send!");
                console.log("SUCCESS!", response.status, response.text);
            },
            (error) => {
                console.log("FAILED...", error);
                alert("There was an error sending the email, try again later");
            }
        );
    });
