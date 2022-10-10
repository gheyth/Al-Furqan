<template>
  <div class="background w-full h-96 flex justify-center items-center">
    <div class="text-basic-01 text-border">
      <h1 class="intro-blog-h1 font-black text-5xl text-center">{{title}}</h1>
      <p class="intro-blog-p text-3xl mt-5 text-center">{{info}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: String,
    info:String
  }
}
</script>

<style scoped>
  .background{
    background-color: #000;
    position: relative;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 25vh;
    background-image: url('~assets/img/koran.jpg');

  }
  .text-border{
    text-shadow:
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
  }
  @media (min-width:2050px){
    .background{
      height: 80vh;
    }
  }
</style>