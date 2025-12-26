<template>
   <div class="tool-card" @click="openRepositoryUrl">
      <h3 class="tool-card__title">
         {{ tool.title }}
      </h3>
      <p v-if="tool.description" class="tool-card__description">
         {{ tool.description }}
      </p>
      <div class="tool-card__actions" @click="openRepositoryUrl">
         Read More
      </div>
   </div>
</template>

<script lang="ts" setup>
import type { RepoItem } from '../config/repos';

const props = defineProps<{ tool: RepoItem }>();

const tool = computed(() => props.tool);

const router = useRouter();

const openRepositoryUrl = () => {
   router.push(`/tools/${tool.value.title}`)
   // window.open(props.repositoryUrl, "_blank");
};
</script>

<style lang="scss">
.tool-card {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   gap: px-to-rem(16);
   padding: px-to-rem(16);
   border-radius: px-to-rem(4);
   // box-shadow: px-to-rem(4) px-to-rem(4) px-to-rem(32) px-to-rem(15) rgba(255, 255, 255, 0.1);

   border: 1px solid white;
   max-width: px-to-rem(300);
   width: px-to-rem(300);
   cursor: pointer;

   &:hover {
      box-shadow: px-to-rem(2) px-to-rem(2) px-to-rem(32) px-to-rem(10) rgba(255, 255, 255, 0.2);
      scale: 1.01;
      transition: all 0.3s ease;

      .tool-card__actions {
         text-decoration: underline;
      }
   }
}

.tool-card__title {
   font-size: px-to-rem(24);
   font-weight: 600;
   color: white;
}

.tool-card__description {
   font-size: px-to-rem(16);
   flex: 1;
   color: white;
}
</style>
