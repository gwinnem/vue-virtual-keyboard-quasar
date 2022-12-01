<template>
	<DocPage
		back-button-text="useButtonTag"
		back-button-url="props-useButtonTag"
		next-button-text="disableButtonHold"
		next-button-url="props-disableButtonHold"
		header="Props - disableRowButtonContainers"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">When set to true, this option disables the button grouping functionality.</div>
		<DocPageCode lang="js" code='disableRowButtonContainers: false' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
