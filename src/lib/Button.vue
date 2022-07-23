<template>
  <div :size="size">
    <button v-bind="rest">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  inheritAttrs: false,
  setup(props, context) {
    // ES6 剩余操作符
    const {size, ...rest} = context.attrs;
    return {size, rest};
  }
};
</script>

<style lang="scss" scoped>

</style>
