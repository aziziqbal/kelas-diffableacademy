(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-266a3676"],{"0d1d":function(t,e,i){"use strict";var a=i("7a6b"),s=i.n(a);s.a},"2fa4":function(t,e,i){"use strict";i("20f6");var a=i("80d2");e["a"]=Object(a["h"])("spacer","div","v-spacer")},"5e23":function(t,e,i){},"71d9":function(t,e,i){"use strict";i("0481"),i("4160"),i("4069"),i("a9e3");var a=i("3835"),s=i("5530"),o=(i("5e23"),i("8dd9")),n=i("adda"),r=i("80d2"),l=i("d9bd");e["a"]=o["a"].extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"},tile:{type:Boolean,default:!0}},data:function(){return{isExtended:!1}},computed:{computedHeight:function(){var t=this.computedContentHeight;if(!this.isExtended)return t;var e=parseInt(this.extensionHeight);return this.isCollapsed?t:t+(isNaN(e)?0:e)},computedContentHeight:function(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes:function(){return Object(s["a"])(Object(s["a"])({},o["a"].options.computed.classes.call(this)),{},{"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent})},isCollapsed:function(){return this.collapse},isProminent:function(){return this.prominent},styles:function(){return Object(s["a"])(Object(s["a"])({},this.measurableStyles),{},{height:Object(r["f"])(this.computedHeight)})}},created:function(){var t=this,e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((function(e){var i=Object(a["a"])(e,2),s=i[0],o=i[1];t.$attrs.hasOwnProperty(s)&&Object(l["a"])(s,o,t)}))},methods:{genBackground:function(){var t={height:Object(r["f"])(this.computedHeight),src:this.src},e=this.$scopedSlots.img?this.$scopedSlots.img({props:t}):this.$createElement(n["a"],{props:t});return this.$createElement("div",{staticClass:"v-toolbar__image"},[e])},genContent:function(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:Object(r["f"])(this.computedContentHeight)}},Object(r["n"])(this))},genExtension:function(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:Object(r["f"])(this.extensionHeight)}},Object(r["n"])(this,"extension"))}},render:function(t){this.isExtended=this.extended||!!this.$scopedSlots.extension;var e=[this.genContent()],i=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&e.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&e.unshift(this.genBackground()),t(this.tag,i,e)}})},"7a6b":function(t,e,i){},"8eae":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-theme-provider",[i("section",{attrs:{id:"hero-alt"}},[i("base-img",{attrs:{height:t.$vuetify.breakpoint.mdAndUp?250:225,gradient:t.gradient,src:t.src,color:"#45516b",flat:"","max-width":"100%",tile:""}},[i("v-row",{staticClass:"ma-0 fill-height text-center",attrs:{align:"center",justify:"left"}},[i("v-col",{attrs:{cols:"12"}},[i("base-heading",{staticStyle:{color:"white"},attrs:{title:"Introduction Vue JS Framework",space:"2",weight:"500"}}),i("div",{staticStyle:{color:"White","margin-bottom":"20px"}},[t._v(" Disusun oleh: Diffable Academy "),i("br"),t._v(" Level: Dasar "),i("br"),i("v-btn",{staticStyle:{"margin-top":"10px"},attrs:{color:"white"}},[t._v("Daftar Kelas")])],1)],1)],1)],1),i("div",{staticStyle:{"background-color":"#FAFAFA",padding:"20px"}},[i("v-row",[i("v-col",{staticClass:"d-flex",staticStyle:{"padding-top":"0px"},attrs:{cols:"12",sm:"4"}},[i("div",{staticStyle:{width:"100%"}},[i("v-card",{staticClass:"mx-auto"},[i("v-toolbar",{attrs:{color:"#305871",dark:""}},[i("v-toolbar-title",[t._v("Daftar Materi")]),i("v-spacer"),i("v-btn",{attrs:{icon:""}},[i("v-icon",[t._v("mdi-magnify")])],1)],1),i("v-list",{attrs:{"two-line":""}},[i("v-list-item-group",{attrs:{multiple:"","active-class":"pink--text"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}},[t._l(t.items,(function(e,a){return[i("v-list-item",{key:e.title,scopedSlots:t._u([{key:"default",fn:function(a){a.active,a.toggle;return[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.title)}}),i("v-list-item-subtitle",{staticClass:"text--primary",domProps:{textContent:t._s(e.headline)}})],1)]}}],null,!0)}),a+1<t.items.length?i("v-divider",{key:a}):t._e()]}))],2)],1)],1)],1)]),i("v-col",{staticClass:"d-flex",staticStyle:{"padding-top":"0px"},attrs:{cols:"12",sm:"8"}},[i("v-card",{staticClass:"mx-auto",staticStyle:{width:"100%"},attrs:{outlined:""}},[i("v-list-item",{attrs:{"three-line":""}},[i("v-list-item-content",[i("div",{staticClass:"overline mb-4",staticStyle:{"letter-spacing":"normal"}},[t._v("Materi 1 ")]),i("v-list-item-title",{staticClass:"headline mb-1",staticStyle:{"letter-spacing":"normal"}},[t._v("Introduction Vue JS")]),i("v-card-text",{staticStyle:{padding:"0px","margin-top":"20px"}},[i("div",{staticStyle:{"letter-spacing":"normal","text-align":"justify","margin-bottom":"20px"}},[t._v(" Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries. If you’d like to learn more about Vue before diving in, we created a video walking through the core principles and a sample project. If you are an experienced frontend developer and want to know how Vue compares to other libraries/frameworks, check out the Comparison with Other Frameworks. ")]),i("youtube",{attrs:{"video-id":t.videoId,"player-vars":t.playerVars},on:{playing:t.playing}})],1)],1)],1)],1)],1)],1)],1)],1)])},s=[],o=(i("99af"),i("7bc6")),n={name:"SectionHeroAlt",metaInfo:function(){var t=this;return{changed:function(e){return t.title=e.titleChunk.toUpperCase()}}},provide:{heading:{align:"center"}},data:function(){return{videoId:"lG0Ys-2d4MA",playerVars:{autoplay:1},title:"",tab:null,selected:[0],items:[{headline:"What is Vue JS ?",title:"Materi 1"},{headline:"What is Vue JS ?",title:"Materi 2"},{headline:"What is Vue JS ?",title:"Materi 3"},{headline:"What is Vue JS ?",title:"Materi 4"},{headline:"What is Vue JS ?",title:"Materi 5"},{headline:"What is Vue JS ?",title:"Materi 6"},{headline:"What is Vue JS ?",title:"Materi 7"},{headline:"What is Vue JS ?",title:"Materi 8"}]}},computed:{gradient:function(){var t="".concat(this.$vuetify.theme.themes.light.secondary,"CC"),e=Object(o["b"])(Object(o["a"])(t));return"to top, ".concat(e,", ").concat(e)},src:function(){return this.$route.meta.src},items:function(){return[{text:"HOME",to:"/"},{text:this.title}]}},methods:{playing:function(){console.log("o/ we are watching!!!")}}},r=n,l=(i("0d1d"),i("2877")),c=i("6544"),d=i.n(c),h=i("8336"),p=i("b0af"),u=i("99d9"),v=i("62ad"),m=i("ce7e"),b=i("132d"),f=i("8860"),g=i("da13"),y=i("5d23"),x=i("1baa"),w=i("0fd9"),S=i("2fa4"),V=i("480e"),C=i("71d9"),k=i("80d2"),_=Object(k["h"])("v-toolbar__title"),j=Object(k["h"])("v-toolbar__items"),O=(C["a"],Object(l["a"])(r,a,s,!1,null,null,null));e["default"]=O.exports;d()(O,{VBtn:h["a"],VCard:p["a"],VCardText:u["c"],VCol:v["a"],VDivider:m["a"],VIcon:b["a"],VList:f["a"],VListItem:g["a"],VListItemContent:y["a"],VListItemGroup:x["a"],VListItemSubtitle:y["b"],VListItemTitle:y["c"],VRow:w["a"],VSpacer:S["a"],VThemeProvider:V["a"],VToolbar:C["a"],VToolbarTitle:_})}}]);
//# sourceMappingURL=chunk-266a3676.e5844add.js.map