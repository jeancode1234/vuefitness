<template>
    <div>
        <LoadComponent v-if="loading" />
        <div v-else>
            <div class="w-full h-[400px] bg-black">

            </div>
            <div class="w-full h-12"></div>
            <div class="container mx-auto text-center py-4">
                <h2 class="text-4xl font-bold mb-8 uppercase" data-aos="zoom-in" data-aos-duration="1000"
                    data-aos-delay="400">Nos Services</h2>
                <p class="text-lg text-gray-600 mb-12" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400">
                    Découvrez les services que nous offrons pour vous aider à atteindre vos objectifs.</p>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400"
                        v-for="(service, index) in services" :key="index"
                        class="service-card bg-white overflow-hidden shadow-lg rounded-lg transition-transform transform hover:scale-105">
                        <img :src="service.image" alt="Service 1" class="w-full object-cover h-full">
                        <h3 class="text-xl font-semibold mb-2">{{ service.titre }}</h3>
                        <p class="text-gray-500">{{ service.description }}</p>
                    </div>

                </div>
            </div>
            <WindowsComponent />
            <div class="w-full h-12"></div>
            <GalleryComponent />
            <div class="w-full h-12"></div>
            <QuestionsComponent />
            <FooterComponent />
            <ScroollTopComponent />
        </div>

    </div>
</template>
<script>
import FooterComponent from '@/components/FooterComponent.vue';
import GalleryComponent from '@/components/GalleryComponent.vue';
import LoadComponent from '@/components/LoadComponent.vue';
import QuestionsComponent from '@/components/questionsComponent.vue';
import ScroollTopComponent from '@/components/ScroollTopComponent.vue';
import WindowsComponent from '@/components/WindowsComponent.vue';
export default {
    data() {
        return {
            loading: true,
            services: [
                {
                    image: "https://madamebienetre.com/wp-content/uploads/2023/05/visuel-sport-et-nutrition-des-disciplines-complementaires-au-service-de-votre-bien-etre-1000x600.jpg",
                    description: "",
                    titre: "",
                },

                {
                    image: "https://content.jdmagicbox.com/v2/comp/mumbai/a1/022pxx22.xx22.220316140610.p6a1/catalogue/fitrath-gym-santacruz-mumbai-gyms-l4vlxm9e32.jpg",
                    description: "",
                    titre: "",
                },

                {
                    image: "https://static.wixstatic.com/media/724592_379de66551ee42b2bbe85b2e94172425~mv2.jpg/v1/fill/w_638,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/724592_379de66551ee42b2bbe85b2e94172425~mv2.jpg",
                    description: "",
                    titre: "",
                },

            ]
        }
    },
    components: {
        QuestionsComponent,
        GalleryComponent,
        WindowsComponent,
        FooterComponent,
        LoadComponent,
        ScroollTopComponent
    },
    mounted() {
        setTimeout(() => {
            this.loading = false
        }, 2000)
    }
}
</script>
<style></style>