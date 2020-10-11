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

var precacheConfig = [["/404.html","39de4d74f5085da737d6ae1085657d5d"],["/about/index.html","a965e13984a8a7b19373a4a76c62d560"],["/aplayers/index.html","0e0b7989f2bff96b6bbf84c0384d5b5b"],["/archives/2020/02/index.html","55bc2a35d9fa22ffb2abd5ba9a760815"],["/archives/2020/02/page/2/index.html","0395886af5a8ad89f6c674abc483775b"],["/archives/2020/02/page/3/index.html","215e657e8a0c3f745dea8d4a7f540add"],["/archives/2020/02/page/4/index.html","34924485038f31672a3b8133b9ed3abf"],["/archives/2020/03/index.html","f7c311017f07f679ce30e36ec2b881b0"],["/archives/2020/03/page/2/index.html","04e257ede93ed3b7caad9cf6e7e3f1e0"],["/archives/2020/03/page/3/index.html","3ef72ae661bdf4a45bb2db3338b97a98"],["/archives/2020/03/page/4/index.html","00f3c173d3fceea9c733354e0cb42a6b"],["/archives/2020/03/page/5/index.html","296cbe9e0d686dd54ca9c325051676ad"],["/archives/2020/03/page/6/index.html","e45702a17267387bcf9326290a738933"],["/archives/2020/03/page/7/index.html","d25e02b6192cc9e19fd774ec83bf7dd9"],["/archives/2020/03/page/8/index.html","189b97c59d33bfb32a57121968f63ddf"],["/archives/2020/04/index.html","c435fd22dda20a58f1835c45e47e0a53"],["/archives/2020/04/page/2/index.html","dcf64cb628758ed2c3d07b15667d715e"],["/archives/2020/04/page/3/index.html","c43e3962b57235105eb060ea6f42fe49"],["/archives/2020/04/page/4/index.html","1c4892871c03a6d1332fabd978524655"],["/archives/2020/05/index.html","f2431153acb75b0fc7089784fba563ea"],["/archives/2020/07/index.html","44ee8ec954cf91617d860669de6e344d"],["/archives/2020/07/page/2/index.html","8a8081f4add6fb4af804306b2853d61b"],["/archives/2020/08/index.html","9eb6714a273484cbdd8371507f59f7e3"],["/archives/2020/08/page/2/index.html","69889df75a20138ad209490fb3649c76"],["/archives/2020/09/index.html","d8fc8c1574009f48b4b89831c39a95d2"],["/archives/2020/09/page/2/index.html","7333b7956d6151771087d2dc1d3f7318"],["/archives/2020/09/page/3/index.html","a815a0827fd2c6a38b94a885d8cf8fd1"],["/archives/2020/10/index.html","21c70f1ad2c163bc413cf0ed5106a3e7"],["/archives/2020/index.html","817ca5046394378dc78297fc24814387"],["/archives/2020/page/10/index.html","873938e4364df2ee30c445793b89b276"],["/archives/2020/page/11/index.html","38935beb718b4bd07952184610930e1a"],["/archives/2020/page/12/index.html","7b5b4fdf45bbea4a31b9ba858ac2619a"],["/archives/2020/page/13/index.html","14d17647e3a33576d210bed3d2c7ee3e"],["/archives/2020/page/14/index.html","f661ed5e5a73d4ecd542b86bf5d3338b"],["/archives/2020/page/15/index.html","767cc91864c639e7cf321fb9768a49af"],["/archives/2020/page/16/index.html","df7de3615f2b89e303c6b9055091965f"],["/archives/2020/page/17/index.html","d7afa0f047a1ebdf327643f08c2b7136"],["/archives/2020/page/18/index.html","89ff16569804219ff9ceee68b8b8adbe"],["/archives/2020/page/19/index.html","c8dda8cc5370b3aa1763ed9ab4bf8c3f"],["/archives/2020/page/2/index.html","a5cad652c88a782e7b164aaf7b505248"],["/archives/2020/page/20/index.html","9e7b9bdc152a04711f5cac81da3e7530"],["/archives/2020/page/3/index.html","377673cd431b358e474e937368ad5b21"],["/archives/2020/page/4/index.html","feef0a4a49bb97999c0035cf878a585e"],["/archives/2020/page/5/index.html","4db5516044bc49c3debb2427aef14102"],["/archives/2020/page/6/index.html","111e085c837854028bf6b506c8c4379b"],["/archives/2020/page/7/index.html","25757e3fa7d6d976c8f393e8c425f10a"],["/archives/2020/page/8/index.html","36193f1572d7984e118b689f597b7417"],["/archives/2020/page/9/index.html","dc4f23c840bd6b7515c9eea84a45f838"],["/archives/index.html","c2bf58ef53cf34ff69fa2cec0bfc9636"],["/archives/page/10/index.html","9ba2d028734cd60b0354ac3751d93bff"],["/archives/page/11/index.html","060fc797379ee405598c2815ecb08a41"],["/archives/page/12/index.html","54a8bc062eb99d73e57c92ba2811b2c9"],["/archives/page/13/index.html","e2eace793659b91e09547c98d4d28b5e"],["/archives/page/14/index.html","ba53254fd03c06a49eba078f58349d65"],["/archives/page/15/index.html","55115049732e685795ad12bd5e9d9fbf"],["/archives/page/16/index.html","500b155018456db8d39693f602b6195e"],["/archives/page/17/index.html","cd7e3439b600403ff5af79df1b35c28e"],["/archives/page/18/index.html","1c15413fb87af95b3e1a3fd3d4e47d1d"],["/archives/page/19/index.html","a43fd1c9179b3a39521d1af88271b89f"],["/archives/page/2/index.html","44e03142571f84aec807111ef94a2293"],["/archives/page/20/index.html","e461c377fe5b19d697d538d16807c226"],["/archives/page/3/index.html","5790c55f2e6b14bfc8691a58fa05560b"],["/archives/page/4/index.html","4b8776b4034a1144fcbc610076eadd0d"],["/archives/page/5/index.html","ca820a145fcacaa80b45adf8bbe93be6"],["/archives/page/6/index.html","fea986b6066a8b0c264b34f4c41e210c"],["/archives/page/7/index.html","ef0ef0011625400a24b2aee15a93ac29"],["/archives/page/8/index.html","e7ffee8d2ab8b9edea5287affdcd31c2"],["/archives/page/9/index.html","b3d15e4c8e4cd9bd1ebd871831dec569"],["/baidu_verify_code-DtGRV5OBxw.html","07e9abc173ae32e40062edd5e904eb45"],["/bangumis/index.html","a17bdaaaf78b6cf57f788691c6994b39"],["/categories/Ajax/index.html","0d3504a55ce225396114c662ebe5db90"],["/categories/Ajax/page/2/index.html","b22d129912bcb1f3b889e1242b10ab4c"],["/categories/HTTP/index.html","7273d350de6cf0c6bd2fa8413e0fe64a"],["/categories/Hexo/index.html","3391e66e92b0bae665edd070586a7582"],["/categories/Hexo/标签外挂/index.html","63d33f7cd6207d4cddc6b2f9de44099c"],["/categories/Hexo常用命令/index.html","b8740f78b4688f27b680b0708c7f6084"],["/categories/JSON/index.html","b1e5c8e9d7696802e405ac54baac8608"],["/categories/MongoDB/index.html","e0845814aa5c9870e20bc73e7055061e"],["/categories/Nodejs/index.html","d5526c3b8de9b606d7e923049813e1c7"],["/categories/Nodejs博客系统/index.html","b13b828ce1a0b1f07019e0d0cd0a3a7c"],["/categories/index.html","3e954a2c8ce1284fbf7bca61b97e6ec4"],["/categories/promise/index.html","620bd802d7c8f193cd5460a286a293d3"],["/categories/日语/index.html","db94369de9f2fa467c6b53d386b918eb"],["/categories/自学考试/index.html","79886d0ec4abb75f084ac63dd16d64f5"],["/categories/自学考试/page/2/index.html","a3d70b6ed4659caf35cd799511356018"],["/categories/自学考试/中国近代史纲要/index.html","4473d9fc7779a3da9fab3f07abb62e04"],["/categories/自学考试/管理经济学/index.html","6e04e8f42b055e199f4ed9d00a06c6f9"],["/categories/自学考试/考前突击/index.html","e0ec65e48eeba8c41e1c67b3e960ddb6"],["/categories/自学考试/考前突击/page/2/index.html","d1dff5cdc7cb0e23ce28768ecda01422"],["/categories/自学考试/计算机网络原理/index.html","cc37212a4c7d78be93925d4eecb5db7d"],["/categories/自学考试/运筹学/index.html","a19603ba4cbe544e70064d6467beb445"],["/categories/自学考试/马克思主义/index.html","d6bd8414883cdb0645431d6836c6eb33"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d066b4e6c3287d2b5abb981f048f9364"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","64789f4d99b1b043faf90a815cd77d22"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","3b9bbd3441b3c48cd65ff214883c8af7"],["/page/3/index.html","7e978e581a5bebe818f87d783284dff6"],["/page/4/index.html","62b7d58563a7d927ee99bca544198a00"],["/page/5/index.html","b2350728f9510e916527c067377e8956"],["/page/6/index.html","42372f4a2279e6c7839190c3dd6b7214"],["/page/7/index.html","e8fa3d56f871912333b6c62c88f1b80d"],["/posts/10812f0/index.html","4df288cf67ce51e2b6af2454bc1a32fb"],["/posts/126b275/index.html","4112276026153cf8d0cef8f314e9ea09"],["/posts/12d95a5e/index.html","6ab8f3f7190b78d2d62be2108722ca18"],["/posts/1367417b/index.html","d75c846a9603977b7005dc46a0b66da3"],["/posts/13886e3f/index.html","5123e3a077355addfce66030db326d17"],["/posts/145193a5/index.html","c82f1baf80dac88ee86cbd5d4975c46b"],["/posts/149dde25/index.html","5067729358f4d184d709f894c4125845"],["/posts/152fa65b/index.html","2bb38dca4d295fa3052a0593b9e3b3be"],["/posts/169e7dda/index.html","6d281e1630920076913d5cad366c206b"],["/posts/1875100e/index.html","dfc4a2828c2a4180775c5f96e576524c"],["/posts/18eaef7d/index.html","91e1d2c38a897efe1a473a36e93f2f82"],["/posts/1a0bc7b7/index.html","40b880c41d9d0e0eaf9632cec8ae0d59"],["/posts/1a20a057/index.html","af5afad95989df4be9e3b58e4d9abfd5"],["/posts/1a998be6/index.html","70e3a704f1b33b6848d901d90d06a793"],["/posts/1bffbd20/index.html","beb0e30adb4863a6e84927c8ef7099bf"],["/posts/1c5a0485/index.html","cdde7a2874f3876a7b508bf953ca1909"],["/posts/1e638f78/index.html","c9cb094e0c3de0020068e81f86e9388b"],["/posts/1fb53120/index.html","be1e8a479857c1a0ca12fa622debbf65"],["/posts/21466e86/index.html","43650c9cd094fab50aab0442632b27d2"],["/posts/21abcf1a/index.html","354a8b0d2502180b90f82d0ee6f5cab6"],["/posts/21c250b1/index.html","6c2cc4943cae898da4c65fb295eb64cd"],["/posts/2287cc/index.html","2e99ecdfc57afb181f6b3706eb153fa6"],["/posts/236bfea3/index.html","022df20f8cee93dedededfd6edf0dd90"],["/posts/24caea6b/index.html","035deb94f46547ea89a4ab1eefa796c1"],["/posts/25d45c3d/index.html","4e45258e15c317d07178394515194b75"],["/posts/262baa9f/index.html","33889afe66e8fe904a29ed627651cc14"],["/posts/27cdc142/index.html","9e98d8f32e0c9049b6099472cb2c6ed2"],["/posts/2895c4bb/index.html","f15fa199a1d25cb045665349b86214e9"],["/posts/28987ff3/index.html","6983dd19ab8b2a2c4ea165c432424ae3"],["/posts/29f0df96/index.html","267cb710e78408e9a14b2f7a991f29e9"],["/posts/2a1d2b6f/index.html","cc8dd602a832cfbcd14b66f5ca882888"],["/posts/2a386047/index.html","0e6e60d9aca87e330fb646ded43240e4"],["/posts/2b770baf/index.html","43e3ef80cc9b33f0a1d564d8caf61be7"],["/posts/2cda4a8/index.html","6ed58f01c719652785eb5f47d5fd0ddd"],["/posts/2d020832/index.html","3f77c6911ffa1d10f0633d39c46ea5c9"],["/posts/2d6d3bd/index.html","7e966a8f9361f3206723f35aeb50e705"],["/posts/2e0c129d/index.html","9722189eaa2cc782c4843c8d176eecd4"],["/posts/2e7563a0/index.html","4f5376c181b57f15d1a36003186e8ce7"],["/posts/2e7b8d69/index.html","ea40a5e1b7533cefa4cfb630d6ac011e"],["/posts/2f28d14b/index.html","c15744e12f7b6a813f2679c020b33d4d"],["/posts/2f6e1383/index.html","76d09ae30c19cf5cbe2b2b55c45cb934"],["/posts/30bfd1cf/index.html","d57e4a7e5c7bd0100bf6fdf530d35f41"],["/posts/33235106/index.html","f653fbf38574b32c8d756593fb3db365"],["/posts/344e951f/index.html","884204b2e5a4c0d0e4181959422ce51f"],["/posts/35e2bcf6/index.html","9c306b9dde0a72e7ca4eb1a84fbe29f5"],["/posts/365e96c5/index.html","d83882dff3ceb1b182c771a21396f8f0"],["/posts/36e331e3/index.html","1aa51d1892ee031777d1df6fc6a5e60a"],["/posts/372df90a/index.html","2fd69f571f055b34c12103951ca1a78a"],["/posts/37c547df/index.html","193e0380a1b424b7784f25feb95e52a9"],["/posts/38a88481/index.html","b6f33cd3b6be82078ee9f24c0e638651"],["/posts/3914bfed/index.html","def32d42084bd2d2fce7cb60a2f17f73"],["/posts/3b56780c/index.html","94ed3bdd70bf5d902fe43f689eed5e6d"],["/posts/3e4bb613/index.html","698faedfd078b18c6714c5c02281056d"],["/posts/3f2e933/index.html","60a14b92244d0fe66088305dd87b893b"],["/posts/3f6e5f9e/index.html","d245b1ff6d23821895f263b3a83fd0b0"],["/posts/4349a589/index.html","297ed2f5ba4f2160fbad4d6863060cc9"],["/posts/44246190/index.html","d50081e2b0302c5f23d650af31e69302"],["/posts/456550f/index.html","dfd1f2a21c6cf8f7bb6406e18252990e"],["/posts/470ac03d/index.html","a6874b25082a26d040b368fb3f9bd577"],["/posts/49249ac9/index.html","d38c1090eb58496e161d8bceba556dd7"],["/posts/49f2d2a/index.html","ce67a8444cda771a79cab0dee07a110a"],["/posts/4e6d4eb4/index.html","e4c8593375d62c3341c9ca264e323885"],["/posts/50caf1d4/index.html","d4bbd2e5d3c47adf394f2cbbd927febc"],["/posts/51139400/index.html","41a3f07e9d263ab53d17520d76aabc2c"],["/posts/512c9a09/index.html","a7f2eedf2dda5f01de9216ccbffa6eeb"],["/posts/5205b330/index.html","3d96e74d55f0c0880fc6a4b1025253e2"],["/posts/52d36cab/index.html","384fdf7aa79d593c237ba61f8c37eac0"],["/posts/532a083a/index.html","5a36888e8ef16118666fd9f2217185dc"],["/posts/537d2c2a/index.html","d11186eb9182e0f71b0924f653104a67"],["/posts/54383ba0/index.html","e3719ae228b001b218e896ab43d52bea"],["/posts/54667693/index.html","cebe63e88723510605159c63da7679d6"],["/posts/5508212c/index.html","97c86546495301e54fa0f984cb993f75"],["/posts/571564e5/index.html","2eded2de9d4d34fdca09f0a1f657676a"],["/posts/57900fe5/index.html","c31bd0833390b767c20770dbbca266e4"],["/posts/589a214a/index.html","c1d985d573785142c34e333a3832d844"],["/posts/599a2b19/index.html","928ea44a8ff44feac7188ef85294d73e"],["/posts/59c05382/index.html","9914179a64d450dc73949870786570b5"],["/posts/5a5294c8/index.html","d3a5a461d3fa0f749821da6b6a61ffb9"],["/posts/5b8c69d5/index.html","fb587eac7e801529846e35bc90f0823e"],["/posts/5d3da28e/index.html","276990f1c50cc86302c0d0ea555cc844"],["/posts/5d3f50d1/index.html","1611889d0544ac6809d9a1a03504d7d5"],["/posts/5ef7ef00/index.html","b548c538bb26f6d536d3db40d69e0e07"],["/posts/60b5dd06/index.html","db5828e537ce0c6eec0ef9c1c885e57e"],["/posts/61477045/index.html","57cf269606b73d8eec5456bb053771ee"],["/posts/69d79f93/index.html","48fe15def38ef40a43f45f7d6b146566"],["/posts/6b2f046/index.html","872102964318befd26df20cec3feb0ff"],["/posts/6b4610c4/index.html","f2a00aa344cd8e9ac84cc99afa0a3c3e"],["/posts/6bbf03f0/index.html","45be3a7ced8cdc1e944707b24638f9e0"],["/posts/7000d139/index.html","7f2fa50a4614a6bd3c75b11f829907bf"],["/posts/72f94093/index.html","35037f46e533c03cc56affff322fb7b4"],["/posts/7380b71/index.html","30268282019ca040cf0f7793bb2a54c4"],["/posts/738eee3b/index.html","093b20b6f4ae0be877a38ede87900ca2"],["/posts/73981dbc/index.html","597367ae85a90c1efefd9e4c4118ebc3"],["/posts/74d60fd9/index.html","bd6277096ddfb6a442fb3bf79e6b5eea"],["/posts/74f5d9a5/index.html","32576f56fe47b2b541456b82ba28cb42"],["/posts/750f2ce3/index.html","2922538a196c350e08a8ee5497296d43"],["/posts/75ceb627/index.html","7e587e90c1501cb056bc01e6f0c86a1b"],["/posts/7725b75a/index.html","384ea8ee66c4af63d2caf08611e6188a"],["/posts/79ef335/index.html","f7ab88fd231c58db888f48d53de2b508"],["/posts/7bbd3149/index.html","4fa5712568789d4fef903ec131570409"],["/posts/7c20e8d5/index.html","2dcd4c79d0cb40f6d29c277e16d499cd"],["/posts/7d3ea75e/index.html","8ad1e6dcd2ed203901c542f45e6d2278"],["/posts/7d43958e/index.html","86ba2ba570345b0b8d476ed77248dd03"],["/posts/807ac7f2/index.html","b901c96ec10ed7d3b52282f225a9ee89"],["/posts/81738fa0/index.html","b23d81a20170a969e160e73d4f0eb8d1"],["/posts/817c41b4/index.html","485f059a33a08b7024b656ada1a7bb1d"],["/posts/84ee8e34/index.html","aa7907326dc8039073d7f3a8317348dc"],["/posts/8837602f/index.html","ef67397be6cf7dfc3b835df7aba85225"],["/posts/89589a03/index.html","ce5936f2adcdaf31c4d942e52fc87887"],["/posts/8bcef008/index.html","868f43c9911a8d330afe672a011b3c76"],["/posts/8bf9abeb/index.html","e64ab28412c491b1add54ecbe21e169d"],["/posts/8e5f5686/index.html","3f73e04befbcc035819091cf559d60f1"],["/posts/8fa6b8c7/index.html","266d0016cb750c0dc011143d3125f2ed"],["/posts/9029a3de/index.html","03911579de50874be03915ed9229f375"],["/posts/909d9a5d/index.html","13e51494cef83dc739c45d487b33043e"],["/posts/91404b94/index.html","69e9e98a702556462c3f5a8f40d93cac"],["/posts/932e3747/index.html","c44f43c9e4bced8d5b85f70926f2d350"],["/posts/95fc9e6e/index.html","157b705264f288826917e5d0a4d7f304"],["/posts/98e67280/index.html","bffbaf7df52f99f463adc9937aeb0b2a"],["/posts/9a4d13ef/index.html","052c49654c98cc49314fa9e14838ee64"],["/posts/9afbb889/index.html","b402714d0be1c04a4541988c889fdd91"],["/posts/9be63ba/index.html","84afeed4342daa009a60a724e71ec381"],["/posts/9d967c90/index.html","9bf02a88615b8f4eafe19643e5849141"],["/posts/9eadcdf6/index.html","c729c98de7190867616be06ff7ae3fc4"],["/posts/9f97db8f/index.html","072a442e0762cbf22fff93685ecc1a2c"],["/posts/9ffb4388/index.html","9f0aa6a4ee79c460246fdab68b81c89c"],["/posts/a094d027/index.html","ae4883320d2968a32582ddc57b840280"],["/posts/a27042c6/index.html","d4f11e3e23af0e7406c51b285d44d1d5"],["/posts/a29cc732/index.html","397ec60793bb6592c6acb386ecc7009b"],["/posts/a44a518/index.html","bc9ca82bfe51621c3942b847aa4b0051"],["/posts/a4f2a748/index.html","604c7930bb2e4455afdf687d39407443"],["/posts/a7dc32c9/index.html","0b555e6b34009986eec2aa251476c5f1"],["/posts/a7f753ec/index.html","f9d59db98b180aeeaff88c1c599a5242"],["/posts/ab176793/index.html","874d1c3f2d2f9d9a383b6117ae827645"],["/posts/ab34095a/index.html","07177476fb8cc81ed29b82a29c24739e"],["/posts/ad47c4a5/index.html","330587c63954c6b6a1911e0be13100af"],["/posts/ae8f7b74/index.html","0db81cf98a0de4fc36ce0d3f9cf40532"],["/posts/af43816b/index.html","a7107457df1098baf62f9a9cd88e123a"],["/posts/af9e049c/index.html","3b2afb03b718341a16323db059eecc81"],["/posts/b0f1a367/index.html","b139e84520af1722ea68661592a49986"],["/posts/b0f98e2c/index.html","1e4293ba78928e9bb0d49a60b3837c44"],["/posts/b33131fd/index.html","9f5bb029eb051858d829a36e885ab56d"],["/posts/b36eb520/index.html","86b87a0bf6aa1c72a0c5637cc1ebdcb3"],["/posts/b542fc02/index.html","9699c9ff8b861b368849298c1a7ac647"],["/posts/b54eeeb4/index.html","7c5d31b4bea1fccfa06b33984ded4abc"],["/posts/b84f3f3c/index.html","4c0841230c9f622b15fe204680d8761c"],["/posts/b94fc207/index.html","9ae2cc11c390f47a27b8d67175e3a7a8"],["/posts/b981a6b4/index.html","9112250f3e171f960fc14b45bfb12e35"],["/posts/bcea326a/index.html","189e6faec66aea135ffa44a34b7bbf58"],["/posts/beb19e80/index.html","b38794b4175c163d94465973616dfa2f"],["/posts/bec490f8/index.html","12783b5a0ddd582ae36e5e9f5c9361a9"],["/posts/bf7bde0e/index.html","3244c49c09dd805fcf81792194470f54"],["/posts/c03f17c9/index.html","790b7e86f64fe9448fa0dfaab6527763"],["/posts/c35bc572/index.html","2f82c410d6199590d45574bc4e09647e"],["/posts/c436016b/index.html","46e2c98b85e1be2e42e3423df64a3701"],["/posts/c4efc741/index.html","0baf44a0002082df4c39bc5835ba595a"],["/posts/c5e8a08e/index.html","6206b0479354e414a2e93a0ad7daf2b8"],["/posts/c7db1dc0/index.html","740e4c946a74fc8bb49f116941b23b06"],["/posts/c7febeba/index.html","b491415e2e785963f3b3a8593380033c"],["/posts/c9c3a06e/index.html","8438ddc72a23da9cb8729978587e5bca"],["/posts/cc6d2cf2/index.html","cd9b45fbccbfc4c29eb1e13d5404c5a7"],["/posts/ce48f291/index.html","906008cc8ae4ecd72eabc0dba7f1e770"],["/posts/cf480faa/index.html","b925a583a04a324c275034a9a5092ee1"],["/posts/d090b4d/index.html","5f6bac2db890158f55ce6601b908f94c"],["/posts/d1995044/index.html","4ae791775b405de8239cc8b767a0e8ca"],["/posts/d2d34977/index.html","5df0fc60d85a3fba58ca1b16d924e0c7"],["/posts/d3647a92/index.html","ba5db7063ade742852f4c43efe40f1a9"],["/posts/d3f6b818/index.html","c9a995909cd5daf1edb2b182cf608437"],["/posts/d465029c/index.html","84cc821713546896fff9b4c5ad262be8"],["/posts/d9884be2/index.html","3641577fae47b07fd2b563a91c75037a"],["/posts/da40f433/index.html","5ec9e8431044b3b6bbab238ad43e3f01"],["/posts/dae71d5f/index.html","d2bc3ae320ddee0e3b207113f5c02fda"],["/posts/db9fbe47/index.html","77f513a28b6a607646c43406c67cb6d0"],["/posts/dbba997d/index.html","a69dd22aabc0eb8a14697cf01dd2d0d8"],["/posts/dc94f8a1/index.html","82401f9277e4632ab012ec44e80c2042"],["/posts/dfe9b67/index.html","b752fc9dbd201a8e41a7816712314d7f"],["/posts/e0387d80/index.html","d78d118af5b859c8fa64b67f85cd9a88"],["/posts/e356f7b3/index.html","f9394843af7ff5606bc3d1da5be3e704"],["/posts/e3acb366/index.html","1f4032ea8d48243622a0baf5de5a3c57"],["/posts/e450354f/index.html","e4f70c51c921b897ec557c2ac2c5085e"],["/posts/e489223c/index.html","e6d86d4f9291b30ef05621c4b9b60c64"],["/posts/ea914c06/index.html","3acd15128d0b12d5c2482abbaa891c55"],["/posts/eaa8f31e/index.html","f80b49c7e7d0f0ac91174cdf530a2c7e"],["/posts/eac19412/index.html","aa007f5addbb51e4291556f3424693f3"],["/posts/edfc881f/index.html","0b667b0cecbe3c9e9d6395b43b874e55"],["/posts/eec0bbd1/index.html","8c4815727635e08496cbb958381b1e36"],["/posts/ef22c7c2/index.html","365f225bc863861a2bc2a3deb7734812"],["/posts/ef271825/index.html","55b9de0599e4ab849be61b610ac7115a"],["/posts/f209578c/index.html","6d8e051a038effedd86efafad835147b"],["/posts/f3e9bea2/index.html","f8ee8154c7def107ffc3de30cdc030e7"],["/posts/f67b7122/index.html","c14c5c69a37cc2b9832155fd36a83cae"],["/posts/f7abba28/index.html","e758c057de1e1d9913a210aa22f4a3f0"],["/posts/faffd764/index.html","2e53257f87c1f68de76fb2343acd3f7d"],["/posts/fb684fb0/index.html","cce1665bcb4bff6bb3942a24a2b03d35"],["/posts/fc57199f/index.html","c8f68d2c7a44e3f969231661d701620d"],["/posts/fc6e9a7d/index.html","a5f2825bffbe8125d450ccfeb8ac0324"],["/posts/fc7bc02a/index.html","962cfcdf64ebd2bfe938a79f91b3bb72"],["/posts/fd67c5cb/index.html","19cba92095bbd284204bd6a4d1317513"],["/posts/fdde061e/index.html","86b9cf07d54c2396470e7a94aabd7fc6"],["/tags/HTTP/index.html","1bb7d4f9e52b235076050e300fe509c2"],["/tags/Hexo/index.html","1590928c12d97e5dee6aab5138268b71"],["/tags/Hexo常用命令/index.html","5a58d61130ee2b62de904c7dc4b977bf"],["/tags/Nodejs博客系统/index.html","a2576afdd3a565818be59fce4c930ef3"],["/tags/ajax/index.html","f42d2f015803e6e20206590fcdbdbec3"],["/tags/ajax/page/2/index.html","4722a9abfe7ac604a6679e6ddab23dde"],["/tags/curl/index.html","b614688aefcdfde1596665ec2d19f743"],["/tags/index.html","8716949961723890046814c683cd3a9f"],["/tags/json/index.html","5e1fd3aa0a742b0ffbd81ac2a52c4aee"],["/tags/mongodb/index.html","b81949fc3f1fc9775d19a1d636211d2c"],["/tags/nodejs/index.html","5245f531352241337537bc35cbb8aa58"],["/tags/promise/index.html","51f53eba51023b396401b6f837c64cfa"],["/tags/中国近代史纲要/index.html","445a8b6524bbd6be777d4da8a52eee9e"],["/tags/日语/index.html","6b12d5a2cd96952b7d9ee0b0f21d3997"],["/tags/标签外挂/index.html","5881b62a66ef556bcc860705e63e77ef"],["/tags/目录索引/index.html","5b49614445e5ce97abe78490edb38375"],["/tags/管理经济学/index.html","305848992ff83dcb280987ca80a0040c"],["/tags/考前突击/index.html","e3a8cd9ff2050755f07cc80f1837d5e1"],["/tags/考前突击/page/2/index.html","54e133d223310f382054446da3390470"],["/tags/自考/index.html","43e1b3279d15064fe63defb9de4abffd"],["/tags/计算机网络原理/index.html","d8b8cafb4c9e894734a0903de8175c16"],["/tags/运筹学/index.html","33f4a0c9271aa6aa6fbef081fd44fc99"],["/tags/马克思主义/index.html","64b563f704a74e0ac807c3cd68370ff5"]];
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




