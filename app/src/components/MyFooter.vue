<template>
  <footer class="footer">
    <div class="content has-text-centered">
      <p> 
        <a href="https://athene.fi" target="a_blank">athene.fi</a> 
        #athene25 #athenehommat
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter',
};
</script>

<style scoped>
/* Updated styles to make the footer stick to the bottom */
.footer {
  background-color: #f8f8f8;
  padding: 1rem 0;
  color: #000;
  width: 100%;
}

a {
  color: inherit;
  text-decoration: underline;
}
</style>