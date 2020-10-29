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

var precacheConfig = [["/404.html","afd98f1e42771dc62e1b54c21714a54a"],["/about/index.html","98618e08490881e909fc5eaef25c5058"],["/aplayers/index.html","6c4d108814da05362adc2d0d9e97ee87"],["/archives/2020/02/index.html","9ce58a05cdde1ea169844b97fa91a38d"],["/archives/2020/02/page/2/index.html","736f60f1238b8e6bbcfe188c1a4758fb"],["/archives/2020/02/page/3/index.html","bafd749a586f2959fcb50416cd556969"],["/archives/2020/02/page/4/index.html","7740e56dde1422ab925e40bb8516a542"],["/archives/2020/03/index.html","21233e45429138b6d6b84cdd3ddea698"],["/archives/2020/03/page/2/index.html","68d6d803c9ccd261b49c33029b029a11"],["/archives/2020/03/page/3/index.html","d4982ba7f815d867e463a2e1999b0ac6"],["/archives/2020/03/page/4/index.html","8392560ef3de73b46050b86be6462678"],["/archives/2020/03/page/5/index.html","ee8c8c0c342f8464bccdc86a3abb7eb7"],["/archives/2020/03/page/6/index.html","a8676f2e553c8e59b7881d65045b7e40"],["/archives/2020/03/page/7/index.html","439545f099234f8b992ee3cbcdbee2bb"],["/archives/2020/03/page/8/index.html","6deea968b930e73a9e0784b0b78f2c3a"],["/archives/2020/04/index.html","9180256efa5e40d16951237331de2ec5"],["/archives/2020/04/page/2/index.html","9f21eed46d8175cc99e6308afd3b485b"],["/archives/2020/04/page/3/index.html","659159339d984619c0b6d3798b07bc92"],["/archives/2020/04/page/4/index.html","e231db10a38cac69ae000c2004de3cf5"],["/archives/2020/05/index.html","38e944268f30b48548279d4fa887c1bb"],["/archives/2020/07/index.html","ec118453bf671b6e8e65c134385bbfbd"],["/archives/2020/07/page/2/index.html","35fd63eb5b839062b89993ee8272d8bc"],["/archives/2020/08/index.html","a9ed426a807624e511de54e4ba6537dc"],["/archives/2020/08/page/2/index.html","41d27532b4bf7014473ba57f77b04938"],["/archives/2020/09/index.html","43c346bc4657eb1f23464510e599e4ca"],["/archives/2020/09/page/2/index.html","664220f7224089b898522b0153e452e6"],["/archives/2020/09/page/3/index.html","0bfa4e3cdfb0cc2cc594aaf25eb998a7"],["/archives/2020/10/index.html","2172db636246eef35b7b325b7ed3df73"],["/archives/2020/10/page/2/index.html","c119d0c0737b3d2f0546545b23514a99"],["/archives/2020/index.html","ddfe435edcd2254c170563da0d3227e1"],["/archives/2020/page/10/index.html","5359b8a3b43f24f8b2c31e1873bea0c9"],["/archives/2020/page/11/index.html","a1c156ddd239f8aa62077c7ebbde759b"],["/archives/2020/page/12/index.html","24311bf25b9ea0fd8669219158549cf9"],["/archives/2020/page/13/index.html","efa4287af39f8dc6e77df027a6f6437b"],["/archives/2020/page/14/index.html","09bb49127695544801bf58102267f3e8"],["/archives/2020/page/15/index.html","f4d6baea51880d7f101ba03968e865c2"],["/archives/2020/page/16/index.html","bb10f538d2f645b3d60e22ccb488b566"],["/archives/2020/page/17/index.html","b8b46c8e6b629f7aff7d6b5790277f8d"],["/archives/2020/page/18/index.html","9c82fe612abbaf33e87e5332fbec3b3c"],["/archives/2020/page/19/index.html","141f05aede43e8a7ef98a01b9ba9fe69"],["/archives/2020/page/2/index.html","4f9a3e20fbf974456e54c685faa3259a"],["/archives/2020/page/20/index.html","7485b995bb28ce21c6040a23812c3049"],["/archives/2020/page/21/index.html","bee7c96269af6574e0d11d3fc3eb47ae"],["/archives/2020/page/22/index.html","1f2b3448fbf43b58fc53023b20e6a4a6"],["/archives/2020/page/3/index.html","db4255063920dc446b56f1a8364c2414"],["/archives/2020/page/4/index.html","814c0224b042b615fbbbd31963192a4e"],["/archives/2020/page/5/index.html","9b50221c2ae6cd5a4823c01560f0ab49"],["/archives/2020/page/6/index.html","385b68cbf9f2901ec85aee5a107ae89b"],["/archives/2020/page/7/index.html","d4859ba6ad2a91279d633be2edcdb477"],["/archives/2020/page/8/index.html","c46c38ef3ba97fbb61bfa3ff499fcb5b"],["/archives/2020/page/9/index.html","f1206b94b1de0f8ea1e4e072b2ebe68f"],["/archives/index.html","2af1d5d05a2272c4b6f92217cbe8858e"],["/archives/page/10/index.html","2442b7663f3b9ad66a2999679b6cb1eb"],["/archives/page/11/index.html","4d891b4a3e800e3342f910fd7d5ce704"],["/archives/page/12/index.html","59d2c2ea4303100218e79af2453a96db"],["/archives/page/13/index.html","47cbd826ff8b3f7c633359270d890941"],["/archives/page/14/index.html","24aa5ea266d0e1b1553e4d6935b77932"],["/archives/page/15/index.html","fd8a20def10ea55b3fdf14b202b288fb"],["/archives/page/16/index.html","05b7c8b3e8a8ae8d5a2e678f5edfd836"],["/archives/page/17/index.html","d6312bd6efda738c83926199c89176cd"],["/archives/page/18/index.html","770e98b4a88f4979e6efd1d11dd67902"],["/archives/page/19/index.html","fb9b72b13a64429c1262404a6df7fe44"],["/archives/page/2/index.html","ff060e4edbea7350e992e15b29c59399"],["/archives/page/20/index.html","827ed2eab9dd1632f4e752cacb9d8af3"],["/archives/page/21/index.html","76faa6abbc1af6f884731b5c74235080"],["/archives/page/22/index.html","13d74022976920a7c0f6ae68f43f03c2"],["/archives/page/3/index.html","7112f9ad28b564c25a37980619a8c0a1"],["/archives/page/4/index.html","035ce5520b31c52a85ff48b6a1abc7d1"],["/archives/page/5/index.html","69c181504b233c92610365c555cedf5e"],["/archives/page/6/index.html","09dae63bf922226831e25bac37b74c60"],["/archives/page/7/index.html","3f1a1beaeb42e0a20d6a135c17522d49"],["/archives/page/8/index.html","bdfb94d7dd4e348ac7b8b83e83c4ac7d"],["/archives/page/9/index.html","55c1f9860458709903484eea4cea3f71"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","9bf99342c8f37d15592568b580bd2a04"],["/categories/Ajax/index.html","429154bff67f73bd1e6dc59a6031164c"],["/categories/Ajax/page/2/index.html","0f5af049826e0318769606450c8072d1"],["/categories/ES6/index.html","a72edeb61481e5d10a758f70540bdffe"],["/categories/ES6/page/2/index.html","34ba5b172b89fb9c748265ae8da8606b"],["/categories/FL/index.html","656d2ecd4a383db5fff00508f264eebc"],["/categories/HTTP/index.html","5c49567a948aac74b46e9c1ab6813285"],["/categories/Hexo/index.html","0268ef77b927b2b35e4546d673714ac2"],["/categories/Hexo/标签外挂/index.html","5223f8920966051b3ff95c5a7a783de2"],["/categories/Hexo常用命令/index.html","9c74f08ef016545d4b3b095fdad783cd"],["/categories/JSON/index.html","16e356ce4bf5afcf75c951067d9ad80b"],["/categories/MongoDB/index.html","43d01cb76bb469a85232979abf911763"],["/categories/Nodejs/index.html","4465cc01450bc163191359e0294d1160"],["/categories/Nodejs博客实战/index.html","7f78cb9ae180ddde1da09ef07345b42a"],["/categories/index.html","46eaaf70c326e56a16f618ce9c3170ed"],["/categories/promise/index.html","864525699a38494e31146ab5a14e24d0"],["/categories/日语/index.html","2abd4a1fc2fb067e33114a297e9b40dc"],["/categories/自学考试/index.html","17652c4e9aaba414bd6b228b26337c04"],["/categories/自学考试/page/2/index.html","8a576ad75b5b31f7d06a0b3cd13de949"],["/categories/自学考试/中国近代史纲要/index.html","5e75fc172a97793774189d103f68d5b8"],["/categories/自学考试/管理经济学/index.html","875fedbaaec79aa7fc571645c7b9bbd8"],["/categories/自学考试/考前突击/index.html","4c1e7c0726afa6d9370163217a1e4d6f"],["/categories/自学考试/考前突击/page/2/index.html","b0c533c87ee7b03129ab3c2ea5a6c291"],["/categories/自学考试/计算机网络原理/index.html","62f67c6544084bb7dc1ed770b26b3504"],["/categories/自学考试/运筹学/index.html","9fb6a262b32d0033f083527426d4de4c"],["/categories/自学考试/马克思主义/index.html","33e29254a86aabc1d100b2a7a53db3c6"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","ebde199eb996c95812f80655aa973908"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","9933c4b96da57d76b5bffb165f605290"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","0d25d21ef43b5a8bef0fc6733d8fcfa9"],["/page/3/index.html","3f65690c4b24dda0684529e36ab87f89"],["/page/4/index.html","c28d94928ae6d944b2e16b55d2d8adb6"],["/page/5/index.html","09deb968c62b4a376d4ecdc0b292a95a"],["/page/6/index.html","9bc220038de3b5df9aa7c88958ad2e84"],["/page/7/index.html","69192a8cbc84631289e06374ce160385"],["/page/8/index.html","fceefa3f07527a176e5cfc8f5fe0ce5b"],["/posts/10812f0/index.html","8f0e0a49a5cdec8af6b12c2058ced122"],["/posts/126b275/index.html","8bc07fe097e826aeb46da35ecd9ce647"],["/posts/12d95a5e/index.html","77635d1316dd67e1aac9072386f346aa"],["/posts/1367417b/index.html","88faf8d3882f121d925a0f0918bdd883"],["/posts/13886e3f/index.html","408ecfa85ce9ba3e6e955d78ecc0fd6f"],["/posts/145193a5/index.html","ae012a9608eda733a8a9c1827d344522"],["/posts/149dde25/index.html","a4ca7845295070868fe8d65eb137d66a"],["/posts/152fa65b/index.html","db7e0c1d1810922e3839d46a34a1b63f"],["/posts/169e7dda/index.html","689d17a7bb0a7f8faa566e9de5833670"],["/posts/1875100e/index.html","3549910a7703f1db4ca53bfd7de37753"],["/posts/18eaef7d/index.html","e99a96a3aed6c851f3898ff6e73283c4"],["/posts/1a0bc7b7/index.html","b2d05a3b0d49830802d16c1b8b089a52"],["/posts/1a20a057/index.html","dcabff6cd46375e0e2de48dfb9354092"],["/posts/1a998be6/index.html","926c383a467469635a5b7daf40f8deeb"],["/posts/1bffbd20/index.html","e4d428894759e13c4514b745227ce691"],["/posts/1c5a0485/index.html","59ff9e9c8a9f1ab34336a6395aacd990"],["/posts/1e638f78/index.html","19e427cb46f912103325843f1416ead6"],["/posts/1e967920/index.html","e1f1dd92f8ced7e565ac17a0447b8c7f"],["/posts/1fb53120/index.html","08331d871753830eb158c4b3000d8a40"],["/posts/21466e86/index.html","f1b1f828be9759f3a02d20a01b24a1c4"],["/posts/21abcf1a/index.html","a22c126235a2c0e2919a43e2addb94a0"],["/posts/21c250b1/index.html","495c0fe80fb682349b192a1c2f5797a0"],["/posts/2287cc/index.html","c19fc3c30f784074478ef9412506dd09"],["/posts/236bfea3/index.html","2c0c2faa6cb3b4b0b7f95f5251744bf1"],["/posts/24caea6b/index.html","829f09a381f5c44d2f60a918e8070211"],["/posts/25d45c3d/index.html","5adf607b822f984b442ad41b66800b75"],["/posts/262baa9f/index.html","1d0a9b6073bd06745a35f876b1d6b080"],["/posts/26f82f65/index.html","259189ecd36fae5c03f7f1b2566a89d0"],["/posts/27cdc142/index.html","110f4ca76b2e3cd393927973aaa5edc6"],["/posts/2895c4bb/index.html","34705ed8636255ca42de3ed831ba7dc7"],["/posts/28987ff3/index.html","b11ad85a134be3e9df55e91bd945b87a"],["/posts/298cfeed/index.html","3da2ab725b5067a3ea81f7c36ee3f919"],["/posts/29f0df96/index.html","2a4bfc45957012255cd2ac5140d403bf"],["/posts/2a1d2b6f/index.html","4835292e169629cda41da58cd25354bb"],["/posts/2a386047/index.html","d28a4e7318f66b65f612dba83279e57f"],["/posts/2b2f44ba/index.html","2f147ac36debdb7561226233adc75d64"],["/posts/2b770baf/index.html","1c501485d61e91cdfec58a3877f8e56d"],["/posts/2cda4a8/index.html","4b88e557c3f3a79e742f85155e1f4ba4"],["/posts/2d020832/index.html","ddad6f8033779e15ecfe839482f79a07"],["/posts/2d6d3bd/index.html","96146353be9aea2aa2eea1ca9a153150"],["/posts/2e0c129d/index.html","05809f2dbf325c21fe56ea3173c07c12"],["/posts/2e7563a0/index.html","e4679ed38dc3c5271722165f159bfcd9"],["/posts/2e7b8d69/index.html","412539f36486256a8ee79f5d92fd3075"],["/posts/2f28d14b/index.html","8ff01fb367a41b2d6877002ccf30f5f8"],["/posts/2f6e1383/index.html","7a8939e6f1aceed5cd297f9d160d5712"],["/posts/30bfd1cf/index.html","dff7c60490c0a4c5813ddebcf9e464dd"],["/posts/33235106/index.html","1800b209ef1339116f9368ebdddf28ad"],["/posts/344e951f/index.html","bfd2d00dabd2683fff1ef2b555b3873d"],["/posts/35e2bcf6/index.html","0e61a5e0d28a4c9040aa9b14d15abe80"],["/posts/365e96c5/index.html","319fdd3726170f18981a329fd807c8ac"],["/posts/36e331e3/index.html","f161d7cb8610bce47e44ec7d5e0569e0"],["/posts/372df90a/index.html","0dac7ba6d3971ea73b125756fc3a6ae1"],["/posts/37c547df/index.html","62e1e4562db7200e7de1ab9fb23719b0"],["/posts/380dfa6c/index.html","cc8d8a4c6c0a22b5aaae1b755d5be619"],["/posts/3859c98f/index.html","6cef89aa0fa7e91ef132ba13cd4e63d1"],["/posts/38a88481/index.html","9db2c58524aa3f1d6fa0dc231019ad86"],["/posts/3914bfed/index.html","abeea93f744f6f84f261111403579e2c"],["/posts/3b56780c/index.html","a94971dc81a8e9d08aa035a6ef6cf00e"],["/posts/3d1ef1fa/index.html","ebc5c057f3ea841fe6cf2da799b5d715"],["/posts/3e4bb613/index.html","6e05fd3de21d286dbdd369190ea1a8a3"],["/posts/3f2e933/index.html","22c29fc4a0e0cd2f809ccabbcd26e5da"],["/posts/3f6e5f9e/index.html","6db6a04f8487d14b40eee8549145a665"],["/posts/4349a589/index.html","e6e230f4545cb6d821128baf719325cc"],["/posts/44246190/index.html","e8a819d53935e91199d1f5c4b1a7146d"],["/posts/456550f/index.html","6449bf1165521de9632edcff175403db"],["/posts/470ac03d/index.html","afbceea1caec7433c0d32b53ef368088"],["/posts/470d45ef/index.html","6f94d49a940644519dca0feaae6687ce"],["/posts/49249ac9/index.html","7d167267575e696697be700ad00f4d2f"],["/posts/49f2d2a/index.html","b98a7fc9f14c98eaaae8722538bec874"],["/posts/4e6d4eb4/index.html","118d24dbdf2810f34a8c6ef6199a1cee"],["/posts/4f346c5/index.html","286029bfe687c29f50e083bdeaad80dd"],["/posts/50caf1d4/index.html","54987f5620cd3947169502ddec51b335"],["/posts/51139400/index.html","ed15e357e360ce7ad2d62dfe8f3f653c"],["/posts/512c9a09/index.html","de828d91818a6f3a9336f7fc092e7c33"],["/posts/5205b330/index.html","decc25ffb16bcc1140d5f6beac05a872"],["/posts/52d36cab/index.html","7de2df7c3e0a7bd3f31cb5e9d6020bfe"],["/posts/532a083a/index.html","17a364d28c3221cdee10db74139816d7"],["/posts/537d2c2a/index.html","25830a32d0e0120761212c28716a113a"],["/posts/54383ba0/index.html","897467f0cd262cca9bbca4d2c477d7af"],["/posts/54667693/index.html","1d7b39726cdf793a8f8dd2f800d26be6"],["/posts/5508212c/index.html","0964f3775158f8e43d0bd789163870da"],["/posts/571564e5/index.html","01a405b0f8e1fd0fec2a99a0bd5af810"],["/posts/57900fe5/index.html","922a1cb31eee83ccf05b4fbc5fddb410"],["/posts/589a214a/index.html","9015af642d309b7d9ef25f312cf4139c"],["/posts/599a2b19/index.html","022d87761a6fb98af7acf2c5f698c972"],["/posts/59c05382/index.html","a4612df342565fd4e613bc407657a796"],["/posts/5a5294c8/index.html","b8515765761aa54db1ab16b3cb3f5ae1"],["/posts/5d3da28e/index.html","d5a4e07b8ae1c1ff666b1ec6eb64c05c"],["/posts/5d3f50d1/index.html","2127d4ec87194482b7791b06462b609d"],["/posts/5ef7ef00/index.html","fb3179a4661b091a81cf48b98a234cea"],["/posts/5f1fa8df/index.html","20a32ef909be5ea01af61ae5a76a5b12"],["/posts/60b5dd06/index.html","ae2888f1da530b7f50cb020b3062a8bb"],["/posts/61477045/index.html","e86f3de88d8c6133ef70205e6f98dd64"],["/posts/69d79f93/index.html","13bba4d587c606c2ff83cc2e10b44cbf"],["/posts/6b2f046/index.html","72ede9696fbe2625b1aff71ccb91c5f1"],["/posts/6b4610c4/index.html","331831f61834139bf46e31a0d1763f26"],["/posts/6bbf03f0/index.html","ef52134b3217889d7c6e9b9b9bccd7c5"],["/posts/7000d139/index.html","cbb3534e6149f05d08e2cb0a1848988f"],["/posts/72f94093/index.html","d381eeeba131ae5b06dfd35f6401d463"],["/posts/7380b71/index.html","8c79f2f330821f898f98b27d8f0fc965"],["/posts/738eee3b/index.html","2486e07f1c8382afb14f0318a11cac93"],["/posts/73981dbc/index.html","d59cabeabc52178783d4a291d487f1af"],["/posts/74d60fd9/index.html","d15416e1a62ced116bd9cad8ba4a6f84"],["/posts/74f5d9a5/index.html","2b37acda0ef201ddaab5788a89b16c97"],["/posts/750f2ce3/index.html","6dae5516988b985445be3ffa4efb9232"],["/posts/75ceb627/index.html","131ab18844f9f1d7db2a4986fcf988de"],["/posts/7725b75a/index.html","4e054d80637e43ce153df2dd24711bf3"],["/posts/79ef335/index.html","b97db5227de5470253dd8d31eb10293c"],["/posts/7bbd3149/index.html","30ab5f3d6dd35312e6f27f6a0ea3e2d5"],["/posts/7c20e8d5/index.html","a0901cf46a031e753e0451c1dde35d08"],["/posts/7d3ea75e/index.html","4096297fd3d68f3b7fd4e2a87c9bac24"],["/posts/7d43958e/index.html","7d328e2d32e817863d239f3d183b9f91"],["/posts/807ac7f2/index.html","027f77842a8b840a2e68a4fffa0314ba"],["/posts/81738fa0/index.html","3155795f3269e63b1d781b05fee29603"],["/posts/817c41b4/index.html","70568a526d2226916185c236e3ec64b9"],["/posts/84ee8e34/index.html","2eb7ae179c2d0aa36827adca153a308c"],["/posts/8837602f/index.html","ffdd4907bec87b59f7afcb3eb4d4ced0"],["/posts/89589a03/index.html","e0df5357a7c52186229e59cb88c5134b"],["/posts/8bcef008/index.html","d4ce7b5f8aedf2a8bfa93d27615eb20f"],["/posts/8bf9abeb/index.html","7306df7f33b5cfae3fad6a6b626b2b71"],["/posts/8e5f5686/index.html","c27d82342a137b4fe6adfb75a1f47985"],["/posts/8fa6b8c7/index.html","cb18733e15c62bb809a948348fcfc4ac"],["/posts/9029a3de/index.html","b0fbf283134eeb8497504b8972e7e878"],["/posts/909d9a5d/index.html","9553bc1d113a9909d579494992cf87cc"],["/posts/91404b94/index.html","aa1d85728b01301395d8ef0d4c1419cd"],["/posts/932e3747/index.html","16a4325cb5aaf3ddb3e497f5acc1d29b"],["/posts/95fc9e6e/index.html","24b912782c4a5bc3997bf133ee96606d"],["/posts/98e67280/index.html","8b3143969505a55afaff8b86764b9139"],["/posts/9a4d13ef/index.html","8087446665585bdac08e414aca3194fb"],["/posts/9afbb889/index.html","3e45017b6f658cc645428a938dd23b03"],["/posts/9be63ba/index.html","32cb21b440e8e05634ad79b53ed18eba"],["/posts/9d967c90/index.html","f6c62205b1bf4a50e0a455adb25f8b8b"],["/posts/9eadcdf6/index.html","6bb901b222f6127dab53dbf60aa1275e"],["/posts/9efd76a3/index.html","2ea50931ad7080eaf23f4e570bd5f8e8"],["/posts/9f97db8f/index.html","428cfe2cecaefd7c4b53a21b72d3684c"],["/posts/9ffb4388/index.html","11e0b2b48373c9adf78a1738874d0352"],["/posts/a094d027/index.html","16a39c238b9244d250509412bb5961e4"],["/posts/a27042c6/index.html","fd9926c05bce0239b822cea9483ebc32"],["/posts/a29cc732/index.html","65f5e833f18544d639ebb2f965f893c6"],["/posts/a44a518/index.html","fa05204ad8c0922e15c442272788eed9"],["/posts/a4f2a748/index.html","f5ef9960178c427d324222893b5c4b86"],["/posts/a7dc32c9/index.html","2ab41454b5235fb981c4fbc8d8aae78c"],["/posts/a7f753ec/index.html","ac7f2d0a964ffe4d173f1efc127f8372"],["/posts/a9168bc5/index.html","c1c71de5ee6e2618385203b9180f9493"],["/posts/ab176793/index.html","9507392496aa8ec6044ea2eea89ee1fc"],["/posts/ab34095a/index.html","fd0531fe8f90e798bf4f17ccf9586e82"],["/posts/ad47c4a5/index.html","af7b9348990ad9249fa20bace1e1bc30"],["/posts/ae8f7b74/index.html","140c9c0359aec87703a65a69532f53e2"],["/posts/af43816b/index.html","7a3bd80c8c113ebd4cb4d4f8ab52cfe9"],["/posts/af9e049c/index.html","17e1b9b516f1d21113552791073ebf64"],["/posts/b0f1a367/index.html","9d47ae1f3d67093a6a6383ce635a3b85"],["/posts/b0f98e2c/index.html","5271a8eabaf79fba58a203625d160ad1"],["/posts/b33131fd/index.html","c60bd9318f6a8133e554a5d0edf6b2a8"],["/posts/b36eb520/index.html","35c37c7218315eae05d40e7722594426"],["/posts/b542fc02/index.html","98caa1243dca8e78bd8f27cd166a5014"],["/posts/b54eeeb4/index.html","ee8bdbfeb542c52b62613f63130efaa0"],["/posts/b84f3f3c/index.html","6174a2d1f9406128bab94460c841fba5"],["/posts/b94fc207/index.html","e5a7ca1bf9b787826d8dd07fa1b37a6a"],["/posts/b981a6b4/index.html","5e914be10bd7187f83e96ef7943fb50a"],["/posts/bcea326a/index.html","60ce7ce2d07f70969b5996a9734c2389"],["/posts/beb19e80/index.html","b97ddd10cfc03f746e67c213a4f3783a"],["/posts/bec490f8/index.html","5195f082e85ce1464c34fc5f0c0ed716"],["/posts/bf7bde0e/index.html","3ef8b3a5fdf01a173995db13525393a1"],["/posts/c03f17c9/index.html","49c169eba96c88c770a16933f24d8bf3"],["/posts/c35bc572/index.html","5a1fdd5c2b26b8afefa57c0d39fbab9c"],["/posts/c436016b/index.html","c1b6a3a36730b0a5d19968c60d5b20f7"],["/posts/c4efc741/index.html","967296935170d588aaa87d4b9c05e764"],["/posts/c5e8a08e/index.html","1f68bc91bfea2fbb29e5cfe721fa7f14"],["/posts/c7db1dc0/index.html","35c7aecbd9af8e7686f7ffbed488c98f"],["/posts/c7febeba/index.html","e06ea9305746d69e8656c295b9205dcf"],["/posts/c9c3a06e/index.html","65a208df5a2ec270513f70f7ea1c668c"],["/posts/cc6d2cf2/index.html","c11b3c9170db3115a7dd1d85c58eed3b"],["/posts/ce48f291/index.html","397034841d8f3bc9dba9d9331556c780"],["/posts/cf480faa/index.html","c1e5260969d10078b4abfdf586ee3760"],["/posts/d090b4d/index.html","cef579608d5b28ec278d786fae56f6f2"],["/posts/d1995044/index.html","dc9e721cb2bd79ad50280eb1537192e9"],["/posts/d2d34977/index.html","b8691eff230230cc24d2885bc8c649e6"],["/posts/d3647a92/index.html","e344ea3578fb4d690dc3f745697274d2"],["/posts/d3f6b818/index.html","b5291dd076f21b62c7019ce44b3e6b68"],["/posts/d465029c/index.html","025d6a9a6c8600ad89c47d40a342bb1c"],["/posts/d9884be2/index.html","efef159af9592cf26506b0bdeb22f626"],["/posts/da40f433/index.html","53b64baf67d2145866402532716d5c6f"],["/posts/dae71d5f/index.html","ed732279c1f1159ea3a9a385c463f1e2"],["/posts/db9fbe47/index.html","9a62d161428a8a085726888b5233af74"],["/posts/dbba997d/index.html","6eb88204c05145233493fc9f1e4f31ab"],["/posts/dc94f8a1/index.html","1ffd8ade2be02e36df884431b570006e"],["/posts/dfe9b67/index.html","4096d0f68784c13c25a6dd77c9498be7"],["/posts/e0387d80/index.html","d861d5cbc3ece8c372f8c2a81894cd7a"],["/posts/e356f7b3/index.html","ed2d1d1edefa9733c2f58589bee8dd8a"],["/posts/e3acb366/index.html","316b36fe5c3e11ff4906f0fe2564b6d4"],["/posts/e450354f/index.html","d992b1b05311c3de0f63e1b06dc9cebc"],["/posts/e489223c/index.html","c2bac3279af4df40c514ba20e52ab7c0"],["/posts/e9a8ddd1/index.html","66990c420a4d9aa570729422cbb22dde"],["/posts/ea914c06/index.html","6fdc9be9e3f647ac0f48e6a873c2d3dd"],["/posts/eaa8f31e/index.html","4d95b5801e866272a3951bcc57e84151"],["/posts/eac19412/index.html","c435946792fc014db58cc6148f8ebabe"],["/posts/edfc881f/index.html","7321846e14fba678c27ef647a4d91613"],["/posts/eec0bbd1/index.html","aedde9da9dd444f324a5d39b11793e8b"],["/posts/ef22c7c2/index.html","80573da5ed7a7e5713021365b81b0a37"],["/posts/ef271825/index.html","8f70a23d7778893ca3e6b549b9bd5319"],["/posts/f209578c/index.html","eb1d7043dfebde2e4344cad9403be27a"],["/posts/f3e9bea2/index.html","1dad68adc51e8a1b6f924730db96bb69"],["/posts/f67b7122/index.html","9e1caf4cf640a9eb929a4081b1d2ecca"],["/posts/f7abba28/index.html","b464853b34161e4e1c75e5600fdc9529"],["/posts/faffd764/index.html","77df1a22e48f0d0c7de4cb44372ebf73"],["/posts/fb684fb0/index.html","569dca7f0a4a862e7182fcb828362788"],["/posts/fc57199f/index.html","8a4123572ca038f06546069558376087"],["/posts/fc6e9a7d/index.html","b9e3db82e2e48cbb7a1846ad71620d77"],["/posts/fc7bc02a/index.html","5d16c17ac209cc413fa9fb0e8e27d68e"],["/posts/fd67c5cb/index.html","fc549de277aa5033c47ffd8772a29f60"],["/posts/fdde061e/index.html","a0a7e49276dc1d67fac38e9f7f5aaa40"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","ada72953eabd08108b58079721729d92"],["/tags/ES6/page/2/index.html","76082384eec21a061824ebf09fb8de51"],["/tags/FL/index.html","3407cd0dd6e3280a82ac5f68fcbdece7"],["/tags/HTTP/index.html","4d3d1e9acab16dca97d0a34026348a2e"],["/tags/Hexo/index.html","eb58db5a781d55020de412cb939b115f"],["/tags/Hexo常用命令/index.html","1bde64ed5814f16d3561557e0a96c99e"],["/tags/Nodejs博客实战/index.html","a98d604483aab7790bbbba5c7b6ea114"],["/tags/ajax/index.html","a9cab38158bcf6db44361c1fdebeab70"],["/tags/ajax/page/2/index.html","d391ef4c016071c0e794c88a79fd3115"],["/tags/curl/index.html","12402392f20a93a1252c1a07345363a9"],["/tags/index.html","e0e4eede1def5e04d94e0b6cc28bbc56"],["/tags/json/index.html","60bdeb139540fa7220cbf20505844948"],["/tags/mongodb/index.html","c033f1e6b22e4bfb47b9de5bfd88d3e0"],["/tags/nodejs/index.html","4baf1573fbb6ff9b8d3514344339e093"],["/tags/promise/index.html","1afb7de01263de3ebd96d86d0cc8643e"],["/tags/中国近代史纲要/index.html","9b5f1aef5fb35d96781f685f3655f51a"],["/tags/日语/index.html","50bfebf3a2ae655c883b6b29217ced7a"],["/tags/标签外挂/index.html","8a24765cf9c02331a40b7aec1747a9a1"],["/tags/目录索引/index.html","3cbbcf4a286933643eb1c791c98351f8"],["/tags/管理经济学/index.html","329749b46d4353226158d8cb3d17892c"],["/tags/考前突击/index.html","cd4222ff525cfef5967d7b5e3b6d01d9"],["/tags/考前突击/page/2/index.html","3a542b88f928a28838c940268803bec9"],["/tags/自考/index.html","d1c9cacb27cdce114188670c5448e56b"],["/tags/计算机网络原理/index.html","73901436a7494b1e5b4dc1bad5ba9dbb"],["/tags/运筹学/index.html","206f96b3b856bce7da88aefc2f6e9ccb"],["/tags/马克思主义/index.html","5133ff6008381c3ceb93228b5316453d"]];
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




