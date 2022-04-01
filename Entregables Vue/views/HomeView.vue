<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/Logo2.jpg">
    <info/>
    <sabores/>
    <adornos/>
    <paquetes/>
    
  </div>
</template>

<script>
import info from '../components/info.vue';
import sabores from '../components/sabores.vue';
import adornos from '../components/adornos.vue';
import paquetes from '../components/paquetes.vue';

export default {
  name: 'HomeView',
  components: { info,sabores,adornos,paquetes
    
  }
}
</script>
