<!-- MainBody.vue -->

<template>
    <div class="main-body-container">
      <h1 class="main-heading">{{ $t('nav_bar[0].contact_information_header') }}</h1>
        <div class="box-container">
          <BoxComponent name="Jane Doe" email="jane@example.com" photoUrl="URL_TO_PHOTO" />
          <BoxComponent name="Jane Doe" email="jane@example.com" photoUrl="URL_TO_PHOTO" />
          <BoxComponent name="Jane Doe" email="jane@example.com" photoUrl="URL_TO_PHOTO" />
          <BoxComponent name="Jane Doe" email="jane@example.com" photoUrl="URL_TO_PHOTO" />
          <BoxComponent name="Jane Doe" email="jane@example.com" photoUrl="URL_TO_PHOTO" />
          <BoxComponent name="Jane Doe" email="jane@example.com" photoUrl="URL_TO_PHOTO" />
          <BoxComponent name="Jane Doe" email="jane@example.com" photoUrl="URL_TO_PHOTO" />
          <BoxComponent name="Jane Doe" email="jane@example.com" photoUrl="URL_TO_PHOTO" />
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
  