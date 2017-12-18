<template>
  <div class="home">
    <nav-header></nav-header>

    <div class="section">
      <div class="container">
        <div class="image is-3by2">
          <img src="~@/assets/stock/2.jpg" />
        </div>
      </div>
      <br />
      <div class="container">
        <div class="columns">
          <div class="column">
            <article class="media" v-for="product in products">
              <figure class="media-left">
                <p class="image is-64x64">
                  <img :src="image(product)">
                </p>
              </figure>
              <div class="media-content">
                <div class="content">
                  <p>
                    <strong>{{ product.name }}</strong> <small>{{ product.brand }}</small>
                    <br>
                    {{ product.description }}
                  </p>
                </div>
                <nav class="level is-mobile">
                  <div class="level-left">
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-reply"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-retweet"></i></span>
                    </a>
                    <a class="level-item">
                      <span class="icon is-small"><i class="fa fa-heart"></i></span>
                    </a>
                  </div>
                </nav>
              </div>
            </article>
          </div>
        </div>
      </div>
      <hr />
      <div class="container">
        <button class="button is-primary is-medium is-fullwidth">
          今すぐ購入
        </button>
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
      products: [
        {
          id: 1,
          name: 'リップティント',
          brand: 'ATS',
          description: '冬で唇がひどく荒れて、いろんなリップクリームを塗ってもどうにもならなかったのですが、なんとなく手に取ったこちらを使ったところあっという間によくなりました…',
        },
        {
          id: 2,
          name: 'チーク',
          brand: 'MAC',
          description: '雑誌で人気と書いてあったので購入しました。特に右上のオレンジ系の色が可愛く、優しい印象に仕上げてくれます。ハイライトから締め色までこれ一つで完成、誰でも簡単に使えると思い…',
        },
        {
          id: 3,
          name: 'パウダーアイシャドウ',
          brand: 'chanel',
          description: 'センシュアル色を見た瞬間から即決で購入しました(^^)ピンクがかって上品な色がお気に入りです。どの季節でも合うので発売から今も使っています(^^)前まではロイヤルブラウンを使って…',
        },
        {
          id: 4,
          name: 'クリームケア',
          brand: 'lancome',
          description: 'もう何本目でしょう。リップ自体に匂いも味もなく気持ちス～っとする感じが癖になります。テクスチャも軽くヨレやタレもなく最高です！おなじディオールのリップ ティントと合わせて使っています。',
        },
        {
          id: 5,
          name: 'マカロングロウアイズ',
          brand: 'LoL',
          description: 'すごーく評判良いので、1度はつけてみたい！と、タッチアップしてから購入するつもりでデパートカウンターに行きました。イエローベース、奥二重、丸顔。ハードコンタクト使用。いつ…',
        },
      ],
    };
  },
  methods: {
    image({ id }) {
      return require(`@/assets/stock/sq-${id}.jpg`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  padding-top: 1.5rem;
}
</style>
