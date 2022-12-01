<template>
	<DocPage
		back-button-text="getCaretPositionEnd"
		back-button-url="methods-getCaretPositionEnd"
		header="Methods - setCaretPosition"
		show-back-button="true"
	>
		<div class="text-h6">
			Sets the virtual-keyboard's internal caret position.
		</div>
		<DocPageCode
			lang="js"
			code="// Set both caretStart and caretEnd
keyboard.setCaretPosition(1);

// caretStart = 1, caretEnd = 2
keyboard.setCaretPosition(1, 2);"
		/>
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
