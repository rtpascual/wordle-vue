<script setup lang="ts">
import type { letterCorrectness } from '@/stores/board';

const props = defineProps<{
    letter?: string,
    correctness?: letterCorrectness
}>();
</script>

<template>
<div class="flex flex-1 place-content-center place-items-center w-16 h-16 border-gray-300 border-solid border-2 uppercase font-bold text-xl">
    {{props.letter}}
</div>
</template>