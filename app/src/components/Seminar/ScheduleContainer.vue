
<template>
    <div>
        <h1 class="main-heading-center add-margin">{{ $t('seminar[0].header6') }}</h1>
        <div class="schedule-container">
            <div class="schedule-texts">
                <p class="bold-text">{{ $t('seminar[0].schedule1') }}</p>
                <p class="bold-text">{{ $t('seminar[0].schedule2') }}</p>
                <p class="bold-text">{{ $t('seminar[0].schedule3') }}</p>
                <p class="italic-text">{{ $t('seminar[0].schedule31') }}</p>
                <p class="bold-text">{{ $t('seminar[0].schedule4') }}</p>
            </div>
            <img src="@/assets/ruusu.svg" alt="Logo" />
        </div>
    </div>
</template>

<script>

export default {
    name: 'ScheduleContainer'
};
</script>

<style scoped>

.schedule-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-bottom: 50px;
}

.schedule-texts {
    text-align: left;
}

img {
    height: 250px;
    margin-top: -30px;
}

.add-margin {
    margin-bottom: 70px;
}

.italic-text {
    margin: -20px 90px 10px;
    font-style: italic;
}

@media screen and (max-width: 600px) {
    img {
        height: 170px;
        margin-top: 20px;
    }

    .add-margin {
        margin-bottom: 40px;
    }

    .italic-text {
        margin: -20px 60px 10px;
        font-style: italic;
    }

}

</style>