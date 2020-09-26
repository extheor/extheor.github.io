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

var precacheConfig = [["/404.html","26a627930cc8a96cc304e094a077995d"],["/about/index.html","0f27b67b66865cd6e85aac5f19574945"],["/aplayers/index.html","ee247ffccf5db4dd4c514855985878bf"],["/archives/2020/02/index.html","5ce6b5137c02ea3e0895e54a3f1f65de"],["/archives/2020/02/page/2/index.html","8d9e468ff4661327bd343a684f051846"],["/archives/2020/02/page/3/index.html","6ac7d76df08fce8da4259c7942c8e305"],["/archives/2020/02/page/4/index.html","7b59352a4bdfd30424d090071849da2a"],["/archives/2020/03/index.html","ff7e9af9c1701db5ac754b3c9e4e0efc"],["/archives/2020/03/page/2/index.html","1ccb76d73f25999eefbf2c9aa3532e2f"],["/archives/2020/03/page/3/index.html","c820ef35b408c1fa3b496f73d1b8b319"],["/archives/2020/03/page/4/index.html","135e0f32b613f68bb465471f817c267e"],["/archives/2020/03/page/5/index.html","0300249ffd543bbe7c670b373af0b430"],["/archives/2020/03/page/6/index.html","17ec10658363c33b1ab117b65aaf0787"],["/archives/2020/03/page/7/index.html","8b977a9bed6568ceb23d5052ecf69096"],["/archives/2020/03/page/8/index.html","78de8ccf0e66d2b2f28a37f51b00a251"],["/archives/2020/04/index.html","6c140015e283025e96550fa9e25c1789"],["/archives/2020/04/page/2/index.html","7bfae587806c66adf2a39b3bd2ca6b44"],["/archives/2020/04/page/3/index.html","c4b8a3b6d57efe1dfa94111e7a708d1b"],["/archives/2020/04/page/4/index.html","211099383255e0bd76898cf906aefec3"],["/archives/2020/05/index.html","c9f513b99b3589286b63eca63c4a9dbc"],["/archives/2020/07/index.html","e1693fe759e744b4073a71421eb2afe7"],["/archives/2020/07/page/2/index.html","6b7623fef5837dd1655d65535d48bf61"],["/archives/2020/08/index.html","e693a05ddcee02ae34caf5a7fb55b7c3"],["/archives/2020/08/page/2/index.html","db028c57d45a1738f5e5bcb828f8b08f"],["/archives/2020/09/index.html","332e0edd5c752176c181564974c32efb"],["/archives/2020/09/page/2/index.html","4d1a0ac4f7895ab17a5a0f14463c8572"],["/archives/2020/09/page/3/index.html","87077f61da7a068a318fbd662aa3e736"],["/archives/2020/index.html","10abd24a3f5db31fae8f41fe1a56094e"],["/archives/2020/page/10/index.html","e36f015ca382bbda6c142998bdec8e95"],["/archives/2020/page/11/index.html","f64691736c4d1d43fc51558b143b8cb5"],["/archives/2020/page/12/index.html","cfd1a864445d824b6017224608e89869"],["/archives/2020/page/13/index.html","b7dddff4a9b44e0ec966a6e2ae798e3d"],["/archives/2020/page/14/index.html","8544073412c401b0515d1c27f1a0f49f"],["/archives/2020/page/15/index.html","607f276b52b15c57b6e07d4dbcb8dd90"],["/archives/2020/page/16/index.html","333c4a1cd9174d53b6a0f6c554e27085"],["/archives/2020/page/17/index.html","7c5680b9f3ef47e1bcf2afc6255958ed"],["/archives/2020/page/18/index.html","4d88648fcbdcea29511186e7c555d774"],["/archives/2020/page/19/index.html","1a2084f792bac93fdfb9f7dd94b9835d"],["/archives/2020/page/2/index.html","551420a970de9e536ccb11821751140c"],["/archives/2020/page/3/index.html","93593cd86c066156cce053db332f6b74"],["/archives/2020/page/4/index.html","6306c5168a31fce2439ef23b108d6b7a"],["/archives/2020/page/5/index.html","bd91f6b6be42a0559ad0efd91271b7aa"],["/archives/2020/page/6/index.html","2cb2f4b94408bd682273f8bdd459992b"],["/archives/2020/page/7/index.html","de8871071c485a40021088f4602de013"],["/archives/2020/page/8/index.html","3312a341bcc425d15cb3291ab028d09c"],["/archives/2020/page/9/index.html","5817be11cb16f8417dd11aafb9c9dfc5"],["/archives/index.html","0a4ad5e174b7d44661018a81215756b2"],["/archives/page/10/index.html","076a23d437b40b2bf93e91359255e416"],["/archives/page/11/index.html","d2502c4a12a262cb72ccfa7c74a034b2"],["/archives/page/12/index.html","4ab7d7c1ebf3705eb1043e7db6f5b963"],["/archives/page/13/index.html","9b17f80757626a8943cb52b022f83615"],["/archives/page/14/index.html","f297bdd069670a89b38355d5101cc8ce"],["/archives/page/15/index.html","292653f57ec1e32af672fa0839b8d33d"],["/archives/page/16/index.html","3e4b0cb6e3deda0bedc866c1e1c3acb8"],["/archives/page/17/index.html","4ae35c4825c66bea79a500324613f0fa"],["/archives/page/18/index.html","89b976d6681954aea29e0fd13456ab55"],["/archives/page/19/index.html","b59244ebeb9fa81f465f21bd1a629e98"],["/archives/page/2/index.html","86d653ae57221f981bd043d55d2a2452"],["/archives/page/3/index.html","2c2f1ba317ec36cc19065a107c7df89b"],["/archives/page/4/index.html","e9b281fc1e740cec1242c234f52ff15d"],["/archives/page/5/index.html","0bf372f33f251ead5b90a87510146c38"],["/archives/page/6/index.html","b240c3eb210533649ae231edb6691e15"],["/archives/page/7/index.html","34224e4e5508ddba5b894cd7119d660b"],["/archives/page/8/index.html","f59b35442069eb986a74cbdc68e6bb7f"],["/archives/page/9/index.html","0c854abafbfe841ff8e78afadf82aa4b"],["/bangumis/index.html","4fe90553fe9d79c11cd8a3630a81d916"],["/categories/Ajax/index.html","a17f853b881d9528fe36476d6b0def3e"],["/categories/Ajax/page/2/index.html","1a09c76e295bc43fb98dfee43e1cd838"],["/categories/HTTP/index.html","c965c1c71475502ce76f35b2d8c66ac5"],["/categories/Hexo/index.html","82f01031953c7ac652c7d0b1953b9032"],["/categories/Hexo/标签外挂/index.html","651c139888ac7bd5136571907dd1c737"],["/categories/Hexo常用命令/index.html","6bd433933c0e454c0cd6c56d9d38decb"],["/categories/JSON/index.html","34cd697e9a0f54ce48c40807d723cdb4"],["/categories/MongoDB/index.html","13170e4bb7ef6add4a9fdddd945bce4b"],["/categories/Nodejs/index.html","b7f1e4bde333b79b544d8756c3f5c3e0"],["/categories/Nodejs博客系统/index.html","37213b4cb4757460b03dae075276b7e4"],["/categories/index.html","f1d51aaa5e5229f2920eb4a69888a1e1"],["/categories/日语/index.html","73b6007396e66215e516134914b8b861"],["/categories/自学考试/index.html","3fdb87d118d23f07b3b7c05071d5963e"],["/categories/自学考试/page/2/index.html","6ea37e9bef6b952e11909a358bed8692"],["/categories/自学考试/中国近代史纲要/index.html","cb0ebaa4a183bdd17b5370702e6fcd45"],["/categories/自学考试/管理经济学/index.html","28efe62ce30a65b35929b7e281908ba6"],["/categories/自学考试/考前突击/index.html","907197f792aceaef9f16ea49737e925e"],["/categories/自学考试/考前突击/page/2/index.html","34e0697c2da2c7f7f306dbabd1908e3d"],["/categories/自学考试/计算机网络原理/index.html","0b2f57a9d7066e06ae175ce3c0ddaf16"],["/categories/自学考试/运筹学/index.html","a0e262ec406dce07cb4c0b28629ffa3e"],["/categories/自学考试/马克思主义/index.html","93215b09c7eeec7276e6197d7de5ee0e"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","0c37a2622cd00d723e1d428520daf36b"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","e1147ef47b43eecbf6009fbeddbfb9e1"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","fd08dbc3804df37c6f827b1388e32afe"],["/page/3/index.html","b186ed3d9c1a930ad866f36fed420915"],["/page/4/index.html","37b9c5cf01025b4aac4b0ee5b63a5581"],["/page/5/index.html","da9d738bcd4c39ab88c50acc8ac64cd3"],["/posts/10812f0/index.html","560b81766ea8217261a1b58ff32aec49"],["/posts/126b275/index.html","0328432b66610fc6fbb2b6f5c1caf7cd"],["/posts/12d95a5e/index.html","34239d52e07fc9da73057e3e81c4a730"],["/posts/1367417b/index.html","b10c4dafd2421955e207866985a6bdaa"],["/posts/13886e3f/index.html","d627a8f2aa4fa60b8806572ede625686"],["/posts/145193a5/index.html","1fd41b82e4058c76ca1970e48193165c"],["/posts/149dde25/index.html","81df9c7004da1a497a8ed2005a40aa78"],["/posts/152fa65b/index.html","0d6b07934c635b86339d48b6829f7964"],["/posts/169e7dda/index.html","860183c7f43e14698b6d8f6abee62993"],["/posts/1875100e/index.html","e840cb3bd386d6a0b9430daf3bc94b63"],["/posts/18eaef7d/index.html","1988f13926c7e81566e0ff7f9638763e"],["/posts/1a0bc7b7/index.html","f49892b1433e8e49ca44128d44e84c5e"],["/posts/1a20a057/index.html","81bfa0c74dd55bb50cdaa1fec081f263"],["/posts/1a998be6/index.html","d56e5b6a2d22bd7cf43863a9ddf4bf3e"],["/posts/1bffbd20/index.html","09046f4aecb1018f4bd3a0861c5eeaff"],["/posts/1c5a0485/index.html","62fef14691cc8e624fc655c62cd1cd0b"],["/posts/1e638f78/index.html","92dfa7281b1358a015f242c1cb1cdf25"],["/posts/1fb53120/index.html","1dda0cebea1e17102032d4c9ed73c921"],["/posts/21466e86/index.html","b35fe3427604944791104bebddc9a6bd"],["/posts/21abcf1a/index.html","5bf20d1761602a039fc060d8b2af97b9"],["/posts/21c250b1/index.html","37ef7a683edd74f798a767063f28e646"],["/posts/2287cc/index.html","ec9cc6c02e0aaa696d3da17c89002b7c"],["/posts/236bfea3/index.html","cd7ef6676c64ef3342c2d406d527dc22"],["/posts/24caea6b/index.html","39de06d23b13b73bcecab11c1820b554"],["/posts/25d45c3d/index.html","130ef36f77178bfe783fc7bf1788ce42"],["/posts/262baa9f/index.html","3ced5ccf0f2094264855126d6d90ad24"],["/posts/27cdc142/index.html","e401dc7cc48efaa446d31b1fed2969df"],["/posts/2895c4bb/index.html","075135133d143b8485c8b78013b2b1a7"],["/posts/28987ff3/index.html","3d38d06ebfd506937851da60bb4b2f44"],["/posts/29f0df96/index.html","1e75f78c548ddf3d7dc4c1f3ff50a270"],["/posts/2a1d2b6f/index.html","a2cefc9bfb04e8497f098d9f9aefdea4"],["/posts/2a386047/index.html","b751e60beb5b157e1ab027826f45be31"],["/posts/2b770baf/index.html","a4022822e1bf7a73778bdb10f3e2dcc7"],["/posts/2cda4a8/index.html","5d6c15f62c6b03657e623eb522c8cd9d"],["/posts/2d020832/index.html","80a32b929ccc7d8e942f8cf5cd865671"],["/posts/2e0c129d/index.html","2cfaf716fb1a6b332f1f51ad2283deb5"],["/posts/2e7563a0/index.html","caa650c9eb69ead821b9411659ee33e9"],["/posts/2e7b8d69/index.html","b79afdda7321080ae042c50cfccc89b0"],["/posts/2f28d14b/index.html","a00e21f6ce764e5cfda5f10ff4c502f1"],["/posts/2f6e1383/index.html","32c3da8537d7fcf6f896a66c0b5ea741"],["/posts/30bfd1cf/index.html","54d06ce860285b337f03c80576b6190f"],["/posts/33235106/index.html","5d6da1420b32245196ba9d345b833407"],["/posts/344e951f/index.html","5b9fd729a7477b32856df48227245bd9"],["/posts/35e2bcf6/index.html","6406e4af7398bf93751a9a013b83576e"],["/posts/365e96c5/index.html","c38094000393d2c9a6fb8fc772e8fe71"],["/posts/36e331e3/index.html","6aad0a8d8adca9394a5ce4bd2f7b9704"],["/posts/372df90a/index.html","19754105bd666bebd3e68042fae8106c"],["/posts/37c547df/index.html","2a91f75c85c7657831e24981f2b35204"],["/posts/38a88481/index.html","79e481d8d15d87ca705fd0d09ecd8e06"],["/posts/3b56780c/index.html","15cddd503827ae98f2a72e85be67df96"],["/posts/3e4bb613/index.html","7b28dcfc782ee61b80756472062811bd"],["/posts/3f2e933/index.html","628c666d049acb8da03c377be41fb97d"],["/posts/3f6e5f9e/index.html","fe85317687e5fde66e6fcd63bf5a498c"],["/posts/4349a589/index.html","bd9ded57ed4206bb3e9b7554d4395618"],["/posts/44246190/index.html","1f665eada43c647cd9844dc102b76861"],["/posts/456550f/index.html","a40401ce0dd22e3e3c8bfd0e8aadd05c"],["/posts/470ac03d/index.html","3b0cd466c04dae0f6eaebfd105bb811f"],["/posts/49249ac9/index.html","9cc95f47b4bb059f1fc70c2e3d0ebee9"],["/posts/49f2d2a/index.html","f48805f3c2fbb67dc9a00f5c273efe23"],["/posts/4e6d4eb4/index.html","b2b5adebd9fc130ac00f663b09539fe5"],["/posts/50caf1d4/index.html","474d7a8ac4a38a4ed1068317932afc4d"],["/posts/51139400/index.html","1686a5790e046eff61d96c4c22ba59ea"],["/posts/512c9a09/index.html","aff4ede2fc7f9a167279e54208b4ad66"],["/posts/5205b330/index.html","83308ad7fc3b570826928a1e3d99f34a"],["/posts/52d36cab/index.html","b590147f02d6e9acdc226d365a647749"],["/posts/532a083a/index.html","35187ca1fd2bea5932e7a0eb0b906a32"],["/posts/537d2c2a/index.html","8ad10494ab198144be378ae20f90e24b"],["/posts/54383ba0/index.html","43de0981055eef487e6b5444b4506997"],["/posts/54667693/index.html","91f5f86ecf420c6ea01e11de80384936"],["/posts/5508212c/index.html","15bcf14291ef45a210ee24767f58faf3"],["/posts/571564e5/index.html","ea8fe5addce0a00f6ea4e21c1aee17c1"],["/posts/57900fe5/index.html","1d451fdcd190367ef372722ef5624ac9"],["/posts/589a214a/index.html","0573019ee69dff5b256207a0c2f61182"],["/posts/599a2b19/index.html","4a92e986c2d48ddafb595b3610ea0bf0"],["/posts/59c05382/index.html","bcf08a15ff85ba6c194c0180cfa67e7a"],["/posts/5a5294c8/index.html","90a33dc962bce9ee163461f8351495db"],["/posts/5d3da28e/index.html","37287e315156312d02d35f6d04108c4a"],["/posts/5d3f50d1/index.html","a1e0574d40e04f54af8d22d4a33d222a"],["/posts/5ef7ef00/index.html","63be2fd2ff501cf2d910b21883ce76bf"],["/posts/60b5dd06/index.html","fa954dd4861bb3c17bbd52e68c7a2389"],["/posts/61477045/index.html","06361345115fcb9f2ba69c17b98a45df"],["/posts/69d79f93/index.html","e98198a1b696c0407f9ece89bb188d9a"],["/posts/6b2f046/index.html","3b6d8eecaae3daa93ff9c8bac19a0df9"],["/posts/6b4610c4/index.html","9bf1538b365cabbc5dbdadfa488068d2"],["/posts/7000d139/index.html","f826e7d9138b66bf44334472c4f1d115"],["/posts/72f94093/index.html","96ff015c5f2bd4ce337f7357173d0727"],["/posts/7380b71/index.html","ea0f6dab920be01d6cc145f09b526741"],["/posts/738eee3b/index.html","325ed229ba24e7f67e8e5816fe78548e"],["/posts/73981dbc/index.html","6b60fd26f4a1c786aef662169efb1261"],["/posts/74d60fd9/index.html","308cefb6f789152bac9ed366bcdf95f6"],["/posts/74f5d9a5/index.html","a220a95a7d5a2b6db3eed68f8feb2e86"],["/posts/750f2ce3/index.html","12c3809926d0e27d918842eb8b1d0602"],["/posts/7725b75a/index.html","d8ffc28d4bf4e016be036722c17e30ae"],["/posts/79ef335/index.html","77f03816e7675e88385d02ed1602c3ef"],["/posts/7bbd3149/index.html","93caeed56df1ffcc2a360357c6f82be5"],["/posts/7c20e8d5/index.html","01a61eb661ece64d293f57fa1146f0e9"],["/posts/7d3ea75e/index.html","7a35b02db6ef077dfc78a77297e2e0ac"],["/posts/7d43958e/index.html","04c5f43bfc9b35029ae66b707fa37849"],["/posts/807ac7f2/index.html","0b550021e4de1bb28a09664915cc061f"],["/posts/81738fa0/index.html","b500600c6d68afe113753146482bd387"],["/posts/817c41b4/index.html","5adf167f0338fc137e0c917eda1540f9"],["/posts/84ee8e34/index.html","7824529f7f45077a2cb0f614b8a8ad54"],["/posts/86f3f130/index.html","e44b9e798e564d9776658af1895e5e41"],["/posts/8837602f/index.html","8b5dc2ac5a5c168b496969b1339f2b7b"],["/posts/89589a03/index.html","e224af2a2efea4a70ea55272014c1177"],["/posts/8bcef008/index.html","8b7617b3da0fdb487bb1176431257c66"],["/posts/8bf9abeb/index.html","3d6ae5bdcae906caefc964295987c297"],["/posts/8e5f5686/index.html","6263da48528ded3e98d4395861681c75"],["/posts/8fa6b8c7/index.html","28a42d326fbca869fe681de2bcda0f74"],["/posts/9029a3de/index.html","c65d32134e77f90b7fabe2ed2ad4bd6b"],["/posts/909d9a5d/index.html","b73486e5a7d6e9059de40bcc372edf59"],["/posts/91404b94/index.html","a8b84073e800cb228fd86877edb83b1d"],["/posts/932e3747/index.html","4bca01fcf52a353cfe31d9966eeffa31"],["/posts/98e67280/index.html","8eed122b031a8a5741f7045848539014"],["/posts/9a4d13ef/index.html","46ba5994a453fc000bfd2b14cbb2f2d3"],["/posts/9afbb889/index.html","5c2d9e71d6a48a5dc99915d3faeefddb"],["/posts/9be63ba/index.html","679eb659fe7de791f1bfd96984d19ea8"],["/posts/9d967c90/index.html","2b4b718c375e24849ff6ed9a7f71917e"],["/posts/9ffb4388/index.html","90cb45b78914a3345f35c4e0a565dd76"],["/posts/a094d027/index.html","3c9b58bee82acd258cb1232898f5398a"],["/posts/a27042c6/index.html","cd5ea7ee049559046fae089148007e24"],["/posts/a29cc732/index.html","52a25571963eedf2b638f1e9c1d5d9d7"],["/posts/a44a518/index.html","cab2d2b33b5a59514f5d9e5b02b2acfd"],["/posts/a4f2a748/index.html","e68fd2a8b94d7bdf649110bc1f4b011d"],["/posts/a7dc32c9/index.html","72e0390dcda0fa11e93b54a61386faaf"],["/posts/a7f753ec/index.html","459496b15eff7c6d9ed0c825c67534fb"],["/posts/ab176793/index.html","88a3a96fceec68a2031955b81e512e9c"],["/posts/ab34095a/index.html","7f9969be2791c12c63ea5480568337b9"],["/posts/ad47c4a5/index.html","fd4b8087121fd9eb99c30d35bbc7f96d"],["/posts/adb93761/index.html","01dc688684c4ab7d39bc1744a0477e12"],["/posts/ae8f7b74/index.html","377c81087104716fc43b47e7a4895fe2"],["/posts/af9e049c/index.html","d92a6af9ec1fd1d3f6e3c1e8e087114c"],["/posts/b0f1a367/index.html","fc6630ea9d4781d8eb4c00ecccbaece8"],["/posts/b0f98e2c/index.html","40d6755ecebec04c0474f860cae23321"],["/posts/b33131fd/index.html","19e354d3ef359deb66899b7cc89daf1d"],["/posts/b36eb520/index.html","12bc100792dc3cf0cff31d2e0ecec4b5"],["/posts/b542fc02/index.html","c30f6481a060e8affbf54e40ab3ad195"],["/posts/b54eeeb4/index.html","f066c4dff21b1d8b85998d68aa9df46c"],["/posts/b84f3f3c/index.html","24d792d26e14840b29b1cf3f4bdd8140"],["/posts/b94fc207/index.html","d083d4d65f3e1a72c53c1d6ac12cf418"],["/posts/b981a6b4/index.html","cbd0edaec6ff858f3c800e67fe7dbe23"],["/posts/bcea326a/index.html","f749e54d7b571289d34d0bbe9c82c857"],["/posts/beb19e80/index.html","64cee70ea38094d023f0d289f1ed2ed3"],["/posts/bec490f8/index.html","939a4f7248fa41bdd0d9dd576690c5c0"],["/posts/bf7bde0e/index.html","04b386b9e5ff4dbdddd6041800572415"],["/posts/c03f17c9/index.html","de614cf4029284bba003685209013f78"],["/posts/c35bc572/index.html","d239468eaafda344120f3154735c5e1e"],["/posts/c436016b/index.html","e0797fcf68c72c21784f7c21e25e29dc"],["/posts/c4efc741/index.html","19ef9d3ea6afef12022896b49ab6e15d"],["/posts/c5e8a08e/index.html","c0fc0169acc4d4c258da81aa3c02e0e6"],["/posts/c7db1dc0/index.html","c3c7e1801c7ab3cdc2057ae9a43087c6"],["/posts/c7febeba/index.html","0a133563280c7d5e85d5f9aa751c00ee"],["/posts/c9c3a06e/index.html","afa633dcab245eda110605ce31052e4c"],["/posts/cc6d2cf2/index.html","7b3d1aba759967240703a653086ae462"],["/posts/ce48f291/index.html","5795cd572fdd274bcd5d01c4a9bb7f0d"],["/posts/cf480faa/index.html","dee4fafc5e0e85ac7680589de63fa9e2"],["/posts/d090b4d/index.html","6f2a9711a1f4587968a11e46cef305e1"],["/posts/d1995044/index.html","2c80e8c2a5827576f959fa0d55c0f0c7"],["/posts/d2d34977/index.html","18b9cd4c39663658967d92ec373a9da8"],["/posts/d3647a92/index.html","5bab7837b89ed9298d452e8fb52d03e4"],["/posts/d3f6b818/index.html","9f7702e57e38dd27bc16a5e7f122f6ff"],["/posts/d465029c/index.html","9475b115959b6302db1ec40a0f9e97ea"],["/posts/d9884be2/index.html","b8fc6d4d659ffd34c8cd06155c4555db"],["/posts/da40f433/index.html","852d71ef66d98d5cc5f989c0f247cc8a"],["/posts/dae71d5f/index.html","bb8406954ff371eaeba5892c667ed6d8"],["/posts/db9fbe47/index.html","73cb9e94e323d814236ed9531914ffac"],["/posts/dc94f8a1/index.html","8f0de9431182c28db07735a5a45b96aa"],["/posts/dfe9b67/index.html","c85c9f23e4f1088a52c02d60a40c0101"],["/posts/e0387d80/index.html","dff6c46a46e1d2a20cd618027709aa7d"],["/posts/e356f7b3/index.html","20a47ef21a81a1e7f4731b7aef32335b"],["/posts/e3acb366/index.html","2106c377343d5977b8337f3d4f0ede8e"],["/posts/e450354f/index.html","dfe718a40f8d5f350924e92b158fc3e6"],["/posts/e489223c/index.html","4e16a4024f70e3c96a8ae05756a2db9c"],["/posts/ea914c06/index.html","978b16849788045047c9d06cbf455f59"],["/posts/eaa8f31e/index.html","c72fb7fec79864a0ea58c73826d7ce6b"],["/posts/eac19412/index.html","4b23e36e68663fb8ab44999bf0411820"],["/posts/edfc881f/index.html","13da4826d5a03e626108ed4ffa4ecddc"],["/posts/eec0bbd1/index.html","605bb4ed68d3ee15714dc31dddeef3d4"],["/posts/ef22c7c2/index.html","d5164e7711346cdfbe7e924a19d40dd2"],["/posts/ef271825/index.html","6a5f29840773616b6cee248547c00380"],["/posts/f209578c/index.html","1606e461ef4271cf3828597b96c6034c"],["/posts/f3e9bea2/index.html","a1155996d431951706663ba1675d26fd"],["/posts/f67b7122/index.html","6a610d16adaca8e61c9256362afb9717"],["/posts/f7abba28/index.html","719dc9b7bd0dd84f7db4b2400127f3c9"],["/posts/faffd764/index.html","4ed8ac46a5ba2521348d71aeecf6d081"],["/posts/fb684fb0/index.html","a933f3e2f1d6b26eb010847a9ecba329"],["/posts/fc57199f/index.html","13640c3c3b108fc28f564e71340234f1"],["/posts/fc6e9a7d/index.html","845b109fc6abd9b949619a08c89b4352"],["/posts/fc7bc02a/index.html","4e0c362662f676f3c2eeedd545352e62"],["/posts/fd67c5cb/index.html","ba1459c8052414ef76c64429fcbab634"],["/posts/fdde061e/index.html","cc3830f6dc043f2bdbe3d9172f705182"],["/tags/HTTP/index.html","068efafb9a432d0866d5cfd8df7adc5e"],["/tags/Hexo/index.html","ef1e25c35ff0bc577f239a2582460cca"],["/tags/Hexo常用命令/index.html","b54d0ab84fa9f7c3f473d39c4967202e"],["/tags/Nodejs博客系统/index.html","d969f5f7cdf4af844da68c868a40cdd9"],["/tags/ajax/index.html","571e5c622ccc2dd658f286dfd12499f6"],["/tags/ajax/page/2/index.html","d9cdb001139e152d5997f557fb3ffe43"],["/tags/curl/index.html","08686f34ba8240647c26b17144d327aa"],["/tags/index.html","6a68a3a6cde80dfde80630fd227c465d"],["/tags/json/index.html","8b1547092f9ece9ac43469d558da5e0b"],["/tags/mongodb/index.html","3dd4f409d9920a1fdc50d8d52edcd7b3"],["/tags/nodejs/index.html","596e7bdad97b9990762e54fd8a165503"],["/tags/中国近代史纲要/index.html","814955f1189031fe08e81a5c3af095d2"],["/tags/日语/index.html","136318fb720e457e247c42eaf9e2d592"],["/tags/标签外挂/index.html","1483bde1498a90c59a7a214e17d32af7"],["/tags/目录索引/index.html","3103d522009977dbe00664646c953e65"],["/tags/管理经济学/index.html","8d62b6b167d44594a13723cbd82e7ed9"],["/tags/考前突击/index.html","7e1945e891c74837ed1e8168dca6716e"],["/tags/考前突击/page/2/index.html","c061a2e898d66149adc37052d467e91f"],["/tags/自考/index.html","e70b2bbc8d14635e83a50d1eeada33a9"],["/tags/计算机网络原理/index.html","767ec2f2360aefc295046b223c582376"],["/tags/运筹学/index.html","d917eb54cb4177211f253f44bbc24a73"],["/tags/马克思主义/index.html","0db1e8b7ae2e1a84e51ebe5383863020"]];
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




