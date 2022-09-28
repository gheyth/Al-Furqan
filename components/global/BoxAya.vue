<template>
  <div class="box bg-white border rounded-lg p-4 border-b-8 border-basic-02">
    <i class="fi fi-br-copy mb-2 text-basic-02 cursor-pointer p-2 rounded-full hover:text-basic-01"></i>
    <h3 class="text-basic-02 text-4xl text-center mb-10">بِسْم اللهِ الرَّحْمَانِ الرَّحِيمِ</h3>
    <div class="mt-2 flex flex-wrap justify-center">
      <slot></slot>
    </div>
    <div class="flex justify-end my-2 items-center mx-auto">
        <div class="aya-aya opacity-30 cursor-pointer bg-white flex justify-center w-8 h-8 border border-basic-02 rounded-lg text-xl text-basic-02">
          <i class="fi fi-sr-cross-circle"></i>
        </div>
    </div>
  </div>
</template>
<style scoped>
.box{
    font-family: 'Amiri Quran', serif;
    user-select: none;
  }
  .box h2{
    margin-bottom: 8px;
  }
  .box div p{
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    display: flex;
    border-radius:6px;
    line-height:48px;
    padding: 0 5px;
    padding-bottom: 10px;
    transition: all 0.3s;
    margin: 2px 1px;
  }
  .box div p:hover{
    /* border: solid 0.5px #94682A; */
    /* color: #fff; */
    background-color: #cca35a;
    border-radius: 6px;
    opacity:1 !important;
  }
  .box div p:focus{
    border: solid 1px #000;
  }
</style>