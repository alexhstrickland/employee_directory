(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{43:function(e,t,s){},44:function(e,t,s){"use strict";s.r(t);var n=s(2),a=s(14),c=s.n(a),r=s(15),o=s(16),i=s(17),l=s(19),j=s(18),h=s(4),u=s.n(h),m=(s(3),s(0));var d=function e(t){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("table",{className:"table",children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Photo"}),Object(m.jsx)("th",{children:"First Name"}),Object(m.jsx)("th",{children:"Last Name"}),Object(m.jsx)("th",{children:"Email"}),Object(m.jsx)("th",{children:"Phone"}),Object(m.jsx)("th",{children:"City"}),Object(m.jsx)("th",{children:"State"})]})}),Object(m.jsx)("tbody",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:Object(m.jsx)("img",{src:e.picture})}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{}),Object(m.jsx)("th",{})]})})]})})};var p=function(e){return Object(m.jsx)("div",{className:"jumbotron bg-dark",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("h1",{className:"display",children:"Employee Directory"})})})};var b=function(e){return Object(m.jsx)("form",{children:Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{onChange:e.handleInputChange,value:e.input,name:"search",type:"text",className:"form-control",placeholder:"Search for an Employee",id:"search"},e.key)})})},O=function(e){Object(l.a)(s,e);var t=Object(j.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={employees:[],input:"",sorted:"ascending",searchResults:[]},e.handleInputChange=function(t){var s=t.target,n=s.name,a=s.value;e.setState(Object(r.a)({},n,a));var c=e.state.empResults.filter((function(e){return e.name.last.toLowerCase().includes(a.toLowerCase())}));e.setState({employees:c})},e.sortFirstName=function(){var t=e.state.employees.sort((function(e,t){return e.name.first.localeCompare(t.name.first)}));e.setState({employees:t})},e.sortLastName=function(){var t=e.state.employees.sort((function(e,t){return e.name.last.localeCompare(t.name.first)}));e.setState({employees:t})},e.sortCity=function(){var t=e.state.employees.sort((function(e,t){return e.location.city.localeCompare(t.location.city)}));e.setState({employees:t})},e.sortState=function(){var t=e.state.employees.sort((function(e,t){return e.location.state.localeCompare(t.location.state)}));e.setState({employees:t})},e}return Object(i.a)(s,[{key:"componentDidMount",value:function(){var e=this;u.a.get("https://randomuser.me/api/?results=100").then((function(t){console.log(t.data),e.setState({employees:t.data.results,empResults:t.data.results})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(p,{}),Object(m.jsx)(b,{handleInputChange:this.handleInputChange,input:this.state.input}),Object(m.jsx)(d,{results:this.state.employees,firstName:this.firstName,lastName:this.lastName,city:this.city,state:this.state})]})}}]),s}(n.Component);var x=function(){return Object(m.jsx)("div",{children:Object(m.jsx)(O,{})})};s(43);c.a.render(Object(m.jsx)(x,{}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.66b50fe2.chunk.js.map