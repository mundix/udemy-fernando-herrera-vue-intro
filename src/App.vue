<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- Enviando las props en los componentes el title es el props para el componetn-->
  <!-- Como hacemos par amandar un 15 como numero -->
  <!-- <Counter title='Entraron' start='15'/> -->
  <!-- Si le pongo :start con los 2 puntos -->
  <!-- <Counter title='Entraron' :start='10'/> -->
  <!-- No quiero que los usuarios le pongan valores,  y voy a definir valores por defecto -->
  <!-- <Counter :start='1'/> -->
  <!-- Hay varias forma de manipular estas variables  -->
  <Indecision/>
</template>  

<script>
// el @ hace la referencia a la carpeta src , para no tener que poenr los ../ y asi 
// import HelloWorld from '@/components/HelloWorld.vue'
// import Counter from './components/Counter.vue'
import Indecision from './components/Indecision.vue'

export default {
  name: 'App',
  //los compoens que se vayan a usar , en el componetns obj 
  components: {
    // Counter,
    Indecision,
  }
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
