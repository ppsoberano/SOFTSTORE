/*! This file is auto-generated */
!function(n){var s="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;if("function"==typeof define&&define.amd)define(["underscore","jquery","exports"],function(t,e,i){s.Backbone=n(s,i,t,e)});else if("undefined"!=typeof exports){var t,e=require("underscore");try{t=require("jquery")}catch(t){}n(s,exports,e,t)}else s.Backbone=n(s,{},s._,s.jQuery||s.Zepto||s.ender||s.$)}(function(t,h,b,e){function a(t,e,i,n,s){var r,o=0;if(i&&"object"==typeof i){void 0!==n&&"context"in s&&void 0===s.context&&(s.context=n);for(r=b.keys(i);o<r.length;o++)e=a(t,e,r[o],i[r[o]],s)}else if(i&&c.test(i))for(r=i.split(c);o<r.length;o++)e=t(e,r[o],n,s);else e=t(e,i,n,s);return e}function x(t,e,i){i=Math.min(Math.max(i,0),t.length);for(var n=Array(t.length-i),s=e.length,r=0;r<n.length;r++)n[r]=t[r+i];for(r=0;r<s;r++)t[r+i]=e[r];for(r=0;r<n.length;r++)t[r+s+i]=n[r]}function s(i,n,t,s){b.each(t,function(t,e){n[e]&&(i.prototype[e]=function(n,t,s,r){switch(t){case 1:return function(){return n[s](this[r])};case 2:return function(t){return n[s](this[r],t)};case 3:return function(t,e){return n[s](this[r],P(t,this),e)};case 4:return function(t,e,i){return n[s](this[r],P(t,this),e,i)};default:return function(){var t=u.call(arguments);return t.unshift(this[r]),n[s].apply(n,t)}}}(n,t,e,s))})}var o,i=t.Backbone,u=Array.prototype.slice,e=(h.VERSION="1.4.1",h.$=e,h.noConflict=function(){return t.Backbone=i,this},h.emulateHTTP=!1,h.emulateJSON=!1,h.Events={}),c=/\s+/,n=(e.on=function(t,e,i){return this._events=a(n,this._events||{},t,e,{context:i,ctx:this,listening:o}),o&&(((this._listeners||(this._listeners={}))[o.id]=o).interop=!1),this},e.listenTo=function(t,e,i){if(!t)return this;var n=t._listenId||(t._listenId=b.uniqueId("l")),s=this._listeningTo||(this._listeningTo={}),r=o=s[n],s=(r||(this._listenId||(this._listenId=b.uniqueId("l")),r=o=s[n]=new g(this,t)),l(t,e,i,this));if(o=void 0,s)throw s;return r.interop&&r.on(e,i),this},function(t,e,i,n){var s,r;return i&&(e=t[e]||(t[e]=[]),s=n.context,r=n.ctx,(n=n.listening)&&n.count++,e.push({callback:i,context:s,ctx:s||r,listening:n})),t}),l=function(t,e,i,n){try{t.on(e,i,n)}catch(t){return t}},r=(e.off=function(t,e,i){return this._events&&(this._events=a(r,this._events,t,e,{context:i,listeners:this._listeners})),this},e.stopListening=function(t,e,i){var n=this._listeningTo;if(!n)return this;for(var s=t?[t._listenId]:b.keys(n),r=0;r<s.length;r++){var o=n[s[r]];if(!o)break;o.obj.off(e,i,this),o.interop&&o.off(e,i)}return b.isEmpty(n)&&(this._listeningTo=void 0),this},function(t,e,i,n){if(t){var s,r=n.context,o=n.listeners,h=0;if(e||r||i){for(s=e?[e]:b.keys(t);h<s.length;h++){var a=t[e=s[h]];if(!a)break;for(var u=[],c=0;c<a.length;c++){var l=a[c];i&&i!==l.callback&&i!==l.callback._callback||r&&r!==l.context?u.push(l):(l=l.listening)&&l.off(e,i)}u.length?t[e]=u:delete t[e]}return t}for(s=b.keys(o);h<s.length;h++)o[s[h]].cleanup()}}),d=(e.once=function(t,e,i){var n=a(d,{},t,e,this.off.bind(this));return this.on(n,e="string"==typeof t&&null==i?void 0:e,i)},e.listenToOnce=function(t,e,i){e=a(d,{},e,i,this.stopListening.bind(this,t));return this.listenTo(t,e)},function(t,e,i,n){var s;return i&&((s=t[e]=b.once(function(){n(e,s),i.apply(this,arguments)}))._callback=i),t}),f=(e.trigger=function(t){if(!this._events)return this;for(var e=Math.max(0,arguments.length-1),i=Array(e),n=0;n<e;n++)i[n]=arguments[n+1];return a(f,this._events,t,void 0,i),this},function(t,e,i,n){var s,r;return t&&(s=t[e],r=t.all,s&&r&&(r=r.slice()),s&&p(s,n),r&&p(r,[e].concat(n))),t}),p=function(t,e){var i,n=-1,s=t.length,r=e[0],o=e[1],h=e[2];switch(e.length){case 0:for(;++n<s;)(i=t[n]).callback.call(i.ctx);return;case 1:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r);return;case 2:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,o);return;case 3:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,o,h);return;default:for(;++n<s;)(i=t[n]).callback.apply(i.ctx,e);return}},g=function(t,e){this.id=t._listenId,this.listener=t,this.obj=e,this.interop=!0,this.count=0,this._events=void 0},v=(g.prototype.on=e.on,g.prototype.off=function(t,e){t=this.interop?(this._events=a(r,this._events,t,e,{context:void 0,listeners:void 0}),!this._events):(this.count--,0===this.count);t&&this.cleanup()},g.prototype.cleanup=function(){delete this.listener._listeningTo[this.obj._listenId],this.interop||delete this.obj._listeners[this.id]},e.bind=e.on,e.unbind=e.off,b.extend(h,e),h.Model=function(t,e){var i=t||{},n=(e=e||{},this.preinitialize.apply(this,arguments),this.cid=b.uniqueId(this.cidPrefix),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(i=this.parse(i,e)||{}),b.result(this,"defaults")),i=b.defaults(b.extend({},n,i),n);this.set(i,e),this.changed={},this.initialize.apply(this,arguments)}),m=(b.extend(v.prototype,e,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",preinitialize:function(){},initialize:function(){},toJSON:function(t){return b.clone(this.attributes)},sync:function(){return h.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return b.escape(this.get(t))},has:function(t){return null!=this.get(t)},matches:function(t){return!!b.iteratee(t,this)(this.attributes)},set:function(t,e,i){if(null==t)return this;var n;if("object"==typeof t?(n=t,i=e):(n={})[t]=e,!this._validate(n,i=i||{}))return!1;var s,r,o=i.unset,t=i.silent,h=[],a=this._changing,u=(this._changing=!0,a||(this._previousAttributes=b.clone(this.attributes),this.changed={}),this.attributes),c=this.changed,l=this._previousAttributes;for(s in n)e=n[s],b.isEqual(u[s],e)||h.push(s),b.isEqual(l[s],e)?delete c[s]:c[s]=e,o?delete u[s]:u[s]=e;if(this.idAttribute in n&&(r=this.id,this.id=this.get(this.idAttribute),this.trigger("changeId",this,r,i)),!t){h.length&&(this._pending=i);for(var d=0;d<h.length;d++)this.trigger("change:"+h[d],this,u[h[d]],i)}if(a)return this;if(!t)for(;this._pending;)i=this._pending,this._pending=!1,this.trigger("change",this,i);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,b.extend({},e,{unset:!0}))},clear:function(t){var e,i={};for(e in this.attributes)i[e]=void 0;return this.set(i,b.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!b.isEmpty(this.changed):b.has(this.changed,t)},changedAttributes:function(t){if(!t)return!!this.hasChanged()&&b.clone(this.changed);var e,i,n=this._changing?this._previousAttributes:this.attributes,s={};for(i in t){var r=t[i];b.isEqual(n[i],r)||(s[i]=r,e=!0)}return!!e&&s},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return b.clone(this._previousAttributes)},fetch:function(i){i=b.extend({parse:!0},i);var n=this,s=i.success;return i.success=function(t){var e=i.parse?n.parse(t,i):t;if(!n.set(e,i))return!1;s&&s.call(i.context,n,t,i),n.trigger("sync",n,t,i)},N(this,i),this.sync("read",this,i)},save:function(t,e,i){null==t||"object"==typeof t?(n=t,i=e):(n={})[t]=e;var n,s=(i=b.extend({validate:!0,parse:!0},i)).wait;if(n&&!s){if(!this.set(n,i))return!1}else if(!this._validate(n,i))return!1;var r=this,o=i.success,h=this.attributes,t=(i.success=function(t){r.attributes=h;var e=i.parse?r.parse(t,i):t;if((e=s?b.extend({},n,e):e)&&!r.set(e,i))return!1;o&&o.call(i.context,r,t,i),r.trigger("sync",r,t,i)},N(this,i),n&&s&&(this.attributes=b.extend({},h,n)),this.isNew()?"create":i.patch?"patch":"update"),e=("patch"!=t||i.attrs||(i.attrs=n),this.sync(t,this,i));return this.attributes=h,e},destroy:function(e){e=e?b.clone(e):{};function i(){n.stopListening(),n.trigger("destroy",n,n.collection,e)}var n=this,s=e.success,r=e.wait,t=!(e.success=function(t){r&&i(),s&&s.call(e.context,n,t,e),n.isNew()||n.trigger("sync",n,t,e)});return this.isNew()?b.defer(e.success):(N(this,e),t=this.sync("delete",this,e)),r||i(),t},url:function(){var t=b.result(this,"urlRoot")||b.result(this.collection,"url")||M();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t,e){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},b.extend({},t,{validate:!0}))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=b.extend({},this.attributes,t);t=this.validationError=this.validate(t,e)||null;return!t||(this.trigger("invalid",this,t,b.extend(e,{validationError:t})),!1)}}),h.Collection=function(t,e){e=e||{},this.preinitialize.apply(this,arguments),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,b.extend({silent:!0},e))}),w={add:!0,remove:!0,merge:!0},_={add:!0,remove:!1},y=(b.extend(m.prototype,e,{model:v,preinitialize:function(){},initialize:function(){},toJSON:function(e){return this.map(function(t){return t.toJSON(e)})},sync:function(){return h.sync.apply(this,arguments)},add:function(t,e){return this.set(t,b.extend({merge:!1},e,_))},remove:function(t,e){e=b.extend({},e);var i=!b.isArray(t),t=(t=i?[t]:t.slice(),this._removeModels(t,e));return!e.silent&&t.length&&(e.changes={added:[],merged:[],removed:t},this.trigger("update",this,e)),i?t[0]:t},set:function(t,e){if(null!=t){(e=b.extend({},w,e)).parse&&!this._isModel(t)&&(t=this.parse(t,e)||[]);for(var i=!b.isArray(t),n=(t=i?[t]:t.slice(),e.at),s=((n=(n=null!=n?+n:n)>this.length?this.length:n)<0&&(n+=this.length+1),[]),r=[],o=[],h=[],a={},u=e.add,c=e.merge,l=e.remove,d=!1,f=this.comparator&&null==n&&!1!==e.sort,p=b.isString(this.comparator)?this.comparator:null,g=0;g<t.length;g++){var v,m=t[g],_=this.get(m);_?(c&&m!==_&&(v=this._isModel(m)?m.attributes:m,e.parse&&(v=_.parse(v,e)),_.set(v,e),o.push(_),f&&!d&&(d=_.hasChanged(p))),a[_.cid]||(a[_.cid]=!0,s.push(_)),t[g]=_):u&&(m=t[g]=this._prepareModel(m,e))&&(r.push(m),this._addReference(m,e),a[m.cid]=!0,s.push(m))}if(l){for(g=0;g<this.length;g++)a[(m=this.models[g]).cid]||h.push(m);h.length&&this._removeModels(h,e)}var y=!1;if(s.length&&(!f&&u&&l)?(y=this.length!==s.length||b.some(this.models,function(t,e){return t!==s[e]}),this.models.length=0,x(this.models,s,0),this.length=this.models.length):r.length&&(f&&(d=!0),x(this.models,r,null==n?this.length:n),this.length=this.models.length),d&&this.sort({silent:!0}),!e.silent){for(g=0;g<r.length;g++)null!=n&&(e.index=n+g),(m=r[g]).trigger("add",m,this,e);(d||y)&&this.trigger("sort",this,e),(r.length||h.length||o.length)&&(e.changes={added:r,removed:h,merged:o},this.trigger("update",this,e))}return i?t[0]:t}},reset:function(t,e){e=e?b.clone(e):{};for(var i=0;i<this.models.length;i++)this._removeReference(this.models[i],e);return e.previousModels=this.models,this._reset(),t=this.add(t,b.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,b.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,b.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return u.apply(this.models,arguments)},get:function(t){if(null!=t)return this._byId[t]||this._byId[this.modelId(this._isModel(t)?t.attributes:t,t.idAttribute)]||t.cid&&this._byId[t.cid]},has:function(t){return null!=this.get(t)},at:function(t){return t<0&&(t+=this.length),this.models[t]},where:function(t,e){return this[e?"find":"filter"](t)},findWhere:function(t){return this.where(t,!0)},sort:function(t){var e=this.comparator;if(!e)throw new Error("Cannot sort a set without a comparator");t=t||{};var i=e.length;return b.isFunction(e)&&(e=e.bind(this)),1===i||b.isString(e)?this.models=this.sortBy(e):this.models.sort(e),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return this.map(t+"")},fetch:function(i){var n=(i=b.extend({parse:!0},i)).success,s=this;return i.success=function(t){var e=i.reset?"reset":"set";s[e](t,i),n&&n.call(i.context,s,t,i),s.trigger("sync",s,t,i)},N(this,i),this.sync("read",this,i)},create:function(t,e){var n=(e=e?b.clone(e):{}).wait;if(!(t=this._prepareModel(t,e)))return!1;n||this.add(t,e);var s=this,r=e.success;return e.success=function(t,e,i){n&&s.add(t,i),r&&r.call(i.context,t,e,i)},t.save(null,e),t},parse:function(t,e){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t,e){return t[e||this.model.prototype.idAttribute||"id"]},values:function(){return new E(this,I)},keys:function(){return new E(this,k)},entries:function(){return new E(this,S)},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){return this._isModel(t)?(t.collection||(t.collection=this),t):(t=((e=e?b.clone(e):{}).collection=this).model.prototype?new this.model(t,e):this.model(t,e)).validationError?(this.trigger("invalid",this,t.validationError,e),!1):t},_removeModels:function(t,e){for(var i=[],n=0;n<t.length;n++){var s,r,o=this.get(t[n]);o&&(s=this.indexOf(o),this.models.splice(s,1),this.length--,delete this._byId[o.cid],null!=(r=this.modelId(o.attributes,o.idAttribute))&&delete this._byId[r],e.silent||(e.index=s,o.trigger("remove",o,this,e)),i.push(o),this._removeReference(o,e))}return i},_isModel:function(t){return t instanceof v},_addReference:function(t,e){this._byId[t.cid]=t;var i=this.modelId(t.attributes,t.idAttribute);null!=i&&(this._byId[i]=t),t.on("all",this._onModelEvent,this)},_removeReference:function(t,e){delete this._byId[t.cid];var i=this.modelId(t.attributes,t.idAttribute);null!=i&&delete this._byId[i],this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){if(e){if(("add"===t||"remove"===t)&&i!==this)return;var s,r;"destroy"===t&&this.remove(e,n),"changeId"===t&&(s=this.modelId(e.previousAttributes(),e.idAttribute),r=this.modelId(e.attributes,e.idAttribute),null!=s&&delete this._byId[s],null!=r&&(this._byId[r]=e))}this.trigger.apply(this,arguments)}}),"function"==typeof Symbol&&Symbol.iterator),E=(y&&(m.prototype[y]=m.prototype.values),function(t,e){this._collection=t,this._kind=e,this._index=0}),I=1,k=2,S=3,y=(y&&(E.prototype[y]=function(){return this}),E.prototype.next=function(){if(this._collection){var t,e;if(this._index<this._collection.length)return t=this._collection.at(this._index),this._index++,{value:this._kind===I?t:(e=this._collection.modelId(t.attributes,t.idAttribute),this._kind===k?e:[e,t]),done:!1};this._collection=void 0}return{value:void 0,done:!0}},h.View=function(t){this.cid=b.uniqueId("view"),this.preinitialize.apply(this,arguments),b.extend(this,b.pick(t,T)),this._ensureElement(),this.initialize.apply(this,arguments)}),A=/^(\S+)\s*(.*)$/,T=["model","collection","el","id","attributes","className","tagName","events"],P=(b.extend(y.prototype,e,{tagName:"div",$:function(t){return this.$el.find(t)},preinitialize:function(){},initialize:function(){},render:function(){return this},remove:function(){return this._removeElement(),this.stopListening(),this},_removeElement:function(){this.$el.remove()},setElement:function(t){return this.undelegateEvents(),this._setElement(t),this.delegateEvents(),this},_setElement:function(t){this.$el=t instanceof h.$?t:h.$(t),this.el=this.$el[0]},delegateEvents:function(t){if(!(t=t||b.result(this,"events")))return this;for(var e in this.undelegateEvents(),t){var i=t[e];(i=b.isFunction(i)?i:this[i])&&(e=e.match(A),this.delegate(e[1],e[2],i.bind(this)))}return this},delegate:function(t,e,i){return this.$el.on(t+".delegateEvents"+this.cid,e,i),this},undelegateEvents:function(){return this.$el&&this.$el.off(".delegateEvents"+this.cid),this},undelegate:function(t,e,i){return this.$el.off(t+".delegateEvents"+this.cid,e,i),this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){var t;this.el?this.setElement(b.result(this,"el")):(t=b.extend({},b.result(this,"attributes")),this.id&&(t.id=b.result(this,"id")),this.className&&(t.class=b.result(this,"className")),this.setElement(this._createElement(b.result(this,"tagName"))),this._setAttributes(t))},_setAttributes:function(t){this.$el.attr(t)}}),function(e,t){return b.isFunction(e)?e:b.isObject(e)&&!t._isModel(e)?(i=b.matches(e),function(t){return i(t.attributes)}):b.isString(e)?function(t){return t.get(e)}:e;var i}),H=(b.each([[m,{forEach:3,each:3,map:3,collect:3,reduce:0,foldl:0,inject:0,reduceRight:0,foldr:0,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:3,includes:3,contains:3,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3,groupBy:3,countBy:3,sortBy:3,indexBy:3,findIndex:3,findLastIndex:3},"models"],[v,{keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1},"attributes"]],function(t){var i=t[0],e=t[1],n=t[2];i.mixin=function(t){var e=b.reduce(b.functions(t),function(t,e){return t[e]=0,t},{});s(i,t,e,n)},s(i,b,e,n)}),h.sync=function(t,e,n){var i,s=H[t],r=(b.defaults(n=n||{},{emulateHTTP:h.emulateHTTP,emulateJSON:h.emulateJSON}),{type:s,dataType:"json"}),o=(n.url||(r.url=b.result(e,"url")||M()),null!=n.data||!e||"create"!==t&&"update"!==t&&"patch"!==t||(r.contentType="application/json",r.data=JSON.stringify(n.attrs||e.toJSON(n))),n.emulateJSON&&(r.contentType="application/x-www-form-urlencoded",r.data=r.data?{model:r.data}:{}),!n.emulateHTTP||"PUT"!==s&&"DELETE"!==s&&"PATCH"!==s||(r.type="POST",n.emulateJSON&&(r.data._method=s),i=n.beforeSend,n.beforeSend=function(t){if(t.setRequestHeader("X-HTTP-Method-Override",s),i)return i.apply(this,arguments)}),"GET"===r.type||n.emulateJSON||(r.processData=!1),n.error),t=(n.error=function(t,e,i){n.textStatus=e,n.errorThrown=i,o&&o.call(n.context,t,e,i)},n.xhr=h.ajax(b.extend(r,n)));return e.trigger("request",e,t,n),t},{create:"POST",update:"PUT",patch:"PATCH",delete:"DELETE",read:"GET"}),$=(h.ajax=function(){return h.$.ajax.apply(h.$,arguments)},h.Router=function(t){t=t||{},this.preinitialize.apply(this,arguments),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)}),C=/\((.*?)\)/g,j=/(\(\?)?:\w+/g,O=/\*\w+/g,U=/[\-{}\[\]+?.,\\\^$|#\s]/g,R=(b.extend($.prototype,e,{preinitialize:function(){},initialize:function(){},route:function(e,i,n){b.isRegExp(e)||(e=this._routeToRegExp(e)),b.isFunction(i)&&(n=i,i=""),n=n||this[i];var s=this;return h.history.route(e,function(t){t=s._extractParameters(e,t);!1!==s.execute(n,t,i)&&(s.trigger.apply(s,["route:"+i].concat(t)),s.trigger("route",i,t),h.history.trigger("route",s,i,t))}),this},execute:function(t,e,i){t&&t.apply(this,e)},navigate:function(t,e){return h.history.navigate(t,e),this},_bindRoutes:function(){if(this.routes){this.routes=b.result(this,"routes");for(var t,e=b.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(U,"\\$&").replace(C,"(?:$1)?").replace(j,function(t,e){return e?t:"([^/?]+)"}).replace(O,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var i=t.exec(e).slice(1);return b.map(i,function(t,e){return e===i.length-1?t||null:t?decodeURIComponent(t):null})}}),h.History=function(){this.handlers=[],this.checkUrl=this.checkUrl.bind(this),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)}),z=/^[#\/]|\s+$/g,q=/^\/+|\/+$/g,F=/#.*$/,M=(R.started=!1,b.extend(R.prototype,e,{interval:50,atRoot:function(){return this.location.pathname.replace(/[^\/]$/,"$&/")===this.root&&!this.getSearch()},matchRoot:function(){return this.decodeFragment(this.location.pathname).slice(0,this.root.length-1)+"/"===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){t=(t||this).location.href.match(/#(.*)$/);return t?t[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return"/"===t.charAt(0)?t.slice(1):t},getFragment:function(t){return(t=null==t?this._usePushState||!this._wantsHashChange?this.getPath():this.getHash():t).replace(z,"")},start:function(t){if(R.started)throw new Error("Backbone.history has already been started");if(R.started=!0,this.options=b.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=!1!==this.options.hashChange,this._hasHashChange="onhashchange"in window&&(void 0===document.documentMode||7<document.documentMode),this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.history||!this.history.pushState),this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=("/"+this.root+"/").replace(q,"../index.html"),this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot())return t=this.root.slice(0,-1)||"/",this.location.replace(t+"#"+this.getPath()),!0;this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0})}this._hasHashChange||!this._wantsHashChange||this._usePushState||(this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1,(t=(t=document.body).insertBefore(this.iframe,t.firstChild).contentWindow).document.open(),t.document.close(),t.location.hash="#"+this.fragment);t=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};if(this._usePushState?t("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?t("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),!this.options.silent)return this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};this._usePushState?t("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&t("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),R.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(t){var e=this.getFragment();if((e=e===this.fragment&&this.iframe?this.getHash(this.iframe.contentWindow):e)===this.fragment)return!1;this.iframe&&this.navigate(e),this.loadUrl()},loadUrl:function(e){return!!this.matchRoot()&&(e=this.fragment=this.getFragment(e),b.some(this.handlers,function(t){if(t.route.test(e))return t.callback(e),!0}))},navigate:function(t,e){if(!R.started)return!1;e&&!0!==e||(e={trigger:!!e}),t=this.getFragment(t||"");var i=this.root,i=(i=""!==t&&"?"!==t.charAt(0)?i:i.slice(0,-1)||"/")+t,n=(t=t.replace(F,""),this.decodeFragment(t));if(this.fragment!==n){if(this.fragment=n,this._usePushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,i);else{if(!this._wantsHashChange)return this.location.assign(i);this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getHash(this.iframe.contentWindow)&&(n=this.iframe.contentWindow,e.replace||(n.document.open(),n.document.close()),this._updateHash(n.location,t,e.replace))}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,i){i?(i=t.href.replace(/(javascript:|#).*$/,""),t.replace(i+"#"+e)):t.hash="#"+e}}),h.history=new R,v.extend=m.extend=$.extend=y.extend=R.extend=function(t,e){var i=this,n=t&&b.has(t,"constructor")?t.constructor:function(){return i.apply(this,arguments)};return b.extend(n,i,e),n.prototype=b.create(i.prototype,t),(n.prototype.constructor=n).__super__=i.prototype,n},function(){throw new Error('A "url" property or function must be specified')}),N=function(e,i){var n=i.error;i.error=function(t){n&&n.call(i.context,e,t,i),e.trigger("error",e,t,i)}};return h});