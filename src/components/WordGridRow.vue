<script setup lang="ts">
import { useBoardStore, letterCorrectness } from '@/stores/BoardStore';
import WordGridRowBox from './WordGridRowBox.vue';

const boardStore = useBoardStore();

const props = defineProps<{
    word?: string,
    correctnessArray?: letterCorrectness[],
}>();
</script>

<template>
<div class="flex flex-row gap-1">
    <WordGridRowBox v-for="(numLetters, index) in boardStore.wordLength" :letter="word?.charAt(index)" :correctness="correctnessArray ? correctnessArray[index] : undefined" :key="index"/>
</div>
</template>