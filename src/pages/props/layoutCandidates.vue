<template>
	<DocPage
		back-button-text="enableLayoutCandidates"
		back-button-url="props-enableLayoutCandidates"
		next-button-text="layoutCandidatesPageSize"
		next-button-url="props-layoutCandidatesPageSize"
		header="Props - layoutCandidates"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			This option allows you to define input suggestions to present to the user.
		</div>
		<DocPageCode
			lang="js"
			code='layoutCandidates: {
 a: "阿 啊 呵 腌 嗄 吖 锕"
}'
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
