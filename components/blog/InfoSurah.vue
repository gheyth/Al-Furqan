<template>
  <div class="w-full my-7">
    <div class="info-surah transition-all border border-basic-02 bg-white rounded-md cursor-pointer mb-3 px-3 py-3">
      <div class="flex justify-between text-basic-02 pb-3">
        <h1 class="text-lg font-bold text-basic-02">مقدمة عن السورة</h1>
        <div class="text-xl flex items-center justify-center">
          <i class="fi fi-br-angle-down w-5 h-5"></i>
          <i class="fi fi-br-angle-up hidden"></i>
        </div>
      </div>
      <div>
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
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted(){
    let BoxInfoSurah = document.querySelectorAll(".info-surah");
    BoxInfoSurah.forEach(element => {
      console.log(element)
      element.addEventListener("click", () => {
        element.classList.toggle("h-auto");
        document.querySelector(".fi-br-angle-down").classList.toggle("hidden")
        document.querySelector(".fi-br-angle-up").classList.toggle("hidden")
      })
    })
  }
}
</script>


<style scoped>
  .info-surah{
    overflow:hidden;
    height:51px;
  }
  .h-auto{
    height: auto !important;
  }
  .info-surah h2{
    font-size:18px;
    font-weight: bold;
    margin-top: 12px;
  }
  iframe{
    margin-top: 10px;
    border-radius:6px;
  }
</style>