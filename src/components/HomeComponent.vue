<template>
  <div id="app">
    <LoadingComponent v-if="loading" />
    <div v-else>
      <div class="w-full h-[600px] bg-cover bg-center relative"
        :style="{ backgroundImage: `url(${images[currentIndex]})` }">
        <div class="absolute w-full bg-black/60 h-full flex flex-col space-y-4 items-center justify-center">
          <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400"
            class="text-white text-center text-3xl sm:text-4xl md:text-[54px] leading-snug sm:font-extrabold uppercase">
            {{ titles[currentIndex] }}
          </h1>
          <div class="w-full lg:w-3/6 mx-auto lg:py-4">
            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400"
              class="text-base lg:text-[20px] text-gray-200 text-center">
              {{ subtitle[currentIndex] }}
            </p>
          </div>
          <div class="flex items-center justify-center pt-4" data-aos="fade-up" data-aos-duration="1000"
            data-aos-delay="400">
            <a href="#"
              class="px-12 py-4 text-lg font-bold uppercase bg-red-700 rounded-full text-white">Contactez-nous</a>
          </div>
        </div>
        <div
          class="w-full  top-[220px] px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 absolute flex items-center justify-between">
          <button
            class="text-2xl text-white font-bold w-16 h-16 rounded-full hover:bg-gray-900 bg-gray-900/30 flex items-center justify-center"
            @click="prevSlide">
            <img src="../assets/img/left.png" class="w-6 h-6" alt="" />
          </button>
          <button
            class="text-2xl text-white font-bold w-16 h-16 rounded-full hover:bg-gray-900 bg-gray-900/30 flex items-center justify-center"
            @click="nextSlide">
            <img src="../assets/img/right-arrow-angle.png" class="w-6 h-6" alt="" />
          </button>
        </div>
      </div>
       <CounterComponent/>
       <div class="w-full h-12"></div>
      <div class="w-full h-auto lg:p-8 space-y-8 container mx-auto">
        <div class="space-y-4 text-center w-full">
          <h2 class="text-3xl sm:text-4xl xl:text-5xl uppercase font-extrabold text-gray-800" data-aos-once="false"
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            Boostez votre routine quotidienne <br class="hidden md:flex" />
            avec nous
          </h2>
          <p class="text-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque.
            veniam repellat veritatis.
          </p>
        </div>
        <div class="grid grid-cols-8 sm:grid-cols-8 md:grid-cols-12 grid-flow-row gap-8">
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"
            class="hover:-translate-y-4 duration-200 col-span-4 xl:col-span-3 space-y-4 p-8 flex flex-col justify-center items-center">
            <img src="../assets/img/male.png" width="100" height="100" alt="male" />
            <p class="text-lg text-center" data-aos-once="false" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="400">remise en forme</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"
            class="hover:-translate-y-4 duration-200 col-span-4 xl:col-span-3 space-y-4 p-8 flex flex-col justify-center items-center">
            <img src="../assets/img/weight-scale.png" width="100" height="100" alt="male" />
            <p class="text-lg text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Perte de
              poids
              rapide</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"
            class="hover:-translate-y-4 duration-200 col-span-4 xl:col-span-3 space-y-4 p-8 flex flex-col justify-center items-center">
            <img src="../assets/img/bottom-view.png" width="100" height="100" alt="male" />
            <p class="text-lg text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Tonifier mon
              corps</p>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"
            class="hover:-translate-y-4 duration-200 col-span-4 xl:col-span-3 space-y-4 p-8 flex flex-col justify-center items-center">
            <img src="../assets/img/heartbeat.png" width="100" height="100" alt="male" />
            <p class="text-lg text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Soulagement
              du
              stress</p>
          </div>
        </div>
      </div>
      <div class="w-full p-4 sm:p-8 xl:p-12 my-8 flex flex-col space-y-8 items-center justify-center">
        <div class="w-full lg:w-5/6 space-y-4">
          <h3 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400"
            class="text-3xl md:text-4xl text-center uppercase lg:text-5xl font-extrabold text-gray-900">
            Transform Your Fitness Journey in Smarter Way
          </h3>
          <p class="text-lg text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit natus
            saepe numquam.
          </p>
        </div>
        <div
          class="grid grid-cols-4 lg:grid-cols-8 grid-flow-row gap-10 bg-gray-100 rounded-3xl sm:p-8 xl:p-12 items-center w-full sm:h-[600px] lg:h-[500px]">
          <div class="col-span-4 space-y-4 xl:space-y-6 p-4 md:p-0">
            <h3 class="text-4xl xl:text-5xl font-extrabold" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="400">
              Ai Powered Fitness Trainer
            </h3>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa
              doloribus. <br class="hidden md:flex" />
              voluptatum quia ad voluptates dolor!
            </p>
            <div class="w-full py-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <a href="#" class="px-6 py-3 md:py-4 rounded-full bg-black hover:bg-red-800 text-white duration-300">See
                more</a>
            </div>
          </div>
          <div class="col-span-4 rounded-3xl overflow-hidden h-[300px]" data-aos="fade-up" data-aos-duration="1000"
            data-aos-delay="400">
            <img src="../assets/img/coach-4.jpg" class="w-full h-full object-cover object-center" alt="image_font" />
          </div>
        </div>

        <div
          class="grid grid-cols-4 lg:grid-cols-8 grid-flow-row gap-10 bg-gray-100 rounded-3xl sm:p-8 xl:p-12 items-center ">
          <div class="col-span-4 rounded-3xl overflow-hidden h-[300px]" data-aos="fade-up" data-aos-duration="1000"
            data-aos-delay="400">
            <img src="../assets/img/dim1.jpg" class="w-full h-full object-cover object-center" alt="image_font" />
          </div>
          <div class="col-span-4 space-y-4 xl:space-y-6 row-start-1 lg:row-start-auto p-4 md:p-0">
            <h3 class="text-4xl xl:text-5xl font-extrabold" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="400">
              Diet and Workout Guide
            </h3>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit
              Culpa doloribus Lorem ipsum dolor sit, amet consectetur adipisicing
              elit Culpa doloribus Lorem ipsum dolor sit, amet consectetur
              adipisicing elit Culpa doloribus voluptatum quia ad voluptates
              dolor!
            </p>
            <div class="w-full py-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <a href="#" class="px-6 py-4 rounded-full bg-black hover:bg-red-800 text-white duration-300">See more</a>
            </div>
          </div>
        </div>
        <div
          class="grid grid-cols-4 lg:grid-cols-8 grid-flow-row gap-10 bg-gray-100 rounded-3xl sm:p-8 xl:p-12 items-center w-full">
          <div class="col-span-4 space-y-4 xl:space-y-6 p-4 md:p-0">
            <h3 class="text-4xl xl:text-5xl font-extrabold" data-aos="fade-up" data-aos-duration="1000"
              data-aos-delay="400">
              Unique Routines & Health Metrics
            </h3>
            <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa
              doloribus. <br />
              voluptatum quia ad voluptates dolor!
            </p>
            <div class="w-full py-4" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
              <a href="#" class="px-6 py-4 rounded-full bg-black hover:bg-red-800 text-white duration-300">See more</a>
            </div>
          </div>
          <div class="col-span-4 rounded-3xl overflow-hidden h-[300px]" data-aos="fade-up" data-aos-duration="1000"
            data-aos-delay="400">
            <img src="../assets/img/dim2.jpg" class="w-full h-full object-cover object-center" alt="image_font" />
          </div>
        </div>
      </div>
      <WindowsComponent/>
      <AbonnementComponent/>
      <TestimonialsComponent></TestimonialsComponent>
      <div class="w-full md:h-12"></div>
      <QuestionsComponent></QuestionsComponent>
      <div class="w-full flex justify-center">
        <div class="w-full xl:w-11/12 flex flex-col lg:flex-row">
          <div class="w-full lg:w-1/2 h-full bg-red-600 p-8 lg:py-24 lg:px-12 flex items-center">
            <div class="w-full space-y-4 flex flex-col justify-center items-end">
              <h3 class="text-[40px] text-white font-extrabold" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="400">Body Building</h3>
              <p class="text-lg text-white text-end" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum
                ut diam sit dolores, dolor sit eos sea sanctus erat lorem nonumy
                sanctus takimata. Kasd amet sit sadipscing at..
              </p>
              <div class="flex items-center justify-center pt-4" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="400">
                <a href="#" class="px-8 py-3 text-xl font-bold uppercase border border-white text-white">Join Now</a>
              </div>
            </div>
          </div>
          <div class="w-full lg:w-1/2 h-full bg-black p-8 lg:py-24 lg:px-12 flex items-center">
            <div class="w-full space-y-4 flex flex-col justify-center items-start">
              <h3 class="text-[40px] text-white font-extrabold" data-aos="fade-up" data-aos-duration="1000"
                data-aos-delay="400">
                Muscle Building
              </h3>
              <p class="text-lg text-white text-start" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum
                ut diam sit dolores, dolor sit eos sea sanctus erat lorem nonumy
                sanctus takimata. Kasd amet sit sadipscing at..
              </p>
              <div class="flex items-center justify-start pt-4">
                <a href="#" class="px-8 py-3 text-xl font-bold uppercase border border-white text-white">Join Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full h-24"></div>
      <FooterComponent></FooterComponent>
      <ScroollTopComponent/>
    </div>

  </div>
