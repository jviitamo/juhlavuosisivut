<template>
    <div class="header-container-ball">
      <p class="highlighted-text" v-if="this.text1">{{ (text1 + ' ' + text1).substring(0,10) }}</p>
      <div class="decorative-text-container">
        <div class="line-container left-line">
            <div class="line"></div>
        </div>
        <img class="star-icon" src="@/assets/AnnualBall/yellow_star.svg" alt="star" />
        <div>
            <p class="decorative-text">{{ text1 }}</p>
            <p class="decorative-text">{{ text2 }}</p>
        </div>
        <img class="star-icon" src="@/assets/AnnualBall/yellow_star.svg" alt="star" />
        <div class="line-container right-line">
            <div class="line"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MiddleHeader',
    props: {
      text1: String,
      text2: String
    },
  };
  </script>
  
  <style>
  
  .header-container-ball {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 400;
    font-style: normal;
    font-family: "the-seasons", sans-serif;
  }
  
  .star-icon {
    height: 30px;
    width: 30px;
  }
  
  .decorative-text-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%; /* Ensure the container spans the full width */
    height: 140px;
  }
  
  .highlighted-text {
    margin-bottom: 0;
    width: 100vw;
    max-width: 100vw;   
    white-space: nowrap;   
    overflow: hidden;      
    max-width: 40ch;         
    font-size: 20vw;
    margin-bottom: -9rem;
    text-align: left;
    position: relative;
    color: transparent;
    -webkit-text-stroke: 2px rgba(252, 187, 86, 0.1);
  }
  
  .decorative-text {
    margin: 0 1rem;
    font-size: 3rem;
    text-align: left;
  }
  
  .line-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .line-container > img {
    max-width: 1000px;
    height: 1px;
  }
  
  .left-line {
    width: 10%;
  }
  
  .right-line {
    flex-grow: 1;
  }

  .line {
    width: 100%;
    border-bottom: 1px solid #FCBB56
  }
  

@media screen and (max-width: 1000px) {

    .decorative-text-container {
        height: 100px
    }
    .decorative-text {
        font-size: 2rem;
    }
 
    .highlighted-text {
        margin-bottom: -6rem;
    }
}

@media screen and (max-width: 600px) {
    .decorative-text-container {
        height: 50px;
    }
    .decorative-text {
        font-size: 1.5rem;
    }

    .highlighted-text {
        margin-bottom: -3rem;
    }

    .left-line {
        width: 5%;
    }
  
}
    
</style>
  