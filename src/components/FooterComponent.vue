<template>
    <div>

        <div class="w-full p-4 md:p-10 bg-black space-y-12">
            <div class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 grid-flow-row gap-8 lg:gap-4">
                <div class="col-span-4 lg:col-span-3 space-y-6">
                    <h1
                        class="text-3xl font-extrabold  text-white uppercase italic animate__animated animate__fadeInLeft">
                        Dim<span class="text-red-600">Fitness</span>
                    </h1>
                    <p class="text-white text-sm py-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, autem.
                    </p>
                    <div class="w-full lg:w-11/12 rounded-full relative h-12 overflow-hidden">
                         <button class="px-4 h-full rounded-full text-white bg-black hover:bg-red-600 duration-300 absolute right-0">Envoyer</button>
                         <input type="text" class="w-full bg-white  px-4 h-full outline-none" placeholder="Entrez votre email">
                    </div>
                </div>
                <div class="col-span-4 lg:col-span-3  space-y-6">
                     <div class="">
                         <h1 class="text-xl font-semibold  text-white">Nos Liens</h1>
                         <div class="w-20 h-[4px] bg-red-600"></div>
                     </div>
                      <div class="space-y-4 flex flex-col">
                          <a href="#" class="text-white text-lg">Accueil</a>
                          <a href="#" class="text-white text-lg">Apropos de nous</a>
                          <a href="#" class="text-white text-lg">Services</a>
                          <a href="#" class="text-white text-lg">Contactez-nous</a>
                          
                      </div>
                </div>
                <div class="col-span-4 lg:col-span-3  space-y-6">
                     <div class="">
                         <h1 class="text-2xl font-semibold  text-white">Contacts</h1>
                         <div class="w-20 h-[4px] bg-red-600"></div>
                     </div>
                      <div class="space-y-4 flex flex-col">
                          <a href="#" class="text-white text-lg">Accueil</a>
                          <a href="#" class="text-white text-lg">Apropos de nous</a>
                          <a href="#" class="text-white text-lg">Services</a>
                          <a href="#" class="text-white text-lg">Contactez-nous</a>
                          
                      </div>
                </div>
                <div class="col-span-4 lg:col-span-3  space-y-6">
                     <div class="">
                         <h1 class="text-xl font-semibold  text-white">Nos Reseaux</h1>
                         <div class="w-20 h-[4px] bg-red-600"></div>
                     </div>
                      <div class="space-y-4 flex flex-col">
                          <a href="#" class="text-white text-lg">Accueil</a>
                          <a href="#" class="text-white text-lg">Apropos de nous</a>
                          <a href="#" class="text-white text-lg">Services</a>
                          <a href="#" class="text-white text-lg">Contactez-nous</a>
                          
                      </div>
                </div>
            </div>
            <div class="w-full h-[1px] bg-red-600/40"></div>
            <div class="w-full flex flex-col space-y-2 justify-center items-center">
                <div class="flex space-x-4">
                   <p class="text-white text-lg">Horaire d'ouverture de Lundi - Samedi : 08h-18h</p>
                </div>
                  <p class="text-white">© 2025 Dimfitness - Tous droits réservés </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    }
}
</script>