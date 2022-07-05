<script setup lang="ts">import {ref} from 'vue';


    const show = ref(true);    

</script>


<template>
      <button @click="show = !show">toggle</button>
      <slot name="header" />

      <p style="background-color: red;">
            <slot name="footer" />
      </p>
</template>


<style scoped>
</style>
