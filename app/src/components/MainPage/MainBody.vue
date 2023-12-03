<!-- MainBody.vue -->

<template>
  <div class="main-body-container">
    <h1 class="main-heading">ATHENE 25</h1>
    <CardComponent
    text="Tervetuloa mukaan juhlimaan 25-vuotista Informaatioverkostojen kilta Athenea!"
    imageName="ruukku_logo.svg"
    order="textFirst"
    textSize="30px"
    isBold="true"
    />
    <CardComponent
      text="Vuoden aikana kiltalaiset pääsevät tutustumaan tarkemmin Athenen historiaan sekä osallistumaan historiallisiin kiltatapahtumiin."
      imageName="nainen_paa.svg"
      order="imageFirst"
    />
    <CardComponent
      text="Juhlavuoden kunniaksi järjestetään paljon tapahtumia ja aktiviteetteja sekä kiltalaisille että koko Otaniemelle. Juhlavuosi huipentuu marraskuussa/joulukuussa Infoähkyyn!"
      imageName="pollo.svg"
      order="textFirst"
    />
    <CardComponent
    text="Tule mukaan tekemään juhlavuotta!"
    imageName="mies_paa.svg"
    order="imageFirst"
    textSize="30px"
    isBold="true"
  />
    
  </div>
</template>

<script>
import CardComponent from '@/components/MainPage/CardComponent.vue';

export default {
  name: 'MainBody',
  components: {
    CardComponent
  },
};
</script>

<style scoped>
/* Add your custom styles for MainBody here */

.main-body-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Align items to the start (left) */
    justify-content: center;
    padding: 4rem 2rem;
    width: 80%;
    margin: 0 auto;
  }
  
  .main-heading {
    margin-left: 0;
    margin-bottom: 1rem; /* Add margin to separate the heading from the CardComponent */
    font-size: 3.5rem;
    font-family: 'Magra';
  }

</style>