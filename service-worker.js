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

var precacheConfig = [["/404.html","aa6f41216c8dc793df5d64a4f791ca88"],["/about/index.html","6766fa080154d36b9dc9ff57d16f618d"],["/aplayers/index.html","d0345f689c0ff932aaa7138240cc255e"],["/archives/2020/02/index.html","268b076cd710e9a246ab656f6bb7194b"],["/archives/2020/02/page/2/index.html","d360a79a9f19cf197c5e484ac870867a"],["/archives/2020/02/page/3/index.html","0167b4963a61c9f0524ec7f4d6e99a28"],["/archives/2020/02/page/4/index.html","b84bfc18c48362ce1765874d2a8cc676"],["/archives/2020/03/index.html","dff400c8f0be380c7ca8fa99c21c80c8"],["/archives/2020/03/page/2/index.html","3d76e4de4fc524a8540423bd167e7b80"],["/archives/2020/03/page/3/index.html","15e8d75bf0f84eec96e02e83d5f4b433"],["/archives/2020/03/page/4/index.html","61b49917f7fd345afe46fd35fea31595"],["/archives/2020/03/page/5/index.html","370c90faaffd3bee0c32b5db3240362c"],["/archives/2020/03/page/6/index.html","332431d8818a224d9b42e13891f49950"],["/archives/2020/03/page/7/index.html","0dbfe2d89a19c20d73f58474940b8069"],["/archives/2020/03/page/8/index.html","9cedd0d8204bfdf86b9c1626dae0a4cd"],["/archives/2020/04/index.html","d6732e499b15f52305819c9cbd1672d3"],["/archives/2020/04/page/2/index.html","78fdbdd3940d759d0e800cfc9f041759"],["/archives/2020/04/page/3/index.html","2ea2c7025b2bb85e7c0940eaf57f7c70"],["/archives/2020/04/page/4/index.html","6127a367e4cf56e28bbfb4dd05347a96"],["/archives/2020/05/index.html","bad433d78c3f30b1f88b13bf872b4374"],["/archives/2020/07/index.html","ab6779c0972d597bda4dd2248ef8c86a"],["/archives/2020/07/page/2/index.html","361d156777cbf86781394a69200dfd17"],["/archives/2020/08/index.html","9ce38740f055706949b5a87e6c1fb91f"],["/archives/2020/08/page/2/index.html","e71a5cba768a51261903d9e08d974178"],["/archives/2020/09/index.html","223bdce4d6806aae9a09b211148ae76d"],["/archives/2020/09/page/2/index.html","aa65f271a55ec555fac6cf73a68bbd93"],["/archives/2020/09/page/3/index.html","6c0e798c607a3d174b530194426de4f2"],["/archives/2020/10/index.html","512c812a3a959d79ec6644908abb38ff"],["/archives/2020/index.html","75d2be4701174c1fc3eceee477f99ddd"],["/archives/2020/page/10/index.html","d1b19646bbc3e6375dd01854825db5bd"],["/archives/2020/page/11/index.html","886a5615255e66cd041030af04360e73"],["/archives/2020/page/12/index.html","95d396b3564e3e58ad2c8aa49e6903cf"],["/archives/2020/page/13/index.html","bc84647544722b11930e59a26effec5f"],["/archives/2020/page/14/index.html","10675e4508399ff9794757f43bdf4f5f"],["/archives/2020/page/15/index.html","92eb648ce3f0e33392364f7c0937845f"],["/archives/2020/page/16/index.html","35bf6a1123ee52acf2886f925c9b41dd"],["/archives/2020/page/17/index.html","2bd3e53f8d9e35aecfd6d76456930753"],["/archives/2020/page/18/index.html","2bc157ee44cfbcee01868a9e1fef3076"],["/archives/2020/page/19/index.html","9894c00eb7cc563306c237b00ca3cba3"],["/archives/2020/page/2/index.html","8fffaa8f290a71912b0e9ac8cc6c0031"],["/archives/2020/page/20/index.html","7f0b41b11ef064ab2cc59813e041d669"],["/archives/2020/page/3/index.html","64c3e65635396acc3668087451fbdbd5"],["/archives/2020/page/4/index.html","40f49220f2468e3c40682f6e86055f02"],["/archives/2020/page/5/index.html","620fcf2aa8b7c4d3f355c873330cca4f"],["/archives/2020/page/6/index.html","750fc98cc1e424ec70b3e6a7a050a0d3"],["/archives/2020/page/7/index.html","c643e7e5a1d271de43331b395eb8e924"],["/archives/2020/page/8/index.html","ed4a73da31e2a3f398acecbbfb3a58c3"],["/archives/2020/page/9/index.html","73cc1cdc21f55fb6fd48c781c6b158c7"],["/archives/index.html","41c7a3245cf43098cf6b674d9dfb4f65"],["/archives/page/10/index.html","0e273184ddd6c195e38627072e3cd6ac"],["/archives/page/11/index.html","320ef4b678b5d5bf2ff52e51b8a4836b"],["/archives/page/12/index.html","160165cd525344be51c59c15e64eb606"],["/archives/page/13/index.html","8fc0667a8ea31559e761ec6a9dd9265e"],["/archives/page/14/index.html","d99eee15999ac19471b70e2d692a9fc6"],["/archives/page/15/index.html","a8e2af597495dad7e0df6b8fc4b87c90"],["/archives/page/16/index.html","538528d7c9eb8b5e000d38f2b876508c"],["/archives/page/17/index.html","1fdf21e513d445cf1693270421115cd0"],["/archives/page/18/index.html","46f2cf8e728d62143428fbb3e085b54f"],["/archives/page/19/index.html","5898a8b32588ff7abae22722aa5e1ded"],["/archives/page/2/index.html","6838d67aa89a32f50600cac1b21328bd"],["/archives/page/20/index.html","86f10f06f318abcb5dd0445a566ef135"],["/archives/page/3/index.html","11776d0b8fd748830091045df9620a36"],["/archives/page/4/index.html","737d85a6a7284897a39f1a4483c0ece5"],["/archives/page/5/index.html","c200d7078deabd72473cfc3cb5df4347"],["/archives/page/6/index.html","b7fc647eb7ef36493fa5e7638e3dc2d8"],["/archives/page/7/index.html","35df47d964bc1f127c1cde05bda84fb5"],["/archives/page/8/index.html","93089f8089f905e544e55d46d9c80cda"],["/archives/page/9/index.html","abed624073a98d1929db3974dea8d271"],["/baidu_verify_code-f31n4EzMWu.html","5bb24409b3c9ebd970ae26c977ae4432"],["/bangumis/index.html","20590af33541b521054697e00ffe512f"],["/categories/Ajax/index.html","c27da386920fb91048b3c47e08c83e03"],["/categories/Ajax/page/2/index.html","af25916feea179cbdd9b9a3bcaee50fc"],["/categories/HTTP/index.html","85fb88376507e47cfd21fddf7d0fa347"],["/categories/Hexo/index.html","4decd43fa94760a5ff5e611fda3977d0"],["/categories/Hexo/标签外挂/index.html","6f25b1eb9aea1f57e290aaea5c8ea882"],["/categories/Hexo常用命令/index.html","a62adc4398afbb9a62e16b92e7748e06"],["/categories/JSON/index.html","92159b40ef2767cc4256f9dd3d94c924"],["/categories/MongoDB/index.html","2752e2a87fcb7427c66bf5aa2c9cb6ec"],["/categories/Nodejs/index.html","6c2aee09facd86970ff35a562d71e7a8"],["/categories/Nodejs博客系统/index.html","b330f3710b3bd7d4aa0bf1fba17f1163"],["/categories/index.html","9abf1fd9873d61dbaf17dccbe8e1669d"],["/categories/promise/index.html","b9d465547f727279303852c7b71650a9"],["/categories/日语/index.html","ce151ed9100cba4359b73b02574ece77"],["/categories/自学考试/index.html","936a0e919c1f7a39854447eb98040ff3"],["/categories/自学考试/page/2/index.html","3f4a1463bb82db1de551f760e8456e1e"],["/categories/自学考试/中国近代史纲要/index.html","f2778adb539c0de20f377fafebb072f3"],["/categories/自学考试/管理经济学/index.html","ff8f29a02ce2b43009b7de4a8c2716e0"],["/categories/自学考试/考前突击/index.html","d1b32b3037d52a96d81283cc3c2b365f"],["/categories/自学考试/考前突击/page/2/index.html","89bb78c4226da14157f32e57485d6981"],["/categories/自学考试/计算机网络原理/index.html","7fad453ed5df003fdca3370b16e88ac8"],["/categories/自学考试/运筹学/index.html","ded82c486ccd12badd2c78711f506e38"],["/categories/自学考试/马克思主义/index.html","0afe580399bb60ab743811ec83a60de2"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","094949a8bb90d716e76b1b2a546224dc"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","f038d8253b754c47b6a8e4440b995b63"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","2b918d839b49a68c5c7fd1a69bec26d8"],["/page/3/index.html","d1138354b1515986ed0a6782171b76be"],["/page/4/index.html","edaa4746487843ed62e60a2e2c65edfd"],["/page/5/index.html","541eabc87e3ff00ab7dd40bf0f5c4da9"],["/page/6/index.html","875e6e36d1cd354721a105076d7baa0d"],["/page/7/index.html","cb086330038205881307aaae1e880aa8"],["/posts/10812f0/index.html","3e26f8a943e9c63398f0765a490640b3"],["/posts/126b275/index.html","d02bb120cf1fc40c6ef5180282f77698"],["/posts/12d95a5e/index.html","5ff0067394c657251417511f3282bbd3"],["/posts/1367417b/index.html","24110167d6bbb5a3be76f370ca4faf71"],["/posts/13886e3f/index.html","fe004c4528cd7afa40b824e3e459a4b7"],["/posts/145193a5/index.html","9ee1167ee1505b5769a2bd54f42decc8"],["/posts/149dde25/index.html","f8e1d4ca4e2cae441dc4ec822ab7899e"],["/posts/152fa65b/index.html","fe5d01db457e5193ffbe3447fbdabeec"],["/posts/169e7dda/index.html","f683b9ed171da113dd4dc3e24734d940"],["/posts/1875100e/index.html","4a922afffc00d7ee88830f38493ff960"],["/posts/18eaef7d/index.html","05cbd38c460ebe762af462a13d438811"],["/posts/1a0bc7b7/index.html","3af4809088c03f63fd4c50755a1f45a1"],["/posts/1a20a057/index.html","597f9558076b68215bbed6d34aef5d74"],["/posts/1a998be6/index.html","33891b6bacfcc3c5ec4177383f855c15"],["/posts/1bffbd20/index.html","691bf2228ded5a88f2d701ccf5bd54b4"],["/posts/1c5a0485/index.html","4bfd07380f31ae5374515311aaa15df9"],["/posts/1e638f78/index.html","784a342b9db4f1211910756a26fb3e30"],["/posts/1fb53120/index.html","b606a3652ff35e53161bbe4ddba8edc9"],["/posts/21466e86/index.html","311e429499bfdd758a33237f2b118707"],["/posts/21abcf1a/index.html","9a005dd1b49ceea0044f79c96ff480ca"],["/posts/21c250b1/index.html","e4c269a849a4dd95418bd589ce0c9bd5"],["/posts/2287cc/index.html","ce8b0ab1625fff55651d1908f17aee49"],["/posts/236bfea3/index.html","35a6dfb86eae646f8a0d24117178116f"],["/posts/24caea6b/index.html","1147a61f10e0f67422566e81e6d7481f"],["/posts/25d45c3d/index.html","f2943ed11ff86512342838a1d9c38661"],["/posts/262baa9f/index.html","23c6ba20316634b5609edf2fb170b24b"],["/posts/27cdc142/index.html","b95415d3f4fae18f0c9cb004b2a24670"],["/posts/2895c4bb/index.html","255d05ec2eee481d6585c02f52fd2df2"],["/posts/28987ff3/index.html","bed052cc9deb43ebd28489e26b194bb8"],["/posts/29f0df96/index.html","2757d1e2ee2502ffe1c9413bb6ee0692"],["/posts/2a1d2b6f/index.html","96474547b9b384c136a1c784471d7876"],["/posts/2a386047/index.html","0fa30e5297dff2954fa702d9aba23c38"],["/posts/2b770baf/index.html","e7783c2289049a294b3415de7b16a8b1"],["/posts/2cda4a8/index.html","7bbfdfbede76af3ee5430ba176908e49"],["/posts/2d020832/index.html","7677e9358704edc14f1bc64f7fb9e18c"],["/posts/2d6d3bd/index.html","e5ef691aceb55443f7438fc702c9d8ca"],["/posts/2e0c129d/index.html","b54b27b0ecec39de76a5cfd4be9e2ad0"],["/posts/2e7563a0/index.html","aee1062540051dec2a14152327fd3e91"],["/posts/2e7b8d69/index.html","246c951d45e91f3811ac8baa208e5112"],["/posts/2f28d14b/index.html","c97b4bb058044965917d39f260f0b510"],["/posts/2f6e1383/index.html","2ba4512275618b2927eb21266574a73f"],["/posts/30bfd1cf/index.html","63f332677fb7d5c8b4deee8cf7f12c8a"],["/posts/33235106/index.html","d735df41efc69261fd38764549e469d4"],["/posts/344e951f/index.html","d3c9d657401ba0024055c34557613b97"],["/posts/35e2bcf6/index.html","a186a8402319a7153c3a42a759f21082"],["/posts/365e96c5/index.html","9657c76948952cb61728e9735c3e96f8"],["/posts/36e331e3/index.html","e49fe6827a70edf9aa95b7d3fdb794c9"],["/posts/372df90a/index.html","0b956c952285e3dc91a7ba12c6179004"],["/posts/37c547df/index.html","9a11ccc874439cc772eff6167a14572d"],["/posts/38a88481/index.html","cf3deb5a794d1079e203005be33cd49e"],["/posts/3914bfed/index.html","cea647ec6293ca02942fbc00a6178d7e"],["/posts/3b56780c/index.html","3e3efc65f1b0a914d03cc0308f294177"],["/posts/3e4bb613/index.html","e82a918e387b4695c1044d2687725c23"],["/posts/3f2e933/index.html","138e13a3c78ed1ca61c4c1f483988884"],["/posts/3f6e5f9e/index.html","021973aa0156d1d5fc09d0b1695af920"],["/posts/4349a589/index.html","a2ecc229f799171900ab556a9bb61105"],["/posts/44246190/index.html","992f0e51b5afe682d23cce8ff7fd2ec8"],["/posts/456550f/index.html","241c964db21eff72c452186d4decad5e"],["/posts/470ac03d/index.html","c4f86d4f40af88612faf0f3e1dfeb2d9"],["/posts/49249ac9/index.html","de899c10a3ec9e1cdd19e83f647032f8"],["/posts/49f2d2a/index.html","6b104ab67cd39c34a5dcc961371df6c8"],["/posts/4e6d4eb4/index.html","a67a0b6afae7016db08a536b5979d7f5"],["/posts/50caf1d4/index.html","c877d3ba6f1c110ee5f1640732a0753d"],["/posts/51139400/index.html","0252f59007a351157a51533e90755651"],["/posts/512c9a09/index.html","bd8c1c69e281ad98ae112ad5cc726739"],["/posts/5205b330/index.html","0947ac3c4f75800985ad3bbb3a395c17"],["/posts/52d36cab/index.html","bbc472967bc95998c539ada9391fb16c"],["/posts/532a083a/index.html","0ecb4bd70bb2a50a97ae17fb4e11edb9"],["/posts/537d2c2a/index.html","ff26c4e4f99094c8f71caa1cdc18d387"],["/posts/54383ba0/index.html","1c55242458a1de5d957c47da08c3fc34"],["/posts/54667693/index.html","3e597d6c067fd7fb04776f01f5a1d88e"],["/posts/5508212c/index.html","924a010a627f00dab1a47b582d085658"],["/posts/571564e5/index.html","5f72e62c41c5df5dec278a523f8ed2e5"],["/posts/57900fe5/index.html","fdd25ee68f3398cdc24f1e6c801fb70a"],["/posts/589a214a/index.html","4c1118d8c4d79af40961fdcd11246215"],["/posts/599a2b19/index.html","8956aca75df82d25596c82ed4c076e0b"],["/posts/59c05382/index.html","9303b984fbfa43238f60ad02e747a197"],["/posts/5a5294c8/index.html","3c5038e0fd6646ed97f44c66220506df"],["/posts/5b8c69d5/index.html","84aa8d0009eb570b68fb719673866a30"],["/posts/5d3da28e/index.html","2a4ca59664b525a4b6d429132e8e3a78"],["/posts/5d3f50d1/index.html","8f845b35b65575ec3f7f06ac889e27a5"],["/posts/5ef7ef00/index.html","724a6078e13e899bf124d989821d5681"],["/posts/60b5dd06/index.html","a4e779a3f171a40fdf1d9c05dc3b693a"],["/posts/61477045/index.html","55a3876dcc767f079df7c1b08efa4644"],["/posts/69d79f93/index.html","ecfc2ac17290a641c328f753abd31b80"],["/posts/6b2f046/index.html","5ff1725585101f1c23f40b6154e3f5aa"],["/posts/6b4610c4/index.html","4b03180c8dd4b07ff90162a6a325eb7b"],["/posts/6bbf03f0/index.html","a0d85330524000223420af4be3acbe6a"],["/posts/7000d139/index.html","4abb7c0fef9a434aa616a18758677616"],["/posts/72f94093/index.html","ad295e08636aa73c5e717232c09411ff"],["/posts/7380b71/index.html","cedbe6999b6b2cc4d8964589026bbb06"],["/posts/738eee3b/index.html","47af6be8d3d097a3a5bde26d3ca07754"],["/posts/73981dbc/index.html","1bec6cb38e3e89a27718483a96381642"],["/posts/74d60fd9/index.html","fcb531b149388d4b55364eac76938a8a"],["/posts/74f5d9a5/index.html","e2a64d3eaf5231702b9723da5c08f241"],["/posts/750f2ce3/index.html","74c2cd8ff98c3a0c4038c1436dd33c90"],["/posts/75ceb627/index.html","64faf3b43f5e5cf9aabae0618a48c4a9"],["/posts/7725b75a/index.html","16f9e83ecac921e7c22401c951482d78"],["/posts/79ef335/index.html","ce040189e85ab65868650b7845896d17"],["/posts/7bbd3149/index.html","82309faaacabbcb96a369cc7e2d9d41d"],["/posts/7c20e8d5/index.html","68e9fa80be704b146bfd048de601b1a5"],["/posts/7d3ea75e/index.html","93ddfd580062c28a77493a07aa553a9f"],["/posts/7d43958e/index.html","de3dd26cf2275a79436f1a6167354b58"],["/posts/807ac7f2/index.html","cc8e5335cdb1bc2ee3de807cdc5fbecb"],["/posts/81738fa0/index.html","63a69b839e7c82e99cd557779a4b89bb"],["/posts/817c41b4/index.html","fbe5a90b223384c8cf857bef9467c696"],["/posts/84ee8e34/index.html","f505be611ad146c75e810b46222f680d"],["/posts/8837602f/index.html","864e72f55930aaf8669d6c267b8e147b"],["/posts/89589a03/index.html","e4ac19b52ae16972833e002fc98bf256"],["/posts/8bcef008/index.html","c17e48d2cd3075b274ca509deb5e9899"],["/posts/8bf9abeb/index.html","30d69c57e2e4d82f8598a6cb81c2000f"],["/posts/8e5f5686/index.html","61de22a13f1d4b78cb2cc42e8129cd3e"],["/posts/8fa6b8c7/index.html","3fe89ecfb1c20f129aa9280cb242c98c"],["/posts/9029a3de/index.html","59737dfc27736e86961e9cf4a5661cf9"],["/posts/909d9a5d/index.html","b55544a63ef070f605ac35d900e85d62"],["/posts/91404b94/index.html","6c82462e888c58dbbf2d198724024370"],["/posts/932e3747/index.html","7b15af7632b48b9a61125d58540dcea9"],["/posts/95fc9e6e/index.html","9a1b3d945c0b867c315c891dbdd57898"],["/posts/98e67280/index.html","60115fe11a1b5ad3fad3101bacb1c525"],["/posts/9a4d13ef/index.html","63ec758be6500f048e1b233838bbf7ff"],["/posts/9afbb889/index.html","d8113ab88d8fe9e0ab1f6afca730ce85"],["/posts/9be63ba/index.html","0a20a9dd5dabe58f772914eea837e259"],["/posts/9d967c90/index.html","8c33a7925dfad41555ca99454f69218f"],["/posts/9eadcdf6/index.html","a59696efad2770d0562cd49d03af6cd7"],["/posts/9f97db8f/index.html","75624613e81c9bb3b0e32203e397b914"],["/posts/9ffb4388/index.html","8f08ddc2e0fe2eeccb1ecb33d6698b67"],["/posts/a094d027/index.html","f5049c053904b0f89fa3b026792d8f22"],["/posts/a27042c6/index.html","b0450843bfe8f927893baabccdb0e068"],["/posts/a29cc732/index.html","8feb7fde72178518a6fcef1c46b6058f"],["/posts/a44a518/index.html","8baa6111046460793bbb3537f305686a"],["/posts/a4f2a748/index.html","bf84b6442388e0baed796e19fc0c9b60"],["/posts/a7dc32c9/index.html","32151ea09954dea08009fc5889b49c39"],["/posts/a7f753ec/index.html","46345252527b464ebc1c7f629c8c03bb"],["/posts/ab176793/index.html","ccad8d0daca18facf5a2821dc09abfd1"],["/posts/ab34095a/index.html","de214c5bbbeabc5e18b09ca742b163f1"],["/posts/ad47c4a5/index.html","452130a9d92b1e75f3fc6d2ef5d0db7f"],["/posts/ae8f7b74/index.html","c5cbff73cc5cbe34d388810f77bb91a3"],["/posts/af43816b/index.html","7d776956ee72f493ad4cdecacb1ae9a7"],["/posts/af9e049c/index.html","7f0fb2eea9a4734ea226f32ca29a73a7"],["/posts/b0f1a367/index.html","70ec86664527df969df665450bb3d414"],["/posts/b0f98e2c/index.html","841e2ae1f501cdfdcbd56707f08d1af0"],["/posts/b33131fd/index.html","75c1f4a4a348bee2ce092f4ae27a2c8b"],["/posts/b36eb520/index.html","3b050c4b6372e426b3430c917fe0be4f"],["/posts/b542fc02/index.html","11b87d40deea12de3bdc03b0a98f7100"],["/posts/b54eeeb4/index.html","f10bd9495729f7fa8227ab93dd09547e"],["/posts/b84f3f3c/index.html","5301167fc909c84de9fed8dd7b0f3c1e"],["/posts/b94fc207/index.html","f37af4cc64d6e88759abd9f2a99c71d9"],["/posts/b981a6b4/index.html","2ffb1cbb5b69c64d1065d1247fdb16cd"],["/posts/bcea326a/index.html","503b4e77cc6c645498e738181714828a"],["/posts/beb19e80/index.html","b14811727f404025dccfed3e8c1554a0"],["/posts/bec490f8/index.html","8df2038352c10f6415996a0cfded17cc"],["/posts/bf7bde0e/index.html","455b38754b69ae53f7504ed740ee0a29"],["/posts/c03f17c9/index.html","c8537ff3cbfc8dbaf958f1e817f67bae"],["/posts/c35bc572/index.html","87a8b689366016a105d232786de37794"],["/posts/c436016b/index.html","61b46eed04a4924ec2a55c46cb0da86a"],["/posts/c4efc741/index.html","20eb2e416497589b2699e7ca8748780a"],["/posts/c5e8a08e/index.html","297a8ba6ab56dd199bc8be42f599c593"],["/posts/c7db1dc0/index.html","adaa3944249094b22afdfb43f0c411b4"],["/posts/c7febeba/index.html","eab02b7903c1d67ea5265e5656073377"],["/posts/c9c3a06e/index.html","7b2de8ebdc2be91b977879bf786423a0"],["/posts/cc6d2cf2/index.html","9698d3b22e49d10b012f659a2ba1b586"],["/posts/ce48f291/index.html","1cf3753eaa1d5bdd6d726b0f7117f58c"],["/posts/cf480faa/index.html","ca611700652fb82215552c8e37053973"],["/posts/d090b4d/index.html","dcba59baec205de059c8b2fb0dd25409"],["/posts/d1995044/index.html","49d7eaa4174b179317e658484e9f9892"],["/posts/d2d34977/index.html","1046ed3598d467fb25faf330f34977f0"],["/posts/d3647a92/index.html","da3007a8382285fe53c37ff82ef64bd8"],["/posts/d3f6b818/index.html","24d01c6c53976e26d2207700b4f70945"],["/posts/d465029c/index.html","fba35efef46cc1f063e0e855d377fbee"],["/posts/d9884be2/index.html","6f51b4fb9f5c4202c3facd1f6971002b"],["/posts/da40f433/index.html","21368f629e15efa02fd1344fa99cb8ac"],["/posts/dae71d5f/index.html","4b4bed5319bd2f38a27c04bbbe08318d"],["/posts/db9fbe47/index.html","0a268962b4954b328fdca74b62383991"],["/posts/dbba997d/index.html","3cb728cc6e8d5961bf2fb4be6e319550"],["/posts/dc94f8a1/index.html","395d2c43b45cdd22430e836ca22b1d72"],["/posts/dfe9b67/index.html","b0eec520e9f69a9c2e61e9ac82910898"],["/posts/e0387d80/index.html","cc8097f6671d30a88f8bea125878627f"],["/posts/e356f7b3/index.html","9efe64c1d31fc99dc0afbf42a8bac37e"],["/posts/e3acb366/index.html","2c38e45e89671ac545892abab612218f"],["/posts/e450354f/index.html","6b91a4b9c91e5087b8b954be527ef4bc"],["/posts/e489223c/index.html","56d5359afc7680859b9cbf9f53ad8397"],["/posts/ea914c06/index.html","52bd81b24933c327eb5f882bbcb4145b"],["/posts/eaa8f31e/index.html","b2136c99ad093bf30c3f4b9329ad0647"],["/posts/eac19412/index.html","a2d01252ec6a8c3673fc96e039bfbaf6"],["/posts/edfc881f/index.html","1ac46229ad0b39e2d41669f1643ccf2c"],["/posts/eec0bbd1/index.html","bb1bceca680fc294c2b3ea54414e7ae0"],["/posts/ef22c7c2/index.html","2f7902956e023fce1209f6289ee6b68d"],["/posts/ef271825/index.html","58d22499b531710ac70b8dfc3e680cb4"],["/posts/f209578c/index.html","b7342fcee6e2f52935fa64dca0c06e15"],["/posts/f3e9bea2/index.html","d874656776d4f2ac1372ec6a34c466c9"],["/posts/f67b7122/index.html","bbbccfcef3ddf8994b339853c639892d"],["/posts/f7abba28/index.html","f156bde7e2e3a6951721897bfef02669"],["/posts/faffd764/index.html","046abb09c1fab188a949ecae79f50508"],["/posts/fb684fb0/index.html","15ab916706d56f3324a6403c3427b525"],["/posts/fc57199f/index.html","2f0f7233bd5ec03513df566ad7f2108f"],["/posts/fc6e9a7d/index.html","ff44f629f5fc21297c87b101f28ad6fb"],["/posts/fc7bc02a/index.html","a5def9bede0b7f7a640973aec3148568"],["/posts/fd67c5cb/index.html","0e64d33856430b37fca805aa66fbf188"],["/posts/fdde061e/index.html","21eb5466dd0685d46d9ed034de759192"],["/tags/HTTP/index.html","99cab81c5a976d8ffdb15b23649333f1"],["/tags/Hexo/index.html","256fa594bdf349b7bedc9feefef2a6de"],["/tags/Hexo常用命令/index.html","faaaa4f6152430a0fe3316c6fe69409e"],["/tags/Nodejs博客系统/index.html","a5bce63aa18ad9258844f262a46ed6f0"],["/tags/ajax/index.html","34ef8b3ab8c8f464f67fc745564cfafe"],["/tags/ajax/page/2/index.html","28457d394386a691a80139ce726381b3"],["/tags/curl/index.html","3d94ce246dfb92a0f1d856d50cb973ae"],["/tags/index.html","f63344cf4f532af55ba257d6bc6a3c4c"],["/tags/json/index.html","b03be14c6e5a236e5ea437cd113a15d2"],["/tags/mongodb/index.html","f028cede54bd7113a6558a4c76346b2f"],["/tags/nodejs/index.html","259466c096de96648e077a0e13c85b50"],["/tags/promise/index.html","dec874bacc9d22b3a553d6934baa1e8e"],["/tags/中国近代史纲要/index.html","1218f71337686c0ffd1ecbb7635bef70"],["/tags/日语/index.html","3e4201ba7ea61b973e0e951d1a4732a2"],["/tags/标签外挂/index.html","c1e8b13b3a4a8189dcc16fcac812a5ad"],["/tags/目录索引/index.html","b525023aed4bc0db2f096520957fa6c7"],["/tags/管理经济学/index.html","6b10ea986335f8134daf54ce599fd4e8"],["/tags/考前突击/index.html","1c87c9b28c53af81a94e2dfe878d6afe"],["/tags/考前突击/page/2/index.html","ca17fc1a937f4176d60d89b28dcc5d00"],["/tags/自考/index.html","863296995209085843a5999e91fa39eb"],["/tags/计算机网络原理/index.html","b348b4cd9d59bdb33156f11d6be6a53b"],["/tags/运筹学/index.html","7583888ff7b0395354ccee14b94e631f"],["/tags/马克思主义/index.html","9f017051212b4b4845efd94059095c6b"]];
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




