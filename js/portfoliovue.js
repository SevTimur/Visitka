Vue.component('portfolio-list__item', {
  props: ['portfolio'],
  template: `
  <div class="portfolio-list__item"
  @mouseover="updatePortfolio"
  >
  <div class="portfolio-list__img">
  <img :src="portfolio.portfolioImage" alt="">
  </div>
  <div class="portfolio-list__text">
  {{ portfolio.portfolioName }}
  </div>
  </div>
  `,
  data() {
    return {

    }
  },
  methods: {
    updatePortfolio: function() {
      this.$emit('update-portfolio', this.portfolio.portfolioImage, this.portfolio.portfolioLink)
    },
  },
  computed: {

  }
})

var app = new Vue({
  el: '#app',
  data: {
    image: "./img/111.png",
    link: "",
    id: 0,
    portfolios: [
      {
        portfolioName: "Пример 1",
        portfolioId: 1,
        portfolioImage: "./img/111.png",
        portfolioLink: "http://m95215kf.beget.tech/index.php",
      },
      {
        portfolioName: "Пример 2",
        portfolioId: 2,
        portfolioImage: "./img/222.png",
        portfolioLink: "http://m95215kf.beget.tech/test1/index.html"
      },
      {
        portfolioName: "Пример 3",
        portfolioId: 3,
        portfolioImage: "./img/555.png",
        portfolioLink: "http://m95215kf.beget.tech/internet-resheniya/index.html"
      },
      {
        portfolioName: "Пример 4",
        portfolioId: 4,
        portfolioImage: "./img/333.png",
        portfolioLink: "http://m95215kf.beget.tech/test2/index.html"
      },
      {
        portfolioName: "Пример 5",
        portfolioId: 5,
        portfolioImage: "./img/444.png",
        portfolioLink: "http://m95215kf.beget.tech/test33/index.html"
      },
    ],
  },
  methods: {
    updateportfolio(portfolioImage, portfolioLink) {
      this.image = portfolioImage,
      this.link = portfolioLink
    },
  }
})
