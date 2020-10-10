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

var precacheConfig = [["/404.html","e16e669b7ca9c6b55dec080f84b789cf"],["/about/index.html","342c4194a150b04317c8232dbee07cef"],["/aplayers/index.html","5bed6387f0fa588405cd425a65066c64"],["/archives/2020/02/index.html","663a1fb018af72c3237575df2127b10d"],["/archives/2020/02/page/2/index.html","545def64531b6938636e1dc0daf016ca"],["/archives/2020/02/page/3/index.html","371e73a887506df2ce7a6faf416fd34a"],["/archives/2020/02/page/4/index.html","385c2362ec8b16d570145b3eb1ba90c0"],["/archives/2020/03/index.html","14034c64f9e44a1b47a937e6d2e2f97e"],["/archives/2020/03/page/2/index.html","1a94cde41f244c27b1d110ddafc5619e"],["/archives/2020/03/page/3/index.html","709e02d2dc2fadbe07a3aeb8d52c28a3"],["/archives/2020/03/page/4/index.html","c1681d823e317a532e82e040e2fa6500"],["/archives/2020/03/page/5/index.html","70fd0f958f53d77152f92aff0935fa91"],["/archives/2020/03/page/6/index.html","52eff5c7a4a3f5425e75b25b72675ca0"],["/archives/2020/03/page/7/index.html","ef25aadd04a5dd5209db5eb486ba88b1"],["/archives/2020/03/page/8/index.html","2a6a6c79b6894e597e53ec17be54f2f6"],["/archives/2020/04/index.html","5d5874acbe2afe76e404b38375a5eca5"],["/archives/2020/04/page/2/index.html","e7049c336d0049a8b06660d0d456e8ee"],["/archives/2020/04/page/3/index.html","bcc20a8c0882beb196620923b09a2735"],["/archives/2020/04/page/4/index.html","88a8ff8865f76def84f1e59b1344fa11"],["/archives/2020/05/index.html","d0f492a3f6299af37b7b5f72a8086bc9"],["/archives/2020/07/index.html","af10e25f40325c6fe1d4ea5698afad15"],["/archives/2020/07/page/2/index.html","c24e63a92e349a14c1c0b60e9c57683d"],["/archives/2020/08/index.html","eff718cd75e6c453e0c7a756154435c9"],["/archives/2020/08/page/2/index.html","98a68313c21537277e65e7d1c6431a7c"],["/archives/2020/09/index.html","b3a60dcb1fb16bbd13adf5e605d7b7a6"],["/archives/2020/09/page/2/index.html","70b370bc5cf67ee377439986700c200a"],["/archives/2020/09/page/3/index.html","97520feaf396a506fdb63870bcda4c8a"],["/archives/2020/10/index.html","7fd5781495f10d01619cb557e72308ae"],["/archives/2020/index.html","56dbd675026c22710258cc6feb58f6d9"],["/archives/2020/page/10/index.html","d04163fc78def9e3683530d1a94631ee"],["/archives/2020/page/11/index.html","7e1750c9cc5e165a990c9043f043bd5f"],["/archives/2020/page/12/index.html","de7f7d80ef3b9bdbd1bbef84338c5fa3"],["/archives/2020/page/13/index.html","ce43e89f89bd52dc48d9dea3ea9f1a53"],["/archives/2020/page/14/index.html","9ff67ec9f2553c90b839b4ac325b8ac2"],["/archives/2020/page/15/index.html","86682d73b237e23c6dfd5fe371c3b86f"],["/archives/2020/page/16/index.html","1bd4f8d02bfa3af771b6b748d6aa0f1f"],["/archives/2020/page/17/index.html","80467f9b32c192a60d823f479353f2be"],["/archives/2020/page/18/index.html","ec36365ffbf1797059cfd16272778589"],["/archives/2020/page/19/index.html","014408db8f0d27cb248a01009261bf05"],["/archives/2020/page/2/index.html","9e438c8907fb1110c4b1620f3dd639b0"],["/archives/2020/page/20/index.html","c4c3174e036b124af7a85664c342ea63"],["/archives/2020/page/3/index.html","fe0b0b45efc2d4a8e79471aa103f7a1b"],["/archives/2020/page/4/index.html","ca6b0dde66cb49fc3ff7a911282ec67e"],["/archives/2020/page/5/index.html","af9e67445e974921e632e455520da23a"],["/archives/2020/page/6/index.html","b0f8fba38d726a8a0d431e7adcd48c80"],["/archives/2020/page/7/index.html","07ff1fe31a58ade6be8091481d990308"],["/archives/2020/page/8/index.html","c52237f8f66aacf8855f7ef8d26d95ba"],["/archives/2020/page/9/index.html","75d19c799c306f0c8fef58019058e2fd"],["/archives/index.html","235f3751890d9243deea9cef54bad46a"],["/archives/page/10/index.html","6633d0818ab7f62b575b9a98766fc133"],["/archives/page/11/index.html","9e530851855608ddc1028da1341d20b4"],["/archives/page/12/index.html","9d6600b1cd66c3af0c0552fc4491c1ed"],["/archives/page/13/index.html","4fd88e86a7db5c9f9f4db05736dba332"],["/archives/page/14/index.html","893051853e755928bdabd1cde9a4757d"],["/archives/page/15/index.html","246c6c8637e2bd918e7e260a218e5357"],["/archives/page/16/index.html","f7d7e6f1ab076545cf2f1dca1583b102"],["/archives/page/17/index.html","7552504bd6f88b406b6b3e7ce0b63812"],["/archives/page/18/index.html","7c188526436dc152ecd124a2a04da6de"],["/archives/page/19/index.html","fc97cebac6dd57f3b13e8f2d29178183"],["/archives/page/2/index.html","fe5f237ea7860d9361ef6b7adc1a3c08"],["/archives/page/20/index.html","acb2e2197e1ec89bc55264847fe51cad"],["/archives/page/3/index.html","4395867c040b85cd3a0b286ad9abd213"],["/archives/page/4/index.html","27d9392f574b5ed0637a05e846964384"],["/archives/page/5/index.html","3ecd6765ff7d466499553e6fc2d2caf1"],["/archives/page/6/index.html","7851050efc131113b89ac42c65a1b438"],["/archives/page/7/index.html","8c311d2d85e2b525c027e4a662388a38"],["/archives/page/8/index.html","f314341829edb3ae139d6003209ae266"],["/archives/page/9/index.html","461632def7cf172422b657bd45894324"],["/baidu_verify_code-f31n4EzMWu.html","5bb24409b3c9ebd970ae26c977ae4432"],["/bangumis/index.html","e2e67d6ef37e8ba2bdbc4f2a5df128e7"],["/categories/Ajax/index.html","d44182183dac4d29a641ac9612944654"],["/categories/Ajax/page/2/index.html","c8f623a93d665acfd1d82c40075f0e39"],["/categories/HTTP/index.html","4ab0d7d32ecc714a2b68f0d7e3c240fe"],["/categories/Hexo/index.html","4c88297d5692366ff46ddddffe09bb3a"],["/categories/Hexo/标签外挂/index.html","07b434b7c2851ebfa3d1aaec3eb5b582"],["/categories/Hexo常用命令/index.html","f2c790a40ec8bc2666c667d71a0817f5"],["/categories/JSON/index.html","7da7fa2ba70b87c93c4d055cf7d56a15"],["/categories/MongoDB/index.html","73dd8e8bafebcb5b2ae1c598321431c0"],["/categories/Nodejs/index.html","1cdce83d9bf72ddd5bcfed1d50f1befc"],["/categories/Nodejs博客系统/index.html","6666c258a3f69ef391db7915ca347efe"],["/categories/index.html","c1a57363ab4bdfd1640104bada9e5b8e"],["/categories/promise/index.html","b63a28391f740bef2556eb65ff6b9273"],["/categories/日语/index.html","adfd43473f68bdc38dbb2b67b0a3a779"],["/categories/自学考试/index.html","afe79971f7ef36f856dd9831b03a0b0d"],["/categories/自学考试/page/2/index.html","71ae01f2d9c7eb7a54415eaf64947127"],["/categories/自学考试/中国近代史纲要/index.html","02f260655ac0b6576b5fad1ebb2251c9"],["/categories/自学考试/管理经济学/index.html","9b519c23cb141e73ea325e7966cf4925"],["/categories/自学考试/考前突击/index.html","bc2187cf20cc1017ce57ddf789e49a00"],["/categories/自学考试/考前突击/page/2/index.html","6373baf113fa10ed3af7db420c035ad6"],["/categories/自学考试/计算机网络原理/index.html","60efdbe21f47fc8359e58ac7a243999f"],["/categories/自学考试/运筹学/index.html","51bc5451dfe3286de32de8e2977af7ca"],["/categories/自学考试/马克思主义/index.html","0266ea41aef79ce260a692e85656432d"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","bde8c2c722546d6c3c72d83e33f9c6eb"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","910705c303a818f81f9ef2163acd1364"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","7b23443b927154ecf26b9adba67f2cc1"],["/page/3/index.html","79bfa3b40c25a2da6348ee9474d43e33"],["/page/4/index.html","21d54935aabfcfcc4ca75d900b360a60"],["/page/5/index.html","ae73f783be22269ae97e9de565be8654"],["/page/6/index.html","81ace175362eaed9d311c4d9b4d1e961"],["/page/7/index.html","3d1e0e11baa35f1997e9b22ae45c88fc"],["/posts/10812f0/index.html","406a7b86c20eed734e73bc490ee27b2d"],["/posts/126b275/index.html","098787297499b1d8dd627ac73439554e"],["/posts/12d95a5e/index.html","3df1d7231a4701c05a4b9b9c70a35ecc"],["/posts/1367417b/index.html","8f34f6186a925503c5ec39ea58cdf542"],["/posts/13886e3f/index.html","d867cc1f581b18fad65902031eb04816"],["/posts/145193a5/index.html","15246dc8e9db3e5127ca815af835bbe6"],["/posts/149dde25/index.html","f9ce94808e4b85d1176cd04431da63e3"],["/posts/152fa65b/index.html","ac5acf6773f73f1f0b80eb282451d2e5"],["/posts/169e7dda/index.html","20d2533a5250edf3423dd96206e76a50"],["/posts/1875100e/index.html","df8a26c83e5db2b1075c1dc274c6d642"],["/posts/18eaef7d/index.html","1ea6d1940403d50672b958d7d6e596da"],["/posts/1a0bc7b7/index.html","9119a60a8843793e953bef3a1fb51b3f"],["/posts/1a20a057/index.html","92b7e51136f2b330c877b2748c0a56f9"],["/posts/1a998be6/index.html","f31ea1b7f10d8a446e4e957213aec4ad"],["/posts/1bffbd20/index.html","ef7b2fd8d9f8740718472abb7c76dd5e"],["/posts/1c5a0485/index.html","cd288769e47b6165542cd2a09fb82a26"],["/posts/1e638f78/index.html","f0aeb748c7c3860d06d74bef42fcce3b"],["/posts/1fb53120/index.html","9c2cf5a388add7318bf7f33f385333c9"],["/posts/21466e86/index.html","2169913a9a3660c0a9ddacc7db20ee89"],["/posts/21abcf1a/index.html","5133133e84828e3eeec58ed709d842c5"],["/posts/21c250b1/index.html","9831f7f54190eef4227fb7f53410c14c"],["/posts/2287cc/index.html","928e14e58db3799be30a012db77ba00a"],["/posts/236bfea3/index.html","7dd0697ecf34a047b135db32c14048b3"],["/posts/24caea6b/index.html","0c18a4567c6e7d47b6daafc8bcc7fbbc"],["/posts/25d45c3d/index.html","03a1e67d983ab89a7ec42d199b40c7e0"],["/posts/262baa9f/index.html","0b1b5b3103c5f541235a7c596e0d9d04"],["/posts/27cdc142/index.html","278c1a9cb3e8f2ca5b92de8ae5df12b7"],["/posts/2895c4bb/index.html","b1ac3cf65ba22e6b24227d5fa181d1b4"],["/posts/28987ff3/index.html","35a6a3cea4d1ce32f6c4dccb19139111"],["/posts/29f0df96/index.html","a9610f9be81d90e69cdb1017c0a7115b"],["/posts/2a1d2b6f/index.html","c2035464ae0ad5ae76c135b334b066b5"],["/posts/2a386047/index.html","ee8a6260aa4c2e241726aa244d550300"],["/posts/2b770baf/index.html","c332e4f1c97ea637750e518a4e77d604"],["/posts/2cda4a8/index.html","4cf8c0d895d99a761a7a4acc43526f33"],["/posts/2d020832/index.html","066b4309487525af6d13fad70c49d47a"],["/posts/2d6d3bd/index.html","5a32e16b48bec245c1500e74c45510a9"],["/posts/2e0c129d/index.html","93a1ef23cbde84677d801baa272d7781"],["/posts/2e7563a0/index.html","48e03222139800fe8b35b06c9e39c336"],["/posts/2e7b8d69/index.html","3a7a57ab1c998f29ffaade6395678166"],["/posts/2f28d14b/index.html","1112c51b35f97ab45e05332e1e65f529"],["/posts/2f6e1383/index.html","087d174ffadce0b404af80dd095557fb"],["/posts/30bfd1cf/index.html","285e360ebd09bfaa4ee4b24057b138f1"],["/posts/33235106/index.html","bbe17cd46de194ae5c3d39cd8e5b15b9"],["/posts/344e951f/index.html","b15ebc454ec9a202885315655879e05a"],["/posts/35e2bcf6/index.html","dc82b9f612c29cb909d4aed82b11721d"],["/posts/365e96c5/index.html","7f18489b4d72a71ee545883afc00b86d"],["/posts/36e331e3/index.html","c6a940c07fefc382fd1988812d4628fa"],["/posts/372df90a/index.html","8ceda3a6748f3102442f3e3ab3f4cf00"],["/posts/37c547df/index.html","454e79161f8455a51db80316ee5be89d"],["/posts/38a88481/index.html","042474bb0414ddeb2e4d324f322c3d32"],["/posts/3914bfed/index.html","575cecd79843b8ef5b5c76e236182aba"],["/posts/3b56780c/index.html","a4d976083469e933fdaa44d2fe255af5"],["/posts/3e4bb613/index.html","14059f69de51f5a25acaa4fffadb14e3"],["/posts/3f2e933/index.html","8f7fed13aa05a99b10b9014bc597b840"],["/posts/3f6e5f9e/index.html","f879a975d2bb57fb96cfb9e6b61292da"],["/posts/4349a589/index.html","93a82c4a7241d693ea33af45cb3dc6b7"],["/posts/44246190/index.html","6ae7fae206939eba1928991cfd161baf"],["/posts/456550f/index.html","7e0118957a6119887f6ae934711d94c7"],["/posts/470ac03d/index.html","7bd100565896193ad38c76cb74e8f008"],["/posts/49249ac9/index.html","954548b4385db3b57fb37d7c00a78f82"],["/posts/49f2d2a/index.html","3aecc6d321b843495f2ae01fb67bbcca"],["/posts/4e6d4eb4/index.html","b905e622cc91bdd11d34565670a4063a"],["/posts/50caf1d4/index.html","645b17915db4be0b3fb79c6b59188275"],["/posts/51139400/index.html","04f16fc8f0d2f60273a1e64364b6def3"],["/posts/512c9a09/index.html","98ea160c5d656dfb6cf540e610d03115"],["/posts/5205b330/index.html","69ae40187cbc8fdeb1c62e4c6293406c"],["/posts/52d36cab/index.html","b7dee1712983db2527a421c334afe899"],["/posts/532a083a/index.html","b3a3d78c535af34adb820cd1b0056163"],["/posts/537d2c2a/index.html","3e7e713dfee35578e9e0c3d7f816a944"],["/posts/54383ba0/index.html","2e67a0b76d437c4780b69da479d29c8e"],["/posts/54667693/index.html","d6f58647d1e3b10af07c4a1d57b731c3"],["/posts/5508212c/index.html","0aeaaa0f558b56fb6c4fc5b4602fab82"],["/posts/571564e5/index.html","211812017b5f8bb4bfb671baad59ed56"],["/posts/57900fe5/index.html","f613cbd432ee8b42a582978b01e625b8"],["/posts/589a214a/index.html","090a92ae6cb59622b19d75db2918ec15"],["/posts/599a2b19/index.html","c93e6429244e7608651c15e30e720745"],["/posts/59c05382/index.html","5cd6e391085b03ee8d99a1cbe85f2070"],["/posts/5a5294c8/index.html","1f64e762f72cf4c44c0a325911f4c8f3"],["/posts/5b8c69d5/index.html","c45982b424cf7dec53aa3ae77a6c74a2"],["/posts/5d3da28e/index.html","7daa54638c884288fc13d99d6c7bc705"],["/posts/5d3f50d1/index.html","5b5fee93e3f3c607827a66892d20b502"],["/posts/5ef7ef00/index.html","ade0feaade822a8f2476ead99879d79b"],["/posts/60b5dd06/index.html","4de1038e98ae1cbb241f23a0f62e8fe9"],["/posts/61477045/index.html","ec10c7f5f1e3b327f34bf149f68f5275"],["/posts/69d79f93/index.html","9f1b54b05ffb02f0ea20bfd7c7a1acbd"],["/posts/6b2f046/index.html","37f83958cce20151e9513beb70b6f2dc"],["/posts/6b4610c4/index.html","863e7dd07753add7cb90145b43f0df6d"],["/posts/6bbf03f0/index.html","81c08df3a10c4600fae0b30c2d4c90a1"],["/posts/7000d139/index.html","c6545aa30c11855ee7fefaf9e688a08d"],["/posts/72f94093/index.html","8d8fb4432ee4b32987cfa8f6033dc7f8"],["/posts/7380b71/index.html","743603d5b4b89bfd880b79ac5c69b2a8"],["/posts/738eee3b/index.html","950d85a1da33e9c7641745ba67b2abd6"],["/posts/73981dbc/index.html","186e953eebf20799c7d2be75025806e3"],["/posts/74d60fd9/index.html","13ea8452bc54e269a3394eeae23b8dbf"],["/posts/74f5d9a5/index.html","a4a52a56ff67fbe044a358bddc06b704"],["/posts/750f2ce3/index.html","f2a9e6ba12504700c10025ea08ad9c56"],["/posts/75ceb627/index.html","0d3667d37a43ef04b2e4ad286219a987"],["/posts/7725b75a/index.html","21d6a7bec033f52d1646925f21bebce2"],["/posts/79ef335/index.html","467fd49c75480eba6ef4e8b7df1eea6f"],["/posts/7bbd3149/index.html","d23c09d0f81b99b800a9116a2dd47e9d"],["/posts/7c20e8d5/index.html","0c19a6e0e8f87ebcf09fd0eb7231be76"],["/posts/7d3ea75e/index.html","660258f21f23edd33a0aa6b373263e49"],["/posts/7d43958e/index.html","15dd68a5851dcdf5cd8520237aa75357"],["/posts/807ac7f2/index.html","6839a2b87bae34eb716e0901c9710385"],["/posts/81738fa0/index.html","1bfdd027e87152156b6e14e389f0580c"],["/posts/817c41b4/index.html","c7040a0b3c735d832f252d5c20ea92fe"],["/posts/84ee8e34/index.html","3c163a52f23a7bdf08df87b12deb6557"],["/posts/8837602f/index.html","53c37188859e42a9dba2ff2d3b3ab0d5"],["/posts/89589a03/index.html","cc9bde80737204c83d5adc804bac6940"],["/posts/8bcef008/index.html","9c2f38ae13f15cc74eb8a370f042e78d"],["/posts/8bf9abeb/index.html","229401f4a9f4a483da470a8339e1e19a"],["/posts/8e5f5686/index.html","2cc5c28f843c6bab74bfb5eec4ee4083"],["/posts/8fa6b8c7/index.html","e75a811ea3c80578ff75194c2800f356"],["/posts/9029a3de/index.html","357e45acaa9f9b9d0330b5fe4790c883"],["/posts/909d9a5d/index.html","1b6f57c80d4eebc551c1dd3613ce82f2"],["/posts/91404b94/index.html","9f10e708cdd737b632edfbe3123621d8"],["/posts/932e3747/index.html","3c94640175ab784829c439f92a0b07aa"],["/posts/95fc9e6e/index.html","8d22da9ccd725cf1f1c57cd41e60d940"],["/posts/98e67280/index.html","41b0117afb5e83cd84bc09459b10530c"],["/posts/9a4d13ef/index.html","874597918805baf9904bbc9b742536ff"],["/posts/9afbb889/index.html","a2d4093e247d60c0fa9caf7a3a56d92a"],["/posts/9be63ba/index.html","35d5a1ec66980ba9fd8d7857672af8ce"],["/posts/9d967c90/index.html","c8accd8cd36f31bb457b722a7eca53da"],["/posts/9eadcdf6/index.html","1fa03cd4bcec7b02af4df709965abb5b"],["/posts/9f97db8f/index.html","f748ea47eaab707651a4cae5485fe3c7"],["/posts/9ffb4388/index.html","c997f59def2f3392ef9ce42901f0e182"],["/posts/a094d027/index.html","2f36ca84c2e715ee671f15205de9a33d"],["/posts/a27042c6/index.html","5c84ae7e15e517c4fdbdc82836b0e616"],["/posts/a29cc732/index.html","cec8874ba2a5edca24783aa6b123a8b9"],["/posts/a44a518/index.html","516ef0428ddff3813e6be57c6208f23f"],["/posts/a4f2a748/index.html","422f656a360e2a42b77b988dd12592eb"],["/posts/a7dc32c9/index.html","9928d0c12d9c13e64afb37d992c49ac9"],["/posts/a7f753ec/index.html","81c7e673b78e9a60b0d61622dc40e803"],["/posts/ab176793/index.html","87ac9c357dc6072d52f8be3e8f809f99"],["/posts/ab34095a/index.html","b686fd851d543c87f4bee291fead6e0a"],["/posts/ad47c4a5/index.html","9c4f346d91dddb8d297cf6c10b13ddfc"],["/posts/ae8f7b74/index.html","0b7cc2bfd64d925bb312da21d3bbe94d"],["/posts/af43816b/index.html","122a3ef2e41aaea2d9c38c14afae3313"],["/posts/af9e049c/index.html","4ea7af3a2ff10834de0f8790fa066d7e"],["/posts/b0f1a367/index.html","7658f0b5ae3b7b6e9f96f862407f773f"],["/posts/b0f98e2c/index.html","a9a642b372831927477c8831a5a540f2"],["/posts/b33131fd/index.html","34cdd0e9a90b4bbdc6302e058a7be218"],["/posts/b36eb520/index.html","fcbe2baf61c0425e8574afd26906d071"],["/posts/b542fc02/index.html","5f524650a58e2e4afe2e3f888482ac36"],["/posts/b54eeeb4/index.html","5dd43d7b454778eb5b54bbf99e3e835b"],["/posts/b84f3f3c/index.html","e758d9fde1e71c09dea54b1a7cdb730f"],["/posts/b94fc207/index.html","4c1a729eb9ceb1559cfa6f466bd335df"],["/posts/b981a6b4/index.html","04ce4067057a93649da5e8bb4a188adc"],["/posts/bcea326a/index.html","5b816b0138c1177923cf447953cb8c57"],["/posts/beb19e80/index.html","bb0ba4a1665c7265b78b02aa07e84086"],["/posts/bec490f8/index.html","b0b1827bbf81b44fb81322192b95b7df"],["/posts/bf7bde0e/index.html","0e5abbbde5bf487b1e4f75c0b90541e8"],["/posts/c03f17c9/index.html","8003a9f63052a92dd77db3bb297eaead"],["/posts/c35bc572/index.html","7c00fd9dc1e295146eed9bba41c07d09"],["/posts/c436016b/index.html","f74836fa0082fc8e598d2b857b713305"],["/posts/c4efc741/index.html","a69ba5288058399b89a99e4ba6f9cfd2"],["/posts/c5e8a08e/index.html","93dc0094c896b4a0bad75d3b92573f72"],["/posts/c7db1dc0/index.html","510c0f596c786f42f7a1dd6d2afa1baa"],["/posts/c7febeba/index.html","7d14ad144162533b86383ecf9eec09a8"],["/posts/c9c3a06e/index.html","0180541126664035c9b6be9770ee287a"],["/posts/cc6d2cf2/index.html","c234911348cf728a6fb052edf0d3a253"],["/posts/ce48f291/index.html","1b52c8905fa11d413ba7b1af50546c4e"],["/posts/cf480faa/index.html","383026d394a8cb8cb2245e4fa92d0996"],["/posts/d090b4d/index.html","10e5a273bf4b1e943445309b21292271"],["/posts/d1995044/index.html","b1619a75bd4352cbf9523cb03dde0098"],["/posts/d2d34977/index.html","db1fa758ea9225e986eca76a009d7a4a"],["/posts/d3647a92/index.html","4da21eb279da433857d997d305a01b3f"],["/posts/d3f6b818/index.html","2e6082af98d2f384170122ed3aa33143"],["/posts/d465029c/index.html","1b8238859f4b5fe9247253c2f951b051"],["/posts/d9884be2/index.html","21b358d870ee952c572ad729e3986e8b"],["/posts/da40f433/index.html","bf7435d6a804ffa7a14a661ce064db2d"],["/posts/dae71d5f/index.html","5784ee1d9462ccc532d2bca784d9348e"],["/posts/db9fbe47/index.html","3095bf4755dd33a3d0f5908f1e4100d2"],["/posts/dbba997d/index.html","571f3b3eddcb477384c4fd2e68971b16"],["/posts/dc94f8a1/index.html","ad81f1e325a0161f38f5ee0d69d6fb4d"],["/posts/dfe9b67/index.html","9c9d5d3fa8d19797f94097964d673c80"],["/posts/e0387d80/index.html","6fda8eb3dbf35b5d6d75dda1c4def63f"],["/posts/e356f7b3/index.html","c7a9866f80337146e6c9e9e3acab083b"],["/posts/e3acb366/index.html","4991fe567bc4807c184f2b8625fa5799"],["/posts/e450354f/index.html","b78c7265ae1edbd21f9046963dfcb63f"],["/posts/e489223c/index.html","5c300c6d1b88a2f3674d7e5ed5d6d86b"],["/posts/ea914c06/index.html","f82b018724a5e91ba7d050e20aed443a"],["/posts/eaa8f31e/index.html","d3f73261b405af9815782f886c110a1e"],["/posts/eac19412/index.html","59c16f61ef4adb8c07ffd40106f1766e"],["/posts/edfc881f/index.html","025b22d92d5a1e6650e756c1a20e5213"],["/posts/eec0bbd1/index.html","06c6d38d20f4aa907579d13ea9d095fc"],["/posts/ef22c7c2/index.html","e9bd5df367c6234c9afa5012805f22be"],["/posts/ef271825/index.html","b959030fcdfc08e8de3c47464d156468"],["/posts/f209578c/index.html","e5f73cfd2ba5d8b7b88360eae83f9cf3"],["/posts/f3e9bea2/index.html","ed1eb7fbcd5e5198eff226716a4ed259"],["/posts/f67b7122/index.html","b975099f8df0fff10c71b20ba15d8aae"],["/posts/f7abba28/index.html","083b915dfa5fd1f078eab440045632c0"],["/posts/faffd764/index.html","8b2d2daf6c873b00000a7c1bf58bc2c8"],["/posts/fb684fb0/index.html","9c31d4ca54b8f21be62a31638306b788"],["/posts/fc57199f/index.html","10ebe23a232c42f6da60e1cb1d30ea97"],["/posts/fc6e9a7d/index.html","e07958cc8b790587ed95805ddd147b47"],["/posts/fc7bc02a/index.html","1a28f56a8d16dcf0cebcaf3773f0d5f1"],["/posts/fd67c5cb/index.html","ec655f3d56cd9f056b70a38b1f882c1a"],["/posts/fdde061e/index.html","0a239cf15cd9f43de55f7ee1906ef2ff"],["/tags/HTTP/index.html","73c04dfda7ded37a6c521c03312ed200"],["/tags/Hexo/index.html","cb9b2103149c076fa1a2a2f871e2814e"],["/tags/Hexo常用命令/index.html","0edfcf1b0e6025c2c5e42b93e7403e25"],["/tags/Nodejs博客系统/index.html","876aaf01423bb82495fc2c98c14e2514"],["/tags/ajax/index.html","3f33bd9bdfc9a3ae0cf29b196288f343"],["/tags/ajax/page/2/index.html","f15a103f23fa30bae0f9b227945e8429"],["/tags/curl/index.html","998dba258feeb18cc6db88813add11c7"],["/tags/index.html","d9508ebafe709afc847ee0b8f23c29dd"],["/tags/json/index.html","e3e404a5fe3a739905509fb038293c71"],["/tags/mongodb/index.html","6edba8d5f9a70cddb38dbb88f4f01b9d"],["/tags/nodejs/index.html","ddaff8925f7d0a5998b14f41c915beeb"],["/tags/promise/index.html","bf8f883f14c39e4f980db3b523715eef"],["/tags/中国近代史纲要/index.html","1e3389c4d56c568e27012727c592f3a8"],["/tags/日语/index.html","47e6842cad323a63e4d456348d00486e"],["/tags/标签外挂/index.html","5c43346e0aca5d20da3bb6a512938f7b"],["/tags/目录索引/index.html","1b0bcc3530c27062acaad4e601205483"],["/tags/管理经济学/index.html","be71706ffbe82ded6e6a7dd869bc6a4d"],["/tags/考前突击/index.html","b66334f8d918c41b968d7b827ee5718a"],["/tags/考前突击/page/2/index.html","b6ed632c73ae51468dbdf6f1b1977534"],["/tags/自考/index.html","e91c8513b78c8a08cab7a019c499c65b"],["/tags/计算机网络原理/index.html","fa88d6a8fbcadd2e61e6a289acaa51f2"],["/tags/运筹学/index.html","4d45a7ea3e72253a3f39e3309951b1c2"],["/tags/马克思主义/index.html","d3ef3530e1459fa166f16b69fe84a158"]];
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




