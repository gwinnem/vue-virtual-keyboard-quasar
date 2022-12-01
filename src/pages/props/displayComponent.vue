<template>
	<DocPage
		back-button-text="debug"
		back-button-url="props-debug"
		next-button-text="mergeDisplay"
		next-button-url="props-mergeDisplay"
		header="Props - display"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Replaces layout buttons with a human-friendly name (e.g.: “backspace”).
		</div>
		<DocPageCode
			lang="js"
			code="import { IDisplay } from 'src/core/interfaces/keyboard.interfaces';
  export const display: IDisplay = {
  '{bksp}': 'backspace',
  '{enter}': '< enter',
  '@': 'at',
  ...
}"
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
