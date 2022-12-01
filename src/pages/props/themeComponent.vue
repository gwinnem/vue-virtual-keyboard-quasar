<template>
	<DocPage
		back-button-text="mergeDisplay"
		back-button-url="props-mergeDisplay"
		next-button-text="buttonTheme"
		next-button-url="props-buttonTheme"
		header="Props - theme"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			A prop to add your own css classes to the keyboard wrapper. You can add
			multiple classes separated by a space.
		</div>
		<DocPageCode
			lang="js"
			code='// Default Theme layout.
theme: "hg-theme-default"

// Dark Theme layout.
theme: "hg-theme-default darkTheme" '
		/>

		<q-separator class="q-mt-lg q-mb-lg" />
		<div class="text-h6">darkTheme css</div>
		<DocPageCode
			lang="css"
			code="/*
  Theme: darkTheme
*/
.simple-keyboard.darkTheme {
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 0 0 5px 5px;
}

.simple-keyboard.darkTheme .hg-button {
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
}

.simple-keyboard.darkTheme .hg-button:active {
  background: #1c4995;
  color: white;
}

#root .simple-keyboard.darkTheme + .simple-keyboard-preview {
  background: #1c4995;
}"
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
