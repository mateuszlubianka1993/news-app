(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){},116:function(e,t,a){},124:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(27),s=a.n(c),l=a(11),o=a(25),i=a(65),u=Object(o.c)({topHeadlines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TOP_HEADLINES":return t.payload;default:return e}},news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NEWS":return t.payload;default:return e}},inputValue:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_INPUT_VALUE":return t.payload;default:return e}},searched:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_SEARCHED":return t.payload;default:return e}}}),m=(a(80),a(6)),p=a(7),h=a(10),E=a(8),d=a(9),b=a(19),f=a(23),w=(a(81),function(){return r.a.createElement("div",{className:"header-container"},r.a.createElement("h1",{className:"header-txt"},"News App"))}),y=a(26),N=a.n(y),O=a(39),j=a(66),v=a.n(j).a.create({baseURL:"https://newsapi.org/v2/"}),g="7f49acd60acf4796b1d9b3dc9a3ef941",k=function(e){return function(){var t=Object(O.a)(N.a.mark(function t(a){var n,r;return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,v.get("/top-headlines",{params:{country:"us",pageSize:6,category:e,apiKey:g}});case 2:n=t.sent,r=n.data.articles,a({type:"GET_NEWS",payload:r});case 5:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},T=a(128),x=a(134),S=a(129),C=(a(100),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props.news;return r.a.createElement(T.a,null,r.a.createElement(x.a,{className:"bg-dark text-white card-box"},r.a.createElement(x.a.Img,{variant:"top",src:e.urlToImage,alt:"Card image",className:"news-img"}),r.a.createElement(x.a.Title,null,e.title),r.a.createElement(x.a.Text,null,e.description),r.a.createElement(x.a.Text,null,e.content),r.a.createElement(x.a.Link,{href:e.url,target:"_blank"},r.a.createElement(S.a,null,"Full News")),r.a.createElement("footer",{className:"blockquote-footer card-footer"},r.a.createElement("cite",{title:"Source Title"},"Published at: ",e.publishedAt),r.a.createElement(x.a.Text,null,e.author))))}}]),t}(r.a.Component)),H=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getNews("entertainment")}},{key:"render",value:function(){var e=this.props.news.map(function(e,t){return r.a.createElement(C,{key:t,news:e})});return r.a.createElement(T.a,{className:"news-container"},r.a.createElement(T.a,{className:"news-header"},r.a.createElement("h2",{className:"news-header-txt"},"Entertainment News")),e)}}]),t}(r.a.Component),L=Object(l.b)(function(e){return{news:e.news}},{getNews:k})(H),_=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getNews("health")}},{key:"render",value:function(){var e=this.props.news.map(function(e,t){return r.a.createElement(C,{key:t,news:e})});return r.a.createElement(T.a,{className:"news-container"},r.a.createElement(T.a,{className:"news-header"},r.a.createElement("h2",{className:"news-header-txt"},"Health News")),e)}}]),t}(r.a.Component),I=Object(l.b)(function(e){return{news:e.news}},{getNews:k})(_),A=a(40),D=a.n(A),G=(a(101),a(58),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentWillMount",value:function(){this.props.getTopHeadlines()}},{key:"render",value:function(){var e=this.props.topHeadlines.map(function(e,t){return r.a.createElement(D.a.Item,null,r.a.createElement("img",{className:"d-block w-100 carousel-photo",src:e.urlToImage,alt:"First slide"}),r.a.createElement(D.a.Caption,{className:"carousel-txt"},r.a.createElement("h3",null,e.title),r.a.createElement("p",{className:"carousel-description"},e.description),r.a.createElement(x.a.Link,{href:e.url,target:"_blank"},r.a.createElement(S.a,null,"Full News"))))});return r.a.createElement(T.a,{className:"news-container"},r.a.createElement(T.a,{className:"news-header"},r.a.createElement("h2",{className:"news-header-txt"},"Top Headlines")),r.a.createElement(D.a,{className:"news-carousel"},e))}}]),t}(r.a.Component)),V=Object(l.b)(function(e){return{topHeadlines:e.topHeadlines}},{getTopHeadlines:function(){return function(){var e=Object(O.a)(N.a.mark(function e(t){var a,n;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.get("/top-headlines",{params:{country:"us",pageSize:5,apiKey:g}});case 2:a=e.sent,n=a.data.articles,t({type:"GET_TOP_HEADLINES",payload:n});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()}})(G),M=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getNews("science")}},{key:"render",value:function(){var e=this.props.news.map(function(e,t){return r.a.createElement(C,{key:t,news:e})});return r.a.createElement(T.a,{className:"news-container"},r.a.createElement(T.a,{className:"news-header"},r.a.createElement("h2",{className:"news-header-txt"},"Science News")),e)}}]),t}(r.a.Component),P=Object(l.b)(function(e){return{news:e.news}},{getNews:k})(M),U=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getNews("sports")}},{key:"render",value:function(){var e=this.props.news.map(function(e,t){return r.a.createElement(C,{key:t,news:e})});return r.a.createElement(T.a,{className:"news-container"},r.a.createElement(T.a,{className:"news-header"},r.a.createElement("h2",{className:"news-header-txt"},"Sports News")),e)}}]),t}(r.a.Component),R=Object(l.b)(function(e){return{news:e.news}},{getNews:k})(U),z=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.getNews("technology")}},{key:"render",value:function(){var e=this.props.news.map(function(e,t){return r.a.createElement(C,{key:t,news:e})});return r.a.createElement(T.a,{className:"news-container"},r.a.createElement(T.a,{className:"news-header"},r.a.createElement("h2",{className:"news-header-txt"},"Technology News")),e)}}]),t}(r.a.Component),F=Object(l.b)(function(e){return{news:e.news}},{getNews:k})(z),K=a(131),W=a(132),q=(a(116),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement(K.a,{collapseOnSelect:!0,expand:"lg",bg:"secondary",variant:"dark",sticky:"top"},r.a.createElement(T.a,null,r.a.createElement(K.a.Brand,null,r.a.createElement(b.b,{to:"/",className:"menu-items"},"News App")),r.a.createElement(K.a.Toggle,{"aria-controls":"responsive-navbar-nav"})),r.a.createElement(K.a.Collapse,{id:"responsive-navbar-nav"},r.a.createElement(W.a,{pullRight:!0},r.a.createElement(W.a.Link,null,r.a.createElement(b.b,{to:"/",className:"menu-items"},"Home")),r.a.createElement(W.a.Link,null,r.a.createElement(b.b,{to:"/entertainment",className:"menu-items"},"Entertainment")),r.a.createElement(W.a.Link,null,r.a.createElement(b.b,{to:"/health",className:"menu-items"},"Health")),r.a.createElement(W.a.Link,null,r.a.createElement(b.b,{to:"/science",className:"menu-items"},"Science")),r.a.createElement(W.a.Link,null,r.a.createElement(b.b,{to:"/sports",className:"menu-items"},"Sports")),r.a.createElement(W.a.Link,null,r.a.createElement(b.b,{to:"/technology",className:"menu-items"},"Technology")),r.a.createElement(W.a.Link,null,r.a.createElement(b.b,{to:"/search",className:"menu-items"},"Search")))))}}]),t}(r.a.Component)),B=a(130),J=a(133),Q=(a(124),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.inputValue,n=t.searched.map(function(e,t){return r.a.createElement(C,{key:t,news:e})});return r.a.createElement(T.a,{className:"news-container"},r.a.createElement("form",{onSubmit:function(t){return e.props.getSearched(t,a)},className:"news-form"},r.a.createElement(B.a,{className:"mb-3",onChange:function(t){return e.props.getInputValue(t.target.value)}},r.a.createElement(J.a,{placeholder:"Search News","aria-label":"Search News","aria-describedby":"basic-addon2"}),r.a.createElement(B.a.Append,null,r.a.createElement(S.a,{type:"submit",variant:"outline-secondary",className:"search-btn"},"Search")))),n)}}]),t}(r.a.Component)),X=Object(l.b)(function(e){return{inputValue:e.inputValue,searched:e.searched}},{getInputValue:function(e){return{type:"GET_INPUT_VALUE",payload:e}},getSearched:function(e,t){return function(){var a=Object(O.a)(N.a.mark(function a(n){var r,c;return N.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return e.preventDefault(),a.next=3,v.get("/everything",{params:{q:t,pageSize:6,apiKey:g}});case 3:r=a.sent,c=r.data.articles,n({type:"GET_SEARCHED",payload:c});case 6:case"end":return a.stop()}},a)}));return function(e){return a.apply(this,arguments)}}()}})(Q),Y=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app-container"},r.a.createElement(b.a,null,r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(q,null),r.a.createElement(f.a,{path:"/",exact:!0,component:V}),r.a.createElement(f.a,{path:"/entertainment",component:L}),r.a.createElement(f.a,{path:"/health",component:I}),r.a.createElement(f.a,{path:"/science",component:P}),r.a.createElement(f.a,{path:"/sports",component:R}),r.a.createElement(f.a,{path:"/technology",component:F}),r.a.createElement(f.a,{path:"/search",component:X}))))}}]),t}(r.a.Component),Z=Object(o.d)(u,Object(o.a)(i.a));s.a.render(r.a.createElement(l.a,{store:Z},r.a.createElement(Y,null)),document.getElementById("root"))},58:function(e,t,a){},71:function(e,t,a){e.exports=a(126)},80:function(e,t,a){},81:function(e,t,a){}},[[71,1,2]]]);
//# sourceMappingURL=main.fd9bc4a5.chunk.js.map