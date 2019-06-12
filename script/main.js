document.querySelector("#vx-button-experimentar").addEventListener("click", function(){
    experimentar();
}, false);

function experimentar(){
    console.log("experimentar");
    const buttonExperimentar = document.querySelector("#vx-button-experimentar");
    const contactMessage = document.querySelector("#vx-contact-message");
    const trialMessage = document.querySelector("#vx-trial-message"); 
    const fieldsStatus = validateFields();
    if(fieldsStatus.status){
        buttonExperimentar.value = "Obrigado!";
        buttonExperimentar.disabled = "true";
        contactMessage.classList.remove("hidden");
        trialMessage.classList.add("visible");
        trialMessage.classList.remove("hidden");
        trialMessage.classList.add("visible");
    }else{
        buttonExperimentar.value = "Experimentar gratuitamente";
        contactMessage.classList.remove("visible");
        contactMessage.classList.add("hidden");
        trialMessage.classList.remove("visible");
        trialMessage.classList.add("hidden");
    }
}

function validateFields(){
    let validation = {status: false};
    const errorsMessages = {
        "incomplete": "Este campo é obrigatório!",
        "telefone": "Telefone inválido.",
        "email": "E-mail inválido.",
        "url": "Domínio inválido."
    };
    const fields = document.querySelectorAll(".vx-field input, .vx-field select");
    fields.forEach(field => {
        if(!field.value){
            validation.errorMessage = errorsMessages["incomplete"];           
        }else{
            /* Implementar validação de cada tipo de campo */
            const fieldNameValue= field.name;
            const patternPhone = /^\d{10}$/;
            if(
                fieldNameValue = "telefone" && !field.value.match(patternPhone)
            ){
                validation.errorMessage = errorMessages[fieldNameValue] || errorMessages["incomplete"];
            }else{
                validation.status = true;
            }           
        }        
    });
    return validation;
}

/* Gabriel Tessarini */