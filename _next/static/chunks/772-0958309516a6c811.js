(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[772],{36563:function(){},46601:function(){},89214:function(){},85568:function(){},40127:function(){},27790:function(){},51371:function(){},96127:function(){},52361:function(){},94616:function(){},94442:function(e,t,n){"use strict";var s=n(2265),a=n(59497),i=n(10426),r=n.n(i),l=n(81803);let c="0xA222268693a5D135fAb97d0F8d4d5973656749b7",o=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!1,internalType:"uint256",name:"amount",type:"uint256"}],name:"FundsWithdrawn",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"},{indexed:!1,internalType:"uint256",name:"newPoints",type:"uint256"}],name:"PointsUpdated",type:"event"},{inputs:[{internalType:"address",name:"_inviter",type:"address"}],name:"register",outputs:[],stateMutability:"payable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"inviter",type:"address"},{indexed:!0,internalType:"address",name:"invitee",type:"address"}],name:"UserInvited",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"user",type:"address"}],name:"UserRegistered",type:"event"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{stateMutability:"payable",type:"receive"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getInviteCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"getTotalParticipants",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"_user",type:"address"}],name:"getUserPoints",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"inviteCount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"invitePoints",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"registeredUsers",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"registrationPoints",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalFee",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalParticipants",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"userPoints",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"}];t.Z=()=>{let[e,t]=(0,s.useState)(null),[n,i]=(0,s.useState)(null),[u,d]=(0,s.useState)(""),[m,p]=(0,s.useState)(null),[h,f]=(0,s.useState)(!0),[y,v]=(0,s.useState)(!1),[w,x]=(0,s.useState)(""),[j,b]=(0,s.useState)(0),[g,_]=(0,s.useState)(0),[N,C]=(0,s.useState)(0),k=async()=>{try{let e={walletconnect:{package:l.Z,options:{qrcode:!0}}},n=new(r())({cacheProvider:!1,providerOptions:e}),s=await n.connect(),u=new a.ZPm(s),m="0x38";try{await s.request({method:"wallet_switchEthereumChain",params:[{chainId:m}]})}catch(e){if(4902===e.code)await s.request({method:"wallet_addEthereumChain",params:[{chainId:m,chainName:"Binance Smart Chain",nativeCurrency:{name:"BNB",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed.binance.org/"],blockExplorerUrls:["https://bscscan.com/"]}]});else{console.error("切换到 BSC 网络失败:",e);return}}let p=await s.request({method:"eth_requestAccounts"});if(p.length>0){let e=p[0];i(e);let n=new u.eth.Contract(o,c);t(n);let s=await n.methods.registeredUsers(e).call();if(v(!!s),s)await S(e);else{let e=T();e&&d(e)}location.href=location.href,console.log("强制刷新页面成功")}}catch(e){console.error("连接钱包失败:",e)}};(0,s.useEffect)(()=>{setTimeout(async()=>{if(window.ethereum){let e=new new a.ZPm(window.ethereum).eth.Contract(o,c);try{let t=await e.methods.totalParticipants().call(),n=parseInt(t,10);_(isNaN(n)?0:n)}catch(e){console.error("error:",e)}}},100)},[]),(0,s.useEffect)(()=>{(async()=>{if(window.ethereum){let e=new a.ZPm(window.ethereum),n=await e.eth.getAccounts(),s=new e.eth.Contract(o,c);if(p(e),t(s),n.length>0){i(n[0]);let e=await s.methods.registeredUsers(n[0]).call();if(v(!!e),e)await S(n[0]);else{let e=T();e&&d(e)}}}else console.error("Please install MetaMask!")})()},[]),(0,s.useEffect)(()=>{let t=setInterval(async()=>{n&&e&&await S(n)},5e3);return()=>clearInterval(t)},[n,e]);let T=()=>{let e=window.location.href.match(/code=([0x0-9a-fA-F]+)/);return e?e[1]:null},S=async t=>{if(e){f(!0);try{let n=await e.methods.getInviteCount(t).call(),s=await e.methods.getTotalParticipants().call();b(Number(n)),_(Number(s));let a=await e.methods.getUserPoints(t).call();C(Number(a));let i="".concat(window.location.origin,"/#invite?code=").concat(t);x(i)}catch(e){console.error("Error updating invite data:",e)}finally{f(!1)}}},E=async()=>{if(e&&n){f(!0);try{let t=m.utils.toWei("0.002","ether"),s=await m.eth.getGasPrice(),a=await e.methods.register(u||"0x0000000000000000000000000000000000000000").send({from:n,gas:15e5,gasPrice:s,value:t});console.log("Transaction Success: ",a),v(!0),await S(n)}catch(e){console.error("Error registering user:",e.message)}finally{f(!1)}}};return{account:n,connectWallet:k,handleRegister:E,getInviterFromUrl:T,updateInviteData:S,inviterAddress:u,setInviterAddress:d,loading:h,inviteCount:j,totalParticipants:g,userPoints:N,inviteLink:w,isRegistered:y}}},96029:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var s=n(57437),a=n(2265),i=n(61396),r=n.n(i),l=[],c=()=>{let[e,t]=(0,a.useState)(!1),[n,s]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{let n=document.getElementById("sticky-header"),a=(null==n?void 0:n.offsetHeight)||0,i=()=>{let n=window.scrollY;n>=a?t(!0):(t(!1),s(!1)),e&&(n<r?s(!0):s(!1)),r=n},r=0;return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[e]),{sticky:e,isStickyVisible:n}},o=n(24033),u=e=>{let{isSearchOpen:t,setIsSearchOpen:n}=e,a=e=>{n(!1),new Audio(e).play()};return(0,s.jsxs)("div",{className:"search__popup-wrap ".concat(t?"search__active":""),children:[(0,s.jsx)("div",{className:"search__layer"}),(0,s.jsx)("div",{className:"search__close",onClick:()=>a("/assets/audio/remove.wav"),children:(0,s.jsx)("span",{children:(0,s.jsx)("i",{className:"flaticon-swords-in-cross-arrangement"})})}),(0,s.jsx)("div",{className:"search__wrap text-center",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsxs)("div",{className:"col-12",children:[(0,s.jsxs)("h2",{className:"title",children:["... ",(0,s.jsx)("span",{children:"Search Here"})," ..."]}),(0,s.jsx)("div",{className:"search__form",children:(0,s.jsxs)("form",{action:"#",children:[(0,s.jsx)("input",{type:"text",name:"search",placeholder:"Type keywords here",required:!0}),(0,s.jsx)("button",{className:"search-btn",children:(0,s.jsx)("i",{className:"flaticon-loupe"})})]})})]})})})})]})},d=[{id:1,link:"https://www.facebook.com/",icon:"fab fa-facebook-f",title:"Facebook"},{id:2,link:"https://twitter.com/",icon:"fab fa-twitter",title:"Twitter"},{id:3,link:"https://www.linkedin.com/",icon:"fab fa-linkedin-in",title:"Linkedin"},{id:4,link:"https://www.youtube.com/",icon:"fab fa-youtube",title:"Youtube"}],m=e=>{let{isOffCanvasOpen:t,setIsOffCanvasOpen:n}=e,a=e=>{n(!1),new Audio(e).play()};return(0,s.jsxs)("div",{className:"".concat(t?"offCanvas__menu-visible":""),children:[(0,s.jsx)("div",{className:"offCanvas__wrap",children:(0,s.jsxs)("div",{className:"offCanvas__body",children:[(0,s.jsxs)("div",{className:"offCanvas__top",children:[(0,s.jsx)("div",{className:"logo",children:(0,s.jsxs)(r(),{href:"/",passHref:!0,children:[(0,s.jsx)("h3",{style:{display:"inline",color:"#FFF",fontWeight:"bold",margin:0},children:"Fast"}),(0,s.jsx)("h3",{style:{display:"inline",color:"#45F882",fontWeight:"bold",margin:0},children:"Launch"})]})}),(0,s.jsx)("div",{className:"offCanvas__toggle",onClick:()=>a("/assets/audio/remove.wav"),children:(0,s.jsx)("i",{className:"flaticon-swords-in-cross-arrangement"})})]}),(0,s.jsxs)("div",{className:"offCanvas__content",children:[(0,s.jsxs)("h2",{className:"title",children:["Best Seller of Month Ideas for ",(0,s.jsx)("span",{children:"NFT Wallet"})]}),(0,s.jsxs)("div",{className:"offCanvas__contact",children:[(0,s.jsx)("h4",{className:"small-title",children:"CONTACT US"}),(0,s.jsxs)("ul",{className:"offCanvas__contact-list list-wrap",children:[(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"tel:93332225557",children:"+9 333 222 5557"})}),(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:"mailto:info@webmail.com",children:"info@webmail.com"})}),(0,s.jsx)("li",{children:"New Central Park W7 Street,New York"})]})]}),(0,s.jsxs)("div",{className:"offCanvas__newsletter",children:[(0,s.jsx)("h4",{className:"small-title",children:"Subscribe"}),(0,s.jsxs)("form",{action:"#",className:"offCanvas__newsletter-form",children:[(0,s.jsx)("input",{type:"email",placeholder:"Get News & Updates"}),(0,s.jsx)("button",{type:"submit",children:(0,s.jsx)("i",{className:"flaticon-send"})})]}),(0,s.jsx)("p",{children:"Subscribe dolor sitamet, consectetur adiping eli. Duis esollici tudin augue."})]}),(0,s.jsx)("ul",{className:"offCanvas__social list-wrap",children:d.map((e,t)=>(0,s.jsx)("li",{children:(0,s.jsx)(r(),{href:e.link,target:"_blank",children:(0,s.jsx)("i",{className:e.icon})})},t))})]}),(0,s.jsx)("div",{className:"offCanvas__copyright",children:(0,s.jsxs)("p",{children:["Copyright \xa9 ",new Date().getFullYear()," - By ",(0,s.jsx)("span",{children:"MYKD"})]})})]})}),(0,s.jsx)("div",{onClick:()=>n(!1),className:"offCanvas__overlay"})]})},p=n(94442),h=n(67133),f=n(60944),y=()=>{let[e,t]=(0,a.useState)(null),[n,s]=(0,a.useState)(null);return{accountId:n,connectHereWallet:async()=>{try{let e=await f.HereWallet.connect();t(e)}catch(e){console.error("无法连接到 Here Wallet:",e)}},signIn:async t=>{if(!e){console.error("钱包未连接");return}try{let n=await e.signIn({contractId:t});s(n),console.log("欢迎 ".concat(n,"!"))}catch(e){console.error("登录失败:",e)}},signAndSendTransaction:async(t,n)=>{if(!e){console.error("钱包未连接");return}try{let s=await e.signAndSendTransaction({actions:n,receiverId:t});console.log("交易成功:",s)}catch(e){console.error("交易失败:",e)}},signMessage:async t=>{if(!e){console.error("钱包未连接");return}try{let n=h.Buffer.from(crypto.getRandomValues(new Uint8Array(32))),s=window.location.host,{signature:a,publicKey:i,accountId:r}=await e.signMessage({recipient:s,nonce:n,message:t});return console.log("签名完成:",{signature:a,publicKey:i,accountId:r}),{signature:a,publicKey:i,accountId:r}}catch(e){console.error("签名失败:",e)}}}},v=e=>{let{style_2:t=!1}=e,{sticky:n,isStickyVisible:i}=c(),d=(0,o.usePathname)(),[h,f]=(0,a.useState)(!1),[v,w]=(0,a.useState)(!1),[x,j]=(0,a.useState)(!1),[b,g]=(0,a.useState)(!1),[_,N]=(0,a.useState)(null),[C,k]=(0,a.useState)(!1),{account:T,loading:S,connectWallet:E}=(0,p.Z)(),{accountId:M,connectHereWallet:P,signIn:F}=y();(0,a.useEffect)(()=>{(()=>{let e=navigator.userAgent;k(/android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(e))})()},[]),(0,a.useEffect)(()=>{var e,t,n;g((null===(n=window)||void 0===n?void 0:null===(t=n.Telegram)||void 0===t?void 0:null===(e=t.WebApp)||void 0===e?void 0:e.init)!==void 0)},[]),(0,a.useEffect)(()=>{M&&console.log("Connected with wallet: ".concat(M))},[M]),(0,a.useEffect)(()=>{T&&(console.log("Connected with invite account: ".concat(T)),N(T))},[T]);let I=()=>{b?P():E()};return(0,s.jsxs)("header",{children:[(0,s.jsx)("div",{id:"sticky-header",className:"tg-header__area transparent-header ".concat(n?"tg-sticky-menu":""," ").concat(i?"sticky-menu__show":""),children:(0,s.jsx)("div",{className:"container custom-container",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)("div",{className:"col-12",children:(0,s.jsx)("div",{className:"tgmenu__wrap",children:(0,s.jsxs)("nav",{className:"tgmenu__nav",children:[(0,s.jsx)("div",{className:"logo",children:(0,s.jsxs)(r(),{href:"/",passHref:!0,children:[(0,s.jsx)("h3",{style:{display:"inline",color:"#FFF",fontWeight:"bold",margin:0},children:"Fast"}),(0,s.jsx)("h3",{style:{display:"inline",color:"#45F882",fontWeight:"bold",margin:0},children:"Launch"})]})}),(0,s.jsx)("div",{className:"d-xl-none",children:(0,s.jsx)("button",{className:"".concat(t?"tg-btn-3 tg-svg":"tg-border-btn"),style:{backgroundColor:"transparent",border:"none",cursor:"pointer"},onClick:I,children:T?(0,s.jsx)("span",{children:"".concat(T.slice(0,6),"...").concat(T.slice(-4))}):(0,s.jsx)("span",{children:"Connect"})})}),(0,s.jsx)("div",{className:"tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex",children:(0,s.jsx)("ul",{className:"navigation",children:l.map(e=>e.sub_menu?(0,s.jsxs)("li",{className:"menu-item ".concat(e.sub_menu&&e.sub_menu.some(e=>d===e.link)?"menu-item-has-children active":""),children:[(0,s.jsx)(r(),{href:"#",children:e.title}),(0,s.jsx)("ul",{className:"sub-menu",children:e.sub_menu.map((e,t)=>(0,s.jsx)("li",{className:d===e.link?"active":"",children:(0,s.jsx)(r(),{href:e.link,children:e.title})},t))})]},e.id):(0,s.jsx)("li",{className:d===e.link?"active":"",children:(0,s.jsx)(r(),{href:e.link,children:e.title})},e.id))})}),(0,s.jsx)("div",{className:"tgmenu__action d-none d-md-block",children:(0,s.jsx)("ul",{className:"list-wrap",children:(0,s.jsx)("li",{className:"header-btn",children:(0,s.jsx)("button",{className:"".concat(t?"tg-btn-3 tg-svg":"tg-border-btn"),style:{backgroundColor:"transparent",border:"none",cursor:"pointer"},onClick:_?()=>{N(null)}:I,children:T?(0,s.jsx)("span",{children:"".concat(T.slice(0,6),"...").concat(T.slice(-4))}):(0,s.jsx)("span",{children:"Connect"})})})})})]})})})})})}),(0,s.jsx)(u,{setIsSearchOpen:f,isSearchOpen:h}),(0,s.jsx)(m,{isOffCanvasOpen:v,setIsOffCanvasOpen:w})]})}},84274:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var s=n(57437),a=n(2265);let i=()=>{n.e(862).then(n.t.bind(n,62862,23)).then(e=>{new e.default.WOW({live:!1}).init()})};var r=function(){return(0,a.useEffect)(()=>{!function(e){let t=document.querySelector(e);t&&(document.addEventListener("scroll",()=>{window.scrollY>200?t.classList.add("open"):t.classList.remove("open")}),t.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}))}(".scroll__top")},[]),(0,s.jsx)("button",{className:"scroll__top scroll-to-target","data-target":"html",children:(0,s.jsx)("i",{className:"flaticon-right-arrow"})})},l=n(60171);let c=(0,a.createContext)({}),o=()=>{let e=(0,a.useContext)(c);return e||console.log("useAppContext must be used within an AppContextProvider"),e};var u=e=>{let{children:t}=e,[n,i]=(0,a.useState)(!1);return(0,s.jsx)(c.Provider,{value:{isEnter:n,handleMouseEnter:()=>{i(!0)},handleMouseLeave:()=>{i(!1)}},children:t})},d=()=>{let{isEnter:e}=o(),t=(0,a.useRef)(null),n=(0,a.useRef)(null),i=(0,a.useRef)(0),r=(0,a.useRef)(0),l=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{let e=e=>{!l.current&&n.current&&(n.current.style.transform="translate(".concat(e.clientX,"px, ").concat(e.clientY,"px)")),t.current&&(t.current.style.transform="translate(".concat(e.clientX,"px, ").concat(e.clientY,"px)")),i.current=e.clientY,r.current=e.clientX};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{ref:t,style:{visibility:"visible"},className:"mouseCursor cursor-outer ".concat(e?"cursor-big":"")}),(0,s.jsx)("div",{ref:n,className:"mouseCursor cursor-inner ".concat(e?"cursor-big":""),style:{visibility:"visible"},children:(0,s.jsxs)("span",{children:["View ",(0,s.jsx)("br",{})," Image"]})})]})};n(32722);var m=e=>{let{children:t}=e;return(0,a.useEffect)(()=>{i()},[]),(0,s.jsxs)(u,{children:[(0,s.jsx)(d,{}),t,(0,s.jsx)(r,{}),(0,s.jsx)(l.Ix,{})]})}}}]);