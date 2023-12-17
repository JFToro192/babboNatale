<template>
    <div id="selectPath">
        <div v-if="isVisibleDescription" style="padding-bottom:16px; font-size:20px;">
            You may be wondering about the dolls that you found inside of the pack (at least, I hope ahah) ... Here, I'll propose a couple of alternatives. The original, and the twisted one, you'll get to know which is which after your pick 😂
        </div>
        <div class="option peaceful-option" v-if="isVisiblePeace">
            <button class="btn-peaceful-option" @click="setVisiblePeace()" v-if="isVisiblePeaceBtn">
                Peaceful way! 😴
                <img class="img-peaceful-option" src="../assets/options/donald.gif" alt="">
            </button>   
            <Flicking :options="{ circular: false, moveType: 'freeScroll', bound: true }" v-if="isVisiblePeacePath">
                <div class="slide">
                    <div class="full-slide">
                        <h3>Quita Penas  (Worry Dolls)</h3>
                        <div class="text">   
                            <div>
                                The story of the worry doll is a local Mayan legend (from Guatemala). The origin of the Muñeca quitapena refers to a Mayan princess named Ixmucane. The princess received a special gift from the sun god that allowed her to solve any problem a human could worry about.
                            </div>
                            <div>
                                The idea behind worry dolls is that if you have worries or concerns, you can share them with the dolls before going to bed. The tradition suggests placing the dolls under your pillow, and it is believed that the dolls will take away your worries while you sleep.
                            </div>                       
                        </div>

                        <img src="../assets/options/quitaPenas.jpg" alt="">
                        <div>
                            Scroll next ➡️
                        </div>
                    </div>
                </div>
                <div class="slide">
                    <div class="full-slide">
                        <h1>
                            Happy Bday! 😊
                        </h1>
                        <img src="../assets/xmastree.png" alt="">
                        <h2>Still wondering the other option? 🤔</h2>
                        <h3>Pick Another Path</h3>
                        <button @click="selectOtherPath()">
                            Go Back! 
                        </button>
                    </div>
                </div>
            </Flicking>     
        </div>
        <div class="option chaos-option" v-if="isVisibleChaos">
            <button class="btn-chaos-option" @click="setVisibleChaos" v-if="isVisibleChaosBtn">
                Peace was never an option! 🔥
                <img class="img-chaos-option" src="../assets/options/elmo.gif" alt="">
            </button>
            <Flicking :options="{ circular: false, moveType: 'freeScroll', bound: true }" v-if="isVisibleChaosPath">
                <div class="slide">
                    <div class="full-slide">
                        <h3>Año Viejo</h3>
                        <div class="text">   
                            Every December, in Colombia, Ecuador and other parts of Latin America, make an “año viejo”: a human-size doll stuffed with rags, newspaper or wood scraps and styled with old clothes that is burned on New Year's Eve to symbolically cast off the old year and bring in the new.                            
                        </div>

                        <div class="text">
                            Of course, I couldn't get a full-size doll for the gift ... But for the purpose, you can use a doll for this😊. The idea is writing on a piece of paper things that you'd like to leave behing from the past year and burning them all together. Also, you can make a list for the wished for the upcoming year too!                            
                        </div>


                        <img src="../assets/options/anoViejo.jpg" alt="">
                        <div>
                            Scroll next ➡️
                        </div>
                    </div>
                </div>
                <div class="slide">
                    <div class="full-slide">
                        <h1>
                            Happy Bday! 😊
                        </h1>
                        <img src="../assets/xmastree.png" alt="">
                        <h2>Still wondering the other option? 🤔</h2>
                        <h3>Pick Another Path</h3>
                        <button @click="selectOtherPath()">
                            Go Back! 
                        </button>
                    </div>
                </div>
            </Flicking>
        </div>
    </div>
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
      plugins: [new Pagination({ type: 'bullet' })],
        isVisiblePeace: true,
        isVisiblePeaceBtn: true,
        isVisiblePeacePath: false,
        isVisibleChaos: true,
        isVisibleChaosBtn: true,
        isVisibleChaosPath: false,
        isVisibleDescription: true
    }
  },
  methods:{
    setVisiblePeace() {
        this.isVisiblePeaceBtn = false;
        this.isVisiblePeacePath = true;
        this.isVisibleChaos = false;
        this.isVisibleDescription = false;
    },
    setVisibleChaos() {
        this.isVisibleChaosBtn = false;
        this.isVisibleChaosPath = true;
        this.isVisiblePeace = false;
        this.isVisibleDescription = false;
    },
    selectOtherPath(){
        this.isVisiblePeace= true;
        this.isVisiblePeaceBtn= true;
        this.isVisiblePeacePath= false;
        this.isVisibleChaos= true;
        this.isVisibleChaosBtn= true;
        this.isVisibleChaosPath= false;
        this.isVisibleDescription = true;
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700,800&display=swap');
@import "@egjs/flicking/dist/flicking.css";

#selectPath{
    width: 100%;
    height:100%;
}

.option{
    width: 100%;
    padding-bottom: 20px;
}

.option>button{
    width: 300px;
}

.option>button>img{
    width: 100%;
}

/* Slides */
div{
    border-radius: 8px;
}

img{
    height: 150px;
    border-radius: 8px;
}

h3{
    color: black;
}

.slide{
    height: 90vh;
    width: 100%;
    border-radius: 8px;
    /* margin: 15px; */
    padding: 5px;
}

.full-slide{
    height: calc( 100% - 10px);
    width: calc( 100% - 45px ) ;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    padding:1px;
}

.sub-slide{
    height: calc( 50% - 7px);
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 8px;
    margin:5px;
}

.text{
    width: calc( 100% - 10px);
    font-size: 16px;
    font-weight: bold;
    color: black;
}
</style>
