<template>
	<DocPage
		back-button-text="rtl"
		back-button-url="props-rtl"
		header="Props - keyboardClass"
		show-back-button="true"
	>
		<div class="text-h6">TBD.</div>
		<DocPageCode
			lang="js"
			code='// For default input (i.e. if you have only one)
keyboard.clearInput();

// For specific input
// Must have been previously set using the "inputName" prop.
keyboard.clearInput("myInputName");'
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
