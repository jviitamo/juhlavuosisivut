<!-- MainBody.vue -->

<template>
    <div class="main-body-container">
      <h1 class="main-heading-center">{{ $t('nav_bar[0].contact_information_header') }}</h1>
        <div class="box-container">
          <BoxComponent name="Julia Sippala" email="julia.sippala@aalto.fi" telegram="@soppala" :title="$t('contact[0].responsible')" />
          <BoxComponent name="Antti Kari-Koskinen" email="antti.kari-koskinen@aalto.fi" photoUrl="antti.jpeg" telegram="@teekkarikoskinen" :title="$t('contact[0].companies')" />
          <BoxComponent name="Aarne Talvela" email="aarne.talvela@aalto.fi" telegram="@aarnetalvela" :title="$t('contact[0].events')" />
          <BoxComponent name="Nea Nieminen" email="nea.nieminen@aalto.fi" telegram="@poromuija" :title="$t('contact[0].events')" />
          <BoxComponent name="Elina Ståhlberg" email="elina.stahlberg@aalto.fi" photoUrl="ellun kuva.jpg" telegram="@stahlbergg" :title="$t('contact[0].graphics')" />
          <BoxComponent name="Iida Lehikoinen" email="iida.lehikoinen@aalto.fi" photoUrl="iida.png" telegram="@iidalehikoinen" :title="$t('contact[0].communication')" />
          <BoxComponent name="Inkeri Nora" email="inkeri.nora@aalto.fi" telegram="@inkuri" :title="$t('contact[0].seminar')" />
          <BoxComponent name="Niklas Koskela" email="niklas.koskela@aalto.fi" telegram="@Nicodeemus" :title="$t('contact[0].seminar')" />
          <BoxComponent name="Juhana Viitamo" email="juhana.viitamo@aalto.fi" telegram="@juhanaviitamo" :title="$t('contact[0].web')" />
        </div>
    </div>
  </template>
  
  <script>

import BoxComponent from '@/components/ContactInformation/BoxComponent.vue';
  
  export default {
    name: 'ContactInformation',
    components: {
      BoxComponent
    }
  };
  </script>

  <style scoped>
  .box-container {
    width: 100%;
    margin: 50px 0;
    display: flex;
    flex-wrap: wrap; /* Allows boxes to wrap to the next row */
    justify-content: flex-start; /* Distributes space between boxes */
  
    /* Additional styling as needed */
  }

  @media screen and (max-width: 900px) {
    .box-container {
      justify-content: center; /* Distributes space between boxes */
    }
  }

  
  /* Additional styling for the boxes */
</style>
  