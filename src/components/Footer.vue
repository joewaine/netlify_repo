<template>
				<div>

								<div class="row justify-content-center no-lr-margin fadeInAnimation" v-bind:class="index">
												<div class="col-xl-10 col-lg-10 col-md-10 col-sm-12">
																<h2 class="top-pad-lg btm-pad-sm">
																				Personalizing sales relationships can lead to better opportunities—and more sales—for your business.
																</h2>
																<p class="size-md">
											<!-- 									<a id="url:external-watch-videos" href="https://dynamics.microsoft.com/en-us/sales/demo/" style="text-decoration: underline;" target="_blank">Watch our videos</a> to learn more about Relationship Sales solutions, or <a id="url:request-demo" href="https://dynamics.microsoft.com/en-us/get-started/?appname=sales" style="text-decoration: underline;" target="_blank">request a demo</a>. -->


Watch our videos to learn more about Microsoft Relationship Sales solution.

																</p>

									<a id="url:external-watch-videos-now" class="btn dark-btn white-txt" href="https://dynamics.microsoft.com/en-us/sales/demo/" target="_blank">WATCH NOW</a>

												</div>
								</div>




								<div class="row justify-content-center no-lr-margin fadeInAnimation" v-bind:class="index">


												<div class="col-lg-5 col-md-5 col-sm-12 top-pad-lg btm-pad-lg">
														<!-- 		<a id="url:external-learn-more" class="btn dark-btn white-txt" href="https://dynamics.microsoft.com/en-us/sales/demo/" target="_blank">Watch now</a> -->
												</div>
							<!-- 					<div class="col-lg-5 col-md-5 col-sm-12 top-pad-lg btm-pad-xls">
																<a id="url:external-try-it-out" class="btn dark-btn white-txt" href="https://dynamics.microsoft.com/en-us/get-started/?appname=sales" target="_blank">Request a demo</a>
												</div> -->
								</div>
<!--<a id="navigation:in-page-scroll-to-top" class="moveToTop" @click="$refs.fullpage.api.moveTo(1)">return to top-->

<a id="navigation:in-page-scroll-to-top" class="moveToTop" @click="scrollToTop(600)">return to top








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



				</div>
</template>
<script>
export default {
props: {
index: String
},
methods:{
scrollToTop(scrollDuration) {
const   scrollHeight = window.scrollY,
        scrollStep = Math.PI / ( scrollDuration / 15 ),
        cosParameter = scrollHeight / 2;
var     scrollCount = 0,
        scrollMargin,
        scrollInterval = setInterval( function() {
            if ( window.scrollY != 0 ) {
                scrollCount = scrollCount + 1;  
                scrollMargin = cosParameter - cosParameter * Math.cos( scrollCount * scrollStep );
                window.scrollTo( 0, ( scrollHeight - scrollMargin ) );
            } 
            else clearInterval(scrollInterval); 
        }, 15 );
}
}
	 
}
</script>


