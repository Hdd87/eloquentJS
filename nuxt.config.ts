import { builtinModules } from "module";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules:[
    '@nuxt/content',
  ],
    nitro: {
      prerender: {
        routes: ['/sitemap.xml']
      }
    }
  
})
