<template>
        <div class="container faq-container">
            <ul v-if="asks.length">
                <article class="message"
                    v-for="ask in asks"
                    v-bind:key="ask.id"
                >   
                        <div v-on:click="ask.isShow=!ask.isShow" class="message-header ask-container">
                            <p>{{ ask.questionProperty }}</p>
                            <button class="delete" aria-label="delete"></button>
                        </div>
                        
                        <div v-show="ask.isShow" class="message-body answer-container">
                            <div>{{ ask.answerProperty }}</div>
                        </div>
                </article>
            </ul>
        </div>

</template>

<style>
@import "http://fonts.fontstorage.com/import/madeevolvesansevo.css";

.faq-container {
    max-width: 600px;
}

.faq-container p {
    font-size: 1.4em;
    font-family: 'MADE Evolve Sans EVO';
}
</style>

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
