<template>
	<DocPage
		back-button-text="disableCaretPositioning"
		back-button-url="props-disableCaretPositioning"
		next-button-text="tabCharOnTab"
		next-button-url="props-tabCharOnTab"
		header="Props - newLineOnEnter"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Specifies whether clicking the “ENTER” button will input a newline (\n) or not.</div>
		<DocPageCode lang="js" code='newLineOnEnter: false' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
