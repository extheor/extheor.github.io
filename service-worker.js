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

var precacheConfig = [["/404.html","7a826d3620fd0f975cc4dac020adb7a9"],["/about/index.html","c4e79e23e86ab40640a17b838d5563ff"],["/aplayers/index.html","18016c48baf639c369d3195df0865a50"],["/archives/2020/02/index.html","fd094d47b58c47123f5eeb427d68a30c"],["/archives/2020/02/page/2/index.html","3d394ed1bba90ae4fa0afa8fe980b9ec"],["/archives/2020/02/page/3/index.html","4043c8336b7d4b5ceb50731ca4575ba1"],["/archives/2020/02/page/4/index.html","38fae168c1fb7a4731543b782e642892"],["/archives/2020/03/index.html","7410da1f2854de0c3d19855d62d25a3c"],["/archives/2020/03/page/2/index.html","637e531b146406693968b819eab26251"],["/archives/2020/03/page/3/index.html","f6b692743de66e1fb2974d538115e8f5"],["/archives/2020/03/page/4/index.html","1c9d0f33ab5de9c91b7ebb5e00d874bd"],["/archives/2020/03/page/5/index.html","6955a98e2ebf5ec167a3d0b54bd0278a"],["/archives/2020/03/page/6/index.html","5122ef278d476040d5b849f9c093c281"],["/archives/2020/03/page/7/index.html","bcc5713272e92e32e23dd384960981b6"],["/archives/2020/03/page/8/index.html","94c0ae3498f5046bd1ede50d11c03863"],["/archives/2020/04/index.html","7e5ec54232036d0c8080c92026a4bad4"],["/archives/2020/04/page/2/index.html","342731e64752a8b4f96b656f0cd646a6"],["/archives/2020/04/page/3/index.html","413ed517fa6212ca2652c0c786aa7e2e"],["/archives/2020/04/page/4/index.html","3e8286d7d46f016493572339be786742"],["/archives/2020/05/index.html","75f8f54d8cf70fa58093e514ceedf6d4"],["/archives/2020/07/index.html","51dc27f374f325eb3bd7be482b3aead4"],["/archives/2020/07/page/2/index.html","32aac93ee7eca2c1ab214117bf320dbf"],["/archives/2020/08/index.html","d57efbaef3c19f2d438e0bd9b43dd8c2"],["/archives/2020/08/page/2/index.html","578328b93191c19217610cd9f849e14f"],["/archives/2020/09/index.html","fef719cfef8395d44b89872e2fe9498e"],["/archives/2020/09/page/2/index.html","964bf82a98af3c41361a07e66d1c5369"],["/archives/2020/09/page/3/index.html","159bed10128f5ca689722e9798a9174d"],["/archives/2020/10/index.html","285aef10c085fc54b2b71a21af078b22"],["/archives/2020/10/page/2/index.html","4e92c6209d07e1f3ccb93ef9f39ed56d"],["/archives/2020/index.html","6888a75a1dc615d22ee7e865916344f7"],["/archives/2020/page/10/index.html","e02c613c4eff8fcda390c3e998243eba"],["/archives/2020/page/11/index.html","2dd9d49d72a7c63d47b2a0e99a55134f"],["/archives/2020/page/12/index.html","b02fa27fb71f04b7fc86dc1512ea1f3e"],["/archives/2020/page/13/index.html","9f3d588c0f8e812b1e3a4608009870a8"],["/archives/2020/page/14/index.html","b250f1873f0235ea45de71287e8d5b58"],["/archives/2020/page/15/index.html","15df2bb88b4079e2fa0c2eb395401ed6"],["/archives/2020/page/16/index.html","4b22b83ac67bbd430c68a97274af2955"],["/archives/2020/page/17/index.html","0aed3490bd4722dcf50b6d0ffeb7bcee"],["/archives/2020/page/18/index.html","ec7e1ad098140fe16684798dc6d7176d"],["/archives/2020/page/19/index.html","98bd650c79d5488e50465c0bc4a5f3c6"],["/archives/2020/page/2/index.html","68bbfcb99e5011ef0c412a219e344dd1"],["/archives/2020/page/20/index.html","b5a2ffe7dd1d70362b78596a0e05f897"],["/archives/2020/page/21/index.html","6c7957930e6bed839f2b1f8aaf830483"],["/archives/2020/page/22/index.html","7c291112e04738f886385096a250d58b"],["/archives/2020/page/3/index.html","c7b1f718041ce198023f7556d8bbcb03"],["/archives/2020/page/4/index.html","4c867b21e1a8ac5da6a4fb44057b2c7d"],["/archives/2020/page/5/index.html","7691837dd31636986f8ac183530717d1"],["/archives/2020/page/6/index.html","60d9bcc78de127d3b7c300a8f51bb239"],["/archives/2020/page/7/index.html","3ce10cc1a1dcbbdb6435c95df515fa05"],["/archives/2020/page/8/index.html","a3befb60ba1d23cf889f309be3cccdcc"],["/archives/2020/page/9/index.html","2903f7aba5b698f8451f4554d51724cc"],["/archives/index.html","20eb0c7f899ecb6bcf6317b6845381b7"],["/archives/page/10/index.html","3a3d3abda835ee7ce74f66e52af4fc42"],["/archives/page/11/index.html","829c1985a9579c52c05c2fe6042e9b1f"],["/archives/page/12/index.html","3186c50ce062db1c28866e9129889cf5"],["/archives/page/13/index.html","24fc3d99832a620e63c8dd48b6ee7d31"],["/archives/page/14/index.html","88d947daf2f2eae87da1a534b2e11881"],["/archives/page/15/index.html","2ed09a0cce2540d64c552d0d82ead416"],["/archives/page/16/index.html","6686bebab0a13673e0968a8bdfe71f12"],["/archives/page/17/index.html","d8063ba40bef39d532cfd17f52314496"],["/archives/page/18/index.html","0a11c37a5dd98f0a88d7a828fbdc2dc0"],["/archives/page/19/index.html","d22d675f6e1b5d0a9969534ee7c64d73"],["/archives/page/2/index.html","54c3cc4259026ce57cd4e0162e8ce4d6"],["/archives/page/20/index.html","b842c396c1fa0502d8c79c072e42b160"],["/archives/page/21/index.html","f0c3f3ed271b2718be432bf0694cc514"],["/archives/page/22/index.html","39c479dd9795956b0b058ef043d46ae5"],["/archives/page/3/index.html","eacfdb55d449ebce1a71104f5cc027b6"],["/archives/page/4/index.html","f3cc808b9f8345ee79d35e680ce0dc5a"],["/archives/page/5/index.html","5c4a7aeb7d2650bf82176ec3e93fdde4"],["/archives/page/6/index.html","1551f87218ab61be779d971a6c731275"],["/archives/page/7/index.html","511a0924e34f8637d8392260680f90f2"],["/archives/page/8/index.html","0c03c8b1989bd1fd8c014248192d92db"],["/archives/page/9/index.html","1a1f506f9b21d4c41e0fc1164e7a4dac"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","811ac970ea40645f6157920592833dc0"],["/categories/Ajax/index.html","691ee7bca2018b066999640e7f25bc5b"],["/categories/Ajax/page/2/index.html","f6243c95890850a25b19d59d5b10c7df"],["/categories/ES6/index.html","f717483591cd750bab09b0b2591e1f38"],["/categories/ES6/page/2/index.html","28fc898262cdce7e5f4b5951998b4652"],["/categories/FL/index.html","6db449110af44d0358a2945b2aefdb30"],["/categories/HTTP/index.html","872cdfc0e0ecf55a03df191a6ce45d6d"],["/categories/Hexo/index.html","62b4a86ea9bca03cc4dbdb6a45497c9c"],["/categories/Hexo/标签外挂/index.html","34169358739b20c6776810d62ed00ba8"],["/categories/Hexo常用命令/index.html","13f353a073dcb439886e6a4a2092d10b"],["/categories/JSON/index.html","b10ff76eec21afd3dcd19690ee2dd0a9"],["/categories/MongoDB/index.html","c2a0e0e2c7bfaedc40e3765ddda24983"],["/categories/Nodejs/index.html","79df6d66e1142fa6cad6f50cd90bbd5e"],["/categories/Nodejs博客实战/index.html","7e3b1a06920baec4ca466dac8574e208"],["/categories/index.html","6a87d2ec9de7e09d682a86aad655f9cc"],["/categories/promise/index.html","aafbabbb7705cf364ed78cf9c8f3f774"],["/categories/日语/index.html","ef9d741f34a46115b4d6b22db9d45026"],["/categories/自学考试/index.html","60f0bed2eb6586eab10d536168259b57"],["/categories/自学考试/page/2/index.html","d33c4a26c2382971f0dd87fdeb198b16"],["/categories/自学考试/中国近代史纲要/index.html","e1fe02b6aa66f6e6539a9fa2ca74788a"],["/categories/自学考试/管理经济学/index.html","b850bee55d839c661ad0ee991e1d9f20"],["/categories/自学考试/考前突击/index.html","ecd1d454ba8832878f7183f96038ced2"],["/categories/自学考试/考前突击/page/2/index.html","7406770972f1f731e6f8710a109bb0f9"],["/categories/自学考试/计算机网络原理/index.html","cf80cddc06349c4c1e5f70fb2cef4d17"],["/categories/自学考试/运筹学/index.html","8d1beb4e44f11b62ada7188563b2a0e7"],["/categories/自学考试/马克思主义/index.html","46d6dee5143c97c455142ff550e478b4"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/favicon.png","831793361f36a5524d7c2c8e5a5e791c"],["/images/flags/flag-cn.png","aec786dd377f7498121b2b989285de13"],["/images/flags/flag-us.png","4e484b374a934ec7a0c318fa3039a18f"],["/images/logo-collapsed@2x.png","5a7921ae91c9497d9c479db2ed247271"],["/images/logo@2x.png","7dff419a181fc2ee0d21e7759b9fdff5"],["/images/logo_dark@2x.png","7618f56d3783393049d5486b34c83f1b"],["/images/logos/github.png","3ca867b4d49b00409911b0e7d221993d"],["/images/logos/myblog.png","c65b405af280672770a5e68dbc602608"],["/images/off_on.png","1bdd36870ded5c5d39e24fcdc65b0cb5"],["/images/search_icon.png","73b5f23fe9023e21c9d90b25d73f3881"],["/images/webstack_banner_cn.png","49008f34a922e970792cacb5d17b51a0"],["/images/webstack_icon_producthunt.png","2ba473dc05e96515bb57a7bb00c4d703"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","af6361834dc101ccfc014586d5a13786"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","f2fc7d29fecfaba53ccdc6dd520c0ca8"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","0e26258481cdeb39bb7fbe0985e2148a"],["/page/3/index.html","e0148feb14229d48203bd12a92803acc"],["/page/4/index.html","74c7e9bcb810220689c01b3389aea0c4"],["/page/5/index.html","3d19ec773e2faab559948bbecbc45ee2"],["/page/6/index.html","985f64fc9ba1c108defc04c1429e16b8"],["/page/7/index.html","d00f8b7bec566991761a10daadb9b798"],["/page/8/index.html","2c07cddeb83c008800be822823a7cc0b"],["/posts/10812f0/index.html","86b9d026ca76fc09fc637d5612f64373"],["/posts/126b275/index.html","e240f0c33acebed1df95f7f347112713"],["/posts/12d95a5e/index.html","426983a99a82321263273090ec317693"],["/posts/1367417b/index.html","218238f6eb75e34711a9242ef0d45d72"],["/posts/13886e3f/index.html","fe06a8d1f67ca8efdf3b3ec09db03597"],["/posts/145193a5/index.html","9c39c15e85ed93096d869b78addc5aa5"],["/posts/149dde25/index.html","5319a531d9dee6d546d887bd19209959"],["/posts/152fa65b/index.html","36030a0a661e07489ad26942c85c7d0c"],["/posts/169e7dda/index.html","b0572428946c3031e799a027336151d8"],["/posts/1875100e/index.html","71c6b94c89bd4e05796080febdad5565"],["/posts/18eaef7d/index.html","994e59c73852b3287fb2041930abc2e8"],["/posts/1a0bc7b7/index.html","2814a7557c445d0990b0505947bb1fb9"],["/posts/1a20a057/index.html","720f9c4f2dffaf9bb2db6a9a5179633e"],["/posts/1a998be6/index.html","50a989e811e9fc96391882c770296259"],["/posts/1bffbd20/index.html","f0a74b6fc8806d9a7d28335b708fe051"],["/posts/1c5a0485/index.html","7a921df027bbfc060ee97aa4b7730c0c"],["/posts/1e638f78/index.html","fa89816d2a9ef0f25e3e78319354c30a"],["/posts/1e967920/index.html","319e82282e0c9be873f2c358457799de"],["/posts/1fb53120/index.html","d963ae296e596de56f9b012b10117059"],["/posts/21466e86/index.html","c86a3ccfd91109a614600a8bca0b78b3"],["/posts/21abcf1a/index.html","8aa5a695e3abe63ee44228ee39b06926"],["/posts/21c250b1/index.html","42707768f8c21110de29a30162ac9176"],["/posts/2287cc/index.html","58161deeb036acfa6d49d7198d22c44b"],["/posts/236bfea3/index.html","d9277090ae2be203bf0392109c3e2b5f"],["/posts/24caea6b/index.html","b84540bdf3926c946f6af7eb4d49a8d6"],["/posts/25d45c3d/index.html","f1586a249d92f84c3f758a7887d37edb"],["/posts/262baa9f/index.html","5228bb1745913431ab23077af3e462e9"],["/posts/26f82f65/index.html","c3fe860273b84f7a25abb9a1fd1d2300"],["/posts/27cdc142/index.html","ec4bd335af7fe003f259bf06f9e6cbe7"],["/posts/2895c4bb/index.html","379939a37dca16ed3e660dfe6460d1ef"],["/posts/28987ff3/index.html","1e1fd706f5f1996af78da39769c82f5f"],["/posts/298cfeed/index.html","7d9dae0e54cb2683273318b93812462d"],["/posts/29f0df96/index.html","7b3ef7d8f7eae9d8fdc39e0ec27ebfa1"],["/posts/2a1d2b6f/index.html","01b25da9d8d957934c07cf9e375e7aa7"],["/posts/2a386047/index.html","d407472713626466497bf4203032edc4"],["/posts/2b2f44ba/index.html","1d4584be03c0acf9b6acf5de5aa0687a"],["/posts/2b770baf/index.html","3179c77af9e2149e2244df22d8519aed"],["/posts/2cda4a8/index.html","434b74c7260d918b135a0277ac074f26"],["/posts/2d020832/index.html","5a24ab21b774bf4c719ac486933a369f"],["/posts/2d6d3bd/index.html","01ab780651a61a8e11db04f4b7bc8322"],["/posts/2e0c129d/index.html","f1ff746c274447245c920a48277d003f"],["/posts/2e7563a0/index.html","b44ef6f4869adde00cd3350d2d5d685f"],["/posts/2e7b8d69/index.html","f13e759dbf7a1c67a7fff40d6f274b4c"],["/posts/2f28d14b/index.html","e1b518395e2edecbfccf9f5919500e29"],["/posts/2f6e1383/index.html","af91404bad545736addbccbc895db15b"],["/posts/30bfd1cf/index.html","8e8189fd9a38bfa17defef67f06f743e"],["/posts/33235106/index.html","41ed7b21e2de05502c67918cf819d5f8"],["/posts/344e951f/index.html","c78cbc498e647cf9249449ead44a0336"],["/posts/35e2bcf6/index.html","74b337bc319801b484d80bb07d7ac320"],["/posts/365e96c5/index.html","d02577f2c7e05d37bbed20a0f3e1888d"],["/posts/36e331e3/index.html","21d8d692e3e62007d32fa366b1fea3e0"],["/posts/372df90a/index.html","9395f874478d196ae1121bad5734a1d2"],["/posts/37c547df/index.html","fe7b47f4028f9ce2dca9771070462385"],["/posts/380dfa6c/index.html","c2db368b837468871b511fe44810dcac"],["/posts/3859c98f/index.html","139dfd079911d7337cc642b69cba64de"],["/posts/38a88481/index.html","8509721f053d01a027f2bf900eaa0498"],["/posts/3914bfed/index.html","eab687c44d2a3a8fc947ca0059fea9a5"],["/posts/3b56780c/index.html","086655a93737a02a66a03ee25497eef4"],["/posts/3d1ef1fa/index.html","99fba4e23c999090c30f3e8bef6c2637"],["/posts/3e4bb613/index.html","ab705bafe8ff2a78c02ad060f6f84ef9"],["/posts/3f2e933/index.html","c3419392eba3b5564c01c8c8842332bd"],["/posts/3f6e5f9e/index.html","ec24fe1fe884440fe56bb53689cf81e8"],["/posts/4349a589/index.html","feadde864232ecdf612e57745d32aabd"],["/posts/44246190/index.html","3b93422fe26819022f8f9bd88a58d9f8"],["/posts/456550f/index.html","9118f504a0d4d2a3d9eb0a85d20ce334"],["/posts/470ac03d/index.html","213fc67171426f0aeb0e3476737dd6f2"],["/posts/470d45ef/index.html","6eb5a30ca672d7ce5e42697521be27d3"],["/posts/49249ac9/index.html","6527d59a23e32452024cfdbd10298e8c"],["/posts/49f2d2a/index.html","a6ca6cc7719d1fdc28257b4228ed00f9"],["/posts/4e6d4eb4/index.html","c26cc94442c10756eb1e2bd2c5b9e38a"],["/posts/4f346c5/index.html","d6ec65fc24d570fdf8ad31e05de8e63b"],["/posts/50caf1d4/index.html","a5c90a09be65bf4ee0372c7fa452e23f"],["/posts/51139400/index.html","11b8ec9b0270917c673fd85c948534bf"],["/posts/512c9a09/index.html","40ccb7f8c939ecb8c5f4641e2c02aa72"],["/posts/5205b330/index.html","ed162d19569f46e1c8ff6b1ffe259d07"],["/posts/52d36cab/index.html","ff5b177b94b84b9afcfbc8784a0a4c85"],["/posts/532a083a/index.html","2a54b4d0535553b1c36c6ed2690f1016"],["/posts/537d2c2a/index.html","441a91b2ea9a5b42d2a687928d46178e"],["/posts/54383ba0/index.html","8eee1bf485a0525c5409f79f29e648ca"],["/posts/54667693/index.html","9ff005beec7a249784c708ddfde1f043"],["/posts/5508212c/index.html","3b06bda708f12e37fed18477f655e1e0"],["/posts/571564e5/index.html","44ae8e3449d00c2860e7e23efae44258"],["/posts/57900fe5/index.html","cae7ea68880ca44deaa0cfcaecc85ae0"],["/posts/589a214a/index.html","d38b18c3dd22903387879699251dbb1f"],["/posts/599a2b19/index.html","b2951bf2e85cc3a615d6955bf9164f89"],["/posts/59c05382/index.html","a2ddc99e8eb3f02540321adc0985de16"],["/posts/5a5294c8/index.html","3b06a8c227688a7cd17d8a6fd1f9fe93"],["/posts/5d3da28e/index.html","93e564c1cc9617441a347d09a7d9ea9e"],["/posts/5d3f50d1/index.html","961e177d314ba4a3948ad0d82198bf4d"],["/posts/5ef7ef00/index.html","959fb192b1434dddb0b9e4da9a976633"],["/posts/5f1fa8df/index.html","873cc2f5c46394ffc8a5bfcd1fbd235f"],["/posts/60b5dd06/index.html","d5ee3d4fb0762636b7cf06bd09590390"],["/posts/61477045/index.html","68c4a194bd3532b24a82dd38c8b87a8e"],["/posts/69d79f93/index.html","854c37c85d40b140d9d41d7aee05e455"],["/posts/6b2f046/index.html","8fc7c895f36f7eeba9c348b6c85e243e"],["/posts/6b4610c4/index.html","2fd6ae0c1229d81a2222964791c6550b"],["/posts/6bbf03f0/index.html","29d2e1ecce8637f12b297b780a876883"],["/posts/7000d139/index.html","8c4bbcdb22da15988191115162568a84"],["/posts/72f94093/index.html","df7a7db388a252a8698af3b7daa930ac"],["/posts/7380b71/index.html","8f199dd3850a05437408d9d0bdfb1535"],["/posts/738eee3b/index.html","70c066f0286d1959849781ba2b87f392"],["/posts/73981dbc/index.html","4e44d4996c1d1b721b2027c54d5eaeee"],["/posts/74d60fd9/index.html","3547a4d8650e91cd3f2e90814d35746d"],["/posts/74f5d9a5/index.html","c5acb7ce55fe90763ec85e22efa1bb9b"],["/posts/750f2ce3/index.html","c18ff85b727940b5681487f2fece86e3"],["/posts/75ceb627/index.html","57a6d6a9c6d436f3e33bd172f2fbffad"],["/posts/7725b75a/index.html","2cd35ea8f2ec042573720346d4ae34e1"],["/posts/79ef335/index.html","a4670e223008cdc80d966c25cc3becc3"],["/posts/7bbd3149/index.html","9ff9c5fe4a984acfe24713bd436d852f"],["/posts/7c20e8d5/index.html","18da1d3a792ca8ca6d4a1430025c10d8"],["/posts/7d3ea75e/index.html","82416e77598e13b3635aa6003f5bb48d"],["/posts/7d43958e/index.html","0b1ae742a3ba062a391faa3f0dee6561"],["/posts/807ac7f2/index.html","980dcb657c0cf4df26e8fd5b9d264f72"],["/posts/81738fa0/index.html","b436eea4cd509d3000e61a88aaf4a37c"],["/posts/817c41b4/index.html","5893407bc06d93434885b85e07e6bb9b"],["/posts/84ee8e34/index.html","d656c4382f19e44416cc81d241a4c07b"],["/posts/8837602f/index.html","d32b785fb817b17bae2f49508f575036"],["/posts/89589a03/index.html","1a6953e3105f4735c07ab8620632a149"],["/posts/8bcef008/index.html","3f7a44cf73f0c0870ac9af0f1c10c080"],["/posts/8bf9abeb/index.html","65a195a25e4ff20331f3b0f6df2a65ae"],["/posts/8e5f5686/index.html","b7b19c806ab76b6d5d0188a789cb222a"],["/posts/8fa6b8c7/index.html","711b1f1980f71378062a25b26f979405"],["/posts/9029a3de/index.html","954478d0c9672ee86998d95e8d38de5f"],["/posts/909d9a5d/index.html","ae3923c789256e5266eecaec944c063f"],["/posts/91404b94/index.html","80e3a8b96e9d9550fd90e09c703cc216"],["/posts/932e3747/index.html","396f5f71719d2b42b0a4768b50161fe8"],["/posts/95fc9e6e/index.html","f3f8b3ecb1a4f35fffc6cec1b9fd34be"],["/posts/98e67280/index.html","a663a27519d155989ec4c9e4bc7fa461"],["/posts/9a4d13ef/index.html","7c24d681c8747a147d006fd1807ce011"],["/posts/9afbb889/index.html","43ef388e186a6c821f6ea9589a31aa38"],["/posts/9be63ba/index.html","c620184df75092f439d5f6725279a18f"],["/posts/9d967c90/index.html","898759528e0266952f2356b036cea95f"],["/posts/9eadcdf6/index.html","36a83ecec070460501e75b3594f97f59"],["/posts/9efd76a3/index.html","d665ae69694f262dbdae52a4db250321"],["/posts/9f97db8f/index.html","cfdd2f83381913eed500ae1746be1089"],["/posts/9ffb4388/index.html","93a27f1f009f184a3afd61c7188b20b5"],["/posts/a094d027/index.html","9f20eb369f1fb71ebec4f6c6e5d73509"],["/posts/a27042c6/index.html","8d7ddf253bbd865e5156a2bc989acb40"],["/posts/a29cc732/index.html","9d4dd6f8a14bbcd6d8cfe4663baad8ca"],["/posts/a44a518/index.html","74f7d34e66ba43a0e2ef47615e1c60d2"],["/posts/a4f2a748/index.html","f967e8a91bcb66f740c84428144f1f9b"],["/posts/a7dc32c9/index.html","cca557f108c123f406453160d03d0f05"],["/posts/a7f753ec/index.html","01ed78cdb5e059bfb176ce65131e34ab"],["/posts/a9168bc5/index.html","2539d01ec18dd740deb6d544a8bd37d4"],["/posts/ab176793/index.html","1a602a7dfe92c0819d691e8f5d336ba5"],["/posts/ab34095a/index.html","61c47d37f3323283d47bcd3c83f6849d"],["/posts/ad47c4a5/index.html","d880a91406431a102a1bc858dc4b55b2"],["/posts/ae8f7b74/index.html","084e24953bf0b67e039ee5c8b353be17"],["/posts/af43816b/index.html","a00f292d82a1b98b6ba1446242767f51"],["/posts/af9e049c/index.html","5792f8f3d1ffb48384362836962c178c"],["/posts/b0f1a367/index.html","6616f2bd2135b240a20dadb3f8e41846"],["/posts/b0f98e2c/index.html","e3892e5b26a63339e4965fc9f829fe03"],["/posts/b33131fd/index.html","4f00901ebab791f59ab253cc62845367"],["/posts/b36eb520/index.html","63448e5808e8ce053fdd86c868521014"],["/posts/b542fc02/index.html","06009b3742ed833c8d7c0b286f11fe36"],["/posts/b54eeeb4/index.html","b970a66cfc08745adc4dd226801309b2"],["/posts/b84f3f3c/index.html","fc821a38f3bd841fb5a84f3b1b9dc34e"],["/posts/b94fc207/index.html","e2d5bb76745aa776324838d9a9e17b79"],["/posts/b981a6b4/index.html","11c6de2c5ba82bd1f75ab772ead14d84"],["/posts/bcea326a/index.html","6f3634cc5e1effcb216c843a555a5f1d"],["/posts/beb19e80/index.html","5cc5c98d4312041f2532786a773a0a55"],["/posts/bec490f8/index.html","234a0ff41a785f24deab74f895adde42"],["/posts/bf7bde0e/index.html","1a6572a91b551d4ce3cf035eb5d0a953"],["/posts/c03f17c9/index.html","0c3bc1e7904e396c57ed9f265e04cd34"],["/posts/c35bc572/index.html","5d036498abfbc5a099b78609e1131146"],["/posts/c436016b/index.html","283c06798b417039e1860b46c7317a28"],["/posts/c4efc741/index.html","30771022a22ff57335a015321b8cb956"],["/posts/c5e8a08e/index.html","302c7b379934cbf03076e76c8a99b2c1"],["/posts/c7db1dc0/index.html","c703a1e07ea5aaf352d48694cd992410"],["/posts/c7febeba/index.html","1b66d68e13c8e1c839ea92c211718669"],["/posts/c9c3a06e/index.html","622f937797c50a575517e46f1e0080f3"],["/posts/cc6d2cf2/index.html","8cf78bbcd4497a3f124b59e8029ff2f9"],["/posts/ce48f291/index.html","525a82ceefb7bbc6d5a32f4e48ec1851"],["/posts/cf480faa/index.html","d9dcee0f4aa43d70290c39141d395eac"],["/posts/d090b4d/index.html","e0770e26b874b2339ac3fff03565bbd5"],["/posts/d1995044/index.html","fc63be0b9748222946ebc06ab9e18f4e"],["/posts/d2d34977/index.html","7708cd1623ea55f6187b683e4aa81921"],["/posts/d3647a92/index.html","f74e14b3d4927d3312168aa2c2231077"],["/posts/d3f6b818/index.html","f615542d89011aaff021d7aa15ecbeef"],["/posts/d465029c/index.html","d678158049a5967c0662adceedcc4dba"],["/posts/d9884be2/index.html","c9a518a952feaf19572c01b185ba0d84"],["/posts/da40f433/index.html","a2af77b4abcf8f530c359da2caa7a291"],["/posts/dae71d5f/index.html","6081abeeba3d4b86af1baf0c3d0bfd26"],["/posts/db9fbe47/index.html","ce26f0daef94615dadeca45dfa3a6cbe"],["/posts/dbba997d/index.html","9e6b6f96cc056261fc172fd96a92099f"],["/posts/dc94f8a1/index.html","59330ff3aed2a67b1609f77192a95eec"],["/posts/dfe9b67/index.html","4ca0b22df8139c756cf0cf089cec122b"],["/posts/e0387d80/index.html","c50f5d4509f345fd8a1fe5cf9e445ba5"],["/posts/e356f7b3/index.html","31641340adc5dbe7295aaccccf3213ef"],["/posts/e3acb366/index.html","9eccb5e944d66f32f1b0f63911f4c363"],["/posts/e450354f/index.html","fad52b748c77491a00dfa801b86cc97b"],["/posts/e489223c/index.html","4f1e99cc80b62b8d143e830d2284aac2"],["/posts/e9a8ddd1/index.html","8e738e7ce2d370162ac0116f04346201"],["/posts/ea914c06/index.html","347533d099a82f5aa03eb513099bfbcb"],["/posts/eaa8f31e/index.html","44c26242ce9dafeb50c4d6fb81838789"],["/posts/eac19412/index.html","3f6ffdedb7d2846f29f541d075c4bae7"],["/posts/edfc881f/index.html","250f9ccc755efffcb330396b66b3e1db"],["/posts/eec0bbd1/index.html","c47f45303f1a3bcb1474eb015290b8d6"],["/posts/ef22c7c2/index.html","56f75930bbe5ebd07e0258200a03fd83"],["/posts/ef271825/index.html","164be17991aa843ca050956860d4cc39"],["/posts/f209578c/index.html","a9a1a71d6ef94c2c82aa3f7ad14c95c6"],["/posts/f3e9bea2/index.html","bd2186c1599cbf5bb7605b428b7a9d3b"],["/posts/f67b7122/index.html","0e44cb93dd95ee83c7d252e951facbb6"],["/posts/f7abba28/index.html","3ae4744c130235ae08f4704dc2517b1f"],["/posts/faffd764/index.html","184928df45f7609692c2ee2996e071c6"],["/posts/fb684fb0/index.html","c7780abe653bc193e8f7163247deee4d"],["/posts/fc57199f/index.html","164ee7d46b2cdf11a3ab3528b8fe7f32"],["/posts/fc6e9a7d/index.html","cbd172bb7bbf16d42889e28e57aa5b8d"],["/posts/fc7bc02a/index.html","77c97f29d8d8af0cbd5aa7f320edc41e"],["/posts/fd67c5cb/index.html","ee748011b3826358853ed9713eb1b58a"],["/posts/fdde061e/index.html","73de4e26494d4663184b951e6ca225e1"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","7818868320b28587fbe80dec508980c4"],["/tags/ES6/page/2/index.html","41d10dc0d3b31aa3720eb7adfcd5ec21"],["/tags/FL/index.html","365c171bff27b9d5531842b97b462c1e"],["/tags/HTTP/index.html","d18b323940c6de7719ed908a0be2f532"],["/tags/Hexo/index.html","57dcb098fe83e2efa519ade74f43ec15"],["/tags/Hexo常用命令/index.html","a029476098c3a02848449b93a24bccd7"],["/tags/Nodejs博客实战/index.html","40288f68ba3d1e7e5917dc5367ea0ad8"],["/tags/ajax/index.html","12be4f1fa9b72a5d7982881f30d7c599"],["/tags/ajax/page/2/index.html","56fb891c489299faa009b08936def4b0"],["/tags/curl/index.html","098e780ffbc5743f327af0db2fc144b7"],["/tags/index.html","59abafe57830c8c35e18a623e12330f1"],["/tags/json/index.html","c0973f055e4bf223e0e99166a4b7d069"],["/tags/mongodb/index.html","3f6a59d2201d20dbe47457294eed0b93"],["/tags/nodejs/index.html","9e4506ba29306be0ff45ed58b391e1a4"],["/tags/promise/index.html","33651ba563760a83c6adb99cf813f7ae"],["/tags/中国近代史纲要/index.html","cc35632739931df2d367d77b8267160d"],["/tags/日语/index.html","d582ef091297de1433be1ce930a43940"],["/tags/标签外挂/index.html","57ade8ac1f9b0e6aa70f30d7bbe5fd5e"],["/tags/目录索引/index.html","ef79c4b6bdfa5c665ffde1dced1a3e59"],["/tags/管理经济学/index.html","484fbda693c59808210002fc2e3caa48"],["/tags/考前突击/index.html","ebb29f9bb64802e320ec64c86dd9e47f"],["/tags/考前突击/page/2/index.html","d966d53695f08121c314625707162406"],["/tags/自考/index.html","a7f37bb1a951d78c7ec660d76af16026"],["/tags/计算机网络原理/index.html","1f5eef4eaf41a00f924bde697f862881"],["/tags/运筹学/index.html","d3a8a01635952de11c69024c547af4a8"],["/tags/马克思主义/index.html","c99bdc28f99d084932140a85bb7105bc"],["/webstacks/index.html","b7871e3b51d769a2cd87baad95bc61e4"]];
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




