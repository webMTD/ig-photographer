<template>
  <section class="main-container section">
  <div class="columns is-centered">
    <div class="column image-menu-item wedding">
      <nuxt-link to="/portfolio/wedding-shot">
        <figure class="image is-16by9">
          <div class="text-on-menu-item-image">
            <p class="is-size-4">Свадебная фотография</p>
          </div>
          <img src="/ws.jpg">
        </figure>
      </nuxt-link>
    </div>
    <div  class="column image-menu-item studio">
      <nuxt-link to="/portfolio/studio-shot">
        <figure class="image is-16by9">
          <div class="text-on-menu-item-image">
            <p class="is-size-4">Студийная съемка</p>
          </div>
          <img src="/ss.jpg">
        </figure>
      </nuxt-link>
    </div>
  </div>
  <div class="columns is-centered">
    <div class="column image-menu-item">
      <nuxt-link to="/portfolio/family-shot">
        <figure class="image is-16by9">
          <div class="text-on-menu-item-image">
            <p class="is-size-4">Семейная съемка</p>
          </div>
          <img src="/fs.jpg">
        </figure>
      </nuxt-link>
    </div>
    <div class="column image-menu-item kid" >
      <nuxt-link to="/portfolio/kid-shot">
        <figure class="image is-16by9">
          <div class="text-on-menu-item-image">
            <p class="is-size-4">Детская фотосессия</p>
          </div>
          <img src="/ks.jpg">
        </figure>
      </nuxt-link>
    </div>
  </div>
  </section>
</template>

<script>
export default{
  layout: 'default'
}

</script>

<style>
@import "http://fonts.fontstorage.com/import/madeevolvesansevo.css";

.main-container {
  overflow: hidden;
}


/*
.image-menu-item::after {
  display: none;
  content: "";
}
.image-menu-item:hover::after{
  display: block;
}

*/
.image-menu-item {
  filter: sepia(1) hue-rotate(200deg);
  transition: filter 0.4s;
}

.text-on-menu-item-image {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-shadow: 2px 2px 2px black;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  width: 100%;
  height: 15%;
  top: 45%;
  font-family: 'MADE Evolve Sans EVO';
  font-weight: lighter;
  transition: display 2s;
}

.text-on-menu-item-image > p {
  margin: 0;

}

.image-menu-item:hover, .image-menu-item:active {
  filter: grayscale(1);
  filter: none;
}

.image-menu-item:hover .text-on-menu-item-image {
  display: none;
}





</style>

