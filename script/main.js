document.querySelector("#vx-button-experimentar").addEventListener("click", function(){
    experimentar();
}, false);

function experimentar(){
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

}

/* Gabriel Tessarini */