<script setup lang="ts">
import { useBoardStore } from '@/stores/board';
import LetterBox from './LetterBox.vue';

const boardStore = useBoardStore();

const props = defineProps<{
    word?: string,
}>();
</script>

<template>
<div class="flex flex-row gap-1">
    <LetterBox v-for="numLetters in boardStore.wordLength" :letter="word?.charAt(numLetters - 1)" :key="numLetters"/>
</div>
</template>