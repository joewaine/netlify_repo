<template>
				<div>
								<full-page ref="fullpage" :options="options">
												<div class="section stage-section btm-pad-xxl fp-auto-height" data-index="0">
																<HeaderModule />
																<div class="container">
																				<div class="row top-pad-xl stage-header">
																								<div class="col-xl-10 col-lg-12 col-md-12 offset-lg-0 offset-md-0 offset-xl-1 relative">
																												<span class="section-title slide-in slide-in-right">sales story</span>
																												<BurgerMenu />
																								</div>
																				</div>
																				<div class="row">
																								<div class="col-xl-5 col-lg-10 col-md-12 offset-lg-1 offset-md-0">
																												<h1 class="top-pad-sm landing-element">
																																The views better from here
																												</h1>
																								</div>
																				</div>
																				<div class="row justify-content-center">
																								<div class="col-xl-5 col-lg-10 col-md-12 top-pad-xl landing-element">
																												<p>Relationship selling powered by tech</p>
																												<p>
																																Relationship selling works at every stage of the sales process—from identifying key prospects to nurturing them, building relationships, and capitalizing on opportunities to convert them to sales. And it can be done at scale, so there are no limits to where your sales career can take you.
																												</p>
																								</div>
																				</div>
																</div>
												</div>
												<div class="section container no-pad fp-auto-height" data-index="1">
																<div class="container no-pad">
																				<div class="row no-margin">
																								<div id="bg-image" class="col-md-6 col-sm-12 bg-grass btm-pad-xxl text-center" style="text-align: center;">
																												<svg width="200" height="33.33%" style="position: absolute;top: 0;right: 0px;">
																																<rect width="200" height="100%" style="fill: rgb(60,60,65); stroke-width: 0; stroke: rgb(0, 0, 0);"></rect>
																												</svg><svg width="10" height="33.33%" style="position: absolute;top: 33.33%;right: 0px;">
																																<rect width="10" height="100%" style="fill: rgb(60,60,65); stroke-width: 0; stroke: rgb(0, 0, 0);"></rect>
																												</svg><svg width="80" height="33.33%" style="position: absolute;top: 66.66%;right: 0px;">
																																<rect width="80" height="100%" style="fill: rgb(60,60,65); stroke-width: 0; stroke: rgb(0, 0, 0);"></rect>
																												</svg>
																												<img src="../assets/img/1-to-17.svg" alt="1-17" style="width: 300px; height: 300px; margin: 60px auto 0;">
																								</div>
																								<div class="col-md-6 col-sm-12 dk-grey-bg btm-pad-xxl overflow-x-hidden">
																												<div class="container">
																																<div class="row justify-content-center no-margin">
																																				<div class="col-lg-10 slide-in-1 slide-in-left">
																																								<div class="mint-text-block top-pad-xl col-lg-8">
																																												Microsoft Dynamics 365 delivers $16.97 for every dollar spent
																																								</div>
																																								<div class="underline-text-block">
																																												Nucleus Report
																																								</div>
																																				</div>
																																</div>
																												</div>
																								</div>
																				</div>
																</div>
																<div class="bottom-fix next down-arrow animated bounce" v-on:click="scrollToNext('nextSection')">next</div>
												</div>
												<div id="nextSection" class="section fp-auto-height" data-index="2">
																<div class="container no-pad">
																				<div class="row no-margin">
																								<div class="col-lg-7 col-md-12 light-grey-bg btm-pad-xxl">
																												<div class="container no-pad-mobile">
																																<div class="row justify-content-center no-margin fadeInAnimation fade-opacity-2">
																																				<div class="col-lg-10 no-pad-mobile">
																																								<h2 class="top-pad-lg">
																																												<span>
																																																Let’s look at an example of how relationship selling drives sales.
																																												</span>
																																								</h2>
																																								<p class="top-pad-lg">
																																												Tomas is a sales rep for a lawn care equipment manufacturer. His customers include retailers, dealers, and lawn care service providers in the Midwest. To reach his quarterly quota, Tomas needs one more large order. Instead of spending hours searching for the right leads online, Tomas uses the advanced search tool on LinkedIn to quickly locate Jamie, a valuable lead at a lawn care company in Kansas City
																																								</p>
																																								<p>
																																												Rather than cold calling her, he receives a referral from a colleague who’s connected with Jamie. And he relies on recommendations based on predictive analytics to determine the best time and day to reach out to her.
																																								</p>
																																								<p class="extra">
																																												Once Tomas connects with Jamie, he receives insight about her key needs. As he builds a trusted relationship with her, predictive intelligence lets him know where he stands with the account so he can choose the right moments to engage. And as Jamie’s trust in Tomas and his company grows, she feels comfortable introducing Tomas to the other four contacts on her company’s buying committee. He begins tracking each buyer throughout the lifecycle of the account to deliver relevant content that builds trust. As Tomas continues to add connections and build relationships, a guided sales process helps him manage all these complex relationships without losing productivity.
																																								</p>
																																								<p class="extra">
																																												Productivity software coupled with machine learning and predictive analytics tells an entire story that helps Tomas keep his relationship data in sync and provides information that drives contextual learning and recommendations.
																																								</p>
																																								<span class="show-hide dark visible" v-on:click="toggleContent">
																																												<span class="show">read more +</span>
																																												<span class="hide">read less -</span>
																																								</span>
																																				</div>
																																</div>
																												</div>
																								</div>
																								<div class="col-lg-5 col-md-12 bg-silhouette btm-pad-xxl mobile-image">
																												<div class="container">
																																<div class="row justify-content-center no-margin">
																																</div>
																												</div>
																								</div>
																				</div>
																</div>
												</div>
												<div class="section grey-bg relative fp-auto-height overflow-hidden" data-index="3">
																<div class="row justify-content-center no-lr-margin fadeInAnimation fade-opacity-3">
																				<div class="col-lg-8 col-md-10 col-sm-12">
																								<h2 class="top-pad-lg btm-pad-sm">
																												Personalizing sales relationships can lead to better opportunities—and more sales—for your business.
																								</h2>
																								<p class="size-md">
																												Learn more here, or connect with a representative when you're ready to try out Dynamics 365 for Sales.
																								</p>
																				</div>
																</div>
																<div class="row justify-content-center no-lr-margin fadeInAnimation fade-opacity-3">
																				<div class="col-lg-4 col-md-5 col-sm-12 top-pad-lg btm-pad-xl">
																								<a class="btn dark-btn white-txt" href="">Learn More</a>
																				</div>
																				<div class="col-lg-4 col-md-5 col-sm-12 top-pad-lg btm-pad-xl">
																								<a class="btn dark-btn white-txt" href="">Try out Dynamics 365 for Sales</a>
																				</div>
																</div>
																<div class="moveToTop" @click="scrollToTop">return to top</div>
												</div>
								</full-page>
				</div>
