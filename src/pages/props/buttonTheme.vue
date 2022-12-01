<template>
	<DocPage
		back-button-text="theme"
		back-button-url="props-theme"
		next-button-text="buttonAttributes"
		next-button-url="props-buttonAttributes"
		header="Props - buttonTheme"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			A prop to add your own css classes to one or several buttons. To add or
			remove individual buttonTheme entries, check out the methods
			<a href="methods-addButtonTheme">addButtonTheme</a> and
			<a href="methods-removeButtonTheme">removeButtonTheme</a> .
		</div>
		<DocPageCode
			lang="js"
			code='buttonTheme: [
  {
    class: "myCustomClass",
    buttons: "Q W E R T Y q w e r t y"
  },
  {
    class: "anotherCustomClass",
    buttons: "Q q"
  },
  ...
]'
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
