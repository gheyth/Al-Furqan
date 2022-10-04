<template>
  <section>
    <IntroBlog
      title="الصفحات"
      info="فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ  (98) (النحل)"
    />
    <div class="container mx-auto my-0 py-11">
      <h1 class="text-center text-basic-02 text-5xl font-black">المحتوى</h1>

      <div class="flex justify-end items-center w-4/5 my-0 mx-auto">
        <div class="z-30 cursor-pointer text-xl text-basic-02 flex items-center justify-between">
          <NuxtLink to="/surah/" class=" bg-white flex items-center justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
            <i class="fi fi-rr-angle-double-small-left w-5 h-5"></i>
          </NuxtLink>
        </div>
      </div>

        <ul class="list-surah mt-6">
          <li class="" v-for="article of info" :key="article.slug">
            <NuxtLink class="border border-r-8 rounded-md bg-white border-basic-02 text-basic-02 text-xl px-4 py-2 inline-block" :to="{ name: 'surah-alfaatiha-slug', params: { slug: article.slug } }">من {{article.start}} الى {{article.end}}</NuxtLink>
          </li>
        </ul>
    </div>
  </section>
    
        <!-- <ul>
          <li class="bg-white border border-basic-02 rounded-md mb-4 p-2 hover:border-r-4 hover:border-basic-02" v-for="article of info" :key="article.slug">
            <NuxtLink class="" :to="{ name: 'surah-alfaatiha-slug', params: { slug: article.slug } }">
              <div class="flex items-center">
                <i class="fi fi-rs-browser text-basic-02 w-4 h-4 ml-2"></i>
                <h2 class="text-basic-02 font-black text-lg">{{ article.surah }}</h2>
              </div>
            </NuxtLink>
          </li>
        </ul> -->
</template>

<script>
import IntroBlog from '../../../components/blog/intro-blog.vue';
  export default {
    async asyncData({ $content }) {
        const info = await $content("alfaatiha")
            .fetch();
        return {
            info
        };
    },
    components: { IntroBlog }
}
</script>

<style scoped>
  .list-surah{
    grid-gap: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, 162px);
    justify-content: center;
  }
</style>