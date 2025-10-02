<template>
   <CliHeader />

   <NuxtPage />

   <CliFooter />
</template>

<script lang="ts" setup>
</script>

<style lang="scss">
#__nuxt {
   display: flex;
   flex-direction: column;
   height: 100%;
}

main {
   flex: 1;
}

.cli-header,
.cli-footer {
   padding: px-to-rem(16);
}

main {
   padding: 0 px-to-rem(16);
}
</style>
