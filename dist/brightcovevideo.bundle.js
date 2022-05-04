/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/


function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var Plugin = videojs.getPlugin("plugin");

var ExamplePlugin = /*#__PURE__*/function (_Plugin) {
  _inherits(ExamplePlugin, _Plugin);

  var _super = _createSuper(ExamplePlugin);

  function ExamplePlugin(player, options) {
    var _this;

    _classCallCheck(this, ExamplePlugin);

    _this = _super.call(this, player, options);
    alert(1);
    console.log("rooban sdfs");
    return _this;
  }

  return _createClass(ExamplePlugin);
}(Plugin);

var _default = ExamplePlugin;
exports["default"] = _default; // const Plugin = videojs.getPlugin("plugin");
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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJpZ2h0Y292ZXZpZGVvLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWJBLDhDQUE2QztFQUN6Q0csS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FELGtCQUFBLEdBQWtCLEtBQUssQ0FBdkI7QUFDQSxJQUFNRSxNQUFNLEdBQUdDLE9BQU8sQ0FBQ0MsU0FBUixDQUFrQixRQUFsQixDQUFmOztJQUVNQzs7Ozs7RUFDRix1QkFBWUMsTUFBWixFQUFvQkMsT0FBcEIsRUFBNkI7SUFBQTs7SUFBQTs7SUFDekIsMEJBQU1ELE1BQU4sRUFBY0MsT0FBZDtJQUNBQyxLQUFLLENBQUMsQ0FBRCxDQUFMO0lBQ0FDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7SUFIeUI7RUFJNUI7OztFQUx1QlI7O0FBUTVCLElBQUlTLFFBQVEsR0FBR04sYUFBZjtBQUNBTCxrQkFBQSxHQUFrQlcsUUFBbEIsRUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUEseUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9icmlnaHRjb3ZldmlkZW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlLFxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XG5jb25zdCBQbHVnaW4gPSB2aWRlb2pzLmdldFBsdWdpbihcInBsdWdpblwiKTtcblxuY2xhc3MgRXhhbXBsZVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4gICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4gICAgICAgIGFsZXJ0KDEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcInJvb2JhbiBzZGZzXCIpO1xuICAgIH1cbn1cblxudmFyIF9kZWZhdWx0ID0gRXhhbXBsZVBsdWdpbjtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyBjb25zdCBQbHVnaW4gPSB2aWRlb2pzLmdldFBsdWdpbihcInBsdWdpblwiKTtcblxuLy8gY2xhc3MgRXhhbXBsZVBsdWdpbiBleHRlbmRzIFBsdWdpbiB7XG4vLyAgICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4vLyAgICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG5cbi8vICAgICAgICAgYWxlcnQoMSk7XG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwicm9vYmFuIHNkZnNcIik7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBleHBvcnQgZGVmYXVsdCBFeGFtcGxlUGx1Z2luO1xuXG4vLyBpbXBvcnQgdmlkZW9qcyBmcm9tIFwidmlkZW8uanNcIjtcbi8vIGltcG9ydCB7IFBBQ0tBR0UgfSBmcm9tIFwiLi4vcGFja2FnZS5qc29uXCI7XG4vLyBjb25zdCBDb21wb25lbnQgPSB2aWRlb2pzLmdldENvbXBvbmVudChcIkNvbXBvbmVudFwiKTtcbi8vIGNvbnN0IFBsdWdpbiA9IHZpZGVvanMuZ2V0UGx1Z2luKFwicGx1Z2luXCIpO1xuXG4vLyAvLyBzZGZzZFxuLy8gY2xhc3MgU3R1ZmZOZWJ1bGFDb250cm9sc0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4vLyAgICAgY29uc3RydWN0b3IocGxheWVyLCBvcHRpb25zKSB7XG4vLyAgICAgICAgIHN1cGVyKHBsYXllciwgb3B0aW9ucyk7XG4vLyAgICAgICAgIHRoaXMucGxheWVyID0gcGxheWVyO1xuXG4vLyAgICAgICAgIHRoaXMuaW5pdENvbXBvbmVudHMoKTtcbi8vICAgICB9XG5cbi8vICAgICBpbml0Q29tcG9uZW50cygpIHtcbi8vICAgICAgICAgdGhpcy5taWRkbGVPdmVybGF5Q29udHJvbHMoKTtcbi8vICAgICAgICAgdGhpcy5jcmVhdGVDb250cm9sQmFyU3BhY2VyKCk7XG4vLyAgICAgICAgIHRoaXMuY3JlYXRlQ2FzdEJ1dHRvbigpO1xuLy8gICAgICAgICB0aGlzLnRyaWdnZXJUb2dnbGVQbGF5KCk7XG4vLyAgICAgfVxuXG4vLyAgICAgdHJpZ2dlclRvZ2dsZVBsYXkoKSB7XG4vLyAgICAgICAgIHRoaXMucGxheWVyLm9uKFwicGF1c2VcIiwgKCkgPT4ge1xuLy8gICAgICAgICAgICAgdGhpcy5wbGF5QnV0dG9uLnF1ZXJ5U2VsZWN0b3IoXCJzcGFuXCIpLmNsYXNzTGlzdC5yZW1vdmUoXCJpY29uLVZpZGVvLVBhdXNlLUNpcmNsZVwiKTtcbi8vICAgICAgICAgICAgIHRoaXMucGxheUJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5jbGFzc0xpc3QuYWRkKFwiaWNvbi1WaWRlby1DaXJjbGVcIik7XG4vLyAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgIHRoaXMucGxheWVyLm9uKFwicGxheVwiLCAoKSA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5c2lubGluZSh0cnVlKTtcbi8vICAgICAgICAgICAgIHRoaXMucGxheUJ1dHRvbi5xdWVyeVNlbGVjdG9yKFwic3BhblwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaWNvbi1WaWRlby1DaXJjbGVcIik7XG4vLyAgICAgICAgICAgICB0aGlzLnBsYXlCdXR0b24ucXVlcnlTZWxlY3RvcihcInNwYW5cIikuY2xhc3NMaXN0LmFkZChcImljb24tVmlkZW8tUGF1c2UtQ2lyY2xlXCIpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG5cbi8vICAgICBtaWRkbGVPdmVybGF5Q29udHJvbHMoKSB7XG4vLyAgICAgICAgIGNvbnN0IG1pZGRsZUNvbnRyb2xDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgICAgICBtaWRkbGVDb250cm9sQ29udGFpbmVyLmNsYXNzTmFtZSA9IFwidmpzLW1pZGRsZS1jb250cm9sLWNvbnRhaW5lclwiO1xuXG4vLyAgICAgICAgIHRoaXMucmV3aW5kQnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oXCJSZXdpbmRcIiwgXCJ2anMtcmV3aW5kLWJ0blwiLCBcImljb24tUmV3aW5kXCIpO1xuLy8gICAgICAgICB0aGlzLnBsYXlCdXR0b24gPSB0aGlzLmNyZWF0ZUJ1dHRvbihcIlBsYXlcIiwgXCJ2anMtcGxheS1idG5cIiwgXCJpY29uLVZpZGVvLUNpcmNsZVwiKTtcbi8vICAgICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uID0gdGhpcy5jcmVhdGVCdXR0b24oXCJGb3dhcmRcIiwgXCJ2anMtZm9yd2FyZC1idG5cIiwgXCJpY29uLUZhc3QtRm9yd2FyZFwiKTtcblxuLy8gICAgICAgICB0aGlzLnJld2luZEJ1dHRvbi5vbmNsaWNrID0gKCkgPT4ge1xuLy8gICAgICAgICAgICAgdGhpcy5wbGF5ZXIuY3VycmVudFRpbWUodGhpcy5wbGF5ZXIuY3VycmVudFRpbWUoKSAtIDEwKTtcbi8vICAgICAgICAgfTtcblxuLy8gICAgICAgICB0aGlzLnBsYXlCdXR0b24ub25jbGljayA9ICgpID0+IHtcbi8vICAgICAgICAgICAgIGlmICh0aGlzLnBsYXllci5lbCgpLmNsYXNzTGlzdC5jb250YWlucyhcInZqcy1wYXVzZWRcIikpIHtcbi8vICAgICAgICAgICAgICAgICB0aGlzLnBsYXllci5wbGF5KCk7XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIHRoaXMucGxheWVyLnBhdXNlKCk7XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH07XG5cbi8vICAgICAgICAgdGhpcy5mb3J3YXJkQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLnBsYXllci5jdXJyZW50VGltZSh0aGlzLnBsYXllci5jdXJyZW50VGltZSgpICsgMTApO1xuLy8gICAgICAgICB9O1xuXG4vLyAgICAgICAgIG1pZGRsZUNvbnRyb2xDb250YWluZXIuYXBwZW5kKHRoaXMucmV3aW5kQnV0dG9uLCB0aGlzLnBsYXlCdXR0b24sIHRoaXMuZm9yd2FyZEJ1dHRvbik7XG5cbi8vICAgICAgICAgdGhpcy5wbGF5ZXIuZWwoKS5hcHBlbmRDaGlsZChtaWRkbGVDb250cm9sQ29udGFpbmVyKTtcbi8vICAgICB9XG5cbi8vICAgICBjcmVhdGVDb250cm9sQmFyU3BhY2VyKCkge1xuLy8gICAgICAgICBjb25zdCBzcGFjZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuLy8gICAgICAgICBzcGFjZXJEaXYuY2xhc3NMaXN0LmFkZChcInZqcy1jb250cm9sYmFyLXNwYWNlclwiKTtcbi8vICAgICAgICAgY29uc3QgY29udHJvbEJhciA9IHRoaXMucGxheWVyLmVsKCkucXVlcnlTZWxlY3RvcihcIi52anMtY29udHJvbC1iYXJcIik7XG4vLyAgICAgICAgIGNvbnN0IHBpcEJ0biA9IGNvbnRyb2xCYXIucXVlcnlTZWxlY3RvcihcIi52anMtcGljdHVyZS1pbi1waWN0dXJlLWNvbnRyb2xcIik7XG4vLyAgICAgICAgIGNvbnRyb2xCYXIuaW5zZXJ0QmVmb3JlKHNwYWNlckRpdiwgcGlwQnRuKTtcbi8vICAgICB9XG5cbi8vICAgICBjcmVhdGVDYXN0QnV0dG9uKCkge1xuLy8gICAgICAgICBjb25zdCBidXR0b24gPSBnZXRDb21wb25lbnQoXCJCdXR0b25cIik7XG4vLyAgICAgICAgIGNvbnN0IGNhc3RCdXR0b24gPSB2aWRlb2pzLmV4dGVuZChidXR0b24sIHtcbi8vICAgICAgICAgICAgIGNvbnN0cnVjdG9yOiBmdW5jdGlvbiAoKSB7XG4vLyAgICAgICAgICAgICAgICAgYnV0dG9uLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5jb250cm9sVGV4dChcIkNhc3QgVmlkZW9cIik7XG4vLyAgICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzcyhcInZqcy1jYXN0LWNvbnRyb2xcIik7XG4vLyAgICAgICAgICAgICB9LFxuLy8gICAgICAgICAgICAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgICAgICAgICBhbGVydChcIkNhc3QgdG8gYmUgaW1wbGVtZW50ZWRcIik7XG4vLyAgICAgICAgICAgICB9LFxuLy8gICAgICAgICB9KTtcbi8vICAgICAgICAgdmlkZW9qcy5yZWdpc3RlckNvbXBvbmVudChcImNhc3RCdXR0b25cIiwgY2FzdEJ1dHRvbik7XG4vLyAgICAgICAgIHRoaXMucGxheWVyLmdldENoaWxkKFwiY29udHJvbEJhclwiKS5hZGRDaGlsZChcImNhc3RCdXR0b25cIiwge30pO1xuLy8gICAgIH1cblxuLy8gICAgIGNyZWF0ZUJ1dHRvbihsYWJlbCwgY3NzLCBpY29uKSB7XG4vLyAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4vLyAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKGNzcyk7XG5cbi8vICAgICAgICAgaWYgKGljb24pIHtcbi8vICAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbi8vICAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZChpY29uKTtcbi8vICAgICAgICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKTtcbi8vICAgICAgICAgfSBlbHNlIHtcbi8vICAgICAgICAgICAgIGJ1dHRvbi5pbm5lckhUTUwgPSBsYWJlbDtcbi8vICAgICAgICAgfVxuXG4vLyAgICAgICAgIHJldHVybiBidXR0b247XG4vLyAgICAgfVxuLy8gfVxuXG4vLyB2aWRlb2pzLnJlZ2lzdGVyQ29tcG9uZW50KFwiU3R1ZmZOZWJ1bGFDb250cm9sc0NvbXBvbmVudFwiLCBTdHVmZk5lYnVsYUNvbnRyb2xzQ29tcG9uZW50KTtcbi8vIC8vIHNkZnNkZnNkZlxuXG4vLyAvLyBEZWZhdWx0IG9wdGlvbnMgZm9yIHRoZSBwbHVnaW4uXG4vLyBjb25zdCBkZWZhdWx0cyA9IHt9O1xuXG4vLyAvKipcbi8vICAqIEFuIGFkdmFuY2VkIFZpZGVvLmpzIHBsdWdpbi4gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gdGhlIEFQSVxuLy8gICpcbi8vICAqIFNlZTogaHR0cHM6Ly9ibG9nLnZpZGVvanMuY29tL2ZlYXR1cmUtc3BvdGxpZ2h0LWFkdmFuY2VkLXBsdWdpbnMvXG4vLyAgKi9cbi8vIGNsYXNzIFN0dWZmTmVidWxhQ29udHJvbHMgZXh0ZW5kcyBQbHVnaW4ge1xuLy8gICAgIC8qKlxuLy8gICAgICAqIENyZWF0ZSBhIFN0dWZmTmVidWxhQ29udHJvbHMgcGx1Z2luIGluc3RhbmNlLlxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtICB7UGxheWVyfSBwbGF5ZXJcbi8vICAgICAgKiAgICAgICAgIEEgVmlkZW8uanMgUGxheWVyIGluc3RhbmNlLlxuLy8gICAgICAqXG4vLyAgICAgICogQHBhcmFtICB7T2JqZWN0fSBbb3B0aW9uc11cbi8vICAgICAgKiAgICAgICAgIEFuIG9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0LlxuLy8gICAgICAqXG4vLyAgICAgICogICAgICAgICBXaGlsZSBub3QgYSBjb3JlIHBhcnQgb2YgdGhlIFZpZGVvLmpzIHBsdWdpbiBhcmNoaXRlY3R1cmUsIGFcbi8vICAgICAgKiAgICAgICAgIHNlY29uZCBhcmd1bWVudCBvZiBvcHRpb25zIGlzIGEgY29udmVuaWVudCB3YXkgdG8gYWNjZXB0IGlucHV0c1xuLy8gICAgICAqICAgICAgICAgZnJvbSB5b3VyIHBsdWdpbidzIGNhbGxlci5cbi8vICAgICAgKi9cblxuLy8gICAgIGNvbnN0cnVjdG9yKHBsYXllciwgb3B0aW9ucykge1xuLy8gICAgICAgICAvLyB0aGUgcGFyZW50IGNsYXNzIHdpbGwgYWRkIHBsYXllciB1bmRlciB0aGlzLnBsYXllclxuLy8gICAgICAgICBzdXBlcihwbGF5ZXIpO1xuXG4vLyAgICAgICAgIHRoaXMub3B0aW9ucyA9IHZpZGVvanMubWVyZ2VPcHRpb25zKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuLy8gICAgICAgICB0aGlzLnBsYXllci5yZWFkeSgoKSA9PiB7XG4vLyAgICAgICAgICAgICB0aGlzLnBsYXllci5hZGRDbGFzcyhcInZqcy1zdHVmZi1uZWJ1bGEtY29udHJvbHNcIik7XG4vLyAgICAgICAgICAgICB0aGlzLnBsYXllci5TdHVmZk5lYnVsYUNvbnRyb2xzID0gdGhpcy5wbGF5ZXIuYWRkQ2hpbGQoXCJTdHVmZk5lYnVsYUNvbnRyb2xzQ29tcG9uZW50XCIsIG9wdGlvbnMpO1xuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG5cbi8vICAgICBzdG9wQW5kU3dpdGhQbGF5ZXJUb1BsYXkoKSB7XG4vLyAgICAgICAgIGNvbnN0IGNvbGxlY3Rpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZXhhbXBsZSBjb2xvclwiKTtcbi8vICAgICAgICAgY29uc29sZS5sb2coY29sbGVjdGlvbik7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAvLyBEZWZpbmUgZGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSBwbHVnaW4ncyBgc3RhdGVgIG9iamVjdCBoZXJlLlxuLy8gU3R1ZmZOZWJ1bGFDb250cm9scy5kZWZhdWx0U3RhdGUgPSB7fTtcblxuLy8gLy8gSW5jbHVkZSB0aGUgdmVyc2lvbiBudW1iZXIuXG4vLyAvLyBTdHVmZk5lYnVsYUNvbnRyb2xzLlZFUlNJT04gPSBQQUNLQUdFLlZFUlNJT047XG5cbi8vIC8vIFJlZ2lzdGVyIHRoZSBwbHVnaW4gd2l0aCB2aWRlby5qcy5cbi8vIHZpZGVvanMucmVnaXN0ZXJQbHVnaW4oXCJzdHVmZk5lYnVsYUNvbnRyb2xzXCIsIFN0dWZmTmVidWxhQ29udHJvbHMpO1xuXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBTdHVmZk5lYnVsYUNvbnRyb2xzO1xuIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiUGx1Z2luIiwidmlkZW9qcyIsImdldFBsdWdpbiIsIkV4YW1wbGVQbHVnaW4iLCJwbGF5ZXIiLCJvcHRpb25zIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIiwiX2RlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9