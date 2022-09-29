<template>
  <article  class="py-10 max">
    <SlugHeader 
      :surah=info.surah
      :revelation=info.revelation
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
    let AyaArray = [];

    setTimeout(() => {
      let aya = document.querySelectorAll(".box div p");
      let expl = document.querySelectorAll(".box-expl ul li")
      let Copy = document.querySelectorAll(".fi-br-copy");
      let copyright = "[تم نسخ هذا النص من مشروع الفرقان - حاضنة غيث: https://gheyth.github.io/]";
      //aya aya
      let CloseAyaAya = document.querySelector(".aya-aya")

      //loop for data
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
          function ExplStart() {
            element.style.backgroundColor = null;
            element.style.opacity = "0.3";
          };
          function ExplClose() {
            element.style.backgroundColor = null;
            element.style.opacity = "1";
          }
          if (mode === true) { ExplStart() }
          else { ExplClose() };
        });
      }
      //for copy text
      Copy.forEach(element => {
        element.addEventListener("click", () => {
          navigator.clipboard.writeText(element.parentElement.innerText + "\n" + copyright);
          Swal.fire({
              position: "bottom-start",
              icon: "success",
              title: "تم نسخ النص بنجاح",
              showConfirmButton: false,
              timer: 1300,
          });
        })
      });
      // For AyaArray
      AyaArray.forEach(element => {
        //for start aya with explain
        element.button.addEventListener("click", () => {
          AyaEch(true)
          ExplEch(true)
          ModeAyaAya(true)
        });
        //for stop aya with explain
        CloseAyaAya.addEventListener("click", () => {
          AyaEch(false)
          ExplEch(false)
          ModeAyaAya(false)
        })

        //list function
        function ModeAyaAya(mode) {
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
            CloseAyaAya.classList.remove("opacity-30")
            CloseAyaAya.classList.add("opacity-100")
          };
          function ModeClose() {
            //ayat
            element.button.style.backgroundColor = null;
            element.button.style.opacity = null;
            //explain
            element.explain.button.style.backgroundColor = null;
            element.explain.button.style.opacity = null;

            //button aya-aya
            CloseAyaAya.classList.remove("opacity-100")
            CloseAyaAya.classList.add("opacity-30")

            //scrollTo
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
          if (mode === true) { ModeStart() }
          else { ModeClose() };
        }
      });
      console.log("START JavaScript")
    }, 2000);
  },
  components: {
    SlugHeader
  },
}
</script>