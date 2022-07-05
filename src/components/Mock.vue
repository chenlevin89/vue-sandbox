<script setup lang="ts">
import {onUnmounted} from 'vue';

    
    let i = 0;

    const intervalId = setInterval(() => {
        console.log(`Mock Component -> ${i}`);
        i++;
    },1000);

    onUnmounted(() => clearInterval(intervalId))

</script>


<template>
      <span>Mock</span>
</template>


<style scoped>
</style>
