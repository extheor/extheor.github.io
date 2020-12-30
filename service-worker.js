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

var precacheConfig = [["/404.html","e846e09f40873db8bd9a0a6ad6c811ec"],["/about/index.html","f0338aad61d7f970ce3186180dc2f8a5"],["/aplayers/index.html","36d6cd8cbcbbb48e9e0b91372c44f944"],["/archives/2020/02/index.html","60355b586bfed258592f67396ce46030"],["/archives/2020/02/page/2/index.html","c3963ed7844ad9569af370deecac3a34"],["/archives/2020/02/page/3/index.html","b8192940c783c5458b3663234fe6825e"],["/archives/2020/02/page/4/index.html","060b1465bc589f1665b8cca5753637b8"],["/archives/2020/03/index.html","eba52e6a1c3cb32af5b6cc7675f790f2"],["/archives/2020/03/page/2/index.html","6f1ffb3ed7c5fc4d46b46a8cd54ee836"],["/archives/2020/03/page/3/index.html","c8cf9711a035ead4d7e5215548794141"],["/archives/2020/03/page/4/index.html","fbca01d6f7e690c9e1e2c9b979c90a5c"],["/archives/2020/03/page/5/index.html","5ac899676484ad09c8856aa87b04ec4a"],["/archives/2020/03/page/6/index.html","19991734e6431212a7957100c8094dd1"],["/archives/2020/03/page/7/index.html","a00db64392cb7c069b850b0f39c8759a"],["/archives/2020/03/page/8/index.html","e7a2214b54929dbe961488cc89fb3592"],["/archives/2020/04/index.html","a7b81db7767dcf647d80fa8d5e46d509"],["/archives/2020/04/page/2/index.html","ac225d8eb1c81f06042c567b3efbde36"],["/archives/2020/04/page/3/index.html","cef8ffb5854466ae57729b8691ad75e4"],["/archives/2020/04/page/4/index.html","bc392636905dcf31e046d907e673d6db"],["/archives/2020/05/index.html","bdec004bbb45490e48f2ce0f7a1a4bc5"],["/archives/2020/07/index.html","f2ffb20bb862ccef6a50aa28ee4729bd"],["/archives/2020/07/page/2/index.html","0893803bcc326a0a02328f4d289025dc"],["/archives/2020/08/index.html","c2264b444c8f5b6a5a956ae5419d729d"],["/archives/2020/08/page/2/index.html","02b24c97d9c6538435c5f230fc04d745"],["/archives/2020/09/index.html","88dea65e01e2c4279854842194503ede"],["/archives/2020/09/page/2/index.html","b6217d033ad8c4e3977aa0b1604e4415"],["/archives/2020/09/page/3/index.html","290240a3c390b811ed63c307c7a7ffcb"],["/archives/2020/10/index.html","709218a86ef8e88598939996d21f3c11"],["/archives/2020/10/page/2/index.html","5ebb172ab53b9ef07ba9f71e29255dd7"],["/archives/2020/11/index.html","79ba6e2c277ed52e0e2248cb69da6ef3"],["/archives/2020/11/page/2/index.html","52d50fbd86418ea3da9f9ff74152bfbf"],["/archives/2020/11/page/3/index.html","2989e4fb8dea00252828d6e3b9a3cb3e"],["/archives/2020/index.html","935261683ac0a5d69d4e4c3bd87a6625"],["/archives/2020/page/10/index.html","2db9402d45043983a12f2c1e11deaef1"],["/archives/2020/page/11/index.html","0a0c50a75d0d3c3c0084b4a9674b037a"],["/archives/2020/page/12/index.html","05071da0c6dcc908c4ccb7c2308577c7"],["/archives/2020/page/13/index.html","a035e882006b9dcecdcbcfd7b227637b"],["/archives/2020/page/14/index.html","64536c03f32a556293c6e45a6ee87846"],["/archives/2020/page/15/index.html","166169b6fd06bf8b320af3cc8b520edc"],["/archives/2020/page/16/index.html","d24185f5df0331197dac890bc6c1fa88"],["/archives/2020/page/17/index.html","9c649967fc285173ca0734387400561c"],["/archives/2020/page/18/index.html","07756106ec9ac886bc69ffb9dddb94a2"],["/archives/2020/page/19/index.html","e29e178be59b7072ad7e40a031163f66"],["/archives/2020/page/2/index.html","a2fc7063e4d19266735f52eba101027c"],["/archives/2020/page/20/index.html","c62c7f6c7fb90141f6c53544f58d6459"],["/archives/2020/page/21/index.html","f9e021b5cc336f44d1582a3644c02b26"],["/archives/2020/page/22/index.html","c8a27085486eeb23f78622da4533c831"],["/archives/2020/page/23/index.html","5c9b748faae0bff4cce79a67f432c59a"],["/archives/2020/page/24/index.html","011333d6bdc920488b88f84f3094f63b"],["/archives/2020/page/25/index.html","a5865b10950d7ad357ff9700edccdc9b"],["/archives/2020/page/3/index.html","72998da5ce69d48e82c15df2a5c006db"],["/archives/2020/page/4/index.html","77c4ce9bc4324dca204ade6e69d42406"],["/archives/2020/page/5/index.html","3ce6fe125bea06a1da0f1b67b639f5c2"],["/archives/2020/page/6/index.html","ab752f5e1fa3217fb71f7c8394da5194"],["/archives/2020/page/7/index.html","ac49531750efcb2f1a09c720c8d8efd9"],["/archives/2020/page/8/index.html","77d88131b20ccf2002c5d1ffcf5f6180"],["/archives/2020/page/9/index.html","93a2d839d45764ed7670b912545de9f3"],["/archives/index.html","4deee1b81fc6ace7c9e5a65ce0f22107"],["/archives/page/10/index.html","52380192c9277fee0fd7892400f4dcdc"],["/archives/page/11/index.html","3c7ce6bef0913b642cf380f9a49d2b06"],["/archives/page/12/index.html","dfb3d8679e667c33ab718ec3f0958a0d"],["/archives/page/13/index.html","b674903a015a196bde6d4289e277447e"],["/archives/page/14/index.html","eb2c79fe4b44c0b772a90e5c2494db2b"],["/archives/page/15/index.html","f1f31af3996e06f1292598dd461f97a6"],["/archives/page/16/index.html","80bc3d796fbe64b39583685d433723d9"],["/archives/page/17/index.html","3a986447f5c47246553d7c28e073c535"],["/archives/page/18/index.html","e29c2437756a31e9c3d50003be2d2523"],["/archives/page/19/index.html","3f5a2cfd99e7d0b825f74006a9aeb9b9"],["/archives/page/2/index.html","615176bfac92076ca3b203b2aefe9dac"],["/archives/page/20/index.html","5c5c321836398d2fed71bbf61039e93d"],["/archives/page/21/index.html","3d143dfd713074859f7d04152ecfe8c6"],["/archives/page/22/index.html","dba2f6aced54e6c6858fed60828fd064"],["/archives/page/23/index.html","0a4845ab5b55c8f6a0e8f8c4fff15988"],["/archives/page/24/index.html","5cf6fc5d72c273e2e52177548151d41a"],["/archives/page/25/index.html","48b0a98a5e4663831c41bf72f39b6520"],["/archives/page/3/index.html","6b561c9dfa97d25531fbf3a6d7755944"],["/archives/page/4/index.html","df71dde4ecd57c1ffa88792adcbff73a"],["/archives/page/5/index.html","1edee1be8f87af43fb21cd03fd07a5e3"],["/archives/page/6/index.html","5c66e64fb43d3491e1a6c19f611907e9"],["/archives/page/7/index.html","d3f45dc7ef468689753f15d01904b127"],["/archives/page/8/index.html","b5b5e5e59505c690739a1f1fc1012c2e"],["/archives/page/9/index.html","fcae379f711b9a005f231c77c29a81a2"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","9078fe745072437a2107e66076800126"],["/categories/Ajax/index.html","3e0ce07248463492e17c0875e2c1a074"],["/categories/Ajax/page/2/index.html","db0c60ab0cd76321feeb512c3625df31"],["/categories/ES6/index.html","48e2d91449543d07fc11b741213b428d"],["/categories/ES6/page/2/index.html","5d551ce31137bc8b9673f8e12c8a3409"],["/categories/FL/index.html","47338f840ec96cd4bb4f13ab7d1b8a5b"],["/categories/HTTP/index.html","5fc3d909500a490189732fc32073fa12"],["/categories/Hexo/index.html","993680389d2e937c5b48d1c72a2bcc7e"],["/categories/Hexo/标签外挂/index.html","deef9d63145bb9ee754874ca5b181b12"],["/categories/Hexo常用命令/index.html","26e3b75f6fe36341e5b4a89d2b66d686"],["/categories/JSON/index.html","de8edecb87e72b20c13419d07b93e535"],["/categories/MongoDB/index.html","9c9c39c4a667112d1af6ec624241aaee"],["/categories/Nodejs/index.html","4dbb0254d526ab1f3bccff8c95d3484a"],["/categories/Nodejs博客实战/index.html","89425832da15dad4f0afc28c409d05d3"],["/categories/React/index.html","9bce216d367a3d32bffba8c8b7bc8dad"],["/categories/Vue/index.html","11378ca88ebff375d9256469ca9bd58a"],["/categories/Vue/page/2/index.html","304fb300cf7e7956529576fbcc8763c5"],["/categories/Vue/page/3/index.html","8c8f44249be36087cc1b514043d01bd9"],["/categories/index.html","65ab4c81a30f6cb76596480b1869f4ab"],["/categories/promise/index.html","7d94006ca338e1062240c70905d7effb"],["/categories/日语/index.html","dac5c4de4c6ff40f373db67a8f925c97"],["/categories/自学考试/index.html","686b9e4b0b9978be85d48847cb33253d"],["/categories/自学考试/page/2/index.html","7b3c2ef086639710622e3adb18f00f87"],["/categories/自学考试/中国近代史纲要/index.html","c2e8525629c60cf5ca97933d5d783a10"],["/categories/自学考试/管理经济学/index.html","2520b263c927bf6226aaf0936403da0c"],["/categories/自学考试/考前突击/index.html","a57548db679ebb4a23b6d4b71fe4c7a5"],["/categories/自学考试/考前突击/page/2/index.html","2650a6d27aa3ec45802de7c8c426198e"],["/categories/自学考试/计算机网络原理/index.html","b989edac9b496cea9573072286fc61a8"],["/categories/自学考试/运筹学/index.html","547e12c0ecf870d36706968d07c8653c"],["/categories/自学考试/马克思主义/index.html","444773f869fd5ab049f2d8e33ddd0b31"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/favicon.png","831793361f36a5524d7c2c8e5a5e791c"],["/images/flags/flag-cn.png","aec786dd377f7498121b2b989285de13"],["/images/flags/flag-us.png","4e484b374a934ec7a0c318fa3039a18f"],["/images/logo-collapsed@2x.png","5a7921ae91c9497d9c479db2ed247271"],["/images/logo@2x.png","7dff419a181fc2ee0d21e7759b9fdff5"],["/images/logo_dark@2x.png","7618f56d3783393049d5486b34c83f1b"],["/images/logos/github.png","3ca867b4d49b00409911b0e7d221993d"],["/images/logos/myblog.png","c65b405af280672770a5e68dbc602608"],["/images/off_on.png","1bdd36870ded5c5d39e24fcdc65b0cb5"],["/images/search_icon.png","73b5f23fe9023e21c9d90b25d73f3881"],["/images/webstack_banner_cn.png","49008f34a922e970792cacb5d17b51a0"],["/images/webstack_icon_producthunt.png","2ba473dc05e96515bb57a7bb00c4d703"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","df08f6c91d41db0fb3dc2a19c863d210"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","a408e9e5a73a618ecc20d3445066501e"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","fe2ba5c3f21cff5ba6c9feca6d5a5fe7"],["/page/11/index.html","3d2d6c4fe4ac8854ce6bda1f6deecc15"],["/page/2/index.html","09f150224c5dd071a1af0bfa34667b7b"],["/page/3/index.html","7cd33e920388033cd0efeea2df8c7960"],["/page/4/index.html","5a22d770e9d5f217c7fd9770d346d88a"],["/page/5/index.html","9a625007f7de1be92647e4fcd98c7370"],["/page/6/index.html","c549d695e87542dd488ed449656989df"],["/page/7/index.html","bec7b89c59d9b3c850bf08f46a246f76"],["/page/8/index.html","0d3c1422b4de34f62a79d3f48aa6333a"],["/page/9/index.html","a5eb3f38cd8e7abd7c60075e6ea9a139"],["/posts/10812f0/index.html","a1359665a8e82c7fe71ef27dfc055c53"],["/posts/126b275/index.html","41c541cb3e3cdf4f5e494c8ea01f90da"],["/posts/12d95a5e/index.html","e4a596b05e145a7184c7a5a442f3e0ba"],["/posts/1367417b/index.html","ae19ad3a07daaa1c0289a06782a02acb"],["/posts/13886e3f/index.html","496fc916faa84989e83e00546950c933"],["/posts/145193a5/index.html","01f5227639a7838a135195414fb7072e"],["/posts/149dde25/index.html","2326b272bf90fb3e363fe28ac6ea0691"],["/posts/152fa65b/index.html","5e0ef7dc3f9a2b5ba9f15466b2a2f374"],["/posts/169e7dda/index.html","fc69827f2ffab75c99e2502f07ee75f2"],["/posts/1875100e/index.html","904862393be14df56b72a035f27ecbad"],["/posts/18eaef7d/index.html","68c39ac4ce2bf14322f57f736a0809ae"],["/posts/1a0bc7b7/index.html","715b7654e07e0c35823521b3b11f40fd"],["/posts/1a20a057/index.html","cf5a235b1798fe0fef8dab18058b06ac"],["/posts/1a998be6/index.html","f350c8f5d85828de9d0d49560de5ec3b"],["/posts/1bffbd20/index.html","ef11bb2a037dff50ad2d930912ca151b"],["/posts/1c5a0485/index.html","b8a74591695e2c2b0802ff670acabd89"],["/posts/1e638f78/index.html","ea32690402bb1495b2d0b374ba754575"],["/posts/1e967920/index.html","e3c74594909963429013de25c5be690b"],["/posts/1fb53120/index.html","2115f79162f608d6a338b54784e4e944"],["/posts/21466e86/index.html","7c657867a65d76165ca04a99b5c5fd0a"],["/posts/21abcf1a/index.html","d3b80a3eb0ec3f2497452854706c8bd6"],["/posts/21c250b1/index.html","399f634245d78302e34add6ec2404cad"],["/posts/2287cc/index.html","85d392650de3d5572e49a9ec5099e672"],["/posts/235acbda/index.html","33ec8bd04c79bd2b9939eb02fc64564b"],["/posts/236bfea3/index.html","777d9fec37ab4d48c7ec90110fc00fe0"],["/posts/24caea6b/index.html","9dc37b5b6bcf524753e23c9ad695c3a8"],["/posts/25d45c3d/index.html","00096a06947c907ebdebc4fa81b6b7ae"],["/posts/262baa9f/index.html","8e45d7b5d84756ca675d62b3a7a88a3c"],["/posts/26f82f65/index.html","0f91f79e9b3217394ca01b40d5a64603"],["/posts/27cdc142/index.html","1549e4920bc07c5a268ae22a41d35718"],["/posts/2895c4bb/index.html","42cfea1eca817e4b9709e7a97f590fa1"],["/posts/28987ff3/index.html","ecf3e4bce53927de217fa2e33eb93696"],["/posts/298cfeed/index.html","62f3992aba6b82401a34b302ea847547"],["/posts/29f0df96/index.html","9e832ecd49aea0cdf3becbac0261858a"],["/posts/2a1d2b6f/index.html","7ba03ee19ad5d7f1784acb717e48c356"],["/posts/2a386047/index.html","4f5b0bbfd822ed31eb96ffd699ed6b56"],["/posts/2b2f44ba/index.html","b9215474430fa47032ea5c3a5138f69b"],["/posts/2b770baf/index.html","0c59d4ca9386e73e02588e86ff580d6b"],["/posts/2cda4a8/index.html","3568b1ad911d3bbf22b2811c8e4173e6"],["/posts/2d020832/index.html","fd4f027ec92ca6c064f41b556e98d940"],["/posts/2d6d3bd/index.html","a42e0f03c8036ebe84b4a6be24e0a6f7"],["/posts/2e0c129d/index.html","1bca2a42aed3a2632de1826814268597"],["/posts/2e7563a0/index.html","bfbf5ad97908785cd66a62a7eadc0420"],["/posts/2e7b8d69/index.html","0743f2e7c425f7836c3986d8d55bc9cd"],["/posts/2f28d14b/index.html","8e92565f5cd64bf5c228bb0daf844473"],["/posts/2f6e1383/index.html","54093e25555a4fb347cca3351e7ef0d5"],["/posts/30bfd1cf/index.html","884b731c7c77e14e0f54332785efb0a1"],["/posts/3270cf84/index.html","8181b8fd334bac1eee54aee1f4149a9c"],["/posts/33235106/index.html","c07dc01c32d8ae4001fb4c450247cf3b"],["/posts/344e951f/index.html","7271bbe20fa278cc3be73cd06a66e95c"],["/posts/35e2bcf6/index.html","3f47bd745993f4fd51593f8b257464db"],["/posts/365e96c5/index.html","46cbfd38603094d13757dd02c40c81e1"],["/posts/36e331e3/index.html","2532791ed3bad2e79da00316a1014ede"],["/posts/372df90a/index.html","897769cf9c3235cb1400d8f5861d487d"],["/posts/37c547df/index.html","41eb6071063189d0bdad68f3f157bf68"],["/posts/380dfa6c/index.html","fd501bdac920cce3eaf99f105b92dacf"],["/posts/3859c98f/index.html","1420e14ca7e866c7e895a8372d99aa4c"],["/posts/387564ca/index.html","67e5dc268481b6cf3a563c6e8491ec43"],["/posts/38a88481/index.html","d730009a8133c9b63cb10820c6c3c296"],["/posts/3914bfed/index.html","b89fee4a34834f0e9f9e4fbd51603ae3"],["/posts/3b56780c/index.html","1fd2ff78515193b630665825823a0a25"],["/posts/3d1ef1fa/index.html","0ed25c0b9e19258297151d7e1a5154cc"],["/posts/3e4bb613/index.html","ff666b5d2efcd44e8d1b263704bc256c"],["/posts/3f2e933/index.html","8d9ff2c8a1c7eb1372e08ed7a8610324"],["/posts/3f6e5f9e/index.html","dff672bb572ebe6fc072818c6c447bfd"],["/posts/4349a589/index.html","e18b82f63840133b7972533c268736d1"],["/posts/44246190/index.html","4f1f982afbf11eb6911623dda0f695f3"],["/posts/456550f/index.html","6acfd740a951b9cd3b664bba9a6f4463"],["/posts/45fe8d36/index.html","45a98ff468cbeb614177266ef480a9dc"],["/posts/470ac03d/index.html","5c7f867b8e2368e756adb52279e6be27"],["/posts/470d45ef/index.html","be333f22b1e9d5f0231dee3142b5b693"],["/posts/4894629c/index.html","a662c210929ad29cb91a9960dbcee842"],["/posts/49249ac9/index.html","73dd2a218c184b0f463baa37688ccd00"],["/posts/49f2d2a/index.html","890761ebce4946790917774ff4d43b77"],["/posts/4e6d4eb4/index.html","b383a13ea8e6be2e17736c388a55faad"],["/posts/4f346c5/index.html","b938a3a032583f2c7a7d0580dcc25e54"],["/posts/50caf1d4/index.html","9d98ff746cb2cf51c0b91e11462a42bb"],["/posts/51139400/index.html","a5c38c02af66e99e74683874d1ceab50"],["/posts/512c9a09/index.html","068b958ebec4ae19731a3536a02133bd"],["/posts/5205b330/index.html","81f565107190e0d4fd67918e34056848"],["/posts/52d36cab/index.html","6c68b7ec9aafd51d476b948931e20ba4"],["/posts/532a083a/index.html","42042f90f16358e5807a1f1040cbc9a1"],["/posts/537d2c2a/index.html","7270342d8fdcfd9a5a8c67161af0fbfb"],["/posts/54383ba0/index.html","49573f75221813d9d565748a27c6b465"],["/posts/54667693/index.html","98bf9c041b86e385dbadd2066108439b"],["/posts/54fbed4a/index.html","eff34cabd430fc81a93fa3ec9c4a9289"],["/posts/5508212c/index.html","db7588594c1d2c6fa9bbb83ef4fbb9ae"],["/posts/56760226/index.html","b5d60d73d2abf88cd9133096590290d9"],["/posts/571564e5/index.html","6e6bd24aed13405c5f2aca5c218b8a9b"],["/posts/57900fe5/index.html","db8aad0245f471c5e97bdef8b4bda3ca"],["/posts/585ba415/index.html","040a2dd09a051e63c45389af8fa075b2"],["/posts/589a214a/index.html","2305e34e7e33190fb03e0d1f25298a10"],["/posts/599a2b19/index.html","e6300cb5440d45f401ed45d4571f9a5a"],["/posts/59c05382/index.html","175dda90482370348b1b66c2f3e0174d"],["/posts/5a5294c8/index.html","62e13f580e8054373d9f7ac0f8ee48bf"],["/posts/5d3da28e/index.html","efa3c227a9b6385ad2fc3aff4a85cc70"],["/posts/5d3f50d1/index.html","47cb472fb14883823272d956af16281b"],["/posts/5ef7ef00/index.html","51e895e98b21df5d9c324a0e749b9e5d"],["/posts/5f1fa8df/index.html","432f8460598a0f36d8ad327b138a70e4"],["/posts/5fba84c3/index.html","4a43f156ea30d6c302d339d4f5d6b199"],["/posts/607fa29/index.html","0b9ca22d5804377c7bc88cd0f4cd1e3c"],["/posts/60b5dd06/index.html","1a64535f46cf021b46bb0d54c837f429"],["/posts/61057c88/index.html","94baacdf1dcb91c83b33035202b31dd7"],["/posts/61477045/index.html","ac689a1f8e717ee045ca518839781cc9"],["/posts/664423f6/index.html","0ce8b552616da8d0df0a4ee4c5a50c61"],["/posts/69d79f93/index.html","63fceda45c480df03f95b7614e58d97c"],["/posts/6b2f046/index.html","51bb8f4a14dd28d35653502a0993daf1"],["/posts/6b4610c4/index.html","b704873984c6edb79659ea5f946ddf90"],["/posts/6bbf03f0/index.html","1062c38b750a7a9ec3af4fcd214462bb"],["/posts/6e7b67e4/index.html","26806928f857d106d3fe95b2323c2f5d"],["/posts/7000d139/index.html","bb1b8572b097b9347a1139bf41f09620"],["/posts/72f94093/index.html","2468b5f8e32fdbf6a9633137b96b1674"],["/posts/7380b71/index.html","4321484ceebaeb325684290c074a7c77"],["/posts/738eee3b/index.html","7deca4207c86af50f157a21fb8504af3"],["/posts/73981dbc/index.html","88d999fbcef68768068d48425f9fb034"],["/posts/74d60fd9/index.html","cdfe4241b1ca0a560f1420b040816c94"],["/posts/74f5d9a5/index.html","d8fe65020626a27ba1de0b42207c37ac"],["/posts/750f2ce3/index.html","8a3abb5accdbc9e6eb4c24f4941845a5"],["/posts/75ceb627/index.html","d9ccbd952bad6aa4b55d2649bc046322"],["/posts/7725b75a/index.html","b71fc074f9fb9d1d6065c7ce1ed0df8c"],["/posts/79dfcc1f/index.html","ca7cada60bb415d6f60c5bc14821de8c"],["/posts/79ef335/index.html","273f8c80b989ac7b672a0f93f52ea4a0"],["/posts/7a228db4/index.html","3729479104d675bd837760942b87c801"],["/posts/7bbd3149/index.html","c4c317354a3415e3980ab05b046c6d45"],["/posts/7c20e8d5/index.html","6bca247f95bbe2df3ef3e46e3c59426e"],["/posts/7d3ea75e/index.html","f7f176e12ce6a21baabf78a10ec57e82"],["/posts/7d43958e/index.html","14b91d5af90979e65268a86034d48e61"],["/posts/807ac7f2/index.html","44686bb4c777bf46353a3b0fb773de9f"],["/posts/81738fa0/index.html","90348a380f1a7e09ce98d05cc48e0e10"],["/posts/817c41b4/index.html","41798d7764c440d11d66542ef75f71ce"],["/posts/83f13096/index.html","068706bad6f42c2919e4e9dfce65e7f0"],["/posts/84ee8e34/index.html","9f63b5070e64e65c764e98bda74ec752"],["/posts/854d07da/index.html","7960047e3f9329f0ac87edcc958f0999"],["/posts/86cad295/index.html","4e4204c6181a9016db93aa9a713fecbc"],["/posts/8833154b/index.html","65c1a82107771898fbd86328beb93d5d"],["/posts/8837602f/index.html","5eeff4b52c39c8b12de6fe2366b9b64e"],["/posts/89589a03/index.html","416c38f75adc9911a84de2b7bc3677cb"],["/posts/8bcef008/index.html","692d56ab0105488d6b1b539bca500d0a"],["/posts/8bf9abeb/index.html","13f037287d6eb06b70cfd3d8ffe493a6"],["/posts/8e5f5686/index.html","2bb9b0c391f025e8dbefc2dafbedda15"],["/posts/8fa6b8c7/index.html","c678b4a63dc354190cf20accc3334c01"],["/posts/9029a3de/index.html","db4803b6d7266eacafb53deb42fd95da"],["/posts/909d9a5d/index.html","0278593d515396520a33c84b4c778602"],["/posts/91404b94/index.html","c72cf8fff2521763850886e36c22f4f2"],["/posts/932e3747/index.html","8563410ba14674ae89b2d5cd29908ee9"],["/posts/95fc9e6e/index.html","10dca7deee6248ae54201238001cfdc9"],["/posts/98e67280/index.html","dabf7ba2e7536a830a71ad00c38177df"],["/posts/9a4d13ef/index.html","ea223129ef6ab4e8a7cf51ed69525c54"],["/posts/9afbb889/index.html","1feb1edfe8164ed0c922bb4749a0afad"],["/posts/9b95a057/index.html","4f163e2f2db2fcfd08a563176209470e"],["/posts/9be63ba/index.html","621500758acdad2122e515a8cf2ed67c"],["/posts/9d967c90/index.html","9f57eb6e208d77eaea09baf06525f9aa"],["/posts/9eadcdf6/index.html","6b6ba0f1f92821dbecea238684c2f956"],["/posts/9efd76a3/index.html","3efb79a2304c7f326728ae0af652d6ab"],["/posts/9f97db8f/index.html","95bec22ebe7075d85b15990e7aa129c3"],["/posts/9fee4710/index.html","b9b0661f0892874a32259c65628b51bf"],["/posts/9ffb4388/index.html","aab33bfa9a2ba7f8eb0fa4d0e19f4b32"],["/posts/a04e2d29/index.html","48d1e3416f74f872d11ed76c90dc47cc"],["/posts/a094d027/index.html","fadd1b5bc5944c556f5daae365872f60"],["/posts/a27042c6/index.html","98e5f9901d27575cb9f92a493d232443"],["/posts/a29cc732/index.html","b85df62870846e1ecbbad25273e9d075"],["/posts/a44a518/index.html","f5f682ee433f84e44205619c5883497e"],["/posts/a4f2a748/index.html","55a4691c13044a4620ba5e6c102f7e49"],["/posts/a7dc32c9/index.html","dbf1ba4838e9758a4c09b6bc64f8c64c"],["/posts/a7f753ec/index.html","be7c29f6870322d9b282201d351e76a4"],["/posts/a9168bc5/index.html","eeae695a6bd9a4594aa112f0c39b0fdb"],["/posts/ab176793/index.html","13ac3c082e7cac387c8591a56377c5d1"],["/posts/ab34095a/index.html","97ac8ee2b3bb1fa0de5ad68d524229f8"],["/posts/ad47c4a5/index.html","3be67b131b95e0e91d27ef74ac4b90ca"],["/posts/ae8f7b74/index.html","fcba41d6f3573820b6aed5339e5309ae"],["/posts/af43816b/index.html","0b9e633360f9ea946f92330be7a2c3d3"],["/posts/af4880c3/index.html","aa92a1be237618a6ef15bf3530e081e9"],["/posts/af9e049c/index.html","72cb442dc5f19735ec3bfc380da335be"],["/posts/b0f1a367/index.html","09195b9f2ce117a3efbada720d7d328b"],["/posts/b0f98e2c/index.html","9dd9feecc882d37ef3f6d3c235d5e5a0"],["/posts/b33131fd/index.html","fd6135afde4c2eea050c3c6c0a3d0165"],["/posts/b36eb520/index.html","4c221d491b228e4025545f929f8bbb4a"],["/posts/b542fc02/index.html","f0a4f04d6388da376810b8ff3189e3c5"],["/posts/b54eeeb4/index.html","3b29679f31821082c91917c03ce0793e"],["/posts/b84f3f3c/index.html","c767c63ed265eceb12e593dd4b46445d"],["/posts/b9325cf5/index.html","3a4e2c45cb94724b72e3e4f8ac0ddaaf"],["/posts/b94fc207/index.html","363999746ed1db95b741953d2c114577"],["/posts/b981a6b4/index.html","a1bc07505ded5cdab2c62c405c421571"],["/posts/bcea326a/index.html","8a78ba33ea54cdb31c0edd6e12cab5ee"],["/posts/beb19e80/index.html","bcc48ffa91e469938a7a3292e39c4e51"],["/posts/bec490f8/index.html","d9a3ac3f5386c5a52d359c32bdcb3141"],["/posts/bf7bde0e/index.html","9a1463fd341ec2d21fa010f7c5ccbacc"],["/posts/c03f17c9/index.html","d6b27e334b175f9cdf60302ee9124859"],["/posts/c14b94dd/index.html","8ccc9064c31a8626acc4b4d32d63a2fd"],["/posts/c35bc572/index.html","8c25e5105b1b75e2590c1d76f1ac6ba0"],["/posts/c436016b/index.html","53d469ba6e7fc0dc4a82da4a09e8e688"],["/posts/c4efc741/index.html","267fed2c659c665900521a48503b1fac"],["/posts/c5e8a08e/index.html","14a0b3a3bb67eab53893ff434bda45a7"],["/posts/c7646f1a/index.html","d85a4f3c9f34169efeef2ad19d45b0f8"],["/posts/c7db1dc0/index.html","295b2ddc9b748c6b9205d13a431bde31"],["/posts/c7febeba/index.html","a0cf56464a4634cc7b4003c54f20e06d"],["/posts/c9c3a06e/index.html","4a91d2f8119cef31098252ff0df389f2"],["/posts/ca657192/index.html","210882df4a8a4bd3c1d3a283e00d4768"],["/posts/cc6d2cf2/index.html","bddc3ff910bac0302de8b770b29fc089"],["/posts/ce48f291/index.html","326a3240760003ff313511e0d639f943"],["/posts/cf480faa/index.html","275b444a3b3121cccc0549ec55175f9f"],["/posts/d090b4d/index.html","68756526ce7fe1c4c205eac1da5e3c70"],["/posts/d1995044/index.html","ab930b40cb77d041a29e62bf8aa14337"],["/posts/d2d34977/index.html","326476227e21798e6be28890bbed230d"],["/posts/d3647a92/index.html","d5352e6d37c4f43256e9a96e0210b7bb"],["/posts/d3f6b818/index.html","42909e2710e39249d5b25c45145731c6"],["/posts/d465029c/index.html","0841612cfdb07988f154b237caa54dac"],["/posts/d9884be2/index.html","544601afdbffffd643f64997f1d26bbf"],["/posts/da40f433/index.html","8ee2d773e7cfbfa8d965fc64cf6acdda"],["/posts/dae71d5f/index.html","d46c818f92b9a462af12626c72d62f15"],["/posts/db9fbe47/index.html","81eb2eccdaadc88709d2c7ecbec9138f"],["/posts/dbba997d/index.html","404a23aa7063d8b6553705da30cc58a1"],["/posts/dc94f8a1/index.html","877e88a6621cf36dab00972c3b77829b"],["/posts/dfe9b67/index.html","021e73f2ce69917523f3619c5fa84e08"],["/posts/e0387d80/index.html","b2d93aec92f07e082110dff2c2cb8968"],["/posts/e356f7b3/index.html","4dd70a05418c545d57d6338cf5d72001"],["/posts/e3acb366/index.html","0b2a6b7e09d9a14d4d332e0863d41141"],["/posts/e450354f/index.html","3a378ea0c85ad909be111f5776950609"],["/posts/e489223c/index.html","91d41f5c746122e27979f449b02c7072"],["/posts/e9a8ddd1/index.html","c2b66c470e71141f2f0e33df696c800f"],["/posts/ea914c06/index.html","756de16154198e6e85fa0c7f6987f32a"],["/posts/eaa8f31e/index.html","d8704017aafbb069d86fd7d6f4e1ca6c"],["/posts/eac19412/index.html","db49510229359997be1d22794c6f04b0"],["/posts/eb0c9e8/index.html","641f40f43bd5c2277eacadcd2eb7c533"],["/posts/ebe408b3/index.html","51ee122e31f6a4b4068a7e034765eee3"],["/posts/edfc881f/index.html","7cfda9d92808859dfc29a71ece51cee1"],["/posts/eec0bbd1/index.html","ecac33c37b56837296ff72213ef1687e"],["/posts/ef22c7c2/index.html","3df8abd45a3546a39a505cc679ae1257"],["/posts/ef271825/index.html","7c1648c7a753bd398a7b34d078be0a8f"],["/posts/f209578c/index.html","26c7446e84745d2629af2139e0e345dc"],["/posts/f3e9bea2/index.html","2e64fa853198c412ad150ef4e1ee5c83"],["/posts/f67b7122/index.html","09d440f2129927cc454335c85e5da1b6"],["/posts/f7abba28/index.html","8624d31b15e52b827a40cf55804ad607"],["/posts/f7bf33eb/index.html","5f67adbadcb3c5fe7f501db2cef6de9b"],["/posts/faffd764/index.html","ff6d0a359219f2730671adc2bf4623c5"],["/posts/fb684fb0/index.html","d99d06c8ce860c37af61100388d699dd"],["/posts/fc57199f/index.html","545093b67a7825c7efe0905483155eb3"],["/posts/fc6e9a7d/index.html","5a69f116e623e907d06cd761a3e573fe"],["/posts/fc7bc02a/index.html","49e79e741408bcf9f1cc78d9cbb515a9"],["/posts/fd67c5cb/index.html","5953c2ecc2617f828615839f0b131da9"],["/posts/fdde061e/index.html","c13c8b894c856ab8c3d6b59fec9de533"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","6d9993490ddcd730bdb3e171e8539718"],["/tags/ES6/page/2/index.html","df118f85f237d019eaa94fe1501c9ffc"],["/tags/FL/index.html","7074a62949bd160ce72513649b668a8d"],["/tags/HTTP/index.html","74ec774f43d3116e590ba643b5a27732"],["/tags/Hexo/index.html","272ceaed75446a670c173df7fb86dba1"],["/tags/Hexo常用命令/index.html","9723fc4993c984e13b08d2465018fa4a"],["/tags/Nodejs博客实战/index.html","578c1a6cd3dc6ad66192299751b340f3"],["/tags/React/index.html","06821be8af44c05f7c9328b3ed5ec88b"],["/tags/Vue/index.html","476d2eff27cb7927104fc929b5778315"],["/tags/Vue/page/2/index.html","a7d2d508de02acc9f26c12ac1c5556ba"],["/tags/Vue/page/3/index.html","b4b3def5308d50500ef6b3a2dfe15b26"],["/tags/ajax/index.html","0f39e8a87cc9747ae2c18c7b321066e2"],["/tags/ajax/page/2/index.html","0d348c7849f0b350a1337a9094f241c6"],["/tags/curl/index.html","d1cd67cac311942e367498831bc5a271"],["/tags/index.html","74273ed6a93f9bd987c6b559e8964bc7"],["/tags/json/index.html","11432e2329456b972d16a250c5d87630"],["/tags/mongodb/index.html","1b8695de9b2a73d5eb4c5b30e2176a15"],["/tags/nodejs/index.html","ea3f80af69538e825a0f712133768f4f"],["/tags/promise/index.html","d3ebe4fbf51918869bb380d8599977c9"],["/tags/中国近代史纲要/index.html","fbcdebf3867dcc9fcad678d0df1137b6"],["/tags/日语/index.html","9b08e21853b17dae1ed47f58371dde59"],["/tags/标签外挂/index.html","089b6592eb68d28e1752ebda99651206"],["/tags/目录索引/index.html","de5daa5185c29d19b1398eecaf15cd44"],["/tags/管理经济学/index.html","6f9e46ebdab3a79944c7574f6d740cc0"],["/tags/考前突击/index.html","eee6079633428c3f1de9cb78fd852864"],["/tags/考前突击/page/2/index.html","76516e99f7bcfed042b31910be8baf63"],["/tags/自考/index.html","d39ec44d92d0490781fe800a1720f2e7"],["/tags/计算机网络原理/index.html","df400d1bc5ebf84f429a11f3a049383a"],["/tags/运筹学/index.html","09068eec985ae90f067eb60130775935"],["/tags/马克思主义/index.html","4bf5a6a6063e1b4b834520787bb9cde8"]];
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




