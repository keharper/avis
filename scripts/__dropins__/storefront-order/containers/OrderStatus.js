import{jsx as s,jsxs as p,Fragment as w}from"@dropins/tools/preact-jsx-runtime.js";import{Card as T,Header as x,Button as R,InLineAlert as L,Modal as M}from"@dropins/tools/components.js";import"../chunks/OrderCancel.js";import{Slot as $,classes as E}from"@dropins/tools/lib.js";import{useMemo as F,useState as U}from"@dropins/tools/preact-compat.js";import{useState as O,useEffect as N}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/preact.js";import{events as _}from"@dropins/tools/event-bus.js";import{O as K}from"../chunks/OrderCancelForm.js";import{useText as m,Text as y}from"@dropins/tools/i18n.js";import{C as b}from"../chunks/OrderLoaders.js";import{G as P}from"../chunks/getGuestOrder.graphql.js";import{f as G,h as V}from"../chunks/fetch-graphql.js";import{b as k}from"../chunks/transform-order-details.js";import{g as q}from"../chunks/getStoreConfig.js";import"../chunks/requestGuestOrderCancel.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/convertCase.js";const S={pending:"orderPending",shiping:"orderShipped",complete:"orderComplete",processing:"orderProcessing","on hold":"orderOnHold",canceled:"orderCanceled","suspected fraud":"orderSuspectedFraud","payment Review":"orderPaymentReview","order received":"orderReceived","guest order cancellation requested":"guestOrderCancellationRequested"},H=({slots:t,title:a,status:r,orderData:e})=>{const n=String(r).toLocaleLowerCase(),o=m(`Order.OrderStatusContent.${S[n]}.title`),c=m(`Order.OrderStatusContent.${S[n]}.message`),i=m(`Order.OrderStatusContent.${S[n]}.messageWithoutDate`);if(!r)return s("div",{});const l=e!=null&&e.orderStatusChangeDate?c==null?void 0:c.message.replace("{DATE}",e==null?void 0:e.orderStatusChangeDate):i.messageWithoutDate;return p(T,{className:"order-order-status-content",variant:"secondary",children:[s(x,{title:a??o.title}),p("div",{className:"order-order-status-content__wrapper",children:[s("div",{className:"order-order-status-content__wrapper-description",children:s("p",{children:l})}),s(W,{orderData:e,slots:t})]})]})};var f=(t=>(t.CANCEL="CANCEL",t.RETURN="RETURN",t.REORDER="REORDER",t))(f||{});const W=({className:t,children:a,orderData:r,slots:e,...n})=>{const o=m({cancel:"Order.OrderStatusContent.actions.cancel",return:"Order.OrderStatusContent.actions.return",reorder:"Order.OrderStatusContent.actions.reorder"}),c=F(()=>{const i=r==null?void 0:r.availableActions,l=!!(i!=null&&i.length);return s(w,{children:e!=null&&e.OrderActions?s($,{"data-testid":"OrderActionsSlot",name:"OrderCanceledActions",slot:e==null?void 0:e.OrderActions,context:r}):s("div",{"data-testid":"availableActionsList",className:E(["order-order-actions__wrapper",["order-order-actions__wrapper--empty",!l]]),children:i==null?void 0:i.map(d=>{switch(d){case f.CANCEL:return!!r&&s(Q,{orderRef:r.token??atob(r.id)});case f.RETURN:return s(R,{variant:"secondary",children:o.return});case f.REORDER:return s(R,{variant:"secondary",children:o.reorder})}})})})},[r,e==null?void 0:e.OrderActions,o]);return s("div",{...n,className:E(["order-order-actions",t]),children:c})},v=()=>{const[t,a]=O(null);return N(()=>{const r=sessionStorage.getItem("orderStoreConfig"),e=r?JSON.parse(r):null;e?a(e):q().then(n=>{n&&(sessionStorage.setItem("orderStoreConfig",JSON.stringify(n)),a(n))})},[]),t},j=({orderData:t})=>{const[a,r]=O(t),[e,n]=O(t==null?void 0:t.status);return N(()=>{const o=_.on("order/data",c=>{r(c),n(c.status)},{eager:!0});return()=>{o==null||o.off()}},[]),{orderStatus:e,order:a}},J=`
  mutation CONFIRM_CANCEL_ORDER_MUTATION(
      $orderId: ID!,
      $confirmationKey: String!
    ) {
    confirmCancelOrder(input: {
      order_id: $orderId,
      confirmation_key: $confirmationKey
    }) {
      order {
        ...guestOrderData
      }
      errorV2 {
        message
        code
      }
    }
  }
