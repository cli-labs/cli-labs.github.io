<template>
   <button class="cli-button">
      <slot></slot>
   </button>
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
.cli-button {
   background-color: white;
   color: black;
   padding: px-to-rem(12) px-to-rem(16);
   border-radius: px-to-rem(4);

   cursor: pointer;

   &:hover {
      scale: 1.05;
      transition: scale 0.2s ease;
   }

   &:active {
      scale: 1.04;
      transition: scale 0.2s ease;
   }
}
</style>
