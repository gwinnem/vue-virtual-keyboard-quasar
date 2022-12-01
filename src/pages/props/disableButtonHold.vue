<template>
	<DocPage
		back-button-text="disableRowButtonContainers"
		back-button-url="props-disableRowButtonContainers"
		next-button-text="disableCaretPositioning"
		next-button-url="props-disableCaretPositioning"
		header="Props - disableButtonHold"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			When set to true, this option disables the button hold action.
		</div>
		<DocPageCode lang="js" code="disableButtonHold: false" />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
