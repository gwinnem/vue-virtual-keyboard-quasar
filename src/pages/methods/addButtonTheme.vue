<template>
	<DocPage
		back-button-text="setInput"
		back-button-url="methods-setInput"
		next-button-text="removeButtonTheme"
		next-button-url="methods-removeButtonTheme"
		header="Methods - addButtonTheme"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Adds an entry to the buttonTheme. Basically a way to add a class to a button.
			Unlike the "buttonTheme" property, which replaces entries, "addButtonTheme"
			creates entries or modifies existing ones.
		</div>
		<DocPageCode
			lang="js"
			code='keyboard.addButtonTheme("a b c {enter}", "myClass1 myClass2");'
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
