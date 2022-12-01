<template>
	<DocPage
		back-button-text="layout"
		back-button-url="props-layout"
		next-button-text="enableLayoutCandidates"
		next-button-url="props-enableLayoutCandidates"
		header="Props - layoutName"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">Specifies which layout should be used.</div>
		<DocPageCode lang="js" code='layoutName: "default";' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
