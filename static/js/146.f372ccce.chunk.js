(self.webpackChunknote=self.webpackChunknote||[]).push([[146],{1784:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return P}});var r=n(2791),o=n(7689),s=n(4165),a=n(5861),i=n(6459),c=n(626),u=n(9434),l=n(6433),d=n(6972),f=n(5573),p=function(e){return l.pbkdf2Sync(e,d.Z.getValue(f.Z.REACT_APP_SALT),2048,32,"sha512").toString("hex")},v={LOGIN:"/login",AUTHENTICATE:{PREFIX:"users",NOTES:"/notes"},HOME:"/"},m=function(){return"/".concat(v.AUTHENTICATE.PREFIX).concat(v.AUTHENTICATE.NOTES)},h=n(184),x=function(e){(0,i.Z)(e);var t=(0,u.I0)(),n=(0,o.s0)(),r=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(r){var o,a,i,u,l,d,f;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),o=document.forms[0],a=o.user_name,i=o.password,u=a.value,l=i.value,d=p(l),e.t0=t,e.next=8,(0,c.x)({user_name:u,password:d});case 8:return e.t1=e.sent,e.next=11,(0,e.t0)(e.t1);case 11:if(!(f=e.sent).error){e.next=15;break}return alert(f.error.message),e.abrupt("return");case 15:n(m());case 16:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsx)("div",{className:"login",children:(0,h.jsxs)("form",{className:"form",onSubmit:r,children:[(0,h.jsx)("input",{className:"input-user-name",name:"user_name",placeholder:"user name",required:!0}),(0,h.jsx)("input",{className:"input-password",name:"password",type:"password",placeholder:"password",required:!0}),(0,h.jsx)("button",{type:"submit",children:"Login"})]})})},j=n(6856),g=n(71),N=n(1759),C=n(7537),E=function(){var e=(0,u.I0)(),t=(0,u.v9)((function(e){return e.notesReducer.notes})),n=(0,u.v9)((function(e){var t;return null===(t=e.notesReducer.currentNote)||void 0===t?void 0:t._id})),r=0===t.length?"notes-delete-empty":"";return(0,h.jsxs)("div",{className:"notes-toolbar-container",children:[(0,h.jsx)(j.F1H,{onClick:function(){e((0,N.f_)(n))},className:"notes-cursor ".concat(r),"aria-disabled":!0}),(0,h.jsx)(g.orQ,{onClick:function(){var t=C.H;e((0,N.kT)(t))},className:"notes-cursor"})]})},T=function(e){var t=e.item,n=(0,u.I0)(),o=(0,u.v9)((function(e){return e.notesReducer.currentNote})),s=t.text,a=t.created_at,i=t.title,c=t._id,l=t.updated_at,d=(0,r.useCallback)((function(){n((0,N.iV)(t))}),[c,l]),f=function(e){return e.length>25?"".concat(e.substring(0,25),"..."):e},p=(null===o||void 0===o?void 0:o._id)===c?"active":"";return(0,h.jsxs)("div",{className:"notes-items notes-cursor ".concat(p),onClick:d,children:[(0,h.jsx)("h4",{className:"notes-margin-0 notes-ff",children:f(i)}),(0,h.jsxs)("div",{className:"notes-body",children:[(0,h.jsx)("span",{className:"notes-margin-0",children:a}),(0,h.jsx)("span",{className:"notes-margin-0 notes-ml-10 notes-cl-gray",children:f(s)})]})]})},k=function(e){(0,i.Z)(e);var t=(0,u.I0)();(0,r.useEffect)((function(){t((0,N.Kk)())}),[]);var n=(0,u.v9)((function(e){return e.notesReducer.notes}));return(0,h.jsxs)("div",{className:"notes-wrapper",children:[(0,h.jsx)("div",{className:"",children:(0,h.jsx)(E,{})}),(0,h.jsx)("div",{className:"notes-container",children:(0,h.jsx)("div",{children:n.map((function(e){return(0,h.jsx)(T,{item:e},e._id)}))})})]})},A=n(885),S=n(2010),b=n(6183),y=(n(3321),n(5088),(0,n(8840).Z)()),w="header-one",I=function(e){var t=e.id,n=e.editorState,o=e.onChange,s=(0,r.useCallback)((function(e){e.getCurrentContent().equals(n.getCurrentContent())||o(a(e))}),[t]),a=function(e){var t=e.getCurrentContent().getBlockMap().first().getKey();return e.getSelection().getAnchorKey()===t!==(S.RichUtils.getCurrentBlockType(e)===w)?S.RichUtils.toggleBlockType(e,w):e};return(0,h.jsx)(b.ZP,{editorState:n,onChange:s,plugins:[y]})},Z=n(5095),_=n.n(Z),R=function(e){var t=e.editorState,n=e.currentNote,o=e.onChangeEditor,s=n._id,a=(0,u.I0)();(0,r.useEffect)((function(){if(n.content){var e=S.EditorState.createWithContent((0,S.convertFromRaw)(JSON.parse(n.content)));o(e)}else o(S.EditorState.createEmpty())}),[s]);var i=_()((function(e){var t=c(e);a((0,N.Qk)(t))}),100),c=function(e){var t,n=(0,S.convertToRaw)(e.getCurrentContent());return n&&0!==n.blocks.length?{title:n.blocks[0].text||C.H.title,text:(null===(t=n.blocks[1])||void 0===t?void 0:t.text)||C.H.text,content:JSON.stringify(n),_id:s}:null};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("label",{className:"editor-lbl-created-at",children:null===n||void 0===n?void 0:n.updated_at}),(0,h.jsx)("div",{className:"editor-wrap-draftjs",children:(0,h.jsx)(I,{id:s,editorState:t,onChange:function(e){i(e),o(e)}})})]})},H=n(9126),U=function(e){var t=e.editorState,n=e.onChangeEditor,r=function(e,t){if(e.stopPropagation(),e.preventDefault(),0!==e.target.files.length){var n=e.target.files[0];o(n,(function(e){t(e)}))}},o=function(){var e=(0,a.Z)((0,s.Z)().mark((function e(t,n){var r;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(r=new FileReader).readAsDataURL(t),r.onload=function(){n(r.result)},r.onerror=function(e){return e};case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=function(e,t){var n=e.getCurrentContent().createEntity("image","IMMUTABLE",{src:t}),r=n.getLastCreatedEntityKey(),o=S.EditorState.set(e,{currentContent:n});return S.AtomicBlockUtils.insertAtomicBlock(o,r," ")};return(0,h.jsxs)("div",{className:"editor-toolbar-container",children:[(0,h.jsx)("label",{htmlFor:"file",children:(0,h.jsx)(H.jnY,{className:"editor-cursor"})}),(0,h.jsx)("input",{onChange:function(e){r(e,(function(e){var r=i(t,e);n(r)}))},type:"file",id:"file",style:{display:"none"}})]})},F=function(e){(0,i.Z)(e);var t=(0,u.v9)((function(e){return e.notesReducer.currentNote})),n=(0,r.useState)((function(){return S.EditorState.createEmpty()})),o=(0,A.Z)(n,2),s=o[0],a=o[1],c=function(e){a(e)};return(0,h.jsxs)("div",{className:"editor-container",children:[(0,h.jsx)("div",{children:(0,h.jsx)(U,{onChangeEditor:c,editorState:s})}),t&&t._id&&(0,h.jsx)(R,{currentNote:t,onChangeEditor:c,editorState:s})]})},O=function(){return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"app-wrap-note",children:(0,h.jsx)(k,{})}),(0,h.jsx)("div",{className:"app-wrap-editor",children:(0,h.jsx)(F,{})})]})},L=function(){return(0,h.jsx)(o.Z5,{children:(0,h.jsx)(o.AW,{path:v.AUTHENTICATE.NOTES,element:(0,h.jsx)(O,{})})})};var P=function(){return(0,h.jsxs)(o.Z5,{children:[(0,h.jsx)(o.AW,{path:"".concat(v.AUTHENTICATE.PREFIX,"/*"),element:(0,h.jsx)(L,{})}),(0,h.jsx)(o.AW,{path:v.LOGIN,element:(0,h.jsx)(x,{})}),(0,h.jsx)(o.AW,{path:v.HOME,element:(0,h.jsx)(x,{})})]})}},950:function(){},6601:function(){},9214:function(){},8623:function(){},7748:function(){},5568:function(){},6619:function(){},7108:function(){},2361:function(){},4616:function(){}}]);
//# sourceMappingURL=146.f372ccce.chunk.js.map