<template>
    <div class="container">
        <ul v-if="items[length]">
                <div
                    v-for="item in items"
                    v-bind:key="item[id]"
                >   
                    <div class="columns is-centered is-mobile">
                        <div v-on:click="item[isShow]=!item[isShow]" class="column is-11-touch is-half-desktop ask-container">
                            <div>{{ item[questionProperty] }}</div>
                        </div>
                    </div>
                    <div class="columns is-centered is-mobile">
                        <div v-show="item.isShow" class="column is-11-touch is-half-desktop answer-container">
                            <div>{{ item[answerProperty] }}</div>
                        </div>
                    </div>
                </div>
        </ul>
    </div>
</template>

<script>
export default {
    porps: {
            items: {
                type: Array,
                required: true
            },
            questionProperty: {
                type: String,
                deafult: 'tittle'
            },
            answerProperty: {
                type: String,
                default: 'value'
            },
            id: {
                type: Number,
                deafult: 0
            },
            isShow: false,
        }
}

</script>
