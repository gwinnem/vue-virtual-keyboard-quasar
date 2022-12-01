<template>
	<DocPage
		back-button-text="removeButtonTheme"
		back-button-url="methods-removeButtonTheme"
		next-button-text="recurseButtons"
		next-button-url="methods-recurseButtons"
		header="Methods - getButtonElement"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Get the DOM Element of a button. If there are several buttons with the same name, an array of the DOM Elements is returned.</div>
		<DocPageCode lang="js" code="keyboard.getButtonElement('a'); // Gets the a key as per your layout
keyboard.getButtonElement('{shift}') // Gets all keys with that name in an array" />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>

