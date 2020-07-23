<template>
    <section class="main-video">
        <video id="video" :poster="posterImage" autoplay="true" muted>
            <source src="~/assets/video/ForBiggerFun.mp4" type="video/mp4">
              Your browser does not support the video tag.
        </video>
    </section>
</template>

<script>
export default {
    data() {
        return {
          
        }
    },
    created() {
        if (process.client) {
            let vid = document.querySelector('#video');
                vid.autoplay = true;
                vid.play()
        }
    },
    computed: {
        posterImage () {
            return require(`~/assets/images/video-poster.png`)
        }
  }
}
</script>