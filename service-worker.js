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

var precacheConfig = [["/404.html","a2b70b4091c786ac85a818f875ba89a3"],["/about/index.html","fb8a41ce42053a2736f21751992e35a1"],["/aplayers/index.html","5d7140a2bd39d587c1944f82bc176c96"],["/archives/2020/02/index.html","e4df160597fe665b1a5c692b4db3aa57"],["/archives/2020/02/page/2/index.html","3d2de705fd09e8c675db28723c885790"],["/archives/2020/02/page/3/index.html","d1a0e8094a817e9d8aed39f5c3398198"],["/archives/2020/02/page/4/index.html","a52521725059fd49d76872124f708b71"],["/archives/2020/03/index.html","0e06c4dc486b4822d3783446be3ddf15"],["/archives/2020/03/page/2/index.html","9e89d7530b2796d8d2e7368d99bdb497"],["/archives/2020/03/page/3/index.html","b300d4c64e50fa23e01552abc9a275d4"],["/archives/2020/03/page/4/index.html","949c3599edbf8a842c98592c28bc171c"],["/archives/2020/03/page/5/index.html","c5674d06dff912ec258323d4eab29c47"],["/archives/2020/03/page/6/index.html","e674a56048f34d84d5d796fe8211f4e7"],["/archives/2020/03/page/7/index.html","31c691906680a06799f608b321f2a6dd"],["/archives/2020/03/page/8/index.html","5c0e26127da2986f75ce20825c924e01"],["/archives/2020/04/index.html","0a1c31f48653d573097f3fc1406d70fc"],["/archives/2020/04/page/2/index.html","8bdbdd2759cf8fb1d5aa818379fe43e6"],["/archives/2020/04/page/3/index.html","060d204a46e8de8580840bb21e20f118"],["/archives/2020/04/page/4/index.html","5de9e271947e078079a87f925f94dd5e"],["/archives/2020/05/index.html","dc054f456526f7bc730708749dcdccf4"],["/archives/2020/07/index.html","07cdeadc0525518788e9435ff7ffbd04"],["/archives/2020/07/page/2/index.html","5da62bccad339ff94d83e87c19c595cc"],["/archives/2020/08/index.html","92149efd60aef6c503794161c65b6d69"],["/archives/2020/08/page/2/index.html","a02b24ef4c76e6abacb683d2b16196a2"],["/archives/2020/09/index.html","eff1ae81adaea55821f5eeecb8572a78"],["/archives/2020/09/page/2/index.html","c427a1b73af2fed527bb0d657591b4d7"],["/archives/2020/09/page/3/index.html","7d5f534db975334f1e8ac4d3aac1e3f0"],["/archives/2020/10/index.html","95dfa92cb3744bfa11a597d231ec6a53"],["/archives/2020/10/page/2/index.html","797c5f0457a489feb5a669ad3872eb57"],["/archives/2020/index.html","9dd021e3c351b0d7928f268fab577d4f"],["/archives/2020/page/10/index.html","579f48b301a7bb8344c88910f0b74219"],["/archives/2020/page/11/index.html","59b9a3bbafe212d79b7142ffaba1329a"],["/archives/2020/page/12/index.html","e0ea797a9470264526dfa7e2e882c497"],["/archives/2020/page/13/index.html","d7a0d716ce8f873dda3f25366fb19e9d"],["/archives/2020/page/14/index.html","f8eb523517e3ae579d12819b82bc01d8"],["/archives/2020/page/15/index.html","717f1bbb42308deff0b5d0a373326737"],["/archives/2020/page/16/index.html","941ae06f67dd25e989f55e82685486de"],["/archives/2020/page/17/index.html","1d12997c133526dc13a9be779ebbb990"],["/archives/2020/page/18/index.html","ea179ce078eb9a3f3e240d7b44f2c2b8"],["/archives/2020/page/19/index.html","fbcb1243ee92dd1538dbcb11d88e2972"],["/archives/2020/page/2/index.html","9c6fc20f2b7d80c9e137c66bb39e62d7"],["/archives/2020/page/20/index.html","2649884a3ba259895ab2386eb5c0356a"],["/archives/2020/page/21/index.html","2e16794fdfdac43b39ec5aaffcde1401"],["/archives/2020/page/22/index.html","414590d789be264b1c37619041b81759"],["/archives/2020/page/3/index.html","e15fa989a31a905ca627d586c12595a7"],["/archives/2020/page/4/index.html","61f1f658ffb2d0fc76ea841b013498a9"],["/archives/2020/page/5/index.html","cef58127c270649c19dcbcb7ffec6b2a"],["/archives/2020/page/6/index.html","d150da04884ad9d868689053ce80a6c8"],["/archives/2020/page/7/index.html","cffd898cf2789e49044cf7ff8b46d4d9"],["/archives/2020/page/8/index.html","64e4fa86fdca30ac7bd0cb6826189b15"],["/archives/2020/page/9/index.html","3f25364e8fefa602791c72f4f6c03e2e"],["/archives/index.html","270b449c051898fb68d74ef65f380391"],["/archives/page/10/index.html","4d5f3ee58ce0a238335a1470da7d31e4"],["/archives/page/11/index.html","fdf9a424cd720a4123126ceab8375667"],["/archives/page/12/index.html","807b1a0420d2cfa3b414ea443afd3959"],["/archives/page/13/index.html","0044db49280f9bdb50ca5f4353c9771e"],["/archives/page/14/index.html","06a7c077ee7da846c9acdecd8caaca81"],["/archives/page/15/index.html","a860f1127f5e99bb55eeb103d6d130ba"],["/archives/page/16/index.html","5d20f23fc867a59853d764c6f319a26e"],["/archives/page/17/index.html","2f365b91d88dcd04ad3f30124b0309d8"],["/archives/page/18/index.html","f4571b1af78ab3895b5c804d7002f83f"],["/archives/page/19/index.html","62f156a0116cf41c6b5dba357b4d21dc"],["/archives/page/2/index.html","44754bba52a86084d8ff7b0edefca44c"],["/archives/page/20/index.html","53f2d0d43852d6f43df384fc7d4016e7"],["/archives/page/21/index.html","c94180f3a8b0e6741e9801f9528737d4"],["/archives/page/22/index.html","c62ac840196a51d4691d22bfd4237108"],["/archives/page/3/index.html","1ce3315e57fbe18594fc6128412c49e7"],["/archives/page/4/index.html","49af75e2868aeb41905ab55149e12b37"],["/archives/page/5/index.html","6e6c0ace4b998eac6347602800198d36"],["/archives/page/6/index.html","58ed6f770778acf29a8de5d899a97141"],["/archives/page/7/index.html","d05fd2ce2cdfa3a62c0ae3299591fd1e"],["/archives/page/8/index.html","4c11ff1e85ca6aaa971834f04d2d394a"],["/archives/page/9/index.html","bea52692b9d53d5fc58abb11e9ff473a"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","91af77455aee339e57ea7aeb3a90a8bd"],["/categories/Ajax/index.html","7cc14f024f141a277b94b953c4a41e03"],["/categories/Ajax/page/2/index.html","fb99c711d947a3d06b6673c488440d64"],["/categories/ES6/index.html","5291eae526249e008b4c0befcefc3b36"],["/categories/ES6/page/2/index.html","643cb8e7fc255f44581d875a5ac42019"],["/categories/FL/index.html","46b24e7f75da6964e029a2236a8706c2"],["/categories/HTTP/index.html","d73efe3ef14200dffdbc310f702d2905"],["/categories/Hexo/index.html","5a4a31f4c16a090f20b8049cd4973f37"],["/categories/Hexo/标签外挂/index.html","9c50859b466b2f4f8f59662df641d2d0"],["/categories/Hexo常用命令/index.html","8e336776cc5ebac2a965bae0f25f18ab"],["/categories/JSON/index.html","6f8a99edb33b240ee62db24c7f7d22d7"],["/categories/MongoDB/index.html","4b40c723c81aebaeb5003a20a004ab32"],["/categories/Nodejs/index.html","3ddd48af4143a66938a74895a163d9f2"],["/categories/Nodejs博客实战/index.html","1a5b373e5a2c8f8e9942c5e9cafea583"],["/categories/index.html","f9ce1bc8ca903c3ee9927e5401a1d15f"],["/categories/promise/index.html","cef45a7e29d6cd72c43afa881a178012"],["/categories/日语/index.html","88a5d39100f8ba8e79e68bf7ea8b0669"],["/categories/自学考试/index.html","a28dbc2cfb14c1828d85667d04005e7b"],["/categories/自学考试/page/2/index.html","6eb7717d3c823be3c198eae363b8beda"],["/categories/自学考试/中国近代史纲要/index.html","e15e3121aaaf2224f7a30db4c23d0612"],["/categories/自学考试/管理经济学/index.html","993f522bfadba3ca7bbecde2c202c97d"],["/categories/自学考试/考前突击/index.html","10b464281fe0d27c83c92d5334b37ded"],["/categories/自学考试/考前突击/page/2/index.html","bb017efd90078b6f35ff4bdcb89ed928"],["/categories/自学考试/计算机网络原理/index.html","4acb84af3999c48401e32fb176880157"],["/categories/自学考试/运筹学/index.html","b9b7e015e3543123490bc91b8b639627"],["/categories/自学考试/马克思主义/index.html","db56d2e13a702a8daba89056b7c11b2e"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","1df10bb37c22c16f57f4e9ccde56457e"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","b816b4ff8da953b697d130a179f93e1f"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","7a976cd08911e45cbf0929eb9af50e97"],["/page/3/index.html","61a6057b1177ae92e5490f01dd227be1"],["/page/4/index.html","e0534f8a132d23a87a500a6f46bc62c1"],["/page/5/index.html","e65a6468cba1035cb5b6feedf9302348"],["/page/6/index.html","fe98b110534352df2f10bfef912d6add"],["/page/7/index.html","db86751cf3f495d536380fedbb1fe865"],["/page/8/index.html","fdaf71faf92c646789a095735b54ee51"],["/posts/10812f0/index.html","3316575c8ea4782b17f6351952019338"],["/posts/126b275/index.html","597cb41c1f6fb79be04b9ff1389787b7"],["/posts/12d95a5e/index.html","507573b6ee90c46a1eabee3dfd6f163f"],["/posts/1367417b/index.html","accdd7021fdbc4b112345c25c420d23c"],["/posts/13886e3f/index.html","0f3be39fdf18de2a1a3dee2c87b3bf7d"],["/posts/145193a5/index.html","2caad1dd81921f7bb5c058c1eab969f4"],["/posts/149dde25/index.html","2102ae32e3d6dc3766e1071fc8a3df69"],["/posts/152fa65b/index.html","b8037d8304f3e5803b6762989de38de8"],["/posts/169e7dda/index.html","4ab43e347e2b74efe40bfba6b35dcb2d"],["/posts/1875100e/index.html","b81abd21fbd4058a127f280b32b0ad5b"],["/posts/18eaef7d/index.html","098ecad2ffac68882b34a7b62b11f8dd"],["/posts/1a0bc7b7/index.html","da07326de8c75c5a1ac26bf9a5491f4c"],["/posts/1a20a057/index.html","a4e4701916c0db3d7a29a30141aebcab"],["/posts/1a998be6/index.html","d902e7387f1daf61842989649bad8544"],["/posts/1bffbd20/index.html","86503ef062f9e5daff9584a7f16e388a"],["/posts/1c5a0485/index.html","7d579c1b96a2348b14a97936b759bfcf"],["/posts/1e638f78/index.html","e661185a728cc0e3ee5a4c7525c29f4c"],["/posts/1e967920/index.html","8bb6e2874caff3e0d10ada706a8ea7ec"],["/posts/1fb53120/index.html","19ca93834e2004f70ea05ff01ec770b6"],["/posts/21466e86/index.html","07dc46ca4757cd24d50998b3141a6697"],["/posts/21abcf1a/index.html","981e907ae98590577ca558e462e3fdae"],["/posts/21c250b1/index.html","32592227f994018bafa6022c2a848bb9"],["/posts/2287cc/index.html","e51c5990f89b847ae35df51a6fe8010a"],["/posts/236bfea3/index.html","fcce651b77a941515078b3ba53732239"],["/posts/24caea6b/index.html","e1e89fed88c17569760ab339f4b48ad2"],["/posts/25d45c3d/index.html","e9059e01f564e08fc1d28432b8dc1cca"],["/posts/262baa9f/index.html","e31e93a7d8b72a0775c8f13d503bc48c"],["/posts/26f82f65/index.html","1655c62ad0e306409c97e1ac547acb4e"],["/posts/27cdc142/index.html","b13da3d10284f66293f752e4b351ffd2"],["/posts/2895c4bb/index.html","caf4a30da2d5bcbf5a39102cfb7be9cf"],["/posts/28987ff3/index.html","e9aa9cc5f9fc57f84252153aeebf71d3"],["/posts/298cfeed/index.html","682a4b70a31d03c0309b5e4a5fb5fcfc"],["/posts/29f0df96/index.html","cea65def890f93620bcc580559f14d4d"],["/posts/2a1d2b6f/index.html","760618878e0e1d6cd99996ade285d5bd"],["/posts/2a386047/index.html","f8b2375951d127c7d8eb8e4b126fbe15"],["/posts/2b2f44ba/index.html","a74288446997a848db99c70961364102"],["/posts/2b770baf/index.html","7dd75a6f77405023150f9f935fd0f76b"],["/posts/2cda4a8/index.html","266999cf70af1087122858f56081393c"],["/posts/2d020832/index.html","cd16aa62713f40096088de1d76783e72"],["/posts/2d6d3bd/index.html","8039bccb540f28e463deeb28e5c837e3"],["/posts/2e0c129d/index.html","5bb657685711b8627c3a2e495e2ee83e"],["/posts/2e7563a0/index.html","2edf2b128e504c10f726005314df2502"],["/posts/2e7b8d69/index.html","e2097e05f06a1f894b945d38e7f63936"],["/posts/2f28d14b/index.html","2e6b2327bae27641c547f9ec7e09afd3"],["/posts/2f6e1383/index.html","11dd767be118d8c1055cfb5dce9ec2f3"],["/posts/30bfd1cf/index.html","7dffa6db98eb685ef3075e13ed6879b3"],["/posts/33235106/index.html","8ddec246ed50f23e9075c2fb1e0cba5f"],["/posts/344e951f/index.html","b1baf757732bb5cbaae51f804bd72c56"],["/posts/35e2bcf6/index.html","bb1d4d939488be8308107a9231935370"],["/posts/365e96c5/index.html","8113221e5b38167cd802325953e41902"],["/posts/36e331e3/index.html","e0e91f1906195862e7cd38bcfd96e30c"],["/posts/372df90a/index.html","6376fa686e927c88d500ea6db919cf12"],["/posts/37c547df/index.html","868892a046010e3ac8096356ac8f6d88"],["/posts/380dfa6c/index.html","b4cddae3280e1bc1d0ddb36fee51a95e"],["/posts/3859c98f/index.html","582b8847986a6f3ddc5c1037578ce306"],["/posts/38a88481/index.html","63287a94ce7144be0b82605788a29e82"],["/posts/3914bfed/index.html","74e9a3ad21e68f5ab2c5317ad2d3debd"],["/posts/3b56780c/index.html","0657746b20ff1fb2de8a4a9f2c3559a0"],["/posts/3d1ef1fa/index.html","08c48ee8b8e9da15180d0c5d9eaeb90e"],["/posts/3e4bb613/index.html","dd10cc0ff4d9089f9d5253109baac45a"],["/posts/3f2e933/index.html","01a8c27b38a2932534917c109fdcd973"],["/posts/3f6e5f9e/index.html","4d393d5a070017ee389ccbe8d6391e90"],["/posts/4349a589/index.html","50e70655ee7f635a8adb4986997a1ade"],["/posts/44246190/index.html","1394f89b654776171437e164bb41f133"],["/posts/456550f/index.html","b0cc177783ddaf6919c595c0d22029fb"],["/posts/470ac03d/index.html","9e9f16df9c6a713681715233e3db3014"],["/posts/470d45ef/index.html","cc00be896bcdb0f26f031cf9472d0727"],["/posts/49249ac9/index.html","eef17274298423754a9ff90a59fb3a18"],["/posts/49f2d2a/index.html","d70d9030f4d0a90ce74387c5b3062cea"],["/posts/4e6d4eb4/index.html","920d719821360de63908276b7bd18305"],["/posts/4f346c5/index.html","883f060bfed63e00c089ad5f32c1eff6"],["/posts/50caf1d4/index.html","c1f152b10215efe86aa2195f0ed6f666"],["/posts/51139400/index.html","95532b459da936285f1b1fa68224e4ec"],["/posts/512c9a09/index.html","391cea26835df60eeb9addde09c9e50c"],["/posts/5205b330/index.html","6c75a42c984c070097ee25b01f953d3d"],["/posts/52d36cab/index.html","07a6c3b34ab0b8a9f513231db5390f30"],["/posts/532a083a/index.html","799f58373c9267e052da935ceb7975d6"],["/posts/537d2c2a/index.html","26a36692cc9b572ab02d9b12c50612a0"],["/posts/54383ba0/index.html","06424a6709e8d8d0e5822812f50a0a6b"],["/posts/54667693/index.html","b67be616d0011f299f79a12de5c25c6b"],["/posts/5508212c/index.html","bba4b3797a950ea99e603483b3cac4fd"],["/posts/571564e5/index.html","58e4f5ab0d698304ea0a608aee8628ca"],["/posts/57900fe5/index.html","e22c91c945b707129eeacd3397670dcc"],["/posts/589a214a/index.html","3e9233462aff92ee9d875f2b134eafdf"],["/posts/599a2b19/index.html","0bad422f260baca52a835cb3dcb06242"],["/posts/59c05382/index.html","7ae670f1445cb0ee975e5bf45db718ee"],["/posts/5a5294c8/index.html","9b508ae42602485c9d576506263598bf"],["/posts/5d3da28e/index.html","fc50ba8cf90bf5add2acddb812e9f74d"],["/posts/5d3f50d1/index.html","b280599a339ea39fef7422773e55366e"],["/posts/5ef7ef00/index.html","45df841776e80274f44ad88b2a5b2f55"],["/posts/5f1fa8df/index.html","bd77562a88c9afcd1af7684bf1d740ff"],["/posts/60b5dd06/index.html","440b952a89635ab3f043ab68f750b285"],["/posts/61477045/index.html","271601db9493e5bef796d286aab1bd98"],["/posts/69d79f93/index.html","a1339842eed0fe37985c28bad57524c3"],["/posts/6b2f046/index.html","459a65492960a242985e6dd95c878947"],["/posts/6b4610c4/index.html","c206143b6416e150b4c134410f01d8ac"],["/posts/6bbf03f0/index.html","d678418e29ce75fbd34427cf30307f2b"],["/posts/7000d139/index.html","f0d8933784144e4e6f4e32fb4e57db4d"],["/posts/72f94093/index.html","fe20691802a8b624b544221611df501a"],["/posts/7380b71/index.html","2f1266aa314cc1de37879a6b8975e4a8"],["/posts/738eee3b/index.html","cff9b0f2177ebefe62dc018c82d25a4f"],["/posts/73981dbc/index.html","f168a700ba015647749a34ddaf2685c1"],["/posts/74d60fd9/index.html","c4bddeadca597ecd3fc4c495ac1d8051"],["/posts/74f5d9a5/index.html","409f1b2c5a05aa6810da1b2fef3cb385"],["/posts/750f2ce3/index.html","1a152d5d88b50970803a7ea6656e3474"],["/posts/75ceb627/index.html","c7505dbd77ff4d283b874450707096cb"],["/posts/7725b75a/index.html","ffe2cab1317231ba01eefbcb21b29a2a"],["/posts/79ef335/index.html","c0a05423fd4863bcc602883d46a25ac0"],["/posts/7bbd3149/index.html","9a6ce6104b1b9facbe185e294716dac6"],["/posts/7c20e8d5/index.html","0515897e95268d5099e9d21182595657"],["/posts/7d3ea75e/index.html","1af62fb98a7a2a36b64bf1c73dce75bf"],["/posts/7d43958e/index.html","d5db4f6a70c12b1b83b102a907c0d620"],["/posts/807ac7f2/index.html","ab18170a331dcee4f3656988ccf72449"],["/posts/81738fa0/index.html","504dfcf8a1be89685f7e699ec91dc1cd"],["/posts/817c41b4/index.html","7bbb34e7c0ee04b58971144c08eb7a0d"],["/posts/84ee8e34/index.html","ae02a53e42715fcef5b94d0a6f833fe5"],["/posts/8837602f/index.html","a34f485cdce74136eba1e570f7fb158e"],["/posts/89589a03/index.html","2514b495c7418889bcbe953160e16833"],["/posts/8bcef008/index.html","fa225a4561977387740c095af604b4bc"],["/posts/8bf9abeb/index.html","1e208b752be178e2951224defae14ef7"],["/posts/8e5f5686/index.html","3153cb9c6f3710f1ec890be7ad802903"],["/posts/8fa6b8c7/index.html","36fa182578f79ae363d1e0b7f5a697b8"],["/posts/9029a3de/index.html","13799a080bb255a51e3eb38e3bdb617a"],["/posts/909d9a5d/index.html","573adb76c818cf1f031a9f9782a2f755"],["/posts/91404b94/index.html","b1fda5600866124bab790e0abb14cb46"],["/posts/932e3747/index.html","c4e6ab917161e646d960913bb39eac98"],["/posts/95fc9e6e/index.html","6f0dcea5a44fc00ec318748a46813ea6"],["/posts/98e67280/index.html","c0c95b932ef2fd02f08163fca3d81e58"],["/posts/9a4d13ef/index.html","2faa50c8d0b599a65fc5b45837cfc2ff"],["/posts/9afbb889/index.html","32a18c5db7122d2793ec9fef922c49b5"],["/posts/9be63ba/index.html","ba2144f9fa0b7eeaaefecd514cb17906"],["/posts/9d967c90/index.html","ba53f39820f09cd83ecbb88726eea6b7"],["/posts/9eadcdf6/index.html","cc13d9186571f0b4ec677c7bf7386802"],["/posts/9efd76a3/index.html","2ae6a0fb2ec6f71e3705d3e45eff849a"],["/posts/9f97db8f/index.html","0cc5f7981ee36838f89d71c34552608a"],["/posts/9ffb4388/index.html","f92273907612edd0f3d7cc35cdbdc76b"],["/posts/a094d027/index.html","d963e03513c1ab4fd81d491dc04fcb2a"],["/posts/a27042c6/index.html","f095deb39d9185a4ef42de612eb7f9c0"],["/posts/a29cc732/index.html","92682e19bcfedeb0c446ee08c241e265"],["/posts/a44a518/index.html","a75c842db461e19c0cd21625d2afe1de"],["/posts/a4f2a748/index.html","1388dc6e61d635d475c018b2c7f74fe5"],["/posts/a7dc32c9/index.html","6fe79da29ee16e71348bf3ff6303b141"],["/posts/a7f753ec/index.html","31c63fbf3f99154141a13e96579dadb4"],["/posts/a9168bc5/index.html","93f1bb948385f240751a35bc90988a63"],["/posts/ab176793/index.html","6df940e2f78e580d56bdf4de29c20744"],["/posts/ab34095a/index.html","b71a719373b17f1776f362937cd82021"],["/posts/ad47c4a5/index.html","07ddd729b9dbe5e5b40983e3f671b2dc"],["/posts/ae8f7b74/index.html","4747f45a7f0c7bc27fe95315d088d104"],["/posts/af43816b/index.html","e27d6011cc4b1a9647102121e51de189"],["/posts/af9e049c/index.html","419112b6564fe691983bc0aed4409f86"],["/posts/b0f1a367/index.html","fe525622a49f993a0648ee9536303652"],["/posts/b0f98e2c/index.html","9117fe50197050a07fb2fbd8fbd4e011"],["/posts/b33131fd/index.html","f1ab46b91b41b60379b556208dd62b4d"],["/posts/b36eb520/index.html","af9959a3132f7c83c42c2855a9f59d83"],["/posts/b542fc02/index.html","fd6818642db0bff3084c81e1659810fa"],["/posts/b54eeeb4/index.html","91ae7cc79dbda12ca533d32c92ea936f"],["/posts/b84f3f3c/index.html","5f137c73463336597d00b9d374873e08"],["/posts/b94fc207/index.html","a86569b7257163ca564eb75ce9532bdb"],["/posts/b981a6b4/index.html","0257d6bb56a35cdc9bc363593ae59b34"],["/posts/bcea326a/index.html","41fd531f1ada90d224deff0785d64155"],["/posts/beb19e80/index.html","a11bb2c2fc9bb553c897577421b6b078"],["/posts/bec490f8/index.html","03032f8441b3a328bc05a8e2fcb2da99"],["/posts/bf7bde0e/index.html","0975c754ef6c079bd04466555e386cbe"],["/posts/c03f17c9/index.html","1f980dfafccba130f710298096a82662"],["/posts/c35bc572/index.html","479a92f5924243986aec349f527473bf"],["/posts/c436016b/index.html","d533aa83c2846cfa85e550598336433e"],["/posts/c4efc741/index.html","21da837cd4862cd317fe4d6e6a82472f"],["/posts/c5e8a08e/index.html","5d537adfe9bb24143cb020a6b0ed217b"],["/posts/c7db1dc0/index.html","0de0cfc820b13f359dcd54b226ee8e6d"],["/posts/c7febeba/index.html","81c92b1a5dcb5de1cdf5968600ec54f2"],["/posts/c9c3a06e/index.html","34c981d5bdaed493cc535d472a753152"],["/posts/cc6d2cf2/index.html","08209f54e53920ae1cac7101b68adb36"],["/posts/ce48f291/index.html","952fa0c28b7c11f392a318b0e6bcaf94"],["/posts/cf480faa/index.html","24470a4bf078634370b8279f0c65e0a5"],["/posts/d090b4d/index.html","b11122fbda324e2833aa9a101a09556c"],["/posts/d1995044/index.html","e59351c44f1edafe71f0d3ce82d0dbbd"],["/posts/d2d34977/index.html","ca77a1b0a24d2cda96602644ebf9a78c"],["/posts/d3647a92/index.html","0d788ec9c70e6e4bbf8812e2f723caad"],["/posts/d3f6b818/index.html","536f96d7f8c3a3a3c426a50f28d07545"],["/posts/d465029c/index.html","5c809cabf30b98b926560eb150a1cbfc"],["/posts/d9884be2/index.html","ca2223e1dd6ba321bf6d75f758a0ea35"],["/posts/da40f433/index.html","635dab86d5ec1fba1dd7cd7046599948"],["/posts/dae71d5f/index.html","d78cc1bacdd0f17fc9da380ee4aa773a"],["/posts/db9fbe47/index.html","7ea19b1250cae8a701c9d2fb0b5e9241"],["/posts/dbba997d/index.html","e31fc2736648bbf2d0344ebfd74c83f5"],["/posts/dc94f8a1/index.html","44191317201e64c8426d61c46ba1b39d"],["/posts/dfe9b67/index.html","efbd4225cc5e21e05beae73b27db4972"],["/posts/e0387d80/index.html","bc7b06007770ce6a016dd4f6c90bf17f"],["/posts/e356f7b3/index.html","b9b5ff959309b88f641677662f39e79f"],["/posts/e3acb366/index.html","6533b55c04827e3f0a2ba2ca333a38df"],["/posts/e450354f/index.html","f6f9220a3249426255aa0ffd10038310"],["/posts/e489223c/index.html","c63ad1f45cdd76ce9ac0f3d8e26dc59b"],["/posts/e9a8ddd1/index.html","1e6588d40fff93055310ee519276fd65"],["/posts/ea914c06/index.html","03c9f857473ed7d47512748efc833e5c"],["/posts/eaa8f31e/index.html","bd4c39dc7183c3c7c12a4429fb1309e3"],["/posts/eac19412/index.html","d6c1ec330d9a2004d460d5770c11d287"],["/posts/edfc881f/index.html","7241938e2c0473e508f879f43f1f71b0"],["/posts/eec0bbd1/index.html","f0f7d06351dbc1556e70956dbbee120b"],["/posts/ef22c7c2/index.html","76bc52a5dd26cc72a4643ec0b3187ece"],["/posts/ef271825/index.html","4cf96697a47c5d6428f932acfa57bab1"],["/posts/f209578c/index.html","28c7517f130add35485955450a0e382a"],["/posts/f3e9bea2/index.html","085bd21641eda37fb18709aa4a23bea8"],["/posts/f67b7122/index.html","8bd661834b650ad8fd090da6c406cca6"],["/posts/f7abba28/index.html","5028e394af677118a5b781d7b746ce57"],["/posts/faffd764/index.html","ed409ee256c9eb38e77b43bca3d84931"],["/posts/fb684fb0/index.html","957119031ebd586ef618a43a91473654"],["/posts/fc57199f/index.html","febf74e2b8aaeeab46a045aec052c6f9"],["/posts/fc6e9a7d/index.html","32d4a707906a38fa44e7b3fe4188a3e4"],["/posts/fc7bc02a/index.html","c750dec0140599b1f7c1599363090802"],["/posts/fd67c5cb/index.html","efd0b85bf471d4a3cabb1fdb6e6dd143"],["/posts/fdde061e/index.html","6f6a3c4ebe43c6b9da802a00fc431818"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","9feda36fdbb794c79efc3f73df6b31ef"],["/tags/ES6/page/2/index.html","91d57ffe53e75741ee928ddd951b7899"],["/tags/FL/index.html","ef0470bc34f99a21b818bfa50abe243c"],["/tags/HTTP/index.html","268d23436af26fed79d8ed85182c5279"],["/tags/Hexo/index.html","3c323c639dc353ae2e729c4cb56384bc"],["/tags/Hexo常用命令/index.html","3b576932e9f115ca844e25492872f192"],["/tags/Nodejs博客实战/index.html","c7b1084105ec71f59c3656f2bc549e18"],["/tags/ajax/index.html","5b7007bbb44fce76c43c41f3c2219ff2"],["/tags/ajax/page/2/index.html","d0871a012a371fa1708de9667e6c4d50"],["/tags/curl/index.html","f61a937afc5e9eac9018e54fe5391ebb"],["/tags/index.html","50ff3f5b3bb12fbafa5fb9d470d14b83"],["/tags/json/index.html","2244a02b3f5bebdfd47267ec01e8d252"],["/tags/mongodb/index.html","8214ad67d6d5c83294250b0fc80f38d0"],["/tags/nodejs/index.html","ea453b55fe13f927dab423c7fcea36d6"],["/tags/promise/index.html","a43098fd379e63007cb595f99f6ec743"],["/tags/中国近代史纲要/index.html","01e51eb1b961bfa14a7ed3e8151b2ff9"],["/tags/日语/index.html","0defea5a7f4aa945e4f44cc08d316ed1"],["/tags/标签外挂/index.html","d7e821f855b836685df6a501c8d0f085"],["/tags/目录索引/index.html","1dbfd4cb32f0de25002d45c26e378fb8"],["/tags/管理经济学/index.html","180e60d3ea3b6a2692c72aaaa67a2c80"],["/tags/考前突击/index.html","cd439ec3e5d3e1e412cc81d5bebfb743"],["/tags/考前突击/page/2/index.html","6230109dfcb6782e0e38bfed7cb0a219"],["/tags/自考/index.html","59a9ba7a57a92272daec345c62e059e6"],["/tags/计算机网络原理/index.html","4c19607ea78bc7189bed8a73304b3785"],["/tags/运筹学/index.html","2bf39f43b935ec27544e98a6e328e09f"],["/tags/马克思主义/index.html","dfa0117bcafd9a1c9400a46de1f5b92a"]];
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




