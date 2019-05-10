(function (root, factory) {if (typeof define === 'function' && define.amd) {define(['exports', 'echarts'], factory);} else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {factory(exports, require('echarts'));} else {factory({}, root.echarts);}}(this, function (exports, echarts) {var log = function (msg) {if (typeof console !== 'undefined') {console && console.error && console.error(msg);}};if (!echarts) {log('ECharts is not Loaded');return;}if (!echarts.registerMap) {log('ECharts Map is not loaded');return;}echarts.registerMap('镇江', {"type":"FeatureCollection","features":[{"type":"Feature","properties":{"name":"镇江"},"geometry":{"type":"MultiPolygon","coordinates":[["@@RBH@J@XC\\ENGFAHDFBJFBBHFFDB@@BBBB@@BA@@BABDDBBHFDBAH@DLBHBDB@AD@FBD@HAB@F@N@@E@KQABK@A@QB@@GBK@C@aj@D@BBBB@BC\\AHBB@BL@J@J@B@HADA@ADABCB@BABC@C@AAAACBMBOBEBAB@B@BBDNBD@B@D@D@DAFALAD@DBB@BBDBDBBDBBBDBFBBBD@D@FBHBF@B@B@F@HBHBHBFBBBDBDBFFDBBBDDBD@BBBD@@BFAB@^AHNDHBDBBDDLLFFNJNHDBHDPJB@BBFBB@DBLBF@HAD@JAB@B@FAF@NCB@JAHCD@DAREFELGBAVSFCDAPONOJGFCDEFE@ABABCJQBADEBCBE@CDOFQ@ABC@ABGDMDG@CFS@GBIBIBEB[BCDSBE@CDMBAFOBCHODG@CBE@CFM@CBEDMBCBKBGN]FG@ABABADAFAPWHKBABALOFGDEFGBAECECAAIICCCGAAAAA@A@A@A@MDE@EBE@C@C@G@IAC@C@ABA@CBEFCBADCDADADCLAD@BCHELAF@B@F@BBDBBCBE@C@A@AAA@AA@AAA@A@C@AC@AAABCBCBCFA@@DABAB@BAD@DB@@BCHABAAABECCCECA@AABASNCBGB@AA@A@@AA@@AA@AA@CA@A@AAAB@AA@@AABA@@AA@A@A@A@A@A@A@@BA@ABABA@A@A@A@A@A@A@A@C@A@ABA@A@AAA@A@A@C@C@C@AAAA@AAAAAACAAGM@AAA@C@A@A@AA@AC@A@CABACA@@AC@@A@CB@@AAAA@@AB@CE@ACB@CABACFA@AD@D@@BDA@CA@AEA@A@A@@AA@@A@AA@@CB@DAA@@A@A@AA@@CBA@C@A@A@AAAA@A@@EAC@AF@AEA@ACB@CA@CA@@AA@@CB@@AA@@AD@AAB@AIC@@A@AAAA@DAAGA@AAAED@AGB@B@@AB@@CA@AAB@@ABBDA@BB@B@B@BC@CACB@ACBAB@@A@AB@@BB@DAB@AAB@B@AA@AB@@A@A@AB@@AD@BBBAD@@C@AB@AAC@AA@AC@@BA@@AA@@AA@@AAB@AAAB@@A@G@G@AAA@A@CB@@ABCCA@AG@A@@AAB@AA@@BC@@CA@A@AA@A@AA@@AA@@AA@CADA@AA@A@A@BAAAABCCAAAAEDCB@AAA@A@A@A@A@AB@@AB@@AB@BA@AB@@ABA@ABBBC@AB@BAB@@ADA@ABAA@@AA@@C@A@AB@AABAA@@AAAA@@A@ABABABCBCB@BB@AAA@AB@@ABCB@B@D@@BDA@BB@@AB@BB@BB@@BBBB@@BB@B@B@@BBAB@B@B@B@@AA@@AB@B@@BD@@BB@B@FBB@@ABABBB@B@BA@BB@B@@AB@B@B@D@B@M[ABA@A@@AAAD@BAAAA@AAA@@AB@@CAB@AAAA@A@C@@AA@A@@A@A@A@AA@@ABABA@A@AA@AA@AA@ABA@A@@AA@@AAB@A@AB@@A@ABABA@AB@B@@A@ABAA@A@@AA@AB@BA@AAAAA@@AA@A@A@@BAAA@A@@BA@ABA@C@C@A@A@AAA@ABAAA@@AB@@CAA@A@A@AAB@A@CB@@AAAA@AAAAAAA@BAAADA@ACG@AA@A@A@A@@AA@A@@AA@BA@AB@@A@CA@A@A@A@A@@A@AA@A@@AAAA@@AA@@AA@AAA@AAAEAC@A@ABCA@@AB@@A@A@ABAC@ACB@@CA@@AAA@AA@@E@CB@AA@A@AACB@@AB@DABA@AB@@AJIA@@AO@C@@B@B@DCAA@CBA@EBA@@BA@A@CBAC@BABA@A@@BC@A@@BEAA@BBA@@BA@@DAB@B@B@BABBB@D@BA@A@A@ABA@A@AA@B@BA@A@@BA@ABA@ABAD@BA@@BABB@@BB@BB@BA@@BA@@B@B@BA@A@ABA@@BA@@BA@CAC@CB@AA@A@A@@BB@@BA@@B@BA@A@A@@BAAA@A@@AA@@BA@A@@A@ACB@AA@@BA@BB@BA@A@A@AAAB@AA@A@A@@AA@@B@BA@A@@BA@A@@BA@@BA@@B@BAB@B@BAA@BA@@BA@AFABB@@BA@@BB@CB@BB@@DD@@BB@EFCDAAA@@AABA@@AA@@AA@@BA@@BA@ABA@BBA@@B@BB@ABA@EBC@@C@AA@A@@AACAAGBA@ABIAA@ABA@A@A@BB@B@B@BAB@DA@E@@DA@DHAB@BAAA@ABB@@BB@@BA@A@BB@DB@BBBD@BA@@B@BE@C@@BA@@BA@@BB@BB@BAB@BA@ABA@C@A@@BA@AAAB@BBABBA@@BA@BBABBB@BA@@BB@@BB@@BA@@BA@@BA@@B@B@BBA@DA@@BA@E@@AA@@AA@A@A@@AABA@BAA@ABC@@BA@@B@BABB@ABA@ABB@@BAB@BA@@AA@A@A@A@@BA@A@A@@BAA@BGA@BA@AB@BB@ABA@@B@BB@@BB@@FEC@BC@@AA@@AB@@AAAAABEE@@A@ACA@DA@C@UAA@A@C@ABA@C@A@AAA@A@C@A@EAE@A@CAA@A@C@AFA@CBC@@DA@A@A@A@AAABCBCD@BA@@BEBBBA@EBCBBB@BAB@AABA@@CA@A@EHABEAG@@BABAD@B@BE@@BA@@BB@AB@BAB@B@BC@ABEBABA@A@CA@AAAA@A@CCCB@AAA@ACA@AA@@CABA@E@AA@AA@CAGAGCBA@AD@@AB@AA@AAA@ACAAAAAC@AA@AA@A@@A@AAA@CB@D@@CBAB@B@D@BBD@DABAD@B@B@@A@AA@@AA@@A@A@ABB@AB@AA@AB@@AB@B@@AB@BB@ABAA@A@@AEB@CD@@C@ADAD@B@@AB@@ABAAAB@BAA@@AA@BA@AA@AAI@@BA@A@@BB@@B@BA@A@A@BDC@@B@BA@A@ACA@@BA@@A@AA@@AA@A@@A@AAB@AA@@B@BBB@BA@@AA@@A@AAB@BA@@BA@@BA@A@@BA@A@EAC@A@ABA@CBAAC@ABABA@A@C@@DB@@BB@@BAB@BA@@B@B@BA@A@A@A@ABC@@BABA@E@A@A@A@A@AAABA@AAA@A@AAA@AB@B@BB@BBB@AB@BA@A@@BA@BBA@@BA@@B@BA@@BA@@DCAA@@DA@@CA@A@C@AAC@@BA@AAA@A@A@@BBBA@@DA@@ACCCEEB@BC@@BA@A@A@A@@A@AAC@AAAA@BA@AA@@AA@A@ABAA@AAAB@ACBABA@CAA@AA@BABABAACACGAA@@AAA@AAAA@@A@AAAA@@A@A@ABAA@A@@AAA@A@AA@AAAA@ABABA@A@AB@AAA@@A@AAAA@BA@A@AAA@A@A@A@CBAD@D@BB@C@A@C@C@AA@AA@ABCAAB@AA@AC@@AAA@A@A@A@ACBAAA@C@C@@A@A@A@A@A@A@AA@AAACB@@AAAA@@AB@@AAA@E@ABCFB@AAA@A@ABA@AA@@ABCB@BA@A@ACA@AJABA@A@AAAC@@ACBC@@ABAAAFCA@@AB@BA@BB@BABCB@BBDAB@B@BBB@BB@B@BB@B@B@B@B@@AA@@AB@@ABABABADAA@@AAA@A@AB@AA@AAAA@@BBBA@A@A@AAA@A@AA@AACAA@AB@B@@A@CA@@AB@BA@AFEB@@AB@B@BB@AAA@CABAE@A@CA@@A@EA@@A@AAAA@@ABABA@AA@@AA@AA@AAAAAAE@AAAAABABAAAAA@AAA@AA@C@A@C@AA@AAA@A@C@AECEAAAA@AABAB@@ADA@AABA@ABCAECAAC@EAAA@AAAAAAAAAAAA@A@AAA@A@AAAAC@ACA@AAAA@AAAAAABABA@A@@AA@A@@CBAB@@A@CA@AB@AAB@ABAA@A@@CA@@BA@BDB@@B@BABA@EBCAA@A@AA@BABCCAAA@@AA@CAA@AAC@A@@AABA@@AA@A@A@@BA@A@@AA@@AABA@@BB@@BB@B@@B@BBB@BA@A@AA@AA@AAA@@AA@A@A@@BA@ADAAAAA@CAA@A@@BA@A@A@@BA@A@@BB@@BB@@BA@A@E@BD@B@BA@@BB@@BABA@@B@B@BB@@BA@@B@DAB@AA@AA@AAB@AA@@AA@A@@B@B@B@BA@ABA@AA@BA@A@A@A@A@A@AA@BA@@AA@A@A@@BAA@B@BB@@B@BBB@D@BBABA@BB@B@@B@BB@@BB@@A@A@AB@B@@BA@@B@B@BBB@BABB@@BA@@BA@@BB@@BA@A@A@@BA@@BA@@AAB@B@BABBBB@@BA@@B@B@BBBA@BD@BBB@B@BB@B@B@B@B@@B@BA@A@@BA@@BA@@BBB@BA@@BA@ABAB@BAB@BCAC@A@ABA@@BA@@BA@A@ABA@A@BBA@BBA@A@@A@AA@A@@AA@@B@BA@A@ABA@@BA@@AA@@AA@A@AAA@A@BBA@@B@BAB@AA@@BA@@BA@@BB@B@@BA@ABBBA@A@@AA@@AAB@BA@A@@BA@ABAD@BB@ABAAA@@B@BBBA@BBA@BBAB@BA@ABA@@B@BA@A@@B@BA@A@A@A@A@@AABA@@AA@ABA@A@A@@BAB@B@B@B@BABB@@B@B@BA@@BA@A@A@BB@BA@@B@BB@@BABABA@A@@AA@A@A@A@@BAB@AABABA@A@@BABB@@BA@A@ABBB@B@BB@ABA@@BBBB@ABA@A@A@@AAA@BA@A@@B@B@BAAA@A@A@A@A@A@@BA@@B@BA@A@@BB@@B@B@BB@AB@B@DA@@AA@@BA@A@@BAB@B@B@B@BA@@BA@@BAA@AA@CB@AC@@BAA@AA@@AA@@BAA@AAB@BA@AA@AA@@B@BB@@B@BB@@BB@@BABB@B@B@@B@BA@@B@BA@@BBB@AB@@B@BB@@BA@AA@BABA@@BA@@BA@@AAAA@@AA@A@A@A@AA@BAA@BABA@@AA@@BABA@A@A@@BA@A@@BB@@B@B@BA@A@A@A@BBA@A@A@A@@ABAA@AB@AABA@A@A@A@BAA@A@A@@BAA@AA@A@@AABA@A@@AA@A@A@@A@AA@@BA@@AC@A@@BA@AAA@A@A@@AA@@@AAA@A@@AA@AAAA@AA@A@A@A@A@@AB@@AAAAB@BA@AB@AA@@BA@@BA@@AA@A@@AA@@A@ACEA@AA@AAEA@@ACBABAB@A@A@AA@A@A@AAA@A@@AA@@AEA@BA@@BA@A@@AA@A@@BA@@B@BA@@BBBDB@B@BABBB@BA@@BAA@B@BB@AB@BA@@BA@@B@BB@@B@BB@B@B@@AB@@BB@@AB@@BB@B@B@@AB@B@B@B@BAB@@AA@A@@ABABABB@AB@@B@BBA@B@BBA@D@B@BB@B@@BB@B@B@BBBBBBD@B@B@ABA@A@@BA@BH@B@D@B@B@BA@A@ABABA@A@A@A@ABADCBCF@B@BAD@BA@A@ADABAB@BA@ABA@ABA@ABA@AB@BA@C@CBA@CB@BA@@BB@BB@BBBBB@BC@A@BBB@B@@BA@A@AB@A@AABABA@ABB@@BBA@BB@@BB@@AD@B@B@B@@AB@@DB@@B@BB@@BB@@BA@@DB@B@B@B@D@@BB@B@@ABB@AB@B@@BB@BA@ADB@BB@@BB@BC@BDBB@B@BBB@@AB@@AAAA@AACAB@@AB@BBBBBAB@B@@AB@DB@DA@@BB@@BCABB@BB@BABB@AJD@AFBBABAD@BB@BF@BFBABB@BB@BBB@BABDJADBBB@BD@@BD@@DB@@DB@@AB@@BB@B@@BDBBABAD@B@@BA@@BB@BBBABAB@B@BBBBA@BB@BA@A@BBB@@BB@BB@BDB@BBAB@DGBABB@AFALARCB@BA@BB@BBBB@BB@FDBB@B@B@BDF@B@D@B@DBBBBBDBDB@@BBBB@B@B@B@D@B@B@@BB@@B@B@BBB@BABBBB@@B@BA@@B@BA@@BA@A@CB@BA@BB@BBBBBA@@DA@AB@BB@@BA@A@@BA@A@A@@B@BBB@BA@@B@BBBAB@BAD@BA@@B@BB@ABBB@BC@@B@BA@@BB@@BA@A@@BB@AB@BCA@B@BAB@AA@@AA@AAA@A@@BA@A@@BAAA@A@AAA@A@ABEDC@GBA@A@KDEBA@A@C@CAI@EB@AA@@A@AA@A@AA@BA@A@@BA@@AA@C@@BA@C@A@A@@BA@ABB@@BB@B@CBA@A@@BA@ABB@ABA@ABA@BBA@ABA@@AABBD@B@BA@@BB@@BABA@A@@BA@BBB@B@B@@AB@B@B@@BA@A@BBADB@@BB@@B@BB@@AB@@BB@@BB@@AB@@BBA@AB@B@@B@BB@B@@B@B@BB@@BB@@BBB@ABAB@@BBBBA@BBBBAB@BB@AB@@BB@@BB@B@@BB@B@@AB@@BB@@AB@@BB@BBBBB@@BB@@AB@B@BBB@@A@AA@@AB@AAA@BAB@AAB@@AB@@AB@B@B@@BB@@AB@@BBB@BB@@BB@@BB@@BBBD@BAB@@BB@B@@AB@@BBAB@B@@BB@BA@BB@@AB@BA@ABAB@BA@ABAB@B@B@B@@AB@B@B@@BB@@BB@@BD@BB@BB@@BA@BBA@A@A@@BB@@BAB@BB@AB@BB@D@B@D@B@BA@BBAB@B@@BA@@BB@@BA@@BB@@B@BA@A@AB@BABC@@BA@@BB@@B@B@BA@BBAB@B@B@BA@A@A@BBA@A@@B@BA@@B@B@BA@@BAA@BA@@BA@@BBBA@A@A@@A@AAAA@@AA@A@A@BAAAA@A@AB@AA@A@A@A@@BA@@D@BB@@B@BB@@B@BB@@B@BA@@BB@B@@BABB@AB@BBAB@@B@BBD@AB@@B@B@BA@@B@BA@A@A@BFB@B@@BABBBEBA@BBA@BBA@BB@B@B@B@BBA@AB@@B@B@BBA@B@BA@@BAA@BA@@BA@@B@BA@BBABA@@BA@BBA@A@ABAB@BA@@B@BBBCBABB@B@B@BDA@ABB@DAB@@BBBB@BBA@@BB@B@@AB@@B@BB@B@@BB@B@@B@DB@B@@B@B@BA@@AAAAB@DB@BD@B@DB@@DB@@BA@A@BBABADBDBBABBBBB@BA@@BA@@BBB@BB@@BA@C@A@AB@BAB@BA@@AA@BAA@A@@BA@A@A@A@AB@BBA@B@BB@@BC@CB@AA@AAA@A@@BABBBABA@BB@B@B@B@B@BC@C@@AA@A@A@@BAB@BA@A@ACA@@BA@@AA@AAA@CAAAA@AAAAABAB@AA@A@A@@BA@A@ADAFABABCABA@AAB@AABA@BBA@AAAA@BBBA@BBB@BBA@E@A@A@@BABABEAA@A@A@@BA@A@@BA@A@A@A@A@A@@AA@A@A@A@A@A@@AA@@BA@CBBAA@A@@BC@C@@J@B@B@B@BB@BB@BB@B@BB@BB@BBB@@BB@@CB@B@BBBBB@@B@BA@@DF@@B@BAB@BBBB@@BB@@BB@B@@B@BB@B@@BBBB@@BBAB@B@@BBB@B@B@B@BBAD@AB@BABB@@D@DB@BABBB@BAHB@DD@DAD@@BD@@AB@ACB@B@@BB@BDCBC@@BA@AAC@A@ABA@@B@B@BB@BABAB@B@F@BBB@B@F@@AB@FBBABAB@BBB@D@BAB@@AB@B@B@B@B@BB@B@B@BABBBB@BBKFBB@DD@B@@DC@@B@BAB@BB@@BD@FAB@F@NDB@DBDBRDJBFBB@B@B@B@BBBBBBB@@BD@@BB@BBB@B@F@DDB@B@BAD@DAFADABAB@HC@CB@@ADA@AB@@AD@D@@BBD@DB@D@D@B@D@DBD@FBB@D@HBDBBAB@DCDABAB@F@B@HBB@LFB@D@LBB@BB@BBBBD@FBB@BBBDBBBBB`THF]LIDnNRDB@P@J@hBJ@jBH@F@B@JAF@DAD@HAHCRCTATAJ@L@H@D@F@BBHHHFPPBBJLXHhNJ@\\DBB"],["@@@AA@BB"],["@@AA@BB@"],["@@@AA@BB"],["@@@AA@@B@BBA"],["@@@AA@BB"],["@@BAA@@B"],["@@B@AA@B"],["@@@AA@@BB@"],["@@BB@AA@"],["@@ABB@@A"],["@@ABB@DAC@"],["@@ABBBB@BBAB@BB@@AB@B@@ABA@AAB@AAB@A@AABAA@BA@@A"],["@@A@@BBA"],["@@AA@BABB@BA"],["@@ABB@@A"],["@@ABB@@A"],["@@@AA@BB"]],"encodeOffsets":[[[122331,33037]],[[122581,32502]],[[122551,32535]],[[122439,32619]],[[122053,32424]],[[122053,32423]],[[121851,32530]],[[121852,32529]],[[121827,32597]],[[121864,32612]],[[121867,32611]],[[121932,32631]],[[121932,32632]],[[121889,32713]],[[121898,32731]],[[121946,32867]],[[121870,32898]],[[121936,32950]]]}}],"UTF8Encoding":true});}));