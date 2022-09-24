<template>
  <div class="box bg-white border rounded-lg p-4 border-b-8 border-basic-02">
    <i class="fi fi-br-copy mb-2 text-basic-02 cursor-pointer p-2 rounded-full hover:text-basic-01"></i>
    <h3 class="text-basic-02 text-4xl text-center mb-10">بسم الله الرحمان الرحيم</h3>
    <div class="mt-2 flex flex-wrap justify-center">
      <slot></slot>
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
  }
  .box div p:hover{
    border: solid 0.5px #000;
    border-radius: 6px;
  }
  .box div p:focus{
    border: solid 1px #000;
  }
</style>