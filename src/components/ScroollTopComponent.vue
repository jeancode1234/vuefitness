<template>
  <div>
    <button v-if="showScrollTop" @click="scrollTop" class="fixed z-30 bg-black/60 mb-4 bottom-0 right-4 rounded outline-none">
        <img src="../assets/icons/fleche.png" class="w-12 h-12 " alt="icon_scroll_top">
    </button>
  </div>
</template>
<script>
 export default{
    data(){
        return{
            showScrollTop:false,
        };
    },
    methods:{
      scrollTop(){
        window.scrollTo({top: 0, behavior: 'smooth'});
      },
      handleScroll(){
        this.showScrollTop = window.scrollY > 300;
      },
    },
    mounted(){
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount(){
        window.removeEventListener('scroll', this.handleScroll);
    },
 };
</script>