(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{8971:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/signup",function(){return r(3113)}])},8418:function(e,n,r){"use strict";function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,a=new Array(n);r<n;r++)a[r]=e[r];return a}function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,t,l=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(a=r.next()).done)&&(l.push(a.value),!n||l.length!==n);i=!0);}catch(o){s=!0,t=o}finally{try{i||null==r.return||r.return()}finally{if(s)throw t}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return a(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}n.default=void 0;var l,i=(l=r(7294))&&l.__esModule?l:{default:l},s=r(6273),o=r(387),c=r(7190);var u={};function d(e,n,r,a){if(e&&s.isLocalURL(n)){e.prefetch(n,r,a).catch((function(e){0}));var t=a&&"undefined"!==typeof a.locale?a.locale:e&&e.locale;u[n+"%"+r+(t?"%"+t:"")]=!0}}var p=function(e){var n,r=!1!==e.prefetch,a=o.useRouter(),l=i.default.useMemo((function(){var n=t(s.resolveHref(a,e.href,!0),2),r=n[0],l=n[1];return{href:r,as:e.as?s.resolveHref(a,e.as):l||r}}),[a,e.href,e.as]),p=l.href,h=l.as,f=e.children,m=e.replace,g=e.shallow,x=e.scroll,j=e.locale;"string"===typeof f&&(f=i.default.createElement("a",null,f));var v=(n=i.default.Children.only(f))&&"object"===typeof n&&n.ref,y=t(c.useIntersection({rootMargin:"200px"}),2),b=y[0],k=y[1],N=i.default.useCallback((function(e){b(e),v&&("function"===typeof v?v(e):"object"===typeof v&&(v.current=e))}),[v,b]);i.default.useEffect((function(){var e=k&&r&&s.isLocalURL(p),n="undefined"!==typeof j?j:a&&a.locale,t=u[p+"%"+h+(n?"%"+n:"")];e&&!t&&d(a,p,h,{locale:n})}),[h,p,k,j,r,a]);var w={ref:N,onClick:function(e){n.props&&"function"===typeof n.props.onClick&&n.props.onClick(e),e.defaultPrevented||function(e,n,r,a,t,l,i,o){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&s.isLocalURL(r))&&(e.preventDefault(),n[t?"replace":"push"](r,a,{shallow:l,locale:o,scroll:i}))}(e,a,p,h,m,g,x,j)},onMouseEnter:function(e){n.props&&"function"===typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),s.isLocalURL(p)&&d(a,p,h,{priority:!0})}};if(e.passHref||"a"===n.type&&!("href"in n.props)){var _="undefined"!==typeof j?j:a&&a.locale,C=a&&a.isLocaleDomain&&s.getDomainLocale(h,_,a&&a.locales,a&&a.domainLocales);w.href=C||s.addBasePath(s.addLocale(h,_,a&&a.defaultLocale))}return i.default.cloneElement(n,w)};n.default=p},7190:function(e,n,r){"use strict";function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,a=new Array(n);r<n;r++)a[r]=e[r];return a}function t(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var a,t,l=[],i=!0,s=!1;try{for(r=r.call(e);!(i=(a=r.next()).done)&&(l.push(a.value),!n||l.length!==n);i=!0);}catch(o){s=!0,t=o}finally{try{i||null==r.return||r.return()}finally{if(s)throw t}}return l}}(e,n)||function(e,n){if(!e)return;if("string"===typeof e)return a(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return a(e,n)}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(n,"__esModule",{value:!0}),n.useIntersection=function(e){var n=e.rootRef,r=e.rootMargin,a=e.disabled||!s,u=l.useRef(),d=t(l.useState(!1),2),p=d[0],h=d[1],f=t(l.useState(n?n.current:null),2),m=f[0],g=f[1],x=l.useCallback((function(e){u.current&&(u.current(),u.current=void 0),a||p||e&&e.tagName&&(u.current=function(e,n,r){var a=function(e){var n,r={root:e.root||null,margin:e.rootMargin||""},a=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));a?n=o.get(a):(n=o.get(r),c.push(r));if(n)return n;var t=new Map,l=new IntersectionObserver((function(e){e.forEach((function(e){var n=t.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;n&&r&&n(r)}))}),e);return o.set(r,n={id:r,observer:l,elements:t}),n}(r),t=a.id,l=a.observer,i=a.elements;return i.set(e,n),l.observe(e),function(){if(i.delete(e),l.unobserve(e),0===i.size){l.disconnect(),o.delete(t);var n=c.findIndex((function(e){return e.root===t.root&&e.margin===t.margin}));n>-1&&c.splice(n,1)}}}(e,(function(e){return e&&h(e)}),{root:m,rootMargin:r}))}),[a,m,r,p]);return l.useEffect((function(){if(!s&&!p){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[p]),l.useEffect((function(){n&&g(n.current)}),[n]),[x,p]};var l=r(7294),i=r(9311),s="undefined"!==typeof IntersectionObserver;var o=new Map,c=[]},3113:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return u}});var a=r(5893),t=(r(7294),r(9008)),l=r(1664),i=r(5976),s=r.n(i),o=["achham","arghakhanchi","baglung","baitadi","bajhang","bajura","banke","bara","bardiya","bhaktapur","bhojpur","chitwan","dadeldhura","dailekh","dang deukhuri","darchula","dhading","dhankuta","dhanusa","dholkha","dolpa","doti","gorkha","gulmi","humla","ilam","jajarkot","jhapa","jumla","kailali","kalikot","kanchanpur","kapilvastu","kaski","kathmandu","kavrepalanchok","khotang","lalitpur","lamjung","mahottari","makwanpur","manang","morang","mugu","mustang","myagdi","nawalparasi","nuwakot","okhaldhunga","palpa","panchthar","parbat","parsa","pyuthan","ramechhap","rasuwa","rautahat","rolpa","rukum","rupandehi","salyan","sankhuwasabha","saptari","sarlahi","sindhuli","sindhupalchok","siraha","solukhumbu","sunsari","surkhet","syangja","tanahu","taplejung","terhathum","udayapur"],c=function(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.default,{children:[(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,a.jsx)("title",{children:"Signup | Aspirant Nepal"}),(0,a.jsx)("meta",{name:"description",content:"Aspirant Nepal Student Login Page"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsx)("div",{className:s().signup,children:(0,a.jsxs)("div",{className:"row",children:[(0,a.jsx)("div",{className:s().signupPhoto+" col-lg-5 col-md-12"}),(0,a.jsx)("div",{className:s().signupContent+" col-lg-7 col-md-12",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:s().signupForms,children:[(0,a.jsx)("div",{className:s().logoContainer,children:(0,a.jsx)("img",{src:"./logo.png",alt:"aspirant nepal logo"})}),(0,a.jsxs)("div",{className:s().signupParagraph,children:[(0,a.jsx)("h4",{children:"Start Your Journey Right Now"}),(0,a.jsx)("p",{children:"Thank you for joining journey along with Aspirant Nepal. Let us help you to become competitive competitiors that makes you stand out from all."})]}),(0,a.jsx)("div",{className:s().signupInput,children:(0,a.jsxs)("form",{children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col-md-6",children:[(0,a.jsx)("label",{htmlFor:"username",children:"Full Name"}),(0,a.jsx)("input",{required:!0,type:"text",id:"username",name:"username",placeholder:"Your Full Name"})]}),(0,a.jsxs)("div",{className:"col-md-6",children:[(0,a.jsx)("label",{htmlFor:"email",children:"Email Address"}),(0,a.jsx)("input",{required:!0,type:"email",id:"email",name:"email",placeholder:"Email Address"})]}),(0,a.jsxs)("div",{className:"col-md-6",children:[(0,a.jsx)("label",{htmlFor:"pass",children:"Password"}),(0,a.jsx)("input",{required:!0,type:"password",id:"pass",name:"pass",placeholder:"Password"})]}),(0,a.jsxs)("div",{className:"col-md-6",children:[(0,a.jsx)("label",{htmlFor:"cpass",children:"Confirm Password"}),(0,a.jsx)("input",{required:!0,type:"password",id:"cpass",name:"cpass",placeholder:"Confirm Password"})]}),(0,a.jsxs)("div",{className:"col-md-6",children:[(0,a.jsx)("label",{htmlFor:"mobile",children:"Mobile Number"}),(0,a.jsx)("input",{required:!0,type:"text",id:"mobile",name:"mobile",placeholder:"Mobile Phone"})]}),(0,a.jsxs)("div",{className:"col-md-6",children:[(0,a.jsx)("label",{htmlFor:"pass",children:"Temporary Address"}),(0,a.jsxs)("select",{required:!0,className:"form-select","aria-label":"Default select example",children:[(0,a.jsx)("option",{children:"Open this select menu"}),o.map((function(e){return(0,a.jsx)("option",{value:e,children:e.toLocaleUpperCase()},e)}))]})]}),(0,a.jsxs)("div",{className:"col-md-12",children:[(0,a.jsx)("label",{htmlFor:"gender",children:"Gender"}),(0,a.jsxs)("div",{className:"form-check d-inline-flex justify-content-center align-items-center pt-2",children:[(0,a.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault1"}),(0,a.jsx)("label",{className:"form-check-label p-0 px-2",htmlFor:"flexRadioDefault1",children:"Male"})]}),(0,a.jsxs)("div",{className:"form-check d-inline-flex justify-content-center align-items-center mx-3",children:[(0,a.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2"}),(0,a.jsx)("label",{className:"form-check-label p-0 px-2",htmlFor:"flexRadioDefault2",children:"Female"})]}),(0,a.jsxs)("div",{className:"form-check d-inline-flex justify-content-center align-items-center",children:[(0,a.jsx)("input",{className:"form-check-input",type:"radio",name:"flexRadioDefault",id:"flexRadioDefault2",checked:!0}),(0,a.jsx)("label",{className:"form-check-label p-0 px-2",htmlFor:"flexRadioDefault2",children:"Others"})]})]}),(0,a.jsxs)("div",{className:"col-md-6",children:[(0,a.jsx)("label",{htmlFor:"pass",children:"Main Training Course"}),(0,a.jsxs)("select",{required:!0,className:"form-select","aria-label":"Default select example",children:[(0,a.jsx)("option",{children:"Open this select menu"}),(0,a.jsx)("option",{value:"1",children:"+2 Entrance Preparation"}),(0,a.jsx)("option",{value:"2",children:"Bachelor Entrance Preparation"})]})]}),(0,a.jsxs)("div",{className:"col-md-6",children:[(0,a.jsx)("label",{htmlFor:"pass",children:"Optional Training Course"}),(0,a.jsxs)("select",{required:!0,className:"form-select","aria-label":"Default select example",children:[(0,a.jsx)("option",{children:"Open this select menu"}),(0,a.jsx)("option",{value:"1",children:"Driving License"}),(0,a.jsx)("option",{value:"2",disabled:!0,children:"Loksewa (Coming Soon...)"})]})]})]}),(0,a.jsx)("button",{type:"submit",className:"mt-2",children:"Sign Up"}),(0,a.jsxs)("h5",{children:["Don't have an account yet?",(0,a.jsx)(l.default,{href:"/signup",children:(0,a.jsx)("span",{children:" Sign In Here"})})]})]})})]})})})]})})]})},u=function(){return(0,a.jsx)(c,{})}},5976:function(e){e.exports={signup:"Usersignup_signup__IEr24",signupPhoto:"Usersignup_signupPhoto__ijc0U",signupContent:"Usersignup_signupContent__wE_UM",logoContainer:"Usersignup_logoContainer__7EDJv",signupForms:"Usersignup_signupForms__MJ_bS",signupParagraph:"Usersignup_signupParagraph__oW_3S",signupInput:"Usersignup_signupInput__B2qkh"}},9008:function(e,n,r){e.exports=r(5443)},1664:function(e,n,r){e.exports=r(8418)}},function(e){e.O(0,[774,888,179],(function(){return n=8971,e(e.s=n);var n}));var n=e.O();_N_E=n}]);