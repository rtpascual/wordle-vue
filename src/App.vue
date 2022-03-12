<script setup lang="ts">
import TheHeader from "./components/TheHeader.vue";
import VirtualKeyboard from "./components/VirtualKeyboard.vue";
import WordGrid from "./components/WordGrid.vue";
import { useBoardStore } from "./stores/BoardStore";
import { onMounted } from "vue";

const boardStore = useBoardStore();

function keyPressed(key: string) {
  boardStore.keyPressed(key);
}

onMounted(() => {
  window.addEventListener("keyup", (e) => {
    keyPressed(e.key.toLowerCase());
  });
});
</script>

<template>
  <main
    class="flex flex-col justify-between content-center items-center select-none h-screen"
  >
    <TheHeader />
    <WordGrid />
    <VirtualKeyboard />
  </main>
</template>

<style>
@import "./assets/base.css";
</style>
