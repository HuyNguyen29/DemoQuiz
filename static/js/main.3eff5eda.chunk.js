(this.webpackJsonpquiz=this.webpackJsonpquiz||[]).push([[0],{21:function(e,t,n){},22:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(12),a=n.n(s),l=(n(21),n(6)),o=n(3),r=(n(22),n(29)),d=n(27),u=n(28),b=n(30),j=n(9),m=n(0),f=Object(c.forwardRef)((function(e,t){var n,i=Object(c.useRef)(null),s=function(){var e;null===(e=i.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})};return Object(c.useImperativeHandle)(t,(function(){return{scrollToBottom:s}})),Object(m.jsxs)("div",{className:"list-item",children:[null===(n=e.data)||void 0===n?void 0:n.map((function(t,n){return Object(m.jsx)(d.a,{children:Object(m.jsx)("button",{type:"button",class:"btn btn-primary-outline",onClick:function(){return function(t){e.setSelected(t)}(n)},children:Object(m.jsxs)("h6",{className:e.selected===n?"txt-item-touched":"txt-item",children:[n+1,". ",t.question]})})},t.question)})),Object(m.jsx)("div",{ref:i})]})})),O=i.a.memo(f),h=Object(c.forwardRef)((function(e,t){var n,i,s=Object(c.useRef)(null),a=Object(c.useRef)(null);Object(c.useEffect)((function(){Object(j.a)(a.current)}));var l=function(t){e.onChangeAnswer(t)},o=function(){var e;null===(e=s.current)||void 0===e||e.scrollIntoView({behavior:"smooth"})};return Object(c.useImperativeHandle)(t,(function(){return{scrollToBottom:o}})),Object(m.jsxs)("ul",{className:"list-item-answer",children:[null===e||void 0===e||null===(n=e.data)||void 0===n||null===(i=n[e.selected])||void 0===i?void 0:i.answer.map((function(t,n){return Object(m.jsxs)(u.a,{style:{padding:0,width:"100%"},children:[Object(m.jsx)(d.a,{style:{padding:0},lg:2,md:3,sm:3,xl:2,xs:12,xxl:2,children:Object(m.jsxs)("h6",{className:"txt-item-bold",children:["Option ",n+1]})}),Object(m.jsxs)(d.a,{className:"p-0",lg:10,md:9,sm:9,xl:10,xs:12,xxl:10,children:[Object(m.jsx)("textarea",{ref:a,style:{maxHeight:"75px",minHeight:"38px",width:"100%",resize:"none",boxSizing:"border-box",fontSize:"1rem",textCombineUpright:"center"},placeholder:"Type option",rows:1,value:t.option,onFocus:function(){return function(t){e.setSelectedOption(t)}(n)},onChange:l}),Object(m.jsx)("div",{style:{alignItems:"center",justifyContent:"center",display:"flex"}})]})]})})),Object(m.jsx)("div",{ref:s})]})})),g=i.a.memo(h),x=n(11);n(16);function v(e){var t,n,i,s,a,l,r=Object(c.useRef)(null),f=Object(c.useRef)(null),O=Object(c.useRef)(null),h=Object(c.useState)(),v=Object(o.a)(h,2),p=v[0],y=v[1];Object(c.useEffect)((function(){Object(j.a)(r.current)}));var S=function(t){if(t.target.files&&t.target.files[0]){var n=new FileReader;n.onload=function(t){e.onAddImg(t.target.result)},n.readAsDataURL(t.target.files[0])}},N=function(){var e;null===(e=f.current)||void 0===e||e.click()},C=function(t){e.onDeleteImg(),t()};return Object(m.jsxs)("div",{children:[Object(m.jsxs)("ul",{className:"question-item",children:[Object(m.jsxs)("h6",{className:"txt-title",children:["Design question ",e.selected+1]}),Object(m.jsxs)(u.a,{style:{padding:0},classname:"form-item",children:[Object(m.jsx)(d.a,{style:{padding:0},lg:2,md:3,sm:3,xl:2,xs:12,xxl:2,children:Object(m.jsx)("h6",{className:"txt-item-bold",children:"Question"})}),Object(m.jsxs)(d.a,{className:"p-0",lg:10,md:9,sm:9,xl:10,xs:12,xxl:10,children:[Object(m.jsx)("textarea",{ref:r,style:{maxHeight:"75px",minHeight:"38px",width:"95%",resize:"none",boxSizing:"border-box",fontSize:"1rem",textCombineUpright:"center"},placeholder:"Type question",rows:1,onChange:e.onChangeQuestion,value:null===(t=e.data)||void 0===t||null===(n=t[e.selected])||void 0===n?void 0:n.question}),(null===(i=e.data)||void 0===i||null===(s=i[e.selected])||void 0===s?void 0:s.img)?Object(m.jsxs)("div",{class:"d-flex align-items-center flex-column",children:[Object(m.jsx)("img",{style:{maxHeight:"20vh"},src:null===(a=e.data)||void 0===a||null===(l=a[e.selected])||void 0===l?void 0:l.img,alt:"description"}),Object(m.jsxs)("div",{class:"d-flex justify-content-center",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"file",accept:"image/*",onChange:S,className:"d-none",id:"group_image",ref:f}),Object(m.jsx)(b.a,{className:"btn btn-primary bg-gradient m-2",onClick:N,variant:"secondary",children:"Edit"})]}),Object(m.jsx)(x.a,{trigger:Object(m.jsx)(b.a,{className:"btn btn-primary bg-gradient m-2",onClick:C,variant:"danger",children:"Delete"}),modal:!0,children:function(e){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h6",{className:"txt-title",children:"Are you sure to delete this image?"}),Object(m.jsx)(b.a,{style:{fontSize:10,fontWeight:"bold",width:70},type:"submit",onClick:function(){return C(e)},children:"Yes"}),Object(m.jsx)(b.a,{style:{fontSize:10,fontWeight:"bold",width:70,marginLeft:10},variant:"secondary",onClick:function(){return e()},children:"No"})]})}})]})]}):Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"file",accept:"image/*",onChange:S,className:"d-none",id:"group_image",ref:f}),Object(m.jsx)(b.a,{className:"btn btn-primary bg-gradient m-2",onClick:N,children:"Add Image"})]})]})]})]}),Object(m.jsx)(g,{data:e.data,selected:e.selected,setSelectedOption:function(t){e.setSelectedOption(t),y(t)},onChangeAnswer:e.onChangeAnswer,ref:O}),Object(m.jsxs)(u.a,{className:"two-button-container",children:[Object(m.jsx)(d.a,{className:"button-left",children:Object(m.jsx)(b.a,{style:{fontSize:10,fontWeight:"bold"},type:"submit",onClick:function(){e.onAddAnswer(),setTimeout((function(){O.current.scrollToBottom()}),200)},children:"ADD"})}),Object(m.jsx)(d.a,{className:"button-right",children:Object(m.jsx)(x.a,{trigger:Object(m.jsx)(b.a,{style:{fontSize:10,fontWeight:"bold"},type:"submit",variant:"danger",children:"DELETE"}),modal:!0,children:function(t){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h6",{className:"txt-title",children:["Are you sure to delete option number ",p+1,"?"]}),Object(m.jsx)(b.a,{style:{fontSize:10,fontWeight:"bold",width:70},type:"submit",onClick:function(){return function(t){e.onDeleteAnswer(),t()}(t)},children:"Yes"}),Object(m.jsx)(b.a,{style:{fontSize:10,fontWeight:"bold",width:70,marginLeft:10},variant:"secondary",onClick:function(){return t()},children:"No"})]})}})})]})]})}var p=i.a.memo(v),y=n(8),S={question:"",answer:[{option:""}],img:""};var N=function(){var e=Object(c.useRef)(null),t=Object(c.useRef)(null),n=Object(c.useState)([S]),i=Object(o.a)(n,2),s=i[0],a=i[1],f=Object(c.useState)(!0),h=Object(o.a)(f,2),g=(h[0],h[1],Object(c.useState)(0)),v=Object(o.a)(g,2),N=v[0],C=v[1],w=Object(c.useState)(0),k=Object(o.a)(w,2),I=k[0],R=k[1],A=Object(y.useReactMediaRecorder)({audio:!0}),z=(A.status,A.startRecording,A.stopRecording,A.mediaBlobUrl,Object(y.useReactMediaRecorder)({video:!0}));z.statusVideo,z.startRecordingVideo,z.stopRecordingVideo,z.mediaBlobUrlVideo,Object(c.useEffect)((function(){var e=JSON.parse(localStorage.getItem("data"));e&&0!==(null===e||void 0===e?void 0:e.length)?a(e):a([S])}),[]),Object(c.useEffect)((function(){Object(j.a)(e.current)}));var D=Object(c.useCallback)((function(e){C(e)}),[]),E=Object(c.useCallback)((function(){var e=S,n=Object(l.a)(s);n.push(e),a(n),localStorage.setItem("data",JSON.stringify(n)),C(n.length-1),setTimeout((function(){t.current.scrollToBottom()}),200)}),[s]),q=Object(c.useCallback)((function(e){var t,n=Object(l.a)(s);n.splice(N,1),0===(null===(t=n)||void 0===t?void 0:t.length)?(a(n=[S]),localStorage.setItem("data",JSON.stringify(n))):(a(n),localStorage.setItem("data",JSON.stringify(n))),e()}),[N,s]),J=Object(c.useCallback)((function(e){var t=Object(l.a)(s);t[N].question=e.nativeEvent.target.value,a(t),localStorage.setItem("data",JSON.stringify(t))}),[s,N]),T=Object(c.useCallback)((function(e){var t=Object(l.a)(s);t[N].answer[I].option=e.nativeEvent.target.value,a(t),localStorage.setItem("data",JSON.stringify(t))}),[s,N,I]),W=Object(c.useCallback)((function(){var e=Object(l.a)(s);if(e[N].answer.length<6){e[N].answer.push({option:""}),a(e),localStorage.setItem("data",JSON.stringify(e))}}),[s,N]),B=Object(c.useCallback)((function(){var e=Object(l.a)(s);e[N].answer.splice(I,1),a(e),localStorage.setItem("data",JSON.stringify(e))}),[s,N,I]),L=Object(c.useCallback)((function(e){R(e)}),[]),H=Object(c.useCallback)((function(){var e=Object(l.a)(s);e[N].img=null,a(e),localStorage.setItem("data",JSON.stringify(e))}),[s,N,I]),F=Object(c.useCallback)((function(e){var t=Object(l.a)(s);t[N].img=e,a(t),localStorage.setItem("data",JSON.stringify(t))}),[s,N,I]);return Object(m.jsx)(r.a,{fluid:!0,className:"p-0",children:Object(m.jsx)(d.a,{children:Object(m.jsxs)(u.a,{children:[Object(m.jsx)("div",{className:"left-pane col-sm-4 ".concat(N?"d-none d-md-block":""),style:{backgroundColor:"rgb(0, 187, 255)"},children:Object(m.jsxs)("div",{className:"left-item",children:[Object(m.jsx)("h6",{className:"txt-title",style:{paddingLeft:20},children:"Select your questions"}),Object(m.jsx)(O,{ref:t,data:s,selected:N,setSelected:D}),Object(m.jsxs)(u.a,{className:"two-button-container",children:[Object(m.jsx)(d.a,{className:"button-left",children:Object(m.jsx)(b.a,{style:{fontSize:10,fontWeight:"bold",width:70},type:"submit",onClick:E,children:"ADD"})}),Object(m.jsx)(d.a,{className:"button-right",children:Object(m.jsx)(x.a,{trigger:Object(m.jsx)(b.a,{style:{fontSize:10,fontWeight:"bold",width:70},type:"submit",onClick:E,variant:"danger",children:"DELETE"}),modal:!0,children:function(e){return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h6",{className:"txt-title",children:["Are you sure to delete question number ",N,"?"]}),Object(m.jsx)(b.a,{style:{fontSize:10,fontWeight:"bold",width:70},type:"submit",onClick:function(){return q(e)},children:"Yes"}),Object(m.jsx)(b.a,{style:{fontSize:10,fontWeight:"bold",width:70,marginLeft:10},variant:"secondary",onClick:function(){return e()},children:"No"})]})}})})]})]})}),Object(m.jsxs)("div",{className:"right-pane col-sm-8 ".concat(N?"":"d-none d-md-block"),style:{backgroundColor:"rgb(182, 221, 242)",height:"100vh"},children:[Object(m.jsx)("button",{className:"m-2 bg-gradient rounded btn btn-default d-sm-block d-md-none",onClick:function(){C(0)},children:"Back"}),Object(m.jsx)("div",{className:"right-item",children:Object(m.jsx)(p,{data:s,selected:N,onChangeQuestion:J,onAddAnswer:W,onDeleteAnswer:B,setSelectedOption:L,onChangeAnswer:T,onAddImg:F,onDeleteImg:H})})]})]})})})},C=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),i(e),s(e),a(e)}))};n(25);a.a.render(Object(m.jsx)(i.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),C()}},[[26,1,2]]]);
//# sourceMappingURL=main.3eff5eda.chunk.js.map