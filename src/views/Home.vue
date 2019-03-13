<template>
				<div>
								<div style="height:0;">
												<div id="stage-line-container" class="col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0 stage-container">
																<div id="stage-line" class="container offset-md-1 stage-line stage-line-border no-pad relative nostroke">
																				<div class="stage-box phase--1" style="">
																								<div class="stage stage-1">
																												<div class="stage-stroke transparent">_</div>
																												<div class="stage-name"></div>
																								</div>
																								<div class="stage stage-1">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name"></div>
																								</div>
																								<div class="stage stage-1" @click="$refs.fullpage.api.moveTo(2)">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name stage-name-1">
																																<a>stage 1</a>
																												</div>
																								</div>
																								<div class="stage stage-2" @click="$refs.fullpage.api.moveTo(3)">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name stage-name-2">
																																<a>stage 2</a>
																												</div>
																								</div>
																								<div class="stage stage-3" @click="$refs.fullpage.api.moveTo(4)">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name stage-name-3">
																																<a>stage 3</a>
																												</div>
																								</div>
																								<div class="stage stage-4" @click="$refs.fullpage.api.moveTo(5)">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name stage-name-4">
																																<a>stage 4</a>
																												</div>
																								</div>
																								<div class="stage stage-5" @click="$refs.fullpage.api.moveTo(6)">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name stage-name-5">
																																<a>sales story</a>
																												</div>
																								</div>
																				</div>
																</div>
												</div>
								</div>
								<full-page ref="fullpage" :options="options">
												<div class="section green-bg fp-auto-height" style="height: 800px" data-index="0">
																<HeaderModule />
																<div class="container" style="height: 80vh;">
																				<div class="row justify-content-center">
																								<div class="col-lg-10 col-md-12">
																												<h1 class="top-pad-lg landing-element">
																																The savvy sales leader’s guide to building profitable relationships
																												</h1>
																								</div>
																				</div>
																				<div class="row">
																								<div class="col-xl-6 col-lg-9 col-md-12 top-pad-lg offset-lg-1 landing-element">
																												<h3 class="">
																																Use relationship selling to connect with customers and accelerate sales
																												</h3>
																												<p class="hide-mobile">
																																Imagine having
																																a relationship
																																built on trust with
																																each of your customers.
																												</p>
																												<p class="hide-mobile">
																																If every one of your connections
																																turned to you for help in solving
																																their greatest challenges at every
																																stage of the sales journey, what
																																would that do to your bottom line?
																												</p>
																												<router-link to="/overview" class="btn">LEARN MORE</router-link>
																								</div>
																				</div>
																				<div class="bottom-fix next down-arrow animated bounce" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe()">next
																								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.54 19.8">
																												<g id="Layer_2" data-name="Layer 2">
																																<g id="content">
																																				<polygon class="cls-1-light" points="16.27 19.8 0 3.54 3.54 0 16.27 12.73 29 0 32.54 3.54 16.27 19.8" />
																																</g>
																												</g>
																								</svg>
																				</div>
																				<div class="rect-bar-10 one">.</div>
																				<div class="rect-bar-10 two">.</div>
																				<div class="rect-bar-10 three">.</div>
																				<div class="rect-bar-10 four">.</div>
																</div>
												</div>
												<div id="bg-image" class="section bg-iphone" data-index="1">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<div class="col-md-9 col-sm-11 col-xs-12 offset-sm-1 no-left-pad top-pad-200 fadeInAnimation fade-opacity-1">
																												<div class="stage-stroke mobile">_</div>
																												<div class="section-title mobile">stage 1</div>
																												<h2>
																																Identify the right leads
																												</h2>
																												<p>
																																Identifying and creating natural ways to foster
																																and maintain professional relationships leads
																																to deeper connections, long-term loyalty, and
																																trust—and that trust translates to healthy sales.
																												</p>
																												<router-link to="/stage1" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()">next
																				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.54 19.8">
																								<g id="Layer_2" data-name="Layer 2">
																												<g id="content">
																																<polygon class="cls-1" points="16.27 19.8 0 3.54 3.54 0 16.27 12.73 29 0 32.54 3.54 16.27 19.8" />
																												</g>
																								</g>
																				</svg>
																</div>
												</div>
												<div id="bg-image" class="section bg-sunset" data-index="2">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<div class="col-md-9 col-sm-11 col-xs-12 offset-sm-1 no-left-pad top-pad-200 fadeInAnimation fade-opacity-2">
																												<div class="stage-stroke mobile">_</div>
																												<div class="section-title mobile">stage 2</div>
																												<h2>
																																Nurture leads and build relationships
																												</h2>
																												<p>
																																Working on a relationship is a continuous
																																cycle. It’s not enough to connect with the
																																ideal leads; those prospects must be wooed.
																																In sales, that means providing the value your
																																educated buyers are looking for.
																												</p>
																												<router-link to="/stage2" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()">next
																				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.54 19.8">
																								<g id="Layer_2" data-name="Layer 2">
																												<g id="content">
																																<polygon class="cls-1" points="16.27 19.8 0 3.54 3.54 0 16.27 12.73 29 0 32.54 3.54 16.27 19.8" />
																												</g>
																								</g>
																				</svg>
																</div>
												</div>
												<div id="bg-image" class="section bg-tablet-smiling" data-index="3">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<div class="col-md-9 col-sm-11 col-xs-12 offset-sm-1 no-left-pad top-pad-200 fadeInAnimation fade-opacity-3">
																												<div class="stage-stroke mobile">_</div>
																												<div class="section-title mobile">stage 3</div>
																												<h2>
																																Capitalize on opportunities to convert
																												</h2>
																												<p>
																																Customers come to you because they have
																																problems. You solve those problems. But
																																what if you could anticipate and solve the
																																problems they don’t yet realize they have?
																												</p>
																												<router-link to="/stage3" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()">next
																				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.54 19.8">
																								<g id="Layer_2" data-name="Layer 2">
																												<g id="content">
																																<polygon class="cls-1" points="16.27 19.8 0 3.54 3.54 0 16.27 12.73 29 0 32.54 3.54 16.27 19.8" />
																												</g>
																								</g>
																				</svg>
																</div>
												</div>
												<div id="bg-image" class="section bg-crowd-2" data-index="4">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<div class="col-md-9 col-sm-11 col-xs-12 offset-sm-1 no-left-pad top-pad-200 fadeInAnimation fade-opacity-4">
																												<div class="stage-stroke mobile">_</div>
																												<div class="section-title mobile">stage 4</div>
																												<h2>
																																Deliver relationship sales at scale
																												</h2>
																												<p>
																																You have prospect data.
																																Lots of it. And you’re collecting
																																it every second of every day.
																												</p>
																												<router-link to="/stage4" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()">next
																				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.54 19.8">
																								<g id="Layer_2" data-name="Layer 2">
																												<g id="content">
																																<polygon class="cls-1" points="16.27 19.8 0 3.54 3.54 0 16.27 12.73 29 0 32.54 3.54 16.27 19.8" />
																												</g>
																								</g>
																				</svg>
																</div>
												</div>
												<div id="bg-image" class="section bg-view" data-index="5">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<!-- <StageLines /> -->
																								<div class="col-md-9 col-sm-11 col-xs-12 offset-sm-1 no-left-pad top-pad-200 fadeInAnimation fade-opacity-5">
																												<div class="stage-stroke mobile">_</div>
																												<div class="section-title mobile">sales story</div>
																												<h2>
																																The view’s better from here
																												</h2>
																												<p>
																																Relationship selling works at every stage of the sales process—from identifying key prospects to nurturing them, building relationships, and capitalizing on opportunities to convert them to sales. And it can be done at scale, so there are no limits to where your sales career can take you.
																												</p>
																												<router-link to="/stage4" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()">next
																				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.54 19.8">
																								<g id="Layer_2" data-name="Layer 2">
																												<g id="content">
																																<polygon class="cls-1" points="16.27 19.8 0 3.54 3.54 0 16.27 12.73 29 0 32.54 3.54 16.27 19.8" />
																												</g>
																								</g>
																				</svg>
																</div>
																<!-- <div style="height: 400px;width: 100%;background:pink">hell</div> -->
												</div>
												<div class="section fp-auto-height grey-bg relative btm-pad-footer" data-index="6">
																<div class="row justify-content-center no-lr-margin fadeInAnimation fade-opacity-6">
																				<div class="col-xl-10 col-lg-10 col-md-10 col-sm-12">
																								<h2 class="top-pad-lg btm-pad-sm">
																												Personalizing sales relationships can lead to better opportunities—and more sales—for your business.
																								</h2>
																								<p class="size-md">
																												<a href="https://dynamics.microsoft.com/en-us/sales/demo/" style="text-decoration: underline;" target="_blank">Watch our videos</a> to learn more about Relationship Sales solutions, or <a href="https://dynamics.microsoft.com/en-us/get-started/?appname=sales" style="text-decoration: underline;" target="_blank">contact a representative</a> to try out Dynamics 365 for Sales.
																								</p>
																				</div>
																</div>
																<div class="row justify-content-center no-lr-margin fadeInAnimation fade-opacity-6">
																				<div class="col-lg-5 col-md-5 col-sm-12 top-pad-lg btm-pad-lg">
																								<a class="btn dark-btn white-txt" href="">Learn More</a>
																				</div>
																				<div class="col-lg-5 col-md-5 col-sm-12 top-pad-lg btm-pad-xls">
																								<a class="btn dark-btn white-txt" href="">Try it out</a>
																				</div>
																</div>
																<div class="moveToTop" @click="$refs.fullpage.api.moveTo(1)">return to top
																				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
																								<symbol id="Arrow-Circle-Up" viewBox="-16 -16 32 32">
																												<path class="st0" d="M-15.98,0.75c-0.41-8.83,6.41-16.32,15.24-16.73S15.57-9.57,15.98-0.75S9.57,15.57,0.75,15.98
		C-8.08,16.39-15.57,9.57-15.98,0.75z M8.57,0.99L7.16-0.43L0.7,6.03L0.74-9.85l-2.01,0l0.01,15.9l-6.4-6.4l-1.41,1.41l8.78,8.78
		L8.57,0.99z" />
																												<polygon class="st1" points="-7.66,-0.35 -1.26,6.05 -1.27,-9.85 0.74,-9.85 0.7,6.03 7.16,-0.43 8.57,0.99 -0.29,9.85 -9.07,1.07" />
																								</symbol>
																								<use xlink:href="#Arrow-Circle-Up" width="32" height="32" id="XMLID_1_" x="-16" y="-16" transform="matrix(1 0 0 -1 16.0003 16.0003)" style="overflow:visible;" />
																				</svg>
																</div>
												</div>
								</full-page>
				</div>
