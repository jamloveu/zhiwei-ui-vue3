<script lang="ts" setup>
import {computed, onMounted} from "vue";
// 定义 props 属性
const props = defineProps({
  // 选中状态
  modelValue: {
    type: Boolean,
    default: false
  },
  // 尺寸大小
  size: {
    type: Number,
    default: 24
  },
  // 打开时的背景色
  activeColor: {
    type: String,
    default: '#1989fa'
  },
  // 关闭时的背景色
  inactiveColor: {
    type: String,
    default: '#cccccc'
  },
  // 是否禁止切换
  disabled: {
    type: Boolean,
    default: false
  }
})
// 计算属性
const styleObj = computed(() => {
  return {
    fontSize: `${props.size}px`,
    backgroundColor: props.modelValue ? props.activeColor : props.inactiveColor
  }
})
const styleObjCircle = computed(() => {
  return {
    width: `${props.size}px`,
    height: `${props.size}px`
  }
})
const classObj = computed(() => {
  return {
    'zw-switch-on': props.modelValue,
    'zw-switch-disabled': props.disabled
  }
})

// 定义 emits
const emits = defineEmits(['update:modelValue'])

// 点击事件
const onClick = () => {
  if (props.disabled) return
  emits('update:modelValue', !props.modelValue)
}

// 生命周期函数
onMounted(() => {
  console.log(123)
})

</script>

<template>
  <div :class="classObj" :style="styleObj" class="zw-switch" @click="onClick">
    <div :style="styleObjCircle" class="node"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "style/var.scss";

.zw-switch {
  position: relative;
  display: inline-block;
  box-sizing: inherit;
  width: 2em;
  height: 1em;
  border-radius: 1em;
  font-size: 24px;
  border: $switch-border-color;
  padding: 1px;

  .node {
    width: 50px;
    height: 50px;
    border: $switch-border-color;
    background-color: #fff;
    display: inline-block;
    border-radius: 100%;
    position: absolute;
    top: 1px;
    left: 1px;
    transition: transform $switch-transition-duration cubic-bezier(0.3, 1.05, 0.4, 1.05);
  }

  &-on {
    box-shadow: 0 0 0 1px rgba(45, 140, 240, .1);

    .node {
      transform: translateX(100%);
    }
  }

  &-disabled {
    opacity: .5;
    cursor: not-allowed;
  }
}
</style>
