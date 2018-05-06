<template>
    <div class="container">
        <div class="container">
            <ul v-if="asks.length">
                <div
                    v-for="ask in asks"
                    v-bind:key="ask.id"
                >   
                    <div class="columns is-centered is-mobile">
                        <div v-on:click="ask.isShow=!ask.isShow" class="column is-11-touch is-half-desktop ask-container">
                            <div>{{ ask.questionProperty }}</div>
                        </div>
                    </div>
                    <div class="columns is-centered is-mobile">
                        <div v-show="ask.isShow" class="column is-11-touch is-half-desktop answer-container">
                            <div>{{ ask.answerProperty }}</div>
                        </div>
                    </div>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        asks: {
            type: Array,
            required: true
        }
    },

    data(){
        return{

        }
    }
}

</script>
