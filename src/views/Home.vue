<template>
				<div>
								<div class="background-slide slide-0 bg-iphone" style="opacity:1;position:fixed;">image</div>
								<div class="background-slide slide-1 bg-iphone" style="opacity:1;position:fixed;">image</div>
								<div class="background-slide slide-2 bg-tablet-smiling" style="opacity:1;position:fixed;">image</div>
								<div class="background-slide slide-3 bg-crowd-2" style="opacity:1;position:fixed;">image</div>
								<div class="background-slide slide-4 bg-view" style="opacity:1;position:fixed;">image</div>
								<div class="background-slide slide-5 bg-iphone" style="opacity:1;position:fixed;">image</div>
								<div class="background-slide slide-6 bg-sunset" style="opacity:1;position:fixed;">image</div>
								<div v-bind:class="'content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0 down-arrow-global visibility'+count" style="background:transparent;width: 100%;height: 100px;position: fixed;bottom: 0;z-index: 100;">
												<a id="navigation:in-page-scroll-to-next-section" class="bottom-fix next down-arrow dark animated bounce" @click="$refs.fullpage.api.moveSectionDown()">next
														
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 17">
	<g data-name="Layer 2">
		<g id="Text">
			<path d="M.36,2.05l14.8,14.6a1.2,1.2,0,0,0,1.68,0l14.8-14.6A1.2,1.2,0,0,0,30,.35L16,14.11,2,.35A1.19,1.19,0,0,0,.35.36a1.18,1.18,0,0,0,0,1.69Z" class="arrow-variant--white arrow-path"></path>
		</g>
	</g>
</svg>
																
												</a>
								</div>
								<div style="height:0;">
												<div id="stage-line-container" class="col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0 stage-container">
																<div id="stage-line" v-bind:class="'container offset-md-1 stage-line stage-line-border no-pad relative stroke-'+count">
																				<div v-bind:class="'stage-box phase-4'">
																								<a class="stage stage-1">
																												<div class="stage-stroke transparent">_</div>
																												<div class="stage-name"></div>
																								</a>
																								<a class="stage stage-1">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name"></div>
																								</a>
																								<a id="navigation:in-page-scroll-to-section-1" class="stage stage-1" @click="$refs.fullpage.api.moveTo(2)">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name stage-name-1">
																																<!-- <span>stage 1</span> -->
																												</div>
																								</a>
																								<a id="navigation:in-page-scroll-to-section-2" class="stage stage-2" @click="$refs.fullpage.api.moveTo(3)">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name stage-name-2">
																																<!-- <span>stage 2</span> -->
																												</div>
																								</a>
																								<a id="navigation:in-page-scroll-to-section-3" class="stage stage-3" @click="$refs.fullpage.api.moveTo(4)">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name stage-name-3">
																																<!-- <span>stage 3</span> -->
																												</div>
																								</a>
																								<a id="navigation:in-page-scroll-to-section-4" class="stage stage-4" @click="$refs.fullpage.api.moveTo(5)">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name stage-name-4">
																																<!-- <span>stage 4</span> -->
																												</div>
																								</a>
																								<a id="navigation:in-page-scroll-to-section-5" class="stage stage-5" @click="$refs.fullpage.api.moveTo(6)">
																												<div class="stage-stroke">_</div>
																												<div class="stage-name stage-name-5">
																																<!-- <span>sales story</span> -->
																												</div>
																								</a>
																				</div>
																</div>
												</div>
								</div>
								<full-page ref="fullpage" :options="options">
												<div id="bg-image" class="section bg-home" data-index="0">
																<HeaderModule />
																<div class="container relative" style="">
																				<div style="position: absolute;width: 100%;height: 100%;z-index: 1;">
																								<div class="row justify-content-center">
																												<div class="col-lg-10 col-md-12">
																																<h1 class="top-pad-xl landing-element">
																																				The savvy sales leader’s guide to building profitable relationships
																																</h1>
																												</div>
																								</div>
																				</div>
																</div>
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0" style="background: transparent;">
																				<div class="white-transparent" style="position: absolute;bottom: 0px;height: 60vh;margin-left: -15px;">
																								<div class="container offset-md-1 stage-line-border no-pad relative">
																												<div class="col-md-10 col-sm-11 col-xs-12 top-pad-xl fadeInAnimation">



