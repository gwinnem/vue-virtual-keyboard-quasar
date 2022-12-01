<template>
	<DocPage
		back-button-text="inputName"
		back-button-url="props-inputName"
		next-button-text="syncInstanceInputs"
		next-button-url="props-syncInstanceInputs"
		header="Props - inputPattern"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Limits virtual-keyboard’s input to a certain regular expression. This means that if a key doesn’t match the regex, it will be ignored.</div>
		<DocPageCode lang="js" code="// Applies to all internal inputs
inputPattern: /^\d+$/

// Use an expression for a specific input, in case you are using the inputName option
		inputPattern: {
		'default': /^\d+$/,
		'myFancyInput': /^[a-zA-Z]+$/
		}" />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
