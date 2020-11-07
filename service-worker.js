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

var precacheConfig = [["/404.html","02fe21531e66d3f91a4f84ba835539d9"],["/about/index.html","5dfa5146c5b1801fa50a3da271334dc5"],["/aplayers/index.html","355aa5c4fe98ad49e595281590d8bfa7"],["/archives/2020/02/index.html","8a12e829990eb10e462d34fdc9558dc2"],["/archives/2020/02/page/2/index.html","75c7ebfb6a73e4aa4de6fa4c945e6974"],["/archives/2020/02/page/3/index.html","5ec102537aeaea8cfbb8fee5e411490d"],["/archives/2020/02/page/4/index.html","eb15577c05f8bfe6fc86ba4ab95145a2"],["/archives/2020/03/index.html","b421dcbc7717e12246fa328bf5a17286"],["/archives/2020/03/page/2/index.html","c1c966194e2891841c41cebbd33288c0"],["/archives/2020/03/page/3/index.html","6a1b5b7145aa7a540e7f2bd6ca0f2da7"],["/archives/2020/03/page/4/index.html","bd296601e119d96639ac2057f1018d64"],["/archives/2020/03/page/5/index.html","71c4e51575857c90e4d2271ce3f594cc"],["/archives/2020/03/page/6/index.html","b4c46608a6fda75835e5bf3e60932a8b"],["/archives/2020/03/page/7/index.html","345203c6ea092a7e4e27def47bf949e2"],["/archives/2020/03/page/8/index.html","b046fbe2702fea9614ad3a9d9a095d06"],["/archives/2020/04/index.html","9bae64f4f75d64b2a7e12bdb346c7b5e"],["/archives/2020/04/page/2/index.html","d78ca75921d495433ed652e0987852b2"],["/archives/2020/04/page/3/index.html","51598657160c6b4286d4a784806a2d2f"],["/archives/2020/04/page/4/index.html","178a78bcc1baf05b276aa10fcdc93593"],["/archives/2020/05/index.html","be3053a55dee6af414a5919d13b880e4"],["/archives/2020/07/index.html","c47055fbebcd947d76de194b1f3e6f67"],["/archives/2020/07/page/2/index.html","3a183a98794c2975f4329a5dfcac63c6"],["/archives/2020/08/index.html","ce7db95f9386c91ea8755a0942aa2ccd"],["/archives/2020/08/page/2/index.html","5c940f272c19823c1255efcaf591f284"],["/archives/2020/09/index.html","a6ad2c94ba423b14bcc99bfec2750749"],["/archives/2020/09/page/2/index.html","2c49ebd9791e422090a6fa98bbb489a3"],["/archives/2020/09/page/3/index.html","a825ac90bd09d65ab89a5960efee5476"],["/archives/2020/10/index.html","8314102343d8f993668a66c4c556f956"],["/archives/2020/10/page/2/index.html","2078d713ea4d86c8b2d3234d06af192a"],["/archives/2020/11/index.html","fef433e56b5706d1a0f01122dac46b40"],["/archives/2020/11/page/2/index.html","8518ee5e26a8eacae517e4c28a4d4459"],["/archives/2020/11/page/3/index.html","c747ece4d93dbc8fc950529e9aa44257"],["/archives/2020/index.html","cff9141086dc2a3c423737256934522c"],["/archives/2020/page/10/index.html","8a5d07839e6f0e986ad5b029aa92d21c"],["/archives/2020/page/11/index.html","93deea53334b6ee24b81593d28b1dbf5"],["/archives/2020/page/12/index.html","31893c680a8a9cc9d0f42b736a5ba4f5"],["/archives/2020/page/13/index.html","cdea3f0f9e09dda57ebfa5f1f100a37a"],["/archives/2020/page/14/index.html","3c0e7211602c6fc0607a674f643138b4"],["/archives/2020/page/15/index.html","f7eecc5a5e8e1019d20d79615f34bfea"],["/archives/2020/page/16/index.html","5c14eae38a21819612065ef4d1d4c54d"],["/archives/2020/page/17/index.html","e21ff931d5da5f3bdb6e32ff9f4e5f2a"],["/archives/2020/page/18/index.html","1592bd2d6fb562cfb9b8cd6eda648e06"],["/archives/2020/page/19/index.html","9b7e79fa45dc58d0196d68579379519a"],["/archives/2020/page/2/index.html","974610761f41b333e079d328d472a24f"],["/archives/2020/page/20/index.html","90611303263a4256f04c4689d286c593"],["/archives/2020/page/21/index.html","ab8d2e7e5158892d2f767193c49bb8c5"],["/archives/2020/page/22/index.html","2e21c4ac42eb88ae53d4fec56840d523"],["/archives/2020/page/23/index.html","2570c38eac202f4fc2d0d46c3a5a6458"],["/archives/2020/page/24/index.html","fa58f90185ab683c20004cb7283a68e4"],["/archives/2020/page/3/index.html","4a5a4b43a4c6d10fa5125cd71217f93c"],["/archives/2020/page/4/index.html","92488af362a7a262ba220728eb2d1f39"],["/archives/2020/page/5/index.html","35765cc49c24c37fb52f146c04606e01"],["/archives/2020/page/6/index.html","2a678dc2ba512e1086bd759d7265b7ae"],["/archives/2020/page/7/index.html","dc690085375e05b268e741db96aa2a68"],["/archives/2020/page/8/index.html","8651371870a36b90eaac07a8e53e8733"],["/archives/2020/page/9/index.html","76894b139ae622fa425708589ea92ef0"],["/archives/index.html","fd5b4c077ca83a2a50dccf334569525e"],["/archives/page/10/index.html","a74051d839da4f47d28d41cf38e195b2"],["/archives/page/11/index.html","1c25dfe8b8d5a8397f7dec99b3a8c642"],["/archives/page/12/index.html","7683bd3d0da0013271459dad1605cdee"],["/archives/page/13/index.html","0809862f3ee2747eb451eb583dd5ef1b"],["/archives/page/14/index.html","bca7d33c418dc5050c4d61378868cd70"],["/archives/page/15/index.html","7292cdc14c3a984f7a3c4c13cd397d40"],["/archives/page/16/index.html","09c4d224c63c621e81d869c7f9795ba2"],["/archives/page/17/index.html","ebc8ff9a676a228fb43075410bc5ecfb"],["/archives/page/18/index.html","f1480d6e5d1e5ea922b1449c4adec488"],["/archives/page/19/index.html","1a341ca34f89a28b312e85c0c57ac8d1"],["/archives/page/2/index.html","fb1d62a54c7082f59c9573591c855d11"],["/archives/page/20/index.html","b0587bcb77b7d247dbbc6bedbfdf12ce"],["/archives/page/21/index.html","7fe6191b3b82e44839e947221ecfc556"],["/archives/page/22/index.html","25f08ca7ab04004a014d8cad8faa70f7"],["/archives/page/23/index.html","5a6cb142e21d3bbb275c7ad8370504c3"],["/archives/page/24/index.html","27ac54f4487c3a896f234ec60b230f4a"],["/archives/page/3/index.html","363d7e7ea1250cdce1609201cff370f9"],["/archives/page/4/index.html","10b702d16efb936ae7ecc64b361b23bd"],["/archives/page/5/index.html","c4275ebebff611eafa785f166159a902"],["/archives/page/6/index.html","5f5b5537923042576f7459f537c67c76"],["/archives/page/7/index.html","0ae62a2a9f0c38063a4085c59f9c12a6"],["/archives/page/8/index.html","983a1219b3678736e55b640581649e0c"],["/archives/page/9/index.html","31d4231f6afed06b8c64d2ad139acf03"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","2c24bc5a1d2a0c8cddd30997f25c32ca"],["/categories/Ajax/index.html","519df6863b41ad5ca6772547d5a6bdcc"],["/categories/Ajax/page/2/index.html","8869c62923bbbc7264a6d18ccfc0fe3d"],["/categories/ES6/index.html","7fafad7791327d1a22b41cfab989754c"],["/categories/ES6/page/2/index.html","3e9ac99ca14fc655cc44e631db004893"],["/categories/FL/index.html","2fad602b0aedc180705508ea0b6c09b5"],["/categories/HTTP/index.html","651baa23f3e1dbe4e05b09e882569f31"],["/categories/Hexo/index.html","b1606ab32b6829c85f600b89c1c26b0a"],["/categories/Hexo/标签外挂/index.html","f261c3e4e717a9b8feefbda9fdcfd458"],["/categories/Hexo常用命令/index.html","e358dd192b0e8a5f4490aa91d8378183"],["/categories/JSON/index.html","42d1c86f83fca72ef134571507f43f44"],["/categories/MongoDB/index.html","5608a7f3ae06348ee5e9ace55a67030c"],["/categories/Nodejs/index.html","36d945317ea0b9b565a3b9c666a75a4a"],["/categories/Nodejs博客实战/index.html","cbc14efdce6a5d0556ff8fa8b5346fe9"],["/categories/Vue/index.html","bb201ac0256d169f13b6bada513bc174"],["/categories/Vue/page/2/index.html","7045ee32e38e925b4c9d92ae7b01d3f4"],["/categories/Vue/page/3/index.html","f4ef7cac01b0820a0958a246d702c4e8"],["/categories/index.html","12f4fab5d3f8d1a8e9413f63d2b7e3c9"],["/categories/promise/index.html","a6dcdcfd9cb0dcc180449324d2817c63"],["/categories/日语/index.html","d44844b83040da669fdbeb02043bd5a2"],["/categories/自学考试/index.html","d8a101c3c95c139a5580d56192d2aa57"],["/categories/自学考试/page/2/index.html","050332d5a952f421ae83380b0cb47d26"],["/categories/自学考试/中国近代史纲要/index.html","d1e240770206e4e9971bbcd10d75485e"],["/categories/自学考试/管理经济学/index.html","79c42435588d8814b7e95cfbf2a2ed28"],["/categories/自学考试/考前突击/index.html","effb655456ced4f3ec1258f0b89d7ef5"],["/categories/自学考试/考前突击/page/2/index.html","c93761884eafc4de4137229b7700826b"],["/categories/自学考试/计算机网络原理/index.html","5731d2fc44c1de77cffaa1859022f55a"],["/categories/自学考试/运筹学/index.html","b6b8ba53bd4c22b6dee7ee6101c3a8ff"],["/categories/自学考试/马克思主义/index.html","dc42b7430fee15da39528e34c3ce117b"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/favicon.png","831793361f36a5524d7c2c8e5a5e791c"],["/images/flags/flag-cn.png","aec786dd377f7498121b2b989285de13"],["/images/flags/flag-us.png","4e484b374a934ec7a0c318fa3039a18f"],["/images/logo-collapsed@2x.png","5a7921ae91c9497d9c479db2ed247271"],["/images/logo@2x.png","7dff419a181fc2ee0d21e7759b9fdff5"],["/images/logo_dark@2x.png","7618f56d3783393049d5486b34c83f1b"],["/images/logos/github.png","3ca867b4d49b00409911b0e7d221993d"],["/images/logos/myblog.png","c65b405af280672770a5e68dbc602608"],["/images/off_on.png","1bdd36870ded5c5d39e24fcdc65b0cb5"],["/images/search_icon.png","73b5f23fe9023e21c9d90b25d73f3881"],["/images/webstack_banner_cn.png","49008f34a922e970792cacb5d17b51a0"],["/images/webstack_icon_producthunt.png","2ba473dc05e96515bb57a7bb00c4d703"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","bbc510c4ff15ab6d393edc68f3415f80"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","aaab9f3d14cc4e86bfa42b28608ba0c1"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/10/index.html","893a9d06a8799775bcb82c2f79580347"],["/page/2/index.html","f35d4ee9a9ede7b0199ba500058c249d"],["/page/3/index.html","8b05643bf4e6e9406ba2a32f5622e757"],["/page/4/index.html","dba5b0205d51e5e293826fdebe0b670d"],["/page/5/index.html","645d3be38b408bb04497377e3e812a4a"],["/page/6/index.html","2163ff2b6e0e79a35da76eb5cf8bcad9"],["/page/7/index.html","302df6f156ab9f6f7bf89771b57c363d"],["/page/8/index.html","a4b764aa6fbe918904ce2ef3da3cde8b"],["/page/9/index.html","4d7961f241400b6c2da0f84e5f852d66"],["/posts/10812f0/index.html","0692543d8477f95a7e14d7d1788a245e"],["/posts/126b275/index.html","f96dbedb667b73390c9d7106660d8e27"],["/posts/12d95a5e/index.html","50d53643eb67de90db6c74dc294c86a7"],["/posts/1367417b/index.html","5e5e602215ce6fe41b985cfc33ddcb2f"],["/posts/13886e3f/index.html","cc762ca057e1f0c1d28a7b0dfe56fced"],["/posts/145193a5/index.html","dad74d0bd735e61d552e1b97a043efae"],["/posts/149dde25/index.html","180d8797e90df90f90104ec4a7de1229"],["/posts/152fa65b/index.html","d5def8ce6d57a8dacae9360c36bba58a"],["/posts/169e7dda/index.html","4725e9d5e36d70d98214fbad888d7be8"],["/posts/1875100e/index.html","9998378396894e918a5dcddbed97aa5d"],["/posts/18eaef7d/index.html","a093ab2ba72a64cc2aa77273f4fd27ec"],["/posts/1a0bc7b7/index.html","422df4a5e21fc9c881d3bcba5f81bec6"],["/posts/1a20a057/index.html","568fed5e750c8e20060f5285a3e83770"],["/posts/1a998be6/index.html","e49d949ba709e0b30581b165582f924e"],["/posts/1bffbd20/index.html","62b348a9690a35c23782aecc7a48b88b"],["/posts/1c5a0485/index.html","8c4ae1014cfda8f8b543e65cc2ae3463"],["/posts/1e638f78/index.html","3e80a97417ed2adb162795f5e1292b10"],["/posts/1e967920/index.html","137b794e9fc1c3e8dbb0ade84391128f"],["/posts/1fb53120/index.html","342211ac52cd2928b3af9cb9b8d182ef"],["/posts/21466e86/index.html","3a2079b022a1302ea6659953ed61d9d9"],["/posts/21abcf1a/index.html","f132ac3edc2ca40fb54575d57c43069a"],["/posts/21c250b1/index.html","226f4d79dc1050122e2eaad106867892"],["/posts/2287cc/index.html","30d8de5d517b86f9c028a9019641d1e8"],["/posts/236bfea3/index.html","9f1881a4fb4c1bf1e2ffa17da66f5c53"],["/posts/24caea6b/index.html","0beff814f099748e64900ac231478130"],["/posts/25d45c3d/index.html","e46a73adb6160fd8625689a6a9db6398"],["/posts/262baa9f/index.html","4879fea2af0d75f3b35955875cb39ce6"],["/posts/26f82f65/index.html","f1a15592c4092a938527a4f5a89f7991"],["/posts/27cdc142/index.html","d84e3c90ac5053abd71e5f6b73e0b4e7"],["/posts/2895c4bb/index.html","d867ddfb50e53a6bce851d00297fde32"],["/posts/28987ff3/index.html","4d37cc94627747d8dd0c2bc999dea606"],["/posts/298cfeed/index.html","800f481514c3129d91648f1170a7c3a4"],["/posts/29f0df96/index.html","72fc464b67ca4ae06ca5afa63059e56e"],["/posts/2a1d2b6f/index.html","698706d30c8ade5b51ade33ad90df7df"],["/posts/2a386047/index.html","6329b39caae44a3dbb6360dd15b031aa"],["/posts/2b2f44ba/index.html","ae315762d205b27c91cc9c12d7159bc3"],["/posts/2b770baf/index.html","20bca12fbc322abcc27a06a6295e5dbc"],["/posts/2cda4a8/index.html","255731671e4572cd12bb8fb0ad3c06cd"],["/posts/2d020832/index.html","5fa421fd7b1b6d8de56e01a767e2cae2"],["/posts/2d6d3bd/index.html","af07e5af25881231a975ec13a85ad211"],["/posts/2e0c129d/index.html","2269e905c2de519e3583b3e48090054b"],["/posts/2e7563a0/index.html","b06e7304bee399d364e93af338307dfd"],["/posts/2e7b8d69/index.html","8eb7245d8a81c5c86713369a57f0b25d"],["/posts/2f28d14b/index.html","93578045d611c508dde8aee75b5b87b1"],["/posts/2f6e1383/index.html","9b39e1d8c8491ac62b3bdb658bc4de8c"],["/posts/30bfd1cf/index.html","4711454b4d279a03c502c7003c85aecf"],["/posts/3270cf84/index.html","99e9e81ca5b335e73106a9f8a33a7e6f"],["/posts/33235106/index.html","f3d18048f54b29981d296757e7eb8959"],["/posts/344e951f/index.html","a63dad11e26945c02a4f3e5f3ac044eb"],["/posts/35e2bcf6/index.html","7fb1879113ec025af845c39819d0b696"],["/posts/365e96c5/index.html","35d4aedb0fd4d23fbe7def3612d36eea"],["/posts/36e331e3/index.html","1f4f21e1686a8a2e913f63be2fbff36a"],["/posts/372df90a/index.html","414eb0ab21b9e775cc3e8390d8d9d383"],["/posts/37c547df/index.html","efc60cc4a4b18c2aa2e7a056177de2ac"],["/posts/380dfa6c/index.html","85bdc6fce1de844a7d6015b36756eec9"],["/posts/3859c98f/index.html","6230daa5a512f222636c7584211e1c54"],["/posts/387564ca/index.html","0cd3e502a38f22f0df34b93801e65668"],["/posts/38a88481/index.html","2ac62ccbaa4a2d2284f7b9573deb7fd5"],["/posts/3914bfed/index.html","f21808abd5e6e77e69c3eda6f4323ef4"],["/posts/3b56780c/index.html","235e7e4cae8abb1533b563e37216e069"],["/posts/3d1ef1fa/index.html","67155a35a748e215b2fdd8c5194f131f"],["/posts/3e4bb613/index.html","32fc2e21baaa28c3e0118f902a0bc713"],["/posts/3f2e933/index.html","0e37c8af58328bac09ceb3b3d72867a2"],["/posts/3f6e5f9e/index.html","7e150629fd937823277398245afc6711"],["/posts/4349a589/index.html","c4d216396b74c633fdd3299ffa98f3ae"],["/posts/44246190/index.html","34eeaa0139dc0754ae7b864916a9743e"],["/posts/456550f/index.html","969869ccc2ed55189825c7ab2402dc34"],["/posts/45fe8d36/index.html","16d1bb4b857e0c6175f77449b5962ff4"],["/posts/470ac03d/index.html","56b7895261981f6f4136d3aadd3ed4eb"],["/posts/470d45ef/index.html","a11a96cbb94dbe49e33592d13e6e42f3"],["/posts/4894629c/index.html","5b8be0b261c95d9dd8ab1c010f417ef5"],["/posts/49249ac9/index.html","fccbd26267388abc324cbd674d7bebda"],["/posts/49f2d2a/index.html","76e47f94aacc8e78e3e454164610e305"],["/posts/4e6d4eb4/index.html","612c99ce4b074a7ab29ea8652bf5ca51"],["/posts/4f346c5/index.html","6cd07103850960cbfe8843a8c5e9fcca"],["/posts/50caf1d4/index.html","75344443169675cd8bd56e179780b91b"],["/posts/51139400/index.html","39ba570029ea23e929c9a0c181921e43"],["/posts/512c9a09/index.html","8718a2a5a96005d02551610a50776055"],["/posts/5205b330/index.html","a75c90cfab5bb739d3edf35eec3f0448"],["/posts/52d36cab/index.html","ba5a51687b49854fa9977bf7880ddfc0"],["/posts/532a083a/index.html","74a805ca50326118c16c6a6a91193abf"],["/posts/537d2c2a/index.html","1a16675cb4f48fda72992eb33969e05f"],["/posts/54383ba0/index.html","9a899adaaa5640bf99f7345d1af0faef"],["/posts/54667693/index.html","12cf59b3a11134ffacc5a75ba4b961cb"],["/posts/54fbed4a/index.html","6375cc78142a9cacd9054d0f47c1940f"],["/posts/5508212c/index.html","02d7bddbb7828e8fb6cd47254859aea5"],["/posts/56760226/index.html","aff18e97f565855ad21fb136b2e23ef5"],["/posts/571564e5/index.html","57176e90d23b5d417238cb6acba31469"],["/posts/57900fe5/index.html","f87f2c4fcf1a4a1e0a4be4ebba729f2c"],["/posts/585ba415/index.html","1b47a4cf820a41f475d7e1bab5da97d4"],["/posts/589a214a/index.html","15b846576f276868e9a4f230beec7946"],["/posts/599a2b19/index.html","0060622d5e82f6b8f7d39940d5637721"],["/posts/59c05382/index.html","ce3e0f1ce521ebbf9d20661f6e82b6bd"],["/posts/5a5294c8/index.html","8e52f2a73e18f46a20543e0b72409b2c"],["/posts/5d3da28e/index.html","9bdae2bd490f1e9868b567e501336359"],["/posts/5d3f50d1/index.html","cfba4eb5a0936d6cbb7589681ca5ceed"],["/posts/5ef7ef00/index.html","2bd91f697bd16130698f53dbc68f53fa"],["/posts/5f1fa8df/index.html","4383afa81dd19fea6e99f294b7cb8180"],["/posts/5fba84c3/index.html","036d576fba13d8dabef37706bbbe76c4"],["/posts/60b5dd06/index.html","47ed2fb08dc92d0096eaadcd8354758e"],["/posts/61057c88/index.html","8db1f6d87a1e0291c7fa31d5cbc37a16"],["/posts/61477045/index.html","5b759c6cb06cfa7813d861283e722c6f"],["/posts/664423f6/index.html","87e7274442eabf20b5f7e2a3e50318bc"],["/posts/69d79f93/index.html","62703a7e03cb95bf29fb35c20ad86f6a"],["/posts/6b2f046/index.html","a0c9986499c289f2e11e7ca9be582123"],["/posts/6b4610c4/index.html","96034a80a24971cae5d9fd1b60f5ccc9"],["/posts/6bbf03f0/index.html","aef33c29f2f1898f51f858bb6ccafbb6"],["/posts/6e7b67e4/index.html","c31604b3b5d610e08e928c8ded46dae5"],["/posts/7000d139/index.html","059787679f7eff4679647d4223e02e0d"],["/posts/72f94093/index.html","7b1c2fe056f54711190d1f508d50ab22"],["/posts/7380b71/index.html","5148415a8c835a0f01f9761fa8ec7176"],["/posts/738eee3b/index.html","8b404cbfbe7937773f2ebe913dea2fc3"],["/posts/73981dbc/index.html","21561f1770c7d92be8c3439406546b05"],["/posts/74d60fd9/index.html","f4e941c18ab255bbb85ca4bfd2fb7410"],["/posts/74f5d9a5/index.html","396ee871984741b767e69f8e0270e5d4"],["/posts/750f2ce3/index.html","6dec74782e61342ae8eaa54835ad6c58"],["/posts/75ceb627/index.html","293368ae19ff95fc2c9601af810e088e"],["/posts/7725b75a/index.html","6501050eb3f74884322c237e357a235f"],["/posts/79ef335/index.html","093d7f3ef45d2f2c856b20df1e86f420"],["/posts/7a228db4/index.html","8437dac5c9a637a1cd35209c5aa66949"],["/posts/7bbd3149/index.html","36c561ba0176f359c81aeba42e892a11"],["/posts/7c20e8d5/index.html","2f8ded2ceb77fc9e9f26ea88212eb418"],["/posts/7d3ea75e/index.html","e537f57dbf6a54edb5e4257afd60899e"],["/posts/7d43958e/index.html","d8112feaff8f21f8d00391549a1cbb6a"],["/posts/807ac7f2/index.html","5b558f6b211b30f9b98789f7f181ecc9"],["/posts/81738fa0/index.html","3419b254a9b94eb5ee10afb94fa071cf"],["/posts/817c41b4/index.html","f1dbf2d78f059b7098c430eed730d7b5"],["/posts/83f13096/index.html","44666f1deb4176a3b0b41f7f326b67d0"],["/posts/84ee8e34/index.html","af64d091816bc825590bc86eec78b3e8"],["/posts/854d07da/index.html","b70d73a71ce5a5a4e331895677cceba2"],["/posts/86cad295/index.html","a57c0c6fb6a98f3bfbdbdd25a9fc79bc"],["/posts/8833154b/index.html","dc08f697a6a47ad5e2aab6419aa7b659"],["/posts/8837602f/index.html","0c662059ad60d0f18e6d73a477761192"],["/posts/89589a03/index.html","34b39cb34878c544ce13e26866979647"],["/posts/8bcef008/index.html","55790a4876240da0570fdc1766f1fed7"],["/posts/8bf9abeb/index.html","552619230e2bb7f6e082dd1fe64dea86"],["/posts/8e5f5686/index.html","46f1454c913348f4dc7a2087c1a33cde"],["/posts/8fa6b8c7/index.html","d0adf5ced9b318adfab02762910142e6"],["/posts/9029a3de/index.html","04f033acbcc7c5cccd8b37d91edebfc2"],["/posts/909d9a5d/index.html","eb33a09cc3d93a9fc78719b419ff211d"],["/posts/91404b94/index.html","a05cfb5654f525fde1f7c54e64d97867"],["/posts/932e3747/index.html","cd1a5cc01e42624314e8d559a0a9c2f7"],["/posts/95fc9e6e/index.html","82490965d53e4357f7251a0fb3db162a"],["/posts/98e67280/index.html","c3c205b067ad7fa61362e8ac475106be"],["/posts/9a4d13ef/index.html","b9e0be289634c9060d8f11e621c0d75c"],["/posts/9afbb889/index.html","058ec7e54d134a3c5a78a98e74f9464e"],["/posts/9be63ba/index.html","72c10915a6935b6e3a6703db875cb163"],["/posts/9d967c90/index.html","cd2a28a939e2d6ff73d212a8df93ad6e"],["/posts/9eadcdf6/index.html","ac89af1a6d24be5bac6aa5148117bb63"],["/posts/9efd76a3/index.html","7bcb9a3fe33897223284c32c5e40e172"],["/posts/9f97db8f/index.html","2f6440fb37272a20ee43b9a064d3503e"],["/posts/9ffb4388/index.html","f6a360b05b5302bff5b710ac274f5701"],["/posts/a094d027/index.html","cf4ece671bff4052d279f9a396d59eee"],["/posts/a27042c6/index.html","28ea494ce6d5b6e6e76355f7ed25e40f"],["/posts/a29cc732/index.html","04ac56af036b8f9a2ed31a52b7cda65f"],["/posts/a44a518/index.html","c9a6d1452526844e0035e254d465b599"],["/posts/a4f2a748/index.html","009726bec9246aaf7c94bcc400ae7153"],["/posts/a7dc32c9/index.html","7d664850963770e347fec6b54a3be48d"],["/posts/a7f753ec/index.html","1a9c11b37e268101fd39f27e11bed90d"],["/posts/a9168bc5/index.html","f6a12455f254729acab006d3da64aff0"],["/posts/ab176793/index.html","63eab202dca4671e4c9a529c9045f766"],["/posts/ab34095a/index.html","0fc7e4cd3e9d201a2a3e2cecadc499d1"],["/posts/ad47c4a5/index.html","79b92020100af49a0cff1cb18bc887e8"],["/posts/ae8f7b74/index.html","289f141318fd33db15fb50c6216f427a"],["/posts/af43816b/index.html","d47c5e80700d7a547b506177291a49f9"],["/posts/af9e049c/index.html","9200459e470a86191351af764e69fb54"],["/posts/b0f1a367/index.html","ed6b85453f6c8b2bab12ceacf3b0a3f6"],["/posts/b0f98e2c/index.html","274baedc47fe7b43dc99999f4a316dd5"],["/posts/b33131fd/index.html","69584225132c7d89a8212a6eba1992a5"],["/posts/b36eb520/index.html","20e43c3e082521aea88fc35610c8b726"],["/posts/b542fc02/index.html","46b296f6e0ab91451ae19169e6adcb02"],["/posts/b54eeeb4/index.html","0ead6d2362f2a1174f5c0ec327da4821"],["/posts/b84f3f3c/index.html","3fb40914be7499f76ec7143275c66e11"],["/posts/b9325cf5/index.html","2b12854fde51574d345768b76532f722"],["/posts/b94fc207/index.html","510be43ae00e35c7ef89762107fdca43"],["/posts/b981a6b4/index.html","f33a3da8f0cd61e9360dc2041e804aeb"],["/posts/bcea326a/index.html","8530489a00ea9fbd1c19635c5778febb"],["/posts/beb19e80/index.html","275d2052179051bced7a19909115b074"],["/posts/bec490f8/index.html","db8b5870f8e25cec121636e24e20c1ad"],["/posts/bf7bde0e/index.html","c9c5f01f214c3f1b22a3a1d3d1d0fc6a"],["/posts/c03f17c9/index.html","f0e083669803b450c0b300995de76bf7"],["/posts/c35bc572/index.html","d2dac237dfc6c7f4f80d24b57862c3bc"],["/posts/c436016b/index.html","136fd6aae7f11fd10ed4cab7ca3f377b"],["/posts/c4efc741/index.html","b0e98999a479ac0896c90dfb5408d5aa"],["/posts/c5e8a08e/index.html","15a6e64739348f78eedb989a99d727c5"],["/posts/c7646f1a/index.html","3e694f00388889efe253d1b930052239"],["/posts/c7db1dc0/index.html","2dc40709bfdbd371e06fbe719097da57"],["/posts/c7febeba/index.html","03f60d8be58ad642b8497b0c85bb618d"],["/posts/c9c3a06e/index.html","3ca9a82687f66e3da22d4b6735e34b7c"],["/posts/ca657192/index.html","59c5ea75e92dc2008bb7e006c60083de"],["/posts/cc6d2cf2/index.html","a7e8b82d74fa541c420676aa9e02b5da"],["/posts/ce48f291/index.html","fb6bc10e63ec2ad80356f8de56ec7e81"],["/posts/cf480faa/index.html","0f7fa085555ab2bea531834b89230d81"],["/posts/d090b4d/index.html","b29b984f1b2a1ec4219836211ffb8a2c"],["/posts/d1995044/index.html","224df7be7da7b84d6bdefa9c385a8221"],["/posts/d2d34977/index.html","e6fef83c047e37d505d10353b90e73dd"],["/posts/d3647a92/index.html","7170cca5cc6e16cef8aaaaac79d53388"],["/posts/d3f6b818/index.html","4a27186f279e2f1466ce89924bbb8d82"],["/posts/d465029c/index.html","9b1176c4d44d81a4f024243df297506f"],["/posts/d9884be2/index.html","e31a8d33433e86d364cd08ad32436cf9"],["/posts/da40f433/index.html","61020181470a18b7e35e9d2373294ebd"],["/posts/dae71d5f/index.html","e6ef33008cc8095c2da0d162e339bbc6"],["/posts/db9fbe47/index.html","7268d4c8fb3f1f7ca2664239fe6fab7e"],["/posts/dbba997d/index.html","b3361a348f14c32e002aee75c31b1ff5"],["/posts/dc94f8a1/index.html","77d357f0bd307624068147fd00df5347"],["/posts/dfe9b67/index.html","bd83241496a172bdde57c37f179bee00"],["/posts/e0387d80/index.html","3d2d15dd485e17eff6590340d8365980"],["/posts/e356f7b3/index.html","1d622644e8c76cc06589d0bcb5a74645"],["/posts/e3acb366/index.html","5aa4cb45322863e03607df44eb00a43e"],["/posts/e450354f/index.html","b4654576b99fcf5267830373531bfc57"],["/posts/e489223c/index.html","5a828da37848be5f6cb1b4c36ac948b6"],["/posts/e9a8ddd1/index.html","b5e0e9a6536ffaae851cc3d10461b8a7"],["/posts/ea914c06/index.html","dc3d6d077f06c96f148d07547959b182"],["/posts/eaa8f31e/index.html","c4ce80d700aed49ab74499b124d6435b"],["/posts/eac19412/index.html","b1dac8be5d8467ed8db4425e1f975bfe"],["/posts/eb0c9e8/index.html","c26c2b0208aaa48682a6cd5da4a002bd"],["/posts/ebe408b3/index.html","e51324d4f79ed5cf910aa6cd556c504d"],["/posts/edfc881f/index.html","c86a4acdde3f9f253fdf90b91d200a19"],["/posts/eec0bbd1/index.html","3a50e19369615afa456fdc806b509f20"],["/posts/ef22c7c2/index.html","50225a9696d7066d174ace5d48066fa2"],["/posts/ef271825/index.html","81920a2a137fecba0316b850ed22f1f3"],["/posts/f209578c/index.html","abf75f736bbaae8a989b34fd925a70da"],["/posts/f3e9bea2/index.html","cd506224ae3203c073ab14e65f78e0ae"],["/posts/f67b7122/index.html","95adcf1ae0a49fc659c140643977e876"],["/posts/f7abba28/index.html","4d8396c3f1d1630e03725cbeb427fbbb"],["/posts/f7bf33eb/index.html","7695bb1f7f9028c0f436d2cdb3f49bf7"],["/posts/faffd764/index.html","cd5d2ae9ae9e963911ffde7d0ddc517f"],["/posts/fb684fb0/index.html","8afce0063fc6dfb0373126d7def02e9a"],["/posts/fc57199f/index.html","b7807e5dd5dfe90d8e377f5022ce4574"],["/posts/fc6e9a7d/index.html","72fd61912fa31c5be1ea2293f9b633eb"],["/posts/fc7bc02a/index.html","7c6efb85549a533925e7c0bdcda73cba"],["/posts/fd67c5cb/index.html","65c2718f9c5d01a578cded35668643a2"],["/posts/fdde061e/index.html","97833d8decc19b28f427148b1fb1f35c"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","8f7ecc6eb1757bf1c9a06d293545853c"],["/tags/ES6/page/2/index.html","84b0e9afc4f419e9345dae177f32fab7"],["/tags/FL/index.html","87883e3d52323dcc8b8075666816da56"],["/tags/HTTP/index.html","90f441a9abd6c07449cd9e7a016e60bc"],["/tags/Hexo/index.html","0f5c1dc9f14203920c1799ba0aef53ed"],["/tags/Hexo常用命令/index.html","6e05eec02f82e1a3b7a0fea94474a088"],["/tags/Nodejs博客实战/index.html","45fc824b0e6610351525683ebf25a435"],["/tags/Vue/index.html","12137262d90c4b0ff70c4fdd764aca04"],["/tags/Vue/page/2/index.html","52180070c9fc6d06574d4fda2caf839e"],["/tags/Vue/page/3/index.html","38101242dc88b7e092a6503fb8701925"],["/tags/ajax/index.html","9e2f3540b0d11d4eb1a6b5bfdb0fb61b"],["/tags/ajax/page/2/index.html","ef3051d011ed47536b3867a1704a8a6d"],["/tags/curl/index.html","0457f61649465fd4b64055960dbdea34"],["/tags/index.html","d2a178b8a06cf6808f0ab92d26968c42"],["/tags/json/index.html","ac1dd1af545c035c0fa6dcec2aa6a8c3"],["/tags/mongodb/index.html","c593fce3d7dd52ee2c7b39ba2b54d49a"],["/tags/nodejs/index.html","99370a4fd5c06b55d94e6a3502f26d4d"],["/tags/promise/index.html","d7dbd538f405a6ad8941f339fb1672cc"],["/tags/中国近代史纲要/index.html","3e671aa7e0080df02977ca232d05ce32"],["/tags/日语/index.html","4f54f3211135dcc4a47d461ca9c76bdb"],["/tags/标签外挂/index.html","464f166af5515e7eaf6d9945fc7b2c6d"],["/tags/目录索引/index.html","653a05734c96b1a8cc846e1b55a4f276"],["/tags/管理经济学/index.html","2a8c1b67afd437223fe21bf8f4db9877"],["/tags/考前突击/index.html","96eb4f9159f8c5abe7ef17ebdc04bf96"],["/tags/考前突击/page/2/index.html","bd7e02897cc4b2b121e2046649520a5a"],["/tags/自考/index.html","2d99363997c35bf5504aefe7ee9c6284"],["/tags/计算机网络原理/index.html","f9964f5e7616c7dde057666a87861bc9"],["/tags/运筹学/index.html","f09d62cf985970d0b37aa75fa5875955"],["/tags/马克思主义/index.html","43089296b15fd8bbdd1580ffa5500fe3"]];
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




