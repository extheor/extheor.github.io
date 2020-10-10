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

var precacheConfig = [["/404.html","47a265d2ec1a9ca27464cde8d2f243eb"],["/about/index.html","568cf1561b6c34eaa1ac90d8e468bcea"],["/aplayers/index.html","63bb350e9c1f47599799dbbf01a4c156"],["/archives/2020/02/index.html","9d40169ac660155905cbc8a4abe2c91d"],["/archives/2020/02/page/2/index.html","0e006dcd19c31a6098969eab77ea9c52"],["/archives/2020/02/page/3/index.html","73ba764538305b9a43faa28d4a06a83e"],["/archives/2020/02/page/4/index.html","47727e407586f3bebb9be2d3a7d964f3"],["/archives/2020/03/index.html","7a248ee2d76e74d758e976e5f9518855"],["/archives/2020/03/page/2/index.html","eae92510baf2ec42c893c27032c0dce8"],["/archives/2020/03/page/3/index.html","3ba521f471a5c90a990a1ab12310cbdf"],["/archives/2020/03/page/4/index.html","d7a4aade2bdc82681d21cf1ab1a2416a"],["/archives/2020/03/page/5/index.html","ce9c0cdc170888f4dd712937c3869f43"],["/archives/2020/03/page/6/index.html","d73b79a1b22cfa9fd13ef973ff1f36cf"],["/archives/2020/03/page/7/index.html","142fe87870b22092c689de6805aa8f2f"],["/archives/2020/03/page/8/index.html","fb100d30de92400db393c381035a3f35"],["/archives/2020/04/index.html","5ef24a3d04b5ce7fe41fe8278808bbd2"],["/archives/2020/04/page/2/index.html","01a6780bb3475d8a589356b86f469959"],["/archives/2020/04/page/3/index.html","cb65276d4c95865d05d1dba112ad2cd0"],["/archives/2020/04/page/4/index.html","6a7d25cd92586be9da10b53a63568527"],["/archives/2020/05/index.html","11dbcbc517bc9030b79fe7b508c8694f"],["/archives/2020/07/index.html","3996a051753dc83c9bec169ce00feb20"],["/archives/2020/07/page/2/index.html","3735d03b1b0caff710da4d4c2b62981d"],["/archives/2020/08/index.html","ef79c0ad530747ad8b05d5044ddca3c5"],["/archives/2020/08/page/2/index.html","dae5a7c5761601651e3c4e045e597a89"],["/archives/2020/09/index.html","a16900182ee95084b15a2db3931fec4e"],["/archives/2020/09/page/2/index.html","ed549a7f8ead327e5f69aa31d35c3497"],["/archives/2020/09/page/3/index.html","6fe5f1553abcfac388f6308ad7f3dcc2"],["/archives/2020/10/index.html","fc431538d9123dbc4eb6184d98d24f91"],["/archives/2020/index.html","3f7f054df2a01efac72ec2f99032f05f"],["/archives/2020/page/10/index.html","77cc5196c106832093581fc34879b674"],["/archives/2020/page/11/index.html","a71e20c0d0849d07cfdd8ea02cee7a5d"],["/archives/2020/page/12/index.html","0380bfe129dfa8fab7bdf6ffd6d935fc"],["/archives/2020/page/13/index.html","c35b3b93467f86c8654dcebb28992957"],["/archives/2020/page/14/index.html","270615a4bde179b3144a7f79fb00ef17"],["/archives/2020/page/15/index.html","da7f9b9f3e717a98d81a60c35f840452"],["/archives/2020/page/16/index.html","619cd0ba1d470a3e88f0fa5d5840d18b"],["/archives/2020/page/17/index.html","6121fbd65d2fefce357054aa473d9762"],["/archives/2020/page/18/index.html","6ce0065434e76af6dd385a62d2f30aa0"],["/archives/2020/page/19/index.html","79cf13f0ded972d903abc8f1b9a8e702"],["/archives/2020/page/2/index.html","df6bc838f1fc447577b7a261af896759"],["/archives/2020/page/20/index.html","f4b6ce622d2d14c4f83c19b3deda3a22"],["/archives/2020/page/3/index.html","75952e8bee59ddedda2e0a84fac38a0c"],["/archives/2020/page/4/index.html","aaeed7a665ad5b8bcfb8819ba3b9f26b"],["/archives/2020/page/5/index.html","51a3129e83432f6a593a4624297bfe27"],["/archives/2020/page/6/index.html","fc4b3d2ffbe27ebe1def50c299f34e80"],["/archives/2020/page/7/index.html","b1ae1bf5aaace15a5ea8876c587bfdb1"],["/archives/2020/page/8/index.html","9dae1ec18e394a78fe9b89617e0fc3ed"],["/archives/2020/page/9/index.html","2555f8922b2e1b5a7ff67551d3e2b659"],["/archives/index.html","8957d1ff96f3ba4748dff4007725ee8a"],["/archives/page/10/index.html","94c428c83960dd324ca6ead6c56d84b0"],["/archives/page/11/index.html","6138d24f7340b503fc0e2190e2a9c90d"],["/archives/page/12/index.html","3c843cc1ed449c19e68f94eb849a80c8"],["/archives/page/13/index.html","039b196b08cd067d54c53004fb076bf7"],["/archives/page/14/index.html","f98f7c9d3b8abfcd1760d182e3c33268"],["/archives/page/15/index.html","24a1793b216b2471c7c1a8ac9dffaece"],["/archives/page/16/index.html","367367d59f8001e74571e6d473831a7b"],["/archives/page/17/index.html","62213697d2a2437e2b19a941c534849e"],["/archives/page/18/index.html","648448c213537aea22c3c3f5a1a722f0"],["/archives/page/19/index.html","b86f6e81e54cfaf29b4e0461de2966f2"],["/archives/page/2/index.html","b3a088706b56ff3a39711c856bf2c0df"],["/archives/page/20/index.html","33dbf18863356a3481234f0c971c6171"],["/archives/page/3/index.html","c5f84d24223a0266a5d451fbe25306e1"],["/archives/page/4/index.html","e5c6c9d682b32c2f5bcb2a2140edfa2b"],["/archives/page/5/index.html","fb7bedf975261f16a3f97be1b3edc039"],["/archives/page/6/index.html","b35af2864531fe9dcd4cc28c1a3986e8"],["/archives/page/7/index.html","5f80fd588d3be4ad02ad37886a0cfc9a"],["/archives/page/8/index.html","3ef9125337a018535f82b44d04a4f0da"],["/archives/page/9/index.html","37cc652f9f7ead3124c80e71ea94c93c"],["/bangumis/index.html","5a76658462abeac3c0d78474501d5a54"],["/categories/Ajax/index.html","20dfc7ca1bffd79c7580fd7161e33834"],["/categories/Ajax/page/2/index.html","81935537cd121fb9d0f86176c7e8828f"],["/categories/HTTP/index.html","a27298c8d960afd7f54f1b112472e74f"],["/categories/Hexo/index.html","edd7dea3c7a44aa2a8fe085414331736"],["/categories/Hexo/标签外挂/index.html","72f49ea67eb45809d344a040f0e3695d"],["/categories/Hexo常用命令/index.html","edfa79a7a92c9d5d4b424146ced8f54d"],["/categories/JSON/index.html","da15d2579132c15d9f02f40b89ef1ead"],["/categories/MongoDB/index.html","becb88f6b83424338a972b21935c2f4b"],["/categories/Nodejs/index.html","bd7c8a627df6971deb754f1ade92d3c3"],["/categories/Nodejs博客系统/index.html","b52885582c5ee02429ed95c909bca90e"],["/categories/index.html","72f0daeccc200790b18fbc9006e1264b"],["/categories/promise/index.html","5316afa12df7d85918954ba4e366689b"],["/categories/日语/index.html","2590ac43e88bd9833cf827b6d17b597d"],["/categories/自学考试/index.html","f609aea2696e8428dfc0e1cd14227cd5"],["/categories/自学考试/page/2/index.html","f4f54914ee319495adb50c8a346cf713"],["/categories/自学考试/中国近代史纲要/index.html","2076995d2af4c69c2685a181de426595"],["/categories/自学考试/管理经济学/index.html","0f4e39de1c0f36947261a107d4420e01"],["/categories/自学考试/考前突击/index.html","79fcce79a75d0067825131f14d53770c"],["/categories/自学考试/考前突击/page/2/index.html","abc400360cff45e940c329de94e7dad0"],["/categories/自学考试/计算机网络原理/index.html","dc03365a856d5570c1d49d096e4d26b1"],["/categories/自学考试/运筹学/index.html","7a09e1995f8ff392b695fb3d8ddcbd97"],["/categories/自学考试/马克思主义/index.html","d0d72eecff337b11926573c47d7eae66"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","e2d48897cb2c052f7c97ee4b5afa77b5"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","d386e99cf3054d28220c360b2c472670"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","d0fb52acb453e55659d8fd3b2f4e5b8e"],["/page/3/index.html","44989a8be4cb1179e4f17c77bb70bca8"],["/page/4/index.html","064124ac2ff3620e214a949fee412305"],["/page/5/index.html","8d53c41489fd483f7c3927b8ae409b63"],["/page/6/index.html","e91a9d19302cf5e36c3c4834abf6eb75"],["/page/7/index.html","2b6f7333ff32a180e0a79537c495c885"],["/plays/fluid/LDR_LLL1_0.png","65b063168317bdd54a8c18e0ff0096bc"],["/plays/fluid/dat.gui.min.js","b87024acb876bb767a7c27a5747d015d"],["/plays/fluid/index.html","ad96278b19975b503ae56b8018e4a1df"],["/plays/fluid/script.js","05d850c6db55e5092f36690f9311a285"],["/plays/mikutap/css/mikutap.css","325c78697c87a3f62edd09be21ec5903"],["/plays/mikutap/index.html","fb2263f57f7816f72709dd2abb5d8f23"],["/plays/mikutap/js/mikutap.min.js","110ad1060ee41e6f41f7f6232337fd4e"],["/plays/mikutap/shared/js/common-2.min.js","43e49a61141c64bcf8d7981f7a6a26f5"],["/plays/mikutap/shared/sp/css/common.css","da9b00bf3729866428f53b69ee9da8ed"],["/posts/10812f0/index.html","3e26f8a943e9c63398f0765a490640b3"],["/posts/126b275/index.html","90a5f88703f79ae9db2d2f1ae66fdded"],["/posts/12d95a5e/index.html","5ff0067394c657251417511f3282bbd3"],["/posts/1367417b/index.html","f5e0a9158e2b704f8f5b665800af4aa4"],["/posts/13886e3f/index.html","116035ad9702a3563607cc457be1c02c"],["/posts/145193a5/index.html","9ee1167ee1505b5769a2bd54f42decc8"],["/posts/149dde25/index.html","f8e1d4ca4e2cae441dc4ec822ab7899e"],["/posts/152fa65b/index.html","fe5d01db457e5193ffbe3447fbdabeec"],["/posts/169e7dda/index.html","cb5069b00efb5c1e988ccf5cff467f0e"],["/posts/1875100e/index.html","4a922afffc00d7ee88830f38493ff960"],["/posts/18eaef7d/index.html","05cbd38c460ebe762af462a13d438811"],["/posts/1a0bc7b7/index.html","460c1d1227fa2fc9725ab8c869cff1e2"],["/posts/1a20a057/index.html","44bede9193d41458a83442951495a86c"],["/posts/1a998be6/index.html","5f8c0ea9fc46c1f34d73bae026b98a3f"],["/posts/1bffbd20/index.html","521a1778b55ade55d82edbbcafdfe6d4"],["/posts/1c5a0485/index.html","768a07e64bfde6480ed2c1f67f2bc9eb"],["/posts/1e638f78/index.html","d75d4ea9cce6bce461b6f8fea74c4f3c"],["/posts/1fb53120/index.html","b606a3652ff35e53161bbe4ddba8edc9"],["/posts/21466e86/index.html","311e429499bfdd758a33237f2b118707"],["/posts/21abcf1a/index.html","140f60e724014ef5ec34936b01c2767c"],["/posts/21c250b1/index.html","00078d0b27b3a1a9d8ae8afee80f9077"],["/posts/2287cc/index.html","492ec48c691f27bdf437247b879c94bc"],["/posts/236bfea3/index.html","b49e5ce1be10e2e73c33a6e248e06b12"],["/posts/24caea6b/index.html","8e3e17d56c5e729496eb80338890fc25"],["/posts/25d45c3d/index.html","50cd0a4ca92053d52da68af7fbb7f2f8"],["/posts/262baa9f/index.html","23c6ba20316634b5609edf2fb170b24b"],["/posts/27cdc142/index.html","9d990d7bf2e49df880f0e689ea3da4dc"],["/posts/2895c4bb/index.html","323cb241681114fa932a7a17eb6a86bf"],["/posts/28987ff3/index.html","32ac1fa6ffad899d32e2916ff016e1ca"],["/posts/29f0df96/index.html","2757d1e2ee2502ffe1c9413bb6ee0692"],["/posts/2a1d2b6f/index.html","2ab88e98bdc1fae3ccf20fced417e048"],["/posts/2a386047/index.html","78e599af638b61971f3bccd84d5b7fc0"],["/posts/2b770baf/index.html","dfab549ab29b43b764346658e69e516d"],["/posts/2cda4a8/index.html","7bbfdfbede76af3ee5430ba176908e49"],["/posts/2d020832/index.html","7677e9358704edc14f1bc64f7fb9e18c"],["/posts/2d6d3bd/index.html","3bc67390699bb74e1ae92972324ae5a0"],["/posts/2e0c129d/index.html","2173765b07774d13983310313907180b"],["/posts/2e7563a0/index.html","e563e2e64895f75b53ebcddb77d1d3be"],["/posts/2e7b8d69/index.html","d428ca455dea3cdfca84457b4a35740b"],["/posts/2f28d14b/index.html","50cc5753a8f83dc22d766e7542cfd6bf"],["/posts/2f6e1383/index.html","0906e3be5d4c1fe16982252716bf6ab6"],["/posts/30bfd1cf/index.html","63f332677fb7d5c8b4deee8cf7f12c8a"],["/posts/33235106/index.html","10e1eb0550939fa9a489eb6511e9ee7d"],["/posts/344e951f/index.html","97922ccca4c11fccbe4f5d5cc29adcc5"],["/posts/35e2bcf6/index.html","a186a8402319a7153c3a42a759f21082"],["/posts/365e96c5/index.html","8c5f0a22a3c98280447af770458c2ea3"],["/posts/36e331e3/index.html","de1d1c5bd1c6231db1726962c1a48e7a"],["/posts/372df90a/index.html","499508b3030cff4ca46a580c6c9add4c"],["/posts/37c547df/index.html","9a11ccc874439cc772eff6167a14572d"],["/posts/38a88481/index.html","63248c5ff5583df41cb144b4d22b3ced"],["/posts/3914bfed/index.html","11803c9e6da0439282c1213fe2e6ad8f"],["/posts/3b56780c/index.html","3e3efc65f1b0a914d03cc0308f294177"],["/posts/3e4bb613/index.html","cbabca3d362a8afc06d572c0c52b8c71"],["/posts/3f2e933/index.html","a7728c4a7b99a3a28762003bd415d3b4"],["/posts/3f6e5f9e/index.html","021973aa0156d1d5fc09d0b1695af920"],["/posts/4349a589/index.html","d23dfd31b1a298acfd1268d70826456f"],["/posts/44246190/index.html","74d19784177799855a03ef7696fcd153"],["/posts/456550f/index.html","f7c9ae67476067dbbc9ab391902cbd35"],["/posts/470ac03d/index.html","8028b7a264d76a3985fa008de1713152"],["/posts/470d45ef/index.html","ece1a8ddd67a5a5119a82b44c531639c"],["/posts/49249ac9/index.html","57fa1e49eb830e82f123678a69694fa8"],["/posts/49f2d2a/index.html","e9c8e0da865d7a31485be7807621d214"],["/posts/4e6d4eb4/index.html","a67a0b6afae7016db08a536b5979d7f5"],["/posts/50caf1d4/index.html","18836d3760a2abfb5c55af52025a6c28"],["/posts/51139400/index.html","0252f59007a351157a51533e90755651"],["/posts/512c9a09/index.html","bd8c1c69e281ad98ae112ad5cc726739"],["/posts/5205b330/index.html","0947ac3c4f75800985ad3bbb3a395c17"],["/posts/52d36cab/index.html","6ef4f30d765226eba42b4602aa3ec8e3"],["/posts/532a083a/index.html","0ecb4bd70bb2a50a97ae17fb4e11edb9"],["/posts/537d2c2a/index.html","712cd8cdcc6f1024800f31639bde7245"],["/posts/54383ba0/index.html","b2289cef256634f609e2bbe49418600c"],["/posts/54667693/index.html","0457f46f40d6eb4d82c5b34039d2e03a"],["/posts/5508212c/index.html","1dd217a653316623ec67fc844a76fc45"],["/posts/571564e5/index.html","383a6f0a9bd44ec2e3716662c9a90f7c"],["/posts/57900fe5/index.html","fdd25ee68f3398cdc24f1e6c801fb70a"],["/posts/589a214a/index.html","42c3d6264497c4e05e5a1767589e6638"],["/posts/599a2b19/index.html","8956aca75df82d25596c82ed4c076e0b"],["/posts/59c05382/index.html","a758a7ea3e6c6c7b2815a9ff72fe5add"],["/posts/5a5294c8/index.html","127db8f3a39b95e145cbca695d90b380"],["/posts/5b8c69d5/index.html","af0e23ef5f4c27a8e9d0f0efb71a0e7d"],["/posts/5d3da28e/index.html","2a4ca59664b525a4b6d429132e8e3a78"],["/posts/5d3f50d1/index.html","15a254bf13997c31f1ed8d83a020ee78"],["/posts/5ef7ef00/index.html","724a6078e13e899bf124d989821d5681"],["/posts/60b5dd06/index.html","a4e779a3f171a40fdf1d9c05dc3b693a"],["/posts/61477045/index.html","55a3876dcc767f079df7c1b08efa4644"],["/posts/69d79f93/index.html","ecfc2ac17290a641c328f753abd31b80"],["/posts/6b2f046/index.html","5ff1725585101f1c23f40b6154e3f5aa"],["/posts/6b4610c4/index.html","196237b8e89019e506a5dee8be9020ef"],["/posts/6bbf03f0/index.html","ea790d49d47ffaaa88356a108d544c07"],["/posts/7000d139/index.html","4abb7c0fef9a434aa616a18758677616"],["/posts/72f94093/index.html","410ac434dd696e2ef5c95276a8b3cc92"],["/posts/7380b71/index.html","549fb340ac53204584247f95fa6cd837"],["/posts/738eee3b/index.html","47af6be8d3d097a3a5bde26d3ca07754"],["/posts/73981dbc/index.html","0dbf7f20b1f4227c0e28206a4fb19c5d"],["/posts/74d60fd9/index.html","fc4fa5b117f9faa0c44d8e751195f2ba"],["/posts/74f5d9a5/index.html","aab9ef3dd26001ed3ecb86cb478db1a9"],["/posts/750f2ce3/index.html","f4b09b422e762f65c20e1b0892a9ec4f"],["/posts/75ceb627/index.html","a3b55ff907e83e2c4a1fc8aae63871bd"],["/posts/7725b75a/index.html","b5ecd8ce5646168a034386903f5c0de8"],["/posts/79ef335/index.html","0cbb73b6e9d00dcce76825e0ec2cbc99"],["/posts/7bbd3149/index.html","14c54ff37923c94c92adbe7f85d1c363"],["/posts/7c20e8d5/index.html","68e9fa80be704b146bfd048de601b1a5"],["/posts/7d3ea75e/index.html","93ddfd580062c28a77493a07aa553a9f"],["/posts/7d43958e/index.html","76a7791bf1e50b2c213143253fbd5856"],["/posts/807ac7f2/index.html","cc8e5335cdb1bc2ee3de807cdc5fbecb"],["/posts/81738fa0/index.html","b2cd34fdc380ebf31cd6afc751d8e2c3"],["/posts/817c41b4/index.html","fbe5a90b223384c8cf857bef9467c696"],["/posts/84ee8e34/index.html","f505be611ad146c75e810b46222f680d"],["/posts/86f3f130/index.html","e44b9e798e564d9776658af1895e5e41"],["/posts/8837602f/index.html","b01e5a0c7562384d1048a921b9121d85"],["/posts/89589a03/index.html","3feb5e285fc4f3e9ac388f159dc53b85"],["/posts/8bcef008/index.html","71a31400ab07bde14235dd712f992af2"],["/posts/8bf9abeb/index.html","30d69c57e2e4d82f8598a6cb81c2000f"],["/posts/8e5f5686/index.html","2237e0512d32e2a19ebdceff561f68fc"],["/posts/8fa6b8c7/index.html","a7b0077b6e15d33cd593a8f1eee14749"],["/posts/9029a3de/index.html","cbdae80100a28c9744007e84efd14303"],["/posts/909d9a5d/index.html","cb3c476e06a2c8fda892ad652409756a"],["/posts/91404b94/index.html","6c82462e888c58dbbf2d198724024370"],["/posts/932e3747/index.html","7b15af7632b48b9a61125d58540dcea9"],["/posts/95fc9e6e/index.html","732bc06cd70c059c931035a6b5a5a805"],["/posts/98e67280/index.html","60115fe11a1b5ad3fad3101bacb1c525"],["/posts/9a4d13ef/index.html","63ec758be6500f048e1b233838bbf7ff"],["/posts/9afbb889/index.html","c301f5c1cfd150b6bfe39c765584104b"],["/posts/9be63ba/index.html","0a20a9dd5dabe58f772914eea837e259"],["/posts/9d967c90/index.html","f94c4892538f71dba6a4d2d210fd1224"],["/posts/9eadcdf6/index.html","f28dab90460347aa3c3f7112513811a7"],["/posts/9f97db8f/index.html","b77ecb0b42478c5909cb28c221772cbf"],["/posts/9ffb4388/index.html","8f08ddc2e0fe2eeccb1ecb33d6698b67"],["/posts/a094d027/index.html","f5049c053904b0f89fa3b026792d8f22"],["/posts/a27042c6/index.html","b0450843bfe8f927893baabccdb0e068"],["/posts/a29cc732/index.html","f7b96b76086528ce0860dace227b8915"],["/posts/a44a518/index.html","42ec48a80a1d0ae91abd558ccecbc8f9"],["/posts/a4f2a748/index.html","4cf469166b04173d30c447f0c4f5887a"],["/posts/a7dc32c9/index.html","acae31e3d731b03cc857477590f0e318"],["/posts/a7f753ec/index.html","6c63f3b5cc5b536509b4e66b10d3a243"],["/posts/ab176793/index.html","936187f667d59b7934e733c9434a9820"],["/posts/ab34095a/index.html","c27134c593364b870c0523be3b5f65fb"],["/posts/ad47c4a5/index.html","89b9286f67c47fff5ce48ad7f072033c"],["/posts/adb93761/index.html","01dc688684c4ab7d39bc1744a0477e12"],["/posts/ae8f7b74/index.html","c5cbff73cc5cbe34d388810f77bb91a3"],["/posts/af43816b/index.html","b55429251d490c243e619691b5c9ed68"],["/posts/af9e049c/index.html","24c6bfaebdb9484a57042597619a67d5"],["/posts/b0f1a367/index.html","70ec86664527df969df665450bb3d414"],["/posts/b0f98e2c/index.html","841e2ae1f501cdfdcbd56707f08d1af0"],["/posts/b33131fd/index.html","abec8e819174bb3d22e8d4a70878eae8"],["/posts/b36eb520/index.html","efeaf87ff89fa6c3715931f7e64b1f75"],["/posts/b542fc02/index.html","5b667691a2cdde72b2184251503aca46"],["/posts/b54eeeb4/index.html","480080d1a891b7776ee26be11ab95eb1"],["/posts/b84f3f3c/index.html","5301167fc909c84de9fed8dd7b0f3c1e"],["/posts/b94fc207/index.html","f37af4cc64d6e88759abd9f2a99c71d9"],["/posts/b981a6b4/index.html","a0495d5cb84d3e46def7026394a02c30"],["/posts/bcea326a/index.html","c7a85b52ec588bf50af2a1d2132dffbe"],["/posts/beb19e80/index.html","69d08bfbe40aab969a89dff5524d7d01"],["/posts/bec490f8/index.html","24daf56d0422f6b2818d2678c73be602"],["/posts/bf7bde0e/index.html","8d64126f3242f6dad831857f9ab8e13e"],["/posts/c03f17c9/index.html","c8537ff3cbfc8dbaf958f1e817f67bae"],["/posts/c35bc572/index.html","cbb41b1dc8b8a6de0c52bd614d766a1a"],["/posts/c436016b/index.html","3ca2637d4e83d8c95dad9423ff8ac73d"],["/posts/c4efc741/index.html","40bb60b068a877fd66d00a25b840a64a"],["/posts/c5e8a08e/index.html","297a8ba6ab56dd199bc8be42f599c593"],["/posts/c7db1dc0/index.html","adaa3944249094b22afdfb43f0c411b4"],["/posts/c7febeba/index.html","eab02b7903c1d67ea5265e5656073377"],["/posts/c9c3a06e/index.html","e7e0e308d39aa5a93ec1a58ec4c04788"],["/posts/cc6d2cf2/index.html","3f76a087265c7e8cd632675a524d6625"],["/posts/ce48f291/index.html","1cf3753eaa1d5bdd6d726b0f7117f58c"],["/posts/cf480faa/index.html","ca611700652fb82215552c8e37053973"],["/posts/d090b4d/index.html","7a1aee695cb2183bb0be3b4ee6815554"],["/posts/d1995044/index.html","49d7eaa4174b179317e658484e9f9892"],["/posts/d2d34977/index.html","1046ed3598d467fb25faf330f34977f0"],["/posts/d3647a92/index.html","da3007a8382285fe53c37ff82ef64bd8"],["/posts/d3f6b818/index.html","473c61e445ab3737f248b08b939291ca"],["/posts/d465029c/index.html","fba35efef46cc1f063e0e855d377fbee"],["/posts/d9884be2/index.html","6f51b4fb9f5c4202c3facd1f6971002b"],["/posts/da40f433/index.html","b7f6aa26e46e3e8384ba44783c39cb58"],["/posts/dae71d5f/index.html","3bf1f151e1d8653248a700df27250b49"],["/posts/db9fbe47/index.html","0a268962b4954b328fdca74b62383991"],["/posts/dbba997d/index.html","009604871b2c24c5eac4ebef2f9ba8f9"],["/posts/dc94f8a1/index.html","395d2c43b45cdd22430e836ca22b1d72"],["/posts/dfe9b67/index.html","6e745164fd4dde5c0f30b5b721b48bcb"],["/posts/e0387d80/index.html","c4aacf9234502bcc6f85e3e8c9230343"],["/posts/e356f7b3/index.html","d6f7810fc97a1808d3fc157b6e793cdf"],["/posts/e3acb366/index.html","2c38e45e89671ac545892abab612218f"],["/posts/e450354f/index.html","65113ce48f6f763875a9a95275fca4e8"],["/posts/e489223c/index.html","60803af23c3ae9d875fa1a610163d87e"],["/posts/ea914c06/index.html","4a8da9967b9ca4bba43e0914f41a958a"],["/posts/eaa8f31e/index.html","aeb009f69a93e5e2bdb1894a69c37971"],["/posts/eac19412/index.html","45e5d3667eebf3eac762b30192637296"],["/posts/edfc881f/index.html","e4b0f9f714804da9ee1377fcb51a66f9"],["/posts/eec0bbd1/index.html","f26c14319846c64f0436d88d29705a5d"],["/posts/ef22c7c2/index.html","bd85d34497bbfb79efdfb60a903c2eb1"],["/posts/ef271825/index.html","58d22499b531710ac70b8dfc3e680cb4"],["/posts/f209578c/index.html","52ff329c141a2ddf614ded3379851eba"],["/posts/f3e9bea2/index.html","d874656776d4f2ac1372ec6a34c466c9"],["/posts/f67b7122/index.html","bbbccfcef3ddf8994b339853c639892d"],["/posts/f7abba28/index.html","c0ae02ac8c9c78e17946bb9ecdbeb77f"],["/posts/faffd764/index.html","e7c40c13a6aa3f3cb26f5935639ac096"],["/posts/fb684fb0/index.html","345c03f12b5765125fa133e690f0cfdf"],["/posts/fc57199f/index.html","b473ee43f0ae60d47d9b5bbf37e2365b"],["/posts/fc6e9a7d/index.html","ff44f629f5fc21297c87b101f28ad6fb"],["/posts/fc7bc02a/index.html","f88429031641e3ca841a8e915153e188"],["/posts/fd67c5cb/index.html","de434216e51c712c338316fe3a3563ed"],["/posts/fdde061e/index.html","21eb5466dd0685d46d9ed034de759192"],["/tags/HTTP/index.html","bd4e8d62b1217339694c4bce30a88faf"],["/tags/Hexo/index.html","1b57fb844c148fea60d4ceaea50956de"],["/tags/Hexo常用命令/index.html","78fd0101fa93d2dbfd331e9c1686a93f"],["/tags/Nodejs博客系统/index.html","d9c9e8933a669eb27e3f2ab663d66d8a"],["/tags/ajax/index.html","a2986713a77b6b708da26aaecb18f980"],["/tags/ajax/page/2/index.html","7fdc45c3d43125f4574cbc2e0f254a32"],["/tags/curl/index.html","1e99d3c0ca012cc7f4d9bf556b8c590f"],["/tags/index.html","4194edc59a05f01fcb016d306cb13c31"],["/tags/json/index.html","a3f2052ddaff1ab0f1372f359f4deb0f"],["/tags/mongodb/index.html","9fda79876a95b0e3e587bf8ab906ea64"],["/tags/nodejs/index.html","2e588ed44c6c5fd5cdda6a10a31edd8f"],["/tags/promise/index.html","d108d79f4bfc8345a99ef59b0916d99a"],["/tags/中国近代史纲要/index.html","3a6ede946a89870c106b2c57f44d3126"],["/tags/日语/index.html","88033f48495c7dfec322e2cf68c20b25"],["/tags/标签外挂/index.html","ded299f541d57982af08924a737cf7bf"],["/tags/目录索引/index.html","cc79a964fb8211b0d28de0a427947110"],["/tags/管理经济学/index.html","687270186efd890528f2002367a669d0"],["/tags/考前突击/index.html","6ddbc17e0f3eab61e706a981172104a7"],["/tags/考前突击/page/2/index.html","82946a4605e61548f113bdc4469a2481"],["/tags/自考/index.html","aeb7d5fff2ea1dd766271d4c1addc174"],["/tags/计算机网络原理/index.html","06ddc19e33b7a529442510b7229a091e"],["/tags/运筹学/index.html","8c7d319665c3903d973849b93b9c6530"],["/tags/马克思主义/index.html","bc190e615dda060146597deef4257f6b"]];
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




