<template>
  <div class="home">
    <nav-header>
      <span>
        プロフィール
      </span>
    </nav-header>

    <div class="section">
      <div class="container">
        <article class="media">
          <figure class="media-left">
            <p class="image is-64x64 is-circle">
              <img src="~@/assets/stock/p-1.jpg">
            </p>
          </figure>
          <div class="media-content">
            <nav class="level is-mobile">
              <div class="level-item has-text-centered is-active">
                <div>
                  <p class="title is-4">259</p>
                  <p class="heading">Boxes</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="title is-4">123</p>
                  <p class="heading">Following</p>
                </div>
              </div>
              <div class="level-item has-text-centered">
                <div>
                  <p class="title is-4">456K</p>
                  <p class="heading">Followers</p>
                </div>
              </div>
            </nav>
          </div>
        </article>
        <div class="content">
          <p>
            <strong>あめちゃん</strong> <small>@ameamechyan</small>
            <br>
            ♡ make💄nail💅Hair🎀fashion💋にスポットをあてた
          </p>
        </div>
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
      const num = ((id % 7) + 1);
      return require(`@/assets/stock/box-${num}.jpg`);
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

.content {
  margin-top: 0.75rem;
}
</style>
