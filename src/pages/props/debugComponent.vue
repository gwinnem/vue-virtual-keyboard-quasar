<template>
	<DocPage
		back-button-text="physicalKeyboardHighlightBgColor"
		back-button-url="props-physicalKeyboardHighlightBgColor"
		next-button-text="display"
		next-button-url="props-display"
		header="Props - debug"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Runs a console.log every time a key is pressed. Displays the buttons pressed
			and the current input.
		</div>
		<DocPageCode lang="js" code="debug: true;" />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
