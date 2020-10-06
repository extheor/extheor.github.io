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

var precacheConfig = [["/404.html","228f883beb9e39f36e46503a7f3fe480"],["/about/index.html","f533e88a50a134faae502ad4691aabff"],["/aplayers/index.html","1240b9e149fad31972df37a3746a88d5"],["/archives/2020/02/index.html","c84270cfbd0aac4f48d60ae61e77e656"],["/archives/2020/02/page/2/index.html","7146df7dad020adf304b42cbd1afcc4f"],["/archives/2020/02/page/3/index.html","2c28f4325f90855cf7234a99faada0d2"],["/archives/2020/02/page/4/index.html","9dbce59cca6042e3c2048472b4dee22c"],["/archives/2020/03/index.html","99d1716eceb2c23eca42dbd5d027cd7c"],["/archives/2020/03/page/2/index.html","32a6cec59741cc373bf125158059f439"],["/archives/2020/03/page/3/index.html","63e3acb739baaaa7bc1e20dba5e75fb0"],["/archives/2020/03/page/4/index.html","ff7e1494efb4ae56ddbef43efc0b2985"],["/archives/2020/03/page/5/index.html","3dc2556db946ede39a615180b4fb2a23"],["/archives/2020/03/page/6/index.html","0deaf249bcda6c1352be55c434828a70"],["/archives/2020/03/page/7/index.html","67af1a740591aa4df2de25ea759cb79e"],["/archives/2020/03/page/8/index.html","7ec744e25e0108d0a4cceab56ca6ffea"],["/archives/2020/04/index.html","c2f5687cbb20f89bb4a4492e191cf530"],["/archives/2020/04/page/2/index.html","24842085a42376b16da87e2e032c5484"],["/archives/2020/04/page/3/index.html","8d549a64f12f5cdb4fed3dbbc641d440"],["/archives/2020/04/page/4/index.html","d7a83918fb326605028f7014fd537f36"],["/archives/2020/05/index.html","ccddbdb40dd4d0205ce8d9f58a2ef0f1"],["/archives/2020/07/index.html","2f77da45e30f055275e7ce50e4d924c2"],["/archives/2020/07/page/2/index.html","609dcf6e9ea4dc1b61ed0d9ab194bd95"],["/archives/2020/08/index.html","0a0e91a9aae1340ce171ce68d282d32f"],["/archives/2020/08/page/2/index.html","06575df6c69949a39b56a6996d61b6db"],["/archives/2020/09/index.html","a2f45d032e1264c61fb5c6f15a7132d6"],["/archives/2020/09/page/2/index.html","7fdea3baf0dd7b545907325934c464c5"],["/archives/2020/09/page/3/index.html","9e618e3ff85f39823f86093e9b06d7e0"],["/archives/2020/10/index.html","fbb4ca238e4183fcc46e28116e3561a0"],["/archives/2020/index.html","0b281bc496b0db42cad6052ad5af5718"],["/archives/2020/page/10/index.html","7ef591b48059eed9aa11fb90b1509bce"],["/archives/2020/page/11/index.html","b7b6fe560768104be29f89c3feac3a3b"],["/archives/2020/page/12/index.html","3eefbb55502a015efee98d885adfe4b5"],["/archives/2020/page/13/index.html","d11a6875880ea2c75b01b7ff3db7da58"],["/archives/2020/page/14/index.html","18214af1c438417a794425234bd80f8d"],["/archives/2020/page/15/index.html","3bb10c7769adbf8b27739f8ed5d9cdb7"],["/archives/2020/page/16/index.html","a1bb697b9291e873488c566a2971242e"],["/archives/2020/page/17/index.html","240e9d156284af82e0547adf88310d14"],["/archives/2020/page/18/index.html","59f6e703cbcd5f973ba15746f43b315f"],["/archives/2020/page/19/index.html","777a37edf2225eeb7db02ff93e18b40c"],["/archives/2020/page/2/index.html","72f7518727667ff9c0c60e930b206aca"],["/archives/2020/page/20/index.html","431adbde37d787ae12ae6628258a1df1"],["/archives/2020/page/3/index.html","f2233cd5ec888f8f405f3d381fe45ad7"],["/archives/2020/page/4/index.html","19e92bc24b862cf97f4a482e2c0b6412"],["/archives/2020/page/5/index.html","45eddd260af08902f433fa59a28dc184"],["/archives/2020/page/6/index.html","f220b4a81ce22127d980166677bdf86e"],["/archives/2020/page/7/index.html","51f2f594ad884065cae7150c69a3327e"],["/archives/2020/page/8/index.html","5e3c6be955404584d270b4be789ee058"],["/archives/2020/page/9/index.html","9b8a257ac9d21a044e606dca2c16bad0"],["/archives/index.html","524cd18459d8f716b82a93853f512835"],["/archives/page/10/index.html","e12988e161089b84d3229a910157dda8"],["/archives/page/11/index.html","782efa578055cd7b4f35c1694d9339a9"],["/archives/page/12/index.html","4a4f6596df8c4113f9fa9877d8d1b2f0"],["/archives/page/13/index.html","3c5f6c45dea515671944bcf145892a1d"],["/archives/page/14/index.html","03ddff29e63e2c01251970be6a516a7a"],["/archives/page/15/index.html","161644b6c08aed167bf150b906967ce9"],["/archives/page/16/index.html","82843d285e21325947f2c44ad87b11a7"],["/archives/page/17/index.html","a50fe953994328798948530465c1ad7b"],["/archives/page/18/index.html","81e4028ae80e2bde50cc70ddbe669b0d"],["/archives/page/19/index.html","f0dce385ee48c69c5a6e2c43d67417f6"],["/archives/page/2/index.html","a34bc6e55f2406363204e37986335464"],["/archives/page/20/index.html","9512186ddc4344825336f4c3ecaa8765"],["/archives/page/3/index.html","13166fdf314f7998bc3be9b9d99c4135"],["/archives/page/4/index.html","8ef555e1297011b379d2c0fb7b09826f"],["/archives/page/5/index.html","e303b2635154a548b120d1df04dca59f"],["/archives/page/6/index.html","6567ad3e5e9f9191e9ec952b3e318833"],["/archives/page/7/index.html","8d27800b39d0de31978f62f5cfab98d9"],["/archives/page/8/index.html","86816730fd4297b4f5f849b35a8581c0"],["/archives/page/9/index.html","8e9b492c2805a91380fc40b2f6b668d6"],["/bangumis/index.html","21540e3ab702091e5dc3a13cf63be210"],["/categories/Ajax/index.html","03b50cdb13a3f8f2ebf5ee12ad5ee40e"],["/categories/Ajax/page/2/index.html","107d5681c480305abb0ffd132c0615e8"],["/categories/HTTP/index.html","5c8bba11d48c24a6d291ce5b49acc554"],["/categories/Hexo/index.html","deaa70af9990a0c0e634f241d5f652d4"],["/categories/Hexo/标签外挂/index.html","89fce64aca67c783e0cae10b465eb5f5"],["/categories/Hexo常用命令/index.html","0f3cf1b0061071e52f07b0bb8386e8fb"],["/categories/JSON/index.html","25b5ffba3200c2f76886826a54d9a630"],["/categories/MongoDB/index.html","97824d93763e2d45e49ae20564cd95c0"],["/categories/Nodejs/index.html","80ed7259859d9fd9ebc5893c8727d7ab"],["/categories/Nodejs博客系统/index.html","8bb8be79e565455d73b8f321c2a751ee"],["/categories/index.html","f9b92493d54b8768f3f85609d8efb9ba"],["/categories/promise/index.html","a1c661da18a7d2c006800cccd29cbc07"],["/categories/日语/index.html","3a94d979420cd144496e9bcca8a469cc"],["/categories/自学考试/index.html","eb31edefe9e213e1817145b99f1508de"],["/categories/自学考试/page/2/index.html","2e34fdbdf629cc066f8a4e456526858d"],["/categories/自学考试/中国近代史纲要/index.html","7a4eeebc053b38f8bfa5483bfcc321fd"],["/categories/自学考试/管理经济学/index.html","a42edb3dad3c595515ee81fc1d02d82d"],["/categories/自学考试/考前突击/index.html","eb4836f5f54b932d4929f15a3f5b3c34"],["/categories/自学考试/考前突击/page/2/index.html","beb1b87fa8c2b5c2647985f33121348c"],["/categories/自学考试/计算机网络原理/index.html","a75e8c1eb68356d40ebf2f1d21cdee27"],["/categories/自学考试/运筹学/index.html","a42a3e12865b2362259ac3868f1aeff6"],["/categories/自学考试/马克思主义/index.html","ac7cc31d3ff79badb4814a73dd3487d0"],["/css/index.css","02768e0f539a91b829374d4d7c70325e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d94d53fe3b4e29f8ea700cded632f626"],["/js/calendar.js","bb5dd255ba79da882ea68add71ca0064"],["/js/fireworks.js","fb89d0d04079fffcaef92f0033984567"],["/js/languages.js","edc0ec6b454f9dcbf2b1e967f5d4b771"],["/js/main.js","25f028c3393015483212fce4765e727c"],["/js/search/algolia.js","6739a0bf84ecd8af6c7c0a9358ddfafc"],["/js/search/local-search.js","5b41a01c3d1db3024b0318d008272cc8"],["/js/third-party/ClickShowText.js","f66854e27a08e7c5ca9f2c479fdeff3f"],["/js/third-party/activate-power-mode.js","62f45a1942a31ee8ee24ee2d22d813f2"],["/js/third-party/canvas-nest.js","41f8f312423ab0de3ebce72c84bdc8db"],["/js/third-party/canvas-ribbon.js","1e2ceec82796abeb136789890fd21324"],["/js/third-party/click_heart.js","3822ab26483f0d27b48a9e090d360d1a"],["/js/third-party/fireworks.js","8ad5d796e461b063ae83a2d3b663a07a"],["/js/third-party/piao.js","78ecf11125085b2a594a504819058431"],["/js/tw_cn.js","6bc7f99cd3e10710cac0499debdaf362"],["/js/utils.js","582f6b4c5d0d1ff7d5f6c994855bd11d"],["/links/index.html","4ce4d172c01f81bcd802c288c8e0ec27"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","f481fe033ac31b0c6d401a8e0cdd9cb5"],["/page/3/index.html","00689987cb1c1782ed7f180bd5e181b2"],["/page/4/index.html","f96ac7cf1c31c06c96e7d8065f0aa615"],["/page/5/index.html","f163cb44fad94681f2b085816c8eb2fe"],["/page/6/index.html","101f40b49ad511613f85183a95dd5bcb"],["/plays/fluid/LDR_LLL1_0.png","65b063168317bdd54a8c18e0ff0096bc"],["/plays/fluid/dat.gui.min.js","b87024acb876bb767a7c27a5747d015d"],["/plays/fluid/index.html","ad96278b19975b503ae56b8018e4a1df"],["/plays/fluid/script.js","05d850c6db55e5092f36690f9311a285"],["/plays/mikutap/css/mikutap.css","325c78697c87a3f62edd09be21ec5903"],["/plays/mikutap/index.html","fb2263f57f7816f72709dd2abb5d8f23"],["/plays/mikutap/js/mikutap.min.js","110ad1060ee41e6f41f7f6232337fd4e"],["/plays/mikutap/shared/js/common-2.min.js","43e49a61141c64bcf8d7981f7a6a26f5"],["/plays/mikutap/shared/sp/css/common.css","da9b00bf3729866428f53b69ee9da8ed"],["/posts/10812f0/index.html","4215de42861845b2839f11fd32cebf1b"],["/posts/126b275/index.html","377a64d254e5572d4a4e8acfe0276fb1"],["/posts/12d95a5e/index.html","0175275ff83eb076c91d270be7b8bd49"],["/posts/1367417b/index.html","49a3f80b90a406ae7e8bc01d91ffff02"],["/posts/13886e3f/index.html","6a4d24d7b59b6d887c0f6593c78eaf48"],["/posts/145193a5/index.html","00da180e16a96795e0200ca9e2649550"],["/posts/149dde25/index.html","e73d600e1222ad712d428b802526f74a"],["/posts/152fa65b/index.html","446e4cec91768efbcb723238390de118"],["/posts/169e7dda/index.html","36b954ac093cab6734858ad269627d81"],["/posts/1875100e/index.html","5f12f4af99cbe2fa54a2f44064388d98"],["/posts/18eaef7d/index.html","14547afdbd4176f7b5352370085c3b12"],["/posts/1a0bc7b7/index.html","61e2de1f782681df2d4df659ac788805"],["/posts/1a20a057/index.html","872dc213ff54bb4ce0764508ec8a054b"],["/posts/1a998be6/index.html","3624b1c80f56d2370907ba074b5414ab"],["/posts/1bffbd20/index.html","7ba64dd67bd37eb77e935f4faf0a686c"],["/posts/1c5a0485/index.html","e97700dc1b8ad979f0ad471bee35102f"],["/posts/1e638f78/index.html","08eacc3c514deec649a18c5f4eae53b3"],["/posts/1fb53120/index.html","c618d93e293ab038b4dff01b3c309267"],["/posts/21466e86/index.html","8c7f2debd245cf9503985960b9efdf91"],["/posts/21abcf1a/index.html","a6cf7b136cfef680f83d24a45086ea12"],["/posts/21c250b1/index.html","51b10645962b02f3d613165d67e3a0ea"],["/posts/2287cc/index.html","121e6ef10f94b77ae30151e0ca625afc"],["/posts/236bfea3/index.html","c410549ab1a9424f695612b42e3fa610"],["/posts/24caea6b/index.html","55172357db9a7eb2568dd342d39ca71e"],["/posts/25d45c3d/index.html","70879e68754d6a5ca363f1215a41069d"],["/posts/262baa9f/index.html","02937acb0dc2c27b5b69f0bb14e36245"],["/posts/27cdc142/index.html","9ebe4e9429565f5be14ecca294be104d"],["/posts/2895c4bb/index.html","a7e837bad8a6b06ade206336200216a6"],["/posts/28987ff3/index.html","468bce8fc1907afe8feeb89ae89520ec"],["/posts/29f0df96/index.html","f0216d2cf00c9a22fa2deaaf3afc8e5a"],["/posts/2a1d2b6f/index.html","295485b11dceebab9a55209b405992c7"],["/posts/2a386047/index.html","5590e95675ef90a7adf2d966d9a7289a"],["/posts/2b770baf/index.html","769ad21b9d1cc6b4b08b3ced293562d2"],["/posts/2cda4a8/index.html","a68179088cf6127e3c04d6d0cb891c56"],["/posts/2d020832/index.html","864a134b85c7b2863334ea4e4353dde2"],["/posts/2d6d3bd/index.html","7f7baa9c2438bc0ebffe26445975d472"],["/posts/2e0c129d/index.html","060f3f87a203d2feaaf35780779467ef"],["/posts/2e7563a0/index.html","87eb7eacff4aab8a6820f66da451a2ba"],["/posts/2e7b8d69/index.html","3c4b07c2502a3b1887074ee629889d1c"],["/posts/2f28d14b/index.html","42eda92d93b3c5d98d50f02e7f69f57a"],["/posts/2f6e1383/index.html","7ea08bbf8985fecafbb57b5a5c58b942"],["/posts/30bfd1cf/index.html","39b2c1aeaabf47c66ef4a11fc6b82831"],["/posts/33235106/index.html","c542244b51276f15bed4a8fea9343b8e"],["/posts/344e951f/index.html","c3839005e3b40a2736961fb67ab93752"],["/posts/35e2bcf6/index.html","db0bdf92a1c06135c404685ba16fdec1"],["/posts/365e96c5/index.html","a6c546b77f5cfb28e52902da44fe9969"],["/posts/36e331e3/index.html","f3199b0a9a5d8b3f154ad6f45374e10d"],["/posts/372df90a/index.html","0fb6c4b05ebff47706e87b1b70837bfa"],["/posts/37c547df/index.html","64fc0f83eea1b15be97cd7d9e464eb42"],["/posts/38a88481/index.html","ba45b8d6d666ce94f7d48bc169c2e12e"],["/posts/3914bfed/index.html","07dbb4e25c26526da1096c356114464c"],["/posts/3b56780c/index.html","1691e872a1036fe7011b640afef87710"],["/posts/3e4bb613/index.html","33880b8c1bc5c4b14bc1da978d5b923d"],["/posts/3f2e933/index.html","0a783840261ccbc9c2d03d65c779c396"],["/posts/3f6e5f9e/index.html","8ab9e0eec6ef860e4c7604d38df66f35"],["/posts/4349a589/index.html","d61a1b412f6ac8b1d55cc288bea70b03"],["/posts/44246190/index.html","9d010e5c842612063d44c1f9a30a94de"],["/posts/456550f/index.html","53f548501355163ca2892f2ddec119ab"],["/posts/470ac03d/index.html","79e5e933171a4a6975929db7fc5f4dae"],["/posts/49249ac9/index.html","5f68d6af2f2a161e08e3c171001303a2"],["/posts/49f2d2a/index.html","2a5e99643972d41d97adf04e5cb2ff03"],["/posts/4e6d4eb4/index.html","e50f07c13650f265e6fd6e4fcea5f26e"],["/posts/50caf1d4/index.html","2ea4f5db474476bade32843b46e5ef26"],["/posts/51139400/index.html","3c3e6f0c0b90bed1adc513b15970b327"],["/posts/512c9a09/index.html","5c7d64a2ce3974c1f78fde64bc8f987c"],["/posts/5205b330/index.html","e8f0a7ff54d2a31d06467b088cb8cefc"],["/posts/52d36cab/index.html","011cfb953ccb1cbb2ac8cd7eec29e924"],["/posts/532a083a/index.html","cb5ae29a2f51a558b752cc6a8e4664e2"],["/posts/537d2c2a/index.html","186f1d8883b0be242072d77d7cec4003"],["/posts/54383ba0/index.html","a0c1e0600dffc4ac52b3b0880f8c77ce"],["/posts/54667693/index.html","bff52c88e8e5b9bcd966c3b81c909180"],["/posts/5508212c/index.html","388e9fdc75629914150f5cdae03c9e2c"],["/posts/571564e5/index.html","beb520f040f107aaaee40988f2b8f895"],["/posts/57900fe5/index.html","f8daef303503cf23c5f3fe543855085d"],["/posts/589a214a/index.html","56a83c9b6e7f664f9e31199a81d7b3b8"],["/posts/599a2b19/index.html","2bd2cb7cc443bcf730baf459db8a9320"],["/posts/59c05382/index.html","f1230422b1c0143c931d9bacb5b1cf28"],["/posts/5a5294c8/index.html","c51db2317cfcd4bc5550eedd1c9740f9"],["/posts/5b8c69d5/index.html","1ae5816700aaca4231b1eb04e49214d2"],["/posts/5d3da28e/index.html","4349b290efc4b9143aea8e0714493a0d"],["/posts/5d3f50d1/index.html","a9ad9f6ff29f2e09f575dc6c77f0c609"],["/posts/5ef7ef00/index.html","b5c05756419539c1fe476df75d3c7f53"],["/posts/60b5dd06/index.html","7bc7951c69956f8625ca0e6b66702442"],["/posts/61477045/index.html","8fdb831f1adcbbe32f097d64bfc71455"],["/posts/69d79f93/index.html","244d1a2c61bf97e7a1fc5ba34b87afe3"],["/posts/6b2f046/index.html","eb38e0480bed02803427179a7088ffaa"],["/posts/6b4610c4/index.html","06f41d448019cff5f7c92e7c77d8c7ef"],["/posts/6bbf03f0/index.html","ebc4fa301dedf3f5f1529cc2e3313b95"],["/posts/7000d139/index.html","c89727d486b04c2597d4d794317a386f"],["/posts/72f94093/index.html","532df8668e22b720470515575f4cd7ca"],["/posts/7380b71/index.html","3e33a02cf5c2e112a1d0e99a6751712e"],["/posts/738eee3b/index.html","a6a4984f731aaeb0920cf432bbd9ed7c"],["/posts/73981dbc/index.html","1d372127d7cc9e2a3bf18e4d21632920"],["/posts/74d60fd9/index.html","335d72078cd4270d586f780306be9c77"],["/posts/74f5d9a5/index.html","1c47b69f0baf100eced95c4ef4691629"],["/posts/750f2ce3/index.html","02230a3c88c769f519b1355b8762f791"],["/posts/75ceb627/index.html","4d2a15af72dd8d903d265eee68fcb973"],["/posts/7725b75a/index.html","3cba757a6c0a8b9b96f804e50dac424f"],["/posts/79ef335/index.html","c573b302a6fd77f229102de94e37cab2"],["/posts/7bbd3149/index.html","7c7e707e1519cc6008f030c0b2b4f0d5"],["/posts/7c20e8d5/index.html","60ac7748fc62f39100b683f79c3d553f"],["/posts/7d3ea75e/index.html","e449a599e835227f5258f55b9ff7fc0b"],["/posts/7d43958e/index.html","0b66292abe8740e694471f3ae54c218d"],["/posts/807ac7f2/index.html","2419cd8b8be388199d993bc6fd5637f3"],["/posts/81738fa0/index.html","e1fc795a78725ffae947d3c08623ee47"],["/posts/817c41b4/index.html","63e22fffadd254c53236cd2a52785f70"],["/posts/84ee8e34/index.html","89e676b804ef0b6156d6ace1b2b5ca13"],["/posts/86f3f130/index.html","e44b9e798e564d9776658af1895e5e41"],["/posts/8837602f/index.html","9505e204d9b1be918e77206aa9aad1d5"],["/posts/89589a03/index.html","3addb23fbb39bf66b6a4800a559bd65f"],["/posts/8bcef008/index.html","95f71f8e8572456629e92d0b3c748ac9"],["/posts/8bf9abeb/index.html","3d02b59f0b4db900bb5814b9d1e05ef3"],["/posts/8e5f5686/index.html","fc559a960e9dc932685b7e429e53050d"],["/posts/8fa6b8c7/index.html","ac189bd207e2011f4039a7f8a29a208f"],["/posts/9029a3de/index.html","a9e251dae04ff1f179b092f61f5def62"],["/posts/909d9a5d/index.html","f88da349b4edf787b89a3875cc10169a"],["/posts/91404b94/index.html","95154090c78bc2f31d5d6b5a436a4564"],["/posts/932e3747/index.html","8f56ffd68c1397e65016713692ecd50b"],["/posts/98e67280/index.html","8c010396c0de020b289a9d27bba75291"],["/posts/9a4d13ef/index.html","c8b41c1da46b3540f0dbaef26dc5dbd2"],["/posts/9afbb889/index.html","d2ab266b11c685a570a1100f1df80593"],["/posts/9be63ba/index.html","09d1d7aa2723f1b0e572ee39b7bce25e"],["/posts/9d967c90/index.html","ee3b617bf36b3a0198b9170bad803d87"],["/posts/9eadcdf6/index.html","407abef4a960b92f7e27990390eb1116"],["/posts/9f97db8f/index.html","5664c314a4553786505989940383a4e9"],["/posts/9ffb4388/index.html","5c3c87468f23ad664e6fe372f2b5be21"],["/posts/a094d027/index.html","f1f6b8e025afee483e6f02ae07451a99"],["/posts/a27042c6/index.html","bf8d31a0eb3fe919892311fe5d9eb250"],["/posts/a29cc732/index.html","0622f5795ce6cef15b95de6e8740f1fc"],["/posts/a44a518/index.html","90651a6318e48d6d481b84eec7efe27d"],["/posts/a4f2a748/index.html","f407f48adc07fc2eb0e85868f5df4112"],["/posts/a7dc32c9/index.html","7ca95e2fb6c6daf4c89a6bbb4c5bae99"],["/posts/a7f753ec/index.html","bb28f2d517465de5c0becd1c6d9888ae"],["/posts/ab176793/index.html","14a36cfdf2d3d0dcbb1d0e7954712955"],["/posts/ab34095a/index.html","0e0298b1d9f036622ce80c541f2ca452"],["/posts/ad47c4a5/index.html","39ce8b7386398a07cb170bbe5632d5e3"],["/posts/adb93761/index.html","01dc688684c4ab7d39bc1744a0477e12"],["/posts/ae8f7b74/index.html","4554a16aeabf41a5f08ec588ac56a913"],["/posts/af9e049c/index.html","7c29d95e2963e45a746e5ab3660f6078"],["/posts/b0f1a367/index.html","f945e1d8a75ef535703030010ae0e2b1"],["/posts/b0f98e2c/index.html","fae166e5d90c76cc5c9ab94b57027128"],["/posts/b33131fd/index.html","e3d56489e4572d82c122f8f717e4f6eb"],["/posts/b36eb520/index.html","dd16ec2c362a24ca7845bba271fd53fb"],["/posts/b542fc02/index.html","1d6349f4ad0b4c6f134e17405fa2cb0c"],["/posts/b54eeeb4/index.html","6d6d79a58c841dc5ba67c354f60346a3"],["/posts/b84f3f3c/index.html","67b30d3469453619dd89b1df66650f2f"],["/posts/b94fc207/index.html","77ebed54401284af1da626ff48922f90"],["/posts/b981a6b4/index.html","a8e846ea2442328e0aa6f8d6298375b4"],["/posts/bcea326a/index.html","966a3836c9067668a3633ebf4c9cd87c"],["/posts/beb19e80/index.html","3b10f31cae8eb0b93b8b09f6d75d86bc"],["/posts/bec490f8/index.html","01d630e8ba20bf6f6ee0326591caed89"],["/posts/bf7bde0e/index.html","4d1e6243a8ab2c0290eed1820fcb7cb0"],["/posts/c03f17c9/index.html","614087c1d1434dc9f516d8004e8a6995"],["/posts/c35bc572/index.html","723c01aa5de4c8ed3ff038a718cbc9e2"],["/posts/c436016b/index.html","b22a60ab68abf5be318920eec689eb35"],["/posts/c4efc741/index.html","cdf2e31ff491570c77ead5fe163e73ea"],["/posts/c5e8a08e/index.html","236374db04411f092377e32109c13335"],["/posts/c7db1dc0/index.html","c4deec2447fe63b5266ce479f4930136"],["/posts/c7febeba/index.html","cd5c6f85f9f4f0b9aced228a5979b449"],["/posts/c9c3a06e/index.html","9d9def22d99eb19606669fd814c8b982"],["/posts/cc6d2cf2/index.html","eb2959a53d19350bf0ff40d5c33a6e68"],["/posts/ce48f291/index.html","bd2ae8e6c1dc5972fe532d38bb493bf9"],["/posts/cf480faa/index.html","3d9ce6ba2041fd26c5311e1b00c85d73"],["/posts/d090b4d/index.html","51408ee870d113b97a4c482d0264d179"],["/posts/d1995044/index.html","a62af55121f77db8dcef0cade002a5f6"],["/posts/d2d34977/index.html","343926bbf99fa43e275e3dd1ddafebed"],["/posts/d3647a92/index.html","92d9de79772792f23f81ff5a8cb87321"],["/posts/d3f6b818/index.html","49c1bc6413d3be009c826da7fa1b1725"],["/posts/d465029c/index.html","b879735a9ddd21bad33eeebfb453b70d"],["/posts/d9884be2/index.html","14efde15fdf5a1fcdebb4c601ab656a9"],["/posts/da40f433/index.html","8aa5f09214d9e6ab67916f8673949c04"],["/posts/dae71d5f/index.html","e866b778e9bd38d5c7c999eb86d3b166"],["/posts/db9fbe47/index.html","bbcf273b703f1d5b0ef62777b4ef79ab"],["/posts/dbba997d/index.html","396aa0295617891027d45ae427d92cbf"],["/posts/dc94f8a1/index.html","a48c2e1361fc5129213ac3148613df25"],["/posts/dfe9b67/index.html","9d0ecf3c537d5b2d645c32bf890b2e6c"],["/posts/e0387d80/index.html","fdfa44f558137d185bbcb862cc6b606b"],["/posts/e356f7b3/index.html","6960863f57ce3a576f7b2159669d3af0"],["/posts/e3acb366/index.html","89fda27e2b3a49ed60114863ce7cdcf5"],["/posts/e450354f/index.html","71bd5b7c731b845c5418238e8cc190b5"],["/posts/e489223c/index.html","16dab34e12b87087ca1f89df6bedbbc5"],["/posts/ea914c06/index.html","9a852278c443fc2626a77aa3645653f8"],["/posts/eaa8f31e/index.html","b57513d1be94c2421903d72d91ef89bf"],["/posts/eac19412/index.html","2748a27be2b74f5aa4ef1c5c365be9f2"],["/posts/edfc881f/index.html","79e05532044549f4175baa5d87682dd6"],["/posts/eec0bbd1/index.html","54750b6c19e020f74ce77bf9abd515ac"],["/posts/ef22c7c2/index.html","22f7a9cdce4a015c3cd5e9d5378b790b"],["/posts/ef271825/index.html","815eb9473806a44d1d7962345fd9b4eb"],["/posts/f209578c/index.html","924dc8adccd93fd9c4bb3876018e601b"],["/posts/f3e9bea2/index.html","d3ed7ad834a6bbd84236c52d9db1f082"],["/posts/f67b7122/index.html","8f2d8cf22a76bb7002088be89aa2c2ce"],["/posts/f7abba28/index.html","d79380264e62c24eb9c163f68d2d94bd"],["/posts/faffd764/index.html","354ff6c65222465d8d2e15354bdcadcf"],["/posts/fb684fb0/index.html","712407660e0392e0ad4c4406e34e21d6"],["/posts/fc57199f/index.html","9aa13cb2d798de16fb620bf6e5b986fb"],["/posts/fc6e9a7d/index.html","16c5143f05f19fb2e432a1da42918dfd"],["/posts/fc7bc02a/index.html","ce7a8cb7ceda39524af6d3fb6f4ae447"],["/posts/fd67c5cb/index.html","f0b6fda4f1499a1f7af938f512353251"],["/posts/fdde061e/index.html","af0f359886c3a59edd2842303a7f2047"],["/tags/HTTP/index.html","f83a823550e8a06492ed7261312e4610"],["/tags/Hexo/index.html","ebf50c100520ce9898eb1722bb81c6f8"],["/tags/Hexo常用命令/index.html","49b86e4f804c24b9e3dcc37b245e275e"],["/tags/Nodejs博客系统/index.html","4e1def3e8b5f296d3d64c36c5a838d0c"],["/tags/ajax/index.html","524595b70fe45429aac31962c1d02b3f"],["/tags/ajax/page/2/index.html","2aa4d2281aadc2bffabb9b8eb60b5963"],["/tags/curl/index.html","4b4e0de28a073d56b401191d42435b83"],["/tags/index.html","14a74358765eddbdb4ce1d20e561c1cb"],["/tags/json/index.html","36310392f2f715dd324f734f4a20634b"],["/tags/mongodb/index.html","688a3e8b338fb1ee93b10d476f1c88a8"],["/tags/nodejs/index.html","106ce75d6a5649d2f2d32550563e573a"],["/tags/promise/index.html","62efddf1f3037164a6d2698c7eb6687c"],["/tags/中国近代史纲要/index.html","8ffe91fa83682bd8323024464ac992ac"],["/tags/日语/index.html","343f65a9e8c4184d4814c8953e420999"],["/tags/标签外挂/index.html","fb8949b2135ac27137ae0c30f6b1a467"],["/tags/目录索引/index.html","fd82cdaf9e9315cd5a457a17c0a6c5f2"],["/tags/管理经济学/index.html","75516a9583e38a0e733aff5c356db004"],["/tags/考前突击/index.html","1d39ba9c76b195ccfa2079793d69ee63"],["/tags/考前突击/page/2/index.html","b188e45adbb316bdd965c3dc312b0c71"],["/tags/自考/index.html","9f462218975f63185499c179a27f6b7d"],["/tags/计算机网络原理/index.html","874cf9e236395e78adc21350cdb8e157"],["/tags/运筹学/index.html","12f1bc686fd0130777fc5a78f663aafc"],["/tags/马克思主义/index.html","2b63b902e4f78ef43b9e22ff606fdd60"]];
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




