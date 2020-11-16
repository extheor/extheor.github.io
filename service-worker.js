/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","dccbd327ce61c49e928028faca20492e"],["/about/index.html","bde48bd4b69a5655fb095682dbd2d877"],["/aplayers/index.html","2b5052f5e95707ec6b114dad0cb86890"],["/archives/2020/02/index.html","2257c2afa2be28a4b3e8d3d548efd06e"],["/archives/2020/02/page/2/index.html","85c2d77f05d77eddceba520b61f7a1f7"],["/archives/2020/02/page/3/index.html","9e403742093b0fab7dc65caccd183c41"],["/archives/2020/02/page/4/index.html","9273d618f02d069bb7537f8195495aa2"],["/archives/2020/03/index.html","ba8b6e49977b8041982d51cba3d06115"],["/archives/2020/03/page/2/index.html","5deb9ab87a11a15ca018e514a1864784"],["/archives/2020/03/page/3/index.html","e6c9fcedec0681f5ec5996710680b8d9"],["/archives/2020/03/page/4/index.html","6cb957dc97e739bf765b103ddf63087a"],["/archives/2020/03/page/5/index.html","5dcf0b9dd23411756a892b724684cd77"],["/archives/2020/03/page/6/index.html","1146fe04d6fa4c80b87746da7b3c1c6b"],["/archives/2020/03/page/7/index.html","5c8ba4dd93a1ae0791521b98a7000d48"],["/archives/2020/03/page/8/index.html","4505d901fe3677a82f9ec6bdfee0ccb4"],["/archives/2020/04/index.html","9a96a59ced7e3512caaf83fe39a32cdb"],["/archives/2020/04/page/2/index.html","039abf295bebe6ad2e4c84877fe52fb9"],["/archives/2020/04/page/3/index.html","23fb5fd398915ca3612d500bdc95eb53"],["/archives/2020/04/page/4/index.html","1d886325ca0d739781d04dd7063b32da"],["/archives/2020/05/index.html","ac4851774928d3ad6394d7729868b4c7"],["/archives/2020/07/index.html","573722dd2b381083ea9f3bfcc6515d9d"],["/archives/2020/07/page/2/index.html","060413169be7aa4ef0d90250a8d10099"],["/archives/2020/08/index.html","1321093f4654be941888a367d5300757"],["/archives/2020/08/page/2/index.html","e33cf1ed206cfc01e6e331a3270ef5d0"],["/archives/2020/09/index.html","f0a4a9b49d0de859055090929c2cdc35"],["/archives/2020/09/page/2/index.html","5c2ccfc782a2113a6d61dd8cc7cf481f"],["/archives/2020/09/page/3/index.html","a5d72c72dd795c439c956d592c55a1e0"],["/archives/2020/10/index.html","3a1ad84ae2a96006516552c68577c9d0"],["/archives/2020/10/page/2/index.html","5e994ffa4598d8e1791cf7aa3bd8aa0c"],["/archives/2020/11/index.html","6fb88464ccc4d786abff7b0e25f0fc94"],["/archives/2020/11/page/2/index.html","747fd4e18141fc633762d3e22bde10bd"],["/archives/2020/11/page/3/index.html","8a6484f6aca63f7ca26a9909f3a8d3e1"],["/archives/2020/index.html","2a2861605013e404e2e737835ba9c5a7"],["/archives/2020/page/10/index.html","17e54b6aaf9ec01eb5b1d6adbe9330d9"],["/archives/2020/page/11/index.html","589bcff443522799b24f165e6407781a"],["/archives/2020/page/12/index.html","5d46d0ba57d0a430406eae9494658666"],["/archives/2020/page/13/index.html","f23d59a2940f3398c1893a206d950bdc"],["/archives/2020/page/14/index.html","bae61911eefe53fe32ca6d68cb907853"],["/archives/2020/page/15/index.html","3c4f12777924211a140b226f5ddf360e"],["/archives/2020/page/16/index.html","5e2e042767ad21b4336102b95f8d075b"],["/archives/2020/page/17/index.html","4bef69467c338891f5ebc652be80f93b"],["/archives/2020/page/18/index.html","90c52aab913de95185d3919ea1b7ed5a"],["/archives/2020/page/19/index.html","9885d63966bf0469a4084444c8770887"],["/archives/2020/page/2/index.html","0d5661775140710509f1e1c8c09f879f"],["/archives/2020/page/20/index.html","64ab0819ed5a91d459368e962f40fa3d"],["/archives/2020/page/21/index.html","1658d34fc58847adcb7a437b3b504f2b"],["/archives/2020/page/22/index.html","caf5e58396c374b00ca1cc1a797ae920"],["/archives/2020/page/23/index.html","7652904097c0e1768ffc791312f26251"],["/archives/2020/page/24/index.html","a3deacad3919a1ee92b5fa953870486a"],["/archives/2020/page/25/index.html","2e65a78f7dd65ffb4225baf17aad294c"],["/archives/2020/page/3/index.html","b9dfe38c3147e38a51c50203f9bc9f60"],["/archives/2020/page/4/index.html","ec4c9293e5df4158228077f73e4bb5ef"],["/archives/2020/page/5/index.html","512bfc359d2e1792cfc87ea0dc1fa92c"],["/archives/2020/page/6/index.html","7e20400757af9895436ce1698c1423f5"],["/archives/2020/page/7/index.html","bbe3bf650a9b429791e542665361e232"],["/archives/2020/page/8/index.html","071745f0c9803f9af246828f0af683ef"],["/archives/2020/page/9/index.html","3037dc47faacba23dfe086fcd32164fa"],["/archives/index.html","9233ffebaf14833bb1accd87dd60699d"],["/archives/page/10/index.html","8a97d9bb687f3658a651e9cadffcc7ac"],["/archives/page/11/index.html","e0d39bbb41a8351815f065a8f1b5d5a6"],["/archives/page/12/index.html","ed30485b05c1d2185ef57d55f1f03cea"],["/archives/page/13/index.html","a601f576f2e9c4e5e9794429ef9ccbac"],["/archives/page/14/index.html","3d8163c3db8b5c9ca88ecdc6cd88a0b6"],["/archives/page/15/index.html","099a90233439d62604f167607824d783"],["/archives/page/16/index.html","4b08603c01c5a87c05be6ccbab5e9def"],["/archives/page/17/index.html","95e767ce436e261cdbe52f8cb340e35b"],["/archives/page/18/index.html","e2af9081d56921c8563b972cb487157b"],["/archives/page/19/index.html","080df59b5363c81a8517233ab3e0e388"],["/archives/page/2/index.html","5b4071d8ce580f28b1016a39743cc7fb"],["/archives/page/20/index.html","3e215ae122b03b379d744b54170ce808"],["/archives/page/21/index.html","ec677da6f9e8631bd7c9c4b4284e1078"],["/archives/page/22/index.html","2974e5766a47607532e74aed3b3d4735"],["/archives/page/23/index.html","4336c3c069b92fcf051eb2b66e14942e"],["/archives/page/24/index.html","bac4aed25868041d37ee45c82b099cb8"],["/archives/page/25/index.html","2bf91d5a21392e1533e4ca9c1eb7ee11"],["/archives/page/3/index.html","e150fdc2ce787e27d99f8c9f14db0c01"],["/archives/page/4/index.html","d0c8793a0e8b5d31a59ae947802019fb"],["/archives/page/5/index.html","aac4e5fa277da4c2742f08fb283f7f95"],["/archives/page/6/index.html","5aa15c3ad9751f633d4bc085cf051a90"],["/archives/page/7/index.html","52e7702dd20cf6a27b534ad46422a336"],["/archives/page/8/index.html","8c79317a269b1fc6582f9290c4d2412c"],["/archives/page/9/index.html","7e7347206d22555d3514835d3923443e"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","7ecceaff7df81150f4534d787f7d79bd"],["/categories/Ajax/index.html","059cb1decbe41af09498cbf629fc9725"],["/categories/Ajax/page/2/index.html","98f5ba11a71a348671cfa0e30ef7135b"],["/categories/ES6/index.html","5caf7f1947156cf09e646b8be9d33233"],["/categories/ES6/page/2/index.html","6b9fc1d778696e740efc90b93f33a521"],["/categories/FL/index.html","f26407625948d819e41e6dd57702e860"],["/categories/HTTP/index.html","a12cac5b599ba15f9ecd1b6e443813dc"],["/categories/Hexo/index.html","6238630801e54be6fcffd5a188d50417"],["/categories/Hexo/标签外挂/index.html","e4349fdbaaf87fd0f6a534ab85873980"],["/categories/Hexo常用命令/index.html","99d3ca98e8178c237b53770ca39d4535"],["/categories/JSON/index.html","2c3e461a41a54b927dba1c3403f951ce"],["/categories/MongoDB/index.html","77546bcbd75b633bf95bcc5faebe0031"],["/categories/Nodejs/index.html","ba5da760a125cb838fdc24a952ebb50c"],["/categories/Nodejs博客实战/index.html","59ebdabe90a470396d08d8955378f730"],["/categories/React/index.html","e464130b14dbf115c750996081c1513e"],["/categories/Vue/index.html","ae4cd290f760ff4ccb1a123c54f2d058"],["/categories/Vue/page/2/index.html","2a1aa6488856df4a2b4628381e71a732"],["/categories/Vue/page/3/index.html","cf781bbd50fb5ba6cb15903557722e17"],["/categories/index.html","9752be163c2e2ae8e666f250b2b41414"],["/categories/promise/index.html","c3d2d901ab4d94339e2a1cae1ce51775"],["/categories/日语/index.html","9fe413ff71c2eaf857f8df29a671fe1c"],["/categories/自学考试/index.html","a75c85ff06f9c25c0f1a527ac7cd4fad"],["/categories/自学考试/page/2/index.html","54c3cafef17f47a746b7688ac9e652d3"],["/categories/自学考试/中国近代史纲要/index.html","3007df8e7b85d21a5797148ab6a5b15b"],["/categories/自学考试/管理经济学/index.html","16474f319e8d42e75453361c62a6391d"],["/categories/自学考试/考前突击/index.html","8c8747eb82f74e1d53fee454e6035a8a"],["/categories/自学考试/考前突击/page/2/index.html","ebf44cd194a533175dd68086f8912ceb"],["/categories/自学考试/计算机网络原理/index.html","86dff02aab5d066fb0cb28c87f4ada0d"],["/categories/自学考试/运筹学/index.html","ad1e3763294669a7813d01ef5962fe13"],["/categories/自学考试/马克思主义/index.html","a6067ce57f3bf81407a1b4ac29350117"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/favicon.png","831793361f36a5524d7c2c8e5a5e791c"],["/images/flags/flag-cn.png","aec786dd377f7498121b2b989285de13"],["/images/flags/flag-us.png","4e484b374a934ec7a0c318fa3039a18f"],["/images/logo-collapsed@2x.png","5a7921ae91c9497d9c479db2ed247271"],["/images/logo@2x.png","7dff419a181fc2ee0d21e7759b9fdff5"],["/images/logo_dark@2x.png","7618f56d3783393049d5486b34c83f1b"],["/images/logos/github.png","3ca867b4d49b00409911b0e7d221993d"],["/images/logos/myblog.png","c65b405af280672770a5e68dbc602608"],["/images/off_on.png","1bdd36870ded5c5d39e24fcdc65b0cb5"],["/images/search_icon.png","73b5f23fe9023e21c9d90b25d73f3881"],["/images/webstack_banner_cn.png","49008f34a922e970792cacb5d17b51a0"],["/images/webstack_icon_producthunt.png","2ba473dc05e96515bb57a7bb00c4d703"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f108ff5c28001973e5e11029ed22b7c2"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","8c3b9c6abbbc73e90c2cd6e468d0d1aa"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","31abff30b9a6d910481b75911e9d9e56"],["/page/11/index.html","f1487aa591d2aa7c5ade55b36ed83f99"],["/page/2/index.html","8d7fa998517554a36a79dffdad372c40"],["/page/3/index.html","8f92b3c6a8fb76fa6f8047c39ae940b1"],["/page/4/index.html","e1d5d63d5c3354d42293825abbe70827"],["/page/5/index.html","9e0983645d36b729254f3df8f0fa05f0"],["/page/6/index.html","55b7e5beebd0dd103cbe859104622bcd"],["/page/7/index.html","ead7f6022a411ef17bb7526ef063b529"],["/page/8/index.html","a5bf77e9c702fd62442526b9fb41c444"],["/page/9/index.html","9c490e1a668af89a70436359d4aa3bad"],["/posts/10812f0/index.html","22a7ebeab489bb187c7a69c6b678d796"],["/posts/126b275/index.html","8520204b6f7cef6ecdcbac89711026da"],["/posts/12d95a5e/index.html","73ea3bd5386bb50ec18592288a10e7e4"],["/posts/1367417b/index.html","8de0dd0f0b41cdd6ba70b4ef93272825"],["/posts/13886e3f/index.html","95babeaa72bbef2cd4e9625adf34ac6c"],["/posts/145193a5/index.html","fd5b95560c18c89f5a894d550e028ac1"],["/posts/149dde25/index.html","0f07375a792e2c722aad186cd85dd32d"],["/posts/152fa65b/index.html","b465bdf8d365d66f44a9f8b68ebc8b0b"],["/posts/169e7dda/index.html","ccdc827b63add705c705e229aae17a00"],["/posts/1875100e/index.html","a29b950e3bf70f2ab2b4da5df10b6584"],["/posts/18eaef7d/index.html","9283d62c4a71b01df1a776bac30963b0"],["/posts/1a0bc7b7/index.html","e1c233fc903ee8a68353dac149d128ba"],["/posts/1a20a057/index.html","f357f1fe8df79440fd670cf0deb8b29b"],["/posts/1a998be6/index.html","160bb8946c1ee564667ba5417db1326b"],["/posts/1bffbd20/index.html","c3aab9206a19b353fe9b2ca1abb8cdbb"],["/posts/1c5a0485/index.html","3aaf5368b7ad501b4e066222722e9ed0"],["/posts/1e638f78/index.html","a52e9cf10ce6929fc0fce39e3fc2dac6"],["/posts/1e967920/index.html","a3363e8bc734de36eb16620c4fb9be5d"],["/posts/1fb53120/index.html","d81a62de8efa3c5c9c39cdaca8dbdd6b"],["/posts/21466e86/index.html","ed3277ad72c2bcd84aaff5946ac0b269"],["/posts/21abcf1a/index.html","5d67d5b370d19f86b17ec64051274d24"],["/posts/21c250b1/index.html","18ffdb84c369ba120e4cc315c25519ce"],["/posts/2287cc/index.html","f1ab4b6695385ac0c9d5d3db4c4baba0"],["/posts/235acbda/index.html","a1e904719c3dea58d9e44283e8fa63a8"],["/posts/236bfea3/index.html","e799aa1bc95d93c112d8d28c337e60ee"],["/posts/24caea6b/index.html","597b1affdf38ac6d2e597e53787aba1c"],["/posts/25d45c3d/index.html","4ea43f68820bacc27b74a20c2411fcc5"],["/posts/262baa9f/index.html","eda143580762a27b9cda3c7e29939417"],["/posts/26f82f65/index.html","abdfbc24e1dfe10ba84d008ce78a6715"],["/posts/27cdc142/index.html","773f2d62804ab2e80ceab5589a94b2ff"],["/posts/2895c4bb/index.html","1fc12a012571ed684d43a8402d3aea60"],["/posts/28987ff3/index.html","bea22624e3116b9a0eb4aab2b79c9b5e"],["/posts/298cfeed/index.html","a1891b6485d71ad4823a84e6fd7bd888"],["/posts/29f0df96/index.html","5d763e8fab3e19cb570a244b65dfba9c"],["/posts/2a1d2b6f/index.html","f4fd79951625964dd5fd25a2c5b3728b"],["/posts/2a386047/index.html","043261f8b9b9c809c1b555182c1a6d65"],["/posts/2b2f44ba/index.html","ce4a611c028b6a4de2fc85c0cb85bd5e"],["/posts/2b770baf/index.html","49334e8149dd355194e9c6d234cec66b"],["/posts/2cda4a8/index.html","4f4b519d8dc26c37954854228f4de91b"],["/posts/2d020832/index.html","d647afdc23d9f07a1f63e8704a8c6ac5"],["/posts/2d6d3bd/index.html","839bc959f7d49df11263668aee408516"],["/posts/2e0c129d/index.html","406b25a2306e14c488bae90419b256ee"],["/posts/2e7563a0/index.html","2670594f0b8d2fa527c06d9d59f3e4ff"],["/posts/2e7b8d69/index.html","317e3071b2fb27f822dfb9578913f411"],["/posts/2f28d14b/index.html","88f68d1daae1b84a3dc6d69ad612fef4"],["/posts/2f6e1383/index.html","2968186500a964a1b0538657c12d8ab8"],["/posts/30bfd1cf/index.html","02b51d98498fe0459992efeeef5399b9"],["/posts/3270cf84/index.html","857de40dd9cedd07c7d7152b693ea680"],["/posts/33235106/index.html","9b6d83fddfa9953538d867af0159edcc"],["/posts/344e951f/index.html","514b974eb750c04a07a70ae37ee0bced"],["/posts/35e2bcf6/index.html","fdf76a96c017791228772b6cdef1abac"],["/posts/365e96c5/index.html","0aae931ae4f49a25640b63beec69eaf1"],["/posts/36e331e3/index.html","80281a3234eb2c1347b79a071f943980"],["/posts/372df90a/index.html","b1e10bf9c94b68c62fb7e89e430fb9e9"],["/posts/37c547df/index.html","02e4909b5d0c67c5516af81c0d633317"],["/posts/380dfa6c/index.html","d1e181024778c02423af8755b325ba46"],["/posts/3859c98f/index.html","719b7d7e2586839abb1f7e8579f64adc"],["/posts/387564ca/index.html","d55d69821b2dadc429f896dcb14f74fe"],["/posts/38a88481/index.html","f26885c79d9640df42045141f881e009"],["/posts/3914bfed/index.html","db70e523e8dbc91597ebf1191cff1a7e"],["/posts/3b56780c/index.html","1fa90d62181fa9b7b6fc048bffb1d8ed"],["/posts/3d1ef1fa/index.html","4c439245c86ae0893bf69a6cf1a848e4"],["/posts/3e4bb613/index.html","04aba5b0c996dfc9486df2a04211ad0a"],["/posts/3f2e933/index.html","ba7186a58e76682fa8adf0205bcbb259"],["/posts/3f6e5f9e/index.html","c9051ccce4ba6d775c1594c0556d7622"],["/posts/4349a589/index.html","c42ab3feb14a352f6e767f57c83a708b"],["/posts/44246190/index.html","a412f96316b867f9b52d0be92f89931d"],["/posts/456550f/index.html","689a8012aa623e0fdd99a332b3521b2f"],["/posts/45fe8d36/index.html","7df01e1c310e1594390931fac076601b"],["/posts/470ac03d/index.html","f2937c82298e8c33e7990779118f3eab"],["/posts/470d45ef/index.html","818f518bc7ffdb3386cf289f52a4ed08"],["/posts/4894629c/index.html","ec5437f66af2e793366130df56312e5a"],["/posts/49249ac9/index.html","cf6861c6bc59951d8ea220a877c444d7"],["/posts/49f2d2a/index.html","3bfe34c55e4036cb33ebbaabf64365c2"],["/posts/4e6d4eb4/index.html","3085505535399d23eb7b8c454616588f"],["/posts/4f346c5/index.html","6c0092f36600b7d732ba36c73e462203"],["/posts/50caf1d4/index.html","e5e61283e1e44130f20177a51cf13d71"],["/posts/51139400/index.html","32ca80c5f878901558e972753ae41324"],["/posts/512c9a09/index.html","49d500bfd860a2762ecfe3487fff25f3"],["/posts/5205b330/index.html","dec8b38d3a04b1c1125272e85fa2bc00"],["/posts/52d36cab/index.html","f6e4a8e17bafe0511c07ee20d6a6bbf5"],["/posts/532a083a/index.html","a548a5358db1b815916ed2abfa5dac76"],["/posts/537d2c2a/index.html","d04a34caa343735e697133414c60e733"],["/posts/54383ba0/index.html","5e85468e6f1ed51fe81a3c32e10fa472"],["/posts/54667693/index.html","1da4fa0d4bf8a11c18b0ad942c793719"],["/posts/54fbed4a/index.html","d7195a2af863cd6bf28d5e5fc6090f33"],["/posts/5508212c/index.html","bf59233353af81cd3ab48814ea4f17af"],["/posts/56760226/index.html","98695d652b95c1205b435a1679284dc5"],["/posts/571564e5/index.html","322b9d24b5a1d87ec878c49b08355fbb"],["/posts/57900fe5/index.html","bd8773fc6e51242810b9dc14646bd6e9"],["/posts/585ba415/index.html","0eba612305ced230a9e0154a8a682585"],["/posts/589a214a/index.html","0ecba11fcc278f3c1fa4ea83c21f0543"],["/posts/599a2b19/index.html","91ace23f78cc35ce62cf9a693e509bd0"],["/posts/59c05382/index.html","2b4da4e3a90ac98d7af28cad55843f39"],["/posts/5a5294c8/index.html","952902eebba9465db3164a3c8a36d0e6"],["/posts/5d3da28e/index.html","e2e7ee6f3464929d187d62af5112f209"],["/posts/5d3f50d1/index.html","34d71570e614d5eeaee7ceae81e6894f"],["/posts/5ef7ef00/index.html","509c9e2db83c3147eacf02353ae2094b"],["/posts/5f1fa8df/index.html","c19ff1c31eb48bd08c7d6bc134649dc9"],["/posts/5fba84c3/index.html","0c93eaabdf8976d4ee127d76f1245928"],["/posts/607fa29/index.html","faea7215280d6e3dcf7feae6dbf9312c"],["/posts/60b5dd06/index.html","2460eaad1cf9310f0e5d55b503a7a7f1"],["/posts/61057c88/index.html","c05683dc9c4b37abe9a80511c477359d"],["/posts/61477045/index.html","5bddb22c6ca3329c6eb3dcd108791293"],["/posts/664423f6/index.html","2c81335977792f3e08fb9fd405affe36"],["/posts/69d79f93/index.html","b28f45c0eb05b7651b7a16037a1677db"],["/posts/6b2f046/index.html","4b6cb3254435580843472c5e657718e4"],["/posts/6b4610c4/index.html","f1c46b6ae4f639f05666475bea3ab05e"],["/posts/6bbf03f0/index.html","55ea927075b7cf2da0574f7d0ea13627"],["/posts/6e7b67e4/index.html","a07c3a797a653526c33ed995ec77ceff"],["/posts/7000d139/index.html","a08afb2d760b287d898896852359f5a5"],["/posts/72f94093/index.html","a049073474f1a67d272b17792ef00ba6"],["/posts/7380b71/index.html","d7b82e16b18c3c2103c19d273ca70c43"],["/posts/738eee3b/index.html","a5a959cde46f1beb1988377a39419f0f"],["/posts/73981dbc/index.html","553045d536a52053bd7bd660e07963ee"],["/posts/74d60fd9/index.html","7acc034483e9ec8e5ae927757ae1cdd9"],["/posts/74f5d9a5/index.html","807d5e5e671a7f4c5d0cdcd6abcdbaf1"],["/posts/750f2ce3/index.html","2746676031b747a38996b0486e188f31"],["/posts/75ceb627/index.html","6636f4d3387927ab49851af7884440dc"],["/posts/7725b75a/index.html","d1294bc226fecf3d3f6fa1ae674d3945"],["/posts/79dfcc1f/index.html","e140dc200ffb859b46ff76c45a523f59"],["/posts/79ef335/index.html","cb45ee17fd78103fb6cb6ed02ca385b4"],["/posts/7a228db4/index.html","ea89bde15687e35e3d093076d0dc100b"],["/posts/7bbd3149/index.html","04bd11dc550d5cd417206df6f13ffdbf"],["/posts/7c20e8d5/index.html","852c84eed0475ce51ad962d5e2e72908"],["/posts/7d3ea75e/index.html","75ef0374d6c9dc15f4170e87f1e02840"],["/posts/7d43958e/index.html","a4192dce24d1bc902eb8bfaf2c8f6f7b"],["/posts/807ac7f2/index.html","a345891569b1adc3d01324cf88f6983d"],["/posts/81738fa0/index.html","e2f927f240f3d3a668b09b775e7c5ea2"],["/posts/817c41b4/index.html","c7b360845e99ea4d6abc4b6df233d596"],["/posts/83f13096/index.html","aaf5c33a8c2431c9548612690cd6a757"],["/posts/84ee8e34/index.html","735c25cd83c665709e29836d74e93cbc"],["/posts/854d07da/index.html","704c0a9439d7b3841d89350dc5428968"],["/posts/86cad295/index.html","0704dcb96d78fd73e53b1e3ab59d3b66"],["/posts/8833154b/index.html","62a5b5c73d2d6c946d87479d18ca0804"],["/posts/8837602f/index.html","3d831a262d1a977bead893ec9299b03b"],["/posts/89589a03/index.html","e18156614304a7299cbc6d7a44f77994"],["/posts/8bcef008/index.html","7870658f520e9d42fc4306703f6d2a24"],["/posts/8bf9abeb/index.html","373a7d0bc296d1eaa01926fbb0f0ceb5"],["/posts/8e5f5686/index.html","0b3726b5a83f6c89cfdb3a0faf923393"],["/posts/8fa6b8c7/index.html","a27bda652c04a2a557d0af0f9644aee6"],["/posts/9029a3de/index.html","b458741b33b627b0487045fa7be2ec0b"],["/posts/909d9a5d/index.html","5f2c6686fd150946e33cd361cc9a2901"],["/posts/91404b94/index.html","0a72c836b9682c78b8ce37d6f56d6a83"],["/posts/932e3747/index.html","a8527c79e52de30c6b7825cee83c5101"],["/posts/95fc9e6e/index.html","d4c74cacfd81144362851898c5acd35b"],["/posts/98e67280/index.html","8acb85365f8833bef124729c609338ce"],["/posts/9a4d13ef/index.html","fa483f3675af63d7a8ebfb03a6448f5e"],["/posts/9afbb889/index.html","103458e7eb9c0fffff371c1feb63a58b"],["/posts/9b95a057/index.html","f4425c29e431772d2b26e806e69240f6"],["/posts/9be63ba/index.html","aab79ee4bec1c9fc9c5021920bce87a7"],["/posts/9d967c90/index.html","19de6d5fb869e11b78b8e4089f3a43c8"],["/posts/9eadcdf6/index.html","84db61c5c13fdcc373b9c71f47194af6"],["/posts/9efd76a3/index.html","6f3a98dbe0e5eca47f3325a5c71374b2"],["/posts/9f97db8f/index.html","5356452989c4d51ad5374e30c3a09ec6"],["/posts/9fee4710/index.html","21375afe92f01a7d619539d4c665c452"],["/posts/9ffb4388/index.html","d4645475c0c3159a0e0aca4be4737fb9"],["/posts/a04e2d29/index.html","95009be54d04b2f762a6eabd3bf069a0"],["/posts/a094d027/index.html","6b9863f946ebe2169cc05ce8f7e81b52"],["/posts/a27042c6/index.html","d2af77872b96e6b8a596193576c371e2"],["/posts/a29cc732/index.html","f9cff795e42905e79704a45d55ab30f2"],["/posts/a44a518/index.html","9d92a2d802210cb8b7331349f7b80a3d"],["/posts/a4f2a748/index.html","54c97f2db2fd2cddae838fa48dca4a6f"],["/posts/a7dc32c9/index.html","65b3e8f89384fb02cb3316698b804d05"],["/posts/a7f753ec/index.html","ee526e68e4a0f0d987e646b70633ac65"],["/posts/a9168bc5/index.html","4b61f7059b7225f8f9a0bc1f1f6fbef0"],["/posts/ab176793/index.html","374ef630c5a48ff2fea40033de4f58fc"],["/posts/ab34095a/index.html","382f66369b1d91374897ed386ebb4b08"],["/posts/ad47c4a5/index.html","aea980832d7cf047f989559a7bcd06aa"],["/posts/ae8f7b74/index.html","3d8c4b33c918a2494dfe2aeb599279af"],["/posts/af43816b/index.html","c96b71829be696f4c2152111e623663b"],["/posts/af4880c3/index.html","9ce0b0105d83b3b4f26247796c82c983"],["/posts/af9e049c/index.html","9e70e64adfb97e7479e075cda3c0faf7"],["/posts/b0f1a367/index.html","81c08753a1602761d91fcf0692a58c77"],["/posts/b0f98e2c/index.html","3db4089caac162990f33cbbdac3529a4"],["/posts/b33131fd/index.html","e130dc70b35ff0c30f2adade380c8f92"],["/posts/b36eb520/index.html","86514de8acfd83b64883c01a1fcb1592"],["/posts/b542fc02/index.html","8ceae4e84881368041297f74dd70c00e"],["/posts/b54eeeb4/index.html","060932bdad19e28e83648c916e53eede"],["/posts/b84f3f3c/index.html","4590887498e3364aa9055ad4a3fde5ba"],["/posts/b9325cf5/index.html","ef7bc41ce65024c3b94951c61973e6db"],["/posts/b94fc207/index.html","183724bc61248f5b962c516edc0d7d2e"],["/posts/b981a6b4/index.html","bce4c3e8df7d98ebfbe574b24e4a0530"],["/posts/bcea326a/index.html","d60cac36d9391dee0dfa53a3a7849368"],["/posts/beb19e80/index.html","69b14b78348f018584d3032974652dbc"],["/posts/bec490f8/index.html","83f44653210f1f4f01954c667acdae8b"],["/posts/bf7bde0e/index.html","52d55bb6836165337d7f3f655811d795"],["/posts/c03f17c9/index.html","c3c5e384ff1a3beee511d90a405e23ca"],["/posts/c14b94dd/index.html","5168914136792a3981a3f205bdd4d6d9"],["/posts/c35bc572/index.html","5640f20cb5dd79d0cbded984af4017a3"],["/posts/c436016b/index.html","b23d267b224443ad6185c9708e26bea8"],["/posts/c4efc741/index.html","22bd488be38a3da5ca9ead1e85a2cb94"],["/posts/c5e8a08e/index.html","decaf755c25cd3836ba18e02b50651bd"],["/posts/c7646f1a/index.html","731a2f7f2e4c9dc9ee65ff684cd89177"],["/posts/c7db1dc0/index.html","43afcbb1ab4fb6207e6e631c684efb3b"],["/posts/c7febeba/index.html","9ed553d705f0c1d1cb0970a377c396af"],["/posts/c9c3a06e/index.html","e3ea40bfe78ed59f9f31b47fdafb0289"],["/posts/ca657192/index.html","ad3c8902545eac9664ae76c7ff41cec0"],["/posts/cc6d2cf2/index.html","039d78f0887189756d528d048bc6413e"],["/posts/ce48f291/index.html","ee5004660f8a2a2c58094a9c47f89501"],["/posts/cf480faa/index.html","210ce8bc82577824be6107143de93d3b"],["/posts/d090b4d/index.html","d3730f69c37d76829a34436ba3ced1ef"],["/posts/d1995044/index.html","dade353a5bc7ff531a38321be46f281f"],["/posts/d2d34977/index.html","624dd0ee25097122775502436aae5cac"],["/posts/d3647a92/index.html","87776b8d3c058b776e78e4587eb89d30"],["/posts/d3f6b818/index.html","5351751391b9db52fb1d73035624fa87"],["/posts/d465029c/index.html","da76271cd8486f1c051afc20780540e9"],["/posts/d9884be2/index.html","32640fe32ef2ff737918a06a506d8063"],["/posts/da40f433/index.html","a6d9dcba08e33dd9ace78f66bf276e44"],["/posts/dae71d5f/index.html","c373b308cebac9b743c6c39cc02bac05"],["/posts/db9fbe47/index.html","58d9e6485984b6ec5bbd703cac2676ab"],["/posts/dbba997d/index.html","dd10615a63ecc5d1035dea582d58ed9d"],["/posts/dc94f8a1/index.html","96f6ca3bc04e795a90e805a74dd5d4d3"],["/posts/dfe9b67/index.html","1581ed58bec5f02f8fb8dd21732dcab2"],["/posts/e0387d80/index.html","f8e1023a770b35770a9c6d6002f141e6"],["/posts/e356f7b3/index.html","b2cfa0d5e877dc8e5b1b33ae156b26c1"],["/posts/e3acb366/index.html","12e9bb7f4403233e6d3710f05ae1bea2"],["/posts/e450354f/index.html","9b57a1a9153f038aea08963f49d7392d"],["/posts/e489223c/index.html","c125c6381edcf71ccd9523a9645e05b3"],["/posts/e9a8ddd1/index.html","096b6bca83993721e72e537b5ccd7d8f"],["/posts/ea914c06/index.html","da432da8c37ea363918c8e44e64095e9"],["/posts/eaa8f31e/index.html","bacd148463a2f4404361a6f2abd859d8"],["/posts/eac19412/index.html","0ac96ceed979fab24bd47a63dc7fe2a0"],["/posts/eb0c9e8/index.html","3be6c9a3839e482a58350818f958c6d0"],["/posts/ebe408b3/index.html","934e1a316eeac3a5ddc58442eb689279"],["/posts/edfc881f/index.html","1964cabf6f9d510c61df056108ca63cb"],["/posts/eec0bbd1/index.html","077b446079b0a34c54b2a2054951f459"],["/posts/ef22c7c2/index.html","ffa9689fb156e41f69f92346bdc5d560"],["/posts/ef271825/index.html","abee722b7f0368ed16093341cd97491d"],["/posts/f209578c/index.html","03c618eba3a16bba143bfb33eb388d3a"],["/posts/f3e9bea2/index.html","38e2d8f916d781958a93448f4a17307f"],["/posts/f67b7122/index.html","63f92b11273d2a128bfa0d79662f6f09"],["/posts/f7abba28/index.html","b6064ecb6ca761534e86cc06472b7194"],["/posts/f7bf33eb/index.html","310622cb11a066a08daa6ce11abc337b"],["/posts/faffd764/index.html","85191a0fcf1d3b563ec49caeb58ae4e7"],["/posts/fb684fb0/index.html","a46b5f32b510356b7d3e4a222c980d43"],["/posts/fc57199f/index.html","a69f5ca8351fe4cb0e3c7d468843b2a3"],["/posts/fc6e9a7d/index.html","b62c3f1d47cd1812840ce857034967c6"],["/posts/fc7bc02a/index.html","224e3224613a007953a9f0732c5e5b0c"],["/posts/fd67c5cb/index.html","40fc165c7be9bc8db6715e64e1bfd86e"],["/posts/fdde061e/index.html","34db1ba287af33eefeb7af3abcbaf19e"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","04358e6c213a921f2f642e19680a90b6"],["/tags/ES6/page/2/index.html","081b8eac1c2ea2c340a567c6cf304344"],["/tags/FL/index.html","71d7ba63e1fc032170237bdc74ca03b9"],["/tags/HTTP/index.html","45a665da95d6ddbd6b701a06884e0176"],["/tags/Hexo/index.html","04cb31ef7218bb3ee6a745327cae5551"],["/tags/Hexo常用命令/index.html","7dcff04f588b21db7b6e0bf444f0375b"],["/tags/Nodejs博客实战/index.html","d86c4894c9422c68b4007ebc2ce77cb7"],["/tags/React/index.html","9e9d18f9f71cafe29356c87c552938de"],["/tags/Vue/index.html","62ff21516761300a1967975dd0e89cb4"],["/tags/Vue/page/2/index.html","11958dc6682fe9a1ebf204f7b35a25da"],["/tags/Vue/page/3/index.html","4520c5ae4a675b17bd386c4374fd80dc"],["/tags/ajax/index.html","732debda275eee4508ff705c6d873312"],["/tags/ajax/page/2/index.html","e60b19dd9c56f93e539438f3c29ee51c"],["/tags/curl/index.html","7ff74286d252d1ba3a8215f7d3f94f1c"],["/tags/index.html","a52c55bbed6106ea8a4351d7e9ca70c6"],["/tags/json/index.html","f258afcabc934525d567fb556fee654a"],["/tags/mongodb/index.html","315f5f851262e9c66cc4682bd5405748"],["/tags/nodejs/index.html","03b4f6a75d7ef45f50a6ec22f577310f"],["/tags/promise/index.html","c7475d7106964aef15b70d86fe93e4a5"],["/tags/中国近代史纲要/index.html","81280879117ea5604a777f65417dec1c"],["/tags/日语/index.html","b7ee695b97c295014d9f44a83cc0852e"],["/tags/标签外挂/index.html","710c14b892aeb65040423bcfdfd64533"],["/tags/目录索引/index.html","a5c88b606162fca5bdd55da2bc76a9a4"],["/tags/管理经济学/index.html","c881b29a0f31f95c4af8b10d45506b30"],["/tags/考前突击/index.html","309cff2ae7ff8aa7558d46abcf24c66d"],["/tags/考前突击/page/2/index.html","45bbd63acdd21427fb1e508882fe6c6a"],["/tags/自考/index.html","50837f17ce584d062448d770f4a902d6"],["/tags/计算机网络原理/index.html","cc159beb911decdc1665c5705965e06d"],["/tags/运筹学/index.html","ed9e1b08c7e2ac20babf14229381ba58"],["/tags/马克思主义/index.html","2c216cb7e817d2d7f7c4ffb1c8272603"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});




