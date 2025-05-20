<template>
  <div>
    <div class="w-full bg-red-600 p-8">
      <div
        class="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 grid-flow-row gap-8 items-center justify-center h-full">
        <div class="col-span-4 space-y-4 text-center">
          <h1 class="text-4xl font-extrabold text-white">
            {{ clients }}
          </h1>
          <p class="text-4xl text-white font-extrabold">Clients</p>
        </div>
        <div class="col-span-4 space-y-4 text-center py-8">
          <h1 class="text-4xl font-extrabold text-white">{{ suivis }}</h1>
          <p class="text-4xl text-white font-extrabold">Suivis</p>
        </div>
        <div class="col-span-4 space-y-4 text-center">
          <h1 class="text-4xl font-extrabold text-white">{{ commentaires }}</h1>
          <p class="text-4xl text-white font-extrabold">Satisfaits</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      clients: 0,
      suivis: 0,
      commentaires: 0,
    };
  },
  mounted() {
    this.startCounter();
  },
  methods: {
    startCounter() {
      // Exemples de nombres max
      const maxClients = 200;
      const maxSuivis = 150;
      const maxCommentaires = 100;

      // Compteur pour clients
      this.animateCount('clients', maxClients, 30);

      // Compteur pour suivis
      this.animateCount('suivis', maxSuivis, 40);

      // Compteur pour commentaires
      this.animateCount('commentaires', maxCommentaires, 50);
    },

    animateCount(property, max, speed) {
      let count = 0;
      const interval = setInterval(() => {
        if (count < max) {
          count++;
          this[property] = count;
        } else {
          clearInterval(interval);
        }
      }, speed);
    },
  },
};
</script>
<style></style>
