<script setup lang="ts">

import { ref } from 'vue';
import Search from '@/components/Search.vue';
import Dropdown from '@/components/Dropdown.vue';
import DropdownItem from '@/components/DropdownItem.vue';

const array = Array.from({length:50}, (_,i) => ({text:`option_${i}`,id:i}));
const options = ref(array);
const searchByCallback = (option:any, term:string) =>  option.text.indexOf(term) !== -1;
const selected = ref(null);


</script>

<template>


    <Icon name="search"></Icon>

      <Dropdown v-model="selected" :options="options" :searchByCallback="searchByCallback">

          <template #search={callback}>
             <Search  @search="callback" /> 
          </template>
         
          <template v-slot="{option}"> 
            <DropdownItem >
              <label>{{option.id}} {{option.text}}</label>
            </DropdownItem>
          </template> 

      </Dropdown>

</template>

<style lang="scss" scoped>

</style>
