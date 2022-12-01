<template>
	<DocPage
		back-button-text="getCaretPosition"
		back-button-url="methods-getCaretPosition"
		next-button-text="setCaretPosition"
		next-button-url="methods-setCaretPosition"
		header="Methods - getCaretPositionEnd"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Retrieves the virtual-keyboard's endcaret position (selectionEnd).</div>
		<DocPageCode lang="js" code='keyboard.getCaretPositionEnd();' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>

