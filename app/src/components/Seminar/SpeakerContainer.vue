<!-- CardComponent.vue -->

<template>
    <div :style="{ flexDirection: flexDirection }" class="card-container">
      <div class="text-content">
        <slot></slot>
      </div>
      <div class="image-content" :style="{ justifyContent: justifyContent }">
        <div>
            <img :src="imageUrl" alt="Image" class="card-image" />
            <div>
                <p class="bold-text">{{ $t('seminar[0].fun_fact') }}</p>
                <p class="italic-text">{{ reverseFunFact ? text2 : text }}</p>
            </div>
        </div>
        <div v-if="text2 && this.imageName2" class="reverse">
            <img :src="imageUrl2" alt="Image" class="card-image" />
            <div>
                <p class="bold-text">{{ $t('seminar[0].fun_fact') }}</p>
                <p class="italic-text">{{ reverseFunFact ? text : text2 }}</p>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'SpeakerContainer',
    props: {
      text: {
        type: String,
        default: '',
      },
      text2: {
        type: String,
        default: '',
      },
      imageName: {
        type: String,
        default: '', // Image name from the assets folder
      },
      imageName2: {
        type: String,
        default: '', // Image name from the assets folder
      },
      order: {
        type: String,
        default: 'textFirst', // 'textFirst' or 'imageFirst'
      },
      textSize: {
        type: String,
        default: '16px', // Default text size
      }
    },
    computed: {
      imageUrl() {
        return require(`@/assets/speakers/${this.imageName}`);
      },
      imageUrl2() {
        return require(`@/assets/speakers/${this.imageName2}`);
      },
      flexDirection() {
        if (window.innerWidth < 600) return 'column';
        return this.order === 'imageFirst' ? 'row-reverse' : 'row';
      },
      justifyContent() {
        return this.order === 'imageFirst' ? 'flex-start' : 'flex-end';
      },
      reverseFunFact() {
        return (window.innerWidth > 900) && this.text2 && this.imageName2;
      }
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  .card-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 100px auto;
    max-width: 1000px;
  }
  
  .text-content {
    flex: 1;
  }

  .reverse {
    display: flex;
    flex-direction: column-reverse;
  }

  .image-content  {
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 10px;
  }

  .italic-text {
    font-style: italic;
    max-width: 250px;
    margin: auto;
  }
  
  .card-image {
    max-height: 200px; /* Set a reasonable max height for the image */
    margin: 20px 0;
  }
  
  /* Increase the spacing between text and image */
  @media screen and (min-width: 600px) {
    .card-container {
      gap: 20px; /* Adjust the value to increase or decrease the spacing */
    }
  }


  @media screen and (max-width: 900px) {
    .reverse {
        flex-direction: column;
    }

    .image-content {
      flex-direction: column;
    }
  }

    /* Increase the spacing between text and image */
  @media screen and (max-width: 600px) {
    .text-content {
        text-align: center;
    }
    .card-container {
        margin: 30px auto;
    }
  }
  </style>
  