(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(2),c=a.n(r),l=a(5),m=a(3),o=a(4),i=a(7),u=a(6),p=(a(13),function(e){var t=e.allItems,a=e.addItem,n=e.selectedItems;return s.a.createElement("ul",{className:"products__list"},t.map((function(e){return s.a.createElement("li",{key:e},s.a.createElement("button",{type:"button",onClick:function(){return a(e)},className:n.includes(e)?"products__item products__item_selected":"products__item"},e))})))});p.defaultProps={selectedItems:[],allItems:[]};var d=p,I=function(e){var t=e.removeAllItems;return s.a.createElement("button",{type:"button",onClick:t,className:"removeButton"},"Remove everything")},h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],v=function(e){Object(i.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={allItems:h,selectedItems:[]},e.addItem=function(t){e.setState((function(e){return e.selectedItems.includes(t)?{selectedItems:e.selectedItems.filter((function(e){return e!==t}))}:{selectedItems:[].concat(Object(l.a)(e.selectedItems),[t])}}))},e.removeAllItems=function(){e.setState({selectedItems:[]})},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state,t=e.selectedItems,a=e.allItems,n=this.addItem,r=this.removeAllItems;return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"products"},s.a.createElement("h2",{className:"products__title"},"Add Items to shopping cart"),s.a.createElement("span",{className:"products__tip"},"Click on item to add or remove it from Shopping Cart"),s.a.createElement("div",null,s.a.createElement(d,{allItems:a,selectedItems:t,addItem:n}))),s.a.createElement("div",{className:"shoppingCart"},s.a.createElement("h2",{className:"shoppingCart__title"},"Shopping Cart"),t.length?t.map((function(e){return s.a.createElement("p",{key:e,className:"shoppingCart__text"},e)})):s.a.createElement("p",{className:"shoppingCart__info"},"Your Shopping Cart is empty"))),s.a.createElement(I,{removeAllItems:r}))}}]),a}(n.Component);c.a.render(s.a.createElement(v,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.1a6d29b9.chunk.js.map