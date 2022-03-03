<script setup lang="ts">
import { letterCorrectness, useBoardStore } from '@/stores/BoardStore';

const boardStore = useBoardStore();

const props = defineProps<{
    letter: string,
    correctness?: letterCorrectness
}>();

const keyStyles = {
    [letterCorrectness.NotInWord]: 'bg-gray-400',
    [letterCorrectness.InWord]: 'bg-yellow-400',
    [letterCorrectness.InPosition]: 'bg-green-400',
}

function getKeyStyle(state?: letterCorrectness): string {
    return state == null ? '' : keyStyles[state];
}

function keyPressed(key: string) {
    boardStore.keyPressed(key);
};
</script>

<template>
<div class="flex flex-1 place-content-center place-items-center pl-3 pr-3 h-14 m-1 uppercase cursor-pointer bg-gray-300 rounded-lg"
    :class="getKeyStyle(props.correctness)"
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