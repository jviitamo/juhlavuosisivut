<!-- MainBody.vue -->

<template>
  <div class="main-body-container">
    <h1 class="main-heading">ATHENE 25</h1>
    <CardComponent
      :text="$t('main_page_1')"
      imageName="ruukku_logo.svg"
      order="textFirst"
      :textSize="this.chooseTextSize()"
      :is-bold="true"
    />
    <CardComponent
      :text="$t('main_page_2')"
      imageName="nainen_paa.svg"
      order="imageFirst"
    />
    <CardComponent
      :text="$t('main_page_3')"
      imageName="pollo.svg"
      order="textFirst"
    />
    <CardComponent
      :text="$t('main_page_4')"
      imageName="mies_paa.svg"
      order="imageFirst"
      textSize="30px"
      :is-bold="true"
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
  methods: {
    chooseTextSize() {
      return window.innerWidth > 600 ? "2rem" : "1.5rem"
    }
  }
};
</script>
