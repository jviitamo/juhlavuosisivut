<!-- MainBody.vue -->

<template>
    <div class="main-body-container">
      <div class="text-container">
        <h1 class="main-heading-center">{{ $t('seminar[0].header1') }} <br> {{ $t('seminar[0].header2') }}</h1>
        <p class="bold-text">{{ $t('seminar[0].content1') }}</p>
        <p class="bold-text">{{ $t('seminar[0].content2') }}</p>
        <p class="bold-text">{{ $t('seminar[0].content3') }}</p>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'SeminarPage'
  };
  </script>
  