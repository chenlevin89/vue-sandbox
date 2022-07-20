<script setup lang="ts">

import { ref } from 'vue';


import DD from '@ironsource-mobile/shared-ui/dropdown'


const array = Array.from({length:50}, (_,i) => ({text:`option_${i}`,id:i}));
const options = ref(array);
const searchByCallback = (option:any, term:string) =>  option.text.indexOf(term) !== -1;
const selected = ref(null);

const people = [
  { name: 'Wade Cooper', short: 'WD' },
  { name: 'Arlene Mccoy', short: 'AM', disabled: true },
  { name: 'Devon Webb', short: 'DW', disabled: true },
  { name: 'Tom Cook', short: 'TC' },
  { name: 'Tanya Fox', short: 'TF' },
  { name: 'Hellen Schmidt', short: 'HC' },
  { name: 'Omri Katz', short: 'HC' },
  { name: 'Yossi El', short: 'HC' },
  { name: 'Nachman Ard', short: 'HC' },
  { name: 'Moshe Aviram', short: 'HC' },
];
const cleared  = ()=>{
  console.log('cleared')
}

</script>

<template>

      <DD     label="Label"
              :options=people
              :displayValue="(option: any) => option?.name"
              placeholder='Choose something'
           
              v-model=selected>
                 <template #default='{option, selected, active}'>
      <Option :option='option' :disabled='option.disabled' :selected="selected">
        {{ option.name }}
      </Option>
    </template>
              </DD>



</template>

<style lang="scss" scoped>

</style>
