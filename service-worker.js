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

var precacheConfig = [["/404.html","28eb8dda180ed91556fc09c894975982"],["/about/index.html","616e55cfb2488a9b75a5740ce6fea9e0"],["/aplayers/index.html","64fcae66c6fc5201f2c2428951395b1f"],["/archives/2020/02/index.html","987d7f20fe3192884d336ed0b2ee691b"],["/archives/2020/02/page/2/index.html","a9047c95dba2390f3e6660d0777fd701"],["/archives/2020/02/page/3/index.html","c4200bd30c0ada3a3d7b5a9f89810eb7"],["/archives/2020/02/page/4/index.html","a72a5390c46f4f1615bc8bb4218187b5"],["/archives/2020/03/index.html","230ac77e20ba180dddc810f4b001255f"],["/archives/2020/03/page/2/index.html","cb93c68039002fed94a450a79e2684a9"],["/archives/2020/03/page/3/index.html","4cd2be6cd2a33359c3694426652c23eb"],["/archives/2020/03/page/4/index.html","315db66e5b5588ee10e6798c76c97a14"],["/archives/2020/03/page/5/index.html","cbaca10621748fe262fe5112e4c54400"],["/archives/2020/03/page/6/index.html","e35234b751747476a2b5fe484041e2cc"],["/archives/2020/03/page/7/index.html","022ad2b0c72ab36a4ea08d9fa917cb63"],["/archives/2020/03/page/8/index.html","1f1bc8724fa727f11cdb7b87384f9df4"],["/archives/2020/04/index.html","8031202a6741c4b33296ad6ba145b382"],["/archives/2020/04/page/2/index.html","645710809db133126efd87320340800f"],["/archives/2020/04/page/3/index.html","65c77f1ae4e3e733ae2e9abd78d6e197"],["/archives/2020/04/page/4/index.html","8352cfdefea22926bba8d0b877444624"],["/archives/2020/05/index.html","41c56b0a43eeee3bf41ac760bba3c6d8"],["/archives/2020/07/index.html","4bb5ce7574a97932130c5cf2795cfd5e"],["/archives/2020/07/page/2/index.html","0ffdf95942b16500627d81d866f4c947"],["/archives/2020/08/index.html","8326ac9dc520b37c6da946b06f831343"],["/archives/2020/08/page/2/index.html","208eeca12429b0c561b1c2bc77fa7fc5"],["/archives/2020/09/index.html","c530462786d9da3395de1c251c717b69"],["/archives/2020/09/page/2/index.html","6f6df0377b0f142ffed7493bd7a7bddc"],["/archives/2020/09/page/3/index.html","3c397ec2666f9da3d5b4334ceaa58bd2"],["/archives/2020/index.html","fc626b39d22d77ffe94b9085299d5c54"],["/archives/2020/page/10/index.html","5ff5095e2e62326b91e8215848300d0e"],["/archives/2020/page/11/index.html","b42665462b925fb462f8eda3a331f8bf"],["/archives/2020/page/12/index.html","41bdebb353aa9e20ed1b915e15461702"],["/archives/2020/page/13/index.html","f8f1e6c670967b31b2b07b76d6515d33"],["/archives/2020/page/14/index.html","e13b255ab3d6def327b7d4b183708dc2"],["/archives/2020/page/15/index.html","e7ce8fe72d1d5b3a30f2dc2fd5dbb825"],["/archives/2020/page/16/index.html","997e50ffb0481b7cad90fcb714419a06"],["/archives/2020/page/17/index.html","f600046cf862fe2a8ddaab83e1c182cc"],["/archives/2020/page/18/index.html","be14c4c12524d587b9396ec3d5015f18"],["/archives/2020/page/19/index.html","481930f113c4f5507850cfcd8461934e"],["/archives/2020/page/2/index.html","103b541e35b3eab4d99a60ab36a99720"],["/archives/2020/page/3/index.html","6e92b9a4d820e6f6a528c858ea85ed99"],["/archives/2020/page/4/index.html","7d6ad1604dc7ca4cac28a5f6c3dbee13"],["/archives/2020/page/5/index.html","603b696335e316b19520fbf8862cb640"],["/archives/2020/page/6/index.html","3b63b202f5331ab191b418a0e9971ab1"],["/archives/2020/page/7/index.html","f73904de733fe7425bb214aa6f334064"],["/archives/2020/page/8/index.html","25b2ababf0490eb01f05d97cda8e37ef"],["/archives/2020/page/9/index.html","e4be456d64cd2f800785a06f4860978e"],["/archives/index.html","37d7ca0d53a751c8cafda36f160c4441"],["/archives/page/10/index.html","6315b587dd60d99657ddd6051f3c3841"],["/archives/page/11/index.html","436110f7735ad23035560d634d6e414c"],["/archives/page/12/index.html","d4e4abb5739174a2c48b17be512ff53b"],["/archives/page/13/index.html","a2580f9d4c16b59fde53093276be9721"],["/archives/page/14/index.html","6236353e93f90dc74a1e6523c9a211d2"],["/archives/page/15/index.html","d4f884d01dbaf7f6e9224834e5153ec5"],["/archives/page/16/index.html","ca4c7fd5530cba1145696a9a35c22585"],["/archives/page/17/index.html","4a1390c00719b2836d1d81595e582fc2"],["/archives/page/18/index.html","4b08433eded7846f6857bfb1c439cda7"],["/archives/page/19/index.html","489a9d8304ed1cfac1ac03d2b3fb25cb"],["/archives/page/2/index.html","576d8a95ddce2a45bd4ba35b774906e4"],["/archives/page/3/index.html","53ca7ab2f817f3a4fab1f6d0740b2a1a"],["/archives/page/4/index.html","cddc4bc33438ca4c482cb783bd686aa4"],["/archives/page/5/index.html","797fdc6b284db37a0b797aa1d716ed5d"],["/archives/page/6/index.html","c386254cf37875a86027166ceb261259"],["/archives/page/7/index.html","3850ca449ee856d8e512c536a2513186"],["/archives/page/8/index.html","3d44c67f40a657106e7a8ded41b12064"],["/archives/page/9/index.html","f33c82d98edb5017331585b2f96eb1bd"],["/bangumis/index.html","a465c5b9c38ecf0fc1414730e51c8dd1"],["/categories/Ajax/index.html","269ecea0271ba3d67082132b4af6c9a7"],["/categories/Ajax/page/2/index.html","367767afe93d54d8a183450246192d40"],["/categories/HTTP/index.html","caa917c79a91a4e7434059f933d44c9e"],["/categories/Hexo/index.html","202039c4cfdcbf998f8a641cc6acfee4"],["/categories/Hexo/标签外挂/index.html","ac2e01910fad3f2ba2eb2bdc9728980c"],["/categories/Hexo常用命令/index.html","866ffae8d5fe0cbbc6e7e2c577ff9a0b"],["/categories/JSON/index.html","6535406933111f8112b95533da569c36"],["/categories/MongoDB/index.html","204a0dd35d312c0fbf512c8de1dd553e"],["/categories/Nodejs/index.html","ee583b715be19302a6a2193779888ebf"],["/categories/Nodejs博客系统/index.html","845dd68cc32fbae4367de69a5d11c28a"],["/categories/index.html","5a02ce46322086a5438085d680c81662"],["/categories/自学考试/index.html","8d4733cb52716df128ac0f4fcb4f9280"],["/categories/自学考试/page/2/index.html","9bed1b1666c2537b2fbb18b27b404896"],["/categories/自学考试/中国近代史纲要/index.html","2f2ff1a05a62dae32fd4879ee4197cde"],["/categories/自学考试/管理经济学/index.html","a31c092628a0df6eb837c538840942dc"],["/categories/自学考试/考前突击/index.html","05f5ea72655285751f1a88354a617228"],["/categories/自学考试/考前突击/page/2/index.html","4b02567bcd4a86b446102a0349ee3041"],["/categories/自学考试/计算机网络原理/index.html","55555d54d144855b5244cd321eac6155"],["/categories/自学考试/运筹学/index.html","30d5f670179a19870fb02493bda13c18"],["/categories/自学考试/马克思主义/index.html","ea11f99d55ea4509a541236b718fa2b6"],["/css/index.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","e5b596b3777611250c88c01085acee20"],["/js/calendar.js","bb5dd255ba79da882ea68add71ca0064"],["/js/fireworks.js","fb89d0d04079fffcaef92f0033984567"],["/js/languages.js","edc0ec6b454f9dcbf2b1e967f5d4b771"],["/js/main.js","25f028c3393015483212fce4765e727c"],["/js/myTool.js","ed68b3c62ed7236e63a8542d83705723"],["/js/search/algolia.js","6739a0bf84ecd8af6c7c0a9358ddfafc"],["/js/search/local-search.js","5b41a01c3d1db3024b0318d008272cc8"],["/js/third-party/ClickShowText.js","f66854e27a08e7c5ca9f2c479fdeff3f"],["/js/third-party/activate-power-mode.js","62f45a1942a31ee8ee24ee2d22d813f2"],["/js/third-party/canvas-nest.js","41f8f312423ab0de3ebce72c84bdc8db"],["/js/third-party/canvas-ribbon.js","1e2ceec82796abeb136789890fd21324"],["/js/third-party/click_heart.js","3822ab26483f0d27b48a9e090d360d1a"],["/js/third-party/fireworks.js","8ad5d796e461b063ae83a2d3b663a07a"],["/js/third-party/piao.js","78ecf11125085b2a594a504819058431"],["/js/tw_cn.js","6bc7f99cd3e10710cac0499debdaf362"],["/js/utils.js","582f6b4c5d0d1ff7d5f6c994855bd11d"],["/links/index.html","cdcb1a457703a933e614580050472ff1"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","95ecdbca2a9cee3f5db08678a1297316"],["/page/3/index.html","b579894457e772664024394fd92454b6"],["/page/4/index.html","afa4928efdf342d4574ab9627ee23bdf"],["/page/5/index.html","39a7e62d18c5d55abbab68cd83a5977e"],["/posts/10812f0/index.html","33efce90cf259bb2ded8ae52fabc5565"],["/posts/126b275/index.html","7e0efb6860c9406dd1c463ab2e73ade0"],["/posts/12d95a5e/index.html","0af7788a8b1b8490a912ab3974a81bc0"],["/posts/1367417b/index.html","f3329a68c66ca7cd91f373ca093e213b"],["/posts/13886e3f/index.html","72c6ea18afa4e71cb2d7cfc31679d4d1"],["/posts/145193a5/index.html","f1bbd255871aede09fb81965cecbaf71"],["/posts/149dde25/index.html","a87b60ce231e600c5ad4debe8ca0ad5a"],["/posts/152fa65b/index.html","df572c83d40176abe89618cd1c4eb576"],["/posts/169e7dda/index.html","66ac75b0a800bb7d499732379e1a7369"],["/posts/1875100e/index.html","bb4f200ee125bea104c8ee5e2c336dbc"],["/posts/18eaef7d/index.html","d1abc84f601798cab7b2378a15666561"],["/posts/1a0bc7b7/index.html","24eb25cce433fdc380d00c065e969f51"],["/posts/1a20a057/index.html","27dcb79cda86503b50b2897c4b4499e7"],["/posts/1a998be6/index.html","6a38404331402fe817cec2e1bf2f2e7c"],["/posts/1bffbd20/index.html","b0ec196b3ab7f04e5d84c4ded7e52870"],["/posts/1c5a0485/index.html","3296793a615109b3546b19719abbed14"],["/posts/1e638f78/index.html","c108b7ad0d6585a7db7c7d7c8747e02c"],["/posts/1fb53120/index.html","8ba2b26b0ab193bb93e375fe9913ff42"],["/posts/21466e86/index.html","eaf663a8253c717235efc3451c4884c9"],["/posts/21abcf1a/index.html","ebc462c2519aac6777c64397e7f06446"],["/posts/21c250b1/index.html","18c051b6b0402677b5443bd0c3cd12bc"],["/posts/2287cc/index.html","ec4d1b4f782d4536c838d979f5406ce3"],["/posts/236bfea3/index.html","f7613d0e88cdb5d386ec62c3ce2a0dd7"],["/posts/24caea6b/index.html","7b8b356abba816640dd08e738ea0f84d"],["/posts/25d45c3d/index.html","9be89b364ba9714849674564bd5bb6b6"],["/posts/262baa9f/index.html","713b765538f35f973fbcfe5fa9f813a0"],["/posts/27cdc142/index.html","c18e6815327d40c209289d4599120009"],["/posts/2895c4bb/index.html","07a9f1ba079d05b514d5fe6f28cef517"],["/posts/28987ff3/index.html","ebbaaf1059bf6549780aa99110acc62f"],["/posts/29f0df96/index.html","01834374590d32d1cb0455d7388feb9e"],["/posts/2a1d2b6f/index.html","299822ceec6772a9358c202594b0385b"],["/posts/2a386047/index.html","295d7f6f9eb0a28414f41088c86cdb16"],["/posts/2b770baf/index.html","158f5227fbade6ba17f2c897ffe6a715"],["/posts/2cda4a8/index.html","567a0130c5188bafaa9ede6a0256b14a"],["/posts/2d020832/index.html","1358708f85046d7477186dd9ffac2b31"],["/posts/2e0c129d/index.html","6f067dcb5959e903f47a0bcd86f6fbad"],["/posts/2e7563a0/index.html","a96cd68051ea68abbc3ad8acab796fab"],["/posts/2e7b8d69/index.html","97c313ab8f4894bcb765043074084909"],["/posts/2f28d14b/index.html","dca78fcf2e9e746bf760d183310653d5"],["/posts/2f6e1383/index.html","7cfa4eaaa2a2fe10c099fb5b986355e4"],["/posts/30bfd1cf/index.html","92ef5e235808288bdca7e664978d8ccc"],["/posts/33235106/index.html","2f4bafcbddda7d247d703ddf8c320c01"],["/posts/344e951f/index.html","79a2f879c2e167762085288c4d3d8c6a"],["/posts/35e2bcf6/index.html","7a73ec1990af0e6eb7ea27bfe62f5e0d"],["/posts/365e96c5/index.html","39526ce62ca4e94dc461fc7dcf9cd85c"],["/posts/36e331e3/index.html","4ca4333e996f9a92623a395b14745746"],["/posts/372df90a/index.html","cbb34f1ef86476a3c8d4391d2c062043"],["/posts/37c547df/index.html","3918480ab750d9eaf1d417f36462a9a2"],["/posts/38a88481/index.html","a167edc3dbe43b2fa61e254baeeeae13"],["/posts/3b56780c/index.html","73cd2517ea478d00f6c95254d368f097"],["/posts/3e4bb613/index.html","bc74c9baff99a83c6948086579326295"],["/posts/3f2e933/index.html","e1b0a366476b78132ae3dc2a4a9cc795"],["/posts/3f6e5f9e/index.html","1cacea0a790114f41996f7707bfc99be"],["/posts/4349a589/index.html","b1b566b3f15d32ec76da99481428dda3"],["/posts/44246190/index.html","1c54c47fc389d28d76173c2d7ca353d1"],["/posts/456550f/index.html","64b44d517e881c4cb50009f4b2175522"],["/posts/470ac03d/index.html","060575e8a5de1cd8f3292e1a3de63839"],["/posts/49249ac9/index.html","62647516be101ccbf6d359f2f0bded00"],["/posts/49f2d2a/index.html","bd575dfc950a22046af98e9cd81a0d4a"],["/posts/4e6d4eb4/index.html","0247b1633d6dcd18b8a04da54dd178fb"],["/posts/50caf1d4/index.html","52f1dc90208f9abaa8c32c0a75341bf0"],["/posts/51139400/index.html","7bf9b754378f3a25f5d13369f248c40e"],["/posts/512c9a09/index.html","7663b669932d4c0db38e0ae47f27fc98"],["/posts/5205b330/index.html","f7ff7369fb8609aacd1e57745c5179b1"],["/posts/52d36cab/index.html","adf502b2065f3d90e29b4841474b7bc0"],["/posts/532a083a/index.html","a89efea4d90122748d5a79b4c71e7921"],["/posts/537d2c2a/index.html","cd292750b1ab56911f60808184c47f30"],["/posts/54383ba0/index.html","16b8d3985b9c67ea394f698e10e6d61f"],["/posts/54667693/index.html","1d0baf9b0dae7b3a1c0de555a49d7f5d"],["/posts/5508212c/index.html","76afc86b98f0bb39f691d6139a1c1ea3"],["/posts/571564e5/index.html","11489f076eff8bec983d7c7198e34a50"],["/posts/57900fe5/index.html","efec03caac24ed3d03d90350f7128ce7"],["/posts/589a214a/index.html","4776ac28833dd96513fb02a8a87c7cd7"],["/posts/599a2b19/index.html","c56199a52d6c0c03485de666cdcc8263"],["/posts/59c05382/index.html","2f6f8f98a55ba47736a13f40f27300bb"],["/posts/5a5294c8/index.html","66a976fba64972d1beab0739d7b85aee"],["/posts/5d3da28e/index.html","8b14b41e3b5ecdb3c30bb57f1d228b77"],["/posts/5d3f50d1/index.html","405aa5c13da1915f794e9cfbc780335e"],["/posts/5ef7ef00/index.html","e6b60746f6cba5ac2163e528aa44351d"],["/posts/60b5dd06/index.html","8667c1c8a89c2f57e27668c607ec23d3"],["/posts/61477045/index.html","3121957b8e459bdce75c14be3bb57e37"],["/posts/69d79f93/index.html","6096162bd83cd88c3421c444f56c3e7a"],["/posts/6b2f046/index.html","4bbbf272b67f712d8d6f4c0b74e40ee1"],["/posts/6b4610c4/index.html","7f042082cdfea0a2de68a3d46444681d"],["/posts/7000d139/index.html","33563bce55ce89d4abe11bd3bb9517c5"],["/posts/72f94093/index.html","70f82242d9a49af7f75deff6cd76c022"],["/posts/7380b71/index.html","9dbca3cbb7fe200ef4c1a4fd607b7e5f"],["/posts/738eee3b/index.html","e3e3a5c69ae269f3456b5768f52b9f58"],["/posts/73981dbc/index.html","2b3c352fb3b0f68800170c7c1a05ffb5"],["/posts/74d60fd9/index.html","d4a72538b0ec9b7b71eb6c54b43f99b8"],["/posts/74f5d9a5/index.html","c31d58f170207721bb7d9726df17d496"],["/posts/750f2ce3/index.html","14a4955b554764f360da7eeabd82f58c"],["/posts/7725b75a/index.html","c07389ee80b56510a6d3620123336bb8"],["/posts/79ef335/index.html","2fd00661d9c16f725f9697e5ca8c6276"],["/posts/7c20e8d5/index.html","ac502f6d18252e29f612693b34fc28e1"],["/posts/7d3ea75e/index.html","dc7bca1ea617535825c94a04876b0fe7"],["/posts/7d43958e/index.html","6128bcad4b291bb5f15283227a728d8c"],["/posts/807ac7f2/index.html","d1ffd8ca24fcafa37b3da69c2b59d0f2"],["/posts/81738fa0/index.html","7ac2bcbe6e42f85b0c55526014818688"],["/posts/817c41b4/index.html","682b653fa58d0cf2db67340644ddd5ca"],["/posts/84ee8e34/index.html","caccd3d0d976be0a6b89c4bf26f5e4a9"],["/posts/8837602f/index.html","0e76b0ac38af76d18056ab10e6aa9fb1"],["/posts/89589a03/index.html","193b193fc2b2cf4ed7bbd98a0ab4f71f"],["/posts/8bcef008/index.html","3eae5df8ac354f60dbdebe7a64b7568b"],["/posts/8bf9abeb/index.html","4815f6de18b2b8f563d71eaf3ba98ac6"],["/posts/8e5f5686/index.html","13d51bbf51fe2c6d095c53b1e11ab34e"],["/posts/8fa6b8c7/index.html","8da477b4580b3a56a0cc94be77b50cca"],["/posts/9029a3de/index.html","339c282be4534ceee4c6def67672fcd0"],["/posts/909d9a5d/index.html","1b2ad6d8c4b11798f68e0f7750636445"],["/posts/91404b94/index.html","73db29f7c3c725b4d7fa0f62b27314ab"],["/posts/932e3747/index.html","25416a32aa0fa7283f6519f9d35092f9"],["/posts/98e67280/index.html","ba5ad9c6125820f9b8709c7730e6dc66"],["/posts/9a4d13ef/index.html","f084e7fa6e03f0c81460deab8dadda0e"],["/posts/9afbb889/index.html","8e798eb28242a6c568e6652779b3bc65"],["/posts/9be63ba/index.html","a3d9215902102b24c7f3d75a3a0d4afa"],["/posts/9d967c90/index.html","54b3d3b6f77d93a369cb341f056da7c6"],["/posts/9ffb4388/index.html","b0f32582275b2fb6ba06dda97fa9a0a3"],["/posts/a094d027/index.html","c8b584e2b0939179509a5afcbd28f087"],["/posts/a27042c6/index.html","a5109f53090e28a7db96fe464cdb037f"],["/posts/a29cc732/index.html","9f8818f57abbb117d6938b9bba2cf989"],["/posts/a44a518/index.html","8c2d88aa89dd5eed9f72ae92db90d810"],["/posts/a4f2a748/index.html","a650fb3bce2e163aca19776f21d4d8c5"],["/posts/a7dc32c9/index.html","a3719cc5a2f1c6b488a630a00683598c"],["/posts/a7f753ec/index.html","0a6a4bfa42fcccbf5321807c8f765c26"],["/posts/ab34095a/index.html","ab5ccda825437a75b27b27af9ec2daaf"],["/posts/ad47c4a5/index.html","2dcc06514be53bf385a3fc65ed223130"],["/posts/ae8f7b74/index.html","1c126c2f0521975d0e0bb60d94e95cab"],["/posts/af9e049c/index.html","72d2218890b79b66f7bc345c6035092f"],["/posts/b0f1a367/index.html","ffc0da53ad8f48b1f4bfd98349379848"],["/posts/b0f98e2c/index.html","6f50dfc864e5be41bffdacd9476acfd3"],["/posts/b33131fd/index.html","11ae019f1bb5cc976c6ae6b308af3bcd"],["/posts/b36eb520/index.html","0b7cf81a67df71bf267622a8757fc14d"],["/posts/b542fc02/index.html","3824672049e00c1c0a0d389b5c0cb629"],["/posts/b54eeeb4/index.html","2e1d0d6e19c32b01593ecd403a4c2648"],["/posts/b84f3f3c/index.html","ba470e5bddbe29943a3c0c148aae2aec"],["/posts/b94fc207/index.html","98275c6b20e950ba0cf468036dd4c2ea"],["/posts/b981a6b4/index.html","0a68c0d2e0627fca53b62594cd9aedc3"],["/posts/bcea326a/index.html","dbaef4f1a4c5352ca58e4cf671f3d0b4"],["/posts/beb19e80/index.html","3ffb42c498fd93640ebc9c363035845b"],["/posts/bec490f8/index.html","7198089c39f7f8038bcd6939a7b84c87"],["/posts/bf7bde0e/index.html","036dc7f64976d37f33494abe95b65c23"],["/posts/c03f17c9/index.html","c24288c64979461d613236e715218e4e"],["/posts/c35bc572/index.html","04cc8409e4327b3e3a5a487eb0a55507"],["/posts/c436016b/index.html","34d97a9c768da16262387c47ed6677c1"],["/posts/c4efc741/index.html","54805fe24b63d161b24a9f3921f7ea23"],["/posts/c5e8a08e/index.html","1ce805dab943792cdf1616ba3180f14a"],["/posts/c7db1dc0/index.html","22a2391ac38b88c90165f190b4cf8f23"],["/posts/c7febeba/index.html","d98b7418ab061cf35ad019d85e49f7a3"],["/posts/c9c3a06e/index.html","52b27cc310302d6286f7f724687894fe"],["/posts/cc6d2cf2/index.html","2692d60e2f2ad9f1c2f0a08f8ec699d6"],["/posts/ce48f291/index.html","58caa36310970c59001841c77803ba2e"],["/posts/cf480faa/index.html","c4c9f14017bfc2706505ca5a95d1be02"],["/posts/d090b4d/index.html","e0ec74059ca29409217e34690a563986"],["/posts/d1995044/index.html","663be7b63c61a818887aae41cbb5593b"],["/posts/d2d34977/index.html","c422800559963c48500085bdad0a5f15"],["/posts/d3647a92/index.html","f1986638ca6830f43be85ea9bfe2041b"],["/posts/d3f6b818/index.html","02a79938eb95f19085b90a294b9f2f3d"],["/posts/d465029c/index.html","7bff7825a75a97a078de936e31b5c320"],["/posts/d9884be2/index.html","ad4927516c5476cc28cb68b428a5cfe0"],["/posts/da40f433/index.html","6f39a3dda1299b6a771bad52a5c42b24"],["/posts/dae71d5f/index.html","a212ba5f23c8a44cc02dd68cd0e544f3"],["/posts/db9fbe47/index.html","e64054c2e0d26aa0f47a2b042731ac57"],["/posts/dc94f8a1/index.html","7c51ef80318668dcd4496f6448d520a1"],["/posts/dfe9b67/index.html","2e59ff840b1352477e4ae3454c25e735"],["/posts/e0387d80/index.html","9ad1782a2c236cf9720d634d3c9c5564"],["/posts/e356f7b3/index.html","0bd4f8eb62cb4f8eb7d06a75f242e2a0"],["/posts/e3acb366/index.html","cddfc33b4128d384c56e25835d5afa9c"],["/posts/e450354f/index.html","944c065f14a758dbd516df49a52ccfb6"],["/posts/e489223c/index.html","b159bce1586ee04d88ea6391765b054f"],["/posts/ea914c06/index.html","7694b89e4219ef6753d63b4dd4aa2e7a"],["/posts/eaa8f31e/index.html","ee9d6f2cd282c4044cc4ddf0d85ab2ce"],["/posts/eac19412/index.html","f32e54db1f8f688da83a50c864b3dd84"],["/posts/edfc881f/index.html","6529ca63cdcfc894eecc4fa8df3467e8"],["/posts/eec0bbd1/index.html","3cf3bba514bc5920b44ddfca919d7b0b"],["/posts/ef22c7c2/index.html","0cb92f92a4a1715e701e080273eafd37"],["/posts/ef271825/index.html","8f3ba9cfa77213aceb2181c742fea526"],["/posts/f209578c/index.html","a7ec34771d1f0c4452ac5e5258cc5d0e"],["/posts/f3e9bea2/index.html","079e6276672048645d40804d64fd2ff6"],["/posts/f67b7122/index.html","c7d4086a11fb25e7d05502283aba18a2"],["/posts/f7abba28/index.html","11f57ab982790422be08f65d197d13f4"],["/posts/faffd764/index.html","db2db314efce19e89a4efcd194a18cca"],["/posts/fb684fb0/index.html","e436599f2c30d5addcb41c980936fce1"],["/posts/fc57199f/index.html","1292302146a8e8fe6dd600aec60ecf19"],["/posts/fc6e9a7d/index.html","bf079c682b85dbf518c38d308eacdf2b"],["/posts/fc7bc02a/index.html","30192b024aa0b1ef9473801bf97f5c15"],["/posts/fd67c5cb/index.html","49d7b59359a9cb239af8970a7992b1da"],["/posts/fdde061e/index.html","6bcba254101eadada795741b2b6c300e"],["/sw.js","e6daf7443e59e0406b8bb4f74bcf9895"],["/tags/HTTP/index.html","f620d96c2bb722b04d8af9f78f2b7d0e"],["/tags/Hexo/index.html","58da0e5aba9e87214f6161d0ee7fabe5"],["/tags/Hexo常用命令/index.html","4d53648af1711f99933c939f2cd35c40"],["/tags/Nodejs博客系统/index.html","f47ee7fde2265c09c73a6714505ff4fe"],["/tags/ajax/index.html","d550b9b3c50878eaa0406b63cfa43d21"],["/tags/ajax/page/2/index.html","d21fe7c9b5294959abb30785ca462b49"],["/tags/curl/index.html","c2c87c6e6d663daa67eb9c87fed8e258"],["/tags/index.html","5c6f7fc935bc019e1f0244da90f91d4e"],["/tags/json/index.html","848cbcd14d722e78d9c4106ef062d962"],["/tags/mongodb/index.html","44a9a01590744b8d289a2df255da2893"],["/tags/nodejs/index.html","6dce3d5172e3a0a0ce859e0c531bcd78"],["/tags/中国近代史纲要/index.html","fb4d2513ac7f29caf2b0c74826a3bca4"],["/tags/标签外挂/index.html","57d231fa955e986485d0715c8c20fbb9"],["/tags/目录索引/index.html","d09768fc46b854dd24a2d9d8805b24e0"],["/tags/管理经济学/index.html","5224ba1a512deb521ce98f80b11589c6"],["/tags/考前突击/index.html","572f01c3851d8b09f85b146537fb3c40"],["/tags/考前突击/page/2/index.html","284904ebee7de12eb8e61513ae1da547"],["/tags/自考/index.html","380201cb75fbf795e0add53f90c9a3a0"],["/tags/计算机网络原理/index.html","b2b773dc8bcd6128a3c7832c53d59f5e"],["/tags/运筹学/index.html","d821a9637654ca874b678227b35b9802"],["/tags/马克思主义/index.html","e36ffe70b3a5b6536d131e14dd381221"]];
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




