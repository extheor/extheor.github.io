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

var precacheConfig = [["/404.html","ea6bcd66ef56c41e55b2b6c0331a6caa"],["/about/index.html","d044ab224a30bc4240a88dd5fa7583ab"],["/aplayers/index.html","b673bf56c80eae8d15cc5febbc99b3e5"],["/archives/2020/02/index.html","6916a979d8a5a50c76e4eb6d244d51ac"],["/archives/2020/02/page/2/index.html","8268513e3b97cf505311cf6e5de4c8fd"],["/archives/2020/02/page/3/index.html","8044908c3345f076afbb245d93eddbe7"],["/archives/2020/02/page/4/index.html","69e400ebb88c5965fb061cc1bb514014"],["/archives/2020/03/index.html","1d98f952a1dfafc7c9fe2dcd0a170bdf"],["/archives/2020/03/page/2/index.html","730d105480731cdbcd2ef4d1058bb0bf"],["/archives/2020/03/page/3/index.html","86b906e0a680474d9d19fb462d836390"],["/archives/2020/03/page/4/index.html","6426d2fdd4a81c3c9fdb466596ea2587"],["/archives/2020/03/page/5/index.html","3255ad114402aaa8a33ee3aa5d3c442a"],["/archives/2020/03/page/6/index.html","9186c1c719a626be2f269d71e474e9b8"],["/archives/2020/03/page/7/index.html","a07e7990614fa6a5e91c702c21754184"],["/archives/2020/03/page/8/index.html","820701110f15215f2dcf276d38889348"],["/archives/2020/04/index.html","b1f6c06fd141166615911b2886578d47"],["/archives/2020/04/page/2/index.html","33feb9d52c9fea0a52284e71e135a77d"],["/archives/2020/04/page/3/index.html","591dbf3b55d98114704226fc0f2ad3d4"],["/archives/2020/04/page/4/index.html","520ac39b2068ed626bcaf0866ab529df"],["/archives/2020/05/index.html","90b87bd5e2f49fa71491a87a4d0c1d42"],["/archives/2020/07/index.html","cb9770d7ad0762aaa35e81bf4a1dd23c"],["/archives/2020/07/page/2/index.html","ef09c1e79c5febd32cb7c9f519e0304f"],["/archives/2020/08/index.html","381d0d0e7d3bcd8d7baf7a339d1ed066"],["/archives/2020/08/page/2/index.html","e43f5e0e21713868b7d77d3fc49c193d"],["/archives/2020/09/index.html","8c84dc088f64d8aa61ad504a7aa2afa9"],["/archives/2020/09/page/2/index.html","87a73f9f87464928c6f5d8848e03af00"],["/archives/2020/09/page/3/index.html","23a25a39825907bebdbb03d71ec7b332"],["/archives/2020/10/index.html","dbbbd9767d778294f8a294bc7ac4aaa5"],["/archives/2020/10/page/2/index.html","f52489d4f0948e61a3443c9ec5a3acd1"],["/archives/2020/index.html","44a81dc67e93138d45b1cc19c526d941"],["/archives/2020/page/10/index.html","84f6982b4a23753fb003ccb26e17705d"],["/archives/2020/page/11/index.html","15a620d3c19d8656d9acfeb07553257b"],["/archives/2020/page/12/index.html","6c6599e239fdc875958304f59331bad3"],["/archives/2020/page/13/index.html","af42c7993a21878dcf07b0c681ac74de"],["/archives/2020/page/14/index.html","5b8702c63fdaecc3dbf35444e42fba06"],["/archives/2020/page/15/index.html","58047c1675780f5552d09ba5d6dfe26d"],["/archives/2020/page/16/index.html","daacc3713bf8ccd6a52e7ca7625b0c88"],["/archives/2020/page/17/index.html","542ca7a2c4d04ac732c4c4d28aae60f3"],["/archives/2020/page/18/index.html","73fccdbffac92b1d3821603cd54f51e4"],["/archives/2020/page/19/index.html","6c6785fe2cf66ceeddabf969981bad08"],["/archives/2020/page/2/index.html","35a06a7a27719246e0b9e1e9dac4e697"],["/archives/2020/page/20/index.html","3e0820536ed9da74598d92aacd82c986"],["/archives/2020/page/21/index.html","4412d988f1c690cea85e12e7424e6b1d"],["/archives/2020/page/22/index.html","2bf4eb49987b5983ed307ff6daf1fc76"],["/archives/2020/page/3/index.html","6f8fd8bae05df597b6ef414484a9c423"],["/archives/2020/page/4/index.html","4d8e5294fbf8c7737bdae6fa8e3919f7"],["/archives/2020/page/5/index.html","e41836e5fff6d01114ac09ac7de99019"],["/archives/2020/page/6/index.html","80b5041638e79c0d70b3819165a01f24"],["/archives/2020/page/7/index.html","e2bcc5ddc63edcd575ac49c41ec57dfb"],["/archives/2020/page/8/index.html","68c052d9beb5077f66aeb07af27c658b"],["/archives/2020/page/9/index.html","a06dd80b7ef95d539ab76e0da69f1a23"],["/archives/index.html","9c91fc905f9221a4db274666f9d74440"],["/archives/page/10/index.html","68f2d24c0f5792d955027d68e13b9c5a"],["/archives/page/11/index.html","f0248e31e8885a7e07b75af04289aeee"],["/archives/page/12/index.html","8e5a04a6699dc774d9f170c2b885d445"],["/archives/page/13/index.html","316e03973c7b0e392cf8a99fbf47c1ef"],["/archives/page/14/index.html","5d58fd7a871eb4735a853f4a2a6fa128"],["/archives/page/15/index.html","83e5152b8219ee109b05b8bce9a7c39a"],["/archives/page/16/index.html","7e935bdb1422ddf08afc2013f274b50c"],["/archives/page/17/index.html","9f70c707ee7e026ccd499dde137294ce"],["/archives/page/18/index.html","9ee89f6940b97817e8b02f7e38eaf76f"],["/archives/page/19/index.html","2a0512e21a10c4695e670f749c58b19d"],["/archives/page/2/index.html","23bb8c3446b6c955c1d794f88592d38b"],["/archives/page/20/index.html","36c27a57b5742df1625db8dd91605da7"],["/archives/page/21/index.html","274c0fb5489c7eb919815bb7c13a1ebb"],["/archives/page/22/index.html","601843a699ccf0cb20bbe8902530fcac"],["/archives/page/3/index.html","cfd7998212847b0604ddc82568999d5a"],["/archives/page/4/index.html","a5efdd96fe63b007463d45101cebeea1"],["/archives/page/5/index.html","a0fbf625ba73608e1a2cb26fedded762"],["/archives/page/6/index.html","0191079b696a4b7ea9addaad81a9173c"],["/archives/page/7/index.html","6a62466d25734ff35abe8b5c706d7cad"],["/archives/page/8/index.html","589ef1a8eda468a75d7fbe7930249f65"],["/archives/page/9/index.html","1d611d1a890292e2f9eab56365f23ca8"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","14f0cc7397dc3c40d6e6d2a11f610126"],["/categories/Ajax/index.html","3f488bff06f2036001ca847437f157ed"],["/categories/Ajax/page/2/index.html","965c13d52e0d226a4d34504d038f9fd4"],["/categories/ES6/index.html","e86925e40bfb78e87a41161e28f2d974"],["/categories/ES6/page/2/index.html","d450a1e3d300185e99d37722f5031eb3"],["/categories/FL/index.html","ca3645aedc657b2e1dac57b84941a548"],["/categories/HTTP/index.html","efeb6a0a7d16ce44231525f7675c00d4"],["/categories/Hexo/index.html","f5d67bdb7d57c618418e93706d463a91"],["/categories/Hexo/标签外挂/index.html","e36475b03596d4f0a4ac9e758f3a1d35"],["/categories/Hexo常用命令/index.html","b9d6d3908a1b5744183ef13da6dd0cf8"],["/categories/JSON/index.html","49694d102520a965a1efbbc2ee0edc7c"],["/categories/MongoDB/index.html","8ed3b9a72c73a7018962a6d413be9adf"],["/categories/Nodejs/index.html","59ff03dddd6ea5d6623607bf9d1a83ee"],["/categories/Nodejs博客实战/index.html","09531bf0435a07b7659dc5908824260d"],["/categories/index.html","67396b42e4ae10ca662916d55de47da2"],["/categories/promise/index.html","f9a58e7a9e3862fedd3e0e79ffbf0e5f"],["/categories/日语/index.html","4136bb5e401b0a64d42f8564940bc17f"],["/categories/自学考试/index.html","3ca7d9056658b152176efff41c3a4dff"],["/categories/自学考试/page/2/index.html","3abc16cb23a763e155a7c5524c7ade47"],["/categories/自学考试/中国近代史纲要/index.html","c3813e58d08abe8bcabff1bd899be194"],["/categories/自学考试/管理经济学/index.html","6111bbca46b23d9e9916ba5078cd0a99"],["/categories/自学考试/考前突击/index.html","43154a3e6021bf75dfcdbbca25b81b14"],["/categories/自学考试/考前突击/page/2/index.html","53e2c4c564e452b60b866ef38050ab41"],["/categories/自学考试/计算机网络原理/index.html","2d2d77a043bb813aa93182c705d5b99f"],["/categories/自学考试/运筹学/index.html","e78d5daf022cdb3e469f11f313d504e6"],["/categories/自学考试/马克思主义/index.html","567559943229966e7fe0942c0ba7209f"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","81baeb00e24fd85d3834f8dd628fe2e8"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","c45ca1e812f6a93931ff3ddcb8e1aeb5"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","3063bbb7788bc0ea7fac66723f50a6c8"],["/page/3/index.html","b4feb0e68555203ac8b50fb242a2ca3b"],["/page/4/index.html","7462a87668658cafefa0cb459f46cd9f"],["/page/5/index.html","c9b6a8de8ccee86800d991a35f811fe0"],["/page/6/index.html","a036aab714a7a3c0685e02f00c2818bb"],["/page/7/index.html","1682661578fffec626d3f9eb336f81ee"],["/page/8/index.html","931cb35b664c6c30702f5bccd0c2fa88"],["/posts/10812f0/index.html","22131c1a5f010a65df5763e5d805dd40"],["/posts/126b275/index.html","346865808089348721c9849117254877"],["/posts/12d95a5e/index.html","f380880e54c0602c07471185c918b3e9"],["/posts/1367417b/index.html","b7ac43703e6dc3bcce2835e137f5880d"],["/posts/13886e3f/index.html","3bf851646692b202c94e9c1eec3c74fc"],["/posts/145193a5/index.html","afa7440adf2eb3d6e690ee5887b576ca"],["/posts/149dde25/index.html","d34ad7950fe76c57efac357f183c2d95"],["/posts/152fa65b/index.html","bb7cbe401e830e703bd78ac0a315e46a"],["/posts/169e7dda/index.html","20c64ffa1c1487e3ee0f72ff6a4b0f68"],["/posts/1875100e/index.html","f423a9dff73beffeccdf5a50a8b597b3"],["/posts/18eaef7d/index.html","7157c1c32030582c3b1c5a250e7e9e61"],["/posts/1a0bc7b7/index.html","35b71a9443fcfcfc8da8dc5404743e65"],["/posts/1a20a057/index.html","2a933d8e93efe1702ef1c60fece74fe7"],["/posts/1a998be6/index.html","6fa7efa4e0780216c05351482858a456"],["/posts/1bffbd20/index.html","1f0ea1e38ea2f7b6223940441db30fba"],["/posts/1c5a0485/index.html","c16d0c5a4eb7c1efa73016473a12cac8"],["/posts/1e638f78/index.html","2398998e179b166740a1a4991239b139"],["/posts/1e967920/index.html","bfa64a657654399a054bb9cb0950e740"],["/posts/1fb53120/index.html","f9a5aa0e48dd7b1730d184428d267625"],["/posts/21466e86/index.html","f8af6ae84859029d6161b73c6eb17f66"],["/posts/21abcf1a/index.html","f9fe4e74f75df2f6de9f62daaa66e3ff"],["/posts/21c250b1/index.html","af30391e9f064fb1e42d97814078bcab"],["/posts/2287cc/index.html","c56c8950f35aeaefc757ba655b71192d"],["/posts/236bfea3/index.html","52a1e32aee898fce7222dc27b86fa000"],["/posts/24caea6b/index.html","4bead29346b2969ff367a1688fdfbbd9"],["/posts/25d45c3d/index.html","b8c5ef554e6c0fb9f098465422ef1d98"],["/posts/262baa9f/index.html","d4adf00ba76d3100bf0c2cf3b9a9d0a5"],["/posts/26f82f65/index.html","22f9abeff0b4f105e1fed3ef32b7291e"],["/posts/27cdc142/index.html","2ddc60dfd06cb3eb0c29c4c6647269a2"],["/posts/2895c4bb/index.html","fafea73fcba89fccf12dfe53e708b059"],["/posts/28987ff3/index.html","c47b6554b2ddfe414e066de81fa1fe10"],["/posts/298cfeed/index.html","9133d66f818d475c69e8578f7e3c1922"],["/posts/29f0df96/index.html","f779ddefc32e3588a4a1b6c4da4beb9b"],["/posts/2a1d2b6f/index.html","4f4d219a0dd8524562fb032e592110ed"],["/posts/2a386047/index.html","4d0fb3b6ff7d23cedf391229d81ade85"],["/posts/2b2f44ba/index.html","8fe74806a4712315b7483f64386e7f9e"],["/posts/2b770baf/index.html","89afd86c4bb8d933466bd6dda409b885"],["/posts/2cda4a8/index.html","40783fc08d4c48752f82f1cdec9c718f"],["/posts/2d020832/index.html","f58a336f5b2f0d1cd713f9ab2482da5c"],["/posts/2d6d3bd/index.html","300073bb46006bcaae3be4a393280ea5"],["/posts/2e0c129d/index.html","808f88cd4e49ed165e0082a9e96affe9"],["/posts/2e7563a0/index.html","b5545c1d7f3d2cbb0b0ae66b104feb8b"],["/posts/2e7b8d69/index.html","4aaaca5c833771e9bc691cb6b3b4203a"],["/posts/2f28d14b/index.html","2917010fd569e13cce71d6bae09afe2f"],["/posts/2f6e1383/index.html","3beda617ff12f92c634ef0483dc85fd4"],["/posts/30bfd1cf/index.html","fb040f4376a4a9bd206b555dda9a2a95"],["/posts/33235106/index.html","e61a2a3f9fb56bed48f3d9d776e266d1"],["/posts/344e951f/index.html","119b3f5289ec908e0325f53829650093"],["/posts/35e2bcf6/index.html","e19f68be558010900217b23cc76a6965"],["/posts/365e96c5/index.html","07fe6e86fc5527605a84c948d7fb2cd2"],["/posts/36e331e3/index.html","31038e67b21b97349dcedd00a0580933"],["/posts/372df90a/index.html","93b32c3555dcbbeed3f9791a45045672"],["/posts/37c547df/index.html","4182a6ca294c23e78dd89fec993434d9"],["/posts/380dfa6c/index.html","53e3d7f7c36da7737aa0aa666fbfebe9"],["/posts/3859c98f/index.html","a9ecdb2c8a1488c99c333ff31a7472e6"],["/posts/38a88481/index.html","59f978d0f740f55e376d68312acbf09f"],["/posts/3914bfed/index.html","f25a687f0530b85d7f8ac21e352c5134"],["/posts/3b56780c/index.html","3dd2db5ab1c8de98f2d7beb503b8f419"],["/posts/3d1ef1fa/index.html","6ebe742fd1249bc248936afcd38aca49"],["/posts/3e4bb613/index.html","a4be63c0bb77e3c4d9b4409f7c87b2cc"],["/posts/3f2e933/index.html","32f7664e08f76ab9951dad408aff2f55"],["/posts/3f6e5f9e/index.html","20b518e5cc58174b225be64997eedb82"],["/posts/4349a589/index.html","82c4ba7a1851a4851bcd47780666dbd1"],["/posts/44246190/index.html","f79f53df62b1dfd3ff767a7a7b409524"],["/posts/456550f/index.html","f8b11c68c95a5e10ec8987d8e22a2b60"],["/posts/470ac03d/index.html","fec14c899b6b9c3e2abe708edf8a1653"],["/posts/470d45ef/index.html","e35380e6ab2d93c70ab9662dc62c2f9d"],["/posts/49249ac9/index.html","a4e5695aab291e9ab231f643cfb42c4e"],["/posts/49f2d2a/index.html","543d1aab68fa1c0a56e0aad9c5d52cf5"],["/posts/4e6d4eb4/index.html","aba6541c0eecc2c5ff3163bb6b7ff1c0"],["/posts/4f346c5/index.html","285f830a48798fef04ecdd9f3c5d7605"],["/posts/50caf1d4/index.html","a6223dc76909a6cb3394a62bd9fb54b8"],["/posts/51139400/index.html","d83b85acb0a659e95d5f49f5cce2e1e0"],["/posts/512c9a09/index.html","0d0c21a45ad16b9163375cf392c0a381"],["/posts/5205b330/index.html","5dced8e49c2e169a68133f1848e3cfcb"],["/posts/52d36cab/index.html","bcd2bc9a3b554e951fbd9f9f02b56bce"],["/posts/532a083a/index.html","ca37635f46d1b8111415326b7ba7f3c2"],["/posts/537d2c2a/index.html","fe1bbab084ce0a09b59812f0bc878268"],["/posts/54383ba0/index.html","59d688faeb7202cc1c3a43049ca51fd5"],["/posts/54667693/index.html","de83979da15f911c86991d9755421d65"],["/posts/5508212c/index.html","91556d9895482d2be0c6fd5c1e669c25"],["/posts/571564e5/index.html","ba4766a749f21190a5f9cda31f4adbad"],["/posts/57900fe5/index.html","4463173004ef0eaf3acd272dba8ab766"],["/posts/589a214a/index.html","59f29e75a4c5e75114f9a3a420cd40b3"],["/posts/599a2b19/index.html","bed3aa8bf9de4d53893cad098b4b4b53"],["/posts/59c05382/index.html","def9e446898c61cdd3b91c1f509cdbd5"],["/posts/5a5294c8/index.html","8be16d7f534819ae954bc6f4419b77ee"],["/posts/5d3da28e/index.html","2f0f52712898cf3f62e4de2609e59887"],["/posts/5d3f50d1/index.html","0fd513a3a51039d3ab911b99de64bae0"],["/posts/5ef7ef00/index.html","5039ddb61a46fef045650070551aeed2"],["/posts/5f1fa8df/index.html","d5b31301d417ba6e3913ba3ec84383af"],["/posts/60b5dd06/index.html","2531810be1de85ac1f5b308d573cf947"],["/posts/61477045/index.html","63b8ba46e8f1fe00ab9d48c65e152bcd"],["/posts/69d79f93/index.html","ba9a8257b3d92dfc07a91ed6922a51d2"],["/posts/6b2f046/index.html","1fc288ee4eb608fb93ea3d828ca3b665"],["/posts/6b4610c4/index.html","d6ba3a9cd62f3d4f2f4467b032095d39"],["/posts/6bbf03f0/index.html","e232dd7b594363de4bfe72fc9ecab336"],["/posts/7000d139/index.html","3ed5b7e86b72aec5945af08474ee993d"],["/posts/72f94093/index.html","dc667b9697c08097e46515700092c1a0"],["/posts/7380b71/index.html","a9f6c2fb33a60960e7fc9866deeb0c04"],["/posts/738eee3b/index.html","ce4d1e4062d43c319601a09996d001a1"],["/posts/73981dbc/index.html","1d4487392a04b89dc47d02a4e2807345"],["/posts/74d60fd9/index.html","cc26f629e167f9bc3adb5cc3d3c88cca"],["/posts/74f5d9a5/index.html","5d5eda596f3ca4a9dad8895ae67a4434"],["/posts/750f2ce3/index.html","ad9204f94c0b45eda3732fcf49b7e009"],["/posts/75ceb627/index.html","1946f0fa150b82dda22e8af6b7338665"],["/posts/7725b75a/index.html","5aaeeba49fba97fa3a02ab0a6f1b9a2d"],["/posts/79ef335/index.html","c22bb65ecfae5635b9b9737aaa61626b"],["/posts/7bbd3149/index.html","57e3346772710ae10c6ffd2b67487c55"],["/posts/7c20e8d5/index.html","a0ed22df9597b675cee33101ced7601d"],["/posts/7d3ea75e/index.html","b88de682f4978e4dbbf2e706973bf1de"],["/posts/7d43958e/index.html","93f50603ab03e781a8016f2a0d531eed"],["/posts/807ac7f2/index.html","3e75954bc531e85242722499091da8d2"],["/posts/81738fa0/index.html","cedc112f21212e93a4961db961886d29"],["/posts/817c41b4/index.html","613826857c6e8eef653538f5c66397a8"],["/posts/84ee8e34/index.html","5fd50aa1aa3d0793ed0d6f1a7be0e72a"],["/posts/8837602f/index.html","6c6d1b90e66257e53ce6fedebacb2449"],["/posts/89589a03/index.html","ca0d5f8fd5c49d5a44ac1ae7b4f1b23f"],["/posts/8bcef008/index.html","28268a6e9227cd769c36698c62fa41b9"],["/posts/8bf9abeb/index.html","40187836aa60b15121294cf5e234f9dd"],["/posts/8e5f5686/index.html","cadf6738e6a9565bc5c66dbe2ef86dce"],["/posts/8fa6b8c7/index.html","ae559250fc46806874f9b2febf9698b6"],["/posts/9029a3de/index.html","2cd9db49f2f54964d5a580945aba9564"],["/posts/909d9a5d/index.html","b4a20a38f76e7f2b1ff97c0b40214eb0"],["/posts/91404b94/index.html","d8752188b711da2a3360292acc047fb4"],["/posts/932e3747/index.html","dd3726f2c756e19105375deb75d52f7c"],["/posts/95fc9e6e/index.html","b62418d2dc2b72c3d46949c350897a96"],["/posts/98e67280/index.html","180f5e67a101a0e1ea8b587723e172ff"],["/posts/9a4d13ef/index.html","a7025bcfd0695f25d79ade6d401a6a54"],["/posts/9afbb889/index.html","f3beeb2805369841b84ebba97292a9e3"],["/posts/9be63ba/index.html","e04224e99f1acf78a6fd60a3fc9c8ac4"],["/posts/9d967c90/index.html","f629a65625a44ac83fe886d255cf7360"],["/posts/9eadcdf6/index.html","813765fd973e6f776421eb7a68ab76ed"],["/posts/9efd76a3/index.html","546bdd57ced84de0e44dc90a86050b71"],["/posts/9f97db8f/index.html","21cd8bf2ef61f8a0647ef8c280e7d4f5"],["/posts/9ffb4388/index.html","7021fa42ebc131c417938d73ea86ed51"],["/posts/a094d027/index.html","b48cf5f4bc30e7bb0eee1476409d20c7"],["/posts/a27042c6/index.html","b7ad04aa1779e4e6974aa6ed891dea8b"],["/posts/a29cc732/index.html","a526f4d80e07845660e09d66f0301a44"],["/posts/a44a518/index.html","f28b88ee9820197345389ec5a4efeb45"],["/posts/a4f2a748/index.html","5e6c8629a0192d83e032ec299a0637c4"],["/posts/a7dc32c9/index.html","ecc9ee96bcc0b86bcc678d84f0f6cf7a"],["/posts/a7f753ec/index.html","aefc8ac480ac603d8c8e2042669be43c"],["/posts/a9168bc5/index.html","0ccf4e4d4ed8a05fdc07cb4ff7657021"],["/posts/ab176793/index.html","c5a0486a7973dbab20f4c5d3b5315a2f"],["/posts/ab34095a/index.html","cd917154f28519ae01ca7bd1347cbfb9"],["/posts/ad47c4a5/index.html","b459cc5d1d82b5b03bc187044172fc3c"],["/posts/ae8f7b74/index.html","47edd548731a11a3c3e438286e32a0b3"],["/posts/af43816b/index.html","150af03ba697c5fd9c569035cf6e4984"],["/posts/af9e049c/index.html","d6ea9aa87b1092679e8897eb86eaea92"],["/posts/b0f1a367/index.html","19781a6d907f648ef73ede22c57ed2c1"],["/posts/b0f98e2c/index.html","20247a8bdde3f59e88f16f7fb7fb8652"],["/posts/b33131fd/index.html","f82bfab292a8a667bb24831973133b5d"],["/posts/b36eb520/index.html","ba50cde4d8e382b05a0dd54b5c019058"],["/posts/b542fc02/index.html","729caccb4945e9f34e3c38d63897bfbd"],["/posts/b54eeeb4/index.html","66153999c4d9282d615d329b3d8fc80c"],["/posts/b84f3f3c/index.html","7d280e2b7129a194e4714e28f5c003a9"],["/posts/b94fc207/index.html","35774317abe93e738506495dd53a8c52"],["/posts/b981a6b4/index.html","0d61f9b9179405585165e32ec868c66e"],["/posts/bcea326a/index.html","33e70e7e51c2be892460fca9d9f63450"],["/posts/beb19e80/index.html","08f3ae68f802b6ff8fc55c778694e72e"],["/posts/bec490f8/index.html","4d703483adf9a27021d427be312445e2"],["/posts/bf7bde0e/index.html","9f9bd59d6cc5de85f3729d722d20354b"],["/posts/c03f17c9/index.html","050c9d7e2b1094e20b7ec91fd7b2cd02"],["/posts/c35bc572/index.html","ecd968d1b7d29faec5dfcab74ca96063"],["/posts/c436016b/index.html","0392fb83466e67951dd241d9fdc60189"],["/posts/c4efc741/index.html","8abfbadbd9df9a6bd1a7e6b72267854b"],["/posts/c5e8a08e/index.html","a67898b182e54b2657a799c2f650096f"],["/posts/c7db1dc0/index.html","5cb638e12314843bcd287e2d09b7115a"],["/posts/c7febeba/index.html","cb5a542a7af4c593428dd995cb05b352"],["/posts/c9c3a06e/index.html","166d5214c15c77758840b0919be2bde1"],["/posts/cc6d2cf2/index.html","691020f81a9156ead990d340bd9e2bbc"],["/posts/ce48f291/index.html","ff40bc73cdfdf261a57be68a7ebfd0ab"],["/posts/cf480faa/index.html","5b4f3ab0e515030fd8a6428107d38cbd"],["/posts/d090b4d/index.html","d4d46e5b310f48a4eb401bbaee2e6cce"],["/posts/d1995044/index.html","eca5b2744c0e5c30c235a48116387e74"],["/posts/d2d34977/index.html","026a5cd3a85cb706eb986fa4ad5cd646"],["/posts/d3647a92/index.html","3cf30c263e5dac6c21471b2c3f536454"],["/posts/d3f6b818/index.html","6831379917b446b2510b75682507ddda"],["/posts/d465029c/index.html","54191312794cdc33843d301e3c840a71"],["/posts/d9884be2/index.html","25bd9d9ae71fb1d70f8aed5608d099b3"],["/posts/da40f433/index.html","20ffba73950c84c1bf67c387c8782ba5"],["/posts/dae71d5f/index.html","d8dfcd40d4d613d3d49b8ed4cd47e359"],["/posts/db9fbe47/index.html","6e02a9757cb41162e523f9d2a62ccd8a"],["/posts/dbba997d/index.html","9615ec91ff3f62b5261499b06ec8c61c"],["/posts/dc94f8a1/index.html","3dc3989e922f0ff48565db37c7f68d46"],["/posts/dfe9b67/index.html","fa700d2cd40b70384ba6c8ce31cf0369"],["/posts/e0387d80/index.html","7f72808d36a55a2cec3731e65381be64"],["/posts/e356f7b3/index.html","2851a76e2e65e1736cc44391a5e3beca"],["/posts/e3acb366/index.html","dd0fe8d43e9900c06abf89b61ae05c3d"],["/posts/e450354f/index.html","5750fd34e3632756ab2c4deebd5188b0"],["/posts/e489223c/index.html","6d8185e8afaa3176eabfa6bbb5b8c803"],["/posts/e9a8ddd1/index.html","e4e2c9dd91974595918f13b52f4da1b7"],["/posts/ea914c06/index.html","19ecfeaa87ac4bada0f4402efbac0425"],["/posts/eaa8f31e/index.html","7fcb0ca6a53050c55bce4520f760e5d5"],["/posts/eac19412/index.html","193db0a09a6aac4a932f58927c7a2a77"],["/posts/edfc881f/index.html","694f62f5f6522430d3f121181d27c1bb"],["/posts/eec0bbd1/index.html","9c06708a79d5db0bf1d86ec2bf900d91"],["/posts/ef22c7c2/index.html","faf1d275eb629fd2b3b9b7a177c04e8d"],["/posts/ef271825/index.html","e98a7ebc84137f47cec0bc06b032d794"],["/posts/f209578c/index.html","4502d552bc83b01a2e868638199116c1"],["/posts/f3e9bea2/index.html","92ba12a3019095a178cb99c7497414d3"],["/posts/f67b7122/index.html","61dd599662bb574d2750365bb8e13506"],["/posts/f7abba28/index.html","65cf8c10b887e578b92be0bb5ed4d5d4"],["/posts/faffd764/index.html","991a72873520f0f9ec537522c1981aef"],["/posts/fb684fb0/index.html","c830c1e687e23837efcbac3c0b18c441"],["/posts/fc57199f/index.html","66e022f94ccb9b7102c0057059bea343"],["/posts/fc6e9a7d/index.html","dd66933cbd997742001ac28bd013b089"],["/posts/fc7bc02a/index.html","c7cc0f398c7e81717365b173310bb49d"],["/posts/fd67c5cb/index.html","123faae2327b32d87c7640f12a4bc76c"],["/posts/fdde061e/index.html","d702b8b988c5ce63b0c840d7ab2dd1eb"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","9835d1ea1fb6efea1f0f74cc0b4dac00"],["/tags/ES6/page/2/index.html","c91711b23b0522b3a6ef9e158de324ee"],["/tags/FL/index.html","7a46fcd42f56fed171e14c25b15256ee"],["/tags/HTTP/index.html","e3febb2a6bdeda0cf975c194962d4f20"],["/tags/Hexo/index.html","2e9ad736c6f8137d9629b4738e9e23d0"],["/tags/Hexo常用命令/index.html","6d3fc71f16ef2fafb7634e1599d549fb"],["/tags/Nodejs博客实战/index.html","33869bff759560222d56239fb88f635d"],["/tags/ajax/index.html","6568e7f329a07d31ea9dc7dee4179894"],["/tags/ajax/page/2/index.html","327f33f209fba9fbccbbe0d782dd7405"],["/tags/curl/index.html","6e46696ef8d9a76b72e5d0fcb20ea14b"],["/tags/index.html","6dfa8982213ff56afa6fa05adea57c11"],["/tags/json/index.html","7d12d66f957c23fbf7bc6910437cfe9a"],["/tags/mongodb/index.html","a9b350686b22146b5efb811e44d4c5d3"],["/tags/nodejs/index.html","fac6f7e08bf2afd10717a58b56451427"],["/tags/promise/index.html","f0bd4f01ad61f39866c75655482f7bf6"],["/tags/中国近代史纲要/index.html","af5be15291c01d0f084c56313cc39981"],["/tags/日语/index.html","dfe1b40125ca444c29892e10777cc8f6"],["/tags/标签外挂/index.html","183c75d8eccf55d96e00983b540b29d8"],["/tags/目录索引/index.html","34d6e7873853eefe3fb0ec2910486fe5"],["/tags/管理经济学/index.html","0e9d5d7397b23480fb113e5770e1ce2c"],["/tags/考前突击/index.html","755e7725795e4090ac8a2ecd6cf77300"],["/tags/考前突击/page/2/index.html","1f7839bfc26e7b954bf8cee54c0d341c"],["/tags/自考/index.html","b1aaa332972e3704606aba6afeca842e"],["/tags/计算机网络原理/index.html","df6fc8556bce428ac25a6c249498bfa5"],["/tags/运筹学/index.html","0cf027230b47cd5bf48bd14ed9f53d73"],["/tags/马克思主义/index.html","66c0835e9ffc98b4d40d52035f7088e5"]];
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




