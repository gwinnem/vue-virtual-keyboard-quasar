<template>
	<DocPage
		back-button-text="buttonTheme"
		back-button-url="props-buttonTheme"
		next-button-text="useButtonTag"
		next-button-url="props-useButtonTag"
		header="Props - buttonAttributes"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			A prop to add your own attributes to one or several buttons.
		</div>
		<DocPageCode
			lang="js"
			code='buttonAttributes: [
  {
    attribute: "aria-label",
    value: "bee",
    buttons: "b B"
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
