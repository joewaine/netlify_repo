<template>
				<div>
								<HeaderModule />
								<section class="stage-section btm-pad-xxl">
												<div class="container">
																<div class="row top-pad-xl stage-header">
																				<div class="col-xl-10 col-lg-12 col-md-12 offset-lg-0 offset-md-0 offset-xl-1 relative">
																								<span class="section-title">overview</span>
																								<BurgerMenu />
																				</div>
																</div>
																<div class="row">
																				<div class="col-xl-5 col-lg-10 col-md-12 offset-lg-1 offset-md-0">
																								<h1 class="top-pad-sm">
																												Use relationship selling to connect
																								</h1>
																				</div>
																</div>
																<div class="row justify-content-center">
																				<div class="col-xl-5 col-lg-10 col-md-12 top-pad-xl">
																								<p>
																												Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor rutrum pulvinar. Sed cursus, mauris ut mollis rutrum, nibh odio efficitur turpis, nec tincidunt leo neque sagittis ipsum. Aliquam placerat dictum sollicitudin. Morbi consectetur quis nulla eu varius. Duis congue tempor tempor. Quisque interdum, odio dignissim tincidunt tincidunt, urna sapien blandit magna, id volutpat metus est vel eros.
																								</p>
																								<p>
																												In viverra quis justo eu aliquet. Proin scelerisque sit amet quam ut luctus. Pellentesque eu lorem elit. Fusce gravida sem eu imperdiet sagittis. Suspendisse potenti. Curabitur urna libero, interdum nec sem non, efficitur eleifend nisl. Phasellus nec pulvinar metus. Etiam laoreet semper efficitur.
																								</p>
																				</div>
																</div>
												</div>
								</section>
								<section>
												<div class="container no-pad">
																<div class="row no-margin">
																				<div class="col-lg-6 col-md-12 grey-bg btm-pad-xxl">
																								<div class="container">
																												<div class="row justify-content-center no-margin">
																																<div class="col-lg-10">
																																				<h2 class="top-pad-lg">A new model is emerging on the sales landscape</h2>
																																				<p class="top-pad-lg">
																																								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempor rutrum pulvinar. Sed cursus, mauris ut mollis rutrum, nibh odio efficitur turpis, nec tincidunt leo neque sagittis ipsum. Aliquam placerat dictum sollicitudin. Morbi consectetur quis nulla eu varius. Duis congue tempor tempor. Quisque interdum, odio dignissim tincidunt tincidunt, urna sapien blandit magna, id volutpat metus est vel eros.
																																				</p>
																																				<p>
																																								In viverra quis justo eu aliquet. Proin scelerisque sit amet quam ut luctus. Pellentesque eu lorem elit. Fusce gravida sem eu imperdiet sagittis. Suspendisse potenti. Curabitur urna libero, interdum nec sem non, efficitur eleifend nisl. Phasellus nec pulvinar metus. Etiam laoreet semper efficitur.
																																				</p>
																																</div>
																												</div>
																								</div>
																				</div>
																				<div class="col-lg-6 col-md-12 grey-bg btm-pad-xxl bg-containers">
																								<div class="row justify-content-end top-pad-max">
																												<div class="col-md-10 col-sm-12 bg-white">
																																<div class="container justify-content-center top-pad-xxl btm-pad-xxl">
																																				<div class="col-md-8 col-sm-12 bg-white">
																																								<h3 class="dk-green">
																																												Companies that use relationship selling consistenly experience:
																																								</h3>
																																								<ul class="secondary-list">
																																												<li>
																																																<div class="circle">18%
																																																</div>
																																																more volume
																																												</li>
																																												<li>
																																																<div class="circle">
																																																				28%
																																																</div>
																																																faster pipeline fill
																																												</li>
																																												<li>
																																																<div class="circle">
																																																				15%
																																																</div>
																																																better conversion rates
																																												</li>
																																								</ul>
																																				</div>
																																</div>
																												</div>
																								</div>
																				</div>
																</div>
												</div>
								</section>
								<section>
												<div class="container no-pad">
																<div class="row no-margin">
																				<div id="bg-image" class="col-lg-6 col-md-12 bg-sweaters btm-pad-xxl relative hide-image-mobile mobile-image" v-bind:style="{ 'background-image': 'url(' + image1 + ')' }">
<svg width="250" height="25%" style="position: absolute; top: 0px; right: 0px;"><rect width="250" height="100%" style="fill: rgb(255, 255, 255); stroke-width: 0; stroke: rgb(0, 0, 0);"></rect></svg>
<svg width="0" height="25%" style="position: absolute; top: 25%; right: 0px;"><rect width="0" height="100%" style="fill: rgb(255, 255, 255); stroke-width: 0; stroke: rgb(0, 0, 0);"></rect></svg>
<svg width="200" height="25%" style="position: absolute; top: 50%; right: 0px;"><rect width="200" height="100%" style="fill: rgb(255, 255, 255); stroke-width: 0; stroke: rgb(0, 0, 0);"></rect></svg>

