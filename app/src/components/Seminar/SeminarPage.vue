<!-- MainBody.vue -->

<template>
    <div class="main-body-container">
      <HeaderContainer />
      <div class="speaker-content">
        <h1 class="main-heading-center add-margin">{{ $t('seminar[0].header5') }}</h1>
        <div class="text-container add-margin">
          <p class="bold-text">{{ $t('seminar[0].content1') }}</p>
        </div>
        <SpeakerContainer imageName="sonia.svg" order="imageFirst" :text="$t('seminar[0].people_13')">
          <p class="bold-text center-text">{{ $t('seminar[0].people_11') }}</p>
          <p class="center-text">{{ $t('seminar[0].people_12') }}</p>
        </SpeakerContainer>
        <SpeakerContainer imageName="hertta.svg" order="textFirst" :text="$t('seminar[0].people_23')">
          <p class="bold-text center-text">{{ $t('seminar[0].people_21') }}</p>
          <p class="center-text">{{ $t('seminar[0].people_221') }}</p>
          <p class="center-text">{{ $t('seminar[0].people_222') }}</p>
          <p class="center-text">{{ $t('seminar[0].people_223') }}</p>
        </SpeakerContainer>   
        <SpeakerContainer imageName="tuomo.svg" order="imageFirst" :text="$t('seminar[0].people_33')">
          <p class="bold-text center-text">{{ $t('seminar[0].people_31') }}</p>
          <p class="center-text">{{ $t('seminar[0].people_32') }}</p>
        </SpeakerContainer>
        <SpeakerContainer imageName="mia.svg" imageName2="iida.svg" order="textFirst" :text="$t('seminar[0].people_431')" :text2="$t('seminar[0].people_432')">
          <p class="bold-text center-text">{{ $t('seminar[0].people_41') }}</p>
          <p class="center-text">{{ $t('seminar[0].people_421') }}</p>
          <p class="center-text">{{ $t('seminar[0].people_422') }}</p>
          <p class="center-text">{{ $t('seminar[0].people_423') }}</p>
        </SpeakerContainer>
        <SpeakerContainer imageName="risto.svg" order="imageFirst" :text="$t('seminar[0].people_53')">
          <p class="bold-text center-text">{{ $t('seminar[0].people_51') }}</p>
          <p class="center-text">{{ $t('seminar[0].people_52') }}</p>
        </SpeakerContainer>
    </div>
    </div>
  </template>
  
  <script>

  import HeaderContainer from '@/components/Seminar/HeaderContainer.vue';
  import SpeakerContainer from '@/components/Seminar/SpeakerContainer.vue';

  export default {
    name: 'SeminarPage',
    components: {
      HeaderContainer,
      SpeakerContainer
    }
  };
</script>

<style scoped>

.add-margin {
  margin-bottom: 100px;
}
.center-text {
  text-align: center; /* Center text horizontally */
}

@media screen and (max-width: 600px) {
  .add-margin {
    margin-bottom: 30px;
  }
}

</style>
