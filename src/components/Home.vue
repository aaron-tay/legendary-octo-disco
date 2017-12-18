<template>
  <div class="home">
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            <img class="logo" src="~@/assets/hakoro-logo-alpha.png" alt="Hakoro">
          </h1>
          <h2 class="subtitle">
            ハコロ
          </h2>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-one-third has-text-centered">
            <div class="content">
              <p>
                <div class="image is-3by2">
                  <img src="~@/assets/stock/1.jpg" />
                </div>
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis efficitur nisi non diam convallis laoreet.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-light">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-half">
              <div class="image is-3by2">
                <img src="~@/assets/stock/2.jpg" />
              </div>
            </div>
            <div class="column is-one-third is-offset-1">
              <h1 class="title">
                Personalised services
              </h1>
              <h2 class="subtitle">
                Maecenas ac leo ac dolor suscipit pellentesque.
                Aenean massa sem, scelerisque vitae odio sed, scelerisque auctor odio.
                Pellentesque tristique metus ac sollicitudin sagittis.
                Maecenas ut leo in nisl tincidunt fermentum ut at odio.
              </h2>
              <p>
                <router-link :to="{ name: 'login', params: { } }" class="button is-primary is-outlined is-inverted">
                  もっと見る
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-dark">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-tablet-reversed">
            <div class="column is-half is-offset-2">
              <div class="image is-3by2">
                <img src="~@/assets/stock/3.jpg" />
              </div>
            </div>
            <div class="column is-one-third">
              <h1 class="title">
                Hakoro Boxes to you
              </h1>
              <h2 class="subtitle">
                Ac sollicitudin sagittis pellentesque tristique metus.
                Tincidunt fermentum ut at odio maecenas ut leo in nisl.
                Odio odio aenean sed, scelerisque auctor massa sem, scelerisque vitae.
                Suscipit ac dolor Maecenas ac leo pellentesque.
              </h2>
              <p>
                <router-link :to="{ name: 'hakoro', params: { } }" class="button is-primary is-outlined">
                  もっと見る
                </router-link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline is-mobile">
            <div class="column is-half-mobile">
              <div class="image is-3by2">
                <img src="~@/assets/stock/1.jpg" />
              </div>
            </div>
            <div class="column is-half-mobile">
              <div class="image is-3by2">
                <img src="~@/assets/stock/2.jpg" />
              </div>
            </div>
            <div class="column is-half-mobile">
              <div class="image is-3by2">
                <img src="~@/assets/stock/4.jpg" />
              </div>
            </div>
            <div class="column is-half-mobile">
              <div class="image is-3by2">
                <img src="~@/assets/stock/5.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="hero is-primary is-medium">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Try it now
          </h1>
          <router-link :to="{ name: 'login', params: { } }" class="button is-primary is-medium is-inverted">
            今すぐスタート
          </router-link>
        </div>
      </div>
    </section>
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  max-width: 192px;
}
</style>
