<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- Enviando las props en los componentes el title es el props para el componetn-->
  <Counter title='Entraron'/>
  <!-- Hay varias forma de manipular estas variables  -->
</template>  

<script>
// el @ hace la referencia a la carpeta src , para no tener que poenr los ../ y asi 
// import HelloWorld from '@/components/HelloWorld.vue'
import Counter from './components/Counter.vue'

export default {
  name: 'App',
  //los compoens que se vayan a usar , en el componetns obj 
  components: {
    Counter
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
