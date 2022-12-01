<template>
	<DocPage
		back-button-text="clearInput"
		back-button-url="methods-clearInput"
		next-button-text="replaceInput"
		next-button-url="methods-replaceInput"
		header="Methods - getInput"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Get the keyboard’s input (You can also get it from the <a href="events-onChange">onChange</a> event).</div>
		<DocPageCode lang="js" code='// For default input (i.e. if you have only one)
let input = keyboard.getInput();

// For specific input
// Must have been previously set using the "inputName" prop.
let input = keyboard.getInput("myInputName");' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
