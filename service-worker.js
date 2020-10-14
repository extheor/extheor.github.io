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

var precacheConfig = [["/404.html","77935eed441b3f5ccbbadca10dcbbf12"],["/about/index.html","14e2b9a9617fba750eb2baab3f988d83"],["/aplayers/index.html","470a62e5a61ab16fdb6ed3dd1053366c"],["/archives/2020/02/index.html","c7756b69313dd8faa919ece100a22a9e"],["/archives/2020/02/page/2/index.html","69b4992157c98293a942c839067a9d4b"],["/archives/2020/02/page/3/index.html","e186aaa9a8db0efab42befc66855c330"],["/archives/2020/02/page/4/index.html","2a9089c351b89dfef80d3468566c9f09"],["/archives/2020/03/index.html","4f25cb2cd503a1191556b65459d9b761"],["/archives/2020/03/page/2/index.html","a5bdfa4991e5345a701149bb2be4ed69"],["/archives/2020/03/page/3/index.html","8ea10945d097ad7e009c4ca3dae5aefa"],["/archives/2020/03/page/4/index.html","1e689ee4f9dd96b01d1826dc4f62abc5"],["/archives/2020/03/page/5/index.html","c8f20b0202a61397fcb49cd81b8b6d55"],["/archives/2020/03/page/6/index.html","ecb31c2b2b8f1af9215bcc28b4863893"],["/archives/2020/03/page/7/index.html","d976686d7c7d12e83dece91f0b79562f"],["/archives/2020/03/page/8/index.html","335bdf0559587ebf9c191481655b2683"],["/archives/2020/04/index.html","ea03f908d51b8488e255c5e458afdba5"],["/archives/2020/04/page/2/index.html","6cebff87114ae924bd0903cb21bcbbfc"],["/archives/2020/04/page/3/index.html","9c1999583fc7e2b4825c0869a147c7d3"],["/archives/2020/04/page/4/index.html","5f453850b68ae558bf5021db4bd66808"],["/archives/2020/05/index.html","0e18a9f5555e218bb496d2663d056b91"],["/archives/2020/07/index.html","63e4ae95b4bf3a8c0f744ec8f4e8c5b1"],["/archives/2020/07/page/2/index.html","5a2c6f6b1f108835715437d7fc4ec04a"],["/archives/2020/08/index.html","40a72d1c224c797915cb4e2d6118d478"],["/archives/2020/08/page/2/index.html","f4ba87165a3566a6b1244bfbeb460a26"],["/archives/2020/09/index.html","6028cf19e3c1aa17c15d450cc68a474b"],["/archives/2020/09/page/2/index.html","1a21235f8caf8e0d7a5bad9844ba8f60"],["/archives/2020/09/page/3/index.html","a7c34d03a008bad27a760a8490728ebd"],["/archives/2020/10/index.html","9a7a37c91d7b82f1161f292cbc14262a"],["/archives/2020/index.html","81f360184574d79dbaedc18ff7ea803a"],["/archives/2020/page/10/index.html","70585a0a3473d45b8538d69285680ade"],["/archives/2020/page/11/index.html","e155bf5a5c066bd8695653d9361d7403"],["/archives/2020/page/12/index.html","c9151de8008a45be4d2e343a22352d59"],["/archives/2020/page/13/index.html","8630b7c63a3ee41b679706e4db66b790"],["/archives/2020/page/14/index.html","5a8fda4628f747262545829a75069875"],["/archives/2020/page/15/index.html","d42f550750c7d213c60ba08008c81bb7"],["/archives/2020/page/16/index.html","3f1256511c9ed90eecf0b0fba62dda59"],["/archives/2020/page/17/index.html","9c05ba86b289827793caa1a57c6951e6"],["/archives/2020/page/18/index.html","09a4e888f086a79d7ab43d42d2a0fa55"],["/archives/2020/page/19/index.html","703fe3994251bdb84a1b6ae89774c1fa"],["/archives/2020/page/2/index.html","52d643d38c163477767fb3e284288791"],["/archives/2020/page/20/index.html","3e0c82181e06453b4f2491ad74104eef"],["/archives/2020/page/3/index.html","8e9d4e590a1a156e7f1b6ac16dce5b65"],["/archives/2020/page/4/index.html","b28664c469ea42912ba5a64cc6bc66de"],["/archives/2020/page/5/index.html","ffa0684286a29214af643ec3efdab761"],["/archives/2020/page/6/index.html","49229daee3daddf50d1be8ca31295624"],["/archives/2020/page/7/index.html","5a5f0304eda8cfa869ad73610e9a9464"],["/archives/2020/page/8/index.html","d03fbb5118c4195ae12c793a873044c0"],["/archives/2020/page/9/index.html","a3b1919877fa2cfe43d7aa0a8aa92a08"],["/archives/index.html","d406a6327715fde635357cad802264ff"],["/archives/page/10/index.html","a4bae84fa4054d4748d55b841cfa8ec9"],["/archives/page/11/index.html","5087ed2b022251096ded16da59f82d44"],["/archives/page/12/index.html","faae445e68f188f3fe4d3b680a9a60d9"],["/archives/page/13/index.html","34269910f0829d1db61494880ae60fd3"],["/archives/page/14/index.html","39ac7030b62e6a5be0ea530830bd8063"],["/archives/page/15/index.html","80de925f00756130d8e6ea6cba58ee21"],["/archives/page/16/index.html","441149c3c182163f220012072e5265c3"],["/archives/page/17/index.html","0adba422f36e4b4b445b8f56e0cefbaa"],["/archives/page/18/index.html","7a6f67d07424a57d75565e2fcb560a16"],["/archives/page/19/index.html","9a66f48e2a989767d7b7e2a31c077713"],["/archives/page/2/index.html","2b1ff986f6a361f26b9c35d8b8fc66ae"],["/archives/page/20/index.html","af003ad8e4e5b47b2457afd3beeed1b7"],["/archives/page/3/index.html","2282e1cd8bc922f06783822867579e92"],["/archives/page/4/index.html","93f2eba72fab835641af3654176305ea"],["/archives/page/5/index.html","7230e0b1974e0866b9dd4d2e3a19e572"],["/archives/page/6/index.html","4a09e4e10f2c6b13d7c6d1346644d9a9"],["/archives/page/7/index.html","c4ce423dd599731148b8d688c62374dd"],["/archives/page/8/index.html","4c04bba9630d15b116aaf8e5fc6b3e2e"],["/archives/page/9/index.html","1d4a5f86297d5cbfde933d5030c4a96e"],["/baidu_verify_code-DtGRV5OBxw.html","07e9abc173ae32e40062edd5e904eb45"],["/bangumis/index.html","2daea691301a42e97fafd6e165bb7fcc"],["/categories/Ajax/index.html","c53c3e4b5226aa8bdb6376e762e71987"],["/categories/Ajax/page/2/index.html","faa767dc2d3263c5486c3caa16b42829"],["/categories/HTTP/index.html","c28b5d83fd98ad810fde9e2338f99af8"],["/categories/Hexo/index.html","f206f6dee52c7f1dc1a80f0119cbc8ea"],["/categories/Hexo/标签外挂/index.html","f0b12df212104d6bba584a403bad852f"],["/categories/Hexo常用命令/index.html","dda22d853e04ea433d79866ebdedf7cf"],["/categories/JSON/index.html","aeda481ad5527ef60942d242f65f610a"],["/categories/MongoDB/index.html","3f55786fd48585d9580a975e0913ba9d"],["/categories/Nodejs/index.html","8a49a465a1fb2290c90f3b80bb3fcbf9"],["/categories/Nodejs博客系统/index.html","4dbdc0932294886f647e5b637ae2d565"],["/categories/index.html","56a6dd4d0d68bb2b791754cba2c3dba8"],["/categories/promise/index.html","d838c001fae447d97cec18b4599a022e"],["/categories/日语/index.html","c0d1e3b27d9dfa9eb0694b80b40d778d"],["/categories/自学考试/index.html","326617fe186b7c387c3bec6d9fd241cf"],["/categories/自学考试/page/2/index.html","14c78d4a18904973508a45bb31b97b5f"],["/categories/自学考试/中国近代史纲要/index.html","b92a22fb47b3a30b8c66aa98c7ca7b97"],["/categories/自学考试/管理经济学/index.html","1e79cf74c086c91ac27c07ac16d74ac5"],["/categories/自学考试/考前突击/index.html","a085d986b28857d0d2b334c75b3195cf"],["/categories/自学考试/考前突击/page/2/index.html","ef6d44fa0127a2703b257cbe7bbf8877"],["/categories/自学考试/计算机网络原理/index.html","9dbe96ce9e5e6100ec42cf8dcbbb81d5"],["/categories/自学考试/运筹学/index.html","f753510f692ed54000aab652e2883124"],["/categories/自学考试/马克思主义/index.html","8b72ebf485529bbd85a70084c4bb0dbc"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","af8fd1f4c2b8dcdcf2e31fbdb96b4f54"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","550deac5fdea1a88694b44db70c855c6"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","8b7040c0de07a23526c8fdf9186d07e7"],["/page/3/index.html","2577622a348d94dbda652ac582b8ad6b"],["/page/4/index.html","6698e890e3619b58c7110a53b5aef2b1"],["/page/5/index.html","dea0f3f812c98b728a33ef022f5edd30"],["/page/6/index.html","1cd9ec28339bfd777dc4a07174b4c603"],["/page/7/index.html","1a09942d719d13766a558bf3cfb8f516"],["/posts/10812f0/index.html","63f694ecebeeb3c2819c541fd364242b"],["/posts/126b275/index.html","3f035824560589804a1371bd028415d7"],["/posts/12d95a5e/index.html","df760209efd221796de1821001f5d4a7"],["/posts/1367417b/index.html","a5b0f01c7babb5609b3651e0b5fd7111"],["/posts/13886e3f/index.html","2a220bf42a679d921a9c38206205e63f"],["/posts/145193a5/index.html","4d5b384bb97d83b35d9c6918e1969e96"],["/posts/149dde25/index.html","8f79e0ee8f4bef21af156a165acc444b"],["/posts/152fa65b/index.html","052b33541fb821d1e006ef619a6d8211"],["/posts/169e7dda/index.html","102b19fd1cda7075208e14e085d15669"],["/posts/1875100e/index.html","a519c13b1a3b3a8193aa8ed4b6380c41"],["/posts/18eaef7d/index.html","264262e884872bdc98120ee7d5f0aa9d"],["/posts/1a0bc7b7/index.html","2fab87ccfd57d295b5de708df844185c"],["/posts/1a20a057/index.html","0e487947bbec2114afebf10c1d3d242c"],["/posts/1a998be6/index.html","9356c236ab48ce2c8d2b32976bb2b5a2"],["/posts/1bffbd20/index.html","d89f6493df6b7bb327c1649512928ee5"],["/posts/1c5a0485/index.html","a9ec7dc5fea84dbedb820fb800eaeb6c"],["/posts/1e638f78/index.html","92e074921edd186bd4822d347c37b550"],["/posts/1fb53120/index.html","10ed81a92b653b6e191636c296bf83af"],["/posts/21466e86/index.html","650dcfe65194a534528b16a9e4b4f21b"],["/posts/21abcf1a/index.html","e9fa4b0458537740094d59109a7b852d"],["/posts/21c250b1/index.html","71947fa0cad51707053ee5ac4bd0d544"],["/posts/2287cc/index.html","0c41e8fb6a2bae7be2b8a1d102c9ac0e"],["/posts/236bfea3/index.html","1beac7e56d5c3498146518f73fb2fac2"],["/posts/24caea6b/index.html","91df9ef2f52608d3bdbf2c4cc1414f0f"],["/posts/25d45c3d/index.html","023b104d9fe269615b15e5f0e642661a"],["/posts/262baa9f/index.html","fefe594530289b4c6237b437fd78ba74"],["/posts/27cdc142/index.html","65b0c47764ec8e27e319c8f5f27c521e"],["/posts/2895c4bb/index.html","22819924fe43f3df99d1049cf7d3071b"],["/posts/28987ff3/index.html","b0149f4641138d2f6a298b49b3221911"],["/posts/29f0df96/index.html","bccdc7752378b4c5981afded2a836969"],["/posts/2a1d2b6f/index.html","5ce2c0d19f6119af3b2dde9d1891e1e6"],["/posts/2a386047/index.html","7ba29534fdf59e0efcade8c162635f80"],["/posts/2b770baf/index.html","1c3653eac1966df4c9617ce17a039e2e"],["/posts/2cda4a8/index.html","64b1a59bbad7871cb57fc2a40da395fa"],["/posts/2d020832/index.html","506f0b1591f454294134b74269a286fb"],["/posts/2d6d3bd/index.html","a23a23fb66f5fd8954f5f7195183aca7"],["/posts/2e0c129d/index.html","6d0d77c16b57e9551b3338b4047f3a86"],["/posts/2e7563a0/index.html","79fa0939c6443c5a8f6fe8d77f5e4586"],["/posts/2e7b8d69/index.html","10d8f8ab5690e75bcb747e812c61e637"],["/posts/2f28d14b/index.html","e0395b437dfa00c7f7f6f17304794ea2"],["/posts/2f6e1383/index.html","4d100cb23682e333a914a65a2b7a801d"],["/posts/30bfd1cf/index.html","cc997f816d69cbdaf3476fc7c296a86e"],["/posts/33235106/index.html","99df8c3dc45cbea52a54d6fc7ca462e0"],["/posts/344e951f/index.html","80fa267e7df3233fd974db33bf685b34"],["/posts/35e2bcf6/index.html","cc80f3089ed345fd0f1d9d4308ea767c"],["/posts/365e96c5/index.html","523ab57cf11a718355df42a8fb8a7d3f"],["/posts/36e331e3/index.html","f22d5e9752fdb1d189aa15257c93f2d2"],["/posts/372df90a/index.html","f492f46c277d8df46eb2affd76e45e07"],["/posts/37c547df/index.html","4b4907da4954ae9367cd8572a5367259"],["/posts/38a88481/index.html","4bcc9d56e8e772dde27736ab32fb7698"],["/posts/3914bfed/index.html","da7638bdb383cb886d84345eb8ae91a3"],["/posts/3b56780c/index.html","be7197931d9ea8578a65c558dd7fca3d"],["/posts/3e4bb613/index.html","3c0003a6b5ca7fccb0217c9bb5b47cb3"],["/posts/3f2e933/index.html","689e88eb24a88e13b0e865d07f010bfc"],["/posts/3f6e5f9e/index.html","5fc247ac768a7b7c1874f70573e1f080"],["/posts/4349a589/index.html","55ff56c28bc14e9607b6a0bf335a27e7"],["/posts/44246190/index.html","7b7615eab1aa5234460ab84d48aa0abb"],["/posts/456550f/index.html","45ffaadef0be155c345dc5ab3209fc3e"],["/posts/470ac03d/index.html","47cd4d06d573dfd015afb4085f1d7de5"],["/posts/49249ac9/index.html","019a04a7520bf3483bf99ee211efd946"],["/posts/49f2d2a/index.html","29e00b63a3f009e40fe805ad4ceff209"],["/posts/4e6d4eb4/index.html","f1aadc2932809527a270a520af25ac38"],["/posts/50caf1d4/index.html","26e0afca00238bc36bfb0f1ac5c2fce4"],["/posts/51139400/index.html","86ea33ea1294cbfa952177fb9b26bc27"],["/posts/512c9a09/index.html","633470b18e1a2293d85508d61e0a8e09"],["/posts/5205b330/index.html","811c482d4a22719b101978714ce94e3e"],["/posts/52d36cab/index.html","4b8d29420cd8d0600c7b2c1cddf3fa66"],["/posts/532a083a/index.html","d1eb3189306788b2d967bc1bee4a0a13"],["/posts/537d2c2a/index.html","1db40dc609c8033baee51602b09bf4ce"],["/posts/54383ba0/index.html","1f6b47780d2a7c95e134d6b17e24028c"],["/posts/54667693/index.html","4b66a650a34cf6391a5e911a87ba3d54"],["/posts/5508212c/index.html","085c48c1010f49d7908b887f75d880e5"],["/posts/571564e5/index.html","4b2d0eb8444647963e8b52b1e37d64fa"],["/posts/57900fe5/index.html","bceb1c708430ffb74c005b103bd7d546"],["/posts/589a214a/index.html","acd8e389db7dca170e6c917e7611a410"],["/posts/599a2b19/index.html","e6ba02ca88477bdba7012f1875526a11"],["/posts/59c05382/index.html","7e3d49c97fc9c998d70cf6cd1412d4c0"],["/posts/5a5294c8/index.html","573b97a9e95ec086504ce9b569c9c3a1"],["/posts/5b8c69d5/index.html","43c6bdb721a0d5c51704cff3a2565374"],["/posts/5d3da28e/index.html","85880d0d5c0e2c777779970391abafe7"],["/posts/5d3f50d1/index.html","38c2e4943bace6580b6b3734c3899f68"],["/posts/5ef7ef00/index.html","d72803eb2c104f407c82874f9f0a6e76"],["/posts/60b5dd06/index.html","0fc0a20eea75c16182d52a4d6e3dff10"],["/posts/61477045/index.html","f6529db841521074086f8d2a75ebbeb4"],["/posts/69d79f93/index.html","fad8452db1b722de6a016f5d0ceb1b4b"],["/posts/6b2f046/index.html","63df6f7028ec24e3a2276af47491b62d"],["/posts/6b4610c4/index.html","5cfc696c347d7d69278d03eeb3e08c93"],["/posts/6bbf03f0/index.html","f78b6062a554b9928fdd60cfac8b633a"],["/posts/7000d139/index.html","1218806ce3c1a69410e16ce0208cb961"],["/posts/72f94093/index.html","4d3a7ffa586e0e80e01d2c882ce00566"],["/posts/7380b71/index.html","a244692a8fa7fff3ff849a8e98c3fc3e"],["/posts/738eee3b/index.html","f6d122d163b7c9f927445c754923cb46"],["/posts/73981dbc/index.html","56a22d369368d239cea0c33805c35389"],["/posts/74d60fd9/index.html","98161b87ce14a93817714858987fdb63"],["/posts/74f5d9a5/index.html","aaef604554546efca295cb2d8d644392"],["/posts/750f2ce3/index.html","905e1bfb012ae5b78dae83ee56000f06"],["/posts/75ceb627/index.html","e684bb9f447f1b2b079cc46807cf9083"],["/posts/7725b75a/index.html","c752c0350e3ea237c94bf419238bc95c"],["/posts/79ef335/index.html","2d119b5fce6d5de746292cb474a988f8"],["/posts/7bbd3149/index.html","5a9fed00afbc549d3c107bcc84e942f9"],["/posts/7c20e8d5/index.html","2c919cd72f91b8d615c1751d00fe9edf"],["/posts/7d3ea75e/index.html","c2d13fcf0f132bfb67d161af00652819"],["/posts/7d43958e/index.html","97a00fc80935bdc48825d3f40df1d536"],["/posts/807ac7f2/index.html","aabc08911aebda8a257f2550e07e1199"],["/posts/81738fa0/index.html","3a82f9ddf718c97825c655f7544cc2de"],["/posts/817c41b4/index.html","d64441dcc3a3ba4c894eec996e01585b"],["/posts/84ee8e34/index.html","d94629286b7ce7918d5a762d5c720374"],["/posts/8837602f/index.html","20038eb417ff8fd6171ea3cce4ba4b99"],["/posts/89589a03/index.html","5a95725c8c691484a0ff50fa399aa539"],["/posts/8bcef008/index.html","d4b77915addaf35176ad034fcb949c95"],["/posts/8bf9abeb/index.html","f13afe7980b57515651f15430cae8dba"],["/posts/8e5f5686/index.html","b4afc6f8ae1c24fcb1eefcb856947b7f"],["/posts/8fa6b8c7/index.html","ec764b939338aded6b1dcc0cb21a0f2b"],["/posts/9029a3de/index.html","d72b8de348c11d72faec5059f6f11ddc"],["/posts/909d9a5d/index.html","e22716b3236655be2ad46f207e932256"],["/posts/91404b94/index.html","af863ea586dbfbc1f98bd619e61f6b41"],["/posts/932e3747/index.html","3938fa2412d25b0bb1fc7996c7b3a257"],["/posts/95fc9e6e/index.html","91d9a34967182d2155a582dcc33227ba"],["/posts/98e67280/index.html","eecc49d93047136294596081c07aedf5"],["/posts/9a4d13ef/index.html","9d13eacdd05d218d5e4654f9e5c046a1"],["/posts/9afbb889/index.html","1ad85ccc525f898a9537917790dcd88d"],["/posts/9be63ba/index.html","1f50f2d6159313b50583df2c42bd9ab5"],["/posts/9d967c90/index.html","4570534db68d399bd48b62d4238e5e41"],["/posts/9eadcdf6/index.html","7ba3f7ebe2f7076e374f7437d4793626"],["/posts/9f97db8f/index.html","3ed46ef0d68079b5a95ce9cb079df4ed"],["/posts/9ffb4388/index.html","8c30fb3b7d09e2a9e3dcb6ad379501a5"],["/posts/a094d027/index.html","2baf4319a470816aa39ebc713a1cf2f9"],["/posts/a27042c6/index.html","e91b8d37bc55e557af56cec7ccda08eb"],["/posts/a29cc732/index.html","362491219484a7867d15c75d758e5332"],["/posts/a44a518/index.html","6364341c0e8959ecad518c66d69f6aee"],["/posts/a4f2a748/index.html","ee1da0ce1cb73f5a6d44bc21808db50e"],["/posts/a7dc32c9/index.html","cce9755e06225e33bfa5cce26e4702e8"],["/posts/a7f753ec/index.html","2f5f00b2ba7659c2fd68d58b71846628"],["/posts/ab176793/index.html","504b0d7bdc2f0b0500154d7831be3ee8"],["/posts/ab34095a/index.html","26c244bf75202ed8c062ae1761d08d43"],["/posts/ad47c4a5/index.html","ed4aa76fb3cfe909292144eb8b4742ee"],["/posts/ae8f7b74/index.html","b8b97cfaffad8dd7df5de67ab2da6ec5"],["/posts/af43816b/index.html","68d6e2dd3d7d084af6606f5c8ea6d66c"],["/posts/af9e049c/index.html","75555a31ea1849503c3e151976812d58"],["/posts/b0f1a367/index.html","006bda557d73ece1f96ebb25e5a39e68"],["/posts/b0f98e2c/index.html","d5a2a4b04858e0d6f6843194a7758cf5"],["/posts/b33131fd/index.html","918fdcd3c61eb0b921734a1665fae008"],["/posts/b36eb520/index.html","72497ef103014eed5eb3ad8d95688ed8"],["/posts/b542fc02/index.html","c96ec1d5c2ef381f73493d7999b656e3"],["/posts/b54eeeb4/index.html","7f6bcae11119370f2c503dc3116200ad"],["/posts/b84f3f3c/index.html","6b66228d806784cdfa875c89bdec2cbb"],["/posts/b94fc207/index.html","ba136f6907577ddd8460d465a6ac652c"],["/posts/b981a6b4/index.html","d6c88063373217a15ecf497887b9c7c6"],["/posts/bcea326a/index.html","003ed1af8d5f541ab445dec804e0f34f"],["/posts/beb19e80/index.html","7e11332b96e0364a2fd3222f814b9eab"],["/posts/bec490f8/index.html","d381408d145e042737c424e3bc0e28da"],["/posts/bf7bde0e/index.html","a488855ca71be2073ba74c34d2923b9e"],["/posts/c03f17c9/index.html","63dc4f77481be680a90eeb13c9324b08"],["/posts/c35bc572/index.html","070266b0732aecdcf724a7e21e0b137b"],["/posts/c436016b/index.html","86a34491539c195d5eb8139c860f602c"],["/posts/c4efc741/index.html","bae347f5256594256c657184d182535f"],["/posts/c5e8a08e/index.html","6c95c2b7cd1b2c03aea35bcda309ade0"],["/posts/c7db1dc0/index.html","5ca1355faaff6d37ae547a1c341b61fd"],["/posts/c7febeba/index.html","34b92ac7485e17cbfc0f573889069bf9"],["/posts/c9c3a06e/index.html","098579bab2044b61db679ac556cc1895"],["/posts/cc6d2cf2/index.html","62dc58a323bf8138621f35ca1e07a2cb"],["/posts/ce48f291/index.html","927d2020b9db8e32eb40bb146123c86d"],["/posts/cf480faa/index.html","35ec31f18a0ed4cbe2698b567a9bedb3"],["/posts/d090b4d/index.html","71bbb5a79a28fa7a97867b4c073227bf"],["/posts/d1995044/index.html","c6506ac6b463905db68adc02b76592cb"],["/posts/d2d34977/index.html","709a782b78bf95d7fae7398c8906a5f5"],["/posts/d3647a92/index.html","2dcb893be153c87daadf7f7000f9b026"],["/posts/d3f6b818/index.html","40581a64af275d574be86d2a6b4d29c5"],["/posts/d465029c/index.html","e5777eea6dbeec9271d4716cd80c78ec"],["/posts/d9884be2/index.html","cabf826b4ea342044ad9524cd3e3e946"],["/posts/da40f433/index.html","8e37fefb028068ecd9a76cea6ebe5199"],["/posts/dae71d5f/index.html","6bc041761e04f0a6a63f680ede7d1168"],["/posts/db9fbe47/index.html","702251e40e5f1a79f9c5e246d9ea27a1"],["/posts/dbba997d/index.html","756eefe480a1b9e3ba29bb7659cdf771"],["/posts/dc94f8a1/index.html","98699aea0bf5e73ed7e750d9db832142"],["/posts/dfe9b67/index.html","5ec27279d91aee31f6fa7678336a805c"],["/posts/e0387d80/index.html","bfb14f8a9590206d481d44e97a40b0e3"],["/posts/e356f7b3/index.html","442731f2f04942915d54601217e4f025"],["/posts/e3acb366/index.html","0d013997acf36c3972aa9220595d7e5d"],["/posts/e450354f/index.html","188729301bf60f3be3db87f160d7a404"],["/posts/e489223c/index.html","c63724e16b78e0f057c9f1dc7ea25c20"],["/posts/ea914c06/index.html","c7c3d0be2ae2e818db3030c00dd399ad"],["/posts/eaa8f31e/index.html","1f37287be95d62769998534468639b98"],["/posts/eac19412/index.html","4ebac7cbaa67dd5516253b11148e38c7"],["/posts/edfc881f/index.html","7af14747370daf88deb0777df35e67a9"],["/posts/eec0bbd1/index.html","02c335762cd37550fdb9859de043e533"],["/posts/ef22c7c2/index.html","103fcf120e1231c93e68f9b759d06caf"],["/posts/ef271825/index.html","0bc30d377c9c7d9f74965baa6e61dd94"],["/posts/f209578c/index.html","799ca3beeacc1bffec0b84fa7fa437d1"],["/posts/f3e9bea2/index.html","98e28399177a1abd6f0d9855bfd88a24"],["/posts/f67b7122/index.html","b1e71781aee56adc8abc8334b2274185"],["/posts/f7abba28/index.html","c354e4a34b7159c12be5d82456c64331"],["/posts/faffd764/index.html","d3150f3fba3f51addfe034e7ac84ec97"],["/posts/fb684fb0/index.html","9594355daa2ccbc71810d64f148864ed"],["/posts/fc57199f/index.html","298d01282c7b168ae2c22cf4f0b5f445"],["/posts/fc6e9a7d/index.html","a745b8def767933c1ec0b9857596e928"],["/posts/fc7bc02a/index.html","33ccfbecb8fcf1786b2346b7308dc46e"],["/posts/fd67c5cb/index.html","1f205997b00cfcfe6536125344fac0fd"],["/posts/fdde061e/index.html","c9016051366a9169539e6aecce7c6cab"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/HTTP/index.html","f94333ad66bc5f07318b5cc2a2b97ff0"],["/tags/Hexo/index.html","dca3f82234adbaebc2dc1d3fe23b05e5"],["/tags/Hexo常用命令/index.html","b0a8d662b1fc11de38fef1db3f50848b"],["/tags/Nodejs博客系统/index.html","facb5b8cced830d08f2887fe95b401c9"],["/tags/ajax/index.html","ee63a3719328fdb0de5b05a4b956381c"],["/tags/ajax/page/2/index.html","7a033841c4262b32563885f4e3c9ffe1"],["/tags/curl/index.html","50d42ac28ebdd33e53997bc5b415a79c"],["/tags/index.html","eb19a69378b018f99d98b62358985c45"],["/tags/json/index.html","669243744000da5cb06de8060c7a44a3"],["/tags/mongodb/index.html","4962e2994aa59f2449aa766e8b66b68e"],["/tags/nodejs/index.html","72649a13a53acb4beca8694f4ee33c16"],["/tags/promise/index.html","15819e01fb3119fb4bdd47beaef5a862"],["/tags/中国近代史纲要/index.html","955bcb5467055137b5cc34b6867d8c23"],["/tags/日语/index.html","477f9a29341393d9871c337356253e44"],["/tags/标签外挂/index.html","a6374028dc576eaab3ff361e4c2a3343"],["/tags/目录索引/index.html","4c980fd11dce317c9ecf19163c8060cc"],["/tags/管理经济学/index.html","701e2819108c4bf66c55d7b1cb6f25a7"],["/tags/考前突击/index.html","3c697bf5c89f40de925450481b0cc132"],["/tags/考前突击/page/2/index.html","c2966127b180268773e80d050f680859"],["/tags/自考/index.html","41a4ddae232451fc15a8d4b10fb35fc3"],["/tags/计算机网络原理/index.html","5ff1a847ca8a71be36b52b716c200304"],["/tags/运筹学/index.html","629d4bbcbfe8a0f551024baa83a95e50"],["/tags/马克思主义/index.html","d4217dbbea1873fe950cdd29393c3abd"]];
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




