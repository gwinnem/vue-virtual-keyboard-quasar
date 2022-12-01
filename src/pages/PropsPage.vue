<template>
	<DocPage>
		<div class="doc-heading doc-h1">Props</div>
	<div class="row">
		<div class="col-6">
			<q-list bordered separator>
				<q-item v-for="item in propsLeft" :key="item.name" clickable v-ripple :to="item.route">
					<q-item-section class="text-h6">{{item.name}}</q-item-section>
				</q-item>
			</q-list>
		</div>
		<div class="col-6">
			<q-list bordered separator>
				<q-item v-for="item in propsRight" :key="item.name" clickable v-ripple :to="item.route">
					<q-item-section class="text-h6">{{item.name}}</q-item-section>
				</q-item>
			</q-list>
		</div>
	</div>
	</DocPage>
</template>

<script setup>
import DocPage from '../layouts/parts/DocPage.vue';

const propsLeft = [
	{name: 'layout', route: 'props-layout'},
	{name: 'layoutName', route: 'props-layoutName'},
	{name: 'enableLayoutCandidates', route: 'props-enableLayoutCandidates'},
	{name: 'layoutCandidates', route: 'props-layoutCandidates'},
	{name: 'layoutCandidatesPageSize', route: 'props-layoutCandidatesPageSize'},
	{name: 'excludeFromLayout', route: 'props-excludeFromLayout'},
	{name: 'autoUseTouchEvents', route: 'props-autoUseTouchEvents'},
	{name: 'useMouseEvents', route: 'props-useMouseEvents'},
	{name: 'useTouchEvents', route: 'props-useTouchEvents'},
	{name: 'preventMouseDownDefault', route: 'props-preventMouseDownDefault'},
	{name: 'stopMouseDownPropagation', route: 'props-stopMouseDownPropagation'},
	{name: 'preventMouseUpDefault', route: 'props-preventMouseUpDefault'},
	{name: 'stopMouseUpPropagation', route: 'props-stopMouseUpPropagation'},
	{name: 'physicalKeyboardHighlight', route: 'props-physicalKeyboardHighlight'},
	{name: 'physicalKeyboardHighlightPress', route: 'props-physicalKeyboardHighlightPress'},
	{name: 'physicalKeyboardHighlightTextColor', route: 'props-physicalKeyboardHighlightTextColor'},
	{name: 'physicalKeyboardHighlightBgColor', route: 'props-physicalKeyboardHighlightBgColor'},
	{name: 'debug', route: 'props-debug'},
];

const propsRight = [
	{name: 'display', route: 'props-display'},
	{name: 'mergeDisplay', route: 'props-mergeDisplay'},
	{name: 'theme', route: 'props-theme'},
	{name: 'buttonTheme', route: 'props-buttonTheme'},
	{name: 'buttonAttributes', route: 'props-buttonAttributes'},
	{name: 'useButtonTag', route: 'props-useButtonTag'},
	{name: 'disableRowButtonContainers', route: 'props-disableRowButtonContainers'},
	{name: 'disableButtonHold', route: 'props-disableButtonHold'},
	{name: 'disableCaretPositioning', route: 'props-disableCaretPositioning'},
	{name: 'newLineOnEnter', route: 'props-newLineOnEnter'},
	{name: 'tabCharOnTab', route: 'props-tabCharOnTab'},
	{name: 'inputName', route: 'props-inputName'},
	{name: 'inputPattern', route: 'props-inputPattern'},
	{name: 'syncInstanceInputs', route: 'props-syncInstanceInputs'},
	{name: 'maxLength', route: 'props-maxLength'},
	{name: 'rtl', route: 'props-rtl'},
	{name: 'keyboardClass', route: 'props-keyboardClass'},
];
</script>
