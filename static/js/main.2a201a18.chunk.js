(this.webpackJsonpstarwars=this.webpackJsonpstarwars||[]).push([[0],[,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){var c={"./C-3PO.png":17,"./R5-D4.webp":18,"./beru.jpeg":19,"./biggs.jpeg":20,"./darth-vader.png":21,"./default.png":22,"./leia.png":23,"./luke.png":24,"./main-bg.jpg":25,"./obi_wan_kenobi.png":26,"./owen.jpg":27,"./r2d2.png":28};function n(e){var t=r(e);return a(t)}function r(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=r,e.exports=n,n.id=16},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/C-3PO.22ccf25d.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/R5-D4.9d6d1406.webp"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/beru.974186e8.jpeg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/biggs.b9ed9120.jpeg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/darth-vader.d60b18f7.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/default.5f1cab10.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/leia.e87cf1ef.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/luke.346df4e7.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/main-bg.52d85586.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/obi_wan_kenobi.75de10a4.png"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/owen.278884fa.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/r2d2.3dcfc63d.png"},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(4),s=a.n(r),i=(a(11),a(2)),l="MOVIE",o="CHARACTERS",u="PLANETS",d="CHARACTERS",b="EPISODES",h="CHARACTERS",j="STARSHIP",p="PLANETS",f=(a(12),a(0)),m=function(e){var t=e.type,a=e.card,n=e.onClick,r=a.id,s=a.releaseDate,o=a.description,u=a.title,d=a.episode,b=Object(c.useState)(!1),h=Object(i.a)(b,2),j=h[0],p=h[1],m=function(){n(r)},O=function(){p(!j)};return t===l?Object(f.jsxs)("div",{className:"card-item",onClick:m,children:[Object(f.jsx)("time",{className:"card-year content",dateTime:s,children:s}),Object(f.jsxs)("p",{className:"card-name content",children:[u,". Episode ",d]}),Object(f.jsx)("p",{className:"card-description content",children:o})]}):Object(f.jsxs)("div",{className:"card-item card-characters",onClick:m,onMouseEnter:O,onMouseLeave:O,children:[Object(f.jsx)("time",{className:"card-year content",dateTime:s,children:s}),Object(f.jsx)("p",{className:"card-name character content",children:o}),j&&Object(f.jsx)("a",{className:"card-link content",href:".",onClick:function(e){e.preventDefault()},children:"View details"})]})},O=(a(14),function(e){var t=e.currentFilm;return t?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("section",{className:"episode",children:[Object(f.jsxs)("h1",{className:"episode-number",children:["Episode ",t.properties.episode_id]}),Object(f.jsx)("h2",{className:"episode-title",children:t.properties.title}),Object(f.jsx)("p",{className:"episode-description",children:t.properties.opening_crawl})]}),Object(f.jsxs)("section",{className:"date",children:[Object(f.jsx)("h2",{className:"date-title",children:"Release date"}),Object(f.jsx)("p",{className:"date-description",children:t.properties.release_date})]}),Object(f.jsxs)("section",{className:"info",children:[Object(f.jsxs)("p",{className:"info-title",children:["Director: ",t.properties.director]}),Object(f.jsxs)("p",{className:"info-title",children:["Producer: ",t.properties.producer]})]}),Object(f.jsx)("h2",{className:"title",children:"See details about other episodes"})]}):Object(f.jsx)("h2",{className:"episode-select",children:"Select the episode"})}),g=a(5),v=a(6),x=new(function(){function e(t){var a=t.baseUrl,c=t.headers;Object(g.a)(this,e),this.baseUrl=a,this.headers=c,this._methods={GET:"GET",POST:"POST",DELETE:"DELETE",PUT:"PUT",PATCH:"PATCH"}}return Object(v.a)(e,[{key:"_fetchHandle",value:function(e,t,a){return fetch("".concat(this.baseUrl).concat(t),{method:e,headers:this.headers,body:JSON.stringify(a)}).then((function(e){return e.ok?e.json():Promise.reject("Error: ".concat(e.status))}))}},{key:"getFilmsList",value:function(){return this._fetchHandle(this._methods.GET,"/films")}},{key:"getCharactersList",value:function(){return this._fetchHandle(this._methods.GET,"/people")}},{key:"getCharacterById",value:function(e){return this._fetchHandle(this._methods.GET,"/people/".concat(e))}},{key:"getStarshipList",value:function(){return this._fetchHandle(this._methods.GET,"/starships")}},{key:"getStarshipById",value:function(e){return this._fetchHandle(this._methods.GET,"/starships/".concat(e))}},{key:"getPlanetList",value:function(){return this._fetchHandle(this._methods.GET,"/planets")}},{key:"getPlanetById",value:function(e){return this._fetchHandle(this._methods.GET,"/planets/".concat(e))}}]),e}())({baseUrl:"https://www.swapi.tech/api/",headers:{"Content-Type":"application/json"}}),N=(a(15),function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(i.a)(r,2),o=s[0],u=s[1];Object(c.useEffect)((function(){x.getFilmsList().then((function(e){n(e.result)})).catch((function(e){console.error(e)}))}),[]);var d=function(e){var t=a.find((function(t){return t._id===e}));u(t)};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(O,{currentFilm:o}),Object(f.jsx)("article",{className:"card",children:a?a.map((function(e){return Object(f.jsx)(m,{type:l,card:{id:e._id,releaseDate:e.properties.release_date,description:e.properties.opening_crawl,title:e.properties.title,episode:e.properties.episode_id},onClick:d},e._id)})):"Loading..."})]})}),_={"Luke Skywalker":"luke.png","C-3PO":"C-3PO.png","R2-D2":"r2d2.png","Darth Vader":"darth-vader.png","Leia Organa":"leia.png","Owen Lars":"owen.jpg","Beru Whitesun lars":"beru.jpeg","R5-D4":"R5-D4.webp","Biggs Darklighter":"biggs.jpeg","Obi-Wan Kenobi":"obi_wan_kenobi.png",default:"default.png"},C=(a(29),function(e){var t=e.label,a=e.value;return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{className:"character-row",children:t}),Object(f.jsx)("td",{className:"character-row",children:a})]})}),y=function(e){var t=e.currentCardItem,c=e.type,n=function(e,t){return t===d?{height:e.height,mass:e.mass,eyeColor:e.eye_color,birthYear:e.birth_year,name:e.name}:{diameter:e.diameter,rotationPeriod:e.rotation_period,orbitalPeriod:e.orbital_period,gravity:e.gravity,population:e.population,climate:e.climate,terrain:e.terrain,surfaceWater:e.surface_water,name:e.name}}(t,c),r=function(e){var t=""===_[e]||void 0===_[e]?_.default:_[e];return a(16)("./".concat(t))}(n.name),s=[{label:"Height",value:n.height},{label:"Mass",value:n.mass},{label:"Eye color",value:n.eyeColor},{label:"Birth year",value:n.birthYear}],i=[{label:"Diameter",value:n.diameter},{label:"Rotation period",value:n.rotationPeriod},{label:"Orbital period",value:n.orbitalPeriod},{label:"Gravity",value:n.gravity},{label:"Population",value:n.population},{label:"Climate",value:n.climate},{label:"Terrain",value:n.terrain},{label:"Surface water",value:n.surfaceWater}];return c===d?Object(f.jsxs)("div",{className:"character-card",children:[Object(f.jsxs)("h2",{className:"character-card-title",children:["Info about ",n.name]}),Object(f.jsxs)("div",{className:"character-table-grid",children:[Object(f.jsx)("table",{className:"character-table",children:Object(f.jsx)("tbody",{children:s.map((function(e,t){return Object(f.jsx)(C,{label:e.label,value:e.value},"table_row_characters_".concat(t))}))})}),Object(f.jsx)("img",{className:"character-table-image",src:r.default,alt:n.name})]})]}):Object(f.jsxs)("div",{className:"character-card",children:[Object(f.jsxs)("h2",{className:"character-card-title",children:["Info about ",n.name]}),Object(f.jsx)("table",{className:"character-table",children:Object(f.jsx)("tbody",{children:i.map((function(e,t){return Object(f.jsx)(C,{label:e.label,value:e.value},"table_row_planets_".concat(t))}))})})]})},T=(a(30),function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(i.a)(r,2),l=s[0],u=s[1];Object(c.useEffect)((function(){x.getCharactersList().then((function(e){n(e.results)})).catch((function(e){console.error(e)}))}),[]);var b=function(e){x.getCharacterById(e).then((function(e){u(e.result)})).catch((function(e){console.error(e)}))};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{className:"episode-select",children:"Characters"}),l&&(null===l||void 0===l?void 0:l.properties)&&Object(f.jsx)(y,{currentCardItem:null===l||void 0===l?void 0:l.properties,type:d}),Object(f.jsx)("article",{className:"characters",children:a?a.map((function(e){return Object(f.jsx)(m,{type:o,card:{id:e.uid,description:e.name},onClick:b},e.uid)})):"Loading..."})]})}),w=(a(31),function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(i.a)(r,2),l=s[0],d=s[1];Object(c.useEffect)((function(){x.getPlanetList().then((function(e){n(e.results)})).catch((function(e){console.error(e)}))}),[]);var b=function(e){x.getPlanetById(e).then((function(e){d(e.result)})).catch((function(e){console.error(e)}))};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{className:"episode-select",children:"Planets"}),l&&(null===l||void 0===l?void 0:l.properties)&&Object(f.jsx)(y,{currentCardItem:null===l||void 0===l?void 0:l.properties,type:u}),Object(f.jsx)("article",{className:"planets",children:a?a.map((function(e){return Object(f.jsx)(m,{type:o,card:{id:e.uid,description:e.name},onClick:b},e.uid)})):"Loading..."})]})}),S=(a(32),function(e){var t=e.label,a=e.value;return Object(f.jsxs)("p",{className:"starship-paragraph",children:[Object(f.jsxs)("span",{className:"starship-description",children:[t,":"]}),Object(f.jsx)("span",{className:"starship-card",children:a})]})}),E=function(e){var t=e.card,a=[{label:"Class",value:t.starship_class},{label:"Manufacturer",value:t.manufacturer},{label:"Cost In Credits",value:t.cost_in_credits},{label:"Crew",value:t.crew},{label:"Passengers",value:t.passengers},{label:"Max Atmosphering Speed",value:t.max_atmosphering_speed},{label:"Hyperdrive Rating",value:t.hyperdrive_rating},{label:"MGLT",value:t.MGLT},{label:"Cargo Capacity",value:t.cargo_capacity},{label:"Consumables",value:t.consumables}];return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("h2",{className:"starship-card-header",children:["About ",t.name]}),Object(f.jsx)("div",{className:"starship-card-container",children:a.map((function(e){return Object(f.jsx)(S,{label:e.label,value:e.value})}))})]})},k=(a(33),function(){var e=Object(c.useState)(null),t=Object(i.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(null),s=Object(i.a)(r,2),l=s[0],u=s[1];Object(c.useEffect)((function(){x.getStarshipList().then((function(e){n(e.results)})).catch((function(e){console.error(e)}))}),[]);var d=function(e){x.getStarshipById(e).then((function(e){u(e.result)})).catch((function(e){console.error(e)}))};return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("h2",{className:"episode-select",children:"Starship"}),l&&Object(f.jsx)(E,{card:l.properties}),Object(f.jsx)("article",{className:"starship",children:a?a.map((function(e){return Object(f.jsx)(m,{type:o,card:{id:e.uid,description:e.name},onClick:d},e.uid)})):"Loading..."})]})}),P=Object(c.createContext)({currentTab:b,setCurrentTab:function(){}}),L=(a(34),function(){var e=[{name:"About episodes",tab:b},{name:"Characters",tab:h},{name:"Starship",tab:j},{name:"Planets",tab:p}],t=Object(c.useContext)(P),a=(t.currentTab,t.setCurrentTab),n=function(e){e.preventDefault(),a(e.target.id)};return Object(f.jsx)("ul",{className:"menu-nav",children:e.map((function(e,t){return Object(f.jsx)("li",{children:Object(f.jsx)("a",{className:"menu-link",href:".",onClick:n,id:e.tab,children:e.name})},"".concat(t).concat(e.tab))}))})}),D=a.p+"static/media/star-wars.5fa9c771.svg",I=(a(35),function(){return Object(f.jsx)("a",{href:".",children:Object(f.jsx)("img",{className:"menu-header-logo",src:D,alt:"Star wars logo",width:"135",height:"58"})})}),H=(a(36),function(){return Object(f.jsx)("header",{children:Object(f.jsxs)("nav",{className:"nav",children:[Object(f.jsx)(I,{}),Object(f.jsx)(L,{})]})})}),F=function(){var e=Object(c.useState)(b),t=Object(i.a)(e,2),a=t[0],n={currentTab:a,setCurrentTab:t[1]};return Object(f.jsx)(P.Provider,{value:n,children:Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(H,{}),a===b&&Object(f.jsx)(N,{}),a===h&&Object(f.jsx)(T,{}),a===j&&Object(f.jsx)(k,{}),a===p&&Object(f.jsx)(w,{})]})})},R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,38)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),r(e),s(e)}))};s.a.render(Object(f.jsx)(n.a.StrictMode,{children:Object(f.jsx)(F,{})}),document.getElementById("root")),R()}],[[37,1,2]]]);
//# sourceMappingURL=main.2a201a18.chunk.js.map