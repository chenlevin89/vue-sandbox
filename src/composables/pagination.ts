import {ref, watchEffect, onUnmounted, type ComputedRef, type Ref} from 'vue';

export default function usePagination(element:Ref<any>, options:ComputedRef<any[]>, bachSize:number):Ref<any[] | null> {

    let index = 1
    const displayOptions:Ref<any[] | null> = ref(null);

    const scroll = (event:MouseEvent) => {
        const element = event.target as HTMLElement;
        if (element.scrollHeight - element.scrollTop === element.clientHeight) {
            index++;
            displayOptions.value = options.value.slice(0, index * bachSize)
        }
    }

    function doPagination() {
        index = 1;
        displayOptions.value = options.value.slice(0, bachSize);
        element.value?.removeEventListener('scroll', scroll);
        element.value?.addEventListener('scroll', scroll);
    }

    onUnmounted(() => element.value?.removeEventListener('scroll', scroll))

    watchEffect(doPagination)

    return displayOptions;
}