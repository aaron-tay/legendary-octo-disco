<template>
  <div id="app">
    <div class="section">
      <div class="container">
        <div class="columns is-centered">
          <div class="column has-text-centered">
            <img src="./assets/logo.png">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
</style>
