Element.prototype.isNodeList=function(){return!1};NodeList.prototype.isNodeList=HTMLCollection.prototype.isNodeList=function(){return!0};
if(void 0===Trustindex)var Trustindex=function(){return{loaded_css:[],loaded_rich_snippet:!1,resizerTimeoutPointer:null,CDNUrl:"https://cdn.trustindex.io/",getDefaultAvatarUrl:function(){return Trustindex.CDNUrl+"assets/default-avatar/noprofile-01.svg"},getWidgetUrl:function(a){return"undefined"==typeof a?!1:Trustindex.CDNUrl+"widgets/"+a.substring(0,2)+"/"+a+"/"},init:function(){let a=document.querySelectorAll("div[src*='.trustindex.io'],script[src*='.trustindex.io']");for(let b=0;b<a.length;b++){if(-1==
a[b].getAttribute("src").search("loader"))continue;let c=a[b],d=a[b].getAttribute("src").split("?");if(2>d.length)continue;d=d[d.length-1];d=d.split("&")[0];if(!d||-1!=d.search("="))continue;if(c.getAttribute("data-ti-loaded"))continue;let e=document.createElement("div");e.innerHTML="loading...";c.after(e);c.setAttribute("data-ti-loaded",!0);let f=new XMLHttpRequest;f.open("GET",Trustindex.getWidgetUrl(d)+"content.html");f.send();f.onload=function(){if(4==f.readyState&&200==f.status){var h=Trustindex.createElementFromHTML(f.responseText);
let g=h[0];e.replaceWith(g);for(let l=0;l<h.length;l++)g.after(h[l]);Trustindex.init_widget(g);g.getAttribute("style")&&-1!=g.getAttribute("style").indexOf("border: 4px dashed red")||(g.style.display="none",g.layout_id?g.container?(h=null,g.set_id?h=Trustindex.CDNUrl+"assets/widget-presetted-css/"+g.layout_id+"-"+g.set_id+".css":g.pid||(h=Trustindex.CDNUrl+"widget-assets/css/"+g.layout_id+"-"+(g.classList.contains("ti-dark")?"blue-dark":"blue")+".css"),h&&-1==Trustindex.loaded_css.indexOf(h)?(Trustindex.addCSS(h,
function(){g.style.display="";Trustindex.resize_widget(g);Trustindex.init_pager(g)}),Trustindex.loaded_css.push(h)):(g.style.display="",Trustindex.resize_widget(g),Trustindex.init_pager(g)),Trustindex.formatReviews(),Trustindex.replaceErrorImages()):g.innerHTML="Container id not found!":g.innerHTML="Layout id not found!")}else c.nextSibling.innerHTML="Widget not found!"}}Trustindex.formatReviews();Trustindex.replaceErrorImages();Trustindex.resize_widgets();window.addEventListener("resize",function(){clearTimeout(Trustindex.resizerTimeoutPointer);
Trustindex.resizerTimeoutPointer=setTimeout(function(){Trustindex.resize_widgets()},1E3)});window.addEventListener("load",function(){Trustindex.removePopupEvents();setTimeout(function(){Trustindex.resize_widgets()},40)});window.addEventListener("scroll",Trustindex.removePopupEvents);setTimeout(Trustindex.removePopupEvents,2500)},init_widget:function(a){a.layout_id=a.getAttribute("data-layout-id");a.set_id=a.getAttribute("data-set-id");a.pid=a.getAttribute("data-pid");a.layout_id&&(a.layout_id=parseInt(a.layout_id));
a.container=a.querySelector(".ti-widget-container");a.reviews_container=a.querySelector(".ti-reviews-container");a.reviews_container_wrapper=a.querySelector(".ti-reviews-container-wrapper");a.pager_autoplay_timeout=a.getAttribute("data-pager-autoplay-timeout");a.rotate_to=a.getAttribute("data-rotate-to");a.rotate_to||(a.rotate_to="right");a.slider_loop=a.getAttribute("data-slider-loop");a.mouse_over=!1},init_dots:function(a){let b=a.querySelector(".ti-controls-dots");if(b){var c=Trustindex.getReviewNum(a);
let d=Trustindex.getVisibleReviewNum(a),e="",f=1+c-d;a.slider_loop&&c!=d&&(f=Trustindex.getReviewNum(a));for(c=0;c<f;c++)e+='<div class="dot" data-pager-state="'+c+'"></div> ';b.innerHTML=e;(a=b.querySelector('.dot[data-pager-state="'+(a.pager_state||0)+'"]'))&&a.classList.add("active")}},init_pager:function(a){if(window.jQuery&&a instanceof jQuery)a.each(function(){Trustindex.init_pager(this)});else if(void 0!==a.isNodeList&&a.isNodeList())a.forEach(function(b){Trustindex.init_pager(b)});else{void 0===
a.layout_id&&Trustindex.init_widget(a);"ti-widget"!=a.getAttribute("class")&&Trustindex.resize_widget(a);a.pager_inited=!0;Trustindex.init_dots(a);Trustindex.setClickableParts(a);Trustindex.setReadMore(a);Trustindex.handleSubContents(a);if(null!==a.pager_autoplay_timeout){a.pager_state=0;a.pager_state_dots=0;a.pager_moving=!1;a.pager_autoplay_direction="next";a.pager_position="0px";a.pager_autoplay_timeout=parseInt(a.pager_autoplay_timeout);"left"==a.rotate_to&&(a.pager_state=Trustindex.getMaximumPagerState(a)-
1,a.slider_loop&&"none"!=window.getComputedStyle(a.querySelector(".ti-controls-dots")).display&&(a.pager_state=Trustindex.getReviewNum(a)-2),a.pager_state_dots=a.pager_state,Trustindex.moverBtnClicked(a,"next"==a.pager_autoplay_direction,"auto",1),a.slider_loop&&(a.pager_autoplay_direction="prev"));Trustindex.controlsShowHide(a);a.querySelectorAll(".ti-review-item").forEach(function(d){d.style.position="relative"});a.querySelector(".ti-widget-container").addEventListener("mouseenter",function(d){a.mouse_over=
!0});a.querySelector(".ti-widget-container").addEventListener("mouseleave",function(d){a.mouse_over=!1});a.addEventListener("click",function(d){if(d.target.matches(".ti-controls .ti-next")||d.target.matches(".ti-controls .ti-prev"))d.preventDefault(),Trustindex.moverBtnClicked(a,d.target.classList.contains("ti-next"),"manual",500)},!1);Trustindex.setAutoplay(a);let b,c;a.querySelector(".ti-reviews-container").addEventListener("touchstart",function(d){b=d.touches[0].pageX;c=null;a.mouse_over=!0},{passive:!0});
a.querySelector(".ti-reviews-container").addEventListener("touchmove",function(d){c=d.touches[0].pageX},{passive:!0});a.querySelector(".ti-reviews-container").addEventListener("touchend",function(d){b&&c&&60<Math.abs(b-c)&&(d=b>c,a.querySelectorAll(".ti-review-content").forEach(function(e){e.scrollTop=0}),Trustindex.moverBtnClicked(a,d,"manual",500));c=b=null;a.mouse_over=!1},{passive:!0})}"admin.trustindex.io"!=location.hostname&&(a.addEventListener("click",function(b){b.target.matches(".disable-widget")?
(b.preventDefault(),document.querySelectorAll(".ti-widget").forEach(function(c){c.classList.add("ti-disabled")}),Trustindex.setCookie("ti-widget-disabled",1,10,"/",location.hostname),a.querySelector(".ti-enable-widget")||a.remove()):b.target.matches(".ti-enable-widget")&&(b.preventDefault(),document.querySelectorAll(".ti-widget").forEach(function(c){c.classList.remove("ti-disabled")}),Trustindex.removeCookie("ti-widget-disabled","/",location.hostname))}),Trustindex.getCookie("ti-widget-disabled")&&
document.querySelectorAll(".ti-widget").forEach(function(b){b.classList.add("ti-disabled")}));a.removeEventListener("click",Trustindex.popupHandler);a.addEventListener("click",Trustindex.popupHandler);a.removeEventListener("click",Trustindex.popupCloseHandler);a.addEventListener("click",Trustindex.popupCloseHandler)}},removePopupEvents:function(){document.querySelectorAll('.ti-widget a[href="#popup"], .ti-widget a[href="#dropdown"]').forEach(function(a){let b=a.cloneNode(!0);a.parentNode.replaceChild(b,
a);a=b.closest(".ti-widget");Trustindex.handleSubContents(a)});window.removeEventListener("scroll",Trustindex.removePopupEvents)},setAutoplay:function(a,b){void 0!==b&&(a.pager_autoplay_timeout=b);void 0!==a.intervalPointer&&clearInterval(a.intervalPointer);0<a.pager_autoplay_timeout&&(a.intervalPointer=setInterval(function(){Trustindex.moverBtnClicked(a,"next"==a.pager_autoplay_direction,"auto",1E3)},1E3*a.pager_autoplay_timeout))},moverBtnClicked:function(a,b,c,d){if("manual"==c&&(b&&!a.isNext||
!b&&!a.isPrev))return Trustindex.noReviewsAnimation(a,b),!1;if(a.pager_moving||a.mouse_over&&"auto"==c)return!1;let e=a.querySelectorAll(".ti-review-item").length,f=Trustindex.getVisibleReviewNum(a);if(e<=f)return!1;Trustindex.moveReviews(a,a.pager_state+(b?1:-1),c,d,b)},moveReviews:function(a,b,c,d,e){if(a.slider_loop){let g=Trustindex.getMaximumPagerState(a),l=Trustindex.getReviewNum(a);if(b>g&&(a.pager_state<b||"resize"==e)){var f=a.reviews_container_wrapper.querySelectorAll(".ti-review-item.ti-cloned.ti-cloned--end").length,
h=b-g-f;f>=l&&(f-=parseInt(f/l)*l);for(let k=0;k<h;k++){let m=a.reviews_container_wrapper.querySelectorAll(".ti-review-item:not(.ti-cloned)")[f+k].cloneNode(!0);m.classList.add("ti-cloned","ti-cloned--end");a.reviews_container_wrapper.appendChild(m)}}else b<a.pager_state&&setTimeout(function(){let k=".ti-review-item.ti-cloned.ti-cloned--end";b>g&&(k+=":last-child");a.reviews_container_wrapper.querySelectorAll(k).forEach(function(m){m.remove()})},d);if(0>b&&!1===e){h=a.reviews_container_wrapper.querySelectorAll(".ti-review-item.ti-cloned.ti-cloned--start").length;
let k=a.reviews_container_wrapper.querySelector(".ti-review-item:nth-last-child("+(-1*b+h)+")").cloneNode(!0);k.classList.add("ti-cloned","ti-cloned--start");k.style.marginLeft=-1*a.reviews_container_wrapper.offsetWidth/Trustindex.getVisibleReviewNum(a)+"px";a.reviews_container_wrapper.insertBefore(k,a.reviews_container_wrapper.firstChild);setTimeout(function(){k.style.marginLeft="";Trustindex.resetPager(a)},d)}else!0===e&&setTimeout(function(){let k=a.reviews_container_wrapper.querySelector(".ti-review-item.ti-cloned.ti-cloned--start:first-child");
k&&(k.remove(),Trustindex.resetPager(a))},d);!0===e?(a.pager_state_dots++,a.pager_state_dots>l-1&&(a.pager_state_dots=0)):!1===e?(a.pager_state_dots--,0>a.pager_state_dots&&(a.pager_state_dots=l-1)):"resize"!==e&&(a.pager_state_dots=b)}else a.pager_state_dots=b;a.pager_state=b;a.pager_moving=!0;Trustindex.controlsShowHide(a);Trustindex.slideReviews(a,d);"auto"!=c&&void 0!==a.intervalPointer&&(clearInterval(a.intervalPointer),delete a.intervalPointer)},slideReviews:function(a,b){if(void 0!==a.pager_position){void 0===
b&&(b=1E3);var c=Trustindex.getVisibleReviewNum(a);c=-1*a.pager_state*a.reviews_container_wrapper.offsetWidth/c+"px";Trustindex.animateReviews(a,a.pager_position,c,b);a.pager_position=c;setTimeout(function(){a.pager_moving=!1},b)}},noReviewsAnimation:function(a,b){a.pager_moving=!0;let c=parseInt(a.pager_position),d=b?-1:1,e=function(g,l,k,m){setTimeout(function(){Trustindex.animateReviews(a,g+"px",l+"px",k)},m)},f=0,h=0;[{pos:50,speed:160},{pos:-70,speed:100},{pos:40,speed:80},{pos:-20,speed:120}].forEach(function(g,
l){0==l?f=c+g.pos*d:(c=f,f+=g.pos*d);e(c,f,g.speed,h);h+=g.speed});setTimeout(function(){a.pager_moving=!1},h)},animateReviews:function(a,b,c,d){a.querySelectorAll(".ti-review-item").forEach(function(e){e.animate({left:[b,c]},{duration:d,fill:"both",easing:"ease-in-out"})})},setClickableParts:function(a){if("undefined"==typeof a.clickable_parts_setted){a.clickable_parts_setted=!0;var b=a.querySelector("a[href]");b&&"#"!=b.getAttribute("href")&&(a=b.closest(".ti-header:not(a), .ti-footer:not(a)"))&&
a.querySelector(".ti-large-logo, .ti-profile-img, .ti-profile-details")&&(a.classList.add("ti-clickable-link"),a.addEventListener("click",function(c){if("A"==c.target.nodeName)return!1;Trustindex.openWindow(b.getAttribute("href"));c.preventDefault()}))}},setReadMore:function(a,b){"undefined"==typeof b&&(b=200);setTimeout(function(){let c=a.querySelectorAll(".ti-read-more");c&&c.forEach(function(d){let e=d.closest(".ti-review-content").querySelector(".ti-inner");var f=parseFloat(window.getComputedStyle(e,
null).getPropertyValue("font-size"));let h=parseInt(window.getComputedStyle(e,null).getPropertyValue("-webkit-line-clamp"));parseFloat(window.getComputedStyle(e,null).getPropertyValue("max-height"));f=parseInt(1.44*f*h);e.scrollHeight>f?(d.style.display="block",d.addEventListener("click",function(g){g.preventDefault();e.style.setProperty("-webkit-line-clamp","unset","important");e.style.setProperty("max-height","unset","important");d.style.display="none"})):d.style.display="none"})},b)},handleSubContents:function(a){a.querySelectorAll("a[data-subcontent]").forEach(function(b){let c=
b.getAttribute("data-subcontent"),d=a.querySelector(b.getAttribute("data-subcontent-target"));d&&"undefined"!=typeof a.pid&&a.pid&&(""!=d.innerHTML.trim()?b.setAttribute("data-subcontent-loaded",!0):b.addEventListener("click",function(){if(!b.getAttribute("data-subcontent-loaded")){b.classList.add("ti-loading");setTimeout(function(){b.setAttribute("data-subcontent-loaded",!0)},50);let e=new XMLHttpRequest;e.open("GET",Trustindex.getWidgetUrl(a.pid)+"_subcontent-"+c+".html");e.send();e.onload=function(){4==
e.readyState&&200==e.status&&(d.innerHTML=e.responseText,b.dispatchEvent(new Event("subcontent-loaded")),b.classList.remove("ti-loading"),Trustindex.formatReviews())}}}))})},formatReviews:function(a){(a=document.querySelectorAll(".ti-widget .ti-review-content, .ti-widget .ti-inner .ti-review-text"))&&a.length&&a.forEach(function(b){var c=b.querySelector(".ti-inner");c&&(b=c);c=b.querySelectorAll("svg");0==c.length&&(c=b.innerHTML,c=c.replace(/<img.+class="emoji" alt="\u263a" src="[^'"]+">/gm,'<svg style="display: inline-block; vertical-align: sub;fill: #0ab21b;position:relative;top:-2px" viewBox="0 0 128 128"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm0 104a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM44 64a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm48-8a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-4.8 21.6a4 4 0 0 1 .6 3.6A24.3 24.3 0 0 1 64 97c-9.7 0-15.7-4.2-19-7.8a22.7 22.7 0 0 1-4.8-8A4 4 0 0 1 44 76h40a4 4 0 0 1 3.2 1.6z"></path></svg>&nbsp;&middot;&nbsp;'),
c=c.replace(/<img.+class="emoji" alt="\u2639" src="[^'"]+">/gm,'<svg style="display: inline-block; vertical-align: sub;fill: #383838;margin-top: -1px;position:relative;top:-2px" viewBox="0 0 128 128"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm0 104a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM44 64a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm48-8a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-5.2 30.2a4 4 0 1 1-5.6 5.6c-10.5-10.4-24-10.4-34.4 0a4 4 0 0 1-5.6-5.6c13.6-13.7 32-13.7 45.6 0z"></path></svg>&nbsp;&middot;&nbsp;'),c=c.replace("\u263a",
'<svg style="display: inline-block; vertical-align: sub;fill: #0ab21b;position:relative;top:-2px" viewBox="0 0 128 128"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm0 104a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM44 64a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm48-8a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-4.8 21.6a4 4 0 0 1 .6 3.6A24.3 24.3 0 0 1 64 97c-9.7 0-15.7-4.2-19-7.8a22.7 22.7 0 0 1-4.8-8A4 4 0 0 1 44 76h40a4 4 0 0 1 3.2 1.6z"></path></svg>&nbsp;&middot;&nbsp;').replace("\u2639",'<svg style="display: inline-block; vertical-align: sub;fill: #383838;margin-top: -1px;position:relative;top:-2px" viewBox="0 0 128 128"><path d="M64 8a56 56 0 1 0 56 56A56 56 0 0 0 64 8zm0 104a48 48 0 1 1 48-48 48 48 0 0 1-48 48zM44 64a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm48-8a8 8 0 1 1-8-8 8 8 0 0 1 8 8zm-5.2 30.2a4 4 0 1 1-5.6 5.6c-10.5-10.4-24-10.4-34.4 0a4 4 0 0 1-5.6-5.6c13.6-13.7 32-13.7 45.6 0z"></path></svg>&nbsp;&middot;&nbsp;'),
c=c.replace(/\n/g,"<br />"),b.innerHTML=c,c=b.querySelectorAll("svg"));if(c.length){let f=.95*parseInt(b.style.fontSize||14);c.forEach(function(h){h.style.width=f+"px";h.style.height=f+"px"})}b.innerHTML=Trustindex.decodeHtml(b.innerHTML);var d=b.closest(".ti-review-item");if(d&&(b=d.querySelector(".ti-profile-img-sprite"))){c=d.closest(".ti-widget").getAttribute("data-pid");d=d.getAttribute("data-index")?parseInt(d.getAttribute("data-index")):[].indexOf.call(d.parentNode.children,d);var e=window.getComputedStyle(b);
e=parseInt(e.height||"0");if(!e||isNaN(e))e=40;b.style.backgroundImage='url("'+Trustindex.getWidgetUrl(c)+'sprite.jpg")';b.style.backgroundPosition="0px "+d*e*-1+"px"}});a=document.querySelectorAll(".ti-widget .ti-review-item[data-platform-page-url]");a.forEach(function(b){let c=b.querySelector(".ti-name"),d=b.getAttribute("data-platform-page-url");c.style.cursor="pointer";c.addEventListener("click",function(e){Trustindex.openWindow(d)})})},replaceErrorImages:function(){let a=document.querySelectorAll(".ti-widget .ti-review-item .ti-profile-img img");
a&&a.length&&a.forEach(function(b){b.complete?void 0!==b.naturalWidth&&0!=b.naturalWidth||b.setAttribute("src",Trustindex.getDefaultAvatarUrl()):b.addEventListener("error",function(){this.setAttribute("src",Trustindex.getDefaultAvatarUrl())})})},controlsShowHide:function(a){let b=Trustindex.getReviewNum(a),c=Trustindex.getVisibleReviewNum(a);a.isPrev=!0;a.isNext=!0;a.slider_loop?b==c&&(Trustindex.toggleElement(a.querySelector(".ti-prev"),"hide"),Trustindex.toggleElement(a.querySelector(".ti-next"),
"hide"),a.isPrev=!1,a.isNext=!1):(0==a.pager_state?(Trustindex.toggleElement(a.querySelector(".ti-prev"),"hide"),a.pager_autoplay_direction="next",a.isPrev=!1):Trustindex.toggleElement(a.querySelector(".ti-prev")),a.pager_state>=b-c?(Trustindex.toggleElement(a.querySelector(".ti-next"),"hide"),a.pager_autoplay_direction="prev",a.isNext=!1):Trustindex.toggleElement(a.querySelector(".ti-next")));a.querySelectorAll(".dot").forEach(function(d){d.classList.remove("active")});(a=a.querySelector('.dot[data-pager-state="'+
a.pager_state_dots+'"]'))&&a.classList.add("active")},resize_widget:function(a){void 0===a.container&&Trustindex.init_widget(a);if("undefined"==typeof a.original_cols){var b=a.container.classList.toString();-1==b.indexOf("ti-col-")?a.original_cols=1:a.original_cols=parseInt(b.replace(/^.*ti-col-(\d+).*$/,"$1"))}if(1>=a.original_cols)return!1;let c=5;a.container.offsetWidth>a.reviews_container.offsetWidth?520>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-1"),c=1):750>
a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-2"),c=1):1100>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-3"),c=2):1450>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-4"),c=3):1800>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-5"),c=4):(a.container.setAttribute("class","ti-widget-container ti-col-6"),c=5):(540>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-1"),
c=1):760>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-2"),c=2):1200>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-3"),c=3):1550>a.offsetWidth?(a.container.setAttribute("class","ti-widget-container ti-col-4"),c=4):(a.container.setAttribute("class","ti-widget-container ti-col-5"),c=5),1<c&&44==a.layout_id&&(c--,a.container.setAttribute("class","ti-widget-container ti-col-"+c)));if(a.getAttribute("data-column-vertical-separate")||31==a.layout_id){let e=
a.container.querySelectorAll(".ti-review-item");a.reviews_container_wrapper.innerHTML="";b=0;for(var d=[];b<c;b++)d[b]=document.createElement("div"),d[b].setAttribute("class","ti-column"),a.reviews_container_wrapper.appendChild(d[b]);Array.from(e).sort(function(f,h){f=f.getAttribute("data-index")?parseInt(f.getAttribute("data-index")):0;h=h.getAttribute("data-index")?parseInt(h.getAttribute("data-index")):1;return f-h}).forEach(function(f,h){d[h%c].appendChild(f)})}Trustindex.init_dots(a);Trustindex.moveReviews(a,
a.pager_state,"auto",500,"resize");setTimeout(function(){"undefined"==typeof a.pager_inited&&Trustindex.init_pager(a)},2E3)},resize_widgets:function(){document.querySelectorAll(".ti-widget").forEach(function(a){Trustindex.isVisible(a)?Trustindex.resize_widget(a):a.visibleInterval=setInterval(function(){Trustindex.isVisible(a)&&(clearInterval(a.visibleInterval),Trustindex.resize_widget(a))},250)})},createElementFromHTML:function(a){let b=document.createElement("div");b.innerHTML=a.trim();return b.childNodes},
decodeHtml:function(a){var b=document.createElement("textarea");b.innerHTML=a;return b.value},toggleElement:function(a,b){void 0===b&&(b="show");a&&(a.style.display="show"==b?"block":"none")},getVisibleReviewNum:function(a){let b=parseInt(a.container.classList.toString().replace(/^.*ti-col-(\d+).*$/,"$1"));a.container.offsetWidth>a.reviews_container.offsetWidth&&--b;"46"!=a.dataset.layoutId&&"47"!=a.dataset.layoutId||--b;return Math.max(b,1)},getReviewNum:function(a){return a.querySelectorAll(".ti-review-item:not(.ti-cloned)").length},
getMaximumPagerState:function(a){let b=Trustindex.getReviewNum(a);a=Trustindex.getVisibleReviewNum(a);return b-a},resetPager:function(a){a.pager_position=0;a.pager_state=0;a.reviews_container_wrapper.querySelectorAll(".ti-review-item").forEach(function(b){b.animate({left:0},{fill:"both"})})},addCSS:function(a,b){let c=document.createElement("link");c.type="text/css";c.rel="stylesheet";c.href=a;document.head.appendChild(c);b&&c.addEventListener("load",b)},popupHandler:function(a){let b=a.target,c=
function(){b.classList.toggle("active");let d=b.closest(".ti-widget");d&&(d.querySelectorAll(".ti-dropdown-widget, .ti-popup-widget").forEach(function(e){e.classList.toggle("active")}),Trustindex.setReadMore(d,10));b.removeEventListener("subcontent-loaded",c)};if(b.matches('a[href="#dropdown"]')||b.matches('a[href="#popup"]'))b.getAttribute("data-subcontent-loaded")?c():b.addEventListener("subcontent-loaded",c),a.preventDefault()},popupCloseHandler:function(a){a.target.matches(".ti-header .ti-close-lg")&&
(a.preventDefault(),(a=a.target.closest(".ti-widget"))&&(a=a.querySelector("a.ti-header[href]"))&&a.click())},openWindow:function(a){let b=document.createElement("a");b.href=a;b.target="_blank";b.rel="noopener noreferrer nofollow";b.click()},isVisible:function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},getCookie:function(a){return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(a).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),
"$1"))||null},setCookie:function(a,b,c,d,e){let f=new Date;f.setDate(f.getDate()+c);c=null==c?"":"; expires="+f.toUTCString();document.cookie=encodeURIComponent(a)+"="+encodeURIComponent(b)+c+(e?"; domain="+e:"")+(d?"; path="+d:"");return!0},removeCookie:function(a,b,c){if(!a||null===Trustindex.getCookie(a))return!1;document.cookie=encodeURIComponent(a)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(c?"; domain="+c:"")+(b?"; path="+b:"");return!0}}}();Trustindex.init();