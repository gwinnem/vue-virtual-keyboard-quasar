<template>
	<DocPage
		back-button-text="Events"
		back-button-url="events"
		next-button-text="onKeyReleased"
		next-button-url="events-onKeyReleased"
		header="Events - onKeyPress"
		show-back-button="true"
		show-next-button="true">
		<div class="text-h6">Executes the callback function on key press. Returns button layout name (i.e.: “{shift}”).</div>
		<DocPageCode lang="js" code='  const onKeyPress = (button: string): void => {
    if(button === `{enter}`) {
      isKeyboardOpen.value = false;
    } else {
      console.log(button, "button")
    }
  };' />
	</DocPage>
</template>

<script setup>
import DocPage from '../../layouts/parts/DocPage.vue';
import DocPageCode from '../../layouts/parts/DocPageCode.vue';
</script>
