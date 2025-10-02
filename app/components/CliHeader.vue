<template>
   <header class="cli-header">
      <cli-logo />
      <div class="cli-header__socials">
         <cli-icon v-for="social in socials" :key="social.name" :name="social.icon" :size="24"
            @click="navigateTo(social.url)" />
      </div>
   </header>
</template>

<script lang="ts" setup>
interface SocialItem {
   name: string;
   url: string;
   icon: string;
}

const socials: SocialItem[] = [
   {
      name: "twitter",
      url: "https://x.com/cli_labs",
      icon: "twitter",
   },
   {
      name: "linkedin",
      url: "https://linkedin.com/company/cli-labs",
      icon: "linkedin",
   },
   {
      name: "medium",
      url: "https://clilabs.medium.com/about",
      icon: "medium",
   },
   {
      name: "github",
      url: "https://github.com/cli-labs",
      icon: "github",
   },
];

const navigateTo = (url: string) => {
   window.open(url, "_blank");
};
</script>

<style lang="scss">
.cli-header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   min-height: px-to-rem($header-height);
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 100;

   background: rgba($color: black, $alpha: 0.5);
   backdrop-filter: blur(10px);

   &__socials {
      display: flex;
      gap: px-to-rem(16);

      .cli-icon {
         cursor: pointer;

         &:hover {
            scale: 1.1;
            transition: scale 0.2s ease;
         }
      }
   }
}
</style>
