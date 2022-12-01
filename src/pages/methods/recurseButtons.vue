<template>
	<DocPage
		back-button-text="getButtonElement"
		back-button-url="methods-getButtonElement"
		next-button-text="setOptions"
		next-button-url="methods-setOptions"
		header="Methods - recurseButtons"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Iterates through all the keyboard buttons (ForEach). Returns the button DOM Element on each instance.</div>
		<DocPageCode lang="js" code="keyboard.recurseButtons(buttonElement => {
  console.log('buttonElement', buttonElement);
});" />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>

