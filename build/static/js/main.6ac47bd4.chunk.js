(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n.n(a),s=n(3),r=n.n(s),c=(n(13),n.p,n(14),n(0));var o=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,s=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),s(t),r(t)}))},u=n(4),l=n(5),h=n(8),b=n(7),p=n(6),j=n.n(p),m=function(t){Object(h.a)(n,t);var e=Object(b.a)(n);function n(t){var a;return Object(u.a)(this,n),(a=e.call(this,t)).state={username:"",githubtUrl:"",avatarUrl:"",name:"",location:"",bio:"",public_repos:""},a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=this;j.a.get(this.props.source,(function(e){console.log(e);var n=e;n&&t.setState({username:n.name,githubtUrl:n.html_url,avatarUrl:n.avatar_url,name:n.name,location:n.location,bio:n.bio,public_repos:n.public_repos})}))}},{key:"render",value:function(){return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:this.state.username}),Object(c.jsx)("img",{src:this.state.avatarUrl}),Object(c.jsx)("a",{href:this.state.githubtUrl,children:"Github Link"}),".",Object(c.jsxs)("h4",{children:["\u540d\u5b57:",this.state.name]}),Object(c.jsxs)("h4",{children:["\u57ce\u5e02:",this.state.location," \xa0 \u500b\u4eba\u7c21\u4ecb:",this.state.bio," \xa0 \u6211\u7684repositories:",this.state.public_repos]})]})}}]),n}(i.a.Component);r.a.render(Object(c.jsx)(m,{source:"https://api.github.com/users/kylelee26"}),document.getElementById("root")),o()}},[[16,1,2]]]);
//# sourceMappingURL=main.6ac47bd4.chunk.js.map