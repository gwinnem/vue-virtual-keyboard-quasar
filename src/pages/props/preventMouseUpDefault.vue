<template>
	<DocPage
		back-button-text="stopMouseDownPropagation"
		back-button-url="props-stopMouseDownPropagation"
		next-button-text="stopMouseUpPropagation"
		next-button-url="props-stopMouseUpPropagation"
		header="Props - preventMouseUpDefault"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Calls preventDefault() on MouseUp (including pointerup, touchend, touchcancel, etc.)</div>
		<DocPageCode lang="js" code='preventMouseUpDefault: false' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
