(this.webpackJsonpquizapp=this.webpackJsonpquizapp||[]).push([[0],{15:function(t,e,c){},26:function(t,e,c){"use strict";c.r(e);var o=c(1),n=c.n(o),a=c(8),i=c.n(a),s=c(2),p=(c(15),c(10)),r=c(7),l=(c(16),c(0)),b=function(t){var e=t.showAnswers,c=t.handleAnswer,o=t.handleNextQuestion,n=t.data,a=n.question,i=n.correct_answer,s=n.answers;return Object(l.jsxs)("div",{className:"flex flex-col",children:[Object(l.jsx)("div",{className:" text-black p-10 rounded shadow-md",style:{backgroundColor:"#7dced0"},children:Object(l.jsx)("h2",{className:"text-2xl",dangerouslySetInnerHTML:{__html:a}})}),Object(l.jsx)("div",{className:"grid grid-cols-2 gap-6 mt-6 ",children:s.map((function(t,o){var n=e?t===i?"text-green-700":"text-red-600":"text-black";return Object(l.jsx)("button",{style:{backgroundColor:"#7dced0"},className:"kl-auto text-black ".concat(n," p-4 font-semibold rounded shadow"),onClick:function(){return c(t)},answer:t,dangerouslySetInnerHTML:{__html:t}},o)}))}),e&&Object(l.jsx)("button",{onClick:o,className:"ml-auto mt-6 bg-white text-purple-800 p-4 font-semibold rounded shadow",children:"Next Question"})]})},d=c(9),j=c.n(d);var u=function(t){var e=t.api,c=Object(o.useState)([]),n=Object(s.a)(c,2),a=n[0],i=n[1],d=Object(o.useState)(0),u=Object(s.a)(d,2),m=u[0],x=u[1],h=Object(o.useState)(0),g=Object(s.a)(h,2),O=g[0],y=g[1],f=Object(o.useState)(!1),k=Object(s.a)(f,2),C=k[0],w=k[1];return Object(o.useEffect)((function(){fetch("".concat(e)).then((function(t){return t.json()})).then((function(t){var e=t.results.map((function(t){return Object(r.a)(Object(r.a)({},t),{},{answers:[t.correct_answer].concat(Object(p.a)(t.incorrect_answers)).sort((function(){return Math.random()-.5}))})}));i(e)}))}),[]),a.length>0?Object(l.jsx)("div",{className:"container",children:m>=a.length?Object(l.jsxs)("h1",{className:"text-3xl font-bold",style:{color:"#7dced0",textAlign:"center"},children:["Game ended! Your score is ",O]}):Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(b,{data:a[m],showAnswers:C,handleAnswer:function(t){C||t===a[m].correct_answer&&y(O+1),w(!0)},handleNextQuestion:function(){w(!1),x(m+1)}})})}):Object(l.jsx)(j.a,{})};var m=function(){var t=Object(o.useState)(void 0),e=Object(s.a)(t,2),c=e[0],n=e[1],a=function(t){var e=t.id,c=t.text,o=t.bg;return Object(l.jsx)("button",{className:"text-black px-8",style:{paddingTop:25,paddingBottom:25,paddingLeft:20,paddingRight:20,fontSize:20,borderRadius:10,backgroundColor:"".concat(o),border:0,textAlign:"center",fontWeight:"600"},onClick:function(){return i(e)},children:c})};function i(t){n(t)}return"1"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=9&type=multiple"}):"2"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=17&type=multiple"}):"3"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=18&type=multiple"}):"4"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=19&type=multiple"}):"5"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=22&type=multiple"}):"6"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=23&type=multiple"}):"7"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=21&type=multiple"}):"8"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=20&type=multiple"}):"9"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=10&type=multiple"}):"10"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=11&type=multiple"}):"11"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=12&type=multiple"}):"12"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=15&type=multiple"}):"13"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=16&type=multiple"}):"14"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=27&type=multiple"}):"15"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=29&type=multiple"}):"16"===c?Object(l.jsx)(u,{api:"https://opentdb.com/api.php?amount=10&category=32&type=multiple"}):Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("header",{className:"font-bold text-4xl pt-3 ",style:{textAlign:"center",color:"#7dced0",marginTop:"40rem",marginBottom:"2rem"},children:"Choose your category"}),Object(l.jsxs)("div",{className:"grid grid-cols-2 gap-6 mt-6 ",style:{marginTop:"10%",marginBottom:"25%"},children:[Object(l.jsx)(a,{id:"1",text:"General Knowledge",bg:"#9483bd",onClick:i}),Object(l.jsx)(a,{id:"2",text:"Ecology",bg:"#e79995",onClick:i}),Object(l.jsx)(a,{id:"3",text:"Computer Science",bg:"#98d5ca",onClick:i}),Object(l.jsx)(a,{id:"4",text:"Maths",bg:"#9acaed",onClick:i}),Object(l.jsx)(a,{id:"5",bg:"#98d099",text:"Geographical Science",onClick:i}),Object(l.jsx)(a,{id:"6",text:"History",bg:"#e8ce4f",onClick:i}),Object(l.jsx)(a,{id:"7",text:"Sports",bg:"#e7e5e3",onClick:i}),Object(l.jsx)(a,{id:"8",text:"Ancient Mythology",bg:"#e769bb",onClick:i}),Object(l.jsx)(a,{id:"10",text:"Films and Series",bg:"#e79995",onClick:i}),Object(l.jsx)(a,{id:"11",text:"Music",bg:"#98d5ca",onClick:i}),Object(l.jsx)(a,{id:"12",text:"Video Games",bg:"#9acaed",onClick:i}),Object(l.jsx)(a,{id:"15",text:"Comics",bg:"#e7e5e3",onClick:i}),Object(l.jsx)(a,{id:"13",bg:"#98d099",text:"Board Games",onClick:i}),Object(l.jsx)(a,{id:"14",text:"Zoology",bg:"#e8ce4f",onClick:i}),Object(l.jsx)(a,{id:"9",text:"Books and Novels",bg:"#9483bd",onClick:i}),Object(l.jsx)(a,{id:"16",text:"Cartoons",bg:"#e769bb",onClick:i})]})]})};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.00994e4e.chunk.js.map