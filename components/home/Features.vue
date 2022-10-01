<template>
  <section id="Content" class="h-screen w-full py-32 px-10 flex justify-center items-center">
    <div>
      <h1 class="text-center text-basic-02 text-6xl font-semibold">اَلْمُحْتَوَى</h1>
      <div class="cards grid gap-8 grid-cols-4 grid-rows-none flex-wrap">
        <div class="card px-3 py-5 mt-28 border rounded p-5 bg-white w-64 text-center">
          <i class="fi fi-rr-e-learning text-4xl text-basic-02"></i>
          <h3 class="text-center font-black text-basic-02 mb-3">القرآن الكريم</h3>
          <p class="text-center text-basic-01">آيات بينات من الله في الفرقان هنا منظمة مقسمة بعدد صفحات المصحف المبارك</p>
        </div>

        <div class="card px-3 py-5 mt-28 border rounded p-5 bg-white w-64 text-center">
          <i class="fi fi-rr-duplicate text-4xl text-basic-02"></i>
          <h3 class="text-center font-black text-basic-02 mb-3">التفسير</h3>
          <p class="text-center text-basic-01">تفسير آية بآية مع خاصية الضغط على اي آية لينقلك الى تفسيرها مباشرة</p>
        </div>

        <div class="card px-3 py-5 mt-28 border rounded p-5 bg-white w-64 text-center">
          <i class="fi fi-rr-text-check text-4xl text-basic-02"></i>
          <h3 class="text-center font-black text-basic-02 mb-3">معاني الكلمات</h3>
          <p class="text-center text-basic-01">معاني لاصعب الكلمات في الآيات لكل صفحة من صفحات القرآن المبارك</p>
        </div>

        <div class="card px-3 py-5 mt-28 border rounded p-5 bg-white w-64 text-center">
          <i class="fi fi-rr-subtitles text-4xl text-basic-02"></i>
          <h3 class="text-center font-black text-basic-02 mb-3">الترجمة الإنجليزية</h3>
          <p class="text-center text-basic-01">ترجمة جميع الآيات الى اللغة الإنجليزية من مصادر رسمية</p>
        </div>
      </div>
      <div class="flex justify-center w-full mt-7">
        <NuxtLink  to="/surah/" class="w-64 text-white text-center my-0 mx-auto inline-block py-1 mt-5 rounded-xl bg-basic-02">الذهاب الى قائمة السور</NuxtLink>
      </div>
    </div>
  </section>
</template>