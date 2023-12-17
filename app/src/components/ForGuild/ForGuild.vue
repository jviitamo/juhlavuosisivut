<!-- MainBody.vue -->

<template>
  <div class="main-body-container-for-guild">
    <div class="for-guild-header">
        <h1>{{ $t('main_page[0].main_page_6') }}</h1>
        <div class="header-container">
          <img src="@/assets/pylvas.svg" alt="Logo" />
          <p> {{ $t('for_guild[0].text_0') }} <router-link to="/contact" class="link-bold-prevent-default">{{ $t('for_guild[0].text_1') }}</router-link> {{ $t('for_guild[0].text_2') }} </p>
          <img src="@/assets/pylvas.svg" alt="Logo" />
        </div>
    </div>
  </div>
</template>
  
  <script>
  
  export default {
    name: 'ForGuild',
    components: {
    }
  };
  </script>

<style scoped>
/* Add your custom styles for MainBody here */

.main-body-container-for-guild {
  width: 80%;
  margin: 100px auto;
  padding: 50px 0;
}

.for-guild-header {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-family: 'Magra';
}


.for-guild-header > h1 {
  font-size: 4.5rem;
  font-weight: bold;
  max-width: 90%;
  margin: 50px auto;
}

.header-container > img {
  height: 500px;
}

.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 90%;
  margin: auto;
}
.header-container > p {
  font-size: 2rem;
  width: 70%;
}

@media screen and (max-width: 800px) {

  .main-body-container-for-guild {
    width: 100%;
    margin: 40px auto;
  }

  .header-container {
    width: 100%;
  }

  .header-container > img {
    height: 300px;
  }
  
  .for-guild-header > h1 {
    font-size: 2rem;
  }
  
  .header-container > p {
    font-size: 1rem;
  }
}

</style>
