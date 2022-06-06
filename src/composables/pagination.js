import {ref, watchEffect, onUnmounted} from 'vue';

export default function usePagination(element, options, bachSize) {

    let index = 1
    const displayOptions = ref(null);

    const scroll = event => {
        const element = event.target;
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