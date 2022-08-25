<template>
  <button class="zw-switch" @click="toggle" :class="{'zw-checked':value}"><span></span></button>
</template>
<script lang="ts">
export default {
  props: {
    value: Boolean
  },
  // props和context 传值方式
  setup(props, context) {
    const toggle = () => {
      // 事件：vue3的v-model改动，之前是input
      context.emit('update:value', !props.value);
    };
    return {toggle};
  }
};
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.zw-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;

  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }

  &.zw-checked {
    background: #1890ff;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.zw-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
