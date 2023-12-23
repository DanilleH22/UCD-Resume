function sendMail(contactForm) {
    emailjs.send("service_2g0jdri", "D-Resume", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "project_request": contactForm.projectsummary.value
    }, 'EQ5bgLYahe7e0DgiK')
        .then(
            function (response) {
                console.log("SUCCESS", response);
            },
            function (error) {
                console.log("FAILED", error);
            }
        );

    return false;  // To block from loading a new page
}
