(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{104:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(7),c=n.n(i),o=(n(104),n(37)),l=n(93),u=n(85),m=n.n(u),s=n(86),f=n.n(s),h=(n(84),n(24)),d=(n(165),n(166),n(167),n(91)),p=n.n(d),E=n(92),g=n.n(E),v=(0,h.a.createSliderWithTooltip)(h.a),w={width:400,margin:30},y=function(e){return Math.floor(100*(-8.84653*Math.sin(.2843*e+2.54855)+68.5749))/100},b=function(e){return Math.floor(100*(9*(-3.72685*Math.sin(.307098*e-.772)+6.00972)/5+32))/100};var S=function(e){var t=e.times,n=Object(a.useState)(0),i=Object(o.a)(n,2),c=i[0],l=i[1],u=function(e,t,n){for(var a=[],r=(t-e)/(n-1),i=0;i<n;i++)a.push(e+r*i);return a}(0,36,t.length),m=u.map((function(e){return b(e)})),s=u.map((function(e){return y(e)}));return r.a.createElement("div",{className:"predict"},r.a.createElement("h1",null,"Predict the Weather"),r.a.createElement("div",{className:"photo-container"},r.a.createElement("img",{src:p.a}),r.a.createElement("img",{src:g.a})),r.a.createElement("p",null,"Predict the weather for ",r.a.createElement("em",null,t[c].toTimeString())),r.a.createElement("div",{style:w},r.a.createElement(v,{min:0,max:t.length,tipFormatter:function(e){return"".concat(new Date(t[e]).toLocaleString())},onAfterChange:function(e){return l(e)}})),r.a.createElement("p",null,"We predict the temperature to be ",r.a.createElement("em",null,m[c]," F"),", and the humidity to be ",r.a.createElement("em",null,s[c],"%")))},x=(0,h.a.createSliderWithTooltip)(h.a.Range),j=(h.a.Handle,{width:400,margin:50});var O=function(e){return Math.floor(100*(9*(-3.72685*Math.sin(.307098*e-.772)+6.00972)/5+32))/100};var T=function(){var e=Object(a.useState)({}),t=Object(o.a)(e,2),n=t[0],i=n.x,c=n.yTemp,u=n.yHumidity,s=n.defaultStart,h=n.defaultEnd,d=n.min,p=n.max,E=t[1],g=Object(a.useState)([0,0]),v=Object(o.a)(g,2),w=v[0],y=v[1];return Object(a.useEffect)((function(){Object(l.a)(f.a).then((function(e){var t=e.map((function(e){return new Date(1e3*e.time)})),n=e.map((function(e){return 9*e.temperature/5+32})),a=e.map((function(e){return e.humidity})),r=t.length-1,i=r;E({x:t,yTemp:n,yHumidity:a,defaultStart:0,defaultEnd:i,min:0,max:r}),y([0,i])}))}),[]),i?(i.slice(w[0],w[1]),function(e,t,n){for(var a=[],r=(t-e)/(n-1),i=0;i<n;i++)a.push(e+r*i);return a}(0,36,i.length).map((function(e){return O(e)})),r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"weather-station"},r.a.createElement("h1",null,"Weather Station"),r.a.createElement(m.a,{data:[{x:i.slice(w[0],w[1]),y:c.slice(w[0],w[1]),name:"temperature"},{x:i.slice(w[0],w[1]),y:u.slice(w[0],w[1]),name:"humidity"}],layout:{title:"Temperature vs Time"}}),r.a.createElement("p",null,"Show me the weather from ",r.a.createElement("em",null,new Date(i[w[0]]).toLocaleString())," to ",r.a.createElement("em",null,new Date(i[w[1]]).toLocaleString())),r.a.createElement("div",{style:j},r.a.createElement(x,{min:d,max:p,defaultValue:[s,h],tipFormatter:function(e){return"".concat(new Date(i[e]))},onAfterChange:function(e){return y(e)}}))),r.a.createElement(S,{times:i}))):null};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},86:function(e,t,n){e.exports=n.p+"static/media/processed.c7d2efc9.csv"},91:function(e,t,n){e.exports=n.p+"static/media/humidity.5cc9f5a2.png"},92:function(e,t,n){e.exports=n.p+"static/media/temperature.40dcbfca.png"},99:function(e,t,n){e.exports=n(168)}},[[99,1,2]]]);
//# sourceMappingURL=main.1943bfe0.chunk.js.map