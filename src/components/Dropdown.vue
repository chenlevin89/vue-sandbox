<script setup lang="ts">

import {ref, computed, defineEmits, type Ref} from 'vue';
import usePagination from '../composables/pagination'

const props = withDefaults(defineProps<{
  modelValue:any,
  options:Object[],
  searchByCallback?: Function;
  placeholder?:string;
}>(),
{
  searchByCallback: () => true,
  placeholder: 'Select'
});

const emit = defineEmits(['update:modelValue'])
const toggle = ref(false);
const search = ref('');
const element = ref();
const filteredOptions = computed(() => 
  props.options.filter(curr =>  props.searchByCallback(curr,search.value))
);
const displayOptions = usePagination(element,filteredOptions,20);


const searchChanged = (e:any) => search.value = e;
const itemSelected = (e:any) => {
  toggle.value = false;
  emit('update:modelValue', e);
};

</script>


<template>

  <div class="container">

    <div @click="toggle = !toggle">
      <slot name="placeholder" :data="props.modelValue?.text || placeholder"  >
        <button>{{props.modelValue?.text || placeholder}}</button>
      </slot>
    </div>
    

    <div class="dropdown-menu" v-if="toggle">

      <slot name="search" :callback="searchChanged"></slot>

      <ul class="options" ref="element">
        <li v-if="displayOptions?.length" 
            v-for="option in displayOptions" 
            @click="e => itemSelected(option)"
            :class="{selected:option.id === props.modelValue?.id}">
          <slot :option="option"></slot>
        </li>

        <li v-else>
          NO DATA !
        </li>
      </ul>

    </div>

  </div>

</template>



<style scoped>

  /* ::v-deep(input[type="search"]){
    background-color: red;
  } */

  /* :slotted(input){
    background-color: blue;
  } */
  .container{
    width:100%;
    position:relative;
  }

  .dropdown-menu{
    position: absolute;
    width: 100%;
    top: 0;
    background: white;
  }

  button {
    width: 100%;
    border-radius: 4px;
    outline: none;
    border: 1px solid #F1F3F4;
    padding: 5px;
    cursor:pointer;
    text-align:left;
    background:#F1F3F4;
    height:40px;
  }

  .options {
    box-shadow: 1px 1px 3px 0px rgb(0 0 0 / 30%);
    padding: 5px;
    height:250px;
    overflow:auto;
    margin:4px 0;
  }

  .options li:hover{
    background:#F7F8F9;
  }

  .options  li {
    cursor:pointer;
    padding: 8px 4px;
    border-radius:4px;
  }

  .options li.selected{
    background:#E2EEFF;
    color:#3083FF;
  }

</style>
