(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{573:function(t,e,n){"use strict";n(21);e.a={head:function(){var head={meta:[]};if("article"!==this.$route.name&&"page-page"!==this.$route.name||(head.htmlAttrs={prefix:"og: http://ogp.me/ns# fb: http://ogp.me/ns/ fb# article: http://ogp.me/ns/article#"}),""!==this.meta.title){var title="".concat(this.unescapeHTML(this.meta.title)," | ").concat(this.unescapeHTML("increment Log"));head.title=title,head.meta.push({hid:"og:title",property:"og:title",content:title})}if(""!==this.meta.description)head.meta.push({hid:"description",name:"description",content:this.unescapeHTML(this.meta.description)}),head.meta.push({hid:"og:description",property:"og:description",content:this.unescapeHTML(this.meta.description)});else if(!this.meta.description&&this.meta.title){var t="".concat("increment Log","サイトの").concat(this.meta.title,"ページです。").concat("色々勉強中の人間が色々書いてるブログです。");head.meta.push({hid:"description",name:"description",content:t}),head.meta.push({hid:"og:description",property:"og:description",content:t})}this.meta.type?head.meta.push({hid:"og:type",property:"og:type",content:this.meta.type}):"/"===this.$route.path&&head.meta.push({hid:"og:type",property:"og:type",content:"website"});var e="".concat("https://increment-log.com").concat(this.$router.history.base).concat(this.$route.path);if(head.meta.push({hid:"og:url",property:"og:url",content:e}),""!==this.meta.image){var n=this.meta.image;head.meta.push({hid:"og:image",property:"og:image",content:n}),head.meta.push({hid:"twitter:image",property:"twitter:image",content:n})}return head}}},580:function(t,e,n){var content=n(601);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(5).default)("662cd8fe",content,!0,{sourceMap:!1})},600:function(t,e,n){"use strict";var o=n(580);n.n(o).a},601:function(t,e,n){(t.exports=n(4)(!1)).push([t.i,".archive-header[data-v-2d46ef1d]{margin-bottom:4.5rem}.archive-title[data-v-2d46ef1d]{position:relative;z-index:1;margin:0}.archive-title small[data-v-2d46ef1d]{font-weight:400;color:#adb5bd}.more-state[data-v-2d46ef1d]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;border-top:1px dotted #5697be;margin-top:3rem;padding-top:3rem;padding-bottom:3rem}.more-state-blank[data-v-2d46ef1d]{height:48px}.more-state button[data-v-2d46ef1d]{display:block;max-width:240px;height:48px;line-height:48px;padding:0 24px;margin:0 auto;font-weight:700;color:#25415c;background:transparent;border:1px solid #25415c;border-radius:.25em;cursor:pointer;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-transition:all .3s cubic-bezier(.645,.045,.355,1);transition:all .3s cubic-bezier(.645,.045,.355,1)}.more-state button[data-v-2d46ef1d]:hover{color:#fff;background:#315679;border-color:#315679}.more-state button[data-v-2d46ef1d]:focus{outline:none;background:#25415c}.more-state button[data-v-2d46ef1d]:active{-webkit-transform:scale(.9);transform:scale(.9)}",""])},613:function(t,e,n){"use strict";n.r(e);n(21),n(40);var o=n(11),r=n(27),c=n.n(r),d=n(140),l=n(139),meta=n(573),m={asyncData:function(){var t=Object(o.a)(regeneratorRuntime.mark(function t(e){var n,o,r,d,l;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n=e.app,o=e.store,r=e.params,d=encodeURI(r.tag).toLowerCase(),c()(o.state.tagArticles,{slug:d})){t.next=6;break}return l=c()(o.state.tags,{slug:d}),t.next=6,n.$wp.posts().tags(l.id).perPage(10).embed().then(function(t){o.commit("setTagArticles",{slug:d,articles:t,infiniteLoading:!0,page:1})}).catch(function(){});case 6:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),data:function(){return{articles:[],isTriggerContentLoad:!1,meta:{title:"",description:"",type:"website"}}},components:{ArticleList:d.a,Spinner1:l.a},computed:{tagSlug:function(){return encodeURI(this.$route.params.tag).toLowerCase()},tag:function(){return c()(this.$store.state.tags,{slug:this.tagSlug})},tagArticles:function(){return this.$store.getters.getFilteredTagArticles(this.tagSlug)},indexInfiniteLoading:function(){return this.$store.state.indexInfiniteLoading}},methods:{loadMore:function(){this.isTriggerContentLoad=!this.isTriggerContentLoad},moreArticles:function(t){var e=this;this.$store.commit("incrementTagArticlesPage",this.tagSlug),this.$wp.posts().tags(this.tag.id).perPage(10).page(this.tagArticles.page).embed().then(function(n){var data={slug:e.tagSlug,articles:n};e.$store.commit("concatFilteredTagArticles",data),e.isTriggerContentLoad=!1,t.loaded()}).catch(function(){t.complete()})}},beforeMount:function(){this.meta.title=this.tag.name?this.tag.name+": 記事一覧":"",this.meta.description=this.tag.name?this.tag.name+": 記事一覧 - Page "+this.tagArticles.page:""},mixins:[{unescapeHTML:Function},meta.a]},h=(n(600),n(1)),component=Object(h.a)(m,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tags"},[n("header",{staticClass:"archive-header"},[n("h1",{staticClass:"archive-title"},[t._v(t._s(t.tag.name)),n("small",[t._v("：記事一覧")])]),t._v(" "),t.tag.description?n("p",[t._v(t._s(t.tag.description))]):t._e()]),t._v(" "),t.tagArticles.articles!==[]?n("article-list",{attrs:{articles:t.tagArticles.articles}}):n("div",{staticClass:"more-state"},[n("p",[t._v("記事が見つかりませんでした。")])]),t._v(" "),t.tagArticles.articles!==[]?n("div",{staticClass:"more-state"},[n("div",{staticClass:"more-state-blank"}),t._v(" "),n("no-ssr",[t.isTriggerContentLoad?t.indexInfiniteLoading.enabled&&t.tagArticles.articles!==[]&&t.isTriggerContentLoad?n("infinite-loading",{ref:"infiniteLoading",on:{infinite:t.moreArticles}},[n("div",{attrs:{slot:"spinner"},slot:"spinner"},[n("Spinner1")],1),t._v(" "),n("div",{attrs:{slot:"no-more"},slot:"no-more"},[n("p",[t._v("これ以上の記事はありません。")])]),t._v(" "),n("div",{attrs:{slot:"no-results"},slot:"no-results"},[n("p",[t._v("記事が見つかりませんでした。")])])]):t._e():n("button",{on:{click:t.loadMore}},[t._v("\n        Load more\n      ")])],1)],1):t._e()],1)},[],!1,null,"2d46ef1d",null);e.default=component.exports}}]);