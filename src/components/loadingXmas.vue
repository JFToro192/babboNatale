<template>
  <div id="loadingCountdown" v-if="isVisible">
    <div id="loadingSanta">
      <img src="../assets/loading/santa-claus.png" alt="" />
    </div>
    <div id="loadingTimer" style="color:white;">
      <h3 class="title-random">{{ waitForIt }}</h3>
      <div class="countdown">
        <div v-if="days" class="countdown__block">
          <div class="countdown__digit">{{ days || twoDigits }}</div>
          <div class="countdown__text">Days</div>
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
      <button class="btn-start" 
              @click="isItTime()"
              :style="buttonStyle">
        {{ buttonText }}
      </button>
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
      eventDate: null,
      finish: false,
      buttonText: "",
      isVisible: true
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
    buttonStyle() {
      const isDatePassed = this.eventDate - this.now < 0;

      if (!isDatePassed) {
        this.buttonText = "Coming Soon!"    
        this.waitForIt = "I told you to wait!!!"    
      } else {
        this.buttonText = "It is time!"
        this.waitForIt = "Let's go!"
      }
      
      return {
        // Add conditional styles based on the date
        'background-color': !isDatePassed ? 'gray' : 'green',
        'color': !isDatePassed ? 'black' : 'white',
        // Add more styles as needed
      };
    },
    secondCount() {
      return this.calculatedDate - this.now;
    },
    calculatedDate() {
      this.eventDate = Math.trunc(Date.parse(this.event) / 1000);
      return Math.trunc(Date.parse(this.event) / 1000);
    },
    seconds() {
      if (this.secondCount < 0 ) return this.twoDigits(0);
      return this.twoDigits(this.secondCount % 60);
    },
    minutes() {
      if (this.secondCount < 0 ) return this.twoDigits(0);
      return this.twoDigits(Math.trunc(this.secondCount / 60) % 60);
    },
    hours() {
      if (this.secondCount < 0 ) this.twoDigits(0);
      return this.twoDigits(Math.trunc(this.secondCount / 60 / 60) % 24);
    },
    days() {
      if (this.secondCount < 0 ) return 0;
      return Math.trunc(this.secondCount / 60 / 60 / 24);
    },
  },
  methods: {
    // Check if it is time
    isItTime() {
      if (this.eventDate - this.now > 0) {
        alert("It is not time yet !!")
      } else {
        this.isVisible = !this.isVisible;
        this.$emit('startGift', this.isVisible);
      }
    },
    twoDigits(value) {
      if (value  > 0 ){
        if (value.toString().length <= 1) {
          return "0" + value.toString();
        }
        return value.toString();        
      }
      return "00".toString(); 
    },   
  }

};
</script>

<style scoped>
div {
  border-radius: 8px;
}

#loadingCountdown {
  position: absolute;
  width: 100%;
  height: calc( 100vh - 20px );
  max-width: 300px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

#loadingSanta {
  height: 300px;
}

#loadingTimer {
  height: 225px;
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
  font-weight: bold;
}
</style>
