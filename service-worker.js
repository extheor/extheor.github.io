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

var precacheConfig = [["/404.html","5dd8ed95ae99e0e1e76efe212d330580"],["/about/index.html","3a9caf58121f197149b380cea5f30568"],["/aplayers/index.html","f92dd93b59dc9e5f6e8002005a987ffb"],["/archives/2020/02/index.html","fc72cd4a8b50566763a2a6bc9064d751"],["/archives/2020/02/page/2/index.html","4a73471a3fb58c4e85d1b73bbc10371b"],["/archives/2020/02/page/3/index.html","37c42b932101e24429f190231a372c38"],["/archives/2020/02/page/4/index.html","632a61f3fd7b18da7652629a30896d75"],["/archives/2020/03/index.html","0f8477b6b980b2a2d3a055ee5969b8fc"],["/archives/2020/03/page/2/index.html","9fc21065f3decd8a35722ceb2a7c0abc"],["/archives/2020/03/page/3/index.html","3138f4c11b5da45d623b973b7c9ed7ce"],["/archives/2020/03/page/4/index.html","c98ddc61053d3abfe65114d6d1721690"],["/archives/2020/03/page/5/index.html","e52c34377503dcc5393479a8f5a6d11d"],["/archives/2020/03/page/6/index.html","af202c468605a448836dc08a7647c0aa"],["/archives/2020/03/page/7/index.html","83c57362a5cf7682fef77254bb07d3a3"],["/archives/2020/03/page/8/index.html","d395166854c1b10848d4f70e79581303"],["/archives/2020/04/index.html","62a0165c9a7b3c5d403ce99333d6dfd8"],["/archives/2020/04/page/2/index.html","0f3f72f261888d1190ef373fb6f22640"],["/archives/2020/04/page/3/index.html","98403e19c2ed6b6dab2e7bec7fe72566"],["/archives/2020/04/page/4/index.html","c521bfe2d7478af810a7ce30fcaa202a"],["/archives/2020/05/index.html","fc9878d219873dd4b172a63a28293ce6"],["/archives/2020/07/index.html","dda1d4abe399371f61bc918490666b79"],["/archives/2020/07/page/2/index.html","218474d1f09dd80e54496c41092d11ce"],["/archives/2020/08/index.html","f7394f4ad280c73bf76611d5f8758422"],["/archives/2020/08/page/2/index.html","b13d884d001d5d551be7e711f5b1f10a"],["/archives/2020/09/index.html","758b21037d711008372e2a94a1e1358b"],["/archives/2020/09/page/2/index.html","c0e5fef4e75d4a55eabf5ceabc30a7f4"],["/archives/2020/09/page/3/index.html","03e64096281a98616dd72af85ce53bdc"],["/archives/2020/10/index.html","2c979598f499397cbb17eb92116b3e42"],["/archives/2020/10/page/2/index.html","d5ea13d15b649ee5e467181735ad37ed"],["/archives/2020/11/index.html","b6a496ba739ecb7e4dc817a64244d438"],["/archives/2020/11/page/2/index.html","cb7f7a9e39d7afa1a1ec5f4aecc18016"],["/archives/2020/11/page/3/index.html","0a7cd9067d5fdfced34b191e4fe8fd98"],["/archives/2020/12/index.html","b68fcb7ff2e10478720e40d298ba6714"],["/archives/2020/index.html","ae09f54f9260301f0d38668ac0af42cd"],["/archives/2020/page/10/index.html","b1f55e3063b03f6ce3839abc7438c69d"],["/archives/2020/page/11/index.html","b8a1979cb1f62abc5ef3c53afb043c09"],["/archives/2020/page/12/index.html","37e9b683526fc6d74c39388b2775133c"],["/archives/2020/page/13/index.html","99c1ad64bddef9ea003f438121d27f3e"],["/archives/2020/page/14/index.html","f26a8c5c7f1401adeadc747e6b0a0b3a"],["/archives/2020/page/15/index.html","60f0986e53ed3300f712dd495770e1ee"],["/archives/2020/page/16/index.html","fb2af2592b70f57835bc9c101dae5622"],["/archives/2020/page/17/index.html","79da2ae622aa0dd0d03def7dc856a834"],["/archives/2020/page/18/index.html","4250f50ee96b48326e2af6cd05cb4c13"],["/archives/2020/page/19/index.html","b7b395982818bd013abdaa82ebdf24a7"],["/archives/2020/page/2/index.html","abf5e4c4db50adb89c8a0b4e87ab32e9"],["/archives/2020/page/20/index.html","9097720e9c2839f784ba370da2f4a90c"],["/archives/2020/page/21/index.html","db8958f11024b7eaa3e27819e676ae6d"],["/archives/2020/page/22/index.html","bf95d7c708616ee862619959c6c6b91f"],["/archives/2020/page/23/index.html","a32c11e503bdd0e8dc5b8b7df9007232"],["/archives/2020/page/24/index.html","6e604a3b2aec2dbf2c300e9d024b0c57"],["/archives/2020/page/25/index.html","40b5f4b879f468e0bb25e1744ac2baf6"],["/archives/2020/page/3/index.html","a773aba70f6799be1ba98ba7ad56c7a3"],["/archives/2020/page/4/index.html","cf4fed26172927dcfc8b81accb16ec03"],["/archives/2020/page/5/index.html","8559eb33ff55a3d78a369de46cf3fe66"],["/archives/2020/page/6/index.html","38b3970dd6c526b46b3346203fbfaae8"],["/archives/2020/page/7/index.html","85191ea67f3f223a061d2a814d86f16e"],["/archives/2020/page/8/index.html","10527a472c89358db9af47f3864b04ac"],["/archives/2020/page/9/index.html","9f756415fb79edeb6916919495726789"],["/archives/index.html","c4bc90dc8d7bef0ca220098b8f186ad6"],["/archives/page/10/index.html","40104ce20998b93066487f1bf63292de"],["/archives/page/11/index.html","d26b5841e1c951e99d38cea106e8a1d6"],["/archives/page/12/index.html","86d2e0606845ecd162b3ce62f04f1c99"],["/archives/page/13/index.html","44f5134aca5c76beb1b0a9983b3290b9"],["/archives/page/14/index.html","569f906c1d6a212fe6b0ae5aa8074ac4"],["/archives/page/15/index.html","96537515f2ee502c3a6747b8656da390"],["/archives/page/16/index.html","4d6721cbd66e4c21de247b96c8465b47"],["/archives/page/17/index.html","81be2305f9c91546d16d874ca7964e3e"],["/archives/page/18/index.html","271e413c38615f52c88393e811deb118"],["/archives/page/19/index.html","9b20b311fe5e6be0099fdec116d4b7bb"],["/archives/page/2/index.html","8fe5a45f478aaee1e43cfa3e0e911937"],["/archives/page/20/index.html","8c270c1ab4dfd1664873dbf8a5a4370e"],["/archives/page/21/index.html","30ca72e82710c6eb923f11896462abfb"],["/archives/page/22/index.html","531768aa081a46ada9cdcf082729114e"],["/archives/page/23/index.html","a5edfe42353a31342007aa154f7df75f"],["/archives/page/24/index.html","7b61e094b5ce957b7222de7a16200c40"],["/archives/page/25/index.html","55e5045649d49f07ef3ecad83b464a53"],["/archives/page/3/index.html","4b5324531415f7634f67b33b89f0a95d"],["/archives/page/4/index.html","e9fb94f9073eb9858234d50f0bfac5ea"],["/archives/page/5/index.html","295c1a37738182359227362a366e80fa"],["/archives/page/6/index.html","983bdc6263a882fe3e5009bda8d23663"],["/archives/page/7/index.html","2a0fc443cf21bf9a4b0b3a3d4aa57b3b"],["/archives/page/8/index.html","4c18483d0d3cb6c433b7511841ddb930"],["/archives/page/9/index.html","98a376a6c2dfc2e1017561de5a0ff8f4"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","cfd0528f6816b4c43efefa65b03b9ff9"],["/categories/Ajax/index.html","fa4c83a20f1d1ad797a0825df5703153"],["/categories/Ajax/page/2/index.html","6085f1d7eb4bb37fd9acec0b59d53cdd"],["/categories/ES6/index.html","0f18a65262d05137488238c94e2b001f"],["/categories/ES6/page/2/index.html","b9a9d6152b4f6ec5d091c41d895896a7"],["/categories/FL/index.html","69fda72f9d0550541ade31fa0de64df7"],["/categories/HTTP/index.html","84f4ed2a32ea3e3db1416de57b6197bc"],["/categories/Hexo/index.html","f37f1aa3aaa9572da6d1721f992f8b61"],["/categories/Hexo/标签外挂/index.html","dec8193cd8723503c9d9117f8308c4a2"],["/categories/Hexo常用命令/index.html","02fad3573861a7b5e5a30adaf1dd24dd"],["/categories/JSON/index.html","3bd14b5fa8e52cbb16452bb6693e31a8"],["/categories/MongoDB/index.html","0fcbe6465a35cf029edf92f5f80488d7"],["/categories/Nodejs/index.html","81b79cc041546e55f48dbe29036341b3"],["/categories/Nodejs博客实战/index.html","116cf33b0b1e670dc33452f4669fcded"],["/categories/React/index.html","ef127c304da9714e7fb333747b74920a"],["/categories/Vue/index.html","3b75f39ee9a75f8dbc6e00f8e1b0ad9b"],["/categories/Vue/page/2/index.html","7fd4eaf6a11519aacb88add8a5a0020e"],["/categories/Vue/page/3/index.html","bcbaab538a17aa236234c4307a55e86b"],["/categories/index.html","1853956e23c6ab6cb704a69795b7562b"],["/categories/promise/index.html","790164b403ee71e5582e51927295fdb1"],["/categories/日语/index.html","42eb8a338b1d78759de3bf92eec60dea"],["/categories/移动端开发/index.html","550bd92e7b8ca76d7956ff1d8e4fcafb"],["/categories/自学考试/index.html","51ad60e398ea47bc9e583d32e274fccc"],["/categories/自学考试/page/2/index.html","81ba83e437812ac8c2c4ffdd2a0edfc4"],["/categories/自学考试/中国近代史纲要/index.html","3968aec457ce05be8b2b0aeba5d7a55e"],["/categories/自学考试/管理经济学/index.html","ed090a2a8a8f813c0ec5422406aac891"],["/categories/自学考试/考前突击/index.html","cffb99daa738d2b923a07a20ebd4db2b"],["/categories/自学考试/考前突击/page/2/index.html","1b33afc5c808921ec22cd97f325d2eb3"],["/categories/自学考试/计算机网络原理/index.html","3abdcc178047bec2491571ab6f799478"],["/categories/自学考试/运筹学/index.html","a806f837752c65c63fa21e44a7519237"],["/categories/自学考试/马克思主义/index.html","9610c4fb864298cc379a62b44d360807"],["/categories/车技/index.html","15daec4aec95b34dda6d16a11d86910d"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/favicon.png","831793361f36a5524d7c2c8e5a5e791c"],["/images/flags/flag-cn.png","aec786dd377f7498121b2b989285de13"],["/images/flags/flag-us.png","4e484b374a934ec7a0c318fa3039a18f"],["/images/logo-collapsed@2x.png","5a7921ae91c9497d9c479db2ed247271"],["/images/logo@2x.png","7dff419a181fc2ee0d21e7759b9fdff5"],["/images/logo_dark@2x.png","7618f56d3783393049d5486b34c83f1b"],["/images/logos/github.png","3ca867b4d49b00409911b0e7d221993d"],["/images/logos/myblog.png","c65b405af280672770a5e68dbc602608"],["/images/off_on.png","1bdd36870ded5c5d39e24fcdc65b0cb5"],["/images/search_icon.png","73b5f23fe9023e21c9d90b25d73f3881"],["/images/webstack_banner_cn.png","49008f34a922e970792cacb5d17b51a0"],["/images/webstack_icon_producthunt.png","2ba473dc05e96515bb57a7bb00c4d703"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","3a7ddb519bcb68f50d0660343c451aa6"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","b8d29fa973b7f0ac22a477419f29220b"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","3b19450cd2a91bdab5ac07ea7e1efe3e"],["/page/11/index.html","afb455d01a52cc16d2b847de5dafcae0"],["/page/12/index.html","259a829709b2bdb03169c8beac940446"],["/page/2/index.html","3d65c19fae145592e5c1c9c9e8c79a80"],["/page/3/index.html","e913be1cb726f461c06c30e890d355b0"],["/page/4/index.html","4f7f9b34afb663bf3e585ce60f5da90a"],["/page/5/index.html","e35bdb22a52ee80cb321f8f21b2fa5fc"],["/page/6/index.html","eb75f85ff92db2d5ab481b6c710a5e5e"],["/page/7/index.html","e1cb81da009977a883f64af24525cd70"],["/page/8/index.html","08b23d92c6c4a0dfc7abeec684052d26"],["/page/9/index.html","44b1d277a31131aa615a4ef4b92d486f"],["/posts/10812f0/index.html","daa18eb2a0a716825f1bb5001cd99108"],["/posts/126b275/index.html","76e45dca377140ef28a284e6bb14e911"],["/posts/12d95a5e/index.html","ebd5a4d59493f55158d78c170fac5d14"],["/posts/1367417b/index.html","a286fae6ccac27d5005892d84a2226ca"],["/posts/13886e3f/index.html","dc5dbccc5d3605128edfc43b30acf475"],["/posts/145193a5/index.html","6102eacbdd413888c270fdf19d593a23"],["/posts/149dde25/index.html","adadec8025c343656d27939a5d0c152e"],["/posts/152fa65b/index.html","3792b0c346e2e6f5f406ef519faf9dd0"],["/posts/169e7dda/index.html","e62f0b214cd4092c18b02fbaab3d6eb5"],["/posts/1875100e/index.html","ad2e525b4ba0af8f23049d09eda87ae6"],["/posts/18eaef7d/index.html","af9ecaea88bfcdc072ec14ce44dcfa22"],["/posts/1a0bc7b7/index.html","74728f5e1beb54c8507fea278734cbe3"],["/posts/1a20a057/index.html","6275cd21acbeb4bd538cb38e686d2d5c"],["/posts/1a998be6/index.html","ec4f50b5f994a5eb5f6fac649cb87fbe"],["/posts/1bffbd20/index.html","62504c243f07594fc1f26e0400750014"],["/posts/1c5a0485/index.html","5964e39abab6cc36eb36f20f5c1f31f1"],["/posts/1e638f78/index.html","92ee96d5c3c6daf06056cffc270075ea"],["/posts/1e967920/index.html","94e23804f4159a30284166dbd1dcdbae"],["/posts/1fb53120/index.html","bce45320dae55f8bb42db1f0326bae57"],["/posts/21466e86/index.html","2a3b1b82a12ac9ebf3475f061ddc12a4"],["/posts/21abcf1a/index.html","26eaf48deb07048bb9b0085ec08ec864"],["/posts/21c250b1/index.html","3bf182def44eaa8a696c292a7363c86b"],["/posts/2287cc/index.html","a3e6b6e757003639230f4b4fc56291f4"],["/posts/235acbda/index.html","953a1b04b59105a31b82cfe467c05864"],["/posts/236bfea3/index.html","455e26eabc4f07354368a5c86c7bd8dd"],["/posts/24caea6b/index.html","e41adcb5699ae16de3e735e8e7165d0f"],["/posts/25d45c3d/index.html","4f9c04b7191a1a26dc8d030ea81c9e90"],["/posts/262baa9f/index.html","aaaf0794a79ded94a6b582d11ef9822c"],["/posts/26d2f87f/index.html","8a4f0ca394315d5016f7ff91c2f91a37"],["/posts/26f82f65/index.html","9585c4ba2423de6ef735cbcc585faad6"],["/posts/27cdc142/index.html","e270c5a71022e2240c707c062186a3e4"],["/posts/2895c4bb/index.html","4427d829a21af2dcff8f30e3b60309f9"],["/posts/28987ff3/index.html","17e2d9a0932480b9657d884cb7e7f35d"],["/posts/298cfeed/index.html","471acdbe68870a6d97b5e362d3e63962"],["/posts/29f0df96/index.html","554c2ae62ef5fc2c3efea9684d6ad423"],["/posts/2a1d2b6f/index.html","416a53119a12a3f014a35da6dca31084"],["/posts/2a386047/index.html","81da2b638c02a2dcc65949f5717221e4"],["/posts/2b2f44ba/index.html","e8d617e0ebd8d7d8053413e0f943a388"],["/posts/2b770baf/index.html","42f401f36a5aec6d18b8c5dc68d2c428"],["/posts/2cda4a8/index.html","8d21195541c06bc46b0be95523a6d49c"],["/posts/2d020832/index.html","13888b3df29071474a430a129a3f0558"],["/posts/2d6d3bd/index.html","53b646d456b5d298f936a8c773693b03"],["/posts/2e0c129d/index.html","18a1ead6e2f8d909bef3c4d8dd547f4c"],["/posts/2e7563a0/index.html","90b1a4cc4d8f54c69330d3f1d9289437"],["/posts/2e7b8d69/index.html","077e6bb27941130349e3a710b9c397ee"],["/posts/2f28d14b/index.html","402dd9193cd9e20ac0132cd28ccffbb3"],["/posts/2f6e1383/index.html","6b4d7c860120cb519ca839ac3e222a16"],["/posts/30bfd1cf/index.html","aec2857733e492262cf012a2e2c7ffce"],["/posts/3270cf84/index.html","a086ae265e2ce8439ec96badb58d503c"],["/posts/33235106/index.html","01eee749da7cddbbff96f48e01246373"],["/posts/344e951f/index.html","58ded0abebdd6cae80db87396380f70a"],["/posts/35e2bcf6/index.html","9a63144d5f2a1982a47d6aa1c1f5cdb9"],["/posts/365e96c5/index.html","90d425c9e424e809b11151986fb02101"],["/posts/36e331e3/index.html","5e8ff5d90e452f5ebe2a9328fcc26712"],["/posts/372df90a/index.html","aa7210243122831ea7fc7b2d5f170a29"],["/posts/37c547df/index.html","a786677b2b631ac235f3fa4f2021e4a9"],["/posts/380dfa6c/index.html","061e10d432883a042940e775998668bf"],["/posts/3859c98f/index.html","bf84c493f2ee5af22350ad26c452251f"],["/posts/387564ca/index.html","05c1bb837b10dd9efca891e18a587bcf"],["/posts/38a88481/index.html","8e37f237cb877a3611facdc9c6a68806"],["/posts/3914bfed/index.html","22412c80cd01ac3183ca8bdc5319fa69"],["/posts/3b56780c/index.html","d9678950b3cdd5207d27e849f03a5fa4"],["/posts/3d1ef1fa/index.html","fed6546341ba894bef49a496a83bb1bb"],["/posts/3e4bb613/index.html","1bb4dbd116d801a0761f83f7567c1a1a"],["/posts/3f2e933/index.html","297372cfa01e9be7d90c02d33a139118"],["/posts/3f6e5f9e/index.html","47282167597643b6270b22af1bb1a779"],["/posts/4349a589/index.html","9a4b4773af9542a5fdc2d7e61b4a0c75"],["/posts/44246190/index.html","f6e877d1f5ace74ccd5a9d77b6e37be6"],["/posts/456550f/index.html","6686cb49d0221e59e418e10cd1f7e299"],["/posts/45fe8d36/index.html","7001fb6a7de18fa5ed7f245f3bcc4c75"],["/posts/470ac03d/index.html","8e543049cde865fee777b36b19a443ca"],["/posts/470d45ef/index.html","da185084f71f0d57763ef984faafcec4"],["/posts/4894629c/index.html","253ac9e0529f5b6bca441765260808e0"],["/posts/49249ac9/index.html","609824d551f8dd3f0e82df89790e1c56"],["/posts/49f2d2a/index.html","09a79177ca50c84680d00d6d0fce5fac"],["/posts/4a39edc3/index.html","a32c9c2f6313363e916114f9eb19ed5f"],["/posts/4e6d4eb4/index.html","b9b53fa403c3a68e141521ee59df730f"],["/posts/4f346c5/index.html","af275c0c3eb830fd047d3d7d9a6977d5"],["/posts/50caf1d4/index.html","d24c1105e5e850f94ba1eed7d5fba308"],["/posts/51139400/index.html","d9e0d2c6b9b6fcd6f1473a1c61a56d80"],["/posts/512c9a09/index.html","16b9d8fa93f8f573d98adb739e8bad4b"],["/posts/5205b330/index.html","372ecf2033db833d841eea3d4856b4c9"],["/posts/52d36cab/index.html","e10562b3179e33fa8116a86cff809843"],["/posts/532a083a/index.html","f30ba6f6591a43763eec1e65295d1c44"],["/posts/537d2c2a/index.html","4f169f2b24ff9a6a7fcdc251bd9deaf7"],["/posts/54383ba0/index.html","b6b85e6dd9f69e022e3ae6ad4290b286"],["/posts/54667693/index.html","bc3afca21bf8d2a8b14c9843f452eaed"],["/posts/54fbed4a/index.html","3b99df79bb6a70214da6fb7ebb59f4c1"],["/posts/5508212c/index.html","2c29fcd5f474bb84cdba2fa3794515d9"],["/posts/56760226/index.html","6f2e65d3f5b50f30978d692cc244eff7"],["/posts/571564e5/index.html","77a70eb2298cc4b944c92b3285b2d46c"],["/posts/57900fe5/index.html","77a32982125304e2d584fa1cb593a685"],["/posts/585ba415/index.html","0df0c8d227c3a38c2813f2bf6675dbca"],["/posts/589a214a/index.html","85248e7ca2ea5b479c30435de5c96985"],["/posts/599a2b19/index.html","fa3f09b511ccc0fe08c2b7bc7f3c4040"],["/posts/59c05382/index.html","a1da41cdc5fd3f920bb40bf6ca8266b1"],["/posts/5a5294c8/index.html","75636b92dae50b2e30281fb369c69bae"],["/posts/5d3da28e/index.html","60738e4ec1830a9be8368e095917d974"],["/posts/5d3f50d1/index.html","ce3dc18fb6e74c0f20d7899a66445803"],["/posts/5ef7ef00/index.html","cbf496951430717e8e341d5df0a9d369"],["/posts/5f1fa8df/index.html","2e3a7ac932ac1412410d52b48ea71a13"],["/posts/5fba84c3/index.html","9bf5e1037a85f2265b8e991f3bc0f7ae"],["/posts/607fa29/index.html","d0e21e4683b86370819a85f4d9709f4c"],["/posts/60b5dd06/index.html","916e99ef35cd422fd234bd52b3c17c0e"],["/posts/61057c88/index.html","2cbab5f47152deeda037d0cd9cb962c4"],["/posts/61477045/index.html","42b657fe4563ca30c640a9230c1a6790"],["/posts/664423f6/index.html","99ae56cfd50f252acf6cc9ae9a00e973"],["/posts/69d79f93/index.html","6a080312a7c5d739378e7f9f5681a5c2"],["/posts/6b2f046/index.html","6d74f972fcda475f15a4572a69fb9b6b"],["/posts/6b4610c4/index.html","6074338bfa777b802c1b8c7b03e1d26d"],["/posts/6bbf03f0/index.html","bb605f9270cef24179cf43b6262c33d6"],["/posts/6e7b67e4/index.html","cf42f318497374560b1de2cdb9b70786"],["/posts/7000d139/index.html","98b6f423e6817d587cf43b03e6687eb2"],["/posts/72f94093/index.html","6781a97a0e09e35f75f88d90164661cc"],["/posts/7380b71/index.html","eb611f85fd54c3d71109772f9439ac06"],["/posts/738eee3b/index.html","7ae29935a76f949dd48dfb9e21dcbfde"],["/posts/73981dbc/index.html","e36ac11ff51a7692d724ab400565b526"],["/posts/74d60fd9/index.html","f4c2eabdbcf5aa5fe6d984dd00cb9e69"],["/posts/74f5d9a5/index.html","d46fe5d51f0d812b21a51fa7bc650e52"],["/posts/750f2ce3/index.html","ab35b35ced1aa1b1d94d000333b10649"],["/posts/75ceb627/index.html","0afd4ad967eb3df4fc7655037e59f490"],["/posts/7725b75a/index.html","2a4eb6de7e603d58172146b019b1ad81"],["/posts/79dfcc1f/index.html","56ac28800a5d47b4cf153fd7b608a780"],["/posts/79ef335/index.html","4f9a3ce5fa83f8fdafeef6d6022037f4"],["/posts/7a228db4/index.html","baa570e3339d04b7c6ca97eb42ad40cb"],["/posts/7bbd3149/index.html","eeae136efdd6916456fa0fa84e3b9957"],["/posts/7c20e8d5/index.html","5a701aefe997bdb515af7bd673ea8ccd"],["/posts/7d3ea75e/index.html","aaa8b94a4262c26f4d030d97f950dd36"],["/posts/7d43958e/index.html","1af264ee0baef9eee25d7578e86250e4"],["/posts/807ac7f2/index.html","973e747e9e388ef98288da32497a3b49"],["/posts/81738fa0/index.html","af05e89667372f4e8193e436bb689429"],["/posts/817c41b4/index.html","45a675a8e72ab51c21490d925490b91b"],["/posts/83f13096/index.html","8409eadbdbf78a6724e9eb4e37b4b400"],["/posts/84ee8e34/index.html","59718890c15efd62c0e1c57649d6db5a"],["/posts/854d07da/index.html","5bd5cc5c9612f47d8b848c9d4e2d41ef"],["/posts/86cad295/index.html","fafac2b9d231cdd9b8ed4faa499d1050"],["/posts/8833154b/index.html","4ae24cd12aceb03f91dd4d52a30d1832"],["/posts/8837602f/index.html","ac3739de26f4edcd72fc326dc4e77a19"],["/posts/89589a03/index.html","8d5717cfb1f031c01e27a05636c3624b"],["/posts/8bcef008/index.html","39b5cbd5888a2847ffaaeba2abe33ccd"],["/posts/8bf9abeb/index.html","18174a4c0b9e1b6048f3a518b654a8b5"],["/posts/8e5f5686/index.html","8654dbc3d043b8b846018594a9e42b32"],["/posts/8fa6b8c7/index.html","64f706947c85badb5073094571de5d7d"],["/posts/9029a3de/index.html","d8bfaa1e188b800998c776772eceee58"],["/posts/909d9a5d/index.html","951bc9843fe24c2e9a828c60effc32da"],["/posts/91404b94/index.html","07917f00197d7096c1167711a5c7bcd2"],["/posts/932e3747/index.html","016e935ad4643af5e3fc1434da95710e"],["/posts/95fc9e6e/index.html","b0ac3e8c11205a3f6b113dfb8f26b647"],["/posts/98e67280/index.html","66b0f430cf88332db6c55753804777ba"],["/posts/9a4d13ef/index.html","4b6b92fbf3a552387eeb1b8483f986b2"],["/posts/9afbb889/index.html","5608ab8ffdce43906a2e25ec7fa3d3d3"],["/posts/9b95a057/index.html","11918555312b0a67bb2ced73b8144c63"],["/posts/9be63ba/index.html","894e2a3144899b502c30b6030cfbd89d"],["/posts/9d967c90/index.html","12216773432ab88ccafdd81d47758885"],["/posts/9eadcdf6/index.html","c7a11d18207e00f638d1b5aeb2385973"],["/posts/9efd76a3/index.html","abd5c1aac053429ffa5053f5b4ef851f"],["/posts/9f97db8f/index.html","23647668819280a1d2b7765d7d14441d"],["/posts/9fee4710/index.html","ca17e126bce662501a3e7eede7544102"],["/posts/9ffb4388/index.html","61b0a757ff3b875960ae91ff263b488a"],["/posts/a04e2d29/index.html","108d3102b2b95a5afcec4b89c11c8968"],["/posts/a094d027/index.html","bfc584161e60d9a441275cc0235bd28d"],["/posts/a27042c6/index.html","bafbc0d24af9292213dfad5912d40cca"],["/posts/a29cc732/index.html","074b8eb078b27da7e0780e0ed80f55b0"],["/posts/a44a518/index.html","e8a0a53edebbf4542e5edd09cea46c59"],["/posts/a4f2a748/index.html","340fc34a85d8a2fc98a575bfaacb9fa7"],["/posts/a7dc32c9/index.html","a72474e4738c28ac892948c2c5bf518a"],["/posts/a7f753ec/index.html","c8d2f9dc83b63b06a2b2a9159b5ef358"],["/posts/a9168bc5/index.html","b49a029415e60de69eba644ef384e2dd"],["/posts/ab176793/index.html","e2b5864f0fb024432f6b5e78eef0c09f"],["/posts/ab34095a/index.html","feae5c45da59c88cd6fd8e8573b6d4d8"],["/posts/ad47c4a5/index.html","f120fd892753ff0deb8074f820107a62"],["/posts/ae8f7b74/index.html","2a10a00c0eca507e1b2d6539097da099"],["/posts/af43816b/index.html","5613d9b4feaa40659404fced1c13a0e5"],["/posts/af4880c3/index.html","6aa727157fbfed5960e23928207889d1"],["/posts/af9e049c/index.html","55ac379f17f684dc980695074e034644"],["/posts/b0f1a367/index.html","fd07521af30e976f9b67219056e65b35"],["/posts/b0f98e2c/index.html","2359c634dc40036ac500e468263ce8bc"],["/posts/b33131fd/index.html","39d13e63fa44276187d6f56781ab95b0"],["/posts/b36eb520/index.html","fcfbb7163c5d6090bb882ccc90c00c4b"],["/posts/b542fc02/index.html","365d1da28419ce6af9f5cacb088f4c95"],["/posts/b54eeeb4/index.html","dca6111cb1017c8cd11885b7504b8644"],["/posts/b84f3f3c/index.html","ecab560348f90a2d1d7eb5a27b999c05"],["/posts/b9325cf5/index.html","82eca593fb32f9fb316ce2d2d4b93b78"],["/posts/b94fc207/index.html","077b054ee1da1089553b3a93c4a20d01"],["/posts/b981a6b4/index.html","5d31d6b951a9ac161243ed422e56df30"],["/posts/bcea326a/index.html","ee5cfbfdef8ac71457fcfaddb90c50f7"],["/posts/beb19e80/index.html","d8b9170722df633bb537b1f4b73d454e"],["/posts/bec490f8/index.html","e3df5086e3f906a0318958d86e776aca"],["/posts/bf7bde0e/index.html","ddae93ff48112c621f00ba6a62e3844e"],["/posts/c03f17c9/index.html","37b1279c965b648efafc12e3854a146b"],["/posts/c14b94dd/index.html","7374c3b459c959152e0da9117cbb800a"],["/posts/c35bc572/index.html","46a2ab9503764243a1f4a541cac8f32b"],["/posts/c436016b/index.html","e5b0e8f16180960a7999eaaab7dd2103"],["/posts/c4efc741/index.html","aceeccebb9be328065bb3071a34519ab"],["/posts/c5e8a08e/index.html","d456146e0b4995b185feff3f37c4c65e"],["/posts/c7646f1a/index.html","087f556829c1af8aa5d9ab9970722983"],["/posts/c7db1dc0/index.html","669919c3dd187de0b75853d89a283d20"],["/posts/c7febeba/index.html","26d331356d0baf54eca8624202f662ee"],["/posts/c9c3a06e/index.html","ddb062f2109a600effa5e88ef2b6d1f7"],["/posts/ca657192/index.html","cef65735107866d37e79d74141377c2f"],["/posts/cc6d2cf2/index.html","57291cbdddaebc4a540aa1695f9668bb"],["/posts/ce48f291/index.html","6d4530676505c88aec22dced5c56337a"],["/posts/cf480faa/index.html","3b47ec58d6da7bd644c1a0f8eda3b71b"],["/posts/d090b4d/index.html","dda4112f87fffab415a341abffa52b48"],["/posts/d1995044/index.html","5d0e381c7064f762d337776e76fc1b97"],["/posts/d2d34977/index.html","552ce9a48e41596fcf7e694b21bbd2fb"],["/posts/d3647a92/index.html","7bc87b67725033a98d927931b6fd49f8"],["/posts/d3f6b818/index.html","11a8fd35687b37c8493ba4ac9cd9dff6"],["/posts/d465029c/index.html","405fb9dfaa5d00e00b526d46dcee65db"],["/posts/d9884be2/index.html","04b218def7b7acea384c399f6130f01a"],["/posts/da40f433/index.html","f3e0160e2fa4f1620b073a5e34440a11"],["/posts/dae71d5f/index.html","3a5e18a06b8adfc72d2fda6e7eea9bf1"],["/posts/db9fbe47/index.html","6899ef2a51cb791020d29a81e4fbe2eb"],["/posts/dbba997d/index.html","0ed7d4f7fb8e0b07be72eba4d990880d"],["/posts/dc94f8a1/index.html","06c0168ae48eaa2d3d8420a31165f873"],["/posts/dfe9b67/index.html","c023fa832d6b56d1b53daf06c3f33520"],["/posts/e0387d80/index.html","8225a012ca73f4ca775661acb8d1e5c9"],["/posts/e356f7b3/index.html","0809273a1161c529f8af995f6fbc06c9"],["/posts/e3acb366/index.html","64a4ea71ec9882878352baf29a126d3c"],["/posts/e450354f/index.html","19cc756ece977cfb2cce1ccbb981e362"],["/posts/e489223c/index.html","9ee1d48b0cfc0ae0db7dada02f8c9e77"],["/posts/e9a8ddd1/index.html","5b9a313fa6a84c3f8651c79314afe4a5"],["/posts/ea914c06/index.html","09a150e267763924a5adadb6e65fef2c"],["/posts/eaa8f31e/index.html","a7082d3210a049604d557cd356c06a1d"],["/posts/eac19412/index.html","cc0946d9f544576d5cbfe8481f1ac6af"],["/posts/eb0c9e8/index.html","9571135f351cbbdb4970667aea5a9fee"],["/posts/ebe408b3/index.html","05cf45db32e9e7ec2925677b06284d06"],["/posts/edfc881f/index.html","9c908c7f8d7be2923e6d5cfada9e17b5"],["/posts/eec0bbd1/index.html","21b94227eb8f0a4636597fc9ef5bd4b6"],["/posts/ef22c7c2/index.html","178fe66c43c4e7ac498b7f1800f04e77"],["/posts/ef271825/index.html","4b544d116748c72572ce558aed580916"],["/posts/f209578c/index.html","a64df6745cbc63c0504142635dfdfcac"],["/posts/f3e9bea2/index.html","86d5cc7e8889c29a165faf9e416ac851"],["/posts/f67b7122/index.html","ac7d67ec845844924f53bcf215b91885"],["/posts/f7abba28/index.html","9374e5ede4acb0210449fad369a4cf22"],["/posts/f7bf33eb/index.html","43b079e425f34d7a2fe16c179ab228b1"],["/posts/faffd764/index.html","4b7f7b616a74794ad7e3cafb8f12e357"],["/posts/fb684fb0/index.html","69faca5b35b68893b3c8762d19d33908"],["/posts/fc57199f/index.html","02ea9d8ba41c9e445241bea5df64ce15"],["/posts/fc6e9a7d/index.html","d42a07112efdc0af1295744bc69860cd"],["/posts/fc7bc02a/index.html","4fecd5fb563d7dbe28ac8db5ff28719f"],["/posts/fd67c5cb/index.html","34a7e71bacc02260f8a6ae5df5913bec"],["/posts/fdde061e/index.html","a2b8158acaac2911c0f9a8b7c91772d6"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","2b8f8936fbd3620eaaca6f887f6526bb"],["/tags/ES6/page/2/index.html","4d86892a5379800ef5e1790569ed7caa"],["/tags/FL/index.html","c203ffe6924bd25d7260c5f007e91571"],["/tags/HTTP/index.html","0894e6be5989982dba71917b64dafeae"],["/tags/Hexo/index.html","45cceafe0f6be7b4b1e20f7c7acebe6c"],["/tags/Hexo常用命令/index.html","ffd69e1986c8d18c31ca38cb9d69a8bd"],["/tags/Nodejs博客实战/index.html","7150495f37947ae6e331407a260c68cd"],["/tags/React/index.html","e9b392d9ce13bf81fd8f53b7215d89f4"],["/tags/Vue/index.html","4d9f8c14d4b6623fc5703575acf2e255"],["/tags/Vue/page/2/index.html","ef12c2826c678c811004a8eebc863a77"],["/tags/Vue/page/3/index.html","fbfb359d79666390e892fbcba5333dda"],["/tags/ajax/index.html","be4746f6964b91f2e55dd66ec76be7a6"],["/tags/ajax/page/2/index.html","527600376564d7e481b209f8c099fb6b"],["/tags/curl/index.html","19d7bd09070ef13b0653e44367afb342"],["/tags/index.html","68222aff7424daddea029575313d7d89"],["/tags/json/index.html","9af61227296f83f142cff3ba95fb28a3"],["/tags/mongodb/index.html","17c1c015f32d4bd8d2b94c545df8dd73"],["/tags/nodejs/index.html","4360ebca586c4c63eee0ac0f8945837a"],["/tags/promise/index.html","53aff44546190395efffafd4f66afdc1"],["/tags/中国近代史纲要/index.html","0bbb015dc905aac25d55b46972f9a540"],["/tags/日语/index.html","6d748755434bee9527b5b5bcaaffb1c3"],["/tags/标签外挂/index.html","7549feabfae5c07b40e6af957bd7ae42"],["/tags/目录索引/index.html","62dcbbeca1c689694cf190eb70990e3b"],["/tags/移动端开发/index.html","f3079491a55e01db6fc1a18e4c929ab2"],["/tags/管理经济学/index.html","1552fbeea069b4776fe708b3672cc5c7"],["/tags/考前突击/index.html","5119e858dcfe0414b9a31fc4ca20251d"],["/tags/考前突击/page/2/index.html","12a4a0c32ed9238b7389e49c98d7663f"],["/tags/自考/index.html","c1fe0108ecfcfd6f0795ebb3f0d05584"],["/tags/计算机网络原理/index.html","e7e320e0bc81e7c2433c172971520e2c"],["/tags/车技/index.html","8cad8b93f6faba5157e24239b2077dc9"],["/tags/运筹学/index.html","b420d6348e795c925b308a37c95a6377"],["/tags/马克思主义/index.html","5e93de07e790a5555482ae0c374ca792"]];
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




