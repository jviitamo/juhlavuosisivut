<template>
    <div v-if="title != ''">
        <div class="prepare-header"> 
            <img class="star-icon" src="@/assets/AnnualBall/yellow_star.svg" alt="star" />
            <p class="event-info-header">{{ title }}</p>
        </div>
        <div class="child-container">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
name: 'ListElement',
props: {
    title: String,
},
}
</script>

<style scoped>
.child-container {
    padding: 1rem 4rem;
}

.prepare-header {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.star-icon {
    height: 30px;
    width: 30px;
    margin-right: 2rem;
}

@media screen and (max-width: 600px) {
    .child-container {
        padding: 1rem 0;
    }

.star-icon {
        height: 30px;
        width: 30px;
        margin-right: 0.5rem;
    }
}
</style>
