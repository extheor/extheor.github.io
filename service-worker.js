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

var precacheConfig = [["/404.html","dc1ee430c79f89b940e022a251e9f929"],["/about/index.html","6b9b4ecc916c6a6c184a4bbb54d55a77"],["/aplayers/index.html","f6017a5f020f329eaf0bebb1615b48f4"],["/archives/2020/02/index.html","4d1713e384434ca4842b354a46b92192"],["/archives/2020/02/page/2/index.html","803a86e0d4bbff8125667856c2c74a7d"],["/archives/2020/02/page/3/index.html","c85c13a594efc95f55633d88b235b59a"],["/archives/2020/02/page/4/index.html","44893b18653b078c013f553ca2994155"],["/archives/2020/03/index.html","30bc0022c8cb61d2845433b26da2686f"],["/archives/2020/03/page/2/index.html","e26287be187f2cb58c50496c9fc7498d"],["/archives/2020/03/page/3/index.html","29f14eff4e654b40bf9b8abf3a465b97"],["/archives/2020/03/page/4/index.html","80acd990b1594b15eedfe084c5b6e978"],["/archives/2020/03/page/5/index.html","113299e42f5c81357b4436102414e56a"],["/archives/2020/03/page/6/index.html","9ba30c3b208bff865c0e005e5bedd594"],["/archives/2020/03/page/7/index.html","029734c69c4afc39613365c65677575f"],["/archives/2020/03/page/8/index.html","e6a831a71fed90d3322edb36577d7522"],["/archives/2020/04/index.html","a8aa75080e6f6b200166e178d8de7586"],["/archives/2020/04/page/2/index.html","85f276cf4c99ce3c3aaf07f34e8a327d"],["/archives/2020/04/page/3/index.html","0e4f92b043870d67ceb4c7f7f3b01ff4"],["/archives/2020/04/page/4/index.html","f48c97a2f9debfdec6217a35badaa703"],["/archives/2020/05/index.html","4006fc95ddf73a9d0d370d88bbe4ed1b"],["/archives/2020/07/index.html","8db74e88d28657c00bb74d7927b58aa7"],["/archives/2020/07/page/2/index.html","1ea4c0933805e1e9292038cccaa16368"],["/archives/2020/08/index.html","e18ce5f8e9dbe6f5defa1af670f96b63"],["/archives/2020/08/page/2/index.html","6170e5afbdecc7e4388b4c429d74c889"],["/archives/2020/09/index.html","7e3979205f2cfe525cd6ddbb06bff340"],["/archives/2020/09/page/2/index.html","9617d892f7c212e90562af788a444a05"],["/archives/2020/09/page/3/index.html","69585f17e936fa38d0fafe4676ac11a9"],["/archives/2020/10/index.html","e79e07f6b5320e0d8f4f7a34ccc1adb1"],["/archives/2020/index.html","103a78d20b8d612f942c6046ff60979a"],["/archives/2020/page/10/index.html","51c8c3737220c45117307df1bbd31097"],["/archives/2020/page/11/index.html","93b2764ff42a11bfa8403ac659c978d3"],["/archives/2020/page/12/index.html","6eb82ef0eb0ad53048cacefd0654f458"],["/archives/2020/page/13/index.html","8391ef64de9f642d07e42e8adf4a5101"],["/archives/2020/page/14/index.html","22eff8c7f31881a1bcf5e56ac6340eea"],["/archives/2020/page/15/index.html","946f107c23e7f421f2bb6ae248c00777"],["/archives/2020/page/16/index.html","8cc2c57bede049282d3d62c0ac90be02"],["/archives/2020/page/17/index.html","8a79b98ea4fb0536d04eae9ba3f61013"],["/archives/2020/page/18/index.html","6eb3c831ca85d378231fe6aeffc295f6"],["/archives/2020/page/19/index.html","518d3540ac656f49b7312e8240fb0bf3"],["/archives/2020/page/2/index.html","23ec863161bd86e628e7430d3daef9f1"],["/archives/2020/page/20/index.html","fcdf2871e587016da64d75489abaea42"],["/archives/2020/page/3/index.html","6b8da0bc3ee19b0b8163860ce98287b0"],["/archives/2020/page/4/index.html","f5642e036887f4c94886fafb02e98df4"],["/archives/2020/page/5/index.html","02bfcdb3fad2317716c1ae2f2af1bd56"],["/archives/2020/page/6/index.html","6d578381e115d2ddc3bc4a3366acfad1"],["/archives/2020/page/7/index.html","16d9069a99541a8a7efd2caa6adb7d96"],["/archives/2020/page/8/index.html","12ac4a6bdf9993b5ac0138623b5a0c55"],["/archives/2020/page/9/index.html","4c08e514576dd9992cf88f241c31947c"],["/archives/index.html","d402df962ba1e9f32e8e6eeb8b0ba562"],["/archives/page/10/index.html","c405a6fc83be09537d1ac45201584d80"],["/archives/page/11/index.html","bbc1208167587b994f45eab0fd0d8ed1"],["/archives/page/12/index.html","c4e290c93ba2b232b23e6273a6810174"],["/archives/page/13/index.html","18077b9fe6cbfc7f3c6b453ba9612ca2"],["/archives/page/14/index.html","ce2362e38162742bd9dd332a8d43cd2d"],["/archives/page/15/index.html","5772a2215455f4ec6a3b29dc360ba20e"],["/archives/page/16/index.html","feb0e46b133f2b896c71e1313190c8fc"],["/archives/page/17/index.html","9ddc96417183b8607e0029f98b09cf03"],["/archives/page/18/index.html","7b71d4ca860ab20e709e6d67f8cfefc3"],["/archives/page/19/index.html","104a2ab3122c8b293c27c1a1e59777b0"],["/archives/page/2/index.html","b75a490654f90d7da0ccd1ee32f0b3d8"],["/archives/page/20/index.html","f62c338011694dd17dd3f25d8e338fda"],["/archives/page/3/index.html","9494a0d960b30a236329d0f79f5ab9b6"],["/archives/page/4/index.html","56aa99ca89631066d5c640eb39d43012"],["/archives/page/5/index.html","3f296c2123a3cf0c2738787a80ea2453"],["/archives/page/6/index.html","dfacd9d29b79d00df8d1222beb00332b"],["/archives/page/7/index.html","aedd3ff582978aee83a604043bb4876f"],["/archives/page/8/index.html","d0035fca0483b4e17a7cce33a8bd2773"],["/archives/page/9/index.html","e223ae599056b319673f6304bfd5384f"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","bce2da7528e62c371f88805631471831"],["/categories/Ajax/index.html","82d7ee17f2ac16e1a23ffb8b95ecf4d0"],["/categories/Ajax/page/2/index.html","e1904b3b70e0edba144df594f54d0b98"],["/categories/FL/index.html","23c6513b2181e71b9e95ea2ea1ecf39a"],["/categories/HTTP/index.html","2d9a658c520c4a2d8d2cfc16665c4b48"],["/categories/Hexo/index.html","c870e0cf0a16317a844e25354a8ded6c"],["/categories/Hexo/标签外挂/index.html","00354364d712d43876e0315aaea9d3cb"],["/categories/Hexo常用命令/index.html","85e927f6b23ff0831668e82122fecacc"],["/categories/JSON/index.html","e561d86c307b498e6cdce785b52ffc22"],["/categories/MongoDB/index.html","44f9e8e813c445d20c119449dda2eb28"],["/categories/Nodejs/index.html","5e358f7643b547b102b325c4a164e2f8"],["/categories/Nodejs博客系统/index.html","e44cc7a0b9cfd2411f478b8a240efa0b"],["/categories/index.html","b35f6f40562d97a2ad9bdaa693e8a75f"],["/categories/promise/index.html","fb35b1cf03a794a05692a5c9987c28f3"],["/categories/日语/index.html","1a17f4765f353caca1a7c2954e7627e3"],["/categories/自学考试/index.html","ed9309ac7bcebae12e2a8864fbeb5d3f"],["/categories/自学考试/page/2/index.html","860cee3ae3089e5fd9bd0148ba55d935"],["/categories/自学考试/中国近代史纲要/index.html","6beff253c862ac80ae0a2f8ef2003da8"],["/categories/自学考试/管理经济学/index.html","041eed201575cdfaa3a364852a4a38ac"],["/categories/自学考试/考前突击/index.html","62256537753068acfa8b14d1361866d3"],["/categories/自学考试/考前突击/page/2/index.html","9882629ec78f62f991577703fa572938"],["/categories/自学考试/计算机网络原理/index.html","ca632ae53de5e37031f78785123504f2"],["/categories/自学考试/运筹学/index.html","a146dc5468307f9a98224e919adbe339"],["/categories/自学考试/马克思主义/index.html","621ec1c6ef70f0d7beb386431443d771"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","fdbcec420b167b49322f54e21995ca01"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","21b9374f88a1692aa8b10c4153e1a182"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","e30782938fab7da485e5132b6318c1e1"],["/page/3/index.html","ee7d815e6eb085abd35514c1a396bbe3"],["/page/4/index.html","753771a095d6bbcf91193d22f17d4152"],["/page/5/index.html","9cd0d071106420f26e46d345709ba475"],["/page/6/index.html","4a4aa25b33450d1b337f60af54fccfbe"],["/page/7/index.html","450ed0a68295497dd71817e358bd3f33"],["/posts/10812f0/index.html","eb91236935f822e8455fc036910ff9d0"],["/posts/126b275/index.html","fbecd7d76e89ebed0a90a276ffdf9a27"],["/posts/12d95a5e/index.html","b18e908a974e6d7be4992769e2467245"],["/posts/1367417b/index.html","1d0d0aa93bd5e696a68585cb5265f9b2"],["/posts/13886e3f/index.html","f727508a7e5217fabe59e58c8d9f5c72"],["/posts/145193a5/index.html","a0c2366e9059e1d5c83111974672933f"],["/posts/149dde25/index.html","a7aa30d6539fb1646a0f9b3e4545b981"],["/posts/152fa65b/index.html","4a59a1de38b7e0405e62e18d15ac7807"],["/posts/169e7dda/index.html","6ade7d54abe8746b4cd68f963b2f6e8d"],["/posts/1875100e/index.html","27a835344a3d0b1dafa86cce9a0234f0"],["/posts/18eaef7d/index.html","853e1fd2c61c7956ae50c5825a8094b9"],["/posts/1a0bc7b7/index.html","e9cd6745ab5677c411a99c23bf00de8e"],["/posts/1a20a057/index.html","7b08e1773b3f9a83884c61ad23d8be96"],["/posts/1a998be6/index.html","1ba6649d4edfe7b8e1565fcd81b87063"],["/posts/1bffbd20/index.html","ef0e7465a31f99f37071337f64293efe"],["/posts/1c5a0485/index.html","d9e01925115076cfa8fbe0918027e446"],["/posts/1e638f78/index.html","402138df5643223685b430bce32e60a3"],["/posts/1fb53120/index.html","3783829c18103cbabc9578288de90dd2"],["/posts/21466e86/index.html","15e6cfe0106820f8c4ed25a03aac9c1e"],["/posts/21abcf1a/index.html","d25a98e9f4f5039f807b59ab8480e705"],["/posts/21c250b1/index.html","2073a9ede4a09586f7c54a485f416616"],["/posts/2287cc/index.html","c70f320e3f0037a3a67b4af247543c22"],["/posts/236bfea3/index.html","794e1c5388aeff14edc146f0407fcf5b"],["/posts/24caea6b/index.html","f0e25c184a29a526392e084ef9e32658"],["/posts/25d45c3d/index.html","c21d8d5ac0bcd3d824dcc868cbec6b1a"],["/posts/262baa9f/index.html","a494e2b21e50dcd94b202515bcc10244"],["/posts/27cdc142/index.html","49a1340e220bd345037c61f7c91c8368"],["/posts/2895c4bb/index.html","c99557684841e239fb146dd2f7ec851b"],["/posts/28987ff3/index.html","e524f6601c80da83efa450a63d3f84d6"],["/posts/29f0df96/index.html","84de72449b9dc3d41fd4f41081f3bda9"],["/posts/2a1d2b6f/index.html","ffa0f0356672981e24c96934c811fb4d"],["/posts/2a386047/index.html","500fa337c9dd04afb6fb25c54526f4a8"],["/posts/2b770baf/index.html","a994525077aaf6f99b2a23eeaa0031e2"],["/posts/2cda4a8/index.html","82b8dda7c03b94f24a88348e0933012b"],["/posts/2d020832/index.html","dca5999c17b28fcbf3e8d20c091a8127"],["/posts/2d6d3bd/index.html","9c60dc6678c8cea71f5503534d8f1fff"],["/posts/2e0c129d/index.html","24171f58abc3d931a8e500a2f9ef5097"],["/posts/2e7563a0/index.html","b50a5d4e4b96aaf9ce9270d3e5295422"],["/posts/2e7b8d69/index.html","d2bddeadc129f3127c9c31e1921f50a9"],["/posts/2f28d14b/index.html","678799b7da554ed341144bc91d9e9d86"],["/posts/2f6e1383/index.html","a801ead9bc83d14fe083306b75f5b30b"],["/posts/30bfd1cf/index.html","b7e2aac616a9ff988d444fc573480087"],["/posts/33235106/index.html","04135e9af512b68e1808aaf6ef1fefee"],["/posts/344e951f/index.html","b82b673afc9ddb099dd6ee243c83982c"],["/posts/35e2bcf6/index.html","85077c0dee3037e0c1d9f710d38499a3"],["/posts/365e96c5/index.html","f3aa629f3f913c00b57746ad7bf07711"],["/posts/36e331e3/index.html","df3681a599f04fb98f822acad832ff2c"],["/posts/372df90a/index.html","f2ee8968b876d55d72484926cf985cad"],["/posts/37c547df/index.html","cb9e538ac14f29153ac6112919b07edf"],["/posts/380dfa6c/index.html","bb1eb55a0a71514cd453c2e0ae469833"],["/posts/38a88481/index.html","74c8738e5d65a66c073f583dcbdb98c7"],["/posts/3914bfed/index.html","22928fbe235b2602f26c1f92579d91d2"],["/posts/3b56780c/index.html","886bc4f8e691e73d5183058ba8e4d941"],["/posts/3e4bb613/index.html","94e336f9a8d0d291b278b3e28dc19919"],["/posts/3f2e933/index.html","3a31e4bf608b6668d9373a6a670ca3aa"],["/posts/3f6e5f9e/index.html","336c0636457e30082c94686e73dd644b"],["/posts/4349a589/index.html","299a3e0adf5c071ea44549b39558bd28"],["/posts/44246190/index.html","1b46590a02eb59836a301a4b9e17ab7f"],["/posts/456550f/index.html","8a6287946cdb617bbc11d247a4acb00b"],["/posts/470ac03d/index.html","605e5669ec9e16f20ac074a2aa5614e7"],["/posts/49249ac9/index.html","ae7396c7ffba25a621ff3fc40bfb17d3"],["/posts/49f2d2a/index.html","9752b53f577c730861ca7300663d30be"],["/posts/4e6d4eb4/index.html","38a33c516269ff1a41ffd8b92c06eb68"],["/posts/50caf1d4/index.html","febbdf91bcf6545d7cc6067001fc1b5b"],["/posts/51139400/index.html","467d9fc80c54cb8609f4a0e9b4d4fdba"],["/posts/512c9a09/index.html","1bd6666bb688369a83ad7d2fa5a82c01"],["/posts/5205b330/index.html","7ac603fac4235fde098613ffd3995471"],["/posts/52d36cab/index.html","7db2b364a4163f0d6bf55217cccc5313"],["/posts/532a083a/index.html","287996dab9e22bea5ff7a4262792bf48"],["/posts/537d2c2a/index.html","cf6e36618f35f96e7cc9fd1fb4a66773"],["/posts/54383ba0/index.html","c8c6f754eb8ba9de11ffb8482d18c61a"],["/posts/54667693/index.html","8b3efe55b6807c6d8f56b1f576fc04ba"],["/posts/5508212c/index.html","c8c29deb4f6f6f94b5ec9cb6f1c710cf"],["/posts/571564e5/index.html","fe59a9588b4c3574a83615bdc0eb54e7"],["/posts/57900fe5/index.html","8210d72e45b9e58cd2b611964d083b5a"],["/posts/589a214a/index.html","c490c4b622868e15daafddf3dea83cd8"],["/posts/599a2b19/index.html","1cc3ee6203dab3af0288c0da58e750b3"],["/posts/59c05382/index.html","14dcdf8ab29dcb31c6742719b47121cc"],["/posts/5a5294c8/index.html","93ded354ab91474b32ac0920849570c9"],["/posts/5b8c69d5/index.html","8cfac8b71690c990b6f58ffc771487c8"],["/posts/5d3da28e/index.html","f78cea2bd2fb19aa6f9bf22adb3bf0a1"],["/posts/5d3f50d1/index.html","48d1add8b97adf5d9ab4285f6630f96b"],["/posts/5ef7ef00/index.html","ad6a2bbb49538a438f4d656634cc68cd"],["/posts/60b5dd06/index.html","c59bff6cfa9283411990caed3d3b69e2"],["/posts/61477045/index.html","68760b09bd29b8235ecf1f9a8ae82fef"],["/posts/69d79f93/index.html","06002eb047299ad2bc1ba08b428b667a"],["/posts/6b2f046/index.html","a0931014d50f23369c132e6eb055dbb5"],["/posts/6b4610c4/index.html","2f12bd07d692b8ad69fdcd2b4daf8e50"],["/posts/6bbf03f0/index.html","39c2160481947fe3d60dd98e6b7f7450"],["/posts/7000d139/index.html","33fbc7d2067fdefb8c515baa94fe2a1d"],["/posts/72f94093/index.html","6db285e1a17c58249a2ec9842281248b"],["/posts/7380b71/index.html","69854bb141c0b8264c81450aea104fe2"],["/posts/738eee3b/index.html","7ea2141280035cf9ad93670474f1b260"],["/posts/73981dbc/index.html","4e1088760f668895ce76bad6b274eff8"],["/posts/74d60fd9/index.html","79010e7b61401671bd0e05e6dc2a4ecc"],["/posts/74f5d9a5/index.html","6b0f625fb98e992d60a2f42520345852"],["/posts/750f2ce3/index.html","c950e132556c28bb6e35c766afd7ac11"],["/posts/75ceb627/index.html","d920f9663d6dde8b5356e808840ce667"],["/posts/7725b75a/index.html","3ac1e9e888b873854a76d6f0b0ff424c"],["/posts/79ef335/index.html","b3382a0eb98c1531a30a1a25f7afcdb2"],["/posts/7bbd3149/index.html","8adbf47d00f9c05b065ca8b219d5a6e7"],["/posts/7c20e8d5/index.html","b4cbfe60377674e3d48712dc810c7c39"],["/posts/7d3ea75e/index.html","29b3aee387b03b347b85f9414e1070de"],["/posts/7d43958e/index.html","fa5ffdae3d9d19c209078ccd159331a8"],["/posts/807ac7f2/index.html","2c1a3e05104d2bbb1594d25656e4aea5"],["/posts/81738fa0/index.html","278560fbff19a954edb8062a0601313a"],["/posts/817c41b4/index.html","3fc55ef0dde1f12f2a073b79cd1f11f3"],["/posts/84ee8e34/index.html","8d0878d71d13c3579ba1066e3798a47a"],["/posts/8837602f/index.html","b1f6027e564ad7f8392cb54179cd3aa3"],["/posts/89589a03/index.html","c67353208592dba5e092abb348f5b049"],["/posts/8bcef008/index.html","d79a95062948c6e144c7a8395e42824a"],["/posts/8bf9abeb/index.html","dc8fce93add3f03cf179440ea6ccc33f"],["/posts/8e5f5686/index.html","849a85a6d6fb2c6080f262e74edf330d"],["/posts/8fa6b8c7/index.html","cb2410763075bf3254f5f90e180bf977"],["/posts/9029a3de/index.html","c31f5ec6635e799e7e69427d5aa7e1cd"],["/posts/909d9a5d/index.html","e26440bedb738c323bd133e77651c347"],["/posts/91404b94/index.html","218756808f31ec73b36b70d5026b9ba3"],["/posts/932e3747/index.html","cc43ee1e71f302410ba7b592fbc72e1e"],["/posts/95fc9e6e/index.html","42ffb8785de5ffc52e42549577585819"],["/posts/98e67280/index.html","f3203092ea8d044f6369c2efd3a8aff8"],["/posts/9a4d13ef/index.html","df8fbc3bbc3ca8496573fbc24b8de70a"],["/posts/9afbb889/index.html","265a876b3ac3896c321d7dd107775b27"],["/posts/9be63ba/index.html","232a086290d6fd8548246b92250e8dc6"],["/posts/9d967c90/index.html","0b5603c7c0715a4b94feb38159f2675e"],["/posts/9eadcdf6/index.html","7c1f6fe6678313199249c99a2afe7a61"],["/posts/9f97db8f/index.html","27ee7fe18a7922d1d079c4eee019350e"],["/posts/9ffb4388/index.html","95df845ce41fd1a6e043507f0823844f"],["/posts/a094d027/index.html","efa69fd7238a77f9e52d44f314ccc603"],["/posts/a27042c6/index.html","9711f8c2b300c6287530744f8deb04bf"],["/posts/a29cc732/index.html","58d5546e105bbf2d2fd99bc6c1655030"],["/posts/a44a518/index.html","f27c720d1a24033c17f345e1bebc18ad"],["/posts/a4f2a748/index.html","5e07f757cf5ef7bcd55a6eae966cda86"],["/posts/a7dc32c9/index.html","2b4f47fa21694ecd6116b0f86b0097fc"],["/posts/a7f753ec/index.html","81cfde469fa4d50dac62cd5ffa5373f0"],["/posts/ab176793/index.html","2a47bb52a17092d23971d2e28f0afa2e"],["/posts/ab34095a/index.html","8af967a2fa0fcbb068294046e13b784b"],["/posts/ad47c4a5/index.html","adb305c2716b3bf84460aa15c88ae196"],["/posts/ae8f7b74/index.html","36590161c0a141a625f2a7c34c17b7fb"],["/posts/af43816b/index.html","f91ba042950a3bf46e1ac56606069d52"],["/posts/af9e049c/index.html","ff4d8cc77ece2d0ee48b45e203eb07d9"],["/posts/b0f1a367/index.html","544b245ce474d8673f8cfefac97885fe"],["/posts/b0f98e2c/index.html","4fac3c6f1a616dad7dc55ebaffb35a6a"],["/posts/b33131fd/index.html","e304d24b941bd36a30205f8f5b37afe5"],["/posts/b36eb520/index.html","7becf0f32f38e49604a4447a632e9af4"],["/posts/b542fc02/index.html","04bba7bbe6a1a4c8194cef9a73e592c1"],["/posts/b54eeeb4/index.html","b398dcd8ecb7562a526bc5b22bb25d1c"],["/posts/b84f3f3c/index.html","5f896e0500eb63a41f53cce7c6eb4fdd"],["/posts/b94fc207/index.html","f0408dd34427b7eb3d275614038bca0d"],["/posts/b981a6b4/index.html","77b1f66871c90642f19fe9bd5c1ce71d"],["/posts/bcea326a/index.html","14fcc8254bb6cc5c30f874d446bf469b"],["/posts/beb19e80/index.html","592db79d53dd69ad9b61a8ed6157d5cb"],["/posts/bec490f8/index.html","cf1dfd068001a959d535b5066f8882c9"],["/posts/bf7bde0e/index.html","5f577f5e91fa60237c6aa4cdc65609a6"],["/posts/c03f17c9/index.html","8fbdae557d5788250be3fd5871e8b611"],["/posts/c35bc572/index.html","fd5528f38bbf986c045f1ea112b40b74"],["/posts/c436016b/index.html","7b3311eb5596063a1e6273cb53026640"],["/posts/c4efc741/index.html","c2c561e1db717c20d13bb57f69bad878"],["/posts/c5e8a08e/index.html","067ff0ac3d1f8ee7b42112673d617201"],["/posts/c7db1dc0/index.html","282657c332777646c2b7be30949fdfbd"],["/posts/c7febeba/index.html","67d033762a2e4999e133e504c05b5627"],["/posts/c9c3a06e/index.html","5be50ab5b493794527624a3c38ac65fa"],["/posts/cc6d2cf2/index.html","05fa40ae5d62209c591802559c4f72cf"],["/posts/ce48f291/index.html","ad469ccdeac8ba2408cdfa535e5ac366"],["/posts/cf480faa/index.html","f7a32b100aaeb619d1abe5297dc8647f"],["/posts/d090b4d/index.html","4d8a6f57f4b99e5301229177fdeabff8"],["/posts/d1995044/index.html","8e864736189220dee1f944a27236caa3"],["/posts/d2d34977/index.html","0488230cc4f163699513940bf0a02f0e"],["/posts/d3647a92/index.html","56c29e564ae797f2c8d2ff0e7d203e70"],["/posts/d3f6b818/index.html","18a3a4b7e0414396f2394893cf3eb7ec"],["/posts/d465029c/index.html","58318f3369cafb4b854c6234dfedd6af"],["/posts/d9884be2/index.html","2169681c13163108de3f27d300ad258b"],["/posts/da40f433/index.html","ebadea0c6451043fcc0dd52dd4e5319c"],["/posts/dae71d5f/index.html","53fb3cc9b518584f97981f652c8bdba8"],["/posts/db9fbe47/index.html","5ed194ebb975b27ff675141b3a2d2e3f"],["/posts/dbba997d/index.html","8c978d8d38d169113b9a727087f8ea7e"],["/posts/dc94f8a1/index.html","a393611aa445afd7174967225b83002e"],["/posts/dfe9b67/index.html","8c5d365f9f08582435740165bd5dfe5b"],["/posts/e0387d80/index.html","6a7849983160163764cc897185703848"],["/posts/e356f7b3/index.html","455341e9c2c4e74d984bf3a8200975a7"],["/posts/e3acb366/index.html","56a6d2d39d3a6ece0415d3e5d2907c34"],["/posts/e450354f/index.html","8d3e1cd72e4c3a967d2d436c869e1c6f"],["/posts/e489223c/index.html","533b50b4347dfbf145ea9e94a7bca387"],["/posts/ea914c06/index.html","3f57f6b4d54e3b7ab931c85d0e966d7b"],["/posts/eaa8f31e/index.html","9577a10669373d6e74f30cec767e7100"],["/posts/eac19412/index.html","7e03164c91713f6824bb26b1d26385db"],["/posts/edfc881f/index.html","f40df40e286fbb6304d4dd8dfde05b3f"],["/posts/eec0bbd1/index.html","3000376b8d00be7edbcbbb5817268b00"],["/posts/ef22c7c2/index.html","d5325bc24e9ac9a6414138d64755ff39"],["/posts/ef271825/index.html","28e398545836912fbec946d9b0047e75"],["/posts/f209578c/index.html","1359d803904fa250286ac1c2c3e1ba38"],["/posts/f3e9bea2/index.html","bf44f02828c6b727d7bff5f920d1156a"],["/posts/f67b7122/index.html","892f89b81f40a40767a180194dc55dee"],["/posts/f7abba28/index.html","19349fb8ffc252611dcbdc8c8e61ef5b"],["/posts/faffd764/index.html","dd0b72ce654b1a4cc8a6cb07be9b9470"],["/posts/fb684fb0/index.html","a753f7f0928b55c35fddaefdb3be88a7"],["/posts/fc57199f/index.html","eea9c7f3d4aeb6745ee3285725ac0cba"],["/posts/fc6e9a7d/index.html","6bda80558fb7f061459b133c3611fa8b"],["/posts/fc7bc02a/index.html","09ac0d7db3ea9c6dfe990c46173a1526"],["/posts/fd67c5cb/index.html","53ea341e3c0fd4d979c2d3331c37d2c6"],["/posts/fdde061e/index.html","e061a622b3457201899a43d3f4718228"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/FL/index.html","4001c48567b72a32034e907ed4feab07"],["/tags/HTTP/index.html","fc6c8c42636e5e59f32a27151bb4e812"],["/tags/Hexo/index.html","17dc9b3cb6895c2287ddab3d80fe9139"],["/tags/Hexo常用命令/index.html","14499466b93375978723c4146c81edea"],["/tags/Nodejs博客系统/index.html","0e94760e40cc229be28f48eb0db7ed47"],["/tags/ajax/index.html","8f33ba9c7d0ee913f0316a3529cb440f"],["/tags/ajax/page/2/index.html","b329159db195b38a01bd0113df4def25"],["/tags/curl/index.html","f5b08db77e6f9c615bb8d89a2dc79207"],["/tags/index.html","12367c5ffa1a0507bb031bb0ed77b3c0"],["/tags/json/index.html","1b1747030f05c5d3cd1a95eabfe58553"],["/tags/mongodb/index.html","2fa2cd2409e51f3cef6502631fd628da"],["/tags/nodejs/index.html","1e85b69e3656d1e21b7f7c471fe15182"],["/tags/promise/index.html","c047d6f2a6a16a62f141c60f4b0f55f8"],["/tags/中国近代史纲要/index.html","ad4e6635779701914c3ce9fd288edefa"],["/tags/日语/index.html","eedacdb1290341b61cd25e9e50b8a15a"],["/tags/标签外挂/index.html","5e06ff34e8a3c007eba35034b62f806a"],["/tags/目录索引/index.html","6d5b58c7c72cdb3c3070c967be83e4aa"],["/tags/管理经济学/index.html","ef7fce0504ac51295c665ef2ea94d732"],["/tags/考前突击/index.html","7ac19153569685e928dbab1dc4d3e264"],["/tags/考前突击/page/2/index.html","c93c55d7ebd79ce917fd4785bac9b29f"],["/tags/自考/index.html","a401269d0d2c445dab25248f2efdbdcc"],["/tags/计算机网络原理/index.html","0499ccf3bb0f630bf676e8c490d7d2c1"],["/tags/运筹学/index.html","9ee0756a771c917688e0ecce476d800e"],["/tags/马克思主义/index.html","7595aa2b9d3af12eda817596e97cd0bd"]];
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




