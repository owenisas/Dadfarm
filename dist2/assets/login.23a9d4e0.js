import{aB as T,b8 as L,a as m,F as I,E as f,N as M,r as B,o as F,x as N,b as e,w as a,aW as R,y as o,z as c,aX as U,q as _,aE as b,aH as j,aa as E,a7 as n,aF as h,G as P,u as V,a8 as H,e as g,aC as S}from"./index.d2fcbbd6.js";import{a as D,b as W,l as $,_ as q,g as z,s as G}from"./suprised.63b7e474.js";import{b as w}from"./route-block.023af118.js";import{V as O}from"./VForm.ac120bb6.js";import{V as X}from"./VCheckbox.176b8183.js";const A={class:"auth-wrapper d-flex align-center justify-center pa-4"},J={class:"d-flex"},K=["innerHTML"],Q=o("h5",{class:"text-h5 font-weight-semibold mb-1"}," Welcome to Marketplace! \u{1F44B}\u{1F3FB} ",-1),Y=o("p",{class:"mb-0"}," Please sign-in to your account and start the your online store! ",-1),Z={class:"d-flex align-center justify-space-between flex-wrap mt-1 mb-4"},ee=o("a",{class:"ms-2 mb-1",href:"javascript:void(0)"}," Forgot Password? ",-1),se=o("span",null,"New on our platform?",-1),ae=o("span",{class:"mx-4"},"or",-1),te={__name:"login",setup(oe){const u=T(),x=L(),p=m(!1),i=m(""),l=m({email:"",password:"",remember:!1}),k=async()=>{try{const s=await S.post("/login",l.value);if(s.status===200){const t=s.data.session_token;localStorage.setItem("session_token",t),u.commit("setLoggedIn",!0),u.commit("setUser",s.data.username);const v=f(()=>!!u.state.isLoggedIn),r=f(()=>u.state.user);await x.push("/"),alert(s.data.message)}else s.status===401&&(console.log(s,s.data),p.value=!0,i.value=s.data.message)}catch(s){s.response&&s.response.status===401?(console.log(s.response.data),s.value=!0,i.value=s.response.data.message):console.error("There was a problem with the fetch operation:",s)}},y=I(),C=f(()=>y.global.name.value==="light"?D:W),d=m(!1);return M(()=>{window.location.reload()}),(s,t)=>{const v=B("RouterLink");return F(),N("div",A,[e(H,{class:"auth-card pa-4 pt-7","max-width":"448"},{default:a(()=>[e(R,{class:"justify-center"},{prepend:a(()=>[o("div",J,[o("div",{innerHTML:c($)},null,8,K)])]),default:a(()=>[e(U,{class:"font-weight-semibold text-2xl text-uppercase"},{default:a(()=>[_(" Owenisas ")]),_:1})]),_:1}),e(b,{class:"pt-2"},{default:a(()=>[Q,Y]),_:1}),e(b,null,{default:a(()=>[e(O,{onSubmit:t[4]||(t[4]=j(()=>{},["prevent"]))},{default:a(()=>[e(E,null,{default:a(()=>[e(n,{cols:"12"},{default:a(()=>[e(h,{modelValue:l.value.email,"onUpdate:modelValue":t[0]||(t[0]=r=>l.value.email=r),label:"Email",type:"email",error:p.value,"error-messages":i.value},null,8,["modelValue","error","error-messages"])]),_:1}),e(n,{cols:"12"},{default:a(()=>[e(h,{modelValue:l.value.password,"onUpdate:modelValue":t[1]||(t[1]=r=>l.value.password=r),label:"Password",error:p.value,"error-messages":i.value,type:d.value?"text":"password","append-inner-icon":d.value?"mdi-eye-off-outline":"mdi-eye-outline","onClick:appendInner":t[2]||(t[2]=r=>d.value=!d.value)},null,8,["modelValue","error","error-messages","type","append-inner-icon"]),o("div",Z,[e(X,{modelValue:l.value.remember,"onUpdate:modelValue":t[3]||(t[3]=r=>l.value.remember=r),label:"Remember me"},null,8,["modelValue"]),ee]),e(P,{block:"",type:"submit",onClick:k},{default:a(()=>[_(" Login ")]),_:1})]),_:1}),e(n,{cols:"12",class:"text-center text-base"},{default:a(()=>[se,e(v,{class:"text-primary ms-2",to:{name:"register"}},{default:a(()=>[_(" Create an account ")]),_:1})]),_:1}),e(n,{cols:"12",class:"d-flex align-center"},{default:a(()=>[e(V),ae,e(V)]),_:1}),e(n,{cols:"12",class:"text-center"},{default:a(()=>[e(q)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),e(g,{class:"auth-footer-start-tree d-none d-md-block",src:c(z),width:380},null,8,["src"]),e(g,{src:c(G),class:"auth-footer-end-tree d-none d-md-block",width:350},null,8,["src"]),e(g,{class:"auth-footer-mask d-none d-md-block",src:c(C)},null,8,["src"])])}}};typeof w=="function"&&w(te);export{te as default};