</template>

<script>
import FooterComponent from './FooterComponent.vue';
import QuestionsComponent from './questionsComponent.vue';
import TestimonialsComponent from './testimonialsComponent.vue';
import LoadingComponent from './LoadingComponent.vue';
import CounterComponent from './CounterComponent.vue';
import AbonnementComponent from './AbonnementComponent.vue';
import WindowsComponent from './WindowsComponent.vue';
import ScroollTopComponent from './ScroollTopComponent.vue';


export default {
  data() {
    return {
      loading: true,
      currentIndex: 0,
      images: [
        "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600",
      ],
      titles: [
        "Welcome to you",
        "Get the latest moving information",
        "The latest moving information",
      ],
      subtitle: [
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, excepturi? Veniam consequatur ",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, excepturi? Veniam consequatur ",
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, excepturi? Veniam consequaturMolestiae, excepturi? Veniam consequatur ",
      ],

    };
  },
  components: {
    QuestionsComponent,
    TestimonialsComponent,
    FooterComponent,
    LoadingComponent,
    CounterComponent,
    AbonnementComponent,
    WindowsComponent,
    ScroollTopComponent
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.images.length) % this.images.length;
    },
    updateFile(index) {
      this.indexFitness = index;
      console.log(this.indexFitness)
    },

    next() {
      if (this.index < this.items.length - 1) {
        this.index++;
      }
    },
    prev() {
      if (this.index > 0) {
        this.index--;
      }
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false
    }, 2000)
  }
};
</script>

<style></style>