<template>
	<DocPage
		back-button-text="layoutName"
		back-button-url="props-layoutName"
		next-button-text="layoutCandidates"
		next-button-url="props-layoutCandidates"
		header="Props - enableLayoutCandidates"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Whether or not to enable the layoutCandidates feature. Enabled by default.
		</div>
		<DocPageCode lang="js" code="enableLayoutCandidates: true;" />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
