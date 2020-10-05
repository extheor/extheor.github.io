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

var precacheConfig = [["/404.html","b540eae7c80d1a4a451489e168c73e3a"],["/about/index.html","0d984eb54a8d3823879f669a7b04c754"],["/aplayers/index.html","308b79d4bbf92abf2e392d91b9709083"],["/archives/2020/02/index.html","bb4edb639ab695b84ca489aa46870918"],["/archives/2020/02/page/2/index.html","be710889900245a69dcb7e798f37fcd4"],["/archives/2020/02/page/3/index.html","4d48371cf414a8c9cfbcfbdece5129b4"],["/archives/2020/02/page/4/index.html","b957fc650247bd41e99f773da05dc6da"],["/archives/2020/03/index.html","1e361b517c01efa45978d4da1b1891d1"],["/archives/2020/03/page/2/index.html","5491b9b91df5b5c7abf90acd0f230368"],["/archives/2020/03/page/3/index.html","877fc07fce2b0b195aa332fa486f3479"],["/archives/2020/03/page/4/index.html","10bd37f25af7438b3d2e8f111c97e577"],["/archives/2020/03/page/5/index.html","da337722d4f985d76a21fc7687e31371"],["/archives/2020/03/page/6/index.html","f9662d107136fe146e43dc62c2c5fd70"],["/archives/2020/03/page/7/index.html","bddbdc1039033c2657d64945319fe21f"],["/archives/2020/03/page/8/index.html","6e5a4a9d848116d7d87e542191a5b823"],["/archives/2020/04/index.html","51f8e126136ec0ede207d036e33a985c"],["/archives/2020/04/page/2/index.html","cfcbd6d5eeaadd2be1ed69aef93aa4b3"],["/archives/2020/04/page/3/index.html","fdeaa4cb729cbd7f4d0491a59d9d0995"],["/archives/2020/04/page/4/index.html","8139a14ce8f212b3330d8744aebbc9cd"],["/archives/2020/05/index.html","e78544085ba90a605d969a3a3a41a645"],["/archives/2020/07/index.html","f457b6531701fad7b22214248edbdf0e"],["/archives/2020/07/page/2/index.html","ae36b53ab541fcfe411ccf02a66b4edc"],["/archives/2020/08/index.html","56e2d656b8bb13c8132f31e140b13309"],["/archives/2020/08/page/2/index.html","f1d3c8f1aba382d2c8e94bd6587e10f0"],["/archives/2020/09/index.html","3710fee5966b7ab4d85943961457957a"],["/archives/2020/09/page/2/index.html","e5d5e3bb432ef945bba7de8aa56ab592"],["/archives/2020/09/page/3/index.html","aa5d0ea91bc79019503261be661fd619"],["/archives/2020/10/index.html","dd9912f46a59bdb587eb26e6f02c5914"],["/archives/2020/index.html","fbee8b5bc76e526c4088e7201825a001"],["/archives/2020/page/10/index.html","241d1919f0bb1ee00b2cf90461cfbe26"],["/archives/2020/page/11/index.html","714a41b3f4035cce47c0e79cde990d05"],["/archives/2020/page/12/index.html","947ecc570079e85c40b3237fff57945f"],["/archives/2020/page/13/index.html","d295b5201c3474fb0c7278b9ee45492f"],["/archives/2020/page/14/index.html","b1b982fa3f9cec8fc6c0775c56f53d9f"],["/archives/2020/page/15/index.html","97fb8812d7d521c7fc119c6cea8cd0ec"],["/archives/2020/page/16/index.html","7e181e6ed8516edeb59c61b2e1aa06d2"],["/archives/2020/page/17/index.html","ebb112c621b25537ebfc832806114633"],["/archives/2020/page/18/index.html","0a713088fabfe8b50241b7f0d91d1290"],["/archives/2020/page/19/index.html","c4ee7fa6a6bc4fc95f5013b2f7cbccfb"],["/archives/2020/page/2/index.html","589b88a1e005f38283fe64ea6d6462f8"],["/archives/2020/page/20/index.html","2c88a5bac3654279f9d0c2439f39e6c8"],["/archives/2020/page/3/index.html","648ed387d996c76d514da306cd00682e"],["/archives/2020/page/4/index.html","127e0071d89577d3e45857eb4f4daa55"],["/archives/2020/page/5/index.html","8d2012b5f9828b68b9622ec9af06ae59"],["/archives/2020/page/6/index.html","7600820e6dcb80a3f425309c2e36dd77"],["/archives/2020/page/7/index.html","0f6abf65e8cae3a623c7fae1b265cda6"],["/archives/2020/page/8/index.html","0aa90582591c67adc524a54646a92904"],["/archives/2020/page/9/index.html","be6e24a3ded7f9a85bd4d62c8ed8d4ce"],["/archives/index.html","43ea52eb201870d1db2ac33b727ab5c8"],["/archives/page/10/index.html","21526834402f79f1362a732411db7a9b"],["/archives/page/11/index.html","0a499e035e6b4e39a5f562dcbfbcd0ca"],["/archives/page/12/index.html","feb7b395c3cd1b6ff5b97b4663536f6c"],["/archives/page/13/index.html","4ff818ceccd4fcf62d6173bfe94e727a"],["/archives/page/14/index.html","254084989854c310475fce87daa6adfa"],["/archives/page/15/index.html","fb1bdb630ff83f8942538e9c0ff923c4"],["/archives/page/16/index.html","3af7a618514511b103a9992ca23ea20f"],["/archives/page/17/index.html","b522fc9ffb6f92610f59197d869009c9"],["/archives/page/18/index.html","04ba11a819eff6d8ba62fc94abb43b3b"],["/archives/page/19/index.html","ab0399a29561451f0253ee78bb4ad44e"],["/archives/page/2/index.html","aba8148689cf43a7bf0a68d1ab0974cc"],["/archives/page/20/index.html","dc3d894f29eed51057f943938964134c"],["/archives/page/3/index.html","19947edff5b0b899e3005b24c948733b"],["/archives/page/4/index.html","83f87ffbb9cda3391170ed12c5938f6f"],["/archives/page/5/index.html","82856a59134bf1bbf52ec53a10bcfe40"],["/archives/page/6/index.html","0d7f68df055eb78ae0659c910a757b20"],["/archives/page/7/index.html","cfa56062918c9ba9390f08cd1e0aec43"],["/archives/page/8/index.html","5a06663d59fec4dc770455c9c1cdd1c5"],["/archives/page/9/index.html","1366599245ae56bb7334970a86a8a837"],["/bangumis/index.html","da64f0316b7706a19db6e50e90edd7a3"],["/categories/Ajax/index.html","b8f0cc5c373b5820dedb5d187a118208"],["/categories/Ajax/page/2/index.html","78f75123c777b8d774921df5b0c0dd13"],["/categories/HTTP/index.html","7e5423be12afdbfbfe88e2e23b1deca8"],["/categories/Hexo/index.html","885383d893990bbad694d7a66227fc4c"],["/categories/Hexo/标签外挂/index.html","cc863b4747640b0af70d37943dd5bd25"],["/categories/Hexo常用命令/index.html","05f30c7ae0f213dba9fb3d4244e1bb32"],["/categories/JSON/index.html","3322033f8a5fcf67ee94da3ab3da2e7a"],["/categories/MongoDB/index.html","6cca6285a9a10370cfedfd25aa08931b"],["/categories/Nodejs/index.html","d71f434010c3d27d28af028794c7556d"],["/categories/Nodejs博客系统/index.html","656c77d1600e25cd3f9118debdab983e"],["/categories/index.html","605832a6c657fe7bc3c09869b47dce3f"],["/categories/promise/index.html","cc378ead84a32ee493f279e9e1437ddf"],["/categories/日语/index.html","65ca45921a21c84b38e4d83c5e15519b"],["/categories/自学考试/index.html","a485cd8a46a4f733a2895cf414973089"],["/categories/自学考试/page/2/index.html","fe9f4b07add93149a218363451579514"],["/categories/自学考试/中国近代史纲要/index.html","07e43f7bb4671cec695f1a8146ed4a8f"],["/categories/自学考试/管理经济学/index.html","f0173aaa2eb75af28cfd8446c5aaab19"],["/categories/自学考试/考前突击/index.html","44d7af0b15c23adc3f2a4eebcdc7abff"],["/categories/自学考试/考前突击/page/2/index.html","6fe576c1eae5f1901de94bc5b3e4b388"],["/categories/自学考试/计算机网络原理/index.html","d3347cd4d9573b23c0489f6bcef02ec6"],["/categories/自学考试/运筹学/index.html","afa474afce21e1a748df3cace64974d4"],["/categories/自学考试/马克思主义/index.html","a241299ff4d3716c6be6270a2a051b59"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a47dd7e5da460907cf46a1a1b75e5341"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","448b1afe9d4df82db601ee1e5257198f"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","54e659e14564f936c9bfaeef33f80dc4"],["/page/3/index.html","91ffe30de094b7de171d49cbf6f188e6"],["/page/4/index.html","4cbadd25c9bb28f2e25858867ea8e3c0"],["/page/5/index.html","2b714b06240e6abb2e40ee310e284909"],["/page/6/index.html","577eccf584f32d1974c7f06f51e98402"],["/plays/fluid/LDR_LLL1_0.png","65b063168317bdd54a8c18e0ff0096bc"],["/plays/fluid/dat.gui.min.js","b87024acb876bb767a7c27a5747d015d"],["/plays/fluid/index.html","ad96278b19975b503ae56b8018e4a1df"],["/plays/fluid/script.js","05d850c6db55e5092f36690f9311a285"],["/plays/mikutap/css/mikutap.css","325c78697c87a3f62edd09be21ec5903"],["/plays/mikutap/index.html","fb2263f57f7816f72709dd2abb5d8f23"],["/plays/mikutap/js/mikutap.min.js","110ad1060ee41e6f41f7f6232337fd4e"],["/plays/mikutap/shared/js/common-2.min.js","43e49a61141c64bcf8d7981f7a6a26f5"],["/plays/mikutap/shared/sp/css/common.css","da9b00bf3729866428f53b69ee9da8ed"],["/posts/10812f0/index.html","ea3e7c33b24dfa96f00987e2ed10db6b"],["/posts/126b275/index.html","dc7782cd2495cca14f2b4ade1fa19bf3"],["/posts/12d95a5e/index.html","097f867dd726e0cc8e641cdbd1b2c460"],["/posts/1367417b/index.html","bbcfd9fbc2f3af909a8afba0dc316340"],["/posts/13886e3f/index.html","061f932db432d568941f7f0001cf580e"],["/posts/145193a5/index.html","04924f9578c17005accea18fbc5be225"],["/posts/149dde25/index.html","45933f8081838c06d273f5ee7e69b343"],["/posts/152fa65b/index.html","37097775a01f5a4eb065aad1c8e1990f"],["/posts/169e7dda/index.html","cb0a95e8e6aebf7555b8f8e8457cdae4"],["/posts/1875100e/index.html","c028e1c376f5b550591b726b4403b05c"],["/posts/18eaef7d/index.html","a6e6ae11605a988ce38e97d2752bc33c"],["/posts/1a0bc7b7/index.html","7f1e050d23295d59dc8b6c6c816e8af5"],["/posts/1a20a057/index.html","c1a2ce356b14f67c495343997dd4a6d6"],["/posts/1a998be6/index.html","687c7fb88f09c1150db53beb02c5d6df"],["/posts/1bffbd20/index.html","8a44c10886438b4824c1b91183837da2"],["/posts/1c5a0485/index.html","247fc69e1e87c389a500564c5642776c"],["/posts/1e638f78/index.html","1d41f7cb25980d526c98428e02babe0e"],["/posts/1fb53120/index.html","3065dd5fc5823f70e65d5db685bb0a3f"],["/posts/21466e86/index.html","88ffd028bb01694a62a78d9ad5fe2d68"],["/posts/21abcf1a/index.html","30a476260d2b7278bb041f9136393131"],["/posts/21c250b1/index.html","1df58c33fff77675c85b0b9f46701aa9"],["/posts/2287cc/index.html","ca21c8c6ac1c662e8025a17783e6102e"],["/posts/236bfea3/index.html","06e167324c9659514d0fcd069cebbdb5"],["/posts/24caea6b/index.html","32a254b654439ec499d1ca6f1f1d4612"],["/posts/25d45c3d/index.html","ab8a12d1871ba1fe20de85ebb181c2ea"],["/posts/262baa9f/index.html","d52d516700973d7cdead2ad2876afe17"],["/posts/27cdc142/index.html","45c0cb2ad0ecd5519bc6c970cb1e5b69"],["/posts/2895c4bb/index.html","482a1ae75689054d8d66f2e044200899"],["/posts/28987ff3/index.html","5c6a2c87f951e0fbbb11539e565fb2f4"],["/posts/29f0df96/index.html","a4a82310c57e9f25a73aff2a27cf34a6"],["/posts/2a1d2b6f/index.html","99b39575fab289e1cc58897dc1120513"],["/posts/2a386047/index.html","f0a549cf79ab602e7388aaaefce0b2a2"],["/posts/2b770baf/index.html","f69e7466ca5ae1f447b804a3f028a30a"],["/posts/2cda4a8/index.html","fb7640b4c8e38ea471f02f05a918b20a"],["/posts/2d020832/index.html","1e0de7c22104445556d5cd2de0917973"],["/posts/2d6d3bd/index.html","d5838d77cf281209b58d505d581ba17e"],["/posts/2e0c129d/index.html","aef65447540c3a7b27e8ff01c9cbe96c"],["/posts/2e7563a0/index.html","c6518f99edf30b4be346c7c0c8ee82eb"],["/posts/2e7b8d69/index.html","858e52b2599e6cf947a07bfc66794f84"],["/posts/2f28d14b/index.html","a3a116a06131c5e132122e108398c9a7"],["/posts/2f6e1383/index.html","48c1fa595d80874f21e0d17166b0983a"],["/posts/30bfd1cf/index.html","3cdbe71b0e0c7cbca8e42c04f265e7ac"],["/posts/33235106/index.html","5e7822e9609c39ec0ab6ad25a2c116ad"],["/posts/344e951f/index.html","31d9cf9f832f7d7d7596f67d03a2984f"],["/posts/35e2bcf6/index.html","c4b682efabc7cd0be573519bb06742fc"],["/posts/365e96c5/index.html","eda43fe9423261c330a966eda1b75527"],["/posts/36e331e3/index.html","9563965169d4939e4694faf1cf8ad552"],["/posts/372df90a/index.html","404e3d802cc64246ac3d6d2fe3477e2a"],["/posts/37c547df/index.html","997203863a6d911b3c6f84796c221e90"],["/posts/38a88481/index.html","b0c52c7c595ee507503bf867fe40fba5"],["/posts/3914bfed/index.html","ee1065c123d28d3737d45d9bc3269164"],["/posts/3b56780c/index.html","2e1da2d230dcf53c5ae6ed37d54563d6"],["/posts/3e4bb613/index.html","ada05bc7a7c96ffc47ba072140bc1e1d"],["/posts/3f2e933/index.html","2713d104428cfe3ca242d9708dea619c"],["/posts/3f6e5f9e/index.html","e544dd67b6ef684738afc0087caf77e8"],["/posts/4349a589/index.html","f833b2aba749c93eebb553e62983fbb6"],["/posts/44246190/index.html","255ee9d1face8b85fa93aa772d774f3b"],["/posts/456550f/index.html","dea4857b1604c1a6bacebd0e72ed31ef"],["/posts/470ac03d/index.html","fabe6e78e4f5482cb2c0a804ce8f0225"],["/posts/49249ac9/index.html","da1945601ac9ebce336c8c740aa88702"],["/posts/49f2d2a/index.html","15025ab167bae8016bdd26ce1d58a50a"],["/posts/4e6d4eb4/index.html","37da079b82f312c7479b4bc23c7b1b17"],["/posts/50caf1d4/index.html","a342e566354fdb938fa33cd7996364e2"],["/posts/51139400/index.html","1568e89143d2faf6a5579d2bb3297510"],["/posts/512c9a09/index.html","f5097d893b10e0a77f8d921d588896de"],["/posts/5205b330/index.html","f755a1d4bd12c37cdd2f4af581f034c5"],["/posts/52d36cab/index.html","62281afa232d2a57b4b364cc350acbdf"],["/posts/532a083a/index.html","504679729ca2752f6ca9411ecc8f3ec4"],["/posts/537d2c2a/index.html","4e84906b64d065db85614af765686b87"],["/posts/54383ba0/index.html","5f207b2ad2da031763609e1a9564ec6c"],["/posts/54667693/index.html","6a93fca34dfc54e353c7fa3c1d0f0dd8"],["/posts/5508212c/index.html","a36b76133c159b7e5cfad08e423dc7e2"],["/posts/571564e5/index.html","44327152cf5da5b50ca7f75ccc252c10"],["/posts/57900fe5/index.html","327e5bfeca193235b44dc0d177b4ade3"],["/posts/589a214a/index.html","5cb1677b5f18c77b8723e798c2f7c34a"],["/posts/599a2b19/index.html","839010e89b4c04d97c9550618727e4f9"],["/posts/59c05382/index.html","85503b12d5c52dd39a93468c2d39950c"],["/posts/5a5294c8/index.html","c8c22555432cb9f10868e6b95cad0409"],["/posts/5b8c69d5/index.html","5807676ebaca123bec14c83f2929ac05"],["/posts/5d3da28e/index.html","66712c3769b7079c9b7f62b03e09eca6"],["/posts/5d3f50d1/index.html","ce161d03c91786452d721d3a822dd63c"],["/posts/5ef7ef00/index.html","ad4e18ce9958760150d2063f7da3df98"],["/posts/60b5dd06/index.html","81b29269f3695dcdb51cd534b08e3873"],["/posts/61477045/index.html","9b31b67f3e430639c0731c5b5f2ac02d"],["/posts/69d79f93/index.html","daabcc55a9339de63db486782103f949"],["/posts/6b2f046/index.html","86b38c824e412daa788c97655de41f0c"],["/posts/6b4610c4/index.html","49c8bf54e221d844e22c7607b4ebe4e7"],["/posts/6bbf03f0/index.html","0eb41c63a7aacd4075f77d8a66a81ef6"],["/posts/7000d139/index.html","8da1be1e9977ec7048c57ed3680d825d"],["/posts/72f94093/index.html","2a4c760020be16075534097ea55dbbce"],["/posts/7380b71/index.html","e5fa18d87f18674b139717491d24f4ca"],["/posts/738eee3b/index.html","7b65c169dabdac1112ae744d23f73b95"],["/posts/73981dbc/index.html","cfcc8a86f05edfaca2dd5a261eb4d292"],["/posts/74d60fd9/index.html","4d7e48f09305f308c9edd71383eb8df1"],["/posts/74f5d9a5/index.html","b6d19c9624813de5c17291027f02e7c6"],["/posts/750f2ce3/index.html","89ad2a69d6d263b9f185b61d6911ecb2"],["/posts/75ceb627/index.html","b06270e387291ab8dd748fc840ab33f2"],["/posts/7725b75a/index.html","2316566008db1e9a7a9ea729ba509afe"],["/posts/79ef335/index.html","3b4b55916b52b28d4efc8035c10681be"],["/posts/7bbd3149/index.html","a0442fb7ef2cf3dc7cef649d2b92ca0b"],["/posts/7c20e8d5/index.html","df06c8c6eb2c10a17b007f6a7b1f8af3"],["/posts/7d3ea75e/index.html","e07778a21945e6b27ae56c754c7c2bbf"],["/posts/7d43958e/index.html","f837ff6787626148079933ffc9d74ee9"],["/posts/807ac7f2/index.html","48e7abb131e51a8a1c287603edc3c04a"],["/posts/81738fa0/index.html","4de6f3bea5ad4b06314a4d404eb95050"],["/posts/817c41b4/index.html","5936448f52e5d67b67be2268fb568929"],["/posts/84ee8e34/index.html","ca4681a289ed19a21c93adb15fd52606"],["/posts/86f3f130/index.html","e44b9e798e564d9776658af1895e5e41"],["/posts/8837602f/index.html","98ec5c50a7ede3f51935916df0acd0ee"],["/posts/89589a03/index.html","90d3a3829edef765cb1bac0d3513ec04"],["/posts/8bcef008/index.html","af762846aea036ee97ebdf6e0277f0ad"],["/posts/8bf9abeb/index.html","4a7a9a7f60643742a9b74dc62c67ee7f"],["/posts/8e5f5686/index.html","62cd50659bfe3f0024855545d9c9f498"],["/posts/8fa6b8c7/index.html","2ea958ab7e43e7ae15c426bfe548024d"],["/posts/9029a3de/index.html","4a8b1a57251f8eedcef32471963480bf"],["/posts/909d9a5d/index.html","632b67a7736bcbf2d3004760b2dc8770"],["/posts/91404b94/index.html","4272bccfdb97a85a266221fec5f0666e"],["/posts/932e3747/index.html","40fa6a9c9af8df98b2b9fcb838a9fe72"],["/posts/98e67280/index.html","eb6b21c4df0fae65b97bd9ecbece53d8"],["/posts/9a4d13ef/index.html","effe8600e7ead19eff21da700403cc27"],["/posts/9afbb889/index.html","86b3b9df373090767b9f9fb515831a0d"],["/posts/9be63ba/index.html","4f96718a15e809d57f38b72a82607625"],["/posts/9d967c90/index.html","4b865be3e7ce7427c4d31c063dbb252e"],["/posts/9eadcdf6/index.html","36276a6b3bc9ebd31177593a50ce6000"],["/posts/9f97db8f/index.html","ef4a56b2c3a5beb185b4aaf2da5de581"],["/posts/9ffb4388/index.html","b31d6f69515c86d9b671fb3408608c71"],["/posts/a094d027/index.html","aa465f177dbf5a90a459b5fe6dc3cd78"],["/posts/a27042c6/index.html","d7db54ac378c4bf74211b24d3c83a328"],["/posts/a29cc732/index.html","3aa450c149d80ae7ce6434f266fc1478"],["/posts/a44a518/index.html","bb12849ea172160a02947721719335aa"],["/posts/a4f2a748/index.html","6b5e1fafec39be92c7b054c0697d9a2a"],["/posts/a7dc32c9/index.html","98349fe0ec9a7e20c67db7bf51c67ef6"],["/posts/a7f753ec/index.html","60fdb5490fb3968e44fb7941b8e5e881"],["/posts/ab176793/index.html","70f39524178edf5ebefd3b5aa96d6912"],["/posts/ab34095a/index.html","d22da38797ad67e2b853308a179e6424"],["/posts/ad47c4a5/index.html","f7679e1c8f5f611475cd313f1e286839"],["/posts/adb93761/index.html","01dc688684c4ab7d39bc1744a0477e12"],["/posts/ae8f7b74/index.html","a5600f3117c00b95d963d1ab3eb5e91a"],["/posts/af9e049c/index.html","d4d7de313992cca3ef236c8feb579d37"],["/posts/b0f1a367/index.html","4ca1c8cd31831d7d508f4052b0464a12"],["/posts/b0f98e2c/index.html","4ef843fd53a5a6274a20f75b271bcadf"],["/posts/b33131fd/index.html","0da83d53bd89a4f42c0b8ae0ac51bc36"],["/posts/b36eb520/index.html","c98870dbdfa0b0fb6f18027fa06d4add"],["/posts/b542fc02/index.html","6c542ffba13dccd8a44a82af2f432cc2"],["/posts/b54eeeb4/index.html","9ca04199c1531001479710dd1671ddd1"],["/posts/b84f3f3c/index.html","b1da255a4e7c122af092c1e50f9b374c"],["/posts/b94fc207/index.html","5d5a6151b2b514bc35b4fbc92f1abc35"],["/posts/b981a6b4/index.html","d9842fb0e1ea999014d3bf637dc85efb"],["/posts/bcea326a/index.html","7c2226c5f961551d175daead92f03176"],["/posts/beb19e80/index.html","04fb79b26748aacd1ba73f733b2367e3"],["/posts/bec490f8/index.html","d590b850798dd007dd91320b2f96b8e4"],["/posts/bf7bde0e/index.html","b90492d72d1fcfcd7ef0fdef00ec112e"],["/posts/c03f17c9/index.html","c6a3d28a8ebc1c1373ff340e3b0f8de8"],["/posts/c35bc572/index.html","dc51e074d256e8894738b40c98494425"],["/posts/c436016b/index.html","75868f6283f68efc2f8357ae6faf31e2"],["/posts/c4efc741/index.html","68f43f26b5f1750f31fb757125d58212"],["/posts/c5e8a08e/index.html","7519ad2933258559af8623db9201bfdf"],["/posts/c7db1dc0/index.html","7c177970af75ad910daa0a244e5f893a"],["/posts/c7febeba/index.html","2cef4914dfb0c8a2f406e4a9a75f4044"],["/posts/c9c3a06e/index.html","7d8325428817a7384a67220954970f84"],["/posts/cc6d2cf2/index.html","a186586c4fa5b58f337ae589662f782b"],["/posts/ce48f291/index.html","d129de0b4abc0d872c36d61ea52c43da"],["/posts/cf480faa/index.html","c716bc2944441a7e63c1bc68e9ed2320"],["/posts/d090b4d/index.html","51d3f671b461329cea010d500a320db6"],["/posts/d1995044/index.html","22c49ea02d41c846651e581cddcb713a"],["/posts/d2d34977/index.html","c93b793fe1dfb8b5b7af2f6fb4fc9702"],["/posts/d3647a92/index.html","61051b61f212a3e2f3db01bf3bf66554"],["/posts/d3f6b818/index.html","c174f5aef77461df0411c9bb24dd64e0"],["/posts/d465029c/index.html","a277c453fd93c7ba982281dc21f82aa7"],["/posts/d9884be2/index.html","7249f91a0b38ba50c73d10e305e93427"],["/posts/da40f433/index.html","74ac916ef30d88b76492f1b2edfc5698"],["/posts/dae71d5f/index.html","cccc6873b170a94673a1b960f313ad79"],["/posts/db9fbe47/index.html","5488271615259e16f4515aeaff69709d"],["/posts/dbba997d/index.html","2b618997a0c9c345a1da5351cf2e22b6"],["/posts/dc94f8a1/index.html","5086f28cd95438d6a94ad323c1c6aa61"],["/posts/dfe9b67/index.html","d61e188d3e15ee5e0e19cdf06325f7ef"],["/posts/e0387d80/index.html","768612fb7053027d55c27d9245af543d"],["/posts/e356f7b3/index.html","c419a594c90333f939a7010d20e69c18"],["/posts/e3acb366/index.html","2afb16acacbd865343783f007697d19e"],["/posts/e450354f/index.html","e17a9c3c307991f47551d567f6e6775d"],["/posts/e489223c/index.html","33393c4dc71cca6d7a41f22598e46bb4"],["/posts/ea914c06/index.html","d461a2616ba9969366da822292093765"],["/posts/eaa8f31e/index.html","2a1e58485be7ddbeb366173b73f5a769"],["/posts/eac19412/index.html","d0c624487d198490c162c46c6d9d4d5f"],["/posts/edfc881f/index.html","6fdf54f8b4df03824862f2397ceff546"],["/posts/eec0bbd1/index.html","157f0a97b270c1f6c514b2d6ae4e558f"],["/posts/ef22c7c2/index.html","2c2223ce1c411f27fd1299c0641b3c40"],["/posts/ef271825/index.html","f5498e1490d806043cdd8c719e828ea6"],["/posts/f209578c/index.html","b60f6c7923bd9fb47aff8559ca2dc268"],["/posts/f3e9bea2/index.html","47592ef30f488227d926680661f1b9e1"],["/posts/f67b7122/index.html","d2a953ac15d07538789cf95a1dbbb5f6"],["/posts/f7abba28/index.html","c26467f178b612b47a265c2a0892dcca"],["/posts/faffd764/index.html","fae65fdaf600947d3a45cf81bdedc898"],["/posts/fb684fb0/index.html","4eb4adb60f31c38161be80bd17fb2487"],["/posts/fc57199f/index.html","2167a4d5b365d6892d6e6e754f9d04f0"],["/posts/fc6e9a7d/index.html","cfdb162f6fbcaca37cd71b22c7f8c3f3"],["/posts/fc7bc02a/index.html","552e7827c74c15d29964e2975c7d3db8"],["/posts/fd67c5cb/index.html","31e168d3c9c57e6fd476e2e80561578d"],["/posts/fdde061e/index.html","74ca66f24ada8730b22b40495fed745d"],["/tags/HTTP/index.html","5c65db5b6cc64fbd401108161bcd2a3b"],["/tags/Hexo/index.html","24dab88da1fcb468ce85f4a63a9e7aca"],["/tags/Hexo常用命令/index.html","a8426cf80594d262db89ad49f5ee9076"],["/tags/Nodejs博客系统/index.html","380a564f56da5d1046dbabe979b02b44"],["/tags/ajax/index.html","d7ce927daacaadf39ac132e508bb75ed"],["/tags/ajax/page/2/index.html","a0830d3e6418cbb815c49cc986086172"],["/tags/curl/index.html","9ddf5c10a9ce60112a32ca5c1108ad0e"],["/tags/index.html","01ad7c6a4d1b7cdf29004842cb32f7e2"],["/tags/json/index.html","327aa6571d008ebfc6654fca4a801a33"],["/tags/mongodb/index.html","0b6799756c61d2c69cf0fc68ee6f6acd"],["/tags/nodejs/index.html","2d63e5bcc5efce3a6b04b0c8f4779a58"],["/tags/promise/index.html","99662ad448bdf4504cf4e93acdb222bb"],["/tags/中国近代史纲要/index.html","d7e15b1a94951428f6b8f703d21c158c"],["/tags/日语/index.html","d6d56bc52e99e5ca8f9c65fc745b6c6c"],["/tags/标签外挂/index.html","571fb9f89c0c67701892cc056f23767a"],["/tags/目录索引/index.html","479e2e478432acf23f3839b8541777d6"],["/tags/管理经济学/index.html","d9f7281338b7486eeb07cd7bbffc6f75"],["/tags/考前突击/index.html","8227f96df224eb6853d20a42c2352d88"],["/tags/考前突击/page/2/index.html","72616ee75268c6bdcb17dc6b39276b1e"],["/tags/自考/index.html","fe114f50adc14988a38dc6d7e8c7e724"],["/tags/计算机网络原理/index.html","f50fe6cd9a5e47c0ff93367e89d19cb7"],["/tags/运筹学/index.html","383195b3dba51ac69c94944ea8d10445"],["/tags/马克思主义/index.html","b408fba6bca6438c3f78df4d534a67c1"]];
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




