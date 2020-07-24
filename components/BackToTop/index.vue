<template>
    <a href="#" id="scrollTop" class="back-to-top">
        <i class="fas fa-arrow-up"></i>
    </a>
</template>

<script>
export default {
    name: 'BackToTop',
    mounted () {
        if(process.client) {
            //window.onscroll = function () {
               // if (pageYOffset >= 400) {
               //     document.getElementById('scrollTop').style.visibility = "visible";
              //  } else {
               //     document.getElementById('scrollTop').style.visibility = "hidden";
               // }
            //};
        }
    }

}
</script>