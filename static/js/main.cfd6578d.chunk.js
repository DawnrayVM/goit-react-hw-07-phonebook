(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{14:function(t,e,n){t.exports={title:"Phonebook_title__tF3MX",container:"Phonebook_container__3e6O0",formItem:"Phonebook_formItem__2vma7",phonebookBtn:"Phonebook_phonebookBtn__1v8Jq"}},65:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n.n(c),o=n(17),r=n.n(o),i=n(8),s=n(16),b=n.n(s),u=n(3),l=Object(u.b)("contacts/getContactsRequest"),d=Object(u.b)("contacts/getContactsSuccess"),j=Object(u.b)("contacts/getContactsFail"),f=Object(u.b)("contacts/addContactRequest"),m=Object(u.b)("contacts/addContactSuccess"),h=Object(u.b)("contacts/addContactFail"),p=Object(u.b)("contacts/deleteContactRequest"),O=Object(u.b)("contacts/deleteContactSuccess"),x=Object(u.b)("contacts/deleteContactFail"),g=Object(u.b)("contactsFilter/filterContact");b.a.defaults.baseURL="http://localhost:4040";var v,C=n(9),k=n(21),w=n(34),y=n(14),S=n.n(y),N=n(2),F={name:"",number:""},_=Object(i.b)((function(t){return{contacts:t.contacts}}),(function(t){return{onSubmitForm:function(e){return t(function(t){return function(e){e(f()),b.a.post("/contacts",t).then((function(t){var n=t.data;return e(m(n))})).catch((function(t){return e(h(t))}))}}(e))}}}))((function(t){var e=t.onSubmitForm,n=Object(c.useState)(F),a=Object(w.a)(n,2),o=a[0],r=a[1],i=function(t){r(Object(k.a)(Object(k.a)({},o),{},Object(C.a)({},t.currentTarget.name,t.currentTarget.value)))};return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h2",{className:S.a.title,children:"Phonebook"}),Object(N.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(o),r(F)},className:S.a.container,children:[Object(N.jsxs)("label",{className:S.a.formItem,children:["Name:",Object(N.jsx)("input",{type:"text",name:"name",value:o.name,onChange:i,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(N.jsxs)("label",{className:S.a.formItem,children:["Number:",Object(N.jsx)("input",{type:"tel",name:"number",pattern:"(\\+?( |-|\\.)?\\d{1,2}( |-|\\.)?)?(\\(?\\d{3}\\)?|\\d{3})( |-|\\.)?(\\d{3}( |-|\\.)?\\d{4})",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 11-12 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u0446\u0438\u0444\u0440\u044b, \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043f\u0443\u0437\u0430\u0442\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,value:o.number,onChange:i})]}),Object(N.jsx)("button",{type:"Submit",className:S.a.phonebookBtn,children:"Add contact"})]})]})})),I=n(19),B=Object(I.a)({filterForm:{fontFamily:"Roboto",width:370,marginTop:10,padding:"15px 10px",border:"1px solid rgba(225, 225, 225, 10)",borderRadius:5,boxShadow:"3px 3px 5px 0px rgba(225, 225, 225, 10)"},filterInput:{fontSize:20,width:360}}),R=Object(i.b)((function(t){return{contacts:t.contacts,filter:t.filter}}),(function(t){return{onChange:function(e){return t(g(e.currentTarget.value))}}}))((function(t){var e=t.contacts,n=t.filter,c=t.onChange,a=B();return e.length>0&&Object(N.jsx)("form",{className:a.filterForm,children:Object(N.jsx)("label",{children:Object(N.jsx)("input",{type:"text",value:n,onChange:c,className:a.filterInput})})})})),z=Object(I.a)({contactsList:{flexDirection:"column",fontFamily:"Roboto",fontSize:20,width:370,marginTop:10,padding:"10px 10px",border:"1px solid rgba(225, 225, 225, 10)",borderRadius:5,boxShadow:"3px 3px 5px 0px rgba(225, 225, 225, 10)"},deleteBtn:{display:"block",width:100,borderStyle:"none",fontWeight:500,fontSize:16,color:"white",textDecoration:"none",padding:"5px 10px",borderRadius:3,background:"rgb(64,199,129)",boxShadow:"0 -3px rgb(53,167,110) inset",transition:"0.2s","&:hover":{background:"rgb(53, 167, 110)"},"&:active":{background:"rgb(33,147,90)",boxShadow:"0 3px rgb(33,147,90) inset"}},listItem:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:5,"&:last-child":{marginBottom:0}},listText:{margin:0}}),T=function(t,e){return t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))},A=Object(i.b)((function(t){var e=t.contacts,n=t.filter;return{contacts:T(e,n)}}),(function(t){return{onDelete:function(e){return t((n=e,function(t){t(p()),b.a.delete("/contacts/".concat(n)).then((function(){return t(O(n))})).catch((function(e){t(x(e))}))}));var n}}}))((function(t){var e=t.contacts,n=t.onDelete,c=z();return e.length>0&&Object(N.jsx)("ul",{className:c.contactsList,children:e.map((function(t){var e=t.name,a=t.number,o=t.id;return Object(N.jsxs)("li",{className:c.listItem,children:[Object(N.jsxs)("p",{className:c.listText,children:[e,": ",a]}),Object(N.jsx)("button",{type:"button",onClick:function(){return n(o)},className:c.deleteBtn,children:"Delete"})]},o)}))})})),q=Object(i.b)(null,(function(t){return{getContacts:function(){return t((function(t){t(l()),b.a.get("/contacts").then((function(e){var n=e.data;return t(d(n))})).catch((function(e){t(j(e))}))}))}}}))((function(t){var e=t.getContacts;return Object(c.useEffect)((function(){e()})),Object(N.jsxs)("main",{children:[Object(N.jsx)(_,{}),Object(N.jsx)(R,{}),Object(N.jsx)(A,{})]})})),D=n(10),L=n(12),P=n(33),J=n.n(P),M=Object(u.c)([],(v={},Object(C.a)(v,m,(function(t,e){var n=e.payload;return Object.values(t.map((function(t){return t.name})).includes(n.name)?(alert("Contact with such name already exists"),Object(D.a)(t)):[].concat(Object(D.a)(t),[n]))})),Object(C.a)(v,O,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Object(C.a)(v,d,(function(t,e){var n=e.payload;return Object(D.a)(n)})),v)),Z=Object(u.c)("",Object(C.a)({},g,(function(t,e){return e.payload}))),E=[].concat(Object(D.a)(Object(u.d)({serializableCheck:{ignoredActions:[L.a,L.f,L.b,L.c,L.d,L.e]}})),[J.a]),U=Object(u.a)({reducer:{contacts:M,filter:Z},middleware:E,devTools:!1});r.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(i.a,{store:U,children:Object(N.jsx)(q,{})})}),document.getElementById("root"))}},[[65,1,2]]]);
//# sourceMappingURL=main.cfd6578d.chunk.js.map