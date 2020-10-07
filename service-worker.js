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

var precacheConfig = [["/404.html","ff8232ab5d210d0747213c766d4e26d5"],["/about/index.html","6766fa080154d36b9dc9ff57d16f618d"],["/aplayers/index.html","d0345f689c0ff932aaa7138240cc255e"],["/archives/2020/02/index.html","a16c8f6ffd34cbd66dfdc56e093bceb5"],["/archives/2020/02/page/2/index.html","a04dbfc7da197253d815d0d819b1c9b9"],["/archives/2020/02/page/3/index.html","31d5d981bd8b8deec7e396c4424cadd8"],["/archives/2020/02/page/4/index.html","fe2a437293082aed5aafa115cedd6c0e"],["/archives/2020/03/index.html","e2c4a661f89eb709d80ee4cb879ad2df"],["/archives/2020/03/page/2/index.html","325d5839074b4e2a961c4120524fda18"],["/archives/2020/03/page/3/index.html","4416c674aef8d82649a550e1bea7f995"],["/archives/2020/03/page/4/index.html","3a3c612f15894e5d29e2f26b704c9c1c"],["/archives/2020/03/page/5/index.html","eb0ed0707b8212e8b7269fe67fd1e2a5"],["/archives/2020/03/page/6/index.html","d3f7f26a638fd498bd399ad77e05b72f"],["/archives/2020/03/page/7/index.html","699dd35ee6a7200733520ffab88a5314"],["/archives/2020/03/page/8/index.html","b0f529615bbd133fd4434b5c9334c6c7"],["/archives/2020/04/index.html","7f20e634df54285b3abb79cd2886aacb"],["/archives/2020/04/page/2/index.html","004e6e6c429ad3026cbda5b12ab4dcd8"],["/archives/2020/04/page/3/index.html","ef16482026b99fb01767f7857c9ae069"],["/archives/2020/04/page/4/index.html","894d57ef249c755233370069d403f62d"],["/archives/2020/05/index.html","da04850de426ceb74db71952717fff00"],["/archives/2020/07/index.html","cdb4888f813013c24e17a203fcb43324"],["/archives/2020/07/page/2/index.html","53ba6d49a2719d7959f7550ad7353f1d"],["/archives/2020/08/index.html","c5764d55e77ffb022db6ad84f76481a6"],["/archives/2020/08/page/2/index.html","38fcf26035c141a9e011770f4bd46a3c"],["/archives/2020/09/index.html","3685282f32779ad7c328fd740a581749"],["/archives/2020/09/page/2/index.html","adc77fff46274bad94a1175b839f1f9d"],["/archives/2020/09/page/3/index.html","dda25a44ed922d9e3933afb2c7439fad"],["/archives/2020/10/index.html","a2dd2161d25ac1867f760643eb4268cd"],["/archives/2020/index.html","8ddef0825e18a267273d2403ba7323a7"],["/archives/2020/page/10/index.html","f9d15112bc1675ecbb8635e815b485de"],["/archives/2020/page/11/index.html","d07243e6f4fb13c7fa20a8b6c4e34fcf"],["/archives/2020/page/12/index.html","fc2935c87e7a4a35fb03d9458f21673c"],["/archives/2020/page/13/index.html","fa614ed7fe0cdd5da3aa20383eeb7f16"],["/archives/2020/page/14/index.html","1904422bd7bc655ca8a29a06ede3ae18"],["/archives/2020/page/15/index.html","11011e25c73c18d8143689aeeb838460"],["/archives/2020/page/16/index.html","32d5d56a30c77ef93d7ef9702b3e84ae"],["/archives/2020/page/17/index.html","8c9cf65f1ee01d7e9c07192faf282339"],["/archives/2020/page/18/index.html","037b8ef6f2ddad005ef01da128cbcb9e"],["/archives/2020/page/19/index.html","00ddac91eee7ba1b6ee2a096c4418814"],["/archives/2020/page/2/index.html","ae5f765a44a0b4739093331444d260eb"],["/archives/2020/page/20/index.html","19ac343776b4649da795a4148986fca7"],["/archives/2020/page/3/index.html","986a9a0e3a14844ab3f1d811761107f4"],["/archives/2020/page/4/index.html","e707143c75c7e23a57beb4526758b629"],["/archives/2020/page/5/index.html","562a3c9cd152e38561ab505c47e9fbae"],["/archives/2020/page/6/index.html","0cb118d61ffe9158954ef8de81e18e2b"],["/archives/2020/page/7/index.html","59424a19a825d6dbe6b086bffa54525f"],["/archives/2020/page/8/index.html","a6c3cdbeab91964d24f9fde959f7fa57"],["/archives/2020/page/9/index.html","4edb778f6799b3e5d54c08d79c03ef68"],["/archives/index.html","68d99eec41a87929a6191d57ddfc6cf9"],["/archives/page/10/index.html","9201c29d2dc0e2b18b985019f567d5e9"],["/archives/page/11/index.html","f455fd19a018fdf1aa3db9ca545a0970"],["/archives/page/12/index.html","3730e14f1d1c7cf5be27c6f69be985a6"],["/archives/page/13/index.html","e549d9090ac4599ee3a6981d56dde5b0"],["/archives/page/14/index.html","cae59fc64b7421922ce3a9a9b64176e0"],["/archives/page/15/index.html","7a5f7f3d247e089bea3600e0019d3afa"],["/archives/page/16/index.html","80e99a427da206b082980e31feb1b7ec"],["/archives/page/17/index.html","1df629983c8c1cc4ab7d0d1bf60450f4"],["/archives/page/18/index.html","b36a97b8e60ce5070f3566fb83639698"],["/archives/page/19/index.html","3ee4aa1f735da5afb1221f27fd5e792b"],["/archives/page/2/index.html","df950851db3590367d829628a9f27cd4"],["/archives/page/20/index.html","2ec2cae18755a44d598aa1712dcb7fcc"],["/archives/page/3/index.html","570ce80943ac3d95fc1f2bf8633d3e05"],["/archives/page/4/index.html","7d287bc9cf22268537048b99a89041d3"],["/archives/page/5/index.html","75ec8682609c4854d56d70785135308c"],["/archives/page/6/index.html","70fe9cd2f35cc2495289bc762496e923"],["/archives/page/7/index.html","f740013c1709ad0c77e17973899ebf4f"],["/archives/page/8/index.html","ab36e3399a37f95f74e40cb10e0db774"],["/archives/page/9/index.html","f777701aa8f71af286a4a048f6b28969"],["/bangumis/index.html","b1f34f8cdcc4748396ca0522f65e2e9f"],["/categories/Ajax/index.html","6dd395d17e2f651009798fe55fc2ab1e"],["/categories/Ajax/page/2/index.html","07733d74dad3d9aaeb08780637c752de"],["/categories/HTTP/index.html","ddac0a5be3093fb18e689b4cdb8f29aa"],["/categories/Hexo/index.html","be5eac869dbf2a48020cfb0795f6ac83"],["/categories/Hexo/标签外挂/index.html","90a4e5398252c5913e6509f64d6f10a9"],["/categories/Hexo常用命令/index.html","f186fdac6641c7ad480adf335b31284f"],["/categories/JSON/index.html","3b883c81efcd95a3366e75e366004863"],["/categories/MongoDB/index.html","9354b6da3af9421c7678b0976dbefe4d"],["/categories/Nodejs/index.html","89e7c98a2904fa3c580dbbdcfaa4c88f"],["/categories/Nodejs博客系统/index.html","6a4514e01c5f13f1d12b694690a2597e"],["/categories/index.html","d883837591250c72f8db050eca343b21"],["/categories/promise/index.html","b0b9925919c8bd5d9b39eb44b4700bd0"],["/categories/日语/index.html","1f6d91c5462e7a0346a975e64809e029"],["/categories/自学考试/index.html","97110ce69a8f671236634626082cba2a"],["/categories/自学考试/page/2/index.html","6537c453ef5277b60260f867943caad5"],["/categories/自学考试/中国近代史纲要/index.html","4ef9772fb5a8a0605e9575055e180877"],["/categories/自学考试/管理经济学/index.html","26c178af5352af903a4ac027c0706711"],["/categories/自学考试/考前突击/index.html","3f23016778d3394e34d4dbcf901bcdba"],["/categories/自学考试/考前突击/page/2/index.html","4620215e7080816eaa79d7ed4d2c6598"],["/categories/自学考试/计算机网络原理/index.html","213d8b5f98c996bccb71ccc42e69ff94"],["/categories/自学考试/运筹学/index.html","f0557b3ffce7ce0a2684a5e5b931931c"],["/categories/自学考试/马克思主义/index.html","2d2c3e58a31b3a72870cb9ed73e6f66f"],["/css/index.css","02768e0f539a91b829374d4d7c70325e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","f4dbd9ab47dbae493b0cc83249c02c74"],["/js/calendar.js","bb5dd255ba79da882ea68add71ca0064"],["/js/fireworks.js","fb89d0d04079fffcaef92f0033984567"],["/js/languages.js","edc0ec6b454f9dcbf2b1e967f5d4b771"],["/js/main.js","25f028c3393015483212fce4765e727c"],["/js/search/algolia.js","6739a0bf84ecd8af6c7c0a9358ddfafc"],["/js/search/local-search.js","5b41a01c3d1db3024b0318d008272cc8"],["/js/third-party/ClickShowText.js","f66854e27a08e7c5ca9f2c479fdeff3f"],["/js/third-party/activate-power-mode.js","62f45a1942a31ee8ee24ee2d22d813f2"],["/js/third-party/canvas-nest.js","41f8f312423ab0de3ebce72c84bdc8db"],["/js/third-party/canvas-ribbon.js","1e2ceec82796abeb136789890fd21324"],["/js/third-party/click_heart.js","3822ab26483f0d27b48a9e090d360d1a"],["/js/third-party/fireworks.js","8ad5d796e461b063ae83a2d3b663a07a"],["/js/third-party/piao.js","78ecf11125085b2a594a504819058431"],["/js/tw_cn.js","6bc7f99cd3e10710cac0499debdaf362"],["/js/utils.js","582f6b4c5d0d1ff7d5f6c994855bd11d"],["/links/index.html","222031c1a8b43128e64d0e567c4aad4b"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","cf8ac47e8f8f5d6d928b68b98530bc3f"],["/page/3/index.html","196425d3c78cd21cd7549a566475424a"],["/page/4/index.html","8a002d25be77c99e47c8218ebb7e4431"],["/page/5/index.html","75727350db0d0ae21e980b96f338a3ed"],["/page/6/index.html","fb8cd2034c27d92df4dce85c6b0fd150"],["/page/7/index.html","a8103ac288291494a7d07354d5017b29"],["/plays/fluid/LDR_LLL1_0.png","65b063168317bdd54a8c18e0ff0096bc"],["/plays/fluid/dat.gui.min.js","b87024acb876bb767a7c27a5747d015d"],["/plays/fluid/index.html","ad96278b19975b503ae56b8018e4a1df"],["/plays/fluid/script.js","05d850c6db55e5092f36690f9311a285"],["/plays/mikutap/css/mikutap.css","325c78697c87a3f62edd09be21ec5903"],["/plays/mikutap/index.html","fb2263f57f7816f72709dd2abb5d8f23"],["/plays/mikutap/js/mikutap.min.js","110ad1060ee41e6f41f7f6232337fd4e"],["/plays/mikutap/shared/js/common-2.min.js","43e49a61141c64bcf8d7981f7a6a26f5"],["/plays/mikutap/shared/sp/css/common.css","da9b00bf3729866428f53b69ee9da8ed"],["/posts/10812f0/index.html","754b631e3500404ff23b143d87edef4a"],["/posts/126b275/index.html","1ad243eeeec779dd03d0fb592835ede7"],["/posts/12d95a5e/index.html","3c32730a07b1d14cdd89027cf34a34d9"],["/posts/1367417b/index.html","24110167d6bbb5a3be76f370ca4faf71"],["/posts/13886e3f/index.html","e74b3b9ccb1e339632a4c034d2151745"],["/posts/145193a5/index.html","9ee1167ee1505b5769a2bd54f42decc8"],["/posts/149dde25/index.html","f8e1d4ca4e2cae441dc4ec822ab7899e"],["/posts/152fa65b/index.html","bf46039ddda500e04fb5d76d629ef74f"],["/posts/169e7dda/index.html","f683b9ed171da113dd4dc3e24734d940"],["/posts/1875100e/index.html","4a922afffc00d7ee88830f38493ff960"],["/posts/18eaef7d/index.html","05cbd38c460ebe762af462a13d438811"],["/posts/1a0bc7b7/index.html","c997abf3fbdac9d5dea179f79810232c"],["/posts/1a20a057/index.html","c31d55310b4a678a963a54eba48b18de"],["/posts/1a998be6/index.html","33891b6bacfcc3c5ec4177383f855c15"],["/posts/1bffbd20/index.html","7bea4a8fd1727ce549a67062c358545b"],["/posts/1c5a0485/index.html","768a07e64bfde6480ed2c1f67f2bc9eb"],["/posts/1e638f78/index.html","11130e11b4fd91cca82cbafed8b7f2c4"],["/posts/1fb53120/index.html","b606a3652ff35e53161bbe4ddba8edc9"],["/posts/21466e86/index.html","311e429499bfdd758a33237f2b118707"],["/posts/21abcf1a/index.html","fd003f66afad7b07919052b9ffa53c48"],["/posts/21c250b1/index.html","48f6fc43d83d8caa8b14e8ff5a0301a6"],["/posts/2287cc/index.html","492ec48c691f27bdf437247b879c94bc"],["/posts/236bfea3/index.html","b49e5ce1be10e2e73c33a6e248e06b12"],["/posts/24caea6b/index.html","c925ed3849daad9166a0594ee7f8b79b"],["/posts/25d45c3d/index.html","20ea0595397599695a95e39294e5e91e"],["/posts/262baa9f/index.html","23c6ba20316634b5609edf2fb170b24b"],["/posts/27cdc142/index.html","8a803307413a05f3905fe43cef35e6c0"],["/posts/2895c4bb/index.html","5fbb4301d7403037bd8f6ccd243d7d76"],["/posts/28987ff3/index.html","23d601ce839ad9e2d9ea28a4ae6606c3"],["/posts/29f0df96/index.html","2757d1e2ee2502ffe1c9413bb6ee0692"],["/posts/2a1d2b6f/index.html","96f8f37ded8235df23d12ed0c212a3bd"],["/posts/2a386047/index.html","addeb75d62f1cbb69669488018014894"],["/posts/2b770baf/index.html","1545bb89f8633b90f8600e3238f5c86a"],["/posts/2cda4a8/index.html","7bbfdfbede76af3ee5430ba176908e49"],["/posts/2d020832/index.html","6cf8ea368dfd1bdfe14f3f0d7de637db"],["/posts/2d6d3bd/index.html","cf9b95b76d9bfc246cdc16c9a595a7d5"],["/posts/2e0c129d/index.html","87e05e7438322905182413fab4c2c39d"],["/posts/2e7563a0/index.html","3fbea20d25869dc771767dd7c42dd459"],["/posts/2e7b8d69/index.html","77ab8f420628d2bd2e9a4c1b12eda0b7"],["/posts/2f28d14b/index.html","8a37c7bb813f0da94451dc3704ee6ecd"],["/posts/2f6e1383/index.html","94fc26ed6a3392e9f31369a120f188f7"],["/posts/30bfd1cf/index.html","63f332677fb7d5c8b4deee8cf7f12c8a"],["/posts/33235106/index.html","06373d2d1cc43b0c0f43539c8d1f8a93"],["/posts/344e951f/index.html","1289c6b613e4e0774c11e1b4df128440"],["/posts/35e2bcf6/index.html","2bec616278eb8c6983fe960713cc8809"],["/posts/365e96c5/index.html","9657c76948952cb61728e9735c3e96f8"],["/posts/36e331e3/index.html","d11e68e970c56aa3f6076c530aec7881"],["/posts/372df90a/index.html","caef3f1e975ef662cff7e5c3ef0b61bb"],["/posts/37c547df/index.html","13daad42cb8b11148ca9a8451f34b2bd"],["/posts/38a88481/index.html","17e2515d968cfc10f9e99c750bf82f34"],["/posts/3914bfed/index.html","8130a2fd12b40884f83c0bde21c4ba39"],["/posts/3b56780c/index.html","3e3efc65f1b0a914d03cc0308f294177"],["/posts/3e4bb613/index.html","e82a918e387b4695c1044d2687725c23"],["/posts/3f2e933/index.html","84e96cfdfd46459bbb770495040ab26f"],["/posts/3f6e5f9e/index.html","5efdb9be7dac8c430268142ce8bb1492"],["/posts/4349a589/index.html","8419b95229134c5f0b4ba1f664fa167e"],["/posts/44246190/index.html","8c6f2164520c1a62971089ac910a028b"],["/posts/456550f/index.html","e2c46dfe50390d88cecf4ae7ecf43c86"],["/posts/470ac03d/index.html","0de1621b501c7f2034e533eb4d363d8a"],["/posts/49249ac9/index.html","de899c10a3ec9e1cdd19e83f647032f8"],["/posts/49f2d2a/index.html","693dca6f7f82da2098029c745473a5c4"],["/posts/4e6d4eb4/index.html","ac99e92a185b4e053b8948a62ed71a25"],["/posts/50caf1d4/index.html","a60bd193d54b7dc24e392805ae9af003"],["/posts/51139400/index.html","7b0fcbc2fd404e614b44ce53ae286912"],["/posts/512c9a09/index.html","bd8c1c69e281ad98ae112ad5cc726739"],["/posts/5205b330/index.html","0947ac3c4f75800985ad3bbb3a395c17"],["/posts/52d36cab/index.html","8bc7db362f3ceff79cd4032b28332c41"],["/posts/532a083a/index.html","0ecb4bd70bb2a50a97ae17fb4e11edb9"],["/posts/537d2c2a/index.html","a9fad953fdc728ab0a11529e726ab710"],["/posts/54383ba0/index.html","62bbb65f1190ce88d074f346d1eb46b8"],["/posts/54667693/index.html","8952f76677941140a5593ecbdc0f3cb1"],["/posts/5508212c/index.html","1dd217a653316623ec67fc844a76fc45"],["/posts/571564e5/index.html","5ab672c2261edab90de360d6174aec43"],["/posts/57900fe5/index.html","fdd25ee68f3398cdc24f1e6c801fb70a"],["/posts/589a214a/index.html","4c1118d8c4d79af40961fdcd11246215"],["/posts/599a2b19/index.html","8956aca75df82d25596c82ed4c076e0b"],["/posts/59c05382/index.html","9303b984fbfa43238f60ad02e747a197"],["/posts/5a5294c8/index.html","05f1d961c30baf67d3b111d747ac3056"],["/posts/5b8c69d5/index.html","39a592cfc94e40dfcf3c4248d04cbc17"],["/posts/5d3da28e/index.html","2a4ca59664b525a4b6d429132e8e3a78"],["/posts/5d3f50d1/index.html","7b340599dfea7cea19c562eb911ae36c"],["/posts/5ef7ef00/index.html","724a6078e13e899bf124d989821d5681"],["/posts/60b5dd06/index.html","fdae8a2fd9b1ca8f28437fdd63753136"],["/posts/61477045/index.html","f9506b7625d69270f965353912b89794"],["/posts/69d79f93/index.html","ecfc2ac17290a641c328f753abd31b80"],["/posts/6b2f046/index.html","888625f36f7d8626ae8f30b1c9c34ad2"],["/posts/6b4610c4/index.html","ca97ed97c5dc9068cfd386feb6f74d11"],["/posts/6bbf03f0/index.html","b86e6c478b0c4c591e26ed93ed7e8439"],["/posts/7000d139/index.html","4abb7c0fef9a434aa616a18758677616"],["/posts/72f94093/index.html","1c253c08473ce7a580500d3b77bbab4a"],["/posts/7380b71/index.html","549fb340ac53204584247f95fa6cd837"],["/posts/738eee3b/index.html","d3e26f82af080f0b4eca84f7580da80e"],["/posts/73981dbc/index.html","482ba6d8dbe7210656cbd11985d9de85"],["/posts/74d60fd9/index.html","fcb531b149388d4b55364eac76938a8a"],["/posts/74f5d9a5/index.html","389177449c365179a6bf5e7e113f75c5"],["/posts/750f2ce3/index.html","0ea8a029066db92b87a6b3d2c4f45bc6"],["/posts/75ceb627/index.html","a38f2fb323756c373f1040c57307b401"],["/posts/7725b75a/index.html","78e1bcceeb344833a7309433ef8a7773"],["/posts/79ef335/index.html","51736296368a485ffeefdee35c2e72c5"],["/posts/7bbd3149/index.html","59383177a501d75e55cd4641f55a3b73"],["/posts/7c20e8d5/index.html","68e9fa80be704b146bfd048de601b1a5"],["/posts/7d3ea75e/index.html","93ddfd580062c28a77493a07aa553a9f"],["/posts/7d43958e/index.html","2fbb7686c4db0d28449707cc7d6e7d78"],["/posts/807ac7f2/index.html","cc8e5335cdb1bc2ee3de807cdc5fbecb"],["/posts/81738fa0/index.html","63a69b839e7c82e99cd557779a4b89bb"],["/posts/817c41b4/index.html","fbe5a90b223384c8cf857bef9467c696"],["/posts/84ee8e34/index.html","f505be611ad146c75e810b46222f680d"],["/posts/86f3f130/index.html","e44b9e798e564d9776658af1895e5e41"],["/posts/8837602f/index.html","b01e5a0c7562384d1048a921b9121d85"],["/posts/89589a03/index.html","e4ac19b52ae16972833e002fc98bf256"],["/posts/8bcef008/index.html","f368ce0624ae9012397a5534600a6aeb"],["/posts/8bf9abeb/index.html","30d69c57e2e4d82f8598a6cb81c2000f"],["/posts/8e5f5686/index.html","21ed0ed100ac54fc7e89bc3315b264c8"],["/posts/8fa6b8c7/index.html","ec5774a784d2b581e20cfa311e0e4662"],["/posts/9029a3de/index.html","819015eff6f1114a1c25b37152d1826b"],["/posts/909d9a5d/index.html","5059480dcc82f802197a4f23ec37fa2b"],["/posts/91404b94/index.html","6c82462e888c58dbbf2d198724024370"],["/posts/932e3747/index.html","7b15af7632b48b9a61125d58540dcea9"],["/posts/95fc9e6e/index.html","459bb0ef6a70b06fb35e851e29798108"],["/posts/98e67280/index.html","60115fe11a1b5ad3fad3101bacb1c525"],["/posts/9a4d13ef/index.html","63ec758be6500f048e1b233838bbf7ff"],["/posts/9afbb889/index.html","a0606e281b8e9ae721e19d9541459621"],["/posts/9be63ba/index.html","0a20a9dd5dabe58f772914eea837e259"],["/posts/9d967c90/index.html","7c8bd2a21dcf45603eaaff861474568b"],["/posts/9eadcdf6/index.html","2ce2076a43522ed17d1a023abcdda08c"],["/posts/9f97db8f/index.html","d1fe7e2aa597333f2f1f2418ae848c43"],["/posts/9ffb4388/index.html","8f08ddc2e0fe2eeccb1ecb33d6698b67"],["/posts/a094d027/index.html","a5c2ea018f178c35cd45531a9cd568c0"],["/posts/a27042c6/index.html","bcecd8b122224a78b5d1e6ec9ea0e4c9"],["/posts/a29cc732/index.html","279969e7d4bc5a1a5635795badad2b8c"],["/posts/a44a518/index.html","4a559df878c5b8b62adbe9a8f0f9d810"],["/posts/a4f2a748/index.html","bf84b6442388e0baed796e19fc0c9b60"],["/posts/a7dc32c9/index.html","7ef8f5be26143b1a419c7cafd56d7aa8"],["/posts/a7f753ec/index.html","5554dd4f07db41bdac1fe72a046023da"],["/posts/ab176793/index.html","1d685dea1b56b34589e4ffeda30699d1"],["/posts/ab34095a/index.html","89cf1df5f298884cff2462a8a3dc479e"],["/posts/ad47c4a5/index.html","7ff92bdb29f80cb1a734bb022c0aab2a"],["/posts/adb93761/index.html","01dc688684c4ab7d39bc1744a0477e12"],["/posts/ae8f7b74/index.html","c5cbff73cc5cbe34d388810f77bb91a3"],["/posts/af43816b/index.html","a5a71eb306d0533c96449a8671bae15b"],["/posts/af9e049c/index.html","a77b77349a39d1baba003402c9230181"],["/posts/b0f1a367/index.html","70ec86664527df969df665450bb3d414"],["/posts/b0f98e2c/index.html","841e2ae1f501cdfdcbd56707f08d1af0"],["/posts/b33131fd/index.html","67cfa2e6a232c1008817a40444f5974d"],["/posts/b36eb520/index.html","0ae80b9a285a74aadeea40ef822ac965"],["/posts/b542fc02/index.html","0079ec1a6879bd4e578b269991023fa5"],["/posts/b54eeeb4/index.html","ad80c5c6e8d45bfbbde101bc1e9f6fd2"],["/posts/b84f3f3c/index.html","5301167fc909c84de9fed8dd7b0f3c1e"],["/posts/b94fc207/index.html","f37af4cc64d6e88759abd9f2a99c71d9"],["/posts/b981a6b4/index.html","286931bee2c1fd89078eb2220dbae2e9"],["/posts/bcea326a/index.html","1b0b567060cd3e7bb0b447cdee7a7627"],["/posts/beb19e80/index.html","1b051e3187b6e5ed00d0e50a06dfe53a"],["/posts/bec490f8/index.html","92dfd2243af60f84f5d6145a0022148c"],["/posts/bf7bde0e/index.html","8a1d824ec818aae7040aed75a45d144d"],["/posts/c03f17c9/index.html","c8537ff3cbfc8dbaf958f1e817f67bae"],["/posts/c35bc572/index.html","cd759ff3dc16e6086c7b48963bd6edac"],["/posts/c436016b/index.html","33fbcc4c7f84e87bdf069d41736b7534"],["/posts/c4efc741/index.html","5787232e23963f2f47d3392445cf99a5"],["/posts/c5e8a08e/index.html","297a8ba6ab56dd199bc8be42f599c593"],["/posts/c7db1dc0/index.html","adaa3944249094b22afdfb43f0c411b4"],["/posts/c7febeba/index.html","eab02b7903c1d67ea5265e5656073377"],["/posts/c9c3a06e/index.html","553b57db6bbe31b0ea3d3f42e89e510a"],["/posts/cc6d2cf2/index.html","9698d3b22e49d10b012f659a2ba1b586"],["/posts/ce48f291/index.html","1cf3753eaa1d5bdd6d726b0f7117f58c"],["/posts/cf480faa/index.html","ca611700652fb82215552c8e37053973"],["/posts/d090b4d/index.html","7a1aee695cb2183bb0be3b4ee6815554"],["/posts/d1995044/index.html","49d7eaa4174b179317e658484e9f9892"],["/posts/d2d34977/index.html","1046ed3598d467fb25faf330f34977f0"],["/posts/d3647a92/index.html","da3007a8382285fe53c37ff82ef64bd8"],["/posts/d3f6b818/index.html","b177a0969d7ea5369f9f27bc4442fbde"],["/posts/d465029c/index.html","fba35efef46cc1f063e0e855d377fbee"],["/posts/d9884be2/index.html","6f51b4fb9f5c4202c3facd1f6971002b"],["/posts/da40f433/index.html","9d9ccc6653a7c64e152473863ff252fd"],["/posts/dae71d5f/index.html","3cff19615b9e0e2d6c44b542a8e753e2"],["/posts/db9fbe47/index.html","0a268962b4954b328fdca74b62383991"],["/posts/dbba997d/index.html","c3ea60a020e64f127f80108d67d31161"],["/posts/dc94f8a1/index.html","cf064d9f86051959354b4058229377a3"],["/posts/dfe9b67/index.html","388df046fa7c65366a2008293011c834"],["/posts/e0387d80/index.html","9cfb39c4e9bdaa5a3774e2d8e63fdcdc"],["/posts/e356f7b3/index.html","4c1f54b3b7c6289d37dbc238ffce2c97"],["/posts/e3acb366/index.html","2c38e45e89671ac545892abab612218f"],["/posts/e450354f/index.html","0435a1637e10d7c55d2d3f7a80c5e1e5"],["/posts/e489223c/index.html","14ac5dbbc0e52c1c0b1e27f4c257a56e"],["/posts/ea914c06/index.html","925cec04c9f6aab676351787bfcf7a6b"],["/posts/eaa8f31e/index.html","373be5532d566c8983a7587c3111aa0e"],["/posts/eac19412/index.html","45e5d3667eebf3eac762b30192637296"],["/posts/edfc881f/index.html","13809be7ae8c11645d035758d5e941e6"],["/posts/eec0bbd1/index.html","60cd53e20fcb5ec478e776727b146f28"],["/posts/ef22c7c2/index.html","5af43efb0177a2a3761bfe5d4d68ed17"],["/posts/ef271825/index.html","58d22499b531710ac70b8dfc3e680cb4"],["/posts/f209578c/index.html","d99189cfce615238ee88548a18d16eef"],["/posts/f3e9bea2/index.html","d874656776d4f2ac1372ec6a34c466c9"],["/posts/f67b7122/index.html","bbbccfcef3ddf8994b339853c639892d"],["/posts/f7abba28/index.html","f156bde7e2e3a6951721897bfef02669"],["/posts/faffd764/index.html","25fd07e16fe48a19a85607ab8b02cdb1"],["/posts/fb684fb0/index.html","345c03f12b5765125fa133e690f0cfdf"],["/posts/fc57199f/index.html","377a4a0e44a52049750557d33d8a8fbf"],["/posts/fc6e9a7d/index.html","ff44f629f5fc21297c87b101f28ad6fb"],["/posts/fc7bc02a/index.html","a5def9bede0b7f7a640973aec3148568"],["/posts/fd67c5cb/index.html","6560e0183aa691a314ac12203f984981"],["/posts/fdde061e/index.html","21eb5466dd0685d46d9ed034de759192"],["/tags/HTTP/index.html","d78f9b19b34ee625a1117b5352ebbf29"],["/tags/Hexo/index.html","e2ceb2cce2a3f9158797bbc02843f189"],["/tags/Hexo常用命令/index.html","aced92e04fdb17812d73c936e34cdf6e"],["/tags/Nodejs博客系统/index.html","4f132f9825e1609298123847c9c9f3d2"],["/tags/ajax/index.html","6d8128bcade7afd4771ccdf7435751c4"],["/tags/ajax/page/2/index.html","944806938bc401e23062c11c2339bdf4"],["/tags/curl/index.html","a0460a322ffd61c17a002b8f039584cc"],["/tags/index.html","349cb91fe05a0e5a24b0203818973d7e"],["/tags/json/index.html","2880d046cb9556c774ab4d7f3ec96006"],["/tags/mongodb/index.html","bfb12cf3f74bf598459b2dce27b58835"],["/tags/nodejs/index.html","30555a057914079edb96a36721d67126"],["/tags/promise/index.html","63bc5b0c1c614f52b2d275662593891a"],["/tags/中国近代史纲要/index.html","6a333ddb07a4c1f6bee87bad57ebb5f2"],["/tags/日语/index.html","8d074761c65dbf670f9577457eae8aa0"],["/tags/标签外挂/index.html","748706b9d52f18be294467a33c76eee0"],["/tags/目录索引/index.html","8bf2d2b0bf49d9052a0951dabbaafd80"],["/tags/管理经济学/index.html","fce565a1aded59840fcd257de2260ca9"],["/tags/考前突击/index.html","11e085b06ab7b7619b4f4cb54aa0a6e9"],["/tags/考前突击/page/2/index.html","df20a5327476c0743e4a75b28cc87492"],["/tags/自考/index.html","8a0b83eba9ed17183e0048d6313d1e9b"],["/tags/计算机网络原理/index.html","44e7c24667bda67b2e941aef85e93ce9"],["/tags/运筹学/index.html","9ce79a094c1a2d2f7156989c83002403"],["/tags/马克思主义/index.html","44885e5cbf99cec47270cf196255ce11"]];
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




