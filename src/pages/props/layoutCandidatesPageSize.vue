<template>
	<DocPage
		back-button-text="layoutCandidates"
		back-button-url="props-layoutCandidates"
		next-button-text="excludeFromLayout"
		next-button-url="props-excludeFromLayout"
		header="Props - layoutCandidatesPageSize"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Related to the <a href="props-layoutCandidates">layoutCandidates</a> prop. Determines the maximum number of items to show per "page" of suggestions.</div>
		<DocPageCode lang="js" code='layoutCandidatesPageSize: 5' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
