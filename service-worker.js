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

var precacheConfig = [["/404.html","5863c6ca17fb491f91685e989e98de46"],["/about/index.html","461531d72e74acd05a6972ea032bbe9a"],["/aplayers/index.html","62ab2d993fec0b1ade97d0f046a5eac4"],["/archives/2020/02/index.html","c1826264cc26add8ee8a1fdadf0035dc"],["/archives/2020/02/page/2/index.html","b8d8006ef67e338a030f992acb260e0b"],["/archives/2020/02/page/3/index.html","e598231ab1cab6e21366a44ada2a6657"],["/archives/2020/02/page/4/index.html","4249caa95369c3c47d8a74a2c5761fa4"],["/archives/2020/03/index.html","d13e5cdf82db884017fca6f5d579f639"],["/archives/2020/03/page/2/index.html","4416ea527ea067f0a87d96a891f7473d"],["/archives/2020/03/page/3/index.html","669e39685d9e7cfd49bebb00da4788ee"],["/archives/2020/03/page/4/index.html","98baf0d30504846e417823351fa5b0d3"],["/archives/2020/03/page/5/index.html","fe5a6ad2eb256bf4dd92252b038d38fb"],["/archives/2020/03/page/6/index.html","455c24f3ac4865ba2d1349baca0fc837"],["/archives/2020/03/page/7/index.html","d29190f8d281ec4067753f5e29a0d2c4"],["/archives/2020/03/page/8/index.html","95495f4c21814e08bb8b7af75be52e60"],["/archives/2020/04/index.html","b715bbc6a6a36188e73612e18909ea6a"],["/archives/2020/04/page/2/index.html","6dea81260924b3e2a3869251f615b6f8"],["/archives/2020/04/page/3/index.html","b85c6e678b0ec978097a93489d54cacb"],["/archives/2020/04/page/4/index.html","55002d5083bd344069f95ac9435dca20"],["/archives/2020/05/index.html","0ce0a3a99bdbaee96d944b39a9f38006"],["/archives/2020/07/index.html","808cc8e1be5eca77b5b4ca404a087db2"],["/archives/2020/07/page/2/index.html","c70d07ffdff6177b2f821ebf9e130d06"],["/archives/2020/08/index.html","5be2c6ed2a806c08241fc472780dfcdc"],["/archives/2020/08/page/2/index.html","2c61432c78a2385203932ced47cdbb0b"],["/archives/2020/09/index.html","2a585a66d0322d8b0f9792c4e11a7efb"],["/archives/2020/09/page/2/index.html","57975743f1fcfc4921f3deaabcb93f0b"],["/archives/2020/09/page/3/index.html","dea9055cd38af1ec7302749aa42a3092"],["/archives/2020/10/index.html","c53be1f410d9ac9c0d00c6b98a714403"],["/archives/2020/10/page/2/index.html","1b2ae54f9aa47cb2e83059dc294ca1a6"],["/archives/2020/index.html","dac8201da386c514b6612dcd179d87bb"],["/archives/2020/page/10/index.html","0ddec6ba284e2baca73c6c5eec8e69eb"],["/archives/2020/page/11/index.html","6b934f778edd8058b0f62a4de013a176"],["/archives/2020/page/12/index.html","77becc98857d54f1a704a43b14695fd2"],["/archives/2020/page/13/index.html","49d86a26302c2df00646952cbeb78294"],["/archives/2020/page/14/index.html","c035a13afce18866a3e6abf247aba774"],["/archives/2020/page/15/index.html","3aba531f9aac98168e9d1cf04602dd7d"],["/archives/2020/page/16/index.html","af3623aaa9a26ebf43b1ed3642e83bc9"],["/archives/2020/page/17/index.html","6f24fb5278c4698cd45c72a4245a6d25"],["/archives/2020/page/18/index.html","4f28204e648018d0101d7fc11b7a32cb"],["/archives/2020/page/19/index.html","d1c819373efa929f90069a9ae703e65e"],["/archives/2020/page/2/index.html","00943c46f96c2fc1b74d9cef5c4c9771"],["/archives/2020/page/20/index.html","94e1775b6887d7b70997d651cf6110bb"],["/archives/2020/page/21/index.html","7024e0ea4b4f3c9b150971d6ddebe999"],["/archives/2020/page/22/index.html","c105434166b92b092acabf7ced986fc8"],["/archives/2020/page/3/index.html","d42fbb8054fc1b832ee68b0aa8edff04"],["/archives/2020/page/4/index.html","60ecf9fda4056387ce99c7d9a36756c1"],["/archives/2020/page/5/index.html","f658e88230a9eba2fcba3275b1e93b88"],["/archives/2020/page/6/index.html","16a07c9dc12c181c5b8398a676a904da"],["/archives/2020/page/7/index.html","516d8514d53b0bbc6f4a9d22a7a53a6e"],["/archives/2020/page/8/index.html","2da7d7091304b8cb331b59e825603deb"],["/archives/2020/page/9/index.html","c5813709f92591fb0157b62ff58d3609"],["/archives/index.html","96d14948d15cf31e550be0075dd8d316"],["/archives/page/10/index.html","6b74e09af83e2984a3a4792ecff54759"],["/archives/page/11/index.html","568b9d115536dd386d8f8d0b5881f621"],["/archives/page/12/index.html","b2679abcb3220b1723992f4c57e9be55"],["/archives/page/13/index.html","ed1848f0e4bd2fe7c20b530ca3fb5387"],["/archives/page/14/index.html","30e5bbcef11d2f82a286b27f3bd4bb56"],["/archives/page/15/index.html","4b5b0a095ba5fdf80208367b8cd2b66d"],["/archives/page/16/index.html","106bfa0e297c55a1d31b9f67e5b80e43"],["/archives/page/17/index.html","b221cac8b568211fe28acc9055ce90b5"],["/archives/page/18/index.html","18d9edc5121fe37b14a625be5778279b"],["/archives/page/19/index.html","b340986262d6fc142d72d8db3e6d0409"],["/archives/page/2/index.html","6c8e62170bf19ff0e848f8036d2c4784"],["/archives/page/20/index.html","3ecdd82042acf44211749b6cbdc83e70"],["/archives/page/21/index.html","e9a954290d1daead0ec88bc61b5b15f1"],["/archives/page/22/index.html","8c3d9e7c992e8334e049637e12e7dd46"],["/archives/page/3/index.html","f30aba86d403eda827448f9ab8a56b05"],["/archives/page/4/index.html","5c4cdbccc39cc43a221ca0b1f8bb4c8b"],["/archives/page/5/index.html","42b5d590292343163ff972aa1b7f538d"],["/archives/page/6/index.html","f1da3a17715a6c2941832a163fdd0667"],["/archives/page/7/index.html","b7948b49290071c9f726a019b6fd701e"],["/archives/page/8/index.html","312cc3f41239e664e8fca172c0d58264"],["/archives/page/9/index.html","9957f8816537a3ec5d4a5cdc263c1555"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","842e7f50e3e8856e4f2345ea8b4e7092"],["/categories/Ajax/index.html","2b0d6bb0488e47f2b6b76b2d52a39fc8"],["/categories/Ajax/page/2/index.html","90b235d84ea2ab63fccf3455f0f61764"],["/categories/ES6/index.html","ddcf2c85dd48e74c201f21ee9f5247b4"],["/categories/ES6/page/2/index.html","f1c344c73500b42b761ceca80c0735a8"],["/categories/FL/index.html","a1ac15320f194d885824823d08830b4d"],["/categories/HTTP/index.html","71fc54ecb53d8413eacf68a4d820d357"],["/categories/Hexo/index.html","84405e2c872296937cff75d46a5873a7"],["/categories/Hexo/标签外挂/index.html","6d08395da59aa1a290cd2de2dac9d692"],["/categories/Hexo常用命令/index.html","749258d119ce6231314fd627b97d983a"],["/categories/JSON/index.html","45b04e7a5532c5991a5f85ab41645511"],["/categories/MongoDB/index.html","541073f41216c61552de530a22c38149"],["/categories/Nodejs/index.html","6202ec08ea8d2b374a58d8f7fde4a8c5"],["/categories/Nodejs博客实战/index.html","579dbc0fd331403520feb65b462590a5"],["/categories/index.html","7abaa8d740722a39e4acf545807e6890"],["/categories/promise/index.html","cafc1f3b189154b6a697a81f8db9b561"],["/categories/日语/index.html","064b267dc71ae79387bd47063a58e98d"],["/categories/自学考试/index.html","e697bf60d73f472248e1990e03b3642c"],["/categories/自学考试/page/2/index.html","591eedbccc3fad3ba2e35bc34164fbab"],["/categories/自学考试/中国近代史纲要/index.html","a712a7a41ea858de07e5a9a594d7b305"],["/categories/自学考试/管理经济学/index.html","438050cb2976a9bbcce98f0de19c9d6b"],["/categories/自学考试/考前突击/index.html","f8f2e3ec9589e42978df550a93e3c88d"],["/categories/自学考试/考前突击/page/2/index.html","a453a9fae3c9958ad38b87bbd162e61e"],["/categories/自学考试/计算机网络原理/index.html","8b7164aa08b2d097d05ca9c16c6c32db"],["/categories/自学考试/运筹学/index.html","5a96e1baea8ca285c941ed6f6a808b60"],["/categories/自学考试/马克思主义/index.html","184cc70d88b1d3870cd371bfcd7f00c1"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","3af226d85d8c57c128e504219cfb75a6"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","9c01ccbab9ecda5f18ff09798ac4917b"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","9fb6c0ec37ca909e4179798b65080f6a"],["/page/3/index.html","96943ff60bbf080e3b2181a224fe20a6"],["/page/4/index.html","e624899a3a51e0e0ba60e18bcb232d3e"],["/page/5/index.html","41c23b633aa755e978ab9856051eeff4"],["/page/6/index.html","d4308d1179d3cd4d239b7634c1206fc2"],["/page/7/index.html","479f1d799eed044bffd4928ed8258453"],["/page/8/index.html","b08e03ee899ab6beccf4a5ff07292b47"],["/posts/10812f0/index.html","689f88ecd441fd4f00e49806806d47ab"],["/posts/126b275/index.html","a661794f3b290c036438ea8cad0573f5"],["/posts/12d95a5e/index.html","927d4e1dfa56d2c4e834bce6e0f00ee9"],["/posts/1367417b/index.html","98bcaa0f0752307179b744c71996c5e5"],["/posts/13886e3f/index.html","f144fa36085c75373b7f1849c1cd7dac"],["/posts/145193a5/index.html","afa7440adf2eb3d6e690ee5887b576ca"],["/posts/149dde25/index.html","f28ac559e8db38d95746e00023ee19ca"],["/posts/152fa65b/index.html","3d0c4a40f65ec8507ac348bb1b98d242"],["/posts/169e7dda/index.html","8ad7b0f1e49a55119789e17275d88bb8"],["/posts/1875100e/index.html","f423a9dff73beffeccdf5a50a8b597b3"],["/posts/18eaef7d/index.html","7157c1c32030582c3b1c5a250e7e9e61"],["/posts/1a0bc7b7/index.html","8ae9605274e202ed2ceca69c94430268"],["/posts/1a20a057/index.html","60cf869cf6a016b3d8c1dc5d892bc6ce"],["/posts/1a998be6/index.html","b0da416206b8c4ec573241883b7c25ad"],["/posts/1bffbd20/index.html","2d4fc7898ef425e0dd6228d003ebb429"],["/posts/1c5a0485/index.html","69489d4aaf1d278c583d421efaf589d3"],["/posts/1e638f78/index.html","2886e5e648e67dbbcf8ae01b56a17aa4"],["/posts/1e967920/index.html","bd3e55058eb0449c3264c768d82f4b4e"],["/posts/1fb53120/index.html","f9a5aa0e48dd7b1730d184428d267625"],["/posts/21466e86/index.html","f8af6ae84859029d6161b73c6eb17f66"],["/posts/21abcf1a/index.html","bffa663e7aa7a430c14d2b7d8c80737a"],["/posts/21c250b1/index.html","e28b76bc04e6c20642b186a6ac1da096"],["/posts/2287cc/index.html","4dfd7a013808d02efbf23aaf0d4b19b6"],["/posts/236bfea3/index.html","e476b9051ee6f93b504fc6a9e456d2ca"],["/posts/24caea6b/index.html","dfef9725845c58dfa08a2796e5249e50"],["/posts/25d45c3d/index.html","de64d719f3e301c3e58bd08734f3a71a"],["/posts/262baa9f/index.html","d4adf00ba76d3100bf0c2cf3b9a9d0a5"],["/posts/26f82f65/index.html","2372fb8195400a2b8ede2e73ab1afa69"],["/posts/27cdc142/index.html","c0875062511ef1e31406de10510b26a5"],["/posts/2895c4bb/index.html","c63a69212e34b83c7418ab26b45f120a"],["/posts/28987ff3/index.html","f3dfa078e7a82ebae449d8a6d53fe740"],["/posts/298cfeed/index.html","fda4c4be8b8d022b6dc5676a97c90d9b"],["/posts/29f0df96/index.html","f779ddefc32e3588a4a1b6c4da4beb9b"],["/posts/2a1d2b6f/index.html","c81c35a2033b4d71b968af9c8247c4d7"],["/posts/2a386047/index.html","ab89df165e7b0beb0688215e1f95c03d"],["/posts/2b2f44ba/index.html","62d15bf0cda32a43e2ddbe127139c910"],["/posts/2b770baf/index.html","91305e6615971a47484111a68f7bc3c0"],["/posts/2cda4a8/index.html","40783fc08d4c48752f82f1cdec9c718f"],["/posts/2d020832/index.html","ba2877eb7dbb63fa9e03ff2c9a7113d9"],["/posts/2d6d3bd/index.html","c7876fe9b75ae63e96822a345b0118e1"],["/posts/2e0c129d/index.html","dcfa29d81748f304faf6c13982daaae5"],["/posts/2e7563a0/index.html","94c9978a4c41c56894491f67b5d53b6d"],["/posts/2e7b8d69/index.html","fdc17d00a651f31115cd7c8e63d396ff"],["/posts/2f28d14b/index.html","e37e7db74e13fd2b85e3337e529164c4"],["/posts/2f6e1383/index.html","6bc3734294b574a8ae0011492936cc35"],["/posts/30bfd1cf/index.html","fb040f4376a4a9bd206b555dda9a2a95"],["/posts/33235106/index.html","f7a187bc7d50383b737bd2f0f36ff0e9"],["/posts/344e951f/index.html","5fdaf7dc910ce04cccd1ed31224bff50"],["/posts/35e2bcf6/index.html","1b31c51434d65719716dffec9114dc43"],["/posts/365e96c5/index.html","482094a4f8086d4c2d2c01b1e5659477"],["/posts/36e331e3/index.html","ceee8ea080cbe1eb8f4d6f64ee57f095"],["/posts/372df90a/index.html","e8ed8e0c3e2264fbedc52e24498034be"],["/posts/37c547df/index.html","8626efa11a53c5e3a0b2bc54cd8ef745"],["/posts/380dfa6c/index.html","5a6273a91ad9169ef55b22745f7da97e"],["/posts/3859c98f/index.html","2d1d4e9a6e4cb42167f03def28d23c56"],["/posts/38a88481/index.html","9ba05984de9b61533d7e37e560695af8"],["/posts/3914bfed/index.html","898a041ab0039d286cbe7b77c161fd8f"],["/posts/3b56780c/index.html","3dd2db5ab1c8de98f2d7beb503b8f419"],["/posts/3d1ef1fa/index.html","b5400d9247117cf4cdd17ef1ebfbedd8"],["/posts/3e4bb613/index.html","50d9bb7052eb12856969041127fc9d7e"],["/posts/3f2e933/index.html","09e8542590fd7986b8d8b3748d777dd2"],["/posts/3f6e5f9e/index.html","db630e3fc12f2cd64515219373957fea"],["/posts/4349a589/index.html","fec01555bf2be340f38247342600d805"],["/posts/44246190/index.html","8a28673cf0c4ffd1db51f4b2503434e8"],["/posts/456550f/index.html","5c24f5ecfa0cede4ae4026d2c66b56d9"],["/posts/470ac03d/index.html","0d4ed145f72241e24e94abb1d315927c"],["/posts/470d45ef/index.html","c80e6c59de2dbc12d6538134c83f4429"],["/posts/49249ac9/index.html","78c60004cfd40b47e3064810f604bdad"],["/posts/49f2d2a/index.html","b095463c40add28edcc6d9f3ad22673b"],["/posts/4e6d4eb4/index.html","13eae836adbc912c7e94e9a9172b3d25"],["/posts/4f346c5/index.html","b28d4135c4d54c8d19c8b6f8b89ad179"],["/posts/50caf1d4/index.html","73fb2557ec603070492be4cddbed0695"],["/posts/51139400/index.html","10086cacfd408b76e7f3e1326399f14d"],["/posts/512c9a09/index.html","0d0c21a45ad16b9163375cf392c0a381"],["/posts/5205b330/index.html","5dced8e49c2e169a68133f1848e3cfcb"],["/posts/52d36cab/index.html","bcd2bc9a3b554e951fbd9f9f02b56bce"],["/posts/532a083a/index.html","ca37635f46d1b8111415326b7ba7f3c2"],["/posts/537d2c2a/index.html","490def4f67d9d30c69e1282112f60af4"],["/posts/54383ba0/index.html","69b9359a016ec4ac692d6c256ba5d004"],["/posts/54667693/index.html","bc9dc947d38d1ceec6c11fc11a4436ab"],["/posts/5508212c/index.html","d04b280544d743ddc0a6d7ebe79df963"],["/posts/571564e5/index.html","38edcb3cb15b12fb5d8fbeb614c84dad"],["/posts/57900fe5/index.html","4463173004ef0eaf3acd272dba8ab766"],["/posts/589a214a/index.html","ced931258915d49fc85949adca27c656"],["/posts/599a2b19/index.html","bed3aa8bf9de4d53893cad098b4b4b53"],["/posts/59c05382/index.html","09e16dd800e444afbfc24cdd22f89c78"],["/posts/5a5294c8/index.html","3490a8be7df4c1dca92e34bbb59dcb3f"],["/posts/5d3da28e/index.html","2f0f52712898cf3f62e4de2609e59887"],["/posts/5d3f50d1/index.html","0b1cd2a4555a26a3e506d5bb35ce258b"],["/posts/5ef7ef00/index.html","5039ddb61a46fef045650070551aeed2"],["/posts/5f1fa8df/index.html","90f1b0ec742729ed45c77e92ed352075"],["/posts/60b5dd06/index.html","5fcdd934f80fae7d55abac5862898746"],["/posts/61477045/index.html","fe612156e67f379d035d44813134bb78"],["/posts/69d79f93/index.html","2001da70b98926b0486b688fc1946dde"],["/posts/6b2f046/index.html","61091abcb3cd734ac49554d9349bcee7"],["/posts/6b4610c4/index.html","817de6fe799e28bebda8fc77e9340f31"],["/posts/6bbf03f0/index.html","e6110bc4dad93cc3f3f803ced5010daf"],["/posts/7000d139/index.html","51450a0044a3ed025542ac87dd850dbe"],["/posts/72f94093/index.html","58cc634e3c3c308d6a72b9ca8534bda3"],["/posts/7380b71/index.html","9d2dcd9370d5cc266829aa340f38786c"],["/posts/738eee3b/index.html","2cd6697aa5bdb9d25e37c361fb906ad3"],["/posts/73981dbc/index.html","4e9b4aaf92af2ab7d2cca1fa3d9eea67"],["/posts/74d60fd9/index.html","b53db047f24b07b245739efa9fa78d00"],["/posts/74f5d9a5/index.html","a86e40fd1374ad75b444df031a42677c"],["/posts/750f2ce3/index.html","12c590dc78fc55858fe4e2b6a204e633"],["/posts/75ceb627/index.html","11d79b739d2476d462eccf4dcbc56215"],["/posts/7725b75a/index.html","064a9524b3345284cd4af63a23229f4f"],["/posts/79ef335/index.html","757451af9a017a8c628b610a8a960820"],["/posts/7bbd3149/index.html","78c62e9bbeb380e4acda828443b66d5d"],["/posts/7c20e8d5/index.html","a0ed22df9597b675cee33101ced7601d"],["/posts/7d3ea75e/index.html","b88de682f4978e4dbbf2e706973bf1de"],["/posts/7d43958e/index.html","dc9f0d7d52e0164eee4486409a8e5e0c"],["/posts/807ac7f2/index.html","3e75954bc531e85242722499091da8d2"],["/posts/81738fa0/index.html","4065d20d84c2a906c9d9088e9af3fff4"],["/posts/817c41b4/index.html","613826857c6e8eef653538f5c66397a8"],["/posts/84ee8e34/index.html","5fd50aa1aa3d0793ed0d6f1a7be0e72a"],["/posts/8837602f/index.html","4fb3e40e60e5d1ecdbc6821f97361cea"],["/posts/89589a03/index.html","252cb17b063cd547372922f5c2d8c474"],["/posts/8bcef008/index.html","60e799f323cbc1070875dc9d9f594b5f"],["/posts/8bf9abeb/index.html","40187836aa60b15121294cf5e234f9dd"],["/posts/8e5f5686/index.html","c26b2639f4faffcadcaffdff9be97b7a"],["/posts/8fa6b8c7/index.html","1a480ee5ec7f5b7f834a01c2037be8fc"],["/posts/9029a3de/index.html","239d06765bb940556015378ca6088f23"],["/posts/909d9a5d/index.html","febcc6e6c755e325b214d59cf7c82d08"],["/posts/91404b94/index.html","d8752188b711da2a3360292acc047fb4"],["/posts/932e3747/index.html","dd3726f2c756e19105375deb75d52f7c"],["/posts/95fc9e6e/index.html","764b8c6f04369b98f921e9df4aab34ba"],["/posts/98e67280/index.html","180f5e67a101a0e1ea8b587723e172ff"],["/posts/9a4d13ef/index.html","a7025bcfd0695f25d79ade6d401a6a54"],["/posts/9afbb889/index.html","f693311baf8f082726dde5aefe7e02d7"],["/posts/9be63ba/index.html","e04224e99f1acf78a6fd60a3fc9c8ac4"],["/posts/9d967c90/index.html","538d23151256d6a4e84d2d65b7d63d68"],["/posts/9eadcdf6/index.html","6be3b69fe32e6f92a16f6a446180ef79"],["/posts/9efd76a3/index.html","6a4d8e96cb401ad65885890e05f630a3"],["/posts/9f97db8f/index.html","0ab3fa1495064dddecc59fd8878d82fe"],["/posts/9ffb4388/index.html","7021fa42ebc131c417938d73ea86ed51"],["/posts/a094d027/index.html","8283b7b3d2ba543d22abbe12d5eaed41"],["/posts/a27042c6/index.html","e1fa52818f541f13d1a52db6a0a5955b"],["/posts/a29cc732/index.html","054db3fac6b30a03c20301818a2b2b63"],["/posts/a44a518/index.html","f18c3aa920b271c21072658864f14799"],["/posts/a4f2a748/index.html","4fb0d7b02258935ace6eeb8c7d48d0dc"],["/posts/a7dc32c9/index.html","408579ecf8e99a5b55a403ed2dd8bb3c"],["/posts/a7f753ec/index.html","63cedef0b9b373949b778bad1210f298"],["/posts/a9168bc5/index.html","531d3d9a94cb1b4fd9b977b293b7c132"],["/posts/ab176793/index.html","f289bec66ca8490cf950eeb29e366bd6"],["/posts/ab34095a/index.html","cd0bb0ca48ff794a5ca20dbf4b99e1c4"],["/posts/ad47c4a5/index.html","453d0165503d4c01ceb765011ee02c7f"],["/posts/ae8f7b74/index.html","47edd548731a11a3c3e438286e32a0b3"],["/posts/af43816b/index.html","ab5e4d3293acd3e0d9d36abe2af3fde7"],["/posts/af9e049c/index.html","a9e0443729f2989a4bb7f850744cd67b"],["/posts/b0f1a367/index.html","19781a6d907f648ef73ede22c57ed2c1"],["/posts/b0f98e2c/index.html","20247a8bdde3f59e88f16f7fb7fb8652"],["/posts/b33131fd/index.html","49d5d2584c3ce67f59598de86b3c6e25"],["/posts/b36eb520/index.html","0451e6828f100a6cf574be0588519ca8"],["/posts/b542fc02/index.html","dffd8477efc4065d71b2f12c13374de0"],["/posts/b54eeeb4/index.html","bcbbe5d031938f91aec55247867df322"],["/posts/b84f3f3c/index.html","7d280e2b7129a194e4714e28f5c003a9"],["/posts/b94fc207/index.html","35774317abe93e738506495dd53a8c52"],["/posts/b981a6b4/index.html","819f320f13820304c1dcfc053fafdd79"],["/posts/bcea326a/index.html","3d5c6210b70c437ba85eaa9e7d4a4f47"],["/posts/beb19e80/index.html","dc4a3ecaf9480405fcb0e2c8359d2a41"],["/posts/bec490f8/index.html","1c1ecc75e8faa018a8581d157db132db"],["/posts/bf7bde0e/index.html","15fcbfd2b8512e911624b549e4c824fb"],["/posts/c03f17c9/index.html","050c9d7e2b1094e20b7ec91fd7b2cd02"],["/posts/c35bc572/index.html","1f3eb680c80369d81887f72513b97603"],["/posts/c436016b/index.html","c7feb0a035d9453a0f20bd867c5a529e"],["/posts/c4efc741/index.html","5202f8329cd905893a0ba04bd6ecfeee"],["/posts/c5e8a08e/index.html","a67898b182e54b2657a799c2f650096f"],["/posts/c7db1dc0/index.html","5cb638e12314843bcd287e2d09b7115a"],["/posts/c7febeba/index.html","cb5a542a7af4c593428dd995cb05b352"],["/posts/c9c3a06e/index.html","6ab1be7681989c1d545794e525c17347"],["/posts/cc6d2cf2/index.html","b821f2616f56ad6fb66fae1f3eacb558"],["/posts/ce48f291/index.html","ff40bc73cdfdf261a57be68a7ebfd0ab"],["/posts/cf480faa/index.html","5b4f3ab0e515030fd8a6428107d38cbd"],["/posts/d090b4d/index.html","5d815acc189e1b06648c1e2d6765ef6a"],["/posts/d1995044/index.html","eca5b2744c0e5c30c235a48116387e74"],["/posts/d2d34977/index.html","026a5cd3a85cb706eb986fa4ad5cd646"],["/posts/d3647a92/index.html","3cf30c263e5dac6c21471b2c3f536454"],["/posts/d3f6b818/index.html","d989ef143ab523db4bc731ff64619f79"],["/posts/d465029c/index.html","54191312794cdc33843d301e3c840a71"],["/posts/d9884be2/index.html","25bd9d9ae71fb1d70f8aed5608d099b3"],["/posts/da40f433/index.html","488312b6be82705115e3f7add97ae8c1"],["/posts/dae71d5f/index.html","d9e142f00c6d4fa0649fe12157f643b7"],["/posts/db9fbe47/index.html","6e02a9757cb41162e523f9d2a62ccd8a"],["/posts/dbba997d/index.html","b5780a8cdbe902c8af81115080ea6529"],["/posts/dc94f8a1/index.html","af0316a4012e3527934378884f2dfaa1"],["/posts/dfe9b67/index.html","e5741d6930e538ac4bcc4344852ecbb7"],["/posts/e0387d80/index.html","e42547fe40067c89eceb1897567976d0"],["/posts/e356f7b3/index.html","970264f43e6705f5f02ee76251030045"],["/posts/e3acb366/index.html","dd0fe8d43e9900c06abf89b61ae05c3d"],["/posts/e450354f/index.html","d8d146ca291f8111a49a5272f63f7f91"],["/posts/e489223c/index.html","5775298c6da71258b0c6d870e71a0292"],["/posts/e9a8ddd1/index.html","7c8fb18f8582f621e9b4ceeb90aea48a"],["/posts/ea914c06/index.html","3ea798916c98d739c82f2484ffd40e90"],["/posts/eaa8f31e/index.html","69a06c84cc990bba4132c7919670f59b"],["/posts/eac19412/index.html","ff9a6ef9b2af915a31ac58865ca27264"],["/posts/edfc881f/index.html","a9bd712911b20952733f1e8941925a3a"],["/posts/eec0bbd1/index.html","ede552672f0caacd0bc7d1146951c042"],["/posts/ef22c7c2/index.html","72dda7585efcd6a060cf0e9b749f319f"],["/posts/ef271825/index.html","e98a7ebc84137f47cec0bc06b032d794"],["/posts/f209578c/index.html","5d3fb9eb9767fd6fa04f9f574e058fd6"],["/posts/f3e9bea2/index.html","92ba12a3019095a178cb99c7497414d3"],["/posts/f67b7122/index.html","61dd599662bb574d2750365bb8e13506"],["/posts/f7abba28/index.html","69f4bef47f1976999e7263baa641397b"],["/posts/faffd764/index.html","7c6aa5635d573d09d57e0480e1a850e5"],["/posts/fb684fb0/index.html","e03399eab6cd362a550627d840baae88"],["/posts/fc57199f/index.html","b2ee2dabfb87d913f1784c8ce914f816"],["/posts/fc6e9a7d/index.html","dd66933cbd997742001ac28bd013b089"],["/posts/fc7bc02a/index.html","33634a29d09bf6f71543473b073f2421"],["/posts/fd67c5cb/index.html","56e3153c2cda95e8e1d49dd5e9531239"],["/posts/fdde061e/index.html","d702b8b988c5ce63b0c840d7ab2dd1eb"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","7c1da7810b3a63bef75326e89b8230e6"],["/tags/ES6/page/2/index.html","a612929d0de2aca183e1a2de34289947"],["/tags/FL/index.html","82662620c3f97a0bfc7efa6f7a7ee64e"],["/tags/HTTP/index.html","9930812cb864eaebe604ae118371641e"],["/tags/Hexo/index.html","c8e310dfdb7575499c28cd03a9103b03"],["/tags/Hexo常用命令/index.html","1e4469fe6039c4a0dc67bd109a609216"],["/tags/Nodejs博客实战/index.html","2d617ac4e8993ad744a5daee1fb08a3b"],["/tags/ajax/index.html","720711fbd9d46f1360bc17e482ea6dd9"],["/tags/ajax/page/2/index.html","eb59a409837fa13699b4427a3dee2490"],["/tags/curl/index.html","1f7909a0ac49121f681a54f0341773c2"],["/tags/index.html","6dd23e16e5d6508ad81a949fd8e4927b"],["/tags/json/index.html","2130831588f0c52aa315ccebbb85a7c3"],["/tags/mongodb/index.html","7be371c94ddced3571764540fb5d0dac"],["/tags/nodejs/index.html","24caf43ef772d6f621e57824a998f689"],["/tags/promise/index.html","3332bec3cb52d17999835eb12fa43c95"],["/tags/中国近代史纲要/index.html","2b506ea8517113b626a5aab160fdad92"],["/tags/日语/index.html","fcaae8f537c24dccf6590fb5c2fb7f5a"],["/tags/标签外挂/index.html","ac940f4ce9c7aa26d7359dcb5b79ec6e"],["/tags/目录索引/index.html","28dcc96dfe54f2a9d2bbdcd7a5f63dd3"],["/tags/管理经济学/index.html","0a8eb8b122ecc524db978f1ceada720b"],["/tags/考前突击/index.html","d7a80319b5b1634d2ddf519bfc838dd2"],["/tags/考前突击/page/2/index.html","30b3415bac5233a120fdf89aedfa2c2d"],["/tags/自考/index.html","b9ebf8f50051ee23043826bfe54ab204"],["/tags/计算机网络原理/index.html","b656422d27e707b71eb51e9f78d9a615"],["/tags/运筹学/index.html","209ce119c9bf975716530418a6038791"],["/tags/马克思主义/index.html","bd3ee603d828244fa6d92e5645b81f66"]];
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




