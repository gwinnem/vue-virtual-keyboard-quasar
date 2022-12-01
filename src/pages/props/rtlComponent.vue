<template>
	<DocPage
		back-button-text="maxLength"
		back-button-url="props-maxLength"
		next-button-text="keyboardClass"
		next-button-url="props-keyboardClass"
		header="Props - rtl"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">When set to true, this option adds
			<a href="http://unicode.org/reports/tr9/#Directional_Formatting_Codes" target="_blank">unicode directional control characters</a> \u202B and \u202C to
			<a href="events-onChange">onChange()</a> and <a href="methods-getInput">getInput()</a> returns.
			This helps to address issues when using virtual-keyboard with right-to-left layouts.</div>
		<DocPageCode lang="js" code='rtl: true;' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
