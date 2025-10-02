<template>
   <main class="page page-home">
      <section class="page-home__hero">
         <h1>CLI Labs</h1>
         <h3>🛠 One lab, many CLI tools - A lab for building and sharing high-quality CLI tools under one roof.</h3>
         <p>CLI LABS is a home for modern, fast, and consistent command-line tools.
            We build small, focused CLIs — mostly in Rust and JavaScript/TypeScript — and keep them under one roof for
            easy discovery and contribution.
         </p>

         <div>
            <cli-button @click="openGitHub">View on GitHub</cli-button>
         </div>
      </section>

      <section class="page-home__tools">
         <h2>Stocked Tools</h2>

         List of tools will be added here.
         <i>Coming soon...</i>
         <!-- <div class="tools-list">
            <tool-card v-for="tool in computedTools" :key="tool.id" :title="tool.title" :description="tool.description"
               :repositoryUrl="tool.repositoryUrl" />
         </div> -->
      </section>
   </main>
</template>

<script lang="ts" setup>
import { tools } from '@/config/repos';

const computedTools = computed(() => tools.slice(0, 3));

const openGitHub = () => {
   window.open("https://github.com/cli-labs", "_blank");
};
</script>

<style lang="scss">
.page-home {
   section {
      margin-bottom: px-to-rem(24);
   }

   &__hero {
      width: 70%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      gap: px-to-rem(24);
   }

   &__tools {
      width: 90%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin-top: px-to-rem(24);

      h2 {
         margin-bottom: px-to-rem(16);
      }
   }

   .tools-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: stretch;
      justify-content: center;
      gap: px-to-rem(16);

      .tool-card--view-all {
         border-width: px-to-rem(4);
      }
   }
}
</style>
