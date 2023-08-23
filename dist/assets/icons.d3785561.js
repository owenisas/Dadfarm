import{az as k,aQ as S,K as T,aR as B,ar as A,L as l,a as C,as as I,e as i,ax as P,aS as L,aT as N,o as p,ae as v,a7 as h,af as R,ag as $,w as c,a6 as j,x as z,s as b,t as D,a5 as M,_ as U}from"./index.90141216.js";const E=k()({name:"VTooltip",inheritAttrs:!1,props:{id:String,modelValue:Boolean,text:String,location:{type:String,default:"end"},origin:{type:String,default:"auto"},...S({transition:!1})},emits:{"update:modelValue":e=>!0},setup(e,s){let{attrs:r,slots:a}=s;const t=T(e,"modelValue"),{scopeId:x}=B(),V=A(),d=l(()=>e.id||`v-tooltip-${V}`),u=C(),_=l(()=>e.location.split(" ").length>1?e.location:e.location+" center"),w=l(()=>e.origin==="auto"||e.origin==="overlap"||e.origin.split(" ").length>1||e.location.split(" ").length>1?e.origin:e.origin+" center"),y=l(()=>e.transition?e.transition:t.value?"scale-transition":"fade-transition");return I(()=>i(L,P({modelValue:t.value,"onUpdate:modelValue":o=>t.value=o,ref:u,class:["v-tooltip"],id:d.value,transition:y.value,absolute:!0,locationStrategy:"connected",scrollStrategy:"reposition",location:_.value,origin:w.value,"min-width":0,offset:10,scrim:!1,persistent:!0,"open-on-click":!1,"open-on-hover":!0,"close-on-back":!1,role:"tooltip",eager:!0,activatorProps:{"aria-describedby":d.value}},x,r),{activator:a.activator,default:function(){var g;for(var o,m=arguments.length,f=new Array(m),n=0;n<m;n++)f[n]=arguments[n];return(g=(o=a.default)==null?void 0:o.call(a,...f))!=null?g:e.text}})),N({},u)}}),F={class:"d-flex align-center flex-wrap"},K={class:"text-center"},Q={__name:"icons",setup(e){const s=["mdi-ab-testing","mdi-abacus","mdi-abjad-arabic","mdi-abjad-hebrew","mdi-abugida-devanagari","mdi-abugida-thai","mdi-access-point","mdi-access-point-check","mdi-access-point-minus","mdi-access-point-network","mdi-access-point-network-off","mdi-access-point-off","mdi-access-point-plus","mdi-access-point-remove","mdi-account-alert-outline","mdi-account-arrow-left-outline","mdi-account-arrow-right-outline","mdi-account-box-multiple-outline","mdi-account-box-outline","mdi-account-cancel-outline","mdi-account-cash-outline","mdi-account-check-outline","mdi-account-child-outline","mdi-account-circle-outline","mdi-account-clock-outline","mdi-account-cog-outline","mdi-account-details-outline","mdi-alarm-light-outline","mdi-alert-box-outline","mdi-alert-circle-check-outline","mdi-alert-decagram-outline","mdi-alert-minus-outline","mdi-alert-outline","mdi-alert-plus-outline","mdi-check-outline","mdi-clipboard-outline","mdi-clipboard-play-outline","mdi-close-outline","mdi-cloud-check-outline","mdi-cloud-download-outline","mdi-cog-outline","mdi-compass-off-outline","mdi-contactless-payment-circle-outline","mdi-crown-outline","mdi-delete-outline","mdi-diamond-outline","mdi-email-open-outline","mdi-emoticon-happy-outline","mdi-file-multiple-outline","mdi-flask-empty-outline","mdi-fire","mdi-logout","mdi-playlist-plus","mdi-select-drag"];return(r,a)=>(p(),v("div",null,[h("div",F,[(p(),v(R,null,$(s,t=>i(M,{key:t,class:"mb-6 me-6"},{default:c(()=>[i(j,{class:"py-3 px-4"},{default:c(()=>[i(z,{size:"30",icon:t},null,8,["icon"])]),_:2},1024),i(E,{location:"top",activator:"parent"},{default:c(()=>[b(D(t),1)]),_:2},1024)]),_:2},1024)),64))]),h("div",K,[i(U,{href:"https://materialdesignicons.com/",rel:"noopener noreferrer",color:"primary",target:"_blank"},{default:c(()=>[b(" View All Material Design Icons ")]),_:1})])]))}};export{Q as default};