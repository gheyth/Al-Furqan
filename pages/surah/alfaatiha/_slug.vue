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
  </article>
</template>

<script>
import SlugHeader from '~/components/blog/SlugHeader.vue';
export default {
  async asyncData({ $content, params }) {
    const info = await $content("alfaatiha", params.slug).fetch();
    return { info };
  },
  head() {
      return { title: this.info.surah };
  },
  mounted() {
    setTimeout(() => {
      PageSlug()
      console.log("START JavaScript")
    }, 2000);
  },
  components: {
    SlugHeader
  },
}
</script>