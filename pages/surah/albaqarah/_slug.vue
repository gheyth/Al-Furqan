<template>
  <article  class="py-10 max">
    <SlugHeader 
      :surah=info.surah
      :revelation=info.revelation
      :ayat=info.ayat
      :start=info.start
      :end=info.end
      :link = " '/surah' + info.dir "
    />
    <nuxt-content :document="info" />
    <div class="w-4/5 mx-auto mt-0 h-9">
      <NuxtLink v-if="next" :to="{ name: 'surah-albaqarah-slug', params: { slug: next.slug } }" class="bg-white border border-basic-02 rounded-md inline-block w-28 text-center py-1 float-left">التالي</NuxtLink>
      <NuxtLink v-if="prev" :to="{ name: 'surah-albaqarah-slug', params: { slug: prev.slug } }" class="bg-white border border-basic-02 rounded-md inline-block w-28 text-center py-1 float-right">السابق</NuxtLink>
    </div>
    <div id="audio" class="flex justify-center opacity-0">
      <div class="fixed bottom-0 flex bg-white rounded-xl w-11/12 mb-4 border border-basic-02 border-b-4">
        <div id="mp3" class="w-full py-1 px-1"></div>
        <div class="play flex w-14 h*14 justify-center items-center text-2xl text-basic-02 cursor-pointer">
          <i class="fi fi-rr-play w-6 h-6"></i>
          <i class="fi fi-rr-pause w-6 h-6 hidden"></i>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import SlugHeader from '~/components/blog/SlugHeader.vue';
export default {
  async asyncData({ $content, params }) {
    const info = await $content("albaqarah", params.slug).fetch();
    const [prev, next] = await $content('albaqarah')
      .only(['title', 'slug'])
      .sortBy('asc')
      .surround(params.slug)
      .fetch()
    return { info, prev, next };
  },
  
  head() {
      return { title: `${this.info.surah} [${this.info.start} - ${this.info.end}]` };
  },
  mounted() {
    setTimeout(() => {
      FromAya = this.info.startaudio;
      NumberAyah = this.info.start;
      PageSlug()
      console.log("START JavaScript")
    }, 2000);
  },
  components: {
    SlugHeader
  },
}
</script>