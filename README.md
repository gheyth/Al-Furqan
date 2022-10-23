# دليل الإضافة:
**في حالة اضافة سورة جديدة:**
سنتعامل في هذا الدليل مع سورة جديدة باسم `mynewsurah` ليكون مساعد لدليل الاضافة
## مجلد surah
سيكون اغلب عملنا في الاول داخل هذا المجلد الذي مساره:
```
/pages/surah
```
هذا المجلد هو المجلد الخاص بقائمة جميع السور، حيث اضافة اي سورة جديدة بمحتواها يكون داخل هذا المجلد

## المرحلة الاولى
### انشاء مجلد للسورة
داخل مجلد `surah/`  الذي يكون داخل `pages/surah/` يتم انشاء مجلد باسم السورة الانجليزي بحروف صغيرة لا يفصل بين الحروف اي فراغات او محتوى نصي اخر. مثل `mynewsurah` ويستحسن ان يكون نفس الاسم للسورة هو نفسه بمجلد `content/`
يكون المسار الجديد هكذا:
```
/pages/surah/mynewsurah
```
فيما بعد داخل مجلد السورة الجديدة يتم انشاء ملفين يكون اسمهما كالتالي:  `index.vue` و `slug.vue_`

### ملف index.vue
يكون:
```
/pages/surah/mynewsurah/index.vue
```
داخل هذا الملف يمكن نسخ ما يلي مع تغيير ما يجب تغييره:
	
قيمة الكود كاملة هكذا:
```
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
        <!--  معلومات بطاقة السورة -->
				 <!--  اختصار لرابط مشاهدة شرح السورة من اليوتيوب -->
      </InfoSurah>

      <ul class="list-surah mt-6">
        <li class="" v-for="article of info" :key="article.slug">
          <NuxtLink class="border border-r-8 rounded-md bg-white border-basic-02 text-basic-02 text-xl px-4 py-2 inline-block" :to="{ name: 'surah-mynewsurah-slug', params: { slug: article.slug } }">من {{article.start}} الى {{article.end}}</NuxtLink>
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
        const info = await $content("mynewsurah")
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
  iframe{
    width: 100% !important;
    height: 409px;
  }
  li{
    padding-right:24px;
  }
</style>
```
ثم يجب تحديث مايجب تحديثه:

```

async asyncData({ $content }) {
        const info = await $content("mynewsurah")
            .fetch();
        return {
            info
        };
    },
```

و
```
:to="{ name: 'surah-mynewsurah-slug', params: ...
```
و


```
<!-- info for surah -->
<InfoSurah>
	<!--  معلومات بطاقة السورة -->
			<!--  اختصار لرابط مشاهدة شرح السورة من اليوتيوب -->		
<InfoSurah>
```

### ملف slug.vue_
يكون:
```
/pages/surah/mynewsurah/_slug.vue
```

داخل ملف `slug.vue_` الذي تم انشائه سابقا قم بنسخ مايلي مع تغيير ما يجب تغييره

لتكون قيمة الكود كاملة هكذا:
```
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
    const info = await $content("mynewsurah", params.slug).fetch();
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
```
ثم يجب تحديث مايجب تحديثه:

```
 async asyncData({ $content, params }) {
    const info = await $content("mynewsurah", params.slug).fetch();
    return { info };
  },
```


## المرحلة الثانية
### اضافة رابط تنقل الى السورة الجديدة

4. ثم في ملف `Surah.vue` الذي تجده في مسار:
```
/components/Surah.vue 
```
يتم اضافة مايلي مع كتابة اسم السورة و مسارها:
```
<div class="list-surah">
		<LinkSurah name="الفاتحة" link="/alfaatiha/" />
 <!-- سورة جديدة -->
		<LinkSurah name="اسم السورة بالعربية" link="/mynewsurah/" />
 </div>
```


## المرحلة الثالثة
### اضافة ملف المحتوى
داخل مجلد: `content/` يتم انشاء مجلد باسم السورة الانجليزي بحروف صغيرة لا يفصل بين الحروف اي فراغات او محتوى نصي اخر. مثل `mynewsurah`

يكون:
```
content/mynewsurah/
```
> ماتم تغييره في ملفات `index.vue` و ملف `slug.vue_` يجب ان يكون بتناسق مع اسم السورة

داخل مسار:
```
/content/mynewsurah
```
يتم انشاء ملف بتنسيق `.md` وهو التنسيق الاساسي لكتابة المحتوى.
يكون هذا الملف هو مجموعة من الايات

### تسمية الملف
على سبيل المثال سورة البقرة المجموعة الاولى اسمها هكذا: `S002V01-07.md` ،  يكون كل ملف هنا هو مجموعة من الايات من سورة معينة ، ويكون اسم الملف هو هوية تلك المجموعة ويحتوي على رقم السورة و رقمين لبداية الايات و نهايتها بتلك المجموعة.

على سبيل المثال :
في هذا المثال نستعرض المجموعة الاولى لسورة البقرة التي آياتها من رقم 1 الى رقم 7 ويكون اسمها هكذا:

```
S002V01-07.md
S{رقم السورة} V{البداية - النهاية }.md
```

### تعديل محتوى الملف
**المحتوى الاول** هو محتوى خاص بالعرض على الموقع لذلك كل ملف لمحتوى مجموعة من الايات يجب ان يتوفر على هذه المعلومات:
```
---
surah: اسم السورة بالعربية
dir: اسم السورة باحرف انجليزية صغيرة فقط
startaudio: رقم ملف الصوت لاول اية
start: البداية برقم الاية
end: النهاية برقم الاية
ayat: عدد ايات السورة
revelation: مكان النزول
---
```

مثال:

```
---
surah: البقرة
dir: albaqarah
startaudio: 8
start: 1
end: 7
ayat: 286
revelation: مدنية
---
```

اما عن بقية محتوى الملف فهو:
الآيات و الترجمة و شرح الآيات و بعض المصطلحات و شرحها

بهذا الترتيب:

> يمكن نسخ المحتوى كاملا من الاسفل


### الآيات

```
<BoxAya>

الايات بسطر جديد بين الاية و التالية مع نهاية السطر يكون بنهاية رقم الاية

</BoxAya>
```
يساعد: https://ar.wikisource.org/wiki/القرآن_الكريم

### الترجمة

```
<BoxEn>

	ترجمة الايات مع نهاية كل سطر بنهاية كل اية

</BoxEn>
```
يساعد: https://quranenc.com/ar/browse/english_rwwad

### الشرح

```
<BoxExpl>

	شرح الايات يكون كقائمة غير مرتبة يكون كل سطر هو رقم الاية ثم الاية ثم الشرح

</BoxExpl>
```
يساعد: https://quran.ksu.edu.sa/index.php

### معاني الكلمات

```
<Box>

	تكون معاني الكلمات كقائمة غير مرتبة كل سطر يحتوي على رقم الاية ثم الكلمات ومعانيها

</Box>
```

يساعد: https://quran.ksu.edu.sa/index.php


يكون محتوى الملف كاملا هكذا:

```
---
surah: 
dir: 
startaudio: 
start: 
end: 
ayat: 
revelation: 
---

# الآيات

<BoxAya>



</BoxAya>

# الترجمة

<BoxEn>



</BoxEn>

# الشرح

<BoxExpl>



</BoxExpl>

# معاني الكلمات

<Box>



</Box>
```





