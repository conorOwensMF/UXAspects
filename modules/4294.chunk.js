(self.webpackChunk_ux_aspects_ux_aspects_docs=self.webpackChunk_ux_aspects_ux_aspects_docs||[]).push([[4294],{74294:function(e,n,t){"use strict";t.r(n),t.d(n,{TeamPageModule:function(){return x}});var a=t(56475),r=t(94121),i=t(3955),o=t(26966),m=t(25039),c=t(29872),l=t(68509);function p(e,n){if(1&e&&(c["\u0275\u0275elementStart"](0,"a",13),c["\u0275\u0275text"](1,"\n                                "),c["\u0275\u0275element"](2,"ux-icon",14),c["\u0275\u0275text"](3,"\n                            "),c["\u0275\u0275elementEnd"]()),2&e){var t=n.$implicit;c["\u0275\u0275property"]("href",t.url,c["\u0275\u0275sanitizeUrl"]),c["\u0275\u0275advance"](2),c["\u0275\u0275property"]("name",t.icon)}}function d(e,n){if(1&e&&(c["\u0275\u0275elementStart"](0,"ux-flippable-card",6),c["\u0275\u0275text"](1,"\n\n                    "),c["\u0275\u0275elementStart"](2,"ux-flippable-card-front"),c["\u0275\u0275text"](3,"\n                        "),c["\u0275\u0275elementStart"](4,"div",7),c["\u0275\u0275text"](5,"\n                            "),c["\u0275\u0275element"](6,"img",8),c["\u0275\u0275text"](7,"\n                            "),c["\u0275\u0275elementStart"](8,"h3",9),c["\u0275\u0275text"](9),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](10,"\n                            "),c["\u0275\u0275elementStart"](11,"p",10),c["\u0275\u0275text"](12),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](13,"\n                        "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](14,"\n                    "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](15,"\n\n                    "),c["\u0275\u0275elementStart"](16,"ux-flippable-card-back"),c["\u0275\u0275text"](17,"\n                        "),c["\u0275\u0275elementStart"](18,"div",11),c["\u0275\u0275text"](19,"\n                            "),c["\u0275\u0275template"](20,p,4,2,"a",12),c["\u0275\u0275text"](21,"\n                        "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](22,"\n                    "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](23,"\n\n                "),c["\u0275\u0275elementEnd"]()),2&e){var t=n.$implicit;c["\u0275\u0275advance"](6),c["\u0275\u0275property"]("src",t.avatar,c["\u0275\u0275sanitizeUrl"]),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](t.name),c["\u0275\u0275advance"](3),c["\u0275\u0275textInterpolate"](t.email),c["\u0275\u0275advance"](8),c["\u0275\u0275property"]("ngForOf",t.social)}}var s=[{path:"",component:function(){function e(e){this._appConfig=e,this.data=this._appConfig.getConfigurationData("team-page")}return e.\u0275fac=function(n){return new(n||e)(c["\u0275\u0275directiveInject"](m.l))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["uxd-team"]],decls:15,vars:1,consts:[["header","Team","description","Meet the UX Aspects team"],[1,"container"],[1,"row"],[1,"col-md-12"],[1,"team-member-container"],["class","m-md",4,"ngFor","ngForOf"],[1,"m-md"],[1,"team-card-content"],[1,"team-member-avatar",3,"src"],[1,"team-member-name"],[1,"team-member-email"],[1,"team-member-social-content"],["class","team-member-social-link",3,"href",4,"ngFor","ngForOf"],[1,"team-member-social-link",3,"href"],[3,"name"]],template:function(e,n){1&e&&(c["\u0275\u0275element"](0,"uxd-page-header",0),c["\u0275\u0275text"](1,"\n\n"),c["\u0275\u0275elementStart"](2,"div",1),c["\u0275\u0275text"](3,"\n    "),c["\u0275\u0275elementStart"](4,"div",2),c["\u0275\u0275text"](5,"\n        "),c["\u0275\u0275elementStart"](6,"div",3),c["\u0275\u0275text"](7,"\n\n            "),c["\u0275\u0275elementStart"](8,"div",4),c["\u0275\u0275text"](9,"\n\n                "),c["\u0275\u0275template"](10,d,24,4,"ux-flippable-card",5),c["\u0275\u0275text"](11,"\n\n            "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](12,"\n\n        "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](13,"\n    "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275text"](14,"\n"),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](10),c["\u0275\u0275property"]("ngForOf",n.data.team))},directives:[l.q,a.NgForOf,i.FlippableCardComponent,i.FlippableCardFrontDirective,i.FlippableCardBackDirective,i.DefaultFocusIndicatorDirective,i.IconComponent],styles:[".team-member-container[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 20px;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-content: flex-start;\n  align-items: flex-start;\n  justify-content: flex-start;\n}\n.team-card-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 15px 10px;\n}\n.team-member-avatar[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 100px;\n  height: 100px;\n}\n.team-member-name[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 5px;\n}\n.team-member-email[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n.team-member-social-content[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 45px;\n}\n.team-member-social-content[_ngcontent-%COMP%]   .team-member-social-link[_ngcontent-%COMP%] {\n  font-size: 2.1875rem;\n  color: #676a6c;\n  opacity: 0.7;\n  cursor: pointer;\n  transition: 0.3s ease-in-out;\n}\n.team-member-social-content[_ngcontent-%COMP%]   .team-member-social-link[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.team-join-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  width: 280px;\n  height: 200px;\n  box-shadow: 0 2px 10px #999;\n  background-color: #fff;\n  margin: 20px;\n}"]}),e}()}],x=function(){function e(){}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[a.CommonModule,o.N,i.FlippableCardModule,i.IconModule,r.RouterModule.forChild(s)]]}),e}()}}]);