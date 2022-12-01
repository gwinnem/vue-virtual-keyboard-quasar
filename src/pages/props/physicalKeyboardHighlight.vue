<template>
	<DocPage
		back-button-text="stopMouseUpPropagation"
		back-button-url="props-stopMouseUpPropagation"
		next-button-text="physicalKeyboardHighlightPress"
		next-button-url="props-physicalKeyboardHighlightPress"
		header="Props - physicalKeyboardHighlight"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Enable highlighting of keys pressed on physical keyboard.

			For functional keys such as shift, note that the key’s event.code is used. In that instance, pressing the left key will result in the code ShiftLeft. Therefore, the key must be named {shiftleft}.

			<a href="https://github.com/gwinnem/vue-virtual-keyboard/blob/main/docs/sample-keyboard.md" target="_blank">Click here</a> to see some of keys supported out of the box. If in doubt, you can also set the debug option to true to see the key events.</div>
		<DocPageCode lang="js" code='physicalKeyboardHighlight: false' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
