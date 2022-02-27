<script setup lang="ts">
import { useBoardStore } from '@/stores/board';

const boardStore = useBoardStore();

const props = defineProps<{
    letter: string
}>();
    
function keyPressed(key: string) {
    boardStore.keyPressed(key);
}
</script>

<template>
<div class="flex flex-1 place-content-center place-items-center pl-3 pr-3 h-14 m-1 uppercase cursor-pointer bg-gray-300 rounded-lg"
    @click="keyPressed(props.letter)"
>
    {{ props.letter }}
</div>
</template>

<style scoped>
div {
    min-width: 3rem;
}
</style>