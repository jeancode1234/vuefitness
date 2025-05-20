<template>
    <div>
        <section class="w-full h-auto">
            <div class="w-full py-4 lg:py-8 bg-white flex flex-col items-center justify-center">
                <div class="w-full xl:w-5/6 space-y-8 py-8">
                    <div class="space-y-4 w-full lg:w-4/6 mx-auto">
                        <h3 class="text-center text-4xl font-bold text-[#081828] uppercase" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Exercices et Activités
                            intenses</h3>
                        <p class="text-base text-gray-500 text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">Il existe de nombreuses variations de passages
                            de
                            Lorem Ipsum disponibles, mais la plupart ont subi une altération sous une forme ou une
                            autre.
                        </p>
                    </div>

                </div>

            </div>
           <div>
                <div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 grid-flow-row items-center justify-center h-full">
                    <div class="col-span-4 relative h-[360px]" v-for="(item,index) in gallery" :key="index">
                        <div class="absolute w-full h-full bg-black/40 flex flex-col justify-center items-center">
                             <h1 data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="400" class="text-4xl font-bold text-white">{{ item.title }}</h1>
                        </div>
                        <img :src="item.image" alt="Exercice 1" class="w-full h-full object-cover object-center" />
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
            gallery: [
                {
                    title: 'Yoga',
                    content: 'Contenu de la carte 1',
                    image: 'https://images.unsplash.com/photo-1662961154170-d2421e29f94b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D'
                },
                {
                    title: 'BodyBulding',
                    content: 'Contenu de la carte 2',
                    image: 'https://images.unsplash.com/photo-1549476464-37392f717541?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D',
                },
                {
                    title: 'Musculature',
                    content: 'Contenu de la carte 3',
                    image: 'https://images.unsplash.com/photo-1613685044678-0a9ae422cf5a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D',
                },
                {
                    title: 'Apdominaux',
                    content: 'Contenu de la carte 4',
                    image: 'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D',
                },
                {
                    title: 'Biceps',
                    content: 'Contenu de la carte 5',
                    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D',
                },
                {
                    title: 'Nutrition',
                    content: 'Contenu de la carte 5',
                    image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fGZpdG5lc3N8ZW58MHx8MHx8fDA%3D',
                },
            ],
           
        }
    },
}
</script>