</template>
<script>
import HeaderModule from '../components/HeaderModule';
import VueFullPage from 'vue-fullpage.js'
import '../fullpage.fadingEffect.min' // Optional. When using fullpage extensions


export default {
				data() {
								return {
												options: {
																licenseKey: 'F747FF40-5C8F4AA6-90091DEC-9F6B7E17',
																fadingEffect: true,
																scrollBar: true,
																afterLoad: this.afterLoad,
															onLeave: this.onLeave
												}
								}
				},
				components: {
								VueFullPage,
								HeaderModule

				},
				methods: {
								burger: function() {
												var navbar = document.querySelector('.navbar');
												navbar.classList.toggle('expanded');
								},
								openMe: function() {

												var downArrrow = document.querySelector('.down-arrow');
												downArrrow.classList.add('paused');



								},
								landingFadeIn: function() {

								},



																onLeave: function(origin, destination,direction) {



// polyfill
// polyfill
// polyfil


























// 1. String.prototype.trim polyfill
if (!"".trim) String.prototype.trim = function(){ return this.replace(/^[\s﻿]+|[\s﻿]+$/g, ''); };
(function(window){"use strict"; // prevent global namespace pollution
function checkIfValidClassListEntry(O, V){
if (V === "") throw new DOMException(
  "Failed to execute '" + O + "' on 'DOMTokenList': The token provided must not be empty." );
if((wsI=V.search(wsRE))!==-1)throw new DOMException("Failed to execute '"+O+"' on 'DOMTokenList': "+
"The token provided ('"+V[wsI]+"') contains HTML space characters, which are not valid in tokens.");
  }
// 2. Implement the barebones DOMTokenList livelyness polyfill
if (typeof DOMTokenList !== "function") (function(window){
    var document = window.document, Object = window.Object, hasOwnProp = Object.prototype.hasOwnProperty;
    var defineProperty = Object.defineProperty, allowTokenListConstruction = 0, skipPropChange = 0;
    var Element = window.Element, wsI = 0, wsRE = /[\11\12\14\15\40]/; // WhiteSpace Regular Expression
    function DOMTokenList(){
        if (!allowTokenListConstruction) throw TypeError("Illegal constructor"); // internally let it through
    }
    DOMTokenList.prototype.toString = DOMTokenList.prototype.toLocaleString = function(){return this.value};
    DOMTokenList.prototype.add = function(){
        a: for(var v=0, argLen=arguments.length,val="",ele=this["uCL"],proto=ele[" uCLp"]; v!==argLen; ++v) {
            val = arguments[v] + "", checkIfValidClassListEntry("add", val);
            for (var i=0, Len=proto.length, resStr=val; i !== Len; ++i)
                if (this[i] === val) continue a; else resStr += " " + this[i];
            this[Len] = val, proto.length += 1, proto.value = resStr;
        }
        skipPropChange = 1, ele.className = proto.value, skipPropChange = 0;
    };
    DOMTokenList.prototype.remove = function(){
        for (var v=0, argLen=arguments.length,val="",ele=this["uCL"],proto=ele[" uCLp"]; v !== argLen; ++v) {
            val = arguments[v] + "", checkIfValidClassListEntry("remove", val);
            for (var i=0, Len=proto.length, resStr="", is=0; i !== Len; ++i)
                if(is){ this[i-1]=this[i] }else{ if(this[i] !== val){ resStr+=this[i]+" "; }else{ is=1; } }
            if (!is) continue;
            delete this[Len], proto.length -= 1, proto.value = resStr;
        }
        skipPropChange = 1, ele.className = proto.value, skipPropChange = 0;
    };
    window.DOMTokenList = DOMTokenList;
    function whenPropChanges(){
        var evt = window.event, prop = evt.propertyName;
        if ( !skipPropChange && (prop==="className" || (prop==="classList" && !defineProperty)) ) {
            var target = evt.srcElement, protoObjProto = target[" uCLp"], strval = "" + target[prop];
            var tokens=strval.trim().split(wsRE), resTokenList=target[prop==="classList"?" uCL":"classList"];
            var oldLen = protoObjProto.length;
            a: for(var cI = 0, cLen = protoObjProto.length = tokens.length, sub = 0; cI !== cLen; ++cI){
                for(var innerI=0; innerI!==cI; ++innerI) if(tokens[innerI]===tokens[cI]) {sub++; continue a;}
                resTokenList[cI-sub] = tokens[cI];
            }
            for (var i=cLen-sub; i < oldLen; ++i) delete resTokenList[i]; //remove trailing indexs
            if(prop !== "classList") return;
            skipPropChange = 1, target.classList = resTokenList, target.className = strval;
            skipPropChange = 0, resTokenList.length = tokens.length - sub;
        }
    }
    function polyfillClassList(ele){
        if (!ele || !("innerHTML" in ele)) throw TypeError("Illegal invocation");
        srcEle.detachEvent( "onpropertychange", whenPropChanges ); // prevent duplicate handler infinite loop
        allowTokenListConstruction = 1;
        try{ function protoObj(){} protoObj.prototype = new DOMTokenList(); }
        finally { allowTokenListConstruction = 0 }
        var protoObjProto = protoObj.prototype, resTokenList = new protoObj();
        a: for(var toks=ele.className.trim().split(wsRE), cI=0, cLen=toks.length, sub=0; cI !== cLen; ++cI){
            for (var innerI=0; innerI !== cI; ++innerI) if (toks[innerI] === toks[cI]) { sub++; continue a; }
            this[cI-sub] = toks[cI];
        }
        protoObjProto.length = Len-sub, protoObjProto.value = ele.className, protoObjProto[" uCL"] = ele;
        if (defineProperty) { defineProperty(ele, "classList", { // IE8 & IE9 allow defineProperty on the DOM
            enumerable:   1, get: function(){return resTokenList},
            configurable: 0, set: function(newVal){
                skipPropChange = 1, ele.className = protoObjProto.value = (newVal += ""), skipPropChange = 0;
                var toks = newVal.trim().split(wsRE), oldLen = protoObjProto.length;
                a: for(var cI = 0, cLen = protoObjProto.length = toks.length, sub = 0; cI !== cLen; ++cI){
                    for(var innerI=0; innerI!==cI; ++innerI) if(toks[innerI]===toks[cI]) {sub++; continue a;}
                    resTokenList[cI-sub] = toks[cI];
                }
                for (var i=cLen-sub; i < oldLen; ++i) delete resTokenList[i]; //remove trailing indexs
            }
        }); defineProperty(ele, " uCLp", { // for accessing the hidden prototype
            enumerable: 0, configurable: 0, writeable: 0, value: protoObj.prototype
        }); defineProperty(protoObjProto, " uCL", {
            enumerable: 0, configurable: 0, writeable: 0, value: ele
        }); } else { ele.classList=resTokenList, ele[" uCL"]=resTokenList, ele[" uCLp"]=protoObj.prototype; }
        srcEle.attachEvent( "onpropertychange", whenPropChanges );
    }
    try { // Much faster & cleaner version for IE8 & IE9:
        // Should work in IE8 because Element.prototype instanceof Node is true according to the specs
        window.Object.defineProperty(window.Element.prototype, "classList", {
            enumerable: 1,   get: function(val){
                                 if (!hasOwnProp.call(ele, "classList")) polyfillClassList(this);
                                 return this.classList;
                             },
            configurable: 0, set: function(val){this.className = val}
        });
    } catch(e) { // Less performant fallback for older browsers (IE 6-8):
        window[" uCL"] = polyfillClassList;
        // the below code ensures polyfillClassList is applied to all current and future elements in the doc.
        document.documentElement.firstChild.appendChild(document.createElement('style')).styleSheet.cssText=(
            '_*{x-uCLp:expression(!this.hasOwnProperty("classList")&&window[" uCL"](this))}' + //  IE6
            '[class]{x-uCLp/**/:expression(!this.hasOwnProperty("classList")&&window[" uCL"](this))}' //IE7-8
        );
    }
})(window);
// 3. Patch in unsupported methods in DOMTokenList
(function(DOMTokenListProto, testClass){
    if (!DOMTokenListProto.item) DOMTokenListProto.item = function(i){
        function NullCheck(n) {return n===void 0 ? null : n} return NullCheck(this[i]);
    };
    if (!DOMTokenListProto.toggle || testClass.toggle("a",0)!==false) DOMTokenListProto.toggle=function(val){
        if (arguments.length > 1) return (this[arguments[1] ? "add" : "remove"](val), !!arguments[1]);
        var oldValue = this.value;
        return (this.remove(oldValue), oldValue === this.value && (this.add(val), true) /*|| false*/);
    };
    if (!DOMTokenListProto.replace || typeof testClass.replace("a", "b") !== "boolean")
        DOMTokenListProto.replace = function(oldToken, newToken){
            checkIfValidClassListEntry("replace", oldToken), checkIfValidClassListEntry("replace", newToken);
            var oldValue = this.value;
            return (this.remove(oldToken), this.value !== oldValue && (this.add(newToken), true));
        };
    if (!DOMTokenListProto.contains) DOMTokenListProto.contains = function(value){
        for (var i=0,Len=this.length; i !== Len; ++i) if (this[i] === value) return true;
        return false;
    };
    if (!DOMTokenListProto.forEach) DOMTokenListProto.forEach = function(f){
        if (arguments.length === 1) for (var i = 0, Len = this.length; i !== Len; ++i) f( this[i], i, this);
        else for (var i=0,Len=this.length,tArg=arguments[1]; i !== Len; ++i) f.call(tArg, this[i], i, this);
    };
    if (!DOMTokenListProto.entries) DOMTokenListProto.entries = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex<that.length ? {value: [nextIndex, that[nextIndex]], done: false} : {done: true};
        }};
    };
    if (!DOMTokenListProto.values) DOMTokenListProto.values = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex<that.length ? {value: that[nextIndex], done: false} : {done: true};
        }};
    };
    if (!DOMTokenListProto.keys) DOMTokenListProto.keys = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex<that.length ? {value: nextIndex, done: false} : {done: true};
        }};
    };
})(window.DOMTokenList.prototype, window.document.createElement("div").classList);
})(window);







































