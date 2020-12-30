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

var precacheConfig = [["/404.html","52a8e40c58070851c7967c23e310416a"],["/about/index.html","bd98b5cf748d63fcf7492b2506150c3f"],["/aplayers/index.html","f92dd93b59dc9e5f6e8002005a987ffb"],["/archives/2020/02/index.html","69dfbe24695b346f59828b55164c2c11"],["/archives/2020/02/page/2/index.html","ab4072acdd10e5170537e9298e46e6bd"],["/archives/2020/02/page/3/index.html","3e9af7572f3454c0666c0539cccc6376"],["/archives/2020/02/page/4/index.html","e6b6beb508009d5cb4201b499bc76a6e"],["/archives/2020/03/index.html","fafcbd648876678ab6500bee1008ea52"],["/archives/2020/03/page/2/index.html","ffa398bfa877ed5f9408252bd701cdd2"],["/archives/2020/03/page/3/index.html","c92b895eaa34b0bd9f6948402fe8196b"],["/archives/2020/03/page/4/index.html","d7c0d1ac58b531d414aca7157f491f4b"],["/archives/2020/03/page/5/index.html","e64482bfcce51ccb1bd56346eea65008"],["/archives/2020/03/page/6/index.html","c221a827b7e5c65872a923785f33fc25"],["/archives/2020/03/page/7/index.html","29b9b7ff5e2f116b8dd350a7becb8669"],["/archives/2020/03/page/8/index.html","d33df3ad0c3620dc0d0a7ba516725192"],["/archives/2020/04/index.html","bbefc8f83c80d2a07df857d4c8893114"],["/archives/2020/04/page/2/index.html","9b3e5dbfd5230c1a4372d4c70d2d67cf"],["/archives/2020/04/page/3/index.html","4b41e748d2bd1a113deada558997df78"],["/archives/2020/04/page/4/index.html","43e71f78082e437679bbe1a69202920d"],["/archives/2020/05/index.html","a2638508cdc83e548b27de5b35b2c04d"],["/archives/2020/07/index.html","dbf6d6ddf26e9a534ef327cd453441a2"],["/archives/2020/07/page/2/index.html","63d4d8c6cb3d4aec276945d5233c7a06"],["/archives/2020/08/index.html","159f10378f17d637e001d17b2a44cd98"],["/archives/2020/08/page/2/index.html","8398293a590dc5678efa2fbff14dde8f"],["/archives/2020/09/index.html","30cd1e988f7ca90089cf0d700c0b77ff"],["/archives/2020/09/page/2/index.html","aa4041df57fd6e01f7d9c21046c1ed58"],["/archives/2020/09/page/3/index.html","4b7b318b1a45193eeb23a7f105200058"],["/archives/2020/10/index.html","38349eac1236d794605811fe4d7369dd"],["/archives/2020/10/page/2/index.html","239615f0c319b8d28de1560f80a3b5ed"],["/archives/2020/11/index.html","9252336a83a0e8b3fefa4d5b202bd97b"],["/archives/2020/11/page/2/index.html","0b86885a652ff75a9674663d75fd32ae"],["/archives/2020/11/page/3/index.html","2c187d852af2e5da12b836b39c25c18a"],["/archives/2020/12/index.html","d7b800b16598971671380db6da56cd25"],["/archives/2020/index.html","1e607d3819935003971fb2579de531d8"],["/archives/2020/page/10/index.html","0f414ad0748a505ed256077587255ba4"],["/archives/2020/page/11/index.html","999840bc2d874d612d7379d1b6c0da1c"],["/archives/2020/page/12/index.html","9f18ed7a34416912b516d50a9754e902"],["/archives/2020/page/13/index.html","8ef32799d6b8ae318f028412f0f9551b"],["/archives/2020/page/14/index.html","128548252dbb7467b2e0a50028d9b381"],["/archives/2020/page/15/index.html","53f1fe8c9faed5b0790ce42899dbf912"],["/archives/2020/page/16/index.html","180dd8243bcd8ac203fe9a5c12b3d8a0"],["/archives/2020/page/17/index.html","cc5d757f37fe052b95a18f956e808641"],["/archives/2020/page/18/index.html","0922d44242940cabd6b661b7ed319ac2"],["/archives/2020/page/19/index.html","b183f5cbbc361b002d2a062072bef727"],["/archives/2020/page/2/index.html","6c4b37724127d177a83d59cd3fd3e759"],["/archives/2020/page/20/index.html","aa840869180ba4363b5fbbece844850e"],["/archives/2020/page/21/index.html","8f0a2a28014aeb8dca4dba67b28f2006"],["/archives/2020/page/22/index.html","cad30bed285f27a3c2840afdcfe72c31"],["/archives/2020/page/23/index.html","9b92027bee8c4b9e14177db38a994617"],["/archives/2020/page/24/index.html","ee6fe398450bbfb0c4dfcc190b6c5dcd"],["/archives/2020/page/25/index.html","15edd493fcc6d429bb047cc122ae199a"],["/archives/2020/page/3/index.html","faa7d1219a30bb60e224ffd0d961966c"],["/archives/2020/page/4/index.html","a1831f43b1d1efad233ae313a9c0263f"],["/archives/2020/page/5/index.html","374d32d1f8c7f9bfab77d58a8f56e84f"],["/archives/2020/page/6/index.html","0359433b547320a3778a2c41cdd397b2"],["/archives/2020/page/7/index.html","c1395b16674e273789543d3c4f735cd4"],["/archives/2020/page/8/index.html","499fd5040fbc5d0d85f4fda9a782fb1e"],["/archives/2020/page/9/index.html","8a35803600d74b08a8b83c7bb6c1be18"],["/archives/index.html","d2d7b240c2101556f01469d236726292"],["/archives/page/10/index.html","f208db180b3b18960fd9739c749015bf"],["/archives/page/11/index.html","6b07d04ecad9fc81610893b5c460bafb"],["/archives/page/12/index.html","b2d78d63352a1f26d7c67389fee2e447"],["/archives/page/13/index.html","d3c74cce215f2b4d3e3620ee7d38af19"],["/archives/page/14/index.html","a6a30652d563d0a2cb693f94ec6f4e41"],["/archives/page/15/index.html","c244f1767fef3a270792ac21764b24cf"],["/archives/page/16/index.html","59ed30c974f9c98131514d4ca61a43ff"],["/archives/page/17/index.html","7c994126466215ef55138ee615bd8a61"],["/archives/page/18/index.html","985904c4824c8c3ad00e587cd1a5a980"],["/archives/page/19/index.html","1780631a163005a78b8040138ae3b02f"],["/archives/page/2/index.html","6db32d0c9cc162f75b14d1b1db314949"],["/archives/page/20/index.html","eee8487e5c631d81c414543c32327221"],["/archives/page/21/index.html","ca9cf9a3a15e8294ec2d8625b24c81f7"],["/archives/page/22/index.html","8ad49ca4f408327e0699c60d8201a5d1"],["/archives/page/23/index.html","a48089ee1955ba98bbf18ddd8b6ae2dd"],["/archives/page/24/index.html","5998f2026e2368e94b643718e08dd9df"],["/archives/page/25/index.html","49e4bf75bdc8a33a6dba602f78a1725d"],["/archives/page/3/index.html","7591e0702779d5d52bcc2d0803660117"],["/archives/page/4/index.html","f381827a7f575775126ed6f9b461fc55"],["/archives/page/5/index.html","d24a611bc47ed812f04d1d67f3c56e6f"],["/archives/page/6/index.html","06c26c5a25ed155ccbd08cdd04e3d53b"],["/archives/page/7/index.html","78e772cf8796c0d8ef687934a8d59a63"],["/archives/page/8/index.html","d0fbba3c3854c1c3e3daf5016d6cac3b"],["/archives/page/9/index.html","e5d12cfd884868e50b92ad707f1b4c6d"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","27500a167bdf08e6b3ab81676504def4"],["/categories/Ajax/index.html","1b7d23ea0547cc7b452d520526d0fc29"],["/categories/Ajax/page/2/index.html","f64c5e1a8a09d18cf1d3a32077356260"],["/categories/ES6/index.html","ffd45c28b5238f6dd7c6deedb4d108e0"],["/categories/ES6/page/2/index.html","2f7fbbf73810dfe3a0e2c1979dc3bd15"],["/categories/FL/index.html","6ca4301fc56076b271c69799097d4919"],["/categories/HTTP/index.html","f20b2c861ed877bbee4acb051432879c"],["/categories/Hexo/index.html","64df2261f7d22a2da2eea192eba3869b"],["/categories/Hexo/标签外挂/index.html","c1fb9aafe1867740521dc2bd29f0a161"],["/categories/Hexo常用命令/index.html","0a311cf86b46a558a41631f20b7487a5"],["/categories/JSON/index.html","d5243ee580a1a5fcbfbaa9d6039cc503"],["/categories/MongoDB/index.html","b6d338ff016ea1fd6930b0fe8f5e3ed1"],["/categories/Nodejs/index.html","2fd51efbb523a6c2d62115ba4caa28e6"],["/categories/Nodejs博客实战/index.html","dc91c5ba895c6f1db43af26ad556614d"],["/categories/React/index.html","9913aa0ae2edd4b3ec3853b90c0b29a7"],["/categories/Vue/index.html","056a41f346d8733643f9bdc477ce66d4"],["/categories/Vue/page/2/index.html","035c9167b966e182230e14e13c1edb3c"],["/categories/Vue/page/3/index.html","6659df33cb5a85c289dfba9dde33126d"],["/categories/index.html","1853956e23c6ab6cb704a69795b7562b"],["/categories/promise/index.html","ede8c38c529260b84b8deb8400a96c96"],["/categories/日语/index.html","706e7510f8ce386c3913bda022a34905"],["/categories/移动端开发/index.html","3eda27f4bb9e9eeeff1489bc73e56a20"],["/categories/自学考试/index.html","3ec838e3bda5187628f74fd107023227"],["/categories/自学考试/page/2/index.html","6eb01e0dfdff60d42c2ee1de62d124eb"],["/categories/自学考试/中国近代史纲要/index.html","351caad818ad89ddf933b19539739ca2"],["/categories/自学考试/管理经济学/index.html","e57c9998cf98edaef106950421f78776"],["/categories/自学考试/考前突击/index.html","13b6d2ed3896b97d21546b97b065f4eb"],["/categories/自学考试/考前突击/page/2/index.html","bbb079d29ad7620e31b683a01d5d0cc5"],["/categories/自学考试/计算机网络原理/index.html","a110f120cc75b4b62694f9936e219292"],["/categories/自学考试/运筹学/index.html","9c8d87af3e46d0b9113e98ee63f03d2b"],["/categories/自学考试/马克思主义/index.html","878ce3c46fe9bbdc631c2e7e6d761351"],["/categories/车技/index.html","99d18482479180e48cfe6afc27a0d010"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/favicon.png","831793361f36a5524d7c2c8e5a5e791c"],["/images/flags/flag-cn.png","aec786dd377f7498121b2b989285de13"],["/images/flags/flag-us.png","4e484b374a934ec7a0c318fa3039a18f"],["/images/logo-collapsed@2x.png","5a7921ae91c9497d9c479db2ed247271"],["/images/logo@2x.png","7dff419a181fc2ee0d21e7759b9fdff5"],["/images/logo_dark@2x.png","7618f56d3783393049d5486b34c83f1b"],["/images/logos/github.png","3ca867b4d49b00409911b0e7d221993d"],["/images/logos/myblog.png","c65b405af280672770a5e68dbc602608"],["/images/off_on.png","1bdd36870ded5c5d39e24fcdc65b0cb5"],["/images/search_icon.png","73b5f23fe9023e21c9d90b25d73f3881"],["/images/webstack_banner_cn.png","49008f34a922e970792cacb5d17b51a0"],["/images/webstack_icon_producthunt.png","2ba473dc05e96515bb57a7bb00c4d703"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9200cc5051a01750cea1c7906400d378"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","1ee745966dfaf6be5ba31eaf08af8084"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","30182932360ad8cccd8f3bc2ab166ad4"],["/page/11/index.html","bcd57855c06de1ecd42872b732f49032"],["/page/12/index.html","2d850f8b4da238fcc3b62482ef68cdb4"],["/page/2/index.html","5a33975903f8cd1fb2bcebe4c0fba75d"],["/page/3/index.html","76886c47b844252bb85ba50bc9c04cf9"],["/page/4/index.html","1d4e4d057943f13778913c60d32a049f"],["/page/5/index.html","5ad1155666eef67e49ced75c7b06d0c1"],["/page/6/index.html","599f0fef9a9ab5fef34bfc8ed6c46da3"],["/page/7/index.html","2f14c549b99704d887eb1acfb35a17f5"],["/page/8/index.html","a13a35fa004e6d261992fb4a978b5cb0"],["/page/9/index.html","5bf258d2651add8c233d02ca0d7a725f"],["/posts/10812f0/index.html","daa18eb2a0a716825f1bb5001cd99108"],["/posts/126b275/index.html","af98401c0485180b18c315da433657d6"],["/posts/12d95a5e/index.html","2399846a3f9833d86b1d453e1d9e8391"],["/posts/1367417b/index.html","a286fae6ccac27d5005892d84a2226ca"],["/posts/13886e3f/index.html","13b4052392ac031e96cf0b4a5689ebb9"],["/posts/145193a5/index.html","6102eacbdd413888c270fdf19d593a23"],["/posts/149dde25/index.html","918e946a06d113e3d33c817e4ba2023f"],["/posts/152fa65b/index.html","4ba733cf19eb04ff0d3d977897195e00"],["/posts/169e7dda/index.html","e62f0b214cd4092c18b02fbaab3d6eb5"],["/posts/1875100e/index.html","ad2e525b4ba0af8f23049d09eda87ae6"],["/posts/18eaef7d/index.html","af9ecaea88bfcdc072ec14ce44dcfa22"],["/posts/1a0bc7b7/index.html","a14850d33097c4b18fbddbed0c9f2b41"],["/posts/1a20a057/index.html","962852616fac3bd2d9243a52631a01f2"],["/posts/1a998be6/index.html","ec4f50b5f994a5eb5f6fac649cb87fbe"],["/posts/1bffbd20/index.html","07fed01ebc96656c8965c48e85e70816"],["/posts/1c5a0485/index.html","f8571c8780a871811a985cf3dce51743"],["/posts/1e638f78/index.html","68d84b74f605200b90dd5c74febb4663"],["/posts/1e967920/index.html","7e882388146565302f6a55fadd5801e0"],["/posts/1fb53120/index.html","bce45320dae55f8bb42db1f0326bae57"],["/posts/21466e86/index.html","2a3b1b82a12ac9ebf3475f061ddc12a4"],["/posts/21abcf1a/index.html","4f697e3da0bf4d12f762b3b877c9a656"],["/posts/21c250b1/index.html","565150acf8ae07bd1cca7903e8be25fd"],["/posts/2287cc/index.html","b78f8d1eddb47c098ab185a03a1bfc0d"],["/posts/235acbda/index.html","08bf152b0c6cab658de47af2535bfe4e"],["/posts/236bfea3/index.html","a14d6d7b13d076fee25bbba1e2290139"],["/posts/24caea6b/index.html","97105d86807b4c175a72762b81f69c23"],["/posts/25d45c3d/index.html","56697c522b44e7eca8917b194b4cefae"],["/posts/262baa9f/index.html","aaaf0794a79ded94a6b582d11ef9822c"],["/posts/26d2f87f/index.html","3849e2e788d97c7e48d4f74dc55aedfb"],["/posts/26f82f65/index.html","b963635d0b66a581dd3e656d8efdb930"],["/posts/27cdc142/index.html","640e397a9138a68718ac0a6765e7f562"],["/posts/2895c4bb/index.html","43d8871543af90cee6142aa77f1f64c4"],["/posts/28987ff3/index.html","ca8326ce852296cbaf59982322403fa8"],["/posts/298cfeed/index.html","6d14e31d4671bb810112618cc2f4adae"],["/posts/29f0df96/index.html","554c2ae62ef5fc2c3efea9684d6ad423"],["/posts/2a1d2b6f/index.html","23cedf167d876d30a457d8c27941a3f6"],["/posts/2a386047/index.html","2dd4214299edbb51aace30466d9a19a7"],["/posts/2b2f44ba/index.html","96e0cb4c2dd765336a60e956055a106f"],["/posts/2b770baf/index.html","fd0bcdbcf7d1f88fb64a3051616be6d6"],["/posts/2cda4a8/index.html","8d21195541c06bc46b0be95523a6d49c"],["/posts/2d020832/index.html","a8c40745e2e3f4ee7471a96f7e9c1385"],["/posts/2d6d3bd/index.html","94e4aac82d302525e8088887b364a111"],["/posts/2e0c129d/index.html","60b268a6b785354df42a4be5df61ede7"],["/posts/2e7563a0/index.html","f9a104937775d7bde8eacd6f4ec9b123"],["/posts/2e7b8d69/index.html","02b6516524973b9ae9c657fc9c991e39"],["/posts/2f28d14b/index.html","ddf20516706c8dcfcb4a7948ca3d4a59"],["/posts/2f6e1383/index.html","72bb3cca0d967e1c23974c2f6e59f6b8"],["/posts/30bfd1cf/index.html","aec2857733e492262cf012a2e2c7ffce"],["/posts/3270cf84/index.html","0f3274a5fccd832fb3f00091547f1de7"],["/posts/33235106/index.html","29ad352d1d5b425aa26419f4f2903b2f"],["/posts/344e951f/index.html","801a267cd30ad87f9e7aca703b1d7ea0"],["/posts/35e2bcf6/index.html","f2f7db49f15b852320e565a0ddf97afb"],["/posts/365e96c5/index.html","90d425c9e424e809b11151986fb02101"],["/posts/36e331e3/index.html","245c37666a6a003d9ff0c039a22153b2"],["/posts/372df90a/index.html","1a1af7816940de099c6fc5822de944c4"],["/posts/37c547df/index.html","ce1d4fa204f5c1a55b40650449196356"],["/posts/380dfa6c/index.html","9ac55dec81101c60fdd72d081dd6cf8f"],["/posts/3859c98f/index.html","b13c757a9c619bafda6f026db457daf2"],["/posts/387564ca/index.html","a6e523d0f8b3f4e927a6061b67e7082c"],["/posts/38a88481/index.html","2defff1d6683358a970f886424e0c586"],["/posts/3914bfed/index.html","6e3e5e26e264cbbed4ebcf52fe5876f1"],["/posts/3b56780c/index.html","d9678950b3cdd5207d27e849f03a5fa4"],["/posts/3d1ef1fa/index.html","812f2c116e731da1723fd875e9e2d836"],["/posts/3e4bb613/index.html","1bb4dbd116d801a0761f83f7567c1a1a"],["/posts/3f2e933/index.html","fd23d1157279881ec73ec74513d52b7b"],["/posts/3f6e5f9e/index.html","61216d5bbbe2216ff945f48f47608f12"],["/posts/4349a589/index.html","20610ac9515538ef888fa769c5bb7dfa"],["/posts/44246190/index.html","8f9fa294c8be0926bb2a8f0e8cc93574"],["/posts/456550f/index.html","f1084c792c952937a89fad633995b6fb"],["/posts/45fe8d36/index.html","9d3b7c6b77f3b1755c1ef6203372f99f"],["/posts/470ac03d/index.html","d4d0b3e751aa36489f2dcac87a9a3209"],["/posts/470d45ef/index.html","27e704f884799fcc9a84088f16b670fd"],["/posts/4894629c/index.html","92c7f70561c8940825d664ec4c56fb15"],["/posts/49249ac9/index.html","609824d551f8dd3f0e82df89790e1c56"],["/posts/49f2d2a/index.html","94f9b86c20c646da4bef4ec07b6fd598"],["/posts/4a39edc3/index.html","99ecf604d85cb93c6cf832b14fd32d2c"],["/posts/4e6d4eb4/index.html","57669c66ab59c04bf12a4b72dd3d0028"],["/posts/4f346c5/index.html","9a7244d143fb4adc6c79db111974866d"],["/posts/50caf1d4/index.html","4b726d4cb63f0ff71f9fed19d0b78e63"],["/posts/51139400/index.html","a5431cc5debd8cf7a863deb59fa099df"],["/posts/512c9a09/index.html","16b9d8fa93f8f573d98adb739e8bad4b"],["/posts/5205b330/index.html","372ecf2033db833d841eea3d4856b4c9"],["/posts/52d36cab/index.html","7409279eaf54194a01140845ed4b2555"],["/posts/532a083a/index.html","f30ba6f6591a43763eec1e65295d1c44"],["/posts/537d2c2a/index.html","0bfdeb86ebea7bc409c7210849e2d6a4"],["/posts/54383ba0/index.html","551aadb7b0d602b2a82798b8af6a7386"],["/posts/54667693/index.html","1d51911bce12a7a180b6cbadfe85b6ba"],["/posts/54fbed4a/index.html","ccffda5af4ac42c1a7f04455c73480e8"],["/posts/5508212c/index.html","472c0e25fed00152e0609047a8cf1eeb"],["/posts/56760226/index.html","d4c8c3a2406165fa8faf8774218da105"],["/posts/571564e5/index.html","2eba4c6268edeff206c07f4e67503d9d"],["/posts/57900fe5/index.html","77a32982125304e2d584fa1cb593a685"],["/posts/585ba415/index.html","b3ac9edfaf5efdc1b2f6c53a29372e1e"],["/posts/589a214a/index.html","85248e7ca2ea5b479c30435de5c96985"],["/posts/599a2b19/index.html","fa3f09b511ccc0fe08c2b7bc7f3c4040"],["/posts/59c05382/index.html","a1da41cdc5fd3f920bb40bf6ca8266b1"],["/posts/5a5294c8/index.html","0c04cde2705cf06c3d6a6e8861458088"],["/posts/5d3da28e/index.html","60738e4ec1830a9be8368e095917d974"],["/posts/5d3f50d1/index.html","e3dca2f45821ca0f7e4f1714646e8d21"],["/posts/5ef7ef00/index.html","cbf496951430717e8e341d5df0a9d369"],["/posts/5f1fa8df/index.html","d21b9c454f384e802ba60a9cc08db311"],["/posts/5fba84c3/index.html","fe20e6258393022ec45f0ae005d28a8b"],["/posts/607fa29/index.html","cb2d4b2b1273d7bc31a8f9f972ac7a60"],["/posts/60b5dd06/index.html","4ac4904518573035ce1e7bdf9cd30f84"],["/posts/61057c88/index.html","02410c0fa031c99e5f6e56d209b4c7c6"],["/posts/61477045/index.html","33a2d9710b717a353cbb79dc8bb3aa86"],["/posts/664423f6/index.html","463bbea1076ce3d41bcb8adafee468a1"],["/posts/69d79f93/index.html","317c3189cdf6bbdb3a276ae40b12770e"],["/posts/6b2f046/index.html","e91f8ccedb6112673d15a6891944b338"],["/posts/6b4610c4/index.html","4fd91b1d3952115420e1b15910885daa"],["/posts/6bbf03f0/index.html","ce7cace75987e0f29ce3f1b22987d167"],["/posts/6e7b67e4/index.html","a02def6388b2862bb8de0176951a005e"],["/posts/7000d139/index.html","c235ae53be3dfe219f596f5c61e7b219"],["/posts/72f94093/index.html","cf9557647cf8c8fc982c4319409eaa6a"],["/posts/7380b71/index.html","01701add9b82d1e693743ca4c1c5af6a"],["/posts/738eee3b/index.html","c6e2ee5d3e65b855169ab33ab3198d02"],["/posts/73981dbc/index.html","d47f073f24cce3792d7740080a5993f1"],["/posts/74d60fd9/index.html","f4c2eabdbcf5aa5fe6d984dd00cb9e69"],["/posts/74f5d9a5/index.html","a53db05951b57417e1af9042a4da50df"],["/posts/750f2ce3/index.html","5a4cdb0541fb2961cadb4c2afef82ddc"],["/posts/75ceb627/index.html","137135bfd5dd4ed6019f3b1b16a74d72"],["/posts/7725b75a/index.html","cd054f38ee24a8534a87289efe7b41d7"],["/posts/79dfcc1f/index.html","82f4de7c13baff42923e40e5609f727b"],["/posts/79ef335/index.html","5fba6d49183910ca1b015680992e9800"],["/posts/7a228db4/index.html","a52d7044d2169e315d0db962ea0d6925"],["/posts/7bbd3149/index.html","c7cdbdf410f14f32bc80b0f02f883437"],["/posts/7c20e8d5/index.html","5a701aefe997bdb515af7bd673ea8ccd"],["/posts/7d3ea75e/index.html","aaa8b94a4262c26f4d030d97f950dd36"],["/posts/7d43958e/index.html","a861832cef42f32c0d96891e93646aed"],["/posts/807ac7f2/index.html","973e747e9e388ef98288da32497a3b49"],["/posts/81738fa0/index.html","af05e89667372f4e8193e436bb689429"],["/posts/817c41b4/index.html","45a675a8e72ab51c21490d925490b91b"],["/posts/83f13096/index.html","7f8fc466902943cb443e7b73a69c3b5d"],["/posts/84ee8e34/index.html","59718890c15efd62c0e1c57649d6db5a"],["/posts/854d07da/index.html","9b9e3c32edd07bb1ba4b4aeb1fe9f048"],["/posts/86cad295/index.html","d5f90b6b0d7c8171415238ab797415f6"],["/posts/8833154b/index.html","44044de84c1396ed9d0f8e35f10e99cb"],["/posts/8837602f/index.html","72ba0b529de5354b6c741b213dbd6117"],["/posts/89589a03/index.html","8d5717cfb1f031c01e27a05636c3624b"],["/posts/8bcef008/index.html","0c8c0fd147183a9cb889d8cd60af4aef"],["/posts/8bf9abeb/index.html","18174a4c0b9e1b6048f3a518b654a8b5"],["/posts/8e5f5686/index.html","1869694d22492c9d1c822b462d663bd3"],["/posts/8fa6b8c7/index.html","bf6b6ef9296a9fa7d347a4622763d7b0"],["/posts/9029a3de/index.html","88505533e8fd4048da3bee498dccd368"],["/posts/909d9a5d/index.html","ce18f3ecf50041ba43c3a5082d38fa03"],["/posts/91404b94/index.html","07917f00197d7096c1167711a5c7bcd2"],["/posts/932e3747/index.html","016e935ad4643af5e3fc1434da95710e"],["/posts/95fc9e6e/index.html","81c3178551b741e3ab44698047ac4494"],["/posts/98e67280/index.html","66b0f430cf88332db6c55753804777ba"],["/posts/9a4d13ef/index.html","4b6b92fbf3a552387eeb1b8483f986b2"],["/posts/9afbb889/index.html","d5a00368826cfe87d7ccd1298317bc98"],["/posts/9b95a057/index.html","57a98f6698add6e60937462e72b7fd2f"],["/posts/9be63ba/index.html","894e2a3144899b502c30b6030cfbd89d"],["/posts/9d967c90/index.html","2c2e8365aece251899c7e7c449b2fe63"],["/posts/9eadcdf6/index.html","2f0dd3087534708320f87524a4a5d5df"],["/posts/9efd76a3/index.html","cb10e5f2188917f7603c9732e1b57c70"],["/posts/9f97db8f/index.html","a5d3160e4d3ae358a1a811ce6e74c349"],["/posts/9fee4710/index.html","acd286c827dd7a2bc2d694eee1dcc2eb"],["/posts/9ffb4388/index.html","61b0a757ff3b875960ae91ff263b488a"],["/posts/a04e2d29/index.html","06f52eae3fdf3df6997703b6653fc8c0"],["/posts/a094d027/index.html","8dd337541c60281ff80615560861789a"],["/posts/a27042c6/index.html","bafbc0d24af9292213dfad5912d40cca"],["/posts/a29cc732/index.html","fe7e06ae7280a8f0277ed6e46da1195a"],["/posts/a44a518/index.html","249f5c58bac7f3ce051dd68203f5eb7c"],["/posts/a4f2a748/index.html","340fc34a85d8a2fc98a575bfaacb9fa7"],["/posts/a7dc32c9/index.html","059edd3c44c623f14542aab20a892c8a"],["/posts/a7f753ec/index.html","ee8b8c59e1a9460fcfccf723f290d4fe"],["/posts/a9168bc5/index.html","132aee7ba9a86d2444c1903a58645d87"],["/posts/ab176793/index.html","dd38db71cfde91d2012886bfcf757692"],["/posts/ab34095a/index.html","3570b727baec72e98f554ba4224778f0"],["/posts/ad47c4a5/index.html","91e9cd16683068892d2103bbd68a0496"],["/posts/ae8f7b74/index.html","2a10a00c0eca507e1b2d6539097da099"],["/posts/af43816b/index.html","4ebbe6450dcf87bc50ed9ad06ad7d36d"],["/posts/af4880c3/index.html","601cbe5c0e2f28d4ceef654ffdd867d0"],["/posts/af9e049c/index.html","1d1a3b3e961372754dce589cf8e707af"],["/posts/b0f1a367/index.html","fd07521af30e976f9b67219056e65b35"],["/posts/b0f98e2c/index.html","2359c634dc40036ac500e468263ce8bc"],["/posts/b33131fd/index.html","35ea467da468baf480740b33e57746f7"],["/posts/b36eb520/index.html","0a506a0b49d99496835ab74f01726615"],["/posts/b542fc02/index.html","d40deb2577cc17d07364d7c3041a3ac9"],["/posts/b54eeeb4/index.html","04661b14274e3590a787689df8bc2824"],["/posts/b84f3f3c/index.html","ecab560348f90a2d1d7eb5a27b999c05"],["/posts/b9325cf5/index.html","babcb7c7610906ba2ed4930c79b4a3f1"],["/posts/b94fc207/index.html","077b054ee1da1089553b3a93c4a20d01"],["/posts/b981a6b4/index.html","956845b35013b0b5968ac3528803b921"],["/posts/bcea326a/index.html","c941c60114dce833cc8f53dc6cf06518"],["/posts/beb19e80/index.html","fb83a1d10dab03aeaceeaa286a926fb3"],["/posts/bec490f8/index.html","b3ef8615f89c225456847b51b2f94a0c"],["/posts/bf7bde0e/index.html","38607fc6d7ebf7eda4a9a015df0158ed"],["/posts/c03f17c9/index.html","37b1279c965b648efafc12e3854a146b"],["/posts/c14b94dd/index.html","1de228612b83472ac39aa484fc02a0ec"],["/posts/c35bc572/index.html","78943cb99cce0e3d0a98dbcba9388e46"],["/posts/c436016b/index.html","ae0dea1864c2763b69162534abac69e8"],["/posts/c4efc741/index.html","c0bce4f265108b6de71ef749025c1782"],["/posts/c5e8a08e/index.html","d456146e0b4995b185feff3f37c4c65e"],["/posts/c7646f1a/index.html","60b9d905d76fcfc30e67c1276deb8061"],["/posts/c7db1dc0/index.html","669919c3dd187de0b75853d89a283d20"],["/posts/c7febeba/index.html","26d331356d0baf54eca8624202f662ee"],["/posts/c9c3a06e/index.html","921f8f56316566f5ab2a2ab70cc6b6c1"],["/posts/ca657192/index.html","a763647c8cd6a38e7eb02d6485c16a9d"],["/posts/cc6d2cf2/index.html","57291cbdddaebc4a540aa1695f9668bb"],["/posts/ce48f291/index.html","6d4530676505c88aec22dced5c56337a"],["/posts/cf480faa/index.html","3b47ec58d6da7bd644c1a0f8eda3b71b"],["/posts/d090b4d/index.html","7248b3513a88514c3d62ace08bb7d35f"],["/posts/d1995044/index.html","5d0e381c7064f762d337776e76fc1b97"],["/posts/d2d34977/index.html","552ce9a48e41596fcf7e694b21bbd2fb"],["/posts/d3647a92/index.html","7bc87b67725033a98d927931b6fd49f8"],["/posts/d3f6b818/index.html","698fae91443172378556dfe2e0cc72f6"],["/posts/d465029c/index.html","405fb9dfaa5d00e00b526d46dcee65db"],["/posts/d9884be2/index.html","04b218def7b7acea384c399f6130f01a"],["/posts/da40f433/index.html","036c412e511c205b56d6eee445e26cd5"],["/posts/dae71d5f/index.html","a82d7017c93b2604eea9f805befeb516"],["/posts/db9fbe47/index.html","6899ef2a51cb791020d29a81e4fbe2eb"],["/posts/dbba997d/index.html","2c804c5d48df4654360eccf4e3dd57e9"],["/posts/dc94f8a1/index.html","b366fff297255c48aa6f5d793cbfd808"],["/posts/dfe9b67/index.html","8ea842eb5aecaf8cd64a70e547344f38"],["/posts/e0387d80/index.html","89c3070a5b279b7c974f612f4ae0b03b"],["/posts/e356f7b3/index.html","ce308e615c45684b0d095a6065240865"],["/posts/e3acb366/index.html","64a4ea71ec9882878352baf29a126d3c"],["/posts/e450354f/index.html","882d50d7513a9dfdabec1edb7a40d967"],["/posts/e489223c/index.html","f80f594b717d7d8193089c0cf536c9b4"],["/posts/e9a8ddd1/index.html","bf8b03930f1063ed724a6038b58227d1"],["/posts/ea914c06/index.html","6fcf2e5dadee6294a697d5c4aa4c6858"],["/posts/eaa8f31e/index.html","483846bc12cf4494a5b136744452c0ce"],["/posts/eac19412/index.html","dfd82133386c5e82febdf168304748dc"],["/posts/eb0c9e8/index.html","afb54a5f8953ca5f8ee3bc0cc58dddbe"],["/posts/ebe408b3/index.html","7f754c93e4bd6b75dc689a9b0274ed6d"],["/posts/edfc881f/index.html","f4e13ec2688bf168b39c3c5c72385ce9"],["/posts/eec0bbd1/index.html","1e1d6a8e8380c74c492da1df48e28869"],["/posts/ef22c7c2/index.html","cccdd5aa226d84903bac8a0f413e0703"],["/posts/ef271825/index.html","4b544d116748c72572ce558aed580916"],["/posts/f209578c/index.html","b505263db25c4e33f4c3bb646d67d370"],["/posts/f3e9bea2/index.html","86d5cc7e8889c29a165faf9e416ac851"],["/posts/f67b7122/index.html","ac7d67ec845844924f53bcf215b91885"],["/posts/f7abba28/index.html","9374e5ede4acb0210449fad369a4cf22"],["/posts/f7bf33eb/index.html","6d90f8ad5e13794aba571278b80f7338"],["/posts/faffd764/index.html","81f93d72ffb21b63eb6a914f6f497a22"],["/posts/fb684fb0/index.html","abd8a6280ba469a64aef161fc7896feb"],["/posts/fc57199f/index.html","1560038abf9f4fa1827494c94790fca1"],["/posts/fc6e9a7d/index.html","d42a07112efdc0af1295744bc69860cd"],["/posts/fc7bc02a/index.html","4fecd5fb563d7dbe28ac8db5ff28719f"],["/posts/fd67c5cb/index.html","e1a3a1484cc9fd9579bd922d8ee6b6c9"],["/posts/fdde061e/index.html","a2b8158acaac2911c0f9a8b7c91772d6"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","f434182fd3c06a01c834e6584c278162"],["/tags/ES6/page/2/index.html","6c6b937fc520f0a2c7436fd3370991e9"],["/tags/FL/index.html","55ab9bf01024915e33477785e924ffe5"],["/tags/HTTP/index.html","bbceed7a159d67156e2b5b68ced015f3"],["/tags/Hexo/index.html","fafd9634a87268edff72821e4600765e"],["/tags/Hexo常用命令/index.html","edf54efe46c396ec5f5a0cc3760bacca"],["/tags/Nodejs博客实战/index.html","04e7bc6fbd13fe49f59f31ed3b0b21cf"],["/tags/React/index.html","66ff1b67aa29bcdc02d7cb127783d527"],["/tags/Vue/index.html","8619120f1c964dc5517a51f8f4351307"],["/tags/Vue/page/2/index.html","a46dcd066ca20fc1a21127332072ef53"],["/tags/Vue/page/3/index.html","88628718aa282af4814b6d776e2d7e68"],["/tags/ajax/index.html","ec81fdb5c8c598984dda56e128e132ed"],["/tags/ajax/page/2/index.html","14edb11ceaaf851b9a3b214dea689700"],["/tags/curl/index.html","6330d9c6c144b7e88d55d0b74baf3302"],["/tags/index.html","a493a64d9a54bad52db86b673021744e"],["/tags/json/index.html","8c112669370e2c5f804344dee8863d7f"],["/tags/mongodb/index.html","74a748dbbe77b9756a7e065851eff7a1"],["/tags/nodejs/index.html","97fd4618b5a4fca318a61e9ef01040ec"],["/tags/promise/index.html","1ead664b672082a63847527c275561c4"],["/tags/中国近代史纲要/index.html","9f54fc2ef14c063f3d29f3a76075237a"],["/tags/日语/index.html","dd8def9993b38263c7bf6ffc2e8ff51d"],["/tags/标签外挂/index.html","e93fc2d7e50efa0054e10dd4f1373b45"],["/tags/目录索引/index.html","7d43867864db5af22ab6b8acb4036777"],["/tags/移动端开发/index.html","69f82a55b9295edcf41cad48e24b41b2"],["/tags/管理经济学/index.html","6edd30eb86eac5b8217f5bbdbd15c059"],["/tags/考前突击/index.html","7d38bd857930905e865fdfa081e466e3"],["/tags/考前突击/page/2/index.html","240689ba706481721bf40c4a6dfe321c"],["/tags/自考/index.html","2419a563142909b6bd46e6fa46fa9d49"],["/tags/计算机网络原理/index.html","0290102068d10bf79c8e168a4600ea2a"],["/tags/车技/index.html","dfbee39372dc5743b9c22aae5ab41cc4"],["/tags/运筹学/index.html","bd8790b4d2bc3291c8ef873d161a45ea"],["/tags/马克思主义/index.html","249b00f3dacfcb9043da7b369f0fdc26"]];
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




