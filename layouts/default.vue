<template>
  <div>
    <nuxt/>
    <nav class="navbar is-fixed-bottom is-centered" role="navigation" aria-label="main navigation">
      <div class="navbar-menu  is-centered" v-bind:class="{'is-active': showNav} ">
        <div class="navbar-start">
        </div>
          <nuxt-link class="navbar-item" to="/portfolio/">Portfolio</nuxt-link>
          <nuxt-link class="navbar-item" to="/blog">Blog</nuxt-link>
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/faq">F.A.Q.</nuxt-link>
          <nuxt-link class="navbar-item" to="/contacts">Contacts</nuxt-link>
        <div class="navbar-end">
        </div>
      </div>
      <div class="navbar-brand">
        <button class="button navbar-burger" v-on:click="showNav = !showNav">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  </div>
</template>


<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}

</style>

<script>
export default {
  data() {
    return {
			showNav: false
    }
  }
}
</script>
