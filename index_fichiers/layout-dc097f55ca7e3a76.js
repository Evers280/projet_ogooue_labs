(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6688],{3329:(e,t,l)=>{"use strict";l.d(t,{Q:()=>s});let s=(0,l(69435).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M9.53033 2.21968L9 1.68935L7.93934 2.75001L8.46967 3.28034L12.4393 7.25001H1.75H1V8.75001H1.75H12.4393L8.46967 12.7197L7.93934 13.25L9 14.3107L9.53033 13.7803L14.6036 8.70711C14.9941 8.31659 14.9941 7.68342 14.6036 7.2929L9.53033 2.21968Z" fill="currentColor"/>')},9670:(e,t,l)=>{"use strict";l.d(t,{_:()=>u,default:()=>h});var s=l(27545),a=l(88704),r=l(97797),i=l(75838),n=l(39149),o=l(70244),c=l(34995),d=l(41664);function u(){let{data:e,mutate:t}=(0,d.Ay)("teamRequestAccessDialog",null,{fallbackData:null});return{teamRequestAccessDialog:e,setTeamRequestAccessDialog:t}}function h(){let{teamRequestAccessDialog:e,setTeamRequestAccessDialog:t}=u(),{user:l}=(0,i.J)(),{refreshScopes:d}=(0,c.b)(),[h,m]=(0,n.useTransition)(),f=(0,n.useCallback)(()=>{h||m(async()=>{if(e){if(!(await fetch("/chat/api/team/request-access/".concat(e.slug),{method:"POST"})).ok){o.oR.error("Failed to request access");return}o.oR.success("Access requested"),t(null),d()}})},[h,d,t,e]);return e&&l?(0,s.jsxs)(a.Modal,{onOpenChange:()=>t(null),open:!!e,children:[(0,s.jsxs)(a.ModalHeader,{children:[(0,s.jsx)(a.ModalTitle,{children:"Request Access"}),(0,s.jsxs)(a.ModalDescription,{children:["Your account"," ",(0,s.jsx)("b",{className:"font-medium",children:l.name||l.username})," does not have permission to use v0 in"," ",(0,s.jsx)("b",{className:"font-medium",children:e.name||e.slug})," ","Team. Request access, or switch to a different Team."]})]}),(0,s.jsxs)(a.ModalFooter,{children:[(0,s.jsx)(a.ModalClose,{asChild:!0,children:(0,s.jsx)(r.$,{size:"sm",variant:"secondary",children:"Cancel"})}),(0,s.jsx)(r.$,{disabled:h,onClick:f,size:"sm",children:"Request Access"})]})]}):null}},12658:(e,t,l)=>{"use strict";l.d(t,{B:()=>o});var s=l(96453),a=l(12289),r=l(39149),i=l(41664);let n=new Map;function o(e,t,l,o){let c=(0,r.useMemo)(()=>!0,[]),d=(0,r.useRef)(!1),u=(0,r.useContext)(e),h=(0,r.useMemo)(()=>u[l],[u,l]);if(!u||!h)throw Error(["Called a use*ContextSWR hook outside of *SWRDataProvider: ".concat(String(l)),"Missing context:","  use(context): ".concat(JSON.stringify(u)),"  action = context[actionKey]: ".concat(JSON.stringify(h))].join("\n"));let m=(0,r.useMemo)(()=>h.serverPromise,[h]),f=(0,r.useMemo)(()=>h.fallbackData,[h]),x=(0,r.useMemo)(()=>(0,i.WI)([l,t]),[t,l]),g=(0,r.useCallback)(async()=>{var e;return(d.current=!0,!(void 0!==(e=m)&&"object"==typeof e&&"status"in e&&"fulfilled"===e.status)&&void 0!==m&&(null==o?void 0:o.awaitServerPromise))?m:(0,s.createRouteFetcherForAction)(h.actionRoute)(t)},[m,null==o?void 0:o.awaitServerPromise,h.actionRoute,t]),v=(0,i.Ay)(x,async()=>g(),{revalidateOnFocus:!1,revalidateIfStale:!1,revalidateOnMount:!1,...o,fallbackData:m}),p=(0,r.useCallback)(async()=>new Promise(async(e,t)=>{try{let t=await g();await v.mutate(t),e(t)}catch(l){if(f)try{await v.mutate(f),e(f)}catch(e){throw Error("force revalidation failed: could not mutate with fallback data",{cause:e})}t(Error("Force revalidation failed in useContextSWR",{cause:l}))}}),[f,g,v]);if(void 0!==m||c||(0,a.Postpone)({reason:"useContextSWR",route:x}),void 0===v.data){if(m)throw Error(["Response data is undefined in useContextSWR:","  key: ".concat(JSON.stringify(t)),"  actionKey: ".concat(String(l)),"","This likely means you are missing a Suspense boundary around the component"].join("\n"));if(n.has(x))throw n.get(x);let e=p();throw n.set(x,e),e}return(0,r.useEffect)(()=>{if(void 0!==v.data)return()=>{n.delete(x)}},[v.data,x]),v}},23800:(e,t,l)=>{"use strict";l.d(t,{Wu:()=>c,ZB:()=>o,Zp:()=>i,aR:()=>n,wL:()=>d});var s=l(27545),a=l(39149),r=l(1064);let i=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("div",{className:(0,r.cn)("overflow-hidden rounded-lg border bg-white shadow-sm",l),ref:t,...a})});i.displayName="Card";let n=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("div",{className:(0,r.cn)("flex flex-col space-y-1.5 p-6",l),ref:t,...a})});n.displayName="CardHeader",a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("div",{className:(0,r.cn)("mb-4 flex h-8 w-8 items-center justify-center rounded-lg border bg-white [&>svg]:size-4",l),ref:t,...a})}).displayName="CardIcon";let o=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("h3",{className:(0,r.cn)("whitespace-nowrap font-semibold leading-none tracking-tight",l),ref:t,...a})});o.displayName="CardTitle",a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("p",{className:(0,r.cn)("text-sm text-muted-foreground",l),ref:t,...a})}).displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("div",{className:(0,r.cn)("p-6 pt-0",l),ref:t,...a})});c.displayName="CardContent";let d=a.forwardRef((e,t)=>{let{className:l,...a}=e;return(0,s.jsx)("div",{className:(0,r.cn)(" flex items-center p-6 pt-0",l),ref:t,...a})});d.displayName="CardFooter"},33221:(e,t,l)=>{Promise.resolve().then(l.bind(l,53375)),Promise.resolve().then(l.bind(l,96453)),Promise.resolve().then(l.bind(l,41900)),Promise.resolve().then(l.bind(l,36818)),Promise.resolve().then(l.bind(l,9670)),Promise.resolve().then(l.bind(l,97356)),Promise.resolve().then(l.bind(l,94897)),Promise.resolve().then(l.bind(l,63269))},36818:(e,t,l)=>{"use strict";l.d(t,{DynamicCMDK:()=>i});var s=l(27545),a=l(39149);let r=(0,l(96064).default)(()=>Promise.all([l.e(2187),l.e(8538)]).then(l.bind(l,48538)).then(e=>e.CMDK),{loadableGenerated:{webpack:()=>[48538]},ssr:!1});function i(){let[e,t]=(0,a.useState)(!1),[l,i]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let e=e=>{"k"===e.key&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),t(e=>!e),i(!0))};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]),(0,s.jsx)(a.Suspense,{fallback:null,children:l?(0,s.jsx)(r,{open:e,setOpen:t}):null})}},41900:(e,t,l)=>{"use strict";l.d(t,{ChatSWRDataProvider:()=>n,b:()=>o});var s=l(27545),a=l(39149),r=l(12658);let i=(0,a.createContext)({});function n(e){let{children:t,actions:l}=e,r=(0,a.useMemo)(()=>l,[l]);return(0,s.jsx)(i.Provider,{value:r,children:t})}let o=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return(0,r.B)(i,...t)}},56495:(e,t,l)=>{"use strict";l.d(t,{d:()=>n});var s=l(39149),a=l(89759),r=l(7680),i=l(2569);function n(e){let t=(0,i.M)(()=>(0,a.OQ)(e)),{isStatic:l}=(0,s.useContext)(r.Q);if(l){let[,l]=(0,s.useState)(e);(0,s.useEffect)(()=>t.on("change",l),[])}return t}},63269:(e,t,l)=>{"use strict";l.r(t),l.d(t,{default:()=>ev});var s=l(27545),a=l(39149),r=l(87240),i=l(97797),n=l(23800),o=l(68617),c=l(23897),d=l(75838),u=l(25542),h=l(82325),m=l(45629),f=l(48891),x=l(4432),g=l(28492),v=l(23807),p=l(3906),b=l(71581),j=l(2731),y=l(41635),C=l(34352),N=l(82923),S=l(71068),w=l(70244),k=l(2569);class M{constructor(){this.componentControls=new Set}subscribe(e){return this.componentControls.add(e),()=>this.componentControls.delete(e)}start(e,t){this.componentControls.forEach(l=>{l.start(e.nativeEvent||e,t)})}}let L=()=>new M;var P=l(88218);let A=(0,a.createContext)(null);var R=l(56495),_=l(24842);let E=e=>e&&"object"==typeof e&&e.mix,I=e=>E(e)?e.mix:void 0;var T=l(14930),D=l(81318);function O(e,t){let l=(0,R.d)(t()),s=()=>l.set(t());return s(),(0,T.E)(()=>{let t=()=>D.Gt.preRender(s,!1,!0),l=e.map(e=>e.on("change",t));return()=>{l.forEach(e=>e()),(0,D.WG)(s)}}),l}var H=l(89759);function z(e,t){let l=(0,k.M)(()=>[]);return O(e,()=>{l.length=0;let s=e.length;for(let t=0;t<s;t++)l[t]=e[t].get();return t(l)})}var B=l(58710);function F(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(0,B.S)(e)?e:(0,R.d)(t)}let J=(0,a.forwardRef)(function(e,t){let{children:l,style:r={},value:i,as:n="li",onDrag:o,layout:c=!0,...d}=e,u=(0,k.M)(()=>j.P[n]),h=(0,a.useContext)(A),m={x:F(r.x),y:F(r.y)},f=function(e,t,l,s){if("function"==typeof e)return function(e){H.bt.current=[],e();let t=O(H.bt.current,e);return H.bt.current=void 0,t}(e);let a="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),l=t?0:-1,s=e[0+l],a=e[1+l],r=e[2+l],i=e[3+l],n=(0,_.G)(a,r,{mixer:I(r[0]),...i});return t?n(s):n}(t,void 0,void 0);return Array.isArray(e)?z(e,a):z([e],([e])=>a(e))}([m.x,m.y],e=>{let[t,l]=e;return t||l?1:"unset"});(0,P.V)(!!h,"Reorder.Item must be a child of Reorder.Group");let{axis:x,registerItem:g,updateOrder:v}=h;return(0,s.jsx)(u,{drag:x,...d,dragSnapToOrigin:!0,style:{...r,x:m.x,y:m.y,zIndex:f},layout:c,onDrag:(e,t)=>{let{velocity:l}=t;l[x]&&v(i,m[x].get(),l[x]),o&&o(e,t)},onLayoutMeasure:e=>g(i,e),ref:t,ignoreStrict:!0,children:l})});var U=l(81088),G=l(17145);let q=(0,a.forwardRef)(function(e,t){let{children:l,as:r="ul",axis:i="y",onReorder:n,values:o,...c}=e,d=(0,k.M)(()=>j.P[r]),u=[],h=(0,a.useRef)(!1);return(0,P.V)(!!o,"Reorder.Group must be provided a values prop"),(0,a.useEffect)(()=>{h.current=!1}),(0,s.jsx)(d,{...c,ref:t,ignoreStrict:!0,children:(0,s.jsx)(A.Provider,{value:{axis:i,registerItem:(e,t)=>{let l=u.findIndex(t=>e===t.value);-1!==l?u[l].layout=t[i]:u.push({value:e,layout:t[i]}),u.sort(W)},updateOrder:(e,t,l)=>{if(h.current)return;let s=function(e,t,l,s){if(!s)return e;let a=e.findIndex(e=>e.value===t);if(-1===a)return e;let r=s>0?1:-1,i=e[a+r];if(!i)return e;let n=e[a],o=i.layout,c=(0,G.k)(o.min,o.max,.5);return 1===r&&n.layout.max+l>c||-1===r&&n.layout.min+l<c?(0,U.Pe)(e,a,a+r):e}(u,e,t,l);u!==s&&(h.current=!0,n(s.map(V).filter(e=>-1!==o.indexOf(e))))}},children:l})})});function V(e){return e.value}function W(e,t){return e.layout.min-t.layout.min}var Z=l(97814),$=l(10928);let K=(0,a.createContext)(void 0);function Q(e){let{initialState:t,isDragging:l,setIsDragging:a,children:r}=e,i=(0,y.L)(t);return(0,s.jsx)(K.Provider,{value:{multiSelect:i,isDragging:l,setIsDragging:a},children:r})}function Y(){let e=(0,a.useContext)(K);if(void 0===e)throw Error("useStatePanelContext must be used within a StatePanelProvider");return e}function X(e){let{children:t}=e;return(0,s.jsx)("h4",{className:"max-w-full truncate text-sm text-gray-500",title:"string"==typeof t?t:void 0,children:t})}function ee(e){let{children:t,className:l}=e,r=null===t?"null":void 0===t?"undefined":"string"==typeof t?t||"' '":JSON.stringify(t,null,2),i=(0,a.useRef)(r),n=(0,b.s)();return(0,a.useEffect)(()=>{(async()=>{r!==i.current&&(i.current=r,await n.start({opacity:1,transition:{duration:.05}}),await n.start({opacity:0,transition:{delay:.7,duration:2}}))})()},[t,n,r]),(0,s.jsxs)("button",{className:(0,p.cn)("relative max-w-[66.6%] truncate font-medium text-black hover:underline",l),onClick:async()=>{await navigator.clipboard.writeText(r),w.oR.success("Copied to clipboard")},title:"' '"===r?"empty string":r,children:[(0,s.jsx)(j.P.p,{animate:n,className:"absolute inset-0 -z-10 bg-teal-500/50",initial:{opacity:0}}),r]})}function et(e){let{label:t,children:l,className:a,valueClass:r}=e;return(0,s.jsxs)("div",{className:(0,p.cn)("flex w-full min-w-0 items-center gap-3",a),children:[(0,s.jsx)(X,{children:t}),(0,s.jsx)("div",{className:"border-alpha-200 h-px flex-1 border-t border-dashed"}),(0,s.jsx)(ee,{className:r,children:l})]})}function el(e){let{title:t,hook:l,children:r}=e,{multiSelect:{toggle:i},isDragging:n,setIsDragging:o}=Y(),c=(0,k.M)(L),[d,u]=(0,a.useState)(n),h=(0,a.useMemo)(()=>n||d,[n,d]);return(0,a.useEffect)(()=>{n?u(!0):setTimeout(()=>u(n),500)},[n]),(0,s.jsx)(J,{className:(0,p.cn)("-ml-2 w-full",!h&&"!scale-100"),dragControls:c,dragListener:!1,onDragEnd:()=>o(!1),onDragStart:()=>o(!0),value:l,children:(0,s.jsxs)(C.q7,{className:"flex flex-col gap-2",value:l,children:[(0,s.jsxs)("div",{className:"flex items-center",children:[(0,s.jsx)("div",{className:"group cursor-move p-2",onPointerDown:e=>{o(!0),c.start(e)},children:(0,s.jsx)("div",{className:"rounded-sm py-0.5 text-gray-400 transition-colors group-hover:bg-gray-300 group-hover:text-black",children:(0,s.jsx)(Z.A,{size:12})})}),(0,s.jsx)(C.Y9,{asChild:!0,children:(0,s.jsx)(C.l9,{asChild:!0,className:"group",onClick:()=>{u(!1),i(l)},children:(0,s.jsx)("button",{children:(0,s.jsxs)("h3",{className:"flex select-none items-center gap-1.5",children:[(0,s.jsx)("div",{className:"font-medium",children:t}),(0,s.jsx)("div",{className:"bg-muted rounded-sm border px-0.5 font-mono text-xs",children:l}),(0,s.jsx)("div",{className:"transition-all group-[&[data-state=open]]:rotate-90",children:(0,s.jsx)(N.c,{size:12})})]})})})})]}),(0,s.jsx)(C.UC,{className:"data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden data-[state=open]:mb-3",children:(0,s.jsx)("div",{className:"ml-[13px] flex flex-col gap-1 border-l pl-4 transition-all ",children:r})})]})})}function es(e){let{initialState:t,initialOrder:l}=e,[i,n]=(0,a.useState)(!1),[o,c]=(0,a.useState)(l),d=(0,a.useCallback)(e=>{c(e),r.A.set("ADMIN_PANEL_ORDER",JSON.stringify(e),{expires:7})},[]);return(0,a.useEffect)(()=>{document.body.style.userSelect=i?"none":""},[i]),(0,s.jsx)(Q,{initialState:t,isDragging:i,setIsDragging:n,children:(0,s.jsx)(q,{animate:!1,axis:"y",layoutScroll:!0,onReorder:d,values:o,children:(0,s.jsx)(ea,{order:o})})})}function ea(e){var t,l,a,i,n,o;let{order:c}=e,{multiSelect:{values:p}}=Y(),{chatId:b}=(0,m.xz)(),{draft:j}=(0,u.jh)(),{chatPrivacy:y}=(0,h.kM)(),N=(0,m.Pk)(),w=(0,h.tZ)(),{shareable:k}=(0,h.dW)(),M=(0,d.J)(),[L]=(0,f.d)(),P=(0,x.eu)(),A=(0,x.I4)(),{projectId:R}=(0,g.M9)(),_=(0,g._t)(),E=(0,$.k6)(),I={misc:(0,s.jsxs)(el,{hook:"misc",title:"Misc.",children:[(0,s.jsx)(et,{label:"chatId",children:b}),(0,s.jsx)(et,{label:"shareable",children:k}),(0,s.jsx)(et,{label:"blockView",children:A}),(0,s.jsx)(et,{label:"selectedProjectId",children:_.selectedProjectId}),(0,s.jsx)(et,{label:"projectId",children:R}),(0,s.jsx)(et,{label:"projects.length",children:_.projects.length})]},"misc"),usePromptDraft:(0,s.jsxs)(el,{hook:"usePromptDraft",title:"Draft",children:[(0,s.jsx)(et,{label:"message",children:null==j?void 0:j.message}),(0,s.jsx)(et,{label:"inputHeight",children:null==j?void 0:j.inputHeight}),(0,s.jsx)(et,{label:"localFileInfos.length",children:null==j?void 0:j.localFileInfos.length}),(0,s.jsx)(et,{label:"fileMap.keys.length",children:(null==j?void 0:j.fileMap)?Object.keys(j.fileMap).length:void 0}),(0,s.jsx)(et,{label:"updatedAt",children:null==j?void 0:j.updatedAt}),(0,s.jsx)(et,{label:"source",children:null==j?void 0:j.source}),(0,s.jsx)(et,{label:"key",children:null==j?void 0:j.key})]},"usePromptDraft"),useChatState:(0,s.jsxs)(el,{hook:"useChatState",title:"State",children:[(0,s.jsx)(et,{label:"messages.length",children:N.messages.length}),(0,s.jsx)(et,{label:"isLoading",children:N.isLoading}),(0,s.jsx)(et,{label:"isContinuing",children:N.isContinuing}),(0,s.jsx)(et,{label:"isStreaming",children:N.isStreaming}),(0,s.jsx)(et,{label:"isAuthor",children:N.isAuthor}),(0,s.jsx)(et,{label:"chatIdToken",children:N.chatIdToken}),(0,s.jsx)(et,{label:"prefillOptions.keys.length",children:N.prefillOptions?Object.keys(N.prefillOptions).length:0}),(0,s.jsx)(et,{label:"chatId",children:N.chatId})]},"useChatState"),useChatMetadata:(0,s.jsxs)(el,{hook:"useChatMetadata",title:"Meta",children:[(0,s.jsx)(et,{label:"title",children:w.title}),(0,s.jsx)(et,{label:"isEmpty",children:w.isEmpty}),(0,s.jsx)(et,{label:"isNew",children:w.isNew}),(0,s.jsx)(et,{label:"authorId",children:w.authorId})]},"useChatMetadata"),useUser:(0,s.jsxs)(el,{hook:"useUser",title:"User",children:[(0,s.jsx)(et,{label:"expectUser",children:M.expectUser}),(0,s.jsx)(et,{label:"id",children:null===(t=M.user)||void 0===t?void 0:t.id}),(0,s.jsx)(et,{label:"isAdminMode",children:null===(l=M.user)||void 0===l?void 0:l.isAdminMode}),(0,s.jsx)(et,{label:"isVercelian",children:null===(a=M.user)||void 0===a?void 0:a.isVercelian})]},"useUser"),useRateLimit:(0,s.jsxs)(el,{hook:"useRateLimit",title:"Rate",children:[(0,s.jsx)(et,{label:"remaining",children:null==L?void 0:L.remaining}),(0,s.jsx)(et,{label:"reset",children:null==L?void 0:L.reset}),(0,s.jsx)(et,{label:"limit",children:null==L?void 0:L.limit})]},"useRateLimit"),useChatPrivacy:(0,s.jsx)(el,{hook:"useChatPrivacy",title:"Privacy",children:(0,s.jsx)(et,{label:"chatPrivacy",children:y})},"useChatPrivacy"),useActiveBlockState:(0,s.jsxs)(el,{hook:"useActiveBlockState",title:"Block State",children:[(0,s.jsx)(et,{label:"initial",children:null==P?void 0:P.initial}),(0,s.jsx)(et,{label:"fullscreenOnLoad",children:null==P?void 0:P.fullscreenOnLoad}),(0,s.jsx)(et,{label:"id",children:null==P?void 0:P.id}),(0,s.jsx)(et,{label:"meta.type",children:null==P?void 0:P.meta.type}),(0,s.jsx)(et,{label:"meta.file",children:null==P?void 0:P.meta.file}),(0,s.jsx)(et,{label:"meta.project",children:null==P?void 0:P.meta.project}),(0,s.jsx)(et,{label:"type",children:null==P?void 0:P.type}),(0,s.jsx)(et,{label:"messageId",children:null==P?void 0:P.messageId}),(0,s.jsx)(et,{label:"source",children:null==P?void 0:P.source}),(0,s.jsx)(et,{label:"language",children:null==P?void 0:P.language}),(0,s.jsx)(et,{label:"closed",children:null==P?void 0:P.closed}),(0,s.jsx)(et,{label:"subdomain",children:null==P?void 0:P.subdomain}),(0,s.jsx)(et,{label:"hasSourceBeenEdited",children:null==P?void 0:P.hasSourceBeenEdited}),(0,s.jsx)(et,{label:"templateCanonId",children:null==P?void 0:P.templateCanonId}),(0,s.jsx)(et,{label:"templateVersionId",children:null==P?void 0:P.templateVersionId}),(0,s.jsx)(et,{label:"forkedFromBlockId",children:null==P?void 0:P.forkedFromBlockId})]},"useActiveBlockState"),useActiveScope:(0,s.jsxs)(el,{hook:"useActiveScope",title:"Active Scope",children:[(0,s.jsx)(et,{label:"activeScope.name",children:null===(i=E.activeScope)||void 0===i?void 0:i.name}),(0,s.jsx)(et,{label:"activeScopeSlug",children:E.activeScopeSlug}),(0,s.jsx)(et,{label:"isActiveScopeReady",children:E.isActiveScopeReady}),(0,s.jsx)(et,{label:"isTeam",children:E.isTeam}),(0,s.jsx)(et,{label:"scopes.length",children:null===(n=E.scopes)||void 0===n?void 0:n.length}),(0,s.jsx)(et,{label:"user.name",children:null===(o=E.user)||void 0===o?void 0:o.name})]},"useActiveScope")};return(0,s.jsxs)(C.bL,{className:"flex flex-col items-stretch gap-4 text-sm",onValueChange:e=>{r.A.set("ADMIN_PANEL_STATE",JSON.stringify(e),{expires:7})},type:"multiple",value:p,children:[c.map(e=>I[e]),(0,s.jsx)("hr",{}),(0,s.jsxs)("div",{className:"flex flex-col gap-3",children:[(0,s.jsxs)("h3",{className:"flex select-none items-center gap-1.5 font-medium",children:[(0,s.jsx)(S.C,{size:12}),"Raw JSON"]}),(0,s.jsx)(v.Zp,{children:(0,s.jsx)("pre",{className:"max-h-72 overflow-auto p-2 font-mono text-xs",children:JSON.stringify({chatId:b,draft:j,state:N,chatPrivacy:y,meta:w,shareable:k,user:M,rate:L,blockState:P,blockView:A,projectId:R,projects:_,activeScope:E},null,2)})})]})]})}var er=l(1044),ei=l(3329),en="__vtcr",eo=1,ec=class{commands;changeHandlers;constructor(){this.commands=[],this.changeHandlers=new Set}onChange(e){return this.changeHandlers.add(e),()=>this.changeHandlers.delete(e)}emitChange(){for(let e of this.changeHandlers)e()}register(e){this.commands.includes(e)||(this.commands.push(e),this.emitChange())}unregister(e){let t=this.commands.indexOf(e);-1!==t&&(this.commands.splice(t,1),this.emitChange())}},ed=()=>"u">typeof window&&(window.top||window),eu=()=>{let e=ed();if(e){let t=e[en];return t||(t=new ec,e[en]=t),t}};eu();var eh=(e,t)=>{if(e===t)return!0;if(!e||!t||e.length!==t.length)return!1;for(let l=e.length;l--;)if(e[l]!==t[l])return!1;return!0},em=class{key;_label;_badge;_badgeColor;_aliases;_href;onSelect;_visible;changeHandlers;constructor(e){this.key=`${eo++}\xd7${String(Math.random()).substring(2)}`,this._label=e.label,this._badge=e.badge,this._badgeColor=e.badgeColor,this._aliases=e.aliases,this._href=e.href,this.onSelect=e.onSelect,this._visible=e.visible,this.changeHandlers=new Set}get label(){return this._label}set label(e){this._label!==e&&(this._label=e,this.emitChange())}get badge(){return this._badge}set badge(e){this._badge!==e&&(this._badge=e,this.emitChange())}get badgeColor(){return this._badgeColor}set badgeColor(e){this._badgeColor!==e&&(this._badgeColor=e,this.emitChange())}get aliases(){return this._aliases}set aliases(e){eh(this._aliases,e)||(this._aliases=e,this.emitChange())}get href(){return this._href}set href(e){this._href!==e&&(this._href=e,this.emitChange())}get visible(){return this._visible}set visible(e){this._visible!==e&&(this._visible=e,this.emitChange())}remove(){eu()?.unregister(this)}onChange(e){return this.changeHandlers.add(e),()=>this.changeHandlers.delete(e)}emitChange(){for(let e of this.changeHandlers)e()}},ef=e=>{let t=new em(e);return eu()?.register(t),t},ex=e=>{let t=(0,a.useRef)();return(0,a.useEffect)(()=>{let l=t.current;l?(l.label=e.label,l.badge=e.badge,l.badgeColor=e.badgeColor,l.aliases=e.aliases,l.href=e.href,l.onSelect=e.onSelect,l.visible=e.visible):t.current=l=ef(e)}),(0,a.useEffect)(()=>()=>{t.current?.remove(),t.current=void 0},[]),t.current};let eg=["INPUT","TEXTAREA","BUTTON"];function ev(e){let{currentUserId:t,initialOpen:l,initialTab:d,initialState:u,initialPosition:h,initialOrder:m}=e;ex({label:"Chat Datadog Dashboard",aliases:["datadog"],href:"https://app.datadoghq.com/dashboard/jie-rn5-jfn",visible:!0}),ex({label:"v0-frame Datadog Logs",aliases:["frame logs"],href:"https://app.datadoghq.com/logs?saved-view-id=2893862",visible:!0}),ex({label:"v0chat Datadog Logs",aliases:["chat logs"],href:"https://app.datadoghq.com/logs?saved-view-id=3000893",visible:!0}),ex({label:"Go to /chat/internal",aliases:["internal"],href:"/chat/internal",visible:!0}),ex({label:"Preset Dash",aliases:["preset"],href:"https://6b9529fd.us2a.app.preset.io/superset/dashboard/281/",visible:!0});let[f,x]=(0,a.useState)(l),g=(0,a.useCallback)(e=>{r.A.set("ADMIN_PANEL_OPEN",String(e),{expires:7}),x(e)},[x]),[v,p]=(0,a.useState)(null!=d?d:"state"),b=(0,a.useCallback)(e=>{r.A.set("ADMIN_PANEL_TAB",e,{expires:7}),p(e)},[p]),[j,y]=(0,a.useState)(t||""),[C,N]=(0,a.useState)(""),[S,w]=(0,a.useState)(h),k=(0,a.useCallback)(e=>{r.A.set("ADMIN_PANEL_POSITION",e,{expires:7}),w(e)},[w]);return((0,o.ML)("keydown",e=>{"`"!==e.key||eg.includes(e.target.tagName)||g(!f)}),f)?(0,s.jsx)(n.Zp,{className:"fixed ".concat(S,"-4 top-4 z-50 flex max-h-[96vh] w-96 max-w-full flex-col"),children:(0,s.jsxs)(c.Tabs,{className:"flex min-h-0 flex-col",onValueChange:e=>b(e),value:v,children:[(0,s.jsxs)(n.aR,{className:"flex flex-row items-center justify-between space-y-0",children:[(0,s.jsx)(n.ZB,{className:"flex items-center gap-2",children:"Admin Panel"}),(0,s.jsxs)("div",{className:"flex items-center gap-2",children:[(0,s.jsx)(c.TabsList,{children:(0,s.jsx)(c.TabsTrigger,{value:"state",children:"State"})}),(0,s.jsx)(i.$,{onClick:()=>{k("right"===S?"left":"right")},size:"sm",title:"Move to ".concat("right"===S?"left":"right"),variant:"ghost",children:"right"===S?(0,s.jsx)(er.n,{}):(0,s.jsx)(ei.Q,{})})]})]}),(0,s.jsx)(n.Wu,{className:"overflow-y-scroll",children:(0,s.jsx)(c.a,{value:"state",children:(0,s.jsx)(es,{initialOrder:m,initialState:u})})})]})}):null}},71068:(e,t,l)=>{"use strict";l.d(t,{C:()=>s});let s=(0,l(69435).G)('<path fill-rule="evenodd" clip-rule="evenodd" d="M4.21969 12.5303L4.75002 13.0607L5.81068 12L5.28035 11.4697L1.81068 7.99999L5.28035 4.53032L5.81068 3.99999L4.75002 2.93933L4.21969 3.46966L0.39647 7.29289C0.00594562 7.68341 0.00594562 8.31658 0.39647 8.7071L4.21969 12.5303ZM11.7804 12.5303L11.25 13.0607L10.1894 12L10.7197 11.4697L14.1894 7.99999L10.7197 4.53032L10.1894 3.99999L11.25 2.93933L11.7804 3.46966L15.6036 7.29289C15.9941 7.68341 15.9941 8.31658 15.6036 8.7071L11.7804 12.5303Z" fill="currentColor"/>')},96453:(e,t,l)=>{"use strict";function s(e){return async t=>{let l,s=e.path,a=e.path.match(/\[([^\]]+)\]/g)||[];for(let e of a){let l=e.slice(1,-1),a=t[l];if(void 0===a)throw Error("Missing required parameter: ".concat(l));s=s.replace(e,encodeURIComponent(String(a)))}if("GET"===e.method){let e=new URLSearchParams;Object.entries(t).forEach(t=>{let[l,s]=t;a.includes("[".concat(l,"]"))||void 0===s||e.append(l,String(s))});let l=e.toString();l&&(s+="?".concat(l))}let r=e.method;if(!(l="GET"===r?await fetch(s):await fetch(s,{method:r,headers:{"Content-Type":"application/json"},body:JSON.stringify(t)})).ok){let e=await l.json().catch(()=>null);throw Error("HTTP error ".concat(l.status,": ").concat((null==e?void 0:e.error)||l.statusText))}return l.json()}}l.r(t),l.d(t,{createRouteFetcherForAction:()=>s})},97356:(e,t,l)=>{"use strict";l.d(t,{L:()=>f,default:()=>x});var s=l(27545),a=l(88704),r=l(97797),i=l(85551),n=l(24595),o=l(44041),c=l(23481),d=l(56670),u=l.n(d),h=l(62787),m=l(41664);function f(){let{data:e,mutate:t}=(0,m.Ay)("teamUpgradeDialog",null,{fallbackData:null});return{teamUpgradeDialog:e,setTeamUpgradeDialog:t}}function x(){var e;let{teamUpgradeDialog:t,setTeamUpgradeDialog:l}=f(),d=(0,n.k)("teamUpgradeDialog"),{planInfo:m,isLoading:x}=(0,o.N)(!0,null==t?void 0:t.id),g=null==m?void 0:null===(e=m.plans)||void 0===e?void 0:e.find(e=>"v0-team"===e.slug);if(!t||x||!g)return null;let v=(0,c.m9)(g);return(0,s.jsxs)(a.Modal,{onOpenChange:()=>l(null),open:!!t,children:[(0,s.jsxs)(a.ModalHeader,{className:"!pb-4",children:[(0,s.jsx)(a.ModalTitle,{children:d("title")}),(0,s.jsx)(a.ModalDescription,{children:d("description",t.name||t.slug)})]}),(0,s.jsxs)(a.ModalContent,{className:"flex flex-col gap-4",children:[(0,s.jsxs)("div",{className:"border-alpha-200 bg-muted m-0 space-y-3 rounded-sm border !p-4",children:[(0,s.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,s.jsx)("p",{className:"font-semibold",children:d("planName","Team")}),(0,s.jsxs)("div",{className:"inline-flex items-center gap-0.5",children:[(0,s.jsx)("p",{className:"text-xl font-semibold leading-7",children:v}),(0,s.jsx)("p",{className:"leading-5 text-gray-500",children:d("userPerMonth")})]})]}),(0,s.jsx)("p",{className:"font-semibold",children:d("forFastMovingTeams")}),(0,s.jsxs)("ul",{className:"space-y-3 text-sm",children:[(0,s.jsxs)("li",{className:"flex items-center gap-2",children:[(0,s.jsx)(i.J,{size:20})," ",d("everythingInPremium")]}),(0,s.jsxs)("li",{className:"flex items-center gap-2",children:[(0,s.jsx)(i.J,{size:20})," ",d("evenHigherLimits")]}),(0,s.jsxs)("li",{className:"flex items-center gap-2",children:[(0,s.jsx)(i.J,{size:20})," ",d("centralizedBilling")]})]})]}),(0,s.jsx)("p",{className:"text-sm text-gray-500",children:d("learnMore")})]}),(0,s.jsxs)(a.ModalFooter,{children:[(0,s.jsx)(a.ModalClose,{asChild:!0,children:(0,s.jsx)(r.$,{size:"sm",variant:"secondary",children:d("cancel")})}),(0,s.jsx)(r.$,{asChild:!0,onClick:()=>{(0,h.u)("ClickGoToUpgradeTeamPage",{teamId:t.id}),l(null)},size:"sm",children:(0,s.jsx)(u(),{href:"/chat/upgrade?teamId=".concat(t.id),children:d("startTeamPlan")})})]})]})}},97814:(e,t,l)=>{"use strict";l.d(t,{A:()=>s});let s=(0,l(81580).A)("GripVertical",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]])}},e=>{var t=t=>e(e.s=t);e.O(0,[470,7977,6846,9660,6849,4893,6897,1664,6670,9115,2950,4619,5112,83,6502,3922,4391,5025,2164,3054,3338,200,1535,7222,3248,4699,2236,6881,5838,4686,1572,6417,6479,4432,9248,7909,7358],()=>t(33221)),_N_E=e.O()}]);