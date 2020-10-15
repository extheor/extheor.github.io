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

var precacheConfig = [["/404.html","a2db819e30f79f28729ec50e8ef45ba8"],["/about/index.html","fa065d47a10b0704434de7cfd7aea4e8"],["/aplayers/index.html","8d3e5aa72cd1a5eba3514ad2af917f6f"],["/archives/2020/02/index.html","6efbd4079a5bd2c8dd4491a3fcdbce0e"],["/archives/2020/02/page/2/index.html","0c0593123eee977c0e8d8b8d85164138"],["/archives/2020/02/page/3/index.html","11ddc0db89e018d2ca6cc797cb2b321d"],["/archives/2020/02/page/4/index.html","b374e8583df8f528e2382add4839584d"],["/archives/2020/03/index.html","1765c895d98e8d125130e0df35cfe6c5"],["/archives/2020/03/page/2/index.html","974a503d925e470793991798539077ac"],["/archives/2020/03/page/3/index.html","5ec83b9a08978d614163fb5f7db5dc0b"],["/archives/2020/03/page/4/index.html","b7f5d509674fa6a5f1bee341bd408c6f"],["/archives/2020/03/page/5/index.html","aec0ab8ae9ced7d0ffefc67d0948b412"],["/archives/2020/03/page/6/index.html","1f43fe36afe3a726c203c882219a1aa4"],["/archives/2020/03/page/7/index.html","49e4237793610af4e196b2e69213c2b9"],["/archives/2020/03/page/8/index.html","44b39473a7ba8c7f2b2240ec1697e48a"],["/archives/2020/04/index.html","df18e29d212c0e019e79dbf4c1c2bccf"],["/archives/2020/04/page/2/index.html","1932a9bc88d5b66c714377d317790427"],["/archives/2020/04/page/3/index.html","5b98cb69e0df7ab1dd12d319cb38448a"],["/archives/2020/04/page/4/index.html","769ab7b8af5072301b064c04c8c9da7a"],["/archives/2020/05/index.html","1a7cd6f646d288fa095f1bfaff685bf4"],["/archives/2020/07/index.html","78ec7873bf592dab571ad644cfb03573"],["/archives/2020/07/page/2/index.html","e1725ca77ca649e7ae40bf599442199c"],["/archives/2020/08/index.html","603bad901094aa40da5348362063590c"],["/archives/2020/08/page/2/index.html","6376cfa1c84abdcc886469eea6686c4e"],["/archives/2020/09/index.html","95da66b579e0cba3e19ed07d2add0fb6"],["/archives/2020/09/page/2/index.html","95e11bf8fcc783b0e2f49ab13d519963"],["/archives/2020/09/page/3/index.html","0d5fac9038c91b9ff861da3587eb11b8"],["/archives/2020/10/index.html","fd78292bb7390ce71729f9ca4ca6adc1"],["/archives/2020/index.html","706c15912e5d218ef151e4a6d061fdff"],["/archives/2020/page/10/index.html","c78d641713d5d3a4494e615cf8ddec27"],["/archives/2020/page/11/index.html","a9024a3315bbea7b843af54d003358ae"],["/archives/2020/page/12/index.html","587242f9f0d9d1232d46d49b1465a665"],["/archives/2020/page/13/index.html","9706cae63310b2578291026e001db4ab"],["/archives/2020/page/14/index.html","4b4619851a965727d20ff87c59deee70"],["/archives/2020/page/15/index.html","f875e507a3b6ef42a0465bbc738c198a"],["/archives/2020/page/16/index.html","47705f69a4740f42c99880ecafa426e9"],["/archives/2020/page/17/index.html","e9f87f5365e2c7248770b9135f5f47ea"],["/archives/2020/page/18/index.html","61710a138e4cac639f09acfd790dff10"],["/archives/2020/page/19/index.html","bb3bd3d310d4e63e306ee26f48df17bb"],["/archives/2020/page/2/index.html","18d7bd28dcfd7228d2079c9953f942d5"],["/archives/2020/page/20/index.html","5d1a21eea67903ba44389bd1e462d924"],["/archives/2020/page/3/index.html","4c73cfeee4e0861a59ad42a55a779ac4"],["/archives/2020/page/4/index.html","de1834ba2c079374446c21e1045d1966"],["/archives/2020/page/5/index.html","0935edfc1af4bb88605c70e3708672cb"],["/archives/2020/page/6/index.html","664b8354d7fd5f230df7e96b07af1b9c"],["/archives/2020/page/7/index.html","655c074e833533784cc5c0679e692a33"],["/archives/2020/page/8/index.html","f400aef86e95a9b0bf9011ef69573a09"],["/archives/2020/page/9/index.html","187f28af70b05790b3cddf54a7a62601"],["/archives/index.html","4027c4d3f0f6845d24760c212bc91ef9"],["/archives/page/10/index.html","1b555d672dfab7ba16e9a1b0f7155496"],["/archives/page/11/index.html","8466ace5041d7b8b89c04778f7002bbd"],["/archives/page/12/index.html","385b2cbd190f2914fbe2c288c3b03aea"],["/archives/page/13/index.html","1d8726d60775bd41ad741fa3dae83053"],["/archives/page/14/index.html","3dc0323a44915c3d6474fdf0976268e2"],["/archives/page/15/index.html","e3acbf4e853ed34de394de3653d45b22"],["/archives/page/16/index.html","5ce36c427790320d30d8206954e79743"],["/archives/page/17/index.html","79bc1b36097a008df8ac7179da8e4ad9"],["/archives/page/18/index.html","c131ec5e591ad68ceedfddbd123bfa2e"],["/archives/page/19/index.html","6d9c6e8d90c8ab668dd39a4992bff53f"],["/archives/page/2/index.html","658a0ea0b5c5352a918f19645daa76c0"],["/archives/page/20/index.html","066be412aeebb93dd7ceb41e2a8adadd"],["/archives/page/3/index.html","38dbf49a0f2cffe147195a99e2745aee"],["/archives/page/4/index.html","388ed0206550a47556233b562e222f28"],["/archives/page/5/index.html","88f877fe3e092bc0ff572299f4594f6f"],["/archives/page/6/index.html","a17249d229ec1a503fa0993c9a65bc6e"],["/archives/page/7/index.html","1b3694cfefbf7a661a4f9e327ed133cf"],["/archives/page/8/index.html","83d84fa5c167d20b77108961e2f4f554"],["/archives/page/9/index.html","fc675ccdeaf596204a71b7389e00bab9"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","3a6a35de9959bdcc434dfba72ad45d52"],["/categories/Ajax/index.html","ff761be40965bc31d69378f1c57f6dad"],["/categories/Ajax/page/2/index.html","5a31213ef92ffc4351b0db8af4bd85c9"],["/categories/FL/index.html","a7132bd2cf0af5f1d3312292b017c74f"],["/categories/HTTP/index.html","2cae8d2e006810efeb11d95384b1b122"],["/categories/Hexo/index.html","f69b3f391f13e57c34d87076665b5968"],["/categories/Hexo/标签外挂/index.html","6b05c6af2047f7254b963dd23596037b"],["/categories/Hexo常用命令/index.html","dbc32b96006b1471ac94c7b7305696d7"],["/categories/JSON/index.html","e9f41ce4feae50a93ee0e6f6a2d614a4"],["/categories/MongoDB/index.html","56497b9927c7c270796527ddbca4b8e3"],["/categories/Nodejs/index.html","d7890bedc2f0b373726f2174d80a9983"],["/categories/Nodejs博客系统/index.html","4067cd957e890f768a8c0ffc688a4a99"],["/categories/index.html","452c47cd64d3a3cd14e83b2c2e64784f"],["/categories/promise/index.html","74acf09974f8869396bc840a0dd6f8db"],["/categories/日语/index.html","9aa32950846b37576da926ec7be77dfc"],["/categories/自学考试/index.html","c0eb977a5bd778b6ef476ba1516f89d5"],["/categories/自学考试/page/2/index.html","fcfa717ef9ce8400cb177d8a8e72f4b2"],["/categories/自学考试/中国近代史纲要/index.html","669564ad113241f8d3a732c4bb8d0303"],["/categories/自学考试/管理经济学/index.html","765178471db60a3c8561f4c5992668df"],["/categories/自学考试/考前突击/index.html","cb2165a00dad2b841e5baf35f74c6269"],["/categories/自学考试/考前突击/page/2/index.html","91f0d9706161e26e74fef9390e105163"],["/categories/自学考试/计算机网络原理/index.html","73216632978a00a284f356f1c82208dc"],["/categories/自学考试/运筹学/index.html","4317ee7cbf86814a4d1bc03bfd108aac"],["/categories/自学考试/马克思主义/index.html","ff6460e08c7a238aa24db5c0468266b6"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c821772a0b14a561b392eddb54970116"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","8089f9b0a07c2eb11dcc436494b9ad00"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","31c343293b41d55ee5c4eacff5f8c460"],["/page/3/index.html","8d7a183abfb3781785ec3fa38ff65b6d"],["/page/4/index.html","327570044f768ecbbb2e87f994f48768"],["/page/5/index.html","50aacd2589017e5d7a8f340fee604895"],["/page/6/index.html","20c90f6c444b65b4176118463ff85db2"],["/page/7/index.html","5706e49dc2a7a085106d57a5ace98791"],["/posts/10812f0/index.html","46f0e48e85d1ebff3218ca340aa042a8"],["/posts/126b275/index.html","0df569f23f650c02b8bccb77ea19852f"],["/posts/12d95a5e/index.html","a3c416fbf2733d8550f76e4dc77e9617"],["/posts/1367417b/index.html","cc16eb6e3f2b04fe026c3feb69f530c3"],["/posts/13886e3f/index.html","03533dd8ce73b8ce616fff72ee03c257"],["/posts/145193a5/index.html","8b1d78e5f430bd3090c7eb14308fd6fe"],["/posts/149dde25/index.html","279508818dd4c935012bf1e59922781f"],["/posts/152fa65b/index.html","4af7fd0a1ee5d62208dc0b84e242da5a"],["/posts/169e7dda/index.html","c4a5596964f9aad9ee364205effdfbd4"],["/posts/1875100e/index.html","6c56e03ebc063946fe562e4fd313c614"],["/posts/18eaef7d/index.html","703ba9e6f8e3a3eb78844caf11c96ca5"],["/posts/1a0bc7b7/index.html","5c59db5b31908f024257da93e611f32e"],["/posts/1a20a057/index.html","43b822cee81dd5a1a9a55985ed267e85"],["/posts/1a998be6/index.html","2370fd415c0d4e405a7948caafcbcd24"],["/posts/1bffbd20/index.html","0bc6d438b4036a846acb8052b66ea4cd"],["/posts/1c5a0485/index.html","0aa2ea63ba846b1d5556fb3d8bbfde10"],["/posts/1e638f78/index.html","d4453c88bafd3c7f80479595265a06f0"],["/posts/1fb53120/index.html","6a60e517e13b8282f303071372e0cb53"],["/posts/21466e86/index.html","1347e67a9d6f6f0f2fa32e16c84e798f"],["/posts/21abcf1a/index.html","029fce7428cb0e72f7790c5ff590b5ee"],["/posts/21c250b1/index.html","cae0b871f160eb12ce2bc3b2ee1644c3"],["/posts/2287cc/index.html","9b95069ae561bde7841003fd4c482efb"],["/posts/236bfea3/index.html","21076d9eea86ab8bebd1d99b97b30eac"],["/posts/24caea6b/index.html","cb9508b5080c2b3fb54558d2abeae452"],["/posts/25d45c3d/index.html","f0b7985242064f0ba59bb64882c17d2f"],["/posts/262baa9f/index.html","d25b0b64c8d3819ddfb5ed1e18668bbd"],["/posts/27cdc142/index.html","3dccff2df08b4dec27e26916de197dcb"],["/posts/2895c4bb/index.html","e3969a5e8120ef1a6b1fb5778fc6c732"],["/posts/28987ff3/index.html","be86a6eb6dd55e7a5c581de18be343cb"],["/posts/29f0df96/index.html","e630a328778fa04012d6696331dd54e6"],["/posts/2a1d2b6f/index.html","ac1005f25ff1f0a7b3b5c729876691e3"],["/posts/2a386047/index.html","39d3160c3cbc32a4de6469430fcfa11a"],["/posts/2b770baf/index.html","135eed5366248e4f611aa595ef586338"],["/posts/2cda4a8/index.html","46827287cbe82e873fdaae80e936af05"],["/posts/2d020832/index.html","fb861f3132d0df6df94865e989374fd8"],["/posts/2d6d3bd/index.html","1b38c61f3291001caca8581ad23edf7c"],["/posts/2e0c129d/index.html","726773a9483ac75bd91424c8b7bc0063"],["/posts/2e7563a0/index.html","34ce41fac7549944b5e77c868fa6e490"],["/posts/2e7b8d69/index.html","c2b366981b0d4332b2892f421790e434"],["/posts/2f28d14b/index.html","b3a0de55104cb3d8961770ead7a4a853"],["/posts/2f6e1383/index.html","6dd475fa6ac60569e3c4bb1edce98e59"],["/posts/30bfd1cf/index.html","fbd343d04e8fcf6f712a744640a4b397"],["/posts/33235106/index.html","9e821bd8c78f9d356916fd220211f233"],["/posts/344e951f/index.html","81ea3a5199a0282d7a6b8a19fc8e5827"],["/posts/35e2bcf6/index.html","7b031c7721561f4d18ad198df63c47c6"],["/posts/365e96c5/index.html","843b868a2b46164e4ad76263c3476cd8"],["/posts/36e331e3/index.html","d5fd7f3984ba7a6bc9f075928de7226f"],["/posts/372df90a/index.html","b780b0d1d3471a3f4f728fbe8ce69b65"],["/posts/37c547df/index.html","45e7961559ff28ad97d488b75e0e7f63"],["/posts/380dfa6c/index.html","b29db28a5dea2684fa7f4a9b378f0ae9"],["/posts/38a88481/index.html","becd75f88f8355bbb8f7bb019bd32d99"],["/posts/3914bfed/index.html","d4a3421230144d63de6be60bb3a9c811"],["/posts/3b56780c/index.html","d30cf4f8a9d811b24bae1b8223ea92c4"],["/posts/3e4bb613/index.html","672a6c928dcc0e0a718b06f73b923911"],["/posts/3f2e933/index.html","c9ef12052107e9a9d66c6f9d9c2caeb5"],["/posts/3f6e5f9e/index.html","30a824ed20a59f630d7c5635773eec6c"],["/posts/4349a589/index.html","d5835f0460a27c9630b16f6a918b0a8c"],["/posts/44246190/index.html","a16b495efb2895d43c63d4c008ff25ab"],["/posts/456550f/index.html","1836a4f55f1648c1b6179c33257bffff"],["/posts/470ac03d/index.html","828146810103b2723e06fc323359ef7b"],["/posts/49249ac9/index.html","03269022b0493d299a855aeb5a06ba62"],["/posts/49f2d2a/index.html","461c785e2e778bb25c3c2c8b1ac0de80"],["/posts/4e6d4eb4/index.html","053bf0f3c43d6f84b11cdb1b1aad34aa"],["/posts/50caf1d4/index.html","3557d3e8413ea6655371e5a1be814c4e"],["/posts/51139400/index.html","ee39c314c4ce8f622d94430f2f502fa9"],["/posts/512c9a09/index.html","f3a9cdc530226480d1804c51d2c03b5a"],["/posts/5205b330/index.html","007dcfc268241dbc05f706e7d4e4203a"],["/posts/52d36cab/index.html","47bc711aa46f8a9195526ba9450a4e9c"],["/posts/532a083a/index.html","49751b1733343b96e3a7e4a8d27cd53d"],["/posts/537d2c2a/index.html","2b3bfc67a0237a766aaa35526da6a3a2"],["/posts/54383ba0/index.html","7e05ba02e3ea6667868b854ef959761a"],["/posts/54667693/index.html","04e2ed0ac0b7f30692ad819c649ef9bd"],["/posts/5508212c/index.html","77b0fe08e2e15e1f9f0a7b864874ad7d"],["/posts/571564e5/index.html","e5a4b50ff4a1b4db7eda244daa380de8"],["/posts/57900fe5/index.html","20376378d3a26880161135b802927b32"],["/posts/589a214a/index.html","34bbff435b21fca2f5bdc9b8aed97969"],["/posts/599a2b19/index.html","36b355d006b42288d6a4a5f258e4bafc"],["/posts/59c05382/index.html","abfe529e1cc4cbe51f2ef5dbeb337f34"],["/posts/5a5294c8/index.html","fd120f44746fbe501e9ba4dce3f8abb4"],["/posts/5b8c69d5/index.html","b2e347ccf1a39cf792d35ebccdaf8a69"],["/posts/5d3da28e/index.html","9d37129bffddb44943d3bcdad881f770"],["/posts/5d3f50d1/index.html","e6941c480bde436786fd12a436513cac"],["/posts/5ef7ef00/index.html","a7a66361aa33c398282f879969ba01da"],["/posts/60b5dd06/index.html","32cd891f30a63a5397f9a5e56a8d5ff3"],["/posts/61477045/index.html","fd29b0b4335117a11c8fb4dacb0a5eff"],["/posts/69d79f93/index.html","c293e2a357c1b5e4282b94b249d602d7"],["/posts/6b2f046/index.html","7c7481e96b962b53f4edf7dfa73b4e90"],["/posts/6b4610c4/index.html","035dbddfe70f618dfa3e0ea57b8b2e58"],["/posts/6bbf03f0/index.html","b47610d8bd466d397b4a7d5512aa2e24"],["/posts/7000d139/index.html","4dd872e0571500bcbd754b644c641cd6"],["/posts/72f94093/index.html","71541039b4992adcb76ebeec4d588947"],["/posts/7380b71/index.html","ce083e7669d3aa109188d579771dbbb6"],["/posts/738eee3b/index.html","3731398762d8f28de7934dff6de40259"],["/posts/73981dbc/index.html","4bfed228f3fa964f0c54ea59de33aa2b"],["/posts/74d60fd9/index.html","a2b0559a95b03cc2ec267fbb220cbf02"],["/posts/74f5d9a5/index.html","b858594288ab50f67fff09fda7b79f21"],["/posts/750f2ce3/index.html","bac099020116f91634496b5a2a7773aa"],["/posts/75ceb627/index.html","8f870efb9fbbd1d77c34af0e967af81b"],["/posts/7725b75a/index.html","b4ff9b9c2e9f7b9cc71ed4b1a7a8c118"],["/posts/79ef335/index.html","decb2b4bf259b51f775d532e749e6867"],["/posts/7bbd3149/index.html","d302898fc7424d9b4edf49d8f9eefdbe"],["/posts/7c20e8d5/index.html","88c991ab9d78a108550dc8fafa63f74e"],["/posts/7d3ea75e/index.html","128bd6e729a197131148e7d48745fe28"],["/posts/7d43958e/index.html","02cbbd7230754a6bf34db250587daad6"],["/posts/807ac7f2/index.html","3df86459ff3e903df25dec1d1ae1153b"],["/posts/81738fa0/index.html","e975b6520afd6b7624362c2a7fe45ba2"],["/posts/817c41b4/index.html","ac837ce93578af3d92a279d2d661a6f5"],["/posts/84ee8e34/index.html","af473500bde57e8f4df5207b86121ba9"],["/posts/8837602f/index.html","8ca9ab61497249c4681a8a76d8566802"],["/posts/89589a03/index.html","5d62d7a112c6912a45b8fe8ca7989f50"],["/posts/8bcef008/index.html","193956dc6caddee8ee814a4979342bef"],["/posts/8bf9abeb/index.html","7e0e1467cfa61242babc24e9e1e0d7d4"],["/posts/8e5f5686/index.html","c487c4dffa4b588fe94ba8b4f0885972"],["/posts/8fa6b8c7/index.html","8e4451ba06750c5a4f9825d3bed2b09c"],["/posts/9029a3de/index.html","8da618ed2fd9de7802e1bcc169438ddc"],["/posts/909d9a5d/index.html","d91c23e76a255252b472616a6d14a4df"],["/posts/91404b94/index.html","d326878dc59820cb3f4e17d1c4c35f0d"],["/posts/932e3747/index.html","53b79920b2b2097524a6f0818355cb74"],["/posts/95fc9e6e/index.html","60b25e44e65fef2e9512e95e6a5722f7"],["/posts/98e67280/index.html","805faf7456475520468a7b6f6d311865"],["/posts/9a4d13ef/index.html","d80920f2c65dcfaa1c37842e2d1e2231"],["/posts/9afbb889/index.html","6fd0a2d923480c30eb2fd5ab3e70d478"],["/posts/9be63ba/index.html","9c826cb3ad4f20090d6f8c1825c53224"],["/posts/9d967c90/index.html","bbd521ee98335a7825142bbef6d85b55"],["/posts/9eadcdf6/index.html","94485dbdbc67c552160bf95b3715fc64"],["/posts/9f97db8f/index.html","e9d7fafd2c462cdc660a92f81d401e12"],["/posts/9ffb4388/index.html","614491ee26e2305eebdecc51e1550730"],["/posts/a094d027/index.html","9e14de1d7ccfebb753d65b0ac7fcea02"],["/posts/a27042c6/index.html","61fe4513cfdda3dd1f92591e9c514625"],["/posts/a29cc732/index.html","63729421db14bc5ed953a0dc4cc6b61f"],["/posts/a44a518/index.html","4719b1aaeb4b743a8669c002ccdd3470"],["/posts/a4f2a748/index.html","82c2ccc417a68e2f76cc00e63121a43a"],["/posts/a7dc32c9/index.html","49f2a1ef5d6e5b1fe695d8f28a5e50a6"],["/posts/a7f753ec/index.html","f6a3c33664a839538edcab6e7fbb7903"],["/posts/ab176793/index.html","242bfa23f484c7544aaafca4692226e7"],["/posts/ab34095a/index.html","f3b81049abe3b0b0f181af2ca45d3785"],["/posts/ad47c4a5/index.html","fe58bc240cfa044a43e96b3ba3e758ab"],["/posts/ae8f7b74/index.html","7c53839448987d36a90100db66cb7595"],["/posts/af43816b/index.html","2064642bc76ef6670fb9f9012c481b64"],["/posts/af9e049c/index.html","762125f28dc3348fa3b0c6eb3838854f"],["/posts/b0f1a367/index.html","cbcc7e6ec7ad892079192adaf7df4ae0"],["/posts/b0f98e2c/index.html","e22115d3fc5235dda4b63b007c0d2852"],["/posts/b33131fd/index.html","84756c1a2f6a4800d65037507a027d41"],["/posts/b36eb520/index.html","c02e2f5cb6e3cad952068954e5b9c09b"],["/posts/b542fc02/index.html","e574dd7d3b29eba45d3d79be6512ba7b"],["/posts/b54eeeb4/index.html","75fccef091304ec5f31953d81fcdb58e"],["/posts/b84f3f3c/index.html","d30441b4bd2010feab06637c29cdedf2"],["/posts/b94fc207/index.html","dcd9a00d02c7102d5c92d6cff686c28b"],["/posts/b981a6b4/index.html","ef6e2b3f443b78347077270121d361d1"],["/posts/bcea326a/index.html","ae1231ebd6a47e1e3ffbeceac318e8b6"],["/posts/beb19e80/index.html","21aa75725b779dd0fe58dcf000801f50"],["/posts/bec490f8/index.html","8732cc021e480e1491deba4c4575bec9"],["/posts/bf7bde0e/index.html","a618be704c9c2e678fb1374b484cfd24"],["/posts/c03f17c9/index.html","cdd38310576897360620fe3cc8379ed2"],["/posts/c35bc572/index.html","7db6144bc85913fa78026ecd30bad018"],["/posts/c436016b/index.html","5b7e047bb7da09bf57d116b2bfee27e0"],["/posts/c4efc741/index.html","fe0f7ccc458080e857dcf143de35edc2"],["/posts/c5e8a08e/index.html","fa10352fd86df54c1b3a46dd9e602b0b"],["/posts/c7db1dc0/index.html","eeb95bdd2b2dfab423e3e5cedc38b7d2"],["/posts/c7febeba/index.html","f2b04f7969f841a9e40ac1b8adefc3f1"],["/posts/c9c3a06e/index.html","e58560f1ecdfddbca62d55f4eaa714d9"],["/posts/cc6d2cf2/index.html","a34ce0b206247038516870d6da632cbd"],["/posts/ce48f291/index.html","ba14960fda87afd677b1f1adb4e00c1b"],["/posts/cf480faa/index.html","fe3a65a77c648ce5e77043e44feb0d56"],["/posts/d090b4d/index.html","3b3e3ebc06cdb9e7c5907cd91c83a9e0"],["/posts/d1995044/index.html","fcada0138a4e28c0c73707933bf75e5f"],["/posts/d2d34977/index.html","c04c6317e75931fb549f2f25f0908bf3"],["/posts/d3647a92/index.html","9c8c863456ce1ea55cc0b12a5a51bf10"],["/posts/d3f6b818/index.html","b5cf3cb2d85cc09b94dc32dc876ad2a0"],["/posts/d465029c/index.html","b79b9267ee5cce80874fdb8c6eec0d29"],["/posts/d9884be2/index.html","64ec8d6bf181ca577039ca3605b7030c"],["/posts/da40f433/index.html","44ce35813424226e0e590d6f2d787f39"],["/posts/dae71d5f/index.html","23afced9f06f06e270fe3932319a79be"],["/posts/db9fbe47/index.html","076950a2a1d4060ad61710d876efb17b"],["/posts/dbba997d/index.html","0a56a1d54d0e4f22e741ff5b4bd3a8dc"],["/posts/dc94f8a1/index.html","6e96883cf470d67c20d76d99c3914a86"],["/posts/dfe9b67/index.html","4d2a203e0fa0677e0ca72ac69c6a9ff0"],["/posts/e0387d80/index.html","a7407b84fa759805a0bd95d90b2aa1ec"],["/posts/e356f7b3/index.html","bc4f2dccb6513589f2d23618077b4b0b"],["/posts/e3acb366/index.html","0425149cf8efe1f5ca6f57d6289bc250"],["/posts/e450354f/index.html","dbbb188ebd21e83413b152601bc7bfe6"],["/posts/e489223c/index.html","e5d4855b399b2954639e53d7fea17892"],["/posts/ea914c06/index.html","c1b6ff784a0a02ddced11b22f8b8f2d3"],["/posts/eaa8f31e/index.html","eedaa23fde45b761ecc1b07637bef3f9"],["/posts/eac19412/index.html","fc746c79b0eba0a897a4aeade85aa32b"],["/posts/edfc881f/index.html","35e791fb5c26a5809ba0775a9173e97e"],["/posts/eec0bbd1/index.html","b2cd85068cbb796aac71a1b59602bb78"],["/posts/ef22c7c2/index.html","76ef42a094cdeb2f8127da3324ae118a"],["/posts/ef271825/index.html","645a7d72949d605ed2644aa659ae4aa4"],["/posts/f209578c/index.html","e8b0c714981381342c599934a0054793"],["/posts/f3e9bea2/index.html","97cdb05c2ad3b579210adb86bcc2ca98"],["/posts/f67b7122/index.html","546da4b4962e90a0d9ee2f226aa5e721"],["/posts/f7abba28/index.html","63241948ae3c864111022b03a928b433"],["/posts/faffd764/index.html","67b23984a54561dac87e9a9019de2970"],["/posts/fb684fb0/index.html","3946380736ff5cbe0bad23d751a3da9f"],["/posts/fc57199f/index.html","74ba11dc0bf37b632e7074b04566788b"],["/posts/fc6e9a7d/index.html","cac91e4caa8f285e767000b90e039af5"],["/posts/fc7bc02a/index.html","3da5e37a1cac12bb0b04b02f177ece38"],["/posts/fd67c5cb/index.html","525a21b185e6302e9c6c68b029ef0fbc"],["/posts/fdde061e/index.html","033550b0b78a24bffa5a430aa33ad15a"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/FL/index.html","3c3d0511446ddb274307bbd82288263e"],["/tags/HTTP/index.html","614ebb9ea8833e015de694d7d121203d"],["/tags/Hexo/index.html","fc34d0e45bd2840aa856caba053342ba"],["/tags/Hexo常用命令/index.html","92b770a66fa6e3b0542fec8754f65ea4"],["/tags/Nodejs博客系统/index.html","9d4578105e63d1efaaf1ea21f463ba67"],["/tags/ajax/index.html","3df7e913d6b6d2695df0a728445a58d3"],["/tags/ajax/page/2/index.html","05c1e6ec5aa0bde5c9269b5e4f6a66e5"],["/tags/curl/index.html","cdd4d8e642ee98da0862312dfed8c137"],["/tags/index.html","d582f020e28efe3f9de775d59f5c655a"],["/tags/json/index.html","99a6921d751c2373a09ed407cb4a2c4e"],["/tags/mongodb/index.html","2d9ebe98e762141a75760f87e9aa4c05"],["/tags/nodejs/index.html","17364d2a36749aee35889566cd997683"],["/tags/promise/index.html","621547c6c147ee02331e7a5158d60015"],["/tags/中国近代史纲要/index.html","458542e3dbdf32c24d4895318e25214b"],["/tags/日语/index.html","0a71552067778de2f5eeea21ad18547f"],["/tags/标签外挂/index.html","73f8499d3ee4766de9f632fd26af70d8"],["/tags/目录索引/index.html","564f8a39c09e2c7c6853c77bcd52bcb3"],["/tags/管理经济学/index.html","8fb1aa075d1c1200c50be0780a165a1b"],["/tags/考前突击/index.html","95d15a6df53cce2bf950b4f8217ed044"],["/tags/考前突击/page/2/index.html","b5eb5e269be70d99c8bdf2a72ab59cc4"],["/tags/自考/index.html","6f5a39cb6a71d42d8bb3840082042eba"],["/tags/计算机网络原理/index.html","0c4a4cad680933636dea43f88d63d85c"],["/tags/运筹学/index.html","37be447119a537a4edf6530072772856"],["/tags/马克思主义/index.html","161f42319683e149ab03a51c836d2e63"]];
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