${P}
`,z=async(t,a)=>G(J,{variables:{orderId:t,confirmationKey:a}}).then(async({errors:r,data:e})=>{var c,i,l,d;const n=[...(c=e==null?void 0:e.confirmCancelOrder)!=null&&c.errorV2?[(i=e==null?void 0:e.confirmCancelOrder)==null?void 0:i.errorV2]:[],...r??[]];let o=null;return(l=e==null?void 0:e.confirmCancelOrder)!=null&&l.order&&(o=k((d=e==null?void 0:e.confirmCancelOrder)==null?void 0:d.order),_.emit("order/data",o)),n.length>0?V(n):o}),B=({enableOrderCancellation:t})=>{const a=m({orderCancelled:"Order.OrderStatusContent.orderCanceled.message"}),[r,e]=O({text:"",status:void 0});return N(()=>{if(!t)return;const n=new URLSearchParams(window.location.search),o=n.get("orderId"),c=n.get("confirmationKey");o&&c&&z(atob(o),c).then(()=>{e({text:a.orderCancelled,status:"success"})}).catch(i=>{e({text:i.message,status:"warning"})})},[t,a.orderCancelled]),{confirmOrderCancellation:r}},Oe=({slots:t,orderData:a,className:r,statusTitle:e,status:n})=>{const{orderStatus:o,order:c}=j({orderData:a}),[i,l]=U(!1),d=()=>{l(!0);const C=new URL(window.location.href),I=C.searchParams.get("orderId"),A=C.searchParams.get("confirmationKey");I&&A&&(C.searchParams.delete("orderId"),C.searchParams.delete("confirmationKey"),window.history.replaceState({},document.title,C.toString()))},h=m({cancelOrder:"Order.OrderStatusContent.actions.cancel"}),g=v(),{confirmOrderCancellation:u}=B({enableOrderCancellation:g==null?void 0:g.orderCancellationEnabled});return p("div",{className:E(["order-order-status",r]),children:[!i&&(u==null?void 0:u.status)!==void 0&&s(L,{heading:h.cancelOrder,onDismiss:d,description:u.text,type:u.status}),c?s(H,{title:e,status:n||o,slots:t,orderData:c}):s(b,{withCard:!1})]})},Q=({orderRef:t})=>{const[a,r]=O(!1),e=()=>{r(!0)},n=()=>{r(!1)},o=v(),c=(o==null?void 0:o.orderCancellationReasons)??[],i=l=>l.map((d,h)=>({text:d==null?void 0:d.description,value:h.toString()}));return _.on("order/data",l=>{const d=String(l.status).toLocaleLowerCase();(d==="guest order cancellation requested"||d==="canceled")&&n()}),p(w,{children:[s(R,{variant:"secondary",onClick:e,"data-testid":"cancel-button",children:s(y,{id:"Order.OrderStatusContent.actions.cancel"})}),a&&s(M,{centered:!0,size:"medium",onClose:n,className:"order-order-cancel__modal",title:s("h2",{className:"order-order-cancel__title",children:s(y,{id:"Order.OrderCancelForm.title"})}),"data-testid":"order-cancellation-reasons-modal",children:s(K,{orderRef:t,cancelReasons:i(c)})})]})};export{Oe as OrderStatus,Oe as default};
