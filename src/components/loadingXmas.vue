<template>
  <div id="loadingCountdown">
    <div id="loadingSanta">
      <img src="../assets/loading/santa-claus.png" alt="" />
    </div>
    <div id="loadingTimer">
      <h3 class="title-random">I told you to wait!!!</h3>
      <div class="countdown">
        <div v-if="days" class="countdown__block">
          <div class="countdown__digit">{{ days || twoDigits }}</div>
          <div class="countdown__text">Días</div>
        </div>
        <div class="countdown__block">
          <div class="countdown__digit">{{ hours || twoDigits }}</div>
          <div class="countdown__text">Hrs</div>
        </div>
        <div class="countdown__block">
          <div class="countdown__digit">{{ minutes || twoDigits }}</div>
          <div class="countdown__text">Min</div>
        </div>
        <div class="countdown__block">
          <div class="countdown__digit">{{ seconds || twoDigits }}</div>
          <div class="countdown__text">Seg</div>
        </div>
      </div>
      <button class="btn-start">Coming soon!</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    date: {
      type: Date,
      default: new Date("December 18, 2023 00:00:00"),
    },
  },
  data() {
    return {
      now: Math.trunc(new Date().getTime() / 1000),
      event: this.date,
      finish: false,
    };
  },
  mounted() {
    const _self = this;
    window.setInterval(() => {
      this.now = Math.trunc(new Date().getTime() / 1000);
      if (!this.finish && this.calculatedDate - this.now <= 0) {
        _self.finish = true;
        _self.$emit("onFinish");
      }
    }, 1000);
  },
  computed: {
    secondCount() {
      return this.calculatedDate - this.now;
    },
    calculatedDate() {
      return Math.trunc(Date.parse(this.event) / 1000);
    },
    seconds() {
      if (this.secondCount < 0) return 0;
      return this.secondCount % 60;
    },
    minutes() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60) % 60;
    },
    hours() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60 / 60) % 24;
    },
    days() {
      if (this.secondCount < 0) return 0;
      return Math.trunc(this.secondCount / 60 / 60 / 24);
    },
  },
  filters: {
    twoDigits(value) {
      if (value.toString().length <= 1) {
        return "0" + value.toString();
      }
      return value.toString();
    },
  },
};
</script>

<style scoped lang="scss">
div {
  border-radius: 8px;
}

#loadingCountdown {
  position: absolute;
  width: 100%;
  height: calc(100h - 20px);
  max-width: 300px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#loadingSanta {
  height: 300px;
}

#loadingTimer {
  height: 200px;
  width: 100%;
  background: rgba(255, 0, 0, 0.5);
}

img {
  height: 100%;
}

.title-random {
  padding: 5px;
}

/* Countdown */
.countdown {
  margin: 20px;
  display: flex;
  justify-content: center;
}
.countdown__block {
  text-align: center;
  padding: 0px 15px;
  position: relative;
}
.countdown__block:first-child {
  padding-left: 0;
}
.countdown__block:first-child .countdown__digit:before {
  display: none;
}
.countdown__block:last-child {
  padding-right: 0;
}
.countdown__text {
  display: inline-block;
  text-transform: uppercase;
  margin-bottom: 5px;
}
.countdown__digit {
  font-size: 300%;
  font-weight: bold;
  line-height: 1;
  margin-bottom: 5px;
}
.countdown__digit:before {
  content: ":";
  position: absolute;
  left: -5px;
}

.btn-start {
  background: green;
  color: white;
  font-weight: bold;
}
</style>
