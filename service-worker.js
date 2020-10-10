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

var precacheConfig = [["/404.html","b117f05adcd4155e6f496f55eab1b36a"],["/about/index.html","1cc30c006b05a391741cd82efd0e4543"],["/aplayers/index.html","80a204dd30002c2b8a0e951f6b358cb2"],["/archives/2020/02/index.html","2a9be407351f54e3aad4feeef92a6fc2"],["/archives/2020/02/page/2/index.html","69403fcf1c081c3815f1cd19edf9bc82"],["/archives/2020/02/page/3/index.html","1e6b95aaa60ddeae0435002b8f1408e5"],["/archives/2020/02/page/4/index.html","05d5cf4f956d681763b19f9196ecf365"],["/archives/2020/03/index.html","7f7afeb3816e71708897033d3618b09b"],["/archives/2020/03/page/2/index.html","889af5e7b5098d2e9eeaf2d6e58a7ab4"],["/archives/2020/03/page/3/index.html","7e694f805585a777d9ccd27d2cd1a096"],["/archives/2020/03/page/4/index.html","b4c6d784409af888b36df9fd04dd350b"],["/archives/2020/03/page/5/index.html","d2fb97bbfae33cca658e3b32a8de6271"],["/archives/2020/03/page/6/index.html","f44613493143c87151bb3cde1855c1c7"],["/archives/2020/03/page/7/index.html","43f7584607b8833b4358e047782ed175"],["/archives/2020/03/page/8/index.html","949e4eb1da3a64b0fedad4cf777a0b69"],["/archives/2020/04/index.html","ad48e38ffb2a6cbcc1f4e997ca734b61"],["/archives/2020/04/page/2/index.html","356f2881d7897a28f05a9bce0e4157a5"],["/archives/2020/04/page/3/index.html","51ac571cad41afde6e44381f3c7dfa85"],["/archives/2020/04/page/4/index.html","c8a2eb7e857d3068ddf7a6429d4a7b7d"],["/archives/2020/05/index.html","fb906fa2d498d101c35f130f4e595469"],["/archives/2020/07/index.html","72a357f86a763d0a2889fd8029476dab"],["/archives/2020/07/page/2/index.html","34146b76ce25d219be1c920c29718613"],["/archives/2020/08/index.html","09b43ce7b4cd6b5884c4c9ca7b16e0a1"],["/archives/2020/08/page/2/index.html","bd0ebee0a8614f8cbcb7fad89891d467"],["/archives/2020/09/index.html","9d506cd80cee02d679ab7d37cbe213ae"],["/archives/2020/09/page/2/index.html","d985f46bbc949a6825217688518fae8c"],["/archives/2020/09/page/3/index.html","86e26155dfe42f35fa72c29773b5c612"],["/archives/2020/10/index.html","7173aabceb6faf61ff77b7ac0fdc2eb2"],["/archives/2020/index.html","65127aae009d6017c4803a8ccc63001c"],["/archives/2020/page/10/index.html","e77b65e0a31ca4cc9d352e3ea6111f4a"],["/archives/2020/page/11/index.html","d980e541edace7d90befdcfa959f0d00"],["/archives/2020/page/12/index.html","91c921a62192690dd8c9ad118fac6f88"],["/archives/2020/page/13/index.html","918c0f8bdd562eb2883fc26a46b2808b"],["/archives/2020/page/14/index.html","a2cd7855e3d7bfed651bcf989ff731df"],["/archives/2020/page/15/index.html","c1be96fc0a9f2993024631386dea2cb7"],["/archives/2020/page/16/index.html","4b7e376153b4cc54f81b3b69760eafd5"],["/archives/2020/page/17/index.html","1e8f60203a95633a6b90f0ae63bb1fa3"],["/archives/2020/page/18/index.html","f5ecb0bfe39144a77406adb624301784"],["/archives/2020/page/19/index.html","ac542fd9ba34a80ef626ada49609b7c5"],["/archives/2020/page/2/index.html","8ed9fe3b6eaf48d252ba4a5307ee19a1"],["/archives/2020/page/20/index.html","1bf3ced16613cd96532793c31f4e175d"],["/archives/2020/page/3/index.html","651a84dea60c7df60e561f5497cbc195"],["/archives/2020/page/4/index.html","5fba6fda4de1f0cb0e2e338614f22c8f"],["/archives/2020/page/5/index.html","624994ec2f8e7101e1a956bcf2bb6cc7"],["/archives/2020/page/6/index.html","072fd2dcd1a55c2cf70dc69173062140"],["/archives/2020/page/7/index.html","e7cf9c323f8343819766f2f600c72dde"],["/archives/2020/page/8/index.html","72cab70187c37711cb73318749b97c97"],["/archives/2020/page/9/index.html","72d1713871cf139b206288f3857ac8a0"],["/archives/index.html","21d26d4709225fb4fcc1d6eb7a34775d"],["/archives/page/10/index.html","3e2612406542267452c882928fd3c651"],["/archives/page/11/index.html","1c60a40a324cd880dff42bd4953da502"],["/archives/page/12/index.html","dddcd67418bc59cdd61a525750fece90"],["/archives/page/13/index.html","8800acdaba72f7e13fa0049a08f926ca"],["/archives/page/14/index.html","b1e548a4f1b41323a79e6108d8b52370"],["/archives/page/15/index.html","834fdd4288a143053d3d1c936dd14b3e"],["/archives/page/16/index.html","5f38205b0ccf3bac7e49791e335c78c2"],["/archives/page/17/index.html","bbfc593c28ce7d573a9f26c06f7457a5"],["/archives/page/18/index.html","610c8469a67d56fd0df99168439ee29b"],["/archives/page/19/index.html","2bdbd867d9b10a25e2f8bdf9e0901a08"],["/archives/page/2/index.html","5c5f82f56dcec6b4732a36164c5fe27a"],["/archives/page/20/index.html","7cc53dd6fb93de64fcaea4c7d26ad02b"],["/archives/page/3/index.html","83aaff6080411cc94a5c42f8285a867d"],["/archives/page/4/index.html","b43362e9729d626bf69bff465f9d6217"],["/archives/page/5/index.html","48a8e74344c2ea6eb9ae64d04acf17bc"],["/archives/page/6/index.html","6f5f765992f1d3759b3c12e8a70973d9"],["/archives/page/7/index.html","bec726b01de889879eef820662092ce5"],["/archives/page/8/index.html","d259b7d54698a6c9464b38d518e6b7b1"],["/archives/page/9/index.html","cf2bc5f64730d6a04e284003081b9ee8"],["/bangumis/index.html","631926506eb9320c985516608aeee04e"],["/categories/Ajax/index.html","a7b695935889dbb33629939ecf7e3151"],["/categories/Ajax/page/2/index.html","74289c0ba8043f4ea9620dbbc6b43312"],["/categories/HTTP/index.html","abf94bac0cd16009717720fa8ed0a3cf"],["/categories/Hexo/index.html","3fe1bda19ab00402e962d34877a1f7e6"],["/categories/Hexo/标签外挂/index.html","d082d80861f5efc761496c4277f9b6a2"],["/categories/Hexo常用命令/index.html","f56b3eea9fb06da1ab00dc786240fdf0"],["/categories/JSON/index.html","2f209874d159151adc493dcff70edfa7"],["/categories/MongoDB/index.html","3c8fb9c6944c53ba5a0bc2df97449724"],["/categories/Nodejs/index.html","844e460d8f8af16e545b26e564cc65db"],["/categories/Nodejs博客系统/index.html","299357b9693373be49372c636e8b4900"],["/categories/index.html","f89f7f53cc93d92265ed00a1960825aa"],["/categories/promise/index.html","a99d349504a6758e7098eb0ed9a16fda"],["/categories/日语/index.html","543722f62446446a849ef4e1e5be8036"],["/categories/自学考试/index.html","6c348adfd6139cf5d35172a0140aeb2a"],["/categories/自学考试/page/2/index.html","a36d70783d3d0257b9613d728bac335f"],["/categories/自学考试/中国近代史纲要/index.html","446feac80ccd226ebf65b4270776b5c5"],["/categories/自学考试/管理经济学/index.html","eb95d4f273dc2d1e9f6b3b374cd381dd"],["/categories/自学考试/考前突击/index.html","5cb280f265a9022b29fd08bb3a7f3156"],["/categories/自学考试/考前突击/page/2/index.html","19cb895dd6e25eccc2e806925f68973c"],["/categories/自学考试/计算机网络原理/index.html","8c6fdb1e3acff02784f33c917ee6534a"],["/categories/自学考试/运筹学/index.html","ea9aa59fe44e726860d1e7df032a02a3"],["/categories/自学考试/马克思主义/index.html","2b3d3cbbb2acea591ff97955abbdd7c9"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","0fe7151ac8649e7bc364d5373a236ac7"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","2853ca712705bea81f28854aef540f98"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","fe29f3d5f89dba1594e913bb0c234a14"],["/page/3/index.html","2861c79ebaec5b7690d98420828add4b"],["/page/4/index.html","a226ddb79c33f09d76c3b45dad82cfb9"],["/page/5/index.html","d9b53df328747f5456d613b86a25299b"],["/page/6/index.html","0e7c64518945fd61af212fa018c52c33"],["/page/7/index.html","e2552bf2659a8e5299f4bcb746e56c6d"],["/plays/fluid/LDR_LLL1_0.png","65b063168317bdd54a8c18e0ff0096bc"],["/plays/fluid/dat.gui.min.js","b87024acb876bb767a7c27a5747d015d"],["/plays/fluid/index.html","ad96278b19975b503ae56b8018e4a1df"],["/plays/fluid/script.js","05d850c6db55e5092f36690f9311a285"],["/plays/mikutap/css/mikutap.css","325c78697c87a3f62edd09be21ec5903"],["/plays/mikutap/index.html","fb2263f57f7816f72709dd2abb5d8f23"],["/plays/mikutap/js/mikutap.min.js","110ad1060ee41e6f41f7f6232337fd4e"],["/plays/mikutap/shared/js/common-2.min.js","43e49a61141c64bcf8d7981f7a6a26f5"],["/plays/mikutap/shared/sp/css/common.css","da9b00bf3729866428f53b69ee9da8ed"],["/posts/10812f0/index.html","f768414c4409de6082afdfffb1d57c4e"],["/posts/126b275/index.html","13ca93a852597777f8309595763135a8"],["/posts/12d95a5e/index.html","3ac3ab1de20b73efe2c2362d86e4aa77"],["/posts/1367417b/index.html","24110167d6bbb5a3be76f370ca4faf71"],["/posts/13886e3f/index.html","53164deb614b04ec2e67fff3a9a126e2"],["/posts/145193a5/index.html","9ee1167ee1505b5769a2bd54f42decc8"],["/posts/149dde25/index.html","da88b77ff8cddab15f9d44d6be236baa"],["/posts/152fa65b/index.html","3337a4939a45b9c9ea2a44710861a01b"],["/posts/169e7dda/index.html","f683b9ed171da113dd4dc3e24734d940"],["/posts/1875100e/index.html","4a922afffc00d7ee88830f38493ff960"],["/posts/18eaef7d/index.html","05cbd38c460ebe762af462a13d438811"],["/posts/1a0bc7b7/index.html","95d912f05a9bbd50c7e94bfd2881f982"],["/posts/1a20a057/index.html","1f9e059c35d9d8c0e381ab741a9e92f0"],["/posts/1a998be6/index.html","33891b6bacfcc3c5ec4177383f855c15"],["/posts/1bffbd20/index.html","535b0cf35ee58ac54e8e4da9baefde79"],["/posts/1c5a0485/index.html","a9485d0026f52c5e79bb6089eaf996bc"],["/posts/1e638f78/index.html","9fd822d3f0f3348677430ecebd68326a"],["/posts/1fb53120/index.html","b606a3652ff35e53161bbe4ddba8edc9"],["/posts/21466e86/index.html","311e429499bfdd758a33237f2b118707"],["/posts/21abcf1a/index.html","7d6ee8fc53515d76ea50fe8a8e59c621"],["/posts/21c250b1/index.html","35b48183c0bfa51fb89adaf25d876623"],["/posts/2287cc/index.html","12725f2b44e9f020c26bbb09a4ccbc44"],["/posts/236bfea3/index.html","35a6dfb86eae646f8a0d24117178116f"],["/posts/24caea6b/index.html","99b56e94334044f689518b68abcf700a"],["/posts/25d45c3d/index.html","162e095b73d33a3e0d6b11e8727970da"],["/posts/262baa9f/index.html","23c6ba20316634b5609edf2fb170b24b"],["/posts/27cdc142/index.html","60f2c2d1c45ccec52fd08a63f4968f89"],["/posts/2895c4bb/index.html","34fb2c4390ea7d686819066821dd7f6f"],["/posts/28987ff3/index.html","364325c83a56af5989408d6eaa217f67"],["/posts/29f0df96/index.html","2757d1e2ee2502ffe1c9413bb6ee0692"],["/posts/2a1d2b6f/index.html","fdb604dbe673f8bb1b48b0c6fabd4823"],["/posts/2a386047/index.html","048ea8e437699c3cf7eeef2e8f88c93a"],["/posts/2b770baf/index.html","102a875d39eefb8e2939d8bd19776fa9"],["/posts/2cda4a8/index.html","7bbfdfbede76af3ee5430ba176908e49"],["/posts/2d020832/index.html","212be7d7870ecbb6d39862812fbb4322"],["/posts/2d6d3bd/index.html","675c293dbcf82b7eb83909d7059a2d7d"],["/posts/2e0c129d/index.html","c042521f046feb26f5f979a0e3a5dfac"],["/posts/2e7563a0/index.html","cfa74733025ea6a3f73215a49af3b7c5"],["/posts/2e7b8d69/index.html","a5b9a4f2b1eeab8c0be71070b12f75ee"],["/posts/2f28d14b/index.html","c7d64081db9e670fbdcb1b4dde54bcb9"],["/posts/2f6e1383/index.html","bca680b6493a5f9b748331a54726ad54"],["/posts/30bfd1cf/index.html","63f332677fb7d5c8b4deee8cf7f12c8a"],["/posts/33235106/index.html","0bb957edac28657f2e089e269787f9b1"],["/posts/344e951f/index.html","d3c9d657401ba0024055c34557613b97"],["/posts/35e2bcf6/index.html","cdcdebcf0bf22c65fdad8b81eb0eea67"],["/posts/365e96c5/index.html","9657c76948952cb61728e9735c3e96f8"],["/posts/36e331e3/index.html","95ef6a2c7029bbb744f6dfd91b74a31d"],["/posts/372df90a/index.html","9a17ffaebca7f51e73ef0749bcc99d68"],["/posts/37c547df/index.html","0f32758bfe50c725dd1c6aa2c8463736"],["/posts/38a88481/index.html","78d4d2ae422111f5bba9778b54efd486"],["/posts/3914bfed/index.html","b99d31a9855ebb009c3e4bc530b67567"],["/posts/3b56780c/index.html","3e3efc65f1b0a914d03cc0308f294177"],["/posts/3e4bb613/index.html","e82a918e387b4695c1044d2687725c23"],["/posts/3f2e933/index.html","fc2d900fbe1fe3fd8ce6cff29c4625e8"],["/posts/3f6e5f9e/index.html","018a061b80d1572c9de152804d6e443d"],["/posts/4349a589/index.html","8cae849652f9d9fd062f941387c0bf05"],["/posts/44246190/index.html","b942d0c1ef5b1c393a83c6def9c2eb47"],["/posts/456550f/index.html","db93b17c1a1ce23bcb4266930ea06550"],["/posts/470ac03d/index.html","500161b133525cb1b3976a073cf02cd0"],["/posts/470d45ef/index.html","ece1a8ddd67a5a5119a82b44c531639c"],["/posts/49249ac9/index.html","de899c10a3ec9e1cdd19e83f647032f8"],["/posts/49f2d2a/index.html","746b5563611871e20e0a60fc6eda146b"],["/posts/4e6d4eb4/index.html","dce5321f9d3b4a0a3ad7ba2e9c49eb57"],["/posts/50caf1d4/index.html","a39b5f78fcf842a21d0129c3c271b9d2"],["/posts/51139400/index.html","693debc4cd49a3365c5f918cca76325b"],["/posts/512c9a09/index.html","bd8c1c69e281ad98ae112ad5cc726739"],["/posts/5205b330/index.html","0947ac3c4f75800985ad3bbb3a395c17"],["/posts/52d36cab/index.html","9da9075d9a0a92133646690fefe58c55"],["/posts/532a083a/index.html","0ecb4bd70bb2a50a97ae17fb4e11edb9"],["/posts/537d2c2a/index.html","54e8e63538298adc509973096b44b4f4"],["/posts/54383ba0/index.html","050c705e522c103aac7b0f2cdcb6c967"],["/posts/54667693/index.html","6f1497d4919b014ecf5dee6ef4648a09"],["/posts/5508212c/index.html","924a010a627f00dab1a47b582d085658"],["/posts/571564e5/index.html","256b9bd7fabcfd437e94a82cb3e1b431"],["/posts/57900fe5/index.html","fdd25ee68f3398cdc24f1e6c801fb70a"],["/posts/589a214a/index.html","4c1118d8c4d79af40961fdcd11246215"],["/posts/599a2b19/index.html","8956aca75df82d25596c82ed4c076e0b"],["/posts/59c05382/index.html","9303b984fbfa43238f60ad02e747a197"],["/posts/5a5294c8/index.html","be91ac8f12cbb10b591bdd26851e3d04"],["/posts/5b8c69d5/index.html","765cdcca851112ad3d6e3b30b8c4bed0"],["/posts/5d3da28e/index.html","2a4ca59664b525a4b6d429132e8e3a78"],["/posts/5d3f50d1/index.html","c03c380bfa4303040a593b4d997cbe29"],["/posts/5ef7ef00/index.html","724a6078e13e899bf124d989821d5681"],["/posts/60b5dd06/index.html","bb3d66100c8e280ce690bece21e4719d"],["/posts/61477045/index.html","3a1cdf39866426adb4090e57a5dac1a2"],["/posts/69d79f93/index.html","e6eb2d0dfd005449cfef30c3d412058a"],["/posts/6b2f046/index.html","042c9c84ee26afcf3fe5bcdbd55445fb"],["/posts/6b4610c4/index.html","b24784d55bb2a4e613f40755137ebab7"],["/posts/6bbf03f0/index.html","dcae5f938e32d7e9cc4b9ab5ad1a9249"],["/posts/7000d139/index.html","5c88d6907c16476c44fd19a4d5ab5832"],["/posts/72f94093/index.html","f5e9cd9f41177d975bfa381e3d758df5"],["/posts/7380b71/index.html","cedbe6999b6b2cc4d8964589026bbb06"],["/posts/738eee3b/index.html","61ccc8b90c2168da5ec9bd665faf0931"],["/posts/73981dbc/index.html","69d775bfac33aad33c532b6f724f62b5"],["/posts/74d60fd9/index.html","fcb531b149388d4b55364eac76938a8a"],["/posts/74f5d9a5/index.html","8b49df5c4e5346a2b8d78cfa44236db0"],["/posts/750f2ce3/index.html","48e48e54969d2728328f477a31dd7625"],["/posts/75ceb627/index.html","311a79fa0c67fe5e17b01be9b3a0836a"],["/posts/7725b75a/index.html","b5ecd8ce5646168a034386903f5c0de8"],["/posts/79ef335/index.html","fb7124134c448e5b17992a0fe68b1f74"],["/posts/7bbd3149/index.html","01b15178ba24096662ac2367d887f28a"],["/posts/7c20e8d5/index.html","68e9fa80be704b146bfd048de601b1a5"],["/posts/7d3ea75e/index.html","93ddfd580062c28a77493a07aa553a9f"],["/posts/7d43958e/index.html","8dcd5118b9141e74c8171cbaf7b290c3"],["/posts/807ac7f2/index.html","cc8e5335cdb1bc2ee3de807cdc5fbecb"],["/posts/81738fa0/index.html","63a69b839e7c82e99cd557779a4b89bb"],["/posts/817c41b4/index.html","fbe5a90b223384c8cf857bef9467c696"],["/posts/84ee8e34/index.html","f505be611ad146c75e810b46222f680d"],["/posts/86f3f130/index.html","e44b9e798e564d9776658af1895e5e41"],["/posts/8837602f/index.html","3b8179c59398b6174af305c63d200a11"],["/posts/89589a03/index.html","e4ac19b52ae16972833e002fc98bf256"],["/posts/8bcef008/index.html","8140d5568785b6776adbf510d578c31d"],["/posts/8bf9abeb/index.html","30d69c57e2e4d82f8598a6cb81c2000f"],["/posts/8e5f5686/index.html","f9128257af4fd8e3d3b1bfcd35bdb3d1"],["/posts/8fa6b8c7/index.html","b0d34e694f0d149936f337bb4f99ee66"],["/posts/9029a3de/index.html","a2d19a871e0c9f8921d3d69998f32a90"],["/posts/909d9a5d/index.html","deba1faaac4014c371e2816ae85eab89"],["/posts/91404b94/index.html","6c82462e888c58dbbf2d198724024370"],["/posts/932e3747/index.html","7b15af7632b48b9a61125d58540dcea9"],["/posts/95fc9e6e/index.html","3c3b61aa5a3ba9aa196923cb79e3211d"],["/posts/98e67280/index.html","60115fe11a1b5ad3fad3101bacb1c525"],["/posts/9a4d13ef/index.html","63ec758be6500f048e1b233838bbf7ff"],["/posts/9afbb889/index.html","a2b87e961206ebca81a27743ffb95338"],["/posts/9be63ba/index.html","0a20a9dd5dabe58f772914eea837e259"],["/posts/9d967c90/index.html","4f28cf6eb0f02f671a3d916297a1ed2a"],["/posts/9eadcdf6/index.html","cf26ae3ab7a7666eb287527600ad709b"],["/posts/9f97db8f/index.html","dfa8b06cb3c1e9f9b44d0b9e574e1bff"],["/posts/9ffb4388/index.html","8f08ddc2e0fe2eeccb1ecb33d6698b67"],["/posts/a094d027/index.html","115f579d5a81be9ede3b95cb5647532e"],["/posts/a27042c6/index.html","ef4a022403a8d4d3695be48f80c36e34"],["/posts/a29cc732/index.html","62567691d4fd8a1e314e7daa4e118055"],["/posts/a44a518/index.html","01e1a7d720e79eb57aad1e163f2671fe"],["/posts/a4f2a748/index.html","bf84b6442388e0baed796e19fc0c9b60"],["/posts/a7dc32c9/index.html","2064497ddfe6a93e7d45304612bfe7ae"],["/posts/a7f753ec/index.html","f6a7f92cd9faf51a60b57487644a509d"],["/posts/ab176793/index.html","f0211301fbff36f55f5a901428ea542b"],["/posts/ab34095a/index.html","157602716d20b180b4e4803a566af95c"],["/posts/ad47c4a5/index.html","9455efe096737299c6fb41aaa8c0a6f5"],["/posts/adb93761/index.html","01dc688684c4ab7d39bc1744a0477e12"],["/posts/ae8f7b74/index.html","c5cbff73cc5cbe34d388810f77bb91a3"],["/posts/af43816b/index.html","2445bb4eb62a2ac47fa763a5b9faf6a0"],["/posts/af9e049c/index.html","75b342cc4a98710c7ee231d1d5f957bd"],["/posts/b0f1a367/index.html","70ec86664527df969df665450bb3d414"],["/posts/b0f98e2c/index.html","841e2ae1f501cdfdcbd56707f08d1af0"],["/posts/b33131fd/index.html","780e260883147c5f4fc42b556caca31a"],["/posts/b36eb520/index.html","ffb46c609386b25181183da2d531bf3d"],["/posts/b542fc02/index.html","9063e6ed890588b3a547bac445cda782"],["/posts/b54eeeb4/index.html","6686841d0a0fbac30d9a23e1d0fc4d1c"],["/posts/b84f3f3c/index.html","5301167fc909c84de9fed8dd7b0f3c1e"],["/posts/b94fc207/index.html","f37af4cc64d6e88759abd9f2a99c71d9"],["/posts/b981a6b4/index.html","0324c7a656bd22f78e7275e4150edb70"],["/posts/bcea326a/index.html","6016910a9177c56a4c19b3491a2d8ee6"],["/posts/beb19e80/index.html","da84684816d170423371fc8f1463b0b1"],["/posts/bec490f8/index.html","1ccb041baffd22ffa492372badf417c0"],["/posts/bf7bde0e/index.html","761709e89add63f202748d816be874af"],["/posts/c03f17c9/index.html","c8537ff3cbfc8dbaf958f1e817f67bae"],["/posts/c35bc572/index.html","cf9b3e43840086ea33b69a5795883e65"],["/posts/c436016b/index.html","d12780c16324f4dd50eb96b48095f8a9"],["/posts/c4efc741/index.html","1394d924b6b44983c099296b7106bec6"],["/posts/c5e8a08e/index.html","297a8ba6ab56dd199bc8be42f599c593"],["/posts/c7db1dc0/index.html","adaa3944249094b22afdfb43f0c411b4"],["/posts/c7febeba/index.html","eab02b7903c1d67ea5265e5656073377"],["/posts/c9c3a06e/index.html","11357e547e250588633f4ef9fe4cf847"],["/posts/cc6d2cf2/index.html","9698d3b22e49d10b012f659a2ba1b586"],["/posts/ce48f291/index.html","1cf3753eaa1d5bdd6d726b0f7117f58c"],["/posts/cf480faa/index.html","ca611700652fb82215552c8e37053973"],["/posts/d090b4d/index.html","5a6ef2422ceb5c12f321e408ae9ebafe"],["/posts/d1995044/index.html","49d7eaa4174b179317e658484e9f9892"],["/posts/d2d34977/index.html","1046ed3598d467fb25faf330f34977f0"],["/posts/d3647a92/index.html","da3007a8382285fe53c37ff82ef64bd8"],["/posts/d3f6b818/index.html","4edcda6cfff3b06557a079361fd55b17"],["/posts/d465029c/index.html","fba35efef46cc1f063e0e855d377fbee"],["/posts/d9884be2/index.html","6f51b4fb9f5c4202c3facd1f6971002b"],["/posts/da40f433/index.html","35cc613626307f7d6bee6130e81605fb"],["/posts/dae71d5f/index.html","bd1680c7be3ecddf7b30a44f22193cad"],["/posts/db9fbe47/index.html","0a268962b4954b328fdca74b62383991"],["/posts/dbba997d/index.html","624cd3f9ca0cb921c2de9c038a47718c"],["/posts/dc94f8a1/index.html","e7d8dd9d4cc18f35fc39b3480ff7ad66"],["/posts/dfe9b67/index.html","d2e814fd746e845eec337495d1cdbf2c"],["/posts/e0387d80/index.html","451234233ca1211e4cb63385e9309db6"],["/posts/e356f7b3/index.html","4a38dabdf1d41dfb08a8a9865634de3c"],["/posts/e3acb366/index.html","2c38e45e89671ac545892abab612218f"],["/posts/e450354f/index.html","352958b5eda0ca79a2adeacf7e9dbbd0"],["/posts/e489223c/index.html","7073ddbf68cb153984727b4a0503fa19"],["/posts/ea914c06/index.html","09583a6fa9f60b4e81c7d4af9e6c7b9b"],["/posts/eaa8f31e/index.html","09262104067d4f34e8b14d6250a49de4"],["/posts/eac19412/index.html","0f5f434e2449d65f8a3afce7250ddc55"],["/posts/edfc881f/index.html","2ccc79ccf6f6e20d2bf374a0b5e190b8"],["/posts/eec0bbd1/index.html","605fd723f0e4891e6697baf6e1795f30"],["/posts/ef22c7c2/index.html","bf87e2534908f29344e60d0ed06d0241"],["/posts/ef271825/index.html","58d22499b531710ac70b8dfc3e680cb4"],["/posts/f209578c/index.html","fbeeaf5aacce6fe948511e8119f9ecdd"],["/posts/f3e9bea2/index.html","d874656776d4f2ac1372ec6a34c466c9"],["/posts/f67b7122/index.html","bbbccfcef3ddf8994b339853c639892d"],["/posts/f7abba28/index.html","f156bde7e2e3a6951721897bfef02669"],["/posts/faffd764/index.html","59249fcd9ea4af369902e0c1fc2cc588"],["/posts/fb684fb0/index.html","b5ba7a42af7fc32dc135b62fca92b39e"],["/posts/fc57199f/index.html","cd29b294bac59a442f15e4657313da7f"],["/posts/fc6e9a7d/index.html","ff44f629f5fc21297c87b101f28ad6fb"],["/posts/fc7bc02a/index.html","a5def9bede0b7f7a640973aec3148568"],["/posts/fd67c5cb/index.html","0a97fe35afd7bd3207284012804a0735"],["/posts/fdde061e/index.html","21eb5466dd0685d46d9ed034de759192"],["/tags/HTTP/index.html","57e2ff12155a78b0b6e452cf3284dec6"],["/tags/Hexo/index.html","bb66abc940cc67dc6c8c03abb09c244d"],["/tags/Hexo常用命令/index.html","ea696c76babb227089cffaf5dab64e60"],["/tags/Nodejs博客系统/index.html","9aceddb748910f0b8b5731faa39b1f83"],["/tags/ajax/index.html","afcc5c18ff2a2ff1a3c12a7dff0b1807"],["/tags/ajax/page/2/index.html","1383f8878fc70f7ae9cb2990a956ce9c"],["/tags/curl/index.html","c51137553e611437bab5795e2861d584"],["/tags/index.html","75868c1527377c23bd96ef000ff86d1d"],["/tags/json/index.html","af52a43bd8f2eded4b0fa1c93cc3181a"],["/tags/mongodb/index.html","824b7304094fe10b1b1eba73fc807669"],["/tags/nodejs/index.html","210b9e51f38c51b93a5b5179c44bc756"],["/tags/promise/index.html","6fa7c9d85260dd0416d12bc04c07158f"],["/tags/中国近代史纲要/index.html","45ab7b8bb8969a530635222adde0d4a1"],["/tags/日语/index.html","f6e5e816017a832bc3d7ae48c6cb8616"],["/tags/标签外挂/index.html","2c4330eb46f06de1c0bb5cc5a1771f4b"],["/tags/目录索引/index.html","292ab43fe688eee64209601262d91f0e"],["/tags/管理经济学/index.html","57dac5dca1164616dec7a98a0bdb8db3"],["/tags/考前突击/index.html","ac9d7b2d564850a1f1667065e965766f"],["/tags/考前突击/page/2/index.html","26ff1f47974bb6022282869272855daa"],["/tags/自考/index.html","5b3245a6e0943b4fb51bed1d28bd5836"],["/tags/计算机网络原理/index.html","bbb0e942557e2d992d63cb2bc9a31149"],["/tags/运筹学/index.html","a94cfc5bf7b76f7f54d42616bc13a2df"],["/tags/马克思主义/index.html","bdcd9a260b646f3f7d8f22d63d516c6d"]];
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




