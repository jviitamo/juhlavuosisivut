<!-- MainBody.vue -->

<template>
  <div class="main-body-container">
    <CardComponent imageName="ruukku_logo.svg" order="textFirst">
      <div>
        <h1 class="main-heading">{{ $t('main_page[0].main_header') }}</h1>
        <p class="bold-header">{{ $t('main_page[0].main_page_1') }}</p>
      </div>
    </CardComponent>
    <CardComponent imageName="nainen_paa.svg" order="imageFirst">
      <p class="bold-header">{{ $t('main_page[0].main_page_2') }}</p>
    </CardComponent>
    <CardComponent imageName="pollo.svg" order="textFirst">
      <p class="bold-header">{{ $t('main_page[0].main_page_3') }}</p>
    </CardComponent>
    <CardComponent imageName="mies_paa.svg" order="imageFirst">
      <p class="bold-header">
        <router-link :to="{ name: 'ForGuild', params: { lang: this.$route.params.lang || 'en' }}" class="link-underline-prevent-default">
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
