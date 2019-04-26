<template>
	<div>
		<nav
			id="slideNav"
			class="navbar navbar-toggleable-md navbar-light bg-faded"
		>
			<div class="collapse navbar-collapse" id="navbarNav">
				<ul class="navbar-nav no-margin">
					<li class="nav-item" v-on:click="collapse">
						<router-link
							id="url:home-page"
							to="/"
							data-bi-area="sidebar-module"
							class="nav-link"
							>Home</router-link
						>
					</li>
					<li class="nav-item" v-on:click="collapse">
						<router-link
							id="url:overview-page"
							data-bi-area="sidebar-module"
							to="/overview"
							class="nav-link"
							>OVERVIEW</router-link
						>
					</li>
					<li class="nav-item" v-on:click="collapse">
						<router-link
							id="url:stage-1-page"
							data-bi-area="sidebar-module"
							to="/stage1"
							class="nav-link"
							>STAGE 1</router-link
						>
					</li>
					<li class="nav-item" v-on:click="collapse">
						<router-link
							id="url:stage-2-page"
							data-bi-area="sidebar-module"
							to="/stage2"
							class="nav-link"
							>STAGE 2</router-link
						>
					</li>
					<li class="nav-item" v-on:click="collapse">
						<router-link
							id="url:stage-3-page"
							data-bi-area="sidebar-module"
							to="/stage3"
							class="nav-link"
							>STAGE 3</router-link
						>
					</li>
					<li class="nav-item" v-on:click="collapse">
						<router-link
							id="url:stage-4-page"
							data-bi-area="sidebar-module"
							to="/stage4"
							class="nav-link"
							>STAGE 4</router-link
						>
					</li>
					<li class="nav-item" v-on:click="collapse">
						<router-link
							id="url:sales-story-page"
							data-bi-area="sidebar-module"
							to="/salesstory"
							class="nav-link"
							>SALES STORY</router-link
						>
					</li>
				</ul>
			</div>
		</nav>
		<router-view class="view"></router-view>
	</div>
</template>
<script>
export default {
	methods: {
		collapse: function() {
			var navbar = document.querySelector(".navbar");
			navbar.classList.remove("expanded");
		}
	}
};
</script>
