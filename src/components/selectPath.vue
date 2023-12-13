<template>
<Flicking :options="{ circular: true, moveType: 'freeScroll', bound: true }">
    <div class="slide" >
        <div class="sub-slide">
            No Worries!
            <img src="../assets/hakuna-matata.jpg" alt="">
        </div>
        <div class="sub-slide">
            Shit's on fire yo!
            <img src="../assets/elmo.gif" alt="">
            <img src="../assets/SoFy.jpg" alt="">
        </div>
    </div>
    <div class="slide">
        <div class="full-slide">
            <h1>Quita Penas (Worry Doll)</h1>
            <p>The idea behind worry dolls is that if you have worries or concerns, you can share them with the dolls before going to bed. The tradition suggests placing the dolls under your pillow, and it is believed that the dolls will take away your worries while you sleep. Some variations of the tradition involve telling each worry to a different doll.</p>
        </div>
        <!-- <img src="../assets/wd.jpg" alt=""> -->
    </div>
    <div class="slide">
        <div class="full-slide">3</div>
    </div>
    <div class="slide">
        <div class="full-slide">4</div>
    </div>
    <div class="slide">
        <div class="full-slide">
            <button>Go Back</button>
        </div>
    </div>
    <template #viewport>
        <div class="flicking-pagination"></div>
    </template>
</Flicking>
</template>

<script>
import Flicking from "@egjs/vue3-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";

export default {
  components: {
    Flicking
  },
  data() {
    return {
      plugins: [new Pagination({ type: 'bullet' })]
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap');
@import "@egjs/flicking/dist/flicking.css";

div{
    border-radius: 8px;
}

img{
    height: 150px;
    border-radius: 8px;
}

.slide{
    height: calc( 100vh - 30px );
    width: calc( 100vw - 30px );
    border-radius: 8px;
    margin: 15px;
}

.full-slide{
    height: calc( 100% - 10px);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    margin:5px;
}

.sub-slide{
    height: calc( 50% - 7px);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    margin:5px;
}
</style>