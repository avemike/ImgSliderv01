(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(t,e,i){t.exports=i(18)},16:function(t,e,i){},18:function(t,e,i){"use strict";i.r(e);var n=i(0),a=i.n(n),c=i(7),s=i.n(c),r=i(1),o=i(2),l=i(4),u=i(3),p=i(5),d=i(9),h=function(t){function e(t){var i;return Object(r.a)(this,e),(i=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={initialPosition:i.props.initialPosition},i}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){var t=this;return a.a.createElement("div",{className:"card card-".concat(this.state.initialPosition),key:this.props.key,onClick:function(){return t.props.handleClick(t.state.initialPosition)}},a.a.createElement("img",{src:this.props.info.img_src,alt:""}))}}]),e}(n.Component),m=function(t){function e(t){var i;return Object(r.a)(this,e),(i=Object(l.a)(this,Object(u.a)(e).call(this,t))).state={list:Object(d.a)(i.props.list),focus:0},i}return Object(p.a)(e,t),Object(o.a)(e,[{key:"handleClick",value:function(t){this.setState({focus:t})}},{key:"render",value:function(){var t=this,e=this.state,i=e.focus,n=e.list;return a.a.createElement("div",null,a.a.createElement("div",{className:"slider"},a.a.createElement("div",{className:"slider-wrapper active-slide-".concat(i),style:{transform:"translateX(-".concat(i*(100/n.length),"%)")}},n.map(function(e,i){return a.a.createElement(h,{key:e.key,info:e,initialPosition:i,handleClick:t.handleClick.bind(t)})}))))}}]),e}(n.Component),f=i(8),b=(i(16),function(t){function e(){return Object(r.a)(this,e),Object(l.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(o.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(m,{list:f.cards}))}}]),e}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(a.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},8:function(t){t.exports={cards:[{title:"First card",img_src:"https://picsum.photos/310/300",id:"01"},{title:"Second card",img_src:"https://picsum.photos/310/310",id:"02"},{title:"Third card",img_src:"https://picsum.photos/300/300",id:"03"},{title:"Fourth card",img_src:"https://picsum.photos/305/300",id:"04"},{title:"Fifth card",img_src:"https://picsum.photos/305/305",id:"05"}]}}},[[10,2,1]]]);
//# sourceMappingURL=main.f033d03e.chunk.js.map