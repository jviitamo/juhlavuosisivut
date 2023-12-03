<!-- ClickableText.vue -->
<template>
    <div @click="toggleBox" class="clickable-text">
        <div class="first-information-container">
            <div>{{ text }}</div>
            <div>Avaa</div>
        </div>
      <div v-if="isBoxVisible" class="info-box">
        <p>{{ information }}</p>
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
        required: true,
      },
    },
    data() {
      return {
        isBoxVisible: false,
      };
    },
    methods: {
      toggleBox() {
        this.isBoxVisible = !this.isBoxVisible;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add your custom styles here */
  .clickable-text {
    cursor: pointer;
    margin: 100px auto;
    border-bottom: 1px solid black;
  }

  .first-information-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  
  .underlined {
    text-decoration: underline;
  }
  
  .info-box {
    background-color: #f0f0f0;
    padding: 10px;
    border: 1px solid #ccc;
  }
  </style>