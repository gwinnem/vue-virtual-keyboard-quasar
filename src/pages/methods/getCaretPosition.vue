<template>
	<DocPage
		back-button-text="destroy"
		back-button-url="methods-destroy"
		next-button-text="getCaretPositionEnd"
		next-button-url="methods-getCaretPositionEnd"
		header="Methods - getCaretPosition"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Retrieves the virtual-keyboard's start caret position (selectionStart).</div>
		<DocPageCode lang="js" code='keyboard.getCaretPosition();' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>

