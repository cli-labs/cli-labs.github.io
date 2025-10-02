<template>
   <span :class="`cli-icon fa fa-${name}`">
      <slot />
   </span>
</template>

<script lang="ts" setup>
interface CliIconProps {
   name: string;
   size?: number;
}

const props = defineProps<CliIconProps>();

const computedSize = computed(() => {
   return ScssUtils.pxToRem(props.size || 16);
});
</script>

<style lang="scss">
.cli-icon {
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: v-bind('computedSize');
}
</style>
