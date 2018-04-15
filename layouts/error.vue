<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Страница не найдена</h1>
    <h1 v-else>Произошла ошибка</h1>
    <nuxt-link to="/">Вернуться на главную</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>

<style>

.container {
  font-family: sans-serif;
  padding-top: 10%;
  text-align: center;
}
h1 {
  font-size: 20px;
}

</style>
