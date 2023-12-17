
<template>
  <nav class="navbar">
    <div class="languageselector">
      <div @click="switchLanguage('fi')" :style="[this.$i18n.locale  === 'fi' ? 'text-decoration: underline' : '']">FI</div>
      <div>|</div>
      <div @click="switchLanguage('en')" :style="[this.$i18n.locale  === 'en' ? 'text-decoration: underline' : '']">EN</div>
    </div>
    <div class="container">
      <div class="navbar-brand">
        <router-link to="/" class="link-underline-prevent-default">
          <img src="@/assets/logo.svg" alt="Logo" />
        </router-link >
      </div>
      
      <div class="navbar-menu">
        <div class="navbar-desktop">
          <router-link to="/" class="navbar-item" :style="currentRoute('/')">{{ $t('nav_bar[0].front_page_header') }}</router-link>
          <router-link to="/events" class="navbar-item" :style="currentRoute('/events')">{{ $t('nav_bar[0].events_header') }}</router-link>
          <router-link to="/seminar" class="navbar-item" :style="currentRoute('/seminar')">{{ $t('nav_bar[0].seminar_header') }}</router-link>
          <router-link to="/infoahky" class="navbar-item" :style="currentRoute('/infoahky')">{{ $t('nav_bar[0].annual_ball_header') }}</router-link>
          <router-link to="/guild" class="navbar-item" :style="currentRoute('/guild')">{{ $t('nav_bar[0].for_guild_header') }}</router-link>
          <router-link to="/contact" class="navbar-item" :style="currentRoute('/contact')">{{ $t('nav_bar[0].contact_information_header') }}</router-link>
        </div>

        <!-- Mobile menu button -->
        <button class="navbar-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Mobile menu content -->
        <div class="navbar-mobile" v-if="isMobileMenuOpen">
          <router-link @click="toggleMobileMenu" to="/" class="navbar-item" :style="currentRoute('/')">{{ $t('nav_bar[0].front_page_header') }}</router-link>
          <router-link @click="toggleMobileMenu" to="/events" class="navbar-item" :style="currentRoute('/events')">{{ $t('nav_bar[0].events_header') }}</router-link>
          <router-link @click="toggleMobileMenu" to="/seminar" class="navbar-item" :style="currentRoute('/seminar')">{{ $t('nav_bar[0].seminar_header') }}</router-link>
          <router-link @click="toggleMobileMenu" to="/infoahky" class="navbar-item" :style="currentRoute('/infoahky')">{{ $t('nav_bar[0].annual_ball_header') }}</router-link>
          <router-link @click="toggleMobileMenu" to="/guild" class="navbar-item" :style="currentRoute('/guild')">{{ $t('nav_bar[0].for_guild_header') }}</router-link>
          <router-link @click="toggleMobileMenu" to="/contact" class="navbar-item" :style="currentRoute('/contact')">{{ $t('nav_bar[0].contact_information_header') }}</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MyNavbar',
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },
    switchLanguage(lang) {
      this.$i18n.locale = lang;
    },
    currentRoute(route) {
      return this.$router.currentRoute.value.fullPath === route ? 'font-weight: bold' : ''
    }
  },
};
</script>

<style scoped>
/* Updated styles for a wide navbar with gray background and black text */
.navbar-desktop {
  background-color: #E3E1E5; /* Gray background */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem;
  color: #000; /* Black text */
}
 
.container {
  width: 100%; /* Make the container full-width */
}

.languageselector {
  position: absolute;
  right: 15px;
  top: 15px;
  display: flex;
  flex-direction: row;
  font-size: 20px;
  color: black;
}
.languageselector > div {
  cursor: pointer;
  margin: 0 10px;
}
.languageselector > div:hover {
  opacity: 0.7;
}

.navbar-brand {
  font-size: 1.5rem;
  padding-top: 50px;
}

img {
    max-width: 100%;
    max-height: 300px; /* Set a reasonable max height for the image */
}

.navbar-item {
  color: inherit;
  text-decoration: none;
  font-size: 1rem;
}

.navbar-item:hover {
  opacity: 0.7;
}

/* Mobile menu button styles */
.navbar-toggle {
  display: none;
  background: lightgray;
  border: none;
  cursor: pointer;
  padding: 15px;
  width: 100%;
}

.navbar-toggle span {
  display: block;
  height: 2px;
  width: 25px;
  background-color: #000;
  margin-bottom: 5px;
}

/* Mobile menu content styles */
.navbar-mobile {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fff; /* White background */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 2rem;
  z-index: 1000; /* Ensure it's above other content */
}

@media screen and (max-width: 900px) {
  .navbar-item {
    font-size: 0.7rem;
  }
}


@media screen and (max-width: 600px) {
  /* Styles for mobile */
  .navbar-toggle {
    display: block; /* Show the mobile menu button */
  }

  .navbar-item {
    font-size: 2rem;
  }

  .navbar-desktop {
    display: none; /* Hide the desktop menu */
  }

  .navbar-active .navbar-mobile {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}


</style>