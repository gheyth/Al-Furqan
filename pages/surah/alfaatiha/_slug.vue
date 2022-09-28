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

      

      for (var i = 0; i < aya.length; i++) {
        const SurahData = {
          id: i,
          aya: aya[i].innerHTML,
          button: aya[i],
          explain: {
            expl: expl[i].innerText,
            button: expl[i]
          }
        };
        AyaArray.push(SurahData);
      }

      //.box div p
      function AyaEch(mode) {
        aya.forEach(element => {
          if (mode === true){ AyaStart() }
          else { AyaClose() };

          function AyaStart() {
            element.style.backgroundColor = null;
            element.style.opacity = "0.3";
          };
          function AyaClose() {
            element.style.backgroundColor = null;
            element.style.opacity = "1";
          }
        });
      }
      //.box-expl ul li
      function ExplEch(mode) {
        expl.forEach(element => {
          if (mode === true) { ExplStart() }
          else {ExplClose()};
          function ExplStart() {
            element.style.backgroundColor = null;
            element.style.opacity = "0.3";
          };
          function ExplClose() {
            element.style.backgroundColor = null;
            element.style.opacity = "1";
          }
        });
      }
      AyaArray.forEach(element => {
        element.button.addEventListener("click", () => {
          AyaEch(true)
          ExplEch(true)
          ModeAyaAya(true)
        });
        AyaAya.addEventListener("click", () => {
          AyaEch(false)
          ExplEch(false)
          ModeAyaAya(false)
        })

        //list function
        function ModeAyaAya(mode) {
          if (mode === true) { ModeStart() }
          else { ModeClose() };

          function ModeStart() {
            //ayat
            element.button.style.backgroundColor = "#cca35a";
            element.button.style.opacity = null;
            //explain
            element.explain.button.style.backgroundColor = "#cca35a";
            element.explain.button.style.opacity = null;

            //to explain
            element.explain.button.scrollIntoView({
              block: 'center',
              inline: 'center'
            })
            //button aya-aya
            AyaAya.classList.remove("opacity-30")
            AyaAya.classList.add("opacity-100")
          };
          function ModeClose() {
            //ayat
            element.button.style.backgroundColor = null;
            element.button.style.opacity = null;
            //explain
            element.explain.button.style.backgroundColor = null;
            element.explain.button.style.opacity = null;

            //button aya-aya
            AyaAya.classList.remove("opacity-100")
            AyaAya.classList.add("opacity-30")
          }
        }
      });
    },
  components: { SlugHeader }
}
</script>