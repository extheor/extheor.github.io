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

var precacheConfig = [["/404.html","b366c3908f058f0d53c6ad7db4e37079"],["/about/index.html","680838e595ac38915ff63b27ec490b5d"],["/aplayers/index.html","a0566ba07a540e28806f488a77c81c0a"],["/archives/2020/02/index.html","54c221922214eb7b52da7cac69609d6d"],["/archives/2020/02/page/2/index.html","e30ab4a1a315c6945cc1373e2c6caabc"],["/archives/2020/02/page/3/index.html","64dda2e4ff95b84444ee574eaca00f6c"],["/archives/2020/02/page/4/index.html","bbc35c9b9ede444e4cbb9cb237bef74d"],["/archives/2020/03/index.html","57bd4e3d6d6c98b3a972e2b717532e08"],["/archives/2020/03/page/2/index.html","cab8dfbe270623324ac63a65b31a6fd1"],["/archives/2020/03/page/3/index.html","177214ec0642a22693523bd8a318acea"],["/archives/2020/03/page/4/index.html","231e5815f4033e6fc56e18bc2a4ef063"],["/archives/2020/03/page/5/index.html","76a3a8a8e3bdf1d4ae639d4997349e14"],["/archives/2020/03/page/6/index.html","c5f7a891837462cc9929a05cc5851fa2"],["/archives/2020/03/page/7/index.html","5023a1a55998a75000f31c0265455f53"],["/archives/2020/03/page/8/index.html","d368d64f1aacd94de8cea8233dde9b34"],["/archives/2020/04/index.html","9fa03954bbf1093c91334a4cbd080653"],["/archives/2020/04/page/2/index.html","21a0abb2f2832481f8701199f4418e3d"],["/archives/2020/04/page/3/index.html","a4d5c0227eb030798eaaab8ff0d0e4d8"],["/archives/2020/04/page/4/index.html","2a70f98bf06a012731f152be44941d7e"],["/archives/2020/05/index.html","03f641de8102432198fce21d761fba58"],["/archives/2020/07/index.html","7f8c3032313dce37e76a71bc1011e7ab"],["/archives/2020/07/page/2/index.html","35eb6126a04c7038319c7cf59abd1d81"],["/archives/2020/08/index.html","84bdc6f0049d8819c83a5a1350fb986e"],["/archives/2020/08/page/2/index.html","19fc850bb4a5223d771dbedc62e4d34c"],["/archives/2020/09/index.html","69dec7bd7811954c3c29d55b32f58377"],["/archives/2020/09/page/2/index.html","be307e3df121f16367df20319cb9ddf1"],["/archives/2020/09/page/3/index.html","26609ee70bfc2c959d77c3a4adddbe7e"],["/archives/2020/10/index.html","50a55ad9b018b257ce9bebe893dd1298"],["/archives/2020/10/page/2/index.html","4bfde37d7190bb440852e72793614e33"],["/archives/2020/index.html","f9d94c5f2cbc454182edf3a127eda257"],["/archives/2020/page/10/index.html","c2adfb3ff98b4f8a3e325e6058d52b36"],["/archives/2020/page/11/index.html","17299b1bcf752e27dfffcd79f60aaa2c"],["/archives/2020/page/12/index.html","889dd6757ebd3f391c637e7157eff73e"],["/archives/2020/page/13/index.html","9d3fc47e3bd140b909fcac43be13249e"],["/archives/2020/page/14/index.html","cda745afdc4b9cb1713644a4e0bf9626"],["/archives/2020/page/15/index.html","8f80644bdadcc53d5a727a9314da901e"],["/archives/2020/page/16/index.html","0ad80296909c0bddc32686e1213db773"],["/archives/2020/page/17/index.html","6b9fbde15a5a3c2b9924247fb93190e5"],["/archives/2020/page/18/index.html","dac48bfd7518d464194c9db036f5cfe9"],["/archives/2020/page/19/index.html","1019ac2f2223ef1c14de714d4341b653"],["/archives/2020/page/2/index.html","8cad4b61d619430805c21d3a2bdad287"],["/archives/2020/page/20/index.html","c6d5019a4869a9356022dd88d178718d"],["/archives/2020/page/21/index.html","ddc99cbded3020cdd18cfecd28539e5d"],["/archives/2020/page/22/index.html","6c08aba94492d24e4843b8a2b942913a"],["/archives/2020/page/3/index.html","a37bc44d42263f81e3a9166bb867a20a"],["/archives/2020/page/4/index.html","6b2be35bfd45921fdd1d83ec0494c02f"],["/archives/2020/page/5/index.html","f58409fc9c74a00c5189dcdb1451274b"],["/archives/2020/page/6/index.html","be8cf873861ea4c0ef7c06ce1491fc0f"],["/archives/2020/page/7/index.html","bc18d41ce8edef14d51b4ba5eacc9965"],["/archives/2020/page/8/index.html","bcedcd7aa87a5f3c554f0c1d1e6d984a"],["/archives/2020/page/9/index.html","b9a18de8f2161503f3203f285fde9be9"],["/archives/index.html","4a845608c211fdfedba567108559dcfb"],["/archives/page/10/index.html","067d6de2495f5c680bf8786dd8deddf3"],["/archives/page/11/index.html","96aed8c6886ecee2fc986cda917cead7"],["/archives/page/12/index.html","26db296e02ef711b1353bfba285a6779"],["/archives/page/13/index.html","d4dc63992bd51f2ff1747639fb0e0d64"],["/archives/page/14/index.html","14e63787445463fa6affc6923bc0b3e3"],["/archives/page/15/index.html","8f64b0f90454f2a4086167a72becd998"],["/archives/page/16/index.html","a45fd80ee59e2e2f212f95d67044538a"],["/archives/page/17/index.html","5c225a7849d3e1c76c31fdd8fd6fdc8c"],["/archives/page/18/index.html","c7752058a8e45ff22fcb0169cdc37dc8"],["/archives/page/19/index.html","c02e6cc371166bd4a0671b6228e8abdf"],["/archives/page/2/index.html","1c9d76cb75972b72baae8347088f1de0"],["/archives/page/20/index.html","b27fc886c2401d7a9f169a6d30c8e844"],["/archives/page/21/index.html","2c7b71c0ed80cc1bfaf4b2769dcc820a"],["/archives/page/22/index.html","be326ffcbbb8dc1751ac057113923ae5"],["/archives/page/3/index.html","ae505d14cdb0fbc1217584f7db412b8c"],["/archives/page/4/index.html","d7273d06829105a8855c237a457f377c"],["/archives/page/5/index.html","cc92b58a0910f93bf3bc1507a8508e9b"],["/archives/page/6/index.html","b9b17572bf42e7767ce20fbf3e51d9fe"],["/archives/page/7/index.html","406aeed7d002a746ec6edac32bf5d7dd"],["/archives/page/8/index.html","d18618dcc0a00c9b525f208dbc50ce56"],["/archives/page/9/index.html","9eedbd7e4ee3b6ba76b89f0794e602b7"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","a3e2dadb9f35c5b943b191dc1dbe0e67"],["/categories/Ajax/index.html","cd14728bc6e7e861d9f623f39cad60f0"],["/categories/Ajax/page/2/index.html","60db0c27d7888d1286cb0753e290d98c"],["/categories/ES6/index.html","039c20629e19e17e4ecd93b40ddd3740"],["/categories/ES6/page/2/index.html","a0538670e631f49d945340d64cfcb731"],["/categories/FL/index.html","a9ddb64023b3ab0e26720beee9967f97"],["/categories/HTTP/index.html","a1a3d7e4e2fcbefa7391900db9d4d098"],["/categories/Hexo/index.html","e0da4d3665a3bc586d22e2bedf18b2d1"],["/categories/Hexo/标签外挂/index.html","865f9f511a8a9faa4a805b6d2b8da50a"],["/categories/Hexo常用命令/index.html","a1c09d8718f84fd83ad00e84a8ab2e86"],["/categories/JSON/index.html","11040b16be00585493aa6632d5ff9e1f"],["/categories/MongoDB/index.html","5fd3291c9ca66a330e077f0a89b026bf"],["/categories/Nodejs/index.html","032b1044cc974182c0e4a27f4039e89c"],["/categories/Nodejs博客实战/index.html","cce1bd9496dc88113791ae2ecb275e37"],["/categories/index.html","8ce4c7da9f93f6bcbea4916d757fe1f1"],["/categories/promise/index.html","f7d0569e5808cd2de3857a3b9c7eed41"],["/categories/日语/index.html","963ec0d2e262c63efde5937319c42044"],["/categories/自学考试/index.html","237eb248cef73a15bc2f12ee57955e2a"],["/categories/自学考试/page/2/index.html","f683c583b826907a575d2d6469627f73"],["/categories/自学考试/中国近代史纲要/index.html","1aef42de403c076a14de5f770e999654"],["/categories/自学考试/管理经济学/index.html","7f140bdfbe8268a43c4138f06ff319d3"],["/categories/自学考试/考前突击/index.html","c16c9e5bb27b5db6b7b9ccfc24ad9d15"],["/categories/自学考试/考前突击/page/2/index.html","9db3b2c9c5462defedfb947bc4cc9dde"],["/categories/自学考试/计算机网络原理/index.html","a218f54c24eb5693e82cbd425d52304f"],["/categories/自学考试/运筹学/index.html","c6b5fdd20ec938d317f4d48a990edc7b"],["/categories/自学考试/马克思主义/index.html","796aa9fbe9e94c6a75285ea4bc643746"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","bc28ce6f19aaf9ad724f89aa0580b4ca"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","5a929fecd802437c1d53e5c5206db00c"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","290fb549a1140fe081c8e0f96b076a43"],["/page/3/index.html","e5a24ec933b1c8060aae80509ec5b067"],["/page/4/index.html","afa9f5aab93545dee303c9e38258d03f"],["/page/5/index.html","24677fb5eba42f1aee8be288f720e4ad"],["/page/6/index.html","b188895b5c80124de56a20be1c789ab9"],["/page/7/index.html","417009db05e3cb72d22f0f5487f80d66"],["/page/8/index.html","288db9c2ed0083f126911f6a9dc75d50"],["/posts/10812f0/index.html","9d27d0627ee1329f90744a365fa764c6"],["/posts/126b275/index.html","04c3735df64fd20dfa31463735d41693"],["/posts/12d95a5e/index.html","35377a0512f9f6a157ec7be3867a183a"],["/posts/1367417b/index.html","88faf8d3882f121d925a0f0918bdd883"],["/posts/13886e3f/index.html","7980042c57a359485d40ff60c0c1ae53"],["/posts/145193a5/index.html","ae012a9608eda733a8a9c1827d344522"],["/posts/149dde25/index.html","9f1db84ca691839648b3018b2c417968"],["/posts/152fa65b/index.html","0ceaff84d491a225331a1c75fd313a7f"],["/posts/169e7dda/index.html","689d17a7bb0a7f8faa566e9de5833670"],["/posts/1875100e/index.html","9d86e572a41ebd2d8e99d13df69de584"],["/posts/18eaef7d/index.html","d6ccfb747b4f1bcf12e5b95f67a4720b"],["/posts/1a0bc7b7/index.html","a550ff3283aa486cd7a911a8600cbe80"],["/posts/1a20a057/index.html","dd135e874df3e371dd844d09f38c48ac"],["/posts/1a998be6/index.html","926c383a467469635a5b7daf40f8deeb"],["/posts/1bffbd20/index.html","4fca843c709eabc34b2fd939c758c228"],["/posts/1c5a0485/index.html","be3e0d35fe346c3c2e16d7c3a1cdeb42"],["/posts/1e638f78/index.html","9ec28ddbf704874066e6f9a2dc1c6018"],["/posts/1e967920/index.html","1560445d0797e33aeca80265d6b5ab73"],["/posts/1fb53120/index.html","36f2288eaa6f4d6c3c3fe1e12cb635b2"],["/posts/21466e86/index.html","1890f0ad83abbeed235bc38c16782d2f"],["/posts/21abcf1a/index.html","42f251ae7d9aa0d93bca0b830b18f1a0"],["/posts/21c250b1/index.html","1a4f6b5a81b09d02d3cf3987c42ac537"],["/posts/2287cc/index.html","fd1d226de772454b9565a2d5d22a5351"],["/posts/236bfea3/index.html","25103680f22d21bc17c65dfd3235814e"],["/posts/24caea6b/index.html","b1d80a95bdc7e6c0ee51bb190c5f26dc"],["/posts/25d45c3d/index.html","add6d113db4a73b3e451ada02a92a1a0"],["/posts/262baa9f/index.html","5a9e2333b2fa86dc8de0e743b3178abb"],["/posts/26f82f65/index.html","f9af50edde35a7739098867ab525f6f8"],["/posts/27cdc142/index.html","0fa66db8324ae6c93abc075b970b3f75"],["/posts/2895c4bb/index.html","a663cd8df80b2023975e8886f6dda22b"],["/posts/28987ff3/index.html","d1c51b884c505da4113323087572bd76"],["/posts/298cfeed/index.html","941774cf6d9a8803d55b85090ff2664f"],["/posts/29f0df96/index.html","11217f3cced8273c904d09f80583c582"],["/posts/2a1d2b6f/index.html","b85e581135a457acb288179b71ede1cf"],["/posts/2a386047/index.html","0bd2a2a7fd6315880d4b5aa3bca8a1e7"],["/posts/2b2f44ba/index.html","6c24d0dfde212fa2114ef97817801787"],["/posts/2b770baf/index.html","da563fbafda17c483680855c7c22f918"],["/posts/2cda4a8/index.html","4b88e557c3f3a79e742f85155e1f4ba4"],["/posts/2d020832/index.html","09f740ee0acca2468425a75306bca313"],["/posts/2d6d3bd/index.html","1a5fc3e8492eaaa78bf25d788cf2cb56"],["/posts/2e0c129d/index.html","099dde26fc338d7adec5f6d7116d58c9"],["/posts/2e7563a0/index.html","b03e5d3a487b455cc717e3e863d693d7"],["/posts/2e7b8d69/index.html","ccd96d285da750040be566c02b59745b"],["/posts/2f28d14b/index.html","2b561a8b08b46b6ee1336db771e13220"],["/posts/2f6e1383/index.html","9cf54ef934a3505f35b79ecc131fd263"],["/posts/30bfd1cf/index.html","4e007bb91663ac8042ce2d108e59b114"],["/posts/33235106/index.html","aa17efceaa81478e36e6b149a42e39cd"],["/posts/344e951f/index.html","dac8a9097474b4ae026cf21f6b3a8bb9"],["/posts/35e2bcf6/index.html","018e285c4d3aff0b2daad8860e08b320"],["/posts/365e96c5/index.html","319fdd3726170f18981a329fd807c8ac"],["/posts/36e331e3/index.html","c1d013a34adb032163ac85e5025c8a5c"],["/posts/372df90a/index.html","633222d4283107260da3317b0b818e18"],["/posts/37c547df/index.html","c90d8bf9b75baf1d62fcfdfa09bc36d1"],["/posts/380dfa6c/index.html","f4c942f36fcd70baa74588cad0648032"],["/posts/3859c98f/index.html","4a3fdeef590a17ebc1765f4b336d0bc7"],["/posts/38a88481/index.html","f123140fa4f7f1a841c134b5b0b9b21d"],["/posts/3914bfed/index.html","4747722e340504fe5a536f37971e5437"],["/posts/3b56780c/index.html","a94971dc81a8e9d08aa035a6ef6cf00e"],["/posts/3d1ef1fa/index.html","931775a9b28bdb8e0cdc6b4b7ef3dfa6"],["/posts/3e4bb613/index.html","6e05fd3de21d286dbdd369190ea1a8a3"],["/posts/3f2e933/index.html","226b529a689f148db20577125786252f"],["/posts/3f6e5f9e/index.html","bf5c069eafaf09ac99406821bc39f8f1"],["/posts/4349a589/index.html","06f8395150d8f669ee44cd6530b52028"],["/posts/44246190/index.html","675e8da4ef15df6a8850e2c00c9b7625"],["/posts/456550f/index.html","bbdfaf2307026480285733e8bcc97cd0"],["/posts/470ac03d/index.html","e676b543868a51e307eb895a0524e193"],["/posts/470d45ef/index.html","4da9fa5cc42a3d5222806902a65615a1"],["/posts/49249ac9/index.html","7d167267575e696697be700ad00f4d2f"],["/posts/49f2d2a/index.html","26420adcd95e3d6b42cdb5c7ace4b358"],["/posts/4e6d4eb4/index.html","e7cfd27544b6cf573d3b6b82397e645f"],["/posts/4f346c5/index.html","5e2d7fd5e77e67cd20df2ce982e68d23"],["/posts/50caf1d4/index.html","5cb67eb9f9dc1b159af377860c818823"],["/posts/51139400/index.html","d14959e9af33f9e6546aa75528bc6432"],["/posts/512c9a09/index.html","e834f369a23ac4bb554fb875ce7cd57d"],["/posts/5205b330/index.html","decc25ffb16bcc1140d5f6beac05a872"],["/posts/52d36cab/index.html","2e8890a3901e0607aeb58072b37b1eeb"],["/posts/532a083a/index.html","cfc5c794afb1d745dfa2219d816881d5"],["/posts/537d2c2a/index.html","474cd58524de5859668bc57f3b09c205"],["/posts/54383ba0/index.html","9004ec80f11fb5646b51a7aef34ae76d"],["/posts/54667693/index.html","9cefca67fe330f673ca5ab3b984ccc87"],["/posts/5508212c/index.html","dea785854c9a3d8d5c01ea7bbda3a679"],["/posts/571564e5/index.html","36c7372f9e1f35bde52679ad5a00a532"],["/posts/57900fe5/index.html","9a5a65dd2348b2981b765c8f4a874ba2"],["/posts/589a214a/index.html","9015af642d309b7d9ef25f312cf4139c"],["/posts/599a2b19/index.html","433053c291b4ef27584bd2238d2f232e"],["/posts/59c05382/index.html","a4612df342565fd4e613bc407657a796"],["/posts/5a5294c8/index.html","658961e3ee72049f2649044e15cb59da"],["/posts/5d3da28e/index.html","7c66f43c91f33c9434af133122c8355b"],["/posts/5d3f50d1/index.html","06fe50a974a72f548c3923d170d17a04"],["/posts/5ef7ef00/index.html","51ff681749f6c6757e453f793b5a567e"],["/posts/5f1fa8df/index.html","d10f1ddd9e797079c6a0c4e4400619bd"],["/posts/60b5dd06/index.html","84700ce999af4b2ef434479573784465"],["/posts/61477045/index.html","01d335c21a01d1702496cd53b7d0df1f"],["/posts/69d79f93/index.html","7c7bdd35661f43851cd53c0dbb89b8f9"],["/posts/6b2f046/index.html","b7e4de3b75ebd79365e8236488c2bbe9"],["/posts/6b4610c4/index.html","9f715110514a9cba151c814f01e27f69"],["/posts/6bbf03f0/index.html","30b67fd053cc35f438a6fb951ec16dd0"],["/posts/7000d139/index.html","3105e8563e6ef81e22359c8bbbb15149"],["/posts/72f94093/index.html","bbd57326c43aafa21e6a9c239bd4aa37"],["/posts/7380b71/index.html","a1136e2d8d240f06642a36a82f1c0934"],["/posts/738eee3b/index.html","300810a2103b87ff8f1caf948e9636ed"],["/posts/73981dbc/index.html","a1021a0a5f6c3abefae6cea125cdb4e7"],["/posts/74d60fd9/index.html","d15416e1a62ced116bd9cad8ba4a6f84"],["/posts/74f5d9a5/index.html","e998ffcdc55dfff7ec09fe1d7db2d9b5"],["/posts/750f2ce3/index.html","5ca41ac5835c98e07cc9bd34ac771b01"],["/posts/75ceb627/index.html","7841f70414863530c709ae3a7a094d5d"],["/posts/7725b75a/index.html","5069ccbcb9c061401872bf032db05df8"],["/posts/79ef335/index.html","7a72e60cfb5710aae69220aacfff37b1"],["/posts/7bbd3149/index.html","04945db2bfbf8881f5805eb51fdc6083"],["/posts/7c20e8d5/index.html","652956e459e038d385ed5b8a8d226a92"],["/posts/7d3ea75e/index.html","4096297fd3d68f3b7fd4e2a87c9bac24"],["/posts/7d43958e/index.html","cb7f737da7ea37e662b1e1bc726607a7"],["/posts/807ac7f2/index.html","103c1f17faea66249b91fe16cd7d9b3d"],["/posts/81738fa0/index.html","3155795f3269e63b1d781b05fee29603"],["/posts/817c41b4/index.html","034f27929e2abcefe306bc7675e5b1b6"],["/posts/84ee8e34/index.html","2eb7ae179c2d0aa36827adca153a308c"],["/posts/8837602f/index.html","5d1129055e5f430fae15f3f0eb40bcdf"],["/posts/89589a03/index.html","e0df5357a7c52186229e59cb88c5134b"],["/posts/8bcef008/index.html","d63e3a04a7b54b90e9611c5278d16765"],["/posts/8bf9abeb/index.html","7306df7f33b5cfae3fad6a6b626b2b71"],["/posts/8e5f5686/index.html","fcaa049e92f51c2dacd8caa49b6c56c9"],["/posts/8fa6b8c7/index.html","18c3b3263acd3cca83f7cdf8bfb3a421"],["/posts/9029a3de/index.html","8ac5f418aa10ce011d08ecdcee06f89d"],["/posts/909d9a5d/index.html","d0b888f44d4374ec2330fa4111c6393e"],["/posts/91404b94/index.html","aa1d85728b01301395d8ef0d4c1419cd"],["/posts/932e3747/index.html","16a4325cb5aaf3ddb3e497f5acc1d29b"],["/posts/95fc9e6e/index.html","d0bacbfa7bd2fcdfcb1dca26ccf2e171"],["/posts/98e67280/index.html","8b3143969505a55afaff8b86764b9139"],["/posts/9a4d13ef/index.html","b9c63608983dc4ecd5023641c9c89a5d"],["/posts/9afbb889/index.html","2f34ac6b34db45ce54b7729457fb3e71"],["/posts/9be63ba/index.html","32cb21b440e8e05634ad79b53ed18eba"],["/posts/9d967c90/index.html","07f27e985b7f6a40c539ba1ade5cd185"],["/posts/9eadcdf6/index.html","963533359cfdfd8d1a857f64e052bd92"],["/posts/9efd76a3/index.html","f9c1270c60941611d22b600ab0ff0d97"],["/posts/9f97db8f/index.html","2d67a6a1397328696bc7953e39283e42"],["/posts/9ffb4388/index.html","1ab7ec426b376838ba9c462cd6f51456"],["/posts/a094d027/index.html","7276e37219c41a2961a6095a050e31db"],["/posts/a27042c6/index.html","e23f8d964a3dfe67cc60402d03e99ec4"],["/posts/a29cc732/index.html","1f35055a50e60e30fb1f8dec5e86d756"],["/posts/a44a518/index.html","4e4def27d293b98176523001d1862e3a"],["/posts/a4f2a748/index.html","f5ef9960178c427d324222893b5c4b86"],["/posts/a7dc32c9/index.html","4f1f45e9287fd924016cf3d75f489750"],["/posts/a7f753ec/index.html","c0a8aaf76cc6f93d658ab8538ba77287"],["/posts/a9168bc5/index.html","4ddda97a8cb6f89332cd97467bdb520d"],["/posts/ab176793/index.html","4100a9ceaaeef2be3cecfaaf0c33fbee"],["/posts/ab34095a/index.html","18322021910fe8a877509fdbb5bbb863"],["/posts/ad47c4a5/index.html","ea82632ae3f9b130848457d61f4ce480"],["/posts/ae8f7b74/index.html","6c3a4077fc1bf90e3782ea3429aaa30c"],["/posts/af43816b/index.html","6252e9c1e689227b442f4bff0da524c6"],["/posts/af9e049c/index.html","9ffa3919da6b5b2d556157b95b9bf703"],["/posts/b0f1a367/index.html","dd749a4fa8190fa855932d8253b2610c"],["/posts/b0f98e2c/index.html","3fb6ac7d868ef7b24a5fabe8914deca7"],["/posts/b33131fd/index.html","c60bd9318f6a8133e554a5d0edf6b2a8"],["/posts/b36eb520/index.html","747ad71f735acf605c719020e0cbee25"],["/posts/b542fc02/index.html","252cc93927c3a74c79c8c32a06461143"],["/posts/b54eeeb4/index.html","407e42dda78eef5ac1fddcda3368101d"],["/posts/b84f3f3c/index.html","458c1d0a3fcfd41102038e3b85e9d405"],["/posts/b94fc207/index.html","a1e970aa795b9a76b2ea5fe6ece3f4e4"],["/posts/b981a6b4/index.html","d42d949d7f71496eb6ceb898d1a8772d"],["/posts/bcea326a/index.html","d9d3702a042af1d2f2e6601497a579d8"],["/posts/beb19e80/index.html","30d94d41caba4ca5deb1e3f2207dafc0"],["/posts/bec490f8/index.html","5502dc3f058d83af48dc6a1672d90db6"],["/posts/bf7bde0e/index.html","8b3357234074d3614503ddb32a3d15bb"],["/posts/c03f17c9/index.html","49c169eba96c88c770a16933f24d8bf3"],["/posts/c35bc572/index.html","a227c75d0447dcba5d88555884d5d693"],["/posts/c436016b/index.html","dbfdd53fe4a395fdb0243e20b2252b9d"],["/posts/c4efc741/index.html","4209061a1b3459da8a8ef4d8f8878df0"],["/posts/c5e8a08e/index.html","1f68bc91bfea2fbb29e5cfe721fa7f14"],["/posts/c7db1dc0/index.html","4c9524a0ccde61f23112f56b6d51ad6f"],["/posts/c7febeba/index.html","002fd5bf71a53a56080889bd24899bdd"],["/posts/c9c3a06e/index.html","001ff526f7035f84182b254dffb79588"],["/posts/cc6d2cf2/index.html","c11b3c9170db3115a7dd1d85c58eed3b"],["/posts/ce48f291/index.html","ab720a0910ba9c321847e1b09b0f11f0"],["/posts/cf480faa/index.html","b2d1964a2464bd79bd12a4df6f160cbc"],["/posts/d090b4d/index.html","ab4583873e0d9f540a95247dfd2221ca"],["/posts/d1995044/index.html","a383a08a81df2185ee89535abd321444"],["/posts/d2d34977/index.html","b8691eff230230cc24d2885bc8c649e6"],["/posts/d3647a92/index.html","01d5c20ba565d187a30035d408b82321"],["/posts/d3f6b818/index.html","c7df9a7ce662d41277863caa24c60d4c"],["/posts/d465029c/index.html","91cca787ce38c1b540bce68330c55207"],["/posts/d9884be2/index.html","20de8b13fbac4b601a69cd9a21ff40ac"],["/posts/da40f433/index.html","ea1a1e9b7710332c4c4b3fcd00efc933"],["/posts/dae71d5f/index.html","ca469cfc6aaae5f2baaed14f5fdabd39"],["/posts/db9fbe47/index.html","9a62d161428a8a085726888b5233af74"],["/posts/dbba997d/index.html","fbd77e51ba4c568d376b9ff25a16a75f"],["/posts/dc94f8a1/index.html","f6194b469c0a058314ea0c20f2786839"],["/posts/dfe9b67/index.html","02581e120443194db9c4d6b0268e7dff"],["/posts/e0387d80/index.html","ecdaeadb1d5f0a2637feb3dd3dc29912"],["/posts/e356f7b3/index.html","89fdda1304694d2605721b019e667d3c"],["/posts/e3acb366/index.html","607f7ca36abb2b4cc0fec434c2147aaa"],["/posts/e450354f/index.html","464f1f60f4835b64b1cf68e4b26520b0"],["/posts/e489223c/index.html","c36f9dc833518eb952eaa65976aae871"],["/posts/e9a8ddd1/index.html","c6362b54417983300ef2cbed2bef8c5c"],["/posts/ea914c06/index.html","ab8a579875739e2f41b356c367de5e9a"],["/posts/eaa8f31e/index.html","44195a4e9ed98c789b20c7022f70a00d"],["/posts/eac19412/index.html","ca8a110af300f59363d68bb0ede95d7e"],["/posts/edfc881f/index.html","d5ee598fb4730b71a183bacda72c8793"],["/posts/eec0bbd1/index.html","a3bc030dea25e0370e486eae92bff0ba"],["/posts/ef22c7c2/index.html","5526286936f4c868839e2114fb25d9cf"],["/posts/ef271825/index.html","8f70a23d7778893ca3e6b549b9bd5319"],["/posts/f209578c/index.html","7aee90b0fe8356797bdddbcc6101d0a2"],["/posts/f3e9bea2/index.html","1dad68adc51e8a1b6f924730db96bb69"],["/posts/f67b7122/index.html","e268bd410d36f7d56917d7a02c699d2e"],["/posts/f7abba28/index.html","b464853b34161e4e1c75e5600fdc9529"],["/posts/faffd764/index.html","3caea821559c1c684480b5f4ff7b7b9a"],["/posts/fb684fb0/index.html","df9a0529df086312c0aeade003468afa"],["/posts/fc57199f/index.html","5ac3e2df03e9853294de39be6f36c189"],["/posts/fc6e9a7d/index.html","e28e90a571395896864e83bbb4ce2ca8"],["/posts/fc7bc02a/index.html","5d16c17ac209cc413fa9fb0e8e27d68e"],["/posts/fd67c5cb/index.html","bfd2573a372fe8738371efd93ac323a8"],["/posts/fdde061e/index.html","a0a7e49276dc1d67fac38e9f7f5aaa40"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","637eda080eda1d84c01ce99144ff8f4c"],["/tags/ES6/page/2/index.html","898a889c067cfe1f13528db127375099"],["/tags/FL/index.html","800c3305c0f16b7818e718b88a728e30"],["/tags/HTTP/index.html","354ee1a0b5a2338c213f6fbb209a6497"],["/tags/Hexo/index.html","a7ebc73962b083ecb51a8f4f7930ea52"],["/tags/Hexo常用命令/index.html","4ff8b469ac8a87bd8d0d89c7bf74dc9a"],["/tags/Nodejs博客实战/index.html","b73214917e091d29ca0650aa167dbebe"],["/tags/ajax/index.html","2944ae1e4da6c01b0d4d11332cdb6a17"],["/tags/ajax/page/2/index.html","9d7704373f2199962d79d9fcd7d6d8a3"],["/tags/curl/index.html","b76d64e646cc12ccc25db9e0d6f1b82c"],["/tags/index.html","f77f81b44f7ce1069229c092dc97f069"],["/tags/json/index.html","48e7409a76657e913c81809fb67af627"],["/tags/mongodb/index.html","0933111e8237a7b1c47df2a8a715405f"],["/tags/nodejs/index.html","f741d75470800c33684d2d3bfe00f164"],["/tags/promise/index.html","4fce47c26e459c0a4339c83ee37cde36"],["/tags/中国近代史纲要/index.html","38532f02b3d2260d24533cb14804524b"],["/tags/日语/index.html","ba90591ff76d2a32e1af6c2c3fcb1ffe"],["/tags/标签外挂/index.html","25aba00dfe2452605afeaf764c210a44"],["/tags/目录索引/index.html","cf0594ff1738a1d6f911cbbc6c3b35e5"],["/tags/管理经济学/index.html","1e477a8a06e66ef3d95e319bb19d390d"],["/tags/考前突击/index.html","003b0060d3f306687e2f856da20d9ad5"],["/tags/考前突击/page/2/index.html","9f4e93f67eb968f6fa5861d521d59a72"],["/tags/自考/index.html","3cf731c49971f9c0b5b6426a207f86c9"],["/tags/计算机网络原理/index.html","4effb1cdbe9d27ec3fdd6d910daae6a0"],["/tags/运筹学/index.html","cfafc7a3a05b770ae32cc116ae7aab01"],["/tags/马克思主义/index.html","02f8e3034fb1d5f12f6174aed190df2d"]];
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




