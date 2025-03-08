"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6479],{1075:(e,l,t)=>{t.d(l,{q:()=>o});var a=t(39149),s=t(8228),n=t(41664),i=t(73501);let r=/^https:\/\/www\.figma\.com\/(?:file|design)\/[a-zA-Z0-9]+(?:\/[^\/]+)?\/?\?node-id=[0-9]+-[0-9]+(?:&node-type=(?:frame|component|section))?(?:&t=[a-zA-Z0-9-]+)?(?:&m=dev)?(?:&t=[a-zA-Z0-9-]+)?$/;function o(e){let l=(0,s.D)(),{setSignInWithFigmaModal:t}=(0,i.f)(),{data:o,isLoading:d}=(0,n.Ay)("integrations:figma",{fallbackData:{isSignedIn:!1,figmaOauthUrl:""}}),[c,u]=(0,a.useState)({imageBase64:null,originalUrl:null,fileName:null,isScreenshotLoading:!1,isContextLoading:!1,error:null,nodeContext:null}),m=(0,a.useCallback)(e=>l.fi&&!d&&r.test(e),[l.fi,d]),h=(0,a.useCallback)(async l=>{var a,s;let n=l||(null===(a=e.current)||void 0===a?void 0:a.value)||"";if(!n)return{success:!1,reason:"invalid_url"};if(!m(n))return{success:!1,reason:n.includes("figma.com")?"missing_node":"invalid_url"};if(u(e=>({...e,originalUrl:n,isScreenshotLoading:!0})),!(null==o?void 0:o.isSignedIn))return t({figmaOauthUrl:null!==(s=null==o?void 0:o.figmaOauthUrl)&&void 0!==s?s:""}),u(e=>({...e,isScreenshotLoading:!1})),{success:!1,needsAuth:!0};try{let e=await fetch("/chat/api/integrations/figma/get-screenshot?url=".concat(encodeURIComponent(n)));if(401===e.status)return t({figmaOauthUrl:o.figmaOauthUrl}),u(e=>({...e,imageBase64:null,originalUrl:null,fileName:null,isScreenshotLoading:!1,isContextLoading:!1,error:"Authentication required",nodeContext:null})),{success:!1,needsAuth:!0};if(!e.ok){let l=await e.json();throw Error(l.error||"Failed to fetch Figma image")}let l=await e.json(),a=new URL(n).pathname.split("/").pop()||"Figma Design",s={success:!0,data:{base64:l.base64,originalUrl:l.originalUrl,fileName:a}};return u(e=>({...e,imageBase64:l.base64,originalUrl:l.originalUrl,fileName:a,isScreenshotLoading:!1,error:null,nodeContext:JSON.stringify(l,null,0),imageHeight:l.height})),s}catch(l){console.error("Error fetching Figma image:",l);let e=l instanceof Error?l.message:"Failed to fetch image";return u(l=>({...l,imageBase64:null,originalUrl:null,fileName:null,isScreenshotLoading:!1,error:e,nodeContext:null})),{success:!1,error:e}}},[e,m,null==o?void 0:o.isSignedIn,null==o?void 0:o.figmaOauthUrl,t]),g=(0,a.useCallback)(async e=>{try{u(e=>({...e,isContextLoading:!0,error:null}));let l=await fetch("/chat/api/integrations/figma/context?url=".concat(encodeURIComponent(e))),t=await l.json();return u(e=>({...e,isContextLoading:!1,nodeContext:JSON.stringify(t,null,0)})),t}catch(l){let e=l instanceof Error?l.message:"Failed to fetch context";throw u(l=>({...l,isContextLoading:!1,error:e})),l}},[]);return(0,a.useMemo)(()=>{var e;return{...c,isLoading:c.isScreenshotLoading||c.isContextLoading||d,isFigmaLoading:d,handleFigmaUrl:h,isFigmaUrl:m,isSignedIn:!d&&null!==(e=null==o?void 0:o.isSignedIn)&&void 0!==e&&e,userData:o,getNodeContext:g}},[c,h,m,o,g,d])}},8228:(e,l,t)=>{t.d(l,{D:()=>r,FlagsProvider:()=>i});var a=t(27545),s=t(39149);let n=(0,s.createContext)(null);function i(e){let{children:l,promise:t,middlewareFlags:i}=e,r={};for(let e of i)r[e]=!0;let[o,d]=(0,s.useState)(r);return(0,s.useEffect)(()=>{t.then(e=>{(0,s.startTransition)(()=>{d(e)})})},[t]),(0,a.jsx)(n.Provider,{value:o,children:l})}function r(){let e=(0,s.useContext)(n);if(null===e)throw Error("");return e}},26241:(e,l,t)=>{t.d(l,{Q:()=>r});var a=t(27545),s=t(10289),n=t(97797),i=t(3906);function r(e){let{children:l,pending:t,spinnerSide:r="left",hideTextWhenPending:o=!1,innerClassName:d,...c}=e,u=t?(0,a.jsx)(s.y,{size:16}):null,m=o?null:u,h=o?(0,a.jsx)("div",{className:"absolute inset-0 flex items-center justify-center",children:u}):null;return(0,a.jsxs)(n.$,{size:"sm",...c,disabled:c.disabled||t,className:(0,i.cn)("relative",c.className),children:[h,(0,a.jsxs)("div",{className:(0,i.cn)("flex items-center justify-center gap-2 transition-opacity",o&&t&&"opacity-0",d),children:["left"===r?m:null,l,"right"===r?m:null]})]})}},33887:(e,l,t)=>{t.d(l,{ChatSidebarProvider:()=>c,e:()=>u});var a=t(27545),s=t(39149),n=t(98637),i=t(91572),r=t(8228);let o=function(){let e=localStorage.getItem("sidebar");return document.documentElement.dataset.state="collapsed"===e?"collapsed":"expanded","collapsed"===e?"collapsed":"expanded"},d=(0,s.createContext)({isCollapsed:!1,setCollapsed:()=>{},mobileSheetOpen:!1,setMobileSheetOpen:()=>{},actionChatId:null});function c(e){let{children:l}=e,{ns:t}=(0,r.D)(),[c,u]=(0,s.useState)(!1),[m,h]=(0,s.useState)(null),g=(0,s.useCallback)(e=>{h(e),localStorage.setItem("sidebar",e?"collapsed":"expanded"),document.documentElement.dataset.state=e?"collapsed":"expanded"},[]);(0,s.useEffect)(()=>{null===m&&g("collapsed"===localStorage.getItem("sidebar"))},[]);let x=(0,s.useCallback)(e=>{"sidebar"===e.key&&g("collapsed"===o())},[g]);(0,s.useEffect)(()=>(window.addEventListener("storage",x),()=>window.removeEventListener("storage",x)));let{showDeleteDialogForChatId:f}=(0,n.v)(),{showShareDialog:p}=(0,i.B)();return(0,a.jsx)(d.Provider,{value:{isCollapsed:!t&&null!=m&&m,setCollapsed:t?()=>{}:g,mobileSheetOpen:c,setMobileSheetOpen:u,actionChatId:f||("object"==typeof p?p.chatId:null)},children:l})}let u=()=>(0,s.useContext)(d)},34991:(e,l,t)=>{t.d(l,{X:()=>n});var a=t(27545),s=t(3906);function n(e){let{className:l,...t}=e;return(0,a.jsx)("svg",{className:(0,s.cn)("h-4 w-4 animate-spin",l),fill:"currentColor",viewBox:"0 0 256 256",xmlns:"http://www.w3.org/2000/svg",...t,children:(0,a.jsx)("path",{d:"M232 128a104 104 0 0 1-208 0c0-41 23.81-78.36 60.66-95.27a8 8 0 0 1 6.68 14.54C60.15 61.59 40 93.27 40 128a88 88 0 0 0 176 0c0-34.73-20.15-66.41-51.34-80.73a8 8 0 0 1 6.68-14.54C208.19 49.64 232 87 232 128Z"})})}},38540:(e,l,t)=>{t.d(l,{j:()=>n});var a=t(27545),s=t(3906);function n(e){let{count:l,max:t,className:n,displayThreshold:i,alertThreshold:r,message:o,messageThreshold:d,...c}=e;return i=null!=i?i:.75*t,d=null!=d?d:.9*t,r=null!=r?r:.95*t,(0,a.jsxs)("div",{className:(0,s.cn)("pointer-events-none items-center gap-2 rounded-md px-2 py-1 text-xs",l>=i?"flex":"hidden",l>=r?"text-red-500":"text-gray-500",n),...c,children:[o&&l>=d&&(0,a.jsx)("span",{children:o}),(0,a.jsxs)("span",{className:"ml-auto tabular-nums",children:[l.toLocaleString(),"/",t.toLocaleString()]})]})}},47253:(e,l,t)=>{t.d(l,{Kv:()=>a});function a(e){return function(e,l){let t,a="";for(let l=e.length-1;l>=0;l--){if("-"===e[l]&&a.length>=7){t=e.slice(0,l);break}a=e[l]+a}return!t&&a.length<e.length&&(t=e.slice(0,e.length-a.length-1)),{id:a,title:t||void 0}}(e,7).id}},72658:(e,l,t)=>{t.d(l,{UpdateChatTitleDialog:()=>I,d:()=>S});var a=t(27545),s=t(39149),n=t(97797),i=t(88704),r=t(6145);let o=(0,r.createServerReference)("40683fd3340d05fba20112dc3fcd16408038403703",r.callServer,void 0,r.findSourceMapURL,"updateChatTitle");var d=t(82325),c=t(79603),u=t(70244),m=t(50403),h=t(41664),g=t(34991),x=t(33887),f=t(76441),p=t(36990),v=t(21276),j=t(23338),b=t(38540),C=t(24595),N=t(18214),w=t(53515),y=t(47253);let F=j.z.object({title:j.z.string().min(1,"Title is required").max(100,"Title must be less than 100 characters")});function S(){let{data:e,mutate:l}=(0,h.Ay)("showUpdateChatTitleDialogForChatId",null);return{showUpdateChatTitleDialogForChatId:e,setUpdateChatTitleDialogForChatId:l}}function I(){let{showUpdateChatTitleDialogForChatId:e,setUpdateChatTitleDialogForChatId:l}=S(),t=(0,c.useRouter)(),[r,h]=(0,s.useTransition)(),{title:j,setMetadata:I}=(0,d.tZ)(),[k,U]=(0,s.useState)(""),M=(0,N.cy)(),{setMobileSheetOpen:L}=(0,x.e)(),{data:E,setData:T}=(0,f.m)(),{data:D,setData:z}=(0,f.r)(),[O,R]=(0,s.useState)(""),A="string"==typeof M.id?(0,y.Kv)(M.id):null,P=s.useRef(null),_=(0,C.k)("updateChatTitleDialog"),$=(0,w.al)();(0,s.useEffect)(()=>{l(null)},[l]),(0,s.useEffect)(()=>{if(e){let l=null==E?void 0:E.find(l=>l.chatId===e);R((null==l?void 0:l.title)||j||""),U((null==l?void 0:l.title)||j||"")}},[e,E,j]),(0,s.useEffect)(()=>{e&&setTimeout(()=>{var e,l;null===(e=P.current)||void 0===e||e.focus(),$||null===(l=P.current)||void 0===l||l.select()},0)},[e,$]);let H=(0,s.useCallback)(()=>{e&&h(async()=>{try{let t=null==D?void 0:D.find(l=>l.chatId===e),a=await o({chatId:e,title:k.trim()||"Untitled"});if("success"in a)t&&z(l=>l.map(l=>l.chatId===e?{...l,title:k.trim()||"Untitled"}:l)),(null==E?void 0:E.find(l=>l.chatId===e))&&T(l=>l.map(l=>l.chatId===e?{...l,title:k.trim()||"Untitled"}:l)),A===e&&I({title:k.trim()||"Untitled"}),u.oR.success(_("successToast")),A!==e&&A||L(!1),l(null);else throw Error(v.YK)}catch(e){(0,p.z)(e,t)||u.oR.error("Failed to update chat title. Please try again."),z(()=>D||[]),T(()=>E||[])}})},[e,D,k,E,A,_,l,z,T,I,L,t]),B=(0,s.useCallback)(()=>{l(null)},[l]),V=(0,s.useCallback)(e=>{e.preventDefault();let l=F.safeParse({title:k});if(!l.success){var t;let e=l.error.flatten().fieldErrors;u.oR.error((null===(t=e.title)||void 0===t?void 0:t[0])||"Invalid title");return}H()},[H,k]);return(0,a.jsx)(i.Modal,{onOpenChange:e=>{e||l(null)},open:null!==e,children:(0,a.jsxs)("form",{onSubmit:V,children:[(0,a.jsxs)(i.ModalHeader,{children:[(0,a.jsx)(i.ModalTitle,{children:_("title")}),(0,a.jsxs)(i.ModalDescription,{children:[(0,a.jsx)("label",{className:"sr-only",htmlFor:"newChatTitle",children:_("newChatTitle")}),(0,a.jsx)(m.p,{"aria-label":_("newChatTitle"),autoComplete:"off",autoFocus:!0,className:"w-full",id:"newChatTitle",maxLength:100,onChange:e=>U(e.target.value),placeholder:O||_("enterNewTitle"),ref:P,value:k}),(0,a.jsx)(b.j,{className:"mt-2",count:k.length,max:100,message:"Title must be less than ".concat(100," characters")})]})]}),(0,a.jsxs)(i.ModalFooter,{children:[(0,a.jsx)(n.$,{onClick:B,size:"sm",type:"button",variant:"secondary",children:_("cancel")}),(0,a.jsx)(n.$,{disabled:r,size:"sm",type:"submit",children:r?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.X,{"aria-hidden":"true",className:"size-4"}),(0,a.jsx)("span",{children:_("saving")})]}):_("save")})]})]})})}},73501:(e,l,t)=>{t.d(l,{default:()=>m,f:()=>h});var a=t(27545),s=t(39149),n=t(88704),i=t(97797),r=t(41664),o=t(20771),d=t(24595),c=t(62787),u=t(79603);function m(){let e=(0,d.k)("figmaIntegration"),{figmaOauthUrl:l,setSignInWithFigmaModal:t}=h(),r=(0,u.usePathname)()+(0,u.useSearchParams)().toString(),m=(0,u.useRouter)();(0,s.useEffect)(()=>{l&&(0,c.u)("FigmaAuthModalOpen")},[l]);let g=e=>{(0,c.u)("FigmaAuthModalClose",{reason:e}),t(null)},x=async()=>{let e=await fetch("/chat/api/integrations/figma/get-oauth-url?returnPath=".concat(encodeURIComponent(r))).then(e=>e.json()).then(e=>e.url);m.push(e)};return l?(0,a.jsx)(n.Modal,{onOpenChange:e=>!e&&g("cancel"),open:!!l,children:(0,a.jsxs)("div",{className:"grid gap-6",children:[(0,a.jsx)(n.ModalHeader,{className:"flex justify-start p-5",children:(0,a.jsxs)("div",{className:"flex w-full flex-col items-start gap-4",children:[(0,a.jsx)("div",{className:"bg-muted border-border flex items-center gap-2 rounded-lg p-2",children:(0,a.jsx)("div",{className:"rounded-lg border bg-white p-2",children:(0,a.jsx)(o.Y,{className:"text-muted-foreground h-6 w-6"})})}),(0,a.jsxs)("div",{className:"flex flex-col items-start gap-1.5",children:[(0,a.jsx)(n.ModalTitle,{className:"text-xl font-semibold",children:e("signInWithFigma")}),(0,a.jsx)(n.ModalDescription,{className:"text-sm text-zinc-500",children:e("signInDescription")})]})]})}),(0,a.jsx)(n.ModalFooter,{className:"border-border bg-muted border-t !p-4",children:(0,a.jsxs)("div",{className:"flex w-full items-center justify-end gap-4",children:[(0,a.jsx)(n.ModalClose,{asChild:!0,children:(0,a.jsx)(i.$,{onClick:()=>g("cancel"),size:"sm",variant:"secondary",children:e("cancel")})}),(0,a.jsx)(i.$,{onClick:x,size:"sm",variant:"default",autoFocus:!0,children:e("signIn")})]})})]})}):null}function h(){let{data:e,mutate:l}=(0,r.Ay)("signInWithFigmaModal",null);return{figmaOauthUrl:null==e?void 0:e.figmaOauthUrl,setSignInWithFigmaModal:l}}},79245:(e,l,t)=>{t.d(l,{N:()=>o});var a=t(27545),s=t(3906),n=t(56670),i=t.n(n),r=t(90590);function o(e){let{className:l,children:t,variant:n="default",external:o=!1,tooltip:d,disabled:c=!1,...u}=e,m=(0,a.jsx)(i(),{className:(0,s.cn)("marketing"===n&&"font-medium text-teal-700 hover:underline hover:underline-offset-2",c&&"cursor-not-allowed text-gray-400",l),target:o?"_blank":void 0,...u,children:t});return d?("string"==typeof d&&(d={content:d}),(0,a.jsx)(r.Tooltip,{...d,children:m})):m}},89187:(e,l,t)=>{t.d(l,{_:()=>s});var a=t(6145);let s=(0,a.createServerReference)("40350cb1b44fd2c4600c907d0595735c2a484ecadb",a.callServer,void 0,a.findSourceMapURL,"deleteChat")},95720:(e,l,t)=>{t.d(l,{C:()=>k,ImportFromFigmaModal:()=>I});var a=t(27545),s=t(39149),n=t(88704),i=t(97797),r=t(50403),o=t(26241),d=t(20771),c=t(32653),u=t(28154),m=t(63122),h=t(97945),g=t(2731),x=t(1064),f=t(62787),p=t(24595),v=t(1075),j=t(73501),b=t(41664),C=t(2006),N=t(79245),w=t(79453);function y(e){let{inputRef:l,inputValue:t,setInputValue:s,urlError:d,setUrlError:u,handleImport:f,handleClose:v,isLoading:j}=e,b=(0,p.k)("figmaIntegration");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.ModalHeader,{className:"flex justify-start p-5",children:(0,a.jsxs)("div",{className:"flex w-full flex-col items-start gap-2",children:[(0,a.jsxs)("div",{className:"bg-muted/50 relative h-[180px] w-full rounded-md",children:[(0,a.jsx)(m.default,{src:"/chat-static/figma-integration-light.svg",alt:"",className:"h-full w-full rounded-md object-cover dark:hidden",fill:!0,priority:!0}),(0,a.jsx)(m.default,{src:"/chat-static/figma-integration-dark.svg",alt:"",className:"hidden h-full w-full rounded-md object-cover dark:block",fill:!0,priority:!0})]}),(0,a.jsxs)("div",{className:"flex w-full flex-col items-start gap-2",children:[(0,a.jsx)(n.ModalTitle,{className:"text-xl font-semibold",children:b("importFromFigma")}),(0,a.jsxs)("form",{className:"flex w-full flex-col space-y-3",onSubmit:e=>{e.preventDefault(),f()},children:[(0,a.jsx)("div",{className:"text-left text-sm text-gray-900",children:(0,a.jsx)(n.ModalDescription,{children:b("importFigmaDescription")})}),(0,a.jsxs)("div",{className:"space-y-1.5",children:[(0,a.jsx)(r.p,{ref:l,type:"url",size:"sm",placeholder:b("enterFigmaUrl"),className:(0,x.cn)("bg-subtle w-full",d&&"border-red-500"),value:t,onChange:e=>{s(e.target.value),d&&u(null)}}),(0,a.jsx)(h.N,{mode:"sync",children:d&&(0,a.jsx)(g.P.div,{initial:{height:0,opacity:0,y:-8},animate:{height:"auto",opacity:1,y:0},exit:{height:0,opacity:0,y:-8},transition:{duration:.15,ease:"easeOut"},children:(0,a.jsxs)("span",{className:"flex items-center gap-2 whitespace-nowrap text-red-500",children:[(0,a.jsx)(c.V,{className:"h-4 w-4 shrink-0"}),(0,a.jsx)("span",{className:"truncate text-sm",children:d})]})})})]})]})]})]})}),(0,a.jsx)(n.ModalFooter,{className:"border-border bg-muted border-t !p-4",children:(0,a.jsxs)("div",{className:"flex w-full items-center justify-end gap-2",children:[(0,a.jsx)(n.ModalClose,{asChild:!0,disabled:j,children:(0,a.jsx)(i.$,{onClick:v,size:"sm",variant:"secondary",disabled:j,children:b("cancel")})}),(0,a.jsx)(o.Q,{onClick:f,size:"sm",pending:j,autoFocus:!0,children:b("next")})]})})]})}function F(e){let{color:l}=e;return(0,a.jsxs)("div",{className:"flex items-center gap-1 rounded-md border p-1",children:[(0,a.jsx)("div",{className:"h-4 w-4 rounded-sm border",style:{backgroundColor:l.hex}}),(0,a.jsx)("div",{className:"flex flex-col",children:(0,a.jsx)("span",{className:"text-muted-foreground text-xs",children:l.hex.toLowerCase()})})]})}function S(e){let{imageBase64:l,originalFigmaUrl:t,nodeContext:s,handleImport:r,handleClose:c,isLoading:h,imageHeight:g}=e,x=(0,p.k)("figmaIntegration");return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"max-h-[calc(100vh-8rem)] overflow-y-auto",children:(0,a.jsx)(n.ModalHeader,{className:"flex w-full flex-col p-3 md:p-5",children:(0,a.jsxs)("div",{className:"flex w-full flex-col gap-3 md:gap-4",children:[(0,a.jsx)(n.ModalTitle,{className:"text-left text-lg font-semibold md:text-xl",children:x("heresWhatWellImport")}),(0,a.jsxs)("div",{className:"flex w-full flex-col gap-2",children:[(0,a.jsx)("h3",{className:"text-left text-sm font-medium md:text-base",children:x("visualContext")}),g&&g/2>982&&(0,a.jsxs)(w.Fc,{children:[(0,a.jsx)(u.A,{className:"h-4 w-4"}),(0,a.jsx)(w.TN,{children:x("heightWarning")})]}),(0,a.jsx)("div",{className:"bg-muted/50 relative h-[200px] w-full rounded-md border md:h-[400px]",children:l&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.default,{src:l,alt:"Figma design preview",className:"rounded-md object-cover object-top",fill:!0,sizes:"100vw",priority:!0}),(0,a.jsx)("div",{className:"absolute bottom-2 right-2 z-10 md:bottom-3 md:right-3",children:(0,a.jsx)(N.N,{href:t,target:"_blank",rel:"noopener noreferrer",onClick:e=>e.stopPropagation(),passHref:!0,children:(0,a.jsxs)(C.E,{className:"bg-muted hover:bg-muted/50 max-w-[200px] cursor-pointer truncate text-xs md:text-sm",variant:"secondary",children:[(0,a.jsx)(d.Y,{className:"h-3 w-3 shrink-0"}),(0,a.jsx)("span",{className:"truncate",children:s.frameName||x("openInFigma")})]})})})]})}),(0,a.jsx)("div",{className:"mt-3 flex flex-col space-y-3",children:(0,a.jsxs)("div",{className:"flex flex-col md:flex-row md:gap-6",children:[s.nodes.designTokens.length>0&&(0,a.jsxs)("div",{className:"mb-6 flex flex-1 flex-col gap-2 md:mb-0",children:[(0,a.jsx)("h3",{className:"text-left text-sm font-medium md:text-base",children:x("designTokens")}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:s.nodes.designTokens.map((e,l)=>(0,a.jsx)(F,{color:e},e.hex||l))})]}),s.nodes.colors.length>0&&(0,a.jsxs)("div",{className:"flex flex-1 flex-col gap-2",children:[(0,a.jsx)("h3",{className:"text-left text-sm font-medium md:text-base",children:x("colors")}),(0,a.jsx)("div",{className:"flex flex-wrap gap-2",children:s.nodes.colors.map((e,l)=>(0,a.jsx)(F,{color:e},e.hex||l))})]})]})})]})]})})}),(0,a.jsx)(n.ModalFooter,{className:"border-border bg-muted sticky bottom-0 border-t !p-3 md:!p-4",children:(0,a.jsxs)("div",{className:"flex w-full items-center justify-end gap-2",children:[(0,a.jsx)(n.ModalClose,{asChild:!0,disabled:h,children:(0,a.jsx)(i.$,{onClick:c,size:"sm",variant:"secondary",disabled:h,children:x("cancel")})}),(0,a.jsx)(o.Q,{onClick:r,size:"sm",pending:h,autoFocus:!0,children:x("confirm")})]})})]})}function I(){var e;let l=(0,p.k)("figmaIntegration"),{importFigmaModalOpen:t,setImportFigmaModalOpen:i}=k(),{setSignInWithFigmaModal:r}=(0,j.f)(),[o,d]=(0,s.useState)("url"),[c,u]=(0,s.useState)(null),[m,h]=s.useState(null),g=s.useRef(null),[b,C]=s.useState(""),[N,w]=s.useState(""),F=(0,v.q)(g);(0,s.useEffect)(()=>{if((null==t?void 0:t.open)&&!F.isSignedIn){var e,l;i(null),r({figmaOauthUrl:"".concat(null!==(l=null===(e=F.userData)||void 0===e?void 0:e.figmaOauthUrl)&&void 0!==l?l:"","&from=import")})}},[F.isSignedIn,null==t?void 0:t.open,i,r,null===(e=F.userData)||void 0===e?void 0:e.figmaOauthUrl]);let I=()=>{i(null),h(null),C(""),d("url"),g.current&&(g.current.value="")},U=()=>{I(),(0,f.u)("FigmaModalClose")},M=async()=>{if(!b){let e=l("enterValidUrl");h(e),(0,f.u)("FigmaUrlSubmit",{url:"",success:!1,error:e});return}try{await L(b)}catch(e){(0,f.u)("FigmaUrlSubmit",{url:b,success:!1,error:e instanceof Error?e.message:"Unknown error"})}},L=async e=>{let a,s=!1;if("url"===o){if(F.isFigmaUrl(e))try{let[t,s]=await Promise.all([F.getNodeContext(e),F.handleFigmaUrl(e)]);s.success?(u(t),w(s.data.base64),h(null),d("context")):(a=s.error||l("invalidUrl"),h(a))}catch(e){a=e instanceof Error?e.message:"Error loading Figma content",h("Error loading Figma content")}else h(a=l("invalidUrl"))}else(await F.handleFigmaUrl(e)).success&&(null==t?void 0:t.onImport)?(U(),await t.onImport(e),s=!0):h(a="Failed to import Figma URL");(0,f.u)("FigmaUrlSubmit",{url:e,success:s,error:a})};return t?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.Modal,{onClose:U,onOpenChange:F.isLoading?void 0:I,open:!!t,className:(0,x.cn)("w-full","url"===o?"max-w-xl":"md:!w-[800px]"),children:(0,a.jsx)("div",{className:"flex w-full flex-col",children:c?"url"===o?(0,a.jsx)(y,{inputRef:g,inputValue:b,setInputValue:C,urlError:m,setUrlError:h,handleImport:M,handleClose:U,isLoading:F.isLoading}):(0,a.jsx)(S,{imageBase64:N,originalFigmaUrl:b,nodeContext:c,handleImport:M,handleClose:U,isLoading:F.isLoading,imageHeight:F.imageHeight}):(0,a.jsx)(y,{inputRef:g,inputValue:b,setInputValue:C,urlError:m,setUrlError:h,handleImport:M,handleClose:U,isLoading:F.isLoading})})}),(0,a.jsx)(j.default,{})]}):null}function k(){let{data:e,mutate:l}=(0,b.Ay)("useImportFromFigmaModal",null);return{importFigmaModalOpen:e,setImportFigmaModalOpen:l,figmaContext:null==e?void 0:e.figmaContext}}},98637:(e,l,t)=>{t.d(l,{DeleteChatDialog:()=>j,v:()=>v});var a=t(27545),s=t(97797),n=t(70244),i=t(88704),r=t(41664),o=t(39149),d=t(79603),c=t(76441),u=t(62787),m=t(89187),h=t(33887),g=t(18214),x=t(24595),f=t(34991),p=t(36990);function v(){let{data:e,mutate:l}=(0,r.Ay)("showDeleteDialogForChatId",null);return{showDeleteDialogForChatId:e,setDeleteDialogForChatId:l}}function j(){let{showDeleteDialogForChatId:e,setDeleteDialogForChatId:l}=v(),t=(0,d.useRouter)(),r=(0,g.cy)(),[j,b]=(0,o.useTransition)(),{setData:C}=(0,c.m)(),{setMobileSheetOpen:N}=(0,h.e)(),w=(0,x.k)("deleteChatDialog");return(0,a.jsxs)(i.Modal,{onOpenChange:e=>{e||l(void 0)},open:void 0!==e,children:[(0,a.jsxs)(i.ModalHeader,{children:[(0,a.jsx)(i.ModalTitle,{children:w("title")}),(0,a.jsx)(i.ModalDescription,{children:w("description")})]}),(0,a.jsxs)(i.ModalFooter,{children:[(0,a.jsx)(i.ModalClose,{asChild:!0,children:(0,a.jsx)(s.$,{size:"sm",variant:"secondary",children:w("cancel")})}),(0,a.jsx)(s.$,{disabled:j,onClick:()=>{e&&b(async()=>{try{(0,u.u)("ClickDeleteChat",{targetChatId:e}),await (0,m._)({payload:{chatId:e}}),C(l=>l.filter(l=>l.chatId!==e)),l(void 0),n.oR.success(w("successToast")),r.id===e&&(N(!1),t.push("/chat"))}catch(e){(0,p.z)(e)||n.oR.error("Something went wrong. Please try again.")}})},size:"sm",variant:"destructive",children:j?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.X,{className:"size-4"}),w("deleting")]}):w("delete")})]})]})}}}]);