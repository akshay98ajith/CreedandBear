"use strict";(self.webpackChunkcreedbear=self.webpackChunkcreedbear||[]).push([[129],{4129:function(e,n,r){r.r(n);var t=r(1413),s=(r(2791),r(1134)),u=r(1687),i=r(184);n.default=function(){var e=(0,s.cI)(),n=e.register,r=e.handleSubmit;console.log("username",u.rC[1].username),console.log("password",u.rC[1].password);return(0,i.jsx)("div",{className:"login",children:(0,i.jsxs)("div",{className:"card",children:[(0,i.jsxs)("div",{children:[(0,i.jsxs)("h5",{children:["username: ",u.rC[1].username]}),(0,i.jsxs)("h5",{children:["password: ",u.rC[1].password]})]}),(0,i.jsxs)("form",{className:"loginForm",onSubmit:r((function(e){if(console.log(e),e.username===u.rC[1].username&&e.password===u.rC[1].password){var n=e.username+"token";sessionStorage.setItem("token",n),sessionStorage.setItem("username",e.username),window.location.reload(),console.log("Successfully logged in")}else alert("validation failed")})),children:[(0,i.jsxs)("label",{children:[(0,i.jsx)("span",{children:"Username"}),(0,i.jsx)("input",(0,t.Z)((0,t.Z)({type:"text"},n("username",{requierd:!0})),{},{required:!0}))]}),(0,i.jsxs)("label",{children:[(0,i.jsx)("span",{children:"Password"}),(0,i.jsx)("input",(0,t.Z)((0,t.Z)({type:"password"},n("password",{requierd:!0})),{},{required:!0}))]}),(0,i.jsx)("div",{className:"tac",children:(0,i.jsx)("button",{className:"loginBtn",type:"submit",children:"Submit"})})]})]})})}},1687:function(e,n,r){r.d(n,{ER:function(){return l},F9:function(){return c},Pj:function(){return m},TY:function(){return d},kX:function(){return f},pp:function(){return p},rC:function(){return a}});var t=r(5987),s=r(9142),u=r(4942),i=r(1413),o=r(155),a={1:{id:1,avatar:"https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/818.jpg",first_name:"Super",last_name:"User",username:"superuser",email:"super@super.com",phone:"11111111",password:"superuser",address:o.We.address.city()}},c=function(){return new Promise((function(e,n){if(!a)return setTimeout((function(){return n(new Error("Users not found"))}),250);setTimeout((function(){return e(Object.values(a))}),250)}))},d=function(e){return new Promise((function(n,r){var t=a[e];if(!t)return setTimeout((function(){return r(new Error("User not found"))}),250);setTimeout((function(){return n(t)}),250)}))},m=function(e){return new Promise((function(n,r){var t=o.We.datatype.uuid(),s=o.We.internet.avatar(),c=(0,i.Z)({id:t,avatar:s},e);a=(0,i.Z)((0,i.Z)({},a),{},(0,u.Z)({},t,c)),setTimeout((function(){return n(!0)}),250)}))},l=function(){return new Promise((function(e,n){var r=o.We.datatype.uuid(),t={id:r,first_name:o.We.name.firstName(),last_name:o.We.name.lastName(),email:o.We.internet.email(),avatar:o.We.internet.avatar(),address:o.We.address.city(),phone:o.We.phone.number(),password:o.We.internet.password(),username:o.We.internet.userName()};a=(0,i.Z)((0,i.Z)({},a),{},(0,u.Z)({},r,t)),setTimeout((function(){return e(!0)}),250)}))},f=function(e){return new Promise((function(n,r){var u=a,o=u[e],c=(0,t.Z)(u,[e].map(s.Z));return o?(a=(0,i.Z)({},c),setTimeout((function(){return n(!0)}),250)):setTimeout((function(){return r(new Error("User not found"))}),250)}))},p=function(e,n){return new Promise((function(r,t){return a[e]?(a[e]=(0,i.Z)((0,i.Z)({},a[e]),n),setTimeout((function(){return r(!0)}),250)):setTimeout((function(){return t(new Error("User not found"))}),250)}))}}}]);
//# sourceMappingURL=129.9c9ec920.chunk.js.map