<template>
    <section class="contacts section">
        <div class="columns">
            <div class="column gmap is-half-desktop">
                <GoogleMap></GoogleMap>
            </div>
            <div class="column is-half-desktop">
                <div class="vcard">
                    Адрес:<br>
                    <a href="tel:+19704760125">Зеленоград</a><br>
                    Телефон:<br>
                    <a href="tel:+19704760125">+7-000-000-00-00</a><br>
                    Почта:<br>
                    <a href="mailto: maintattoo@gmail.com">ig@gmail.com</a><br>
                    Социальные сети:<br>
                    <p class="buttons">
                        <a href="https://vk.com/pozarnayohrana" class="button url vk">
                            <span class="icon">
                                <i class="fa fa-vk"></i>
                            </span>
                        </a>
                        <a href="https://vk.com/" class="button url fb">
                            <span class="icon">
                                <i class="fa fa-facebook"></i>
                            </span>
                        </a>
                        <a href="https://vk.com/" class="button url vk">
                            <span class="icon">
                                <i class="fa fa-twitter"></i>
                            </span>
                        </a>
                    </p>
                    <p class="buttons">
                        <button class="button is-black">ХОЧУ ФОТО</button>
                    </p>
                </div>
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

.column {
    margin-top: 2em;
}
.gmap > * {
     box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}
</style>