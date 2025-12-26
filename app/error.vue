<template>
   <CliHeader />

   <div class="error-content">
      <h1>Something went wrong</h1>
      <p v-if="error">
         <strong>Error:</strong> {{ error?.message || error?.statusMessage || 'An unexpected error occurred.' }}
      </p>
      <p v-else>
         An unexpected error occurred.
      </p>
      <cli-button @click="goHome">Go To Home</cli-button>
   </div>


   <CliFooter class="cli-footer--error-page" />
</template>

<script lang="ts" setup>
const props = defineProps<{ error?: any }>();

const router = useRouter();

const goHome = () => {

   router.replace({ path: "/" });

};

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

.cli-footer--error-page {
   margin-top: auto;
}

main {
   padding: 0 px-to-rem(16);
}

.error-content {
   flex: 1;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
   padding: 2rem;

   h1 {
      font-size: 2rem;
      margin-bottom: 1rem;
   }

   p {
      font-size: 1.15rem;
      margin-bottom: 1.5rem;
   }
}
</style>
