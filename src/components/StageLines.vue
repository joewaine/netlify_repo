<template>
	<div class="stage-box">
			<div class="stage stage-1">
							<div class="stage-stroke">_</div>
							<div class="stage-name"><a href="/#section2" v-on:click="activate(1)">stage 1</a></div>
			</div>
			<div class="stage stage-2">
							<div class="stage-stroke">_</div>
							<div class="stage-name"><a href="/#section3" v-on:click="activate(2)">stage 2</a></div>
			</div>
			<div class="stage stage-3">
							<div class="stage-stroke">_</div>
							<div class="stage-name"><a href="/#section4" v-on:click="activate(3)">stage 3</a></div>
			</div>
			<div class="stage stage-4">
							<div class="stage-stroke">_</div>
							<div class="stage-name"><a href="/#section5" v-on:click="activate(4)">stage 4</a></div>
			</div>
			<div class="stage stage-5">
							<div class="stage-stroke">_</div>
							<div class="stage-name"><a href="/#section6" v-on:click="activate(5)">sales story</a></div>
			</div>
	</div>
</template>
<script>
export default {
					methods: {
								activate: function(index) {
												var stageActivate = document.querySelectorAll('.stage-' + index);
												stageActivate.classList.toggle('active');
								}
				}

}

</script>