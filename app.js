!function e(t,a,r){function i(n,s){if(!a[n]){if(!t[n]){var c="function"==typeof require&&require;if(!s&&c)return c(n,!0);if(o)return o(n,!0);var m=new Error("Cannot find module '"+n+"'");throw m.code="MODULE_NOT_FOUND",m}var l=a[n]={exports:{}};t[n][0].call(l.exports,function(e){var a=t[n][1][e];return i(a?a:e)},l,l.exports,e,t,a,r)}return a[n].exports}for(var o="function"==typeof require&&require,n=0;n<r.length;n++)i(r[n]);return i}({1:[function(e,t,a){t.exports=[{id:"github.com/kasbah/push-on-hold-off",summary:"Simple power switch using a push button. Push to turn on, hold to turn off."},{id:"git.defproc.co.uk/DefProc/piezo-sensor",summary:"A conditioning circuit for using a piezo as an impact sensor for foam darts"},{id:"github.com/kimitobo/Neocococat",summary:"Board modification of 8Bitmixtape NEO synthesizer"},{id:"github.com/8BitMixtape/8BitmixtapeNEO_ShenzhenReady",summary:"The key feature of the new 8Bit Mixtape is the easiness of uploading new codes using an audio communication protocol, means just playing a .wav sound file from your computer/smart phone (or walkman). A specific bootloader (TinyAudioBoot) has to be installed on the chip to be able to do so."},{id:"github.com/8BitMixtape/8BitmixtapeNEO_BerlinerSchule_SZ-RDY",summary:"The key feature of the new 8Bit Mixtape is the easiness of uploading new codes using an audio communication protocol, means just playing a .wav sound file from your computer/smart phone (or walkman). A specific bootloader (TinyAudioBoot) has to be installed on the chip to be able to do so."},{id:"github.com/kitspace-forks/BQ25570_Harvester",summary:"TI BQ25570 step-up DC-DC energy harvester and battery charger"},{id:"github.com/descampsa/DynamixelShield",summary:"Arduino shield to connect Dynamixel servomotors"},{id:"github.com/8BitMixtape/NextLevelEdition",summary:"8-BitMixtape NextLevelEdition"},{id:"github.com/borgel/sympetrum-v2",summary:"A communicative electronic conference badge in the shape of a dragonfly"},{id:"github.com/kitspace-forks/FM_Transmitter",summary:"Simple low powered FM radio transmitter based on a MAX2606"},{id:"github.com/GaudiLabs/ChaosLooper",summary:"ChaosLooper Synthesizer"},{id:"github.com/dusjagr/PN001_Pop-Neuron_ShenzhenReady",summary:""},{id:"github.com/dvdfreitag/Signal-Detector",summary:"A low-cost RF power detector based on the AD8319"},{id:"github.com/emard/ulx3s",summary:"PCB for ULX3S FPGA R&D board"},{id:"github.com/kitspace-forks/neo",summary:"comma neo research platform"},{id:"github.com/intajay/uduino",summary:"Arduino compatible AVR Development Board"},{id:"github.com/GenericLab/Gar-Lampli",summary:"Gär Lämpli"},{id:"github.com/GenericLab/Unagi_Gar-Lampli",summary:"based on this new attiny bootloader and a minimal board to check / follow a fermentation curve time/temp profile and show by different colors."},{id:"github.com/im-tomu/tomu-hardware",summary:"A tiny ARM microprocessor which fits in your USB port."},{id:"github.com/InaneCoding/KOS01_IdealDiode20A",summary:"20A 5V-60V Ideal Diode using the LTC4359 controller"},{id:"github.com/monostable/jelly",summary:"A jellyfish shaped light-following bristle bot"},{id:"github.com/kanflo/aaduino",summary:"An AA sized ISM radio Arduino clone"},{id:"github.com/JarrettR/USBvil",summary:"USBvil is a low-cost PIC dev board that fits into a common flashdrive case."},{id:"github.com/julbouln/ifusb",summary:"multi protocol interface tool"},{id:"github.com/julbouln/ice40_eink_controller",summary:"ice40 FPGA eink controller"},{id:"github.com/jasiek/antenna-analyser",summary:"0-40MHz amateur radio antenna analyser. Uses AD9850, Arduino Pro Mini and a 2.2 inch TFT display."},{id:"github.com/jpralves/cseduino",summary:"CSEduino, a very low cost DIY Arduino like board"},{id:"github.com/pcbsz/SimpleAmp",summary:"Simple LM3886TF amplifier."},{id:"github.com/kitspace-forks/Bus_Pirate",summary:"The Bus Pirate is an open source hacker multi-tool that talks to electronic stuff."},{id:"github.com/kitspace-forks/arduino-uno",summary:"The Arduino Uno is a microcontroller board based on the ATmega328."},{id:"github.com/kasbah/nomech",summary:"A 4x4 capacitive touch button grid"},{id:"github.com/kasbah/maulwurf",summary:"A simple oscillator in the shape of a mole"},{id:"github.com/python-ugame/ugame-10-hardware",summary:"The design files for the µGame 10 handheld console."},{id:"github.com/mattvenn/esp8266-breakout",summary:"ESP8266-12 breakout board"},{id:"github.com/less-smog/hardware",summary:"Open Hardware, Wi-Fi Air Pollution Sensor"},{id:"github.com/kitspace-forks/HACK",summary:"HackAday Cortex Kit"},{id:"github.com/robotsrulz/SP_Adapter",summary:"Logitech G25/G27 shifter/pedals adapter to use as standalone device"},{id:"github.com/pcbsz/LM386",summary:"Simple LM386 amplifier"},{id:"github.com/pcbsz/AtariSynth",summary:"Simple Atari punk synth."},{id:"github.com/monostable/ruler",summary:"The Kitspace PCB ruler"},{id:"github.com/prometheus-science/Flypi",summary:"3D-printable microscope for diagnostics and scientific experiments"},{id:"github.com/RoboticsBrno/RB3200-ESP32universal",summary:"The ESP32 board you have always dreamed about!"},{id:"github.com/sgmk/microNoise_SZ-Ready",summary:""},{id:"github.com/sgmk/solarbird_shenzen_rdy",summary:"Solar power circuit making sound"},{id:"github.com/squaresolid/fish-caller",summary:"Circuit for FISHING!"},{id:"github.com/squaresolid/tiger_biosynth",summary:"A simple circuit based on CD4093 that sensitive to MOISTURE and organic matter through resistivity of the object."},{id:"github.com/UDXS/Arduitsy",summary:"A tiny Arduino dev board that can fit anywhere!"}]},{}],2:[function(e,t,a){"use strict";var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i=e("react"),o=i.createClass({displayName:"FadeImage",propTypes:{style:i.PropTypes.any,speed:i.PropTypes.any,src:i.PropTypes.string.isRequired},getInitialState:function(){return{opacity:0}},fadeIn:function(){this.setState({opacity:1})},render:function(){var e=this.props.style||{};return e.transition="opacity "+(this.props.speed||1)+"s",e.opacity=this.state.opacity,i.createElement("img",r({},this.props,{style:e,src:this.props.src,onLoad:this.fadeIn}))}});t.exports=o},{react:"react"}],3:[function(e,t,a){"use strict";function r(e,t,a){var r=e;return a&&(r=i(r)),r.length>t&&(r=r.substr(0,t)+"..."),a&&(r=i(r)),r}function i(e){return e.split("").reverse().join("")}var o=e("react"),n=e("react-responsive"),s=e("../lazy_load"),c=e("../fade_image"),m=e("../media_queries"),l=o.createClass({displayName:"BoardCard",propTypes:{lazyLoad:o.PropTypes.bool,data:o.PropTypes.object},render:function(){var e=this,t=void 0;return t=this.props.lazyLoad?o.createElement(s,{once:!0,component:o.createElement("div",{className:"img"}),distance:300},o.createElement(n,{query:m.mobile},function(t){return t?o.createElement(c,{src:"boards/"+e.props.data.id+"/images/top-large.png",className:"img"}):o.createElement(c,{src:"boards/"+e.props.data.id+"/images/top.png",className:"img"})})):o.createElement("img",{src:"boards/"+this.props.data.id+"/images/top.svg",className:"img"}),o.createElement("div",{className:"boardCard"},o.createElement("a",{href:"/boards/"+this.props.data.id},o.createElement("div",{className:"imgContainer"},t),o.createElement("div",{className:"title"},this.props.data.id.split("/").slice(2).join(" / ")),o.createElement("div",{className:"url"},this.props.data.id.split("/").slice(0,2).join(" / ")),o.createElement("div",{className:"summary"},r(this.props.data.summary,85))))}});t.exports=l},{"../fade_image":2,"../lazy_load":10,"../media_queries":11,react:"react","react-responsive":"react-responsive"}],4:[function(e,t,a){"use strict";var r=e("react"),i=e("./board_card"),o=e("./intro"),n=r.createClass({displayName:"BoardList",propTypes:{data:r.PropTypes.array,searching:r.PropTypes.bool},render:function(){var e=this.props.searching?null:r.createElement(o,null);if(0===this.props.data.length)return r.createElement("div",null,r.createElement("div",{style:{height:"40vh"}}),r.createElement("div",{style:{width:"100%",textAlign:"center"}},"Sorry, no results."));var t=this.props.data.map(function(e,t){return r.createElement(i,{data:e,key:e.id+t,lazyLoad:!0})});return r.createElement("div",null,e,r.createElement("div",{className:"boardList"},t))}});t.exports=n},{"./board_card":3,"./intro":6,react:"react"}],5:[function(e,t,a){"use strict";var r=e("react"),i=e("react-search-input"),o=e("../title_bar"),n=e("./board_list"),s=e("../boards.json"),c=i["default"],m=r.createClass({displayName:"Main",getInitialState:function(){return{result:s,searching:!1}},render:function(){return r.createElement("div",null,r.createElement(o,{submissionButton:!0},r.createElement("div",{className:"searchContainer"},r.createElement("div",{className:"searchBackground"},r.createElement("div",{className:"searchInputIcon"},r.createElement("span",{className:"icon-search searchIcon"})),r.createElement(c,{className:"searchInput",onChange:this.searchUpdated})))),r.createElement(n,{data:this.state.result,searching:this.state.searching}))},handleKeydown:function(e){return 13==e.which&&document.getElementsByClassName("searchInput")[0].firstElementChild.blur(),!1},componentDidMount:function(){document.getElementsByClassName("searchInput")[0].firstElementChild.addEventListener("keydown",this.handleKeydown)},searchUpdated:function(e){var t=["id","summary"],a=s.filter(i.createFilter(e,t));"undefined"!=typeof _paq&&e.length>2&&_paq.push(["trackSiteSearch",e,"Boards",a.length]),this.setState({result:a,searching:e.length>0})}});t.exports=m},{"../boards.json":1,"../title_bar":12,"./board_list":4,react:"react","react-search-input":"react-search-input"}],6:[function(e,t,a){"use strict";function r(e){return i.createElement("center",null,i.createElement("div",{style:n.introContainer},i.createElement("div",{className:"introText",style:n.intro},i.createElement("p",null,'Kit Space (formerly called Kitnic) is a registry of open hardware electronics projects that are ready for you to order and build. It could be described as a "Thingiverse for electronics". Click on any project to get further info, download the Gerbers and see the bill of materials.'),i.createElement("p",null,"To quickly purchase the parts from various retailers you should"," ",i.createElement("a",{className:"clickableLink",onClick:o},"install")," ","the 1-click BOM extension. It's pretty useful on its own too and can be used on other sites. Read more about it"," ",i.createElement("a",{className:"clickableLink",href:"http://1clickBOM.com"},"here"),"."),i.createElement("p",null,"Help make an open hardware repository of useful electronics projects! ",i.createElement("a",{href:"/submit"},"Submit")," your own project to have it listed here. Follow Kit Space on"," ",i.createElement("a",{href:"https://twitter.com/kitspaceorg"},"Twitter"),","," ",i.createElement("a",{href:"https://www.facebook.com/kitspaceorg"},"Facebook"),","," ",i.createElement("a",{href:"https://reddit.com/r/kitspace"},"Reddit"),","," ",i.createElement("a",{href:"https://hackaday.io/project/11871-kitspace"},"Hackaday.io")," ","or ",i.createElement("a",{href:"https://github.com/monostable/kitspace"},"GitHub")," to get updates as we progress and add content."))))}var i=e("react"),o=e("../install_extension"),n={introContainer:{marginLeft:"10%",marginRight:"10%",marginTop:32,marginBottom:32},intro:{backgroundColor:"#FAFAFA",padding:20,borderRadius:5,textAlign:"left",maxWidth:700}};t.exports=r},{"../install_extension":8,react:"react"}],7:[function(e,t,a){"use strict";var r=e("react"),i=e("react-dom"),o=e("./index");i.render(r.createElement(o,null),document.getElementById("content"))},{"./index":5,react:"react","react-dom":"react-dom"}],8:[function(e,t,a){"use strict";function r(){var e=i(),t=void 0;return t=/Chrome/.test(e)?function(){chrome.webstore.install(void 0,void 0,function(e){return console.log(e)})}:/Firefox/.test(e)?function(){window.open("https://addons.mozilla.org/en-US/firefox/addon/1clickbom")}:function(){window.open("//1clickBOM.com","_self")}}var i=e("browser-version");t.exports=r()},{"browser-version":"browser-version"}],9:[function(e,t,a){"use strict";t.exports=function(e,t){"number"!=typeof t&&(t=0);var a=e.getBoundingClientRect(),r={top:a.top+t,left:a.left+t,right:a.right-t,bottom:a.bottom-t},i=window.innerHeight||document.documentElement.clientHeight,o=window.innerWidth||document.documentElement.clientWidth,n=r.top>=0&&r.left>=0,s=r.bottom<=i&&r.right<=o;return n&&s}},{}],10:[function(e,t,a){"use strict";var r=e("react"),i=e("react-dom"),o=e("./is_visible"),n=r.createClass({displayName:"LazyLoad",propTypes:{distance:r.PropTypes.number,component:r.PropTypes.node.isRequired,children:r.PropTypes.node.isRequired,once:r.PropTypes.bool},getDefaultProps:function(){return{distance:100,component:r.createElement("div",null),once:!1}},getInitialState:function(){return{visible:!1}},componentDidMount:function(){this._checkViewport(),this._timer=setInterval(this._checkViewport,1e3)},componentWillUnmount:function(){clearInterval(this._timer)},_checkViewport:function(){if(!this.props.once||!this.state.visible){var e=i.findDOMNode(this);this.setState({visible:o(e,this.props.distance)})}},render:function(){return this.state.visible?this.props.children:this.props.component}});t.exports=n},{"./is_visible":9,react:"react","react-dom":"react-dom"}],11:[function(e,t,a){"use strict";var r="(max-width: 768px)",i="(max-width: 1199px)",o="(max-width: 499px)",n="\n  (orientation: portrait) and (max-device-width: 480px)\n  , (orientation: landscape) and (max-device-width: 660px)\n";t.exports={mobile:n,mobile_m:o,semantic_container:i,small_width:r}},{}],12:[function(e,t,a){"use strict";var r=e("react"),i=e("semantic-ui-react"),o=i.Button,n=r.createClass({displayName:"TitleBar",propTypes:{children:r.PropTypes.any,submissionButton:r.PropTypes.bool},render:function(){var e=void 0;return e=this.props.submissionButton?r.createElement(o,{color:"green",onClick:function(){return location.href="/submit"}},"Submit a project"):null,r.createElement("div",{className:"titleBar"},r.createElement("div",{className:"logoContainer"},r.createElement("a",{href:"/"},r.createElement("img",{className:"logoImg",src:"/images/logo.svg"}))),r.createElement("div",{className:"middleContainer"},this.props.children),r.createElement("div",{className:"submitContainer"},e,r.createElement("a",{className:"contributeContainer",title:"Star Kitspace on GitHub",href:"https://github.com/monostable/kitspace/"},r.createElement("div",{className:"contributeButton"},r.createElement("span",{className:"octicon octicon-mark-github githubIcon"})))))}});t.exports=n},{react:"react","semantic-ui-react":"semantic-ui-react"}]},{},[7]);