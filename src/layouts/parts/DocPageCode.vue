<script>
import 'prismjs';
import { h, computed } from 'vue';

export default {
	name: 'CodePrism',

	props: {
		code: String,
		lang: String,
	},

	setup(props) {
		const className = computed(() => `language-${props.lang}`);

		return () =>
			h('pre', { class: className.value }, [
				h('code', {
					class: className.value,
					innerHTML: Prism.highlight(
						props.code,
						Prism.languages[props.lang],
						props.lang
					),
				}),
			]);
	},
};
</script>
<style lang="scss">
code[class*='language-'],
pre[class*='language-'] {
	color: white;
	background: none;
	text-shadow: 0 1px black;
	font-size: 1em;
	text-align: left;
	white-space: pre;
	word-spacing: normal;
	word-break: normal;
	word-wrap: normal;
	line-height: 1.5;

	-moz-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
}

pre[class*='language-']::-moz-selection,
pre[class*='language-'] ::-moz-selection,
code[class*='language-']::-moz-selection,
code[class*='language-'] ::-moz-selection {
	text-shadow: none;
	background: #b3d4fc;
}

pre[class*='language-']::selection,
pre[class*='language-'] ::selection,
code[class*='language-']::selection,
code[class*='language-'] ::selection {
	text-shadow: none;
	background: #b3d4fc;
}

@media print {
	code[class*='language-'],
	pre[class*='language-'] {
		text-shadow: none;
	}
}

/* Code blocks */
pre[class*='language-'] {
	padding: 1em;
	margin: 0.5em 0;
	overflow: auto;
	border-radius: 0.5em;
	box-shadow: 1px 1px 0.5em black inset;
}

:not(pre) > code[class*='language-'],
pre[class*='language-'] {
	background: hsl(30, 20%, 25%);
}

/* Inline code */
:not(pre) > code[class*='language-'] {
	padding: 0.1em;
	border-radius: 0.3em;
	white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
	color: gray;
}

.token.punctuation {
	color: #999;
}

.token.namespace {
	opacity: 0.7;
}

.token.property,
.token.tag,
.token.boolean,
.token.number,
.token.constant,
.token.symbol,
.token.deleted {
	color: #fc8080;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
	color: #8fc913;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string {
	color: white;
	//background: hsla(0, 0%, 100%, .5);
}

.token.atrule,
.token.attr-value,
.token.keyword {
	color: #80c9ff;
}

.token.function,
.token.class-name {
	color: #e8adbb;
}

.token.regex,
.token.important,
.token.variable {
	color: #e90;
}

.token.important,
.token.bold {
	font-weight: bold;
}
.token.italic {
	font-style: italic;
}

.token.entity {
	cursor: help;
}
</style>
