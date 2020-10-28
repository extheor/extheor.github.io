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

var precacheConfig = [["/404.html","fdefda6bb27a7b663276d4022af368db"],["/about/index.html","38bbef7d8969370910ebc0cdbdb479f6"],["/aplayers/index.html","243c104e011d1849b680ebb7b9fe433a"],["/archives/2020/02/index.html","4d94d2d67b096a442b69e45da7664f07"],["/archives/2020/02/page/2/index.html","16a7c91ceeae4ddeae0c95de4ecf45c6"],["/archives/2020/02/page/3/index.html","cd4c48d16198ed304ac124ad4ee4baee"],["/archives/2020/02/page/4/index.html","ca225519b3020a69b68e61a3d14d0764"],["/archives/2020/03/index.html","4b584d99838d2dc74f679479cdbc3791"],["/archives/2020/03/page/2/index.html","0c979250026978b1b497299d61230c01"],["/archives/2020/03/page/3/index.html","67b5e8f996b935520809f538dd30a746"],["/archives/2020/03/page/4/index.html","4159418d666d8a0c80e4930a20542595"],["/archives/2020/03/page/5/index.html","2b8056a798d2a5ade39d95be3f5f2122"],["/archives/2020/03/page/6/index.html","50aba7d45a80d3ea0b92716d23499658"],["/archives/2020/03/page/7/index.html","63fe588f547cd0d38a62f470bbbd575d"],["/archives/2020/03/page/8/index.html","e9dfe1ecf134c1a1a0b1027fa41fb470"],["/archives/2020/04/index.html","fd431b0ce709f11c444d68d3ea26a57d"],["/archives/2020/04/page/2/index.html","fe5b74f487dfce2d69fe79707f329c1e"],["/archives/2020/04/page/3/index.html","9259bc4feae6f9852b678ac339dd36b8"],["/archives/2020/04/page/4/index.html","aa547a708c737a80eeab21fde379c471"],["/archives/2020/05/index.html","a38b33530677f865e01e1449cb087ff2"],["/archives/2020/07/index.html","7c53d85d42b61cc58b9d501505fbe52e"],["/archives/2020/07/page/2/index.html","71d88f42562246ecafe01a4394ea620b"],["/archives/2020/08/index.html","6c8cc767fe040d9db63c749563ed44a8"],["/archives/2020/08/page/2/index.html","0f41665205a090974480f3b05c8f0f33"],["/archives/2020/09/index.html","88dff6c8499cf833d14c959ed67434f1"],["/archives/2020/09/page/2/index.html","65c87fa39a8b2ae6af17854dbca18327"],["/archives/2020/09/page/3/index.html","661646f45998f6545eea6c391164347b"],["/archives/2020/10/index.html","0d388ef90a28b1f6220ed4421e2539ae"],["/archives/2020/10/page/2/index.html","e0214cc17a386b9faea57bcea3072e26"],["/archives/2020/index.html","abfe087152348d243186d5d2753509cc"],["/archives/2020/page/10/index.html","1ee39e6c6f2c3f068e57b2bb769a18c7"],["/archives/2020/page/11/index.html","a323b2cdb651a7695495911098eab240"],["/archives/2020/page/12/index.html","806cf765e466601f286e458e3c992a29"],["/archives/2020/page/13/index.html","e83917840147e837cd36c0f8570a732a"],["/archives/2020/page/14/index.html","88170fc05238d68c93c7a53be043bec3"],["/archives/2020/page/15/index.html","c7840d6ea908aaf8be7c3dcd6b5fdd85"],["/archives/2020/page/16/index.html","302fec0d468a31c9d3d12cf5bf8c8cc5"],["/archives/2020/page/17/index.html","340d7d9384390b32cbb1c991188aab98"],["/archives/2020/page/18/index.html","91af4e8ee02084d6b62aaed52026a3ea"],["/archives/2020/page/19/index.html","a8886eb2343a66d40c257d9064fef7e1"],["/archives/2020/page/2/index.html","6ffb0cc401c8559cfb7a920264b0d520"],["/archives/2020/page/20/index.html","30a2c4c701f164e53a76831b1dca78c8"],["/archives/2020/page/21/index.html","11e6814066f360f936b71933520dd6d8"],["/archives/2020/page/22/index.html","f8f45e44764474a5a46e0fce49ac5f10"],["/archives/2020/page/3/index.html","f9596368ec1401eb4e4f660e7d4924d2"],["/archives/2020/page/4/index.html","fc9490476228d78eaf39891c79849a73"],["/archives/2020/page/5/index.html","2248b240d259bc33c70ea8f70c7cae3a"],["/archives/2020/page/6/index.html","ef374f2b117bcbcb64184a2caf18a0a1"],["/archives/2020/page/7/index.html","5bffeca760e98d990a07bb0aea6ebadf"],["/archives/2020/page/8/index.html","ab52b9aa500eca4709b213e068975a97"],["/archives/2020/page/9/index.html","baf1a0ece690fb7488c653b02569a6e3"],["/archives/index.html","5c0dc24bfbc43b3d9552ed25e77a0964"],["/archives/page/10/index.html","629532fac046cba560c0a5624b2908f0"],["/archives/page/11/index.html","70f5e7058babe12f2e8376ac83300d24"],["/archives/page/12/index.html","c4724d65c0d998bb718875623d4c8ece"],["/archives/page/13/index.html","0daf31f2558f9ad43485684ed3bc2333"],["/archives/page/14/index.html","c5d601c141c5538d74f453ffe2548099"],["/archives/page/15/index.html","9d39eb7ee82033e9fd6acc2fce5a8f30"],["/archives/page/16/index.html","ae463578fc50c6904650cb73b2a49476"],["/archives/page/17/index.html","8cb4fdd1baa5cbf164c9202b790231df"],["/archives/page/18/index.html","9dba0499b8cf15938931de432ab2ac89"],["/archives/page/19/index.html","45eb042ee676382b48ab68466d7ecf54"],["/archives/page/2/index.html","2c12deef9b4b5fcfa3173d6a096c3d02"],["/archives/page/20/index.html","22f12f3a8769ed1365f85b917df4a9b7"],["/archives/page/21/index.html","3db4717bf52bd6b64d16a08f98359cb2"],["/archives/page/22/index.html","c9ac5970417c0136fc8086e59918e1c8"],["/archives/page/3/index.html","c234d255e63fe7b6c732af7730f8da37"],["/archives/page/4/index.html","05a907f9bb38ab7bb1a37ba9cf5219c0"],["/archives/page/5/index.html","00c977cb53115ebc60c702f6da43568c"],["/archives/page/6/index.html","d89a09cc0670aadae391df9053bebc5f"],["/archives/page/7/index.html","1a422acff373eb4ef0c06f2486246213"],["/archives/page/8/index.html","dafd7e336ad4f7f0afe0230f97914d61"],["/archives/page/9/index.html","102d6bbcc9b9868310aec1ec6a9e8392"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","3b76825bde9e7686f304e3243f285aa1"],["/categories/Ajax/index.html","de6f3352af77099eadece758e54626ef"],["/categories/Ajax/page/2/index.html","bf8bdacea9d682ceb1d967eb1206e5b3"],["/categories/ES6/index.html","e0a6e9853070180d22766a86bbe6c704"],["/categories/ES6/page/2/index.html","da4c55ed299676b7b1fef89ca96825f5"],["/categories/FL/index.html","83974a49c524ca17d79f83e719d07fee"],["/categories/HTTP/index.html","4210664c0b732021bb23bb0ef4ee5006"],["/categories/Hexo/index.html","3377cfef2c9e4dc8ba38b6404f373d35"],["/categories/Hexo/标签外挂/index.html","0ad49853deda8f1d92e123ff2ab094de"],["/categories/Hexo常用命令/index.html","714dcc9ceec617788d80a343dbcc2a94"],["/categories/JSON/index.html","f5cd41aaa860cc3968a23fc7c14e094a"],["/categories/MongoDB/index.html","1276f3b3b76c2dc584ad850493a91156"],["/categories/Nodejs/index.html","5a6b011e6fe3e77c1ca2e3784e1d0a34"],["/categories/Nodejs博客实战/index.html","f011f33ba01fc704095f430127de2dcf"],["/categories/index.html","8c16364bdef62a1ef5dbb8cfce08ad53"],["/categories/promise/index.html","d1da28c7d28b4d11a8696ecced1d363e"],["/categories/日语/index.html","4e1714db7f0deb9ae9d9466835713f7e"],["/categories/自学考试/index.html","c538d83c86fbe7e60919c763ed429652"],["/categories/自学考试/page/2/index.html","8a80de82b497c5065d963d686f56d9eb"],["/categories/自学考试/中国近代史纲要/index.html","0ba2791a855ec629b0f6d7fe35174094"],["/categories/自学考试/管理经济学/index.html","20c8abfd1f3cfcd55ebed8538f935c8c"],["/categories/自学考试/考前突击/index.html","831b9af1650d0ace8e1c4a8098ac8d0b"],["/categories/自学考试/考前突击/page/2/index.html","12b360f2faef471c4ecffbfbce760823"],["/categories/自学考试/计算机网络原理/index.html","1cea6914574c8583869c2db079a8f378"],["/categories/自学考试/运筹学/index.html","f29058e35f7f1dcc7e4b6fd5ebce2242"],["/categories/自学考试/马克思主义/index.html","319b7b76dc8dda36b0eaa0aee8b07340"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","9668e8e809aa88720a320ad236576b32"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","a9a93ef033542ac09870581e374340a0"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","cb3cc36ec35ad328d8c6f6bcb3a0e0f6"],["/page/3/index.html","a880c0cd9b987771cae72ae337f269ec"],["/page/4/index.html","203f9abf67e73a32f1c0b41546465a19"],["/page/5/index.html","5446815f49132c43f35401e0fdc949b0"],["/page/6/index.html","f5972c7ed516c5c5fea76ba02492e6d2"],["/page/7/index.html","47a40b21160a918c941158675f1092c2"],["/page/8/index.html","c76a2adbebf9b179a8c8a3ca91dbc10d"],["/posts/10812f0/index.html","043346813289575e607822731f59f162"],["/posts/126b275/index.html","38fa45844902c6b7da776cb6e4df7b53"],["/posts/12d95a5e/index.html","02e953af2fd5293f826af14546cb89fc"],["/posts/1367417b/index.html","accdd7021fdbc4b112345c25c420d23c"],["/posts/13886e3f/index.html","68cc2bd758b7198f1868d663ab988b91"],["/posts/145193a5/index.html","efb999d2e8dd275bfcdb3ef2c5d0f9a6"],["/posts/149dde25/index.html","4bcaaa4e506eb9edd67be4144976c02a"],["/posts/152fa65b/index.html","ebc482a6bb18cdf053e0fa8a7348f252"],["/posts/169e7dda/index.html","4ab43e347e2b74efe40bfba6b35dcb2d"],["/posts/1875100e/index.html","b81abd21fbd4058a127f280b32b0ad5b"],["/posts/18eaef7d/index.html","098ecad2ffac68882b34a7b62b11f8dd"],["/posts/1a0bc7b7/index.html","e81173f3c491bc60ce3dd3c18957be92"],["/posts/1a20a057/index.html","ff1d9d0b09dd96f699375f61f625cb65"],["/posts/1a998be6/index.html","d902e7387f1daf61842989649bad8544"],["/posts/1bffbd20/index.html","e2571e05c1bd48a4d3cdb85526846d42"],["/posts/1c5a0485/index.html","24374dcab42028e1233fc61817b75e8c"],["/posts/1e638f78/index.html","aae0de61ec83f8bbdbf1434b5470211e"],["/posts/1e967920/index.html","25d1aeb6419bfec203dd23199fe73734"],["/posts/1fb53120/index.html","19ca93834e2004f70ea05ff01ec770b6"],["/posts/21466e86/index.html","07dc46ca4757cd24d50998b3141a6697"],["/posts/21abcf1a/index.html","f7f6c72a1640adafd553da5d3c3a04ae"],["/posts/21c250b1/index.html","caafed67d519ca06e89f3a728627eea0"],["/posts/2287cc/index.html","72c9a678a5238499a8d934dc3ddd5688"],["/posts/236bfea3/index.html","f6fa865a1150cefb2ca89445de8f237d"],["/posts/24caea6b/index.html","c593e9a386a5aa46ccf9a427670e0d59"],["/posts/25d45c3d/index.html","23208a018fa98ccb56e89e0efed57a03"],["/posts/262baa9f/index.html","e31e93a7d8b72a0775c8f13d503bc48c"],["/posts/26f82f65/index.html","02e5efd6ebf70909c708715cadbc5af7"],["/posts/27cdc142/index.html","866a4aaa1de95d14ebad2788014cbb41"],["/posts/2895c4bb/index.html","cec503e2b33d1c55e2bc46ae0f38afce"],["/posts/28987ff3/index.html","22082c6fc87be317adb14648cf4ef190"],["/posts/298cfeed/index.html","ad55c22096721ceaefdc87157ce1bae7"],["/posts/29f0df96/index.html","cea65def890f93620bcc580559f14d4d"],["/posts/2a1d2b6f/index.html","412dd351a414a55ba840612bf3336720"],["/posts/2a386047/index.html","f8b2375951d127c7d8eb8e4b126fbe15"],["/posts/2b2f44ba/index.html","a6b05db1a367b103325efe5e2d64dc9e"],["/posts/2b770baf/index.html","cbca1d048116ddd5498a26dd54ac518f"],["/posts/2cda4a8/index.html","266999cf70af1087122858f56081393c"],["/posts/2d020832/index.html","c9e68cd8829d5025265d74731ba66abe"],["/posts/2d6d3bd/index.html","1efb2fb062bd1171dfe3343284cb3f11"],["/posts/2e0c129d/index.html","cb20602fb12fdecbec0a2c52ee9e4a19"],["/posts/2e7563a0/index.html","752b8edc9871a032994716e33dc76178"],["/posts/2e7b8d69/index.html","bf969774c7aee69d8460a5c29f073f5f"],["/posts/2f28d14b/index.html","b180dc4fff451ad014a255b2d8244211"],["/posts/2f6e1383/index.html","f2aac303a02a867b0c6376bae528c24f"],["/posts/30bfd1cf/index.html","7dffa6db98eb685ef3075e13ed6879b3"],["/posts/33235106/index.html","f1a5086093cdb0cd505b375ab9e72326"],["/posts/344e951f/index.html","7ec751147e9b3795a0dc34966db3a598"],["/posts/35e2bcf6/index.html","8eee8ff5952272940f51c5159c2ff3a1"],["/posts/365e96c5/index.html","8113221e5b38167cd802325953e41902"],["/posts/36e331e3/index.html","c5c13b1f3d306b37927d34c74c775362"],["/posts/372df90a/index.html","e3470509e4b4d307e3d138c6946b19fa"],["/posts/37c547df/index.html","048400360a969c7a53ea7107177a47f1"],["/posts/380dfa6c/index.html","9e072f87574e5a8e1bb6de855937c401"],["/posts/3859c98f/index.html","694e3a23dda5124eaf0aac874df0054f"],["/posts/38a88481/index.html","7c674a4bcae3cd14003e9b472d387d5a"],["/posts/3914bfed/index.html","0f18a867ef927ce65ba7b99daca24d2a"],["/posts/3b56780c/index.html","0657746b20ff1fb2de8a4a9f2c3559a0"],["/posts/3d1ef1fa/index.html","2eba53ce74c7a51bd13af42f1aac883a"],["/posts/3e4bb613/index.html","dd10cc0ff4d9089f9d5253109baac45a"],["/posts/3f2e933/index.html","293e21b11c8f8e51b2dc195309c8853a"],["/posts/3f6e5f9e/index.html","d07ae7937c5837700997459333a052ed"],["/posts/4349a589/index.html","6465c03240aaa64fea105385351ed15a"],["/posts/44246190/index.html","3b44f4168b5b1b70cff178eab27fa1d5"],["/posts/456550f/index.html","32940e565f0a7355600c14575e3c3f30"],["/posts/470ac03d/index.html","70d3713074d5c6c0013eef5777503ed1"],["/posts/470d45ef/index.html","ea029e7fc1c9cfcd9b14cd04a7ac1a25"],["/posts/49249ac9/index.html","eef17274298423754a9ff90a59fb3a18"],["/posts/49f2d2a/index.html","a92be3bb8df32c60014adc460751c401"],["/posts/4e6d4eb4/index.html","9b514f65b4085c0362ce951d7cc660cd"],["/posts/4f346c5/index.html","939ea404d31c8d7ceb54fe440fef0001"],["/posts/50caf1d4/index.html","d260d96428b572e39437a816a9586edc"],["/posts/51139400/index.html","fdbbc393ccd594588c5c0dd59dbe2404"],["/posts/512c9a09/index.html","391cea26835df60eeb9addde09c9e50c"],["/posts/5205b330/index.html","6c75a42c984c070097ee25b01f953d3d"],["/posts/52d36cab/index.html","8fa0a3cbc4d10eb8775e027f1880c84b"],["/posts/532a083a/index.html","799f58373c9267e052da935ceb7975d6"],["/posts/537d2c2a/index.html","ff603edf992454b1d183329effbb6afa"],["/posts/54383ba0/index.html","9bc9f793584bdca34b235e8a48b52de5"],["/posts/54667693/index.html","11150531ae653e1183d5cd67a8cf0553"],["/posts/5508212c/index.html","975005de31a422558ddb60d0c6c98bca"],["/posts/571564e5/index.html","44561bc454055bf35114d622384a9c24"],["/posts/57900fe5/index.html","e22c91c945b707129eeacd3397670dcc"],["/posts/589a214a/index.html","3e9233462aff92ee9d875f2b134eafdf"],["/posts/599a2b19/index.html","0bad422f260baca52a835cb3dcb06242"],["/posts/59c05382/index.html","7ae670f1445cb0ee975e5bf45db718ee"],["/posts/5a5294c8/index.html","7dbe9d34eac4ef623d3b3db7b723f20f"],["/posts/5d3da28e/index.html","fc50ba8cf90bf5add2acddb812e9f74d"],["/posts/5d3f50d1/index.html","acd28cf9a9c6dec7f23a7cee82e136c3"],["/posts/5ef7ef00/index.html","45df841776e80274f44ad88b2a5b2f55"],["/posts/5f1fa8df/index.html","3ea401a8aaae2582325d797c27b6db6f"],["/posts/60b5dd06/index.html","5443858ce87b9571d72227734d895d30"],["/posts/61477045/index.html","d476d91c1fd8a5665c1b4fb2627a701d"],["/posts/69d79f93/index.html","aec893ae0b5d726a8d5580e63d204192"],["/posts/6b2f046/index.html","520690a7abb4f269e9821e2419776631"],["/posts/6b4610c4/index.html","0aa233a369f2cee42c52bb3e035c4769"],["/posts/6bbf03f0/index.html","025992bfac1c08678fadd4888718a8bb"],["/posts/7000d139/index.html","b8fd9d0df94e812d2289fb1b1c126dd5"],["/posts/72f94093/index.html","b3c5688b01f933001ca4a513a93d700d"],["/posts/7380b71/index.html","d35606cb8ca344148b8628e55885ef0e"],["/posts/738eee3b/index.html","ab02f4d11d1096da5adfaa582717341d"],["/posts/73981dbc/index.html","ab4f30a42d86b9bf42511ad322fd4ce9"],["/posts/74d60fd9/index.html","c4bddeadca597ecd3fc4c495ac1d8051"],["/posts/74f5d9a5/index.html","0888461d3d1e8dd4eaeb19cbfce445b6"],["/posts/750f2ce3/index.html","a2beb17bd217119dfe800044fd2200c2"],["/posts/75ceb627/index.html","41bb2344f0fc5a8c45c91c3c68d7bb88"],["/posts/7725b75a/index.html","b84b3d9ecf50249fb1d8c91b25d6b42b"],["/posts/79ef335/index.html","3dbe5e01fa594458a2e650685ff075d2"],["/posts/7bbd3149/index.html","1a0353807edd7062e1aa197a005990be"],["/posts/7c20e8d5/index.html","0515897e95268d5099e9d21182595657"],["/posts/7d3ea75e/index.html","1af62fb98a7a2a36b64bf1c73dce75bf"],["/posts/7d43958e/index.html","07d369f9d546d79ec068153d91b45533"],["/posts/807ac7f2/index.html","ab18170a331dcee4f3656988ccf72449"],["/posts/81738fa0/index.html","504dfcf8a1be89685f7e699ec91dc1cd"],["/posts/817c41b4/index.html","7bbb34e7c0ee04b58971144c08eb7a0d"],["/posts/84ee8e34/index.html","d15fd3d5115f1803b6c4c83e54b6d283"],["/posts/8837602f/index.html","e1eab9489f20258e33d0a2c5536427cc"],["/posts/89589a03/index.html","2514b495c7418889bcbe953160e16833"],["/posts/8bcef008/index.html","bd2e5d39a4d2549971ad82d590f17eaf"],["/posts/8bf9abeb/index.html","1e208b752be178e2951224defae14ef7"],["/posts/8e5f5686/index.html","cb8827b3fb056a841d47fb44e7ea71be"],["/posts/8fa6b8c7/index.html","a2c1ed27ba40613564e33341606621b6"],["/posts/9029a3de/index.html","bc7ff0f53ab3fa5ed9f1a21df73479ea"],["/posts/909d9a5d/index.html","8bebb5de08a9402e59eaaafd730944cf"],["/posts/91404b94/index.html","b1fda5600866124bab790e0abb14cb46"],["/posts/932e3747/index.html","d7ae5bf137074eb3a9b969d1fa729791"],["/posts/95fc9e6e/index.html","ba6ba93ef79f3a9a40519866454084b8"],["/posts/98e67280/index.html","c0c95b932ef2fd02f08163fca3d81e58"],["/posts/9a4d13ef/index.html","2faa50c8d0b599a65fc5b45837cfc2ff"],["/posts/9afbb889/index.html","feeb7d2894fe00e929fc6dace15c7269"],["/posts/9be63ba/index.html","ba2144f9fa0b7eeaaefecd514cb17906"],["/posts/9d967c90/index.html","c675bd709e6622631a9a24e424215364"],["/posts/9eadcdf6/index.html","bd65a6c66f2fce1f4c96bd79580beb5d"],["/posts/9efd76a3/index.html","7a8e58fca217c83cc20f29b2781953a7"],["/posts/9f97db8f/index.html","ec655984f5cfd8de7cbcacc732100b81"],["/posts/9ffb4388/index.html","f92273907612edd0f3d7cc35cdbdc76b"],["/posts/a094d027/index.html","2b4472e997b93785a5dfe82db794b523"],["/posts/a27042c6/index.html","94dcd7d9a3b4a26d645314a66bb1bcd1"],["/posts/a29cc732/index.html","50e976cc79a367734e04bd41b4e0ac06"],["/posts/a44a518/index.html","a3b8e0245e2aba84812e197c18a961c9"],["/posts/a4f2a748/index.html","1388dc6e61d635d475c018b2c7f74fe5"],["/posts/a7dc32c9/index.html","b37270dc697a4116c1518718e71634cc"],["/posts/a7f753ec/index.html","7692de67a703dc2e0606433c6d64b9d1"],["/posts/a9168bc5/index.html","aa257c650853e956e8acbd6ccab56dfb"],["/posts/ab176793/index.html","79725f5634ecd0329f9a21380e10beb0"],["/posts/ab34095a/index.html","fb553746b9b60fc6c646dfc03738db61"],["/posts/ad47c4a5/index.html","ebe370fe9554bf85ab56577a30fd2570"],["/posts/ae8f7b74/index.html","4747f45a7f0c7bc27fe95315d088d104"],["/posts/af43816b/index.html","ba51a50ea1f3b2624162598e5a4f05e7"],["/posts/af9e049c/index.html","fd1e0d21e83286c091960367d2be10b0"],["/posts/b0f1a367/index.html","fe525622a49f993a0648ee9536303652"],["/posts/b0f98e2c/index.html","9117fe50197050a07fb2fbd8fbd4e011"],["/posts/b33131fd/index.html","8c2f956855b6360703111caae2938473"],["/posts/b36eb520/index.html","72b59bf6d34db2d92326dacb956d6759"],["/posts/b542fc02/index.html","605fa2bfa21efe97a7c9a1410a8021b1"],["/posts/b54eeeb4/index.html","63a634725c3b86a0479b58f6e5b3e9bd"],["/posts/b84f3f3c/index.html","5f137c73463336597d00b9d374873e08"],["/posts/b94fc207/index.html","a86569b7257163ca564eb75ce9532bdb"],["/posts/b981a6b4/index.html","e9ede690c90b3f5113afc697ffb68ae5"],["/posts/bcea326a/index.html","b332a4337466672037935f113b213d18"],["/posts/beb19e80/index.html","ee2d0b39e1daac6570e5367e67c584ae"],["/posts/bec490f8/index.html","e1b0db972b7fa6f8e4394c9b9ecd444c"],["/posts/bf7bde0e/index.html","d5933a412385cc5361a55c579b709044"],["/posts/c03f17c9/index.html","1f980dfafccba130f710298096a82662"],["/posts/c35bc572/index.html","23dc710fba20306fab1761319dc52cf7"],["/posts/c436016b/index.html","be69205b88d4529eb8101b963c1a5ed0"],["/posts/c4efc741/index.html","3023fc7fdc625bd5e19c44d947cc4170"],["/posts/c5e8a08e/index.html","5d537adfe9bb24143cb020a6b0ed217b"],["/posts/c7db1dc0/index.html","0de0cfc820b13f359dcd54b226ee8e6d"],["/posts/c7febeba/index.html","81c92b1a5dcb5de1cdf5968600ec54f2"],["/posts/c9c3a06e/index.html","d2cd4675967c31090180fb0e4c688724"],["/posts/cc6d2cf2/index.html","08209f54e53920ae1cac7101b68adb36"],["/posts/ce48f291/index.html","952fa0c28b7c11f392a318b0e6bcaf94"],["/posts/cf480faa/index.html","24470a4bf078634370b8279f0c65e0a5"],["/posts/d090b4d/index.html","0f3aebfe726bb5bdf8204c07d818dab3"],["/posts/d1995044/index.html","e59351c44f1edafe71f0d3ce82d0dbbd"],["/posts/d2d34977/index.html","ca77a1b0a24d2cda96602644ebf9a78c"],["/posts/d3647a92/index.html","0d788ec9c70e6e4bbf8812e2f723caad"],["/posts/d3f6b818/index.html","fbe06a1c6c48335efc5126b9575eda42"],["/posts/d465029c/index.html","5c809cabf30b98b926560eb150a1cbfc"],["/posts/d9884be2/index.html","ca2223e1dd6ba321bf6d75f758a0ea35"],["/posts/da40f433/index.html","392f1ef6e497154ff5072ccfb5a44962"],["/posts/dae71d5f/index.html","012709b25094063b71e266e9c8c5f9d1"],["/posts/db9fbe47/index.html","7ea19b1250cae8a701c9d2fb0b5e9241"],["/posts/dbba997d/index.html","54c93c95bd5ea3b72678594e797be0df"],["/posts/dc94f8a1/index.html","868b7f3981813e381b5ce8bf3d59197f"],["/posts/dfe9b67/index.html","b3c299cdf0599c53325cfd8e4e87499d"],["/posts/e0387d80/index.html","9624d1665e3ccd0e3c6f399b107eb2bf"],["/posts/e356f7b3/index.html","c62ad905b7d6056d25ee8b24b7a6846f"],["/posts/e3acb366/index.html","6533b55c04827e3f0a2ba2ca333a38df"],["/posts/e450354f/index.html","c5ccfd69cf2db94922ab36cc1fdc3829"],["/posts/e489223c/index.html","6211b7197ff3229055e4d0ae68d27611"],["/posts/e9a8ddd1/index.html","1788a9af225cb8ea54baa777188b2055"],["/posts/ea914c06/index.html","dbca34246dd99e76df577f7996126f40"],["/posts/eaa8f31e/index.html","c10f35bc597486bd5740bda1ff521a2c"],["/posts/eac19412/index.html","53a7163021836bee0f7d49024ba63779"],["/posts/edfc881f/index.html","b6f5783ef3400748f28ed578f94b74ae"],["/posts/eec0bbd1/index.html","0d39e44be668e255741307c028191390"],["/posts/ef22c7c2/index.html","9ac8c5f5b7e68ce835d4eefcacc67a20"],["/posts/ef271825/index.html","4cf96697a47c5d6428f932acfa57bab1"],["/posts/f209578c/index.html","782228544c4d027ce73036101b379d18"],["/posts/f3e9bea2/index.html","45d4c725565e06f3dea0ba1aea3316d8"],["/posts/f67b7122/index.html","8bd661834b650ad8fd090da6c406cca6"],["/posts/f7abba28/index.html","5028e394af677118a5b781d7b746ce57"],["/posts/faffd764/index.html","5cc0443d90d688ee63b2da04add62f70"],["/posts/fb684fb0/index.html","957119031ebd586ef618a43a91473654"],["/posts/fc57199f/index.html","9da2afa2414c72045d25084b16123dc3"],["/posts/fc6e9a7d/index.html","32d4a707906a38fa44e7b3fe4188a3e4"],["/posts/fc7bc02a/index.html","c750dec0140599b1f7c1599363090802"],["/posts/fd67c5cb/index.html","8f17943177a59bcff06d75497efe9b53"],["/posts/fdde061e/index.html","6f6a3c4ebe43c6b9da802a00fc431818"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","99e75fb1a2291a9539eb4b4656ad6b3b"],["/tags/ES6/page/2/index.html","22b40e300d88de2cb9ee45bfcfb4b013"],["/tags/FL/index.html","5612a644e3752f6b07ef6a7f90bfc86d"],["/tags/HTTP/index.html","98b5fdbb1eb03cdbaf310e6c101687a3"],["/tags/Hexo/index.html","82c6b4256d763302521b5f9993b718b3"],["/tags/Hexo常用命令/index.html","4c36b51743adba23d7f5c571be3b1d30"],["/tags/Nodejs博客实战/index.html","f1b71a3a126aad0b2ec3620c9807f60b"],["/tags/ajax/index.html","583b4babf7be572509b567cd0bd355eb"],["/tags/ajax/page/2/index.html","dce3a2c1a77d818d207056489d20287b"],["/tags/curl/index.html","e3d8a3e5da9f4971a58ff3f30a11c3d4"],["/tags/index.html","45fad5430624cd8b4cf5fcf1fd031d7b"],["/tags/json/index.html","b4c2fd47e489e028a599f44cddadaf5f"],["/tags/mongodb/index.html","7dafc84c11df0ea51ce3f302208edc0f"],["/tags/nodejs/index.html","1629071dc3b0a3c1ea9aa6e059686945"],["/tags/promise/index.html","935bb5d74083add09a5ef8e03e493170"],["/tags/中国近代史纲要/index.html","3e0127b4e4e8ef15f64cac9fab6c8226"],["/tags/日语/index.html","28a293e1c25531978fc5eb5299fc9ebe"],["/tags/标签外挂/index.html","f687b09a4bd110267b193476535fc1d7"],["/tags/目录索引/index.html","d47b3f6ed62c00f096572045c57a96b5"],["/tags/管理经济学/index.html","05749a030277f432a23559235382aef9"],["/tags/考前突击/index.html","fdfcd2433a0b99091a870a8bf7a1279e"],["/tags/考前突击/page/2/index.html","a6bb120060756575d3a1df8f66e58650"],["/tags/自考/index.html","6ece400c9e3182056042e7c2d2760784"],["/tags/计算机网络原理/index.html","ea58246a6ae966d593fb69a343e9e5da"],["/tags/运筹学/index.html","8566160004335fac2bbec91eaac42b66"],["/tags/马克思主义/index.html","9aadee56a93e93d0a59ade33aaada2c9"]];
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




