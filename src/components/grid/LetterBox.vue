<script setup lang="ts">
import type { letterCorrectness } from '@/stores/board';

const props = defineProps<{
    letter?: string,
    correctness?: letterCorrectness
}>();
</script>

<template>
<div class="flex flex-1 place-content-center place-items-center w-20 h-20 border-gray-300 border-solid border-2 uppercase font-bold text-3xl">
    {{props.letter}}
</div>
</template>