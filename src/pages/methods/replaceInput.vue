<template>
	<DocPage
		back-button-text="getInput"
		back-button-url="methods-getInput"
		next-button-text="setInput"
		next-button-url="methods-setInput"
		header="Methods - replaceInput"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Replaces the entire internal input object. The difference with “setInput” is
			that “setInput” only changes a single key of the input object, while
			“replaceInput” replaces the full input object.
		</div>
		<DocPageCode
			lang="js"
			code='keyboard.replaceInput({default: "My Value", input2: "My Other Value"});'
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
