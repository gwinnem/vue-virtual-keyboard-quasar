<template>
	<DocPage
		back-button-text="disableButtonHold"
		back-button-url="props-disableButtonHold"
		next-button-text="newLineOnEnter"
		next-button-url="props-newLineOnEnter"
		header="Props - disableCaretPositioning"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Disables caret positioning, meaning that characters will always be
			added/removed at the end of the string.
		</div>
		<DocPageCode lang="js" code="disableCaretPositioning: false" />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
