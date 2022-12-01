<template>
	<DocPage
		back-button-text="inputPattern"
		back-button-url="props-inputPattern"
		next-button-text="maxLength"
		next-button-url="props-maxLength"
		header="Props - syncInstanceInputs"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">When set to true, this option synchronizes the internal input of every virtual-keyboard instance.</div>
		<DocPageCode lang="js" code='syncInstanceInputs: false' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
