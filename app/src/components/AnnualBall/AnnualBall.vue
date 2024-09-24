<template>
  <div class="hero-container">
    <div class="header-section">
      <div class="event-header">
        <img class="icon-large" src="@/assets/AnnualBall/star.svg" alt="star" />
        <h4>{{ $t('ball[0].main1') }}</h4>
        <h6>{{ $t('ball[0].main2') }}</h6>
      </div>
      <div>
        <h1>{{ $t('ball[0].main3') }}</h1>
        <h2>{{ $t('ball[0].main4') }}</h2>
      </div>
      <div class="event-details">
        <p>{{ $t('ball[0].main5') }}</p>
        <div class="icon-row">
          <img class="icon-small" src="@/assets/AnnualBall/little_star.svg" alt="star" />
          <img class="icon-small" src="@/assets/AnnualBall/little_star.svg" alt="star" />
          <img class="icon-small" src="@/assets/AnnualBall/little_star.svg" alt="star" />
        </div>
      </div>
    </div>

    <div class="main-text-section">
      <div class="event-info">
        <p class="top-padding">{{ $t('ball[0].main6') }}</p><br>
        <p>{{ $t('ball[0].main7') }}</p>
        <a class="side-by-side-content" href="https://maps.app.goo.gl/Gx8iui6mMBXWhjAp7">{{ $t('ball[0].main7_1') }}</a>
        <p class="side-by-side-content">{{ $t('ball[0].main7_2') }}</p><br><br>
        <p>{{ $t('ball[0].main8') }}</p><br>
        <p>{{ $t('ball[0].main9') }}</p><br>
        <a class="side-by-side-content" href="https://athene.fi/periaatteet/">{{ $t('ball[0].main10') }}</a>
        <p class="side-by-side-content">{{ $t('ball[0].main11') }}</p>
      </div>

      <MiddleHeader :text1="$t('ball[0].schedule0')" />

      <div class="event-info">
       <p class="event-info-header">{{ $t('ball[0].schedule1') }}</p>
       <table>
          <tr>
            <td class="time">15:00</td>
            <td>{{ $t('ball[0].schedule2') }}</td>
          </tr>
          <tr>
            <td class="time">17:15-17:45</td>
            <td>{{ $t('ball[0].schedule3') }}</td>
          </tr>
          <tr>
            <td class="time">18:00</td>
            <td>{{ $t('ball[0].schedule4') }}</td>
          </tr>
          <tr>
            <td class="time">02:00</td>
            <td>{{ $t('ball[0].schedule5') }}</td>
          </tr>
          <tr>
            <td class="time">02:15</td>
            <td>{{ $t('ball[0].schedule6') }}</td>
          </tr>
        </table>
       <p class="event-info-header">{{ $t('ball[0].schedule7') }}</p>
       <table>
          <tr>
            <td class="time">12:00</td>
            <td>{{ $t('ball[0].schedule8') }}</td>
          </tr>
        </table>
      </div>

      <MiddleHeader :text1="$t('ball[0].signup0')" />
      <div class="event-info">
        <p class="gold-text italic">{{ $t('ball[0].signup1') }}</p>
        <div class="sign-up">
          <div>
            <p class="event-info-header">{{ $t('ball[0].signup2') }}</p>
            <div>
              <br><p>{{ $t('ball[0].signup3') }}</p><br><p>{{ $t('ball[0].signup4') }} {{ $t('ball[0].signup5') }}</p>
            </div>
          </div>
          <div>
            <p class="event-info-header">{{ $t('ball[0].signup6') }}</p>
            <div>
              <br><p>{{ $t('ball[0].signup7') }}</p><br><p>{{ $t('ball[0].signup8') }} {{ $t('ball[0].signup9') }}</p>
            </div>
          </div>
        </div>
        <p>{{ $t('ball[0].signup10') }}</p>
      </div>

      <MiddleHeader :text1="$t('ball[0].prepare0')" :text2="$t('ball[0].prepare01')"/>
      <div class="event-info">
        <p>{{ $t('ball[0].prepare1') }}</p><br>
        <p>{{ $t('ball[0].prepare2') }}</p><br>
        <p class="side-by-side-content">{{ $t('ball[0].prepare3') }}</p>
        <a class="side-by-side-content" href="https://tky.polyteekkarimuseo.fi/files/7/7137648af17611dbaebfd51e78e0c785c785_kaytosopas.pdf">{{ $t('ball[0].prepare4') }}</a>
        <p class="side-by-side-content">{{ $t('ball[0].prepare5') }}</p><br><br>
        <ListElement :title="$t('ball[0].avec0')">
          <p>{{ $t('ball[0].avec1') }}</p><br>
        </ListElement>
        <ListElement :title="$t('ball[0].dressing0')">
          <p class="side-by-side-content">{{ $t('ball[0].dressing1') }}</p>
          <p class="side-by-side-content gold-text">{{ $t('ball[0].dressing2') }}</p><br><br>
          <p>{{ $t('ball[0].dressing3') }}</p><br>
          <p>{{ $t('ball[0].dressing4') }}</p><br>
        </ListElement>
        <ListElement :title="$t('ball[0].sillis_dressing0')">
          <p class="side-by-side-content">{{ $t('ball[0].sillis_dressing1') }}</p>
          <p class="side-by-side-content gold-text">{{ $t('ball[0].sillis_dressing2') }}</p>
          <p class="side-by-side-content">{{ $t('ball[0].sillis_dressing3') }}</p>
        </ListElement>
        <ListElement :title="$t('ball[0].academic_medals0')">
          <p class="side-by-side-content">{{ $t('ball[0].academic_medals1') }}</p>
          <p class="side-by-side-content gold-text">{{ $t('ball[0].academic_medals2') }}</p>
          <p class="side-by-side-content">{{ $t('ball[0].academic_medals3') }} </p><br><br>
          <p class="side-by-side-content">{{ $t('ball[0].academic_medals4') }}</p>
          <p class="side-by-side-content gold-text">{{ $t('ball[0].academic_medals5') }}</p> 
          <p class="side-by-side-content">{{ $t('ball[0].academic_medals6') }}</p> 
          <p class="side-by-side-content gold-text">{{ $t('ball[0].academic_medals7') }}</p> 
          <p class="side-by-side-content">{{ $t('ball[0].academic_medals8') }}</p> 
          <p class="side-by-side-content gold-text">{{ $t('ball[0].academic_medals9') }}</p>
        </ListElement>
      </div>

      <MiddleHeader :text1="$t('ball[0].contact0')" />
      <div class="event-info">
        <p>{{ $t('ball[0].contact1') }}</p>
        <div class="sign-up">
          <div>
            <p class="event-info-header">{{ $t('ball[0].contact2') }}</p>
            <div>
              <br><p>{{ $t('ball[0].contact3') }}</p>
            </div>
          </div>
          <div>
            <p class="event-info-header">{{ $t('ball[0].contact4') }}</p>
            <div>
              <br><p>{{ $t('ball[0].contact5') }}</p>
            </div>
          </div>
        </div>
        <p>{{ $t('ball[0].contact6') }}</p>
        <div class="contact-list">
          <div class="contact">
            <img class="small-star-icon" src="@/assets/AnnualBall/yellow_star.svg" alt="star" />
            <p>{{ $t('ball[0].contact7') }}</p>
          </div>
          <div class="contact">
            <img class="small-star-icon" src="@/assets/AnnualBall/yellow_star.svg" alt="star" />
            <p>{{ $t('ball[0].contact8') }}</p>
          </div>
          <div class="contact">
            <img class="small-star-icon" src="@/assets/AnnualBall/yellow_star.svg" alt="star" />
            <p>{{ $t('ball[0].contact9') }}</p>
          </div>
          <div class="contact">
            <img class="small-star-icon" src="@/assets/AnnualBall/yellow_star.svg" alt="star" />
            <p>{{ $t('ball[0].contact10') }}</p>
          </div>
          <div class="contact">
            <img class="small-star-icon" src="@/assets/AnnualBall/yellow_star.svg" alt="star" />
            <p>{{ $t('ball[0].contact11') }}</p>
          </div>
          <div class="contact">
            <img class="small-star-icon" src="@/assets/AnnualBall/yellow_star.svg" alt="star" />
            <p>{{ $t('ball[0].contact12') }}</p>
          </div>
          <div class="contact">
            <img class="small-star-icon" src="@/assets/AnnualBall/yellow_star.svg" alt="star" />
            <p>{{ $t('ball[0].contact13') }}</p>
          </div>
          <div class="contact">
            <img class="small-star-icon" src="@/assets/AnnualBall/yellow_star.svg" alt="star" />
            <p>{{ $t('ball[0].contact14') }}</p>
          </div>
        </div>
      </div>
      <MiddleHeader :text1="$t('ball[0].sponsors0')" />
      <div class="event-info">
        <div class="sponsor-container">
          <img class="sponsor-logo" src="@/assets/AnnualBall/sponsor1.png" alt="star" />
          <img class="sponsor-star" src="@/assets/AnnualBall/yellow_star.svg" alt="star" />
          <img class="sponsor-logo" src="@/assets/AnnualBall/sponsor2.png" alt="star" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MiddleHeader from '@/components/AnnualBall/MiddleHeader.vue';
