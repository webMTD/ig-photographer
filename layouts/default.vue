<template>
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
    <nuxt/>
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
