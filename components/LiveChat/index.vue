<template>
    <div class="support-icon-wrapper">

        <svg  @click="openChat" xmlns="http://www.w3.org/2000/svg" width="26.34" height="26.34" 
        viewBox="0 0 26.34 26.34"><defs><style>.aa{fill:#676464 !important;}</style></defs><g transform="translate(-11.804 -5.865)"><path class="aa" d="M121,114.474V117.4h13.17a13.168,13.168,0,1,0-10.358-5.035A2.91,2.91,0,0,1,121,114.474Zm17.56-11.707h2.927v2.927H138.56Zm-5.853,0h2.927v2.927h-2.927Zm-5.853,0h2.927v2.927h-2.927Z" transform="translate(-109.196 -85.195)"/></g></svg>
        
        <div class="live-chat-wrapper" v-show="showChat">
            <div class="chat-head">
                <div class="header-section">
                    <div class="chat-logo">
                        <img src="~assets/images/logo.png" alt="logo">
                    </div>
                    <div class="chat-close" @click="showChat = !showChat">&#10005;</div>
                </div>
                <div class="content-section">
                    <h3>Hi There</h3>
                    <div class="welcome-message">Welcome to our website <br> ask us anything</div>
                    <div class="chat-status">We'll reply as soon as we can</div>
                </div>
            </div>
            <div class="message-section">
                <textarea placeholder="Enter your message"></textarea>
                <div class="bottom-smile-section">
                    <div class="emoji"></div>
                    <div class="paper-clip"></div>
                </div>
            </div>
        </div>

    </div> 
</template>

<script>
export default {
    name: 'LiveChat',
    data() {
        return {
            showChat: false,
        }
    },
    methods: {
        openChat() {
            console.log(this.showChat)
            this.showChat = !this.showChat
        }
    }
}
</script>