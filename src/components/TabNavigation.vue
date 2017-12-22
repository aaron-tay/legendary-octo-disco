<template>
  <footer class="bottom-nav">
    <div class="container">
      <nav class="level is-mobile">
        <div class="level-item has-text-centered">
          <router-link :to="{ name: 'activity', params: {} }">
            <span class="icon is-small"><i class="fa fa-home"></i></span>
            <p class="heading">フィード</p>
          </router-link>
        </div>
        <div class="level-item has-text-centered">
          <router-link :to="{ name: 'build', params: {} }">
            <span class="icon is-small"><i class="fa fa-plus"></i></span>
            <p class="heading">ハコ</p>
          </router-link>
        </div>
        <div class="level-item has-text-centered">
          <router-link :to="{ name: 'profile', params: {} }">
            <span class="icon is-small"><i class="fa fa-user"></i></span>
            <p class="heading">プロフィール</p>
          </router-link>
        </div>
      </nav>
    </div>
  </footer>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
@import '~@/assets/main';

footer.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: white;
}

.router-link-active {
  color: $hakoro-pink-foreground;
}
</style>
