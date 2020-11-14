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

var precacheConfig = [["/404.html","bba7a3d87816c36f73022ffcbaa58e06"],["/about/index.html","92aa3e0f5a24b13cc97dacf30a219f87"],["/aplayers/index.html","7a6f73b77cc6842429d0c56b25d067cf"],["/archives/2020/02/index.html","3a0caf403bcd22a9f27c469c20aba776"],["/archives/2020/02/page/2/index.html","ea3fa340549f306415e24182327f12fa"],["/archives/2020/02/page/3/index.html","8b1425ca36275aefffef256f895ea758"],["/archives/2020/02/page/4/index.html","6c10648186bc6d3d7ac713185d17766e"],["/archives/2020/03/index.html","7ad6f04fc741b02c33cceefe32d7255a"],["/archives/2020/03/page/2/index.html","ae017fbe922d23b51b0aef40f499f340"],["/archives/2020/03/page/3/index.html","a4a062238f6807d9c3154046006498b3"],["/archives/2020/03/page/4/index.html","8450649de0abc3597e5bb0a8f2fecde3"],["/archives/2020/03/page/5/index.html","68704b3c5da0d53845ce7b8a2e8fb0ad"],["/archives/2020/03/page/6/index.html","2828761d3995534c211e56adf71443c3"],["/archives/2020/03/page/7/index.html","37f71fe6ea953879bee7d974d279852b"],["/archives/2020/03/page/8/index.html","d1f55b7cb3f03d11918a2e165f54c98e"],["/archives/2020/04/index.html","3236cdac5ac88e525c216c550970d209"],["/archives/2020/04/page/2/index.html","e0ac00a657afef676f79816df42a6537"],["/archives/2020/04/page/3/index.html","124035c638c15d6868058879f0d83131"],["/archives/2020/04/page/4/index.html","c9c8f8f50aebe815d6cd24e5763ead86"],["/archives/2020/05/index.html","f7a5b7cb1d11f4607d0436b8a56cf3fe"],["/archives/2020/07/index.html","1b35ac9e02aad14a1b9409ff4a3c4b1c"],["/archives/2020/07/page/2/index.html","5740b6865e4e3b3b0f2d1c37647c881c"],["/archives/2020/08/index.html","c4a7e5d6d840748cbab97dd98df8897f"],["/archives/2020/08/page/2/index.html","e162b95bb3fd9e7266a1ad286f57c0e5"],["/archives/2020/09/index.html","12bf70b0a7e741b5198bdc9517cd9f93"],["/archives/2020/09/page/2/index.html","b93564abfb25ec29b9b33e271c9ae8b8"],["/archives/2020/09/page/3/index.html","6c0368d9356f39a9403152af87dd09a3"],["/archives/2020/10/index.html","7c666c0a80cf5c61a160b98c9fd78686"],["/archives/2020/10/page/2/index.html","c51c401b3b5c5ef760a8480c8548c037"],["/archives/2020/11/index.html","45814b7c3c700ec6a6d69ac72a73f34d"],["/archives/2020/11/page/2/index.html","5eeab6aff571fb1a8e6098ef6397abca"],["/archives/2020/11/page/3/index.html","0e6aba086835a50535f41d19b82c2400"],["/archives/2020/index.html","dcb547ff9f46fc0958ce3c822352d09a"],["/archives/2020/page/10/index.html","04b5651b33db3ce738d45ba0cc80850e"],["/archives/2020/page/11/index.html","1794b94cc1ba3dc42e51633d1bfca6b0"],["/archives/2020/page/12/index.html","1f221ef10b36465dcdc7b24f5503e2b0"],["/archives/2020/page/13/index.html","ba2c60e2d54b2708441b51e235b49089"],["/archives/2020/page/14/index.html","7325193a950086fe0f9dc851227da155"],["/archives/2020/page/15/index.html","57089595f9d96f399262d4a9b65a88e1"],["/archives/2020/page/16/index.html","6edf3d7dcb94ab410deba90830185e03"],["/archives/2020/page/17/index.html","46b18085d24fe236622cfa58a82efdbe"],["/archives/2020/page/18/index.html","4b6b3dc7503ccbcc855a6503b3e312bc"],["/archives/2020/page/19/index.html","8c1e831780268d2e2ee021e0c77b1ff7"],["/archives/2020/page/2/index.html","de3b1ee1a4828c1dc51a553b400cd887"],["/archives/2020/page/20/index.html","f1a762de5c3604f389c1439d757e75ce"],["/archives/2020/page/21/index.html","9cb90a74850c16108b78af0d2884cd61"],["/archives/2020/page/22/index.html","400fd4a4050000cf8255b5e9cd2fde83"],["/archives/2020/page/23/index.html","5dd91868db33294ae9a89c3b0a4ea20d"],["/archives/2020/page/24/index.html","0b11c7fbcdeaa3ebd8ddb1e558512b66"],["/archives/2020/page/3/index.html","d8238732e363fd6f62cca364c429129b"],["/archives/2020/page/4/index.html","21462182158fcc48aa83350ec450fdc5"],["/archives/2020/page/5/index.html","ccc89b289daab60750fca20335696921"],["/archives/2020/page/6/index.html","bef05acc038f27ecb5d856ff1aae89af"],["/archives/2020/page/7/index.html","4abe12551248463438ec8f4640168af2"],["/archives/2020/page/8/index.html","089408c85f8477ced230f79d46696659"],["/archives/2020/page/9/index.html","ecc52ac8c83088acabde6ad959dd9cb8"],["/archives/index.html","643f07a5151293475bcfe073071668a2"],["/archives/page/10/index.html","db052b90394fc3b077f3721cf2d8317d"],["/archives/page/11/index.html","d92dad0911b59fcfb32cb92046b0e939"],["/archives/page/12/index.html","9b7b59437708efeafde9dd43a372844e"],["/archives/page/13/index.html","0e31e4cb8a4f427ada99e98e5f598921"],["/archives/page/14/index.html","55502564ed2058b5b6e27964d64bbbdd"],["/archives/page/15/index.html","f5362bd98e6777dafc7e805940a559e1"],["/archives/page/16/index.html","4a5f5e9e501a997ce88ef9d9e00c0680"],["/archives/page/17/index.html","1fcbc362da12f35e931781f41f6beacf"],["/archives/page/18/index.html","4088eeaa5126bc184f875bb783b97c90"],["/archives/page/19/index.html","f34c0fd44d0b8b0510d4644f105f69e6"],["/archives/page/2/index.html","dc01e1737a94f1d5136e5bdc80cea011"],["/archives/page/20/index.html","cf3f2b1e83855b2a08c594af1a5f1873"],["/archives/page/21/index.html","e1b5344dd8db8a46e67e40d6141c12c8"],["/archives/page/22/index.html","030e333fd5343d5de5c5abd74cdeaefd"],["/archives/page/23/index.html","dd4793dfc49cbd4dc3650a52ef12970d"],["/archives/page/24/index.html","ac5faf24b71279972a318eb1ff679702"],["/archives/page/3/index.html","f52d024158c10c143e3ce3c6a4558879"],["/archives/page/4/index.html","ad077aa0c2970ec1a37e048d04c2713b"],["/archives/page/5/index.html","10f4b1e04d02b3f7e8044445d9fa739c"],["/archives/page/6/index.html","d56214394cf4f1828df0baa3731eb2c8"],["/archives/page/7/index.html","bcf4491c46fbb780c82a15f2835898ea"],["/archives/page/8/index.html","5272876b1811630c40254742b9d1f727"],["/archives/page/9/index.html","5a4c0a2199c51d74e2d504b57b5609c8"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","7013e06a1b274fcf92d85235e4200635"],["/categories/Ajax/index.html","d3c3d282712e9ebebce7908913cfdd97"],["/categories/Ajax/page/2/index.html","cb31d03428243257c29995ad606a7ae7"],["/categories/ES6/index.html","b06525361f756fc31dea7fc274730b7a"],["/categories/ES6/page/2/index.html","293dad418976322b66c7d19cdee49ab7"],["/categories/FL/index.html","19d6ce018df1a96075633ea9b83e6b11"],["/categories/HTTP/index.html","48c19768f1d45fc19f1bbd3e6cb06b3e"],["/categories/Hexo/index.html","9373303355971ae6fd3e73a5b4ed7c27"],["/categories/Hexo/标签外挂/index.html","a63e1db37730382c1acfa67d3b5b0224"],["/categories/Hexo常用命令/index.html","e76add21902060d79e80c43deb3891f4"],["/categories/JSON/index.html","d6a269a57bba735aa98e4f000eaa43c8"],["/categories/MongoDB/index.html","1d23f7806da1f11d0199e3aaf4553952"],["/categories/Nodejs/index.html","6bb91852099c4436c86584f99ad0bec5"],["/categories/Nodejs博客实战/index.html","5243a06904a418d0508aa3eae913d140"],["/categories/Vue/index.html","4493252b17f7e8a10d6213e859b4e571"],["/categories/Vue/page/2/index.html","14ee28bcfb3cd9adca963117fbae793c"],["/categories/Vue/page/3/index.html","0172b084602c97492eacab14ada501c0"],["/categories/index.html","a2a3bb9e785ea31dc93750a3249b39f2"],["/categories/promise/index.html","84a3b052158a0759d20dc6863739b086"],["/categories/日语/index.html","cf8e9e7253709c31c807b97f554c1ee2"],["/categories/自学考试/index.html","4dfdfe11c14e93c7f58dd8191bd84cf0"],["/categories/自学考试/page/2/index.html","059811e5a703ba58c5027c8a0ff89015"],["/categories/自学考试/中国近代史纲要/index.html","c52cdd6bbb70f9d86557c20023f85398"],["/categories/自学考试/管理经济学/index.html","7293a3c8122805b2d3bad1b7a21252a1"],["/categories/自学考试/考前突击/index.html","410fd9e170f48b08a37e6973fbc8525c"],["/categories/自学考试/考前突击/page/2/index.html","489dbf80132ff7f0747d7424e8484775"],["/categories/自学考试/计算机网络原理/index.html","5649626c97f7775c29228226a322887e"],["/categories/自学考试/运筹学/index.html","3a83933d0bed61abe7e52a84813d9787"],["/categories/自学考试/马克思主义/index.html","31138e5f285099f1c31dccf2aacd5a7c"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/favicon.png","831793361f36a5524d7c2c8e5a5e791c"],["/images/flags/flag-cn.png","aec786dd377f7498121b2b989285de13"],["/images/flags/flag-us.png","4e484b374a934ec7a0c318fa3039a18f"],["/images/logo-collapsed@2x.png","5a7921ae91c9497d9c479db2ed247271"],["/images/logo@2x.png","7dff419a181fc2ee0d21e7759b9fdff5"],["/images/logo_dark@2x.png","7618f56d3783393049d5486b34c83f1b"],["/images/logos/github.png","3ca867b4d49b00409911b0e7d221993d"],["/images/logos/myblog.png","c65b405af280672770a5e68dbc602608"],["/images/off_on.png","1bdd36870ded5c5d39e24fcdc65b0cb5"],["/images/search_icon.png","73b5f23fe9023e21c9d90b25d73f3881"],["/images/webstack_banner_cn.png","49008f34a922e970792cacb5d17b51a0"],["/images/webstack_icon_producthunt.png","2ba473dc05e96515bb57a7bb00c4d703"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","6a0f7dd5943099352c96ed53af9fef7c"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","3c09d294d9f651c89621375643b18c36"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","88954ad28fc1c49f79f2b737be4bb386"],["/page/2/index.html","f11f84484fc0b1bd81c4e531b3a6d7ed"],["/page/3/index.html","5db4e36432914ee913108ad30e2d9440"],["/page/4/index.html","ae3da5c024c34e3fd54ad0899d79f547"],["/page/5/index.html","89ac451e46b1f5b5d373ffa51ba12aca"],["/page/6/index.html","f092e5926aa158b63d21ce4312e407bf"],["/page/7/index.html","49ef4d941a0a28aca28e52fd4cff244a"],["/page/8/index.html","eb9cb0748ae570e07de0cba23c77049b"],["/page/9/index.html","92b1f5c1915af91bdf03dfaabfa85b01"],["/posts/10812f0/index.html","3af16619cf7a1de6eacd2f736b1ff275"],["/posts/126b275/index.html","bfe4ae4b3b755bf0b2af466a28ded8d9"],["/posts/12d95a5e/index.html","0ebbaf2f4b4ae9738faab062976b5110"],["/posts/1367417b/index.html","e661b25b3eebb2f2754af04dedfcaa35"],["/posts/13886e3f/index.html","f73965514f23dcdc69cc5c6a633ee9ac"],["/posts/145193a5/index.html","27abbf67ce2ca4269878752a534e85c2"],["/posts/149dde25/index.html","9b25a755bd329b35131073610ace4249"],["/posts/152fa65b/index.html","10aceeb0e34e95e3e3659ca03e476e2f"],["/posts/169e7dda/index.html","37364688a551b4dbf46a2d6f5a58201a"],["/posts/1875100e/index.html","c03f3379d526d6b0d480131f7224dd2f"],["/posts/18eaef7d/index.html","18e2cd2416da4dea850956cae26fa9cb"],["/posts/1a0bc7b7/index.html","6a0421d130177d1bf61982d4f9586b7c"],["/posts/1a20a057/index.html","9a07ad566c96635c70ebb89ded063c99"],["/posts/1a998be6/index.html","5bb8bc16b1be7c6a3f839f6ae3ba7ab7"],["/posts/1bffbd20/index.html","28d0a8b2699a6e1b33d16f0a0a54da00"],["/posts/1c5a0485/index.html","d3de76349fc0bf684b1eaf93e43ba75a"],["/posts/1e638f78/index.html","ec0301feccbe2a3db55f604a8d5da41b"],["/posts/1e967920/index.html","916dcd3b23e6778a9095c9ace3e033b1"],["/posts/1fb53120/index.html","f0b1071e5bdbfa8a7cb7189ccfb2311e"],["/posts/21466e86/index.html","77dc84ed7c49f1753642a15cc9e2a792"],["/posts/21abcf1a/index.html","e8a6bb18ff748afdac30bd5658a51538"],["/posts/21c250b1/index.html","00e76e623cc25876e0ad87e6c6d19540"],["/posts/2287cc/index.html","aea4258c326da80b170b5607f95d748a"],["/posts/236bfea3/index.html","457887e189ccb420525fa40281d881a8"],["/posts/24caea6b/index.html","f4a6fe4e7d82a9240897ee0aaf0ddad7"],["/posts/25d45c3d/index.html","69f28e11fb6d4ef793e0d55f7c3de1fd"],["/posts/262baa9f/index.html","db806b61a4f2a58bcd1d3646b401bccc"],["/posts/26f82f65/index.html","f7d826fee2102aa821a3fb40f908f140"],["/posts/27cdc142/index.html","26e5dfb3b6653322a2b68c855bcb0f69"],["/posts/2895c4bb/index.html","5b22973e0a9af87a9accb34bde897577"],["/posts/28987ff3/index.html","fa45687266aa91fdbea1a33412e08c64"],["/posts/298cfeed/index.html","2de1676a78d56d20292bd2a8d6e30579"],["/posts/29f0df96/index.html","21ac39bc6a98c1dbc337894d9ee2a9a4"],["/posts/2a1d2b6f/index.html","9dea8700a4cf194428169d2aab076113"],["/posts/2a386047/index.html","8c4e4d24140f4a08ab9aecf8a63f4bf7"],["/posts/2b2f44ba/index.html","3f8ebdb8f4fefd41f0578c1c4f857d9e"],["/posts/2b770baf/index.html","b47313427e7372eb1697c3bdb7a88030"],["/posts/2cda4a8/index.html","682ad58db36e8065fccc993831248201"],["/posts/2d020832/index.html","9adb6a7edfddb0a57a0271678ea952c2"],["/posts/2d6d3bd/index.html","09de851aabf1c1a35350317c2e860729"],["/posts/2e0c129d/index.html","4832cb83c42680120acc4a5ba51fdc8b"],["/posts/2e7563a0/index.html","50caae94431fb0e6159ca9b45ea97d39"],["/posts/2e7b8d69/index.html","bb6a91be03f00ccb64b2e86f61024f55"],["/posts/2f28d14b/index.html","9b1210e38374f3e0a66b54d8ba93e2d0"],["/posts/2f6e1383/index.html","565724890028ee59da137034aa0e5f6f"],["/posts/30bfd1cf/index.html","aaac749c8edf8f61b6154f120f895769"],["/posts/3270cf84/index.html","865e0f1b4c5d90ad0d1ea94aed526c55"],["/posts/33235106/index.html","eeaf60fba47b1d7b25656f1715e3e9d2"],["/posts/344e951f/index.html","d62f350a6b037f3cfcd101b18e25e979"],["/posts/35e2bcf6/index.html","a0b305011a8c8a0c327056690318850e"],["/posts/365e96c5/index.html","89d29ef98f715d97a990659a752c06af"],["/posts/36e331e3/index.html","cae74a6cdc911538cc00d450948af5cc"],["/posts/372df90a/index.html","a10a2265dafc58a6a7058ef88acfb08b"],["/posts/37c547df/index.html","26bdf61f35640ce89782e8cb575b89b5"],["/posts/380dfa6c/index.html","b6688bf9dd28ee17a45e53ec30d58692"],["/posts/3859c98f/index.html","f6857be1ae25ca1169f1315aeb291ea5"],["/posts/387564ca/index.html","254d5328bb0ba96705c84e4c4cdb699d"],["/posts/38a88481/index.html","67e674d1f4bb4d794cc3b84293e95a12"],["/posts/3914bfed/index.html","d7d6e30bc7615cfd9290daf73bca2af7"],["/posts/3b56780c/index.html","56e4d3074cb9a4592e5f5c1143fd8419"],["/posts/3d1ef1fa/index.html","7393c5978621d647d3fcdf80c6ef71b9"],["/posts/3e4bb613/index.html","f902dcf6623b5df190ef919d61cf7bc4"],["/posts/3f2e933/index.html","150fc832f4eb837aca898949128e7c4f"],["/posts/3f6e5f9e/index.html","afd20280611220b25198f24948713bcb"],["/posts/4349a589/index.html","b31751833a3897fbcde04b9f87f2bd33"],["/posts/44246190/index.html","ada5f9de77590f74143fa4d26931f1b2"],["/posts/456550f/index.html","c5796a83d2afb232b136f303585f6102"],["/posts/45fe8d36/index.html","a28d5a71cc66f121f4c7bf7abe4a82b3"],["/posts/470ac03d/index.html","a81e606c7c5b18d3a8595982419d0fe6"],["/posts/470d45ef/index.html","3b9c07182df4b18e63db2d3a21f9861d"],["/posts/4894629c/index.html","71089acb5148951a989d6f1e031e8897"],["/posts/49249ac9/index.html","638ea5e864f2aec9b5c3a6b646fd7f9f"],["/posts/49f2d2a/index.html","28dcd6e051f75efc1529e2ef8a39d7da"],["/posts/4e6d4eb4/index.html","9d3793bd79f82de6f5c8f43ac1d39d09"],["/posts/4f346c5/index.html","d9dea34df66df126716d459264eba2ba"],["/posts/50caf1d4/index.html","9b05190f523ff90dfc9a207e8fe13361"],["/posts/51139400/index.html","2b81dfb394e65e6beff3155ae34541fa"],["/posts/512c9a09/index.html","1601a368e768aaef3ae8091cf9d603ce"],["/posts/5205b330/index.html","3f2087be60320ba54110760b22c04033"],["/posts/52d36cab/index.html","8671e5f010b07ae2e7732854a1271503"],["/posts/532a083a/index.html","1026b7200478ceb4471bc0a63e620ea0"],["/posts/537d2c2a/index.html","22f3ca63ec4cc7f78403745795ae5d69"],["/posts/54383ba0/index.html","0d57a34ba944995baefc640bb06238b4"],["/posts/54667693/index.html","5b1aa6885c491925915125ee5e01f1d8"],["/posts/54fbed4a/index.html","d3e4f74ccad6ec040f75eeea7f71b15e"],["/posts/5508212c/index.html","3a3a99997944919376c508d00c9b24fb"],["/posts/56760226/index.html","267fc8bb62fe4fe399560574719ba6ca"],["/posts/571564e5/index.html","afd745703e5b3e72473ec15076f93b9f"],["/posts/57900fe5/index.html","615c0203e0ff1b712bcc1456cea27eeb"],["/posts/585ba415/index.html","06019a43ae665c7b9935a8fbfbf37fa4"],["/posts/589a214a/index.html","01f4948f2d1abcb147ff914e55125ad8"],["/posts/599a2b19/index.html","001aa791206bc9337fb7ecbe4a8dbfb1"],["/posts/59c05382/index.html","97aaa4f449d9467a1c0ab1d3de475e95"],["/posts/5a5294c8/index.html","cf33a136fc63b0f94f83ada60d93a6f0"],["/posts/5d3da28e/index.html","21304a50ae5d1255745f565fa2f7e841"],["/posts/5d3f50d1/index.html","261af0276b0b303174f9ae69e61d96ad"],["/posts/5ef7ef00/index.html","e3d2b5ba04f03a8f0f5c1ff3bf8cdc9a"],["/posts/5f1fa8df/index.html","6f2794c1d9c35d6d121b3cd8a2977e58"],["/posts/5fba84c3/index.html","9a96d7be7054b9f60f8e0dc0af585667"],["/posts/60b5dd06/index.html","a159caeeec97975b160e344f372c6573"],["/posts/61057c88/index.html","3fdfac04ed93489994111c49619a58ed"],["/posts/61477045/index.html","fb64e34493d8f923a9d108bc32fe787a"],["/posts/664423f6/index.html","5eec08f317f7cb490fe393040d2b700f"],["/posts/69d79f93/index.html","50c3c50eff14692e2d868a3601613657"],["/posts/6b2f046/index.html","8d05915cc9b6486abaa6184327b4c72d"],["/posts/6b4610c4/index.html","e3e67495f403e3768a148e6fc64fe291"],["/posts/6bbf03f0/index.html","1f4d739115ce2c987fd4f90c352e6943"],["/posts/6e7b67e4/index.html","4729b371d676f1060ad97df67d71d8cd"],["/posts/7000d139/index.html","af1b4616006922b9dabe12325ca8d186"],["/posts/72f94093/index.html","b5225dedcc8c8af65219f2f5ea73d26b"],["/posts/7380b71/index.html","f416582c166001001ebc6eaa0a6bde4f"],["/posts/738eee3b/index.html","abd1eb4bf623ff0589cf1b5eff9e2451"],["/posts/73981dbc/index.html","5eed42a50d3e1c7e07814560bf8cb049"],["/posts/74d60fd9/index.html","eda6f04319ae7508131d86dac00218e5"],["/posts/74f5d9a5/index.html","176a92c8963eff49ccfa0934f7165972"],["/posts/750f2ce3/index.html","511fc68d4911f2436ad0cd4bb5860227"],["/posts/75ceb627/index.html","7f035832454270f53713eb3cf6722c43"],["/posts/7725b75a/index.html","872f88dda4a45d96cc0bbe1bfd0fe127"],["/posts/79ef335/index.html","d8b025be94f759248f7ced27359bccd0"],["/posts/7a228db4/index.html","a71ff6b09ec8dccf7cfd4ac3212c590c"],["/posts/7bbd3149/index.html","242ae61e0af3c09fd8929523d626b4ee"],["/posts/7c20e8d5/index.html","364834c9dc5ce509e17a478a889d5eae"],["/posts/7d3ea75e/index.html","9129dc58515e0c211fb73182977d6dc5"],["/posts/7d43958e/index.html","76a698ba9d08b5fbaa6e0f2c85fc268b"],["/posts/807ac7f2/index.html","00c54b8ee2f84b35dadbb154d6ea57fa"],["/posts/81738fa0/index.html","758394938ed99440a01b63b7f12023d8"],["/posts/817c41b4/index.html","f16199c9faa5f1737aa70236927669d4"],["/posts/83f13096/index.html","26b4cd893ba746fd47451c8a58f2cf0c"],["/posts/84ee8e34/index.html","d43081fd7727a6c73ebe1918663585a2"],["/posts/854d07da/index.html","c0d25dde3fb6f85bfb1e5da2fd37f831"],["/posts/86cad295/index.html","d4b1d87e5ebbfe4caa33d238b70103b4"],["/posts/8833154b/index.html","06f34bf57002cbda303705bcaf389c6d"],["/posts/8837602f/index.html","290b27616c2f1e7d44de0eb5a059ccc8"],["/posts/89589a03/index.html","d85a48483d71588ab82e265d43eb3a3f"],["/posts/8bcef008/index.html","aa5e8a7ae5cb18432e153e7b79ce6428"],["/posts/8bf9abeb/index.html","af59dd5979791ba043a4f5bab1612e37"],["/posts/8e5f5686/index.html","219189f555dc8e09daf9877971657cd2"],["/posts/8fa6b8c7/index.html","7a750ebe9510912bad961f6ae20637db"],["/posts/9029a3de/index.html","2a8095f0a12ea7a715e09cff7eb424b5"],["/posts/909d9a5d/index.html","0dad1d7fd4456cde72dd30c0cb83e90b"],["/posts/91404b94/index.html","a18cdbaafd933fb2fad4315470f1a6d7"],["/posts/932e3747/index.html","967aedd0c5ebc52e105503b0ef5547a0"],["/posts/95fc9e6e/index.html","7833266b8db19cb0b455f4ed38defa20"],["/posts/98e67280/index.html","2cc9268441386a765264ef488de95a16"],["/posts/9a4d13ef/index.html","5b71072ad1b790c7b0f07c87061940f2"],["/posts/9afbb889/index.html","834ea9a04bb35fc093a4e5c1adcf2a3f"],["/posts/9be63ba/index.html","7eee509a66225a69241f50d17070fb88"],["/posts/9d967c90/index.html","712b8f2084197a4417106bf14916215d"],["/posts/9eadcdf6/index.html","ac7f8ed01f746177c5d2f0b1cf7c7e96"],["/posts/9efd76a3/index.html","4892961f9e5c1ac0e1d610160fdad775"],["/posts/9f97db8f/index.html","db6da10e8102e5cb754cc95fce9adda1"],["/posts/9ffb4388/index.html","7e48a8f007e8d155e75bd599fb2b3088"],["/posts/a094d027/index.html","0b33e7bfd4d76c41e32f902a1a71ea0b"],["/posts/a27042c6/index.html","e836a37d2f91411192297d9ac1493790"],["/posts/a29cc732/index.html","d5481674c42e44fdf61ef61b951c3d20"],["/posts/a44a518/index.html","9812eceaa55ce1cbf09add10bbbc892f"],["/posts/a4f2a748/index.html","8f190777bdd1c6b37a717abbbbd40ac6"],["/posts/a7dc32c9/index.html","d10e6c23f7b18d29163852f85225008b"],["/posts/a7f753ec/index.html","744b35683ccf0f251574afcc69a5487c"],["/posts/a9168bc5/index.html","d37900ab5672d61bbf418a16806d6e03"],["/posts/ab176793/index.html","f93687256cc66b7b04dcaac3ff9faab3"],["/posts/ab34095a/index.html","190dd048d50b500692ae979988a32202"],["/posts/ad47c4a5/index.html","61f7cc2893a202b863f4dfea06e276e0"],["/posts/ae8f7b74/index.html","c5b13a43fc1896ca665d3d3fc6613769"],["/posts/af43816b/index.html","0879eca87368bcbbc01099035f745187"],["/posts/af9e049c/index.html","9c657d5010539a69c25e78028c41815d"],["/posts/b0f1a367/index.html","d5adf49acecb0c29f2974313bcd59294"],["/posts/b0f98e2c/index.html","68e1df2c4f277ef303ded8b06af8d1d4"],["/posts/b33131fd/index.html","ed430da82363d5d479d18be8550a8791"],["/posts/b36eb520/index.html","7ceee20d9cbca0da5d6fbbfa43a50630"],["/posts/b542fc02/index.html","7096b04b4a5c3976a7ad4baf0fbf43e8"],["/posts/b54eeeb4/index.html","83beec626bde043bff3a017cda2dfe8e"],["/posts/b84f3f3c/index.html","13a24eab88dc60af42ddff57a4d46af6"],["/posts/b9325cf5/index.html","b141030a1403cc07cf434b1319bdb521"],["/posts/b94fc207/index.html","6f09f7bbd680b73c0f7e51b78bdc4094"],["/posts/b981a6b4/index.html","5d872300b899f1bafa96f6938bda6a17"],["/posts/bcea326a/index.html","87aa43bc7111d85e42c4a71f655d484b"],["/posts/beb19e80/index.html","3441ff3c537baab14cc630e9a8901da0"],["/posts/bec490f8/index.html","18c1d1787791aadd26e1629a6d677dfe"],["/posts/bf7bde0e/index.html","1aa241ea6b8d1921c25bd547d01cc484"],["/posts/c03f17c9/index.html","bf9a42f526b9274404744581ef44886e"],["/posts/c35bc572/index.html","4ddab9d966a216e6819d87ab59fd8b81"],["/posts/c436016b/index.html","a1336febccb0d72b64ba856f32b148bf"],["/posts/c4efc741/index.html","41acdb6137294204891edf2bc6152139"],["/posts/c5e8a08e/index.html","27d9199479516eafbdff524a49c755e6"],["/posts/c7646f1a/index.html","3db38e85d4cf5842269d4af97d2b0b10"],["/posts/c7db1dc0/index.html","e1b0fac61cc74677a8e3ad1419f53da3"],["/posts/c7febeba/index.html","c114641cb4a8f2651f97667bb25a66d1"],["/posts/c9c3a06e/index.html","1f09018b02be16acca978eaee7363dcf"],["/posts/ca657192/index.html","984d698fad70111d517de8031c59696b"],["/posts/cc6d2cf2/index.html","d63037ef551df9d8ab4d9b2af5ac2ecc"],["/posts/ce48f291/index.html","3705d1205574a4ed0b77d41d60c45ea5"],["/posts/cf480faa/index.html","86fb389a8cf903577129d10b235dcdec"],["/posts/d090b4d/index.html","a5461ea6699b90ecf3c39a853e8b3120"],["/posts/d1995044/index.html","32273fe73aa3a2345e895af79f5340ec"],["/posts/d2d34977/index.html","a259ec4410751a1c193de73227c08c67"],["/posts/d3647a92/index.html","d85904cf062edfc10d86f9c0f9ab2d27"],["/posts/d3f6b818/index.html","3f475eba484187ff60fc6aeefb597694"],["/posts/d465029c/index.html","5d8e9e85ff281394b2f019f22753c291"],["/posts/d9884be2/index.html","1a5d0bc7cbacd125565a7df3d4243c98"],["/posts/da40f433/index.html","4f260081ec87bd1ff939740ff96ce4dd"],["/posts/dae71d5f/index.html","2b3a3be624e557ec6e00892d2a542cba"],["/posts/db9fbe47/index.html","44e03b5a1012c52b5b304feea3f4d182"],["/posts/dbba997d/index.html","56697b2c5658d17dc2a1376e6079b370"],["/posts/dc94f8a1/index.html","af7a457e55563a9b0ef27504f3a68fa4"],["/posts/dfe9b67/index.html","178430d20b2a6db66372d491a6329252"],["/posts/e0387d80/index.html","6410ef0d50b660eda379df0bb7ce99a4"],["/posts/e356f7b3/index.html","1d64da660ae61fb2ceb71d38a9b8dc78"],["/posts/e3acb366/index.html","3005efa49a304d7e48fbf0d9855d0f18"],["/posts/e450354f/index.html","ece11aa8c1f51f901e3cebbe85339ccd"],["/posts/e489223c/index.html","e339d831316b2f2dcb70f416536372de"],["/posts/e9a8ddd1/index.html","5f93ab1ac1fae511d82e702515789d38"],["/posts/ea914c06/index.html","6040764ce7b5bf6430da4620bd3e4f31"],["/posts/eaa8f31e/index.html","72879108b5565b147fd25223d451e147"],["/posts/eac19412/index.html","0e7df5f701beeeb39210d1b29535aaf6"],["/posts/eb0c9e8/index.html","7c7394546d868d11bdb91b13ecc2155a"],["/posts/ebe408b3/index.html","a24776630928839a97ee9cf9ccae64c9"],["/posts/edfc881f/index.html","9f2d11313a962033a9262dc9f51532a5"],["/posts/eec0bbd1/index.html","7f8793cdb2a8d4377766a87f3c3aa10a"],["/posts/ef22c7c2/index.html","7595c34692480b601398b57dd8395765"],["/posts/ef271825/index.html","37ccb459b79501874d05efac5c35af8b"],["/posts/f209578c/index.html","4bd5dd0a9b0e52ea137dae6ec100fa1c"],["/posts/f3e9bea2/index.html","21d29d7de4a2375132178bea8f58451e"],["/posts/f67b7122/index.html","817a67ce8a2c2c365e1ad1a5074b1f26"],["/posts/f7abba28/index.html","0b0add6016529c7478975ebfecc73d6d"],["/posts/f7bf33eb/index.html","8ab7a029d3c2e9f8f6bb105df725a8b0"],["/posts/faffd764/index.html","e1572d6d9f619e1b6bc5fb71f0d41596"],["/posts/fb684fb0/index.html","bd6b54d25d64a998a2688fbc7b551c97"],["/posts/fc57199f/index.html","971941fe5feddb967dbcba78248d0978"],["/posts/fc6e9a7d/index.html","513b3918c5cf51875e899774e0b11cce"],["/posts/fc7bc02a/index.html","ff270b929b4bf25dd3a647a41ff44ca9"],["/posts/fd67c5cb/index.html","491811448a2a388709791bbafbdf3fc8"],["/posts/fdde061e/index.html","f799009633b30e94eecb09db3f035bc5"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","0e12bd81054f68ffefb13c8f2fa3d38a"],["/tags/ES6/page/2/index.html","caf56b44093dd15bbab2636bdc0521a1"],["/tags/FL/index.html","fb480f9538a0e50c6b2e8cf97b692efd"],["/tags/HTTP/index.html","2f68976b55188ba79efdfe84d7bff60d"],["/tags/Hexo/index.html","f5c477608a9131b24e0c8d7eddde10e5"],["/tags/Hexo常用命令/index.html","8353d21fbf83f7a0793a098988f15c08"],["/tags/Nodejs博客实战/index.html","c6dfe30e2dff9a94e04e14f205fa9c1b"],["/tags/Vue/index.html","ce220a2f644764cc978126cc9f1b40e3"],["/tags/Vue/page/2/index.html","ce9313993b8ed7bb8e250db08b24f467"],["/tags/Vue/page/3/index.html","441e931d6bbfd4751da86c83ab41ccec"],["/tags/ajax/index.html","cbd4217ca99356aba4368e5f0bb58500"],["/tags/ajax/page/2/index.html","6eec38a45edfb3a8cc4f2ad1fda476db"],["/tags/curl/index.html","e35125959338b94f7cedcf9804dae633"],["/tags/index.html","43faf2aebb36492cabb83745dfacdd27"],["/tags/json/index.html","93a6db3d3dfd3ca27bfeffb4b0a789a8"],["/tags/mongodb/index.html","f333032804852ff6a80b10b9cfe448a4"],["/tags/nodejs/index.html","4707cf5b7283f326e9756580767a4226"],["/tags/promise/index.html","e83a1aa5b9c602e552a06d9d2c4a607e"],["/tags/中国近代史纲要/index.html","0da9c2f5cb6c3d7a8d86aab58bc6f4f4"],["/tags/日语/index.html","fd010a26993c614dfb4be113a8f410ab"],["/tags/标签外挂/index.html","a19ac0b859bc886c39a55d8a2826c737"],["/tags/目录索引/index.html","cd7a147cc2380e6ce57846f5c72a97b4"],["/tags/管理经济学/index.html","a10527ab94fd1860cd0f1d9e35a096c7"],["/tags/考前突击/index.html","e9297f5a549749b0fe3d29942e434e70"],["/tags/考前突击/page/2/index.html","352fa559041726d931ef74d8e36882a6"],["/tags/自考/index.html","58d2b0f869a70455a5b9f94c32a69985"],["/tags/计算机网络原理/index.html","4b28a1160afe75b2f6949bce5723984e"],["/tags/运筹学/index.html","f79a9b7c1b4e441a8db888f427dc46a1"],["/tags/马克思主义/index.html","d5872b83d687c3621705b9e3e385aba0"]];
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




