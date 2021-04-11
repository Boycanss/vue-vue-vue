(function(e){function t(t){for(var r,l,s=t[0],i=t[1],c=t[2],d=0,m=[];d<s.length;d++)l=s[d],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&m.push(o[l][0]),o[l]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(m.length)m.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},o={app:0},a=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],i=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var u=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"10b1":function(e,t,n){"use strict";n("9a64")},1203:function(e,t,n){},"1bcf":function(e,t,n){"use strict";n("f22f")},"1c59":function(e,t,n){},"1f74":function(e,t,n){"use strict";n("e602")},2437:function(e,t,n){"use strict";n("2b73")},2859:function(e,t,n){"use strict";n("b388")},"2b73":function(e,t,n){},4513:function(e,t,n){},"46df":function(e,t,n){"use strict";n("1c59")},"4b58":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Div",{attrs:{id:"app"}},[n("div",{staticClass:"appWrapper"},[n("Navbar")],1),n("router-view",{key:e.$route.fullPath})],1)},a=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-navbar",{attrs:{toggleable:"lg"}},[n("Div",{staticClass:"menuContainer"},[n("router-link",{staticClass:"logo",attrs:{to:"/"}},[n("img",{staticClass:"logoImg",attrs:{src:e.logoImg}})]),n("div",{staticClass:"menu"},[n("div",{staticClass:"pcMenu"},[e.loggedInUser?n("div",{staticClass:"flexRow"},[n("router-link",{staticClass:"mn about",attrs:{to:"/about"}},[n("span",[e._v("About")])]),n("router-link",{staticClass:"mn about",attrs:{to:"/collaborators"}},[n("span",[e._v("Collaborators")])]),n("div",{staticClass:"iconProfile"},[n("NavbarProfile")],1)],1):e._e(),n("ThemeButton")],1),n("div",{staticClass:"mobileMenu"},[n("SideBar")],1)])],1)],1)},s=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Div",[n("b-icon-list",{attrs:{id:"sideButton"},on:{click:e.toggleShow}}),n("Div",{staticClass:"sideNav",style:1==e.show?{bottom:"59px"}:{bottom:"-30vh"}},[n("div",{staticClass:"mobileSideMenu"},[e.loggedInUser?n("div",{staticClass:"flexCol"},[n("router-link",{staticClass:"mn",attrs:{to:"/about"}},[n("span",[e._v("About")])]),n("router-link",{staticClass:"mn about",attrs:{to:"/collaborators"}},[n("span",[e._v("Collaborators")])]),n("router-link",{staticClass:"mn about",attrs:{to:"/myprofile"}},[e._v("View Profile")])],1):e._e(),n("div",{staticClass:"mobileThemeButton"},[n("ThemeButton")],1),e.loggedInUser?n("span",{staticClass:"mn logoutButton",on:{click:e.logout}},[e._v("Logout")]):e._e()])])],1)},c=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper",class:e.light?"light":"dark"},[e._t("default")],2)},d=[],m=(n("159b"),n("b0c0"),n("841c"),n("ac1f"),n("4de4"),n("2f62")),f=n("bc3a"),p=n.n(f);r["default"].use(m["a"]);var g=new m["a"].Store({state:{light:!0},mutations:{toggleTheme:function(e){e.light=!e.light}},actions:{},modules:{}}),h=new m["a"].Store({state:{collaborators:[],searchData:[],searchKey:""},mutations:{getCollaborators:function(e){var t=[{id:1,role:"Android Developer"},{id:2,role:"Backend Developer"},{id:3,role:"Frontend Developer"},{id:4,role:"Data Scientist"}];p.a.get("https://randomuser.me/api/?results=12").then((function(n){var r=n.data.results;r.forEach((function(e){var n=Math.floor(4*Math.random());e["role"]=t[n]})),e.collaborators=r,e.searchData=r}))},search:function(e,t){e.searchKey=t;var n=[],r=e.searchData;r.forEach((function(e){var r=e.name.first+" "+e.name.last,o=r.toLowerCase(),a=o.search("".concat(t));-1!==a&&n.push(e)})),e.collaborators=n}}}),v=new m["a"].Store({state:{loggedInUser:{},errormsg:""},mutations:{login:function(e,t){var n=h.state.collaborators;e.errormsg;var r=n.filter((function(e){return e.login.username===t.username}));r[0]&&r[0].login.password===t.password?(e.loggedInUser=r[0],localStorage.setItem("loggedInUser",JSON.stringify(r[0])),window.location.reload()):e.errormsg="Wrong username or password"}}}),b={data:function(){return{light:g.state.light}},mounted:function(){var e=this;g.watch((function(e){return e.light}),(function(){e.light=g.state.light}))}},_=b,y=(n("1bcf"),n("2877")),C=Object(y["a"])(_,u,d,!1,null,null,null),w=C.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"theme",on:{click:e.changeTheme}},[n("b-icon",{staticClass:"themeIcon",style:[1==e.light?"right: -12.5px":"right: 16px"],attrs:{icon:"sun"}}),n("b-icon",{staticClass:"themeIcon",style:[1==e.light?"right: -18px":"right: 12.5px"],attrs:{icon:"moon"}})],1)},I=[],E={data:function(){return{light:g.state.light}},methods:{changeTheme:function(){g.commit("toggleTheme"),this.light=g.state.light}}},k=E,S=(n("2859"),Object(y["a"])(k,x,I,!1,null,null,null)),O=S.exports,$={components:{Div:w,ThemeButton:O},data:function(){return{show:!1,loggedInUser:!1}},methods:{toggleShow:function(){this.show=!this.show},logout:function(){var e=this.$route.path;localStorage.removeItem("loggedInUser"),"/"===e||this.$router.push("/"),window.location.reload()}},mounted:function(){null!==localStorage.getItem("loggedInUser")?this.loggedInUser=!0:this.loggedInUser=!1}},D=$,U=(n("fabc"),Object(y["a"])(D,i,c,!1,null,null,null)),j=U.exports,V=n("cf05"),B=n.n(V),P=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"toggleRef",staticClass:"containerdd"},[n("img",{staticClass:"imgProfileTiny",attrs:{src:e.img,alt:"profile tiny"},on:{click:function(t){e.dropdownActive=!e.dropdownActive}}}),e.dropdownActive?n("div",{staticClass:"dropdownContainer"},[n("router-link",{staticClass:"mn2 profile",attrs:{to:"/myprofile"}},[e._v("View Profile")]),n("span",{staticClass:"mn logoutButton",on:{click:e.logout}},[e._v("Logout")])],1):e._e()])},T=[],N={data:function(){return{img:"",dropdownActive:!1}},watch:{dropdownActive:function(e){var t=this;!0===e?window.addEventListener("click",(function(e){t.$el.contains(e.target)||(t.dropdownActive=!1)})):window.removeEventListener("click",(function(e){t.$el.contains(e.target)||(t.dropdownActive=!1)}))}},mounted:function(){var e=JSON.parse(localStorage.getItem("loggedInUser"));this.img=e.picture.thumbnail},methods:{logout:function(){var e=this.$route.path;localStorage.removeItem("loggedInUser"),"/"===e||this.$router.push("/"),window.location.reload()}}},M=N,A=(n("c81a"),Object(y["a"])(M,P,T,!1,null,null,null)),R=A.exports,L={data:function(){return{logoImg:B.a,loggedInUser:!1}},methods:{},components:{SideBar:j,Div:w,ThemeButton:O,NavbarProfile:R},mounted:function(){null!==localStorage.getItem("loggedInUser")?this.loggedInUser=!0:this.loggedInUser=!1}},J=L,F=(n("10b1"),Object(y["a"])(J,l,s,!1,null,null,null)),H=F.exports,K={components:{Navbar:H,Div:w},name:"App",mounted:function(){h.commit("getCollaborators")}},W=K,G=(n("034f"),Object(y["a"])(W,o,a,!1,null,null,null)),q=G.exports,z=n("8c4f"),Q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Div",[n("div",{staticClass:"containerOfContainer",style:e.user?"position: relative":"position:absolute"},[e.user?n("div",[n("div",{staticClass:"flexRow"},[n("div",{style:"width:100%"},[n("Employee")],1)])]):n("div",[n("LandingPage")],1)])])},X=[],Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapperSecondary",class:e.light?"light":"dark"},[e._t("default")],2)},Z=[],ee={data:function(){return{light:g.state.light}},mounted:function(){var e=this;g.watch((function(e){return e.light}),(function(){e.light=g.state.light}))}},te=ee,ne=(n("a14a"),Object(y["a"])(te,Y,Z,!1,null,null,null)),re=ne.exports,oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Div",[n("b-row",{staticClass:"landingContainer",style:"margin:0",attrs:{cols:"1","cols-sm":"2","cols-lg":"2"}},[n("b-col",{staticClass:"midCol"},[n("h1",{staticClass:"landingText"},[e._v(" Enter username and password to enter the apps ")])]),n("b-col",{staticClass:"midCol"},[n("LoginCard")],1)],1)],1)},ae=[],le=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Div",[n("div",{staticClass:"loginContainer",on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login(t)}}},[e.error.length>0?n("span",{staticClass:"error"},[e._v(e._s(e.error))]):e._e(),e.error.length>0?n("br"):e._e(),n("span",[e._v("Username:")]),n("b-form-input",{attrs:{placeholder:"username",type:"text"},model:{value:e.username,callback:function(t){e.username=t},expression:"username"}}),n("br"),n("span",[e._v("Password:")]),n("b-form-input",{attrs:{placeholder:"********",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("br"),n("b-button",{staticClass:"loginButton",attrs:{variant:"primary"},on:{click:e.login}},[e._v("Login")])],1)])},se=[],ie={components:{Div:re},data:function(){return{error:"",username:"",password:""}},methods:{login:function(){var e=this.username,t=this.password;0===e.length||0===t.length?this.error="Please fill in the blank field":v.commit("login",{username:e,password:t})}},mounted:function(){var e=this;v.watch((function(e){return e.errormsg}),(function(){e.error=v.state.errormsg})),h.watch((function(e){return e.collaborators}),(function(){console.log("username: ",h.state.collaborators[0].login.username,"password: ",h.state.collaborators[0].login.password)}))}},ce=ie,ue=(n("46df"),Object(y["a"])(ce,le,se,!1,null,null,null)),de=ue.exports,me={components:{LoginCard:de,Div:re}},fe=me,pe=(n("b835"),Object(y["a"])(fe,oe,ae,!1,null,null,null)),ge=pe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Div",[n("div",{staticClass:"section"},[n("div",{staticClass:"sectionHeader"},[n("h1",{staticClass:"sectionTitle"},[n("b",[e._v("Employees")])]),n("Search")],1),n("br"),0===e.users.length?n("div",[n("BigSpinner")],1):n("b-row",{style:"margin:0",attrs:{cols:"2","cols-sm":"2","cols-md":"2","cols-lg":"3","cols-xl":"4"}},e._l(e.users,(function(e){return n("b-col",{key:e.login.uuid},[n("EmployeeCard",{attrs:{user:e}})],1)})),1)],1)])},ve=[],be=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("router-link",{staticClass:"detailLink",attrs:{to:"/employee/details/"+e.user.login.username}},[n("div",{staticClass:"cardContainer"},[e.user.picture.large?n("div",{staticClass:"flexCol infoContainer"},[n("div",{staticClass:"headerCard",style:"background-color:"+e.color[e.user.role.id-1]}),n("img",{staticClass:"profilePicture-l",attrs:{src:e.user.picture.large}}),n("div",{staticClass:"flexCol infoinfo"},[n("b",{staticClass:"userName"},[e._v(e._s(e.user.name.first)+" "+e._s(e.user.name.last))]),n("span",{staticClass:"userEmail"},[e._v(e._s(e.user.email))]),n("Natflag",{attrs:{nat:e.user.nat}})],1)]):n("b-spinner",{staticStyle:{width:"2rem",height:"2rem"},attrs:{variant:"primary",type:"grow"}})],1)])},_e=[],ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("abbr",{attrs:{title:""+e.nat}},[n("img",{staticClass:"natFlag",style:"cursor:default",attrs:{src:"https://www.countryflags.io/"+e.nat+"/flat/64.png"}})])},Ce=[],we={props:["nat"]},xe=we,Ie=(n("8737"),Object(y["a"])(xe,ye,Ce,!1,null,null,null)),Ee=Ie.exports,ke={components:{Natflag:Ee},props:["user"],data:function(){return{color:["green","yellow","midnightblue","brown"]}},methods:{}},Se=ke,Oe=(n("e3c3"),Object(y["a"])(Se,be,_e,!1,null,null,null)),$e=Oe.exports,De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-spinner",{staticClass:"bigSpinner",staticStyle:{width:"4rem",height:"4rem"},attrs:{variant:"primary",type:"grow"}})},Ue=[],je={},Ve=je,Be=(n("b245"),Object(y["a"])(Ve,De,Ue,!1,null,null,null)),Pe=Be.exports,Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-form-input",{staticClass:"inputSearch",attrs:{placeholder:"search employee",type:"text"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})},Ne=[],Me={data:function(){return{search:h.state.searchKey}},watch:{search:function(e){var t=e.toLowerCase();console.log(t),h.commit("search",t)}}},Ae=Me,Re=Object(y["a"])(Ae,Te,Ne,!1,null,null,null),Le=Re.exports,Je={components:{Div:re,EmployeeCard:$e,BigSpinner:Pe,Search:Le},data:function(){return{users:h.state.collaborators}},mounted:function(){var e=this;document.title="Employee Page",h.watch((function(e){return e.collaborators}),(function(){e.users=h.state.collaborators}))}},Fe=Je,He=(n("6589"),Object(y["a"])(Fe,he,ve,!1,null,null,null)),Ke=He.exports,We={components:{Div:re,LandingPage:ge,Employee:Ke},data:function(){return{user:""}},mounted:function(){var e=localStorage.getItem("loggedInUser");this.user=e,document.title="Home"}},Ge=We,qe=(n("cccb"),Object(y["a"])(Ge,Q,X,!1,null,null,null)),ze=qe.exports,Qe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Div",[n("EmployeeDetail",{attrs:{employee:e.employee}})],1)},Xe=[],Ye=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.employee.name.first?n("div",[n("b-row",{staticClass:"elseContainer",style:"margin:0",attrs:{cols:"1","cols-sm":"1","cols-md":"1","cols-lg":"2"}},[n("b-col",[n("BigImageContainer",{attrs:{src:e.employee.picture.large,name:e.employee.name.first+" "+e.employee.name.last,email:e.employee.email,nat:e.employee.nat,role:e.employee.role.role}})],1),n("b-col",[n("EmployeeInfo",{attrs:{employee:e.employee}})],1)],1),n("div",[n("RoleRelatedContainer",{attrs:{role:e.employee.role}})],1)],1):e._e()])},Ze=[],et=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bigImageContainer"},[n("img",{staticClass:"profileBig",attrs:{src:e.src,alt:"big image"}}),n("br"),e.editMode?n("div",{staticClass:"editContainer"},[n("div",{style:"display:flex; flex-direction:row"},[n("b-form-input",{attrs:{value:e.editValue.name.first,type:"text"},model:{value:e.editValue.name.first,callback:function(t){e.$set(e.editValue.name,"first",t)},expression:"editValue.name.first"}}),n("b-form-input",{attrs:{value:e.editValue.name.last,type:"text"},model:{value:e.editValue.name.last,callback:function(t){e.$set(e.editValue.name,"last",t)},expression:"editValue.name.last"}})],1),n("br"),n("div",[n("b-dropdown",{staticClass:"roleDd",attrs:{text:e.editValue.role.role}},e._l(e.editValue.selectRole,(function(t){return n("b-dropdown-item",{key:t.id,on:{click:function(n){e.select(e.editValue.selectRole.indexOf(t))}}},[e._v(" "+e._s(t.role)+" ")])})),1)],1),n("br"),n("b-form-input",{attrs:{value:e.editValue.email,type:"text"},model:{value:e.editValue.email,callback:function(t){e.$set(e.editValue,"email",t)},expression:"editValue.email"}})],1):n("div",{staticClass:"flexCol center"},[n("h2",[n("b",[e._v(e._s(e.name))])]),n("i",[e._v(e._s(e.role))]),n("span",[e._v(e._s(e.email))])]),e.editMode?n("br"):e._e(),n("NatFlags",{attrs:{nat:e.nat}})],1)},tt=[],nt={components:{NatFlags:Ee},props:["src","name","email","nat","role","editMode","editValue","select"],mounted:function(){}},rt=nt,ot=(n("c5df"),Object(y["a"])(rt,et,tt,!1,null,null,null)),at=ot.exports,lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flexCol tableContainer"},[n("b",{staticClass:"employeeinfo",style:!0===e.centerTitle?"text-align:center":"text-align:start"},[e._v("Employee Info:")]),n("br"),n("table",[n("tr",[e._m(0),n("td",[n("span",[e._v(e._s(e.employee.gender))])])]),n("tr",[e._m(1),n("td",[n("span",[e._v(e._s(e.employee.location.street.name))])])]),n("tr",[e._m(2),n("td",[n("span",[e._v(e._s(new Date(e.employee.dob.date.substring(0,10)).toDateString()))])])]),n("tr",[e._m(3),n("td",[n("span",[e._v(e._s(e.employee.dob.age))])])]),n("tr",[e._m(4),n("td",[n("span",[e._v(e._s(e.employee.phone))])])]),n("br"),n("br"),n("tr",[e._m(5),n("td",[n("span",[e._v(e._s(e.employee.login.uuid))])])]),n("tr",[e._m(6),n("td",[n("span",[e._v("@"+e._s(e.employee.login.username))])])])])])},st=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("span",[e._v("Gender:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("span",[e._v("Origin:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("span",[e._v("Date of Birth:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("span",[e._v("Age:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("span",[e._v("Phone:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("span",[e._v("Employee ID:")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",[n("span",[e._v("Username:")])])}],it={components:{},props:["employee","centerTitle"]},ct=it,ut=(n("1f74"),Object(y["a"])(ct,lt,st,!1,null,null,null)),dt=ut.exports,mt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Div",[n("div",{staticClass:"subContentContainer"},[n("b",{staticClass:"subtitleRelated"},[e._v("Related employee in "+e._s(e.role.role))]),n("br"),n("br"),0===e.related.length?n("div",[n("BigSpinner")],1):n("b-row",{style:"margin:0",attrs:{cols:"2","cols-sm":"2","cols-md":"2","cols-lg":"3","cols-xl":"4"}},e._l(e.related,(function(e){return n("b-col",{key:e.login.uuid},[n("EmployeeCard",{attrs:{user:e}})],1)})),1)],1)])},ft=[],pt={components:{Div:re,BigSpinner:Pe,EmployeeCard:$e},props:["role"],data:function(){return{related:[]}},mounted:function(){var e=this,t=h.state.collaborators.filter((function(t){return t.role.id===e.$props.role.id}));this.related=t}},gt=pt,ht=(n("2437"),Object(y["a"])(gt,mt,ft,!1,null,null,null)),vt=ht.exports,bt={components:{EmployeeInfo:dt,BigImageContainer:at,RoleRelatedContainer:vt},props:["employee"]},_t=bt,yt=(n("8450"),Object(y["a"])(_t,Ye,Ze,!1,null,null,null)),Ct=yt.exports,wt={components:{Div:re,EmployeeDetail:Ct},data:function(){return{employee:[]}},mounted:function(){var e=this;document.title="Details @".concat(this.$route.params.username);var t=h.state.collaborators.filter((function(t){return t.login.username===e.$route.params.username}));this.employee=t[0]}},xt=wt,It=Object(y["a"])(xt,Qe,Xe,!1,null,null,null),Et=It.exports,kt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Div",[n("BigImageContainer",{attrs:{src:e.loggedInUser.picture.large,name:e.loggedInUser.name.first+" "+e.loggedInUser.name.last,nat:e.loggedInUser.nat,email:e.loggedInUser.email,role:e.loggedInUser.role.role,editMode:e.editing,editValue:e.editValue,select:e.select}}),n("div",{style:"margin-bottom:30px"},[n("EmployeeInfo",{attrs:{employee:e.loggedInUser,centerTitle:!0}})],1),n("div",{staticClass:"editButtonContainer"},[n("b-button",{staticClass:"editButton",attrs:{variant:e.editing?"primary":"secondary"},on:{click:e.editorsave}},[e.editing?n("b-icon-check2"):n("b-icon-pencilFill")],1)],1)],1)},St=[],Ot={components:{Div:re,BigImageContainer:at,EmployeeInfo:dt},data:function(){return{loggedInUser:JSON.parse(localStorage.getItem("loggedInUser")),editing:!1,editValue:{name:{first:"",last:""},role:{},email:"",selectRole:[{id:1,role:"Android Developer"},{id:2,role:"Backend Developer"},{id:3,role:"Frontend Developer"},{id:4,role:"Data Scientist"}]}}},mounted:function(){var e=JSON.parse(localStorage.getItem("loggedInUser"));this.editValue.name.first=e.name.first,this.editValue.name.last=e.name.last,this.editValue.role=e.role,this.editValue.email=e.email,this.loggedInUser=e},methods:{editorsave:function(){if(this.editing=!this.editing,this.editing)console.log("start editing");else{var e=this.editValue,t=e.name,n=e.role,r=e.email,o=JSON.parse(localStorage.getItem("loggedInUser"));o.name=t,o.role=n,o.email=r,localStorage.setItem("loggedInUser",JSON.stringify(o)),this.loggedInUser=o}},select:function(e){this.editValue.role=this.editValue.selectRole[e]}}},$t=Ot,Dt=(n("d198"),Object(y["a"])($t,kt,St,!1,null,null,null)),Ut=Dt.exports;r["default"].use(z["a"]);var jt=[{path:"/",name:"Home",component:ze},{path:"/employee/details/:username",name:"Employee",props:!0,component:Et},{path:"/myprofile",name:"MyProfile",props:!0,component:Ut},{path:"/ggwp",name:"try page",props:!0,component:Ke}],Vt=new z["a"]({routes:jt,mode:"history"}),Bt=Vt,Pt=n("5f5b"),Tt=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(Pt["a"]),r["default"].use(Tt["a"]),r["default"].config.productionTip=!1,new r["default"]({router:Bt,store:void 0,render:function(e){return e(q)}}).$mount("#app")},"5ced":function(e,t,n){},6589:function(e,t,n){"use strict";n("e909")},8450:function(e,t,n){"use strict";n("ab07")},"85ec":function(e,t,n){},8737:function(e,t,n){"use strict";n("1203")},"9a64":function(e,t,n){},a14a:function(e,t,n){"use strict";n("a7e9")},a7e9:function(e,t,n){},ab07:function(e,t,n){},af4f:function(e,t,n){},b245:function(e,t,n){"use strict";n("af4f")},b388:function(e,t,n){},b835:function(e,t,n){"use strict";n("d5d0")},be50:function(e,t,n){},c5df:function(e,t,n){"use strict";n("4513")},c81a:function(e,t,n){"use strict";n("f236")},cccb:function(e,t,n){"use strict";n("5ced")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},d198:function(e,t,n){"use strict";n("ff0e")},d5d0:function(e,t,n){},e3c3:function(e,t,n){"use strict";n("be50")},e602:function(e,t,n){},e909:function(e,t,n){},f22f:function(e,t,n){},f236:function(e,t,n){},fabc:function(e,t,n){"use strict";n("4b58")},ff0e:function(e,t,n){}});
//# sourceMappingURL=app.5c9226e3.js.map