(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{644:function(e,a,n){"use strict";n.r(a);n(441);var t=n(442),r=n.n(t),l=n(17),u=n(18),i=n(19),c=n(16),s=n(20),d=n(1),o=n.n(d),v=function(e){function a(){return Object(l.a)(this,a),Object(i.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(s.a)(a,e),Object(u.a)(a,[{key:"render",value:function(){var e=this.GlobalUtil.getQueryStringByName("action"),a=[{key:"42",value:"42\u5c81"},{key:"32",value:"\u4e09\u5341\u4e8c\u5c81"}];var n=[{key:"1",name:"\u80e1\u5f66\u658c",age:{value:"32",list:a},address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7"},{key:"2",name:"\u674e\u4e09",age:{value:"42",list:a},address:"\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed2\u53f7",nameList:a}],t=[{title:"\u59d3\u540d",dataIndex:"name",key:"name",render:function(a,n,t){return o.a.createElement("span",null,a+" "+e," ")}},{title:"\u5e74\u9f84",dataIndex:"age",key:"age",render:function(e,a,n){return o.a.createElement("span",null,function(e,a){for(var n=0;n<a.length;n++)if(a[n].key===e)return a[n].value;return e}(e.value,e.list))}},{title:"\u4f4f\u5740",dataIndex:"address",key:"address"}],l=o.a.createElement(r.a,{dataSource:n,columns:t});return o.a.createElement("div",null," ",l)}},{key:"componentWillReceiveProps",value:function(e){}}]),a}(o.a.Component);a.default=v}}]);