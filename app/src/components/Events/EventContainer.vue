<!-- MainBody.vue -->

<template>
    <div class="main-body-container-events">
        <div class="event-header">
            <img src="@/assets/right.svg" alt="Logo" />
            <div class="main-heading-events">
                <h1>{{ $t('event_headers[0].header_1') }}</h1>
                <p>{{ $t('event_headers[0].header_2') }}</p>
            </div>
            <img src="@/assets/left.svg" alt="Logo" />
        </div>
        <div class="event-information-container">
            <div>
                <EventInformation
                    v-for="(message, key) in getEvents('events_0')" :key="key"
                    :text=message.text
                    :information=message.information
                    :location=message.location 
                    :date=message.date
                    :time=message.time
                    :imageName=message.imageName
                    :link=message.link
                />
            </div>
            <div>     
                <h2>{{ $t('event_headers[0].header_3') }}</h2>   
                <EventInformation
                    v-for="(message, key) in getEvents('events_1')" :key="key"
                    :text=message.text
                    :information=message.information
                    :location=message.location 
                    :date=message.date
                    :time=message.time
                    :imageName=message.imageName
                    :link=message.link
                />
            </div>
            <div class="add-margin-top">     
                <EventInformation
                    v-for="(message, key) in getEvents('events_2')" :key="key"
                    :text=message.text
                    :information=message.information
                    :location=message.location 
                    :date=message.date
                    :time=message.time
                    :imageName=message.imageName
                    :link=message.link
                />
            </div>
            <div>         
                <h2>{{ $t('event_headers[0].header_4') }}</h2>   
                <EventInformation
                    v-for="(message, key) in getEvents('events_3')" :key="key"
                    :text=message.text
                    :information=message.information
                    :location=message.location 
                    :date=message.date
                    :time=message.time
                    :imageName=message.imageName
                    :link=message.link
                />
            </div>        
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
    methods: {
        getEvents(key) {
        const messages = this.$i18n.messages[this.$i18n.locale] || {};
        return messages[key] || [];
        },
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

.add-margin-top {
    margin-top: 100px;
}

@media screen and (max-width: 600px) {
    .event-information-container {
        width: 90%;
        padding: 1rem 0;
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