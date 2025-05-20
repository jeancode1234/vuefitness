<template>
    <div>
        <section class="w-full py-8 flex flex-col space-y-12 items-center justify-center bg-black">
            <div class="w-full md:w-5/6 lg:w-3/6 text-center space-y-4">
                <p class="text-lg text-red-700">Rejoignez nos success stories</p>
                <h1 class="text-3xl md:text-4xl font-bold text-white uppercase">Témoignage de nos clients</h1>
            </div>

            <div class="relative p-4 md:p-10 lg:w-full   overflow-hidden ">
                <div class="flex w-full transition-transform duration-300"
                    :style="{ transform: `translateX(-${index * 100}%)` }">
                    <div v-for="(item, index) in items" :key="index" class="min-w-full">
                        <div class="grid grid-cols-4 lg:grid-cols-8  grid-flow-row gap-4 lg:h-[500px] overflow-hidden">
                            <div class="col-span-4 lg:col-span-4">
                                <img :src="item.image" alt="Card image"
                                    class="w-full lg:h-auto object-contain lg:object-cover object-center rounded" />
                            </div>
                            <div class="col-span-4 lg:col-span-4 space-y-4">
                                 <h1 class="text-3xl text-red-700 font-bold">{{ item.auteur }}</h1>
                                <p class="text-white text-lg">{{ item.title }}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click="prev"
                    class="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white text-2xl font-bold flex justify-center items-center w-14 h-14 rounded-full shadow">‹</button>
                <button @click="next"
                    class="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-600 text-white w-14 h-14 text-2xl font-bold flex justify-center items-center rounded-full shadow">›</button>
            </div>
        </section>
    </div>
</template>
<script>
import img from '../assets/img/testimonials.jpg';
import img1 from '../assets/img/testimonials_1.jpg';
import img2 from '../assets/img/testimonials_2.jpg';
import img3 from '../assets/img/testimonials_3.jpg';
export default {
    data() {
        return {
            autoSlideInterval: null,
            index: 0,
            items: [
                { 
                 auteur: 'George Martin',
                 title: 'J\'ai toujours eu du mal à maintenir une alimentation équilibrée, et cela affectait ma santé et mon bien-être. En cherchant des solutions, j\'ai décidé de me lancer dans un suivi nutritionnel. Ce fut une des meilleures décisions de ma vie !Mon nutritionniste m\'a aidé à comprendre mes habitudes alimentaires et à identifier les changements nécessaires. Grâce à un plan personnalisé, j\'ai appris à faire des choix sains tout en me faisant plaisir. Les conseils pratiques et le soutien constant m\'ont vraiment motivée.En quelques mois, j\'ai non seulement perdu du poids, mais j\'ai également gagné en énergie et en confiance en moi. Je me sens plus équilibrée et prête à affronter mes journées. Je recommande vivement un suivi nutritionnel à quiconque souhaite améliorer sa santé et son bien-être. C\'est un investissement inestimable dans sa qualité de vie !',
                 image: img,
                },
                { 
                 auteur: 'Marie Dupont',
                 title: 'Je suis ravie d\'avoir choisi un suivi nutritionnel ! Grâce à l\'accompagnement de mon nutritionniste, j\'ai appris à mieux comprendre mes besoins alimentaires et à adopter des habitudes saines. J\'ai perdu du poids de manière durable et je me sens plus énergique que jamais. Je recommande',
                 image: img1,
                },
                { title: 'Film 3', image: img2 },
                { title: 'Film 4', image: img3 },
                { title: 'Film 5', image: 'https://via.placeholder.com/200x300' },
                { title: 'Film 6', image: 'https://via.placeholder.com/200x300' },
                { title: 'Film 7', image: 'https://via.placeholder.com/200x300' },
                { title: 'Film 8', image: 'https://via.placeholder.com/200x300' },
            ],
        }  
    },

    methods: {
        next() {
            if (this.index < this.items.length - 1) {
                this.index++
            } else {
                this.index = 0
            }
        },
        prev() {
            if (this.index > 0) {
                this.index--
            } else {
                this.index = this.items.length - 1
            }
        },
        // startAutoSlide() {
        //     this.autoSlideInterval = setInterval(this.next, 3000); // Change de carte toutes les 3 secondes
        // },
        // stopAutoSlide() {
        //     clearInterval(this.autoSlideInterval);
        // },
    },

    mounted() {
        // this.startAutoSlide();
    },
}
</script>
<style></style>