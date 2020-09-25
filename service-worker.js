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

var precacheConfig = [["/404.html","57045fe1eeb5d74697e3370cc993d846"],["/about/index.html","0bb3a680d8711b989a64dfa77485a22f"],["/aplayers/index.html","fc8abae3628fef67a89f2fb494933c2a"],["/archives/2020/02/index.html","4854c3c4706916b65cfeb044e5d0c8e8"],["/archives/2020/02/page/2/index.html","1eabd4fc7fe1df08e32730106b8f066b"],["/archives/2020/02/page/3/index.html","2fef95ae9e1ef62c658130191a43c1c4"],["/archives/2020/02/page/4/index.html","0ba2a471d1670a82e29679e436a6c53f"],["/archives/2020/03/index.html","ca06ef23ea938fb0e3fca9e83c574999"],["/archives/2020/03/page/2/index.html","682fecf1b7e87485ba250fde21dc7d49"],["/archives/2020/03/page/3/index.html","f13284f63422fd1728ed788f99e853b4"],["/archives/2020/03/page/4/index.html","fa64d516f35e9f30f1fc0b089e8834c6"],["/archives/2020/03/page/5/index.html","5189244b5ac782d44cfdb64ad6171e77"],["/archives/2020/03/page/6/index.html","666b3c45672e349e37c9d948d1d32abf"],["/archives/2020/03/page/7/index.html","31ba24210916b286c281a07d5ac6e5f7"],["/archives/2020/03/page/8/index.html","bae7cff277872dc2466e4d3fdde56a0d"],["/archives/2020/04/index.html","41f533701b688edc6497990c64637b04"],["/archives/2020/04/page/2/index.html","d55b7690a27110d97e99da0ffc76314d"],["/archives/2020/04/page/3/index.html","e95c824076836195c06b9c78e2ed5533"],["/archives/2020/04/page/4/index.html","572c2e96208f51b52fe1f4ec7b6dd8b0"],["/archives/2020/05/index.html","25c4e9bcb0a9146bde7476baf56ed93c"],["/archives/2020/07/index.html","5f60e681f4755fef211478df31bc9cc8"],["/archives/2020/07/page/2/index.html","658a5fb67a66298b3f61faaa4876ea1b"],["/archives/2020/08/index.html","a1bd932adab2145a2d330bfba33c4935"],["/archives/2020/08/page/2/index.html","4b9f2c29312766b271b6436bb50f2038"],["/archives/2020/09/index.html","f9ada5ba0bba2651d28937a90546edc1"],["/archives/2020/09/page/2/index.html","988f734e7de3aeb3e63df6c72e37debd"],["/archives/2020/09/page/3/index.html","5f15cf25fe0357a0d28075e3b92a00d8"],["/archives/2020/index.html","0d751242bd03834fa87a82a16f23961d"],["/archives/2020/page/10/index.html","f2908e45d04e379db6b9440984e47a2a"],["/archives/2020/page/11/index.html","f1ac6aaf6f0e1754ac886cd1ed2fa588"],["/archives/2020/page/12/index.html","c307c7e40519b02be683331589db4d5c"],["/archives/2020/page/13/index.html","b852fbb23bd2a1ca77fe9adf5ca50ab5"],["/archives/2020/page/14/index.html","4fd693272be0bdd48083fe20a7f71645"],["/archives/2020/page/15/index.html","da89dec48de93967f8bf366f5737fbd9"],["/archives/2020/page/16/index.html","f3118b8a08d626bf0bfb3e9d9cb4a4cd"],["/archives/2020/page/17/index.html","71a23afeec1c1cb3df996e21f3c0a7eb"],["/archives/2020/page/18/index.html","05121c8150fa117e9dee086ef46ad74e"],["/archives/2020/page/19/index.html","5cf6f636c215875a1846b8629b6c8f90"],["/archives/2020/page/2/index.html","d80609b3dadbe2051d89e05a5b8ddd07"],["/archives/2020/page/3/index.html","8910599319f1679d9ee432a7d9f97c7c"],["/archives/2020/page/4/index.html","d637b144f8c989dfdc71bcf8b5e0c637"],["/archives/2020/page/5/index.html","cd42c3acc121278019721c90982cc288"],["/archives/2020/page/6/index.html","0d3b1194ad093218164800b417106a9f"],["/archives/2020/page/7/index.html","b8c2203da1f8bf5be65593442d320cb4"],["/archives/2020/page/8/index.html","fdf5841e64745247e4d0c35a984ab105"],["/archives/2020/page/9/index.html","525272d2fa9da0d0730b077ef72ab7ee"],["/archives/index.html","3ab900be4a0c6f2e034e3569f7ea783c"],["/archives/page/10/index.html","ece78f5933cbe14d425edeca47a68fa5"],["/archives/page/11/index.html","a3ad510cb7a9670cd4cb0bbd5ce81171"],["/archives/page/12/index.html","756009cf686c648496adf2af82dad8cf"],["/archives/page/13/index.html","f15678d79acd199e4ca07407f645143f"],["/archives/page/14/index.html","4aadcac3ba719db5f195a41bcca1af85"],["/archives/page/15/index.html","07a9a895b4dd33e615cc1f6df335ffb8"],["/archives/page/16/index.html","2eadb4c0a426ca802695b4fe6b69a9ec"],["/archives/page/17/index.html","330234d25ef8e2bfff286ea4a4b40213"],["/archives/page/18/index.html","c8b4a07466799a8a7204754ad46e3ce1"],["/archives/page/19/index.html","b7d3e843ddb3107ad5d5a0a161ffae25"],["/archives/page/2/index.html","74c2129396af6fa8843a6ba860c7ab74"],["/archives/page/3/index.html","7810f84e6fe33846e8c07a08737bb560"],["/archives/page/4/index.html","73f02ae348aecc94a568b9ea9cb71727"],["/archives/page/5/index.html","64bc2a31a0f3d9963bb5822a56c40060"],["/archives/page/6/index.html","778c110dbfb934ba54172a2cfad0bbcf"],["/archives/page/7/index.html","d077c31f38d47d737c0478575276dd49"],["/archives/page/8/index.html","b838703cc875d508015515cc76ae8554"],["/archives/page/9/index.html","d17311b9a2ed18740e326ef56c1d3fc0"],["/bangumis/index.html","7b54931399487ef084db74210149e56c"],["/categories/Ajax/index.html","54350c9f96438dd1dcb71e3adab2e97b"],["/categories/Ajax/page/2/index.html","9f2b50a9e0d6882de939a6d997dbb70c"],["/categories/HTTP/index.html","a87257d5e0c92136c6d9dd79b8835228"],["/categories/Hexo/index.html","c81e84a09ba11fa523d47fd6e8b77f38"],["/categories/Hexo/标签外挂/index.html","faaa6dc3283e753c6bbb9188856c0e1c"],["/categories/Hexo常用命令/index.html","edff14a0d31999037d5ac87655a8f5de"],["/categories/JSON/index.html","821a2d7a2fd18ffb3a9b00d247a54bc3"],["/categories/MongoDB/index.html","cd167fb8e559c3db1236f88bba774318"],["/categories/Nodejs/index.html","74a3c1c0ca23a632667b3277bb2a4a8c"],["/categories/Nodejs博客系统/index.html","fea58585cbb84955ea6e8163969bb6a1"],["/categories/index.html","5ded60b5de1301662472408be2a94a55"],["/categories/日语/index.html","86fd07e53e181955e43a496cced21aa3"],["/categories/自学考试/index.html","a7ba7c32df78ed491ce09872f7063940"],["/categories/自学考试/page/2/index.html","75d1d281cec60b61209fd9a28d2e0914"],["/categories/自学考试/中国近代史纲要/index.html","818d3ed2da24ee5184f26b9ae5d1cd53"],["/categories/自学考试/管理经济学/index.html","18c9a4c7a641f2b3430fb9f465396663"],["/categories/自学考试/考前突击/index.html","2a5122f272b645d64d747fce99eed34c"],["/categories/自学考试/考前突击/page/2/index.html","d900608ec33b680d6a71dca17ef43a44"],["/categories/自学考试/计算机网络原理/index.html","a852d650cfef48936024630854e41100"],["/categories/自学考试/运筹学/index.html","12d949634e3b4b84fa45dfe01908caa8"],["/categories/自学考试/马克思主义/index.html","9c9b12bad6ce21667e3d6e47ed2b0668"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","3886095931bf6003c57aa1f3199b4a0e"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","b3b5e8028c09d0028079e0d5ed73fa90"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","d3f57e9a07485b46fc18a67bbc85d9be"],["/page/3/index.html","4bc8217526befa8b697f01641b154c5d"],["/page/4/index.html","387088d87eace952f886e43807f806b5"],["/page/5/index.html","753538a4fc3dee92781f62e3f65f87a6"],["/posts/10812f0/index.html","afb30e8b52b7b6588b75411b16f1fdc6"],["/posts/126b275/index.html","dffc0189faa73c9a436f080e4d504fcd"],["/posts/12d95a5e/index.html","728ee7fd49c797665582dfb09d1295a3"],["/posts/1367417b/index.html","e1eb842959510d58d5e3f4c0c25422ba"],["/posts/13886e3f/index.html","6dc4262b8a1488381ed709cf92931d32"],["/posts/145193a5/index.html","fafef504e99704a8eb590eebc700a31f"],["/posts/149dde25/index.html","f8eb6991c4105a7e5efb35bfc3268f29"],["/posts/152fa65b/index.html","adf033da02d25660f2c41f003326c43c"],["/posts/169e7dda/index.html","32ed9e52da50dd99a8551cb20b01dbc1"],["/posts/1875100e/index.html","6f4c0a15f5907e7d2a51abeabcddeec4"],["/posts/18eaef7d/index.html","dda6d68b31b6b7169423a77aacb995c8"],["/posts/1a0bc7b7/index.html","bdacaa82aba0a14bb11af240e1804ca3"],["/posts/1a20a057/index.html","9513b44ff44b50bc345630fac37bbb19"],["/posts/1a998be6/index.html","4e63692190b8534af934088974a187b6"],["/posts/1bffbd20/index.html","0d52270c443af97dcc7716abbd929356"],["/posts/1c5a0485/index.html","28fb41843bb7629ba3b51faf59299a33"],["/posts/1e638f78/index.html","dff1993869b3e1b0c543e0270ff1d8c4"],["/posts/1fb53120/index.html","dfaf4c438b8d7e3a9760be993df1d72c"],["/posts/21466e86/index.html","97e0e8adb0af7baa06fdd5ee38bcb6cb"],["/posts/21abcf1a/index.html","88590a5ea98e33f8997188a69fb1e663"],["/posts/21c250b1/index.html","496a644c0c32ff5493208c6e9d7c5496"],["/posts/2287cc/index.html","ac05ce6422cf9f0761d98a62bede79af"],["/posts/236bfea3/index.html","799160c7213aea64adb7b61ed7ca6ce9"],["/posts/24caea6b/index.html","ef385d29d580ab56b86815b7b9200ca4"],["/posts/25d45c3d/index.html","fe45f5e5e1218ed8f381cb01de1f5690"],["/posts/262baa9f/index.html","9439735e5280d3c4398148b7fbf5fe0b"],["/posts/27cdc142/index.html","1973e96651c83227859e673e413ddfb2"],["/posts/2895c4bb/index.html","a9bfc68dd90df1cb662b357d21cf4266"],["/posts/28987ff3/index.html","6a1c022751d42ea3e8f5b7d9a4dfe739"],["/posts/29f0df96/index.html","b47fd7f3403ffdfe9af5a868a7c55dc3"],["/posts/2a1d2b6f/index.html","cedfe4d33ac77f468841625f3b495cc4"],["/posts/2a386047/index.html","07ea3714b2a901bc0109b94aacde3418"],["/posts/2b770baf/index.html","f596ce9ee94d311424c1cdc29bb1e6e0"],["/posts/2cda4a8/index.html","c1a48e64f034c0b193b4bc95af95e3a3"],["/posts/2d020832/index.html","4929c74f2b36d7a303045a66dcb3dab3"],["/posts/2e0c129d/index.html","788ffd3999f22b6dfbae05bcf5b4c9c1"],["/posts/2e7563a0/index.html","94888be5bada26b4c6b660791daf3257"],["/posts/2e7b8d69/index.html","e2c324400b88c5075110f5f09082b4d0"],["/posts/2f28d14b/index.html","4d6f8a62c60c3894c4b583e3bc57e106"],["/posts/2f6e1383/index.html","81127df25e04d1706edc573367bfca9e"],["/posts/30bfd1cf/index.html","d1edf2992d218cb07af4303d504b2d23"],["/posts/33235106/index.html","f4a6aa6c37a695d181d4c841b243435d"],["/posts/344e951f/index.html","cad473ddbf19bad782824018b249cbdb"],["/posts/35e2bcf6/index.html","b25ce1e49dbe4be23db7cf5de603c9bf"],["/posts/365e96c5/index.html","7f37fe9ea02484b216bea710d4740d13"],["/posts/36e331e3/index.html","f622575ac8acfbf8d18cc83d01980a70"],["/posts/372df90a/index.html","2f011b9ceed690bb6eba251d72d3ffdd"],["/posts/37c547df/index.html","f80b51aa667760f70bfc3724f9ca6462"],["/posts/38a88481/index.html","222d35d60069551bc11fb403aa9abb8b"],["/posts/3b56780c/index.html","69c67f4bc6871cd207535cb133fc90a5"],["/posts/3e4bb613/index.html","85a6e8a20e7e1d1320a6656547fd661a"],["/posts/3f2e933/index.html","99755e6c0dffce63eab97b4cacbc760e"],["/posts/3f6e5f9e/index.html","866f6b97c127d8bfa0aacc84da1dae4c"],["/posts/4349a589/index.html","df8db364f952795720792ad5c05e6a2a"],["/posts/44246190/index.html","6c1e2a44e35f4fbc8fc1e12d39cb896b"],["/posts/456550f/index.html","f7ebf3a6d91b903889802215f1dcddd6"],["/posts/470ac03d/index.html","d1d3fe81e8b54ee06423297ba958655d"],["/posts/49249ac9/index.html","9d8e6ded2e20ee796d312af0381b2e76"],["/posts/49f2d2a/index.html","0dbad6ea7f117b8f09e7e39b9bca6306"],["/posts/4e6d4eb4/index.html","9b48c04b4eaf25dd7b90210a396d7931"],["/posts/50caf1d4/index.html","9a08f27a0b9aeb165de518b05ebfa4ee"],["/posts/51139400/index.html","d25294f1ee504b7db6c9e6920636dd7b"],["/posts/512c9a09/index.html","1488a3d65364bf283c693b8eea822a2b"],["/posts/5205b330/index.html","50241a4f8f8bd2ae5b5bcd731627b024"],["/posts/52d36cab/index.html","636034e0c7af459e764ce3e4ab2e31ca"],["/posts/532a083a/index.html","ee3bdfac5d342ad25b69283da7951b27"],["/posts/537d2c2a/index.html","230589ed9d6941ae5f9984f07e4c8b33"],["/posts/54383ba0/index.html","7eb9118a1b6539dbf17767c97c9b532c"],["/posts/54667693/index.html","ab1e35b0f80f01d189a883573894148e"],["/posts/5508212c/index.html","dd4b74dfff20342a1ac6058a205a2a38"],["/posts/571564e5/index.html","0a942319de28b6f0315bdf828aa360a5"],["/posts/57900fe5/index.html","1d670b34456a3a00f2a2e7b26c00b9b8"],["/posts/589a214a/index.html","4f5e1b2f16d2747b1fe5f4a7db42fe53"],["/posts/599a2b19/index.html","bb4270ab66de871bf6902b41fbd5ab7d"],["/posts/59c05382/index.html","a4d5bf776f44500ec9ec3155945e512f"],["/posts/5a5294c8/index.html","995769ef082f0e98ad78c6b7c2592554"],["/posts/5d3da28e/index.html","116912291c7fc30e55e056ddd0341334"],["/posts/5d3f50d1/index.html","45845bfd8c71bf6ecbd756872271b109"],["/posts/5ef7ef00/index.html","b4e759525cc0fabd96c9dd771f8bb152"],["/posts/60b5dd06/index.html","c0e9bbf4e1be170505ad19862fdc09a4"],["/posts/61477045/index.html","52725f968567ca9340b3d4134dfdfec3"],["/posts/69d79f93/index.html","b4a3d8d2668b16475a1eaf5d9e0561f9"],["/posts/6b2f046/index.html","f1547252de0bf741e3aadd34a37031a0"],["/posts/6b4610c4/index.html","d9dcd68cdc523acbe5d8a1400ad8aaaf"],["/posts/7000d139/index.html","012ab24c2f09f9c28029eaab6b44bcf5"],["/posts/72f94093/index.html","5003d0337bf9d5df73662cdc5c014b8f"],["/posts/7380b71/index.html","a8d5510661a15eb3b2d00ded3a776665"],["/posts/738eee3b/index.html","97261f822bf0c7b2621f1357b0c9ecf2"],["/posts/73981dbc/index.html","fa64f551c897944b25a509af98ef66d3"],["/posts/74d60fd9/index.html","8d4dbef0c897021e712bd7df8b54a4b8"],["/posts/74f5d9a5/index.html","38c5d155ea58d268a57577962dd12d77"],["/posts/750f2ce3/index.html","8bf1e2ad4645e56d106da6238dae4910"],["/posts/7725b75a/index.html","8e764a35db2ed490a8e4620506a1b3ee"],["/posts/79ef335/index.html","81f3dfe781a977881643630bf306515d"],["/posts/7bbd3149/index.html","e9238b17be3e7dca25b24e6aebb705f1"],["/posts/7c20e8d5/index.html","892011ff116227b4a9457a808641b0fb"],["/posts/7d3ea75e/index.html","d5d6f1f6c6194f82905e473bc66bdb51"],["/posts/7d43958e/index.html","c60b336c649b2861a476fab049b27cd5"],["/posts/807ac7f2/index.html","d949631fb32e2e11e16774234a50a079"],["/posts/81738fa0/index.html","2009c643a7d7039e75089c79052662d2"],["/posts/817c41b4/index.html","4a1fd9553549da9bc8cedfa31cd1bddb"],["/posts/84ee8e34/index.html","91db3d4cc3f3cc243d18e9d39c6f3b80"],["/posts/86f3f130/index.html","e44b9e798e564d9776658af1895e5e41"],["/posts/8837602f/index.html","3498134d04eb667c59d992220bd55925"],["/posts/89589a03/index.html","2d16d7c2c921a3bb8368f49da612cfb7"],["/posts/8bcef008/index.html","bf671a1d55ee4d9f7c55f3b7c2e7c306"],["/posts/8bf9abeb/index.html","2ec7874afd201b562ae79f318c7b31c7"],["/posts/8e5f5686/index.html","1aeeca50a9ad4f6554894571112905bb"],["/posts/8fa6b8c7/index.html","c1b73dcaa89dbfd6c759f3baab8124aa"],["/posts/9029a3de/index.html","af2e8972e1c8a2328f0cb9bd3076d19a"],["/posts/909d9a5d/index.html","e5a3407f090df5f71483211b9a97c602"],["/posts/91404b94/index.html","bdd67570e59e3b318be781ab7559a6eb"],["/posts/932e3747/index.html","dd4896e3549fbc263f0d2f84af2fa1b0"],["/posts/98e67280/index.html","04bd3bb1157461c0c4143b2dbbab97dd"],["/posts/9a4d13ef/index.html","bc8aa98e908ef01aebc0b579bcba11c5"],["/posts/9afbb889/index.html","dccb3d0fad34898185f725d14092687a"],["/posts/9be63ba/index.html","156312c33d84fc293e191a3e94746f02"],["/posts/9d967c90/index.html","e46aa444935a7a9251ca23fe7abaa547"],["/posts/9ffb4388/index.html","75463f4b2a03c9d50e002b1313f4328c"],["/posts/a094d027/index.html","af52f4a2fed0ccc16cf0a09fa2594b10"],["/posts/a27042c6/index.html","88113a5ca6102f33061f00f62a208270"],["/posts/a29cc732/index.html","5e1bd8ecd046a571ddd6d43e1a31e3cc"],["/posts/a44a518/index.html","269343f9ed5052323b411ac12eebf50f"],["/posts/a4f2a748/index.html","65c59dc29784cee39700ab1f687dedcf"],["/posts/a7dc32c9/index.html","640270f41a6e8a507eb6eab2d5946320"],["/posts/a7f753ec/index.html","7b0c5e022b7d394ae872ecac747cc55d"],["/posts/ab176793/index.html","b09ebef8970a8eb23ca57c344f2c6188"],["/posts/ab34095a/index.html","85e486dcd9ddbc7a4a5938ef57ad92c6"],["/posts/ad47c4a5/index.html","a99373fa62dd2e224f686d2d106d1b05"],["/posts/adb93761/index.html","01dc688684c4ab7d39bc1744a0477e12"],["/posts/ae8f7b74/index.html","b9bdd378a8939648854ecd986b75b365"],["/posts/af9e049c/index.html","25af1e44a451f27572c9d0737e24744f"],["/posts/b0f1a367/index.html","127609328c8b22657755bce704047f23"],["/posts/b0f98e2c/index.html","f817ef8f4012056bf30709909d03a116"],["/posts/b33131fd/index.html","e7e0acd283d4dbce455e84546b6190de"],["/posts/b36eb520/index.html","ede4df5a9fb262d375b8f42866093121"],["/posts/b542fc02/index.html","4ab88da49d771d9230b2236724d83381"],["/posts/b54eeeb4/index.html","d989cb8abe03a515e8e4e710f2739e0c"],["/posts/b84f3f3c/index.html","63c3edcdf894c4e5963e067c09630907"],["/posts/b94fc207/index.html","98fb45b13a32b04036138541224177c0"],["/posts/b981a6b4/index.html","fb8d5cc76400635c3af504abe7461cda"],["/posts/bcea326a/index.html","0ccbca04dd816cfe849390acc3f04b72"],["/posts/beb19e80/index.html","bc25d05a6d7793198f1cb0640f0b4230"],["/posts/bec490f8/index.html","751b98a7b39331adc12a3759e1e876dc"],["/posts/bf7bde0e/index.html","d87cd68b9a7ddcd6fdfb28563bf8b4a4"],["/posts/c03f17c9/index.html","1467e1e3cee04e90feb84dfc414bc5b9"],["/posts/c35bc572/index.html","67de75ad281bc70538e1a7ddb1e40fde"],["/posts/c436016b/index.html","163eeff96c704811675e22f2d018d921"],["/posts/c4efc741/index.html","9c2ab2ecc815652c5ec75fec0f719823"],["/posts/c5e8a08e/index.html","cd5b5987eef5686a0b1ebc9909606380"],["/posts/c7db1dc0/index.html","ac82acbf10ebb9b26fd1a449c701a804"],["/posts/c7febeba/index.html","03eb75598076c96d6d5356bd740f4380"],["/posts/c9c3a06e/index.html","66d0dba8508e7d292aafc5205ad2701e"],["/posts/cc6d2cf2/index.html","d567a68b7bb55cc317464ffcaaf8748b"],["/posts/ce48f291/index.html","b1b9cd4b8d66a22caa9a86b44b8039c2"],["/posts/cf480faa/index.html","3f9ac39942d7f5dfd26ff10cd5511ffc"],["/posts/d090b4d/index.html","20ddccbe70a63eabec3688e5f48bac1d"],["/posts/d1995044/index.html","54765c164ee0f877d0411e50447c7c66"],["/posts/d2d34977/index.html","8c333373920cb4eaceb60566ad4bb8d2"],["/posts/d3647a92/index.html","c15d24ebdc2823715f51443e4d7ea8f9"],["/posts/d3f6b818/index.html","30a6258d9c683f20fcd6cae65a4a1a3e"],["/posts/d465029c/index.html","21f46b6c031a9a937f2b9ff83c64cc43"],["/posts/d9884be2/index.html","8a44584ec2ed51d37ab3730e98f81e62"],["/posts/da40f433/index.html","a99ab62de916b03faa50490ead6fc4fd"],["/posts/dae71d5f/index.html","ee0ca881de45afb49461a74af1d106ba"],["/posts/db9fbe47/index.html","4f2da3476ac409f3cbbb7e6f0b72b5ec"],["/posts/dc94f8a1/index.html","a0576c1901b29d93145deb7d79060a33"],["/posts/dfe9b67/index.html","c7d745b25f5dda00ce564855b624c39c"],["/posts/e0387d80/index.html","b9ca20b4cea8420231f1ecfd09c695b7"],["/posts/e356f7b3/index.html","528d636d06bd3ebbac2a3cdd7b3adb94"],["/posts/e3acb366/index.html","67c3f9c83f100a0cf4f9c88aa5a81009"],["/posts/e450354f/index.html","3479d90b56abe3fb7d124164db4e25bc"],["/posts/e489223c/index.html","10aa3b504cd4c445389aa6dddbf4fe18"],["/posts/ea914c06/index.html","579446a1e0fa1f80b6b08b5aadef2539"],["/posts/eaa8f31e/index.html","f4bf33c6aa156b2af7aeab0b7c72da26"],["/posts/eac19412/index.html","8f60e79b0c6b18ea01d02582ae2168e3"],["/posts/edfc881f/index.html","d3d42c59dbdf55f76ebfc6ca0cb35aa2"],["/posts/eec0bbd1/index.html","547e8b65c213071726f49e3ab9fdd0f4"],["/posts/ef22c7c2/index.html","bed5f95e3ade75c3605b104149e94915"],["/posts/ef271825/index.html","cffc2fa7dc87c3634e585a944d65ebfb"],["/posts/f209578c/index.html","f8f5c2638aca6dff77185688fc826c2a"],["/posts/f3e9bea2/index.html","6d1fa6e92420497690147b35c158dfcb"],["/posts/f67b7122/index.html","fc89dbaab319f7779bd300635f077277"],["/posts/f7abba28/index.html","46c5f8ca336bc10ca207b2ccb4b3dbd8"],["/posts/faffd764/index.html","cc68d97d02fed938847b264522ba24e4"],["/posts/fb684fb0/index.html","003e17eaf67cfb7a348f69bc6baf7c73"],["/posts/fc57199f/index.html","d5005f6127adf6416021c2fc0bcfa451"],["/posts/fc6e9a7d/index.html","f0f7a39b297c9e7e3d62141e86916254"],["/posts/fc7bc02a/index.html","a34f03f5e44c360252f09a9d7a26395d"],["/posts/fd67c5cb/index.html","ea8a1362ae41c5cc9730ef5541c3050e"],["/posts/fdde061e/index.html","26fb6b3594b85d333c7350b5af9b2a75"],["/tags/HTTP/index.html","1f348ec74a11965ce88b5dd42f24a4a3"],["/tags/Hexo/index.html","fdf63aff87d0772503575e703a4ff382"],["/tags/Hexo常用命令/index.html","7c560d63a5293626c7c6e8e607c7e7a3"],["/tags/Nodejs博客系统/index.html","cf247bd8e10a78f15e280cad0a5dfed3"],["/tags/ajax/index.html","d87246f27267040e9fc17778b46a6ddf"],["/tags/ajax/page/2/index.html","1ea20e722e6bf7a53c2b721b260ef7e5"],["/tags/curl/index.html","1caa8f8747695ed223e44bb86bf3664d"],["/tags/index.html","f2fd55eb8766ee69b1918be32a61854e"],["/tags/json/index.html","3287234c54e01fda70b5716043dc212c"],["/tags/mongodb/index.html","3fe950bb72d6014455838f11e89c1cc3"],["/tags/nodejs/index.html","3dee933d6b3468bc09daa746301882ad"],["/tags/中国近代史纲要/index.html","4e840fc5b04136eb10e73b446aaa15c7"],["/tags/日语/index.html","517a10c5de88f22c8cd1f55880f3062b"],["/tags/标签外挂/index.html","3256a95444499290a459174a1d1a5356"],["/tags/目录索引/index.html","12ab21734462e1a3016fb4bab7fb5b18"],["/tags/管理经济学/index.html","6d6c1d5abbe13c8405cf1a44d462c107"],["/tags/考前突击/index.html","2efcf833238fb0342b22aa4fa356293f"],["/tags/考前突击/page/2/index.html","0d342f895f2b1eff19c1c3f05d9b62fa"],["/tags/自考/index.html","fd9a03d318005f31f3adac1120769c8b"],["/tags/计算机网络原理/index.html","31f947e731b6f7ce5fd315968b09bb15"],["/tags/运筹学/index.html","3a0f2a546ebaffe97a73bb7ff8df33d9"],["/tags/马克思主义/index.html","e3f8c7579bff49e295effe45ce786ef6"]];
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




