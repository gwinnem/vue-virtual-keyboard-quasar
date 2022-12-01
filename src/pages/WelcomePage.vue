<template>
	<q-page class="doc-page">
				<div class="doc-heading doc-h1">What is VueVirtualKeyboard?</div>

				<div class="text-subtitle1">The VueVirtualKeyboard package is built upon the<a href="https://hodgef.com/simple-keyboard/" target="_blank"> simple-keyboard by Fransisco Hodge</a>.</div>
				<div class="text-subtitle1">The original version only has 39 keyboard layouts, while this one has 150 keyboard layouts.</div>
				<div class="text-subtitle1">Future work will be a complete refactoring converting the simple-keyboard into a proper VUE component.</div>

				<q-separator class="q-my-md keyboard-image-width" />

				<div class="q-mt-lg row text-h6">Default keyboard layout and default theme.</div>

				<div class="row">
					<q-img
						alt="Default Keyboard"
						class="keyboard-image-width"
						src="/img/default-keyboard.png"
						spinner-color="blue"
					/>
				</div>

				<q-separator class="q-my-md keyboard-image-width" />

				<div class="row text-h6">Pashto keyboard layout and dark theme.</div>
				<div class="row">
					<q-img
						alt="Keyboard Dark Theme"
						class="keyboard-image-width"
						src="/img/dark-mode-keyboard.png"
						spinner-color="blue"
					/>
				</div>
	</q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
.doc-page {
	padding: 16px 46px;
	max-width: 900px;
	margin-left: auto;
	margin-right: auto;
}

.keyboard-image-width {
	max-width: 800px;
}
</style>
