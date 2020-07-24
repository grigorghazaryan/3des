<template>
    <nav id="fixedNavbar" 
        class="navbar navbar-expand-lg navbar-light bg-light"
        v-if="showMenu"
    >
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
                <li class="nav-item dropdown">
                    <a class="nav-link">Shop</a>
                    <span class="nav-dot" style="background-color: #36A7AA;"></span>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="/frame">Frames</a>
                    </div>
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
    .nav-item.dropdown:hover .dropdown-menu {
        display: block;
    }
    .dropdown-menu {
        padding: 23px 0;
    }
    .dropdown-menu a {
        padding-left: 23px;
    }
    .dropdown-menu a.dropdown-item {
        padding: 5px 16px;
        text-transform: capitalize;
    }
    .dropdown-menu a.dropdown-item:active {
        background-color: initial;
    }
</style>

<script>
export default {
    name: 'StickyHeader',
    data() {
        return {
            showMenu: true,
        }
    },
    created () {
        if (process.client) {
            window.onscroll = function () {
                let fixedNavbar = document.getElementById('fixedNavbar'),
                    scrollTop = document.getElementById('scrollTop');

                if(fixedNavbar) {
                    if (pageYOffset == 0) {
                        fixedNavbar.classList.remove('shadow')
                    } else {
                        fixedNavbar.classList.add('shadow')
                    }
                }


                if(scrollTop) {
                    if (pageYOffset >= 400) {
                        scrollTop.style.visibility = "visible";
                    } else {
                        scrollTop.style.visibility = "hidden";
                    }
                }
                
            };
        }

        if(this.$route.path == '/') {
            this.showMenu = true
        }else {
            this.showMenu = false
        }
    }
}
</script>