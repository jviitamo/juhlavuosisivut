<!-- MainBody.vue -->

<template>
    <div class="main-body-container-events">
        <div class="event-header">
            <img src="@/assets/right.svg" alt="Logo" />
            <div class="main-heading-events">
                <h1>{{ $t('events_header_1') }}</h1>
                <p>{{ $t('events_header_2') }}</p>
            </div>
            <img src="@/assets/left.svg" alt="Logo" />
        </div>
        <div class="event-information-container">
        <EventInformation
            text="Tapahtuma 0"
            information="This is the additional information."
            location="Olkkari"
            date="2.1."
            time="15.00-20.00"
            imageName="pollo.svg"
            link="https://athene.fi/ilmo/event/407"
          />     
          <h2>{{ $t('events_header_3') }}</h2>   
        <EventInformation
            text="Tapahtuma 1"
            information="This is the additional information."
            imageName="pollo.svg"
        />     
        <EventInformation
            text="Tapahtuma 2"
            information="This is the additional information."
            imageName="pollo.svg"
        />     
        <EventInformation
            text="Tapahtuma 3"
            date="15.3."
            information="This is the additional information."
            imageName="pollo.svg"
        />     
        <EventInformation
            text="Tapahtuma 4"
            information="This is the additional information."
            imageName="pollo.svg"
        />     
        <EventInformation
            text="Tapahtuma 5"
            date="1.5."
            information="This is the additional information."
            imageName="pollo.svg"
        />     
        <EventInformation
            text="Tapahtuma 6"
            information="This is the additional information."
            imageName="pollo.svg"
        />     
        <h2>{{ $t('events_header_4') }}</h2>   
        <EventInformation
            text="Tapahtuma 7"
            information="This is the additional information."
            imageName="pollo.svg"
        /> 
        <EventInformation
            text="Tapahtuma 8"
            information="This is the additional information."
            imageName="pollo.svg"
        />     
        <EventInformation
            text="Tapahtuma 9"
            information="This is the additional information."
            imageName="pollo.svg"
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
  
.main-body-container-events {
    padding: 4rem 1rem;
    margin: 0 auto;
}

.event-header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-family: 'Magra';
    width: 100%;
}

.event-header  > img {
    height: 300px;
}

.main-heading-events {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px;
    max-width: 50%;
}

.main-heading-events > h1 {
    font-size: 3rem;
}

.main-heading-events > p {
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
    }

    .main-heading-events > h1 {
        font-size: 1.7rem;
    }
    
    .main-heading-events > p {
        font-size: 1rem;
        font-weight: bold;
    }
}
  
</style>