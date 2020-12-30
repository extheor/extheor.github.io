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

var precacheConfig = [["/404.html","4cabf087a77a9eda9186ab357c70624a"],["/about/index.html","7d25b3c891d9684ed891c14f4b236c6d"],["/aplayers/index.html","ce7569508d286b38903d644afec0e3f8"],["/archives/2020/02/index.html","61c7d0fb0775da3e1a3b51cddfcd0810"],["/archives/2020/02/page/2/index.html","911b8180bd74d74cd4969fed9e7478c6"],["/archives/2020/02/page/3/index.html","66e746d03b0fec4987b556d7fe883c21"],["/archives/2020/02/page/4/index.html","6467032ec486dd07aa6f7a2110934ed2"],["/archives/2020/03/index.html","cce153c2b83c095543999658819e96c6"],["/archives/2020/03/page/2/index.html","d805b6b1f12858bca752281e23ec3ad1"],["/archives/2020/03/page/3/index.html","f4a406e333db8c4bd929cac9d757a539"],["/archives/2020/03/page/4/index.html","865546fcc0358bf329c17b075d7bf892"],["/archives/2020/03/page/5/index.html","f2003922ad793ac0d3784219757d7be3"],["/archives/2020/03/page/6/index.html","88435b92974599ee7f47657831829e8c"],["/archives/2020/03/page/7/index.html","d0d0ec2ac315b5d50c97bb53f186d7fe"],["/archives/2020/03/page/8/index.html","a73d306c32950db27e091585c0c43671"],["/archives/2020/04/index.html","2e304ca4cf90b97eef3a6c6ed28d03b7"],["/archives/2020/04/page/2/index.html","2801fb02f811de2cd8fd83158455a2d2"],["/archives/2020/04/page/3/index.html","bff97a309fcc30462394f65124d8da6e"],["/archives/2020/04/page/4/index.html","f3469c4cec69bb77cab97b6b99e02ad9"],["/archives/2020/05/index.html","3f622464f5aec60164d331208be3d905"],["/archives/2020/07/index.html","d3ab577cf2b70581809621a27431d9a2"],["/archives/2020/07/page/2/index.html","28a7eefde2838dbb1035cd3ba24ab001"],["/archives/2020/08/index.html","21688e7cdc53cd1358f09b010e979cf8"],["/archives/2020/08/page/2/index.html","afef628aa1572c980712aaf85c56aaff"],["/archives/2020/09/index.html","37042dc366965f218964b11bd738caa1"],["/archives/2020/09/page/2/index.html","8dd4daef39ae4c08a05f77e8ae974db1"],["/archives/2020/09/page/3/index.html","7076fe4bde2967dacbc35fb04898b126"],["/archives/2020/10/index.html","959c2d8488d532abbe8818e79f78196f"],["/archives/2020/10/page/2/index.html","f25e1e5933ebae0ff1aa1b52c1743187"],["/archives/2020/11/index.html","a4f4803f958dab960f4b03bfb052785c"],["/archives/2020/11/page/2/index.html","9bcf6653763cc3ae6302ebce666ed887"],["/archives/2020/11/page/3/index.html","79bd8e941d250946961e3254c1fc44eb"],["/archives/2020/12/index.html","d707b538b9b12ed0b330eb98bcdc11b3"],["/archives/2020/index.html","b6539a7c96ca349d4ae6c6299850eca2"],["/archives/2020/page/10/index.html","cd5f2c05aa614f862f61b869d5da6b22"],["/archives/2020/page/11/index.html","ba3f6268afc53f1a904ed5751d908cdf"],["/archives/2020/page/12/index.html","62aad39f2916ba5b218c7983bf73f434"],["/archives/2020/page/13/index.html","5f670a29e5b6b4af8bef2f16ddaa650b"],["/archives/2020/page/14/index.html","6969177ef304503e5eed05b90c947c3c"],["/archives/2020/page/15/index.html","c3876821c2b7f51e7a42f69b963cd546"],["/archives/2020/page/16/index.html","b2574f277ef931ed6f2196e1fdb37184"],["/archives/2020/page/17/index.html","e581754b280a5b765b85f70ec6ce3ab0"],["/archives/2020/page/18/index.html","401083ad881564b80ee677ae8998f490"],["/archives/2020/page/19/index.html","2804b1a2b0fd782fc75080b4bab9c6e3"],["/archives/2020/page/2/index.html","796e7ba8cfcadd8036e290d9ea623a4f"],["/archives/2020/page/20/index.html","596010eb3b49a71769ac9e1f046a420d"],["/archives/2020/page/21/index.html","2b883a802c07091ee4982334bc68e117"],["/archives/2020/page/22/index.html","1317763520ec12147aa55555ac4a30c2"],["/archives/2020/page/23/index.html","6c171255a92787c359170ae0beae7410"],["/archives/2020/page/24/index.html","1b9cc3a9c1cb5516b9205d79f8e21468"],["/archives/2020/page/25/index.html","0edfe12edcabddeef073eaecd8365cdd"],["/archives/2020/page/3/index.html","eb1fbc61ed1be8d323d743666b223841"],["/archives/2020/page/4/index.html","82959afd28f24308cfae86cb66fa6fbc"],["/archives/2020/page/5/index.html","c0af5fa4d5bc3aae252d38cd9fa791ba"],["/archives/2020/page/6/index.html","727c7ac9cfb4eac12a9efb5b46600d8e"],["/archives/2020/page/7/index.html","24b9aedd141b82129eea50a77f351788"],["/archives/2020/page/8/index.html","1a71f90c76625ad4d8476d0ee1b8afc2"],["/archives/2020/page/9/index.html","f40916483b768c29caee2ea261276354"],["/archives/index.html","44c444026fbed7f1cf375575cd55127a"],["/archives/page/10/index.html","b5fd44f4c735db5cf5931c62aa43bd68"],["/archives/page/11/index.html","fd051b508c19550ae0df1733f0c0b9e9"],["/archives/page/12/index.html","8ee8a8fedf911b84c6958de88770addc"],["/archives/page/13/index.html","5975199cc213ac537f1c8b3f12ab0436"],["/archives/page/14/index.html","b3394ad8d5ea5786bbdd019d5dc1842a"],["/archives/page/15/index.html","a48ae0f491f5b88a1e29a75dd46161f8"],["/archives/page/16/index.html","64d4602b1312230370c8e07e56b34353"],["/archives/page/17/index.html","c4f51a8a60f2d4c62fe8fb633e0b3f6f"],["/archives/page/18/index.html","226eeeb16dc5859e9ddecb5d8bd4c23e"],["/archives/page/19/index.html","34b42bcd1484342151be44b3a7845e1a"],["/archives/page/2/index.html","ac430d4e56c076eb5721d67a47d4e4da"],["/archives/page/20/index.html","10f12b3cc2a2877c15f346aed5cf32af"],["/archives/page/21/index.html","681aade3a619fdfff0da1329ee844f7e"],["/archives/page/22/index.html","ff6443fa022fd9647f3037dcd8688456"],["/archives/page/23/index.html","ba959c5c37b2bc99a2e4a91978a78884"],["/archives/page/24/index.html","736609941d939c5b1e874fe36397d3ed"],["/archives/page/25/index.html","204229366d6eacec3588e4e1fd3c6054"],["/archives/page/3/index.html","76d28cf07d54915506603eb7e4312a2b"],["/archives/page/4/index.html","252202a281fb8c3555b6d48134deacfb"],["/archives/page/5/index.html","9c1ed536ae284de44513995d7e6dd45b"],["/archives/page/6/index.html","f57693d57f416c9e331e48b702b8dfe0"],["/archives/page/7/index.html","a6df7472c0cb8982bb669d3f70b30bbd"],["/archives/page/8/index.html","f0046888d60e53d47da17bf1da3ef1e8"],["/archives/page/9/index.html","4587ae99803d7c7c5b99c9bb2bcef5c0"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","ea5f2d74ea4dbc6041ac94726d5554da"],["/categories/Ajax/index.html","cb713362c3040a6d849fd02020f5d527"],["/categories/Ajax/page/2/index.html","5be10997885b9398838c5872e4e6e594"],["/categories/ES6/index.html","cd4ad1ce41a55806f16f8ca94f1ce517"],["/categories/ES6/page/2/index.html","d0ff55bc5d90afbe9c141d8b267022d1"],["/categories/FL/index.html","4888d8419abc48ae7aa9a52cb045ef71"],["/categories/HTTP/index.html","70551ef36cdf6e16ac159d31e3dc5ce1"],["/categories/Hexo/index.html","96d866c48f1fa88fb758876058f82c67"],["/categories/Hexo/标签外挂/index.html","1df0adc3867dcdb6e3cdd71593ec5b8d"],["/categories/Hexo常用命令/index.html","f09f4ab8c8facf0524dba4f77f2a0cce"],["/categories/JSON/index.html","b09316c5ee6e9a0fc35ef7a0a352620d"],["/categories/MongoDB/index.html","fd27ad050831802308f51d15e1f7dcfd"],["/categories/Nodejs/index.html","1418e9c93b72d19d4f8d3a3cba580d34"],["/categories/Nodejs博客实战/index.html","69fa62a48d4602ad6ffadcbcd3a038e5"],["/categories/React/index.html","9f7576bddfd0c287e1d790a9c4cae0fa"],["/categories/Vue/index.html","821cd2e5388996393c06665884838446"],["/categories/Vue/page/2/index.html","5b90f71772b1699dbf64d2b74c9b9ff9"],["/categories/Vue/page/3/index.html","cb6af024391b38eb016f0613f1fb1037"],["/categories/index.html","56e79e3b86cba1bb9ba736a7d8ba6498"],["/categories/promise/index.html","ae509794cb23e17ed074c6acb334cee3"],["/categories/日语/index.html","2d5c49d7ad9b3704b867b8b5cad65ca0"],["/categories/移动端开发/index.html","a38b4a491f9622664c1ba4ed5d7c65e7"],["/categories/自学考试/index.html","d557675c37990432c93c571ca8c569f0"],["/categories/自学考试/page/2/index.html","b095684c94a47b23aa628e74ca217a5e"],["/categories/自学考试/中国近代史纲要/index.html","6c0fdc3e8fda2f7e6667dc39ef135612"],["/categories/自学考试/管理经济学/index.html","d90ecb53b0c37e8940760a077857a80e"],["/categories/自学考试/考前突击/index.html","5192a818f5908c3abed4c246cb5c280b"],["/categories/自学考试/考前突击/page/2/index.html","c7d63aa71b663a2263d29485cd057043"],["/categories/自学考试/计算机网络原理/index.html","047dab11f8e97ee1728dcae95bb1f1ed"],["/categories/自学考试/运筹学/index.html","e74b890209b622c384396dd5621b5bb5"],["/categories/自学考试/马克思主义/index.html","c983964fb0dff33c362b79acfb98aa0c"],["/categories/车技/index.html","e6652cc444fbb9537759647a923fdf2b"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/favicon.png","831793361f36a5524d7c2c8e5a5e791c"],["/images/flags/flag-cn.png","aec786dd377f7498121b2b989285de13"],["/images/flags/flag-us.png","4e484b374a934ec7a0c318fa3039a18f"],["/images/logo-collapsed@2x.png","5a7921ae91c9497d9c479db2ed247271"],["/images/logo@2x.png","7dff419a181fc2ee0d21e7759b9fdff5"],["/images/logo_dark@2x.png","7618f56d3783393049d5486b34c83f1b"],["/images/logos/github.png","3ca867b4d49b00409911b0e7d221993d"],["/images/logos/myblog.png","c65b405af280672770a5e68dbc602608"],["/images/off_on.png","1bdd36870ded5c5d39e24fcdc65b0cb5"],["/images/search_icon.png","73b5f23fe9023e21c9d90b25d73f3881"],["/images/webstack_banner_cn.png","49008f34a922e970792cacb5d17b51a0"],["/images/webstack_icon_producthunt.png","2ba473dc05e96515bb57a7bb00c4d703"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","0d05e6f9540be2a2954d67f36c38bdbb"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","886926751aa68f8250c1cb1f0eac438d"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","25c1819d3694358471afed3f9f07279a"],["/page/11/index.html","72fcea1dd024bf664e83e32a3b1ef833"],["/page/12/index.html","60cf8a136991df1fd762dc467860ef05"],["/page/2/index.html","a7f17804d19b871bf25e95394163b8b1"],["/page/3/index.html","6414b9c9ab70afd5ea1cdb250b6e29c5"],["/page/4/index.html","2931132105e8120f99e475005e484894"],["/page/5/index.html","e34b7882086370830524e7756ba69ffc"],["/page/6/index.html","3ef0fc6d55914d00c476d6b615e979d6"],["/page/7/index.html","8f1e67e8a31c287f24c555bce17e0493"],["/page/8/index.html","6f087d2b64493d8b41008a7c78400418"],["/page/9/index.html","e4537693e1f189822dd434b2ea62ed85"],["/posts/10812f0/index.html","553f8de5e3a60980becf031d2ce39f2f"],["/posts/126b275/index.html","ca8f98f0965bb9f6fa7b6554126bb528"],["/posts/12d95a5e/index.html","446f53e60de7fcecd5c0d4a95ee141a0"],["/posts/1367417b/index.html","058c68fc8ce981671daeab70fbbb5bdd"],["/posts/13886e3f/index.html","3554c27808747d824c1287fc2559d095"],["/posts/145193a5/index.html","7dfc473de67c13ea3356cfa533e04441"],["/posts/149dde25/index.html","44c46f09790dd1e4a8308fab51791dad"],["/posts/152fa65b/index.html","8b70dade33674561b2b225503854439f"],["/posts/169e7dda/index.html","f89c88da395298e6310eb185c23b60ad"],["/posts/1875100e/index.html","42bb9de6295b51f2bccfa5a9cd816815"],["/posts/18eaef7d/index.html","5969eefb3bd5c66cab018c54c580b60a"],["/posts/1a0bc7b7/index.html","f28462c5a141676bd7bbf30cc9fbcb02"],["/posts/1a20a057/index.html","3458eba26cee41cd40c57703e79cfc17"],["/posts/1a998be6/index.html","3dcd890a3fd49d396bf01932235463fb"],["/posts/1bffbd20/index.html","62563720bb1933039a3bd3abbe08b27b"],["/posts/1c5a0485/index.html","ea78c5e717c8653fbd5dce34d6b647e7"],["/posts/1e638f78/index.html","3261705ac9b908ea321ba4fb4753a8ab"],["/posts/1e967920/index.html","8c6218702c417a59f233cf635130591d"],["/posts/1fb53120/index.html","769f7668695e4224b07ead020e4e6ab9"],["/posts/21466e86/index.html","6232f155da28e5da5d21afbd966ad2d2"],["/posts/21abcf1a/index.html","8c5d864dfe8b285344d4a60f39bc9a2d"],["/posts/21c250b1/index.html","5822b42e87e3460605729bec986007ff"],["/posts/2287cc/index.html","b8f89f0aae4162f6f0f850c9f0900601"],["/posts/235acbda/index.html","8997fab48e2af24a560fcf2710f0a45a"],["/posts/236bfea3/index.html","135d4320d24c0aaaf23dd815cbcfc6e8"],["/posts/24caea6b/index.html","fcf0d821f141a8ae5f3fb9bd3f78e22e"],["/posts/25d45c3d/index.html","5ef34eb63c29cafb8015349484032604"],["/posts/262baa9f/index.html","1720d178123ae5c91016ba667c451077"],["/posts/26d2f87f/index.html","6611d9c2fa245c1c3a354f51afb9c384"],["/posts/26f82f65/index.html","4d76a02593cc7b6e02867ba074c8535c"],["/posts/27cdc142/index.html","af7acd3afc4b7a0b0031d01f6bd3c4a4"],["/posts/2895c4bb/index.html","dd9183df1ce3c8053741e4e5f4a9c84b"],["/posts/28987ff3/index.html","0f834b105fca06f77a4f087bfd1345dc"],["/posts/298cfeed/index.html","f0aebbf2c5d0f12f23b35df68c2512d8"],["/posts/29f0df96/index.html","67c392dccd43b351108f85674010efc0"],["/posts/2a1d2b6f/index.html","6dea12f466f0c35543859b98f1672e77"],["/posts/2a386047/index.html","9fe76fef94aaa0775f99853fa79f880d"],["/posts/2b2f44ba/index.html","5a176bfbf3bbf428836da9b4c8d80711"],["/posts/2b770baf/index.html","8c264c891da55dfdffd01d91caf94973"],["/posts/2cda4a8/index.html","a1b548c8cd294749f5b35dbc0a5c557e"],["/posts/2d020832/index.html","f2fced0220e2174f1628aa7de8e57237"],["/posts/2d6d3bd/index.html","27cf5cfa2f00b9eb22095cfeff96ef80"],["/posts/2e0c129d/index.html","4fce1a71e4e8566dfe0c7eed4bd78d93"],["/posts/2e7563a0/index.html","67918366ad87db676b5ca2f6d1688bc2"],["/posts/2e7b8d69/index.html","fae1268b059dae02b073a2986e5245ca"],["/posts/2f28d14b/index.html","625c59e4c9592afa4e5cdb4456b8842f"],["/posts/2f6e1383/index.html","522ae51eb11fe9d09a59ab81986b9ca9"],["/posts/30bfd1cf/index.html","fe586e9d4df9d62f60734f3f6884db6f"],["/posts/3270cf84/index.html","adf65a8f89d3705dcd99eaf9a793d6de"],["/posts/33235106/index.html","b7ce6aa1eaafbc98651acffd3011f24c"],["/posts/344e951f/index.html","d5fa5eecbcfedf22395d7304256a33bc"],["/posts/35e2bcf6/index.html","6083dbfd1f8ddd62de9d4a2367342f1b"],["/posts/365e96c5/index.html","86e225248ab15cd9802cd2ae5ea718d0"],["/posts/36e331e3/index.html","4d17da3bec722c7e2364c18d683a83c7"],["/posts/372df90a/index.html","02976797aea8a161dc780353e208255a"],["/posts/37c547df/index.html","0e12ac79d5e1375d89d33a7d1df67c96"],["/posts/380dfa6c/index.html","d7df9d8a2eeadc9252a4d2ba758c31b4"],["/posts/3859c98f/index.html","ae6436eb2f54910f18831247579f1030"],["/posts/387564ca/index.html","8c4fea1a833a59bd72cef7c689eee376"],["/posts/38a88481/index.html","891c2d7eb44b1ab577d894be1d158c51"],["/posts/3914bfed/index.html","d5ba6eb201d0a432471ebcb6b48140ec"],["/posts/3b56780c/index.html","7fb36433fb53125b8cd7667c6e244d5f"],["/posts/3d1ef1fa/index.html","827020842731bb8906f29a332be9984f"],["/posts/3e4bb613/index.html","a1cf76bb3cc6271e12ff4dbc5e405721"],["/posts/3f2e933/index.html","7101f15b1120b7cf0de888f72c7eb9f7"],["/posts/3f6e5f9e/index.html","5004063c5ee946c1d07f9f37d96aa078"],["/posts/4349a589/index.html","13dcb57e00aa54b5c569a5053da0ebfa"],["/posts/44246190/index.html","150feacfa21a2662038344a15440dcf9"],["/posts/456550f/index.html","dcf7ad1498db7027eacffe453b64bdd3"],["/posts/45fe8d36/index.html","026ac77a7c73828c762193a6b57e5932"],["/posts/470ac03d/index.html","fe59525765135ee16c8f64c25453a676"],["/posts/470d45ef/index.html","96702317b7efbf29442757e30a303e94"],["/posts/4894629c/index.html","1e98a3adbc94d614a2263050d65d37d3"],["/posts/49249ac9/index.html","51c41aaa0f54f37614737fe18f9b3942"],["/posts/49f2d2a/index.html","1d699f5f3ed56eee394db1f87f7c9451"],["/posts/4a39edc3/index.html","305fbb0f1241f8d7a18b7bca1f006ec8"],["/posts/4e6d4eb4/index.html","7e55c026f8c6125f71391472f6139bfe"],["/posts/4f346c5/index.html","005e33856a0fd0d1669be7177cae3e48"],["/posts/50caf1d4/index.html","aaf71edda7121c99f7e93b04ccf2ecec"],["/posts/51139400/index.html","d2c798d6f8e2989777206e7d9ffa2736"],["/posts/512c9a09/index.html","543467e26de5fd46d2713ed81f499e4b"],["/posts/5205b330/index.html","4fbb8ce09afd6628e2c14b2cddaecd3c"],["/posts/52d36cab/index.html","ec0689e8071a628908b964eb56da81dc"],["/posts/532a083a/index.html","e9f616b23e4b65358365ebf9482c7939"],["/posts/537d2c2a/index.html","17ba2dfd256deecdb39ea919a0f21298"],["/posts/54383ba0/index.html","c4429e7ff6d968d64eeb5f0b5d296720"],["/posts/54667693/index.html","798ceacb20a21188c266a260183b2248"],["/posts/54fbed4a/index.html","7b8cc70495007f70a0a19d5420f53eac"],["/posts/5508212c/index.html","9f558a5976122187b3d2c7e9ac350579"],["/posts/56760226/index.html","d71c7e7e5197dee49a3d83b559dcc39c"],["/posts/571564e5/index.html","a0c29a9a8843e5f4ead82b46f8831785"],["/posts/57900fe5/index.html","27f837d10e439b4c8e9dbbf1e0bd2d3d"],["/posts/585ba415/index.html","251550dbd8b2a5d515e06ddb3fb6c9ba"],["/posts/589a214a/index.html","612a6d845509738bfffa97fe44bfe77c"],["/posts/599a2b19/index.html","1ff78b0ea16ed72faf1675f60582437d"],["/posts/59c05382/index.html","e2b5a45ddcecde481ccecb145782644b"],["/posts/5a5294c8/index.html","4763683498e4778d7d6afd366acfb44f"],["/posts/5d3da28e/index.html","451fac2449e9b186cc603e2a25639407"],["/posts/5d3f50d1/index.html","5d75671ddbea836033a98c1d6cd80b1c"],["/posts/5ef7ef00/index.html","f9cf22242b3c2905ec690f291811f046"],["/posts/5f1fa8df/index.html","be9d2ff81ffc1a6486b1bd0591bcee9f"],["/posts/5fba84c3/index.html","4fc191d1143b384ae8365578d64b4a45"],["/posts/607fa29/index.html","037ea695993f197b7c3885764de26d11"],["/posts/60b5dd06/index.html","a9aeb5c99cf5b16bbf9e9c902d8dcd17"],["/posts/61057c88/index.html","f36e4ee29fb80aa94bdf9dd11919ff76"],["/posts/61477045/index.html","47387b2deaf0d53691d80b2d92336bc2"],["/posts/664423f6/index.html","879a873d9f86f81d6358ace0cc5ee2d6"],["/posts/69d79f93/index.html","42d36311d6f1eb5d3a6ec432b726a4a6"],["/posts/6b2f046/index.html","8e856dfbfc442c651774aee49dca7746"],["/posts/6b4610c4/index.html","480185ccd67cb3a6946e70449c02e192"],["/posts/6bbf03f0/index.html","5d467b634ed0a80a3c35b1f4762e10e0"],["/posts/6e7b67e4/index.html","01bdcdfa1d8bf4d2ec48e146f4faf75b"],["/posts/7000d139/index.html","5961797fdc321c174e39a540cc72558c"],["/posts/72f94093/index.html","a03e125225718df0d5869ebeaaaf037f"],["/posts/7380b71/index.html","17cb1e94be66dcefc5336ed10a0fc67e"],["/posts/738eee3b/index.html","78e554242474a0f9ce438d3c64f93a56"],["/posts/73981dbc/index.html","fbed3850d2fd9c761cd50eab6375550b"],["/posts/74d60fd9/index.html","7834b0ab0fb6cae00105ac36e21502f2"],["/posts/74f5d9a5/index.html","917478c3de90226b267ec40d00f90aae"],["/posts/750f2ce3/index.html","d47cef79315346cc1204cc00a41835a9"],["/posts/75ceb627/index.html","6c12ab295324bee19c4f6c44485b2174"],["/posts/7725b75a/index.html","edd6edcfd95be9f031b0fbb309c85a39"],["/posts/79dfcc1f/index.html","e3acabaada20894609a3dfb769f8410b"],["/posts/79ef335/index.html","fc6a435f8397f575e0568b5a1830d85b"],["/posts/7a228db4/index.html","b857ac694c3fd7f2d75cbd12092ab69a"],["/posts/7bbd3149/index.html","ba0634734d3398afc5349623ff28fc58"],["/posts/7c20e8d5/index.html","ccb4b7ee84e724915936940265055d6d"],["/posts/7d3ea75e/index.html","4babfae08881e428cf09f106eb3e1fee"],["/posts/7d43958e/index.html","b6fde561e0d986635db6385ba8398475"],["/posts/807ac7f2/index.html","f0fccf8b6ac58463acdfcda74c34eaf3"],["/posts/81738fa0/index.html","5ecac5dbd8b0a0716fb90f4cdf43b603"],["/posts/817c41b4/index.html","7fb285f84857411d31daadef70f5fe9b"],["/posts/83f13096/index.html","7937ff733c2097322ca795a00ab9a934"],["/posts/84ee8e34/index.html","090d341fdcb3aa04aab5bc92d1578dd5"],["/posts/854d07da/index.html","cdcf0aa5463419411006d60457dddeb7"],["/posts/86cad295/index.html","4d635b28bb03779af057009c764e482a"],["/posts/8833154b/index.html","11856fbe52b1bd32cb461497939e9d94"],["/posts/8837602f/index.html","d9fb6e22b735248651a3a9e5ab32a2ed"],["/posts/89589a03/index.html","4e109807e9aa6708f5fd6044dadda942"],["/posts/8bcef008/index.html","a069593b5bb3dc70d813f1164fa64ad6"],["/posts/8bf9abeb/index.html","ac21fdad0aa3a95a8afc398e1ba69447"],["/posts/8e5f5686/index.html","694d2ee9de616fbb273828ffdef81fc6"],["/posts/8fa6b8c7/index.html","ecea2e2079365ec325b2446a20549a2d"],["/posts/9029a3de/index.html","0d588f28afacf4b987c5ba7e1e04cf16"],["/posts/909d9a5d/index.html","2c12931457cbcc2e74defe5eefccd0ff"],["/posts/91404b94/index.html","2bbd94a0383dd9627597af5eb1434340"],["/posts/932e3747/index.html","81d4a462905a35c72be7633493055163"],["/posts/95fc9e6e/index.html","0860aa4d8081d843f83c9e140fa3619e"],["/posts/98e67280/index.html","b5eb563b002146adb8af77294efedf15"],["/posts/9a4d13ef/index.html","c17efdb0331edcf58e351403314b944c"],["/posts/9afbb889/index.html","015d08ce85614243c1d5c61a906e8278"],["/posts/9b95a057/index.html","8753dbcfd2eb10cda5579b69328eb862"],["/posts/9be63ba/index.html","291a4253e7ffed0eab74b85136b93fbb"],["/posts/9d967c90/index.html","12dd3d03a568dce50c410f9c35bb4d31"],["/posts/9eadcdf6/index.html","8f4cc2ced7b32a8870c7d595aba814a8"],["/posts/9efd76a3/index.html","f95d5034e06cf8c14f3d50388386b3be"],["/posts/9f97db8f/index.html","8e35dd5da6f3b386d6f6a3645fdafe70"],["/posts/9fee4710/index.html","46516164d228a9f149137e7c4bae82a3"],["/posts/9ffb4388/index.html","d38ac2402397841dc8c49a662a8848e6"],["/posts/a04e2d29/index.html","755c9445d1d61c12f14e282198f8055a"],["/posts/a094d027/index.html","58e1a2678af80f06badba21b61ecbbe9"],["/posts/a27042c6/index.html","c6de458385cab6def9581ef46068972e"],["/posts/a29cc732/index.html","21c246586bfd89510d838d65a9b67882"],["/posts/a44a518/index.html","75a49a6548704d1167a0cc56179ef933"],["/posts/a4f2a748/index.html","e9aa41e1a942ba97981fc9f86ba49e4b"],["/posts/a7dc32c9/index.html","da823ddc4dc8c007dc6df05d6502a621"],["/posts/a7f753ec/index.html","00ccaa2b48d1ebfe675fd0f884f0af0c"],["/posts/a9168bc5/index.html","9ee9f053ef1378667c2307a6b08858df"],["/posts/ab176793/index.html","5a9653873b5311bfbba848860c469160"],["/posts/ab34095a/index.html","4ca23a639104fdf03ef7ac42d08ffbbf"],["/posts/ad47c4a5/index.html","d4024670d35d5ed4dabce8c1be8315f5"],["/posts/ae8f7b74/index.html","dbbbcfc2462d4f3f597a4e1121efd0d8"],["/posts/af43816b/index.html","6e7712c790975817a872ed717f9aa8ba"],["/posts/af4880c3/index.html","e29b0030149cbcbbacf081470cf0a94c"],["/posts/af9e049c/index.html","cca50a83e6fc6fc6d3aad82b1fc4ef62"],["/posts/b0f1a367/index.html","ff7aeb2642b78ac3406a47467da02e62"],["/posts/b0f98e2c/index.html","f50049e87932ebb911eda96f5a773d2c"],["/posts/b33131fd/index.html","533c12f17691010a7664a0670e836da2"],["/posts/b36eb520/index.html","fdaf0ba56eb49fe77ec8a6f3097cdb22"],["/posts/b542fc02/index.html","f2c83fd4ce2ffb8f8ba323b4e1faed9e"],["/posts/b54eeeb4/index.html","44d0325d3b22acee4b6a731f28f2d5ee"],["/posts/b84f3f3c/index.html","58fb09044b614db49937af46bb55bb55"],["/posts/b9325cf5/index.html","73c9503fdfd342602eb03c35178e8da4"],["/posts/b94fc207/index.html","4cf21a8fdee041e4ee620d81c5f50d21"],["/posts/b981a6b4/index.html","d7e57cf7e3543f1d4e1a990abbd3e33e"],["/posts/bcea326a/index.html","da2a2ff7c0354e50b5ec074e4cf3c9a6"],["/posts/beb19e80/index.html","d087f326f1527fa31344ee63e0e7dbd4"],["/posts/bec490f8/index.html","6ec09a2b6d34669652bd88d9109034c2"],["/posts/bf7bde0e/index.html","36e60b69b939bc696ffe526eaf93ae18"],["/posts/c03f17c9/index.html","81de8ceb1a95b738c4477ba6bbff2680"],["/posts/c14b94dd/index.html","f7c891d409a3478a6c5fafdebd47c69d"],["/posts/c35bc572/index.html","b70030038dae339c0c9b26bca666a0f0"],["/posts/c436016b/index.html","fdb507d1e1afc1f36b85c7a8786d7523"],["/posts/c4efc741/index.html","5756b63dd4dde0ca61d64a570bddb3ec"],["/posts/c5e8a08e/index.html","a2636ae5c5072dbeec69b7825f1e99cc"],["/posts/c7646f1a/index.html","e0ce8927f68d2d23091c1d91d474a18b"],["/posts/c7db1dc0/index.html","77abb73043b766805c52e1dbbebaf2ea"],["/posts/c7febeba/index.html","1a5828137bcb6c1f1a36ba341be7f039"],["/posts/c9c3a06e/index.html","322001bd09bf0e308ec7062577242555"],["/posts/ca657192/index.html","2b3a7cbd3c2c87fc9d967189debef8f6"],["/posts/cc6d2cf2/index.html","c7d8967ae39c996ce2b8e33f3efd9af1"],["/posts/ce48f291/index.html","a3b66147b9da3bb12759010c6e4b6cf8"],["/posts/cf480faa/index.html","b4cc5e71092e7b8679ceeae821c58175"],["/posts/d090b4d/index.html","4a1b9f41f21a2977a9d86d06205cb5be"],["/posts/d1995044/index.html","08034370f357b9f8bbaf1a7bce9d1a6a"],["/posts/d2d34977/index.html","5f1c44e3c8abab2f0b1eb16610657471"],["/posts/d3647a92/index.html","6926b3105b2a040ab2a51e4906924934"],["/posts/d3f6b818/index.html","e5317550f32f279f42859c3807f1e447"],["/posts/d465029c/index.html","1b20b2955f9b39f88e33b42d2943604e"],["/posts/d9884be2/index.html","38fb7fa4b22ea511c21f3e10b4d9f0a7"],["/posts/da40f433/index.html","7f5c435d47ffff764f434b7aa35fb6ff"],["/posts/dae71d5f/index.html","42b230114b874deb8e8b87d87360d4ef"],["/posts/db9fbe47/index.html","ee794155921e94378a41c1b36e1efd76"],["/posts/dbba997d/index.html","1fb95038014d0f5e7ddf9e0f37d2769c"],["/posts/dc94f8a1/index.html","894fdd0d79f3716de003f110d24d0f8c"],["/posts/dfe9b67/index.html","14a3ee8546b10380261ea84fecb4c368"],["/posts/e0387d80/index.html","418a2e0e7147a65006730cf53477a19a"],["/posts/e356f7b3/index.html","6332cb29a4dfb3a14a064c3b978c6577"],["/posts/e3acb366/index.html","fc2881066cfa8ee4101cc4aafce5644a"],["/posts/e450354f/index.html","3790702048e78a36ee7146b2cb034993"],["/posts/e489223c/index.html","0bcd176163bfed93711e69e4dd963ff6"],["/posts/e9a8ddd1/index.html","7c2a4b795b6287ee84ab5c365aeb63ee"],["/posts/ea914c06/index.html","c44b9cb325d8eae43cc24bb317b0c537"],["/posts/eaa8f31e/index.html","0df9843066fee52e8fe828b185666e1b"],["/posts/eac19412/index.html","93be07b930c9a1041528ace52b0e94db"],["/posts/eb0c9e8/index.html","d6fdbf55fca7c7db9880d7fca8a4438e"],["/posts/ebe408b3/index.html","c304958f0989aab5ddec34a6fd58777c"],["/posts/edfc881f/index.html","69f0d2c7c72e9b638f6eac0ec6106b52"],["/posts/eec0bbd1/index.html","7aae47d637d7c3814702a691918764a5"],["/posts/ef22c7c2/index.html","a9414954347bc1684715d1d216d0706e"],["/posts/ef271825/index.html","49f0c6f0de3487061301ddbc83d71a7b"],["/posts/f209578c/index.html","136a806db5947de6fc8ba5fa3bcbedb8"],["/posts/f3e9bea2/index.html","0df972b99e058ffc0c6c469e1b885a90"],["/posts/f67b7122/index.html","2017e12d81daa62895ce017bdcb79f83"],["/posts/f7abba28/index.html","fa12d6aa848b74aaf9eef29e6f4628fd"],["/posts/f7bf33eb/index.html","924f8127373c8a3f03320458a8e2eb09"],["/posts/faffd764/index.html","70e811a69d4043f3bab42c9861b24e80"],["/posts/fb684fb0/index.html","26e1cfe33c87f7b4a387b60d811d264e"],["/posts/fc57199f/index.html","ef6848274decd63b7cc5d2d0c82a80dd"],["/posts/fc6e9a7d/index.html","3cf16ada3a8ff06f340e9234f8a18234"],["/posts/fc7bc02a/index.html","fcde00bec9e75d38409f76962f117e6b"],["/posts/fd67c5cb/index.html","615e98139e17db312e91d811c99070ea"],["/posts/fdde061e/index.html","81ffd7ac1848bdc9647d3f7ecd729b51"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","0e1409dc5170a36f164b80004ce6c8c8"],["/tags/ES6/page/2/index.html","4115675373d8decd39345315a34d6ae3"],["/tags/FL/index.html","bedfd3ca6bbeef28e0cf8a396ad47dc2"],["/tags/HTTP/index.html","a2517dd12cda42f86cae67e0b9dbe519"],["/tags/Hexo/index.html","a8365d51980e281191a2da8deaf925ca"],["/tags/Hexo常用命令/index.html","f6817431aebe6106a2171d8e9194cffc"],["/tags/Nodejs博客实战/index.html","ca980b8aad9618ebc5e77c2774835eb0"],["/tags/React/index.html","e95c7c849ae2aea8852f25a3e02e50a5"],["/tags/Vue/index.html","31b98f35853acdc761e1221818e8e549"],["/tags/Vue/page/2/index.html","3bee1807d8d4b52132cb60e217418d91"],["/tags/Vue/page/3/index.html","2f98ed1b34767df298322c6dc4436876"],["/tags/ajax/index.html","e557169efa107303452cd759424d9562"],["/tags/ajax/page/2/index.html","84c312613cd2e6bc379f2e5333933b2d"],["/tags/curl/index.html","aae7c065a1caf62368414b9eb2f23fd5"],["/tags/index.html","6b935fb0d3543ba3f3dac1394e00b556"],["/tags/json/index.html","fd2e58435106d64f7824dff075c91dbe"],["/tags/mongodb/index.html","759f77ef24cfc7a690ae0e06fb67c3b4"],["/tags/nodejs/index.html","7f68060a7ac211827ccb82fc58946539"],["/tags/promise/index.html","fb5fe32874d96339ef4e8b2ef92b8604"],["/tags/中国近代史纲要/index.html","17528169670296f3ab5c17af9cb91e50"],["/tags/日语/index.html","2512741191c131ba75b5f6cfb0dc3dff"],["/tags/标签外挂/index.html","a58c34778f6e220526916de270e0da73"],["/tags/目录索引/index.html","ba9eaaa847454c0fe9dd10089e62636e"],["/tags/移动端开发/index.html","923b10e3883ad03f469fb1dad02c9c75"],["/tags/管理经济学/index.html","cf9a5dc4783a9dececdf97d0e08abb6d"],["/tags/考前突击/index.html","58a88891b80b57ed98bd633509169f0f"],["/tags/考前突击/page/2/index.html","3e702633c5351fbdb03cda74eae7f646"],["/tags/自考/index.html","208c308486354b9946283e7f2d1cc4b4"],["/tags/计算机网络原理/index.html","255e4b5786c23a72459b2319c2d4fc1d"],["/tags/车技/index.html","57859da9a64f7d6fc5d9fab77e0ebe06"],["/tags/运筹学/index.html","4a2d4e358f783579ad04ab8c391950e4"],["/tags/马克思主义/index.html","b3ec5d350ce557543f010f6a86472d9e"]];
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




