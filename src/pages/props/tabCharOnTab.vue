<template>
	<DocPage
		back-button-text="newLineOnEnter"
		back-button-url="props-newLineOnEnter"
		next-button-text="inputName"
		next-button-url="props-inputName"
		header="Props - tabCharOnTab"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Specifies whether clicking the “TAB” button will input a tab character (\t) or not.</div>
		<DocPageCode lang="js" code='tabCharOnTab: true' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
