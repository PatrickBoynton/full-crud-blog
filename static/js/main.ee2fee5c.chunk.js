(this["webpackJsonpfull-crud-blog"]=this["webpackJsonpfull-crud-blog"]||[]).push([[0],{15:function(t,e,n){},16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var s=n(2),i=n.n(s),a=n(10),o=n.n(a),c=(n(15),n(5)),l=n(9),d=n(3),u=n(4),h=n(1),r=n(7),b=n(6),j=(n(16),n(0)),p=function(t){Object(r.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(d.a)(this,n),(s=e.call(this,t)).state={isEditing:!1,title:s.props.post.title,text:s.props.post},s.handleInput=s.handleInput.bind(Object(h.a)(s)),s.handleEdit=s.handleEdit.bind(Object(h.a)(s)),s}return Object(u.a)(n,[{key:"handleInput",value:function(t){this.setState(Object(l.a)({},t.target.name,t.target.value))}},{key:"handleEdit",value:function(t){13===t.keyCode&&(console.log(this.state.title),this.props.editPost(this.props.post,this.state.title,this.state.text),this.setState({isEditing:!1}))}},{key:"render",value:function(){var t=this,e=this.props.post;return Object(j.jsxs)("li",{children:[this.state.isEditing?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{type:"text",name:"title",value:this.state.title,onChange:this.handleInput,onKeyUp:this.handleEdit}),Object(j.jsx)("input",{type:"text",name:"text",value:this.state.text,onChange:this.handleInput,onKeyUp:this.handleEdit})]}):Object(j.jsxs)("section",{className:"card",children:[Object(j.jsx)("h1",{children:e.title}),Object(j.jsx)("p",{children:e.text})]}),Object(j.jsxs)("div",{className:"edit-buttons",children:[Object(j.jsx)("button",{onClick:function(){return t.setState({isEditing:!t.state.isEditing})},children:"Edit"}),Object(j.jsx)("button",{onClick:function(){return t.props.deletePost(e)},children:"Delete"})]})]})}}]),n}(s.Component);function O(t){var e,n=null===(e=t.posts)||void 0===e?void 0:e.map((function(e,n){return Object(j.jsx)(p,{post:e,editPost:t.editPost,deletePost:t.deletePost},n)}));return Object(j.jsx)("ul",{children:n})}var x=function(t){Object(r.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(d.a)(this,n),(s=e.call(this,t)).state={title:"",text:""},s.handleInput=s.handleInput.bind(Object(h.a)(s)),s.handleSubmit=s.handleSubmit.bind(Object(h.a)(s)),s}return Object(u.a)(n,[{key:"handleInput",value:function(t){this.setState(Object(l.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){this.props.addPost(this.state),t.preventDefault()}},{key:"render",value:function(){return Object(j.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(j.jsx)("label",{htmlFor:"title",children:"Title"}),Object(j.jsx)("input",{type:"text",id:"title",name:"title",value:this.state.title,onChange:this.handleInput}),Object(j.jsx)("label",{htmlFor:"text",children:"Text"}),Object(j.jsx)("input",{type:"text",id:"text",name:"text",value:this.state.text,onChange:this.handleInput}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})}}]),n}(s.Component),v=function(t){Object(r.a)(n,t);var e=Object(b.a)(n);function n(t){var s;return Object(d.a)(this,n),(s=e.call(this,t)).addPost=s.addPost.bind(Object(h.a)(s)),s.editPost=s.editPost.bind(Object(h.a)(s)),s.deletePost=s.deletePost.bind(Object(h.a)(s)),s}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.setState({posts:[]})}},{key:"addPost",value:function(t){var e=Object(c.a)(this.state.posts);e.push(t),this.setState({posts:e})}},{key:"editPost",value:function(t,e,n){var s=Object(c.a)(this.state.posts),i=s.indexOf(t);s[i].title=e,s[i].text=n,this.setState({posts:s})}},{key:"deletePost",value:function(t){var e=Object(c.a)(this.state.posts),n=e.indexOf(t);e.splice(n,1),this.setState({posts:e})}},{key:"render",value:function(){var t;return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(x,{addPost:this.addPost}),Object(j.jsx)(O,{posts:null===(t=this.state)||void 0===t?void 0:t.posts,editPost:this.editPost,deletePost:this.deletePost})]})}}]),n}(s.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,s=e.getFID,i=e.getFCP,a=e.getLCP,o=e.getTTFB;n(t),s(t),i(t),a(t),o(t)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),f()}},[[18,1,2]]]);
//# sourceMappingURL=main.ee2fee5c.chunk.js.map