<svg width="350" height="25%" style="position: absolute; top: 75%; right: 0px;"><rect width="350" height="100%" style="fill: rgb(255, 255, 255); stroke-width: 0; stroke: rgb(0, 0, 0);"></rect></svg>



																				</div>
																				<div class="col-lg-6 col-md-12 btm-pad-xxl li-stages">
																								<div class="container li-stages">
																												<div class="row no-margin">
																																<div class="col-md-6">
																																				<ul class="left-border top-pad-xxl">
																																								<li @mouseover="image1 = image6" data-index="1">
																																												<div class="stage-item" v-on:click="scrollToZero">
																																																<router-link to="/stage1">Stage 1</router-link>
																																												</div>
																																												<span class="title" v-on:click="scrollToZero">
																																																<router-link to="/stage1">
																																																				Identify the right leads
																																																</router-link>
																																												</span>
																																								</li>
																																								<li @mouseover="image1 = image2" data-index="2">
																																												<div class="stage-item" v-on:click="scrollToZero">
																																																<router-link to="/stage2">Stage 2</router-link>
																																												</div>
																																												<span class="title" v-on:click="scrollToZero">
																																																<router-link to="/stage2">
																																																				Nurture leads and build relationships
																																																</router-link>
																																												</span>
																																								</li>
																																								<li @mouseover="image1 = image3" data-index="3">
																																												<div class="stage-item" v-on:click="scrollToZero">
																																																<router-link to="/stage3">Stage 3</router-link>
																																												</div>
																																												<span class="title" v-on:click="scrollToZero">
																																																<router-link to="/stage3">Capitalize on opportunities to convert</router-link>
																																												</span>
																																								</li>
																																								<li @mouseover="image1 = image4" data-index="4">
																																												<div class="stage-item" v-on:click="scrollToZero">
																																																<router-link to="/stage4">Stage 4</router-link>
																																												</div>
																																												<span class="title" v-on:click="scrollToZero">
																																																<router-link to="/stage4">Deliver relationship sales at scale</router-link>
																																												</span>
																																								</li>
																																								<li @mouseover="image1 = image5" data-index="5">
																																												<div class="stage-item" v-on:click="scrollToZero">
																																																<router-link to="/salesstory" v-on:click="scrollToZero">Sales Story</router-link>
																																												</div>
																																												<span class="title" v-on:click="scrollToZero">
																																																<router-link to="/salesstory">The view's better from here</router-link>
																																												</span>
																																								</li>
																																				</ul>
																																</div>
																												</div>
																								</div>
																				</div>
																</div>
												</div>
								</section>
								<section class="grey-bg relative">
												<div class="row justify-content-center no-lr-margin">
																<div class="col-lg-8 col-md-8 col-sm-12">
																				<h2 class="top-pad-lg btm-pad-sm">
																								Personalizing sales relationships can lead to better opportunities—and more sales—for your business.
																				</h2>
																				<p class="size-md">
																								Learn more here, or connect with a representative when you're ready to try out Dynamics 365 for Sales.
																				</p>
																</div>
												</div>
												<div class="row justify-content-center no-lr-margin">
																<div class="col-lg-4 col-md-6 top-pad-lg btm-pad-xl">
																				<a class="btn dark-btn white-txt" href="">Learn More</a>
																</div>
																<div class="col-lg-4 col-md-6 top-pad-lg btm-pad-xl">
																				<a class="btn dark-btn white-txt" href="">Try out Dynamics 365 for Sales</a>
																</div>
												</div>
												<div class="moveToTop" @click="$refs.fullpage.api.moveTo(1)">return to top</div>
								</section>
				</div>
</template>
<script>
import HeaderModule from '../components/HeaderModule.vue';
import BurgerMenu from '../components/BurgerMenu.vue';
export default {
				name: 'App',
				data() {
								return {
												image1: "http://localhost:8080/img/iphone.b4567e7e.jpg",
												image2: "http://localhost:8080/img/sunset.ed3eccb5.jpg",
												image3: "http://localhost:8080/img/tablet-smiling.8091a7a0.jpg",
												image4: "http://localhost:8080/img/crowd-2.6f456111.jpg",
												image5: "http://localhost:8080/img/view.1144df05.jpg",
												image6: "http://localhost:8080/img/iphone.b4567e7e.jpg",

								}
				},


				components: {
								HeaderModule,
								BurgerMenu
				},
				methods: {
								scrollToZero: function() {
												window.scrollTo(0, 0);
								},
								scrollToTop: function() {
												window.scroll({
																behavior: 'smooth',
																left: 0,
																top: 0
												});
								},
								mouseOver: function() {
												console.log(this)


												// let indexElem = this.getAttribute('data-index');

												// Document.getElementById('bg-image').classList.remove('bg-1','bg-2','bg-3','bg-4','bg-5');

												// 					Document.getElementById('bg-image').classList.add('bg-'+ indexElem);

								}
				}
}

</script>
