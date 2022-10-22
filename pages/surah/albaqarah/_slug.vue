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
    return { info };
  },
  head() {
      return { title: this.info.surah };
  },
  mounted() {
    setTimeout(() => {
      FromAya = this.info.startaudio;
      PageSlug()
      console.log("START JavaScript")
    }, 2000);
  },
  components: {
    SlugHeader
  },
}
</script>