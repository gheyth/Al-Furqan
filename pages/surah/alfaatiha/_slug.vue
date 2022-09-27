<template>
  <article  class="py-10 max">
    <SlugHeader 
      :surah=info.surah
      :start=info.start
      :end=info.end
      :revelation=info.revelation
      link="#"
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
        return { title: this.info.title };
    },
    mounted() {
      let AyaArray = [];
      let aya = document.querySelectorAll(".box div p");
      let expl = document.querySelectorAll(".box-expl ul li")
      //aya aya
      let AyaAya = document.querySelector(".aya-aya")

      AyaAya.style.opacity = "0.3"
      AyaAya.addEventListener("click", () => {
        console.log("fares")
      })

      for (var i = 0; i < aya.length; i++) {
        const surah = {
          id: i,
          aya: aya[i].innerHTML,
          button: aya[i],
          explain: {
            expl: expl[i].innerText,
            button: expl[i]
          }
        };
        AyaArray.push(surah);
      }
      console.log(AyaArray)
      AyaArray.forEach(element => {
        element.button.addEventListener("click", () => {
              //.box div p
              aya.forEach(element => {
                  element.style.backgroundColor = null;
                  element.style.opacity = "0.3";
              });
              //.box-expl ul li
              expl.forEach(element => {
                  element.style.backgroundColor = null;
                  element.style.opacity = "0.3";
                  element.removeAttribute("id")
              });
              ModeJsStart()
          });

        //list function
        function ModeJsStart() {
          //ayat
          element.button.style.backgroundColor = "#cca35a";
          element.button.style.opacity = null;
          //explain
          element.explain.button.style.backgroundColor = "#cca35a";
          element.explain.button.style.opacity = null;
          element.explain.button.id = "loc"

          //to explain

          //button aya-aya
          AyaAya.style.opacity = "1"
        }
      });
  },
  components: { SlugHeader }
}
</script>