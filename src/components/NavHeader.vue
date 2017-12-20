<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" :to="{ name: 'home', params: {} }">
          <img src="~@/assets/hakoro-logo-alpha.png" alt="Hakoro">
        </router-link>

        <span class="navbar-item">
          <slot></slot>
        </span>

        <!-- <button class="button navbar-burger">
          <span></span>
          <span></span>
          <span></span>
        </button> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {

};
</script>

<style>
</style>
