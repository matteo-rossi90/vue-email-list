/*Attraverso l’apposita API di Boolean https://flynn.boolean.careers/exercises/api/random/mail 
generare 10 indirizzi email e stamparli in pagina all’interno di una lista. */

const { createApp } = Vue;

createApp({
    
    //elenco dati
    data(){

        return{

            //creare un array vuoto
            mailList: [
            ]
        }
    },
    mounted(){

        //inserire 10 mail nell'array vuoto
        for (let i = 0; i < 10; i++) {

            //richiamo della API che genera le mail
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((risposta) => {
                    const result = risposta.data.response;
                    console.log(result);
                    this.mailList.push(result);
                })
        }
    }

}).mount("#app")