// top-pad-lg
// top-pad-lgpl
// pl













																				let indexElem2 = destination.index - 1;
																				let stageBox = document.querySelectorAll('.stage-box');

																				for (var i11 = 0; i11 < stageBox.length; ++i11) {


																								stageBox[i11].classList.value = 'stage-box phase-' + indexElem2;

																								if (indexElem2 == -1 || indexElem2 == 5) {

																												document.getElementById('stage-line').classList.add('nostroke');
																								} else {
																												document.getElementById('stage-line').classList.remove('nostroke');
																								}


																				}
																				let stageName;
																				stageName = document.querySelectorAll('.stage-name');
																				for (var i12 = 0; i12 < stageName.length; ++i12) {

																								stageName[i12].style.opacity = 0;


																				}

												// if (destination.index == 5 && direction == 'up') {
												// 									this.$refs.fullpage.api.fadingEffect.turnOn();

												// }

																},

																																afterLoad: function(origin, destination,direction) {



















// polyfill
// polyfill
// polyfil


























// 1. String.prototype.trim polyfill
if (!"".trim) String.prototype.trim = function(){ return this.replace(/^[\s﻿]+|[\s﻿]+$/g, ''); };
(function(window){"use strict"; // prevent global namespace pollution
function checkIfValidClassListEntry(O, V){
if (V === "") throw new DOMException(
  "Failed to execute '" + O + "' on 'DOMTokenList': The token provided must not be empty." );
if((wsI=V.search(wsRE))!==-1)throw new DOMException("Failed to execute '"+O+"' on 'DOMTokenList': "+
"The token provided ('"+V[wsI]+"') contains HTML space characters, which are not valid in tokens.");
  }
// 2. Implement the barebones DOMTokenList livelyness polyfill
if (typeof DOMTokenList !== "function") (function(window){
    var document = window.document, Object = window.Object, hasOwnProp = Object.prototype.hasOwnProperty;
    var defineProperty = Object.defineProperty, allowTokenListConstruction = 0, skipPropChange = 0;
    var Element = window.Element, wsI = 0, wsRE = /[\11\12\14\15\40]/; // WhiteSpace Regular Expression
    function DOMTokenList(){
        if (!allowTokenListConstruction) throw TypeError("Illegal constructor"); // internally let it through
    }
    DOMTokenList.prototype.toString = DOMTokenList.prototype.toLocaleString = function(){return this.value};
    DOMTokenList.prototype.add = function(){
        a: for(var v=0, argLen=arguments.length,val="",ele=this["uCL"],proto=ele[" uCLp"]; v!==argLen; ++v) {
            val = arguments[v] + "", checkIfValidClassListEntry("add", val);
            for (var i=0, Len=proto.length, resStr=val; i !== Len; ++i)
                if (this[i] === val) continue a; else resStr += " " + this[i];
            this[Len] = val, proto.length += 1, proto.value = resStr;
        }
        skipPropChange = 1, ele.className = proto.value, skipPropChange = 0;
    };
    DOMTokenList.prototype.remove = function(){
        for (var v=0, argLen=arguments.length,val="",ele=this["uCL"],proto=ele[" uCLp"]; v !== argLen; ++v) {
            val = arguments[v] + "", checkIfValidClassListEntry("remove", val);
            for (var i=0, Len=proto.length, resStr="", is=0; i !== Len; ++i)
                if(is){ this[i-1]=this[i] }else{ if(this[i] !== val){ resStr+=this[i]+" "; }else{ is=1; } }
            if (!is) continue;
            delete this[Len], proto.length -= 1, proto.value = resStr;
        }
        skipPropChange = 1, ele.className = proto.value, skipPropChange = 0;
    };
    window.DOMTokenList = DOMTokenList;
    function whenPropChanges(){
        var evt = window.event, prop = evt.propertyName;
        if ( !skipPropChange && (prop==="className" || (prop==="classList" && !defineProperty)) ) {
            var target = evt.srcElement, protoObjProto = target[" uCLp"], strval = "" + target[prop];
            var tokens=strval.trim().split(wsRE), resTokenList=target[prop==="classList"?" uCL":"classList"];
            var oldLen = protoObjProto.length;
            a: for(var cI = 0, cLen = protoObjProto.length = tokens.length, sub = 0; cI !== cLen; ++cI){
                for(var innerI=0; innerI!==cI; ++innerI) if(tokens[innerI]===tokens[cI]) {sub++; continue a;}
                resTokenList[cI-sub] = tokens[cI];
            }
            for (var i=cLen-sub; i < oldLen; ++i) delete resTokenList[i]; //remove trailing indexs
            if(prop !== "classList") return;
            skipPropChange = 1, target.classList = resTokenList, target.className = strval;
            skipPropChange = 0, resTokenList.length = tokens.length - sub;
        }
    }
    function polyfillClassList(ele){
        if (!ele || !("innerHTML" in ele)) throw TypeError("Illegal invocation");
        srcEle.detachEvent( "onpropertychange", whenPropChanges ); // prevent duplicate handler infinite loop
        allowTokenListConstruction = 1;
        try{ function protoObj(){} protoObj.prototype = new DOMTokenList(); }
        finally { allowTokenListConstruction = 0 }
        var protoObjProto = protoObj.prototype, resTokenList = new protoObj();
        a: for(var toks=ele.className.trim().split(wsRE), cI=0, cLen=toks.length, sub=0; cI !== cLen; ++cI){
            for (var innerI=0; innerI !== cI; ++innerI) if (toks[innerI] === toks[cI]) { sub++; continue a; }
            this[cI-sub] = toks[cI];
        }
        protoObjProto.length = Len-sub, protoObjProto.value = ele.className, protoObjProto[" uCL"] = ele;
        if (defineProperty) { defineProperty(ele, "classList", { // IE8 & IE9 allow defineProperty on the DOM
            enumerable:   1, get: function(){return resTokenList},
            configurable: 0, set: function(newVal){
                skipPropChange = 1, ele.className = protoObjProto.value = (newVal += ""), skipPropChange = 0;
                var toks = newVal.trim().split(wsRE), oldLen = protoObjProto.length;
                a: for(var cI = 0, cLen = protoObjProto.length = toks.length, sub = 0; cI !== cLen; ++cI){
                    for(var innerI=0; innerI!==cI; ++innerI) if(toks[innerI]===toks[cI]) {sub++; continue a;}
                    resTokenList[cI-sub] = toks[cI];
                }
                for (var i=cLen-sub; i < oldLen; ++i) delete resTokenList[i]; //remove trailing indexs
            }
        }); defineProperty(ele, " uCLp", { // for accessing the hidden prototype
            enumerable: 0, configurable: 0, writeable: 0, value: protoObj.prototype
        }); defineProperty(protoObjProto, " uCL", {
            enumerable: 0, configurable: 0, writeable: 0, value: ele
        }); } else { ele.classList=resTokenList, ele[" uCL"]=resTokenList, ele[" uCLp"]=protoObj.prototype; }
        srcEle.attachEvent( "onpropertychange", whenPropChanges );
    }
    try { // Much faster & cleaner version for IE8 & IE9:
        // Should work in IE8 because Element.prototype instanceof Node is true according to the specs
        window.Object.defineProperty(window.Element.prototype, "classList", {
            enumerable: 1,   get: function(val){
                                 if (!hasOwnProp.call(ele, "classList")) polyfillClassList(this);
                                 return this.classList;
                             },
            configurable: 0, set: function(val){this.className = val}
        });
    } catch(e) { // Less performant fallback for older browsers (IE 6-8):
        window[" uCL"] = polyfillClassList;
        // the below code ensures polyfillClassList is applied to all current and future elements in the doc.
        document.documentElement.firstChild.appendChild(document.createElement('style')).styleSheet.cssText=(
            '_*{x-uCLp:expression(!this.hasOwnProperty("classList")&&window[" uCL"](this))}' + //  IE6
            '[class]{x-uCLp/**/:expression(!this.hasOwnProperty("classList")&&window[" uCL"](this))}' //IE7-8
        );
    }
})(window);
// 3. Patch in unsupported methods in DOMTokenList
(function(DOMTokenListProto, testClass){
    if (!DOMTokenListProto.item) DOMTokenListProto.item = function(i){
        function NullCheck(n) {return n===void 0 ? null : n} return NullCheck(this[i]);
    };
    if (!DOMTokenListProto.toggle || testClass.toggle("a",0)!==false) DOMTokenListProto.toggle=function(val){
        if (arguments.length > 1) return (this[arguments[1] ? "add" : "remove"](val), !!arguments[1]);
        var oldValue = this.value;
        return (this.remove(oldValue), oldValue === this.value && (this.add(val), true) /*|| false*/);
    };
    if (!DOMTokenListProto.replace || typeof testClass.replace("a", "b") !== "boolean")
        DOMTokenListProto.replace = function(oldToken, newToken){
            checkIfValidClassListEntry("replace", oldToken), checkIfValidClassListEntry("replace", newToken);
            var oldValue = this.value;
            return (this.remove(oldToken), this.value !== oldValue && (this.add(newToken), true));
        };
    if (!DOMTokenListProto.contains) DOMTokenListProto.contains = function(value){
        for (var i=0,Len=this.length; i !== Len; ++i) if (this[i] === value) return true;
        return false;
    };
    if (!DOMTokenListProto.forEach) DOMTokenListProto.forEach = function(f){
        if (arguments.length === 1) for (var i = 0, Len = this.length; i !== Len; ++i) f( this[i], i, this);
        else for (var i=0,Len=this.length,tArg=arguments[1]; i !== Len; ++i) f.call(tArg, this[i], i, this);
    };
    if (!DOMTokenListProto.entries) DOMTokenListProto.entries = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex<that.length ? {value: [nextIndex, that[nextIndex]], done: false} : {done: true};
        }};
    };
    if (!DOMTokenListProto.values) DOMTokenListProto.values = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex<that.length ? {value: that[nextIndex], done: false} : {done: true};
        }};
    };
    if (!DOMTokenListProto.keys) DOMTokenListProto.keys = function(){
        var nextIndex = 0, that = this;
        return {next: function() {
            return nextIndex<that.length ? {value: nextIndex, done: false} : {done: true};
        }};
    };
})(window.DOMTokenList.prototype, window.document.createElement("div").classList);
})(window);







































