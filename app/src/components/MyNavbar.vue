
<template>
  <nav class="navbar">
    <div class="languageselector desktop">
      <div @click="switchLanguage('fi')" :style="[this.$i18n.locale  === 'fi' ? 'text-decoration: underline' : '']">FI</div>
      <div>|</div>
      <div @click="switchLanguage('en')" :style="[this.$i18n.locale  === 'en' ? 'text-decoration: underline' : '']">EN</div>
    </div>

    <div class="languageselector mobile" v-if="isMobileMenuOpen">
      <div @click="switchLanguage('fi')" :style="[this.$i18n.locale  === 'fi' ? 'text-decoration: underline' : '']">FI</div>
      <div>|</div>
      <div @click="switchLanguage('en')" :style="[this.$i18n.locale  === 'en' ? 'text-decoration: underline' : '']">EN</div>
    </div>

    <div class="navbar-brand">
      <router-link to="/" class="link-underline-prevent-default">
        <img src="@/assets/logo.svg" alt="Logo" :style="{ maxHeight: `${computedNavbarHeight}px` }" />
      </router-link >
    </div>
    
    <div class="navbar-menu">
      <div class="navbar-desktop">
        <router-link v-for="route in this.$router.getRoutes()" :key="route.name" :to="route.path" class="navbar-item" :style="currentRoute(route.path)">
          {{ $t(route.props.default.text) }}
        </router-link>
      </div>

      <!-- Mobile menu button -->
      <button class="navbar-toggle" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Mobile menu content -->
      <div class="navbar-mobile" v-if="isMobileMenuOpen">
        <router-link v-for="route in this.$router.getRoutes()" :key="route.name" @click="toggleMobileMenu" :to="route.path" class="navbar-item" :style="currentRoute(route.path)">
          {{ $t(route.props.default.text) }}
        </router-link>
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
      scrollPosition: 0,
      scaleTrigger1: 300, // Scroll position for the first size change
      scaleTrigger2: 600, // Scroll position for the second size change    
    };
  }, 
  computed: {
    computedNavbarHeight() {
      if (this.scrollPosition <= this.scaleTrigger1) {
        return 130; // Default height
      } else if (this.scrollPosition <= this.scaleTrigger2 ) {
        return 90; // Adjusted height
      } else {
        return 60; // Adjusted height
      }
    },
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
    },
    handleScroll() {
      // Update scroll position
      this.scrollPosition = window.scrollY
    }
  },
  mounted() {
    // Add a scroll event listener when the component is mounted
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeUnmount() {
    // Remove the scroll event listener when the component is destroyed to avoid memory leaks
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
/* Updated styles for a wide navbar with gray background and black text */

.navbar {
  position: sticky;
  top: 0;
  width: 100%;
}

.navbar-brand {
  background-color: white;
}
.navbar-desktop {
  background-color: #E3E1E5; /* Gray background */
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem;
  color: #000; /* Black text */
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

.mobile {
  z-index: 2; /* Ensure it's above other content */
}

.navbar-brand {
  font-size: 1.5rem;
  padding-top: 50px;
}

img {
    max-height: 150px; /* Set a reasonable max height for the image */
    transition: max-height 0.3s ease-out;
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
  justify-content: space-evenly;
  z-index: 1; /* Ensure it's above other content */
  padding: 20px 0;
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
    font-size: 1.5rem;
  }

  .navbar-desktop, .desktop {
    display: none; /* Hide the desktop menu */
  }

}


</style>