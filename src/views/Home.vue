<template>
				<div>
								<full-page ref="fullpage" :options="{responsiveWidth: 0,responsiveHeight: 0,responsiveSlides: false}">
												<div class="section grey-bg" data-anchor="section">
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
												<div id="bg-image" class="section bg-iphone" data-anchor="section2">
																<div class="content col-lg-5 col-md-10 offset-lg-2">

																	<div class="container offset-md-1 stage-line stage-line-border no-pad">
																				<StageLines />
																		<div class="col-sm-9 offset-sm-1 no-left-pad">
																				<h2>
																								Nurture leads and build relationships
																				</h2>
																				<p>
																								Working on a relationship is a continuous cycle. It’s not enough to connect with the ideal leads; those prospects must be wooed. In sales, that means providing the value your educated buyers are looking for.
																				</p>
																				<router-link to="/stage1" class="btn dark-btn">LEARN MORE</router-link>
																		</div>

																	</div>


																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(2)">next</div>
												</div>
												<div id="bg-image" class="section bg-sunset" data-anchor="section3">
																<div class="content col-lg-5 col-md-10 offset-lg-2">

																	<div class="container offset-md-1 stage-line stage-line-border no-pad">
																				<StageLines />
																		<div class="col-sm-9 offset-sm-1 no-left-pad">
																				<h2>
																								Capitalize on opportunities to convert
																				</h2>
																				<p>
																								ICnutrsotdoumcteiorsn ctomthe stoecytioun lboerecmauispesutmhedyohloarvseitparmoebtl,ecmons.seYcotuetusoerlve those adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
																								problems. But what if you could anticipate and solve the problems
																								magna aliquam erat volutpat.
																								they don’t yet realize they have?
																				</p>
																				<router-link to="/stage2" class="btn dark-btn">LEARN MORE</router-link>
																		</div>
																	</div>
																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(3)">next</div>
												</div>
												<div id="bg-image" class="section bg-tablet-smiling" data-anchor="section4">
																<div class="content col-lg-5 col-md-10 offset-lg-2">

																	<div class="container offset-md-1 stage-line stage-line-border no-pad">
																				<StageLines />
																		<div class="col-sm-9 offset-sm-1 no-left-pad">
																				<h2>
																								Deliver relationship sales at scale
																				</h2>
																				<p>
																								You have prospect data. Lots of it. And you’re collecting it every second of every day. But you can’t drive revenue with your data unless you can filter it and then organize it into stories that drive the long-term relationships that lead to sales.
																				</p>
																				<router-link to="/stage3" class="btn dark-btn">LEARN MORE</router-link>
																		</div>

																	</div>


																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(4)">next</div>
												</div>
												<div id="bg-image" class="section bg-crowd-2" data-anchor="section5">
																<div class="content col-lg-5 col-md-10 offset-lg-2">

																	<div class="container offset-md-1 stage-line stage-line-border no-pad">
																				<StageLines />
																		<div class="col-sm-9 offset-sm-1 no-left-pad">
																				<h2>
																								The view’s better from here
																				</h2>
																				<p>
																								Relationship selling works at every stage of the sales process—from
																								Introduction to the section lorem ipsum dolor sit amet, consectetuer
																								identifying key prospects to nurturing them, building relationships,
																								adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
																								and capitalizing on opportunities to convert them to sales. And it can
																								magna aliquam erat volutpat.
																								be done at scale, so there are no limits to where your sales career can take you.
																				</p>
																				<router-link to="/stage4" class="btn dark-btn">LEARN MORE</router-link>
																		</div>

																	</div>


																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(5)">next</div>
												</div>
												<div id="bg-image" class="section bg-view" data-anchor="section5">
																<div class="content col-lg-5 col-md-10 offset-lg-2">

																	<div class="container offset-md-1 stage-line stage-line-border no-pad">
																				<StageLines />
																		<div class="col-sm-9 offset-sm-1 no-left-pad">
																				<h2>
																								The view’s better from here
																				</h2>
																				<p>
																								Relationship selling works at every stage of the sales process—from
																								Introduction to the section lorem ipsum dolor sit amet, consectetuer
																								identifying key prospects to nurturing them, building relationships,
																								adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
																								and capitalizing on opportunities to convert them to sales. And it can
																								magna aliquam erat volutpat.
																								be done at scale, so there are no limits to where your sales career can take you.
																				</p>
																				<router-link to="/stage4" class="btn dark-btn">LEARN MORE</router-link>
																		</div>

																	</div>


																</div>
																<div class="bottom-fix next down-arrow dark" @click="$refs.fullpage.api.moveSectionDown()" v-on:click="openMe(6)">next</div>
												</div>
												<div class="section fp-auto-height grey-bg relative" data-anchor="section6">
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



export default {
			data(){
			return {
				options:{}
			}
			},
				// name: 'App',
				components: {
								HeaderModule,
								StageLines
				},
				methods: {
								burger: function(event) {
												var navbar = document.querySelector('.navbar');
												navbar.classList.toggle('expanded');
								},
								openMe: function(index){

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