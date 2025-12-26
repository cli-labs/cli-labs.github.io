// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   compatibilityDate: '2025-07-15',
   devtools: { enabled: true },
   css: ['~/assets/scss/main.scss'],
   ssr: false,
   nitro: {
      preset: 'github-pages'
   },
   app: {
      head: {
         title: "CLI Labs",
         link: [
            { rel: "preconnect", href: "https://fonts.googleapis.com" },
            { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" },
            { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cascadia+Mono:ital,wght@0,200..700;1,200..700&display=swap" },
            { rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" },
         ],
         meta: [
            { name: "viewport", content: "width=device-width, initial-scale=1" },
            { name: "description", content: "CLI Labs - A platform for creating and managing your CLI tools" },
         ],
      }
   },
   vite: {
      css: {
         preprocessorOptions: {
            scss: {
               additionalData: `
              @use "sass:math";
              @use "sass:map";
              @use "sass:meta";

              @use "@/assets/scss/tokens" as *;
              @use "@/assets/scss/abstracts" as *;
              `,
            }
         }
      }
   },

   modules: ["@nuxt/content"]
})
