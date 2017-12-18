<template>
  <div class="login">
    <section class="hero is-light is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-multiline is-centered">
            <div class="column is-4">
              <div>
                <div class="has-text-centered">
                  <img class="logo" src="~@/assets/hakoro-logo-alpha.png" />
                  <div>
                    ハコロ
                  </div>
                </div>
                <hr />
              </div>
              <form class="" @submit.prevent>
                <div class="field">
                  <p class="control has-icon">
                    <input class="input is-medium" type="text" placeholder="メールアドレス">
                    <span class="icon is-small">
                      <i class="fa fa-envelope"></i>
                    </span>
                  </p>
                </div>
                <div class="field">
                  <p class="control has-addons has-icon">
                    <input class="input is-expanded is-medium" type="password" placeholder="パスワード">
                    <span class="icon is-small">
                      <i class="fa fa-lock"></i>
                    </span>
                  </p>
                </div>

                <hr />
                <div class="field">
                  <p class="control">
                    <router-link :to="{ name: 'profile' }" class="button is-primary is-inverted is-fullwidth is-disabled is-medium">
                      ログイン
                    </router-link>
                  </p>
                </div>
              </form>
            </div>
            <div class="column is-4 is-offset-4">
              <div class="has-text-centered">
                <router-link :to="{ name: 'home' }" class="button is-light is-fullwidth">
                  無料会員登録 &nbsp;
                  <strong>
                    こちら &gt;
                  </strong>
                </router-link>
              </div>
            </div>
          </div>
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
