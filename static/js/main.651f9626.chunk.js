(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{76:function(e,t,a){},82:function(e,t,a){"use strict";a.r(t);var n=a(23),i=a.n(n),r=a(15),o=a(11),s=a(50),l=a(0),c=a(37),d=a.n(c),u=a(129),m=a(124),j=a(122),h=a(125),b=a(132),f=a(128),p=a(2),O=function(e){var t=e.user;return Object(p.jsx)("a",{className:"UserInfo",href:"mailto:".concat(null===t||void 0===t?void 0:t.email),children:null===t||void 0===t?void 0:t.name})},x=function(e){var t=e.todo;return Object(p.jsxs)("article",{"data-id":"16",className:d()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(p.jsx)("h2",{className:"TodoInfo__title",children:t.title}),Object(p.jsx)(O,{user:t.user})]})},v=function(e){var t=e.todos;return Object(p.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(p.jsx)(x,{todo:e,"data-id":e.id},e.id)}))})},y=(a(76),[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}]),g=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"delectus aut autem",completed:!0,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}];function S(e){return y.find((function(t){return t.id===e}))||null}var N=g.map((function(e){return Object(s.a)(Object(s.a)({},e),{},{user:S(e.userId)})})),C=function(){var e=Object(l.useState)(""),t=Object(o.a)(e,2),a=t[0],n=t[1],i=Object(l.useState)(""),s=Object(o.a)(i,2),c=s[0],O=s[1],x=Object(l.useState)(N),C=Object(o.a)(x,2),I=C[0],w=C[1],B=Object(l.useState)(!1),_=Object(o.a)(B,2),k=_[0],D=_[1],T=Object(r.a)(I.sort((function(e,t){return e.id-t.id})))[g.length-1].id+1,P=function(e){var t=y.find((function(t){return t.name===e}));return(null===t||void 0===t?void 0:t.id)||null}(a),L=S(P),E={id:T,title:c,completed:!1,userId:P,user:L};return Object(p.jsxs)(u.a,{elevation:12,style:{width:"50vh",margin:"0 auto",padding:"25px"},children:[Object(p.jsx)("h1",{children:"Add todo form"}),Object(p.jsxs)("form",{id:"form",action:"/api/users",method:"Post",onSubmit:function(e){e.preventDefault(),""!==a.trim()&&O(""),""!==c.trim()&&n(""),""!==a.trim()&&""!==c.trim()&&(w((I.push(E),I)),D(!1))},children:[Object(p.jsxs)("div",{className:"field",children:[Object(p.jsx)(m.a,{variant:"outlined",style:{marginBottom:"10px",width:"100%"},label:"ToDo Title",id:"text",type:"text","data-cy":"titleInput",value:c,onChange:function(e){return O(e.target.value)},placeholder:"enter todo title"}),k&&Object(p.jsx)("span",{style:{marginBottom:"20px"},className:d()("no-error",{error:""===c}),children:"Please enter a title"})]}),Object(p.jsxs)("div",{className:"field",children:[Object(p.jsxs)(j.a,{id:"title",inputProps:{"aria-label":"Without label"},displayEmpty:!0,"data-cy":"userSelect",value:a,onChange:function(e){return n(e.target.value)},style:{width:"100%"},children:[Object(p.jsx)(h.a,{value:"",children:Object(p.jsx)("em",{children:"Choose a user"})}),y.map((function(e){return Object(p.jsx)(h.a,{value:e.name,children:e.name},e.id)}))]}),Object(p.jsx)(b.a,{style:{marginBottom:"10px"},children:"Chose user"}),k&&Object(p.jsx)("span",{className:d()("no-error",{error:"0"===a||""===a}),children:"Please choose a user"})]}),Object(p.jsx)(f.a,{variant:"outlined",color:"success",type:"submit","data-cy":"submitButton",onClick:function(){""!==a&&""!==c||D(!0)},style:{marginBottom:"20px"},children:"Add"})]}),Object(p.jsx)("div",{className:"container",children:Object(p.jsx)(v,{todos:I})})]})};i.a.render(Object(p.jsx)(C,{}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.651f9626.chunk.js.map