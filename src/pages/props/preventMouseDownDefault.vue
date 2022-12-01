<template>
	<DocPage
		back-button-text="useTouchEvents"
		back-button-url="props-useTouchEvents"
		next-button-text="stopMouseDownPropagation"
		next-button-url="props-stopMouseDownPropagation"
		header="Props - preventMouseDownDefault"
		show-back-button="true"
		show-next-button="true"
	>
		<div class="text-h6">
			Prevents loss of input focus from clicking on the virtual-keyboard buttons
		</div>
		<DocPageCode lang="js" code="preventMouseDownDefault: false" />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
