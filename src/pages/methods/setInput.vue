<template>
	<DocPage
		back-button-text="replaceInput"
		back-button-url="methods-replaceInput"
		next-button-text="addButtonTheme"
		next-button-url="methods-addButtonTheme"
		header="Methods - setInput"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Set the keyboard’s input. Useful if you want to track input changes made
			outside virtual-keyboard.
		</div>
		<DocPageCode
			lang="js"
			code='// For default input (i.e. if you have only one)
keyboard.setInput("Hello World!");

// For specific input
// Must have been previously set using the "inputName" prop.
keyboard.setInput("Hello World!", "myInputName");'
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
