(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),i=n(11),a=n.n(i),l=(n(21),n(9)),o=n(3),r=(n(22),n(29)),d=n(27),u=n(28),j=n(30),b=n(6),O=n(0),h=function(e){var t=Object(c.useRef)(null);Object(c.useEffect)((function(){Object(b.a)(t.current)}));return Object(O.jsx)(d.a,{children:Object(O.jsx)("button",{type:"button",class:"btn btn-primary-outline",onClick:function(){e.setSelected(e.index)},children:Object(O.jsxs)("h6",{className:e.selected===e.index?"txt-item-touched":"txt-item",children:[e.index+1,". ",e.data.question]},e.data.question)})})},x=s.a.memo(h);function f(e){var t,n=Object(c.useRef)(null);Object(c.useEffect)((function(){Object(b.a)(n.current)}));var s=function(t){e.onChangeAnswer(t)};return Object(O.jsx)(u.a,{style:{padding:0,width:"100%"},children:null===(t=e.data[e.selected])||void 0===t?void 0:t.answer.map((function(t,c){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(d.a,{style:{padding:0},lg:2,md:3,sm:3,xl:2,xs:12,xxl:2,children:Object(O.jsxs)("h6",{className:"txt-item-bold",children:["Option ",c+1]})}),Object(O.jsxs)(d.a,{className:"p-0",lg:10,md:9,sm:9,xl:10,xs:12,xxl:10,children:[Object(O.jsx)("textarea",{ref:n,style:{maxHeight:"75px",minHeight:"38px",width:"100%",resize:"none",boxSizing:"border-box",fontSize:"1rem",textCombineUpright:"center"},placeholder:"Type option",rows:1,value:t.option,onFocus:function(){return function(t){e.setSelectedOption(t)}(c)},onChange:s}),Object(O.jsx)("div",{style:{alignItems:"center",justifyContent:"center",display:"flex"}})]})]})}))})}var m=s.a.memo(f),g=n(13);n(16);function p(e){var t,n=Object(c.useRef)(null),s=Object(c.useState)(""),i=Object(o.a)(s,2),a=i[0],l=i[1];Object(c.useEffect)((function(){Object(b.a)(n.current)}));return Object(O.jsxs)("div",{children:[Object(O.jsxs)("ul",{className:"question-item",children:[Object(O.jsxs)("h6",{className:"txt-title",children:["Design question ",e.selected+1]}),Object(O.jsxs)(u.a,{style:{padding:0},classname:"form-item",children:[Object(O.jsx)(d.a,{style:{padding:0},lg:2,md:3,sm:3,xl:2,xs:12,xxl:2,children:Object(O.jsx)("h6",{className:"txt-item-bold",children:"Question"})}),Object(O.jsxs)(d.a,{className:"p-0",lg:10,md:9,sm:9,xl:10,xs:12,xxl:10,children:[Object(O.jsx)("textarea",{ref:n,style:{maxHeight:"75px",minHeight:"38px",width:"100%",resize:"none",boxSizing:"border-box",fontSize:"1rem",textCombineUpright:"center"},placeholder:"Type question",rows:1,onChange:e.onChangeQuestion,value:null===(t=e.data[e.selected])||void 0===t?void 0:t.question}),Object(O.jsxs)("div",{style:{alignItems:"center",justifyContent:"center",display:"flex"},children:[Object(O.jsx)("input",{type:"file",onChange:function(e){if(e.target.files&&e.target.files[0]){var t=new FileReader;t.onload=function(e){l(e.target.result)},t.readAsDataURL(e.target.files[0])}},className:"filetype",id:"group_image"}),a?Object(O.jsx)("img",{className:"img-add",src:a,alt:"description"}):null]})]})]})]}),Object(O.jsx)("ul",{className:"list-item-answer",children:Object(O.jsx)(m,{data:e.data,selected:e.selected,setSelectedOption:e.setSelectedOption,onChangeAnswer:e.onChangeAnswer})}),Object(O.jsxs)(u.a,{className:"two-button-container",children:[Object(O.jsx)(d.a,{className:"button-left",children:Object(O.jsx)(j.a,{style:{fontSize:10,fontWeight:"bold"},type:"submit",onClick:e.onAddAnswer,children:"ADD"})}),Object(O.jsx)(d.a,{className:"button-right",children:Object(O.jsx)(g.a,{trigger:Object(O.jsx)(j.a,{style:{fontSize:10,fontWeight:"bold"},type:"submit",children:"DELETE"}),modal:!0,children:function(t){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{className:"txt-title",children:"Are you sure to delete this item?"}),Object(O.jsx)(j.a,{style:{fontSize:10,fontWeight:"bold",width:70},type:"submit",onClick:function(){return function(t){e.onDeleteAnswer(),t()}(t)},children:"Yes"}),Object(O.jsx)(j.a,{style:{fontSize:10,fontWeight:"bold",width:70,marginLeft:10},variant:"secondary",onClick:function(){return t()},children:"No"})]})}})})]})]})}var v=s.a.memo(p),y=n(8);var S=function(){var e=Object(c.useRef)(null),t=Object(c.useState)([{question:"",answer:[{option:""}]}]),n=Object(o.a)(t,2),s=n[0],i=n[1],a=Object(c.useState)(!0),h=Object(o.a)(a,2),f=(h[0],h[1],Object(c.useState)(0)),m=Object(o.a)(f,2),p=m[0],S=m[1],w=Object(c.useState)(0),N=Object(o.a)(w,2),C=N[0],k=N[1],z=Object(y.useReactMediaRecorder)({audio:!0}),q=(z.status,z.startRecording,z.stopRecording,z.mediaBlobUrl,Object(y.useReactMediaRecorder)({video:!0}));q.statusVideo,q.startRecordingVideo,q.stopRecordingVideo,q.mediaBlobUrlVideo,Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("data"));console.log("%c tmp","color: blue; font-weight: 600",e),0!==(null===e||void 0===e?void 0:e.length)?i(e):i([{question:"",answer:[{option:""}]}])}),[]),Object(c.useEffect)((function(){Object(b.a)(e.current)})),Object(c.useEffect)((function(){console.log("%c data","color: blue; font-weight: 600",s)}),[s]);var A=Object(c.useCallback)((function(e){S(e)}),[]),E=Object(c.useCallback)((function(){var e=Object(l.a)(s);e.push({question:"",answer:[{option:""}]}),i(e),localStorage.setItem("data",JSON.stringify(e)),S(e.length-1)}),[s]),R=Object(c.useCallback)((function(e){var t,n=Object(l.a)(s);n.splice(p,1),0===(null===(t=n)||void 0===t?void 0:t.length)?(i(n=[{question:"",answer:[{option:""}]}]),localStorage.setItem("data",JSON.stringify(n))):(i(n),localStorage.setItem("data",JSON.stringify(n))),e()}),[p,s]),I=Object(c.useCallback)((function(e){var t=Object(l.a)(s);t[p].question=e.nativeEvent.target.value,i(t),localStorage.setItem("data",JSON.stringify(t))}),[s,p]),D=Object(c.useCallback)((function(e){var t=Object(l.a)(s);t[p].answer[C].option=e.nativeEvent.target.value,i(t),console.log("%c tmp","color: blue; font-weight: 600",t),localStorage.setItem("data",JSON.stringify(t))}),[s,p,C]),J=Object(c.useCallback)((function(){var e=Object(l.a)(s);e[p].answer.push({option:""}),i(e),localStorage.setItem("data",JSON.stringify(e))}),[s,p]),W=Object(c.useCallback)((function(){var e=Object(l.a)(s);e[p].answer.splice(C,1),i(e),localStorage.setItem("data",JSON.stringify(e))}),[s,p,C]),F=Object(c.useCallback)((function(e){k(e)}),[]);return Object(O.jsx)(r.a,{fluid:!0,className:"p-0",children:Object(O.jsx)(d.a,{children:Object(O.jsxs)(u.a,{children:[Object(O.jsx)(d.a,{className:"left-container",lg:4,md:4,xl:4,sm:5,xs:12,xxl:4,children:Object(O.jsxs)("div",{className:"left-item",children:[Object(O.jsxs)("ul",{className:"list-item",children:[Object(O.jsx)("h6",{className:"txt-title",children:"Select your questions"}),s.map((function(e,t){return Object(O.jsx)(x,{index:t,data:e,selected:p,setSelected:A},e.question)}))]}),Object(O.jsxs)(u.a,{className:"two-button-container",children:[Object(O.jsx)(d.a,{className:"button-left",children:Object(O.jsx)(j.a,{style:{fontSize:10,fontWeight:"bold",width:70},type:"submit",onClick:E,children:"ADD"})}),Object(O.jsx)(d.a,{className:"button-right",children:Object(O.jsx)(g.a,{trigger:Object(O.jsx)(j.a,{style:{fontSize:10,fontWeight:"bold",width:70},type:"submit",onClick:E,children:"DELETE"}),modal:!0,children:function(e){return Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{className:"txt-title",children:"Are you sure to delete this item?"}),Object(O.jsx)(j.a,{style:{fontSize:10,fontWeight:"bold",width:70},type:"submit",onClick:function(){return R(e)},children:"Yes"}),Object(O.jsx)(j.a,{style:{fontSize:10,fontWeight:"bold",width:70,marginLeft:10},variant:"secondary",onClick:function(){return e()},children:"No"})]})}})})]})]})}),Object(O.jsx)(d.a,{lg:8,md:8,sm:7,xl:8,xs:12,xxl:8,className:"right-container",children:Object(O.jsx)("div",{className:"right-item",children:Object(O.jsx)(v,{data:s,selected:p,onChangeQuestion:I,onAddAnswer:J,onDeleteAnswer:W,setSelectedOption:F,onChangeAnswer:D})})})]})})})},w=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),s(e),i(e),a(e)}))};n(25);a.a.render(Object(O.jsx)(s.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),w()}},[[26,1,2]]]);
//# sourceMappingURL=main.f2d5550a.chunk.js.map