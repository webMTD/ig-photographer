<template>
<div class="container is-centered">
    <div class="columns is-centered is-mobile">
        <div v-on:click="isShow=!isShow" class="column is-11-touch is-half-desktop ask-container">
            <div>{{ item.ask }}</div>
        </div>
    </div>
    <div class="columns is-centered is-mobile">
        <div v-show="isShow" class="column is-11-touch is-half-desktop answer-container">
            <div>{{ item.answer }}</div>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        props: [
            item.ask,
            item.answer
        ],
        data() {
            return {   
                isShow: false,
            }
        }
    }
</script>