<!-- MainBody.vue -->

<template>
    <div class="main-body-container">
      <h1 class="main-heading-center">{{ $t('nav_bar[0].contact_information_header') }}</h1>
      <div class="box-container">
        <BoxComponent
            v-for="(message, key) in getContacts('contact')" :key="key"
            :name=message.name
            :email=message.email
            :photoUrl=message.photoUrl 
            :telegram=message.telegram
            :title=message.title
            :musicSrc=message.musicSrc
        />
      </div>
    </div>
  </template>
  
  <script>

import BoxComponent from '@/components/ContactInformation/BoxComponent.vue';
  
  export default {
    name: 'ContactInformation',
    components: {
      BoxComponent
    },
    methods: {
      getContacts(key) {
          const messages = this.$i18n.messages[this.$i18n.locale] || {};
          console.log(messages)
          return messages[key] || [];
      },
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
  