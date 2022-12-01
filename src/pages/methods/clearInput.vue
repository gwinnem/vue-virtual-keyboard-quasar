<template>
	<DocPage
		back-button-text="Methods"
		back-button-url="methods"
		next-button-text="getInput"
		next-button-url="methods-getInput"
		header="Methods - clearInput"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Clear the keyboard’s input.</div>
		<DocPageCode lang="js" code='// For default input (i.e. if you have only one)
keyboard.clearInput();

// For specific input
// Must have been previously set using the "inputName" prop.
keyboard.clearInput("myInputName");' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