import ListElement from '@/components/AnnualBall/ListElement.vue';

export default {
  name: 'AnnualBall',
  components: {
    MiddleHeader,
    ListElement
  },
};
</script>

<style>
h1, h2, h4, h6, p {
  margin: 0;
}

a {
  color: white;
}

.side-by-side-content {
  margin: 0;
  display: inline
}

.header-section > {
  margin: 1rem 0;
}


.icon-large {
  height: 40px;
  width: 40px;
}

.icon-small {
  height: 20px;
  width: 20px;
}

.small-star-icon {
    height: 20px;
    width: 20px;
    margin-right: 1rem;
}

.sponsor-logo {
  width: 30%;
}

.sponsor-star {
  width: 5%;
}

.header-section {
  margin: auto;
  color: white;
  font-family: "the-seasons", sans-serif;
  background-image: url('@/assets/AnnualBall/background.png');
  background-size: cover;
  background-position: center;  
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}

h1 {
  font-size: 4rem;
  font-weight: 400;
  font-style: normal;
}

h2 {
  font-size: 3rem;
}

h2, h6 {
  font-weight: 400;
  font-style: italic;
}

.top-padding {
  padding-top: 2rem;
}

/* Main Text Section */
.main-text-section {
  background-color: #2F4325;
  color: white;
  width: 100%;
}

