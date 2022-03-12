<script setup lang="ts">
import { letterCorrectness } from "@/stores/BoardStore";

const props = defineProps<{
  letter?: string;
  correctness?: letterCorrectness;
}>();

const boxStyles = {
  [letterCorrectness.NotInWord]: "bg-gray-400 border-gray-400",
  [letterCorrectness.InWord]: "bg-yellow-400 border-yellow-400",
  [letterCorrectness.InPosition]: "bg-green-400 border-green-400",
};

function getBoxStyle(state?: letterCorrectness): string {
  return state == null ? "" : boxStyles[state];
}
</script>

<template>
  <div
    class="flex flex-1 place-content-center place-items-center w-20 h-20 border-gray-300 border-solid border-2 uppercase font-bold text-3xl"
    :class="getBoxStyle(props.correctness)"
  >
    {{ props.letter }}
  </div>
</template>
