<script setup lang="ts">

import {ref,watch,defineEmits} from 'vue';

const search = ref('');
const emit = defineEmits(['search'])

const vFocus = {
  mounted: (el:HTMLInputElement) => el.focus()
}

watch(search, val => emit('search',val));

</script>


<template>
    <input  v-focus v-model="search" type="search"  placeholder="search"/>
</template>


<style scoped>

  input{
    width:100%;
    border-radius: 4px;
    outline: none;
    border: 1px solid #F1F3F4;
    padding: 5px;
    cursor:pointer;
    text-align:left;
    background:#F1F3F4;
    height:40px;
  }

  input:focus {
    border-bottom: solid 2px  #3083FF;
  }

</style>
