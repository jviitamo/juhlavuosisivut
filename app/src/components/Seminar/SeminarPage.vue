<!-- MainBody.vue -->

<template>
    <div class="main-body-container">
      <headerContainer />
      
    </div>
  </template>
  
  <script>

  import headerContainer from '@/components/Seminar/headerContainer.vue';

  export default {
    name: 'SeminarPage',
    components: {
      headerContainer
    }
  };
  </script>
  