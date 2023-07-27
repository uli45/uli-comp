
<script lang="ts" setup>
import "./style/index.less";
import {computed} from 'vue'
defineOptions({ name: "uli-button" });
type ButtonProps = {
  type?: string,
  size?:string,
  round?:boolean
}
const buttonProps = defineProps<ButtonProps>()

const buttonStyle = computed(() => {
  return {
    [`uli-button--${buttonProps.type||'default'}`]:buttonProps.type||'default',
    [`uli-button--${buttonProps.size}`]:buttonProps.size,
    'is-round':buttonProps.round
  }
})
</script>

<template>
  <div class="">
    <button class="uli-button" :class="buttonStyle">
    <slot></slot>
    </button>
  </div>
</template>
