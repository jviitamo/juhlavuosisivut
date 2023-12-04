<!-- CardComponent.vue -->

<template>
    <div :style="{ flexDirection: flexDirection }" class="card-container">
      <div class="text-content" :style="{ fontSize: textSize, fontWeight: isBold ? 'bold' : 'normal' }">
        <p>{{ text }}</p>
      </div>
      <div class="image-content">
        <img :src="imageUrl" alt="Image" class="card-image" />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
    props: {
      text: {
        type: String,
        default: '',
      },
      imageName: {
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
      },
      isBold: {
        type: Boolean,
        default: false, // Default to non-bold text
      },
    },
    computed: {
      imageUrl() {
        return require(`@/assets/${this.imageName}`);
      },
      flexDirection() {
        if (window.innerWidth < 600) return 'column';
        return this.order === 'imageFirst' ? 'row-reverse' : 'row';
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  .card-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .text-content,
  .image-content {
    flex: 1;
    text-align: center;
  }
  
  .card-image {
    max-width: 100%;
    max-height: 300px; /* Set a reasonable max height for the image */
  }
  
  /* Increase the spacing between text and image */
  @media screen and (min-width: 600px) {
    .card-container {
      gap: 20px; /* Adjust the value to increase or decrease the spacing */
    }
  }
  </style>
  