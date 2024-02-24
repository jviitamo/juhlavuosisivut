<template>
  <footer class="footer">
    <div class="content">
      <p> 
        <a :href="$t('footer[0].text1')" target="a_blank">{{ $t('footer[0].text2') }}</a> 
        {{ $t('footer[0].text3') }} {{ $t('footer[0].text4') }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'MyFooter'
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