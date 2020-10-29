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

var precacheConfig = [["/404.html","c6b2e2874ab04bb25912b28270075151"],["/about/index.html","1ac5e7a3158cdb4ef9699ca4554c3ef2"],["/aplayers/index.html","5636f6b965a0b602f6fcb12002b03616"],["/archives/2020/02/index.html","1734b31b6caaa4dd9117e0fb788e9fc8"],["/archives/2020/02/page/2/index.html","f819171ccafd550400bd2f91788f0e8f"],["/archives/2020/02/page/3/index.html","71e6c4e6d2e39de749d15eff4e6289ac"],["/archives/2020/02/page/4/index.html","fa61a6d1f8e344eba112a3858d5f1d7b"],["/archives/2020/03/index.html","3f0d84ae421500f8b1dd6291aff467e8"],["/archives/2020/03/page/2/index.html","b5dc4be32d3475f9982c35ca555543a7"],["/archives/2020/03/page/3/index.html","d282d9f003676ff9e59890012a35b4b6"],["/archives/2020/03/page/4/index.html","650a41e00cd8c77e6a10e09f5f579946"],["/archives/2020/03/page/5/index.html","955555b2a761a4d6a730b9594bfd5f5f"],["/archives/2020/03/page/6/index.html","31dfebe1cb74b92f59e9034d5cdbb962"],["/archives/2020/03/page/7/index.html","5e21708949a11877c601bed01a7035f6"],["/archives/2020/03/page/8/index.html","b309e06e251d74c5b850d601682801c9"],["/archives/2020/04/index.html","701f027571dae4e1cfd08cb3747a1dd6"],["/archives/2020/04/page/2/index.html","377573b438062de87459ae462844a765"],["/archives/2020/04/page/3/index.html","86430ff8ab8daedb0b5ecd2978db2178"],["/archives/2020/04/page/4/index.html","d8411860ef9e2d8772cd6441a2c36d8d"],["/archives/2020/05/index.html","aefe50142d577b06fca4c9f660b11094"],["/archives/2020/07/index.html","ce2ba63dd382fd9405e59552f1930ef5"],["/archives/2020/07/page/2/index.html","4ebb789ae00781b0bf542e7b5eed20c6"],["/archives/2020/08/index.html","6b2713b3c49e51af046301ab0419d9a1"],["/archives/2020/08/page/2/index.html","c75a7a6e69d6159aeb2b29a1c9523e1e"],["/archives/2020/09/index.html","6d628b58a7687a9c4ec8f31b8c5eaaa9"],["/archives/2020/09/page/2/index.html","6369f9ef6e4525144127b219591dfc0e"],["/archives/2020/09/page/3/index.html","d9b76e15a2ec5c8fe781c072cc82fd09"],["/archives/2020/10/index.html","3ecb6cf5e048731397e4ec4763106acc"],["/archives/2020/10/page/2/index.html","821f886636bdd10772f95b0aed1ff964"],["/archives/2020/index.html","74b5e68fca81d1889d16a07e80fd9bf9"],["/archives/2020/page/10/index.html","3111c484d8d3978ee49ec896b72845c8"],["/archives/2020/page/11/index.html","8f447ca7147120868e94d63b266f09e6"],["/archives/2020/page/12/index.html","059eab252cf227d3cad7172c36bcd639"],["/archives/2020/page/13/index.html","8c1efd2e808d7bdaf4e56fce741b019f"],["/archives/2020/page/14/index.html","ec70ec08f02be011632f9ace1f188eb4"],["/archives/2020/page/15/index.html","f492f17c5a9eb726212a7743c8580382"],["/archives/2020/page/16/index.html","f258307101745446cc7c53c3766dad01"],["/archives/2020/page/17/index.html","4795c7a12c7a05ccb00b644ff6b18629"],["/archives/2020/page/18/index.html","d5f835df42f793abb503c9b26a3f4f6f"],["/archives/2020/page/19/index.html","a91b811c3403c7bac3aa80442fc2d13e"],["/archives/2020/page/2/index.html","2aeaecfd3efccc56369842e2ab60624b"],["/archives/2020/page/20/index.html","e9ed004ae807b7be53f804dbbf0b6e21"],["/archives/2020/page/21/index.html","f1f1d5013e3987bac16d80357fd6d6b5"],["/archives/2020/page/22/index.html","11661ba03b41a416a956df346d12530c"],["/archives/2020/page/3/index.html","6897a16f1548aa0ca26d97d240572a30"],["/archives/2020/page/4/index.html","370e61b29cb6a03089d911cdedd57b86"],["/archives/2020/page/5/index.html","4736d56640b370043ca8b0c258cfb347"],["/archives/2020/page/6/index.html","ed3af782d7cfa34908cb04d8c434d613"],["/archives/2020/page/7/index.html","4b059eed8a9aeb6e4c52d43fc92730a5"],["/archives/2020/page/8/index.html","8c2803191b5d429bf1283755557f9b9a"],["/archives/2020/page/9/index.html","d5d7c44d511b9195d0bab2f6e6a57704"],["/archives/index.html","3ac7cef9cc0274dd671800686970131f"],["/archives/page/10/index.html","e31259c0967c46d730290908e204b7ec"],["/archives/page/11/index.html","4e7690026f1c901e94d66e3d9c3f929f"],["/archives/page/12/index.html","3b0564f868b3203b3fae4c890d9def7d"],["/archives/page/13/index.html","3e52446a46c74613865ff7277ed88165"],["/archives/page/14/index.html","6125ee000447a0b39fd531753c85da9f"],["/archives/page/15/index.html","860170303aae1b6fec3fbc0c0d4a0339"],["/archives/page/16/index.html","1ffb00ecb4c6eef517a2eca29e1be58c"],["/archives/page/17/index.html","0d14ee334de13cba98665b172159a374"],["/archives/page/18/index.html","9946c69fbe60133993d93016dcf05492"],["/archives/page/19/index.html","911033e36b3d9b387104f34d3dc7cbfe"],["/archives/page/2/index.html","180d1bf0e7b52f46b6566b6c02b4d4a2"],["/archives/page/20/index.html","b11e08494dacf5bc5f1baf6cc6104a50"],["/archives/page/21/index.html","8d6800207b0424dcef2a6d1e332b7f24"],["/archives/page/22/index.html","72b5c0ec9dddd2b3d02510fc2b740cf7"],["/archives/page/3/index.html","a0178d1477a8f8232ee94a0f700bff93"],["/archives/page/4/index.html","fd1ca27aff81ad101472ddd6adee6d39"],["/archives/page/5/index.html","f21d587639a27c150a7e74481e5717df"],["/archives/page/6/index.html","671254d605ebfbc0956283553f78e11b"],["/archives/page/7/index.html","1e84a0054734b0cb7174449f660edfd9"],["/archives/page/8/index.html","191e494eda548427b1e56f868cb9b691"],["/archives/page/9/index.html","71d5f52a5381489ef65e7ea8099497cd"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","599ed2e22820f6477aef248006df8e2c"],["/categories/Ajax/index.html","fa679bd90ea4e4a477c36737d4a70e05"],["/categories/Ajax/page/2/index.html","441fab40eb0e9a2ba9cf3f1981b6f3ce"],["/categories/ES6/index.html","203196332ec18710de10c60ef7aa63b3"],["/categories/ES6/page/2/index.html","b9b3ab8ec38e53ad554a6fd4d690bbd4"],["/categories/FL/index.html","e9a44a434f952945633fcf2dffe49f59"],["/categories/HTTP/index.html","67c2a05d2cc94d1724492952b1c00999"],["/categories/Hexo/index.html","670a3b1d166556212ac5b47388a488d0"],["/categories/Hexo/标签外挂/index.html","a65216eae07bf54b9b50576213d21f85"],["/categories/Hexo常用命令/index.html","bac3ff0d5df21b671bf2abad4f47bc6a"],["/categories/JSON/index.html","9d2bd315702a83bc1527d23f2441ce92"],["/categories/MongoDB/index.html","ca30fba4f58b5ce473804c39395cf5e2"],["/categories/Nodejs/index.html","6db4dc9919b06c37f25bcf66201a7581"],["/categories/Nodejs博客实战/index.html","5e3da59d6e9e3e21e7d372b6d6748b1a"],["/categories/index.html","f6083b9f92e145ae18f6220cf6b1094a"],["/categories/promise/index.html","0b365473d0ef9a8e5ef3d13db953da3f"],["/categories/日语/index.html","ed2be9e230f6b75ee23c056f1367206b"],["/categories/自学考试/index.html","b2682a924b2f7d2706c6ae60f209f8b4"],["/categories/自学考试/page/2/index.html","5ff8327ebda12b2d5edef2378c05157f"],["/categories/自学考试/中国近代史纲要/index.html","6abef3f52c8399d94cbf82c97faf1a96"],["/categories/自学考试/管理经济学/index.html","706e102c3c0eb5196076528f093daad1"],["/categories/自学考试/考前突击/index.html","5c118785f12c51f841b81e366cd0f7e6"],["/categories/自学考试/考前突击/page/2/index.html","6534758304ba4c301c2c8623870c76fa"],["/categories/自学考试/计算机网络原理/index.html","8a44e28566ff6136a86ec3af2d56b1f0"],["/categories/自学考试/运筹学/index.html","4d01df2ca1a90e38c5edd426e4d16a50"],["/categories/自学考试/马克思主义/index.html","ac44ed054ed5d997062bf1989037679f"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","a4907344ee2ab21023ed0cb1c52c28e9"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","1dcd49acb7269df564fe5e83eac70b0c"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","5cb5f27f9071927dd2e3337ebf230539"],["/page/3/index.html","021256c68f6c6b8272c9de8c098c29c3"],["/page/4/index.html","dd3caa57082612b80bc48fd069b946a8"],["/page/5/index.html","b60ec9b804926c4f605d8aaf989fda71"],["/page/6/index.html","ef7ef2e6701e10c38276f33683dcd684"],["/page/7/index.html","274c5f356c55567d41a0ae28ec95aedd"],["/page/8/index.html","5bba99cbcbd426e2fe440f24d7227615"],["/posts/10812f0/index.html","8ce648d3faf25adf74cfd51aa636981f"],["/posts/126b275/index.html","78edb80eb43f32e0b9f86984cedcf4d6"],["/posts/12d95a5e/index.html","ea25654333eb2d618c636db0cce09b0b"],["/posts/1367417b/index.html","be8d32529a6b2a3a732a2977a67f9a61"],["/posts/13886e3f/index.html","0e64a1ebab6764146700966c319c5225"],["/posts/145193a5/index.html","ee875f81096cd0de6dc2482418b867fd"],["/posts/149dde25/index.html","99178e9035c658a40a6ab6bba92868c3"],["/posts/152fa65b/index.html","7f3d3241b668a99e9f1510236ce6c021"],["/posts/169e7dda/index.html","31599587169cf78ab1a061c6d1744cd4"],["/posts/1875100e/index.html","1615a74872f1d566c8dfd135ca11c6a3"],["/posts/18eaef7d/index.html","815628fafb9d82973917ce5cbf23e4ff"],["/posts/1a0bc7b7/index.html","2fb40ee76a9c90d92fd197b79f93597d"],["/posts/1a20a057/index.html","63e7d65ef660f0ef972b57a5fccb5f83"],["/posts/1a998be6/index.html","a219fd740703514ccdc8f9ea55171e47"],["/posts/1bffbd20/index.html","c6ea7a37755dd1d7f2fa9f08fc7d65d5"],["/posts/1c5a0485/index.html","16db80f0723a704a438635ff6fc49e7c"],["/posts/1e638f78/index.html","2b5284cb5535a5139070bb25ea216e9c"],["/posts/1e967920/index.html","88938c2fba4b3464d392198a30b7d0c3"],["/posts/1fb53120/index.html","667c47b870c7dbfdc28c25feb1dbdabb"],["/posts/21466e86/index.html","705deb04978bd525e1e4c40bb8808a6f"],["/posts/21abcf1a/index.html","2f96223df43be134ee2efdc712719a24"],["/posts/21c250b1/index.html","490d2d89dd228386aaaaded5d069cf61"],["/posts/2287cc/index.html","d6b9967dab69bf9a8fe194ee87700529"],["/posts/236bfea3/index.html","6039f8806b90fc8806ea4b8c8cd531e8"],["/posts/24caea6b/index.html","987d1cb40bd18bc87790d8a65d4ee295"],["/posts/25d45c3d/index.html","568f17617214a9680b762094b575148e"],["/posts/262baa9f/index.html","0c55f8bc2836ea7da7e1e865cc483f15"],["/posts/26f82f65/index.html","014b8d38b1eda4369dee50f11d438afc"],["/posts/27cdc142/index.html","617f20c49f26418352631951498a18c6"],["/posts/2895c4bb/index.html","86a8cb1acfbb2c3301a07f9f8f8676f1"],["/posts/28987ff3/index.html","a964f9e066724a7be3d7f431a890ab79"],["/posts/298cfeed/index.html","5d556b31ea33f72058dc122cf05b4b52"],["/posts/29f0df96/index.html","c4a2c0b642a6ae30bbef06b4f985a632"],["/posts/2a1d2b6f/index.html","2575f09b9a506466a3ea945b66440390"],["/posts/2a386047/index.html","26f7318967a3f26b2b6d9cf14b35136c"],["/posts/2b2f44ba/index.html","3f3f01ff5904e5b0d2b16af5179bba93"],["/posts/2b770baf/index.html","5b3fd7c3072118785b23b397ee460421"],["/posts/2cda4a8/index.html","0b5a12761e5bf89b02df8d93bc92d681"],["/posts/2d020832/index.html","f79092387f4c61834254df0e32b83365"],["/posts/2d6d3bd/index.html","363834c8d9b50da12ed5daca19c19086"],["/posts/2e0c129d/index.html","b7f5c8978a5816b93ac19426b7651979"],["/posts/2e7563a0/index.html","b012585113c324179327fe1bdc2848fe"],["/posts/2e7b8d69/index.html","985a2c2526fa70cb0a086dc7a6aec50c"],["/posts/2f28d14b/index.html","a24907219324db54fb0f41d99e0ff55c"],["/posts/2f6e1383/index.html","62d48db707710e0411ced4ff6920e841"],["/posts/30bfd1cf/index.html","26f06696edb46146dad54da34acf8faf"],["/posts/33235106/index.html","6850bb8c1f688dace868270cf9d2fb8a"],["/posts/344e951f/index.html","e175dc90e445dd374aec7d8e42bce7a6"],["/posts/35e2bcf6/index.html","4a5070d15394ada44dff67b919d2d124"],["/posts/365e96c5/index.html","b7341a046c5a04d5e26f21da214631f6"],["/posts/36e331e3/index.html","0b2826e3d5ae7fc4988ea3cc18db1154"],["/posts/372df90a/index.html","637ee7b20d1f69f7230113430ff77182"],["/posts/37c547df/index.html","82e3a76133e68988ba55afee5d5b9fcd"],["/posts/380dfa6c/index.html","10144943d1eeeb33620cca2c17c73370"],["/posts/3859c98f/index.html","9b8602aca1040007732f58b84c26c2dd"],["/posts/38a88481/index.html","1600084b8a79d486a7948123faac57f5"],["/posts/3914bfed/index.html","76f7f42f0c49b42d8407771d7bb4c7f5"],["/posts/3b56780c/index.html","f3324d2ed45e9052748101002a617122"],["/posts/3d1ef1fa/index.html","5a8d89a67ebc07e3d4c4651cfd62386d"],["/posts/3e4bb613/index.html","592a9fcef0f7263bac0c0285595f687a"],["/posts/3f2e933/index.html","c1f6425827dc20d0f4b763e6a2cf27d4"],["/posts/3f6e5f9e/index.html","5d3db41a1129fa855a2f68b3bbee3906"],["/posts/4349a589/index.html","191cf9c5d4798984768858ea5f3f4646"],["/posts/44246190/index.html","645f223387d7e8ce9a563afbf556f688"],["/posts/456550f/index.html","d79b2cd33468edb5b74370d6f6d74978"],["/posts/470ac03d/index.html","de5667f10bde04e4cd4e7b12e055183b"],["/posts/470d45ef/index.html","c4a78c4978b1ce8922098bd81944ddd9"],["/posts/49249ac9/index.html","b85bde0ad4b6bf8d02903f3397d33383"],["/posts/49f2d2a/index.html","bd4aa755486585726e1e77d42bfda4bc"],["/posts/4e6d4eb4/index.html","5e7665ea893b577a9d97b93a658a7d61"],["/posts/4f346c5/index.html","3fdeb05b85d5ae95ae04e72aa4b72b58"],["/posts/50caf1d4/index.html","eb3e3a008012b3efe2da0258044a03d2"],["/posts/51139400/index.html","fd9dc3c750acfb5769edd0c1a667ed08"],["/posts/512c9a09/index.html","2825758c6db6d2e49487e4daa105b9c0"],["/posts/5205b330/index.html","c683d3574ea9f41699a37309b1b56bac"],["/posts/52d36cab/index.html","79de338cbb6e58ef904c1317a01eb369"],["/posts/532a083a/index.html","a3a594a4b024a9f3a5deb2ebc686a253"],["/posts/537d2c2a/index.html","24bafd90d8e891117d490a8e68a2b350"],["/posts/54383ba0/index.html","06eeddcd05045609be9454a993680d55"],["/posts/54667693/index.html","538d82a8e5860aa7ac93bbe5686f2e88"],["/posts/5508212c/index.html","20492a8503722a63cf483d2ffc68652b"],["/posts/571564e5/index.html","77a6a5438cd3828e51890999c4c1491d"],["/posts/57900fe5/index.html","b3930c0eb635381336b2dc48d4f9488e"],["/posts/589a214a/index.html","71c24ade35d0ba44457b869ffd3cc85f"],["/posts/599a2b19/index.html","f7e1f1f274695524dbac8e57c20167b5"],["/posts/59c05382/index.html","8a6bed6e519d8a9f31b1ee2a0abd5b03"],["/posts/5a5294c8/index.html","44ad24cb18549cca4f09cecbbcc4cf62"],["/posts/5d3da28e/index.html","641e29234be847a9f504ba34a7aacaec"],["/posts/5d3f50d1/index.html","2c660b501704ab777b836a7e7a31b11a"],["/posts/5ef7ef00/index.html","9321a93716cfd20b31b9b786153b0748"],["/posts/5f1fa8df/index.html","f281afa3b94b0a1463661b0be2c97fa3"],["/posts/60b5dd06/index.html","5a936612f68ce65044da15446c11be7e"],["/posts/61477045/index.html","993b9eaa06bc366f3bd6456c5e7ce9b3"],["/posts/69d79f93/index.html","359d69615b530843b3b79db7db39c807"],["/posts/6b2f046/index.html","c5c7eb60a3b34ec66e976541682e11c6"],["/posts/6b4610c4/index.html","e62498795f1ddf3122cc311b682262cf"],["/posts/6bbf03f0/index.html","854314a1658c1a3f16707c3f09de5dff"],["/posts/7000d139/index.html","619f0cb9dc92fdbc4ff59488f862ca80"],["/posts/72f94093/index.html","288a7afcd3ed7fa73f3554bf60700882"],["/posts/7380b71/index.html","c338c83277c5516d92ddb9bf2880a821"],["/posts/738eee3b/index.html","83f5d18d44893fb1f5e4108646773ae9"],["/posts/73981dbc/index.html","546b3eeac77e2ccb5f4cc3e95abca1cf"],["/posts/74d60fd9/index.html","fe4e26064f26883056d288f71c32ed75"],["/posts/74f5d9a5/index.html","70c74ec0aa59e7100151818a81cd558c"],["/posts/750f2ce3/index.html","46192dbd0546d0cf0e0b85ccfdf2e3a8"],["/posts/75ceb627/index.html","e2de72f3da373e120be068d4abb71dd6"],["/posts/7725b75a/index.html","fbe472ce06d9cbf4a7d0340264c53259"],["/posts/79ef335/index.html","ce7e05661f82648eb5706bb4db787d8e"],["/posts/7bbd3149/index.html","f3c3be821b6ed3383fa549f18bc14f54"],["/posts/7c20e8d5/index.html","d1a0c4fbe0b236d2e3b8eaeb13185d09"],["/posts/7d3ea75e/index.html","325f7403d60af208672d31df7168cc5e"],["/posts/7d43958e/index.html","8ecbb26f318c8b9fafd03fe2c964811d"],["/posts/807ac7f2/index.html","045829502125498bf156915d65c2f4f1"],["/posts/81738fa0/index.html","488936576f69c3e2e4e80d0a4a7d1222"],["/posts/817c41b4/index.html","fcfc5504ffc02de8dc7c8f9da47d3604"],["/posts/84ee8e34/index.html","a8feb0d9da89a34075030c5e9602115e"],["/posts/8837602f/index.html","0f33a2206e13ffcf002e984a6439287b"],["/posts/89589a03/index.html","fda0d65b15459c4c79e3367032aa47b2"],["/posts/8bcef008/index.html","d69c4705705ff7c6603e1faaa2d18905"],["/posts/8bf9abeb/index.html","42057e9607322953edae018a904a94cf"],["/posts/8e5f5686/index.html","ea2ac65cc2c30dfaa17bcfc512f83e55"],["/posts/8fa6b8c7/index.html","b9fbf255eda1c159e8ffea71a26b0526"],["/posts/9029a3de/index.html","96d0743272001b8828d562b6a51c46e9"],["/posts/909d9a5d/index.html","2d17eb079a17e83760aae598828090ab"],["/posts/91404b94/index.html","045df6176ba22f1099fd8a7515095ab7"],["/posts/932e3747/index.html","f94492d598f132ee50853f1f3672ee40"],["/posts/95fc9e6e/index.html","d877342d6a707cfb45e1e75552e6bb38"],["/posts/98e67280/index.html","e584290b622f7de61e1f907fe03b9771"],["/posts/9a4d13ef/index.html","411b311dd8d55cd385d1a8118c03497c"],["/posts/9afbb889/index.html","42f4b9cc63eee2f0d34e41cac0a9e72d"],["/posts/9be63ba/index.html","bcfea65d2fe6277c86271c1da1342b6d"],["/posts/9d967c90/index.html","fb17c6c569c94ab44184d0769d8b7e86"],["/posts/9eadcdf6/index.html","16d6625ae8ec281c0286f46e3b3ce741"],["/posts/9efd76a3/index.html","b0b154829b745e68470a8fa5d851b13f"],["/posts/9f97db8f/index.html","72bbb5f2e36eaba86ef57ef14ad75f98"],["/posts/9ffb4388/index.html","a625c6ef436e85afc207139385dc6e67"],["/posts/a094d027/index.html","d367e562657f8f1abedddeb31de2584f"],["/posts/a27042c6/index.html","03408238cd4a0a470665c1b43c13abd1"],["/posts/a29cc732/index.html","e0aef150e62fb7267cab3fbc19186e95"],["/posts/a44a518/index.html","b798947bacce51e34aa449cce2ebcddc"],["/posts/a4f2a748/index.html","09cb5b490ade85b05e1d3aac46c01434"],["/posts/a7dc32c9/index.html","b6d6535208a30b6d2e3d42af65312232"],["/posts/a7f753ec/index.html","ebb6eb2837a70e660547eb5265907b0a"],["/posts/a9168bc5/index.html","9aaddb5e9a4569a6cf0d3c93fd6cb024"],["/posts/ab176793/index.html","4b8ed24939373cf812c6372e22a5b707"],["/posts/ab34095a/index.html","912f8c21c620a429a24cae6a44cf8de9"],["/posts/ad47c4a5/index.html","38b7d21343619e93a2d4d710b5a30160"],["/posts/ae8f7b74/index.html","daa81d039f0e926148e1aab3b9bd060c"],["/posts/af43816b/index.html","89942a7b5bbf878717610aef201db3a9"],["/posts/af9e049c/index.html","3befec7e69508c527f43cc7ae11d2a63"],["/posts/b0f1a367/index.html","fb1d115ca2ed0dad8a6350423445b9de"],["/posts/b0f98e2c/index.html","10850fb64d998869390b4c3cdd3b8737"],["/posts/b33131fd/index.html","6fd1fa2b7899e9879573e2d83d6a2b41"],["/posts/b36eb520/index.html","0cdde41e69090b838f0145cee963233e"],["/posts/b542fc02/index.html","6e07c1453d467dfa278b84b39c02a03a"],["/posts/b54eeeb4/index.html","25354a3f121003531ee810f431a3b85e"],["/posts/b84f3f3c/index.html","a1e5e37f7ac4e230f356f770337ac748"],["/posts/b94fc207/index.html","babea2967028e57bb786d74e653a52f2"],["/posts/b981a6b4/index.html","355184c84157eeda42cc0d89d9fe838c"],["/posts/bcea326a/index.html","2b9b6834b652fe8c9876a03e057a510f"],["/posts/beb19e80/index.html","d02af1f03d89bfacdcef240917d02a61"],["/posts/bec490f8/index.html","1debf66a27f861a1ad8d251fe50b0ee3"],["/posts/bf7bde0e/index.html","6e42762b1c86be2dde8479f07ae96293"],["/posts/c03f17c9/index.html","15710ec7a25368aabd509abdde3c0b83"],["/posts/c35bc572/index.html","48c2ca31bcb872b5ca59f697c6b51611"],["/posts/c436016b/index.html","306b007f65c98200abd2c27d8aa18750"],["/posts/c4efc741/index.html","06fa7af12908a78991ef868c8490f53b"],["/posts/c5e8a08e/index.html","54125ad74364fb132e8890c699e43ef9"],["/posts/c7db1dc0/index.html","7d09cd77fe3c9f5291080af0e43e15a7"],["/posts/c7febeba/index.html","cf5100cdd58ff16e224ae3f7413e18aa"],["/posts/c9c3a06e/index.html","a64c3e2d0bbb4efc9fae5a38a70936b1"],["/posts/cc6d2cf2/index.html","7d08f92626a9aa7e5ebf7b05ee78c8e7"],["/posts/ce48f291/index.html","be35edd3f5f96ce4534c96bfa05452ba"],["/posts/cf480faa/index.html","7fbac125092b5408bb85710d0f6b1ca5"],["/posts/d090b4d/index.html","162cc60e586726d881c67456c38fd6d0"],["/posts/d1995044/index.html","45a485fc713062bbbb0972322a97b76b"],["/posts/d2d34977/index.html","55a441d5e9c09e554220a19c1abd918c"],["/posts/d3647a92/index.html","324e7a41827a4fde051b20f83b611acd"],["/posts/d3f6b818/index.html","6041706ccf2d784091d24478a2a87f38"],["/posts/d465029c/index.html","1276d24ba70ca13122d969f23e2da7d3"],["/posts/d9884be2/index.html","be1b6ef3fc4f3d8eeadc1f3af1adcc2b"],["/posts/da40f433/index.html","b6c9e544026c6ef6b3978bbaf54c5828"],["/posts/dae71d5f/index.html","6110b1bb67e23de463eaa419291f9728"],["/posts/db9fbe47/index.html","6b9b08fe66f090467aa23e26911c3b72"],["/posts/dbba997d/index.html","1876323855e6063a6e4c408ca6121380"],["/posts/dc94f8a1/index.html","838d81e5bb1004ad38c3c391ad7bf6c0"],["/posts/dfe9b67/index.html","259d83e551c5fc1ff7a55d1b14a8945b"],["/posts/e0387d80/index.html","e1a1f11735805f350095ab970850aa24"],["/posts/e356f7b3/index.html","33ad6e37c93fbaddc61531cd114af9c8"],["/posts/e3acb366/index.html","9f0de1f4c3c35fbd8e9605f1099d1e42"],["/posts/e450354f/index.html","813ee0919938b8231c97de14acf25ea7"],["/posts/e489223c/index.html","ff95a986f5dabedadcd66c953865e3ad"],["/posts/e9a8ddd1/index.html","cbb2216768f8bde87b3da194e8b47077"],["/posts/ea914c06/index.html","3e5b2c42e4ce292d2206847c5bbd1239"],["/posts/eaa8f31e/index.html","778a0cf0557daac0d9e8f240d3316d1b"],["/posts/eac19412/index.html","5ec1419a3a6ad71478604b55d813320c"],["/posts/edfc881f/index.html","9b974b9b52e63f92933a021cca492df0"],["/posts/eec0bbd1/index.html","6f06f2dfa4f8af4ce066a6e10f9d351b"],["/posts/ef22c7c2/index.html","f943e57449bd6e1c5c96065cdbf5caae"],["/posts/ef271825/index.html","1d238fbbd6e9507993bb497443128127"],["/posts/f209578c/index.html","df3d02907e89d14e5f87ea8b616d944c"],["/posts/f3e9bea2/index.html","86f31dfed1fec6813a1796838e1b8365"],["/posts/f67b7122/index.html","9e74f884d0c58929ea901e7e935c9a0b"],["/posts/f7abba28/index.html","53f544b1f5418c12f7ab447063fb2533"],["/posts/faffd764/index.html","fe11bff4e6c68e842e410bf78950bb25"],["/posts/fb684fb0/index.html","34c6e3cdd484cccc59b11fb99847c304"],["/posts/fc57199f/index.html","468ffa5a43e7b1c58906e0a6305455de"],["/posts/fc6e9a7d/index.html","21e1d222a9ef334005e15683dbd1b1dd"],["/posts/fc7bc02a/index.html","fd3b7c3227474847085cd9bcd0f2b9e0"],["/posts/fd67c5cb/index.html","1c3fecf3564bb38f8fa280937404de1b"],["/posts/fdde061e/index.html","0a69bd5a7ae06feed84ca312674c0d9b"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","f48f3b129e2c60553995988af92251d2"],["/tags/ES6/page/2/index.html","97d34767c20cc9738a424ed8cecbe9cb"],["/tags/FL/index.html","ee3685aba4a93be936c8f3d7c29ab44a"],["/tags/HTTP/index.html","5111adaa57d491305b3efc682244451d"],["/tags/Hexo/index.html","64332d9ce9319ac2c6761617c4e5a66a"],["/tags/Hexo常用命令/index.html","e9acdea5fa353e90be94c018a6fa0f95"],["/tags/Nodejs博客实战/index.html","213a754ee10a352d16a574e4024ec791"],["/tags/ajax/index.html","2da7cfdfe08126055d187013f35c7bd1"],["/tags/ajax/page/2/index.html","9312f159cacb0213d4af9132c7373602"],["/tags/curl/index.html","77966839eec6129cc8b1797d8f1a2864"],["/tags/index.html","d826aa594c2c4ca53bc08f182c006d58"],["/tags/json/index.html","1e9dc31789994e152d055eb0f24af74b"],["/tags/mongodb/index.html","4630bf9f26c19adefe5505298eeb0569"],["/tags/nodejs/index.html","3129416acf29ab2b9c9ef4d6a2a00bb8"],["/tags/promise/index.html","e8e56ecf3232dbda3182a76021cbdf08"],["/tags/中国近代史纲要/index.html","f7d010e05a869b4611343207accd85c6"],["/tags/日语/index.html","c67a85673fd5f67940a92ac033c285ee"],["/tags/标签外挂/index.html","99da5ba3a53fbc89d74de71ef3dba951"],["/tags/目录索引/index.html","0d326889895b5b07ef97d28bd86c359e"],["/tags/管理经济学/index.html","d11888365f27922ce93209673d7e73f9"],["/tags/考前突击/index.html","43ac2586e8b10f9286a026bb3f19623a"],["/tags/考前突击/page/2/index.html","e30eec23522dafc8023c3670136980c7"],["/tags/自考/index.html","8133e1db6b9c92cc944efc8734be3bdf"],["/tags/计算机网络原理/index.html","fa2801adb65cd15dc6f4c0f85297b5f7"],["/tags/运筹学/index.html","e7ff96b2d120b438345a7c2d651d6171"],["/tags/马克思主义/index.html","63c2b64dd5389c5f213351301b9044dd"]];
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




