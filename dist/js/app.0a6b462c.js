(function(t){function e(e){for(var r,o,s=e[0],u=e[1],a=e[2],f=0,p=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(p.length)p.shift()();return c.push.apply(c,a||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,s=1;s<n.length;s++){var u=n[s];0!==i[u]&&(r=!1)}r&&(c.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},c=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-surf-app/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var a=0;a<s.length;a++)e(s[a]);var l=u;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"03a0":function(t,e,n){},"1b82":function(t,e,n){"use strict";n("3119")},3119:function(t,e,n){},5648:function(t,e,n){"use strict";n("9a37")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("7a23");const i={id:"app"};function c(t,e,n,c,o,s){const u=Object(r["t"])("LocationList"),a=Object(r["t"])("DifficultyLevels"),l=Object(r["t"])("WaveTypes"),f=Object(r["t"])("EquipmentTypes");return Object(r["p"])(),Object(r["d"])("div",i,[Object(r["g"])(u),Object(r["g"])(a),Object(r["g"])(l),Object(r["g"])(f)])}const o={id:"location-list"},s={key:0};function u(t,e,n,i,c,u){return Object(r["p"])(),Object(r["d"])("div",o,[e[1]||(e[1]=Object(r["e"])("h2",null,"Surf Locations",-1)),c.currentLocation?(Object(r["p"])(),Object(r["d"])("div",s,[Object(r["e"])("strong",null,Object(r["w"])(c.currentLocation.name),1),Object(r["f"])(": "+Object(r["w"])(c.currentLocation.description)+" ",1),e[0]||(e[0]=Object(r["e"])("br",null,null,-1)),Object(r["f"])(" Coordinates: ("+Object(r["w"])(c.currentLocation.coordinates.lat)+", "+Object(r["w"])(c.currentLocation.coordinates.lng)+") ",1)])):Object(r["c"])("",!0)])}var a={data(){return{locations:[],currentLocationIndex:0,currentLocation:null,intervalId:null}},mounted(){this.fetchLocations()},beforeDestroy(){clearInterval(this.intervalId)},methods:{async fetchLocations(){try{const t=await fetch("/surf.json"),e=await t.json();this.locations=e.locations,this.currentLocation=this.locations[this.currentLocationIndex],this.startLocationLoop()}catch(t){console.error("Error fetching locations:",t)}},startLocationLoop(){this.intervalId=setInterval(()=>{this.currentLocationIndex=(this.currentLocationIndex+1)%this.locations.length,this.currentLocation=this.locations[this.currentLocationIndex]},3e3)}}},l=(n("8427"),n("6b0d")),f=n.n(l);const p=f()(a,[["render",u],["__scopeId","data-v-1b230b48"]]);var d=p;const v={id:"difficulty-levels"},h={key:0};function y(t,e,n,i,c,o){return Object(r["p"])(),Object(r["d"])("div",v,[e[0]||(e[0]=Object(r["e"])("h2",null,"Difficulty Levels",-1)),c.currentDifficulty?(Object(r["p"])(),Object(r["d"])("div",h,[Object(r["e"])("strong",null,Object(r["w"])(c.currentDifficulty.level),1),Object(r["f"])(": "+Object(r["w"])(c.currentDifficulty.description),1)])):Object(r["c"])("",!0)])}var b={data(){return{difficultyLevels:[],currentDifficultyIndex:0,currentDifficulty:null,intervalId:null}},mounted(){this.fetchDifficultyLevels()},beforeDestroy(){clearInterval(this.intervalId)},methods:{async fetchDifficultyLevels(){try{const t=await fetch("/surf.json"),e=await t.json();this.difficultyLevels=e.difficultyLevels,this.currentDifficulty=this.difficultyLevels[this.currentDifficultyIndex],this.startDifficultyLoop()}catch(t){console.error("Error fetching difficulty levels:",t)}},startDifficultyLoop(){this.intervalId=setInterval(()=>{this.currentDifficultyIndex=(this.currentDifficultyIndex+1)%this.difficultyLevels.length,this.currentDifficulty=this.difficultyLevels[this.currentDifficultyIndex]},4e3)}}};n("61af");const j=f()(b,[["render",y],["__scopeId","data-v-24c6d979"]]);var O=j;const m={id:"wave-types"},I={key:0};function L(t,e,n,i,c,o){return Object(r["p"])(),Object(r["d"])("div",m,[e[0]||(e[0]=Object(r["e"])("h2",null,"Wave Types",-1)),c.currentWaveType?(Object(r["p"])(),Object(r["d"])("div",I,[Object(r["e"])("strong",null,Object(r["w"])(c.currentWaveType.type),1),Object(r["f"])(": "+Object(r["w"])(c.currentWaveType.description),1)])):Object(r["c"])("",!0)])}var w={data(){return{waveTypes:[],currentWaveTypeIndex:0,currentWaveType:null,intervalId:null}},mounted(){this.fetchWaveTypes()},beforeDestroy(){clearInterval(this.intervalId)},methods:{async fetchWaveTypes(){try{const t=await fetch("/surf.json"),e=await t.json();this.waveTypes=e.waveTypes,this.currentWaveType=this.waveTypes[this.currentWaveTypeIndex],this.startWaveTypeLoop()}catch(t){console.error("Error fetching wave types:",t)}},startWaveTypeLoop(){this.intervalId=setInterval(()=>{this.currentWaveTypeIndex=(this.currentWaveTypeIndex+1)%this.waveTypes.length,this.currentWaveType=this.waveTypes[this.currentWaveTypeIndex]},5e3)}}};n("5648");const T=f()(w,[["render",L],["__scopeId","data-v-d15d25a6"]]);var g=T;const x={id:"equipment-types"},D={key:0};function q(t,e,n,i,c,o){return Object(r["p"])(),Object(r["d"])("div",x,[e[0]||(e[0]=Object(r["e"])("h2",null,"Equipment Types",-1)),c.currentEquipment?(Object(r["p"])(),Object(r["d"])("div",D,[Object(r["e"])("strong",null,Object(r["w"])(c.currentEquipment.type),1),Object(r["f"])(": "+Object(r["w"])(c.currentEquipment.description),1)])):Object(r["c"])("",!0)])}var E={data(){return{equipmentTypes:[{type:"Shortboard",description:"A versatile board for all types of waves."},{type:"Longboard",description:"A longer board for smaller, slower waves."},{type:"Fish",description:"A shorter, wider board for smaller waves."},{type:"Gun",description:"A longer board for big wave surfing."}],currentEquipmentIndex:0,currentEquipment:null,intervalId:null}},mounted(){this.currentEquipment=this.equipmentTypes[this.currentEquipmentIndex],this.startEquipmentLoop()},beforeDestroy(){clearInterval(this.intervalId)},methods:{startEquipmentLoop(){this.intervalId=setInterval(()=>{this.currentEquipmentIndex=(this.currentEquipmentIndex+1)%this.equipmentTypes.length,this.currentEquipment=this.equipmentTypes[this.currentEquipmentIndex]},6e3)}}};n("1b82");const W=f()(E,[["render",q],["__scopeId","data-v-535d0b8f"]]);var _=W,k={name:"App",components:{LocationList:d,DifficultyLevels:O,WaveTypes:g,EquipmentTypes:_}};n("7260");const P=f()(k,[["render",c]]);var S=P,A=n("6605");const M=[{path:"/",name:"Home",components:{default:d,difficulty:O,waveTypes:g}}],J=Object(A["a"])({history:Object(A["b"])(),routes:M});var C=J;Object(r["b"])(S).use(C).mount("#app")},"61af":function(t,e,n){"use strict";n("e953")},7260:function(t,e,n){"use strict";n("03a0")},8427:function(t,e,n){"use strict";n("a874")},"9a37":function(t,e,n){},a874:function(t,e,n){},e953:function(t,e,n){}});
//# sourceMappingURL=app.0a6b462c.js.map