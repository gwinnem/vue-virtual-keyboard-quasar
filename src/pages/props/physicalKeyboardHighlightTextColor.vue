<template>
	<DocPage
		back-button-text="physicalKeyboardHighlightPress"
		back-button-url="props-physicalKeyboardHighlightPress"
		next-button-text="physicalKeyboardHighlightBgColor"
		next-button-url="props-physicalKeyboardHighlightBgColor"
		header="Props - physicalKeyboardHighlightTextColor"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Define the text color that the physical keyboard highlighted key should have. Used when the <a href="props-physicalKeyboardHighlight">physicalKeyboardHighlight</a> option is set to true.</div>
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
