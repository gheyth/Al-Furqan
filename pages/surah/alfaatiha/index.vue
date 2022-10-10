<template>
  <section>
    <IntroBlog
      title="الصفحات"
      info="فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ  (98) (النحل)"
    />
    <div class="container mx-auto my-0 py-11 w-4/5">
      <h1 class="text-center text-basic-02 text-5xl font-black">المحتوى</h1>

      <div class="flex justify-end items-center my-0 mt-5 mx-auto">
        <div class="z-30 cursor-pointer text-xl text-basic-02 flex items-center justify-between">
          <NuxtLink to="/surah/" class=" bg-white flex items-center justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
            <i class="fi fi-rr-angle-double-small-left w-5 h-5"></i>
          </NuxtLink>
        </div>
      </div>

      <!-- info for surah -->
      <InfoSurah>
        <h2 id="اسم-السورة-">اسم السورة :</h2>
        <p>الفاتحة - مكية</p>
        <p>آياتها سبع نزلت بعد المدثر</p>
        <h2 id="معلومات">معلومات:</h2>
        <ol>
        <li>سورة مكية</li>
        <li>من سور المثاني</li>
        <li>عدد آياتها سبعة مع البسملة</li>
        <li>هي السورة الأولى في ترتيب المصحف الشريف</li>
        <li>نـَزَلـَتْ بـَعـْدَ سـُورَةِ المـُدَّثـِّرِ</li>
        <li>تبدأ السورة بأحد أساليب الثناء &quot; الحمد لله&quot; لم يذكر لفظ الجلالة إلا مرة واحدة وفي الآية الأولى</li>
        <li>الجزء ( 1 ) ، الحزب ( 1 ) الربع ( 1 )</li>
        </ol>
        <h2 id="من-مقاصد-السورة">من مقاصد السورة:</h2>
        <p>تحقيق العبودية الخالصة لله تعالى. </p>
        <h2 id="سبب-نزولها-">سبب نزولها :</h2>
        <p>عن أبي ميسرة أن رسول كان إذا برز سمع مناديا يناديه: يا محمد فإذا سمع الصوت انطلق هاربا فقال له ورقة بن نوفل : إذا سمعت النداء فاثبت حتى تسمع ما يقول لك قال : فلما برز سمع النداء يا محمد فقال :لبيك قال : قل أشهد أن لا إله إلا الله وأشهد أن محمدًا رسول الله ثم قال قل :الحمد لله رب العالمين الرحمن الرحيم مالك يوم الدين حتى فرغ من فاتحة الكتاب وهذا قول علي بن أبي طالب .‏</p>
        <h2 id="سبب-التسمية-">سبب التسمية :</h2>
        <p>تُسَمَّى ‏‏ ‏الفَاتِحَةُ ‏‏ ‏لافْتِتَاحِ ‏الكِتَابِ ‏العَزِيزِ ‏بهَا ‏وَتُسَمَّى ‏‏ ‏أُمُّ ‏الكِتَابِ ‏‏ ‏لأنهَا ‏جَمَعَتْ ‏مَقَاصِدَهُ ‏الأَسَاسِيَّةَ ‏وَتُسَمَّى ‏أَيْضَاً ‏السَّبْعُ ‏المَثَانِي ‏‏، ‏وَالشَّافِيَةُ ‏‏، ‏وَالوَافِيَةُ ‏‏، ‏وَالكَافِيَةُ ‏‏، ‏وَالأَسَاسُ ‏‏، ‏وَالحَمْدُ‎ .‎</p>
        <h2 id="مرئيات-لتفسير-السور">مرئيات لتفسير السور</h2>

        <iframe width="100%" height="409" src="https://www.youtube.com/embed/ClBkpxJG4c8?list=PLoslTfCHb8N-fI69sNcTAVTh9JDrspjo2" title="01 - قراءة تفسير سورة الفاتحة من كتاب المختصر - بصوت: د.عبدالله الأسمري" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </InfoSurah>

      <ul class="list-surah mt-6">
        <li class="" v-for="article of info" :key="article.slug">
          <NuxtLink class="border border-r-8 rounded-md bg-white border-basic-02 text-basic-02 text-xl px-4 py-2 inline-block" :to="{ name: 'surah-alfaatiha-slug', params: { slug: article.slug } }">من {{article.start}} الى {{article.end}}</NuxtLink>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import IntroBlog from '../../../components/blog/intro-blog.vue';
import InfoSurah from '../../../components/blog/InfoSurah.vue';
  export default {
    async asyncData({ $content }) {
        const info = await $content("alfaatiha")
            .fetch();
        return {
            info
        };
    },
    components: { IntroBlog, InfoSurah }
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