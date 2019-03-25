<template >
    <div
        :class="{
            'download-slider': true,
            active: this.active,
            show: this.revealed
        }"
    >
        <section class="download-slider__content">
            <div
                title="Download"
                class="download-slider__content__icon"
                @click="toggleClass"
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 23.8 38"
                     width="24"
                     height="32">
                     <path class="st0" fill="#008273" d="M22.8 19.8l-10.9 11L1 19.8l1.6-1.6 8.2 8.3V1H13v25.5l8.2-8.3 1.6 1.6zM1.8 37v-2.3H22V37H1.8z"/>
                </svg>
            </div>
            <div class="download-slider__content__text">
                <a
                    title="Send Mail"
                    href="https://discover.microsoft.com/dynamics365-savvy-sales-leaders-guide-ebook/wp-content/uploads/sites/83/Dynamics365_SavvySeller_ebook.pdf"
                    target="_blank"
                    data-bi-bhvr="DOWNLOAD"
                    data-bi-dltype="e-book"
                    data-bi-dlnm="Manufacturing.pdf"
                    download
                    id="Download-ebook-PDF:Dynamics365_SavvySeller_ebook"
                    @click="toggleClass"
                >
                  <span>Download e-book</span>
                </a>
            </div>
        </section>
    </div>
</template>

<script >
export default {
  name: "download-slider",
  props: [],
  data() {
    return {
      active: false,
      revealed: false
    };
  },
  mounted() {
    // var vm = this
    window.addEventListener("scroll", () => {
      var scrollPos = window.pageYOffset;
      var docHeight = document.documentElement.scrollHeight;
      var winHeight = 0;
      var perc = (100 * scrollPos) / (docHeight - winHeight);
      var isShown = true;
      if (perc >= 10) {
        isShown = true;
      } else {
        isShown = false;
        this.active = false;
      }
      this.isRevealed(isShown);
    });
  },
  methods: {
    toggleClass() {
      this.active = !this.active;
    },
    isRevealed(isShown) {
      this.revealed = isShown;
    }
  }
};
</script>

<style scoped lang="scss">
.download-slider {
  position: fixed;
  right: -225px;
  // top: calc(30% + 55px);
      bottom: calc(30% - 55px);
  width: 225px !important;
  height: 50px;
  border: 1px solid #707070;
  padding: 0;
  transition-duration: 0.4s;
  background-color: #fff;
  z-index: 100000;
  // transform: translateX(50%);
  &__content {
    height: 100%;
    width: 100%;
    margin: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-around;
    align-items: center;
    &__icon {
      background-repeat: no-repeat;
      background-position: 44% 50%;
      background-size: 20px 50px;
      height: 50px;
      width: 50px;
      padding-right: 0;
      padding-left: 0;
      cursor: pointer;
      border-right: 1px solid #30752f;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: center;
      align-items: center;
      svg {
        &:hover {
          transform: scale(1.03);
        }
      }
    }
    &__text {
      width: 170px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-content: center;
      align-items: center;
      padding: 0;
      padding-right: 0;
      a {
        text-decoration: none;
        color: #3c3c41;
        border-bottom: 1px solid #ffffff;
        transition: all 250ms ease;
        line-height: 20px;
        cursor: pointer;
        span {
          color: #3c3c41;
        }
        &:hover {
          border-color: #3c3c41;
        }
      }
      svg {
        &:hover {
          transform: scale(1.03);
        }
      }
      &__copy-svg-path {
        fill: #3c3c41;
        transition: fill 0.3s ease-in-out;
      }
    }
  }
}
.make-light-blue {
  fill: #30752f;
  transition: fill 0.3s ease-in-out;
}
.show {
  right: -175px;
}
.active {
  right: 0;
}
</style>