<template>
	<DocPage
		back-button-text="preventMouseUpDefault"
		back-button-url="props-preventMouseUpDefault"
		next-button-text="physicalKeyboardHighlight"
		next-button-url="props-physicalKeyboardHighlight"
		header="Props - stopMouseUpPropagation"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Stops pointer up events on virtual-keyboard buttons from bubbling to parent elements.</div>
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
