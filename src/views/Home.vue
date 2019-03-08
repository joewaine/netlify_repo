<template>
				<div>
								<!-- <StageLines /> -->
								<!-- stagelines -->
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
																												<div class="stage-name">
																																<a>stage 1</a>
																																<!-- <span @click="$refs.fullpage.api.moveSectionDown()">next section</span> -->
																												</div>
																								</div>
																								<div class="stage stage-2" @click="$refs.fullpage.api.moveTo(3)">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name">
																																<a>stage 2</a>
																												</div>
																								</div>
																								<div class="stage stage-3" @click="$refs.fullpage.api.moveTo(4)">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name">
																																<a>stage 3</a>
																												</div>
																								</div>
																								<div class="stage stage-4" @click="$refs.fullpage.api.moveTo(5)">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name">
																																<a>stage 4</a>
																												</div>
																								</div>
																								<div class="stage stage-5" @click="$refs.fullpage.api.moveTo(6)">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name">
																																<a>sales story</a>
																												</div>
																								</div>
																				</div>
																</div>
												</div>
								</div>
								<!-- stagelines -->
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
																																Imagine having a relationship with each of your customers—a relationship that’s built on trust.
																												</p>
																												<p class="hide-mobile">
																																If every one of your connections turned to you for help in solving their greatest challenges at every stage of the sales journey, what would that do to your bottom line? If you could provide every new prospect with relevant, useful insights that would make them more successful, how would your sales goals change?
																												</p>
																												<router-link to="/overview" class="btn">LEARN MORE</router-link>
																								</div>
																				</div>
																				<div class="bottom-fix next down-arrow animated bounce" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(1)">next</div>
																</div>
												</div>
												<div id="bg-image" class="section bg-iphone" data-index="1">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<!-- <StageLines /> -->
																								<div class="col-md-9 col-sm-11 col-xs-12 offset-sm-1 no-left-pad top-pad-200 fadeInAnimation fade-opacity-1">
																												<div class="stage-stroke mobile">_</div>
																												<div class="section-title mobile">stage 1</div>
																												<h2>
																																Identify the right leads
																												</h2>
																												<p>
																																Identifying and creating natural ways to foster and maintain professional relationships leads to deeper connections, long-term loyalty, and trust. And trust translates to healthy sales. At this first stage of the sales journey, you’re intent on identifying new prospects.
																												</p>
																												<router-link to="/stage1" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(2)">next</div>
												</div>
												<div id="bg-image" class="section bg-sunset" data-index="2">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<!-- <StageLines /> -->
																								<div class="col-md-9 col-sm-11 col-xs-12 offset-sm-1 no-left-pad top-pad-200 fadeInAnimation fade-opacity-2">
																												<div class="stage-stroke mobile">_</div>
																												<div class="section-title mobile">stage 2</div>
																												<h2>
																																Nurture leads and build relationships
																												</h2>
																												<p>
																																Working on a relationship is a continuous cycle. It’s not enough to connect with the ideal leads; those prospects must be wooed. In sales, that means providing the value your educated buyers are looking for.
																												</p>
																												<router-link to="/stage2" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(3)">next</div>
												</div>
												<div id="bg-image" class="section bg-tablet-smiling" data-index="3">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<!-- <StageLines /> -->
																								<div class="col-md-9 col-sm-11 col-xs-12 offset-sm-1 no-left-pad top-pad-200 fadeInAnimation fade-opacity-3">
																												<div class="stage-stroke mobile">_</div>
																												<div class="section-title mobile">stage 3</div>
																												<h2>
																																Capitalize on opportunities to convert
																												</h2>
																												<p>
																																Customers come to you because they have problems. You solve those problems. But what if you could anticipate and solve the problems they don’t yet realize they have?
																												</p>
																												<router-link to="/stage3" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(4)">next</div>
												</div>
												<div id="bg-image" class="section bg-crowd-2" data-index="4">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<!-- <StageLines /> -->
																								<div class="col-md-9 col-sm-11 col-xs-12 offset-sm-1 no-left-pad top-pad-200 fadeInAnimation fade-opacity-4">
																												<div class="stage-stroke mobile">_</div>
																												<div class="section-title mobile">stage 4</div>
																												<h2>
																																Deliver relationship sales at scale
																												</h2>
																												<p>
																																Customers come to you because they have problems. You solve those problems. But what if you could anticipate and solve the problems they don't yet realize they have?
																												</p>
																												<router-link to="/stage4" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(5)">next</div>
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
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(6)">next</div>
												</div>
												<div class="section fp-auto-height grey-bg relative btm-pad-footer" data-index="6">
																<div class="row justify-content-center no-lr-margin fadeInAnimation fade-opacity-6">
																				<div class="col-xl-10 col-lg-10 col-md-10 col-sm-12">
																								<h2 class="top-pad-lg btm-pad-sm">
																												Personalizing sales relationships can lead to better opportunities—and more sales—for your business.
																								</h2>
																								<p class="size-md">
																												Learn more here, or connect with a representative when you're ready to try out Dynamics 365 for Sales.
																								</p>
																				</div>
																</div>
																<div class="row justify-content-center no-lr-margin fadeInAnimation fade-opacity-6">
																				<div class="col-lg-5 col-md-5 col-sm-12 top-pad-lg btm-pad-lg">
																								<a class="btn dark-btn white-txt" href="">Learn More</a>
																				</div>
																				<div class="col-lg-5 col-md-5 col-sm-12 top-pad-lg btm-pad-xls">
																								<a class="btn dark-btn white-txt" href="">Try out Dynamics 365 for Sales</a>
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
// import StageLines from '../components/StageLines.vue';
// import FullPage from 'FullPage';
import VueFullPage from 'vue-fullpage.js'