</template>
<script>
import HeaderModule from '../components/HeaderModule.vue';
import BurgerMenu from '../components/BurgerMenu.vue';
import VueFullPage from 'vue-fullpage.js';


export default {


				data() {
								return {
												options: {
																autoScrolling: false,
																scrollBar: false,
																fitToSection: false,

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

																								if (opacity) {
																												for (var i = 0; i < opacity.length; ++i) {
																																opacity[i].classList.add('fade-visible-2');
																												}
																								}


																								var sectionName2 = '.slide-in-' + destination.index;
																								var slideLeft = document.querySelector(sectionName2);
																								if (slideLeft) {
																												slideLeft.classList.remove('slide-in-left');
																								}
																				}
																}
												},

												image1: "/img/square/iphone-square.jpg",
												image2: "/img/square/sunset-square.jpg",
												image3: "/img/square/tablet-smiling-square.jpg",
												image4: "/img/square/crowd-2-square.jpg",
												image5: "/img/square/view-square.jpg",
												image6: "/img/square/iphone-square.jpg"

								}
				},

				name: 'App',
				components: {
								HeaderModule,
								BurgerMenu
				},
				methods: {
								scrollToNext: function(element) {
												window.scroll({
																behavior: 'smooth',
																left: 0,
																top: document.getElementById(element).offsetTop
												});

												var downArrrow = document.querySelector('.down-arrow');
												downArrrow.classList.add('paused');

								},
								scrollToTop: function() {
												window.scroll({
																behavior: 'smooth',
																left: 0,
																top: 0
												});
								},
								toggleContent: function() {
												var extra = document.querySelector('.extra');
												extra.classList.toggle('visible');


												var showHide = document.querySelector('.show-hide');
												showHide.classList.toggle('visible');



								}
				}
}

</script>
