import{a as u,r as d,o as m,c as _,w as e,a7 as r,t as n,e as t,p,f as i,aH as f,_ as h,x as v,a5 as V}from"./index.90141216.js";const g={class:"text-subtitle-2 text-no-wrap"},k={class:"ms-2"},B={__name:"MobilePostPreview",props:{item:{type:Object,required:!0}},setup(l){const a=l,o=u("mdi-heart-outline"),c=()=>{o.value=o.value==="mdi-heart-outline"?"mdi-heart":"mdi-heart-outline"};return(x,w)=>{const s=d("RouterLink");return m(),_(V,{color:"grey-lighten-1"},{title:e(()=>[r("span",g,n(a.item.user),1)]),prepend:e(()=>[t(s,{to:`/user/${a.item.user}`},{default:e(()=>[t(p,{rounded:"lg",size:"30"},{default:e(()=>[t(i,{src:a.item.avatar},null,8,["src"])]),_:1})]),_:1},8,["to"])]),default:e(()=>[t(s,{to:a.item.redirect},{default:e(()=>[t(i,{src:a.item.preview},null,8,["src"])]),_:1},8,["to"]),t(f,null,{default:e(()=>[t(h,{onClick:c},{default:e(()=>[t(v,{icon:o.value,color:"error"},null,8,["icon"]),r("span",k,n(a.item.likes),1)]),_:1})]),_:1})]),_:1})}}};export{B as _};