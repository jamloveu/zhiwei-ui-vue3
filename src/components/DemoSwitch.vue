<script setup lang="ts">
import Switch from "../lib/Switch.vue"
import {ref} from "vue";
let status = ref(false)
</script>
<template>
<Switch v-model="status" />
</template>

<style lang="scss" scoped>

</style>