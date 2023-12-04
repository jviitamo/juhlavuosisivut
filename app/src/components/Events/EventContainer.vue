<!-- MainBody.vue -->

<template>
    <div class="main-body-container">
        <div class="event-header">
            <img src="@/assets/right.svg" alt="Logo" />
            <div class="main-heading">
                <h1>{{ $t('events_header_1') }}</h1>
                <p>{{ $t('events_header_2') }}</p>
            </div>
            <img src="@/assets/left.svg" alt="Logo" />
        </div>
        <div class="event-information-container">
        <EventInformation
            text="8.1 Vuodenavausbrunssi"
            information="This is the additional information."
            location="Olkkari"
            date="2.1.2024"
            time="15.00-20.00"
            imageName="pollo.svg"
          />     
          <h2>{{ $t('events_header_3') }}</h2>   
        <EventInformation
            text="8.1 Vuodenavausbrunssi"
            information="This is the additional information."
        />     
        <EventInformation
            text="8.1 Vuodenavausbrunssi"
            information="This is the additional information."
        />     
        <EventInformation
            text="8.1 Vuodenavausbrunssi"
            information="This is the additional information."
        />     
        <h2>{{ $t('events_header_4') }}</h2>   
        <EventInformation
            text="8.1 Vuodenavausbrunssi"
            information="This is the additional information."
        />     
        <EventInformation
            text="8.1 Vuodenavausbrunssi"
            information="This is the additional information."
        />     
        <EventInformation
            text="8.1 Vuodenavausbrunssi"
            information="This is the additional information."
        />     
        </div>
    </div>
  </template>
  
  <script>
  import EventInformation from '@/components/Events/EventInformation.vue';

  export default {
    name: 'MainBody',
    components: {
        EventInformation
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles for MainBody here */
  
.main-body-container {
    display: flex;
    flex-direction: column;
    padding: 4rem 2rem;
    margin: 0 auto;
}

.event-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: 'Magra';
    width: 100%;
}

.main-heading {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.main-heading > h1 {
    font-size: 3rem;
}

.main-heading > p {
    font-size: 1.5rem;
    font-weight: bold;
}

.event-information-container {
    padding: 4rem 0;
    text-align: left;
    width: 60%;
    margin: auto;
}

@media screen and (max-width: 600px) {
    .event-information-container {
        width: 90%;
    }

    .event-header  > img {
        height: 150px;
        margin: 0 -30px;
    }

    .main-heading > h1 {
        font-size: 1.7rem;
    }
    
    .main-heading > p {
        font-size: 1rem;
        font-weight: bold;
    }
}
  
</style>