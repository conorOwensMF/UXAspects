(self.webpackChunk_ux_aspects_ux_aspects_docs=self.webpackChunk_ux_aspects_ux_aspects_docs||[]).push([[9449],{28993:function(n){n.exports={snippet:'<span class="token selector">.media-player.standard.video</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 560px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.media-player.standard.video.quiet</span> <span class="token punctuation">{</span>\n    <span class="token property">height</span><span class="token punctuation">:</span> 490px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token selector">.media-player.standard.audio</span> <span class="token punctuation">{</span>\n    <span class="token property">width</span><span class="token punctuation">:</span> 450px<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>',example:".media-player.standard.video {\n    height: 560px;\n}\n\n.media-player.standard.video.quiet {\n    height: 490px;\n}\n\n.media-player.standard.audio {\n    width: 450px;\n}"}},47828:function(n){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-media-player</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>type === <span class="token punctuation">\'</span>video<span class="token punctuation">\'</span><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>media-player<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video<span class="token punctuation">"</span></span>\n    <span class="token attr-name">[source]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>videoSource<span class="token punctuation">"</span></span> <span class="token attr-name">[quietMode]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mode === <span class="token punctuation">\'</span>quiet<span class="token punctuation">\'</span><span class="token punctuation">"</span></span> <span class="token attr-name">crossorigin</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>anonymous<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>track</span> <span class="token attr-name">label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>English<span class="token punctuation">"</span></span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span> <span class="token attr-name">default</span> <span class="token attr-name">[src]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>subtitles<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-media-player</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-media-player</span> <span class="token attr-name">*ngIf</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>type === <span class="token punctuation">\'</span>audio<span class="token punctuation">\'</span><span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>media-player<span class="token punctuation">"</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio<span class="token punctuation">"</span></span>\n    <span class="token attr-name">[source]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audioSource<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-media-player</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row uxd-customize-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col-md-12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-accordion</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-accordion-panel</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>accordion-chevron<span class="token punctuation">"</span></span> <span class="token attr-name">heading</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Customize Example...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row uxd-customize-row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col-md-4 col-sm-12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataSet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Format<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-radio-button</span> <span class="token attr-name">[(value)]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>type<span class="token punctuation">"</span></span> <span class="token attr-name">option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>video<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Video<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-radio-button</span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-radio-button</span> <span class="token attr-name">[(value)]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>type<span class="token punctuation">"</span></span> <span class="token attr-name">option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>audio<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Audio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-radio-button</span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>row uxd-customize-row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>col-md-4 col-sm-12<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>dataSet<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Mode<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>\n\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-radio-button</span> <span class="token attr-name">[(value)]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mode<span class="token punctuation">"</span></span> <span class="token attr-name">option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>standard<span class="token punctuation">"</span></span>\n                            <span class="token attr-name">[disabled]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>type === <span class="token punctuation">\'</span>audio<span class="token punctuation">\'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Standard<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-radio-button</span><span class="token punctuation">></span></span>\n\n                        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-radio-button</span> <span class="token attr-name">[(value)]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>mode<span class="token punctuation">"</span></span> <span class="token attr-name">option</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>quiet<span class="token punctuation">"</span></span>\n                            <span class="token attr-name">[disabled]</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>type === <span class="token punctuation">\'</span>audio<span class="token punctuation">\'</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Quiet<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-radio-button</span><span class="token punctuation">></span></span>\n                    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-accordion-panel</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-accordion</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',example:'<ux-media-player *ngIf="type === \'video\'" class="media-player" type="video"\n    [source]="videoSource" [quietMode]="mode === \'quiet\'" crossorigin="anonymous">\n    <track label="English" lang="en" default [src]="subtitles">\n</ux-media-player>\n\n<ux-media-player *ngIf="type === \'audio\'" class="media-player" type="audio"\n    [source]="audioSource"></ux-media-player>\n\n<div class="row uxd-customize-example">\n    <div class="col-md-12">\n        <ux-accordion>\n            <ux-accordion-panel class="accordion-chevron" heading="Customize Example...">\n\n                <div class="row uxd-customize-row">\n                    <div class="col-md-4 col-sm-12">\n                        <label for="dataSet">Format</label>\n                        <ux-radio-button [(value)]="type" option="video">Video</ux-radio-button>\n                        <ux-radio-button [(value)]="type" option="audio">Audio</ux-radio-button>\n                    </div>\n                </div>\n\n                <div class="row uxd-customize-row">\n                    <div class="col-md-4 col-sm-12">\n                        <label for="dataSet">Mode</label>\n\n                        <ux-radio-button [(value)]="mode" option="standard"\n                            [disabled]="type === \'audio\'">Standard</ux-radio-button>\n\n                        <ux-radio-button [(value)]="mode" option="quiet"\n                            [disabled]="type === \'audio\'">Quiet</ux-radio-button>\n                    </div>\n                </div>\n            </ux-accordion-panel>\n        </ux-accordion>\n    </div>\n</div>'}},45978:function(n){n.exports={snippet:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    selector<span class="token operator">:</span> <span class="token string">\'app\'</span><span class="token punctuation">,</span>\n    templateUrl<span class="token operator">:</span> <span class="token string">\'./app.component.html\'</span><span class="token punctuation">,</span>\n    styleUrls<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">\'./app.component.css\'</span><span class="token punctuation">]</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span>\n\n    type<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">\'video\'</span><span class="token punctuation">;</span>\n    mode<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token string">\'standard\'</span><span class="token punctuation">;</span>\n\n    videoSource<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>uxdAssetsUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/media/catchingwave.mp4</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n    audioSource<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>uxdAssetsUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/media/Ocean-Waves.mp3</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n    subtitles<span class="token operator">:</span> string <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>uxdAssetsUrl<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/media/subtitles.vtt</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>',example:"import { Component } from '@angular/core';\n\n@Component({\n    selector: 'app',\n    templateUrl: './app.component.html',\n    styleUrls: ['./app.component.css']\n})\nexport class AppComponent {\n\n    type: string = 'video';\n    mode: string = 'standard';\n\n    videoSource: string = `${uxdAssetsUrl}/media/catchingwave.mp4`;\n    audioSource: string = `${uxdAssetsUrl}/media/Ocean-Waves.mp3`;\n    subtitles: string = `${uxdAssetsUrl}/media/subtitles.vtt`;\n\n}"}},33617:function(n,a,t){var e={"./app.css":28993,"./app.html":47828,"./app.ts":45978};function s(n){var a=p(n);return t(a)}function p(n){if(!t.o(e,n)){var a=new Error("Cannot find module '"+n+"'");throw a.code="MODULE_NOT_FOUND",a}return e[n]}s.keys=function(){return Object.keys(e)},s.resolve=p,n.exports=s,s.id=33617},69449:function(n,a,t){"use strict";t.r(a),t.d(a,{ComponentsMediaPlayerModule:function(){return S}});var e,s=t(56475),p=t(94121),o=t(3955),l=t(26966),c=t(95892),u=t(36941),i=t(86093),r=t(62536),d=t(29872),k=t(95490),m=t(70734),x=t(95445),g=(e=function(n,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,a){n.__proto__=a}||function(n,a){for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(n[t]=a[t])})(n,a)},function(n,a){if("function"!=typeof a&&null!==a)throw new TypeError("Class extends value "+String(a)+" is not a constructor or null");function t(){this.constructor=n}e(n,a),n.prototype=null===a?Object.create(a):(t.prototype=a.prototype,new t)}),y=function(n,a){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,a)};function v(n,a){if(1&n&&(d["\u0275\u0275elementStart"](0,"ux-media-player",36,37),d["\u0275\u0275text"](2,"\n    "),d["\u0275\u0275element"](3,"track",38),d["\u0275\u0275text"](4,"\n"),d["\u0275\u0275elementEnd"]()),2&n){var t=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("source",t.videoSource)("quietMode","quiet"===t.mode),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("src",t.subtitles,d["\u0275\u0275sanitizeUrl"])}}function f(n,a){if(1&n&&d["\u0275\u0275element"](0,"ux-media-player",39),2&n){var t=d["\u0275\u0275nextContext"]();d["\u0275\u0275property"]("source",t.audioSource)}}var b=[function(n){function a(){var a=n.call(this,t(33617))||this;return a.type="video",a.mode="standard",a.videoSource=t(64515),a.audioSource=t(61947),a.subtitles=t(20606),a.playground={files:{"app.component.ts":a.snippets.raw.appTs,"app.component.html":a.snippets.raw.appHtml,"app.component.css":a.snippets.raw.appCss},modules:[{imports:["RadioButtonModule","MediaPlayerModule","AccordionModule"],library:"@ux-aspects/ux-aspects"}]},a}return g(a,n),a.\u0275fac=function(n){return new(n||a)},a.\u0275cmp=d["\u0275\u0275defineComponent"]({type:a,selectors:[["uxd-components-media-player"]],features:[d["\u0275\u0275InheritDefinitionFeature"]],decls:179,vars:12,consts:[["class","media-player","type","video",3,"source","quietMode",4,"ngIf"],["class","media-player","type","audio",3,"source",4,"ngIf"],[1,"row","uxd-customize-example"],[1,"col-md-12"],["heading","Customize Example...",1,"accordion-chevron"],[1,"row","uxd-customize-row"],[1,"col-md-4","col-sm-12"],["for","dataSet"],["option","video",3,"value","valueChange"],["option","audio",3,"value","valueChange"],["option","standard",3,"value","disabled","valueChange"],["option","quiet",3,"value","disabled","valueChange"],["target","_blank","rel","noopener","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Supported_media_formats"],["tableTitle","Inputs"],["uxd-api-property","","name","type","type","string"],["uxd-api-property","","name","source","type","string"],["uxd-api-property","","name","filename","type","string"],["uxd-api-property","","name","quietMode","type","boolean"],["uxd-api-property","","name","crossorigin","type","'anonymous' | 'use-credentials'"],["uxd-api-property","","name","muteAriaLabel","type","(volume: number) => string"],["uxd-api-property","","name","playAriaLabel","type","(isPlaying: boolean) => string"],["uxd-api-property","","name","fullscreenAriaLabel","type","(isFullscreen: boolean) => string"],["uxd-api-property","","name","selectSubtitlesAriaLabel","type","(track: string) => string"],["uxd-api-property","","name","goToStartAriaLabel","type","string"],["uxd-api-property","","name","goToEndAriaLabel","type","string"],["uxd-api-property","","name","subtitlesTitleAriaLabel","type","string"],["uxd-api-property","","name","subtitlesOffAriaLabel","type","string"],["uxd-api-property","","name","noSubtitlesAriaLabel","type","string"],["uxd-api-property","","name","mediaPlayerAriaLabel","type","string"],["uxd-api-property","","name","seekAriaLabel","type","string"],["target","_blank","rel","noopener","href","https://developer.mozilla.org/en-US/docs/Web/HTML/Element/track"],[3,"minimal"],["heading","HTML"],[3,"content"],["heading","TypeScript"],["heading","CSS"],["type","video",1,"media-player",3,"source","quietMode"],["player",""],["label","English","lang","en","default","",3,"src"],["type","audio",1,"media-player",3,"source"]],template:function(n,a){1&n&&(d["\u0275\u0275template"](0,v,5,3,"ux-media-player",0),d["\u0275\u0275text"](1,"\n"),d["\u0275\u0275template"](2,f,1,1,"ux-media-player",1),d["\u0275\u0275text"](3,"\n\n"),d["\u0275\u0275elementStart"](4,"div",2),d["\u0275\u0275text"](5,"\n    "),d["\u0275\u0275elementStart"](6,"div",3),d["\u0275\u0275text"](7,"\n        "),d["\u0275\u0275elementStart"](8,"ux-accordion"),d["\u0275\u0275text"](9,"\n            "),d["\u0275\u0275elementStart"](10,"ux-accordion-panel",4),d["\u0275\u0275text"](11,"\n                "),d["\u0275\u0275elementStart"](12,"div",5),d["\u0275\u0275text"](13,"\n                    "),d["\u0275\u0275elementStart"](14,"div",6),d["\u0275\u0275text"](15,"\n                        "),d["\u0275\u0275elementStart"](16,"label",7),d["\u0275\u0275text"](17,"Format"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](18,"\n                        "),d["\u0275\u0275elementStart"](19,"ux-radio-button",8),d["\u0275\u0275listener"]("valueChange",(function(n){return a.type=n})),d["\u0275\u0275text"](20,"Video"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](21,"\n                        "),d["\u0275\u0275elementStart"](22,"ux-radio-button",9),d["\u0275\u0275listener"]("valueChange",(function(n){return a.type=n})),d["\u0275\u0275text"](23,"Audio"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](24,"\n                    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](25,"\n                "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](26,"\n\n                "),d["\u0275\u0275elementStart"](27,"div",5),d["\u0275\u0275text"](28,"\n                    "),d["\u0275\u0275elementStart"](29,"div",6),d["\u0275\u0275text"](30,"\n                        "),d["\u0275\u0275elementStart"](31,"label",7),d["\u0275\u0275text"](32,"Mode"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](33,"\n                        "),d["\u0275\u0275elementStart"](34,"ux-radio-button",10),d["\u0275\u0275listener"]("valueChange",(function(n){return a.mode=n})),d["\u0275\u0275text"](35,"Standard"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](36,"\n                        "),d["\u0275\u0275elementStart"](37,"ux-radio-button",11),d["\u0275\u0275listener"]("valueChange",(function(n){return a.mode=n})),d["\u0275\u0275text"](38,"Quiet"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](39,"\n                    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](40,"\n                "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](41,"\n            "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](42,"\n        "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](43,"\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](44,"\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](45,"\n\n"),d["\u0275\u0275element"](46,"hr"),d["\u0275\u0275text"](47,"\n\n"),d["\u0275\u0275elementStart"](48,"p"),d["\u0275\u0275text"](49,"\n    The media player component can be used to view video and audio files. It supports a range of the most popular video and audio\n    file formats. A comprehensive list of supported formats in each browser can be "),d["\u0275\u0275elementStart"](50,"a",12),d["\u0275\u0275text"](51,"found here"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](52,".\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](53,"\n\n"),d["\u0275\u0275elementStart"](54,"p"),d["\u0275\u0275text"](55,"To add a media player to your page use the "),d["\u0275\u0275elementStart"](56,"code"),d["\u0275\u0275text"](57,"ux-media-player"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](58," selector. The following attributes can be used to\n    configure the appearance and behavior of the media player:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](59,"\n\n"),d["\u0275\u0275elementStart"](60,"uxd-api-properties",13),d["\u0275\u0275text"](61,"\n    "),d["\u0275\u0275elementStart"](62,"tr",14),d["\u0275\u0275text"](63,"\n        Defines the appearance of the media player. The two possible values are "),d["\u0275\u0275elementStart"](64,"code"),d["\u0275\u0275text"](65,"video"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](66," and "),d["\u0275\u0275elementStart"](67,"code"),d["\u0275\u0275text"](68,"audio"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](69,".\n        The media player will adapt it's appearance to best suit the type specified.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](70,"\n    "),d["\u0275\u0275elementStart"](71,"tr",15),d["\u0275\u0275text"](72,"\n        The url to the media file to be loaded by the media player.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](73,"\n    "),d["\u0275\u0275elementStart"](74,"tr",16),d["\u0275\u0275text"](75,"\n        An overwrite to the filename that is displayed in the audio media player.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](76,"\n    "),d["\u0275\u0275elementStart"](77,"tr",17),d["\u0275\u0275text"](78,"\n        If enabled, the controls in the media player will be hidden unless the mouse is over the player and will appear in a darker\n        style. Dark mode is automatically enabled in full screen mode. Quiet mode is only available for videos.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](79,"\n    "),d["\u0275\u0275elementStart"](80,"tr",18),d["\u0275\u0275text"](81,"\n        The "),d["\u0275\u0275elementStart"](82,"code"),d["\u0275\u0275text"](83,"anonymous"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](84," keyword means that there will be no exchange of user credentials when the media source is fetched.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](85,"\n    "),d["\u0275\u0275elementStart"](86,"tr",19),d["\u0275\u0275text"](87,"\n        If specified the function will be called passing the current volume as an argument.\n        It should return an appropriate aria-label for the mute/unmute button.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](88,"\n    "),d["\u0275\u0275elementStart"](89,"tr",20),d["\u0275\u0275text"](90,"\n        If specified the function will be called passing the current playing state as an argument.\n        It should return an appropriate aria-label for the play/pause button.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](91,"\n    "),d["\u0275\u0275elementStart"](92,"tr",21),d["\u0275\u0275text"](93,"\n        If specified the function will be called passing the current fullscreen state as an argument.\n        It should return an appropriate aria-label for the fullscreen toggle button.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](94,"\n    "),d["\u0275\u0275elementStart"](95,"tr",22),d["\u0275\u0275text"](96,"\n        If specified the function will be called passing the current track as an argument.\n        It should return an appropriate aria-label for the subtitle selection button.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](97,"\n    "),d["\u0275\u0275elementStart"](98,"tr",23),d["\u0275\u0275text"](99,"\n        Define an aria-label for the go to start button.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](100,"\n    "),d["\u0275\u0275elementStart"](101,"tr",24),d["\u0275\u0275text"](102,"\n        Define an aria-label for the go to end button.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](103,"\n    "),d["\u0275\u0275elementStart"](104,"tr",25),d["\u0275\u0275text"](105,"\n        Define an aria-label for the title displayed in the subtitle selection popover.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](106,"\n    "),d["\u0275\u0275elementStart"](107,"tr",26),d["\u0275\u0275text"](108,"\n        Define an aria-label to indicate subtitle are not currently enabled.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](109,"\n    "),d["\u0275\u0275elementStart"](110,"tr",27),d["\u0275\u0275text"](111,"\n        Define an aria-label to indicate there are no subtitles available.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](112,"\n    "),d["\u0275\u0275elementStart"](113,"tr",28),d["\u0275\u0275text"](114,"\n        Define an aria-label for the media player.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](115,"\n    "),d["\u0275\u0275elementStart"](116,"tr",29),d["\u0275\u0275text"](117,"\n        Define an aria-label for the the seek element.\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](118,"\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](119,"\n\n"),d["\u0275\u0275elementStart"](120,"p"),d["\u0275\u0275text"](121,"\n    To provide subtitles or closed captions add an HTML "),d["\u0275\u0275elementStart"](122,"code"),d["\u0275\u0275text"](123,"track"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](124," element as a child of the "),d["\u0275\u0275elementStart"](125,"code"),d["\u0275\u0275text"](126,"ux-media-player"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](127,".\n    More information on the "),d["\u0275\u0275elementStart"](128,"code"),d["\u0275\u0275text"](129,"track"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](130," element can be "),d["\u0275\u0275elementStart"](131,"a",30),d["\u0275\u0275text"](132,"found here"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](133,".\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](134,"\n\n"),d["\u0275\u0275elementStart"](135,"p"),d["\u0275\u0275text"](136,"\n    Custom controls can be added to the media player by adding a child element with a "),d["\u0275\u0275elementStart"](137,"code"),d["\u0275\u0275text"](138,"uxMediaPlayerCustomControl"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](139," attribute.\n    To programmatically control the media player you can either:\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](140,"\n\n"),d["\u0275\u0275elementStart"](141,"ul"),d["\u0275\u0275text"](142,"\n    "),d["\u0275\u0275elementStart"](143,"li"),d["\u0275\u0275text"](144,"Create a component and inject the "),d["\u0275\u0275elementStart"](145,"code"),d["\u0275\u0275text"](146,"MediaPlayerService"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](147,"."),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](148,"\n    "),d["\u0275\u0275elementStart"](149,"li"),d["\u0275\u0275text"](150,"Use a template reference variable to access the "),d["\u0275\u0275elementStart"](151,"code"),d["\u0275\u0275text"](152,"MediaPlayerService"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](153," on the "),d["\u0275\u0275elementStart"](154,"code"),d["\u0275\u0275text"](155,"ux-media-player"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](156," component."),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](157,"\n"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](158,"\n\n"),d["\u0275\u0275elementStart"](159,"p"),d["\u0275\u0275text"](160,"The following code can be used to create the example above:"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](161,"\n\n"),d["\u0275\u0275elementStart"](162,"ux-tabset",31),d["\u0275\u0275text"](163,"\n    "),d["\u0275\u0275elementStart"](164,"ux-tab",32),d["\u0275\u0275text"](165,"\n        "),d["\u0275\u0275element"](166,"uxd-snippet",33),d["\u0275\u0275text"](167,"\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](168,"\n    "),d["\u0275\u0275elementStart"](169,"ux-tab",34),d["\u0275\u0275text"](170,"\n        "),d["\u0275\u0275element"](171,"uxd-snippet",33),d["\u0275\u0275text"](172,"\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](173,"\n    "),d["\u0275\u0275elementStart"](174,"ux-tab",35),d["\u0275\u0275text"](175,"\n        "),d["\u0275\u0275element"](176,"uxd-snippet",33),d["\u0275\u0275text"](177,"\n    "),d["\u0275\u0275elementEnd"](),d["\u0275\u0275text"](178,"\n"),d["\u0275\u0275elementEnd"]()),2&n&&(d["\u0275\u0275property"]("ngIf","video"===a.type),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("ngIf","audio"===a.type),d["\u0275\u0275advance"](17),d["\u0275\u0275property"]("value",a.type),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("value",a.type),d["\u0275\u0275advance"](12),d["\u0275\u0275property"]("value",a.mode)("disabled","audio"===a.type),d["\u0275\u0275advance"](3),d["\u0275\u0275property"]("value",a.mode)("disabled","audio"===a.type),d["\u0275\u0275advance"](125),d["\u0275\u0275property"]("minimal",!1),d["\u0275\u0275advance"](4),d["\u0275\u0275property"]("content",a.snippets.compiled.appHtml),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("content",a.snippets.compiled.appTs),d["\u0275\u0275advance"](5),d["\u0275\u0275property"]("content",a.snippets.compiled.appCss))},directives:[s.NgIf,o.AccordionComponent,o.AccordionPanelComponent,o.RadioButtonComponent,o.DefaultFocusIndicatorDirective,k.$,m.S,o.TabsetComponent,o.TabComponent,x.j,o.MediaPlayerComponent],styles:[".media-player.standard.video[_ngcontent-%COMP%] {\n  height: 560px;\n}\n.media-player.standard.video.quiet[_ngcontent-%COMP%] {\n  height: 490px;\n}\n.media-player.standard.audio[_ngcontent-%COMP%] {\n  width: 450px;\n}"]}),a=function(n,a,t,e){var s,p=arguments.length,o=p<3?a:null===e?e=Object.getOwnPropertyDescriptor(a,t):e;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(n,a,t,e);else for(var l=n.length-1;l>=0;l--)(s=n[l])&&(o=(p<3?s(o):p>3?s(a,t,o):s(a,t))||o);return p>3&&o&&Object.defineProperty(a,t,o),o}([(0,r.cG)("ComponentsMediaPlayerComponent"),y("design:paramtypes",[])],a)}(i.u)],h=[{path:"**",component:c.R,data:{category:u.N.resolveCategoryData(u.I.Components,"Media Player")}}],S=function(){function n(n,a){a.registerResolver(n,b)}return n.\u0275fac=function(a){return new(a||n)(d["\u0275\u0275inject"](d.ComponentFactoryResolver),d["\u0275\u0275inject"](u.N))},n.\u0275mod=d["\u0275\u0275defineNgModule"]({type:n}),n.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[o.TabsetModule,o.MediaPlayerModule,o.RadioButtonModule,o.AccordionModule,l.N,s.CommonModule,p.RouterModule.forChild(h)]]}),n}()},61947:function(n,a,t){n.exports=t.p+"assets/Ocean-Waves.mp3"},64515:function(n,a,t){n.exports=t.p+"assets/catchingwave.mp4"},20606:function(n,a,t){n.exports=t.p+"assets/subtitles.vtt"}}]);