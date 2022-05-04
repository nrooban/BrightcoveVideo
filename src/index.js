"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true,
});
exports.default = void 0;
const Plugin = videojs.getPlugin("plugin");

class ExamplePlugin extends Plugin {
    constructor(player, options) {
        super(player, options);
        alert(1);
        console.log("rooban sdfs");
    }
}

var _default = ExamplePlugin;
exports.default = _default;

// const Plugin = videojs.getPlugin("plugin");

// class ExamplePlugin extends Plugin {
//     constructor(player, options) {
//         super(player, options);

//         alert(1);
//         console.log("rooban sdfs");
//     }
// }

// export default ExamplePlugin;

// import videojs from "video.js";
// import { PACKAGE } from "../package.json";
// const Component = videojs.getComponent("Component");
// const Plugin = videojs.getPlugin("plugin");

// // sdfsd
// class StuffNebulaControlsComponent extends Component {
//     constructor(player, options) {
//         super(player, options);
//         this.player = player;

//         this.initComponents();
//     }

//     initComponents() {
//         this.middleOverlayControls();
//         this.createControlBarSpacer();
//         this.createCastButton();
//         this.triggerTogglePlay();
//     }

//     triggerTogglePlay() {
//         this.player.on("pause", () => {
//             this.playButton.querySelector("span").classList.remove("icon-Video-Pause-Circle");
//             this.playButton.querySelector("span").classList.add("icon-Video-Circle");
//         });

//         this.player.on("play", () => {
//             this.player.playsinline(true);
//             this.playButton.querySelector("span").classList.remove("icon-Video-Circle");
//             this.playButton.querySelector("span").classList.add("icon-Video-Pause-Circle");
//         });
//     }

//     middleOverlayControls() {
//         const middleControlContainer = document.createElement("div");
//         middleControlContainer.className = "vjs-middle-control-container";

//         this.rewindButton = this.createButton("Rewind", "vjs-rewind-btn", "icon-Rewind");
//         this.playButton = this.createButton("Play", "vjs-play-btn", "icon-Video-Circle");
//         this.forwardButton = this.createButton("Foward", "vjs-forward-btn", "icon-Fast-Forward");

//         this.rewindButton.onclick = () => {
//             this.player.currentTime(this.player.currentTime() - 10);
//         };

//         this.playButton.onclick = () => {
//             if (this.player.el().classList.contains("vjs-paused")) {
//                 this.player.play();
//             } else {
//                 this.player.pause();
//             }
//         };

//         this.forwardButton.onclick = () => {
//             this.player.currentTime(this.player.currentTime() + 10);
//         };

//         middleControlContainer.append(this.rewindButton, this.playButton, this.forwardButton);

//         this.player.el().appendChild(middleControlContainer);
//     }

//     createControlBarSpacer() {
//         const spacerDiv = document.createElement("div");
//         spacerDiv.classList.add("vjs-controlbar-spacer");
//         const controlBar = this.player.el().querySelector(".vjs-control-bar");
//         const pipBtn = controlBar.querySelector(".vjs-picture-in-picture-control");
//         controlBar.insertBefore(spacerDiv, pipBtn);
//     }

//     createCastButton() {
//         const button = getComponent("Button");
//         const castButton = videojs.extend(button, {
//             constructor: function () {
//                 button.apply(this, arguments);
//                 this.controlText("Cast Video");
//                 this.addClass("vjs-cast-control");
//             },
//             handleClick: function () {
//                 alert("Cast to be implemented");
//             },
//         });
//         videojs.registerComponent("castButton", castButton);
//         this.player.getChild("controlBar").addChild("castButton", {});
//     }

//     createButton(label, css, icon) {
//         const button = document.createElement("button");
//         button.classList.add(css);

//         if (icon) {
//             const span = document.createElement("span");
//             span.classList.add(icon);
//             button.appendChild(span);
//         } else {
//             button.innerHTML = label;
//         }

//         return button;
//     }
// }

// videojs.registerComponent("StuffNebulaControlsComponent", StuffNebulaControlsComponent);
// // sdfsdfsdf

// // Default options for the plugin.
// const defaults = {};

// /**
//  * An advanced Video.js plugin. For more information on the API
//  *
//  * See: https://blog.videojs.com/feature-spotlight-advanced-plugins/
//  */
// class StuffNebulaControls extends Plugin {
//     /**
//      * Create a StuffNebulaControls plugin instance.
//      *
//      * @param  {Player} player
//      *         A Video.js Player instance.
//      *
//      * @param  {Object} [options]
//      *         An optional options object.
//      *
//      *         While not a core part of the Video.js plugin architecture, a
//      *         second argument of options is a convenient way to accept inputs
//      *         from your plugin's caller.
//      */

//     constructor(player, options) {
//         // the parent class will add player under this.player
//         super(player);

//         this.options = videojs.mergeOptions(defaults, options);

//         this.player.ready(() => {
//             this.player.addClass("vjs-stuff-nebula-controls");
//             this.player.StuffNebulaControls = this.player.addChild("StuffNebulaControlsComponent", options);
//         });
//     }

//     stopAndSwithPlayerToPlay() {
//         const collection = document.getElementsByClassName("example color");
//         console.log(collection);
//     }
// }

// // Define default values for the plugin's `state` object here.
// StuffNebulaControls.defaultState = {};

// // Include the version number.
// // StuffNebulaControls.VERSION = PACKAGE.VERSION;

// // Register the plugin with video.js.
// videojs.registerPlugin("stuffNebulaControls", StuffNebulaControls);

// // export default StuffNebulaControls;
