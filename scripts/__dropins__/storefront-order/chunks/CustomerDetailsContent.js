import{jsx as h,Fragment as v,jsxs as M}from"@dropins/tools/preact-jsx-runtime.js";import{useRef as _,useState as D,useEffect as w,useCallback as T}from"@dropins/tools/preact-hooks.js";import{useText as y}from"@dropins/tools/i18n.js";import*as C from"@dropins/tools/preact-compat.js";import{memo as V,useCallback as L}from"@dropins/tools/preact-compat.js";import{classes as k}from"@dropins/tools/lib.js";import{Field as q,Picker as A,Input as I,InputDate as R,Checkbox as O,TextArea as N}from"@dropins/tools/components.js";const j=l=>C.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...l},C.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M11.8052 14.4968C10.8552 14.4968 9.9752 14.0268 9.4452 13.2368L9.4152 13.1868L9.3852 13.1268C8.1352 11.2268 7.5352 8.96681 7.6852 6.68681C7.7552 4.42681 9.6052 2.61681 11.8652 2.60681H12.0052C14.2752 2.47681 16.2152 4.21681 16.3452 6.47681C16.3452 6.55681 16.3452 6.62681 16.3452 6.70681C16.4852 8.94681 15.9052 11.1768 14.6852 13.0568L14.6052 13.1768C14.0552 13.9868 13.1352 14.4668 12.1652 14.4768H12.0052C11.9352 14.4768 11.8652 14.4868 11.7952 14.4868L11.8052 14.4968Z",stroke:"currentColor"}),C.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M4.3252 21.5469C4.3552 20.4169 4.4752 19.2869 4.6752 18.1769C4.8952 17.1669 6.4752 16.0269 8.9052 15.1569C9.2352 15.0369 9.4852 14.7869 9.5952 14.4569L9.8052 14.0269",stroke:"currentColor"}),C.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M14.425 14.4069L14.165 14.1569C14.375 14.5969 14.725 14.9569 15.155 15.1869C16.945 15.7969 19.125 16.9569 19.375 18.2069C19.585 19.3069 19.685 20.4269 19.675 21.5369",stroke:"currentColor"})),H=l=>l.reduce((u,{code:p,required:$,defaultValue:c})=>($&&(u[p]=c),u),{}),S=({fieldsConfig:l,onSubmit:u})=>{const{requiredFieldError:p}=y({requiredFieldError:"Order.Form.notifications.requiredFieldError"}),$=_(null),[c,n]=D({}),[o,t]=D({});w(()=>{if(n({}),!l||!l.length)return;const s=H(l);n(s)},[l==null?void 0:l.length]),w(()=>()=>{var s;n({}),(s=$.current)==null||s.reset()},[]);const f=T((s,e)=>{const r=l.find(d=>d.code===s);return r!=null&&r.required&&!e?p:""},[l,p]),b=T(s=>{const{name:e,value:r,type:a,checked:d}=s==null?void 0:s.target,i=a==="checkbox"?d:r;n(E=>({...E,[e]:i}))},[]),x=T(s=>{const{name:e,value:r,type:a,checked:d}=s==null?void 0:s.target,i=a==="checkbox"?d:r;t(E=>({...E,[e]:f(e,i)}))},[f]),F=T(s=>{s.preventDefault();let e=!0,r={},a=null;for(const[d,i]of Object.entries(c)){const E=f(d,i);E&&(r[d]=E,e=!1,a||(a=d))}if(t(r),a&&$.current){const d=$.current.elements.namedItem(a);d==null||d.focus()}u==null||u(s,e)},[c,f,u]);return{formData:c,errors:o,formRef:$,handleChange:b,handleBlur:x,handleSubmit:F}},U=V(({loading:l,values:u,fields:p=[],errors:$,className:c="",onChange:n,onBlur:o})=>{const t=`${c}__item`,f=L((e,r,a)=>{const d=e.options.map(i=>({text:i.label,value:i.value}));return h(q,{error:a,className:k([t,`${t}--${e.id}`,[`${t}--${e.id}-hidden`,e.is_hidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:l,children:h(A,{name:e.id,floatingLabel:`${e.label} ${e.required?"*":""}`,placeholder:e.label,"aria-label":e.label,options:d,onBlur:o,handleSelect:n,value:r||e.defaultValue})},e.id)},[c,l,t,o,n]),b=L((e,r,a)=>{const d=e.id==="email",i=d?h(j,{}):void 0,E=d?"username":"";return h(q,{error:a,className:k([t,`${t}--${e.id}`,[`${t}--${e.id}-hidden`,e==null?void 0:e.is_hidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:l,children:h(I,{"aria-label":e.label,"aria-required":e.required,autoComplete:E,icon:i,type:"text",name:e.id,value:r||e.defaultValue,placeholder:e.label,floatingLabel:`${e.label} ${e.required?"*":""}`,onBlur:o,onChange:n})},e.id)},[c,l,t,o,n]),x=L((e,r,a)=>h(q,{error:a,className:k([t,`${t}--${e.id}`,[`${t}--${e.id}-hidden`,e.is_hidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:l,children:h(R,{type:"text",name:e.id,value:r||e.defaultValue,placeholder:e.label,floatingLabel:`${e.label} ${e.required?"*":""}`,onBlur:o,onChange:n})},e.id),[c,l,t,o,n]),F=L((e,r,a)=>h(q,{error:a,className:k([t,`${t}--${e.id}`,[`${t}--${e.id}-hidden`,e.is_hidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:l,children:h(O,{name:e.id,checked:r||e.defaultValue,placeholder:e.label,label:`${e.label} ${e.required?"*":""}`,onBlur:o,onChange:n})},e.id),[c,l,t,o,n]),s=L((e,r,a)=>h(q,{error:a,className:k([t,`${t}--${e.id}`,[`${t}--${e.id}-hidden`,e.is_hidden],e.className]),"data-testid":`${c}--${e.id}`,disabled:l,children:h(N,{type:"text",name:e.id,value:r===void 0?e.defaultValue:r,label:`${e.label} ${e.required?"*":""}`,onBlur:o,onChange:n})},e.id),[c,l,t,o,n]);return p.length?h(v,{children:p.map(e=>{var d;const r=($==null?void 0:$[e.id])??"",a=(u==null?void 0:u[e.id])??"";switch(e.fieldType){case"TEXT":return(d=e==null?void 0:e.options)!=null&&d.length?f(e,a,r):b(e,a,r);case"MULTILINE":return b(e,a,r);case"SELECT":return f(e,a,r);case"DATE":return x(e,a,r);case"BOOLEAN":return F(e,a,r);case"TEXTAREA":return s(e,a,r);default:return null}})}):null}),K=V(({name:l,loading:u,children:p,className:$="defaultForm",fieldsConfig:c,onSubmit:n})=>{const{formData:o,errors:t,formRef:f,handleChange:b,handleBlur:x,handleSubmit:F}=S({fieldsConfig:c,onSubmit:n});return M("form",{className:k(["dropin-form",$]),onSubmit:F,name:l,ref:f,children:[h(U,{className:$,loading:u,fields:c,onChange:b,onBlur:x,errors:t,values:o}),p]})});export{K as F};