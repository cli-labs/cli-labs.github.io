<template>
   <main class="page">
      <ContentRenderer v-if="markdown" :data="markdown.body" :value="markdown" class="content-rendering" />

      <p v-else>No related content is available in this repo. Go to home page and select a tool to view.</p>
   </main>
</template>

<script setup lang="ts">
import { parseMarkdown } from '@nuxtjs/mdc/runtime';

const markdown = ref()

const route = useRoute();

onMounted(async () => {

   nextTick(async () => {
      const raw = await $fetch<string>(
         `https://raw.githubusercontent.com/cli-labs/${route.params.id}/refs/heads/main/README.md`
      )

      markdown.value = await parseMarkdown(raw);

   })

})
</script>

<style lang="scss">
.content-rendering {
   width: 70vw;
   overflow-wrap: break-word;
   text-align: left;
   margin-bottom: px-to-rem(24);
}

pre {
   background: white;
   white-space: pre-wrap;
   word-break: break-word;
   padding: px-to-rem((8));
   border-radius: px-to-rem(4);
}

hr {
   margin: px-to-rem(16) 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
   margin: px-to-rem(4) 0;
   text-align: left;
}
</style>
