import { RouteRecordRaw } from 'vue-router';
const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('layouts/MainLayout.vue'),
		children: [
			{ path: '', component: () => import('pages/WelcomePage.vue') },
			{ path: 'start', component: () => import('pages/StartPage.vue') },
			{ path: 'demos', component: () => import('pages/DemoPage.vue') },
			{ path: 'props', component: () => import('pages/PropsPage.vue') },
			{ path: 'theme', component: () => import('pages/darkTheme.vue') },
			{
				path: 'props-layout',
				component: () => import('pages/props/layoutComponent.vue'),
			},
			{
				path: 'props-layoutName',
				component: () => import('pages/props/layoutName.vue'),
			},
			{
				path: 'props-enableLayoutCandidates',
				component: () => import('pages/props/enableLayoutCandidates.vue'),
			},
			{
				path: 'props-layoutCandidates',
				component: () => import('pages/props/layoutCandidates.vue'),
			},
			{
				path: 'props-layoutCandidatesPageSize',
				component: () => import('pages/props/layoutCandidatesPageSize.vue'),
			},
			{
				path: 'props-excludeFromLayout',
				component: () => import('pages/props/excludeFromLayout.vue'),
			},
			{
				path: 'props-autoUseTouchEvents',
				component: () => import('pages/props/autoUseTouchEvents.vue'),
			},
			{
				path: 'props-useMouseEvents',
				component: () => import('pages/props/useMouseEvents.vue'),
			},
			{
				path: 'props-useTouchEvents',
				component: () => import('pages/props/useTouchEvents.vue'),
			},
			{
				path: 'props-preventMouseDownDefault',
				component: () => import('pages/props/preventMouseDownDefault.vue'),
			},
			{
				path: 'props-stopMouseDownPropagation',
				component: () => import('pages/props/stopMouseDownPropagation.vue'),
			},
			{
				path: 'props-preventMouseUpDefault',
				component: () => import('pages/props/preventMouseUpDefault.vue'),
			},
			{
				path: 'props-stopMouseUpPropagation',
				component: () => import('pages/props/stopMouseUpPropagation.vue'),
			},
			{
				path: 'props-physicalKeyboardHighlight',
				component: () => import('pages/props/physicalKeyboardHighlight.vue'),
			},
			{
				path: 'props-physicalKeyboardHighlightPress',
				component: () => import('pages/props/physicalKeyboardHighlightPress.vue'),
			},
			{
				path: 'props-physicalKeyboardHighlightTextColor',
				component: () =>
					import('pages/props/physicalKeyboardHighlightTextColor.vue'),
			},
			{
				path: 'props-physicalKeyboardHighlightBgColor',
				component: () => import('pages/props/physicalKeyboardHighlightBgColor.vue'),
			},
			{
				path: 'props-debug',
				component: () => import('pages/props/debugComponent.vue'),
			},
			{
				path: 'props-display',
				component: () => import('pages/props/displayComponent.vue'),
			},
			{
				path: 'props-mergeDisplay',
				component: () => import('pages/props/mergeDisplay.vue'),
			},
			{
				path: 'props-theme',
				component: () => import('pages/props/themeComponent.vue'),
			},
			{
				path: 'props-buttonTheme',
				component: () => import('pages/props/buttonTheme.vue'),
			},
			{
				path: 'props-buttonAttributes',
				component: () => import('pages/props/buttonAttributes.vue'),
			},
			{
				path: 'props-useButtonTag',
				component: () => import('pages/props/useButtonTag.vue'),
			},
			{
				path: 'props-disableRowButtonContainers',
				component: () => import('pages/props/disableRowButtonContainers.vue'),
			},
			{
				path: 'props-disableButtonHold',
				component: () => import('pages/props/disableButtonHold.vue'),
			},
			{
				path: 'props-disableCaretPositioning',
				component: () => import('pages/props/disableCaretPositioning.vue'),
			},
			{
				path: 'props-newLineOnEnter',
				component: () => import('pages/props/newLineOnEnter.vue'),
			},
			{
				path: 'props-tabCharOnTab',
				component: () => import('pages/props/tabCharOnTab.vue'),
			},
			{
				path: 'props-inputName',
				component: () => import('pages/props/inputName.vue'),
			},
			{
				path: 'props-inputPattern',
				component: () => import('pages/props/inputPattern.vue'),
			},
			{
				path: 'props-syncInstanceInputs',
				component: () => import('pages/props/syncInstanceInputs.vue'),
			},
			{
				path: 'props-maxLength',
				component: () => import('pages/props/maxLength.vue'),
			},
			{
				path: 'props-rtl',
				component: () => import('pages/props/rtlComponent.vue'),
			},
			{
				path: 'props-keyboardClass',
				component: () => import('pages/props/keyboardClass.vue'),
			},

			{ path: 'methods', component: () => import('pages/MethodsPage.vue') },
			{
				path: 'methods-clearInput',
				component: () => import('pages/methods/clearInput.vue'),
			},
			{
				path: 'methods-getInput',
				component: () => import('pages/methods/getInput.vue'),
			},
			{
				path: 'methods-replaceInput',
				component: () => import('pages/methods/replaceInput.vue'),
			},
			{
				path: 'methods-setInput',
				component: () => import('pages/methods/setInput.vue'),
			},
			{
				path: 'methods-addButtonTheme',
				component: () => import('pages/methods/addButtonTheme.vue'),
			},
			{
				path: 'methods-removeButtonTheme',
				component: () => import('pages/methods/removeButtonTheme.vue'),
			},
			{
				path: 'methods-getButtonElement',
				component: () => import('pages/methods/getButtonElement.vue'),
			},
			{
				path: 'methods-recurseButtons',
				component: () => import('pages/methods/recurseButtons.vue'),
			},
			{
				path: 'methods-setOptions',
				component: () => import('pages/methods/setOptions.vue'),
			},
			{
				path: 'methods-dispatch',
				component: () => import('pages/methods/dispatchComponent.vue'),
			},
			{
				path: 'methods-destroy',
				component: () => import('pages/methods/destroyComponent.vue'),
			},
			{
				path: 'methods-getCaretPosition',
				component: () => import('pages/methods/getCaretPosition.vue'),
			},
			{
				path: 'methods-getCaretPositionEnd',
				component: () => import('pages/methods/getCaretPositionEnd.vue'),
			},
			{
				path: 'methods-setCaretPosition',
				component: () => import('pages/methods/setCaretPosition.vue'),
			},

			{ path: 'events', component: () => import('pages/EventsPage.vue') },
			{
				path: 'events-onKeyPress',
				component: () => import('pages/events/onKeyPress.vue'),
			},
			{
				path: 'events-onKeyReleased',
				component: () => import('pages/events/onKeyReleased.vue'),
			},
			{
				path: 'events-onChange',
				component: () => import('pages/events/onChange.vue'),
			},
			{
				path: 'events-onChangeAll',
				component: () => import('pages/events/onChangeAll.vue'),
			},
			{
				path: 'events-onRender',
				component: () => import('pages/events/onRender.vue'),
			},
			{
				path: 'events-beforeFirstRender',
				component: () => import('pages/events/beforeFirstRender.vue'),
			},
			{
				path: 'events-beforeRender',
				component: () => import('pages/events/beforeRender.vue'),
			},
			{
				path: 'events-onInit',
				component: () => import('pages/events/onInit.vue'),
			},

			{ path: 'Layouts', component: () => import('pages/LayoutsPage.vue') },
			{ path: 'AllLayouts', component: () => import('pages/AllLayoutsPage.vue') },
			{ path: 'Display', component: () => import('pages/DisplayPage.vue') },
			{ path: 'Interfaces', component: () => import('pages/InterfacesPage.vue') },
		],
	},

	// Always leave this as last one,
	// but you can also remove it
	{
		path: '/:catchAll(.*)*',
		component: () => import('pages/ErrorNotFound.vue'),
	},
];

export default routes;
