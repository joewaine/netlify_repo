<template>
				<a id="interactive-cta:collapse-expand-menu" class="menu" v-on:click="burger">menu
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 43 39.93" width="22" height="22">
												<defs>
												</defs>
												<title>burger</title>
												<g id="Layer_2" data-name="Layer 2">
																<g id="content">
																				<rect class="cls-1" width="43" height="3.07" />
																				<rect class="cls-1" y="18.43" width="43" height="3.07" />
																				<rect class="cls-1" y="36.86" width="43" height="3.07" />
																</g>
												</g>
								</svg>
				</a>
</template>
<script>
export default {
				methods: {
								burger: function() {
												var navbar = document.querySelector('.navbar');
												navbar.classList.toggle('expanded');
								}
				}
}

</script>



