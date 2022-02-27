<script setup lang="ts">
import Header from './components/Header.vue'
import Keyboard from './components/keyboard/Keyboard.vue';
import Grid from './components/grid/Grid.vue';
import { useBoardStore } from './stores/board';
import { onMounted } from 'vue';

const boardStore = useBoardStore();

function keyPressed(key: string) {
  boardStore.keyPressed(key);
};

onMounted(() => {
  window.addEventListener('keyup', (e) => {
    keyPressed(e.key.toLowerCase());
  })
});
</script>

<template>
<main class="flex flex-col justify-between content-center items-center select-none h-screen">
  <Header />
  <Grid />
  <Keyboard />
</main>
</template>

<style>
@import "./assets/base.css";
</style>
