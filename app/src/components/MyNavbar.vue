
<template>
  <nav class="navbar">
    <div class="languageselector">
      <div @click="switchLanguage('fi')" :style="[this.$i18n.locale  === 'fi' ? 'text-decoration: underline' : '']">FI</div>
      <div>|</div>
      <div @click="switchLanguage('en')" :style="[this.$i18n.locale  === 'en' ? 'text-decoration: underline' : '']">EN</div>
    </div>
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="@/assets/logo.svg" alt="Logo" />
        </a>
      </div>
      
      <div class="navbar-menu">
        <div class="navbar-desktop">
          <router-link to="/" class="navbar-item">{{ $t('front_page') }}</router-link>
          <router-link to="/events" class="navbar-item">{{ $t('events') }}</router-link>
          <router-link class="navbar-item" to="/guild">{{ $t('for_guild') }}</router-link>
          <router-link class="navbar-item" to="/contact">{{ $t('contact_information') }}</router-link>
        </div>

        <!-- Mobile menu button -->
        <button class="navbar-toggle" @click="toggleMobileMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <!-- Mobile menu content -->
        <div class="navbar-mobile" v-if="isMobileMenuOpen">
          <router-link @click="toggleMobileMenu" to="/" class="navbar-item">{{ $t('front_page') }}</router-link>
          <router-link @click="toggleMobileMenu" to="/events" class="navbar-item">{{ $t('events') }}</router-link>
          <router-link @click="toggleMobileMenu" class="navbar-item" to="/guild">{{ $t('for_guild') }}</router-link>
          <router-link @click="toggleMobileMenu" class="navbar-item" to="/contact">{{ $t('contact_information') }}</router-link>
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
}

img {
    max-width: 100%;
    max-height: 300px; /* Set a reasonable max height for the image */
}

.navbar-item {
  color: inherit;
  text-decoration: none;
}

.navbar-item:hover {
  text-decoration: underline;
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


@media screen and (max-width: 600px) {
  /* Styles for mobile */
  .navbar-toggle {
    display: block; /* Show the mobile menu button */
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