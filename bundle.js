!function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=0)}([function(e,t,s){"use strict";var i;s.r(t),function(e){e.regular="regular",e.unexpected="unexpected",e.first="first",e.estate="estate",e.business="business"}(i||(i={}));class n{constructor(e,t){this.parentNode=e,this.type=t.type,this.index=t.index,this.month=t.month,t.title&&(this.title=t.title),this.render()}render(){this.rootNode=document.createElement("div"),this.rootNode.className="canvas-day",this.title&&(this.rootNode.innerHTML=this.title),this.rootNode.classList.add(this.getClassName()),this.parentNode.appendChild(this.rootNode)}getClassName(){return`canvas-day--${this.type}`}setActive(){this.rootNode.classList.add("canvas-day--active")}clearActive(){this.rootNode.classList.remove("canvas-day--active")}getIndexInMonth(){return this.index}getIndexInYear(){return 6*this.month.index+this.index}getMonth(){return this.month}isUnexpected(){return this.type===i.unexpected}isRegular(){return this.type===i.regular}isBusness(){return this.type===i.business}isEstate(){return this.type===i.estate}}class o{constructor(e,t){this.days=[],this.parentNode=e,this.shortName=t.shortName,this.index=t.index,this.renderRoot(),this.renderDays()}renderRoot(){this.rootNode=document.createElement("div"),this.rootNode.className="canvas-month",this.parentNode.appendChild(this.rootNode)}renderDays(){this.days.push(new n(this.rootNode,{index:0,month:this,title:this.shortName,type:i.first})),this.days.push(new n(this.rootNode,{index:1,month:this,type:i.business})),this.days.push(new n(this.rootNode,{index:2,month:this,type:i.unexpected})),this.days.push(new n(this.rootNode,{index:3,month:this,type:i.estate})),this.days.push(new n(this.rootNode,{index:4,month:this,type:i.business})),this.days.push(new n(this.rootNode,{index:5,month:this,type:i.unexpected})),this.days.push(new n(this.rootNode,{index:6,month:this,type:i.estate}))}getIndex(){return this.index}}const a=[{index:0,shortName:"Jan",fullName:"Jan"},{index:1,shortName:"Feb",fullName:"February"},{index:2,shortName:"Mar",fullName:"March"},{index:3,shortName:"Apr",fullName:"April"},{index:4,shortName:"May",fullName:"May"},{index:5,shortName:"Jun",fullName:"May"},{index:6,shortName:"Jul",fullName:"July"},{index:7,shortName:"Aug",fullName:"August"},{index:8,shortName:"Sep",fullName:"September"},{index:9,shortName:"Oct",fullName:"October"},{index:10,shortName:"Nov",fullName:"November"},{index:11,shortName:"Dec",fullName:"December"}];const r=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),d=e=>e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,"."),h=(e,t)=>{return e*Math.round(t/100)},l=(e,t)=>Math.round(e/t)*t;class c{constructor(e,t){this.renderSum=!1,this.rows=[],this.parentNode=e,this.title=t.title,this.className=t.className,this.rows=t.rows,t.renderSum&&(this.renderSum=t.renderSum),this.render()}render(){this.rootNode=document.createElement("div"),this.rootNode.className=`table ${this.className}`,this.renderHeader(),this.renderRows(),this.parentNode.appendChild(this.rootNode)}renderHeader(){this.headerNode=document.createElement("div"),this.headerNode.className="table-header",this.renderSum?this.headerNode.innerHTML=`${this.title} ${d(this.getSumm())}`:this.headerNode.innerHTML=`${this.title}`,this.rootNode.appendChild(this.headerNode)}updateSumm(){this.renderSum?this.headerNode.innerHTML=`${this.title} ${d(this.getSumm())}`:this.headerNode.innerHTML=`${this.title}`}renderRows(){this.rowsNode&&this.rowsNode.remove(),this.rowsNode=document.createElement("div"),this.rowsNode.className="table-rows",this.rows.forEach(e=>{const t=document.createElement("div");t.className="table-row";const s=document.createElement("div");s.className="table-row-title",s.innerText=e.title,t.appendChild(s);const i=document.createElement("div");i.className="table-row-value",Number.isInteger(e.value)?i.innerText=`${d(e.value)}`:i.innerText=e.value.toString(),t.appendChild(i),this.rowsNode.appendChild(t)}),this.rootNode.appendChild(this.rowsNode),this.updateSumm()}getSumm(){let e=0;return this.rows.forEach(t=>{e+=parseInt(t.value.toString(),10)}),e}updateRowValue(e,t){const s=this.rows.find(t=>t.id===e);s&&(s.value=t),this.renderRows()}update(e){this.rows=e,this.renderRows()}}var u;!function(e){e.warning="warning",e.success="success",e.regular="regular"}(u||(u={}));class g{constructor(e){this.description="",this.title=e.title,this.value=e.value,e.description&&(this.description=e.description)}getTitle(){return this.title}getDescription(){return this.description}getValue(){return this.value}}const m=[{title:"Украли ноутбук",value:4e4},{title:"Разбил телефон",value:5e3},{title:"Пригласили на ДР",value:2e3},{title:"Ремонт в квартире",value:1e4},{title:"Ремонт машины",value:7e3},{title:"Пригласили на сваьбу",value:5e3},{title:"Поход к стоматологу",value:4e3},{title:"Штраф за парковку",value:1e3},{title:"Поход к терапевту",value:2e3},{title:"Новый телефон",value:25e3},{title:"Покупка новой гитары",value:12e3},{title:"Поезка на море",value:2e4}];class p{constructor(e){this.id=e.id,this.level=e.level,this.title=e.title,this.description=e.description,this.image=e.image,this.cost=e.cost,this.earning=e.earning,this.paybackPeriod=e.paybackPeriod}getTitle(){return this.title}getDescription(){return this.description}getCost(){return this.cost}getEarning(){return this.earning}getId(){return this.id}getLevel(){return this.level}getPaybackPeriod(){return this.paybackPeriod}getImage(){return this.image}}class v{constructor(e){this.description="",this.title=e.title,this.value=e.value,e.description&&(this.description=e.description)}getTitle(){return this.title}getDescription(){return this.description}getValue(){return this.value}}class y{constructor(e){this.title=e.title,this.cost=e.cost,this.earning=e.earning,this.id=e.id,this.img=e.img,this.description=e.description}getTitle(){return this.title}getDescription(){return`<b>${this.title}</b><br/>${this.description}<br/><br/>Цена ${d(this.cost)}<br/>Приносит в месяц ${d(this.earning)}<br/><br/><img src="src/images/${this.img}"/>`}getCost(){return this.cost}getEarning(){return this.earning}getId(){return this.id}}let N=[{id:"flat",title:"Однушка в Купчино",description:"Однушка для сдачи.",img:"flat.jpg",cost:1e6,earning:35e3},{id:"flata",title:"Комната в коммуналке",description:"Комната в коммуналке для сдачи.",img:"flat2.jpg",cost:7e5,earning:25e3},{id:"flatb",title:"Комната в квартире",description:"Комната в квартире для сдачи.",img:"flat3.jpg",cost:12e5,earning:3e4},{id:"flatc",title:"Квартира",description:"Квартира для сдачи посуточно.",img:"flat4.jpg",cost:2e6,earning:5e4},{id:"flatd",title:"Хостел",description:"Хостел для сдачи туристам. Находится в центре города.",img:"flat5.jpg",cost:25e5,earning:75e3}];class b{static getRandomEstate(){if(0===N.length)return null;const e=r(0,N.length-1);return new y(N[e])}static remove(e){N=N.filter(t=>t.id!==e)}}const w=e=>`<div class="modal-title">${e.getTitle()}</div>\n  <div>Стоимость ${d(e.getCost())}</div>\n  <div>Доход в месяц ${d(e.getEarning())}</div>\n  <div>Время окупаемости ${f(e.getPaybackPeriod())}</div>\n  <br/>\n  <div>${e.getDescription()}</div>\n  <br/>\n  <div><img src="src/images/business/${e.getImage()}"/></div>`,f=e=>{const t=(e,t)=>1===e?t.one:e>=2&&e<=4?t.twoFour:t.fiveMore,s={one:"месяц",twoFour:"месяца",fiveMore:"месяцев"},i=e%12,n=Math.floor(e/12),o=[];return 0===e?`0 ${s.fiveMore}`:(n&&o.push(n+" "+t(n,{one:"год",twoFour:"года",fiveMore:"лет"})),i&&o.push(i+" "+t(i,s)),o.join(" и "))},C=new class{constructor(e){this.registry=[],this.excluded=[],this.seed(e)}seed(e){this.registry=e.map(e=>new p({id:e.id,level:e.level,title:e.title,description:e.description,image:e.image,cost:e.cost,earning:l(e.cost/e.paybackPeriod,100),paybackPeriod:e.paybackPeriod}))}getRandomByLevel(e){const t=this.registry.filter(t=>t.getLevel()===e).filter(e=>-1===this.excluded.indexOf(e.getId()));return t[r(0,t.length-1)]}getRandomByLevels(e){const t=this.registry.filter(t=>-1!==e.indexOf(t.getLevel())).filter(e=>-1===this.excluded.indexOf(e.getId()));return t[r(0,t.length-1)]}remove(e){this.excluded.push(e)}}([{level:1,id:"vk-public",title:'Паблик в VK "У меня лапки"',description:"Паблик со смешными картинками котиков. Аудитория 45к подписчиков. Везде, где есть аудитория, туда обязательно придут рекламодатели.",image:"vk-public.jpg",cost:"50000",paybackPeriod:"10"},{level:1,id:"hand-made",title:"Интернет магазин Hand Made подарков",description:"В интернет магазине размешают свои товары люди, увлекающиеся домашними поделками. С каждой покупки берется процент от стоимости товара.",image:"hand-made.jpg",cost:"75000",paybackPeriod:"12"},{level:1,id:"vending-coffee",title:"Кофейный автомат",description:"Автомат с кофе стоит в холле гостинцы. Предлагает 3-в-1, капучино, латте.",image:"vending-coffee.jpg",cost:"80000",paybackPeriod:"16"},{level:1,id:"vending-snack",title:"Автомат со снеками",description:"Автомат стоит на станции метро. В нем можно купить шоколад, воду, газировку.",image:"vending-snack.jpg",cost:"90000",paybackPeriod:"15"},{level:1,id:"umbrella-store",title:"Точка по продаже зонтиков",description:"Точка находится на первом этаже торгового центра. В Санкт-Петербурге. Бешеная популярность круглый год.",image:"umbrella-store.jpg",cost:"100000",paybackPeriod:"15"},{level:2,id:"nail-service",title:"Студия маникюра",description:"Законченный стильный женский образ включает в себя идеальные сочетания деталей и аксессуаров, таких как сумочка, украшения, телефон, записанная книжка и, конечно, - маникюр. Студия предлагает все виды маникюра.",image:"nail-service.jpg",cost:"250000",paybackPeriod:"16"},{level:2,id:"tour-agency",title:"Турагентство в Центральном районе",description:"В Центральном районе продается действующее туристическое агентство. Помимо поиска и подбора наиболее выгодных туров в любую точку мира, фирма предоставляет услуги по оформлению всех документов, включая визы.",image:"tour-agency.jpg",cost:"230000",paybackPeriod:"14"},{level:2,id:"intim-store",title:"Интернет-магазин интим-товаров",description:"Продается розничный интернет-магазин интим-товаров. Бизнес работает по системе дропшиппинга, при которой товар отправляется напрямую покупателю со склада поставщика. Главное преимущество данного предложения — отсутствие надобности в аренде офиса и склада. Каталог сайта состоит из 6 основных разделов, которые включают в себя товары для женщин и мужчин, пар, а также мебель, дополнительный реквизит, одежду, косметику и многое другое.",image:"intim-store.jpg",cost:"270000",paybackPeriod:"21"},{level:2,id:"wall",title:"Технологичный бизнес - установка заборов",description:"Основная деятельность компании — продажа и монтаж заборов и ограждений любой сложности клиентам B2B и B2C направлений. Офис и шоурум находятся в крупном строительном ТЦ на юго-востоке города. Офис занимает 25 м2 и арендуется по ставке всего 23 т.р./мес.",image:"wall.jpg",cost:"300000",paybackPeriod:"18"},{level:2,id:"coffee-rank",title:"Стойка кофейни на первом этаже БЦ",description:"Продаются арендные права на идеальное место для организации малого бизнеса — кофейни формата “coffee to go”. Разместить кофейню можно на первом этаже действующего бизнес-центра, за установленной торговой стойкой бариста.",image:"coffee-rank.jpg",cost:"210000",paybackPeriod:"18"},{level:3,id:"beauty-salon",title:"Салон красоты с соляной пещерой",description:"Студия красоты расположена на 1 этаже коммерческого помещения в жилом многоэтажном доме. Неподалёку находятся школы, детские сады, фитнес-центры и многоквартирные дома, населенные в основном молодыми платёжеспособными семьями. Попасть в салон можно через отдельный вход со двора, который выделяется стильной согласованной вывеской.",image:"beauty-salon.jpg",cost:"580000",paybackPeriod:"22"},{level:3,id:"bakery",title:"Пекарня",description:"На продажу выставлена перспективная пекарня с уютным помещением. Заведение имеет широкую базу покупателей, которая сформировалась за счет качественного сервиса, вкусной выпечки и уютных стен пекарни. Рабочий коллектив из 3 человек готов остаться для дальнейшего сотрудничества.",image:"bakery.jpg",cost:"990000",paybackPeriod:"21"},{level:3,id:"farm-store",title:"Магазин фермерской продукции",description:"В пешей доступности от станции метро продается магазин фермерской продукции – мяса, молока, продуктов правильного питания. За счет расположения в крупном ЖК, по соседству с новостройками торговая точка обеспечена стабильным притоком постоянных клиентов. ",image:"farm-store.jpg",cost:"800000",paybackPeriod:"26"},{level:3,id:"carpenter",title:"Столярная мастерская с оборудованием",description:"Продаётся готовое к работе столярное производство с высокой прибылью. Мастерская функционирует уже более 5 лет и за это время показало стабильную работу с высокой доходностью. В продажу бизнеса входит всё оборудование. Все станки с малым процентом износа.",image:"carpenter.jpg",cost:"500000",paybackPeriod:"15"},{level:3,id:"apple-store",title:"Сервисный центр ремонта техники Apple",description:"Точка располагается в пешей доступности от станции метро. По соседству размещается множество жилых массивов, магазинов, которые обеспечивают сервисный центр стабильным потоком клиентов.",image:"apple-store.jpg",cost:"650000",paybackPeriod:"14"}]),x=new class{constructor(){this.days=[],this.months=[],this.activeDayIndex=0,this.northRegion=document.querySelector("#regionNorth"),this.regionOst=document.querySelector("#regionOst"),this.regionSouth=document.querySelector("#regionSouth"),this.regionWest=document.querySelector("#regionWest"),this.createMonths()}createMonths(){this.months.push(new o(this.northRegion,a[11])),this.months.push(new o(this.northRegion,a[0])),this.months.push(new o(this.northRegion,a[1])),this.months.push(new o(this.northRegion,a[2])),this.months.push(new o(this.regionOst,a[3])),this.months.push(new o(this.regionOst,a[4])),this.months.push(new o(this.regionSouth,a[5])),this.months.push(new o(this.regionSouth,a[6])),this.months.push(new o(this.regionSouth,a[7])),this.months.push(new o(this.regionSouth,a[8])),this.months.push(new o(this.regionWest,a[9])),this.months.push(new o(this.regionWest,a[10])),this.months.forEach(e=>{this.days.push(...e.days)})}setActiveDay(e){this.activeDayIndex=e,this.getDayByIndex(this.activeDayIndex).setActive()}clearActiveDay(e){this.getDayByIndex(e).clearActive()}getDayByIndex(e){return this.days[e]}getActiveDay(){return this.getDayByIndex(this.activeDayIndex)}getActiveMonth(){return this.getActiveDay().getMonth()}moveActiveDay(e,t){if(this.activeDayIndex===e)return;const s=setInterval(()=>{this.clearActiveDay(this.activeDayIndex),this.activeDayIndex+=1,this.activeDayIndex>=this.days.length&&(this.activeDayIndex=0),this.setActiveDay(this.activeDayIndex),0==(e-=1)&&(clearInterval(s),t())},100)}stop(){this.clearActiveDay(this.activeDayIndex)}};x.setActiveDay(7);const E=document.querySelector("#go");E&&E.addEventListener("click",()=>{D()}),document.addEventListener("keyup",e=>{32===e.keyCode&&D()});const I=document.querySelector("#root"),M=new class{constructor(e){this.parentNode=e}renderEarnings(e){const t=[];Object.entries(e).forEach(([e,s])=>{t.push({id:e,title:s.title,value:s.value})});const s={className:"table--earning",title:"Доходы",renderSum:!0,rows:t};this.tableEarning?this.tableEarning.update(t):this.tableEarning=new c(this.parentNode,s)}renderCosts(e){const t=[];Object.entries(e).forEach(([e,s])=>{t.push({id:e,title:s.title,value:s.value})});const s={className:"table--costs",title:"Расходы",renderSum:!0,rows:t};this.tableCosts?this.tableCosts.update(t):this.tableCosts=new c(this.parentNode,s)}renderCommon(e,t,s,i){const n={className:"table--common",title:"Сводка",rows:[{id:"cash",title:"Наличность",value:e},{id:"cashFlow",title:"Денежный поток",value:t},{id:"monthsInGame",title:"В игре",value:s},{id:"goal",title:"Цель накопить",value:i}]};this.tableCommon=new c(this.parentNode,n)}getTableCommon(){return this.tableCommon}}(I),k=new class{constructor(e){this.parentNode=e,this.render()}render(){this.rootNode=document.createElement("div"),this.rootNode.className="modal",this.renderHeader(),this.renderBody(),this.renderActions(),this.parentNode.appendChild(this.rootNode)}renderHeader(){this.headerNode=document.createElement("div"),this.headerNode.className="modal-header",this.rootNode.appendChild(this.headerNode)}renderBody(){this.bodyNode=document.createElement("div"),this.bodyNode.className="modal-body",this.rootNode.appendChild(this.bodyNode)}renderActions(){this.actionsNode=document.createElement("div"),this.actionsNode.className="modal-actions",this.rootNode.appendChild(this.actionsNode)}clear(){this.headerNode.innerHTML="",this.bodyNode.innerHTML="",this.actionsNode.innerHTML="",this.rootNode.classList.remove(u.warning),this.rootNode.classList.remove(u.success),this.rootNode.classList.remove(u.regular)}warn({title:e,message:t}){this.show({title:e,message:t,modifier:u.warning})}success({title:e,message:t}){this.show({title:e,message:t,modifier:u.success})}show({title:e,message:t,actions:s,modifier:i}){this.clear(),s&&s.length&&s.forEach(e=>{const t=document.createElement("button");t.className="modal-action",t.innerHTML=e.title,this.actionsNode.appendChild(t),t.addEventListener("click",e.callback)}),this.headerNode.innerHTML=e,this.bodyNode.innerHTML=t,i&&this.rootNode.classList.add(i)}}(I);k.show({title:"Начните игру",message:"Жмите кнопку Go и Go!"});const D=()=>{k.show({title:"Ходим дальше...",message:""});const e=r(1,6);x.moveActiveDay(e,()=>{j=x.getActiveMonth().getIndex(),T(),R(),P=j,S.isGoalAchieved()&&(k.show({title:"Победа!!!",message:"Цель по накоплению денег достигнута! Поздравляем вас."}),x.stop())})};let P=0,j=0;const S=new class{constructor({monthsInGame:e,cash:t,goal:s}){this.earnings={},this.costs={},this.monthsInGame=e,this.cash=t,this.goal=s}addMonthInGame(e){this.monthsInGame+=e}incomingPay(e){this.cash+=e}outgoingPay(e){this.cash-=e}getCash(){return this.cash}getCashFlow(){let e=0;Object.entries(this.earnings).forEach(([t,s])=>{e+=s.value});let t=0;return Object.entries(this.costs).forEach(([e,s])=>{t+=s.value}),e-t}getEarningValue(){let e=0;return Object.entries(this.earnings).forEach(([t,s])=>{e+=s.value}),e}getGoal(){return this.goal}getMonthsInGame(){return this.monthsInGame}isGoalAchieved(){return this.goal<=this.cash}addEarning(e,t){this.earnings[e]=t}getEarnings(){return this.earnings}setCost(e,t){this.costs[e]=t}getCosts(){return this.costs}hasEnoughCash(e){return this.cash>=e}}({monthsInGame:0,cash:2e4,goal:5e6});S.addEarning("salary",new v({title:"Работа",value:35e3})),S.setCost("food",new g({title:"Корзина 30% от дохода",value:h(30,S.getEarningValue())})),S.setCost("car",new g({title:"Машина",value:3e3})),S.setCost("rent",new g({title:"Аренда квартиры",value:7e3})),S.setCost("gym",new g({title:"Спорт зал",value:2e3})),M.renderCommon(S.getCash(),S.getCashFlow(),f(S.getMonthsInGame()),S.getGoal()),M.renderEarnings(S.getEarnings()),M.renderCosts(S.getCosts());const T=()=>{j!==P&&(S.incomingPay(S.getCashFlow()),S.addMonthInGame(1)),M.getTableCommon().updateRowValue("monthsInGame",f(S.getMonthsInGame())),M.getTableCommon().updateRowValue("cash",S.getCash()),M.getTableCommon().updateRowValue("cashFlow",S.getCashFlow())},R=()=>{const e=x.getActiveDay();if(e.isUnexpected()){const e=class{static getRandomCost(){const e=r(0,m.length-1);return new g(m[e])}}.getRandomCost();k.warn({title:"Незапланированные расходы",message:`${e.getTitle()} уносит <b>${d(e.getValue())}</b><br/><br/><img src="src/images/pain.jpg"/>`}),S.outgoingPay(e.getValue()),M.getTableCommon().updateRowValue("cash",S.getCash()),S.getCash()<0&&(k.warn({title:"Это фиаско, братан!",message:"Вы банкрот, нет наличности, игра проиграна."}),x.stop())}if(e.isBusness()){const e=C.getRandomByLevels([1,2,3]);if(!e)return void k.show({title:"Покупка бизнеса",message:"Вы скупили все бизнесы на районе."});if(!S.hasEnoughCash(e.getCost()))return void k.show({title:"Недостаточно денег для покупки бизнеса",message:w(e)});k.show({title:"Хотите купить бизнес?",message:w(e),actions:[{title:"Купить!",callback:()=>{S.hasEnoughCash(e.getCost())&&(k.success({title:"Вы купили новый бизнес!",message:w(e)}),S.addEarning(e.getId(),new v({title:e.getTitle(),value:e.getEarning()})),S.outgoingPay(e.getCost()),S.setCost("food",new g({title:"Корзина 30% от дохода",value:h(30,S.getEarningValue())})),M.renderCosts(S.getCosts()),M.renderEarnings(S.getEarnings()),M.getTableCommon().updateRowValue("cashFlow",S.getCashFlow()),M.getTableCommon().updateRowValue("cash",S.getCash()),C.remove(e.getId()))}}]})}if(e.isEstate()){const e=b.getRandomEstate();if(!e)return void k.show({title:"Нет недвижимости для покупки",message:"Вы скупили всю недвижимость на районе."});if(!S.hasEnoughCash(e.getCost()))return void k.show({title:"Недостаточно денег на покупку",message:e.getDescription()});k.show({title:"Хотите купить недвижимость?",message:e.getDescription(),actions:[{title:"Купить!",callback:()=>{S.hasEnoughCash(e.getCost())&&(k.success({title:"Вы купили новую недвижимость!",message:`${e.getTitle()} приносит +${d(e.getEarning())} в месяц.<br/><br/><img src="src/images/success.jpg"/>`}),S.addEarning(e.getId(),new v({title:e.getTitle(),value:e.getEarning()})),S.outgoingPay(e.getCost()),S.setCost("food",new g({title:"Корзина 30% от дохода",value:h(30,S.getEarningValue())})),M.renderCosts(S.getCosts()),M.renderEarnings(S.getEarnings()),M.getTableCommon().updateRowValue("cashFlow",S.getCashFlow()),M.getTableCommon().updateRowValue("cash",S.getCash()),b.remove(e.getId()))}}]})}e.isRegular()&&k.show({title:"Новый день",message:"Вы попали на пустое поле."})}}]);
