<template>
	<DocPage
		back-button-text="addButtonTheme"
		back-button-url="methods-addButtonTheme"
		next-button-text="getButtonElement"
		next-button-url="methods-getButtonElement"
		header="Methods - removeButtonTheme"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Removes an entry to the <a href="props-buttonTheme">buttonTheme</a> .
			Basically a way to remove a class previously added to a button through
			<a href="props-buttonTheme">buttonTheme</a> or
			<a href="methods-addButtonTheme">addButtonTheme</a> . However, unlike the
			<a href="props-buttonTheme">buttonTheme</a> option (which replaces entries),
			<span class="text-weight-bold">removeButtonTheme</span> removes entries or
			modifies existing ones.
		</div>
		<DocPageCode
			lang="js"
			code='keyboard.removeButtonTheme("b c", "myClass1 myClass2");'
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
