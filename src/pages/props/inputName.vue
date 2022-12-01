<template>
	<DocPage
		back-button-text="tabCharOnTab"
		back-button-url="props-tabCharOnTab"
		next-button-text="inputPattern"
		next-button-url="props-inputPattern"
		header="Props - inputName"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Allows you to use a single virtual-keyboard instance for several inputs.
		</div>
		<DocPageCode lang="js" code='inputName: "default"' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
