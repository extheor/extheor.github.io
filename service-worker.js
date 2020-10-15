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

var precacheConfig = [["/404.html","67c61045fe52b0447c26f573ac9d38bc"],["/about/index.html","fbde85a9ebfb7684cc00d61068bc0990"],["/aplayers/index.html","08a8e5e3d34facc512a2f8ae1c78e614"],["/archives/2020/02/index.html","f81ce6481c5486b4a13e3dc73ce388b5"],["/archives/2020/02/page/2/index.html","569044f749326db0b868fb8961b081a5"],["/archives/2020/02/page/3/index.html","467813d76a284e004b36a704ece54f7a"],["/archives/2020/02/page/4/index.html","2339b321518455934745dbb5ccef0220"],["/archives/2020/03/index.html","2ac7f7ea2165cfd90749d2a372e37347"],["/archives/2020/03/page/2/index.html","b94878c8820572dc02bd9eaeaa3497b2"],["/archives/2020/03/page/3/index.html","b3661265f328496451ffff9ce4b40187"],["/archives/2020/03/page/4/index.html","096d4c62fcb872f635d05e6f56d49baa"],["/archives/2020/03/page/5/index.html","27436817e455bc5209099509b98846dd"],["/archives/2020/03/page/6/index.html","7af1ad1ab8be328e4a5fe138d6f511f8"],["/archives/2020/03/page/7/index.html","d72b5a015b265baa5dbffe86f2853f27"],["/archives/2020/03/page/8/index.html","0fdac388c4d04640f982ac5c63dafedb"],["/archives/2020/04/index.html","6a4218e6a9abc5c34f89e8b8aad3bb73"],["/archives/2020/04/page/2/index.html","4481b71537cc06af5eb4ea9b25427015"],["/archives/2020/04/page/3/index.html","f9c8fe96630f253470aa69f06a058437"],["/archives/2020/04/page/4/index.html","c3a83e4d944569fdfdc899575e097d61"],["/archives/2020/05/index.html","aecdcebfb0721de14d0664796735f75b"],["/archives/2020/07/index.html","ce7b512537fe7934eb91ed6e3f130221"],["/archives/2020/07/page/2/index.html","0188672755e34c02d9ed6f524694f791"],["/archives/2020/08/index.html","ed073c36e1c517d853e4301b247e8b76"],["/archives/2020/08/page/2/index.html","db2add467c2a805baece20572ec92330"],["/archives/2020/09/index.html","a62303b4528a014ca1f93d31ebdcb722"],["/archives/2020/09/page/2/index.html","84341ba1ce238444c753288eda79b58a"],["/archives/2020/09/page/3/index.html","55aa30e049c28b62780f10cb66b2074a"],["/archives/2020/10/index.html","b2c29afc666ada0d86838b9ca5bed862"],["/archives/2020/index.html","93a0b99013479c7e7045070da102904a"],["/archives/2020/page/10/index.html","6a71fa9cf3c5091441d2bf9f2f81249c"],["/archives/2020/page/11/index.html","036a00c2439038c0892b60ad1adadd9e"],["/archives/2020/page/12/index.html","e93912a5c04b466b1059c880cf3d4caa"],["/archives/2020/page/13/index.html","e15e86d454283979b95e3850276ee27f"],["/archives/2020/page/14/index.html","ae4af6e0f27d77f7d2798be3d1dc3b93"],["/archives/2020/page/15/index.html","90ce4fd82b69541fbe96416cf9241a5c"],["/archives/2020/page/16/index.html","87fd86325a679c2da5166adc8ca7b720"],["/archives/2020/page/17/index.html","ab5c79a5af564f72b12e15fdd82e1523"],["/archives/2020/page/18/index.html","8050edbade57ea741e5a90706a028bed"],["/archives/2020/page/19/index.html","8e0b70b8be1355d6a8687a69be57bbda"],["/archives/2020/page/2/index.html","62fe48424c622c6286a4c9b4eda9bd97"],["/archives/2020/page/20/index.html","9508d94ac7c6a81de5012eb2413802cb"],["/archives/2020/page/3/index.html","b43f39d8063707b3f3345b50bccc7298"],["/archives/2020/page/4/index.html","e95c206aae0953df2407618bf362c0a9"],["/archives/2020/page/5/index.html","8948d7d97719b3664b6dd18af4a39a6e"],["/archives/2020/page/6/index.html","1d126a6386643dcfa379a05a894c1224"],["/archives/2020/page/7/index.html","df54d28238fde37551f6f3049a0251a4"],["/archives/2020/page/8/index.html","1534ce03a2350113bee2e5bfb23cdbde"],["/archives/2020/page/9/index.html","170bab9f887051a1b1c40a8b5faaaf27"],["/archives/index.html","e5bcffd8517970a9949c38ee8a8a617a"],["/archives/page/10/index.html","851c4104ebefa442faa96cfb62539103"],["/archives/page/11/index.html","8d04bba170b376a56a9117edba4cb109"],["/archives/page/12/index.html","393a03a6a980305e224f8d7c2fa42743"],["/archives/page/13/index.html","94b53dac323c4b0f87a64b451cdd7ec5"],["/archives/page/14/index.html","28ef3411d66f109e92ae607f5d3be38c"],["/archives/page/15/index.html","6a46ca1b9d693aaad907f5bbfc0c94f1"],["/archives/page/16/index.html","84996f23c7a360a54afbe86ec14206bd"],["/archives/page/17/index.html","ba5c783abe0bb9a04862a3c6409d8bf7"],["/archives/page/18/index.html","eb2f66fcea2f95bc8a8d826e1d7dc1d3"],["/archives/page/19/index.html","74468da3c5a72fd08e7bc9a393497a26"],["/archives/page/2/index.html","1fb2c3d2d073421e661f3043232efa53"],["/archives/page/20/index.html","9be995ff595cad20704a1b4b94d4ef63"],["/archives/page/3/index.html","ce52e3fa8ceb188634e44da91499f757"],["/archives/page/4/index.html","8ea453b9967845abfcc86d1ef8c60646"],["/archives/page/5/index.html","f2c1f20d6503d2679b7ee3b9cde058dd"],["/archives/page/6/index.html","314f1f8778082d129f5fd2f511cb5fdc"],["/archives/page/7/index.html","85290772b6d4ab54912ef1d7c9fe5dd6"],["/archives/page/8/index.html","dfd636027528cc78513e47344c5f6042"],["/archives/page/9/index.html","49f2cea6edef6bf02bbdbee02bbb6bff"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","68737f7169a27cf5e9e43024a02f872d"],["/categories/FL/index.html","406a804a7b6512c9eeffc217f02c46fb"],["/categories/index.html","f4edfa3ecda3c32a882963a0c0a0aeae"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","0936bb01a6fd01d33ce686952e66ebeb"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","8aec1130692d547bcb2b2d7a7b90d46f"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","47ab93e7de8ebc8c09a4aeb6db502969"],["/page/3/index.html","5c864d5a51bed8705310d404d5e7197b"],["/page/4/index.html","49ef93cbdfc45ec0f9c141fb667649a9"],["/page/5/index.html","a07b0744f4deffe350cf13a7fc5155dd"],["/page/6/index.html","d19af9e7da645a40066fc240888d3575"],["/page/7/index.html","906c35b29438cf0766faa359973fb3d9"],["/posts/10812f0/index.html","c63162cf90c87c753797e1ca234e8402"],["/posts/126b275/index.html","7ed655b9e26381e8f87032ab527aa3a3"],["/posts/12d95a5e/index.html","3eddf91bc1dd6670e1170915adcb2c37"],["/posts/1367417b/index.html","0f8679ddef49d644d2d45778d7fa7072"],["/posts/13886e3f/index.html","e0db7394ac128222140cefb83f0a3169"],["/posts/145193a5/index.html","9f1364a3ab2f39559a99f98f09a63cf0"],["/posts/149dde25/index.html","f38162b5b57d56fed9a81a164c110cc7"],["/posts/152fa65b/index.html","a10450b6e933ef335651315e96c1f97d"],["/posts/169e7dda/index.html","558f02e7e670c2ddb44283dfd7d702ca"],["/posts/1875100e/index.html","db2b6200a65dd7c0317b0c08937f9090"],["/posts/18eaef7d/index.html","2b63500c6e1ad8a877312241415f5395"],["/posts/1a0bc7b7/index.html","6b084bea3df685c720d777350fe92e6f"],["/posts/1a20a057/index.html","2d4e25bc4ce42630a9d7a6a4ba7bc5ae"],["/posts/1a998be6/index.html","7aaa398a162d7fcd88a7babc01ae272a"],["/posts/1bffbd20/index.html","e288ab8f81a58a6ebbd2b37832f3e832"],["/posts/1c5a0485/index.html","90f927218addd4bb57f0b525e5bf26fc"],["/posts/1e638f78/index.html","cd691b6895c1f77d7627440a7a84dec8"],["/posts/1fb53120/index.html","976aeaea1ffca192875a4f5b6dde9bfa"],["/posts/21466e86/index.html","51e9109e05f39a45dc83d5ff74e9ae21"],["/posts/21abcf1a/index.html","4d7eee7b8f826fc659a40444cb217ade"],["/posts/21c250b1/index.html","54cb82772aaf4297a0aa182313ba31ab"],["/posts/2287cc/index.html","4ae4923e2831774ef121530f54136c85"],["/posts/236bfea3/index.html","36517766528e302561ae69e6432e6d6e"],["/posts/24caea6b/index.html","0931a565295ca4fcb4876e1f20c7e9c9"],["/posts/25d45c3d/index.html","306f4a34f3d0f81a42b646be3eb64cdd"],["/posts/262baa9f/index.html","ce59390c1ab84d14ba1d061b364d8f63"],["/posts/27cdc142/index.html","b8a2946d5b69ff1b8e7fc441feda462e"],["/posts/2895c4bb/index.html","5fc88ed6b8bd8751c551cc25b3e41404"],["/posts/28987ff3/index.html","04d944d6e38fe601885250f894f4beb4"],["/posts/29f0df96/index.html","1c54c3a4db29b5d3966f5329b7d5d40d"],["/posts/2a1d2b6f/index.html","5d2f94799375fc81aeaa4ebf9ab6b63d"],["/posts/2a386047/index.html","b62ba98593da599a889be4c2648ea243"],["/posts/2b770baf/index.html","f5b3e7fe3146f8d45285481a5c27892e"],["/posts/2cda4a8/index.html","60f106e8f29dbfbaf4cb788fa009dc28"],["/posts/2d020832/index.html","0029925ff560dd750be07fa001e0e53c"],["/posts/2d6d3bd/index.html","d0fca7214ee68601e4099fa0f4011ef3"],["/posts/2e0c129d/index.html","433400e88166384c3c9b3b22ec80d663"],["/posts/2e7563a0/index.html","c8b6420a94b978f6d3f3bce35ce81709"],["/posts/2e7b8d69/index.html","0cdc3e11719daa73c7a8d384997ba636"],["/posts/2f28d14b/index.html","e43e885b8fac26c5302fa0a22d27423b"],["/posts/2f6e1383/index.html","8bce853b4bbc4ddcccb45d08133ca955"],["/posts/30bfd1cf/index.html","40182f920363dc57d2b4d0b87941b2a3"],["/posts/33235106/index.html","d9fde3c567e9f0975999dc544883a9c3"],["/posts/344e951f/index.html","5c5c5ad4330f98e26c6270c8a803a58a"],["/posts/35e2bcf6/index.html","46a22d97d63f2dea309bfb6dd05ae838"],["/posts/365e96c5/index.html","4c95109b88edaeac11b4317b4006ec8e"],["/posts/36e331e3/index.html","b2dfbc753affd1d62a10402d3ea48521"],["/posts/372df90a/index.html","1b29394b119e3e363097742b96bbdab8"],["/posts/37c547df/index.html","48a7b5045861ccda6b2218a0b3a2de54"],["/posts/380dfa6c/index.html","e0f01c5817ab0e49bcf14eaf07f71256"],["/posts/38a88481/index.html","8016c557d4a3cad7550197eedd8122d5"],["/posts/3914bfed/index.html","e0988d1befb7df9fe61f25b9432ad76b"],["/posts/3b56780c/index.html","56faefd3eaf38b330c7e9554f8e7655a"],["/posts/3e4bb613/index.html","09a336cc7d76409d7a2507ffde1f81df"],["/posts/3f2e933/index.html","a2c9f465773bff5182c94f3e59feac7f"],["/posts/3f6e5f9e/index.html","8e3552a2e077ad2340b4951192ed233f"],["/posts/4349a589/index.html","594de2edd89f4a1187184a8c14a40d1d"],["/posts/44246190/index.html","b5aa5ce848b370685b18b238b2728552"],["/posts/456550f/index.html","900d7c6b844af9e8721ed58d80fb392c"],["/posts/470ac03d/index.html","11772e96c06985ba33dab1ade14566dc"],["/posts/49249ac9/index.html","e2bd48648ca643742836b7c24b2c12d2"],["/posts/49f2d2a/index.html","a058934f19a1bf417990929f894a3d6c"],["/posts/4e6d4eb4/index.html","c9234be14e1b3c490d5545484c2b49f3"],["/posts/50caf1d4/index.html","716d69ed9daece14f296fb875fef7858"],["/posts/51139400/index.html","97a35d80bc36120e538cfdb41ca62457"],["/posts/512c9a09/index.html","58b2672cffa29d48b2bfb7c07249f546"],["/posts/5205b330/index.html","fed78da15683ec0d4a586d3895ebc7bb"],["/posts/52d36cab/index.html","b0e4e3a1c87cbd878729916e46acb832"],["/posts/532a083a/index.html","d1e144040c8dbfa95fb0a8cccc83997a"],["/posts/537d2c2a/index.html","d7f9e60f865f6a9f1b321ec6b6d3f144"],["/posts/54383ba0/index.html","b1a1363bda27eff2f8c1378844db2427"],["/posts/54667693/index.html","8592b824789270e6dbd289329bdf3d32"],["/posts/5508212c/index.html","fee0e28ee9f8b937c95571aa3a094f58"],["/posts/571564e5/index.html","77ecd5a44dc07dacb5b563b75b191171"],["/posts/57900fe5/index.html","b16c32372aa6bcf5e436db6d34135da9"],["/posts/589a214a/index.html","8b97a7efdfb12f4fb07bf23072a8e71c"],["/posts/599a2b19/index.html","715f6f40dddc2d11c8f93b4f5f5c6d33"],["/posts/59c05382/index.html","8b92a59663d756edb892d14e9c7f53cc"],["/posts/5a5294c8/index.html","5dec7d56b8e2555cd085f3881aa0161c"],["/posts/5b8c69d5/index.html","6fcb4ed1c11f3c794b9abc34df1a9a55"],["/posts/5d3da28e/index.html","898dd8560d3dc58d3c469582ab89027a"],["/posts/5d3f50d1/index.html","e76feba8c87b6cd4d61832409267551c"],["/posts/5ef7ef00/index.html","91e4ab2f3ff14b5f7cf4532eb540fe80"],["/posts/60b5dd06/index.html","bcf831bdd02b76fd403a5057f8a48503"],["/posts/61477045/index.html","4abc85ac9890ef5d6d5b17f8274accff"],["/posts/69d79f93/index.html","269fddaa00d59417b188491df54be798"],["/posts/6b2f046/index.html","fd9750cd2ac4ba58f3a3f20c4d913cfc"],["/posts/6b4610c4/index.html","970cd8045a3dc8c6531cf0befc509916"],["/posts/6bbf03f0/index.html","c227970ea4ad20440a7c0c1c64c7a635"],["/posts/7000d139/index.html","260c4eca7b1945eac780ec2db1b692d5"],["/posts/72f94093/index.html","a09060a08e7e0d2184a3d37100618f20"],["/posts/7380b71/index.html","c3a2bbb2cf8fd0f07238ffabc6f907d2"],["/posts/738eee3b/index.html","9116c2703b84a2b798e1498ead148617"],["/posts/73981dbc/index.html","fd6a148120d728c194e660a772569626"],["/posts/74d60fd9/index.html","03357d172809004eedb4260899ad0737"],["/posts/74f5d9a5/index.html","1307bab40e02da3eac633019e1993742"],["/posts/750f2ce3/index.html","d282547f17e1fa9ced2febea3ac6782a"],["/posts/75ceb627/index.html","548fda1545d396c1dfc73165418c6df3"],["/posts/7725b75a/index.html","c435bac69c9314ea9fbc354c32c4ad56"],["/posts/79ef335/index.html","6648c115422785d9de30caae143aa962"],["/posts/7bbd3149/index.html","7b7bb7f2612ff0444a8bfbdd02e3bd8a"],["/posts/7c20e8d5/index.html","a595e01cf6106d232799a409176268e5"],["/posts/7d3ea75e/index.html","04970c9f2e7a4e4c367e60d8ad43351b"],["/posts/7d43958e/index.html","77b69bd9ecf123551683ce09dea2e045"],["/posts/807ac7f2/index.html","fcb5613326ee33f2a84a336be8939540"],["/posts/81738fa0/index.html","de1fcb41e2a76c1b9e2fbbc52951c49b"],["/posts/817c41b4/index.html","cc798cdc1f8b26e3ae105a9e9f65b923"],["/posts/84ee8e34/index.html","d86017cfd95e666af7e50501103fc0fe"],["/posts/8837602f/index.html","90945ec330874dcd98474fbd9d91d02e"],["/posts/89589a03/index.html","abf359ba21f0f8aa9029b8cdf1024d9d"],["/posts/8bcef008/index.html","f1245766158ebe2b974149d34d3c05cb"],["/posts/8bf9abeb/index.html","aaf8620741f03f551fa19ed44b94a432"],["/posts/8e5f5686/index.html","5486cddfa7a97010c7bae1a8375f14dc"],["/posts/8fa6b8c7/index.html","938fa8bed90f0e5312e82bd6068de276"],["/posts/9029a3de/index.html","bac017804ba845d1b9711383d4cd97bf"],["/posts/909d9a5d/index.html","cc0e9d814e11acfe35881c44bb23f18d"],["/posts/91404b94/index.html","e0ca5226fb3e403755f5dacf8905f708"],["/posts/932e3747/index.html","65ec7675a8d10f8d058ac6b1fc2d8bf6"],["/posts/95fc9e6e/index.html","903ac2b6e61e9851c0ef7e2d6047162d"],["/posts/98e67280/index.html","78c812cf5b497a7994f9f4af78da5f74"],["/posts/9a4d13ef/index.html","dc3ff4b929daaf28558191931238bbec"],["/posts/9afbb889/index.html","3d5469b9ba4ebdd6e8fd10ba1cb4b6f9"],["/posts/9be63ba/index.html","74b19d7cd6e675f1db5aaea46ec2ba7d"],["/posts/9d967c90/index.html","24e2aef6e0f12470cefc19244ecfb450"],["/posts/9eadcdf6/index.html","eee37015aa5d709ccbba0b2ea7e87fd2"],["/posts/9f97db8f/index.html","8d4845118d7b87a029e38d1f384e35fa"],["/posts/9ffb4388/index.html","67a8d813b4a9cbd7a70b7f28a11b7898"],["/posts/a094d027/index.html","70cd526daa540f1b65bd4111cadf0f59"],["/posts/a27042c6/index.html","c2bab067976eaad20888196b69638027"],["/posts/a29cc732/index.html","a3bec8ad27490beef903fc788fdf4b5b"],["/posts/a44a518/index.html","7c80eabbe8dc5e33255a461a30966683"],["/posts/a4f2a748/index.html","803aafb13e5bbc773bada097c27e95f6"],["/posts/a7dc32c9/index.html","d1f6b0761fb83b842a5588b2c5654b17"],["/posts/a7f753ec/index.html","818ebfc6a9d0210a8215090bc3d3b9c0"],["/posts/ab176793/index.html","0719cfb3cf215bb2354a8559ada9277a"],["/posts/ab34095a/index.html","bdb247081c1340650d7a2cd27bf09f40"],["/posts/ad47c4a5/index.html","2ff662bc35b9f627b3a8b97e2492fdbb"],["/posts/ae8f7b74/index.html","455353d70ef42009de04b4bc11dfa3c0"],["/posts/af43816b/index.html","5c18d8be1cb3645a93b2b979cd0ec4b9"],["/posts/af9e049c/index.html","edb851004e6a79856586479e57fd1368"],["/posts/b0f1a367/index.html","c9379171d8538edc50b75006eac815b1"],["/posts/b0f98e2c/index.html","2d7a4e8e9030a9c620760def6eba701a"],["/posts/b33131fd/index.html","af86325861945aded8772bc62d3d427c"],["/posts/b36eb520/index.html","a1b30ef7344ca5f5ad4d4f6086e7c7e9"],["/posts/b542fc02/index.html","8f9533b4c1a10b4995e6164d8ed9f412"],["/posts/b54eeeb4/index.html","9f4330789f63fc967da7795829fe5095"],["/posts/b84f3f3c/index.html","8c069bfb1e88cdaba7eb789cc2ad8efa"],["/posts/b94fc207/index.html","dcbaa97c03fceb55eb7e3882e26fc5d1"],["/posts/b981a6b4/index.html","64084e57da42d0ad2b48e58664988273"],["/posts/bcea326a/index.html","1d28591fa87410e6b518221eb133f26b"],["/posts/beb19e80/index.html","50dad6643c0d4254e83fc3512212c6ed"],["/posts/bec490f8/index.html","7aea0a8267e93ebfa474bc92fffb04c8"],["/posts/bf7bde0e/index.html","c8be01c635eb4879a49ce9d5e4ecca5e"],["/posts/c03f17c9/index.html","11c04268700fcb06f955f14e90d1eff6"],["/posts/c35bc572/index.html","11211075b3432fa0449807578e67c2f5"],["/posts/c436016b/index.html","fe285875a65120525ada67d99a3e1758"],["/posts/c4efc741/index.html","177a464a2b029afcf4d3e40fc0d5baa7"],["/posts/c5e8a08e/index.html","fe8bb2ba6da13b3d719d39da21b87475"],["/posts/c7db1dc0/index.html","f264a0d9dc0ec4a35e7e4764bd4136d5"],["/posts/c7febeba/index.html","eebddc7020ed4cea829546224ba52778"],["/posts/c9c3a06e/index.html","de0321f02da288dcdf1865c4edc02304"],["/posts/cc6d2cf2/index.html","60f30f928a37bfa7aee1b29e6e18781d"],["/posts/ce48f291/index.html","18cca9a17b4708c15cde1352ae92b100"],["/posts/cf480faa/index.html","787c8af0744b6b3d7de0a7b8daa54988"],["/posts/d090b4d/index.html","27f328a4e4c5e9728671f7c80600932c"],["/posts/d1995044/index.html","0f3373e748bda9c0bd3db541e0473447"],["/posts/d2d34977/index.html","c5a8b125a31eea14a089a77c9db80381"],["/posts/d3647a92/index.html","de62073eca863d8827f8109bb1f30a95"],["/posts/d3f6b818/index.html","b8c52a6a970b6d00b0c66c5e4716ee7b"],["/posts/d465029c/index.html","4fcbccea774f12e53dd3e5d788f13188"],["/posts/d9884be2/index.html","029326a0b4816c6309e8d7037fa55d3e"],["/posts/da40f433/index.html","26d2e1c9d4a12d7a27d91cc50fed3294"],["/posts/dae71d5f/index.html","608b29e2b62a371fd58b1a52938c8014"],["/posts/db9fbe47/index.html","a993e8cd2973a650165684394a98845d"],["/posts/dbba997d/index.html","650ba4e62cca9c4a33e4d3996c5fabd5"],["/posts/dc94f8a1/index.html","b9c933b631aedcd96912b9d9f344fb91"],["/posts/dfe9b67/index.html","574862ea9bd3f61be4f7aa62f59d514e"],["/posts/e0387d80/index.html","84578bfa9dc3673e5521af533921f0da"],["/posts/e356f7b3/index.html","0bfe73ed46538c68babb979d8aae02a6"],["/posts/e3acb366/index.html","809c6ab105370d67986a0b6f501e006b"],["/posts/e450354f/index.html","c1eb317b1c330723f7336d6854a53107"],["/posts/e489223c/index.html","e5385ebf74bf5acd81d9bac2762a7155"],["/posts/ea914c06/index.html","6743bfbdb576cd3017cf8321fcd28cf8"],["/posts/eaa8f31e/index.html","82ba4dacc2b237ea2dd3d831fb5c2b7e"],["/posts/eac19412/index.html","740284e6e3ccf605b03cdc61e1cc7d14"],["/posts/edfc881f/index.html","0d64779d8c441084bd09eaecba871e61"],["/posts/eec0bbd1/index.html","ec130b147770f30397c444c269ad9be5"],["/posts/ef22c7c2/index.html","7356621965ffa0b2f51841b6d6aaab3b"],["/posts/ef271825/index.html","51d5d04de110b47f84716d46a0ef6f84"],["/posts/f209578c/index.html","2e9434bafaee6377ef367b616ec32232"],["/posts/f3e9bea2/index.html","77fd18d9a2a0bf5838cafe02e67f4382"],["/posts/f67b7122/index.html","9755ff037ab22a4db36435a84094d51b"],["/posts/f7abba28/index.html","e773bec795a45039c7bd0d9ff7a1df52"],["/posts/faffd764/index.html","30cc2ec496a61ca117d1f329ee56c8b0"],["/posts/fb684fb0/index.html","3c04ffb482da42df7555db041e5eb21f"],["/posts/fc57199f/index.html","d85916f66f5c708787285555cbefccc7"],["/posts/fc6e9a7d/index.html","7d4cb9615877c7afb2c68d6d1b70c542"],["/posts/fc7bc02a/index.html","7419d5540db8d41ebfc14a03aa56e848"],["/posts/fd67c5cb/index.html","0e465eb98fbf727b5b7069ddae4b36f8"],["/posts/fdde061e/index.html","01fb1ef8bc72a034f819c0d4848bc9a3"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/FL/index.html","aef61a8b42ba987ae38af0d10873ac12"],["/tags/index.html","9ec5ece9c719d9d1d104f89a3ea2f480"]];
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




