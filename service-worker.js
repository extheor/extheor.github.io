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

var precacheConfig = [["/404.html","3e22cf38947a8e90adeebd0e46e12fb1"],["/about/index.html","c73a2bf8cbca2b6b14856b5f8d8361bb"],["/aplayers/index.html","95eb0c4daeb465a72548aa1ca70424a8"],["/archives/2020/02/index.html","aacb477863c69b39e13e9067e7235526"],["/archives/2020/02/page/2/index.html","a2925f658d5ff4372212f3402278d68a"],["/archives/2020/02/page/3/index.html","21103457dbe428b4c39f62cae658694c"],["/archives/2020/02/page/4/index.html","71cf1d35f2815c6f804d85ec32302d27"],["/archives/2020/03/index.html","423050e1f50349d88aa177c6fb1c5467"],["/archives/2020/03/page/2/index.html","97f815ad8f12acf97d5d568c97eea777"],["/archives/2020/03/page/3/index.html","23bbe5bc36d7964a5bc113edfa39a521"],["/archives/2020/03/page/4/index.html","2c45035c2b006a5822c4b57049bca8ce"],["/archives/2020/03/page/5/index.html","79d804c01353ca3f98fa7c28b9e5051f"],["/archives/2020/03/page/6/index.html","900d66a866113ce92eab3f0a540b3ae8"],["/archives/2020/03/page/7/index.html","fe15d559dea4f101727250d49b1de687"],["/archives/2020/03/page/8/index.html","9ad6a17258029e32eb8205e4973996f2"],["/archives/2020/04/index.html","86abe24c0166ce483884364736c5fbce"],["/archives/2020/04/page/2/index.html","5cae31739b136372b1054ce0f4883f5a"],["/archives/2020/04/page/3/index.html","bba019f9c9e9b6466fba1d9ad1ff38a1"],["/archives/2020/04/page/4/index.html","d02a3bd8669e52047c65579ba6d41e81"],["/archives/2020/05/index.html","476f7bd2fd3c5b13a7f5b3d01c5cf1ec"],["/archives/2020/07/index.html","b2472fcef6a01dae9271008d1df74371"],["/archives/2020/07/page/2/index.html","77d9673b239b18e8daa450f4124f8720"],["/archives/2020/08/index.html","1e21af4b30786de67a32eb3553fa414f"],["/archives/2020/08/page/2/index.html","2d1afd44e03a4adc9cb1f63c05c315b5"],["/archives/2020/09/index.html","c0eaa03740c64ca958b86eb4fce2a618"],["/archives/2020/09/page/2/index.html","911008d4b11932633cabeafeb3056285"],["/archives/2020/09/page/3/index.html","3f9e6e0090cb3f6fff7d73ed0622e61d"],["/archives/2020/10/index.html","bd1d4d37f0663168db2e63949074773b"],["/archives/2020/index.html","8ce0875bf38d782dfa07880e4e6a86f2"],["/archives/2020/page/10/index.html","34f46f8ad4ba4835281e615eb12cde54"],["/archives/2020/page/11/index.html","7783111a5ab9f824f8a8658e38a40443"],["/archives/2020/page/12/index.html","ef2d9b29aaebdb615426ea182221a02a"],["/archives/2020/page/13/index.html","3a39cb30bffd9c50ee0ffbb5a4ac072a"],["/archives/2020/page/14/index.html","a48cc8d1d0342e96f43c28bf95d1bca5"],["/archives/2020/page/15/index.html","049daaa3f2e995dce84d729feb47d890"],["/archives/2020/page/16/index.html","45277b01c98111d0fc49000017028757"],["/archives/2020/page/17/index.html","3ed7ac02a208503c2e8f963f54c68715"],["/archives/2020/page/18/index.html","cb3befa9b1d9738b7438c04123ef971f"],["/archives/2020/page/19/index.html","d4830ae7c1b5a1f4e4b60f2dc28fee45"],["/archives/2020/page/2/index.html","2ff526da94811eddaca9de9fe937239a"],["/archives/2020/page/20/index.html","896c1fae9048b79f82a03b01fcc3d4c4"],["/archives/2020/page/3/index.html","032c0f317324a4e865d6197461397a1d"],["/archives/2020/page/4/index.html","e13c7788dfbd13e67fbeb72a58763afe"],["/archives/2020/page/5/index.html","2b21730736ea7189be5025a7ffc1b5dd"],["/archives/2020/page/6/index.html","c2988e0d80808049109ee81e6d64fa0c"],["/archives/2020/page/7/index.html","f058a119d79ace7962d8c22a16d59aba"],["/archives/2020/page/8/index.html","eb49df57460b1550f3c4d585ae5f5706"],["/archives/2020/page/9/index.html","402520d7b4f32be8902df305dde41295"],["/archives/index.html","685e13e5f1b661afa64396cbff5ec51e"],["/archives/page/10/index.html","afd8314439c1683a8809aac9abbf3d91"],["/archives/page/11/index.html","ed33b493fcbe6faa5e9f28f8faf078e9"],["/archives/page/12/index.html","b7002070e5b724cd401df3e613882f9b"],["/archives/page/13/index.html","4a38d87cb45c08c2ae983cb9ca743328"],["/archives/page/14/index.html","4f2f12bb08da1b3d66b411c69e9ce98e"],["/archives/page/15/index.html","5bbba42a75d34170ef866b5aeb9a0a9e"],["/archives/page/16/index.html","c28adab870d7708af9f50c24eccb0248"],["/archives/page/17/index.html","5e358a12e447d578967f250fa2077239"],["/archives/page/18/index.html","dbb705bdfb5fdbbb1a81cfc86dd6c833"],["/archives/page/19/index.html","f622135770edf97d8a822e9a1f77c9af"],["/archives/page/2/index.html","6567976aa7d9a0c15ffaae8efe38f5e0"],["/archives/page/20/index.html","c6819816ebcdd3018b7ce77cc9d3d220"],["/archives/page/3/index.html","71b85b839d74925a9443b6d231849b5f"],["/archives/page/4/index.html","26ede8380f352312023d15de1bc4b5b3"],["/archives/page/5/index.html","58fba19c9582c2075854c5baf7cb150f"],["/archives/page/6/index.html","15ae97aa4e2310aa6099d0076dc294b9"],["/archives/page/7/index.html","b68c24c9fb1cc0a27a0e979be8a7d5e0"],["/archives/page/8/index.html","d71b567896c966961d3b12f72ee35ffc"],["/archives/page/9/index.html","f4819ea1331cb0db1eb1a16f49c23d35"],["/baidu_verify_code-f31n4EzMWu.html","5bb24409b3c9ebd970ae26c977ae4432"],["/bangumis/index.html","98aa1a7e63eb2e60d17d650ccb331843"],["/categories/Ajax/index.html","51e1dda7f85bccceb90894ee3dc7c8a9"],["/categories/Ajax/page/2/index.html","237551d23b4c9733c1d85a35bc2fba5e"],["/categories/HTTP/index.html","d00548a9bd53cbf4060c79212e4427e5"],["/categories/Hexo/index.html","22a2477533d07674f08822701849e7cd"],["/categories/Hexo/标签外挂/index.html","200e1c556a6d64ee89ea76c09af365f5"],["/categories/Hexo常用命令/index.html","6791d65f22e0d21105aba2bcdba3af05"],["/categories/JSON/index.html","1710ac25271a9b0c1c44cdb0208491ac"],["/categories/MongoDB/index.html","83cb4e11c2ccf299e1fb7915aed942d5"],["/categories/Nodejs/index.html","8cc81d349062bdd39a6cdfb7081bdb5d"],["/categories/Nodejs博客系统/index.html","f3d23ed67e5a815948f395bfb8ed50f1"],["/categories/index.html","2036bad2ccab041aabb8045f56f466ed"],["/categories/promise/index.html","aba0ee23713ef1e4224193438e47827e"],["/categories/日语/index.html","681d0aad1278d7f1763a320a40652d59"],["/categories/自学考试/index.html","1d7ee7c4d2d3d06fc73f8a8ac02e4e3d"],["/categories/自学考试/page/2/index.html","1fbe143b43fadc88d4d573adb4231007"],["/categories/自学考试/中国近代史纲要/index.html","a4bf7976d5f8a92de4a1ac2f1723a526"],["/categories/自学考试/管理经济学/index.html","d1726cb3dc912f2fc96dbbb74da38191"],["/categories/自学考试/考前突击/index.html","68b8f1cbe9c2dab982cd88383b0c522f"],["/categories/自学考试/考前突击/page/2/index.html","98e25569c1cf11e92936990edf6422e8"],["/categories/自学考试/计算机网络原理/index.html","f39df907a60c13e37a2af008f98b5a5d"],["/categories/自学考试/运筹学/index.html","ad42ec5c8725e11083c65f84fa9029c9"],["/categories/自学考试/马克思主义/index.html","006410cbdc5d85331ff389a57b5a483c"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","7f11c097d95e4cffe6d4eb9a913d678d"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","fa2373454622bd9410e482427e0abdc6"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","270796694bd64691e552fec4e3aab06b"],["/page/3/index.html","fa51ac7f407b612a288d165203b6f375"],["/page/4/index.html","63b00f06f1557af9a64627db864c8960"],["/page/5/index.html","7aeb7bd79e532848e789a17cd88df754"],["/page/6/index.html","fbc1c0150d2905f424ff68be69d5899c"],["/page/7/index.html","46f9120d8eaee64827041c84ceace4ce"],["/posts/10812f0/index.html","ce01304abc93559bf7f75fdae0f73981"],["/posts/126b275/index.html","133d54006fbd0c001ef88b50cd248129"],["/posts/12d95a5e/index.html","12c2ad4c835b49733145667b2afc86da"],["/posts/1367417b/index.html","8f34f6186a925503c5ec39ea58cdf542"],["/posts/13886e3f/index.html","aa93fd4d634d9f51fe132363b8bb2ec3"],["/posts/145193a5/index.html","15246dc8e9db3e5127ca815af835bbe6"],["/posts/149dde25/index.html","02c6c40fff5e9e35bf73cee042dcb7fc"],["/posts/152fa65b/index.html","10bb0fadf7cd102c0fadc200224bfa21"],["/posts/169e7dda/index.html","20d2533a5250edf3423dd96206e76a50"],["/posts/1875100e/index.html","df8a26c83e5db2b1075c1dc274c6d642"],["/posts/18eaef7d/index.html","1ea6d1940403d50672b958d7d6e596da"],["/posts/1a0bc7b7/index.html","649695a318e0f9781e2057fa55b67e79"],["/posts/1a20a057/index.html","4a3ff89c04b4746142a6aa5363c81ef3"],["/posts/1a998be6/index.html","f31ea1b7f10d8a446e4e957213aec4ad"],["/posts/1bffbd20/index.html","dc2e09aae61fc7c52fbe786dec585aaa"],["/posts/1c5a0485/index.html","d5415b67423a584f48911fb537cd7f8b"],["/posts/1e638f78/index.html","aa8c216692c0f2dc61ff8d0443b2c1b4"],["/posts/1fb53120/index.html","9c2cf5a388add7318bf7f33f385333c9"],["/posts/21466e86/index.html","2169913a9a3660c0a9ddacc7db20ee89"],["/posts/21abcf1a/index.html","18cdd41e3e8e6655b02b38f21d060828"],["/posts/21c250b1/index.html","8882788be93c4f6e3cc4506db62272d1"],["/posts/2287cc/index.html","77dd4e4c49d3f6ec5ad90af7a0ab8a1f"],["/posts/236bfea3/index.html","c6ae4f1799c04d10dcc7834cebf8ade6"],["/posts/24caea6b/index.html","25f22292317a89fd9a9c6789de7712d6"],["/posts/25d45c3d/index.html","b3bc85d3f687b69dd9895758e342efa0"],["/posts/262baa9f/index.html","0b1b5b3103c5f541235a7c596e0d9d04"],["/posts/27cdc142/index.html","630dbc0c7fcab34af4683ef5306c1e29"],["/posts/2895c4bb/index.html","d0eeacccec434dbaca499a82a59427d6"],["/posts/28987ff3/index.html","1a95aaf4c1e32d7aeee6b65363b5e0ca"],["/posts/29f0df96/index.html","a9610f9be81d90e69cdb1017c0a7115b"],["/posts/2a1d2b6f/index.html","4826fee48488ae7811c4bd95468c290b"],["/posts/2a386047/index.html","ce85d1d7030eed0a4f181f4b94a233b8"],["/posts/2b770baf/index.html","2d3352832016d7e7128d7acd36ecdb26"],["/posts/2cda4a8/index.html","4cf8c0d895d99a761a7a4acc43526f33"],["/posts/2d020832/index.html","3f95f6ae4ec13c3959ee3a3b9006b8b8"],["/posts/2d6d3bd/index.html","97098b7096c8ac68062d47d1888d51ad"],["/posts/2e0c129d/index.html","19dd1591071adbb9e74dfc736f52d34d"],["/posts/2e7563a0/index.html","7d94821707d063fab2bbff1830b81c80"],["/posts/2e7b8d69/index.html","109c283469b296e8a2730259c5d95bb5"],["/posts/2f28d14b/index.html","2d97042073eaba8e8f90e7c007717500"],["/posts/2f6e1383/index.html","b3201f99521fa04c09655c7cedf28640"],["/posts/30bfd1cf/index.html","285e360ebd09bfaa4ee4b24057b138f1"],["/posts/33235106/index.html","8d18657fff179730ec93485dea0f36fb"],["/posts/344e951f/index.html","5acd4e9bc59b22bc13068622da494d88"],["/posts/35e2bcf6/index.html","8b11d6cb37172afa78a7ff3ffc806482"],["/posts/365e96c5/index.html","7f18489b4d72a71ee545883afc00b86d"],["/posts/36e331e3/index.html","185fbc0e5a54b15c3e35b3c515e0aa51"],["/posts/372df90a/index.html","eb718aa71e8c94b0597a6cbc53af87fb"],["/posts/37c547df/index.html","3d75ae7d4cb694c0a86152353e896516"],["/posts/38a88481/index.html","622d5209f1b9d58e1ab8417d43739cba"],["/posts/3914bfed/index.html","38de3bf4822085f771a05baf7f8a7eae"],["/posts/3b56780c/index.html","a4d976083469e933fdaa44d2fe255af5"],["/posts/3e4bb613/index.html","14059f69de51f5a25acaa4fffadb14e3"],["/posts/3f2e933/index.html","d7b2c6123bb75bdf1d2e51b7ea88eac3"],["/posts/3f6e5f9e/index.html","b7f912c7365f49dd20b0350428df6cdd"],["/posts/4349a589/index.html","7d130bbda3ae0b67dd57d2b4352c7a67"],["/posts/44246190/index.html","ff8025e8d59cdce92f5152e5c934ab2c"],["/posts/456550f/index.html","e5aaea7b532a4895629a4a577cdd9f9b"],["/posts/470ac03d/index.html","04317510501d6cbf9b3e546306784e26"],["/posts/49249ac9/index.html","954548b4385db3b57fb37d7c00a78f82"],["/posts/49f2d2a/index.html","370fcdc521058882df1930ff17a5401c"],["/posts/4e6d4eb4/index.html","819b648a2b6209187850e3d42c067eb6"],["/posts/50caf1d4/index.html","a8ecbaf0a7a5c0fd73f35a037686a1d3"],["/posts/51139400/index.html","7d98e9fe4324fb7f9970d0d533de6d71"],["/posts/512c9a09/index.html","98ea160c5d656dfb6cf540e610d03115"],["/posts/5205b330/index.html","69ae40187cbc8fdeb1c62e4c6293406c"],["/posts/52d36cab/index.html","b684e260e643a8646cd8f927f07ca94b"],["/posts/532a083a/index.html","b3a3d78c535af34adb820cd1b0056163"],["/posts/537d2c2a/index.html","8dc0d704c25a79158b829a2426e0cbc7"],["/posts/54383ba0/index.html","3f01944d9f0d23c1bf29d49d905b07b8"],["/posts/54667693/index.html","237294c7135a08fa2bfd4438dc428a04"],["/posts/5508212c/index.html","01f583b6ee878df9db97cadff98c6ad7"],["/posts/571564e5/index.html","3b4619a0f04ba31cde54e6d3e532c10e"],["/posts/57900fe5/index.html","f613cbd432ee8b42a582978b01e625b8"],["/posts/589a214a/index.html","090a92ae6cb59622b19d75db2918ec15"],["/posts/599a2b19/index.html","c93e6429244e7608651c15e30e720745"],["/posts/59c05382/index.html","5cd6e391085b03ee8d99a1cbe85f2070"],["/posts/5a5294c8/index.html","45557f88f6ef7d66e6d9bdb7901d6020"],["/posts/5b8c69d5/index.html","37f4d83cf4a602057198d6e0638c1975"],["/posts/5d3da28e/index.html","7daa54638c884288fc13d99d6c7bc705"],["/posts/5d3f50d1/index.html","290f796e3673c3da429608704bab4580"],["/posts/5ef7ef00/index.html","ade0feaade822a8f2476ead99879d79b"],["/posts/60b5dd06/index.html","80a8642ce0bf33e87242c4067f54a935"],["/posts/61477045/index.html","998e6f1a8cca5b783385a9e34774b228"],["/posts/69d79f93/index.html","c098676e200b4cf3332bf453c92d6f1b"],["/posts/6b2f046/index.html","b1049e8a7250a7e31df84681c1d10c66"],["/posts/6b4610c4/index.html","a677fb51a96efe035f5c08f6ffeb277f"],["/posts/6bbf03f0/index.html","7b4931a45fa89d146b558991e3fe9446"],["/posts/7000d139/index.html","d2d1d3326ed24b3e381cb842b866334b"],["/posts/72f94093/index.html","59a2b52758917d1c464e2a243b30a9b2"],["/posts/7380b71/index.html","152929eb53afbb7334227562b6125027"],["/posts/738eee3b/index.html","d16cf5cc7913cc9d461214fb5bd7ff47"],["/posts/73981dbc/index.html","3fa8e196208e1f1e1cce192e0a9db262"],["/posts/74d60fd9/index.html","13ea8452bc54e269a3394eeae23b8dbf"],["/posts/74f5d9a5/index.html","579312fba60b02809c8fac7c01a1d516"],["/posts/750f2ce3/index.html","dbd82a24278384ba877918d38518c594"],["/posts/75ceb627/index.html","11dca14c6e2eafe7d8ea4c37f82eb15a"],["/posts/7725b75a/index.html","2e4e26f632e460f9458df4ef874374a4"],["/posts/79ef335/index.html","0b46b475a4b69a488f8342b4bf9894de"],["/posts/7bbd3149/index.html","24d0525df25da4ce0fe41f44f5de6252"],["/posts/7c20e8d5/index.html","0c19a6e0e8f87ebcf09fd0eb7231be76"],["/posts/7d3ea75e/index.html","660258f21f23edd33a0aa6b373263e49"],["/posts/7d43958e/index.html","5d3938d50cc24751367cfa7390fe4cc1"],["/posts/807ac7f2/index.html","6839a2b87bae34eb716e0901c9710385"],["/posts/81738fa0/index.html","1bfdd027e87152156b6e14e389f0580c"],["/posts/817c41b4/index.html","c7040a0b3c735d832f252d5c20ea92fe"],["/posts/84ee8e34/index.html","3c163a52f23a7bdf08df87b12deb6557"],["/posts/8837602f/index.html","4c5450cc428a4ccfba819e7d7c2918aa"],["/posts/89589a03/index.html","cc9bde80737204c83d5adc804bac6940"],["/posts/8bcef008/index.html","5a6f22b37d40bcad37df5ebb1e64fa21"],["/posts/8bf9abeb/index.html","229401f4a9f4a483da470a8339e1e19a"],["/posts/8e5f5686/index.html","ad65c8fe75013086e5402b64f61f5976"],["/posts/8fa6b8c7/index.html","08cad670a1ee3f7cb3254221ef00024a"],["/posts/9029a3de/index.html","7b01c321289aa927fd989de55da6b76b"],["/posts/909d9a5d/index.html","3bd450eb238d9f852801207c5702f335"],["/posts/91404b94/index.html","9f10e708cdd737b632edfbe3123621d8"],["/posts/932e3747/index.html","3c94640175ab784829c439f92a0b07aa"],["/posts/95fc9e6e/index.html","b8c2fc3d454da60f86e3dda8db610ce8"],["/posts/98e67280/index.html","41b0117afb5e83cd84bc09459b10530c"],["/posts/9a4d13ef/index.html","874597918805baf9904bbc9b742536ff"],["/posts/9afbb889/index.html","6217bcedd84f037fcf927f8499ccafdc"],["/posts/9be63ba/index.html","35d5a1ec66980ba9fd8d7857672af8ce"],["/posts/9d967c90/index.html","327c04a6447457a2860c58f27b049bcc"],["/posts/9eadcdf6/index.html","ba2c3eecfc09205c8cd9c04871da2a68"],["/posts/9f97db8f/index.html","a9f80befe9f8aa729f1f00e910882c90"],["/posts/9ffb4388/index.html","c997f59def2f3392ef9ce42901f0e182"],["/posts/a094d027/index.html","d8d19f95ba575bf55860a1eeb32a4418"],["/posts/a27042c6/index.html","e2cf511256a8c5bfd386739fa8358c59"],["/posts/a29cc732/index.html","e4ed466dc38d92e61410dc93288199d8"],["/posts/a44a518/index.html","29143ec115378f94620349d955fcccdb"],["/posts/a4f2a748/index.html","422f656a360e2a42b77b988dd12592eb"],["/posts/a7dc32c9/index.html","5472ebd7718a40a0cc11f5b450650d15"],["/posts/a7f753ec/index.html","6f23e87998564eb1adc60dc83cae5bc4"],["/posts/ab176793/index.html","2a5ccc91a8dc65df3d560dead63c86ea"],["/posts/ab34095a/index.html","c62d6be3cc670366b8372d9602c3fe69"],["/posts/ad47c4a5/index.html","1aa056cc77632cc878f4390545e12f24"],["/posts/ae8f7b74/index.html","0b7cc2bfd64d925bb312da21d3bbe94d"],["/posts/af43816b/index.html","491c409e4adabb48b435877d576a75d6"],["/posts/af9e049c/index.html","717ca72b1581bd264cccbe23d0dc57c0"],["/posts/b0f1a367/index.html","7658f0b5ae3b7b6e9f96f862407f773f"],["/posts/b0f98e2c/index.html","a9a642b372831927477c8831a5a540f2"],["/posts/b33131fd/index.html","b4ee3e7e0dbd582f6e6abc2e33dcbc03"],["/posts/b36eb520/index.html","e0ac6073a23b20a4aaa0aebd3308432d"],["/posts/b542fc02/index.html","2023a2b41a651d272d4b23541c6ac472"],["/posts/b54eeeb4/index.html","daf87ac479b6c9c9ad69f799438eb722"],["/posts/b84f3f3c/index.html","e758d9fde1e71c09dea54b1a7cdb730f"],["/posts/b94fc207/index.html","4c1a729eb9ceb1559cfa6f466bd335df"],["/posts/b981a6b4/index.html","17b1909ded8b5eb6773cb39e1bed82d1"],["/posts/bcea326a/index.html","944a6c97fde7aba1180ad359c456dbbc"],["/posts/beb19e80/index.html","b81e4983d26ca5c985eea425f28c131d"],["/posts/bec490f8/index.html","ac71e987e88f49861a12763d2351e8bb"],["/posts/bf7bde0e/index.html","d786633d4bc24594cc738958e1e90dbc"],["/posts/c03f17c9/index.html","8003a9f63052a92dd77db3bb297eaead"],["/posts/c35bc572/index.html","ee7724137568054cfbb5223f8c344517"],["/posts/c436016b/index.html","9852e6fddbd7006454986d6987de9a94"],["/posts/c4efc741/index.html","ed7ebd29cad7f984e7eca6c2c50ef1bf"],["/posts/c5e8a08e/index.html","93dc0094c896b4a0bad75d3b92573f72"],["/posts/c7db1dc0/index.html","510c0f596c786f42f7a1dd6d2afa1baa"],["/posts/c7febeba/index.html","7d14ad144162533b86383ecf9eec09a8"],["/posts/c9c3a06e/index.html","0180541126664035c9b6be9770ee287a"],["/posts/cc6d2cf2/index.html","c234911348cf728a6fb052edf0d3a253"],["/posts/ce48f291/index.html","1b52c8905fa11d413ba7b1af50546c4e"],["/posts/cf480faa/index.html","383026d394a8cb8cb2245e4fa92d0996"],["/posts/d090b4d/index.html","42dda422ff4fa8b7464acde3b978905f"],["/posts/d1995044/index.html","b1619a75bd4352cbf9523cb03dde0098"],["/posts/d2d34977/index.html","db1fa758ea9225e986eca76a009d7a4a"],["/posts/d3647a92/index.html","4da21eb279da433857d997d305a01b3f"],["/posts/d3f6b818/index.html","3f504b8c1617cf445560e22a9e85b4b9"],["/posts/d465029c/index.html","1b8238859f4b5fe9247253c2f951b051"],["/posts/d9884be2/index.html","21b358d870ee952c572ad729e3986e8b"],["/posts/da40f433/index.html","90229e0bd52af379834074adf3760371"],["/posts/dae71d5f/index.html","cd744f1114b70122a4f978e2e28c18a7"],["/posts/db9fbe47/index.html","3095bf4755dd33a3d0f5908f1e4100d2"],["/posts/dbba997d/index.html","199a0b565b086e581f3b0a26b0077a2c"],["/posts/dc94f8a1/index.html","94cccc07496aaf821483f5c8e2662262"],["/posts/dfe9b67/index.html","277e232b49b892fd0db096d964bcdc15"],["/posts/e0387d80/index.html","37b849cad163482b9da8e20755fb34a0"],["/posts/e356f7b3/index.html","3dcdcc22d572493274722a71c38673f3"],["/posts/e3acb366/index.html","4991fe567bc4807c184f2b8625fa5799"],["/posts/e450354f/index.html","2e3d94d8e5f4804fc7d0ac1d71c57ee9"],["/posts/e489223c/index.html","9669a3e75c25acfe79f40ef717d6a7a7"],["/posts/ea914c06/index.html","db41407fc64f070f72e2132ffd5eb601"],["/posts/eaa8f31e/index.html","5627fb541e2cae0743636cd15aa53b23"],["/posts/eac19412/index.html","ecc14ee0f7fdd1bbe3d2efde3a053763"],["/posts/edfc881f/index.html","a1da1d49918af74a393bc2b78d9eeaeb"],["/posts/eec0bbd1/index.html","ccafc4ead36b7ff97f71dc90700f3b9d"],["/posts/ef22c7c2/index.html","fca721f1e0fb83ece5af1028f88440e8"],["/posts/ef271825/index.html","b959030fcdfc08e8de3c47464d156468"],["/posts/f209578c/index.html","328e4b157ac225cd26e2c7d67ecac2e5"],["/posts/f3e9bea2/index.html","ed1eb7fbcd5e5198eff226716a4ed259"],["/posts/f67b7122/index.html","b975099f8df0fff10c71b20ba15d8aae"],["/posts/f7abba28/index.html","083b915dfa5fd1f078eab440045632c0"],["/posts/faffd764/index.html","810fb505f4f518c0943f4a3588f75b7c"],["/posts/fb684fb0/index.html","72dadd10a5228be5ef5b5a78568a8f64"],["/posts/fc57199f/index.html","538755789b0e0e19c68b8cae4db080dd"],["/posts/fc6e9a7d/index.html","e07958cc8b790587ed95805ddd147b47"],["/posts/fc7bc02a/index.html","1a28f56a8d16dcf0cebcaf3773f0d5f1"],["/posts/fd67c5cb/index.html","96efc71c4947d27a7789a40e76668bc8"],["/posts/fdde061e/index.html","0a239cf15cd9f43de55f7ee1906ef2ff"],["/tags/HTTP/index.html","545d86015b704f0d60fed290797886d5"],["/tags/Hexo/index.html","4b4b0b6f9b7eaa9451085beca3307bd4"],["/tags/Hexo常用命令/index.html","3028d05122715ae57f3b5f75d1d5e6b2"],["/tags/Nodejs博客系统/index.html","fcb2a36894e1d76185088d3fbce222c5"],["/tags/ajax/index.html","27dcc1f810d50ea0179206edb4f0c02c"],["/tags/ajax/page/2/index.html","3f5ec0dbb4de50adffc0d28e2fd9fede"],["/tags/curl/index.html","0d52d703c602193c46714a0d688ffedf"],["/tags/index.html","a7e3809f01039fbed552d3814b9770bf"],["/tags/json/index.html","4952c41f13b89813ad5e3850ba3973ba"],["/tags/mongodb/index.html","60c258cd35756343df8b6acf9a526a1a"],["/tags/nodejs/index.html","83373bf9fd015efdfe9ddedfc5a87240"],["/tags/promise/index.html","f810c1710808ca1afd2d19db3551bb28"],["/tags/中国近代史纲要/index.html","0870393a038c7a79e43c46dbf11bd591"],["/tags/日语/index.html","212abe4331e848462a58977fd5f25af9"],["/tags/标签外挂/index.html","cab8a8ce6e00a628ab57c0d6b018a1b7"],["/tags/目录索引/index.html","ba277b326aa0d6ab6cfaafe8b66cd08d"],["/tags/管理经济学/index.html","0e97834981e6d894c85364a44cfb28ee"],["/tags/考前突击/index.html","c493c478c0f6033412a3178190897faa"],["/tags/考前突击/page/2/index.html","95dd913f7b715cea38a28c827af70608"],["/tags/自考/index.html","64a3740eeab5a8261b0195851e41cd17"],["/tags/计算机网络原理/index.html","75097f0a55ef31f114df3f1177d753d6"],["/tags/运筹学/index.html","d28de2022ca12f7e7fd4ff96525caad0"],["/tags/马克思主义/index.html","381471f6f7e51cea03324f1bc0c04e9e"]];
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




