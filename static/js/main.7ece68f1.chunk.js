(this["webpackJsonpnews-yecombinator"]=this["webpackJsonpnews-yecombinator"]||[]).push([[0],{118:function(e,t,a){e.exports=a(402)},122:function(e,t,a){},123:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},124:function(e,t,a){},402:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(14),l=a.n(o),s=(a(122),a(123),a(124),function(){return r.a.createElement("div",{className:"flex pa1 justify-between nowrap orange"},r.a.createElement("div",{className:"flex flex-fixed black"},r.a.createElement("div",{className:"fw7 mr1"},"Ye News")))});var c=function(e){var t=e.num_comments,a=e.created,n=e.points,o=e.author,l=e.title,s=e.permalink,c=e.index,i="https://reddit.com"+s;return r.a.createElement("div",{className:"flex mt2 items-start"},r.a.createElement("div",{className:"flex items-start"},r.a.createElement("div",{className:"gray"},parseInt(c,10)+1,"."),r.a.createElement("div",{className:"ml1 gray f11 cursor"},"\u25b2")),r.a.createElement("div",{className:"ml1 items-start tl"},r.a.createElement("div",{style:{flex:1,alignItems:"left",justifyContent:"left"}},r.a.createElement("a",{href:i,style:{textDecoration:"none",color:"black"}},l," "),r.a.createElement("a",{className:"gray cursor f11",href:i,target:"__blank"},"(",s.substring(8),")")),r.a.createElement("div",{className:"f11 lh-copy gray"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("span",{className:"score"},n," points by "),r.a.createElement("span",{className:"reddituser"},o," "),r.a.createElement("span",{className:"created"}," ",function(e){var t=parseInt((new Date).getTime().toString())-1e3*parseInt(new Date(e).getTime().toString());return t<6e4?"less than 1 min ago":t<36e5?Math.round(t/6e4)+" minutes ago":t<864e5?Math.round(t/36e5)+" hours ago":t<2592e6?Math.round(t/864e5)+" days ago":t<31536e6?Math.round(t/2592e6)+" months ago":Math.round(t/31536e6)+" years ago"}(a)," | "),r.a.createElement("a",{href:i,style:{textDecoration:"none",color:"grey"},className:"num_comments"},t," comments"))))))))},i=a(110),m=a(111),u=a(117),d=a(116),f=(a(125),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={error:null,isLoaded:!1,posts:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://www.reddit.com/r/kanye/hot.json?count=20").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,posts:t.data.children})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){var e=this.state,t=e.error,a=e.isLoaded,n=e.posts;return t?r.a.createElement("div",null,"Error in loading"):a?r.a.createElement("div",null,r.a.createElement("ol",null,n.map((function(e,t){return r.a.createElement(c,{key:e.data.permalink,num_comments:e.data.num_comments,created:e.data.created_utc,points:e.data.ups,author:e.data.author,title:e.data.title,permalink:e.data.permalink,index:t})})))):r.a.createElement("div",null,"Loading ...")}}]),a}(n.Component));var h=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[118,1,2]]]);
//# sourceMappingURL=main.7ece68f1.chunk.js.map