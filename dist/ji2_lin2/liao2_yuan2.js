(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('辽源', {"type":"FeatureCollection","features":[{"type":"Feature","id":"220402","properties":{"name":"龙山区","cp":[125.136627,42.90158],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@A@@@@@@@A@@@@@@@AA@@@@@@A@@@A@@@@@A@@@A@@@@@@@A@@AA@@@A@@@@@@@@A@@@@A@@@@@@@@A@@@@A@@@@A@@A@@@@@@@@@@@@@@@@A@@A@@@@@A@@@@@@@A@@@@@@@@@@@@AAA@@@A@AA@@@@A@A@A@@@AA@@A@@@A@A@A@@@@AA@@@@@AA@@@@@A@@@AB@@@@AA@@@@@@@@@@A@@@AA@@@@A@@@@A@@A@@A@@@@@@@A@B@@A@@A@@A@@@@@A@A@@@@@AAA@@@@AA@@A@@@A@@@A@A@@@@@@@A@@@AB@@A@@@AA@@A@A@AB@@@BA@@@@B@@A@@@A@A@@@A@@B@@AB@B@@B@@BAB@@AB@B@@@B@@@BBB@@@@@@@B@@@@@@AB@@@@@BAB@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@A@@@A@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@ABA@@BA@@@A@@@A@@@AB@@A@@@A@@A@@@@@@@A@@AAA@@@@@@@@@@@@@CB@@A@@BA@@@A@@AAA@@@@@@@@@@@A@@A@@@@@@@@@@B@@@@@@A@@@@@@B@B@@@@@@@@@B@@@@@B@@@@@@A@@@@B@@@@B@@@@BA@@@@B@@@@@@@@@@@B@@@@AB@@@BA@@@@B@@A@@@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@@@@@@@@@@A@AB@@C@@@A@@BA@EB@@@BAB@@@@@B@@@@@@@@@@@@A@@B@@@@@@@@AB@@@@@@@@@@@B@@A@@@@B@@@@@@BB@@@@@@@@@@@B@@@B@@@BA@BBAB@@@B@@@@@@@@@B@@@@@@@@@@B@@@@B@@@@@@@@B@@B@@@@@B@@@@@@@@@@B@@B@@@@@B@B@@BBB@@BB@@B@B@@@@@BB@@@@@@B@@A@@@A@@@@@A@@@AB@@@@@@A@@@@@@@AB@@@@@@A@@@@@@@A@@@@@@B@@@@@@@@@B@@@@A@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@B@@A@@B@@@@KBGDEHGJBD@F@DCDEBCDCD@H@FBDFFJF@@B@@@B@@@B@B@@@B@@@@@B@@@@@@@B@@@@A@@@@@@B@@@@A@@@@@@@@A@@@AA@@@@@@AA@@@@BA@@@@BA@@B@@@B@B@@B@@@@@B@@@B@@@@@@B@@@B@@A@@@@@@B@@@@@BA@@@@@@B@@@@A@@B@@@B@@@B@B@B@B@BAB@D@B@@@B@B@@@B@@@@@BBBB@B@@BB@@B@@@@@@A@A@@@AB@@@B@B@@@BAB@BABABCBA@A@@B@@B@@@B@@@@@@B@@@@@B@B@B@@@B@@B@@@@@@@@BB@@@@B@@@B@B@@A@@@AA@@@BA@@@@BBB@B@B@@@BBBB@@BBB@BBB@@@BB@@B@B@@@@@B@@@BA@@@@@@B@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@@BAB@BAB@@@B@@@@B@@@@B@@@@@@@@@BA@@@@BA@@B@DA@AB@@@BA@@@@D@B@D@@@BB@@B@@@@@BB@@@@@B@@@@BB@B@D@@@@@@@@B@D@D@@AB@@@B@B@B@B@@@B@B@@@B@D@D@@@B@@@@@@@B@@B@@B@@@@B@@B@@@BB@@@@@@@@@B@@@B@@@BB@@B@@@@@B@@@BA@@@@@@B@@@@@@@B@@@@A@@@BB@@A@@@@B@@@@@@@@@@@B@@@@@@AB@@@@@@@@@B@@@@@B@@@@@B@@@@@BB@@@@B@@@@@@@B@@@@BB@@@@@@@@@B@@B@@@@@BB@@@@B@@@@@B@@B@@B@@@@@@@@@@BB@@@@@@@@B@@@@BB@@@@@@@@BB@@@@@B@@@@@B@@@@@@B@@@@@@B@@@@B@@@@@@@B@@@@@@B@@@@@@@@@BB@@@@@@@@@@B@@@@@@@@BB@@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@BB@@@@@@@@B@@B@@B@@@B@@@@@@B@@@@@@@@@@@B@@@@@BA@@@@@@B@@@@@@@@@B@@@@@@B@@B@@@@@@@BB@@@@B@@@@A@@@@B@@@@@B@@@@B@@B@@@@@B@@B@@@@@B@@@@@B@@@@B@@@@@@@@@@AB@@@@@@@@@@@@@B@@B@@@@@@@@@@B@@@@@@@@BB@@@@@@@@@@@@@B@@B@@@@@@B@@AB@@@B@B@@@@@@@@AB@@@@@B@@@@@@@BA@@@@@@B@@@@A@@@@@A@@@@@@B@@@@A@@@@@@B@@@@@@@@@B@@@@@@@@@@A@@@@@@B@@@@@@A@@BB@@BBBBB@B@@BBB@@BB@@BBB@BB@@@@@@@@@B@@@@B@@A@@@@B@@BB@B@@BBAB@@@@@@BBB@@@B@B@@@B@@@@B@@BBB@@@B@B@B@@@@@BBB@A@A@@@@D@@BB@@@DA@B@@BB@@BB@D@F@B@@B@@BB@@@@B@B@@BB@PABADBLFADEHABADBBLFFFHDJDHBLDNARIJKBIDCDCHCHGBGBABGAECEECBCB@JEDCDGCUDCBK@GDCHCLAFCDODCDG@MHGN@DEDEFGCQAKBEDEDCDG@KCCOGICICQDKDMDKBG@G@KA{[@@LCBGAA@@A@@AA@A@@AA@AAA@ACAA@AA@@@@A@@@@@@@AB@@@A@@@@@A@@@A@@@@A@@@@@@@@B@@@@@B@@@@@@@B@@A@@@A@@@@B@@@B@@@BA@@A@@@@@@@@@A@A@A@@@A@A@@@A@A@A@@@@@AA@@A@A@A@@A@@@@@@@A@AB@@ADA@@@A@@@@A@@@@@A@@@@@@@@@@@A@@@@BA@@@A@@B@@@@A@@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@A@@@@@@@B@@AB@@A@@@@@@@A@@@@@@B@@@@@@@@AB@@@@@@@@A@@@@AAAAA@@@@@AACAAAA@@A@@@@@@@@@@@@@@AA@@A@@BA@@@A@@@A@A@@@@@A@@AA@@A@@@A@@@@AA@@A@A@@@A@@@@@@B@@@@@@@B@@A@@@@@@@@@A@@@@@@BA@@@@@@@@@@B@@B@@@@@BB@@@@@B@@ABA@AB@@A@A@@@A@@B@@@@@@@B@@@@@@@B@@@@@B@@@B@@A@@B@@A@@@AA@@A@@@@@AB@@@BA@@@@B@B@@@@@@BB@@@@@B@@@@@B@@A@@B@@@@@@A@@@A@@@@BA@@@@B@B@@@@@BA@AAC@A@@@@@@@@@AA@@@@@@@@@@@@@@A@@A@@@@@@@@AA@@@@@@@@A@AAA@C@A@A@AB@@@@@@@@A@@@@@@@@AA@@@@@@@@A@@@@@@A@@@@@@@A@@@@AA@@@@@@@A@@@@@@@A@@@@@A@@@A@@@@@A@@B@@A@@@A@@@@@AAA@AA@@AB@@@@A@@@@@@@A@@B@@A@@@@@A@@@"],"encodeOffsets":[[128172,43879]]}},{"type":"Feature","id":"220403","properties":{"name":"西安区","cp":[125.149281,42.927324],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@@@@@@@@C@AAA@@@@@A@@@@AA@@@@A@@@AA@@C@A@C@@@@@AB@@A@@BCBA@@@AB@@@@AB@@@@@@@@A@@@@@@A@@A@@@A@ABA@AB@@@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@A@@@@@@@AB@@A@@@@@A@A@@@AA@@A@AAA@AA@@AAAA@@A@A@A@AA@@@@AB@@B@@B@@@BA@A@@@A@@@@@AA@@@@@@@@@AA@@@A@A@A@@@@@A@@@@@@@@A@@@AA@@@@BABADABABA@AB@@A@A@@@A@@B@@@B@B@@@@A@@@AA@@@AAAAA@@@@A@@@A@A@@@A@C@A@ABA@A@A@A@@@A@@@A@@@@B@@A@@@@@@@AB@@@@A@@@@@@@@BA@@@A@@@@@@@@A@@@A@@@@@AA@A@@@A@@@AB@@@@AB@@@@BB@@@@@@BB@@B@@@@@@@@@@B@@A@@@@@@@@B@@A@@@@@@@A@@@@@A@@@A@A@@@A@@@A@@@A@@@A@@@@@@@@@@B@@@B@@@BBB@B@B@BB@@BB@@@@@B@@BB@B@@@B@@BB@D@B@@B@D@BBBBB@@@B@@@@@B@@@@@B@@A@@D@BA@ABA@@B@@BBB@@B@B@@@B@B@@@@BB@@@@@@AB@@@BABA@@@@@@B@@@B@@@BA@@B@@@@A@A@CBCB@@@@AB@B@B@@BBC@MDM@ED[FKJ@BIHANAFmLeB@DPBZHDDHRJHVJBEFIXGbBPITIZPRJZJLFFBlNF@FDRNBBDDDBJDBD@^B@JDNANYFA@@XBTE^MBA\\OHBHMEEKEAABCBAFGBCKECAABOBA@@AA@A@@@@@AA@@@AA@E@C@A@@AA@@AA@B@@C@@AA@@@C@@B@B@A@AA@@@@A@A@A@@@A@AA@@@A@@A@@@A@A@@@A@AA@@@@@@BAAA@@@AAA@@@A@@B@@@@A@@A@@@@@@@@@A@@AAA@AA@@AA@AA@@@AAAAA@AA@@AB@@@@@@@@A@@@@B@@@@@@@@@@@@A@@@@@@@@@A@@@@B@@@@@@A@@@@B@@@@@B@@@@@@A@@@@B@@A@@@@@@@A@@@@BA@@@@@@@@@A@A@@BA@@@A@@@@A@@@@A@@@@@@@@@@@@AA@@@@@@@@@A@@@@@@@@A@@@@A@@@@@@@@@@@@BA@@@@@@@@@@@A@@A@@@@@A@@@@@A@@@@A@@@@@AA@@@@@@A@@@@@A@@B@@@@@@A@@A@@A@@@@@@@AA@@@@@@@@A@@@@@@@@@A@@@@B@@A@@@@@A@@@@@@@@@@@A@@@@A@@@A@@@@AA@@@@@@@@@AA@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@@@@@@@AA@@@@@@@@@A@@@@@@@@A@@A@@@@@@@@@A@@@@A@@@@@@@A@@@@@@A@@@@A@@@@@@@@A@@@@@A@@@@AA@@@@@@@@AA@@@@@A@@@@@@A@@A@@@@@@@@A@@@@AA@@@@@A@@@@@AA@@@@A@@@@A@@@@@@@@AA@@@@@A@@@@@@@A@@A@@A@@@@@A@@@@@A@@@@@A@@@@@@@@BA@@@@@@@A@@@@@@@@@@@A@@B@@@AA@@B@@@@@@A@@@@@@@A@@@@B@@A@@@A@@@@@AA@@A@@@A@@@A@@@@@@@@AA@@A@@@@A@@A@@@@AA@@@@@@@A@@@C@C@A@@@A@A@@@A@A@A@A@@@A@@BC@C@A@@@"],"encodeOffsets":[[128153,43947]]}},{"type":"Feature","id":"220421","properties":{"name":"东丰县","cp":[125.531021,42.677371],"childNum":1},"geometry":{"type":"Polygon","coordinates":["@@A@AAE@A@A@@@A@@@@@A@AA@AA@@AAAA@@A@@A@@@E@A@A@CBABE@AB@@ABA@AB@@@@AACACCA@AAA@@@CAA@A@A@@@CA@@@AA@@C@@AA@AA@A@AAA@A@A@@BA@ABA@@B@@AA@@@AA@@AA@A@@@ABC@ABA@A@A@C@A@@@@@A@AB@@ABA@@BC@E@@BA@A@A@A@ABA@@@A@@@@@A@@@AA@@@@A@@B@@A@@BA@@@A@@@A@A@@@A@A@A@A@@@@@AB@B@B@@@BAD@B@D@@@B@B@@@@BB@@BBDB@BBDB@AB@@BB@@B@BBB@@B@BA@@B@@@BA@AB@@AB@@@BAB@@@@@B@@AB@@@@@BB@@B@@@B@B@@@B@@@@@B@B@@@@@B@B@@@BA@A@ABA@@@A@@@@@AB@@@@@B@@@@@BA@A@@@@@AB@@@@A@@@@@@B@@@B@B@@@B@@@BB@@AB@B@@AB@B@@BB@@@BBB@B@B@BBB@B@BBB@B@@@@@B@@BB@@@BB@@@@B@B@@@B@@@FA@@B@B@@@@BB@B@@BBBBB@@DBB@DB@BB@@@@@@B@@@B@@@@@B@@@B@@@@@BAB@@@@ABAB@@@@@@@B@@@BAB@@@@A@A@ABC@A@@@A@@@CBABA@CBA@@B@@@B@@@BBB@@BB@B@@@@@B@BA@AB@B@@@B@@B@@BB@@B@@@@BBBBB@B@B@@B@@BB@B@B@@B@@B@@B@@B@BA@BB@@@B@@BB@B@@B@@B@@@@AB@@@B@@@@@@@BA@@@@@@@@@A@@@A@@@ABA@A@@@@B@@A@@@@@A@@@AB@@@@AB@@@@@@@@@@@B@@@@@B@B@@B@@@@B@@@@@BB@@BA@@@@B@@@@@BA@@B@@@@@B@@@B@@@B@BA@@B@@A@AB@BA@@@@B@@A@AB@@@@@BA@@@A@AB@@A@@@A@@@A@A@A@@@A@@@A@A@ABA@AB@@CBA@@@A@A@@@A@@BA@A@@@@@A@ABA@@BA@A@CB@@A@@@CBABA@@@A@CBA@@@A@A@AB@@@@A@@B@@@@@B@@BBB@@@BBDDB@B@BBB@@@@@@B@@@@@D@@@B@BB@@@@B@B@@@B@@A@@@A@ABA@@@ABA@@@AB@@@@ADA@@@ABABAB@@@B@@@B@@@@@@@B@@A@@BA@@@ABCBA@A@A@ABA@A@@@A@A@A@A@AB@@A@@@@@A@@@@@A@@@ABA@@@@@A@@@A@A@@@A@A@A@@@@@A@@BA@A@@BA@@B@@@@@B@@@@@@BB@@@@@B@@@BBB@@AB@@@@A@@BA@@@A@@@AB@B@B@@@D@@@@@@@@AB@@A@A@A@C@@BA@@@A@@B@@@@A@A@AB@@A@@BA@A@AB@@AB@BA@@BA@AB@@A@A@@@A@@@A@C@@@@@A@A@@@G@A@A@@@AAA@A@A@@@@@@B@B@@@@@@AB@@A@@@@@@@BBB@B@B@@@B@B@@BB@@@B@B@BB@@@@B@@@@@@B@@B@@@@BA@@@@B@@@@@@@B@@@B@@@@BBB@@BB@@B@@B@@@B@@@B@@@B@B@@@B@@@@@@@BA@@B@@@@@B@@@B@@@@B@@B@@B@@@@@B@@A@@B@@AB@@@B@@@BA@@@A@@B@@@@@@A@@BA@@@A@A@@B@@@@@BA@@@@B@@AB@@@@@BA@@@@@@@@BA@@@A@@@@BA@A@@@ABA@@@A@@BA@@@AB@@A@@B@@A@@B@@A@@B@@A@@@AB@@@@@B@@@@@BB@@@BBB@@BB@@@B@@@B@@@B@@@B@@@@@@@B@@@B@@B@@BB@@@B@@@BAB@@@B@@@@@BA@@@@B@B@@@B@@@B@@BB@@@B@@@B@@@@@B@@BB@@@B@@@B@@@@@BA@@@@B@@@@@@@B@@@@BB@@@@B@@@B@@@@@B@@@@@BB@@@@@@@B@@@B@@@@@@@B@@B@@@@@B@@B@@B@@@BB@@@@@@@@@B@@B@@@B@@@@@B@@BB@@@@@@@@@@@@@@B@@@@@B@@@@@BB@@@@@BB@@@@@@@@@B@@@@AB@@@@@BA@@@@B@@A@@@@B@@@@@B@@@B@@@B@@@B@@@B@@@@@B@@@B@@A@@B@@@@@@@@@B@@@@A@@B@@CBEB@@@@BD@BDDBBD@HFB@DDBBBB@@@BA@ABABABABA@AB@@BB@@@@HBBB@@BBB@BB@@@B@@B@@@B@AB@@@B@@@BAFAB@B@@@B@@@B@@E@EBABCBA@A@E@A@ABA@CA@@A@A@A@G@@@@AAA@@A@@@C@@@AAAA@@@@CAA@A@ABAB@@AB@@A@C@AB@@B@@B@BBB@BB@@B@@ABB@@B@@BBDDA@@BA@@@BB@@@@DBB@B@@@B@@B@@BBBABB@@BBA@A@@@@B@B@@@@B@@@@B@@B@B@BB@@BB@@BB@B@B@@@B@@B@B@BDB@@B@@@BAB@@@BA@@B@@@B@@B@@B@BB@B@@@B@BB@@B@@@@B@@A@ABABAB@@@@E@A@@B@B@@B@AB@@BBB@@B@@@@@B@@B@@@@@@@@@B@@@@@@B@@B@@@@@@@@BB@@@@@@@@@@@@@@@B@@B@@@@@@@@@@@@@BB@@@@@AB@@CB@@AB@@@B@@@@@B@@@B@@@@@B@@B@@@@@@BA@@@BB@@@@BB@@BA@@B@@@@@B@@@B@B@@@@@@@B@@B@@B@@@@@@A@@B@@@@@B@@@@@@@@B@@@@@@B@@B@@@@@@BB@@@B@@@B@B@B@B@BA@@@@B@@@B@B@@B@B@@B@@@@@@@BB@@@BB@@B@B@B@@AB@@@B@@@@@B@@A@@@@BA@@B@B@BA@@@A@AB@@@@ABA@@@@@ABA@BB@@@@@@A@@@@B@BB@@@AB@@A@@@@@@B@@A@@DBBB@@B@@AB@@AB@@@B@@@@@B@@@BBB@B@@@B@@@B@B@BBB@@AB@B@B@@@@@B@@@@A@@@@@@@@@@B@@A@@@@@@@@@@@A@@@@@@B@@BB@@@BA@@@@@@B@@@@@B@@@BA@@@AB@@@B@@@B@@@BA@@BAB@B@@@@AB@@@AA@A@@AA@A@@B@@AB@@@@@@@B@@BB@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@B@@A@@@@B@@@@@@@B@@@@@@@B@@@@@@A@@@@@@@@@@B@@A@@@@@@@@@@@@B@@A@@@@B@@@@@@@@@@@@@BA@@@@@@B@@@@@@@@@B@@@@@@@@@@@BA@@@@B@@@B@@@B@@@@@B@@@@@B@@@B@@@B@@@@@@@@@@A@@B@@@@@@@BB@@B@@@@@@@B@@@@@@@@@@@@B@@@@B@@@@@@@@@BB@@@@@@B@@@@@B@@@@@@@B@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@@@B@@@BA@@@BB@@AB@@@@@@AB@@@@@B@@@@@B@@@@@B@@@@AB@@@@@B@@AB@@@@@B@@BB@@@@@@@B@@@@@B@@@B@@@B@@@B@@@@@@@@B@@@@@@@@B@@@@@@B@@B@@@@@@@@@@@@@@@B@BB@@@@B@@@@@@@@@@B@@@@@@B@@@@@@@@@B@@@@@@@@@BB@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@BB@@@@@@@@@@B@@@@@@@@@B@@@@B@@B@@@@@BD@BAB@@AD@@@BBB@@@B@@BDB@@@@@B@@@B@@@B@@@BB@@B@B@B@B@@@B@BB@@B@@@BBB@B@@@@@BB@@B@B@B@B@BBB@BD@@@@BDBB@B@@@B@B@B@@@@@@@@B@@B@AB@B@@@B@BA@@@AB@@@@@BA@@B@D@@@@@B@@@@@B@@@@@BAD@@@@@BA@@@A@@@@@@D@@@B@@A@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@@@B@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@B@B@B@@@@@B@@@@@B@@@@@@@@@B@@@@B@@@@@@@@@@@@@B@@@@@@@B@@A@@@@@@B@@A@@@@B@@@@@@@@@B@@@@@@@@@B@@B@@@@@@@@@@@B@@@@@BB@@@@B@@@@@@@@@@@@@B@@A@@@@@@B@@@@BB@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@BB@B@B@@@@@@@BB@DB@@B@BB@@BBB@@BBB@@BB@@BBBBBBB@BBBB@BB@BAB@@@BAB@B@@@B@@@@@B@@B@@@@@@@@@@B@@@@@@@@@@B@@@@B@@@@@@B@@@@@@B@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@B@@@@B@@@@A@@@@B@@@@@B@@@@@B@@@@@@@@@@@B@@@@@BBD@@BB@@B@@@@@@@B@@@@@@BBB@@@B@@@@@@B@@@@BDA@@@AB@@@@B@@BB@@@B@@@@@@@B@BABAB@DABA@@@@@@B@@@@@@@B@@@@@@@@B@@@@B@@@@@@@@@@BB@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@B@@@@A@@@@B@@@@@BA@@@@@@B@@@@@@@@@@A@@@A@@@A@@@A@@BA@A@@@@@@@@BB@@@@B@@@@A@@B@@A@@@@@@BA@BB@B@@@B@@@B@@@@@B@B@@@B@@@B@@@BB@@@@B@@@@B@B@B@@@B@@@BBB@@@BB@@BB@@@B@B@@@B@@B@B@B@D@@@B@@@@@@@@@BB@@@@B@@B@@B@@@@@B@@@@@@@@@@@B@BADA@@B@D@@AJ@B@BBBAB@@@BABAB@FCB@DAD@DAB@B@BA@@@@@@@B@@B@@@@@@@@@@@B@@@@@@@B@@@@@@@@@B@@@@@@@B@@B@BB@BD@@@B@B@B@@@BBB@B@B@@@DBBB@@@@@@A@A@@B@@@@@BC@@B@@@@@@ABAB@D@D@B@F@B@HDB@@@@@BBB@@BDBBB@@B@B@B@B@DBB@B@BBDB@@BBB@BB@@@BH@DB@BF@D@@@BB@@@B@B@@B@DBD@B@BA@@DBB@@@B@@ABA@@@@BAD@B@@@BA@@B@B@B@BB@@DDB@BB@@B@@AB@B@@@B@@@@@B@B@BBDBB@DBBB@BBB@D@@@D@BA@@@BB@@BBB@@@@B@@A@@BA@AB@@@@@@GBC@AB@@@BBB@@@BB@@B@@BB@@@@BBB@BAB@B@FB@@B@F@@@B@DB@@BBFB@@@@B@BBB@B@B@BBBB@@B@B@DB@@BB@@@BAD@@@@@BBFBB@B@@D@BB@@@B@@@@@@BB@@@B@@@@BD@B@B@@@@@@@B@@@B@@@B@@ABABABA@@B@B@B@@@@@@@@@BB@B@DB@@BB@@DABBB@B@BBB@B@@@@@DBB@B@B@@@B@B@@@@@B@@@@@B@@@B@@@@BB@@@@@B@@@B@@@B@@@@@@@@@B@@@@@B@@@@@B@@@B@@@@@B@@@@@@@B@@@@@@@B@@@@A@@B@B@@@@@@@B@@@@@@@B@@@B@@@@@B@@@B@@@@@B@@@@@B@@@@@@@BA@@@@@@@B@@B@@@@@@@@B@@@@@@@B@@@@@@B@@@@@@B@@@@@@@@B@@@@@@@@@@@BB@@@@@@B@@@@@B@@@@@B@@@@@B@@B@@B@@@B@@@@@@@B@@@@@@@@@@BAB@@CBA@A@ABC@ABA@A@@B@@A@@@@@@@@@@@AA@@@@@@@@A@@@@@@@@@@@@@@@A@@@A@@@@@@@@@@B@@@@@@@@A@@@@@@@@B@@A@@@@@@@@@@BA@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@A@@BA@A@AB@@@B@B@B@@@@@@@B@@B@@@@B@@@@@@@@@@B@@@@B@@@@B@@@@@@@@@@@B@@@@@@BB@@@@@@@@@@@@B@@@@@@BB@@@@@@@@@@@B@@A@@@@B@@@@B@@@@@@@@@@@@@B@@B@@@@B@@@@@@@@BA@@@@@@@@@@@@BA@@@@@@@@BA@@@@@@@@B@@@B@@@@@@@@@@@@AB@@@@@@@@@@BBB@@@B@D@@BB@@B@B@B@@@B@@AB@@@B@@@BABAB@@B@@D@B@B@@@@AB@BAB@@@@@@A@@@@@@BA@@@@@@@@@@@A@@@@B@@@@@@@@@B@@@@@B@@@@@B@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@AB@@@@@@@@A@@@AA@@@B@@@@A@@@@@A@@@@B@@@@A@AAA@@@A@A@@@ABAD@@AB@@B@FD@@@BBB@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@@@@B@@A@@@@@@@@@@@@@A@@B@@@@@@@@@@A@@@@@A@@BA@@@@@@@@@@@@@@@@@@B@@@@B@@@B@@@@@@@@@@@BB@@@@@@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@BB@@B@@@@@B@@@@@@@@@@@@@@@BBDB@BBBB@@F@@@@BA@@@@@@B@@@@@@@@@@@B@@@@@@@BA@@@@@@@A@@@@@A@@@@B@@@@@B@@@@@B@@@@@B@@@@@@@@@@@B@@@@@@@@A@@B@@@@@@@@@B@@@@@@@@A@@@@B@@@@A@@@@@A@@@@@@@@B@@@@A@@@@@@B@@@@@@@@@@@@@B@@A@@@@@@@@@@@B@@@@@@B@@@@@@@@B@@@@@@@@@@B@@@@B@@@BDDD@@@@@@@@@B@@@@B@@@@@@@B@@@@@@@B@@@@@@A@@@@@@B@@@@@@@@@@@B@@@@@B@@@@B@@B@@@@@@@@@@B@@@@@@@@B@@B@@@@@@@@DB@@BBB@B@@@BB@@@BBBB@BB@@B@@B@B@B@@B@B@B@B@@@@BB@@@@@@@@@B@@@@B@@@@BBB@@@BA@@BABABAB@@@D@DBB@B@BBDBB@B@B@DCBAD@B@@@B@@@@@@@@BB@@@@@@@@@@BB@@@@@@@@B@@@@@B@@@@B@@@@@@BB@@@@@@@@@B@@@@@@B@@@@@@@@B@@@@@B@@@@@@@@@@@BB@@@@@@@@B@@B@@@@@@@@@@@@B@@B@@@@@@A@BB@BBBBBBBB@BBB@B@BB@@DABA@@B@@@B@@@@B@B@@@@@@@B@@@@@@@@@@@BB@@@@@@B@@@@@@@BA@A@@@AB@BABA@@BA@@BEB@B@@@@@B@@ABA@ABC@A@@@@B@B@@@B@B@D@BBB@@@@@BAB@@@@BB@@@B@@@BA@@BBB@B@BAB@BB@@BBBB@B@@BB@@@@@@@@@A@@@ABA@@@A@A@@@@BA@AB@@A@CA@@A@ABA@@@@B@@@@@B@B@B@B@@@@AB@@ABABAB@BA@BBA@@@A@@@@B@@AB@@@@CA@A@@A@@@A@AB@BABAB@B@BBBB@@BBB@BABBB@B@BA@ABA@C@A@C@A@ABA@@@@B@BA@@BABA@A@C@C@CBA@@B@B@@AB@@@BABABA@A@A@A@@@A@A@AA@@AAA@@@@@@@A@A@A@A@A@@BAA@@A@@A@@A@A@AAA@AAA@@@AAAAA@@@C@@@A@A@@BA@@@@@A@@@AB@@@D@BA@@BA@@@A@A@@@@@AB@B@DA@@@@BA@A@A@@@A@@@A@@BA@BB@@@B@BB@A@@BA@@B@@@@AAA@@@A@@@A@@@@B@@AB@@ABA@AB@@@B@B@B@BA@A@ADABA@CD@BA@@@@@ABB@@BB@B@BBB@BBB@@B@@@@@BA@ADA@@BA@@@A@A@@@AB@@@@A@@B@@@@@B@@@@A@A@@@ABA@@@@BABA@@B@@A@A@A@@@@@AB@@@@@@A@@@A@AAA@@@A@A@@BA@@@@B@@@B@@@B@@@B@D@@@B@@BBBBBBB@BBBB@@@BA@@BA@ABA@A@C@A@@@A@A@@@A@A@@@A@@@ABAB@@@B@@@@A@A@@@ABC@@BC@@BA@A@ABA@AAA@A@ABABA@AB@B@B@BABA@@@@B@B@@@B@@@BA@@BCBABABAB@@@B@D@B@BABABABAD@@@B@B@BBD@B@B@BA@@@AB@@A@@B@@A@A@C@E@A@A@A@A@@@A@@@@@ABA@A@AB@@ADB@@D@B@@@BAB@BAD@@AB@@AB@@@@A@ABA@A@C@E@EBA@A@@@A@A@A@EBA@A@A@A@A@@@C@@@A@A@CA@BABABABCBABAB@B@@A@A@@@@@ABABCB@@@B@BBB@BB@BDBBBBBB@@@@@DAB@B@B@B@@BB@BBBB@BBBBB@BB@BB@BB@@BB@@@B@B@@@B@B@@@B@B@@@BAB@BBB@B@@BB@@@B@@@BABB@@BD@B@@B@@@BABBB@BA@A@@@A@AB@@AB@BAB@@ABAB@@@B@@BB@@@B@@ABADBBADB@@@D@@BB@BBBB@B@@BB@@BB@@@@@AB@@@B@B@BA@@BAB@@@B@@AB@D@B@B@@@B@BAB@B@@AB@@@@ABBB@B@B@B@B@B@@@@@B@BBB@B@B@B@B@B@B@B@B@B@@@B@@B@@@B@B@@@BBD@@BBDBDDDBBBD@@BB@BBB@BCB@DAB@B@H@BA@A@@@ABA@@@ABA@ABAB@B@B@BBD@B@D@B@B@@ABAAA@ABABAF@B@B@BADC@ADC@AB@@A@ABA@A@A@@BADA@AD@B@D@D@B@B@BABAD@B@B@BABABABA@ABABA@A@@BA@A@ABA@ADC@@BA@A@ABC@AAAAA@CACCC@AAA@@ACAA@AA@@AAAAAAA@A@A@C@A@AB@@A@ABCAAAA@@@C@@@A@AB@@CBABA@@BCBA@@@G@A@@AC@G@AB@BABA@AD@BA@ABA@E@@AGBA@@@CBE@A@@BA@A@ABE@@BA@ABA@AD@B@B@D@DAD@D@B@B@DAB@D@@@B@BAB@D@B@BAD@B@B@B@@BB@D@B@BBH@B@BAB@B@B@D@B@BAD@B@B@@AD@B@BAB@B@DAD@BABAB@DCDCDAFEB@DCDAB@B@@AD@BA@ADCBC@@BABADAB@LADA@@P@B@B@BAB@B@B@B@DAD@BBB@B@B@B@BBB@B@B@@@BBD@B@F@B@HBD@BAB@D@BA@@DADCB@DABA@@B@DABAD@@@DABADABAD@BABA@@DADA@ABABABA@ABA@ABABAB@@ABAB@BAB@D@B@BAB@B@@@DAB@BABAB@BAB@DAB@BAB@B@B@B@BAB@B@@@B@BAB@B@B@DEB@@ABA@@DAB@D@BAB@FABAD@BABA@@BA@A@E@ABCAA@EB@DAB@DADCBAB@@@A@@A@@AA@@@@@@@AA@@@B@@A@ABAB@@A@A@@@@@ABA@B@A@@@@@@@AAA@@AA@@@@B@@A@@@A@A@@B@BA@A@@FA@@@A@@B@@A@@@A@@A@@@BAB@@@@A@C@@@A@@@@B@@@@@B@@A@@B@@A@@@@@@@@@A@@@@@@BA@@@@BA@@B@@@@@@@@A@@@@BAB@@A@@@@A@@A@@AAA@B@B@@@@AA@@AAAB@@A@@@@@@@A@A@@D@@A@@B@@AAAB@@AB@@@@@@@@@BA@AB@@@B@@@@@B@@@BA@@@AA@A@BAA@A@@@@A@@@@@@@@AAB@@@@@@@A@@@A@@@@@B@@A@@BA@@@@BA@AB@@@@A@@@@@@BA@@@@B@@AA@@@@A@A@@@BB@@@@@@@@A@@@@B@@@@@@AA@@@@@A@@@AA@@B@B@@@@A@@A@@@@@A@BA@@A@@@AA@@@A@@@@@@A@@A@@@A@@@@@A@@A@A@A@A@B@@@B@@@@B@@A@AAAA@@B@@AA@@@@@A@A@@@@@@@@B@@A@@@@@@@A@AA@A@@@AAAB@@@@A@@@@A@A@@@A@@@@A@@@A@@@A@@@A@@A@@@B@DA@@@@@@A@@@@A@@@ABA@@@@@@AAAA@A@@AA@@AA@@A@@@@AB@@@@AB@AA@@BA@@A@@@@@@A@@B@@A@@A@@@@AD@B@@A@@@AAAA@@@@@A@BAB@@@@@A@@A@@@@@@@A@@A@@@@A@@@@@@@@A@@@@@@A@@@A@@@@@AA@BA@AA@@@A@@@@@@@@A@@@@@AB@B@B@@@B@@AA@@@@@A@@@@@B@@A@@@A@@@@A@@@@@@@@A@@@A@A@@A@@@@@BA@@A@@@AB@@A@@AB@@AB@@@A@@A@@AB@@@@A@@AB@@@@AAA@@A@@@BA@@BA@@A@A@@AB@@@@A@@@@@@BA@@@B@@@@@A@@@A@@A@B@@@B@@@AAB@@A@@@A@@@A@@A@@AA@B@@@BAA@@@A@@@@@BA@@BA@@A@@@B@BAA@@@@AAA@A@@@AB@@@@B@@B@@A@@@@A@@A@@@@@AB@@@AA@@BABA@@AA@@@@@A@@@AB@B@@@@A@@A@@@BAB@@A@ABA@@@@@A@AA@AABA@B@AB@B@AA@@@AB@AA@@@@@AA@@@@@BA@@@AB@@B@@BAB@@@BA@@@@B@B@@@@@@BB@@@@A@@B@@A@@A@@@@AB@@@@BB@BA@@@@@A@@BA@@A@B@BABBB@@@BA@A@A@@@@AA@@B@@A@@B@@A@@@@@@@@A@@@A@@@@A@@@@B@@AB@@@A@@@A@@@@@@@@@A@@@@@@@@A@@@@@@@@@@B@@@@@@A@@@@@@@@A@A@@@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@B@@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@@AB@@@@@@@@@@@@AB@@@@@@@B@BA@@A@A@@@@C@@BA@@BAB@@BB@@@@@@@@@ABB@@@B@@A@@@@@@@@B@BA@@A@@@@A@@@@B@@A@@A@@@@@BAB@@@@@B@@A@@@A@@B@@@@BB@@@@@B@B@@@@@@A@@BAB@@@D@BA@@B@@A@A@@BA@@@B@@@@@B@@D@@@@AA@@@BA@@B@@@@@B@@@@@B@@@@@@@AA@@@@@@B@@AD@B@@@@@@@@ABAA@B@@@B@B@B@@@@A@AB@@@B@@@@AA@BA@A@@B@BAB@B@@@AA@@A@@@@@BABB@@@@B@@@@A@@@@@AB@B@@AD@@AB@@@B@@@B@@@B@@@@A@A@@BB@@BAB@@@AA@@DAB@@@B@@@BA@@B@B@@@@A@@@AB@@@@A@@@@@@@A@@B@@@@A@@B@@@B@@@B@BA@@@@@@@A@ABA@@@@@@B@BAB@B@BCBA@@BA@@@BB@@@@@BA@@@A@@B@@AB@B@@@B@@B@@@@@@@A@@BAB@@@@@@@@@BAB@@A@@@@@@AB@AA@B@@@B@@A@@BA@@B@@@@@@@@A@@@A@@B@@AB@@B@@@BB@BA@@@A@@@@B@B@@@B@@@@@BA@@@@AA@@ECCAAAEAAA@@AAAAA@A@A@ADA@ABC@@@@@ABEBAAA@AAA@@ACECE@@AA@@B@@@@@@@B@B@@@B@@@@@@AA@AA@AAA@@@@@@@@A@@B@@A@@@@@@@@@@@AB@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@A@@@@@A@@@@@@@@@@@@@@@@@@@@@@@A@@@AB@@@@A@@BA@@@@@ABA@C@@AA@@@A@@@AA@@@@@@@@A@@@@@@A@@@@@@@@@@AA@@@@@@@@@@@@@@@@A@@A@@@@@@@@@@@@A@@@A@@@@A@@@@@@@@@@A@@BA@@@@@@@@@@@@@@@@AA@@@@@@@A@@@@@@@@@@@A@@B@@@@@@A@@@@@A@@@@@A@@@@@A@@@@@A@@@A@@@@@@AA@@@@@@@@@@BA@@@@@@@A@@@@@@@@@@@A@@@@@A@@@A@@@A@@@@@A@@@@@@@@@A@@AA@@@A@@@@@@AA@@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@A@@@@@@A@@@A@@@@@@@A@A@@AA@@@A@@@@@@@@@@@A@@@A@A@A@C@C@@@@@@@A@A@@@A@@@C@A@A@A@C@@@@BCBA@A@C@CAA@@@A@ECA@@A@@@@CAC@AB@@@@AACAA@A@A@@@CDA@@@E@@B@@A@@@ABA@A@AAA@A@@AA@@A@@@@@@@AAAA@@@A@@@GCA@A@@@AA@@E@EAEBE@@@AA@@E@A@AA@@G@A@@@@@A@@@CB@@A@ABAB@@A@A@@BABA@A@@BA@A@@@A@A@A@AAA@@BCBA@AAA@@CAC@@CC@@@@FC@ABAB@BADADA@@@AB@B@BA@A@@BAB@@@DC@A@AB@BAB@B@BBD@HC@@BAB@@BB@@AAABC@@B@@A@EA@@A@AB@AAA@@@AAC@C@@@@A@@@@@AA@AA@A@@A@AAAAACAAAA@AAA@AA@BAB@@A@A@ABABAB@@AB@A@@CA@@AA@@@@A@A@@A@AA@@@@@A@A@A@@@@@A@ADABA@A@A@@@@@@@@AA@@@A@@@@A@@@@@@@A@@A@@@@@@@A@@@@@@A@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@B@@@@A@@@@@@@@@@BA@@B@@@@@@@@A@@@A@@@@@A@@B@@A@@A@@@@@AA@@@AA@@@@@A@@A@@@@@@@@@@@@AA@@@@@@@@@AB@@@@@@@B@@@@@@BB@@@@@B@@@@@@@B@@@@@@@B@@A@@B@@A@@@@@A@@B@@@@@@A@@@@@A@@@@@@@@@@@A@@A@@@@A@@@@AA@@@@@@BA@@@@@@@@@A@@@@@A@@@@BA@@@@@@@@B@@@@@@@@@@A@@@@B@@@B@@@@@B@@@@@@@BA@@B@@@@@@@@@@@BA@@@@@@@@@@@@BA@@@@BA@@@@@@BA@@@@@@BA@@@@@@@@B@@@@A@@@@@@@@@@@A@@@@@@@A@@@@BABA@C@ABA@@@@@A@@@@@@@@@A@@@@B@DCD@DABA@@@AAA@@BA@A@AA@AAA@C@@@A@@AA@AA@@@AB@BA@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@@@@BA@@@@@@@@@@@@@@BB@@@@B@@@@@B@@@@@@@FBBCB@@AB@@@B@@@B@@@B@@@BAB@@@@@B@@@@@B@@A@@B@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@@@@@@@@@BB@@@@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@BB@@@@@A@@@B@@@@@@@@@@B@@B@L@@A@@@@BAB@B@@A@@@AB@@G@ABA@@@@@@@B@@@@@@@@@@B@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@@@@@@D@BAB@D@@@BB@FBD@B@BADABAB@@A@@A@A@@AA@@@@@AA@@@@A@@A@@A@A@@@A@AAA@AA@@AAA@@AA@@B@@@@@@@A@@@@A@@AA@@@@@@@A@@AAAA@@@@AA@@@@@@@@A@@@@@@@@@@@@A@@A@@@@@@@@@@@@@@@@AAAA@A@A@CB@@@@A@@@@@@@@@AAA@@@@@A@@@AA@@@@@@@@@@A@AA@@@@@@CAAAC@@@@@A@@@@@@A@EC@@@@A@@B@@A@@@C@A@AAA@A@AAAAAAA@@AAAAACACCAAAAACAA@@AA@@@A@A@@@@@A@@BA@@@A@@@@@@@@@@@@AAA@@@AAAACABA@@@@AACA@AA@AA@AAA@A@@@@A@@@CBA@A@AB@BAB@@@@@@@@@@A@@@@@@BA@@@@@@@@@A@@BA@@@@@@@A@@B@@@@AB@@AB@@AB@@@@@@A@@@A@@@AB@@A@@@@@@@@@A@@@@@@@A@@@@A@@A@@@@@@A@@A@@AA@@@A@@@A@@@A@@@@@@@A@@@AA@@A@A@A@@@@@@@@@@@@A@@@A@@@@@@@@AA@@@@@A@@@@A@@A@@@@@@@@@A@@@@@@@@@A@@B@@@@@BA@@@@@A@@@@@@@@@@@@A@@@@AA@@@@@A@@A@@A@@A@@@@@@AA@@@@@@@AA@@@A@@@@@@@@A@@A@@@@@@@A@@@@@@@@AB@@@@@@@@@AA@@@@@@@@@@@A@@A@@@@@@@@A@@@@@@@A@@@@@@A@@@@A@@@@@@@@@@@@@A@@A@@B@@A@@@@@A@@AA@@BA@A@@BA@A@@@AA@AAABCBCBA@A@@@AA@@@C@A@CBC@@AC@AA@@@@@@@@@@A@@@@@AB@@A@@@A@@@@@A@@@A@@@@@@A@@A@@@@@AA@@@@@@A@@@@@@@AA@@@@@@A@@@@A@@@@@@@@A@@@@@@@@@@A@@A@@@@@@@@@@@@@@A@@@@A@@@@@@@@@@@@@@A@@@@A@@@@@@@@@A@@@@@A@@A@@A@@@@@@@A@@@@@@A@@A@@@@@@@@A@@@@@@@@@@@@@@@@@@@@AA@@@@@A@@@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@@A@@@AB@@@@@@@@A@@@@@A@A@A@A@@@@@A@A@@@A@@@A@A@AAA@A@@@A@@@A@@@A@A@A@@@AAA@A@A@@AA@@AA@@@A@@@@@@AA@@AA@@@@AA@@@A@@@@@@@@AA@@@AA@@@@@@@@A@@@A@@@A@@@A@@@A@@@A@AA@@A@@@A@@@A@A@@AA@A@A@@@A@A@C@@AA@AAA@@AA@@@@@AA@@@@@@A@@AAAC@A@@@AAA@AA@@AAA@@@@AA@@@@@@AA@@@@@@@@@@@@@@@@@@@@@@@@@A@@A@@@@@@@@A@@@@@@A@@@@@@@@@@@@@AA@@CA@@@@@@@@A@@@@@@@@@A@@AC@AA@@A@@@@@@@@@@@@@@@A@@@@@A@@@@@A@@@@@A@@B@@@@A@@@@@A@@@@@A@@@A@@@A@@@@@@@@@@@@@A@@@@@@AA@@@@@A@@@@@@AA@@@@@@@@@@@A@@A@@@@@@@@@@@@@@A@@A@@A@@@@A@@A@@@@@A@@@@@@@A@@@@@@@@@A@@AA@@@@@@@@@@@A@@@@@@@A@@@@@@AA@@@@@@@@AA@@@@@A@@A@@A@@@A@@@A@@@@@@@@@A@@A@@@@A@@@@@@@AA@@@@A@A@A@@AA@@@@@@@A@@@A@@@@A@@A@@@@@@@A@@@@A@@@@@@@@A@@@A@@@AA@@@@@@AA@@@@@@AA@@@@A@@@@@@@A@@@@@@@@@@@@@@A@@@@A@@@@@A@CA@@@@A@@A@@@@A@@@@@AAA@@@AA@@@@@@@@A@@@@A@@@@@@@@A@@@@@@@A@@@@A@@@@@@@@A@@@@@@@A@@A@@@@@@@@@@@@@@@@@A@@A@@@@@@@@@AA@@@@@@@@@@A@@@@@@@@AA@@@@@A@@A@@A@@@@@@@A@@@@@@@@@AA@@@@@@@@A@@AA@@@AAA@@@@AA@A@@@@@A@@A@@@@B@BA@@@@E@CAA@A@@A@@A@@@B@@@@@@@A@@@@A@AABAB@@AB@@@AA@@@A@@@A@@@AA@@A@@@@@@@CAC@CA@@@@@@A@IA@@BA@A@A@@A@A@@ACA@AA@EAEAAA@@AAA@A@CAC@CBA@A@C@C@CAC@E@C@C@C@C@C@@BA@AB@BA@@@A@@@A@A@AAE@A@AACAAAECAAAAC@@@@@@AA@@@A@@@@@A@@@@@@@@@@A@@@@A@@@@@@@@@A@@@@@@@@@@@A@@@@@@@@AA@@@@@@@A@@@@@@@@@A@@A@@A@@@@@A@@@@A@@A@@@A@@@@@@@AA@@@@@@A@@@AA@@A@@@@@@@@@@@@@@@@@@@@@AA@@A@@@@@@AA@@@@@@@A@@A@@@@@@@@A@@@@@@@A@@A@@A@@@@@@@A@AAC@A@AAC@A@AAA@A@@@C@CAA@A@C@@AA@@AA@@AA@A@@@A@@A@AAA@@@@@AAA@@@A@C@A@A@@@@@@@@AAA@@@@@A@@@@A@@@@AA@@@@@@@@AA@@@@@A@@AA@A@@BA@@@A@@@@@@@@@@A@@@@@AA@@A@@@@@@@@A@@@@A@@@@@@@@@@@A@@@@@@AA@@@@@@@@@@@@@A@@AC@AA@@@@A@@AAAA@@A@@@@A@@@CCAAAAAAA@C@A@A@AACACAA@A@A@@@A@A@CBA@AAC@AAAAA@CCCAAAAA@AAAAAC@CAC@AAAB@@A@A@ABA@@@A@CAA@"],"encodeOffsets":[[128277,43330]]}},{"type":"Feature","id":"220422","properties":{"name":"东辽县","cp":[124.991424,42.92625],"childNum":2},"geometry":{"type":"MultiPolygon","coordinates":[["@@@@@BA@@@A@@B@@A@@@A@@@@@A@@@A@@@A@@@A@@@A@@@A@@@A@@@@@A@@@@@AB@@@@A@@@A@@@@@A@@@@@A@@@@@@@AB@@@@@@A@@@@@A@@@A@A@@@@@A@@@A@@AA@@@@@A@@@@@@@AB@@@@@@@B@@@@@BA@@@@@@BA@@@@@A@@B@@@@A@@@@@A@@@A@AB@@C@A@@@@B@@ABA@A@@BABABAB@@AB@@ABA@A@A@ACAAA@@AA@@BA@@@A@@@A@@@@@A@@B@@A@A@A@@@@@A@@@@@AA@@@@A@@@@@@AA@@@@@A@@@@@A@@@@@B@@A@@B@@@B@@@@@@AB@@@@@@@@AB@AAB@@A@@@@@A@@AA@@@@@A@A@@@@BA@@@@@A@@@@@@@A@@@@A@@@@@AA@@A@A@@@@@A@@A@@@@@@AA@@@@@@@A@@@A@@A@@A@@@@@A@@@@AA@@@@@@@A@@@@AA@AA@@AA@AA@@@@@AA@@@AA@@@@AAA@@@AAA@@@ABA@A@A@@@ABA@A@@@A@@BA@@@@@A@@@A@A@A@@@A@@@AAA@@@AA@@A@@@@@@@A@@@@@@@AB@@A@@@A@@@A@@@@@A@@@AB@@@@A@@B@@@@@BA@@@@B@@@@@B@@@@@B@@@@@B@@@@A@@@@@@@A@@B@@A@@@@B@@@B@@@B@@@@@BA@@@@B@@@@@B@@@B@@@@@B@@@B@@@B@@@@@@AB@@A@@@AB@@AB@@@@@BA@@@@B@@@B@@@@@B@@@@@B@@@@@@@BA@@@A@@@@@@@@B@@@B@@@BA@@B@@A@@@@B@@@@@@@@@B@@@@@B@@@@@B@@A@A@@@@@@@@B@@B@@@@B@@@@@@@BA@@B@@BB@@@@@@@B@@@@A@@B@@@@BB@@@@B@@@B@@B@@@@@@AB@@@@@@@@@B@@@@BB@@@@@@@B@@AB@@@B@@@@@@@@@B@@@@@B@@@@@@@@@BB@@BB@@@BB@@@@@B@@A@AB@@A@@@A@A@@@@@@@@BA@@@@B@@@BB@@B@@@@@@@BA@@BA@@@@B@@@@@@@@@B@@@B@B@@@@B@@B@@@B@@@B@@@@@BA@@@@BA@@@B@@B@@BB@@@@B@@B@@@@@@@B@@AB@@@@@@@B@@@@@@@@@BB@@@@@A@@B@@A@@B@@@@A@@B@@@@@@@B@@@@A@@@A@@@@@AB@@@@@B@@@@@@@@B@@@@@B@@@@@@@@@B@@B@@@@@@AB@@@@@@A@@@@BA@@@@@A@@@@@AB@@@@@@@BB@@B@@@@@@@B@@@@@BAB@@@@@B@@@@B@@@BB@@D@BB@@@@B@@@BB@@@B@@B@@@@@AB@@@@@B@@@@A@@BA@@@@@@@@B@@@@BB@@@@@@AB@@@@A@@@@@@@A@@@A@@@@@@@@@@@@@@B@@@B@@@@@@BB@@BB@@@B@BA@@B@@@B@@B@@@@B@@@@B@@@@@@@B@@@@B@@@@@@@B@@@@@@@B@@@@@@B@@@@BB@@A@@B@@@@@B@@@@@B@@B@@@@BB@@@B@@@@@B@@@B@@A@@B@@@@@@@@@BB@@@@@@@BB@@@@@B@@@@A@@@@B@@A@@@@B@@@@B@@B@@BB@@@B@@@@B@@@@@BBB@@@@@@@B@@@@@@@B@@@@@@@@@@@@B@@@@@@@B@@@@@@BB@@@@@@A@@BA@@@A@@B@@@@@@@B@@@@BB@@@@@@@@@@@BA@@@@@@@@B@@@@@@B@@@B@@@@@B@@@BB@@@@@B@@@B@@@@@B@@@@@BB@@@@B@@@@A@@B@@@@A@@@@@@B@@@@@@B@@BB@@@@@@@@B@@@@@@A@@@ABA@@@A@@@A@@B@@@@@@@BB@@@@BB@@B@@@B@@@@@@@B@@@@@@@B@@@@A@@@@B@@@@AB@@B@@B@@@@B@@@@@B@@B@@BB@@A@@B@@@@A@@@@@@@@B@@B@@B@@B@@@B@@@@B@@@@@@@@@B@@@@@@@@BB@@B@@@B@@@B@B@@@@@@@@B@@@@@@AB@@@@A@@@@@@B@@A@@@A@@@A@@@A@@@@@@AAB@@@@@@@@@@@@B@BB@@@BB@@@B@@@@@B@@@@@@B@@@@@B@@@@A@@@A@@@A@@@@@A@@@AA@@@@@@@@A@@B@@@@@B@@@@B@@@@@@B@@B@@@BA@@B@@@@BB@@@@@@@@B@@@@A@@B@@@@@@@BB@@@@@@BB@@@B@@@@AB@@B@@B@@@AB@@@@ABA@@B@@@@@@AB@@A@@@A@@@AB@@@@@@@@@B@@@@@BA@@@@B@@@@@@@@@@@BB@AB@@@@@BB@@@@@BB@@@@@B@@@@A@@@A@@B@@@@@@@@@@@B@@@@@@@@BB@@@@B@@@@@B@@@B@@@BB@@@@@@AB@@@@A@@@AB@B@@ABAB@@A@A@AB@@A@A@@@A@@@A@@B@B@@@BBB@@@B@@@B@@A@ABA@@@AB@@@B@B@@ABB@@@BBB@B@B@@@@BA@@BA@@BA@@B@D@B@BABADABA@A@ABA@@@ABA@@BAB@B@BA@@BAB@B@@ADABA@A@A@@@ABA@@B@B@BBBABBBBB@@DDD@D@B@D@D@D@FAB@FAB@BBB@AB@DABA@CBA@A@@BA@@@@BBBBB@B@B@B@B@BAB@B@BB@@@FBJBDBBB@BBBBDBB@BBD@B@BBBBBDBFDDBJFDB@B@B@@@B@@CBC@@BAB@@BB@B@@@B@FAB@D@F@BAB@B@@ABA@@BAB@BAB@@@BB@BBB@BB@BBB@B@B@@AB@@ABA@@B@@BB@BB@B@@BBBB@BBBB@@FBB@BBB@@BB@@BA@@BBD@B@@@@AB@@@D@BB@BB@@@@@B@B@@ABA@A@@@ABAB@@DBFDFBBB@BBBBFBBB@B@B@B@F@DBDBDBB@BB@DH@BABF@@B@B@@BB@@@BB@@@@B@@@BB@@@@B@@@@@DBBBBBDDDBBBBBB@@BB@B@BB@@BBBBB@@@B@@BB@BB@@@@B@@@BB@@B@@@@@B@@A@BB@BBB@B@BBB@BBBBBBB@BBB@B@DB@@@B@B@B@@@DAB@BAB@BAB@B@@@B@@@BB@BBB@@BB@BBFDDBB@BB@@B@@@B@@@@@@AB@@@@@B@@@B@B@@@B@B@B@@@@@B@BB@@B@@@@@@@@B@@B@@@@@@@B@@@B@@@B@@@@B@@B@@@@@@@B@@@B@@BB@@@@@@@@@B@@@BAB@FABAB@@@@BB@B@@@B@@@@@@@@@BB@@B@B@@BB@@@B@@@BB@@B@BB@@BB@@B@@@@B@@@@@@BB@@@@@@@@BB@@@@@B@B@@A@@B@@@@@@@B@@@@B@@BB@@BB@B@@BB@BB@@B@@@@@@B@B@@F@DBDBD@BBFDDBDBBBB@B@BABADAB@FBB@BAB@LKB@B@B@B@B@D@BB@@BBD@D@DBD@B@B@D@BBB@B@B@BAD@BAD@B@DB@@B@B@B@@BDDBB@@B@B@@AB@@@BBB@B@B@B@@@F@B@D@@@F@D@DBD@B@B@B@B@B@BBD@DBD@BBD@@@B@B@BAB@@@B@B@B@BB@@B@B@BABBB@@AB@@@B@@B@@@@@B@@B@@@B@@BB@@@@BB@@@BBD@B@D@F@D@FAB@@@D@D@B@D@B@@@@@@@B@B@@@@BD@BAD@BBD@D@F@F@FBD@B@@@DA@@BABABA@C@EBA@A@@BAB@BABAACAADABA@@BAB@BA@AB@BABAB@BADEB@@AB@FEBABABABAD@BAB@BABA@A@ABA@A@@BABA@ABAB@BABACMEGKA@SCEEEHINK@CM@BMBOLK@GIAAIDGHIGCOIIEE@@A@A@@@A@A@@@C@CBAEIAGAIAA@ABGUGEICGSFWA@@EBMZMBICA@@]ACICCACCAAQMECE@kMEAKEYIQIYOSJOJaAWHEJAFUIIGGQCCYGOA@CfAnKBEBMJG@ALI\\EFCN@NCD@AA@@@A@ABA@@@@DADAB@B@@@@@@AB@@A@@@A@@@A@@@@B@BA@A@@BA@@@@@@AA@@@@@A@A@@@A@AA@AA@@@AB@BAB@@A@CB@@@@A@@@@@A@@@@@A@@AAAA@A@C@AA@C@A@@AA@@@A@A@@AA@@@@@A@@AA@@A@A@AAA@A@@@A@@@A@@@@@@@@B@@@B@IEEEAC@E@GDCDCFADC@C@EACHIFGHCLA@@@@@AB@@@@A@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@@@@A@@@@B@@@@@@A@@@@@@@@@A@@@@B@@@@@@@B@@@@@@@BA@@@@@@B@@@@@@@BA@@B@@@@@B@@@B@@@@A@@@@A@@A@@@@@A@AA@@AA@AA@@@A@A@@@@@AA@@@@@@@@@@@@A@@@@@AA@@@@@@@@@@A@@A@@@@@@@@@@@@A@@@@@@@@@A@@BAAAB@@A@@@A@@@A@@@@@@@@@@AA@@@@@@@AMAKEAAKGAKK@DG}AGAKGIIIAICYSQEKQ"],["@@AA@@AAA@A@@@@A@@A@@@@@@A@A@@B@B@AA@@AAABAA@@@AA@@@A@A@CA@@@@AA@@B@@AB@CCAA@@@AA@BA@@@AA@@AAA@A@AA@@@AAAACAGAA@A@@@@AA@@A@@@@AAA@CAA@@AA@@@A@@@C@@@C@A@A@CBAB@@@B@B@B@D@@@BA@@@A@@@A@@@@BA@@@CDA@AB@BC@@@AAC@@A@BA@@B@BCDA@ABA@@@BB@@@BBB@@@B@@BB@BBBDB@@BD@@@B@BED@@@@@@BBDFDFBB@@AB@@EB@BA@@BABAB@B@@@D@@B@@@BB@@@B@BABA@EBA@A@@BC@@@@@@@A@@@@@AB@@@@A@@@@@A@@@A@@@A@@@A@@@@@@@A@@@@@A@@@A@@B@@@@@@@@@@@B@@@@@B@@@@@@@@@B@@@@@@@B@@@@@B@@A@@BA@@@@@A@AB@@A@@@A@@@A@@@A@@@A@@@A@@@@@A@A@@@@@@@AA@@@@@@@@B@@A@@A@@@@@A@AA@@@@@@A@@@@@A@@@AA@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@@@A@@@A@@@@@A@@@A@@@A@@@@@A@@@@B@@@@@@AB@@@@@@AB@@A@@B@@@@@@@B@@@@@@@@@BB@@@@@@@BB@@@@B@@@@@B@@@B@@@@@B@@@B@@@@@BB@@B@@@B@@B@@@@@@@@@@@B@@@@@@@@A@@BB@@@@@@@B@@@@@B@@@@@BB@@B@@@B@@BB@@@@@B@@@B@B@@@BB@@B@@@@@@@@@@@@B@@@@BB@@@@@@@@@BB@@@@@@B@@@@@B@@B@@B@@@@@@@B@@@@@@@@@B@@@@@@BB@@@@AB@@@@@B@@@@AB@@@@@B@@A@@B@@@@@@@B@@A@@@@@A@@B@@A@@@A@@@@BA@@@@@A@@B@@@@@@@@AB@@@@@@@@AB@@@@@@@@@B@@@@@@@B@@@B@@@@AB@@@@A@@@AB@@A@AB@@A@@@@@AB@@@@@@@@@B@@@@@@@B@@B@@@B@@@@BB@@@B@@@B@@@@@@@@@@B@@@@AB@@@@A@@B@@@@A@@@ABA@A@@@A@@@@B@@A@@@@@@@A@@B@@@@@@@@@@@B@@B@@@@@B@@@@@@@B@@@@@@BB@@@@@B@@@@@B@@B@@@@B@@B@@@@B@@@@BB@@@@@@@BB@@@@@@@@@BB@@@@@@@B@@@@@B@@@B@B@@@B@@AB@@@@@@@@@@@BA@@@@@@B@@@B@@@@@B@@B@@B@@@@@@@@B@@@@@@@B@@@@@@@B@@@@A@@@@B@@@@@@A@@@@B@@@@@@B@@@@B@@@@@@B@@@@@@B@@B@@@@@@@@B@@@@@@@@@B@@@@@@@@@@@B@@B@@@@@B@@@@@B@@@@@BB@@@@@@@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@@@A@@@@B@@@@@@@@B@@B@@@@@@@@BB@@@@B@@B@@@@@@@@@@A@@BA@@@@@A@@B@@@@A@@B@@@@@@A@@@AB@@@@@@A@@B@@@@@@A@@@@B@@@@@@A@@B@@A@A@@@AB@@A@@@@@A@@A@@@@A@@@A@@@A@@@@@@@@B@@@@@@@@@B@@@@@@@@@B@@@@B@@@@@B@@@B@@@@@@B@@@@@@@@AB@@@@@@@B@@@@A@@B@@@@B@@@@B@@@@@@@@B@@B@@@AB@@@@@@@B@@@@@@@@@@@@@@AB@@@@@B@@@B@@@@@@BB@@BB@@B@@@@@B@@B@@@@@@B@@B@@@@BB@@@@B@@@@@@@B@@@@@@@@@@@BB@@B@@@@@@@@@B@@A@@@@@BBA@@@@@@B@@@@@B@@@@@@@BA@@@@@@B@@@@A@@B@@@@@@@B@@@@@BA@@@@B@@@@@@AB@@@@A@@B@@@@A@@@A@@@@@A@@@AB@AA@@@@@A@@@@@AB@@A@@@@@@@@@@B@BA@@@A@@@@B@BA@@@@B@@AB@@A@@@@@@B@@@@@@B@@B@@@@@@BB@@@D@@@@@B@@A@@@@@@@@B@@@B@@@@B@@@@B@@@@@@@B@@@@A@@B@@@@@@@BA@@@@B@@@@@@@B@@@@@B@@@@@@@@@BA@@@LRRFZTJDJBJJLHHB~BCHL@BLLHBBLFNB@@B@@@@A@@@@@@@@@@BA@@@@@@@@@AB@@@@@@@@@@@@@@A@@@@BA@A@@FAB@@AB@@@D@@@BAB@@@@@@@@@@@@@@@@@B@@@@@@@@@@A@@@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@A@@B@@A@@BA@@@@@A@@@@@@@@@@@A@@B@@A@@A@@@@@@A@@B@@@@@@@@A@@@@@A@@@@@@@@@A@A@@@@B@@@@@@@@A@@@@@@@@B@@@@B@@@@@@@@@@BB@BB@@@B@@AB@@@DA@@@@@@@@@@@@B@BB@@@B@@@@@@@BB@@@B@@@BA@@B@@@B@@@B@@AB@BA@@@@@@@@@@@@B@@@@@@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@@@@@@@@A@@@@@@@@B@@@@@@@@@B@@@B@@@@@@@@A@@@@@@@@B@@@@@@@@@@@@@@@@@@@@@BA@A@@@@BA@@@@@@@A@@@@@@AA@A@@@A@@@ABA@@BA@AA@@@@ABA@@@AB@@@B@B@@@B@@@@A@@B@@A@@BAB@B@@@BB@@B@@@BA@@B@@@@@@@B@B@@@B@@@B@@@BB@@@@BB@B@@@@@B@B@@@@@BB@@@@BA@B@@@@@@@B@@@@BB@@@@@@B@@B@@B@@@B@@@@@@@@B@@B@@A@@B@@@B@@@@BB@@@@B@@B@@B@B@B@@@B@@@BB@@B@B@B@@@@@BBB@@@B@BB@@@@@@@@@@@@@B@@@@@@@B@@@@@BB@@@@@@@@@@@@@@@@@@BB@@@@@@B@@B@@@@@@@@@@B@@B@@@@@@@@@@B@@BB@@@B@@@@@@@B@@@B@@@@@B@@@B@@@@B@@B@@@@@@@B@@@@@@@B@@@@B@@@@@B@@@@AB@@@@@@@B@@@@@BA@@BBB@BB@@@@B@@@B@@@@AB@@@@@B@@@B@@@@@B@@@@@@@B@@@@@@@B@@B@@B@@@@@@@B@@@@@@@@B@@@@@@B@@B@@@@@@B@@@@@@@@@BAB@B@D@B@BBB@@@@@@@@@BB@@@@@@@@@BB@@@@@@@@@@@@@@@BB@@@@@@@@B@D@BBB@@A@@@@@A@A@@B@@A@@B@@@B@@@@@@@@AB@@@@A@@@@@A@@@@AA@@@@@@@A@A@@B@@A@@BA@@@@B@@@BB@@B@@@@AB@@@@A@@@A@@@@@A@@@@@@@A@@@@@@@AB@@@B@B@@@BAB@BA@@@A@@@@AA@@@@A@@@@A@@@@@@@@B@@A@@@@B@@@@@@@@@B@@@@A@@@@@@@A@@@@B@@@B@B@@@BB@@@@@B@@@BB@@BB@@@@@B@B@@@B@@@B@@AB@@@BB@@@@@@@@@@@@@@@BB@BBDBBB@@@@B@BBBB@@@@@B@@@@@@A@@B@@@@@@A@@@@@@@@B@@@@@@@BA@@BA@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@A@@@@@@@@B@@@@@@AB@@@B@@A@@B@@@@@@@@@@@B@@@@@B@@@@@@B@@CB@BA@@B@B@@@@@@@BB@B@B@@@BB@@@@B@B@B@@@B@B@@@B@B@B@@@@@@@@@B@@@AB@@A@@@A@@@@@@B@@@BA@@@@@@@A@@@@@A@@@@@@@@@@B@@B@@@B@@@@@B@@@A@@B@@@@@@@B@@B@@BBBBDB@BBB@@BB@B@@BB@@@BBAHKD@@|\\LBH@H@LANCLCRCJDJDPHDD@LCHCDCFAFBLDREHCFCFM@GH@NCHCDCPEDKBGDCD@HALCDDVCHCDIFA@ADFDDFBFAHABAHGHGDCDCDAJILQJMBKCGAICGCGNGA[PAB]NDHFJVHAH@BBBBJBHFJAB@D@D@@@B@B@@@B@BF@JFPJHDGJCHBJJB@HKLAPANN@@DMLGJFFDF@TLBFHDNBAB@BA@A@ABA@ADAB@BAFADABABCB@BABCBADC@@@@D@BABA@@BA@C@ABA@ABA@@DAB@BAFABAB@B@B@FAB@BABAJC@@DAB@BABAFAD@B@BAB@BADAFCB@FA@AD@D@F@BA@@D@BAD@BAD@BAB@DAB@HABA@@BAB@JEDCBADADAB@@AFABADABAB@BADCB@DAB@B@@AB@BA@@B@BAB@DAB@B@B@@@@@BAB@B@@@DBBBB@BBB@@B@B@B@@@B@@AB@@@BA@BB@@DB@@BB@BAB@B@B@BBDBBB@BBDB@BDDBDBBBB@BDB@@BBBAB@B@BA@@@@B@@@B@B@B@B@F@D@B@B@@@@AB@@@BA@@B@@A@A@AAC@A@A@A@@BCBABABA@A@A@C@A@@BABABADA@AB@@A@@@A@@@A@A@@B@BA@A@A@ABAB@BABAB@B@BBB@BAB@B@@AD@@AD@BA@@B@B@@@@@@A@@BABA@@B@@@B@B@@@B@B@@@B@D@B@B@BAB@@AB@@A@@AAAAA@AAAAAA@@@A@@@C@A@@@A@@@A@@@A@@B@@AB@B@@@B@BBB@@@B@@@@@@@BA@@@@B@B@B@@@@AB@BA@A@@B@BA@@B@B@@@@@@A@@@@@AB@@@@@BA@@B@B@@@B@@AB@BCB@@A@@@@@AA@AAA@AAA@A@@AA@BA@@@@B@@ADCB@BABCB@B@@A@A@A@A@@BAB@BA@@BA@@@A@@B@@@B@@@B@BB@@@@@AB@@AB@A@@A@A@@AAB@@AB@@@B@@@B@B@B@@A@@B@@C@ABA@@@@B@B@@@B@@AB@@A@C@@BA@@B@@@@@B@@AB@B@@@D@@@B@BBBB@@B@BBB@BBB@B@@@@BB@@@BB@AB@B@B@B@B@@@@@@@B@BB@@BBB@B@@@B@B@B@B@BABA@A@@BA@@@A@AB@DAD@D@B@B@BA@AB@@A@A@@B@BAB@D@B@D@B@BAB@@A@AAABA@AAA@AA@AA@A@ABABA@ABAB@@@B@@@@BDB@@@@BA@@@A@@B@@@B@AAB@@ABABABA@@BA@@@@@A@A@A@A@@@@@A@@B@BAB@@@DBB@@@BAB@@A@@B@B@@@B@BA@@B@@@@@@@@@A@@AA@A@AA@AA@@ABA@A@AAA@AB@@A@@@A@@AA@@@@BA@A@@@@AA@A@C@A@A@@@A@A@@B@D@BAB@BA@@@A@@@@@AFA@AB@@AB@BA@ABA@@B@B@@A@@@@@@@A@@@@A@@A@@@@@@@@@@@A@@@@@@@A@A@@A@@@A@@@ABCB@@AAA@A@AAA@AAAAAA@AAAB@@@@@@@@AA@@@@@@@@@@@@@@AA@@@@@@@@@AA@@@@@@@@@@A@@@@@A@@@@@@@@@@A@@@@A@@@@@@@@@A@@A@@@@A@@@@@@A@@@@@A@@@@@@A@@A@@@@@@@@A@@A@@@@@@A@@@A@C@ABCDA@A@A@CAAAA@A@CAC@@@A@ABABAB@@AB@@A@AA@@@@@A@@A@@@@@@@@@A@@A@@A@A@A@A@@@@A@A@AA@@@AAA@AA@A@@AA@@A@A@AA@@CA@@@@@@@@@AA@@@@@@@@@@A@@@@@@@@A@@@@A@@A@@@@@A@@@@@@@@@@@A@@@@@@@@B@@@@A@@@@@@@A@@@@@@@A@@@@@@A@@@@@@@@CCAC@@A@@@@@@A@@@@@@@@A@@@@@@@@@@A@@@@A@@@@@@@@@@@B@@@@A@@@@@@@@@@@@@A@@@@B@@@@@@A@@@@@@B@@@@@B@@@@@@A@@B@@@@@@@@@@A@@@@@@@@@AB@@@@@@@@@@A@@@@@@@@@@@A@@@@@A@@@@@A@@@@@A@@B@@@@@B@@@@@@@B@@A@@@@@@@A@@@@@@@@@@@A@@@@B@@A@@E@@@AAAAA@AC@A@@@@@@@@@@@@@@@A@@@@@AA@@A@@@@@A@@@@@@@@@@@@@@A@@@@@@@@@@@@@AA@@@@@@@@@@A@@@A@@@@@@A@@@@@@@@@@@@@@@@B@@AB@@@@@B@@@@@@@@@@@@AB@@@@@@@@@@@@@B@@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@@@@A@@AA@A@@ECA@@@BA@@BCBA@@B@B@@@B@BBB@@@@@@A@@B@@@@@B@@@@@@A@@BB@@B@@@@@@@@@BA@@@@@@@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@B@@@@@@@@@@A@@@@@A@@@@@A@@@@@@@@@A@@B@@@@@@@@@@@B@@A@@@@B@@@@@@@BA@ABA@@@@@A@A@CA@@@BABA@A@@@A@@BA@@@A@@@A@A@AA@@AC@A@@@A@AA@@@@@@@@@@BA@@@@@@@@@@@@@A@@@A@@@@@@B@@A@@@@@@B@@A@@@@@@@@@@B@@A@@@@@@A@@@@@@AA@@@@@@@@@@@@@A@@@@@@A@@B@@@@A@@@@@@@@@@AA@@@@@@@A@@@@@@@@@@A@@A@@@@A@@@@@@@@@@@A@@@@@@A@@A@@@@@@@@@@@@A@@A@@@@A@@@@@@@A@A@A@@BAB@B@@AB@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@B@@A@@@@@@@@B@@@@A@@@@@@B@@@@@@@@@@A@@@@@@@@B@@@B@@@@@@@@@@@@@@@B@@@@@@@@@BB@@@@@@@@@@B@@@@AB@B@BAD@BAB@B@DA@@BA@A@@@@@@@@A@@@@@@@A@@@A@@@@AA@@@@@A@@@@@A@@@@@A@@@@@@@AA@@@@@@@@@@A@@@@@@@@@@A@@@@A@@@@@@@@A@@@@@@@A@@@@@@A@@@@A@@@@@@AB@@@@@@A@@@@@A@@@@@A@@@A@@@@@A@@@A@@@@@@@A@@@@@@@A@A@@@@B@@A@@@@@@@A@@@@@@@A@@@@@A@@@A@@@@@A@@@@@A@@@@@@@@@A@@@A@@@A@@@@@A@@A@@A@@@A@@@@@A@@@@@A@A@@@A@A@A@CA@@@@A@A@AAA@A@AACB@@AA@@CAA@A@@A@@@@@@@@@A@A@AB@BABABA@@@A@@@A@@@A@@@@@@@A@AAC@@@@@A@@AA@@@@@@@A@@AAC@@@@AAAAE@A@@@@BC@A@@AA@@CAA@A@@@AAAAA@A@A@AAA@@@@@EAAA@@CAA@@@E@A@@@EAA@A@ABA@AA@@@@AA@@@AA@@A@@AA@A@@BAD@HA@@@@@@BAB@@AB@@@@A@@A@AA@@AA@@B@@A@C@@@CAA@AAACAA@CAAAA@A@@@@@A@@@A@A@@BA@@@AAA@CC@@AAA@A@A@@@AB@@A@C@AB@@@@AB@BA@@@A@CA@@ABA@C@CAA@@@@A@A@@AA@@C@E@@ACAG@@A@@AAA@AA@@CAAAA@A@CAA@A@A@A@@@AACA@AA@AA@@@@A@GCA@E@A@C@C@A@AB@B@@@@A@@@AD@@@@A@@@@B@B@@@@A@AA@C@@@A@AAA@A@@@A@A@A@@ACA@@A@AA@@@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@@@@@A@@@@A@@@@@@ABA@A@CBC@CBA@EDA@ABAB@@A@ABAAA@I@@BC@A@@@CBABA@@@@@@@@@@@A@@@@@A@@@@AA@@@@@AA@@@@@@@@A@@@C@A@A@A@@@@A@@@A@A@@AA@@AA@@A@AA@@A@@@A@A@A@@@@@@A@@A@@A@@@A@@@A@@@A@A@@@@@A@@@A@@@AAAB@@A@@@@B@@@@AB@@@@@@A@@A@@A@@@@@@B@B@@AB@@@B@@@B@@@B@@@@@@@@@@@@A@@@@B@@A@@@@@A@@B@@@@@@A@@@@@@@@@@@A@@@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@A@@A@@@@@@@@A@@@@@@A@@@@@@A@@@@@@@A@@@@@@@ABCBA@ABABA@@@@@@@A@@@A@@AA@@@@@BA@@B@AC@@@@@A@@@@A@@@A@AA@@@@@@@A@@@@@@@AA@@AC@AA@@@@A@@@@@@@@@@@A@@@@@A@@@@@A@@@@@@B@@A@@@@@@A@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@A@@@@@@@@A@@@@A@@@@@@A@@@@@@@@A@@@@@@@@@@@@AA@@@@@A@@@A@A@AB@@A@ABA@@AAAAAA@AAAAAA@@AA@@AA@AA@AA@@AAA@@@CAA@@A@@@@@@@A@AAAA@@@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@A@@A@@@@@@@@BA@@@@@@@@@@@@@A@@@@@AA@@@@A@@@@@@@@@@@A@@@@A@@@@@@@@@A@@@@@@@@@A@@B@@@@A@@@@B@@@@A@@@@@@@A@@@@@@@@@@@@@A@@A@@@@@@@@@A@@@@@A@@@@@A@A@A@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@A@@@A@@@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@@BA@@@C@@@@@@@@B@@AB@@@@C@AB@@@@A@@@@@A@@@@@C@A@@@AB@@@@A@@B@@ABA@@@A@A@@B@AA@@@@@@@@@@A@A@A@@@AAAAC@@@@ACA@AAA@A@A@A@@@AA@@@@A@A@AA@@A@@@AAA@@@A@A@A@A@@@AA@@A@@@A@@@A@@@@@A@AC@@@A@@AA@A@@BC@@BA@AAC@@@@A@@@@A@@A@@@@@@@@@A@@@@@@@@@@@AA@@@@@@@@@@A@@@@@@@A@@@@@@@@@@@AA@@@@@@@@A@@@@@@@@@A@@@@@@@@A@@@@@@@@A@@@@@AAA@@@@@@@@@@@@@@@A@@@@A@@@@A@@@@@@@@@@A@@@@@@A@@@A@@@A@@@A@@@@@A@@@@@@@A@@AA@@@@@A@@BA@@@@@A@@B@@A@@@@@A@@@@@A@@@@@A@@B@@@@A@@BA@@A@@AB@@A@@@@@@@@@A@@@@@@@A@@@@@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@@@AA@@@@@@@@A@@@@@@A@@@@@@@@@@A@@@@@@@A@@@AA@@@@@@A@@@@B@@@@@@@@A@@@A@@@A@@@@@A@@@@@A@@@A@@@A@@@@@AB@@@@@@@@@@A@@@@@@@@@A@@@@@@@AB@@@@@@@@@@@@A@@@@@@BA@@@@@@@@@@@@@@BA@@@@@@@@@@@@B@@@@A@@@@@@@A@@@@@@@A@@@@@@BA@@@@@A@@@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@@@@@@@A@A@@AA@@@@@@@A@@BA@@@@BBB@@@BBB@@A@@B@@A@A@AB@@AB@@A@@@A@@@A@@B@@AB@@A@@@@@A@@@@@@@AB@@A@@AA@@@@@@@@B@@@@@@@@@@@BA@@@@@@@@@@@@B@@A@@@@@A@A@A@@BA@AAA@A@@@A@@@A@A@AA@@A@@@@@A@@@A@@BA@@BA@@@AACA@@@BA@@@@@@@@BA@@B@@AAA@@@@@@B@@@@A@@AAB@B@@@@AB@B@@A@@B@B@@ABA@A@@@AB@@@@@BA@@@@@A@@@A@@BA@A@A@@@AA@@A@@A@@@@@@@AA@A@@@@A@A@@@A@@B@@A@A@A@A@A@@@A@@AA@@@@@@@AA@@@@@@@@A@@@@@@A@@@@@A@@@@B@@@@A@@@@AA@@@@@@@A@A@@@A@@@@@A@@@AB@@AA@@@@AA@@B@@A@@@@A@@@@A@@@@@A@@@A@@@@@A@@BA@@DA@@BA@@@@A@@A@@@@@@@@@@@@@AA@@@@@@@@@@@@@@@A@@A@@@@@@A@@@@A@@@@A@@@@@@@@@A@@@@A@@@@@AA@AA@@BAA@@@@A@AB@F@@@@@BABABAB@@@@A@@A@@@AAA@@@A@A@@A@AA@@@@A@@@AB@@A@@BA@A@@@AA@ACA@A@@@@A@@@A@AAA@@"]],"encodeOffsets":[[[127974,43831]],[[128074,43669]]]}}],"UTF8Encoding":true});}));