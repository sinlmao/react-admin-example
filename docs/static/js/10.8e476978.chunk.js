(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{432:function(e,t,a){"use strict";a.d(t,"a",function(){return f});var n=a(17),s=a(18),r=a(19),i=a(16),o=a(20),u=a(1),c=a.n(u),l=a(39),h={POST:1,GET:2},f=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(r.a)(this,Object(i.a)(t).call(this,e))).state={loading:!1},a.reqConfig={type:h.GET,url:"",reqParams:{}},a.source=null,a.setSource=function(e){a.source=e},a.setUrl=function(e){a.reqConfig.url=e},a.setOperate=function(e){a.reqConfig.type=e},a.setPostOperate=function(){a.setOperate(h.POST)},e.url&&a.setUrl(e.url),a}return Object(o.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){this.cancelRequest()}},{key:"cancelRequest",value:function(){if(this.source){console.log("\u7ec4\u4ef6\u5378\u8f7d,\u53d6\u6d88\u8bf7\u6c42"),this.source.cancel("\u7ec4\u4ef6\u5378\u8f7d,\u53d6\u6d88\u8bf7\u6c42")}}},{key:"requestDataExtend",value:function(e,t,a){var n=this;if(!0!==this.checkShowLoad()){this.showLoadStart();var s={};t&&Object.assign(s,t);var r=l.a.getUrl;a===h.POST&&(r=l.a.postUrl),Object.assign(this.reqConfig,{type:a,url:e,reqParams:s}),r(e,s,this.setSource).then(function(e){console.log(e.data),n.showLoadEnd(),n.processResponseData(e.data)},function(e){n.showLoadEnd(),n.processResponseError(e)})}}},{key:"requestRefresh",value:function(){this.requestDataExtend(this.reqConfig.url,this.reqConfig.reqParams,this.reqConfig.type)}},{key:"requestDataExtendPost",value:function(e,t){this.requestDataExtend(e,t,h.POST)}},{key:"requestDataExtendGet",value:function(e,t){this.requestDataExtend(e,t,h.GET)}},{key:"requestData",value:function(e){this.requestDataExtend(this.reqConfig.url,e,this.reqConfig.type)}},{key:"checkShowLoad",value:function(){return console.log(this.state.loading),!0===this.state.loading}},{key:"showLoadStart",value:function(){this.setState({loading:!0})}},{key:"showLoadEnd",value:function(){this.setState({loading:!1})}},{key:"processResponseData",value:function(e){console.log("processResponseData:",e)}},{key:"processResponseError",value:function(e){console.log("processResponseError:",e)}}]),t}(c.a.Component)},433:function(e,t,a){"use strict";var n=a(16);function s(e,t,a){return(s="undefined"!==typeof Reflect&&Reflect.get?Reflect.get:function(e,t,a){var s=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=Object(n.a)(e)););return e}(e,t);if(s){var r=Object.getOwnPropertyDescriptor(s,t);return r.get?r.get.call(a):r.value}})(e,t,a||e)}a.d(t,"a",function(){return s})},454:function(e,t,a){"use strict";a(429);var n=a(430),s=a.n(n),r=(a(441),a(442)),i=a.n(r),o=a(17),u=a(18),c=a(19),l=a(16),h=a(20),f=a(1),d=a.n(f),p=a(433),g=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).reqData={reqParams:{page:1,pageSize:10},delUrl:"",rowKey:"id"},a.auto=e.auto,Object.assign(a.state,{dataList:[],columns:[],total:0,current:1,pageSize:10}),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"requestListPageData",value:function(e,t){e&&(this.reqData.reqParams.page=e),t&&(this.reqData.reqParams.pageSize=t),this.requestListData()}},{key:"requestQueryData",value:function(e){this.reqData.reqParams.page=1,this.requestListData(e)}},{key:"requestListData",value:function(e){var t=Object.assign({},this.reqData.reqParams);e&&Object.assign(t,e),this.requestData(t)}},{key:"processResponseData",value:function(e){Object(p.a)(Object(l.a)(t.prototype),"processResponseData",this).call(this,e),this.setState({total:e.total,dataList:e.list,current:e.page})}},{key:"componentDidMount",value:function(){!0===this.auto&&this.requestListData(),this.props.onRef&&this.props.onRef(this)}}]),t}(a(432).a);a.d(t,"a",function(){return q});var q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(l.a)(t).call(this,e))).state.columns=e.columns,a.state.dataList=[],a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onShowSizeChange",value:function(e,t){console.log({current:e,pageSize:t}),this.requestListPageData(e,t)}},{key:"onChange",value:function(e){console.log("Page: ",e),this.requestListPageData(e)}},{key:"render",value:function(){return d.a.createElement("div",null,d.a.createElement(s.a,{spinning:this.state.loading,tip:"\u6570\u636e\u52a0\u8f7d\u4e2d..."},d.a.createElement(i.a,{columns:this.state.columns,dataSource:this.state.dataList,rowKey:this.reqData.rowKey,pagination:{pageSizeOptions:["10","20","30"],showSizeChanger:!0,onChange:this.onChange.bind(this),onShowSizeChange:this.onShowSizeChange.bind(this),current:this.state.current,total:this.state.total,pageSize:this.state.pageSize}})))}}]),t}(g)},645:function(e,t,a){"use strict";a.r(t);var n=a(17),s=a(18),r=a(19),i=a(16),o=a(20),u=a(1),c=a.n(u),l=a(454),h=function(e){function t(){return Object(n.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=[{title:"\u5e8f\u53f7",width:80,key:"id",render:function(e,t,a){return" ".concat(a+1)}},{title:"Name",dataIndex:"name",key:"name",render:function(e){return c.a.createElement("span",null,e)}},{title:"Age",dataIndex:"age",key:"age"},{title:"Address",dataIndex:"addr",key:"addr"},{title:"Birth",dataIndex:"birth",key:"birth"},{title:"Sex",dataIndex:"sex",key:"sex"}];return c.a.createElement(l.a,{url:"/user/listpage",auto:!0,columns:e})}}]),t}(c.a.Component);t.default=h}}]);