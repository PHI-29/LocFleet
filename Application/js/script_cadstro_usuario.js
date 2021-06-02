class Validator{

    constructor(){
        this.validations = [

        ]
    }

    // inica a validação de todos os campos
    validate(form){

        //pegar os inputs do formulario
        let inputs = form.getElementsByTagName('inputs');

        //transforma um HTMLColection para um array 
        let inputsArray = [...inputs];

        //Loop dos inputs e validação mediante ao que for encontrado.
        inputsArray.forEach(function(input){

        });
    }



}


window.onload = function(){

    let form = document.getElementById("register-form");
    let submit = document.getElementById("btn_submit");

    let validator = new Validator();

    //evento para disparar validações
    submit.addEventListener('click', function(e){
        
        //O formulario deixa de funcionar da forma que devia.
        e.preventDefault();

        validator.validate(form);
        
    });


}