<template>
  <!-- <h1>Indecision</h1> -->
  <img  v-if='img' :src="img" alt="bg">
  <div class="bg-dark"></div>
  <div class='indecision-container'>
      <input  v-model='question' type="text" placeholder="Hazme una pregunta">
      <p>Recuerda termina con un signo de interrogación (?)</p>
      <div>
          <!-- <h2>Seré millonario</h2> -->
          <h2>{{question}}</h2>
          <h1>{{answer}}</h1>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            // question:'Hola Mundo'
            question: null,
            answer: null,
            img: null
        }
    },
    methods: {
        //lo pongo async asi tengo acceso al await
        async getAnswer(){
            this.answer = 'Pensando...'

            // const data = await fetch('https://yesno.wtf/api').then( r => r.json() )
            const {answer, image} = await fetch('https://yesno.wtf/api').then( r => r.json() )

            // console.log(answer)
            this.answer = answer
            this.img = image

        }
    },
    // Debemos estar  pendiente cuando el usuario envia el "?"
        // Esto se hace con el 'watch' es unn objeto  que puede ver un oberver de muchas cosas
    watch: {
        question(value, oldValue) {
            // Si le ponemos el { } a los valores , imprime el nombre de la variable y el valor
            // console.log({value, oldValue})
            // Esto me evalu si value tiene un signo de "?"
            // console.log(value.includes('?'))
            if( !value.includes('?') ) return

            this.getAnswer()
            // console.log('Got it')
            //realizar peticion HTTP
            // Tengo que reconocer cuando la persona pone el signo de  "?"

        }
    }
}
</script>

<style >

    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }

</style>