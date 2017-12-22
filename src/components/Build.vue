<template>
  <div class="home">
    <nav-header>
      <span>
        カスタマイズ
      </span>
    </nav-header>

    <div class="section">
      <div class="container">
        <h1 class="subtitle">
          来月のボックス
        </h1>
        <div class="columns is-multiline is-mobile is-centered">
          <div class="column is-one-third-mobile is-2-tablet" v-for="id in 1,2,3,4">
            <router-link :to="{ name: 'hakoro', params: {} }">
              <div class="image is-1by1 is-circle">
                <img :src="image({ id })" />
              </div>
            </router-link>
          </div>
          <div class="column is-one-third-mobile is-2-tablet">
            <div class="image is-1by1 is-circle">
              <span class="icon is-large"><i class="fa fa-question"></i></span>
            </div>
          </div>
        </div>
        <hr>
        <div class="columns">
          <div class="column">
            <h1 class="subtitle">
              おすすめ
            </h1>
          </div>
        </div>
        <div class="columns is-multiline is-mobile">
          <div class="column is-one-third-touch is-2-desktop has-text-centered" v-for="(item, $idx) in products" :class="{'sponsored': $idx === 0 }">
            <router-link :to="{ name: 'hakoro', params: {} }">
              <div class="image is-1by1">
                <img :src="image( item )" />
              </div>
              <span>
                {{ item.name }}
              </span>
              <span v-if="$idx === 0" class="sponsor">
                <strong>
                  sponsored
                </strong>
              </span>
            </router-link>
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
      products: [
        {
          id: 5,
          name: 'リップティント',
          brand: 'ATS',
          description: '冬で唇がひどく荒れて、いろんなリップクリームを塗ってもどうにもならなかったのですが、なんとなく手に取ったこちらを使ったところあっという間によくなりました…',
        },
        {
          id: 6,
          name: 'チーク',
          brand: 'MAC',
          description: '雑誌で人気と書いてあったので購入しました。特に右上のオレンジ系の色が可愛く、優しい印象に仕上げてくれます。ハイライトから締め色までこれ一つで完成、誰でも簡単に使えると思い…',
        },
        {
          id: 7,
          name: 'パウダーアイシャドウ',
          brand: 'chanel',
          description: 'センシュアル色を見た瞬間から即決で購入しました(^^)ピンクがかって上品な色がお気に入りです。どの季節でも合うので発売から今も使っています(^^)前まではロイヤルブラウンを使って…',
        },
        {
          id: 8,
          name: 'クリームケア',
          brand: 'lancome',
          description: 'もう何本目でしょう。リップ自体に匂いも味もなく気持ちス～っとする感じが癖になります。テクスチャも軽くヨレやタレもなく最高です！おなじディオールのリップ ティントと合わせて使っています。',
        },
        {
          id: 9,
          name: 'マカロングロウアイズ',
          brand: 'LoL',
          description: 'すごーく評判良いので、1度はつけてみたい！と、タッチアップしてから購入するつもりでデパートカウンターに行きました。イエローベース、奥二重、丸顔。ハードコンタクト使用。いつ…',
        },
        {
          id: 1,
          name: 'チーク',
          brand: 'MAC',
          description: '雑誌で人気と書いてあったので購入しました。特に右上のオレンジ系の色が可愛く、優しい印象に仕上げてくれます。ハイライトから締め色までこれ一つで完成、誰でも簡単に使えると思い…',
        },
        {
          id: 2,
          name: 'パウダーアイシャドウ',
          brand: 'chanel',
          description: 'センシュアル色を見た瞬間から即決で購入しました(^^)ピンクがかって上品な色がお気に入りです。どの季節でも合うので発売から今も使っています(^^)前まではロイヤルブラウンを使って…',
        },
        {
          id: 3,
          name: 'クリームケア',
          brand: 'lancome',
          description: 'もう何本目でしょう。リップ自体に匂いも味もなく気持ちス～っとする感じが癖になります。テクスチャも軽くヨレやタレもなく最高です！おなじディオールのリップ ティントと合わせて使っています。',
        },
        {
          id: 4,
          name: 'マカロングロウアイズ',
          brand: 'LoL',
          description: 'すごーく評判良いので、1度はつけてみたい！と、タッチアップしてから購入するつもりでデパートカウンターに行きました。イエローベース、奥二重、丸顔。ハードコンタクト使用。いつ…',
        },
      ],
    };
  },
  methods: {
    image({ id }) {
      const num = ((id % 7) + 1);
      return require(`@/assets/stock/sq-${num}.jpg`);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '~@/assets/main';

.section {
  padding-top: 1.5rem;
}

.is-circle {
  border-radius: 999px;
  overflow: hidden;
  border: 1px dashed #100;
}

.icon {
  color: $hakoro-grey;
  position: absolute;
  left: 0;
  top: 0;

  &.is-large {
    width: 100%;
    height: 100%;
  }

  .fa {
    font-size: 5rem;
  }
}

.sponsored {
  span.sponsor {
    color: $hakoro-pink-foreground;
  }
}

</style>
