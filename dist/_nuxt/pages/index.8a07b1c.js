(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{166:function(t,e,r){t.exports=r.p+"img/prod1.044a2da.png"},167:function(t,e,r){t.exports=r.p+"img/prod3.f5bd34e.png"},168:function(t,e,r){t.exports=r.p+"videos/ForBiggerFun.602dc66.mp4"},169:function(t,e,r){t.exports=r.p+"img/video-poster.85d8f29.png"},170:function(t,e,r){t.exports=r.p+"img/about.9881c47.png"},171:function(t,e,r){"use strict";r.r(e);var n={data:function(){return{}},created:function(){var t=document.querySelector("#video");t.autoplay=!0,t.play()},computed:{posterImage:function(){return r(169)}}},c=r(7),component=Object(c.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"main-video"},[e("video",{attrs:{id:"video",poster:this.posterImage,autoplay:"true",muted:""},domProps:{muted:!0}},[e("source",{attrs:{src:r(168),type:"video/mp4"}}),this._v("\n          Your browser does not support the video tag.\n    ")])])}),[],!1,null,null,null);e.default=component.exports},172:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"chat-logo"},[e("img",{attrs:{src:r(106),alt:"logo"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-section"},[e("h3",[this._v("Hi There")]),this._v(" "),e("div",{staticClass:"welcome-message"},[this._v("Welcome to our website "),e("br"),this._v(" ask us anything")]),this._v(" "),e("div",{staticClass:"chat-status"},[this._v("We'll reply as soon as we can")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"message-section"},[e("textarea",{attrs:{placeholder:"Enter your message"}}),this._v(" "),e("div",{staticClass:"bottom-smile-section"},[e("div",{staticClass:"emoji"}),this._v(" "),e("div",{staticClass:"paper-clip"})])])}],c={name:"LiveChat",data:function(){return{showChat:!1}},methods:{openChat:function(){console.log(this.showChat),this.showChat=!this.showChat}}},l=r(7),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"support-icon-wrapper"},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"26.34",height:"26.34",viewBox:"0 0 26.34 26.34"},on:{click:t.openChat}},[r("defs",[r("style",[t._v(".aa{fill:#676464 !important;}")])]),r("g",{attrs:{transform:"translate(-11.804 -5.865)"}},[r("path",{staticClass:"aa",attrs:{d:"M121,114.474V117.4h13.17a13.168,13.168,0,1,0-10.358-5.035A2.91,2.91,0,0,1,121,114.474Zm17.56-11.707h2.927v2.927H138.56Zm-5.853,0h2.927v2.927h-2.927Zm-5.853,0h2.927v2.927h-2.927Z",transform:"translate(-109.196 -85.195)"}})])]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.showChat,expression:"showChat"}],staticClass:"live-chat-wrapper"},[r("div",{staticClass:"chat-head"},[r("div",{staticClass:"header-section"},[t._m(0),t._v(" "),r("div",{staticClass:"chat-close",on:{click:function(e){t.showChat=!t.showChat}}},[t._v("✕")])]),t._v(" "),t._m(1)]),t._v(" "),t._m(2)])])}),n,!1,null,null,null);e.default=component.exports},173:function(t,e,r){"use strict";r.r(e);var n={name:"BackToTop",created:function(){window.onscroll=function(){pageYOffset>=400?document.getElementById("scrollTop").style.visibility="visible":document.getElementById("scrollTop").style.visibility="hidden"}}},c=r(7),component=Object(c.a)(n,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"back-to-top",attrs:{href:"#",id:"scrollTop"}},[e("i",{staticClass:"fas fa-arrow-up"})])}],!1,null,null,null);e.default=component.exports},174:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"our-products"},[n("div",{staticClass:"container"},[n("div",{staticClass:"section-header"},[t._v("\n            Our products\n            "),n("span",{staticClass:"dot",staticStyle:{"background-color":"#36A7AA"}})]),t._v(" "),n("div",{staticClass:"products-parent"},[n("div",{staticClass:"products-parent-row first"},[n("div",{staticClass:"product "},[n("img",{attrs:{src:r(166),alt:"product"}}),t._v(" "),n("div",{staticClass:"shop-button"},[t._v("Shop")])]),t._v(" "),n("div",{staticClass:"product"},[n("img",{attrs:{src:r(166),alt:"product"}}),t._v(" "),n("div",{staticClass:"shop-button"},[t._v("Shop")])]),t._v(" "),n("div",{staticClass:"product"},[n("img",{attrs:{src:r(167),alt:"product"}}),t._v(" "),n("div",{staticClass:"shop-button"},[t._v("Shop")])])]),t._v(" "),n("div",{staticClass:"products-parent-row second"},[n("div",{staticClass:"product"},[n("img",{attrs:{src:r(167),alt:"product"}}),t._v(" "),n("div",{staticClass:"shop-button"},[t._v("Shop")])]),t._v(" "),n("div",{staticClass:"product "},[n("img",{attrs:{src:r(166),alt:"product"}}),t._v(" "),n("div",{staticClass:"shop-button"},[t._v("Shop")])]),t._v(" "),n("div",{staticClass:"product"},[n("img",{attrs:{src:r(166),alt:"product"}}),t._v(" "),n("div",{staticClass:"shop-button"},[t._v("Shop")])])])]),t._v(" "),n("div",{staticClass:"more-parent"},[n("div",{staticClass:"more-button"},[t._v("\n                More\n                "),n("i",{staticClass:"fas fa-arrow-right"})])])])])}],c=r(7),component=Object(c.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),n,!1,null,null,null);e.default=component.exports},175:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about-us",attrs:{id:"about"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"section-header"},[t._v("\n            About us\n            "),n("span",{staticClass:"dot",staticStyle:{"background-color":"#F16649"}})]),t._v(" "),n("div",{staticClass:"about-us__wrapper"},[n("div",{staticClass:"about-left"},[n("div",{staticClass:"about-left__header"},[t._v("3DES")]),t._v(" "),n("p",[t._v("\n                    Is a custom design & manufacturing company Headquartered \n                    in Montreal - Quebec. Helping customers from different\n                    sectors with Consulting, design prototyping, manufacturing\n                    and import of consumer and medical products.\n                ")]),t._v(" "),n("p",[t._v("\n                    We work with local and offshore partners to get Canadian \n                    companies across the provinces and territories the best \n                    suitable solutions for their demands.\n                ")])]),t._v(" "),n("div",{staticClass:"about-right"},[n("div",{staticClass:"about-right__image-parent"},[n("img",{attrs:{src:r(170),alt:"about"}})])])])])])}],c=r(7),component=Object(c.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),n,!1,null,null,null);e.default=component.exports},176:function(t,e,r){"use strict";r.r(e);var n=r(7),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"services",attrs:{id:"service"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"section-header"},[t._v("\n            Services\n            "),r("span",{staticClass:"dot",staticStyle:{"background-color":"#BDB130"}})]),t._v(" "),r("div",{staticClass:"services__wrapper"},[r("div",{staticClass:"service"},[r("div",{staticClass:"service__header yellow"},[t._v("Custom Design")]),t._v(" "),r("ul",{staticClass:"service-item-list list-yellow"},[r("li",[t._v("Logos")]),t._v(" "),r("li",[t._v("Packaging")]),t._v(" "),r("li",[t._v("Visual Displays")]),t._v(" "),r("li",[t._v("Jewelry Design")]),t._v(" "),r("li",[t._v("Product Design & 3D Printing")]),t._v(" "),r("li",[t._v("3D Renderings")]),t._v(" "),r("li",[t._v("Autocad Drawings")]),t._v(" "),r("li",[t._v("Laser Soldering")])])]),t._v(" "),r("div",{staticClass:"service"},[r("div",{staticClass:"service__header green"},[t._v("Manufacturing")]),t._v(" "),r("ul",{staticClass:"service-item-list list-red"},[r("li",[t._v("Logos")]),t._v(" "),r("li",[t._v("Packaging")]),t._v(" "),r("li",[t._v("Visual Displays")]),t._v(" "),r("li",[t._v("Jewelry Design")]),t._v(" "),r("li",[t._v("Product Design & 3D Printing")]),t._v(" "),r("li",[t._v("3D Renderings")]),t._v(" "),r("li",[t._v("Autocad Drawings")]),t._v(" "),r("li",[t._v("Laser Soldering")])])]),t._v(" "),r("div",{staticClass:"service"},[r("div",{staticClass:"service__header blue"},[t._v("Procurement & Trade")]),t._v(" "),r("ul",{staticClass:"service-item-list list-green"},[r("li",[t._v("Consumer Goods")]),t._v(" "),r("li",[t._v("Mechanical & Electrical Equipment")]),t._v(" "),r("li",[t._v("Visual Desplay")]),t._v(" "),r("li",[t._v("Class I Medical Equipment")])])])])])])}],!1,null,null,null);e.default=component.exports},177:function(t,e,r){"use strict";r.r(e);var n=r(7),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"contact-us",attrs:{id:"contact"}},[r("div",{staticClass:"container"},[r("div",{staticClass:"section-header"},[t._v("\n            Contact us\n            "),r("span",{staticClass:"dot",staticStyle:{"background-color":"#F16649"}})]),t._v(" "),r("div",{staticClass:"contact-us__form-parent"},[r("div",{staticClass:"form"},[r("div",{staticClass:"form__row"},[r("div",{staticClass:"input-parent"},[r("input",{attrs:{type:"text",placeholder:"* First name"}})]),t._v(" "),r("div",{staticClass:"input-parent"},[r("input",{attrs:{type:"text",placeholder:"* Last name"}})])]),t._v(" "),r("div",{staticClass:"form__row"},[r("div",{staticClass:"input-parent"},[r("input",{attrs:{type:"text",placeholder:"* Phone number"}})]),t._v(" "),r("div",{staticClass:"input-parent"},[r("input",{attrs:{type:"text",placeholder:"* Email address"}})])]),t._v(" "),r("div",{staticClass:"form__row textarea-w"},[r("div",{staticClass:"textarea-parent"},[r("textarea",{attrs:{placeholder:"Message"}})])]),t._v(" "),r("div",{staticClass:"send-button-parent"},[r("button",{staticClass:"send"},[t._v("Send")])])])])])])}],!1,null,null,null);e.default=component.exports},178:function(t,e,r){"use strict";r.r(e);var n=r(7),component=Object(n.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"newsletter"},[r("div",{staticClass:"container"},[r("div",{staticClass:"newletter_header"},[t._v("SUBSCRIBE TO OUR NEWSLETTER")]),t._v(" "),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"first-name"}},[t._v("* First Name")]),t._v(" "),r("input",{attrs:{type:"text",id:"first-name",placeholder:"freebies@sales.com"}})])]),t._v(" "),r("div",{staticClass:"col-md-4"},[r("div",{staticClass:"form-group"},[r("label",{attrs:{for:"email-adress"}},[t._v("* Email Adress")]),t._v(" "),r("input",{attrs:{type:"text",id:"email-adress",placeholder:"freebies@sales.com"}})])]),t._v(" "),r("div",{staticClass:"col-md-3 subscribe-button-parent"},[r("button",{staticClass:"subscribe-button"},[t._v("Subscribe")])])])])])}],!1,null,null,null);e.default=component.exports},179:function(t,e,r){"use strict";r.r(e);var n=r(7),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("router-view"),t._v(" "),r("MainVideo"),t._v(" "),r("Products"),t._v(" "),r("AboutUs"),t._v(" "),r("Services"),t._v(" "),r("ContactUs"),t._v(" "),r("Newsletter"),t._v(" "),r("LiveChat"),t._v(" "),r("BackToTop")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MainVideo:r(171).default,Products:r(174).default,AboutUs:r(175).default,Services:r(176).default,ContactUs:r(177).default,Newsletter:r(178).default,LiveChat:r(172).default,BackToTop:r(173).default})}}]);