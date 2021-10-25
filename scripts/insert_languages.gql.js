var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var insertLanguages = gql(__makeTemplateObject(["\n    mutation insertLanguages {\n        insert_languages(objects: [{iso_code: \"af\", name: \"Afrikaans\"}, {iso_code: \"af-ZA\", name: \"Afrikaans (South Africa)\"}, {iso_code: \"ar\", name: \"Arabic\"}, {iso_code: \"ar-AE\", name: \"Arabic (U.A.E.)\"}, {iso_code: \"ar-BH\", name: \"Arabic (Bahrain)\"}, {iso_code: \"ar-DZ\", name: \"Arabic (Algeria)\"}, {iso_code: \"ar-EG\", name: \"Arabic (Egypt)\"}, {iso_code: \"ar-IQ\", name: \"Arabic (Iraq)\"}, {iso_code: \"ar-JO\", name: \"Arabic (Jordan)\"}, {iso_code: \"ar-KW\", name: \"Arabic (Kuwait)\"}, {iso_code: \"ar-LB\", name: \"Arabic (Lebanon)\"}, {iso_code: \"ar-LY\", name: \"Arabic (Libya)\"}, {iso_code: \"ar-MA\", name: \"Arabic (Morocco)\"}, {iso_code: \"ar-OM\", name: \"Arabic (Oman)\"}, {iso_code: \"ar-QA\", name: \"Arabic (Qatar)\"}, {iso_code: \"ar-SA\", name: \"Arabic (Saudi Arabia)\"}, {iso_code: \"ar-SY\", name: \"Arabic (Syria)\"}, {iso_code: \"ar-TN\", name: \"Arabic (Tunisia)\"}, {iso_code: \"ar-YE\", name: \"Arabic (Yemen)\"}, {iso_code: \"az\", name: \"Azeri (Latin)\"}, {iso_code: \"az-AZ\", name: \"Azeri (Latin) (Azerbaijan)\"}, {iso_code: \"az-AZ\", name: \"Azeri (Cyrillic) (Azerbaijan)\"}, {iso_code: \"be\", name: \"Belarusian\"}, {iso_code: \"be-BY\", name: \"Belarusian (Belarus)\"}, {iso_code: \"bg\", name: \"Bulgarian\"}, {iso_code: \"bg-BG\", name: \"Bulgarian (Bulgaria)\"}, {iso_code: \"bs-BA\", name: \"Bosnian (Bosnia and Herzegovina)\"}, {iso_code: \"ca\", name: \"Catalan\"}, {iso_code: \"ca-ES\", name: \"Catalan (Spain)\"}, {iso_code: \"cs\", name: \"Czech\"}, {iso_code: \"cs-CZ\", name: \"Czech (Czech Republic)\"}, {iso_code: \"cy\", name: \"Welsh\"}, {iso_code: \"cy-GB\", name: \"Welsh (United Kingdom)\"}, {iso_code: \"da\", name: \"Danish\"}, {iso_code: \"da-DK\", name: \"Danish (Denmark)\"}, {iso_code: \"de\", name: \"German\"}, {iso_code: \"de-AT\", name: \"German (Austria)\"}, {iso_code: \"de-CH\", name: \"German (Switzerland)\"}, {iso_code: \"de-DE\", name: \"German (Germany)\"}, {iso_code: \"de-LI\", name: \"German (Liechtenstein)\"}, {iso_code: \"de-LU\", name: \"German (Luxembourg)\"}, {iso_code: \"dv\", name: \"Divehi\"}, {iso_code: \"dv-MV\", name: \"Divehi (Maldives)\"}, {iso_code: \"el\", name: \"Greek\"}, {iso_code: \"el-GR\", name: \"Greek (Greece)\"}, {iso_code: \"en\", name: \"English\"}, {iso_code: \"en-AU\", name: \"English (Australia)\"}, {iso_code: \"en-BZ\", name: \"English (Belize)\"}, {iso_code: \"en-CA\", name: \"English (Canada)\"}, {iso_code: \"en-CB\", name: \"English (Caribbean)\"}, {iso_code: \"en-GB\", name: \"English (United Kingdom)\"}, {iso_code: \"en-IE\", name: \"English (Ireland)\"}, {iso_code: \"en-JM\", name: \"English (Jamaica)\"}, {iso_code: \"en-NZ\", name: \"English (New Zealand)\"}, {iso_code: \"en-PH\", name: \"English (Republic of the Philippines)\"}, {iso_code: \"en-TT\", name: \"English (Trinidad and Tobago)\"}, {iso_code: \"en-US\", name: \"English (United States)\"}, {iso_code: \"en-ZA\", name: \"English (South Africa)\"}, {iso_code: \"en-ZW\", name: \"English (Zimbabwe)\"}, {iso_code: \"eo\", name: \"Esperanto\"}, {iso_code: \"es\", name: \"Spanish\"}, {iso_code: \"es-AR\", name: \"Spanish (Argentina)\"}, {iso_code: \"es-BO\", name: \"Spanish (Bolivia)\"}, {iso_code: \"es-CL\", name: \"Spanish (Chile)\"}, {iso_code: \"es-CO\", name: \"Spanish (Colombia)\"}, {iso_code: \"es-CR\", name: \"Spanish (Costa Rica)\"}, {iso_code: \"es-DO\", name: \"Spanish (Dominican Republic)\"}, {iso_code: \"es-EC\", name: \"Spanish (Ecuador)\"}, {iso_code: \"es-ES\", name: \"Spanish (Castilian)\"}, {iso_code: \"es-ES\", name: \"Spanish (Spain)\"}, {iso_code: \"es-GT\", name: \"Spanish (Guatemala)\"}, {iso_code: \"es-HN\", name: \"Spanish (Honduras)\"}, {iso_code: \"es-MX\", name: \"Spanish (Mexico)\"}, {iso_code: \"es-NI\", name: \"Spanish (Nicaragua)\"}, {iso_code: \"es-PA\", name: \"Spanish (Panama)\"}, {iso_code: \"es-PE\", name: \"Spanish (Peru)\"}, {iso_code: \"es-PR\", name: \"Spanish (Puerto Rico)\"}, {iso_code: \"es-PY\", name: \"Spanish (Paraguay)\"}, {iso_code: \"es-SV\", name: \"Spanish (El Salvador)\"}, {iso_code: \"es-UY\", name: \"Spanish (Uruguay)\"}, {iso_code: \"es-VE\", name: \"Spanish (Venezuela)\"}, {iso_code: \"et\", name: \"Estonian\"}, {iso_code: \"et-EE\", name: \"Estonian (Estonia)\"}, {iso_code: \"eu\", name: \"Basque\"}, {iso_code: \"eu-ES\", name: \"Basque (Spain)\"}, {iso_code: \"fa\", name: \"Farsi\"}, {iso_code: \"fa-IR\", name: \"Farsi (Iran)\"}, {iso_code: \"fi\", name: \"Finnish\"}, {iso_code: \"fi-FI\", name: \"Finnish (Finland)\"}, {iso_code: \"fo\", name: \"Faroese\"}, {iso_code: \"fo-FO\", name: \"Faroese (Faroe Islands)\"}, {iso_code: \"fr\", name: \"French\"}, {iso_code: \"fr-BE\", name: \"French (Belgium)\"}, {iso_code: \"fr-CA\", name: \"French (Canada)\"}, {iso_code: \"fr-CH\", name: \"French (Switzerland)\"}, {iso_code: \"fr-FR\", name: \"French (France)\"}, {iso_code: \"fr-LU\", name: \"French (Luxembourg)\"}, {iso_code: \"fr-MC\", name: \"French (Principality of Monaco)\"}, {iso_code: \"gl\", name: \"Galician\"}, {iso_code: \"gl-ES\", name: \"Galician (Spain)\"}, {iso_code: \"gu\", name: \"Gujarati\"}, {iso_code: \"gu-IN\", name: \"Gujarati (India)\"}, {iso_code: \"he\", name: \"Hebrew\"}, {iso_code: \"he-IL\", name: \"Hebrew (Israel)\"}, {iso_code: \"hi\", name: \"Hindi\"}, {iso_code: \"hi-IN\", name: \"Hindi (India)\"}, {iso_code: \"hr\", name: \"Croatian\"}, {iso_code: \"hr-BA\", name: \"Croatian (Bosnia and Herzegovina)\"}, {iso_code: \"hr-HR\", name: \"Croatian (Croatia)\"}, {iso_code: \"hu\", name: \"Hungarian\"}, {iso_code: \"hu-HU\", name: \"Hungarian (Hungary)\"}, {iso_code: \"hy\", name: \"Armenian\"}, {iso_code: \"hy-AM\", name: \"Armenian (Armenia)\"}, {iso_code: \"id\", name: \"Indonesian\"}, {iso_code: \"id-ID\", name: \"Indonesian (Indonesia)\"}, {iso_code: \"is\", name: \"Icelandic\"}, {iso_code: \"is-IS\", name: \"Icelandic (Iceland)\"}, {iso_code: \"it\", name: \"Italian\"}, {iso_code: \"it-CH\", name: \"Italian (Switzerland)\"}, {iso_code: \"it-IT\", name: \"Italian (Italy)\"}, {iso_code: \"ja\", name: \"Japanese\"}, {iso_code: \"ja-JP\", name: \"Japanese (Japan)\"}, {iso_code: \"ka\", name: \"Georgian\"}, {iso_code: \"ka-GE\", name: \"Georgian (Georgia)\"}, {iso_code: \"kk\", name: \"Kazakh\"}, {iso_code: \"kk-KZ\", name: \"Kazakh (Kazakhstan)\"}, {iso_code: \"kn\", name: \"Kannada\"}, {iso_code: \"kn-IN\", name: \"Kannada (India)\"}, {iso_code: \"ko\", name: \"Korean\"}, {iso_code: \"ko-KR\", name: \"Korean (Korea)\"}, {iso_code: \"kok\", name: \"Konkani\"}, {iso_code: \"kok-IN\", name: \"Konkani (India)\"}, {iso_code: \"ky\", name: \"Kyrgyz\"}, {iso_code: \"ky-KG\", name: \"Kyrgyz (Kyrgyzstan)\"}, {iso_code: \"lt\", name: \"Lithuanian\"}, {iso_code: \"lt-LT\", name: \"Lithuanian (Lithuania)\"}, {iso_code: \"lv\", name: \"Latvian\"}, {iso_code: \"lv-LV\", name: \"Latvian (Latvia)\"}, {iso_code: \"mi\", name: \"Maori\"}, {iso_code: \"mi-NZ\", name: \"Maori (New Zealand)\"}, {iso_code: \"mk\", name: \"FYRO Macedonian\"}, {iso_code: \"mk-MK\", name: \"FYRO Macedonian (Former Yugoslav Republic of Macedonia)\"}, {iso_code: \"mn\", name: \"Mongolian\"}, {iso_code: \"mn-MN\", name: \"Mongolian (Mongolia)\"}, {iso_code: \"mr\", name: \"Marathi\"}, {iso_code: \"mr-IN\", name: \"Marathi (India)\"}, {iso_code: \"ms\", name: \"Malay\"}, {iso_code: \"ms-BN\", name: \"Malay (Brunei Darussalam)\"}, {iso_code: \"ms-MY\", name: \"Malay (Malaysia)\"}, {iso_code: \"mt\", name: \"Maltese\"}, {iso_code: \"mt-MT\", name: \"Maltese (Malta)\"}, {iso_code: \"nb\", name: \"Norwegian (Bokm?l)\"}, {iso_code: \"nb-NO\", name: \"Norwegian (Bokm?l) (Norway)\"}, {iso_code: \"nl\", name: \"Dutch\"}, {iso_code: \"nl-BE\", name: \"Dutch (Belgium)\"}, {iso_code: \"nl-NL\", name: \"Dutch (Netherlands)\"}, {iso_code: \"nn-NO\", name: \"Norwegian (Nynorsk) (Norway)\"}, {iso_code: \"ns\", name: \"Northern Sotho\"}, {iso_code: \"ns-ZA\", name: \"Northern Sotho (South Africa)\"}, {iso_code: \"pa\", name: \"Punjabi\"}, {iso_code: \"pa-IN\", name: \"Punjabi (India)\"}, {iso_code: \"pl\", name: \"Polish\"}, {iso_code: \"pl-PL\", name: \"Polish (Poland)\"}, {iso_code: \"ps\", name: \"Pashto\"}, {iso_code: \"ps-AR\", name: \"Pashto (Afghanistan)\"}, {iso_code: \"pt\", name: \"Portuguese\"}, {iso_code: \"pt-BR\", name: \"Portuguese (Brazil)\"}, {iso_code: \"pt-PT\", name: \"Portuguese (Portugal)\"}, {iso_code: \"qu\", name: \"Quechua\"}, {iso_code: \"qu-BO\", name: \"Quechua (Bolivia)\"}, {iso_code: \"qu-EC\", name: \"Quechua (Ecuador)\"}, {iso_code: \"qu-PE\", name: \"Quechua (Peru)\"}, {iso_code: \"ro\", name: \"Romanian\"}, {iso_code: \"ro-RO\", name: \"Romanian (Romania)\"}, {iso_code: \"ru\", name: \"Russian\"}, {iso_code: \"ru-RU\", name: \"Russian (Russia)\"}, {iso_code: \"sa\", name: \"Sanskrit\"}, {iso_code: \"sa-IN\", name: \"Sanskrit (India)\"}, {iso_code: \"se\", name: \"Sami (Northern)\"}, {iso_code: \"se-FI\", name: \"Sami (Northern) (Finland)\"}, {iso_code: \"se-FI\", name: \"Sami (Skolt) (Finland)\"}, {iso_code: \"se-FI\", name: \"Sami (Inari) (Finland)\"}, {iso_code: \"se-NO\", name: \"Sami (Northern) (Norway)\"}, {iso_code: \"se-NO\", name: \"Sami (Lule) (Norway)\"}, {iso_code: \"se-NO\", name: \"Sami (Southern) (Norway)\"}, {iso_code: \"se-SE\", name: \"Sami (Northern) (Sweden)\"}, {iso_code: \"se-SE\", name: \"Sami (Lule) (Sweden)\"}, {iso_code: \"se-SE\", name: \"Sami (Southern) (Sweden)\"}, {iso_code: \"sk\", name: \"Slovak\"}, {iso_code: \"sk-SK\", name: \"Slovak (Slovakia)\"}, {iso_code: \"sl\", name: \"Slovenian\"}, {iso_code: \"sl-SI\", name: \"Slovenian (Slovenia)\"}, {iso_code: \"sq\", name: \"Albanian\"}, {iso_code: \"sq-AL\", name: \"Albanian (Albania)\"}, {iso_code: \"sr-BA\", name: \"Serbian (Latin) (Bosnia and Herzegovina)\"}, {iso_code: \"sr-BA\", name: \"Serbian (Cyrillic) (Bosnia and Herzegovina)\"}, {iso_code: \"sr-SP\", name: \"Serbian (Latin) (Serbia and Montenegro)\"}, {iso_code: \"sr-SP\", name: \"Serbian (Cyrillic) (Serbia and Montenegro)\"}, {iso_code: \"sv\", name: \"Swedish\"}, {iso_code: \"sv-FI\", name: \"Swedish (Finland)\"}, {iso_code: \"sv-SE\", name: \"Swedish (Sweden)\"}, {iso_code: \"sw\", name: \"Swahili\"}, {iso_code: \"sw-KE\", name: \"Swahili (Kenya)\"}, {iso_code: \"syr\", name: \"Syriac\"}, {iso_code: \"syr-SY\", name: \"Syriac (Syria)\"}, {iso_code: \"ta\", name: \"Tamil\"}, {iso_code: \"ta-IN\", name: \"Tamil (India)\"}, {iso_code: \"te\", name: \"Telugu\"}, {iso_code: \"te-IN\", name: \"Telugu (India)\"}, {iso_code: \"th\", name: \"Thai\"}, {iso_code: \"th-TH\", name: \"Thai (Thailand)\"}, {iso_code: \"tl\", name: \"Tagalog\"}, {iso_code: \"tl-PH\", name: \"Tagalog (Philippines)\"}, {iso_code: \"tn\", name: \"Tswana\"}, {iso_code: \"tn-ZA\", name: \"Tswana (South Africa)\"}, {iso_code: \"tr\", name: \"Turkish\"}, {iso_code: \"tr-TR\", name: \"Turkish (Turkey)\"}, {iso_code: \"tt\", name: \"Tatar\"}, {iso_code: \"tt-RU\", name: \"Tatar (Russia)\"}, {iso_code: \"ts\", name: \"Tsonga\"}, {iso_code: \"uk\", name: \"Ukrainian\"}, {iso_code: \"uk-UA\", name: \"Ukrainian (Ukraine)\"}, {iso_code: \"ur\", name: \"Urdu\"}, {iso_code: \"ur-PK\", name: \"Urdu (Islamic Republic of Pakistan)\"}, {iso_code: \"uz\", name: \"Uzbek (Latin)\"}, {iso_code: \"uz-UZ\", name: \"Uzbek (Latin) (Uzbekistan)\"}, {iso_code: \"uz-UZ\", name: \"Uzbek (Cyrillic) (Uzbekistan)\"}, {iso_code: \"vi\", name: \"Vietnamese\"}, {iso_code: \"vi-VN\", name: \"Vietnamese (Viet Nam)\"}, {iso_code: \"xh\", name: \"Xhosa\"}, {iso_code: \"xh-ZA\", name: \"Xhosa (South Africa)\"}, {iso_code: \"zh\", name: \"Chinese\"}, {iso_code: \"zh-CN\", name: \"Chinese (S)\"}, {iso_code: \"zh-HK\", name: \"Chinese (Hong Kong)\"}, {iso_code: \"zh-MO\", name: \"Chinese (Macau)\"}, {iso_code: \"zh-SG\", name: \"Chinese (Singapore)\"}, {iso_code: \"zh-TW\", name: \"Chinese (T)\"}, {iso_code: \"zu\", name: \"Zulu\"}, {iso_code: \"zu-ZA\", name: \"Zulu (South Africa)\"}]) {\n            affected_rows\n        }\n    }\n"], ["\n    mutation insertLanguages {\n        insert_languages(objects: [{iso_code: \"af\", name: \"Afrikaans\"}, {iso_code: \"af-ZA\", name: \"Afrikaans (South Africa)\"}, {iso_code: \"ar\", name: \"Arabic\"}, {iso_code: \"ar-AE\", name: \"Arabic (U.A.E.)\"}, {iso_code: \"ar-BH\", name: \"Arabic (Bahrain)\"}, {iso_code: \"ar-DZ\", name: \"Arabic (Algeria)\"}, {iso_code: \"ar-EG\", name: \"Arabic (Egypt)\"}, {iso_code: \"ar-IQ\", name: \"Arabic (Iraq)\"}, {iso_code: \"ar-JO\", name: \"Arabic (Jordan)\"}, {iso_code: \"ar-KW\", name: \"Arabic (Kuwait)\"}, {iso_code: \"ar-LB\", name: \"Arabic (Lebanon)\"}, {iso_code: \"ar-LY\", name: \"Arabic (Libya)\"}, {iso_code: \"ar-MA\", name: \"Arabic (Morocco)\"}, {iso_code: \"ar-OM\", name: \"Arabic (Oman)\"}, {iso_code: \"ar-QA\", name: \"Arabic (Qatar)\"}, {iso_code: \"ar-SA\", name: \"Arabic (Saudi Arabia)\"}, {iso_code: \"ar-SY\", name: \"Arabic (Syria)\"}, {iso_code: \"ar-TN\", name: \"Arabic (Tunisia)\"}, {iso_code: \"ar-YE\", name: \"Arabic (Yemen)\"}, {iso_code: \"az\", name: \"Azeri (Latin)\"}, {iso_code: \"az-AZ\", name: \"Azeri (Latin) (Azerbaijan)\"}, {iso_code: \"az-AZ\", name: \"Azeri (Cyrillic) (Azerbaijan)\"}, {iso_code: \"be\", name: \"Belarusian\"}, {iso_code: \"be-BY\", name: \"Belarusian (Belarus)\"}, {iso_code: \"bg\", name: \"Bulgarian\"}, {iso_code: \"bg-BG\", name: \"Bulgarian (Bulgaria)\"}, {iso_code: \"bs-BA\", name: \"Bosnian (Bosnia and Herzegovina)\"}, {iso_code: \"ca\", name: \"Catalan\"}, {iso_code: \"ca-ES\", name: \"Catalan (Spain)\"}, {iso_code: \"cs\", name: \"Czech\"}, {iso_code: \"cs-CZ\", name: \"Czech (Czech Republic)\"}, {iso_code: \"cy\", name: \"Welsh\"}, {iso_code: \"cy-GB\", name: \"Welsh (United Kingdom)\"}, {iso_code: \"da\", name: \"Danish\"}, {iso_code: \"da-DK\", name: \"Danish (Denmark)\"}, {iso_code: \"de\", name: \"German\"}, {iso_code: \"de-AT\", name: \"German (Austria)\"}, {iso_code: \"de-CH\", name: \"German (Switzerland)\"}, {iso_code: \"de-DE\", name: \"German (Germany)\"}, {iso_code: \"de-LI\", name: \"German (Liechtenstein)\"}, {iso_code: \"de-LU\", name: \"German (Luxembourg)\"}, {iso_code: \"dv\", name: \"Divehi\"}, {iso_code: \"dv-MV\", name: \"Divehi (Maldives)\"}, {iso_code: \"el\", name: \"Greek\"}, {iso_code: \"el-GR\", name: \"Greek (Greece)\"}, {iso_code: \"en\", name: \"English\"}, {iso_code: \"en-AU\", name: \"English (Australia)\"}, {iso_code: \"en-BZ\", name: \"English (Belize)\"}, {iso_code: \"en-CA\", name: \"English (Canada)\"}, {iso_code: \"en-CB\", name: \"English (Caribbean)\"}, {iso_code: \"en-GB\", name: \"English (United Kingdom)\"}, {iso_code: \"en-IE\", name: \"English (Ireland)\"}, {iso_code: \"en-JM\", name: \"English (Jamaica)\"}, {iso_code: \"en-NZ\", name: \"English (New Zealand)\"}, {iso_code: \"en-PH\", name: \"English (Republic of the Philippines)\"}, {iso_code: \"en-TT\", name: \"English (Trinidad and Tobago)\"}, {iso_code: \"en-US\", name: \"English (United States)\"}, {iso_code: \"en-ZA\", name: \"English (South Africa)\"}, {iso_code: \"en-ZW\", name: \"English (Zimbabwe)\"}, {iso_code: \"eo\", name: \"Esperanto\"}, {iso_code: \"es\", name: \"Spanish\"}, {iso_code: \"es-AR\", name: \"Spanish (Argentina)\"}, {iso_code: \"es-BO\", name: \"Spanish (Bolivia)\"}, {iso_code: \"es-CL\", name: \"Spanish (Chile)\"}, {iso_code: \"es-CO\", name: \"Spanish (Colombia)\"}, {iso_code: \"es-CR\", name: \"Spanish (Costa Rica)\"}, {iso_code: \"es-DO\", name: \"Spanish (Dominican Republic)\"}, {iso_code: \"es-EC\", name: \"Spanish (Ecuador)\"}, {iso_code: \"es-ES\", name: \"Spanish (Castilian)\"}, {iso_code: \"es-ES\", name: \"Spanish (Spain)\"}, {iso_code: \"es-GT\", name: \"Spanish (Guatemala)\"}, {iso_code: \"es-HN\", name: \"Spanish (Honduras)\"}, {iso_code: \"es-MX\", name: \"Spanish (Mexico)\"}, {iso_code: \"es-NI\", name: \"Spanish (Nicaragua)\"}, {iso_code: \"es-PA\", name: \"Spanish (Panama)\"}, {iso_code: \"es-PE\", name: \"Spanish (Peru)\"}, {iso_code: \"es-PR\", name: \"Spanish (Puerto Rico)\"}, {iso_code: \"es-PY\", name: \"Spanish (Paraguay)\"}, {iso_code: \"es-SV\", name: \"Spanish (El Salvador)\"}, {iso_code: \"es-UY\", name: \"Spanish (Uruguay)\"}, {iso_code: \"es-VE\", name: \"Spanish (Venezuela)\"}, {iso_code: \"et\", name: \"Estonian\"}, {iso_code: \"et-EE\", name: \"Estonian (Estonia)\"}, {iso_code: \"eu\", name: \"Basque\"}, {iso_code: \"eu-ES\", name: \"Basque (Spain)\"}, {iso_code: \"fa\", name: \"Farsi\"}, {iso_code: \"fa-IR\", name: \"Farsi (Iran)\"}, {iso_code: \"fi\", name: \"Finnish\"}, {iso_code: \"fi-FI\", name: \"Finnish (Finland)\"}, {iso_code: \"fo\", name: \"Faroese\"}, {iso_code: \"fo-FO\", name: \"Faroese (Faroe Islands)\"}, {iso_code: \"fr\", name: \"French\"}, {iso_code: \"fr-BE\", name: \"French (Belgium)\"}, {iso_code: \"fr-CA\", name: \"French (Canada)\"}, {iso_code: \"fr-CH\", name: \"French (Switzerland)\"}, {iso_code: \"fr-FR\", name: \"French (France)\"}, {iso_code: \"fr-LU\", name: \"French (Luxembourg)\"}, {iso_code: \"fr-MC\", name: \"French (Principality of Monaco)\"}, {iso_code: \"gl\", name: \"Galician\"}, {iso_code: \"gl-ES\", name: \"Galician (Spain)\"}, {iso_code: \"gu\", name: \"Gujarati\"}, {iso_code: \"gu-IN\", name: \"Gujarati (India)\"}, {iso_code: \"he\", name: \"Hebrew\"}, {iso_code: \"he-IL\", name: \"Hebrew (Israel)\"}, {iso_code: \"hi\", name: \"Hindi\"}, {iso_code: \"hi-IN\", name: \"Hindi (India)\"}, {iso_code: \"hr\", name: \"Croatian\"}, {iso_code: \"hr-BA\", name: \"Croatian (Bosnia and Herzegovina)\"}, {iso_code: \"hr-HR\", name: \"Croatian (Croatia)\"}, {iso_code: \"hu\", name: \"Hungarian\"}, {iso_code: \"hu-HU\", name: \"Hungarian (Hungary)\"}, {iso_code: \"hy\", name: \"Armenian\"}, {iso_code: \"hy-AM\", name: \"Armenian (Armenia)\"}, {iso_code: \"id\", name: \"Indonesian\"}, {iso_code: \"id-ID\", name: \"Indonesian (Indonesia)\"}, {iso_code: \"is\", name: \"Icelandic\"}, {iso_code: \"is-IS\", name: \"Icelandic (Iceland)\"}, {iso_code: \"it\", name: \"Italian\"}, {iso_code: \"it-CH\", name: \"Italian (Switzerland)\"}, {iso_code: \"it-IT\", name: \"Italian (Italy)\"}, {iso_code: \"ja\", name: \"Japanese\"}, {iso_code: \"ja-JP\", name: \"Japanese (Japan)\"}, {iso_code: \"ka\", name: \"Georgian\"}, {iso_code: \"ka-GE\", name: \"Georgian (Georgia)\"}, {iso_code: \"kk\", name: \"Kazakh\"}, {iso_code: \"kk-KZ\", name: \"Kazakh (Kazakhstan)\"}, {iso_code: \"kn\", name: \"Kannada\"}, {iso_code: \"kn-IN\", name: \"Kannada (India)\"}, {iso_code: \"ko\", name: \"Korean\"}, {iso_code: \"ko-KR\", name: \"Korean (Korea)\"}, {iso_code: \"kok\", name: \"Konkani\"}, {iso_code: \"kok-IN\", name: \"Konkani (India)\"}, {iso_code: \"ky\", name: \"Kyrgyz\"}, {iso_code: \"ky-KG\", name: \"Kyrgyz (Kyrgyzstan)\"}, {iso_code: \"lt\", name: \"Lithuanian\"}, {iso_code: \"lt-LT\", name: \"Lithuanian (Lithuania)\"}, {iso_code: \"lv\", name: \"Latvian\"}, {iso_code: \"lv-LV\", name: \"Latvian (Latvia)\"}, {iso_code: \"mi\", name: \"Maori\"}, {iso_code: \"mi-NZ\", name: \"Maori (New Zealand)\"}, {iso_code: \"mk\", name: \"FYRO Macedonian\"}, {iso_code: \"mk-MK\", name: \"FYRO Macedonian (Former Yugoslav Republic of Macedonia)\"}, {iso_code: \"mn\", name: \"Mongolian\"}, {iso_code: \"mn-MN\", name: \"Mongolian (Mongolia)\"}, {iso_code: \"mr\", name: \"Marathi\"}, {iso_code: \"mr-IN\", name: \"Marathi (India)\"}, {iso_code: \"ms\", name: \"Malay\"}, {iso_code: \"ms-BN\", name: \"Malay (Brunei Darussalam)\"}, {iso_code: \"ms-MY\", name: \"Malay (Malaysia)\"}, {iso_code: \"mt\", name: \"Maltese\"}, {iso_code: \"mt-MT\", name: \"Maltese (Malta)\"}, {iso_code: \"nb\", name: \"Norwegian (Bokm?l)\"}, {iso_code: \"nb-NO\", name: \"Norwegian (Bokm?l) (Norway)\"}, {iso_code: \"nl\", name: \"Dutch\"}, {iso_code: \"nl-BE\", name: \"Dutch (Belgium)\"}, {iso_code: \"nl-NL\", name: \"Dutch (Netherlands)\"}, {iso_code: \"nn-NO\", name: \"Norwegian (Nynorsk) (Norway)\"}, {iso_code: \"ns\", name: \"Northern Sotho\"}, {iso_code: \"ns-ZA\", name: \"Northern Sotho (South Africa)\"}, {iso_code: \"pa\", name: \"Punjabi\"}, {iso_code: \"pa-IN\", name: \"Punjabi (India)\"}, {iso_code: \"pl\", name: \"Polish\"}, {iso_code: \"pl-PL\", name: \"Polish (Poland)\"}, {iso_code: \"ps\", name: \"Pashto\"}, {iso_code: \"ps-AR\", name: \"Pashto (Afghanistan)\"}, {iso_code: \"pt\", name: \"Portuguese\"}, {iso_code: \"pt-BR\", name: \"Portuguese (Brazil)\"}, {iso_code: \"pt-PT\", name: \"Portuguese (Portugal)\"}, {iso_code: \"qu\", name: \"Quechua\"}, {iso_code: \"qu-BO\", name: \"Quechua (Bolivia)\"}, {iso_code: \"qu-EC\", name: \"Quechua (Ecuador)\"}, {iso_code: \"qu-PE\", name: \"Quechua (Peru)\"}, {iso_code: \"ro\", name: \"Romanian\"}, {iso_code: \"ro-RO\", name: \"Romanian (Romania)\"}, {iso_code: \"ru\", name: \"Russian\"}, {iso_code: \"ru-RU\", name: \"Russian (Russia)\"}, {iso_code: \"sa\", name: \"Sanskrit\"}, {iso_code: \"sa-IN\", name: \"Sanskrit (India)\"}, {iso_code: \"se\", name: \"Sami (Northern)\"}, {iso_code: \"se-FI\", name: \"Sami (Northern) (Finland)\"}, {iso_code: \"se-FI\", name: \"Sami (Skolt) (Finland)\"}, {iso_code: \"se-FI\", name: \"Sami (Inari) (Finland)\"}, {iso_code: \"se-NO\", name: \"Sami (Northern) (Norway)\"}, {iso_code: \"se-NO\", name: \"Sami (Lule) (Norway)\"}, {iso_code: \"se-NO\", name: \"Sami (Southern) (Norway)\"}, {iso_code: \"se-SE\", name: \"Sami (Northern) (Sweden)\"}, {iso_code: \"se-SE\", name: \"Sami (Lule) (Sweden)\"}, {iso_code: \"se-SE\", name: \"Sami (Southern) (Sweden)\"}, {iso_code: \"sk\", name: \"Slovak\"}, {iso_code: \"sk-SK\", name: \"Slovak (Slovakia)\"}, {iso_code: \"sl\", name: \"Slovenian\"}, {iso_code: \"sl-SI\", name: \"Slovenian (Slovenia)\"}, {iso_code: \"sq\", name: \"Albanian\"}, {iso_code: \"sq-AL\", name: \"Albanian (Albania)\"}, {iso_code: \"sr-BA\", name: \"Serbian (Latin) (Bosnia and Herzegovina)\"}, {iso_code: \"sr-BA\", name: \"Serbian (Cyrillic) (Bosnia and Herzegovina)\"}, {iso_code: \"sr-SP\", name: \"Serbian (Latin) (Serbia and Montenegro)\"}, {iso_code: \"sr-SP\", name: \"Serbian (Cyrillic) (Serbia and Montenegro)\"}, {iso_code: \"sv\", name: \"Swedish\"}, {iso_code: \"sv-FI\", name: \"Swedish (Finland)\"}, {iso_code: \"sv-SE\", name: \"Swedish (Sweden)\"}, {iso_code: \"sw\", name: \"Swahili\"}, {iso_code: \"sw-KE\", name: \"Swahili (Kenya)\"}, {iso_code: \"syr\", name: \"Syriac\"}, {iso_code: \"syr-SY\", name: \"Syriac (Syria)\"}, {iso_code: \"ta\", name: \"Tamil\"}, {iso_code: \"ta-IN\", name: \"Tamil (India)\"}, {iso_code: \"te\", name: \"Telugu\"}, {iso_code: \"te-IN\", name: \"Telugu (India)\"}, {iso_code: \"th\", name: \"Thai\"}, {iso_code: \"th-TH\", name: \"Thai (Thailand)\"}, {iso_code: \"tl\", name: \"Tagalog\"}, {iso_code: \"tl-PH\", name: \"Tagalog (Philippines)\"}, {iso_code: \"tn\", name: \"Tswana\"}, {iso_code: \"tn-ZA\", name: \"Tswana (South Africa)\"}, {iso_code: \"tr\", name: \"Turkish\"}, {iso_code: \"tr-TR\", name: \"Turkish (Turkey)\"}, {iso_code: \"tt\", name: \"Tatar\"}, {iso_code: \"tt-RU\", name: \"Tatar (Russia)\"}, {iso_code: \"ts\", name: \"Tsonga\"}, {iso_code: \"uk\", name: \"Ukrainian\"}, {iso_code: \"uk-UA\", name: \"Ukrainian (Ukraine)\"}, {iso_code: \"ur\", name: \"Urdu\"}, {iso_code: \"ur-PK\", name: \"Urdu (Islamic Republic of Pakistan)\"}, {iso_code: \"uz\", name: \"Uzbek (Latin)\"}, {iso_code: \"uz-UZ\", name: \"Uzbek (Latin) (Uzbekistan)\"}, {iso_code: \"uz-UZ\", name: \"Uzbek (Cyrillic) (Uzbekistan)\"}, {iso_code: \"vi\", name: \"Vietnamese\"}, {iso_code: \"vi-VN\", name: \"Vietnamese (Viet Nam)\"}, {iso_code: \"xh\", name: \"Xhosa\"}, {iso_code: \"xh-ZA\", name: \"Xhosa (South Africa)\"}, {iso_code: \"zh\", name: \"Chinese\"}, {iso_code: \"zh-CN\", name: \"Chinese (S)\"}, {iso_code: \"zh-HK\", name: \"Chinese (Hong Kong)\"}, {iso_code: \"zh-MO\", name: \"Chinese (Macau)\"}, {iso_code: \"zh-SG\", name: \"Chinese (Singapore)\"}, {iso_code: \"zh-TW\", name: \"Chinese (T)\"}, {iso_code: \"zu\", name: \"Zulu\"}, {iso_code: \"zu-ZA\", name: \"Zulu (South Africa)\"}]) {\n            affected_rows\n        }\n    }\n"]));
