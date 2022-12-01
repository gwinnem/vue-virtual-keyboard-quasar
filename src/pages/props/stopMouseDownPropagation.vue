<template>
	<DocPage
		back-button-text="preventMouseDownDefault"
		back-button-url="props-preventMouseDownDefault"
		next-button-text="preventMouseUpDefault"
		next-button-url="props-preventMouseUpDefault"
		header="Props - stopMouseDownPropagation"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Stops pointer down events on virtual-keyboard buttons from bubbling to parent
			elements.
		</div>
		<DocPageCode lang="js" code="stopMouseDownPropagation: false" />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
