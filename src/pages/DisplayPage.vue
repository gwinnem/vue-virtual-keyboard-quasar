<template>
	<DocPage>
		<div class="doc-heading doc-h1">Display</div>
		<div class="text-h6">
			Replaces layout buttons with a human-friendly name (e.g.: “backspace”).
		</div>
		<div class="text-h6">
			It is also possible to add unicode letters and icons to the keyboard. See the
			German display file below.
		</div>
		<div class="text-h6">
			<a
				href="https://www.rapidtables.com/code/text/unicode-characters.html"
				target="_blank"
				>Unicode characters table.</a
			>
		</div>
		<div class="text-h5">German display file.</div>
		<DocPageCode
			lang="js"
			code='/**
 * German keyboard layout
 */
import { IDisplay } from "src/core/interfaces/keyboard.interfaces";
export const display: IDisplay = {
	"{bksp}": `\u232b`,
	"{caps}": `Caps  \u21ea`,
	"{ctrl}": `Strg`,
	"{ctrlleft}": `Strg`,
	"{ctrlright}": `Strg`,
	"{enter}": `\u21A9`,
	"{lock}": `caps \u21ea`,
	"{shift}": `\u2191`,
	"{shiftleft}": `\u2191`,
	"{shiftright}": `\u2191`,
	"{space}": ` `,
	"{tab}": `\u2b7e`,
	"{alt}": `Alt`,
	"{altleft}": `Alt`,
	"{altright}": `Alt Gr`,
	// eslint-disable-next-line vue/sort-keys,sort-keys
	"@": `@`,
};
'
		/>
		<div class="text-h6 q-mt-lg">German keyboard with unicode icons.</div>
		<div class="row">
			<q-img
				alt="Default Keyboard"
				class="keyboard-image"
				src="/img/german-keyboard.png"
				spinner-color="blue"
			/>
		</div>
		<q-separator class="q-mt-lg q-mb-lg" />
		<div class="text-h5 q-mt-lg">
			Default display file with all keyboard key's.
		</div>
		<DocPageCode
			lang="js"
			code='/**
 * Default keyboard layout
 */
import { IDisplay } from "src/core/interfaces/keyboard.interfaces";
export const display: IDisplay = {
  "{empty}": ` `,
  "{bksp}": `backspace`,
  "{backspace}": `backspace`,
  "{enter}": `< enter`,
  "{shift}": `shift`,
  "{shiftleft}": `shift`,
  "{shiftright}": `shift`,
  "{alt}": `alt`,
  "{altleft}": `Alt`,
  "{altright}": `Alt Gr`,
  "{s}": `shift`,
  "{tab}": `tab`,
  "{lock}": `caps`,
  "{capslock}": `caps`,
  "{space}": ` `,
  "{//}": ` `,
  "{esc}": `esc`,
  "{escape}": `esc`,
  "{f1}": `f1`,
  "{f2}": `f2`,
  "{f3}": `f3`,
  "{f4}": `f4`,
  "{f5}": `f5`,
  "{f6}": `f6`,
  "{f7}": `f7`,
  "{f8}": `f8`,
  "{f9}": `f9`,
  "{f10}": `f10`,
  "{f11}": `f11`,
  "{f12}": `f12`,
  "{numpaddivide}": `/`,
  "{numlock}": `lock`,
  "{arrowup}": `↑`,
  "{arrowleft}": `←`,
  "{arrowdown}": `↓`,
  "{arrowright}": `→`,
  "{prtscr}": `print`,
  "{scrolllock}": `scroll`,
  "{pause}": `pause`,
  "{insert}": `ins`,
  "{home}": `home`,
  "{pageup}": `up`,
  "{delete}": `del`,
  "{forwarddelete}": `del`,
  "{end}": `end`,
  "{pagedown}": `down`,
  "{numpadmultiply}": `*`,
  "{numpadsubtract}": `-`,
  "{numpadadd}": `+`,
  "{numpadenter}": `enter`,
  "{period}": `.`,
  "{numpaddecimal}": `.`,
  "{numpad0}": `0`,
  "{numpad1}": `1`,
  "{numpad2}": `2`,
  "{numpad3}": `3`,
  "{numpad4}": `4`,
  "{numpad5}": `5`,
  "{numpad6}": `6`,
  "{numpad7}": `7`,
  "{numpad8}": `8`,
  "{numpad9}": `9`,
};'
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