export default {
				data() {
								return {
												options: {
																fadingEffect: true,
																scrollBar: true,
																afterLoad: function(origin, destination, direction) {

																				var landingHeader = document.querySelectorAll('.landing-element');
																				if (landingHeader) {
																								for (var i = 0; i < landingHeader.length; ++i) {
																												landingHeader[i].classList.add('fade-visible');
																								}
																				}
																				var slideRight = document.querySelectorAll('.slide-in');
																				if (slideRight) {
																								for (var i = 0; i < slideRight.length; ++i) {
																												slideRight[i].classList.remove('slide-in-right');
																								}
																				}
																},
																onLeave: function(origin, destination, direction) {


																				if (destination.index) {




																								var sectionName = '.fade-opacity-' + destination.index;
																								var opacity = document.querySelectorAll(sectionName);

																								for (var i = 0; i < opacity.length; ++i) {

																												opacity[i].classList.add('fade-visible');
																								}

																								if (destination.index == 6) {
																												document.getElementById('stage-line-container').style.pointerEvents = 'none';
																								} else {
																												document.getElementById('stage-line-container').style.pointerEvents = 'auto';
																								}





																				} else {

																								document.getElementById('stage-line-container').style.pointerEvents = 'none';


																				}


																				let elem = document.querySelector(".fp-table.active");

																				let indexElem = destination.index - 1;

																				let stageBox;
																				stageBox = document.querySelectorAll('.stage-box');
																				for (var i = 0; i < stageBox.length; ++i) {
																								stageBox[i].classList.remove('phase--1', 'phase-0', 'phase-1', 'phase-2', 'phase-3', 'phase-4', 'phase-5', 'phase-6');

																								stageBox[i].classList.add('phase-' + indexElem);

																								if (indexElem == -1 || indexElem == 5) {

																												document.getElementById('stage-line').classList.add('nostroke');
																								} else {
																												document.getElementById('stage-line').classList.remove('nostroke');
																								}
																				}



																}
												}
								}
				},
				components: {
								VueFullPage,
								HeaderModule
								// StageLines
				},
				methods: {
								burger: function(event) {
												var navbar = document.querySelector('.navbar');
												navbar.classList.toggle('expanded');
								},
								openMe: function(index) {

												var downArrrow = document.querySelectorAll('.down-arrow');
												downArrrow.classList.add('paused');

												let elem = document.querySelector(".fp-table.active");
												let indexElem = destination.index - 1;
												let stageBox;
												stageBox = document.querySelectorAll('.stage-box');
												for (var i = 0; i < stageBox.length; ++i) {
																stageBox[i].classList.remove('phase--1', 'phase-0', 'phase-1', 'phase-2', 'phase-3', 'phase-4', 'phase-5', 'phase-6');

																stageBox[i].classList.add('phase-' + indexElem);

																console.log(indexElem);
																if (indexElem == -1 || indexElem == 5) {
																				console.log(indexElem);
																				document.getElementById('stage-line').classList.add('nostroke');
																} else {
																				document.getElementById('stage-line').classList.remove('nostroke');
																}
												}

								},
								landingFadeIn: function() {

												// var landingHeader = document.querySelectorAll('.landing-element');
												// for (var i = 0; i < landingHeader.length; ++i) {
												// 				landingHeader[i].classList.add('fade-visible');
												// }

												// var slideRight = document.querySelectorAll('.slide-in');
												// for (var i = 0; i < slideRight.length; ++i) {
												// 				slideRight[i].classList.remove('slide-in-right');
												// }


								}

				}

}

</script>
