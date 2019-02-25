<template>
		<div class="menu" v-on:click="burger">menu</div>
 </template>
<script>
export default {
	methods: {
		burger: function(event) {
		var navbar = document.querySelector('.navbar');
		navbar.classList.toggle('expanded');
		}
	}
}
</script>
