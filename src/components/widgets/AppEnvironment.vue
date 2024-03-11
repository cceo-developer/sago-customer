<script setup>
const version = import.meta.env.VITE_VERSION
const env = import.meta.env.VITE_ENV
</script>

<template>
	<div v-if="env==='testing'" class="ribbon">
		<label>Pruebas</label>
	</div>
	<div class="version">
		{{ version }}
	</div>
</template>

<style scoped>
.ribbon {
    background-color: rgba(0, 123, 255, .25);
    overflow: hidden;
    white-space: nowrap;
    position: fixed;
    left: -20px;
    top: 20px;
    transform: rotate(-45deg);
    box-shadow: 0 0 5px #888;
    z-index: 999999999999999999;
}
.ribbon label {
    color: rgba(255, 255, 255, .5);
    display: block;
    font: bold 70% 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 1px 0;
    padding: 0px 25px;
    text-align: center;
    text-decoration: none;
    text-shadow: 0 0 1px #444;
}
.version {
    color: grey;
    text-shadow: 0 0 2px white;
    font-stretch: expanded;
    font: bold 70% 'Helvetica Neue', Helvetica, Arial, sans-serif;
    letter-spacing: 1px ;
    overflow: hidden;
    white-space: nowrap;
    position: fixed;
    right: 5px;
    bottom: 5px;
    z-index: 999999999999999999;
}
</style>