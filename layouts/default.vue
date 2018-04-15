<template>
<<<<<<< HEAD
  <div class="container">
=======
  <div>
    <nav class="navbar is-fixed-bottom is-light">
      <div class="container">
      <div class="navbar-menu" id="nav-menu">
          <div class="navbar-start">
          </div>
          <nuxt-link to="/portfolio" class="navbar-item">
            Портфолио
          </nuxt-link>
          <nuxt-link to="/blog" class="navbar-item">
            Блог
          </nuxt-link>
          <nuxt-link to="/faq" class="navbar-item">
            ЧаВо
          </nuxt-link>
          <nuxt-link to="/contacts" class="navbar-item">
            Контакты
          </nuxt-link>
          <div class="navbar-end">
          </div>
        </div>
        <div class="navbar-brand is-white">
          <a role="button" class="navbar-burger burger" data-target="navMenu" aria-label="menu" aria-expanded="false">
            <span aria-hidden="true">
            </span>
            <span aria-hidden="true">
            </span>
            <span aria-hidden="true">
            </span>
          </a>
        </div>
      </div>
    </nav>
>>>>>>> 51757650fce48a37a40826e4f2b63e47dccf4737
    <nuxt/>
    <nav class="navbar is-fixed-bottom" role="navigation" aria-label="main navigation">
      <div class="navbar-menu  is-centered" :class="{'is-active': showNav} ">
        <div class="navbar-start">
        </div>
          <nuxt-link class="navbar-item" to="/portfolio">Portfolio</nuxt-link>
          <nuxt-link class="navbar-item" to="/blog">Blog</nuxt-link>
          <nuxt-link class="navbar-item" to="/">Home</nuxt-link>
          <nuxt-link class="navbar-item" to="/faq">F.A.Q.</nuxt-link>
          <nuxt-link class="navbar-item" to="/contacts">Contacts</nuxt-link>
        <div class="navbar-end">
        </div>
      </div>
      <div class="navbar-brand">
        <a class="navbar-item" href="/"></a>
        <button class="button navbar-burger" @click="showNav = !showNav">
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
<<<<<<< HEAD

=======
>>>>>>> 51757650fce48a37a40826e4f2b63e47dccf4737
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
