<template>
  <div class="home">
    <nav-header>
      <span>
        フィード
      </span>
    </nav-header>

    <div class="section">
      <div class="container">
        <div class="columns">
          <div class="column" v-for="id in 1,2,3">
            <div class="card">
              <div class="card-image">
                <router-link :to="{ name: 'hakoro', params: {} }">
                  <figure class="image is-3by2">
                    <img :src="image({id})" />
                  </figure>
                </router-link>
              </div>
              <div class="card-content">
                <router-link tag="div" class="media" :to="{ name: 'profile', params: {} }">
                  <div class="media-left">
                    <figure class="image is-48x48 is-circle">
                      <img src="~@/assets/stock/p-1.jpg">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">あめちゃん</p>
                    <p class="subtitle is-6">@ameamechyan</p>
                  </div>
                </router-link>

                <div class="content">
                  雑誌で人気と書いてあったので購入しました。特に右上のオレンジ系の色が可愛く、優しい印象に仕上げてくれます。ハイライトから締め色までこれ一つで完成、誰でも簡単に使えると思い…
                </div>

                <nav class="level is-mobile">
                  <a class="level-item">
                    <span class="icon is-small">745&nbsp;<i class="fa fa-comment-o"></i></span>
                  </a>
                  <a class="level-item">
                    <span class="icon is-small">321&nbsp;<i class="fa fa-retweet"></i></span>
                  </a>
                  <a class="level-item">
                    <span class="icon is-small">32k&nbsp;<i class="fa fa-heart"></i></span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
    <tab-navigation></tab-navigation>
  </div>
</template>

<script>
import NavHeader from './NavHeader';
import TabNavigation from './TabNavigation';

export default {
  components: {
    NavHeader,
    TabNavigation,
  },
  data() {
    return {
    };
  },
  methods: {
    image({ id }) {
      return require(`@/assets/stock/box-${id}.jpg`);
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
