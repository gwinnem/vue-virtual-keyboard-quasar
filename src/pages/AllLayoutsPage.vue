<template>
	<DocPage
		back-button-text="Layouts"
		back-button-url="Layouts"
		header="All Layouts"
		show-back-button="true">
		<div class="text-h6"><a href="https://en.wikipedia.org/wiki/List_of_QWERTY_keyboard_language_variants" target="_blank">List of QWERTY keyboard language variants</a></div>
		<div class="text-h6 q-mt-lg">Complete list of all available keyboard layouts.</div>
		<div class="row">
			<div class="col-6">
				<q-list bordered separator>
					<q-item v-for="item in leftList" :key="item.name" clickable v-ripple :href="item.route" target="_blank">
						<q-item-section class="text-h6">{{item.name}}</q-item-section>
					</q-item>
				</q-list>
			</div>
			<div class="col-6">
				<q-list bordered separator>
					<q-item v-for="item in rightList" :key="item.name" clickable v-ripple :href="item.route" target="_blank">
						<q-item-section class="text-h6">{{item.name}}</q-item-section>
					</q-item>
				</q-list>
			</div>
		</div>
	</DocPage>
</template>

<script setup>
import DocPage from '../layouts/parts/DocPage.vue';

const leftList = [
	{name: 'Albanian', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Albanian.ts'},
	{name: 'Arabic 101', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Arabic-101.ts'},
	{name: 'Arabic 102', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Arabic-102.ts'},
	{name: 'Arabic 102 azerty', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Arabic-102-azerty.ts'},
	{name: 'Armenian Eastern', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Armenian-Eastern.ts'},
	{name: 'Armenian Western', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Armenian-Western.ts'},
	{name: 'Assamese Inscript', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Assamese-Inscript.ts'},
	{name: 'Azeri Cyrillic', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Azeri-Cyrillic.ts'},
	{name: 'Azeri Latin', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Azeri-Latin.ts'},
	{name: 'Bashir', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Bashir.ts'},
	{name: 'Belarusian', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Belarusian.ts'},
	{name: 'Belgian Comma', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Belgian-Comma.ts'},
	{name: 'Belgian French', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Belgian-French.ts'},
	{name: 'Bengali', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Bengali.ts'},
	{name: 'Bengali Inscript', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Bengali-Inscript.ts'},
	{name: 'Bosnian Cyrillic', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Bosnian-Cyrillic.ts'},
	{name: 'Bulgarian Phonetic', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Bulgarian-Phonetic.ts'},
	{name: 'Bulgarian Phonetic Traditional', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Bulgarian-Phonetic-Traditional.ts'},
	{name: 'Bulgarian Typewriter', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Bulgarian-Typewriter.ts'},
	{name: 'Canadian French', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Canadian-French.ts'},
	{name: 'Canadian French Legacy', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Canadian-French-Legacy.ts'},
	{name: 'Canadian Multilingual Standard', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Canadian-Multilingual.ts'},
	{name: 'Chinese Bopomofo IME', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Chinese-Bopomofo.ts'},
	{name: 'Chinese ChaJei IME', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Chinese-ChaJei.ts'},
	{name: 'Czech', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Czech.ts'},
	{name: 'Czech Programmers', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Czech-Programmers.ts'},
	{name: 'Czech QWERTY', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Czech-Qwerty.ts'},
	{name: 'Danish', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Danish.ts'},
	{name: 'Devanagari - INSCRIPT', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Devanagari-Inscript.ts'},
	{name: 'Divehi Phonetic', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Divehi-Phonetic.ts'},
	{name: 'Divehi Typewriter', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Divehi-Typewriter.ts'},
	{name: 'Dutch', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Dutch.ts'},
	{name: 'Estonian', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Estonian.ts'},
	{name: 'Faeroese', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Faeroese.ts'},
	{name: 'Finland-Sweden Sami Extended', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Finland-Sweden-Sami-Extended.ts'},
	{name: 'Finnish', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Finnish.ts'},
	{name: 'French', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-French.ts'},
	{name: 'Gaelic', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Gaelic.ts'},
	{name: 'Georgian', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Georgian.ts'},
	{name: 'Georgian Ergonomic', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Georgian-Ergonomic.ts'},
	{name: 'Georgian QWERTY', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Georgian-Qwerty.ts'},
	{name: 'German', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-German.ts'},
	{name: 'Greek', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Greek.ts'},
	{name: 'Greek 220', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Greek-220.ts'},
	{name: 'Greek 319', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Greek-319.ts'},
	{name: 'Greek Latin', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Greek-Latin.ts'},
	{name: 'Greek Latin 220', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Greek-Latin-220.ts'},
	{name: 'Greek Latin 319', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Greek-Latin-319.ts'},
	{name: 'Greek Polytonic', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Greek-Polytonic.ts'},
	{name: 'Greenlandic', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Greenlandic.ts'},
	{name: 'Gujarati', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Gujarati.ts'},
	{name: 'Hausa', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Hausa.ts'},
	{name: 'Hebrew', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Hebrew.ts'},
	{name: 'Hindi', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Hindi.ts'},
	{name: 'Hungarian', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Hungarian.ts'},
	{name: 'Hungarian 101', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Hungarian-101.ts'},
	{name: 'Icelandic', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Icelandic.ts'},
	{name: 'Igbo', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Igbo.ts'},
	{name: 'Inuktitut Latin', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Inuktitut-Latin.ts'},
	{name: 'Inuktitut Naqittaut', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Inuktitut-Nagittaut.ts'},
	{name: 'Irish', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Irish.ts'},
	{name: 'Italian', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Italian.ts'},
	{name: 'Japanese English Full Width', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Japanese-English-Full-Width.ts'},
	{name: 'Japanese English Half Width', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Japanese-English-Half-Width.ts'},
	{name: 'Japanese Hiragana', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Japanese-Hiragana.ts'},
	{name: 'Japanese Katakana Full Width', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Japanese-Katakana-Full-Width.ts'},
	{name: 'Japanese Katakana Half Width', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Japanese-Katakana-Half-Width.ts'},
	{name: 'Kannada', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-kannada.ts'},
	{name: 'Kazakh', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Kazakh.ts'},
	{name: 'Korean', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Korean.ts'},
	{name: 'Kyrgyz Cyrillic', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Kyrgyz-Cyrillic.ts'},
	{name: 'Lao', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Lao.ts'},
	{name: 'Latin American', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Latin-American.ts'},
	{name: 'Latvian', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Latvian.ts'},
	{name: 'Latvian QWERTY', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Latvian-Qwerty.ts'},
];

const rightList = [
	{name: 'Lithuanian', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Lithuanian.ts'},
	{name: 'Lithuanian IBM', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Lithuanian-Ibm.ts'},
	{name: 'Lithuanian Standard', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Lithuanian-Standard.ts'},
	{name: 'Luxembourgish', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Luxembourgish.ts'},
	{name: 'Macedonian (FYROM)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Macedonian-Fyrom.ts'},
	{name: 'Macedonian (FYROM) - Standard', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Macedonian-Fyrom-Standard.ts'},
	{name: 'Malayalam', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Malayalam.ts'},
	{name: 'Maltese 47-Key', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Maltese-47-Key.ts'},
	{name: 'Maltese 48-Key', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Maltese-48-Key.ts'},
	{name: 'Maori', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Maori.ts'},
	{name: 'Marathi', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Marathi.ts'},
	{name: 'Mongolian Cyrillic', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Mongolian-Cyrillic.ts'},
	{name: 'Mongolian (Mongolian Script)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Mongolian-Script.ts'},
	{name: 'Nepali', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Nepali.ts'},
	{name: 'Norwegian', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Norwegian.ts'},
	{name: 'Norwegian with Sami', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Norwegian-Sami.ts'},
	{name: 'Norwegian with Sami Extended', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Norwegian-Sami-Extended.ts'},
	{name: 'Oriya', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Oriya.ts'},
	{name: 'Pashto (Afghanistan)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Pashto-Afghanistan.ts'},
	{name: 'Persian', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Persian.ts'},
	{name: 'Polish (214)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Polish-214.ts'},
	{name: 'Polish (Programmers)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Polish-Programmers.ts'},
	{name: 'Portuguese', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Portuguese.ts'},
	{name: 'Portuguese (Brazilian ABNT)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Portuguese-Brazilian.ts'},
	{name: 'Punjabi', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Punjabi.ts'},
	{name: 'Romanian (Legacy)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Romanian-Legacy.ts'},
	{name: 'Romanian (Programmers)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Romanian-Programmers.ts'},
	{name: 'Romanian (Standard)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Romanian-Standard.ts'},
	{name: 'Russian', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Russian.ts'},
	{name: 'Russian Typewriter', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Russian-Typewriter.ts'},
	{name: 'Serbian (Cyrillic)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Serbian-Cyrillic.ts'},
	{name: 'Serbian (Latin)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Serbian-Latin.ts'},
	{name: 'Setswana', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Setswana.ts'},
	{name: 'Setswana (Sesotho sa Leboa)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Setswana-Sesoto-sa-Leboa.ts'},
	{name: 'Sinhala', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Sinhala.ts'},
	{name: 'Sinhala Wij 9', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Sinhala-Wij-9.ts'},
	{name: 'Slovakian', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Slovakian.ts'},
	{name: 'Slovakian (QWERTY)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Slovakian-Qwerty.ts'},
	{name: 'Slovenian', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Slovenian.ts'},
	{name: 'Sorbian Extended', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Sorbian-Extended.ts'},
	{name: 'Sorbian Standard', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Sorbian-Standard.ts'},
	{name: 'Sorbian Standard (Legacy)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Sorbian-Standard-Legacy.ts'},
	{name: 'Spanish', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Spanish.ts'},
	{name: 'Spanish Variation', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Spanish-Variation.ts'},
	{name: 'Swedish', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Swedish.ts'},
	{name: 'Swiss German', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Swiss-German.ts'},
	{name: 'Syriac', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Syriac.ts'},
	{name: 'Syriac Phonetic', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Syriac-Phonetic.ts'},
	{name: 'Tajik', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Tajik.ts'},
	{name: 'Tamil', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Tamil.ts'},
	{name: 'Tatar', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Tatar.ts'},
	{name: 'Telugu', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Telugu.ts'},
	{name: 'Thai Kedmanee', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Thai-Kedmanee.ts'},
	{name: 'Thai Pattachote', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Thai-Pattachote.ts'},
	{name: 'Tibetan (PRC)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Tibetan-Prc.ts'},
	{name: 'Turkish F', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Turkish-F.ts'},
	{name: 'Turkish Q', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Turkish-Q.ts'},
	{name: 'Turkmen', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Turkmen.ts'},
	{name: 'Ukranian', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Ukranian.ts'},
	{name: 'Ukranian (Enhanced)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Ukranian-Enhanced.ts'},
	{name: 'United Kingdom', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-United-Kingdom.ts'},
	{name: 'Urdu', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Urdu.ts'},
	{name: 'US-English (IBM Arabic 238_L)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-US%20English-IBM-Arabic-238_L.ts'},
	{name: 'US-Dvorak', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-US-Dvorak.ts'},
	{name: 'US-Dvorak for left hand', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-US-Dvorak-Left-Hand.ts'},
	{name: 'US-Dvorak for right hand', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-US-Dvorak-Right-Hand.ts'},
	{name: 'US-English (Latin)', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-US-English-Latin.ts'},
	{name: 'US-English International', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-US-International.ts'},
	{name: 'Uyghur', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Uyghur.ts'},
	{name: 'Uyghur Legacy', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Uyghur-Legacy.ts'},
	{name: 'Uzbek Cyrillic', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Uzbek-Cyrillic.ts'},
	{name: 'Vietnamese', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Vietnamese.ts'},
	{name: 'Wolof', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Wolof.ts'},
	{name: 'Yakut', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Yakut.ts'},
	{name: 'Yoruba', route: 'https://github.com/gwinnem/vue-virtual-keyboard/blob/main/src/core/ms-keyboards/ms-Yoruba.ts'},
];
</script>

<style lang="scss" scoped>
.keyboard-image {
	display: block;
	margin-left: auto;
	margin-right: auto;
	max-width: 800px;
}
</style>
