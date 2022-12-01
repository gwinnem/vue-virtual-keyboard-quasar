<template>
	<DocPage
		back-button-text="physicalKeyboardHighlightTextColor"
		back-button-url="props-physicalKeyboardHighlightTextColor"
		next-button-text="debug"
		next-button-url="props-debug"
		header="Props - physicalKeyboardHighlightBgColor"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Define the background color that the physical keyboard highlighted key should
			have. Used when
			<a href="props-physicalKeyboardHighlight">physicalKeyboardHighlight</a> is
			set to true.
		</div>
		<DocPageCode lang="js" code='physicalKeyboardHighlightBgColor: "#9ab4d0"' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
