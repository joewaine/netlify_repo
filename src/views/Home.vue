<template>
				<div>
							<StageLines />
								<full-page ref="fullpage" :options="options">
												<div class="section grey-bg" data-anchor="section" data-index="0">
																<HeaderModule />
																<div class="container">
																				<div class="row justify-content-center">
																								<div class="col-lg-8 col-md-12">
																												<h1 class="top-pad-lg">
																																The savvy sales leader’s guide to building profitable relationships
																												</h1>
																								</div>
																				</div>
																				<div class="row justify-content-center">
																								<div class="col-lg-4 col-md-12 top-pad-lg">
																												<h3>
																																Use relationship selling to connect with customers and accelerate sales
																												</h3>
																								</div>
																								<div class="col-lg-4 col-md-12 top-pad-lg">
																												<p>
																																Imagine having a relationship with each of your customers—a relationship that’s built on trust.
																												</p>
																												<p>
																																If every one of your connections turned to you for help in solving their greatest challenges at every stage of the sales journey, what would that do to your bottom line? If you could provide every new prospect with relevant, useful insights that would make them more successful, how would your sales goals change?
																												</p>
																												<p>
																																A new model is emerging on the sales landscape. The entire process looks vastly different from how it looked just a few years ago. Although that’s partly because of constantly evolving tools and technologies, the greater difference is in the mindsets of buyers. Understanding that mindset and catering to it is what catapults a successful seller into rock-star seller status.
																												</p>
																												<!-- 																								<p>
																													While this shift brings new possibilities, every stage of the selling process is also rife with new challenges. Greater access means more noise. Countless resources make it difficult to bring real value. These are just a few of the challenges you’re most likely experiencing as a seller today. As the landscape shifts, you can stay ahead by adopting a relationship selling mindset.
																												</p>
																												<p>
																													Relationship selling refers to the process of building long-term relationships with your customers—relationships that will lead to future sales. It requires rethinking the way you communicate as a seller—not just the tools used, but the way you use those tools to reach out, engage, and develop deeper connections
																												</p> -->
																												<router-link to="/overview" class="btn">LEARN MORE</router-link>
																								</div>
																				</div>
																				<div class="bottom-fix next down-arrow" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(1)">next</div>
																</div>
												</div>
												<div id="bg-image" class="section bg-iphone" data-anchor="section2" data-index="1">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<!-- <StageLines /> -->
																								<div class="col-sm-9 offset-sm-1 no-left-pad top-pad-200">
																												<h2>
																																Nurture leads and build relationships
																												</h2>
																												<p>
																																Identifying and creating natural ways to foster and maintain professional relationships leads to deeper connections, long-term loyalty, and trust. And trust translates to healthy sales. At this first stage of the sales journey, you’re intent on identifying new prospects. Not just any prospects, but those who are able to make purchase decisions for their company.
																												</p>
																												<router-link to="/stage1" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(2)">next</div>
												</div>
												<div id="bg-image" class="section bg-sunset" data-anchor="section3" data-index="2">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<!-- <StageLines /> -->
																								<div class="col-sm-9 offset-sm-1 no-left-pad top-pad-200">
																												<h2>
																																Capitalize on opportunities to convert
																												</h2>
																												<p>
																																Working on a relationship is a continuous cycle. It’s not enough to connect with the ideal leads; those prospects must be wooed. In sales, that means providing the value your educated buyers are looking for. Imagine what your end-of-the-month reports would look like if you could anticipate the needs of every connection and deliver real value—in the form of useful information that drives business forward—to every customer.
																												</p>
																												<router-link to="/stage2" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(3)">next</div>
												</div>
												<div id="bg-image" class="section bg-tablet-smiling" data-anchor="section4" data-index="3">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<!-- <StageLines /> -->
																								<div class="col-sm-9 offset-sm-1 no-left-pad top-pad-200">
																												<h2>
																																Deliver relationship sales at scale
																												</h2>
																												<p>
																																Customers come to you because they have problems. You solve those problems. But what if you could anticipate and solve the problems they don’t yet realize they have? Relationship selling focuses on listening to your prospects and customers and recognizing opportunities.
																												</p>
																												<router-link to="/stage3" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(4)">next</div>
												</div>
												<div id="bg-image" class="section bg-crowd-2" data-anchor="section5"  data-index="4">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<!-- <StageLines /> -->
																								<div class="col-sm-9 offset-sm-1 no-left-pad top-pad-200">
																												<h2>
																																The view’s better from here
																												</h2>
																												<p>
																																Relationship selling works at every stage of the sales process—from Introduction to the section lorem ipsum dolor sit amet, consectetuer identifying key prospects to nurturing them, building relationships, adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore and capitalizing on opportunities to convert them to sales. And it can magna aliquam erat volutpat. be done at scale, so there are no limits to where your sales career can take you.
																												</p>
																												<router-link to="/stage4" class="btn dark-btn">LEARN MORE</router-link>
																								</div>
																				</div>
																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(5)">next</div>
												</div>
												<div id="bg-image" class="section bg-view" data-anchor="section5" data-index="5">
																<div class="content col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0">
																				<div class="container offset-md-1 stage-line stage-line-border no-pad relative">
																								<!-- <StageLines /> -->
																								<div class="col-sm-9 offset-sm-1 no-left-pad top-pad-200">
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
												<div class="section fp-auto-height grey-bg relative" data-anchor="section6" data-index="6">
																<div class="row justify-content-center">
																				<div class="col-lg-8 col-md-8">
																								<h2 class="top-pad-lg btm-pad-sm">
																												Personalizing sales relationships can lead to better opportunities—and more sales—for your business.
																								</h2>
																								<p class="size-md">
																												Learn more here, or connect with a representative when you're ready to try out Dynamics 365 for Sales.
																								</p>
																				</div>
																</div>
																<div class="row justify-content-center">
																				<div class="col-lg-4 col-md-12 top-pad-lg btm-pad-xl">
																								<a class="btn dark-btn white-txt" href="">Learn More</a>
																				</div>
																				<div class="col-lg-4 col-md-12 top-pad-lg btm-pad-xl">
																								<a class="btn dark-btn white-txt" href="">Try out Dynamics 365 for Sales</a>
																				</div>
																</div>
																<div class="moveToTop" @click="$refs.fullpage.api.moveTo(1)">return to top</div>
												</div>
								</full-page>
				</div>
