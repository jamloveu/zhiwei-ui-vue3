<script setup lang="ts">
import Switch from "../lib/Switch.vue"
import {ref} from "vue";
let status = ref(true)
let size = ref(24)
</script>
<template>
  <button @click="size++">尺寸+1</button>
  <button @click="size--">尺寸-1</button>
  <Switch v-model="status" :size="size" :disabled="false" />
</template>

<style lang="scss" scoped>

</style>