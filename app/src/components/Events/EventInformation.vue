<!-- ClickableText.vue -->
<template>
    <div @click="toggleBox" class="clickable-text">
        <div class="first-information-container">
          <div>{{ date }} {{ text }}</div>
          <div :class="{ 'arrow-up': isArrowUp, 'arrow-down': !isArrowUp }"></div>
        </div>
      <div v-if="isBoxVisible" class="info-box" @click.stop >
        <div class="image-content">
          <img :src="imageEventUrl" alt="Image" class="card-image" />
        </div>
        <div class="info-box-details">
          <div class="info-box-details-element">
            <img src="@/assets/icons/time.svg" alt="Image" class="card-icon" />
            {{ date }}
          </div>
          <div class="info-box-details-element">
            <img src="@/assets/icons/clock.svg" alt="Image" class="card-icon" />
            {{ time }}
          </div>
          <div class="info-box-details-element">
            <a v-if="locationLink" :href=locationLink target="a_blank"><img src="@/assets/icons/location.svg" alt="Image" class="card-icon link-icon" /></a>
            <img v-else src="@/assets/icons/location.svg" alt="Image" class="card-icon" />
            {{ location }}
          </div>
        </div>
        <p v-if="information">{{ information }}</p>
        <p v-else>{{ $t('event_headers[0].more_info') }}</p>
        <a v-if="link" class="link" :href="link" target="_blank">{{ $t('event_headers[0].link_button') }}</a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EventInformation',
    props: {
      text: {
        type: String,
        required: true,
      },
      information: {
        type: String,
        default: ''
      },
      date: {
        type: String,
        default: 'TBA',
      },
      time: {
        type: String,
        default: 'TBA',
      },
      location: {
        type: String,
        default: 'TBA',
      },
      imageName: {
        type: String,
        default: 'ruukku_logo.svg', // Image name from the assets folder
      },
      link: {
        type: String,
        default: '', // Image name from the assets folder
      },
      locationLink: {
        type: String,
        default: '',
      }
    },
    computed: {
      imageEventUrl() {
        return require(`@/assets/events/${this.imageName}`);
      },
      imageUrl() {
        return require(`@/assets/${this.imageName}`);
      }
    },
    data() {
      return {
        isBoxVisible: false,
        isArrowUp: false,
      };
    },
    methods: {
      toggleBox() {
        this.isBoxVisible = !this.isBoxVisible;
        this.isArrowUp = !this.isArrowUp;
      }
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */

.arrow-up,
.arrow-down {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  cursor: pointer;
}

.arrow-up {
  border-bottom: 10px solid black;
}

.arrow-down {
  border-top: 10px solid black;
}
.clickable-text {
  cursor: pointer;
  margin: 60px auto;
}

.image-content {
  padding: 30px;
  margin: auto;
}
.card-image {
  max-width: 100%;
  max-height: 300px; /* Set a reasonable max height for the image */
}

.first-information-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 5px;
  border-bottom: 1px solid black;
}

.first-information-container > div {
  margin-bottom: 10px;
}

.underlined {
  text-decoration: underline;
}
  
.info-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  cursor: default;
}

.info-box > p {
  text-align: center;
}

.info-box-details {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center items horizontally */
  align-items: center; /* Center items vertically */
  padding: 10px;
}

.link {
  margin: auto;
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  color: inherit;
  text-decoration: none;
}

.link:hover {
  opacity: 0.7;
}

.info-box-details-element {
  display: flex;
  align-items: center;
  padding: 10px;
}

.card-icon {
  padding: 0 20px;
}

.link-icon:hover {
  opacity: 0.7;
}

  </style>