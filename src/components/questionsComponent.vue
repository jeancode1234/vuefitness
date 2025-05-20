<template>
    <div>
        <section class="w-full p-8 lg:py-12 bg-white  flex flex-col items-center justify-center">
            <div class="w-full xl:w-5/6 space-y-8  py-8">
                <div class="space-y-4 w-full lg:w-3/6 mx-auto">
                    <p class="text-lg text-[#2A0A55] font-bold text-center uppercase">FAQ</p>
                    <h3 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" class="text-center text-3xl sm:text-4xl font-extrabold text-[#081828] uppercase">Questions posées par nos clients </h3>
                    <p data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" class="text-base text-gray-500 text-center ">There are many variations of passages of Lorem
                        Ipsum
                        available, but the majority have suffered alteration in some form.</p>
                </div>

            </div>


            <div class=" w-full flex flex-col  items-center xl:p-8 space-y-3 my-4">
                <div v-for="(item, index) in faqs" :key="index"
                    class="mx-auto w-full flex overflow-hidden flex-col relative rounded-xl">
                    <div @click="toggle(index)" class="flex justify-between bg-black items-center w-full p-4 cursor-pointer"
                        id="switch">
                        <div class="flex items-center space-x-4">
                            <div
                                class="w-8 h-8 flex items-center justify-center font-semibold bg-red-700 rounded-full">
                            </div>
                            <h3 class="text-white font-semibold text-[20px]" id="title">
                                {{ item.question }}
                            </h3>
                        </div>
                        <svg class=" cursor-pointer" xmlns="http://www.w3.org/2000/svg" heigth="22px"
                            viewBox="0 -960 960 960" width="22px" fill="#5f6368">
                            <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z"></path>
                        </svg>

                    </div>
                    <div v-if="item.isOpen"
                        class="p-8 lg:p-4 text-lg text-white w-full bg-black text-left space-y-8">
                        <p>{{ item.answer }}</p>

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
            faqs: [
                {
                    question: "Quelle est la politique de retour?",
                    answer: "Vous pouvez retourner les articles dans un délai de 30 jours.",
                    isOpen: false,
                },
                {
                    question: "Comment suivre ma commande?",
                    answer: "Vous pouvez suivre votre commande via le lien de suivi envoyé par email.",
                    isOpen: false,
                },
                {
                    question: "Quels modes de paiement acceptez-vous?",
                    answer: "Nous acceptons les cartes de crédit, PayPal et virements bancaires.",
                    isOpen: false,
                },
                {
                    question: "Avez-vous un programme de fidélité?",
                    answer: "Oui, nous avons un programme de fidélité qui vous permet de gagner des points sur chaque achat.",
                    isOpen: false,
                },
            ],

        }
    },
    methods: {
        toggle(index) {
            this.faqs[index].isOpen = !this.faqs[index].isOpen;
        },
    },
}
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