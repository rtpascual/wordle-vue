<script setup lang="ts">
import KeyboardKey from './KeyboardKey.vue';

// Layout of keys for keyboard
const layout = ['q w e r t y u i o p',
'a s d f g h j k l',
'enter z x c v b n m backspace'].map((row) => row.split(' '));
</script>

<template>
<div class="flex flex-row" v-for="(row, index) in layout" :key="index">
    <div v-for="(letter, index) in row" :key="index">
        <KeyboardKey :letter="letter"/>
    </div>
</div>
</template>