<!-- MainBody.vue -->

<template>
    <div class="main-body-container">
      <h1 class="main-heading">{{ $t('nav_bar[0].contact_information_header') }}</h1>
        <div class="box-container">
          <BoxComponent name="Julia Sippala" email="julia.sippala@aalto.fi" photoUrl="URL_TO_PHOTO" telegram="@soppala" title="Juhlavuositirhetööri" />
          <BoxComponent name="Antti Kari-Koskinen" email="antti.karikoskinen@aalto.fi" photoUrl="URL_TO_PHOTO" telegram="@teekkarikoskinen" />
          <BoxComponent name="Aarne Talvela" email="aarne.talvela@aalto.fi" photoUrl="URL_TO_PHOTO" telegram="@aarnetalvela"/>
          <BoxComponent name="Nea Nieminen" email="nea.nieminen@aalto.fi" photoUrl="URL_TO_PHOTO" telegram="@poromuija"/>
          <BoxComponent name="Elina Ståhlberg" email="elina.stahlberg@aalto.fi" photoUrl="URL_TO_PHOTO" telegram="@stahlbergg"/>
          <BoxComponent name="Iida Lehikoinen" email="iida,lehikoinen@aalto.fi" photoUrl="URL_TO_PHOTO" telegram="@iidalehikoinen"/>
          <BoxComponent name="Inkeri Nora" email="inkeri.nora@aalto.fi" photoUrl="URL_TO_PHOTO" telegram="@inkuri"/>
          <BoxComponent name="Niklas Koskela" email="niklas.koskela@aalto.fi" photoUrl="URL_TO_PHOTO" telegram="@Nicodeemus"/>
          <BoxComponent name="Juhana Viitamo" email="juhana.viitamo@aalto.fi" photoUrl="URL_TO_PHOTO" telegram="@juhanaviitamo" title="Nettisivuvastaava" />
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
  