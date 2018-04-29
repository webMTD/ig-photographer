<template>
    <section class="section">
        <div class="container is-centered faq-container">
            <faqs></faqs>
            <!--<div class="columns is-centered is-mobile">
                <div v-on:click="isShow=!isShow" class="column is-11-touch is-half-desktop ask-container">
                    <div>Как забронировать Вас на свою дату?</div>
                </div>
            </div>
            <div class="columns is-centered is-mobile">
                <div v-show="isShow" class="column 0 is-11-touch is-half-desktop answer-container showAnswer">
                    <div>Чтобы забронировать дату, Вам нужно внести аванс в размере 2000р от общей стоимости и подписать договор.</div>
                </div>
            </div>
            <div class="columns is-centered is-mobile">
                <div v-on:click="isShow=!isShow" class="column 1 is-11-touch is-half-desktop ask-container">
                    <div>Можете ли вы порекомендовать визажистов, стилистов, флористов и оформителей?</div>
                </div>
            </div>
            <div class="columns is-centered is-mobile">
                <div v-show="isShow" class="column is-11-touch is-half-desktop answer-container showAnswer">
                    <div>Я доверяю своих клиентов только профессионалам и обязательно посоветую вам нескольких специалистов в той или иной области.</div>
                </div>
            </div>
            <div v-on:click="isShow=!isShow" class="columns is-centered is-mobile">
                <div class="column is-11-touch is-half-desktop ask-container">
                    <div>Печатаете ли вы фотокниги?</div>
                </div>
            </div>
            <div v-show="isShow" class="columns is-centered is-mobile">
                <div class="column is-11-touch is-half-desktop answer-container showAnswer">
                    <div>Да. К каждому пакету можно дополнительно приобрести фотокнигу. Цена фотокниги зависит от ее размера, количества разворотов и материала обложки.</div>
                </div>
            </div> 
            <div class="columns is-centered is-mobile">
                <div class="column is-11-touch is-half-desktop ask-container">
                    <div>Помогаете ли вы найти место для фотосъемки?</div>
                </div>
            </div>
            <div class="columns is-centered is-mobile">
                <div class="column is-11-touch is-half-desktop answer-container showAnswer">
                    <div>Да, конечно. В наших общих интересах провести фотосъемку в красивом и оригинальном месте, которое подойдет именно Вам.</div>
                </div>
            </div>
            <div class="columns is-centered is-mobile">
                <div class="column is-11-touch is-half-desktop ask-container">
                    <div>Сколько будут обрабатываться фотографии?</div>
                </div>
            </div>
            <div class="columns is-centered is-mobile">
                <div class="column is-11-touch is-half-desktop answer-container showAnswer">
                    <div>Сроки обработки свадебных фотографий варьируются от 1,5 до 2 месяцев, в зависимости от занятости и месяца съемки.</div>
                </div>
            </div>-->
        </div>
    </section>
</template>

<style>

.answer-container {
    background-color: lightgreen
}
.ask-container {
    background-color: aqua;
    margin-top: 1em;
}

</style>

<script>
import faqs from '~/components/faqs.vue'
export default {
    components: {
        faqs
    },
    data () {
        item: [{
            ask: 'Как забронировать Вас на свою дату?',
            answer: 'Чтобы забронировать дату, Вам нужно внести аванс в размере 2000р от общей стоимости и подписать договор.'
        }]
    }
}
</script>