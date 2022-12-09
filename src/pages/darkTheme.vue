<template>
	<input
		class="input"
		placeholder="Type then hit enter to hide the keyboard"
		style="margin-top: 30px"
		:value="input"
	/>
	<VirtualKeyboard
		class="virtual-keyboard"
		:input="input"
		@onChange="onChange"
		@onKeyPress="onKeyPress"
	/>
</template>

<script lang="ts" setup>
import { VirtualKeyboard } from 'VueVirtualKeyboard';
import { ref } from 'vue';

const input = ref<string>('');

const onChange = (value: string): void => {
	input.value = value;
};

const onKeyPress = (button: string): void => {
	console.log(button, 'button');
};
</script>

<style lang="scss" scoped>
.center-vertical {
	position: absolute;
	left: 50%;
	transform: translate(-50%);
}
.input {
	width: 100%;
	height: 50px;
	padding: 20px;
	font-size: 20px;
	border: none;
	box-sizing: border-box;
}
</style>
