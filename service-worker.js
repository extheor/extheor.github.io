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

var precacheConfig = [["/404.html","1dcf8717a03e231e1a7e547b55eb3fd6"],["/about/index.html","5d90e46d8346a7df90ddbad7b4c4dfd0"],["/aplayers/index.html","f10f5a7bd15c83dab8e6b00c5c40159f"],["/archives/2020/02/index.html","a90879c8fef7c30495661a37d27969d5"],["/archives/2020/02/page/2/index.html","c24567fa68612671e6e6db794e2d760a"],["/archives/2020/02/page/3/index.html","fca55a87af202be81bd068dbe7d27698"],["/archives/2020/02/page/4/index.html","bab1e3a6ccdafab0afb8944848a56279"],["/archives/2020/03/index.html","83c7739b5a572ec17149863aef814c6c"],["/archives/2020/03/page/2/index.html","128a587b5a51dda4f13a9fc85949f6ad"],["/archives/2020/03/page/3/index.html","7c6da3b6a7f5a239fc061b563e025641"],["/archives/2020/03/page/4/index.html","c95c4243c18011403a0a56da3226ca7e"],["/archives/2020/03/page/5/index.html","955a203fcdc007b8f673505c37d53d6d"],["/archives/2020/03/page/6/index.html","0bf9178731a7882da31d409ca628d81b"],["/archives/2020/03/page/7/index.html","00856ce6650e3ee2bd7e5ed8deb3857d"],["/archives/2020/03/page/8/index.html","d4a236bf0a3b4808e1f84b3a12684174"],["/archives/2020/04/index.html","a46790fd785d3fd6bdf07fc9d5e330fd"],["/archives/2020/04/page/2/index.html","1998632b4e1b77fb12606b2f46aa72d7"],["/archives/2020/04/page/3/index.html","258ea3170e15dace08602deec118dbfa"],["/archives/2020/04/page/4/index.html","62fedf81f786e228514ee613330ab368"],["/archives/2020/05/index.html","34953dcc70160a92b925296f549a5bd5"],["/archives/2020/07/index.html","54182382f925c90af4ff875f5b6df9f9"],["/archives/2020/07/page/2/index.html","9bd100525a7538f70448423fc36cdaa5"],["/archives/2020/08/index.html","74c69efabfc5491b5ef4ad43134925cb"],["/archives/2020/08/page/2/index.html","8b035d090aceb8b3f9a7bc45d0d79024"],["/archives/2020/09/index.html","649e8ae8571335a863cb81a0a3753545"],["/archives/2020/09/page/2/index.html","d23dc367d02c1fbb6c0cea135cc1d2d0"],["/archives/2020/09/page/3/index.html","d353381b1df650112e06a8f289d6072a"],["/archives/2020/index.html","c3cc978588909b07d782c25fda6f6f6b"],["/archives/2020/page/10/index.html","cb6acf6f4f68aa3f56152ec92012ea84"],["/archives/2020/page/11/index.html","2d34917863e11901c57b9d3b9307b752"],["/archives/2020/page/12/index.html","915db7378377a2facba35c82eae33b0c"],["/archives/2020/page/13/index.html","7fcd3ee6f37659b3153547fea614cb51"],["/archives/2020/page/14/index.html","7e851b3cc4d0ad439809fbc386e6d3e9"],["/archives/2020/page/15/index.html","20541ab081a52547f6bd667d7b7c2aa9"],["/archives/2020/page/16/index.html","ffb6dcf6c8e21d20dc6fabea439349af"],["/archives/2020/page/17/index.html","74b973a58b74e684fbf5ff587fbc27a9"],["/archives/2020/page/18/index.html","cfd817a3688515497ad73f2fad3cf7f0"],["/archives/2020/page/19/index.html","13f3308e5ceec762e0e67023781f613e"],["/archives/2020/page/2/index.html","df5b1bdf60b5d7f9577cfd5a7d586189"],["/archives/2020/page/3/index.html","ec8abeb9eee2edfcee2f3156b8b29a38"],["/archives/2020/page/4/index.html","675dff8efbb5dd8ec47512620554c60a"],["/archives/2020/page/5/index.html","6b6e3648063c059ac16c1c6a15db03bd"],["/archives/2020/page/6/index.html","ee6f446ddec15db57d3a76660f5c1791"],["/archives/2020/page/7/index.html","af5d4673285157edc74ff097f583dee3"],["/archives/2020/page/8/index.html","42400cce6300e50e77173cca301e1465"],["/archives/2020/page/9/index.html","5e5a47c415d421a6e1543dfcba15688d"],["/archives/index.html","0603c78abb3fc9aa4f4a91c08b185bed"],["/archives/page/10/index.html","7244048896d96ba55f5febbd7980fa6e"],["/archives/page/11/index.html","f38ccccf85f615b16fae825511140566"],["/archives/page/12/index.html","6862e64e4d18f7e930b9f781d0c6f390"],["/archives/page/13/index.html","0b450005d5cc9174c2b422a4df08eee7"],["/archives/page/14/index.html","539de0bd01a09e55448ae257e8b290d2"],["/archives/page/15/index.html","4279b5e5f5f8eaaf337f24f9ecc95778"],["/archives/page/16/index.html","e2422e0e673576bbc65fcbc13463c4b8"],["/archives/page/17/index.html","6b8b5e964b14ee538928eef20e54b8a5"],["/archives/page/18/index.html","a52486965e421558faf8e466a375b0a3"],["/archives/page/19/index.html","808e6b2376dd61a22a9a6bf160ba4746"],["/archives/page/2/index.html","98b46a450d8b352770671f26e07c5d4c"],["/archives/page/3/index.html","897e763c93705fe921d4c5a1e6b9cf22"],["/archives/page/4/index.html","6980f28202b304b394f57030c5322312"],["/archives/page/5/index.html","dc084774df5eceafdbea9133eb6fc457"],["/archives/page/6/index.html","f1bfd0ba08150abb87072f9652ade087"],["/archives/page/7/index.html","fc6db1d674345daaf41efc3caf029661"],["/archives/page/8/index.html","ef385169e0023f897ecc913ee046c1d7"],["/archives/page/9/index.html","15b2dff7accde5bb8d5b82fec64eedb7"],["/bangumis/index.html","3a072ddf331595f90cc3dfe106923826"],["/categories/Ajax/index.html","07065559a1d45f29fe2b5da082fbe829"],["/categories/Ajax/page/2/index.html","6275dea4b14ec21eb1cfb07fe2716482"],["/categories/HTTP/index.html","87f86f1033a812b5d861b722ae93ffce"],["/categories/Hexo/index.html","60a56aa2327a2645c4069b35e3e79954"],["/categories/Hexo/标签外挂/index.html","c5316d56d78f854e2012e559677b998e"],["/categories/Hexo常用命令/index.html","8b172be62c70cf8f919e71a7e890d654"],["/categories/JSON/index.html","bc1e7d7b13a038f5e4e8dc78c92a81c2"],["/categories/MongoDB/index.html","fb1273dbdb7cd174152eee20141802dc"],["/categories/Nodejs/index.html","0b345553a43963398ea443b6d4bf59ee"],["/categories/Nodejs博客系统/index.html","68fdf78dab4e9958107fa32b9413f5e6"],["/categories/index.html","b0ae94ba5b2fd79028fb5aac9323ba72"],["/categories/自学考试/index.html","1d60a02f53bc6d7297a75ec7308fc802"],["/categories/自学考试/page/2/index.html","d21ef871b0a399af63219d4a9365c808"],["/categories/自学考试/中国近代史纲要/index.html","00507b15dc29e6e08c01f5ba9518d39b"],["/categories/自学考试/管理经济学/index.html","4bd0753bdd2d3fc2623c11da64934fd8"],["/categories/自学考试/考前突击/index.html","7bdf4df1de78e1d46a9de68d0664d6ee"],["/categories/自学考试/考前突击/page/2/index.html","1ddcea931feeae54a63592ccdb58011d"],["/categories/自学考试/计算机网络原理/index.html","012daa00149a841ab9329244c2916a69"],["/categories/自学考试/运筹学/index.html","d71c37fc9e5f9f07f7b255b8049e0299"],["/categories/自学考试/马克思主义/index.html","d4a7449d51592d634267fb0e84d5fb1e"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","0221237dbc6ae7c6e1c59d71b057ac82"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","f1c0b207d74ba443ccef3d5991ebcada"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","248db1cca952e7e7ae0c31ab91cebe52"],["/page/3/index.html","7ad1fd4bbd3c800bd95e135501766b29"],["/page/4/index.html","8b9570782ffa1dd2261fd8f24eb43f73"],["/page/5/index.html","1d58837058ac5dd0874f637a57e44def"],["/posts/10812f0/index.html","952c297998f765d16d2913bfc98ce3a9"],["/posts/126b275/index.html","c8c474049f61808b777373edef8c97b5"],["/posts/12d95a5e/index.html","0abcb06c99e3cefc7886f73ed9bcbfd2"],["/posts/1367417b/index.html","bcb5d360edff3e04c96614f49fe58880"],["/posts/13886e3f/index.html","d38ad1bc3a46ee9e4266e52a83a69567"],["/posts/145193a5/index.html","48f50d427bdde41cdc505f368e454362"],["/posts/149dde25/index.html","c5f9dcde878f2cf1d015aec0491908dc"],["/posts/152fa65b/index.html","135319cea08fdd96cea3d69734dfcc40"],["/posts/169e7dda/index.html","5b407a4cd0749438156ede1b40071734"],["/posts/1875100e/index.html","a6fa58ccfb76a69e97e3ae6b658ad690"],["/posts/18eaef7d/index.html","c1432aeb76fe36665345cb2100e9bac5"],["/posts/1a0bc7b7/index.html","fad7b5b147548a1fcc2ee97eb168a242"],["/posts/1a20a057/index.html","3ed95d225c9a5a22d4e9519b99743b63"],["/posts/1a998be6/index.html","cafe9dc38031721af866a18b4fde1a08"],["/posts/1bffbd20/index.html","01a4def5c9ca5a50ca916a5a69877b5b"],["/posts/1c5a0485/index.html","816bf3d82473dcbd8c2e8a532d0fa228"],["/posts/1e638f78/index.html","3c92c5c7e020295fd4a4d31e0760fb4e"],["/posts/1fb53120/index.html","f8a56aa3aa9df176e1869503a5d295de"],["/posts/21466e86/index.html","4f7af98f7bc78b87f9dc20a161e5422c"],["/posts/21abcf1a/index.html","454ffa77007f81853b11a996a53919ae"],["/posts/21c250b1/index.html","8a5cbfc77e3a3e315608167d263c8c70"],["/posts/2287cc/index.html","409ec6da2ad6baaf3fd72f7557efdfdd"],["/posts/236bfea3/index.html","493ee8ab8dec6388a11675d80996676d"],["/posts/24caea6b/index.html","ef398aed2bce038a8ef0d1e4d469be57"],["/posts/25d45c3d/index.html","2f06893e40eb5db054f4492c086edd9f"],["/posts/262baa9f/index.html","07dc6d286baf91567d7191ff2cc55ba1"],["/posts/27cdc142/index.html","835a7010d5563c60b7f455546f19eb83"],["/posts/2895c4bb/index.html","3b40be126e75d74125e3941399cfa7b1"],["/posts/28987ff3/index.html","aa98d9db7bc4f6da7147afacde870d97"],["/posts/29f0df96/index.html","6d8fff89e0eb31443c3369780f5596ef"],["/posts/2a1d2b6f/index.html","f473c5989fdaf30e6fefef3c916807c5"],["/posts/2a386047/index.html","62df655f79fe82372c53c0c406400c6d"],["/posts/2b770baf/index.html","79233dd04a84c76688101a3217a1cff1"],["/posts/2cda4a8/index.html","3b56200bc0bc6230e82f32da6486743a"],["/posts/2d020832/index.html","9d75555f52ca6042e0f007c89df307ac"],["/posts/2e0c129d/index.html","aa1c905ce1c0b0650a524e7af5294e32"],["/posts/2e7563a0/index.html","18a14d64fb40aea93f98791c1caa3a2e"],["/posts/2e7b8d69/index.html","0892d4c10959b1bc40d7f7e243017acc"],["/posts/2f28d14b/index.html","fecea40388410e06ce20db28fb0251ca"],["/posts/2f6e1383/index.html","8acc3b780400f6d88652154be7f127cf"],["/posts/30bfd1cf/index.html","473564e55e5484b7ef799537c69bc239"],["/posts/33235106/index.html","6ed6c35bba0eb24522c991bfc0e79a3e"],["/posts/344e951f/index.html","d21e8718d3f1222a0598bc8af93af06a"],["/posts/35e2bcf6/index.html","447037f149dcda63c2c158b5303ee220"],["/posts/365e96c5/index.html","f3ae19a48a2f0e540077998c4b544a78"],["/posts/36e331e3/index.html","0ede6634295c2a63bde4baa9855ef321"],["/posts/372df90a/index.html","7e2aed3750d8f6914e4e63ebe8472c2a"],["/posts/37c547df/index.html","4b19f140d5fc0732ee4e25fe30df1cd6"],["/posts/38a88481/index.html","e6299a54701c6d6600917742a76bf8d1"],["/posts/3b56780c/index.html","3c368abe74c4e72a1531e038ea416e93"],["/posts/3e4bb613/index.html","e8175b143b148e6629a59a02d1cec382"],["/posts/3f2e933/index.html","cd792fafc8f0054fcd7c4d623d874826"],["/posts/3f6e5f9e/index.html","4b012d07ef79c9515ff30c2d85a88484"],["/posts/4349a589/index.html","52c2eb6770144b88833c5ab9d73ab79d"],["/posts/44246190/index.html","284a0a184bd15e3689f0c8262f249df4"],["/posts/456550f/index.html","7942d17dda352680f3990cfe7c32ae83"],["/posts/470ac03d/index.html","11dae59846004b096fc72d784766775d"],["/posts/49249ac9/index.html","a5662312ad1b899d12c4ddf04a943dfc"],["/posts/49f2d2a/index.html","1e0a6804abe1f30a83abe9777caab65f"],["/posts/4e6d4eb4/index.html","91d543f7b92b6f39686f9552f3f1793e"],["/posts/50caf1d4/index.html","de4af57bee1b73276ffbc0e25ec5fbd3"],["/posts/51139400/index.html","30fad41604a34ada5b3c8d463033b484"],["/posts/512c9a09/index.html","f4daa9fbbb7b509c44c22285b386a33c"],["/posts/5205b330/index.html","0bee46cd4892c7737d3b1bc9d3a7039a"],["/posts/52d36cab/index.html","9efe3a2b6070ccffdf240fe847dc1b7a"],["/posts/532a083a/index.html","9ac8e5763eafcb33405312efa91efde1"],["/posts/537d2c2a/index.html","49fde72ef1be45e80c9dc23b02d67e09"],["/posts/54383ba0/index.html","61a8b0e89de3203d8d795c9e310150f3"],["/posts/54667693/index.html","f0c64ae9040a381f2d4165c9b0679b1c"],["/posts/5508212c/index.html","5a725500ea501f858fd95692512b6ce6"],["/posts/571564e5/index.html","23579a2cae4d39525f6e27ca331fc322"],["/posts/57900fe5/index.html","56560c3fa72c1bdf4727fb3b53d2040b"],["/posts/589a214a/index.html","2632c5447b9650e7682df2107fc73442"],["/posts/599a2b19/index.html","0d4da66fd9fb9bf192cdc7fe5bc180ef"],["/posts/59c05382/index.html","55ed4d1ac1490fc10a720fb585ff4d23"],["/posts/5a5294c8/index.html","e04eb4b6fb7dbaab98643bdc03ceb34e"],["/posts/5d3da28e/index.html","095bc8d06d7517ceff961f14cb6125a0"],["/posts/5d3f50d1/index.html","cc2c80540a2c8eb0e7032772011dbdcf"],["/posts/5ef7ef00/index.html","6744ee2fa107742553accf1d22df1e4f"],["/posts/60b5dd06/index.html","8516850985a65d580c464e8ab85872e7"],["/posts/61477045/index.html","bb14c761de3b362d10bb08bc45ac961e"],["/posts/69d79f93/index.html","095f6a3affa83cc2c0ee4e9d045bfcf8"],["/posts/6b2f046/index.html","21dba0b77cdbcb8727a9a46637fd09a6"],["/posts/6b4610c4/index.html","ee12a87fd037ef71d0068d1d22674be5"],["/posts/7000d139/index.html","52f34ca5fccc8cb3e3bc43fa6e429a0c"],["/posts/72f94093/index.html","4b6b95fe9b7fc2dedf249cc5eb61f370"],["/posts/7380b71/index.html","aa7cc5961d850f5161efbe42f4c3bdd5"],["/posts/738eee3b/index.html","880567845e63b62c4a00543b5c2ab211"],["/posts/73981dbc/index.html","5333e5523fb90f8d5752c8d3044010eb"],["/posts/74d60fd9/index.html","c0ca9fd51f677f03570d3c384c1286ec"],["/posts/74f5d9a5/index.html","eaea2900fe9a7d7acd2a77efd94c6793"],["/posts/750f2ce3/index.html","6e63817939d4e5c069caebeb159d4971"],["/posts/7725b75a/index.html","3f44744017689fb93f718587e4d90b6e"],["/posts/79ef335/index.html","7ac2675fb10369cd65598bf30fe59b85"],["/posts/7c20e8d5/index.html","6e1d828a6f914f09f6f93c3935ba61f1"],["/posts/7d3ea75e/index.html","bfc68ba26f4a2fea53860a636f2f7ac6"],["/posts/7d43958e/index.html","8a0163edb640ab9d1fd98db956f696f3"],["/posts/807ac7f2/index.html","e532585acff8b5e73cf4d6f6a245ce71"],["/posts/81738fa0/index.html","cf035d99b745ee268bc6bf1ff8d70602"],["/posts/817c41b4/index.html","8cc2c758833c97f8940f5f3c73d3f6fc"],["/posts/84ee8e34/index.html","6a11e139758a126e29ccd3d5c5461fd6"],["/posts/8837602f/index.html","ccfbdc252dbbf52b2518bab983eca49b"],["/posts/89589a03/index.html","bc45cae9e171e7ab081db1b2c46254c4"],["/posts/8bcef008/index.html","a279320ff9f73ac2121454a8522c9230"],["/posts/8bf9abeb/index.html","f1bdfb259b30a9b6df2a858f38c367f8"],["/posts/8e5f5686/index.html","41b145130d886a2f089e3274d6f6045c"],["/posts/8fa6b8c7/index.html","87defd59a4185a3e2d1692cd9e7eee7d"],["/posts/9029a3de/index.html","097a1bcc9a19d7ff47e6581791d745be"],["/posts/909d9a5d/index.html","27bc800e87ef8eb90d4109bd9d4ebb30"],["/posts/91404b94/index.html","c63a4a2bd345f450a759b254086c97a2"],["/posts/932e3747/index.html","e245ac211b8c012957beb05d7a5ec2d7"],["/posts/98e67280/index.html","15e10da4bfa9f762f60e223d812a2fd8"],["/posts/9a4d13ef/index.html","fc91792529039a43bf3dc0d6d63813ff"],["/posts/9afbb889/index.html","5b30265a232eda7d5f998a2bd3961221"],["/posts/9be63ba/index.html","d9478e3f01a0063b00a0acbc486fd485"],["/posts/9d967c90/index.html","4336679823448be508e40b9362fbff83"],["/posts/9ffb4388/index.html","32d8b444c13322d53ec36092e5fba93e"],["/posts/a094d027/index.html","a906c64b355a0dcc3e99a1119214b98a"],["/posts/a27042c6/index.html","014d51d3885cfd985b4b9de2195640d1"],["/posts/a29cc732/index.html","1cf0fd9f1500a05e67c89352d4fe4db8"],["/posts/a44a518/index.html","267e9bb69cc4c11dd923fbeea602c601"],["/posts/a4f2a748/index.html","1e6781af110dfb2d09e7fdc16f839d3b"],["/posts/a7dc32c9/index.html","0c1b1ee2d76230eb5b82957c15365f19"],["/posts/a7f753ec/index.html","8d463bd18efce8fdc37464d20b08c663"],["/posts/ab34095a/index.html","a700c9543b50911ed989c95dc93ce29b"],["/posts/ad47c4a5/index.html","afa3d190c1816f8959266cb6a38105e1"],["/posts/ae8f7b74/index.html","66fa007dde54b6564278f742233e39bb"],["/posts/af9e049c/index.html","552c6737c3343c8575cae5ebbfe3b2e4"],["/posts/b0f1a367/index.html","8eaea3d7d1cbc1773c43264b94d0bb95"],["/posts/b0f98e2c/index.html","b83072df697b1df55b32e330724db8f6"],["/posts/b33131fd/index.html","28031ed7b275090cb57f66ead72ce95c"],["/posts/b36eb520/index.html","f60256dfb56868a7a46900099526aa6d"],["/posts/b542fc02/index.html","f8f7c812c3d3a71afe13c8d2fa66905b"],["/posts/b54eeeb4/index.html","38612891b9508e77767365b04ee05b78"],["/posts/b84f3f3c/index.html","c888aab80eb33d7e45d9cac93b2ad413"],["/posts/b94fc207/index.html","627ce56da462b94671b8dcd9a42bd471"],["/posts/b981a6b4/index.html","1bcc1e8d41768316908b717216502757"],["/posts/bcea326a/index.html","5f847196124e8430863fece6828896b9"],["/posts/beb19e80/index.html","e9bc7f90c1207515f92a102946b474f5"],["/posts/bec490f8/index.html","1e61426295ab1e5409667b3ebdf7f201"],["/posts/bf7bde0e/index.html","6f284a6f6acb8157f6a3dbfa83781bbd"],["/posts/c03f17c9/index.html","5e1445c62356b1b6500d809c5d557155"],["/posts/c35bc572/index.html","7ff1dbed61de728571e2cc1414864974"],["/posts/c436016b/index.html","05135fb43bc6ed71b9c575e6a3f1b73b"],["/posts/c4efc741/index.html","b627085e986c104af279ab4651f8b84e"],["/posts/c5e8a08e/index.html","5a27c60995ca99fd69a87443c8029757"],["/posts/c7db1dc0/index.html","d9d7df1d01e0c7c95fba06608b1efca1"],["/posts/c7febeba/index.html","73a5b18f92eedc190eceed93e3dd4029"],["/posts/c9c3a06e/index.html","ca606acb131426663b7d09886969566d"],["/posts/cc6d2cf2/index.html","d17f51a5544a9012a95d541db85ec3a7"],["/posts/ce48f291/index.html","d47269d554eb5b91da8d75c55c83792f"],["/posts/cf480faa/index.html","fb25e25f8cf54c006efce9fa1f03d739"],["/posts/d090b4d/index.html","83588b6afc9ac8e1d66cbe295e517ff4"],["/posts/d1995044/index.html","1d3822e4f0da98765807b75a5b32ae1e"],["/posts/d2d34977/index.html","f4a44158ccaa073e766f12c78e9c48d8"],["/posts/d3647a92/index.html","6008f2bfd720842eb08dfe0d53f0cc1e"],["/posts/d3f6b818/index.html","e2ea0c70383413207d63113619fa88d7"],["/posts/d465029c/index.html","9b5810b89f4e4831748d4a4e70168621"],["/posts/d9884be2/index.html","c1800d47a2ca59f25fe0d4469c6f0ef6"],["/posts/da40f433/index.html","45576091c5a39f9c5fb0e5cf2adf0a07"],["/posts/dae71d5f/index.html","fd1ddb7e166feee368263c7ced443e80"],["/posts/db9fbe47/index.html","185751f45acccaf76eb658a0c1940b2e"],["/posts/dc94f8a1/index.html","b76d6a34d34c96894d903d664162c532"],["/posts/dfe9b67/index.html","174c80f282bcc3e284359e140712e4ce"],["/posts/e0387d80/index.html","5003669706fdf2b924d23444e84672fa"],["/posts/e356f7b3/index.html","08da96bb01860c4025f8eb03ddd47cf9"],["/posts/e3acb366/index.html","332b80b55c942677f710ec933f1eeef8"],["/posts/e450354f/index.html","512e049385848fb51e7b96b6fe397e93"],["/posts/e489223c/index.html","aca745426b1241d05c3df2f63ff57770"],["/posts/ea914c06/index.html","3ab61aa0011a01fd3746552d5f50277e"],["/posts/eaa8f31e/index.html","04496213f148972c2f6a3226772aed68"],["/posts/eac19412/index.html","dfafb14c5eb28783cfd656e6b68e4aa7"],["/posts/edfc881f/index.html","0c9c08c9283339a1bf16b7548e1636b2"],["/posts/eec0bbd1/index.html","1475da8d377b47026369bb58c87b725f"],["/posts/ef22c7c2/index.html","bf2a6619c7de32169d18222a7bd7b325"],["/posts/ef271825/index.html","a6fea83419ff9c95c1bc2e9c18922db4"],["/posts/f209578c/index.html","58b6c6bbf05e1c26ce5bbe5c22718a44"],["/posts/f3e9bea2/index.html","6a27863626e5e92d398b653ce52b9ce7"],["/posts/f67b7122/index.html","7e43623311cdf100944313a3ed687ad2"],["/posts/f7abba28/index.html","ff92973f4542a842d30a7709c07e388a"],["/posts/faffd764/index.html","f49b2a0eeaca494485234a44aafcd597"],["/posts/fb684fb0/index.html","cab3bfd17a3d089d8f1faf3541aea326"],["/posts/fc57199f/index.html","d7f32d7d55e36f0decfec20600a066b0"],["/posts/fc6e9a7d/index.html","2df4be39a40c2dd824a13169abc8ab2d"],["/posts/fc7bc02a/index.html","e0146a4cf690e7f1aaa3d5bd55b3365d"],["/posts/fd67c5cb/index.html","d3d11363f559980f6cd833fe27e95156"],["/posts/fdde061e/index.html","9b6024484feae8f8b93840c1bb7b6425"],["/tags/HTTP/index.html","0099d21b4297f0352c7b31611f42436d"],["/tags/Hexo/index.html","591c4fc0cd1e225f526b5d578e0323e7"],["/tags/Hexo常用命令/index.html","6006a434b0d52e6992d3129dc84d34ac"],["/tags/Nodejs博客系统/index.html","8b753d7cff7c28123c1790dfc2d2b2bd"],["/tags/ajax/index.html","a0544010f357d57ff123f6b503332b98"],["/tags/ajax/page/2/index.html","f9420a42d20bab0d79532f3075ab2751"],["/tags/curl/index.html","818994f4ceb15699b6ad402abe75b0c8"],["/tags/index.html","1b7da2e1b8b7a9ca7c73cefb11afbbef"],["/tags/json/index.html","1febec35f577e90f20658cf222d48f38"],["/tags/mongodb/index.html","637fc66acce89e4d95587fe8cff109f8"],["/tags/nodejs/index.html","5e1bbf459f4fa7e506a47c4d732ea85b"],["/tags/中国近代史纲要/index.html","254e2d61bc3f0baa7b2f559ebc6b7e6a"],["/tags/标签外挂/index.html","c58152775796fbadfb61bef6fa3cf093"],["/tags/目录索引/index.html","8ce29cd5bb384d6f90b9ebba74f1f75b"],["/tags/管理经济学/index.html","41e6506cfbae055e113b0e68e6303a01"],["/tags/考前突击/index.html","074e05c97ad25b86a5686bf1fcc790f5"],["/tags/考前突击/page/2/index.html","78de3d96c1f6166d88ea12b8e024d45c"],["/tags/自考/index.html","b3938180dc9bd7ab6783453d004eead3"],["/tags/计算机网络原理/index.html","a269efa088c0edfe0f4025c0f2e755ac"],["/tags/运筹学/index.html","783ee0afdc0a1faed51ba4e874a60b5f"],["/tags/马克思主义/index.html","2c2938c17711486d3ecc2f5d22877c8d"]];
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




