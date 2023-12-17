<!-- MainBody.vue -->

<template>
  <div class="main-body-container">
    <h1 class="main-heading">ATHENE 25</h1>
    <CardComponent imageName="ruukku_logo.svg" order="textFirst">
      <p class="bold-header">{{ $t('main_page[0].main_page_1') }}</p>
    </CardComponent>
    <CardComponent imageName="nainen_paa.svg" order="imageFirst">
      <p>{{ $t('main_page[0].main_page_2') }}</p>
    </CardComponent>
    <CardComponent imageName="pollo.svg" order="textFirst">
      <p>{{ $t('main_page[0].main_page_3') }}</p>
    </CardComponent>
    <CardComponent imageName="mies_paa.svg" order="imageFirst">
      <p class="bold-header">
        <router-link to="/guild" class="link-underline-prevent-default">
          {{ $t('main_page[0].main_page_4') }} 
        </router-link>
        {{ $t('main_page[0].main_page_5') }}
      </p>
    </CardComponent>
  </div>
</template>

<script>
import CardComponent from '@/components/MainPage/CardComponent.vue';

export default {
  name: 'MainBody',
  components: {
    CardComponent
  }
};
</script>

<style scoped>
.bold-header {
  font-weight: bold;
  font-size: 2rem;
}

@media screen and (max-width: 600px) {
  .bold-header {
    font-size: 1.5rem;
  }
}


</style>