<script setup lang="ts">
import { useBoardStore } from '@/stores/BoardStore';
import KeyboardKey from './VirtualKeyboardKey.vue';

// Layout of keys for keyboard
const layout = ['q w e r t y u i o p',
'a s d f g h j k l',
'enter z x c v b n m backspace'].map((row) => row.split(' '));

const boardStore = useBoardStore();
</script>

<template>
<div class="flex flex-row" v-for="(row, index) in layout" :key="index">
    <div v-for="(letter, index) in row" :key="index">
        <KeyboardKey :letter="letter" :correctness="boardStore.letterStates[letter]"/>
    </div>
</div>
</template>