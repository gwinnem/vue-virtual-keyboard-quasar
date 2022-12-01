<template>
	<DocPage
		next-button-text="All Layouts"
		next-button-url="AllLayouts"
		header="Layouts"
		show-next-button="true"
	>
		<div class="text-h5">Default layout.</div>
		<p class="text-h6">
			There are 150 different layout options. The component only supports 5 row's
			of keyboard buttons. Keep this in mind when creating a new layout.
		</p>
		<DocPageCode
			lang="js"
			code="import { ILayoutItem } from '../interfaces/keyboard.interfaces';

/**
 * Layout: Default
 */
export default <ILayoutItem>{
  layout: {
  default: [
    '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
    '{tab} q w e r t y u i o p [ ] \\',
    '{lock} a s d f g h j k l ; ' < {enter}',
    '{shift} z x c v b n m , . / {shift}',
    '.com @ {space}',
    ],
  shift: [
    '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
    '{tab} Q W E R T Y U I O P { } |',
    '{lock} A S D F G H J K L : ' < {enter}',
    '{shift} Z X C V B N M < > ? {shift}',
    '.com @ {space}',
    ],
  },
};"
		/>
		<div class="text-h6 q-mt-lg">Default keyboard layout.</div>

		<q-img
			alt="Default Keyboard"
			class="keyboard-image"
			src="/img/default-keyboard.png"
			spinner-color="blue"
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../layouts/parts/DocPage.vue';
import DocPageCode from '../layouts/parts/DocPageCode.vue';
</script>

<style lang="scss" scoped>
.keyboard-image {
	display: block;
	margin-left: auto;
	margin-right: auto;
	max-width: 800px;
}
</style>
