<template >
    <div
        :class="{
            'feedback-slider': true,
            active: this.active,
            show: this.revealed
        }"
    >
        <section class="feedback-slider__content">
            <div
                title="Download"
                class="feedback-slider__content__icon"
                @click="toggleClass"
            >
                <!-- <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 23.8 38"
                     width="24"
                     height="32">
                     <path class="st0" fill="#30752f" d="M22.8 19.8l-10.9 11L1 19.8l1.6-1.6 8.2 8.3V1H13v25.5l8.2-8.3 1.6 1.6zM1.8 37v-2.3H22V37H1.8z"/>
                </svg> -->
                <svg viewBox="0 0 50 50" width="50" xmlns="http://www.w3.org/2000/svg">
                  <g class="stroke-change" stroke="#008273" stroke-width="2" fill="none" fill-rule="evenodd">
                    <polygon points="19.6785714 35 11 35 11 19.6666667 19.6785714 19.6666667 19.6785714 20.9075145"></polygon>
                    <polygon points="15.8214286 31.1666667 13.8928571 31.1666667 13.8928571 31.1666667 15.8214286 31.1666667"></polygon>
                    <path d="M19.6785714,32.6747416 L22.8344156,34.0416667 L35.0194805,34.0416667 C36.6850649,34.0416667 38,32.6747416 38,31.0515181 L38,24.2168928 C38,22.5936693 36.6850649,21.2267442 34.9318182,21.2267442 L29.4967532,21.2267442 L29.4967532,13.7940891 C29.4967532,12.7688953 28.7077922,12 27.6558442,12 C26.7792208,12 26.0779221,12.5980297 25.8149351,13.3669251 L25.025974,16.6133721 L23.711039,19.0909238 C23.0097403,20.4578488 21.5194805,21.312177 19.9415584,21.312177 L19.6785714,21.312177"></path>
                  </g>
                </svg>
            </div>
            <div class="feedback-slider__content__text">
                <span class="feedback-text">Was this content helpful?</span>
                <a
                    title="Send Mail"
                    id="cta:feedback:helpful"
                    @click="toggleClass"
                >Yes
                </a>
                <a
                    title="Send Mail"
                    id="cta:feedback:not-helpful"
                    @click="toggleClass"
                >No
                </a>
            </div>
        </section>
    </div>
</template>

<script >
export default {
  name: "feedback-slider",
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
      var isShown = false;
      if (perc >= 50) {
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
.feedback-slider {
  position: fixed;
  right: -225px;
  // top: calc(30% + 110px);


  // top: calc(30% + 55px);



   bottom: calc(30% - 110px);





  width: 225px !important;
  height: 50px;
  border: 1px solid #707070;
  padding: 0;
  transition-duration: 0.4s;
  background-color: #fff;
  z-index: 100000;
  // transform: translateX(50%);
  .feedback-text {
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 2px;
    font-family: "Segoe UI Semibold";
    font-weight: 600;
  }
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
      border-right: 1px solid rgb(0, 130, 115);
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
        cursor: pointer;
        font-size: 12px;
        line-height: 16px;
        color: rgb(0, 130, 115);
        span {
          color: rgb(0, 130, 115);
        }
        &:hover {
          border-color: rgb(0, 130, 115);
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
  fill: rgb(0, 130, 115);
  transition: fill 0.3s ease-in-out;
}
.show {
  right: -175px;
}
.active {
  right: 0;
}
</style>