"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2164],{13614:(e,t,r)=>{r.d(t,{N:()=>s});var n=r(39149),o=r(645),a=r(97691),i=r(13586);function s(e){let t=e+"CollectionProvider",[r,s]=(0,o.A)(t),[l,u]=r(t,{collectionRef:{current:null},itemMap:new Map}),c=e+"CollectionSlot",d=n.forwardRef((e,t)=>{let{scope:r,children:o}=e,s=u(c,r),l=(0,a.s)(t,s.collectionRef);return n.createElement(i.DX,{ref:l},o)}),p=e+"CollectionItemSlot",f="data-radix-collection-item";return[{Provider:e=>{let{scope:t,children:r}=e,o=n.useRef(null),a=n.useRef(new Map).current;return n.createElement(l,{scope:t,itemMap:a,collectionRef:o},r)},Slot:d,ItemSlot:n.forwardRef((e,t)=>{let{scope:r,children:o,...s}=e,l=n.useRef(null),c=(0,a.s)(t,l),d=u(p,r);return n.useEffect(()=>(d.itemMap.set(l,{ref:l,...s}),()=>void d.itemMap.delete(l))),n.createElement(i.DX,{[f]:"",ref:c},o)})},function(t){let r=u(e+"CollectionConsumer",t);return n.useCallback(()=>{let e=r.collectionRef.current;if(!e)return[];let t=Array.from(e.querySelectorAll(`[${f}]`));return Array.from(r.itemMap.values()).sort((e,r)=>t.indexOf(e.ref.current)-t.indexOf(r.ref.current))},[r.collectionRef,r.itemMap])},s]}},36640:(e,t,r)=>{r.d(t,{b:()=>s,s:()=>i});var n=r(66467),o=r(39149),a=r(98004);let i=(0,o.forwardRef)((e,t)=>(0,o.createElement)(a.sG.span,(0,n.A)({},e,{ref:t,style:{position:"absolute",border:0,width:1,height:1,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",wordWrap:"normal",...e.style}}))),s=i},42052:(e,t,r)=>{r.d(t,{A:()=>n});function n(){return(n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}},51249:(e,t,r)=>{r.d(t,{U:()=>a});var n=r(39149),o=r(43111);function a(e,t=null==globalThis?void 0:globalThis.document){let r=(0,o.c)(e);(0,n.useEffect)(()=>{let e=e=>{"Escape"===e.key&&r(e)};return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},[r,t])}},82164:(e,t,r)=>{let n;r.d(t,{rc:()=>ea,bm:()=>ei,VY:()=>eo,Kq:()=>ee,bL:()=>er,hE:()=>en,LM:()=>et});var o=r(42052),a=r(39149),i=r(88170),s=r(86763),l=r(97691),u=r(13614),c=r(645),d=r(66467),p=r(98004),f=r(43111),v=r(51249);let m="dismissableLayer.update",E=(0,a.createContext)({layers:new Set,layersWithOutsidePointerEventsDisabled:new Set,branches:new Set}),w=(0,a.forwardRef)((e,t)=>{var r;let{disableOutsidePointerEvents:o=!1,onEscapeKeyDown:i,onPointerDownOutside:u,onFocusOutside:c,onInteractOutside:w,onDismiss:y,...h}=e,g=(0,a.useContext)(E),[C,P]=(0,a.useState)(null),x=null!==(r=null==C?void 0:C.ownerDocument)&&void 0!==r?r:null==globalThis?void 0:globalThis.document,[,R]=(0,a.useState)({}),D=(0,l.s)(t,e=>P(e)),L=Array.from(g.layers),[S]=[...g.layersWithOutsidePointerEventsDisabled].slice(-1),A=L.indexOf(S),k=C?L.indexOf(C):-1,F=g.layersWithOutsidePointerEventsDisabled.size>0,O=k>=A,_=function(e,t=null==globalThis?void 0:globalThis.document){let r=(0,f.c)(e),n=(0,a.useRef)(!1),o=(0,a.useRef)(()=>{});return(0,a.useEffect)(()=>{let e=e=>{if(e.target&&!n.current){let n={originalEvent:e};function a(){T("dismissableLayer.pointerDownOutside",r,n,{discrete:!0})}"touch"===e.pointerType?(t.removeEventListener("click",o.current),o.current=a,t.addEventListener("click",o.current,{once:!0})):a()}n.current=!1},a=window.setTimeout(()=>{t.addEventListener("pointerdown",e)},0);return()=>{window.clearTimeout(a),t.removeEventListener("pointerdown",e),t.removeEventListener("click",o.current)}},[t,r]),{onPointerDownCapture:()=>n.current=!0}}(e=>{let t=e.target,r=[...g.branches].some(e=>e.contains(t));!O||r||(null==u||u(e),null==w||w(e),e.defaultPrevented||null==y||y())},x),M=function(e,t=null==globalThis?void 0:globalThis.document){let r=(0,f.c)(e),n=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{let e=e=>{e.target&&!n.current&&T("dismissableLayer.focusOutside",r,{originalEvent:e},{discrete:!1})};return t.addEventListener("focusin",e),()=>t.removeEventListener("focusin",e)},[t,r]),{onFocusCapture:()=>n.current=!0,onBlurCapture:()=>n.current=!1}}(e=>{let t=e.target;[...g.branches].some(e=>e.contains(t))||(null==c||c(e),null==w||w(e),e.defaultPrevented||null==y||y())},x);return(0,v.U)(e=>{k===g.layers.size-1&&(null==i||i(e),!e.defaultPrevented&&y&&(e.preventDefault(),y()))},x),(0,a.useEffect)(()=>{if(C)return o&&(0===g.layersWithOutsidePointerEventsDisabled.size&&(n=x.body.style.pointerEvents,x.body.style.pointerEvents="none"),g.layersWithOutsidePointerEventsDisabled.add(C)),g.layers.add(C),b(),()=>{o&&1===g.layersWithOutsidePointerEventsDisabled.size&&(x.body.style.pointerEvents=n)}},[C,x,o,g]),(0,a.useEffect)(()=>()=>{C&&(g.layers.delete(C),g.layersWithOutsidePointerEventsDisabled.delete(C),b())},[C,g]),(0,a.useEffect)(()=>{let e=()=>R({});return document.addEventListener(m,e),()=>document.removeEventListener(m,e)},[]),(0,a.createElement)(p.sG.div,(0,d.A)({},h,{ref:D,style:{pointerEvents:F?O?"auto":"none":void 0,...e.style},onFocusCapture:(0,s.m)(e.onFocusCapture,M.onFocusCapture),onBlurCapture:(0,s.m)(e.onBlurCapture,M.onBlurCapture),onPointerDownCapture:(0,s.m)(e.onPointerDownCapture,_.onPointerDownCapture)}))}),y=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(E),n=(0,a.useRef)(null),o=(0,l.s)(t,n);return(0,a.useEffect)(()=>{let e=n.current;if(e)return r.branches.add(e),()=>{r.branches.delete(e)}},[r.branches]),(0,a.createElement)(p.sG.div,(0,d.A)({},e,{ref:o}))});function b(){let e=new CustomEvent(m);document.dispatchEvent(e)}function T(e,t,r,{discrete:n}){let o=r.originalEvent.target,a=new CustomEvent(e,{bubbles:!1,cancelable:!0,detail:r});t&&o.addEventListener(e,t,{once:!0}),n?(0,p.hO)(o,a):o.dispatchEvent(a)}let h=(0,a.forwardRef)((e,t)=>{var r;let{container:n=null==globalThis?void 0:null===(r=globalThis.document)||void 0===r?void 0:r.body,...o}=e;return n?i.createPortal((0,a.createElement)(p.sG.div,(0,d.A)({},o,{ref:t})),n):null});var g=r(8258),C=r(74847),P=r(14815),x=r(36640);let R="ToastProvider",[D,L,S]=(0,u.N)("Toast"),[A,k]=(0,c.A)("Toast",[S]),[F,O]=A(R),_=e=>{let{__scopeToast:t,label:r="Notification",duration:n=5e3,swipeDirection:o="right",swipeThreshold:i=50,children:s}=e,[l,u]=(0,a.useState)(null),[c,d]=(0,a.useState)(0),p=(0,a.useRef)(!1),f=(0,a.useRef)(!1);return(0,a.createElement)(D.Provider,{scope:t},(0,a.createElement)(F,{scope:t,label:r,duration:n,swipeDirection:o,swipeThreshold:i,toastCount:c,viewport:l,onViewportChange:u,onToastAdd:(0,a.useCallback)(()=>d(e=>e+1),[]),onToastRemove:(0,a.useCallback)(()=>d(e=>e-1),[]),isFocusedToastEscapeKeyDownRef:p,isClosePausedRef:f},s))};_.propTypes={label:e=>e.label&&"string"==typeof e.label&&!e.label.trim()?Error(`Invalid prop \`label\` supplied to \`${R}\`. Expected non-empty \`string\`.`):null};let M=["F8"],I="toast.viewportPause",N="toast.viewportResume",K=(0,a.forwardRef)((e,t)=>{let{__scopeToast:r,hotkey:n=M,label:i="Notifications ({hotkey})",...s}=e,u=O("ToastViewport",r),c=L(r),d=(0,a.useRef)(null),f=(0,a.useRef)(null),v=(0,a.useRef)(null),m=(0,a.useRef)(null),E=(0,l.s)(t,m,u.onViewportChange),w=n.join("+").replace(/Key/g,"").replace(/Digit/g,""),b=u.toastCount>0;(0,a.useEffect)(()=>{let e=e=>{var t;n.every(t=>e[t]||e.code===t)&&(null===(t=m.current)||void 0===t||t.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[n]),(0,a.useEffect)(()=>{let e=d.current,t=m.current;if(b&&e&&t){let r=()=>{if(!u.isClosePausedRef.current){let e=new CustomEvent(I);t.dispatchEvent(e),u.isClosePausedRef.current=!0}},n=()=>{if(u.isClosePausedRef.current){let e=new CustomEvent(N);t.dispatchEvent(e),u.isClosePausedRef.current=!1}},o=t=>{e.contains(t.relatedTarget)||n()},a=()=>{e.contains(document.activeElement)||n()};return e.addEventListener("focusin",r),e.addEventListener("focusout",o),e.addEventListener("pointermove",r),e.addEventListener("pointerleave",a),window.addEventListener("blur",r),window.addEventListener("focus",n),()=>{e.removeEventListener("focusin",r),e.removeEventListener("focusout",o),e.removeEventListener("pointermove",r),e.removeEventListener("pointerleave",a),window.removeEventListener("blur",r),window.removeEventListener("focus",n)}}},[b,u.isClosePausedRef]);let T=(0,a.useCallback)(({tabbingDirection:e})=>{let t=c().map(t=>{let r=t.ref.current,n=[r,...function(e){let t=[],r=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;r.nextNode();)t.push(r.currentNode);return t}(r)];return"forwards"===e?n:n.reverse()});return("forwards"===e?t.reverse():t).flat()},[c]);return(0,a.useEffect)(()=>{let e=m.current;if(e){let t=t=>{let r=t.altKey||t.ctrlKey||t.metaKey;if("Tab"===t.key&&!r){var n,o,a;let r=document.activeElement,i=t.shiftKey;if(t.target===e&&i){null===(n=f.current)||void 0===n||n.focus();return}let s=T({tabbingDirection:i?"backwards":"forwards"}),l=s.findIndex(e=>e===r);Z(s.slice(l+1))?t.preventDefault():i?null===(o=f.current)||void 0===o||o.focus():null===(a=v.current)||void 0===a||a.focus()}};return e.addEventListener("keydown",t),()=>e.removeEventListener("keydown",t)}},[c,T]),(0,a.createElement)(y,{ref:d,role:"region","aria-label":i.replace("{hotkey}",w),tabIndex:-1,style:{pointerEvents:b?void 0:"none"}},b&&(0,a.createElement)(G,{ref:f,onFocusFromOutsideViewport:()=>{Z(T({tabbingDirection:"forwards"}))}}),(0,a.createElement)(D.Slot,{scope:r},(0,a.createElement)(p.sG.ol,(0,o.A)({tabIndex:-1},s,{ref:E}))),b&&(0,a.createElement)(G,{ref:v,onFocusFromOutsideViewport:()=>{Z(T({tabbingDirection:"backwards"}))}}))}),G=(0,a.forwardRef)((e,t)=>{let{__scopeToast:r,onFocusFromOutsideViewport:n,...i}=e,s=O("ToastFocusProxy",r);return(0,a.createElement)(x.s,(0,o.A)({"aria-hidden":!0,tabIndex:0},i,{ref:t,style:{position:"fixed"},onFocus:e=>{var t;let r=e.relatedTarget;null!==(t=s.viewport)&&void 0!==t&&t.contains(r)||n()}}))}),W="Toast",V=(0,a.forwardRef)((e,t)=>{let{forceMount:r,open:n,defaultOpen:i,onOpenChange:l,...u}=e,[c=!0,d]=(0,C.i)({prop:n,defaultProp:i,onChange:l});return(0,a.createElement)(g.C,{present:r||c},(0,a.createElement)(X,(0,o.A)({open:c},u,{ref:t,onClose:()=>d(!1),onPause:(0,f.c)(e.onPause),onResume:(0,f.c)(e.onResume),onSwipeStart:(0,s.m)(e.onSwipeStart,e=>{e.currentTarget.setAttribute("data-swipe","start")}),onSwipeMove:(0,s.m)(e.onSwipeMove,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","move"),e.currentTarget.style.setProperty("--radix-toast-swipe-move-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-move-y",`${r}px`)}),onSwipeCancel:(0,s.m)(e.onSwipeCancel,e=>{e.currentTarget.setAttribute("data-swipe","cancel"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")}),onSwipeEnd:(0,s.m)(e.onSwipeEnd,e=>{let{x:t,y:r}=e.detail.delta;e.currentTarget.setAttribute("data-swipe","end"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),e.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),e.currentTarget.style.setProperty("--radix-toast-swipe-end-x",`${t}px`),e.currentTarget.style.setProperty("--radix-toast-swipe-end-y",`${r}px`),d(!1)})})))}),[$,U]=A(W,{onClose(){}}),X=(0,a.forwardRef)((e,t)=>{let{__scopeToast:r,type:n="foreground",duration:u,open:c,onClose:d,onEscapeKeyDown:v,onPause:m,onResume:E,onSwipeStart:y,onSwipeMove:b,onSwipeCancel:T,onSwipeEnd:h,...g}=e,C=O(W,r),[P,x]=(0,a.useState)(null),R=(0,l.s)(t,e=>x(e)),L=(0,a.useRef)(null),S=(0,a.useRef)(null),A=u||C.duration,k=(0,a.useRef)(0),F=(0,a.useRef)(A),_=(0,a.useRef)(0),{onToastAdd:M,onToastRemove:K}=C,G=(0,f.c)(()=>{var e;(null==P?void 0:P.contains(document.activeElement))&&(null===(e=C.viewport)||void 0===e||e.focus()),d()}),V=(0,a.useCallback)(e=>{e&&e!==1/0&&(window.clearTimeout(_.current),k.current=new Date().getTime(),_.current=window.setTimeout(G,e))},[G]);(0,a.useEffect)(()=>{let e=C.viewport;if(e){let t=()=>{V(F.current),null==E||E()},r=()=>{let e=new Date().getTime()-k.current;F.current=F.current-e,window.clearTimeout(_.current),null==m||m()};return e.addEventListener(I,r),e.addEventListener(N,t),()=>{e.removeEventListener(I,r),e.removeEventListener(N,t)}}},[C.viewport,A,m,E,V]),(0,a.useEffect)(()=>{c&&!C.isClosePausedRef.current&&V(A)},[c,A,C.isClosePausedRef,V]),(0,a.useEffect)(()=>(M(),()=>K()),[M,K]);let U=(0,a.useMemo)(()=>P?function e(t){let r=[];return Array.from(t.childNodes).forEach(t=>{var n;if(t.nodeType===t.TEXT_NODE&&t.textContent&&r.push(t.textContent),(n=t).nodeType===n.ELEMENT_NODE){let n=t.ariaHidden||t.hidden||"none"===t.style.display,o=""===t.dataset.radixToastAnnounceExclude;if(!n){if(o){let e=t.dataset.radixToastAnnounceAlt;e&&r.push(e)}else r.push(...e(t))}}}),r}(P):null,[P]);return C.viewport?(0,a.createElement)(a.Fragment,null,U&&(0,a.createElement)(j,{__scopeToast:r,role:"status","aria-live":"foreground"===n?"assertive":"polite","aria-atomic":!0},U),(0,a.createElement)($,{scope:r,onClose:G},(0,i.createPortal)((0,a.createElement)(D.ItemSlot,{scope:r},(0,a.createElement)(w,{asChild:!0,onEscapeKeyDown:(0,s.m)(v,()=>{C.isFocusedToastEscapeKeyDownRef.current||G(),C.isFocusedToastEscapeKeyDownRef.current=!1})},(0,a.createElement)(p.sG.li,(0,o.A)({role:"status","aria-live":"off","aria-atomic":!0,tabIndex:0,"data-state":c?"open":"closed","data-swipe-direction":C.swipeDirection},g,{ref:R,style:{userSelect:"none",touchAction:"none",...e.style},onKeyDown:(0,s.m)(e.onKeyDown,e=>{"Escape"!==e.key||(null==v||v(e.nativeEvent),e.nativeEvent.defaultPrevented||(C.isFocusedToastEscapeKeyDownRef.current=!0,G()))}),onPointerDown:(0,s.m)(e.onPointerDown,e=>{0===e.button&&(L.current={x:e.clientX,y:e.clientY})}),onPointerMove:(0,s.m)(e.onPointerMove,e=>{if(!L.current)return;let t=e.clientX-L.current.x,r=e.clientY-L.current.y,n=!!S.current,o=["left","right"].includes(C.swipeDirection),a=["left","up"].includes(C.swipeDirection)?Math.min:Math.max,i=o?a(0,t):0,s=o?0:a(0,r),l="touch"===e.pointerType?10:2,u={x:i,y:s},c={originalEvent:e,delta:u};n?(S.current=u,J("toast.swipeMove",b,c,{discrete:!1})):Q(u,C.swipeDirection,l)?(S.current=u,J("toast.swipeStart",y,c,{discrete:!1}),e.target.setPointerCapture(e.pointerId)):(Math.abs(t)>l||Math.abs(r)>l)&&(L.current=null)}),onPointerUp:(0,s.m)(e.onPointerUp,e=>{let t=S.current,r=e.target;if(r.hasPointerCapture(e.pointerId)&&r.releasePointerCapture(e.pointerId),S.current=null,L.current=null,t){let r=e.currentTarget,n={originalEvent:e,delta:t};Q(t,C.swipeDirection,C.swipeThreshold)?J("toast.swipeEnd",h,n,{discrete:!0}):J("toast.swipeCancel",T,n,{discrete:!0}),r.addEventListener("click",e=>e.preventDefault(),{once:!0})}})})))),C.viewport))):null});X.propTypes={type:e=>e.type&&!["foreground","background"].includes(e.type)?Error(`Invalid prop \`type\` supplied to \`${W}\`. Expected \`foreground | background\`.`):null};let j=e=>{let{__scopeToast:t,children:r,...n}=e,o=O(W,t),[i,s]=(0,a.useState)(!1),[l,u]=(0,a.useState)(!1);return function(e=()=>{}){let t=(0,f.c)(e);(0,P.N)(()=>{let e=0,r=0;return e=window.requestAnimationFrame(()=>r=window.requestAnimationFrame(t)),()=>{window.cancelAnimationFrame(e),window.cancelAnimationFrame(r)}},[t])}(()=>s(!0)),(0,a.useEffect)(()=>{let e=window.setTimeout(()=>u(!0),1e3);return()=>window.clearTimeout(e)},[]),l?null:(0,a.createElement)(h,{asChild:!0},(0,a.createElement)(x.s,n,i&&(0,a.createElement)(a.Fragment,null,o.label," ",r)))},q=(0,a.forwardRef)((e,t)=>{let{__scopeToast:r,...n}=e;return(0,a.createElement)(p.sG.div,(0,o.A)({},n,{ref:t}))}),z=(0,a.forwardRef)((e,t)=>{let{__scopeToast:r,...n}=e;return(0,a.createElement)(p.sG.div,(0,o.A)({},n,{ref:t}))}),B=(0,a.forwardRef)((e,t)=>{let{altText:r,...n}=e;return r?(0,a.createElement)(H,{altText:r,asChild:!0},(0,a.createElement)(Y,(0,o.A)({},n,{ref:t}))):null});B.propTypes={altText:e=>e.altText?null:Error("Missing prop `altText` expected on `ToastAction`")};let Y=(0,a.forwardRef)((e,t)=>{let{__scopeToast:r,...n}=e,i=U("ToastClose",r);return(0,a.createElement)(H,{asChild:!0},(0,a.createElement)(p.sG.button,(0,o.A)({type:"button"},n,{ref:t,onClick:(0,s.m)(e.onClick,i.onClose)})))}),H=(0,a.forwardRef)((e,t)=>{let{__scopeToast:r,altText:n,...i}=e;return(0,a.createElement)(p.sG.div,(0,o.A)({"data-radix-toast-announce-exclude":"","data-radix-toast-announce-alt":n||void 0},i,{ref:t}))});function J(e,t,r,{discrete:n}){let o=r.originalEvent.currentTarget,a=new CustomEvent(e,{bubbles:!0,cancelable:!0,detail:r});t&&o.addEventListener(e,t,{once:!0}),n?(0,p.hO)(o,a):o.dispatchEvent(a)}let Q=(e,t,r=0)=>{let n=Math.abs(e.x),o=Math.abs(e.y),a=n>o;return"left"===t||"right"===t?a&&n>r:!a&&o>r};function Z(e){let t=document.activeElement;return e.some(e=>e===t||(e.focus(),document.activeElement!==t))}let ee=_,et=K,er=V,en=q,eo=z,ea=B,ei=Y}}]);