<!-- 
																																<div class="stage-stroke mobile">_</div> -->
																																<div class="section-title mobile">stage 1</div>
																																<h2 class="green-text">
																																Use relationship selling to connect with customers and accelerate sales
																																</h2>
																																<p>
																						If every one of your connections turned to you for help in solving their greatest challenges at every stage of the sales journey, what would that do to your bottom line?
																																</p>




																<router-link id="url:overview-page" to="/overview" class="btn dark-btn">LEARN MORE</router-link>


																																<!-- <router-link id="url:overview-page" to="/overview" class="btn dark-btn-border">LEARN MORE</router-link> -->
																												</div>
																								</div>
																								<a style="display: none;" id="navigation:in-page-scroll-to-next-section" class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()">next
																												<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.54 19.8">
																																<g id="Layer_2" data-name="Layer 2">
																																				<g id="content">
																																								<polygon class="cls-1" points="16.27 19.8 0 3.54 3.54 0 16.27 12.73 29 0 32.54 3.54 16.27 19.8" />
																																				</g>
																																</g>
																												</svg>
																								</a>
																				</div>
																</div>
												</div>
												<div id="bg-image" class="section blue-bg" data-index="1">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<div class="col-md-9 col-sm-11 col-xs-12 offset-sm-1 no-left-pad top-pad-110 fadeInAnimation">
																												<div class="stage-stroke mobile">_</div>
																												<div class="section-title mobile">stage 1</div>
 																											<span>STAGE 1</span>
																											<h2 class="top-pad-110 no-left-pad">
																																Identify the right leads
																												</h2>
																												<p>
																																Identifying and creating natural ways to foster
																																and maintain professional relationships leads
																																to deeper connections, long-term loyalty, and
																																trust—and that trust translates to healthy sales.
																												</p>
																												<router-link id="url:stage-1-page" to="/stage1" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																				<a style="display: none;" id="navigation:in-page-scroll-to-next-section" class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()">next
																								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.54 19.8">
																												<g id="Layer_2" data-name="Layer 2">
																																<g id="content">
																																				<polygon class="cls-1" points="16.27 19.8 0 3.54 3.54 0 16.27 12.73 29 0 32.54 3.54 16.27 19.8" />
																																</g>
																												</g>
																								</svg>
																				</a>
																</div>
												</div>
												<div id="bg-image" class="section blue-bg" data-index="2">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<div class="col-md-9 col-sm-11 col-xs-12 offset-sm-1 no-left-pad top-pad-110">
																												<div class="stage-stroke mobile">_</div>
																												<div class="section-title mobile">stage 2</div>
																												<span>STAGE 2</span>
																											<h2 class="top-pad-110 no-left-pad">
																																Nurture leads and build relationships
																												</h2>
																												<p>
																																Working on a relationship is a continuous
																																cycle. It’s not enough to connect with the
																																ideal leads; those prospects must be wooed.
																																In sales, that means providing the value your
																																educated buyers are looking for.
																												</p>
																												<router-link id="url:stage-2-page" to="/stage2" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																				<a style="display:none;" id="navigation:in-page-scroll-to-next-section" class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()">next
																								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.54 19.8">
																												<g id="Layer_2" data-name="Layer 2">
																																<g id="content">
																																				<polygon class="cls-1" points="16.27 19.8 0 3.54 3.54 0 16.27 12.73 29 0 32.54 3.54 16.27 19.8" />
																																</g>
																												</g>
																								</svg>
																				</a>
																</div>
												</div>
												<div id="bg-image" class="section blue-bg" data-index="3">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<div class="col-md-9 col-sm-11 col-xs-12 offset-sm-1 no-left-pad top-pad-110">
																												<div class="stage-stroke mobile">_</div>
																												<div class="section-title mobile">stage 3</div>
																												<span>STAGE 3</span>
																											<h2 class="top-pad-110 no-left-pad">
																																Capitalize on opportunities to convert
																												</h2>
																												<p>
																																Customers come to you because they have
																																problems. You solve those problems. But
																																what if you could anticipate and solve the
																																problems they don’t yet realize they have?
																												</p>
																												<router-link id="url:stage-3-page" to="/stage3" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																				<a style="display:none;" id="navigation:in-page-scroll-to-next-section" class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()">next
																								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.54 19.8">
																												<g id="Layer_2" data-name="Layer 2">
																																<g id="content">
																																				<polygon class="cls-1" points="16.27 19.8 0 3.54 3.54 0 16.27 12.73 29 0 32.54 3.54 16.27 19.8" />
																																</g>
																												</g>
																								</svg>
																				</a>
																</div>
												</div>
												<div id="bg-image" class="section blue-bg" data-index="4">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<div class="col-md-9 col-sm-11 col-xs-12 offset-sm-1 no-left-pad top-pad-110">
																												<div class="stage-stroke mobile">_</div>
																												<div class="section-title mobile">stage 4</div>
																												<span>STAGE 4</span>
																											<h2 class="top-pad-110 no-left-pad">
																																Deliver relationship sales at scale
																												</h2>
																												<p>
																																You have prospect data.
																																Lots of it. And you’re collecting
																																it every second of every day.
																												</p>
																												<router-link id="url:stage-4-page" to="/stage4" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																				<a style="display:none;" id="navigation:in-page-scroll-to-next-section" class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()">next
																								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.54 19.8">
																												<g id="Layer_2" data-name="Layer 2">
																																<g id="content">
																																				<polygon class="cls-1" points="16.27 19.8 0 3.54 3.54 0 16.27 12.73 29 0 32.54 3.54 16.27 19.8" />
																																</g>
																												</g>
																								</svg>
																				</a>
																</div>
												</div>
												<div id="bg-image" class="section blue-bg" data-index="5">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																						
																								<div class="col-md-9 col-sm-11 col-xs-12 offset-sm-1 no-left-pad top-pad-110">
																												<div class="stage-stroke mobile">_</div>
																												<div class="section-title mobile">sales story</div>
																												<span>SALES STORY</span>
																											<h2 class="top-pad-110 no-left-pad">
																																The view’s better from here
																												</h2>
																												<p>
																																Relationship selling works at every stage of the sales process—from identifying key prospects to nurturing them, building relationships, and capitalizing on opportunities to convert them to sales. And it can be done at scale, so there are no limits to where your sales career can take you.
																												</p>
																												<router-link id="url:sales-story-page" to="/salesstory" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																				<a style="display:none;" id="navigation:in-page-scroll-to-next-section" class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()">next
																								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.54 19.8">
																												<g id="Layer_2" data-name="Layer 2">
																																<g id="content">
																																				<polygon class="cls-1" points="16.27 19.8 0 3.54 3.54 0 16.27 12.73 29 0 32.54 3.54 16.27 19.8" />
																																				y </g>
																												</g>
																								</svg>
																				</a>
																</div>
												</div>
												<div class="section grey-bg relative" data-index="6">
																<div class="row justify-content-center no-lr-margin fadeInAnimation footer-fade-pad">
																				<div class="col-xl-10 col-lg-10 col-md-10 col-sm-12 footer-fade-pad">
																								<h2 class="top-pad-lg btm-pad-sm">
																												Personalizing sales relationships can lead to better opportunities—and more sales—for your business.
																								</h2>
																								<p class="size-md">
																							Watch our videos to learn more about the Microsoft Relationship Sales solution.
																								</p>



					<a id="url:external-watch-videos-now" class="btn dark-btn white-txt" href="https://dynamics.microsoft.com/en-us/sales/demo/" target="_blank">WATCH NOW</a>



																				</div>
																</div>
																<div class="row justify-content-center no-lr-margin fadeInAnimation">
																		<!-- 		<div class="col-lg-5 col-md-5 col-sm-12 top-pad-lg btm-pad-lg">
																								<a id="url:external-learn-more" class="btn dark-btn white-txt" href="" target="_blank">Learn more</a>
																				</div>
																				<div class="col-lg-5 col-md-5 col-sm-12 top-pad-lg btm-pad-xls">
																								<a id="url:external-try-it-out" class="btn dark-btn white-txt" href="https://dynamics.microsoft.com/en-us/get-started/?appname=sales" target="_blank">Request a demo</a>
																				</div> -->
																</div>
																<a id="navigation:in-page-scroll-to-top" class="moveToTop" @click="$refs.fullpage.api.moveTo(1)">return to top
																				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
																								<symbol id="Arrow-Circle-Up" viewBox="-16 -16 32 32">
																												<path class="st0" d="M-15.98,0.75c-0.41-8.83,6.41-16.32,15.24-16.73S15.57-9.57,15.98-0.75S9.57,15.57,0.75,15.98
		C-8.08,16.39-15.57,9.57-15.98,0.75z M8.57,0.99L7.16-0.43L0.7,6.03L0.74-9.85l-2.01,0l0.01,15.9l-6.4-6.4l-1.41,1.41l8.78,8.78
		L8.57,0.99z" />
																												<polygon class="st1" points="-7.66,-0.35 -1.26,6.05 -1.27,-9.85 0.74,-9.85 0.7,6.03 7.16,-0.43 8.57,0.99 -0.29,9.85 -9.07,1.07" />
																								</symbol>
																								<use xlink:href="#Arrow-Circle-Up" width="32" height="32" id="XMLID_1_" x="-16" y="-16" transform="matrix(1 0 0 -1 16.0003 16.0003)" style="overflow:visible;" />
																				</svg>
																</a>


																<DownloadSlider />
																<UniversalFooter />
												</div>
								</full-page>
				</div>
