(this.webpackJsonpmap_points=this.webpackJsonpmap_points||[]).push([[0],{105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(14),o=n.n(c),s=n(11),i=n(6),u=n(5),l=n.n(u),d=n(15),m=n(10),p=n(110),f=n(111),g=n(43),b=n.n(g),v=function(){var e=Object(m.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://5.63.154.171/address_suggestions",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:t})}).then((function(e){return e.json()})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=(n(59),function(e){var t=e.suggestions,n=e.addPointHandler;return r.a.createElement("ul",{className:"suggestions"},t.map((function(e){return r.a.createElement("li",{onMouseDown:function(t){return n(e)},key:e.value},e.value)})))}),O=(n(60),function(){return r.a.createElement("div",{className:"loader-wrapper"},r.a.createElement("div",{className:"lds-dual-ring"}))}),j=(n(61),function(e){var t=e.addPoint,n=e.ymaps,c=Object(a.useState)(""),o=Object(i.a)(c,2),s=o[0],u=o[1],g=Object(a.useState)([]),j=Object(i.a)(g,2),h=j[0],y=j[1],k=Object(a.useState)(!1),x=Object(i.a)(k,2),w=x[0],N=x[1],P=Object(a.useState)(!1),C=Object(i.a)(P,2),S=C[0],D=C[1],I=Object(a.useState)(!1),T=Object(i.a)(I,2),B=T[0],H=T[1],J=Object(a.useState)(!1),_=Object(i.a)(J,2),R=_[0],Y=_[1],q=function(){var e=Object(m.a)(l.a.mark((function e(n){var a,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n.value,H(!0),e.next=4,v(a).then((function(e){var t=e.suggestions;return Object(d.a)({},t[0],{id:b()(),load:!1})})).catch((function(e){return H(!1)||D(!1)||Y(!0)}));case 4:(r=e.sent)&&t(r),H(!1);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(e){S?H(!0):s&&h.length?(u(""),y([]),q(e)):Y(!0)},A=function(){var e=Object(m.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:Y(!1),u(t.target.value);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){if(n){D(!0);var e=setTimeout(Object(m.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!s){e.next=13;break}return e.next=3,n.suggest(s);case 3:if(t=e.sent,y(t),0!==t.length){e.next=9;break}return e.abrupt("return",H(!1)||D(!1)||Y(!0));case 9:Y(!1);case 10:B&&(a=t[0],u(""),y([]),q(a),H(!1)),e.next=14;break;case 13:y([]);case 14:D(!1);case 15:case"end":return e.stop()}}),e)}))),200);return function(){return clearTimeout(e)}}}),[s,B,n]),r.a.createElement("div",{className:"address-input-group"},r.a.createElement("div",{className:"address-input-field"},r.a.createElement(p.a.Control,{id:"suggest",type:"text",placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0430\u0434\u0440\u0435\u0441",value:s,onChange:A,onFocus:function(){return N(!0)},onBlur:function(){return N(!1)},isInvalid:R,onKeyUp:function(e){return 13===e.keyCode&&z(h[0])}}),w&&r.a.createElement(E,{suggestions:h,addPointHandler:z}),B&&r.a.createElement(O,null)),r.a.createElement("div",{className:"add-button"},r.a.createElement(f.a,{disabled:R||B,className:"ml-2",variant:"secondary",onClick:function(){return z(h[0])}},"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"),R&&r.a.createElement("div",{className:"invalid-address-feedback"},r.a.createElement("span",null,"\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u044b\u0439",r.a.createElement("br",null),"\u0430\u0434\u0440\u0435\u0441"))))}),h=n(108),y=n(109),k=n(45),x=(n(66),function(e){var t=e.children;return r.a.createElement(h.a,{className:"my-3 p-3",as:"section"},r.a.createElement(y.a,null,r.a.createElement(k.a,null,t)))}),w=n(17),N=(n(67),function(e){var t=e.points,n=e.changePoint,a=e.center,c=e.setYmaps,o=function(){var e=Object(m.a)(l.a.mark((function e(t,a){var r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(d.a)({},a,{load:!0})),e.next=3,v(Object(s.a)(t).reverse().join(","));case 3:r=e.sent,c="success"===r.status&&r.suggestions.length?r.suggestions[0].address:a.address,n(Object(d.a)({},a,{address:c,load:!1}));case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),i=0;return r.a.createElement(w.d,{query:{load:"suggest"}},r.a.createElement("div",{className:"map-container"},r.a.createElement(w.a,{onLoad:function(e){return c(e)},width:"100%",height:"100%",state:{center:a,zoom:9},options:{minZoom:3}},r.a.createElement(w.c,{geometry:t.map((function(e){return[e.coordinates.lat,e.coordinates.lon]})),options:{balloonCloseButton:!1,strokeColor:"#000",strokeWidth:4,strokeOpacity:.5}}),t.map((function(e){return r.a.createElement(w.b,{key:e.id,onDrag:function(t){return 2===++i&&n(Object(d.a)({},e,{coordinates:{lat:t.get("target").geometry.getCoordinates()[0],lon:t.get("target").geometry.getCoordinates()[1]}}))},properties:{balloonContent:"<span>\u0410\u0434\u0440\u0435\u0441: ".concat(e.address,"</span><hr><span>\u041a\u043e\u043e\u0440\u0434\u0438\u043d\u0430\u0442\u044b: ").concat(e.coordinates.lat,", ").concat(e.coordinates.lon,"</span>")},modules:["geoObject.addon.balloon"],onDragEnd:function(t){return o(t.get("target").geometry.getCoordinates(),e)},options:{draggable:!0},geometry:[e.coordinates.lat,e.coordinates.lon]})})))))}),P=n(23),C=(n(68),function(e){var t=e.points,n=e.setPoints,a=function(e){var a=Object(s.a)(t);n(a.splice(e.target.dataset.index,1)&&a)};return r.a.createElement(P.a,{onDragEnd:function(e){if(e.destination){var a=function(e,t,n){var a=Array.from(e),r=a.splice(t,1),c=Object(i.a)(r,1)[0];return a.splice(n,0,c),a}(t,e.source.index,e.destination.index);n(a)}}},r.a.createElement(P.c,{droppableId:"droppable"},(function(e,n){return r.a.createElement("div",Object.assign({},e.droppableProps,{ref:e.innerRef,className:n.isDraggingOver?"drag-list active":"drag-list"}),t.map((function(e,t){return r.a.createElement(P.b,{key:e.id,draggableId:e.id,index:t},(function(n,c){return r.a.createElement("div",Object.assign({className:"drag-item-wrapper padding-5",style:n.draggableProps.style,ref:n.innerRef},n.draggableProps,n.dragHandleProps),r.a.createElement("div",{className:c.isDragging?"drag-item active":"drag-item"},r.a.createElement("div",{className:"dnd-icon"}),e.address,r.a.createElement("div",{className:"delete-item-button","data-index":t,onClick:a}),e.load&&r.a.createElement(O,null)))}))})),e.placeholder)})))}),S=(n(105),function(){var e=Object(a.useState)(null),t=Object(i.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)([]),u=Object(i.a)(o,2),l=u[0],d=u[1],m=Object(a.useState)([55.75,37.57]),p=Object(i.a)(m,2),f=p[0],g=p[1];return r.a.createElement(x,null,r.a.createElement(N,{setYmaps:c,center:f,points:l,changePoint:function(e){var t=l.findIndex((function(t){return t.id===e.id}));l[t]=e,d(Object(s.a)(l))}}),r.a.createElement("hr",null),r.a.createElement(j,{ymaps:n,addPoint:function(e){return g([e.coordinates.lat,e.coordinates.lon])||d([].concat(Object(s.a)(l),[e]))}}),r.a.createElement("hr",null),r.a.createElement(C,{setPoints:d,points:l}))});n(106);o.a.render(r.a.createElement(S,null),document.getElementById("root"))},51:function(e,t,n){e.exports=n(107)},59:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){}},[[51,1,2]]]);
//# sourceMappingURL=main.b7b3752a.chunk.js.map