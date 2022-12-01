<template>
	<DocPage
		back-button-text="buttonAttributes"
		back-button-url="props-buttonAttributes"
		next-button-text="disableRowButtonContainers"
		next-button-url="props-disableRowButtonContainers"
		header="Props - useButtonTag"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Render buttons as button elements instead of the default div elements.
		</div>
		<DocPageCode lang="js" code="useButtonTag: false" />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
