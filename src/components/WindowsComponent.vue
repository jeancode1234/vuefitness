<template>
    <div>
        <section class="w-full bg-black text-white p-4 sm:p-8 xl:p-12 mt-8 flex flex-col space-y-8 items-center justify-center">
            <div class="w-full mx-auto space-y-4">
                <h2 class="text-2xl sm:text-4xl uppercase font-extrabold text-center" data-aos="fade-up"
                    data-aos-duration="1000" data-aos-delay="400">
                    Des Exercices intences <br class="hidden lg:flex" />
                    Pour une remise en forme exceptionnelle
                </h2>
                <p class="text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident,
                    perferendis. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Provident, perferendis. Lorem ipsum dolor, sit amet consectetur
                    adipisicing elit Provident, perferendis. Lorem ipsum dolor, sit amet
                    consectetur adipisicing elit. Provident, perferendis.
                </p>
                <div class="w-full h-12"></div>
                <div
                    class="flex my-4 overflow-x-auto whitespace-nowrap space-x-2 lg:space-x-8 w-auto justify-center items-center">
                    <div class="" v-for="(item, index) in btns" :key="index">
                        <div class=" flex space-x-4">
                            <button @click="updateFile(index)"
                                class="p-4 rounded-full bg-gradient-to-tl to-black from-black via-red-600 cursor-pointer text-white">
                                {{ item.title }}
                            </button>
                        </div>
                    </div>
                </div>
                <div class="w-full">
                    <div
                        class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 grid-flow-row gap-8 p-8 justify-center items-center">
                        <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" v-for="(item, index) in btns[indexFitness].imgs" :key="index"
                            class="col-span-4 cursor-pointer">
                            <img :src="item"
                                class="w-full object-cover rounded-2xl object-center hover:scale-110 duration-300"
                                alt="coach-6" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    </div>
</template>
<script>
export default {
  data() {
    return {
      index: 0,
      indexFitness: 0,
      btns: [

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
            "https://siliciumg5.com/blog/wp-content/uploads/2022/11/Lunges-avec-ou-sans-saut.jpg",
            "https://img.freepik.com/photos-premium/entraineur-personnel-homme-fort-entrainement-groupe-entrainement-exercice-planche-laterale-fitness-dans-club-gym_590464-100336.jpg",
            "https://img.freepik.com/photos-premium/homme-femme-sportifs-faisant-pompes-dans-salle-sport_484651-6731.jpg",
            "https://previews.123rf.com/images/peopleimages12/peopleimages122407/peopleimages12240706112/231204060-les-amis-font-de-l-exercice-et-des-fentes-en-groupe-dans-une-salle-de-sport-pour-un-entra%C3%AEnement-de.jpg",
            "https://img.freepik.com/photos-premium/couple-sportif-devoue-faisant-squats-dans-salle-sport-pratiquant-exercices-fonctionnels_232070-13595.jpg",
            "https://images.unsplash.com/photo-1601106711560-ffeb65211600?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D",
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
    updateFile(index) {
      this.indexFitness = index;
      console.log(this.indexFitness)
    },
  },

};
</script>