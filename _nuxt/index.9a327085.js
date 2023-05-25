import{l as m,p as E,a as N,r as o,c as p,w as l,o as c,e as n,f as i,i as s,q as I,t as b,h as q}from"./entry.a658f261.js";import{g as Z,r as B,A as F}from"./rest.dfaedc67.js";const P={data:()=>({autofocus:!0,loginF:!1,login:1,email:"",snackbar:!1,error:"hello 1",next:"",emailRules:[e=>!!e||"E-mail is required",e=>/^[A-Za-z0-9.#$%^]+@[A-Za-z]+[.][a-z]{2,3}$/.test(e)||"E-mail must be valid"],password:"",passrules:[e=>!!e||"password is required",e=>e.length>5||"Password is invalid"],passView:!1}),computed:{checkEnv(){return"production"},validateU(){return/^[A-Za-z0-9.#$%^]+@[A-Za-z]+[.][a-z]{2,3}$/.test(this.email)}},mounted(){this.valid()},methods:{async valid(){try{const e=await Z();if(e)return e.tid&&typeof e.tid=="number"?m("/sample-design"):!1;console.log("Id is not present")}catch(e){console.log(e)}},async validate(e){if(e==2)if(this.email.length>0&&this.password.length>0)try{let a={Email:this.email,Password:this.password};const d=JSON.parse(await B("login",a));if(d&&await F(a.Email,d.accesseToken,d.roleD,d.cName))return this.auth=E("auth1",()=>!0),m("/sample-design")}catch(a){this.error="Invalid credentials",this.snackbar=!0,console.log(a)}else console.log("can't fill the details"),this.error="Fill the credentials",this.snackbar=!0;else if(e==1)return m("/signup")}}};const T=i("span",{class:"ml-2"},"Apna Slideshow",-1),j={class:"d-flex mx-2 w-100 h-50 align-center bg-grey-darken-4"},D={class:"d-flex align-end justify-center"};function R(e,a,d,h,x,u){const v=o("v-spacer"),y=o("v-img"),V=o("v-system-bar"),k=o("v-card-title"),r=o("v-btn"),f=o("v-card-actions"),g=o("v-card"),_=o("v-text-field"),w=o("v-window-item"),$=o("v-window"),C=o("v-form"),U=o("v-responsive"),A=o("v-container"),S=o("v-snackbar"),z=o("v-app");return c(),p(z,null,{default:l(()=>[n(V,null,{default:l(()=>[n(v),n(y,{src:"/icon.png","max-width":"25px",alt:"logo of company","max-height":"25px"}),T,n(v)]),_:1}),n(A,null,{default:l(()=>[n(g,{class:"d-flex mt-8 align-center bg-grey-darken-4"},{default:l(()=>[i("div",j,[n(k,{class:"font-size-2"},{default:l(()=>[s("Sign In")]),_:1})]),n(f,null,{default:l(()=>[n(r,{modelValue:e.next,"onUpdate:modelValue":a[0]||(a[0]=t=>e.next=t),"v-if":u.checkEnv==="development",class:"h-300 bg-skyblue-lighten-2",variant:"tonal",onClick:a[1]||(a[1]=t=>u.validate(1))},{default:l(()=>[s(" Sign Up ")]),_:1},8,["modelValue","v-if"])]),_:1})]),_:1}),n(g,{class:"d-flex align-center h-75 mt-8"},{default:l(()=>[n(U,{class:"my-2 mx-8"},{default:l(()=>[n(C,{ref:"loginF",onSubmit:I(t=>!0,["prevent"])},{default:l(()=>[n($,{modelValue:e.login,"onUpdate:modelValue":a[6]||(a[6]=t=>e.login=t)},{default:l(()=>[n(w,{value:1},{default:l(()=>[i("div",null,[n(_,{modelValue:e.email,"onUpdate:modelValue":a[2]||(a[2]=t=>e.email=t),ref:"emailr",autofocus:e.autofocus,"prepend-inner-icon":"mdi-account-arrow-right",rules:e.emailRules,label:"Email Id",required:""},null,8,["modelValue","autofocus","rules"])])]),_:1}),n(w,{value:2},{default:l(()=>[i("div",D,[n(r,{rounded:"",class:"text-lowercase h-300 mb-3","prepend-icon":"mdi-chevron-left-circle",onClick:a[3]||(a[3]=t=>e.login--)},{default:l(()=>[s(b(e.email),1)]),_:1})]),i("div",null,[n(_,{"prepend-inner-icon":"mdi-account-arrow-right",autofocus:e.autofocus,modelValue:e.password,"onUpdate:modelValue":a[4]||(a[4]=t=>e.password=t),label:"Password",type:e.passView?"text":"password",rules:e.passrules,"append-icon":e.passView?"mdi-eye":"mdi-eye-off","onClick:append":a[5]||(a[5]=t=>e.passView=!e.passView)},null,8,["autofocus","modelValue","type","rules","append-icon"])])]),_:1})]),_:1},8,["modelValue"]),n(f,{class:"d-flex align-end justify-end"},{default:l(()=>[i("div",null,[e.login==1?(c(),p(r,{key:0,type:"submit",disabled:!u.validateU,modelValue:e.next,"onUpdate:modelValue":a[7]||(a[7]=t=>e.next=t),class:"h-300 bg-skyblue-lighten-2","append-icon":"mdi-chevron-right-circle",variant:"tonal",onClick:a[8]||(a[8]=t=>e.login++)},{default:l(()=>[s(" Next ")]),_:1},8,["disabled","modelValue"])):e.login==2?(c(),p(r,{key:1,type:"submit",disabled:!(e.password.length>5),class:"h-300",variant:"tonal","append-icon":"mdi-chevron-right-circle",onClick:a[9]||(a[9]=t=>u.validate(2))},{default:l(()=>[s(" Login ")]),_:1},8,["disabled"])):q("",!0)])]),_:1})]),_:1},8,["onSubmit"])]),_:1})]),_:1})]),_:1}),n(S,{modelValue:e.snackbar,"onUpdate:modelValue":a[11]||(a[11]=t=>e.snackbar=t),color:"red",variant:"flat",location:"right top"},{actions:l(()=>[n(r,{onClick:a[10]||(a[10]=t=>e.snackbar=!1)},{default:l(()=>[s(" Close ")]),_:1})]),default:l(()=>[s(b(e.error)+" ",1)]),_:1},8,["modelValue"])]),_:1})}const M=N(P,[["render",R]]);export{M as default};
