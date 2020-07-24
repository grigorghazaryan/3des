<template>
    <header class="bg-light">
        <div class="container">
        
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="flex-1"></div>
                
                <a class="navbar-brand" href="/">
                    <img src="~/assets/images/logo.png" alt="Logo">
                </a>

                <div class="flex-1">
                    <div class="header-right-section">
                        <div class="sign-in">
                            Sign in
                            <span class="dot" style="background-color: rgb(54, 167, 170)"></span>
                        </div>
                        <div class="languages">
                            <div>FR</div>
                            <div class="line">|</div>
                            <div class="active">ENG</div>
                        </div>
                        <div class="card-parent">
                            <div class="card-counter">01</div>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21.71 21.176"><defs><style>.a{fill:#f16649;}</style></defs><g transform="translate(638.806 974.9)"><g transform="translate(-638.806 -974.9)"><path class="a" d="M26.286,17.5c0,4.616-1.822,8.174-4.246,8.174s-4.255-3.583-4.255-8.2a.961.961,0,0,1-.421-.748.891.891,0,0,1,.9-.882h.842a.876.876,0,0,1,.474,1.63c0,4.115,1.458,6.436,2.455,6.436s2.473-2.559,2.46-6.466a.923.923,0,0,1-.381-.718.891.891,0,0,1,.9-.882h.842a.891.891,0,0,1,.9.882.919.919,0,0,1-.483.774Zm6.577,13.625L29.632,11.839a.894.894,0,0,0-.891-.739h-13.4a.9.9,0,0,0-.891.739L11.2,31.247a.89.89,0,0,0,.891,1.024H32A.88.88,0,0,0,32.863,31.126Z" transform="translate(-11.194 -11.1)"/></g></g></svg>
                        </div>
                    </div>
                </div>

                <div class="card-parent mobile-v">
                    <div class="card-counter">01</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 21.71 21.176"><defs><style>.a{fill:#f16649;}</style></defs><g transform="translate(638.806 974.9)"><g transform="translate(-638.806 -974.9)"><path class="a" d="M26.286,17.5c0,4.616-1.822,8.174-4.246,8.174s-4.255-3.583-4.255-8.2a.961.961,0,0,1-.421-.748.891.891,0,0,1,.9-.882h.842a.876.876,0,0,1,.474,1.63c0,4.115,1.458,6.436,2.455,6.436s2.473-2.559,2.46-6.466a.923.923,0,0,1-.381-.718.891.891,0,0,1,.9-.882h.842a.891.891,0,0,1,.9.882.919.919,0,0,1-.483.774Zm6.577,13.625L29.632,11.839a.894.894,0,0,0-.891-.739h-13.4a.9.9,0,0,0-.891.739L11.2,31.247a.89.89,0,0,0,.891,1.024H32A.88.88,0,0,0,32.863,31.126Z" transform="translate(-11.194 -11.1)"/></g></g></svg>
                </div>

            </nav>

        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    created () {
       
        if (process.client) {
            window.onscroll = function () {
                if (pageYOffset >= 400) {
                    document.getElementById('fixedNavbar').classList.add("fixed-navbar")
                } else {
                    document.getElementById('fixedNavbar').classList.remove("fixed-navbar")
                }

            };
        }
    }
}
</script>
