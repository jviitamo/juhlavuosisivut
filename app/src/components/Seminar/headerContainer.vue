
<template>
    <div class="header-container">
        <h2 class="seminar-heading-smaller text-smaller">{{ $t('seminar[0].header1') }} <br> </h2>
        <h1 class="seminar-heading main-heading-center">{{ $t('seminar[0].header2') }}</h1>
        <div class="inner-header-container">
            <p class="text-smaller">{{ $t('seminar[0].header3') }}</p>
            <img src="@/assets/ruukku_logo.svg" alt="Logo" />
            <p class="text-smaller">{{ $t('seminar[0].header4') }}</p>
        </div>
        <div class="text-container">
            <p class="bold-text">{{ $t('seminar[0].content1') }}</p>
            <p class="bold-text">{{ $t('seminar[0].content2') }}</p>
            <p class="bold-text"><a :href="$t('seminar[0].link')" target="a_blank">{{ $t('seminar[0].content3') }}</a> {{ $t('seminar[0].content4') }}</p>
        </div>
    </div>
</template>

<script>

export default {
    name: 'HeaderContainer'
};
</script>

<style scoped>

.seminar-heading {
    letter-spacing: 12px; /* Adjust this value to control the spacing between letters */
}

.seminar-heading-smaller {
    letter-spacing: 4px; /* Adjust this value to control the spacing between letters */
}

.inner-header-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    max-width: 600px;
    margin: 50px auto;
}

img {
    height: 250px;
}

.text-smaller {
    font-size: 40px;
}

a {
    color: black
}

@media screen and (max-width: 600px) {
    .text-smaller {
        font-size: 20px;
    }

    .seminar-heading {
        letter-spacing: 3px; /* Adjust this value to control the spacing between letters */
    }

    img {
        height: 100px;
    }

    .inner-header-container {
        max-width: 300px;
    }
  }

</style>