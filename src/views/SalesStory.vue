<template>
				<div>
								<HeaderModule />
								<section class="stage-section btm-pad-xxl">
												<div class="container">
																<div class="row top-pad-xl">
																				<div class="col-xl-10 col-lg-12 col-md-12 offset-lg-0 offset-md-0 offset-xl-1 relative">
																								<span class="section-title">sales story</span>
																								<BurgerMenu />
																				</div>
																</div>
																<div class="row">
																				<div class="col-xl-5 col-lg-10 col-md-12 offset-lg-1 offset-md-0">
																								<h1 class="top-pad-sm">
																														The views better from here
																								</h1>
																				</div>
																</div>
																<div class="row justify-content-center">
																				<div class="col-xl-5 col-lg-10 col-md-12 top-pad-xl">
																								<p>Relationship selling powered by tech</p>
																								<p>
																									Relationship selling works at every stage of the sales process—from identifying key prospects to nurturing them, building relationships, and capitalizing on opportunities to convert them to sales. And it can be done at scale, so there are no limits to where your sales career can take you.
																									</p>
																				</div>
																</div>
												</div>
								</section>
								<section class="relative">
												<div class="container no-pad">
																<div class="row no-margin">
																				<div id="bg-image" class="col-md-6 bg-grass btm-pad-xxl text-center" style="text-align: center;">
				<img src="../assets/img/1-to-17.svg" alt="1-17" style="width: 300px;height: 300px;margin: 0 auto;">

																				</div>
																				<div class="col-md-6 dk-grey-bg btm-pad-xxl">
																								<div class="container">
																												<div class="row justify-content-center no-margin">
																																<div class="col-lg-10"><div class="mint-text-block">
																																	

Microsoft Dynamics 365 delivers $16.97 for ever dollar spent

																																</div><div class="underline-text-block">
																					Nucleus Report
																																				</div>
																																		
																																</div>
																												</div>
																								</div>
																				</div>
																</div>
												</div>
												<div class="bottom-fix next down-arrow" v-on:click="scrollToNext('nextSection')">next</div>
								</section>
								<section id="nextSection">
												<div class="container no-pad">
																<div class="row no-margin">
																				<div class="col-md-7 light-grey-bg btm-pad-xxl">
																								<div class="container">
																												<div class="row justify-content-center no-margin">
																																<div class="col-lg-10">
																																				<h2 class="top-pad-xl">
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
																																				<p>
																																							Once Tomas connects with Jamie, he receives insight about her key needs. As he builds a trusted relationship with her, predictive intelligence lets him know where he stands with the account so he can choose the right moments to engage. And as Jamie’s trust in Tomas and his company grows, she feels comfortable introducing Tomas to the other four contacts on her company’s buying committee. He begins tracking each buyer throughout the lifecycle of the account to deliver relevant content that builds trust. As Tomas continues to add connections and build relationships, a guided sales process helps him manage all these complex relationships without losing productivity.
																																				</p>
																																				<p>
																																						Productivity software coupled with machine learning and predictive analytics tells an entire story that helps Tomas keep his relationship data in sync and provides information that drives contextual learning and recommendations.
																																				</p>

																																</div>
																												</div>
																								</div>
																				</div>
																				<div class="col-md-5 bg-silhouette btm-pad-xxl">
																								<div class="container">
																												<div class="row justify-content-center no-margin">
																									
																												</div>
																								</div>
																				</div>
																</div>
												</div>
								</section>
								<section class="grey-bg">
												<div class="row justify-content-center no-margin">
																<div class="col-lg-8 col-md-8">
																								<h2 class="top-pad-lg btm-pad-sm">
Ready to catapult your sales career?
																				</h2>
																								<p class="size-md">
																									<a href="">
See how Microsoft Dynamics 365 for Sales can launch more profitable relationships.
																									</a>
																							</p>
																					
																</div>
												</div>
												<div class="row justify-content-center no-margin">
																<div class="col-lg-4 col-md-12 top-pad-lg btm-pad-xl"><a href="See how Microsoft Dynamics 365 for Sales can launch more profitable relationships." class="btn dark-btn white-txt">Learn More</a></div>
																<div class="col-lg-4 col-md-12 top-pad-lg btm-pad-xl"><a href="https://dynamics.microsoft.com/en-us/get-started/?appname=sales" class="btn dark-btn white-txt">Try it out</a></div>
												</div>
												<div class="moveToTop" v-on:click="scrollToTop">return to top</div>
								</section>
				</div>
</template>
<script>
import HeaderModule from '../components/HeaderModule.vue';
import BurgerMenu from '../components/BurgerMenu.vue';
export default {
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
								},
								scrollToTop: function() {
												window.scroll({
																behavior: 'smooth',
																left: 0,
																top: 0
												});
								}
				}
}

</script>