</template>
<script>
import '../fullpage.fadingEffect.min'


import UniversalFooter from '../components/UniversalFooter'
import HeaderModule from '../components/HeaderModule'
import DownloadSlider from '../components/DownloadSlider'

export default {
				data() {

								return {
												options: {
																licenseKey: 'F747FF40-5C8F4AA6-90091DEC-9F6B7E17',
																fadingEffect: false,
																fadingEffectKey: 'bmV0bGlmeS5jb21fem5XWm1Ga2FXNW5SV1ptWldOMDB2OA==',
																scrollBar: false,
																autoScroll: false,
																// autoScrolling:true,
																afterLoad: this.afterLoad,
																onLeave: this.onLeave
												},
												count: -1
								}

				},
				components: {

								UniversalFooter,
								HeaderModule,
								DownloadSlider
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
								onLeave: function(origin, destination) {


					



if(!destination.index == 1){
						this._data.count = destination.index - 1;
			}




									if(destination.index == 0){
										document.querySelector('.stage-box').style.opacity = 0;
									}else{
											document.querySelector('.stage-box').style.opacity = 1;
									}

												document.querySelector('.background-slide.slide-0').style.opacity = 0;
												document.querySelector('.background-slide.slide-1').style.opacity = 0;
												document.querySelector('.background-slide.slide-2').style.opacity = 0;
												document.querySelector('.background-slide.slide-3').style.opacity = 0;
												document.querySelector('.background-slide.slide-4').style.opacity = 0;
												document.querySelector('.background-slide.slide-5').style.opacity = 0;
												document.querySelector('.background-slide.slide-6').style.opacity = 0;
												document.querySelector('.background-slide.slide-' + destination.index).style.opacity = 1;
												document.querySelector('.down-arrow-global').style.opacity = 0;
								},

								afterLoad: function(origin, destination) {




						this._data.count = destination.index - 1;

		

												document.querySelector('.down-arrow-global').style.opacity = 1;

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
																slideIn.classList.add('expanded-10');
												}

												let slideIn2 = document.querySelector('.rect-bar-10.two');
												if (slideIn2) {
																slideIn2.classList.add('expanded-50');
												}

												let slideIn3 = document.querySelector('.rect-bar-10.three');
												if (slideIn3) {
																slideIn3.classList.add('expanded-33');
												}


												let slideIn4 = document.querySelector('.rect-bar-10.four');
												if (slideIn4) {
																slideIn4.classList.add('expanded-50');
												}

												let slideIn5 = document.querySelector('.rect-bar-10.five');
												if (slideIn5) {
																slideIn5.classList.add('expanded-50');
												}

												let slideIn6 = document.querySelector('.rect-bar-10.six');
												if (slideIn6) {
																slideIn6.classList.add('expanded-50');
												}

												let slideIn7 = document.querySelector('.rect-bar-10.seven');
												if (slideIn7) {
																slideIn7.classList.add('expanded-50');
												}

												let slideIn8 = document.querySelector('.rect-bar-10.eight');
												if (slideIn8) {
																slideIn8.classList.add('expanded-50');
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

	

								}



				}

}

</script>
