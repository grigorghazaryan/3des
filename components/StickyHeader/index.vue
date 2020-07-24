<template>
    <nav id="fixedNavbar" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <a class="nav-link" href="/#">Home</a>
                <span class="nav-dot" style="background-color: #BDB130;"></span>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#about">About us</a>
                <span class="nav-dot" style="background-color: #F16649;"></span>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Shop</a>
                <span class="nav-dot" style="background-color: #36A7AA;"></span>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#service">Services</a>
                <span class="nav-dot" style="background-color: #BDB130;"></span>
                </li> 
                <li class="nav-item">
                <a class="nav-link" href="#contact">Contact us</a>
                <span class="nav-dot" style="background-color: #F16649;"></span>
                </li>
            </ul>
        </div>
      </nav>
</template>

<style scoped>
    .shadow {
        position: sticky;
        top: 0;
        z-index: 8;
        background-color: #fff !important;
        box-shadow: 0px 4px 8px rgba(0,0,0,0.16078);
    }
</style>

<script>
export default {
    name: 'StickyHeader',
    mounted () {
        if (process.client) {
            window.onscroll = function () {
                if (pageYOffset == 0) {
                    document.getElementById('fixedNavbar').classList.remove('shadow')
                } else {
                     document.getElementById('fixedNavbar').classList.add('shadow')
                }

            };
        }
    }
}
</script>