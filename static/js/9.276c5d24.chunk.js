(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{393:function(e,t,a){"use strict";var n=a(72),s=a(73),i=a(75),r=a(74),l=a(17),c=a(76),o=a(1),u=a.n(o),d=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(r.a)(t).call(this,e))).state={changed:!1},a.addScript=a.addScript.bind(Object(l.a)(a)),a.resetDisqus=a.resetDisqus.bind(Object(l.a)(a)),a}return Object(c.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.addScript()}},{key:"resetDisqus",value:function(e,t){window.DISQUS&&(window.DISQUS.reset({reload:!0,config:function(){this.page.identifier=e,this.page.url=t,this.page.title=e,this.page.shortname=e}}),this.setState({changed:!0}))}},{key:"addScript",value:function(){try{var e=this.props.disqusId;if(document.getElementById("disqus_script"))return void this.resetDisqus(e,window.location.href);var t=document,a=t.createElement("script");a.id="disqus_script",a.async=!0,a.src="http://".concat(e,".disqus.com/embed.js"),a.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(a)}catch(n){console.log(n)}}},{key:"render",value:function(){return u.a.createElement("div",{id:"disqus_thread"})}}]),t}(u.a.Component);t.a=d},414:function(e,t,a){e.exports=a.p+"static/media/aboutme.78ff1958.jpeg"},521:function(e,t,a){"use strict";a.r(t);var n=a(72),s=a(73),i=a(75),r=a(74),l=a(76),c=a(1),o=a.n(c),u=a(414),d=a.n(u),m=a(394),p=a(393),h=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e={fontSize:"20px",lineHeight:"32px",color:"#333333"},t={fontSize:"20px",color:"#333333"};return o.a.createElement("div",{className:"aboutus"},o.a.createElement(m.Helmet,null,o.a.createElement("meta",{charSet:"utf-8"}),o.a.createElement("title",null,"About Me"),o.a.createElement("link",{rel:"canonical",href:"http://blogdekho.co.in/aboutme"})),o.a.createElement("h2",{className:"aboutus-header"},o.a.createElement("span",{className:"abt-header"},"Hi, I'm Sunny")),o.a.createElement("div",null,"Mobile: +91-8126131601"),o.a.createElement("div",{className:"aboutus-text"},o.a.createElement("br",null),o.a.createElement("p",null,o.a.createElement("span",{style:e},"I used to have a real job, but I found a way out. ")),o.a.createElement("p",null,o.a.createElement("span",{style:e},"My escape route was a side hustle business I built in my spare time\xa0\u2014 and you can do it too.")),o.a.createElement("p",null,o.a.createElement("span",{style:t},"Today I help thousands of people like you earn extra money and grow meaningful businesses.")),o.a.createElement("p",null,o.a.createElement("span",{style:t},"Because even if you don't have a business idea right now, you know there's more to life than punching the clock for 30 years."))),o.a.createElement("div",{className:"profile-image-large"},o.a.createElement("img",{alt:"",src:d.a})),o.a.createElement("br",null),o.a.createElement("hr",null),o.a.createElement("br",null),o.a.createElement("div",null,o.a.createElement(p.a,{disqusId:"blogdekho-co-in"})))}}]),t}(o.a.Component);t.default=h}}]);
//# sourceMappingURL=9.276c5d24.chunk.js.map