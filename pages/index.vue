<template>
  <!--<div class="container">
    <div class="photo-category family-shot"></div>
    <div class="photo-category wedding-shot"></div>
    <div class="photo-category studio-shot"></div>
    <div class="photo-category kid-shot"></div>
  </div>-->
  <section>
  <div class="columns is-centered">
    <nuxt-link  class="column is-half-desktop is-three-quarters-touch wedding-shot" to="/portfolio/wedding-shot">
      <img src="/wedding-shot.jpg">
    </nuxt-link>
    <nuxt-link  class="column is-half-desktop is-three-quarters-touch studio-shot" to="/portfolio/studio-shot">
      <img src="/studio-shot.jpg">
    </nuxt-link>
  </div>
  <div class="columns is-centered">
    <nuxt-link  class="column is-half-desktop is-three-quarters-touch family-shot" to="/portfolio/family-shot">
      <img src="/family-shot.jpg">
    </nuxt-link>
    <nuxt-link  class="column is-half-desktop is-three-quarters-touch kid-shot" to="/portfolio/kid-shot">
      <img src="/kid-shot.jpg">
    </nuxt-link>
  </div>
  </section>
</template>

<script>
export default{
  layout: 'default'
}
</script>

<style>


/*
.wedding-shot {
  background-image: url("/wedding-shot.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.studio-shot {
  background-image: url("/studio-shot.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.kid-shot {
  background-image: url("/kid-shot.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

.family-shot {
  background-image: url("/family-shot.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}
*/
/*
.container {
  min-height: 100vh;
  max-height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  display: flex;
  justify-content: center;
  text-align: center;
  vertical-align: center;
  flex-wrap: no-wrap;
}

.photo-category {
  min-width: 30%;
  max-width: 30%;
  min-height: 100vh;
  transform: skew(-10deg);
}

.photo-category:hover {
  filter: sepia(0.1);
}

.family-shot {
  background-color:aqua;
}

.wedding-shot {
  background-color: pink;
  min-width: 27%;
  max-width: 27%;
}

.studio-shot {
  background-color: darkslateblue;
  min-width: 27%;
  max-width: 27%;
}

.kid-shot {
  background-color: crimson;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
*/

</style>

