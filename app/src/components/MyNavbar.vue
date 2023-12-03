
<template>
  <nav class="navbar">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="#">
          <img src="@/assets/logo.svg" alt="Logo" />
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-desktop">
          <router-link to="/" class="navbar-item">Etusivu</router-link>
          <router-link to="/events" class="navbar-item">Tapahtumat</router-link>
          <a class="navbar-item" href="#">Kiltalaisille</a>
          <a class="navbar-item" href="#">Yhteystiedot</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'MyNavbar',
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

.navbar-brand {
  font-size: 1.5rem;
}

.navbar-item {
  color: inherit;
  text-decoration: none;
}

.navbar-item:hover {
  text-decoration: underline;
}
</style>