<template>
	<DocPage
		back-button-text="display"
		back-button-url="props-display"
		next-button-text="theme"
		next-button-url="props-theme"
		header="Props - mergeDisplay"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			By default, when you set the "display" property, you replace the default one.
			This setting merges them instead.
		</div>
		<DocPageCode
			lang="js"
			code="mergeDisplay: true,

display: {
  '{bksp}': 'delete',
  '{enter}': 'submit',
}

// Result:
{
  '{bksp}': 'delete'
  '{enter}': 'submit',
  '{shift}': 'shift', // < Merged from default among others
  ....
}"
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
