(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return i(4186)}])},9749:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(6495).Z,r=i(2648).Z,s=i(1598).Z,a=i(7273).Z,o=s(i(7294)),l=r(i(3121)),c=i(2675),d=i(139),u=i(8730);i(7238);var f=r(i(9824));let m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/next-poc/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,i,r,s,a,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let l="decode"in e?e.decode():Promise.resolve();l.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===i&&a(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,s=!1;r.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}}))}(null==s?void 0:s.current)&&s.current(e)}})}let y=o.forwardRef((e,t)=>{var{imgAttributes:i,heightInt:r,widthInt:s,qualityInt:l,className:c,imgStyle:d,blurStyle:u,isLazy:f,fill:m,placeholder:h,loading:p,srcString:y,config:w,unoptimized:v,loader:x,onLoadRef:b,onLoadingCompleteRef:j,setBlurComplete:_,setShowAltText:N,onLoad:k,onError:E}=e,S=a(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return p=f?"lazy":p,o.default.createElement(o.default.Fragment,null,o.default.createElement("img",Object.assign({},S,i,{width:s,height:r,decoding:"async","data-nimg":m?"fill":"1",className:c,loading:p,style:n({},d,u),ref:o.useCallback(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(E&&(e.src=e.src),e.complete&&g(e,y,h,b,j,_,v))},[y,h,b,j,_,E,v,t]),onLoad:e=>{let t=e.currentTarget;g(t,y,h,b,j,_,v)},onError:e=>{N(!0),"blur"===h&&_(!0),E&&E(e)}})))}),w=o.forwardRef((e,t)=>{let i,r;var s,{src:g,sizes:w,unoptimized:v=!1,priority:x=!1,loading:b,className:j,quality:_,width:N,height:k,fill:E,style:S,onLoad:I,onLoadingComplete:C,placeholder:z="empty",blurDataURL:L,layout:O,objectFit:R,objectPosition:P,lazyBoundary:A,lazyRoot:T}=e,M=a(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL","layout","objectFit","objectPosition","lazyBoundary","lazyRoot"]);let H=o.useContext(u.ImageConfigContext),W=o.useMemo(()=>{let e=m||H||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),i=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:i})},[H]),B=M,D=B.loader||f.default;delete B.loader;let F="__next_img_default"in D;if(F){if("custom"===W.loader)throw Error('Image with src "'.concat(g,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let e=D;D=t=>{let{config:i}=t,n=a(t,["config"]);return e(n)}}if(O){"fill"===O&&(E=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(S=n({},S,e));let t={responsive:"100vw",fill:"100vw"}[O];t&&!w&&(w=t)}let G="",U=p(N),Z=p(k);if("object"==typeof(s=g)&&(h(s)||void 0!==s.src)){let e=h(g)?g.default:g;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(e)));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(e)));if(i=e.blurWidth,r=e.blurHeight,L=L||e.blurDataURL,G=e.src,!E){if(U||Z){if(U&&!Z){let t=U/e.width;Z=Math.round(e.height*t)}else if(!U&&Z){let t=Z/e.height;U=Math.round(e.width*t)}}else U=e.width,Z=e.height}}let q=!x&&("lazy"===b||void 0===b);((g="string"==typeof g?g:G).startsWith("data:")||g.startsWith("blob:"))&&(v=!0,q=!1),W.unoptimized&&(v=!0),F&&g.endsWith(".svg")&&!W.dangerouslyAllowSVG&&(v=!0);let[V,J]=o.useState(!1),[Q,X]=o.useState(!1),K=p(_),$=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:R,objectPosition:P}:{},Q?{}:{color:"transparent"},S),Y="blur"===z&&L&&!V?{backgroundSize:$.objectFit||"cover",backgroundPosition:$.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:U,heightInt:Z,blurWidth:i,blurHeight:r,blurDataURL:L}),'")')}:{},ee=function(e){let{config:t,src:i,unoptimized:n,width:r,quality:s,sizes:a,loader:o}=e;if(n)return{src:i,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,i){let{deviceSizes:n,allSizes:r}=e;if(i){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(i);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:r.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:r,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let s=[...new Set([t,2*t].map(e=>r.find(t=>t>=e)||r[r.length-1]))];return{widths:s,kind:"x"}}(t,r,a),d=l.length-1;return{sizes:a||"w"!==c?a:"100vw",srcSet:l.map((e,n)=>"".concat(o({config:t,src:i,quality:s,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:o({config:t,src:i,quality:s,width:l[d]})}}({config:W,src:g,unoptimized:v,width:U,quality:K,sizes:w,loader:D}),et=g,ei={imageSrcSet:ee.srcSet,imageSizes:ee.sizes,crossOrigin:B.crossOrigin},en=o.useRef(I);o.useEffect(()=>{en.current=I},[I]);let er=o.useRef(C);o.useEffect(()=>{er.current=C},[C]);let es=n({isLazy:q,imgAttributes:ee,heightInt:Z,widthInt:U,qualityInt:K,className:j,imgStyle:$,blurStyle:Y,loading:b,config:W,fill:E,unoptimized:v,placeholder:z,loader:D,srcString:et,onLoadRef:en,onLoadingCompleteRef:er,setBlurComplete:J,setShowAltText:X},B);return o.default.createElement(o.default.Fragment,null,o.default.createElement(y,Object.assign({},es,{ref:t})),x?o.default.createElement(l.default,null,o.default.createElement("link",Object.assign({key:"__nimg-"+ee.src+ee.srcSet+ee.sizes,rel:"preload",as:"image",href:ee.srcSet?void 0:ee.src},ei))):null)});t.default=w,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:i,blurWidth:n,blurHeight:r,blurDataURL:s}=e,a=n||t,o=r||i,l=s.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return a&&o?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(a," ").concat(o,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&r?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(s,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(s,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function i(e){let{config:t,src:i,width:n,quality:r}=e;return"".concat(t.path,"?url=").concat(encodeURIComponent(i),"&w=").concat(n,"&q=").concat(r||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i.__next_img_default=!0,t.default=i},4186:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return f}});var n=i(5893),r=i(9008),s=i.n(r),a=i(5675),o=i.n(a),l=i(1502),c=i.n(l),d=i(1664),u=i.n(d);function f(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("header",{className:"flex flex-row w-full justify-between px-24",children:[(0,n.jsx)("div",{children:(0,n.jsx)(o(),{src:"/logo.jpg",alt:"",width:200,height:200,className:"w-1/2"})}),(0,n.jsx)("nav",{className:"flex flex-row w-1/2 justify-end",children:(0,n.jsxs)("div",{className:c().topnav,children:[(0,n.jsx)(u(),{href:"/",children:"Home"}),(0,n.jsx)(u(),{href:"/about",children:"About"})]})})]}),(0,n.jsxs)("main",{className:c().main,children:[(0,n.jsxs)("section",{className:"flex flex-row w-full pb-36",children:[(0,n.jsxs)("article",{className:"flex justify-around w-1/2",children:[(0,n.jsx)("hr",{className:c().highlighter+" w-1/12"}),(0,n.jsx)("p",{className:"w-10/12",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but"})]}),(0,n.jsxs)("aside",{className:"w-1/2",children:[(0,n.jsx)("figure",{children:(0,n.jsx)(o(),{src:"/teenage.jpg",alt:"",width:1e3,height:600,className:c().image})}),(0,n.jsx)("h2",{className:c().subTitle,children:" WHAT IS LOREM IPSUM?"}),(0,n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but"})]})]}),(0,n.jsxs)("section",{className:"flex flex-row w-full pb-6",children:[(0,n.jsxs)("aside",{className:"w-1/2",children:[(0,n.jsx)("figure",{children:(0,n.jsx)(o(),{src:"/home.jpg",alt:"",width:1e3,height:600,className:c().image})}),(0,n.jsx)("h2",{className:c().subTitle,children:" WHAT IS LOREM IPSUM?"}),(0,n.jsx)("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but"})]}),(0,n.jsxs)("article",{className:"flex justify-around w-1/2",children:[(0,n.jsx)("hr",{className:c().highlighter+" w-1/12"}),(0,n.jsx)("p",{className:"w-10/12",children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but"})]})]})]}),(0,n.jsx)("footer",{className:c().footer+" flex w-full items-center	px-24",children:"Footer"})]})}},1502:function(e){e.exports={main:"Home_main__nLjiQ",topnav:"Home_topnav__BfkuW",image:"Home_image__yn5pu",highlighter:"Home_highlighter__yyZuN",subTitle:"Home_subTitle__QVpk0",footer:"Home_footer____T7K"}},9008:function(e,t,i){e.exports=i(3121)},5675:function(e,t,i){e.exports=i(9749)}},function(e){e.O(0,[664,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);