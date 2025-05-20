<template>
    <LoadComponent v-if="loading"></LoadComponent>
    <div v-else>
    <div>
        <div class="w-full h-[500px] overflow-hidden bg-black flex items-center justify-center  relative">

            <div class="w-full lg:w-5/6 h-full flex items-center justify-center absolute z-10">
                <p class="text-4xl lg:text-5xl xl:text-[50px] uppercase text-center font-extrabold text-white">
                    Contactez-nous
                </p>
            </div>
            <div class="w-full h-full">
                <div class="relative w-full h-ful">
                    <div class="w-full h-full absolute bg-black/80"></div>
                    <img src="../assets/img/training_2.avif" class="w-full h-full object-cover object-bottom" alt="">
                </div>
            </div>
        </div>

        <div class="w-full p-8 bg-gray-50 space-y-8">
            <div class="w-full lg:w-5/6 mx-auto space-y-3 text-center">
                <h1 class="text-4xl font-bold text-gray-800 uppercase">Contactez-nous</h1>
                <div class="w-full">
                    <p class="text-lg text-center  text-[#404853]">Pour toute question ou demande d'information
                        supplémentaire, contactez-nous.</p>
                </div>
            </div>
            <div class="w-full grid grid-cols-4 md:grid-cols-8 grid-flow-row gap-8 py-12">
                <div class="col-span-4 xl:col-span-3 space-y-12  px-4">

                    <h4 class="font-bold text-[#05055D] text-lg">Why choose Wialon:</h4>
                    <div class="flex space-x-2 items-center ">
                        <div class="w-20 h-20 rounded-full bg-red-800 flex items-center justify-center">
                            <img src="../assets/icon/pin.png" class="" alt="check">
                        </div>
                        <p class="text-base text-[#404853]">Trusted by 2,700+ partner companies</p>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <div class="w-20 h-20 rounded-full bg-red-800 flex items-center justify-center">
                            <img src="icons/check.png" class="w-3 h-3" alt="check">
                        </div>
                        <p class="text-base text-[#404853]">Supports 3,700+ hardware models</p>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <div class="w-20 h-20 rounded-full bg-red-800 flex items-center justify-center">
                            <img src="icons/check.png" class="w-3 h-3" alt="check">
                        </div>
                        <p class="text-base text-[#404853]">Tier-3 data centers, 99.5% SLA-guaranteed uptime</p>
                    </div>
                    <div class="flex space-x-2 items-center">
                        <div class="w-20 h-20 rounded-full bg-red-800 flex items-center justify-center">
                            <img src="icons/check.png" class="w-3 h-3" alt="check">
                        </div>
                        <p class="text-base text-[#404853]">Technical, business, and educational support for partners
                        </p>
                    </div>

                </div>
                <div class="col-span-4 xl:col-span-5 px-10 xl:px-14 bg-white shadow-lg rounded-3xl p-10 space-y-4 ">
                    <form>

                        <div class="w-full rounded-2xl  space-y-4 step ">
                            <h4 class="text-xl text-red-700">What do you want to track?*</h4>

                            <!-- <select name="option" required
                            class="w-full outline-none border p-3 text-lg text-gray-800 rounded-xl bg-white focus:ring-1 focus:ring-offset-blue-500">
                            <option value="" selected disabled class="hidden">Select one of options</option>
                            <option value="1">My mobile phone</option>
                            <option value="2">My family members</option>
                            <option value="3">My family members' vehicle</option>
                            <option value="4">My pet(s)</option>
                            <option value="5">Other</option>
                        </select> -->

                            <div class="w-full space-y-2">
                                <label for="name" class="text-lg font-semibold text-gray-800">First name*</label>
                                <input type="text" id="name"
                                    class="w-full p-3 border rounded-lg outline-none bg-white focus:ring-1 focus:ring-gray-800 placeholder:text-gray-500"
                                    required placeholder="Enter your first name">
                            </div>
                            <div class="w-full space-y-2">
                                <label for="name" class="text-lg text-gray-800 font-semibold">Email*</label>
                                <input type="email" id="email"
                                    class="outline-none w-full p-3 border rounded-lg bg-white focus:ring-1 focus:ring-gray-800 placeholder:text-gray-500"
                                    required placeholder="Enter your email">
                            </div>
                            <div class="w-full space-y-2">
                                <label for="name" class="text-lg text-gray-800 font-semibold">Subject</label>
                                <input type="text" id="subject"
                                    class="outline-none w-full p-3 border rounded-lg bg-white focus:ring-1 focus:ring-gray-800 placeholder:text-gray-500"
                                    required placeholder="Subject">
                            </div>
                            <div class="w-full space-y-2">
                                <label for="name" class="text-lg text-gray-800 font-semibold">Message*</label>
                                <textarea rows="5" cols="30"
                                    class="outline-none w-full p-3 border rounded-lg bg-white focus:ring-1 focus:ring-gray-800 placeholder:text-gray-500"
                                    required placeholder="Message"></textarea>
                            </div>

                            <div class="w-full flex justify-start pt-4">
                                <button type="submit"
                                    class="px-8 py-3 rounded bg-red-600 hover:bg-red-700 text-white font-semibold text-lg">Envoyez
                                    un message</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
        <QuestionsComponent></QuestionsComponent>
       <GalleryComponent></GalleryComponent>
      
        <div class="w-full h-64"></div>
        <section class="relative z-10 mt-[-100px] pb-0">
            <!-- Full Width Map Container -->
            <div class="w-full h-[400px]">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.3721619999999997!3d48.8583736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1647436435286!5m2!1sfr!2sfr"
                    width="100%" height="100%" style="border:0;" loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>
        <FooterComponent/>
        <ScroollTopComponent/>
    </div>
    </div>
</template>
<script>
import FooterComponent from '@/components/FooterComponent.vue';
import GalleryComponent from '@/components/GalleryComponent.vue';
import LoadComponent from '@/components/LoadComponent.vue';
import QuestionsComponent from '@/components/questionsComponent.vue';
import ScroollTopComponent from '@/components/ScroollTopComponent.vue';
export default {
    data() {
        return {
           
        };
    },
    // computed: {
    //     visibleCards() {
    //         return 2; // Nombre de cartes visibles en même temps
    //     },
    //     maxIndex() {
    //         return this.cards.length - this.visibleCards;
    //     },
    // },
    methods: {
       
        // nextSlide() {
        //     if (this.currentIndex < this.maxIndex) {
        //         this.currentIndex++;
        //     } else {
        //         this.currentIndex = 0; // Revenir au début
        //     }
        // },
        // prevSlide() {
        //     if (this.currentIndex > 0) {
        //         this.currentIndex--;
        //     } else {
        //         this.currentIndex = this.maxIndex; // Aller à la dernière carte
        //     }
        // },
        // startAutoSlide() {
        //     this.autoSlideInterval = setInterval(this.nextSlide, 3000); // Change de carte toutes les 3 secondes
        // },
        // stopAutoSlide() {
        //     clearInterval(this.autoSlideInterval);
        // },
    },
    mounted() {
        // this.startAutoSlide();
    },
   components :{
    QuestionsComponent,
    GalleryComponent,
    FooterComponent,
    LoadComponent,
    ScroollTopComponent
   }
};

</script>

<style>
.faq-container {
    max-width: 600px;
    margin: auto;
}

.faq-item {
    border: 1px solid #ddd;
    border-radius: 4px;
}

/* Masquer le défilement horizontal */
.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>