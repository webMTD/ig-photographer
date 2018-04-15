<template>
  <!--<div class="container">
    <div class="photo-category family-shot"></div>
    <div class="photo-category wedding-shot"></div>
    <div class="photo-category studio-shot"></div>
    <div class="photo-category kid-shot"></div>
  </div>-->
  <div>
    <div></div>
  <div class="columns is-desktop">
    <div class="column is-one-half-desktop"></div>
    <div class="column is-desktop"></div>
  </div>
  <div class="columns is-desktop">
    <div class="column is-one-half-desktop"></div>
    <div class="column is-desktop"></div>
  </div>
  </div>
</template>

<script>
export default{
  layout: 'default'
}
</script>

<style>
.columns {
  height: 50vh;
}
.column {
  height: 100%;
  border: 3px dashed red;
}
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

