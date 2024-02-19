<!-- MainBody.vue -->

<template>
    <div class="seminar-navigation-container">
      <a class="navigation-button" :style="[this.currentComponent  === 'speakers' ? 'font-weight: bold' : '']" @click="scrollMeTo('about_the_speakers')">ABOUT THE SPEAKERS</a>
      <a class="navigation-button" :style="[this.currentComponent  === 'schedule' ? 'font-weight: bold' : '']" @click="scrollMeTo('schedule')">SCHEDULE</a>
      <a class="navigation-button" :style="[this.currentComponent  === 'general' ? 'font-weight: bold' : '']" @click="scrollMeTo('general')">GENERAL</a>
    </div>
    <div class="main-body-container text-black" ref="general">
      <HeaderContainer />
      <div ref="schedule">
        <ScheduleContainer/>
      </div>
      <div class="speaker-content" ref="about_the_speakers">
        <h1 class="main-heading-center add-margin">{{ $t('seminar[0].header5') }}</h1>
        <div class="text-container add-margin">
          <p class="bold-text">{{ $t('seminar[0].content5') }}</p>
        </div>
        <SpeakerContainer imageName="sonia.svg" order="imageFirst" :text="$t('seminar[0].people_14')">
          <p class="bold-text center-text">{{ $t('seminar[0].people_11') }}<br><em>{{ $t('seminar[0].people_12') }}</em></p>
          <p class="center-text">{{ $t('seminar[0].people_13') }}</p>
        </SpeakerContainer>
        <SpeakerContainer imageName="hertta.svg" order="textFirst" :text="$t('seminar[0].people_24')">
          <p class="bold-text center-text">{{ $t('seminar[0].people_21') }}<br><em>{{ $t('seminar[0].people_22') }}</em></p>
          <p class="center-text">{{ $t('seminar[0].people_231') }}</p>
          <p class="center-text">{{ $t('seminar[0].people_232') }}</p>
        </SpeakerContainer>   
        <SpeakerContainer imageName="tuomo.svg" order="imageFirst" :text="$t('seminar[0].people_34')">
          <p class="bold-text center-text">{{ $t('seminar[0].people_31') }}<br><em>{{ $t('seminar[0].people_32') }}</em></p>
          <p class="center-text">{{ $t('seminar[0].people_33') }}</p>
        </SpeakerContainer>
        <SpeakerContainer imageName="mia.svg" imageName2="iida.svg" order="textFirst" :text="$t('seminar[0].people_441')" :text2="$t('seminar[0].people_442')">
          <p class="bold-text center-text">{{ $t('seminar[0].people_41') }}<br><em>{{ $t('seminar[0].people_42') }}</em></p>
          <p class="center-text">{{ $t('seminar[0].people_431') }}</p>
          <p class="center-text">{{ $t('seminar[0].people_432') }}</p>
          <p class="center-text">{{ $t('seminar[0].people_433') }}</p>
        </SpeakerContainer>
        <SpeakerContainer imageName="risto.svg" order="imageFirst" :text="$t('seminar[0].people_54')">
          <p class="bold-text center-text">{{ $t('seminar[0].people_51') }}<br><em>{{ $t('seminar[0].people_52') }}</em></p>
          <p class="center-text">{{ $t('seminar[0].people_53') }}</p>
        </SpeakerContainer>
        <SpeakerContainer imageName="ellu.svg" order="textFirst" :text="$t('seminar[0].people_64')">
          <p class="bold-text center-text">{{ $t('seminar[0].people_61') }}<br><em>{{ $t('seminar[0].people_62') }}</em></p>
          <p class="center-text">{{ $t('seminar[0].people_63') }}</p>
        </SpeakerContainer>
        <SpeakerContainer imageName="tino.svg" order="imageFirst" :text="$t('seminar[0].people_74')">
          <p class="bold-text center-text">{{ $t('seminar[0].people_71') }}<br><em>{{ $t('seminar[0].people_72') }}</em></p>
          <p class="center-text">{{ $t('seminar[0].people_73') }}</p>
        </SpeakerContainer>
    </div>
    </div>
  </template>
  
  <script>

  import HeaderContainer from '@/components/Seminar/HeaderContainer.vue';
  import SpeakerContainer from '@/components/Seminar/SpeakerContainer.vue';
  import ScheduleContainer from '@/components/Seminar/ScheduleContainer.vue';

  export default {
    name: 'SeminarPage',
    components: {
      HeaderContainer,
      SpeakerContainer,
      ScheduleContainer
    },
    data() {
      return {
        currentComponent: ""
      }
    },
    mounted() {
      this.handleScroll()
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      scrollMeTo(refName) {
        var element = this.$refs[refName];
        let dims = element.getBoundingClientRect();
        window.scrollTo({
          top: dims.top - 100 + window.scrollY,
          behavior: "smooth"
        });
      },
      handleScroll() {
        const scheduleElement = this.$refs.schedule.getBoundingClientRect();
        const speakersElement = this.$refs.about_the_speakers.getBoundingClientRect();

        let chosen = ""

        if (speakersElement.top - 110 <= 0) chosen = "speakers"
        else if (scheduleElement.top - 110 <= 0) chosen = "schedule"
        else chosen = "general"

        this.currentComponent = chosen
      }
    } 
  };
</script>

<style scoped>

.seminar-navigation-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  transform: rotate(270deg);
  position: fixed;
  width: 300px;
  top: 400px;
  left: -130px;
}
.text-black {
  color: #000000;
}

.add-margin {
  margin-bottom: 100px;
}
.center-text {
  text-align: center; /* Center text horizontally */
}

.navigation-button:hover {
  cursor: pointer;
  opacity: 0.9;
}

@media screen and (max-width: 600px) {
  .add-margin {
    margin-bottom: 30px;
  }

  .navigation-button {
    font-size: 10px;
  }

  .seminar-navigation-container {
    justify-content: space-evenly;
    left: -140px;
  }
}

</style>
