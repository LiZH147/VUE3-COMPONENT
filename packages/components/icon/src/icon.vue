<template>
  <i :class="bem.b('')" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { createNamespace } from '@zi-han/utils/create';
import { iconProps } from './icon';
defineOptions({
    name: 'ZIcon'
})


const bem = createNamespace('icon');

const props = defineProps(iconProps);

// 计算属性
const style = computed(() => {
    if(!props.color && !props.size) return {};
    const { color, size } = props;
    return {
        ...(size ? {'font-size': size + 'px'} : {}),
        ...(color ? {'color': color} : {})
    };
});

</script>
