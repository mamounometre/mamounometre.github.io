(function(e){function t(t){for(var r,s,i=t[0],c=t[1],l=t[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var l=0;l<i.length;l++)t(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},1:function(e,t){},2:function(e,t){},"33a8":function(e,t,n){"use strict";n("a19b")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"primary",dark:""}},[n("div",{staticClass:"d-flex align-center"},[n("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Mamounometre Logo",contain:"",src:"assets/logo-mamoune.png",transition:"scale-transition",width:"40"}})],1),n("v-toolbar-title",[e._v("Mamounomètre (version alpha)")]),n("v-spacer"),n("v-btn",{attrs:{href:"https://github.com/mamounometre/mamounometre",target:"_blank",text:""}},[n("span",{staticClass:"mr-2"},[e._v("Github")]),n("v-icon",[e._v("mdi-open-in-new")])],1)],1),n("v-main",{attrs:{back:""}},[n("Questionnaire",{attrs:{questionnaire:e.questionnaire}})],1)],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-form",{ref:"form",attrs:{"lazy-validation":""}},e._l(e.questionnaire.categories,(function(t){return n("v-row",{key:t.id,attrs:{justify:"space-around"}},[n("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"10",lg:"10"}},[n("v-container",{staticClass:"grey transparent lighten-5"},[n("v-row",{attrs:{justify:"space-around"}},[n("v-col",{attrs:{cols:"12",xs:"12",sm:"12",md:"12",lg:"12","align-self":"center"}},[e._v(e._s(t.label))])],1),n("v-row",e._l(e.listQuestions(t.id),(function(e){return n("v-col",{key:e.id,attrs:{cols:"12",xs:"12",sm:"6",md:"4",lg:"3"}},[n("Question",{attrs:{question:e}})],1)})),1)],1)],1)],1)})),1),n("v-row",{attrs:{justify:"space-around"}},[n("v-col",{attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"4"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.scoresTable,"hide-default-footer":"","disable-sort":""},scopedSlots:e._u([{key:"item.score",fn:function(t){var r=t.item;return[n("v-chip",{attrs:{color:e.getColor(r.score),dark:""}},[e._v(" "+e._s(r.score)+" ")])]}}],null,!0)})],1)],1),n("v-row",{attrs:{justify:"space-around"}},[n("v-col",{staticClass:"d-flex justify-center",attrs:{cols:"12",xs:"12",sm:"6",md:"6",lg:"4"}},[n("v-btn",{attrs:{large:"",dark:"",bottom:"",center:"",color:"green"},on:{click:e.share}},[e._v(" Partager ")]),n("v-snackbar",{scopedSlots:e._u([{key:"action",fn:function(t){var r=t.attrs;return[n("v-btn",e._b({attrs:{color:"pink",text:""},on:{click:function(t){e.snackbar=!1}}},"v-btn",r,!1),[e._v(" Fermer ")])]}}]),model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(" "+e._s(e.shareLinkMessage)+" ")])],1)],1)],1)},i=[],c=n("1da1"),l=(n("96cf"),n("99af"),n("d81d"),n("4de4"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{staticClass:"question"},["boolean"===e.question.type?n("v-checkbox",{attrs:{label:e.question.title,required:"",hint:e.questionHint,"persistent-hint":""},model:{value:e.question.value,callback:function(t){e.$set(e.question,"value",t)},expression:"question.value"}}):e._e(),"number"===e.question.type?n("v-text-field",{attrs:{label:e.question.title,required:"",type:"number",hint:e.questionHint,"persistent-hint":""},model:{value:e.question.value,callback:function(t){e.$set(e.question,"value",t)},expression:"question.value"}}):e._e()],1)}),u=[],p=n("b85c");n("caad"),n("2532");function d(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=0,a=Object(p["a"])(e.questions);try{for(a.s();!(t=a.n()).done;){var o=t.value;n&&o.category!==n||(r+=f(o))}}catch(s){a.e(s)}finally{a.f()}return r}function f(e){if("number"===e.type){if(e.value>0&&!(e.scoreIgnoreValues||[]).includes(e.value)){var t=e.max&&e.value>e.max?e.max:e.value;return t=e.min&&e.min<t?e.min:t,e.score*t}}else{if("boolean"!==e.type)throw new Error("Unknown question type: "+JSON.stringify(e));if(!0===e.value)return e.score}return 0}var m={name:"Question",props:{question:Object},computed:{questionHint:function(){var e=this.$props.question,t=f(e);return t>0?"+".concat(t," points mamoune !"):null}}},b=m,y=(n("33a8"),n("2877")),v=n("6544"),h=n.n(v),g=n("ac7c"),x=n("8654"),w=Object(y["a"])(b,l,u,!1,null,null,null),k=w.exports;h()(w,{VCheckbox:g["a"],VTextField:x["a"]});n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("25f0");var q=n("313f");function _(e){return j.apply(this,arguments)}function j(){return j=Object(c["a"])(regeneratorRuntime.mark((function e(t){var n,r,a,o,s,i,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n={},r=Object(p["a"])(t.questions);try{for(r.s();!(a=r.n()).done;)o=a.value,o.value&&(n[o.id]=o.value)}catch(l){r.e(l)}finally{r.f()}return s=new URLSearchParams(n),i=window.location.protocol+"//"+window.location.host+window.location.pathname+"?"+s.toString(),e.next=7,q.shorten(i);case 7:return c=e.sent,e.abrupt("return",c);case 9:case"end":return e.stop()}}),e)}))),j.apply(this,arguments)}var C={name:"Questionnaire",components:{Question:k},props:{title:String,questionnaire:Object},data:function(){return{snackbar:!1,shareLink:"",shareLinkMessage:"",headers:[{text:"Categorie",value:"category"},{text:"Score",value:"score"}],navigator:navigator}},computed:{scoresTable:function(){var e=this;return this.$props.questionnaire.categories.map((function(t){return{category:t.label,score:d(e.$props.questionnaire,t.id)}})).concat([{category:"Mamounoscore total",score:d(this.$props.questionnaire)}])}},methods:{calculatedScore:function(){return d(this.$props.questionnaire,null)},listQuestions:function(e){return this.$props.questionnaire.questions.filter((function(t){return t.category===e}))},getColor:function(e){return e>250?"#FF0D0D":e>200?"#FF4E11":e>100?"#FF8E15":e>50?"#FAB733":e>20?"#ACB334":"#69B34C"},share:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,_(this.$props.questionnaire);case 2:return this.shareLink=e.sent,console.log("Share link: "+this.shareLink),e.prev=4,e.next=7,this.$data.navigator.clipboard.writeText(this.shareLink);case 7:this.shareLinkMessage="Lien copié dans le presse-papier",e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](4),this.shareLinkMessage=this.shareLink,console.error("Cannot copy URL: "+e.t0.message);case 14:this.snackbar=!0;case 15:case"end":return e.stop()}}),e,this,[[4,10]])})));function t(){return e.apply(this,arguments)}return t}()},watch:{questionnaire:{handler:function(e){e&&this.calculatedScore(e)},deep:!0}}},O=C,M=n("8336"),S=n("cc20"),V=n("62ad"),N=n("a523"),L=n("8fea"),T=n("4bd4"),F=n("0fd9"),P=n("2db4"),$=Object(y["a"])(O,s,i,!1,null,null,null),A=$.exports;h()($,{VBtn:M["a"],VChip:S["a"],VCol:V["a"],VContainer:N["a"],VDataTable:L["a"],VForm:T["a"],VRow:F["a"],VSnackbar:P["a"]});n("ac1f"),n("841c");function I(){var e=Q(),t=E(e);return t}function E(e){var t=new URLSearchParams(window.location.search);return e.questions=e.questions.map((function(e){if(t.get(e.id)){var n=t.get(e.id);e.value="boolean"===e.type?"true"===n:"number"===e.type?parseInt(n||"0"):n}return e})),e}function Q(){return{title:"Mamounomètre (pas de jujemen !)",categories:[{id:"family",label:"Famille"},{id:"style",label:"Style"},{id:"profile",label:"Profil"},{id:"post",label:"Attitude"}],questions:[{id:"childrenNuber",category:"family",type:"number",title:"Nombre d'enfants ?",score:10},{id:"fatherNumber",category:"family",type:"number",title:"Nombre de pères différents ?",scoreIgnoreValues:[0,1],score:20},{id:"fatherLeft",category:"family",type:"number",title:"Nombre de pères partis acheter des clopes et jamais revenus",score:20},{id:"fatherJail",category:"family",type:"number",title:"Nombre de pères en prison",score:30},{id:"fatherViolence",category:"family",type:"number",title:"Nombre de pères adeptes de violences conjugales",score:20},{id:"childrenCareNumber",category:"family",type:"number",title:"Nombre d'enfants placés par l' ASE",score:50},{id:"motherJobless",category:"family",type:"boolean",title:"Mère au foyer",score:10},{id:"firstnameTypos",category:"family",type:"number",title:"Nombre de fautes dans les prénoms des enfants",score:20,max:5},{id:"styleChildrenName",category:"style",type:"boolean",title:"Tatouage(s) avec les prénoms des enfants",score:10},{id:"styleTypos",category:"style",type:"boolean",title:"Fautes d'orthographe dans les tatouages",score:20},{id:"styleInfinite",category:"style",type:"boolean",title:"Tatouage avec signe infini",score:10},{id:"myKidsMyLife",category:"profile",type:"boolean",title:"'Mes enfants ma vie' en profil",score:20},{id:"dumbJob",category:"profile",type:"boolean",title:"Emploi déclaré de type 'Plus bo métié du mondes: Maman' ou 'CEO chez Guess'",score:20},{id:"socialNetworks",category:"profile",type:"boolean",title:"Influenceuse sur les réseaux sociaux",score:20},{id:"noJudgement",category:"post",type:"boolean",title:"Utilisation de 'Pa de jujemant'",score:30},{id:"babyNumberNaming",category:"post",type:"boolean",title:"Utilisation de 'bb1, bb2, bb3...''",score:20},{id:"babyMonthCounting",category:"post",type:"boolean",title:"Définit l'âge de son bébé en nombre de mois (+de 24 mois)",score:20},{id:"motherCaf",category:"post",type:"boolean",title:"Questions concernant la CAF / le calcul des allocations",score:40},{id:"motherCaf2",category:"post",type:"boolean",title:"Se plaint de la CAF",score:40},{id:"motherDoctissimo",category:"post",type:"boolean",title:"Demande de conseils médicaux sur internet",score:30},{id:"motherBadCare",category:"post",type:"boolean",title:"Absence de soins, ou soins inadaptés",score:30},{id:"motherCheating",category:"post",type:"boolean",title:"Infidélité",score:20},{id:"motherSexDumb",category:"post",type:"boolean",title:"Grandes carences en éducation sexuelle",score:20},{id:"childBitching",category:"post",type:"boolean",title:"Sexualisation de ses enfants",score:50},{id:"postTypos",category:"post",type:"number",title:"Nombre de fautes d'orthographe dans le post",max:20,score:3},{id:"genius",category:"post",type:"boolean",title:"Mon enfant est surdoué / HPI",score:30},{id:"verbalAbuse",category:"post",type:"boolean",title:"Menaces envers des membres de neurchis",score:30},{id:"justiceAbuse",category:"post",type:"boolean",title:"Menaces de porter plinthe",score:50}]}}var B={name:"App",components:{Questionnaire:A},data:function(){return{questionnaire:I()}},metaInfo:{description:"Calculez scientifiquement si vous êtes une mamoune !","og:title":"Mamounometre","og:site_name":"Mamounometre","og:type":"website","og:image":"https://mamounometre.github.io/assets/social-preview.png",robots:"index,follow"}},R=B,D=(n("034f"),n("7496")),J=n("40dc"),U=n("132d"),H=n("adda"),z=n("f6c4"),G=n("2fa4"),K=n("2a7f"),W=Object(y["a"])(R,a,o,!1,null,null,null),X=W.exports;h()(W,{VApp:D["a"],VAppBar:J["a"],VBtn:M["a"],VIcon:U["a"],VImg:H["a"],VMain:z["a"],VSpacer:G["a"],VToolbarTitle:K["a"]});var Y=n("f309");r["a"].use(Y["a"]);var Z=new Y["a"]({}),ee=n("58ca");r["a"].prototype.navigator=navigator,r["a"].config.productionTip=!1,r["a"].use(ee["a"],{refreshOnceOnNavigation:!0}),new r["a"]({vuetify:Z,render:function(e){return e(X)}}).$mount("#app")},"85ec":function(e,t,n){},a19b:function(e,t,n){}});
//# sourceMappingURL=app.ea92cc53.js.map