/*! Copyright 2024 Adobe
All Rights Reserved. */
import{jsx as p}from"@dropins/tools/preact-jsx-runtime.js";import{classes as I}from"@dropins/tools/lib.js";import"@dropins/tools/components.js";import{useState as s,useEffect as $,useCallback as y}from"@dropins/tools/preact-hooks.js";import"../chunks/ShippingStatusCard.js";import"@dropins/tools/preact-compat.js";import{u as M}from"../chunks/useGetStoreConfig.js";import"@dropins/tools/preact.js";import"@dropins/tools/event-bus.js";import{g as A}from"../chunks/getCustomerOrdersReturn.js";import{u as T}from"../chunks/useIsMobile.js";import{R as V}from"../chunks/ReturnsListContent.js";import{useText as k}from"@dropins/tools/i18n.js";import"../chunks/getStoreConfig.js";import"../chunks/fetch-graphql.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/network-error.js";import"../chunks/transform-customer-orders-returns.js";import"../chunks/convertCase.js";import"../chunks/returnOrdersHelper.js";import"../chunks/getFormValues.js";import"../chunks/OrderLoaders.js";const g={totalPages:1,currentPage:1,pageSize:1},v=({returnPageSize:t})=>{const[o,n]=s(!0),[i,u]=s([]),[a,m]=s(g),[d,l]=s(1);$(()=>{A(t).then(async r=>{u((r==null?void 0:r.ordersReturn)??[]),m((r==null?void 0:r.pageInfo)??g)}).finally(()=>{n(!1)})},[t]);const c=y(r=>{l(r)},[]);return{pageInfo:a,selectedPage:d,loading:o,orderReturns:i,handleSetSelectPage:c}},tr=({slots:t,withReturnsListButton:o,className:n,minifiedView:i,withHeader:u,withThumbnails:a,returnPageSize:m,returnsInMinifiedView:d,routeReturnDetails:l,routeOrderDetails:c,routeTracking:r,routeReturnsList:L,routeProductDetails:R})=>{const f=M(),{pageInfo:O,selectedPage:b,handleSetSelectPage:w,loading:N,orderReturns:P}=v({returnPageSize:m}),S=T(),e=i?"minifiedView":"fullSizeView",h=k({viewAllOrdersButton:`Order.Returns.${e}.returnsList.viewAllOrdersButton`,ariaLabelLink:`Order.Returns.${e}.returnsList.ariaLabelLink`,emptyOrdersListMessage:`Order.Returns.${e}.returnsList.emptyOrdersListMessage`,minifiedViewTitle:`Order.Returns.${e}.returnsList.minifiedViewTitle`,orderNumber:`Order.Returns.${e}.returnsList.orderNumber`,returnNumber:`Order.Returns.${e}.returnsList.returnNumber`,carrier:`Order.Returns.${e}.returnsList.carrier`});return p("div",{className:I(["order-returns-list",n]),children:p(V,{placeholderImage:(f==null?void 0:f.baseMediaUrl)??"",minifiedViewKey:e,withOrderNumber:!0,withReturnNumber:!0,slots:t,selectedPage:b,handleSetSelectPage:w,pageInfo:O,withReturnsListButton:o,isMobile:S,orderReturns:P,translations:h,withHeader:u,returnsInMinifiedView:d,withThumbnails:a,minifiedView:i,routeReturnDetails:l,routeOrderDetails:c,routeTracking:r,routeReturnsList:L,routeProductDetails:R,loading:N})})};export{tr as default};
