<template>
    <div v-show="elementVisible">
        <img src="../assets/wdb.jpg" alt="">
        <code>
            <div>
                <p class="typingEffect">
                    Load... wait for it... ing
                </p>
            </div>
        </code>
    </div>
</template>

<script>
export default {
    data() {
        return {
            elementVisible: true
        }
    },

    created() {
        setTimeout(() => this.elementVisible = false, 5000)
    }
}

</script>


<style scoped>
img{
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    opacity: 0.5;
}

code {
    background-color: #202129;
    border-radius: 4px;
    padding: 20px;
    height: 70px;
    color: white;
    display: flex;
    margin: 0 auto;
    align-items: center;
    width: 350px;
}

.typingEffect {
    width: 0;
    overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
    border-right: 2px solid white; /* The cursor*/
    font-size: 16px;
    white-space: nowrap; /* Keeps the text on a single line */
    animation: typing 2s forwards;
  }

/* The typing animation */
@keyframes typing {
    from { width: 0 }
    to { width: 100% }
}
</style>