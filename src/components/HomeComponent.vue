<template>
  <div id="app">
    <div class="w-full h-[600px] bg-cover bg-center relative"
      :style="{ backgroundImage: `url(${images[currentIndex]})` }">
      <div class="absolute w-full bg-black/60 h-full flex flex-col space-y-4 items-center justify-center">
        <h1 class="text-white text-[40px] uppercase">
          {{ titles[currentIndex] }}
        </h1>
        <div class="w-3/6 mx-auto">
          <p class="text-base text-gray-200 text-center">
            {{ subtitle[currentIndex] }}
          </p>
        </div>
        <div class="flex items-center justify-center pt-4">
          <a href="#" class="px-12 py-3 text-lg font-bold uppercase bg-red-700 rounded text-white">Contactez-nous</a>
        </div>
      </div>
      <div class="w-full top-[220px] px-12 absolute flex items-center justify-between">
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
    <div class="w-full flex justify-center">
      <div class="w-full xl:w-5/6 bg-black flex flex-col lg:flex-row transform -translate-y-24">
        <div class="w-full lg:w-1/2 h-full bg-red-600 p-8 lg:py-24 lg:px-12 flex items-center">
          <div class="w-full space-y-4 flex flex-col justify-center items-end">
            <h3 class="text-[40px] text-white font-extrabold">Body Building</h3>
            <p class="text-lg text-white text-end">
              lorem justo tempor sit aliquyam invidunt, amet vero ea dolor ipsum
              ut diam sit dolores, dolor sit eos sea sanctus erat lorem nonumy
              sanctus takimata. Kasd amet sit sadipscing at..
            </p>
            <div class="flex items-center justify-center pt-4">
              <a href="#" class="px-8 py-3 text-xl font-bold uppercase border border-white text-white">Join Now</a>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 h-full bg-black p-8 lg:py-24 lg:px-12flex items-center">
          <div class="w-full space-y-4 flex flex-col justify-center items-start">
            <h3 class="text-[40px] text-white font-extrabold">
              Muscle Building
            </h3>
            <p class="text-lg text-white text-start">
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
    <div class="w-full h-auto lg:p-8 space-y-8 container mx-auto">
      <div class="space-y-4 text-center w-full">
        <h2 class="text-4xl xl:text-5xl uppercase font-extrabold text-gray-800">
          Boostez votre routine quotidienne <br class="hidden md:flex" />
          avec nous
        </h2>
        <p class="text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque.
          veniam repellat veritatis.
        </p>
      </div>
      <div class="grid grid-cols-8 sm:grid-cols-8 md:grid-cols-12 grid-flow-row gap-8">
        <div
          class="hover:-translate-y-4 duration-200 col-span-4 xl:col-span-3 space-y-4 p-8 flex flex-col justify-center items-center">
          <img src="../assets/img/male.png" width="100" height="100" alt="male" />
          <p class="text-lg text-center">remise en forme</p>
        </div>
        <div
          class="hover:-translate-y-4 duration-200 col-span-4 xl:col-span-3 space-y-4 p-8 flex flex-col justify-center items-center">
          <img src="../assets/img/weight-scale.png" width="100" height="100" alt="male" />
          <p class="text-lg text-center">Perte de poids rapide</p>
        </div>
        <div
          class="hover:-translate-y-4 duration-200 col-span-4 xl:col-span-3 space-y-4 p-8 flex flex-col justify-center items-center">
          <img src="../assets/img/bottom-view.png" width="100" height="100" alt="male" />
          <p class="text-lg text-center">Tonifier mon corps</p>
        </div>
        <div
          class="hover:-translate-y-4 duration-200 col-span-4 xl:col-span-3 space-y-4 p-8 flex flex-col justify-center items-center">
          <img src="../assets/img/heartbeat.png" width="100" height="100" alt="male" />
          <p class="text-lg text-center">Soulagement du stress</p>
        </div>
      </div>
    </div>
    <div class="w-full p-4 sm:p-8 xl:p-12 my-8 flex flex-col space-y-8 items-center justify-center">
      <div class="w-full lg:w-5/6 space-y-4">
        <h3 class="text-4xl text-center uppercase lg:text-5xl font-extrabold text-gray-900">
          Transform Your Fitness Journey in Smarter Way
        </h3>
        <p class="text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit natus
          saepe numquam.
        </p>
      </div>
      <div
        class="grid grid-cols-4 lg:grid-cols-8 grid-flow-row gap-10 bg-gray-100 rounded-3xl lg:p-8 xl:p-12 items-center sm:h-[600px] lg:h-[500px]">
        <div class="col-span-4 space-y-4 xl:space-y-6 p-4 md:p-0">
          <h3 class="text-4xl xl:text-5xl font-extrabold">
            Ai Powered Fitness Trainer
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa
            doloribus. <br class="hidden md:flex" />
            voluptatum quia ad voluptates dolor!
          </p>
          <div class="w-full py-4">
            <a href="#" class="px-6 py-3 md:py-4 rounded-full bg-black hover:bg-red-800 text-white duration-300">See
              more</a>
          </div>
        </div>
        <div class="col-span-4 rounded-3xl overflow-hidden h-full">
          <img src="../assets/img/dim.jpg" class="w-full h-full object-cover object-center" alt="image_font" />
        </div>
      </div>

      <div
        class="grid grid-cols-4 lg:grid-cols-8 grid-flow-row gap-10 bg-gray-100 rounded-3xl lg:p-8 xl:p-12 items-center h-[500px]">
        <div class="col-span-4 rounded-3xl overflow-hidden h-full">
          <img src="../assets/img/dim1.jpg" class="w-full h-full object-cover object-center" alt="image_font" />
        </div>
        <div class="col-span-4 space-y-4 xl:space-y-6">
          <h3 class="text-2xl md:text-4xl xl:text-5xl font-extrabold">
            Diet and Workout Guide
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa
            doloribus. Lorem ipsum dolor sit, amet consectetur adipisicing elit
            Culpa doloribus Lorem ipsum dolor sit, amet consectetur adipisicing
            elit Culpa doloribus Lorem ipsum dolor sit, amet consectetur
            adipisicing elit Culpa doloribus voluptatum quia ad voluptates
            dolor!
          </p>
          <div class="w-full py-4">
            <a href="#" class="px-6 py-4 rounded-full bg-black hover:bg-red-800 text-white duration-300">See more</a>
          </div>
        </div>
      </div>
      <div
        class="grid grid-cols-4 lg:grid-cols-8 grid-flow-row gap-10 bg-gray-100 rounded-3xl lg:p-8 xl:p-12 items-center h-[500px]">
        <div class="col-span-4 space-y-4 xl:space-y-6">
          <h3 class="text-2xl md:text-4xl xl:text-5xl font-extrabold">
            Unique Routines & Health Metrics
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit Culpa
            doloribus. <br />
            voluptatum quia ad voluptates dolor!
          </p>
          <div class="w-full py-4">
            <a href="#" class="px-6 py-4 rounded-full bg-black hover:bg-red-800 text-white duration-300">See more</a>
          </div>
        </div>
        <div class="col-span-4 rounded-3xl overflow-hidden h-full">
          <img src="../assets/img/dim2.jpg" class="w-full h-full object-cover object-center" alt="image_font" />
        </div>
      </div>
    </div>
    <div class="w-full p-8 xl:p-12 my-8 flex flex-col space-y-8 items-center justify-center bg-black">
      <div class="w-full lg:w-5/6 mx-auto space-y-4">
        <h2 class="text-2xl lg:text-4xl xl:text-5xl uppercase font-extrabold text-center text-white">
          Perfect Plan for your <br />
          fitness Goals
        </h2>
        <p class="text-white text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
          perferendis.
        </p>

        <div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 grid-flow-row gap-12 py-8">
          <div class="col-span-4 rounded-2xl p-8 border space-y-4">
            <h4 class="text-white uppercase text-4xl font-extrabold text-center">
              Basic Plan
            </h4>
            <div class="w-full flex flex-col justify-center items-center py-4">
              <p class="text-4xl font-extrabold text-white">
                $19.99/<span class="text-sm text-gray-100">month</span>
              </p>
              <div class="w-full space-y-4 text-white py-4 flex-col justify-center items-center">
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Single Personalized Plan</p>
                </div>
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Tailared To Fitness Goals</p>
                </div>
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Basic Workout</p>
                </div>
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Meal Suggestions</p>
                </div>
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Email Support</p>
                </div>
                <div class="w-full flex items-center justify-center pt-4">
                  <a href="#" class="px-8 py-3 bg-white text-black rounded-full font-semibold">Join Now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-4 rounded-2xl p-8 bg-white space-y-4 shadow-2xl shadow-white">
            <h4 class="text-black uppercase text-4xl font-extrabold text-center">
              Pro Plan
            </h4>
            <div class="w-full flex flex-col justify-center items-center py-4">
              <p class="text-4xl font-extrabold text-black">
                $39.99/<span class="text-sm text-gray-900">month</span>
              </p>
              <div class="w-full space-y-4 text-black py-4 flex-col justify-center items-center">
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Single Personalized Plan</p>
                </div>
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Tailared To Fitness Goals</p>
                </div>
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Basic Workout</p>
                </div>
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Meal Suggestions</p>
                </div>
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Email Support</p>
                </div>
                <div class="w-full flex items-center justify-center pt-4">
                  <a href="#" class="px-8 py-3 bg-black text-white rounded-full font-semibold">Join Now</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-span-4 rounded-2xl p-8 border space-y-4">
            <h4 class="text-white uppercase text-4xl font-extrabold text-center">
              Elite Plan
            </h4>
            <div class="w-full flex flex-col justify-center items-center py-4">
              <p class="text-4xl font-extrabold text-white">
                $79.99/<span class="text-sm text-gray-100">month</span>
              </p>
              <div class="w-full space-y-4 text-white py-4 flex-col justify-center items-center">
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Single Personalized Plan</p>
                </div>
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Tailared To Fitness Goals</p>
                </div>
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Basic Workout</p>
                </div>
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Meal Suggestions</p>
                </div>
                <div class="w-full flex space-x-4 items-center">
                  <div class="w-3 h-3 bg-red-600 rounded-full"></div>
                  <p>Email Support</p>
                </div>
                <div class="w-full flex items-center justify-center pt-4">
                  <a href="#" class="px-8 py-3 bg-white text-black rounded-full font-semibold">Join Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="w-full p-8 xl:p-12 my-8 flex flex-col space-y-8 items-center justify-center">
      <div class="w-full lg:w-5/6 mx-auto space-y-4">
        <h2 class="text-2xl lg:text-4xl uppercase font-extrabold text-center">
          Des Exercices intences <br />
          Pour une remise en forme exceptionnelle
        </h2>
        <p class="text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
          perferendis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Provident, perferendis. Lorem ipsum dolor, sit amet consectetur
          adipisicing elit Provident, perferendis. Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Provident, perferendis.
        </p>
        <div class="flex flex-wrap justify-center space-y-4 lg:space-y-0 space-x-8 w-full lg:w-11/12 mx-auto items-center">
          <div class="" v-for="(item, index) in btns" :key="index">
            <div class="w-full flex space-x-4">
              <button @click="updateFile(index)" class="p-4 rounded-full bg-black cursor-pointer text-white">
                {{ item.title }}
              </button>
            </div>
          </div>
        </div>
          <div class="w-full" >
            <div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 grid-flow-row gap-8 py-8">
              <div v-for="(item, index) in btns[indexFitness].imgs" :key="index" class="col-span-4 overflow-hidden cursor-pointer">
                <img :src="item" class="w-full object-cover object-center hover:scale-110 duration-300" alt="coach-6" />
              </div>
            </div>
          </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      indexFitness: 0,
      btns: [
        {
          title: "Fitness et Sport",
          imgs: [
            "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.unsplash.com/photo-1448387473223-5c37445527e7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNwb3J0fGVufDB8fDB8fHww",
            "https://media.istockphoto.com/id/2128048740/fr/photo/gymnase-sport-fitness-exercice-sant%C3%A9-en-bonne-sant%C3%A9-femme-tapis-roulant-formation-%C3%A9quipement.webp?a=1&b=1&s=612x612&w=0&k=20&c=rim-gKE0PZVsQglhiU99ExfCCYRio3_2g4BYgZ8ic7Y=",
            "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D",
          ],
          isOpen: false,
        },
        {
          title: " Divertissements",
          imgs: [
            "https://plus.unsplash.com/premium_photo-1661868906940-5d8443acf49e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BvcnR8ZW58MHx8MHx8fDA%3D",
            "https://plus.unsplash.com/premium_photo-1664537975122-9c598d85816e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c3BvcnR8ZW58MHx8MHx8fDA%3D",
            "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNwb3J0fGVufDB8fDB8fHww",
            "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600",
          ],
          isOpen: false,
        },
        {
          title: "Nutrition",
          imgs: [
            "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600",
          ],
          isOpen: false,
        },
        {
          title: "Entrainement",
          imgs: [
            "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600",
          ],
          isOpen: false,
        },
        {
          title: "Suivi et Conseils",
          imgs: [
            "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://images.pexels.com/photos/2294361/pexels-photo-2294361.jpeg?auto=compress&cs=tinysrgb&w=600",
          ],
          isOpen: false,
        },
      ],
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
  },
};
</script>

<style></style>