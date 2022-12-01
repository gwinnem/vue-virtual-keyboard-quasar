<template>
	<DocPage
		back-button-text="physicalKeyboardHighlight"
		back-button-url="props-physicalKeyboardHighlight"
		next-button-text="physicalKeyboardHighlightTextColor"
		next-button-url="props-physicalKeyboardHighlightTextColor"
		header="Props - physicalKeyboardHighlightPress"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			When this option and
			<a href="props-physicalKeyboardHighlight">physicalKeyboardHighlight</a> are
			both set to true, virtual-keyboard buttons will be highlighted and pressed as
			you type with your physical keyboard.
		</div>
		<DocPageCode lang="js" code="physicalKeyboardHighlightPress: false" />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
