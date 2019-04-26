<template>
	<div style="height:0;">
		<div
			id="stage-line-container"
			class="col-xl-5 col-md-12 offset-xl-2 col-lg-8 offset-lg-0 stage-container"
		>
			<div
				id="stage-line"
				class="container offset-md-1 stage-line stage-line-border no-pad relative nostroke"
			>
				<div class="stage-box phase--1" style="">
					<div class="stage stage-1">
						<div class="stage-stroke transparent">_</div>
						<div class="stage-name"></div>
					</div>
					<div class="stage stage-1">
						<div class="stage-stroke">_</div>
						<div class="stage-name"></div>
					</div>
					<div class="stage stage-1">
						<div class="stage-stroke">_</div>
						<div class="stage-name">
							<span @click="$refs.fullpage.api.moveTo(2)"
								>stage 1</span
							>
							<span @click="$refs.fullpage.api.moveSectionDown()"
								>next section</span
							>
						</div>
					</div>
					<div class="stage stage-2">
						<div class="stage-stroke">_</div>
						<div class="stage-name"></div>
					</div>
					<div class="stage stage-3">
						<div class="stage-stroke">_</div>
						<div class="stage-name"></div>
					</div>
					<div class="stage stage-4">
						<div class="stage-stroke">_</div>
						<div class="stage-name"></div>
					</div>
					<div class="stage stage-5">
						<div class="stage-stroke">_</div>
						<div class="stage-name"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {};
</script>
