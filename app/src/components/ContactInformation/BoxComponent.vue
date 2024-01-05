<!-- BoxComponent.vue -->

<template>
    <div class="box">
      <img :src="imageUrl" class="photo" alt="Image" @click="playMusic">
      <audio v-if="musicSrc" ref="audioPlayer" :src="musicUrl"></audio>
      <div class="info">
        <p class="name">{{ name }}</p>
        <p class="title">{{ title }}</p>
        <p class="email">{{ email }}</p>
        <p class="telegram">TG: {{ telegram }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: String,
      email: String,
      title: String,
      telegram: String,
      photoUrl: {
        type: String, // You can pass the URL for the round photo as a prop
        default: "ellipse.svg"
      },
      musicSrc: {
        type: String,
        default: ""
      }
    },
    computed: {
      imageUrl() {
        return require(`@/assets/people/${this.photoUrl}`);
      },
      musicUrl() {
        return require(`@/assets/${this.musicSrc}`);
      },
    }, 
    methods: {
        playMusic() {
          if (this.musicSrc) {
            const audioPlayer = this.$refs.audioPlayer;
            audioPlayer.currentTime = 19;
            audioPlayer.play();
            audioPlayer.addEventListener('timeupdate', () => {
              if (audioPlayer.currentTime >= 21.3) {
                audioPlayer.pause();
              }
            });
          }
        }
      }
  };
  </script>
  
  <style scoped>
  .box {
    width: calc(33.33% - 20px); /* 33.33% width for each box with spacing */
    margin: 10px; /* Adjust as needed for spacing */
    padding: 20px; /* Box padding */
    box-sizing: border-box; /* Includes padding in the box width */
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .photo {
    width: 200px; /* Adjust as needed for the photo size */
    height: 200px; /* Adjust as needed for the photo size */
    border-radius: 50%; /* Creates a round shape */
    margin-bottom: 10px; /* Adjust as needed for spacing */
  }
  
  .info {
    text-align: center;
  }

  .name {
    font-weight: bold;
  }
  
  .name, .email, .telegram, .title {
    margin: 0; /* Reset default margin for paragraphs */
  }

  @media screen and (max-width: 900px) {
    .box {
        width: 80%;
    }
  }


  </style>
  