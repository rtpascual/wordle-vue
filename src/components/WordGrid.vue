<script setup lang="ts">
import { useBoardStore } from '@/stores/BoardStore';
import WordRow from './WordGridRow.vue';

const boardStore = useBoardStore();

</script>

<template>
<div class="flex flex-auto flex-col gap-1 place-content-center">
    <WordRow v-for="numGuess in boardStore.maxGuesses" :word="boardStore.guesses[numGuess - 1]" :key="numGuess"/>
</div>
</template>