</template>
<script>
import HeaderModule from '../components/HeaderModule';
import StageLines from '../components/StageLines.vue';
// import FullPage from 'FullPage';
import VueFullPage from 'vue-fullpage.js'

export default {
				data() {
								return {
												options: {
																onLeave: function(origin, destination, direction) {



																	console.log(destination.index)
																		
																		let elem = document.querySelector(".fp-table.active");
																		// let indexElem = elem.getAttribute('data-index');
																		let indexElem = destination.index - 1;
																		console.log(indexElem);
												let stageBox;
												stageBox = document.querySelectorAll('.stage-box');
												for (var i = 0; i < stageBox.length; ++i) {
																stageBox[i].classList.remove('phase--1','phase-0','phase-1','phase-2','phase-3','phase-4','phase-5','phase-6');

																stageBox[i].classList.add('phase-'+ indexElem);
												}



																}
												}
								}
				},
				components: {
								VueFullPage,
								HeaderModule,
								StageLines
				},
				methods: {
								burger: function(event) {
												var navbar = document.querySelector('.navbar');
												navbar.classList.toggle('expanded');
								},
								openMe: function(index) {

												var list_zero;
												list_zero = document.querySelectorAll('.stage');
												for (var i = 0; i < list_zero.length; ++i) {
																list_zero[i].classList.remove('active');
												}
												var list;
												list = document.querySelectorAll('.stage-' + index);
												for (var i = 0; i < list.length; ++i) {
																list[i].classList.add('active');
												}

								}
				}
}

</script>
