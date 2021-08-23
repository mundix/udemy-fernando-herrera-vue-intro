<template>
  <h2>{{customTitle}}</h2>
  <!-- <p>{{counter}} <sup>2</sup> = {{counter*counter}}</p> -->
  <!-- <p>{{counter}} <sup>2</sup> = {{getSquareValue()}}</p> -->
  <!-- A diferencia del metodo el computado no se ejecuta mas de una vez, no como getSquareCounter -->
  <p>{{counter}} <sup>2</sup> = {{squareCounter}}</p>
  <div>
      <!-- <button v-on:click="increateValue">+1</button> -->
      <!-- <button v-on:click="decreaseValue">-1</button> -->
      <!-- Esto es lo mismo que v-on:click el @click -->
      <button @click="increateValue">+1</button>
      <button @click="decreaseValue">-1</button>
    </div>
</template>

<script>
export default {
    // Aqui van las props o se recomenida ponerlos aqqui
    //si hacemos esto ya tenemos acceso al titulo
    // Si no defino start en props, se vuelve un attributo 
    // props: ['title', 'start'],
    //Vamos a cambiar las forma de hacer las props , ahora como un obj
    props: {
        //asi le podemos poner el tipo de datos
        title: String,
        // start: Number
        start: {
            type: Number,
            // required: true
            default: 100
        }
    },
    // name:'Patito',
    data() {
        return {
            // counter: 5
            counter: this.start || 0
        }
    }, 
    methods: {
            getSquareValue() {
                return this.counter * this.counter
            },
            increateValue(){
                // Esto incremente un valor numeroico
                // this.counter++
                // Esto concatena un valor string  
                this.counter = this.counter + 1
            },
            decreaseValue(){
                this.counter = this.counter - 1
            }
    },
    //computed , es otro objeto como los metodos 
    computed: {
        squareCounter() {
            return this.counter * this.counter
        },
        customTitle(){
            return this.title || 'Counter'
        }
    }
}
</script>

<style>
    button {
        background-color: #64B687;
        border-radius: 5px;
        color:white;
        cursor:pointer;
        margin:0 5px;
        padding: 5px 15px;
        transition: 0.3s ease-in-out;

    }

    button:hover {
        background-color: #5aa67b;
        transition: 0.3s ease-in-out;
    }
</style>