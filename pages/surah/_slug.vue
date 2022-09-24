<template>
  <article  class="py-10 max">
    <nuxt-content :document="info" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const info = await $content("alfaatiha", params.slug).fetch();
    return { info };
  },
  head() {
      return { title: this.info.title };
  },
  mounted() {
    let aya = document.querySelectorAll(".box div p")
    let AyaArray = []
    for (var i = 0; i < aya.length; i++){
      const surah = {
        id: i,
        aya: aya[i].innerHTML,
        button: aya[i]
      }
      AyaArray.push(surah)
    }
    console.log(AyaArray)
    AyaArray.forEach(element => {
      element.button.onclick = () => {console.log(element.aya)}
    });
  }
}
</script>