<template>
	<DocPage
		back-button-text="layoutCandidatesPageSize"
		back-button-url="props-layoutCandidatesPageSize"
		next-button-text="autoUseTouchEvents"
		next-button-url="props-autoUseTouchEvents"
		header="Props - excludeFromLayout"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Use this option to remove buttons from your layout.</div>
		<DocPageCode lang="js" code='excludeFromLayout: {
  default: ["@", ".com"],
  shift: ["@", ".com"]
}' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
