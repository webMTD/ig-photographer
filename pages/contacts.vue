<template>
    <section class="contacts section">
        <div class="columns">
            <div class="column gmap is-half-desktop">
                <GoogleMap></GoogleMap>
            </div>
            <div class="column is-half-desktop">
                <p class="vcard">
                    Адрес:<br>
                    <a href="tel:+19704760125">Зеленоград</a><br>
                    Телефон:<br>
                    <a href="tel:+19704760125">+7-000-000-00-00</a><br>
                    Почта:<br>
                    <a href="mailto: maintattoo@gmail.com">ig@gmail.com</a><br>
                    Социальные сети:<br>
                    <a href="https://vk.com/tattoo_main" class="url vk"></a>
                    <a href="https://instagram.com/tattoo_main" class="url instagram"></a>
                    <a href="https://facebook.com/tattoo_main" class="url fb"></a>
                    <button class="button is-black">УМРИ</button>
                </p>
            </div>
      </div>
  </section>
</template>
<script>
import GoogleMap from '~/components/GoogleMap.vue'

export default {
  components: {
      GoogleMap
  }
}
</script>

<style>
p{
    font-family: 'MADE Evolve Sans EVO';
}
a{
    color: lightseagreen;
}
.url {
    margin: 20px;
    padding: 2px;
    width: 25px;
    height: 25px;
    box-shadow: 0 2px 2px black;
}
.column {
    margin-top: 2em;
}
.gmap > * {
     box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>