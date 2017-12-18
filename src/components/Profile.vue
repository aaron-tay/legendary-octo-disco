<template>
  <div class="home">
    <nav-header></nav-header>

    <div class="section">
      <div class="container">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64 is-circle">
              <img src="~@/assets/stock/p-1.jpg">
            </p>
          </figure>
          <div class="media-content">
            <div class="content">
              <p>
                <strong>あめちゃん</strong> <small>@ameamechyan</small>
                <br>
                ♡ make💄nail💅Hair🎀fashion💋にスポットをあてた
              </p>
            </div>
          </div>
        </article>
      </div>
      <hr />
      <div class="container">
        <div class="columns is-multiline is-mobile">
          <div class="column is-one-third" v-for="id in 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15">
            <router-link :to="{ name: 'hakoro', params: {} }">
              <div class="image is-1by1">
                <img :src="image(id)" />
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavHeader from './NavHeader';

export default {
  components: {
    NavHeader,
  },
  data() {
    return {
    };
  },
  methods: {
    image(id) {
      const num = ((id % 6) + 1);
      return require(`@/assets/stock/sq-${num}.jpg`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  padding-top: 1.5rem;
}

.is-circle {
  border-radius: 999px;
  overflow: hidden;
}
</style>
