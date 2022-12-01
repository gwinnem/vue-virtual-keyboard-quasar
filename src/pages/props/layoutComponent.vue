<template>
	<DocPage
		back-button-text="Props"
		back-button-url="props"
		next-button-text="layoutName"
		next-button-url="props-layoutName"
		header="Props - layout"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Use this property when you want to use a specific layout.
		</div>
		<DocPageCode
			lang="js"
			code="import { ILayoutItem } from '../interfaces/keyboard.interfaces';

/**
 * Layout: Default
 */
export default <ILayoutItem>{
  layout: {
    default: [
      `\` 1 2 3 4 5 6 7 8 9 0 - = {bksp}`,
      `{tab} q w e r t y u i o p [ ] #`,
      `a s d f g h j k l ; ' {enter}`,
      `{shift} \u005c z x c v b n m , . / {shift}`,
      `{alt} {space} {alt}`,
    ],
    shift: [
      `\u00ac ! \u0022 \u00a3 $ % ^ & * ( ) _ + {bksp}`,
      `{tab} Q W E R T Y U I O P { } ~`,
      `A S D F G H J K L : @ {enter}`,
      `{shift} | Z X C V B N M < > / {shift}`,
      `{alt} {space} {alt}`,
    ],
  },
};
"
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