// top-pad-lg
// top-pad-lgpl
// pl
































																																	

																				// LANDING ELEMENTS

																				var landingHeader = document.querySelectorAll('.landing-element');
																				if (landingHeader) {
																								for (var i = 0; i < landingHeader.length; ++i) {
																												landingHeader[i].classList.add('fade-visible');
																								}
																				}
																				var slideRight = document.querySelectorAll('.slide-in');
																				if (slideRight) {
																								for (var i6 = 0; i6 < slideRight.length; ++i6) {
																												slideRight[i6].classList.remove('slide-in-right');
																								}
																				}

																				let slideIn = document.querySelector('.rect-bar-10.one');
																				if (slideIn) {
																								slideIn.classList.add('expanded-33');
																				}

																				let slideIn2 = document.querySelector('.rect-bar-10.two');
																				if (slideIn2) {
																								slideIn2.classList.add('expanded-10');
																				}

																				let slideIn3 = document.querySelector('.rect-bar-10.three');
																				if (slideIn3) {
																								slideIn3.classList.add('expanded-50');
																				}

																				let slideIn4 = document.querySelector('.rect-bar-10.four');
																				if (slideIn4) {
																								slideIn4.classList.add('expanded-50');
																				}


																				if (destination.index) {

																								var sectionName = '.fade-opacity-' + destination.index;
																								var opacity = document.querySelectorAll(sectionName);

																								for (var i7 = 0; i7 < opacity.length; ++i7) {

																												opacity[i7].classList.add('fade-visible');
																								}
																				}

																				if (destination.index) {

																								if (destination.index == 6) {
																												document.getElementById('stage-line-container').style.pointerEvents = 'none';
																								} else {
																												document.getElementById('stage-line-container').style.pointerEvents = 'auto';
																								}

																				} else {

																								document.getElementById('stage-line-container').style.pointerEvents = 'none';

																				}


																				let stageName = document.querySelector('.stage-name-' + destination.index);


																				if (stageName) {
																								stageName.style.opacity = 1;
																				}

															
												if (destination.index == 5 && direction == 'down') {
																					// this.$refs.fullpage.api.fadingEffect.turnOff();



																					fullpage_api.fadingEffect.turnOff();


												console.log(origin)

												}



																								// if (destination.index == 5 && direction == 'up') {
																			
																					// 					if(origin.index == 6){
																					// 							// this.$refs.fullpage.api.fadingEffect.turnOn();


																					// 							fullpage_api.fadingEffect.turnOn();
																					// }

												// }









																}



				}

}

</script>
