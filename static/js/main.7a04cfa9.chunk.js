(this.webpackJsonphashlips_nft_minting_dapp=this.webpackJsonphashlips_nft_minting_dapp||[]).push([[0],{356:function(n,t){},364:function(n,t){},381:function(n,t){},383:function(n,t){},402:function(n,t){},403:function(n,t){},463:function(n,t){},465:function(n,t){},498:function(n,t){},500:function(n,t){},501:function(n,t){},506:function(n,t){},508:function(n,t){},514:function(n,t){},516:function(n,t){},529:function(n,t){},541:function(n,t){},544:function(n,t){},549:function(n,t){},557:function(n,t){},565:function(n,t){},567:function(n,t){},635:function(n,t){},668:function(n,t){},740:function(n,t){},746:function(n,t){},759:function(n,t){},765:function(n,t,e){},766:function(n,t,e){"use strict";e.r(t);var c,o,r,a,i,s,l,u,d,p,b,x,j,f,g,h,O=e(3),C=e(123),y=e.n(C),v=e(0),m=e.n(v),w=e(4),A=e(105),E=e(25),S=e(83),T=e(100),N=e.n(T),_=e(321),k=e.n(_),I=e(322),D=e.n(I),M=e(334),L=e(106),R=e(330),K=e(32),U={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},P=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONNECTION_REQUEST":return Object(K.a)(Object(K.a)({},U),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(K.a)(Object(K.a)({},n),{},{loading:!1,account:t.payload.account,smartContract:t.payload.smartContract,web3:t.payload.web3});case"CONNECTION_FAILED":return Object(K.a)(Object(K.a)({},U),{},{loading:!1,errorMsg:t.payload});case"UPDATE_ACCOUNT":return Object(K.a)(Object(K.a)({},n),{},{account:t.payload.account});default:return n}},F={loading:!1,totalSupply:0,cost:0,error:!1,errorMsg:""},W=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHECK_DATA_REQUEST":return Object(K.a)(Object(K.a)({},n),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(K.a)(Object(K.a)({},n),{},{loading:!1,totalSupply:t.payload.totalSupply,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(K.a)(Object(K.a)({},F),{},{loading:!1,error:!0,errorMsg:t.payload});default:return n}},z=Object(L.b)({blockchain:P,data:W}),H=[R.a],Y=Object(L.c)(L.a.apply(void 0,H)),B=Object(L.d)(z,Y),G=function(n){return{type:"CHECK_DATA_FAILED",payload:n}},Q=function(){return function(){var n=Object(w.a)(m.a.mark((function n(t){var e;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,B.getState().blockchain.smartContract.methods.totalSupply().call();case 4:e=n.sent,t({type:"CHECK_DATA_SUCCESS",payload:{totalSupply:e}}),n.next=12;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0),t(G("Could not load data from contract."));case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(t){return n.apply(this,arguments)}}()},X={walletconnect:{package:M.a,options:{infuraId:"",rpc:{56:"https://bsc-dataseed.binance.org/"}}}},q=function(n){return{type:"CONNECTION_FAILED",payload:n}},J=function(n){return function(){var t=Object(w.a)(m.a.mark((function t(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:n}}),e(Q());case 2:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()},V=e(26),Z=V.a.div(c||(c=Object(E.a)(["\n  background-color: var(--primary);\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n"])),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),$=V.a.div(o||(o=Object(E.a)(["\n  height: 8px;\n  width: 8px;\n"]))),nn=V.a.div(r||(r=Object(E.a)(["\n  height: 16px;\n  width: 16px;\n"]))),tn=V.a.div(a||(a=Object(E.a)(["\n  height: 24px;\n  width: 24px;\n"]))),en=V.a.div(i||(i=Object(E.a)(["\n  height: 32px;\n  width: 32px;\n"]))),cn=V.a.div(s||(s=Object(E.a)(["\n  display: flex;\n  flex: ",";\n  flex-direction: ",";\n  justify-content: ",";\n  align-items: ",";\n  background-color: ",";\n  width: 100%;\n  background-image: ",";\n  background-size: cover;\n  background-position: center;\n"])),(function(n){var t=n.flex;return t||0}),(function(n){var t=n.fd;return t||"column"}),(function(n){var t=n.jc;return t||"flex-start"}),(function(n){var t=n.ai;return t||"flex-start"}),(function(n){return n.test?"pink":"none"}),(function(n){var t=n.image;return t?"url(".concat(t,")"):"none"})),on=V.a.p(l||(l=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 22px;\n  font-weight: 500;\n  line-height: 1.6;\n"]))),rn=(V.a.p(u||(u=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 18px;\n  line-height: 1.6;\n"]))),V.a.p(d||(d=Object(E.a)(["\n  color: var(--primary-text);\n  font-size: 16px;\n  line-height: 1.6;\n"])))),an=(V.a.div(p||(p=Object(E.a)(["\n  :active {\n    opacity: 0.6;\n  }\n"]))),e(10)),sn=function(n,t){return n.length>t?"".concat(n.substring(0,t),"...").concat(n.substring(39)):n},ln=V.a.button(b||(b=Object(E.a)(["\n  padding: 10px;\n  border-radius: 50px;\n  border: none;\n  background-color: var(--secondary);\n  padding: 10px;\n  font-weight: bold;\n  color: var(--secondary-text);\n  width: 100px;\n  cursor: pointer;\n  box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 6px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),un=V.a.button(x||(x=Object(E.a)(["\n  padding: 10px;\n  border-radius: 100%;\n  border: none;\n  background-color: var(--primary);\n  padding: 10px;\n  font-weight: bold;\n  font-size: 15px;\n  color: var(--primary-text);\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -webkit-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  -moz-box-shadow: 0px 4px 0px -2px rgba(250, 250, 250, 0.3);\n  :active {\n    box-shadow: none;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n  }\n"]))),dn=V.a.div(j||(j=Object(E.a)(["\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: stretched;\n  align-items: stretched;\n  width: 100%;\n  @media (min-width: 767px) {\n    flex-direction: row;\n  }\n"]))),pn=V.a.img(f||(f=Object(E.a)(["\n  width: 200px;\n  @media (min-width: 767px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n  transition: height 0.5s;\n"]))),bn=(V.a.img(g||(g=Object(E.a)(["\n\n\n  background-color: var(--accent);\n  border-radius: 100%;\n  width: 200px;\n  @media (min-width: 900px) {\n    width: 250px;\n  }\n  @media (min-width: 1000px) {\n    width: 300px;\n  }\n  transition: width 0.5s;\n"]))),V.a.a(h||(h=Object(E.a)(["\n  color: var(--secondary);\n  text-decoration: none;\n"]))));var xn=function(){var n=Object(S.b)(),t=Object(S.c)((function(n){return n.blockchain})),e=Object(S.c)((function(n){return n.data})),c=Object(O.useState)(!1),o=Object(A.a)(c,2),r=o[0],a=o[1],i=Object(O.useState)("Click buy to mint your NFT."),s=Object(A.a)(i,2),l=s[0],u=s[1],d=Object(O.useState)(1),p=Object(A.a)(d,2),b=p[0],x=p[1],j=Object(O.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),f=Object(A.a)(j,2),g=f[0],h=f[1],C=function(){""!==t.account&&null!==t.smartContract&&n(Q(t.account))},y=function(){var n=Object(w.a)(m.a.mark((function n(){var t,e;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return t=n.sent,n.next=5,t.json();case 5:e=n.sent,h(e);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(O.useEffect)((function(){y()}),[]),Object(O.useEffect)((function(){C()}),[t.account]),Object(an.jsx)(Z,{children:Object(an.jsxs)(cn,{flex:1,ai:"center",style:{padding:24,backgroundColor:"var(--primary)"},image:g.SHOW_BACKGROUND?"/config/images/bg.jpg":null,children:[Object(an.jsx)(pn,{style:{},alt:"logo",src:"/config/images/textlogo.png"}),Object(an.jsx)(nn,{}),Object(an.jsxs)(dn,{flex:1,style:{padding:24},test:!0,children:[Object(an.jsx)(en,{}),Object(an.jsxs)(cn,{flex:2,jc:"center",ai:"center",style:{backgroundColor:"rgba(52, 52, 52, 0.9)",padding:24,borderRadius:24},children:[Object(an.jsx)(nn,{}),Object(an.jsxs)(on,{style:{textAlign:"center",fontSize:50,fontWeight:"bold",color:"var(--accent-text)",marginTop:-10},children:[e.totalSupply," / ",g.MAX_SUPPLY]}),Object(an.jsx)(rn,{style:{textAlign:"center",color:"var(--primary-text)"},children:Object(an.jsxs)(bn,{style:{color:"white"},target:"_blank",href:g.SCAN_LINK,children:["Contract Address ",Object(an.jsx)("br",{}),sn(g.CONTRACT_ADDRESS,24)]})}),Object(an.jsx)(nn,{}),Number(e.totalSupply)>=g.MAX_SUPPLY?Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(on,{style:{textAlign:"center",color:"var(--accent-text)"},children:"The sale has ended."}),Object(an.jsxs)(rn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["You can still find ",g.NFT_NAME," on"]}),Object(an.jsx)(nn,{}),Object(an.jsx)(bn,{target:"_blank",href:g.MARKETPLACE_LINK,children:g.MARKETPLACE})]}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)($,{}),Object(an.jsx)(rn,{style:{textAlign:"center",color:"var(--accent-text)"},children:"Excluding gas fees."}),Object(an.jsx)(nn,{}),""===t.account||null===t.smartContract?Object(an.jsxs)(cn,{ai:"center",jc:"center",children:[Object(an.jsxs)(rn,{style:{textAlign:"center",color:"var(--accent-text)"},children:["Connect to the ",g.NETWORK.NAME," network"]}),Object(an.jsx)(nn,{}),Object(an.jsx)(ln,{onClick:function(t){t.preventDefault(),n(function(){var n=Object(w.a)(m.a.mark((function n(t){var e,c,o,r,a,i,s,l,u,d;return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t({type:"CONNECTION_REQUEST"}),n.prev=1,n.next=4,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 4:return e=n.sent,n.next=7,e.json();case 7:return c=n.sent,n.next=10,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 10:return o=n.sent,n.next=13,o.json();case 13:return r=n.sent,localStorage.removeItem("walletconnect"),localStorage.removeItem("WALLETCONNECT_DEEPLINK_CHOICE"),a=new D.a({network:"mainnet",cacheProvider:!1,providerOptions:X}),n.next=19,a.connect();case 19:return i=n.sent,s=new k.a(i),console.log("web",s),N.a.setProvider(i),n.next=25,s.eth.getAccounts();case 25:return l=n.sent,n.next=28,i.request({method:"net_version"});case 28:u=n.sent,console.log("networkId",u),u==r.NETWORK.ID?(d=new N.a(c,r.CONTRACT_ADDRESS),t({type:"CONNECTION_SUCCESS",payload:{account:l[0],smartContract:d,web3:s}}),i.on("accountsChanged",(function(n){t(J(n[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):t(q("Change network to ".concat(r.NETWORK.NAME,"."))),n.next=37;break;case 33:n.prev=33,n.t0=n.catch(1),console.log("error",n.t0," message",n.t0.message),"undefined"!==typeof n.t0&&"undefined"!==typeof n.t0.message&&n.t0.message.includes("User Rejected")?t(q("User rejected the request")):("string"===typeof n.t0||n.t0 instanceof String)&&n.t0.includes("Modal closed by user")?t(q("Modal closed by user")):t(q("Something went wrong."));case 37:case"end":return n.stop()}}),n,null,[[1,33]])})));return function(t){return n.apply(this,arguments)}}()),C()},children:"CONNECT"}),""!==t.errorMsg?Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(nn,{}),Object(an.jsx)(rn,{style:{textAlign:"center",color:"var(--accent-text)"},children:t.errorMsg})]}):null]}):Object(an.jsxs)(an.Fragment,{children:[Object(an.jsx)(rn,{style:{textAlign:"center",color:"var(--accent-text)"},children:l}),Object(an.jsx)(tn,{}),Object(an.jsxs)(cn,{ai:"center",jc:"center",fd:"row",children:[Object(an.jsx)(un,{style:{lineHeight:.4},disabled:r?1:0,onClick:function(n){n.preventDefault(),function(){var n=b-1;n<1&&(n=1),x(n)}()},children:"-"}),Object(an.jsx)(tn,{}),Object(an.jsx)(rn,{style:{textAlign:"center",color:"var(--accent-text)"},children:b}),Object(an.jsx)(tn,{}),Object(an.jsx)(un,{disabled:r?1:0,onClick:function(n){n.preventDefault(),function(){var n=b+1;n>20&&(n=20),x(n)}()},children:"+"})]}),Object(an.jsx)(nn,{}),Object(an.jsx)(cn,{ai:"center",jc:"center",fd:"row",children:Object(an.jsxs)(ln,{disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=g.WEI_COST,c=g.GAS_LIMIT,o=String(e*b),r=String(c*b);console.log("Cost: ",o),console.log("Gas limit: ",r),u("Minting your ".concat(g.NFT_NAME,"...")),a(!0),t.smartContract.methods.mint(b).send({gasLimit:String(r),to:g.CONTRACT_ADDRESS,from:t.account,value:o}).once("error",(function(n){console.log(n),u("Sorry, something went wrong please try again later."),a(!1)})).then((function(e){console.log(e),u("WOW, the ".concat(g.NFT_NAME," is yours! ")),a(!1),n(Q(t.account))}))}(),C()},children:[sn(t.account,3),r?"  BUSY":"  MINT NOW"]})})]}),Object(an.jsx)("br",{})]}),Object(an.jsx)(tn,{})]}),Object(an.jsx)(en,{})]}),Object(an.jsx)(tn,{}),Object(an.jsx)(cn,{jc:"center",ai:"center",style:{width:"70%"}})]})})},jn=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,772)).then((function(t){var e=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;e(n),c(n),o(n),r(n),a(n)}))};e(765);y.a.render(Object(an.jsx)(S.a,{store:B,children:Object(an.jsx)(xn,{})}),document.getElementById("root")),jn()}},[[766,1,2]]]);
//# sourceMappingURL=main.7a04cfa9.chunk.js.map