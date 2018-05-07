<template>
    <section class="section">
        <item-ask v-bind:asks="asks"></item-ask>
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
import AskItem from "~/components/AskItem.vue"


export default {
 
    data () {
        return {
            asks: [
                {
                    id: 0,
                    questionProperty: 'Как забронировать Вас на свою дату?',
                    answerProperty: 'Чтобы забронировать дату, Вам нужно внести аванс в размере 2000р от общей стоимости и подписать договор.',
                    isShow: false
                },
                {
                    id: 1,
                    questionProperty: 'Можете ли вы порекомендовать визажистов, стилистов, флористов и оформителей?',
                    answerProperty: 'Я доверяю своих клиентов только профессионалам и обязательно посоветую вам нескольких специалистов в той или иной области.',
                    isShow: false
                },
                {
                    id: 2,
                    questionProperty: 'Печатаете ли вы фотокниги?',
                    answerProperty: 'Да. К каждому пакету можно дополнительно приобрести фотокнигу. Цена фотокниги зависит от ее размера, количества разворотов и материала обложки.',
                    isShow: false
                },
                {
                    id: 3,
                    questionProperty: 'Помогаете ли вы найти место для фотосъемки?',
                    answerProperty: 'Да, конечно. В наших общих интересах провести фотосъемку в красивом и оригинальном месте, которое подойдет именно Вам.',
                    isShow: false
                },
                {
                    id: 4,
                    questionProperty: 'Сколько будут обрабатываться фотографии?',
                    answerProperty: 'Сроки обработки свадебных фотографий варьируются от 1,5 до 2 месяцев, в зависимости от занятости и месяца съемки.',
                    isShow: false
                },
            ],
            
        }
    }
}
</script>