.event-info {
  padding: 1rem 0;
  width: 90%;
  max-width: 1000px;
  margin: auto;
  text-align: left;
  font-size: 1.5rem;
}

.event-info-header {
  font-size: 2rem;
  font-weight: 400;
  font-style: normal;
  font-family: "the-seasons", sans-serif;
}

.icon-row {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 1rem;
}

table {
  width: 100%;
  padding: 2rem 0;
}

tr {
  width: 100%;
  vertical-align: top;
}

.sign-up {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 2rem 0;
}

.sign-up > div {
  width: 50%;
}

.sign-up > div > div {
  max-width: 90%;
}

.contact-list {
  padding: 2rem 0;
}

.contact {
  display: flex;
  flex-direction: row;
  margin-top: 5px;
}

.sponsor-container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  margin-bottom: 2rem;
}

@media screen and (max-width: 1000px) {
  .event-info {
    font-size: 1rem;
  }

  h1 {
    font-size: 2rem;
  }
  h2 {
    font-size: 1rem;
  }

  .event-info-header {
    font-size: 1.5rem;
  }

  .time {
    width: 20%;
  }
}

@media screen and (max-width: 600px) {
  table {
    padding: 1rem 0;
  }
  .sign-up {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 1rem 0;
  }

  .sign-up > div {
    width: 100%;
    padding-bottom: 2rem;
  }

  .sign-up > div > div {
    max-width: 100%;
  }
}

.gold-text {
  color: #FCBB56;
}

.italic {
  font-style: italic;
}

</style>
