function sendmail(event) {
    event.preventDefault(); // Prevent the default form submission

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
    }

    var params = {
        name: name,
        email: email,
        message: message
    };

    const serviceId = "service_l35t5wj";
    const templateId = "template_8rg7q68";

    emailjs.send(serviceId, templateId, params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message was sent successfully");
        }
    )
    .catch((err) => console.log(err));
}




// function sendmail(){
//     var params={
//         name:document.getElementById("name").value,
//         email:document.getElementById("email").value,
//         message:document.getElementById("message").value
        

//     };
    
//     const serviceId="service_l35t5wj"
//     const templateId="template_8rg7q68"

//     emailjs.send(serviceId,templateId,params)
//     .then(
//         res=>{
//             document.getElementById("name").value=""
//             document.getElementById("email").value=""
//             document.getElementById("message").value=""
//             console.log(res);
//             alert("you message send successfully")

//         })
//     .catch((err)=>log(err))
// }