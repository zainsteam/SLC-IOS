"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4851],{4851:(w,l,r)=>{r.r(l),r.d(l,{HomePageModule:()=>x});var c=r(6895),n=r(8058),g=r(433),a=r(2598),d=r(655),e=r(8256),u=r(2728);function m(t,i){1&t&&(e.TgZ(0,"div",7)(1,"p"),e._uU(2,"No Device Stored "),e._UZ(3,"br"),e._uU(4," Click to + Add Device"),e.qZA()())}const p=function(t,i,o){return["/light-controller/",t,i,o]};function h(t,i){if(1&t&&(e.TgZ(0,"ion-card",8)(1,"a",9),e._UZ(2,"img",10),e.TgZ(3,"ion-card-header")(4,"ion-card-title",11),e._uU(5),e.qZA(),e.TgZ(6,"ion-card-subtitle"),e._uU(7,"Connected"),e.qZA()(),e._UZ(8,"ion-card-content"),e.qZA()()),2&t){const o=i.$implicit;e.xp6(1),e.Q6J("routerLink",e.kEZ(3,p,o.id,o.name,o.mac)),e.xp6(4),e.AsE("",o.name," ",o.mac,"")}}const f=function(){return["/ble-list"]},v=[{path:"",component:(()=>{class t{constructor(o,s,y,P){this.router=o,this.toastCtrl=s,this.ngZone=y,this.database=P,this.categoryName="",this.categories=[],this.editMode=!1,this.editId=0}ngOnInit(){this.database.createDatabase().then(()=>{this.getCategories()})}ionViewDidEnter(){this.getCategories()}getCategories(){return(0,d.mG)(this,void 0,void 0,function*(){yield this.database.getCategories().then(o=>{if(this.categories=[],o.rows.length>0)for(var s=0;s<o.rows.length;s++)this.categories.push(o.rows.item(s))}),console.log(this.categories)})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(a.F0),e.Y36(n.yF),e.Y36(e.R0b),e.Y36(u.V))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:11,vars:6,consts:[[3,"translucent"],[3,"fullscreen"],["style","text-align:center;border:2px solid lightgrey; margin: 10px; height: 450px;display: flex;justify-content: center;align-items: center;",4,"ngIf"],["id","lamp_list",1,"scrolling-wrapper"],["style","overflow: hidden;width:92%;",4,"ngFor","ngForOf"],["shape","round","expand","block",3,"routerLink"],["size","large","slot","start","name","add-circle-outline"],[2,"text-align","center","border","2px solid lightgrey","margin","10px","height","450px","display","flex","justify-content","center","align-items","center"],[2,"overflow","hidden","width","92%"],[3,"routerLink"],["alt","Silhouette of mountains","src","/assets/img/App_Icon_512x512.png"],[2,"overflow","hidden"]],template:function(o,s){1&o&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-title"),e._uU(3,"Welcome!"),e.qZA()()(),e.TgZ(4,"ion-content",1),e.YNc(5,m,5,0,"div",2),e.TgZ(6,"div",3),e.YNc(7,h,9,7,"ion-card",4),e.qZA(),e.TgZ(8,"ion-button",5),e._UZ(9,"ion-icon",6),e._uU(10," Add New Device "),e.qZA()()),2&o&&(e.Q6J("translucent",!0),e.xp6(4),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("ngIf",""==s.categories),e.xp6(2),e.Q6J("ngForOf",s.categories),e.xp6(1),e.Q6J("routerLink",e.DdM(5,f)))},dependencies:[c.sg,c.O5,n.YG,n.PM,n.FN,n.Zi,n.tO,n.Dq,n.W2,n.Gu,n.gu,n.wd,n.sr,n.YI,n.Fo,a.rH],styles:["ion-card-header.ios[_ngcontent-%COMP%]{display:flex;flex-flow:column-reverse}.scrolling-wrapper[_ngcontent-%COMP%]{overflow-x:scroll;overflow-y:hidden;white-space:nowrap}.scrolling-wrapper[_ngcontent-%COMP%]   ion-card[_ngcontent-%COMP%]{display:inline-block}a[_ngcontent-%COMP%]{text-decoration:unset!important}"]}),t})()}];let Z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.Bz.forChild(v),a.Bz]}),t})(),x=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,g.u5,n.Pc,Z]}),t})()}}]);