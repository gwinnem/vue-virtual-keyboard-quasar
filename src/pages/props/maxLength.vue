<template>
	<DocPage
		back-button-text="syncInstanceInputs"
		back-button-url="props-syncInstanceInputs"
		next-button-text="rtl"
		next-button-url="props-rtl"
		header="Props - maxLength"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Limits virtual-keyboard’s input to a certain length. This should be used in addition to the input element’s "maxlength" attribute.</div>
		<DocPageCode lang="js" code="// Applies to all internal inputs
maxLength: 5

// Specifies different limiters for each input set, in case you are using the inputName option
		maxLength: {
		'default': 5,
		'myFancyInput': 10
		}" />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
