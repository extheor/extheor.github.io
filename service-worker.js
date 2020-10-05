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

var precacheConfig = [["/404.html","fbf732248d283f0f04e5d27d5f9d70cc"],["/about/index.html","5a933e5435ffe2658b37044139eb422c"],["/aplayers/index.html","ce8c94e8688a9bafe58ea132bd5d8cea"],["/archives/2020/02/index.html","d65287880f1dab2bd67dddeec5bd2b98"],["/archives/2020/02/page/2/index.html","67858a51667b72febf83ecbb0b1d935b"],["/archives/2020/02/page/3/index.html","ba6a6b89ea314727abda98bc28466527"],["/archives/2020/02/page/4/index.html","6daa75665b1f183145fa15f9e2ab5e9e"],["/archives/2020/03/index.html","19a571c84c1dcf9b25195f69352d2052"],["/archives/2020/03/page/2/index.html","92ca6a27395c37c562f37c657d99a214"],["/archives/2020/03/page/3/index.html","cd8f0fd0f871b0e1e77e9f12b3a32c1a"],["/archives/2020/03/page/4/index.html","a2a201b53cda5c12688299cb9a2dd12a"],["/archives/2020/03/page/5/index.html","8768ddf37db652de9d6c0c711100ad4d"],["/archives/2020/03/page/6/index.html","c384672760828889fba272e1efa41ff0"],["/archives/2020/03/page/7/index.html","7455bf7477a6b85103b92f855e731f5b"],["/archives/2020/03/page/8/index.html","004b0d565f63e904f33644f8188ed77a"],["/archives/2020/04/index.html","09381910f8e3ba3de0482e559c243c8a"],["/archives/2020/04/page/2/index.html","3df867f959ba13ed2f0486d2eb9cc056"],["/archives/2020/04/page/3/index.html","be42c43c3e72ec0bc6aed31cb43a0dda"],["/archives/2020/04/page/4/index.html","510d5c6761b7661462ca8b905b90c2e8"],["/archives/2020/05/index.html","87239470f919843413daaa3d9e3eae24"],["/archives/2020/07/index.html","7002d57521543cc2ece882017ca2648f"],["/archives/2020/07/page/2/index.html","1d58360ed7c2ae63e264764ef8bdb72d"],["/archives/2020/08/index.html","7171303914ba8623eb61353e656db291"],["/archives/2020/08/page/2/index.html","3be7c29715bd509ae48ed0d22a9a30b0"],["/archives/2020/09/index.html","7cc4604aee37272a434681f584c360dc"],["/archives/2020/09/page/2/index.html","c7cd2b73e3f47af313e68581051c1a16"],["/archives/2020/09/page/3/index.html","1823047285dced4ca3de4a4428213f73"],["/archives/2020/10/index.html","4ac72b5d9ca2ed22d6781da2bc10bc98"],["/archives/2020/index.html","9994274eae50ad1fb3139d337d6aae14"],["/archives/2020/page/10/index.html","79557da979f6275d16fadf99faf8b720"],["/archives/2020/page/11/index.html","6024b0ffbf00add441530fcf1ba93e51"],["/archives/2020/page/12/index.html","424c1849a329b5aee7a92069d0825d84"],["/archives/2020/page/13/index.html","863306977e4b9e6760c86294bbb2df36"],["/archives/2020/page/14/index.html","45f88048847d251c9ebf0fefb2e64fca"],["/archives/2020/page/15/index.html","c8135547ae8631b96f3d07d312314165"],["/archives/2020/page/16/index.html","f3cf048fc0d6d6822ab06743545ab9e5"],["/archives/2020/page/17/index.html","81954b48c67ccbf270ede8b7912a4962"],["/archives/2020/page/18/index.html","2fe6b59f6a5488ab009662fbb06b4b14"],["/archives/2020/page/19/index.html","557eea3851597e1e0995bd3b81bcad24"],["/archives/2020/page/2/index.html","05c36909c787b650426a60ae1e7e2f7b"],["/archives/2020/page/20/index.html","0520d97cadc218f1b3a12fd5d9a8d25e"],["/archives/2020/page/3/index.html","2523e691b3b917146ce3c0a1903dcf55"],["/archives/2020/page/4/index.html","9d6d5c92e32c1532a4a9a38a56710a73"],["/archives/2020/page/5/index.html","ef21238a9be38b19ecb355f1167928ca"],["/archives/2020/page/6/index.html","809fd31af211a35dc83ad88ea0589f29"],["/archives/2020/page/7/index.html","cb55c33bc596f6c3d507dd6c1791ec0d"],["/archives/2020/page/8/index.html","7119968f459402dd20d85d340dd415dd"],["/archives/2020/page/9/index.html","b5ccd3d0045d1d1dc81228dd88c12bae"],["/archives/index.html","f6606c4dd41074a6dbde89c0b6ef1f78"],["/archives/page/10/index.html","6ccdc721c9ccd33fa64acf85b725265d"],["/archives/page/11/index.html","d377eecc5f778ffd9df4dc5ada56c58f"],["/archives/page/12/index.html","7577eedf3df079cb88921b14a4a64791"],["/archives/page/13/index.html","4aeb339dea880b9f7f8585d04ff363ad"],["/archives/page/14/index.html","71260c561d34f6db57a06b6c5e5d02d4"],["/archives/page/15/index.html","a3c53b207e28f856b83112e0677de1e9"],["/archives/page/16/index.html","f3a87f47aca730cce75f2d23fe76e155"],["/archives/page/17/index.html","c88b7f8d6a7956e26162a7fa7cedc216"],["/archives/page/18/index.html","b25b0f00b996c29941f4508cad25ff80"],["/archives/page/19/index.html","6c5e3e34fcfcda3a6324b64f4bda92cf"],["/archives/page/2/index.html","1d5463ae4ae70cbad5bdcbf99b688cb0"],["/archives/page/20/index.html","67ace5474ee6a0a05b4320d25b10fa66"],["/archives/page/3/index.html","fbbeb97d817055665c528cb052c3594d"],["/archives/page/4/index.html","2109e64c3625a2555809c984f0d2a9d2"],["/archives/page/5/index.html","fa355b0f3595756d2ed2e9634396c0a3"],["/archives/page/6/index.html","77008be4b553e0e2132f7d5fb37b4911"],["/archives/page/7/index.html","fef3be3f7bdb4215358adfaed0782f53"],["/archives/page/8/index.html","ea33866d02d23c566c2409ab9060cab4"],["/archives/page/9/index.html","f1c6e601b16a714d83dc00ad4b9b734e"],["/bangumis/index.html","4808a70009113cf23f12b94bee38b96b"],["/categories/Ajax/index.html","7347828d8ce2cf51c3bdc9a4d1963031"],["/categories/Ajax/page/2/index.html","c70620741e7dace0a53ab04c092b2336"],["/categories/HTTP/index.html","f5ec0df6eb0f5e4f3a7c41ae793ff40a"],["/categories/Hexo/index.html","2b76466279af5f8c0cd2e106489dba99"],["/categories/Hexo/标签外挂/index.html","c5b286bb357a0d93008024d716c259da"],["/categories/Hexo常用命令/index.html","d53a0b15e46101aa257b599a071c4cb0"],["/categories/JSON/index.html","6e33ee4264cc35bd10c7de9023e1e373"],["/categories/MongoDB/index.html","d6fb31f2c1b59fb8329a98f8650e90bd"],["/categories/Nodejs/index.html","965e57ff5a56d0159851ee3115596d2a"],["/categories/Nodejs博客系统/index.html","1ae810b243da88c93d78c77324ef72af"],["/categories/index.html","b579379b84f130898bbd542c88b43f50"],["/categories/promise/index.html","51ce207cdae6a88494ea13ca9bec9b3d"],["/categories/日语/index.html","3c2c31e5ea6c977b1942d992b25a2839"],["/categories/自学考试/index.html","fe030db058080f28f097921685f5c34d"],["/categories/自学考试/page/2/index.html","12d3b9e5dc4c327e50b4dd9c18d488ad"],["/categories/自学考试/中国近代史纲要/index.html","cfc3ac9b062ef31ffb33f32d4a1e5e91"],["/categories/自学考试/管理经济学/index.html","6589b60aca527d558b6503eafef0a3fe"],["/categories/自学考试/考前突击/index.html","2574d4ca0da19f76140d53ae5f443671"],["/categories/自学考试/考前突击/page/2/index.html","a065c8247eb80fd2a2aa4a86231dc97a"],["/categories/自学考试/计算机网络原理/index.html","41cf0c1eee244798aad3ba53fc6e3692"],["/categories/自学考试/运筹学/index.html","11e5ee50ce7bd99461107a4eef939836"],["/categories/自学考试/马克思主义/index.html","daafe74bc9f7a1557456d07de26038f8"],["/css/index.css","02768e0f539a91b829374d4d7c70325e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","e69ad2e6d340caef1e346e2f67d76fe6"],["/js/calendar.js","4336f9d58a8e0eed18a395341703688f"],["/js/fireworks.js","fb89d0d04079fffcaef92f0033984567"],["/js/languages.js","edc0ec6b454f9dcbf2b1e967f5d4b771"],["/js/main.js","6982ad26b05be60ebe6799ae418e4c43"],["/js/search/algolia.js","6739a0bf84ecd8af6c7c0a9358ddfafc"],["/js/search/local-search.js","5b41a01c3d1db3024b0318d008272cc8"],["/js/third-party/ClickShowText.js","f66854e27a08e7c5ca9f2c479fdeff3f"],["/js/third-party/activate-power-mode.js","911c1917956b94eeb7a83c0747ba73dc"],["/js/third-party/canvas-nest.js","41f8f312423ab0de3ebce72c84bdc8db"],["/js/third-party/canvas-ribbon.js","1e2ceec82796abeb136789890fd21324"],["/js/third-party/click_heart.js","3822ab26483f0d27b48a9e090d360d1a"],["/js/third-party/fireworks.js","8ad5d796e461b063ae83a2d3b663a07a"],["/js/third-party/piao.js","61afde8ebbdca49f96916124bf329d0d"],["/js/tw_cn.js","31643aef7152b776085e9e9190388dc4"],["/js/utils.js","582f6b4c5d0d1ff7d5f6c994855bd11d"],["/links/index.html","d9a3c48d8fee11a88eb49fc82b634fe7"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","cc22e08c2fc0d0063626c2c2cecda2d7"],["/page/3/index.html","cb8006137c68fd47f7e20cf2e8d42d45"],["/page/4/index.html","7398cffa0b5106128fd9b96c7135aaf7"],["/page/5/index.html","166e4a1308a988f19cde2d486c18ca3b"],["/page/6/index.html","ab11c1ae4719f63333d28460075b0f47"],["/plays/fluid/LDR_LLL1_0.png","65b063168317bdd54a8c18e0ff0096bc"],["/plays/fluid/dat.gui.min.js","b87024acb876bb767a7c27a5747d015d"],["/plays/fluid/index.html","ad96278b19975b503ae56b8018e4a1df"],["/plays/fluid/script.js","05d850c6db55e5092f36690f9311a285"],["/plays/mikutap/css/mikutap.css","325c78697c87a3f62edd09be21ec5903"],["/plays/mikutap/index.html","fb2263f57f7816f72709dd2abb5d8f23"],["/plays/mikutap/js/mikutap.min.js","110ad1060ee41e6f41f7f6232337fd4e"],["/plays/mikutap/shared/js/common-2.min.js","43e49a61141c64bcf8d7981f7a6a26f5"],["/plays/mikutap/shared/sp/css/common.css","da9b00bf3729866428f53b69ee9da8ed"],["/posts/10812f0/index.html","ccc1f0c7775f9efaf52fda2f03308faf"],["/posts/126b275/index.html","0040b2b31852d524cbd78cbecb85c2da"],["/posts/12d95a5e/index.html","d71b41df87b52617e519346742eacd94"],["/posts/1367417b/index.html","e96baa90eac22d7e4f16d7e0bf38be1c"],["/posts/13886e3f/index.html","29b33b5f9f4697fd980b69b3ffd453ed"],["/posts/145193a5/index.html","864a8dbd9a96b6b0fa2d870222b51833"],["/posts/149dde25/index.html","483afbfebb7c4576204c4ddee6d52e12"],["/posts/152fa65b/index.html","261b703a7e2e2d5954eb8b07194902b8"],["/posts/169e7dda/index.html","1b36a105479e8eb3c0bb3197fda0b9d2"],["/posts/1875100e/index.html","67da826f008ccbea957437f76815e46a"],["/posts/18eaef7d/index.html","df305647b50f08d019c30644cf05e3ac"],["/posts/1a0bc7b7/index.html","beef5924ceb708472bbe969b1a7bd54e"],["/posts/1a20a057/index.html","d910018ea9a7ecd04cd51398f8591abf"],["/posts/1a998be6/index.html","c3ad43669b684a9a49c789eacf44ecfc"],["/posts/1bffbd20/index.html","41ca19e6f7a349086fff91bf6d7d736c"],["/posts/1c5a0485/index.html","5e00f66a89bc4dd057af6dea464012c0"],["/posts/1e638f78/index.html","9f38963cb4969b24019bd347cd53a7b6"],["/posts/1fb53120/index.html","3adf8d17c11b350f0d101d092603dbb8"],["/posts/21466e86/index.html","e3a216c78978aa1279845bcb9b975a2a"],["/posts/21abcf1a/index.html","34a8ef47f027a66b1566c01c706ff405"],["/posts/21c250b1/index.html","e5ba77594e274b1da2854a27b89d5ae3"],["/posts/2287cc/index.html","250825d9d39d8fff2ea95626954961c9"],["/posts/236bfea3/index.html","3bdef2145fffafc46fcc9cbadc0af2e7"],["/posts/24caea6b/index.html","0062b319c2793305f5d28c8bf49f77f0"],["/posts/25d45c3d/index.html","2992257d99990aeaa15b354de53a2bd8"],["/posts/262baa9f/index.html","70dd62d472e9b8dcf1bca7bbf72fcdb0"],["/posts/27cdc142/index.html","bf38428be77b3c05f6678cd652557174"],["/posts/2895c4bb/index.html","6d3481e19e0670331d1be5b75d49ee4d"],["/posts/28987ff3/index.html","cc2f77fc33cbeb41aa610a3272af29d1"],["/posts/29f0df96/index.html","bb44bd088da4cc330d5b93a5182fe75a"],["/posts/2a1d2b6f/index.html","c1a863eb7c1f12fc3b2697a899d931ff"],["/posts/2a386047/index.html","3be41eaf4138120cd0139034a77b4dc9"],["/posts/2b770baf/index.html","697690f333c50dfe180c44ab480d4ae5"],["/posts/2cda4a8/index.html","9bbc689efe88c7d7731646dce9c48e1a"],["/posts/2d020832/index.html","905304bbdca00ff98f43677478f276c3"],["/posts/2d6d3bd/index.html","db4a04e4f854964480317fb98650a661"],["/posts/2e0c129d/index.html","dffb9a6c1d530fe96cf07e825773fe7b"],["/posts/2e7563a0/index.html","aaff52e7cd3ae60cc4028b0fef56688f"],["/posts/2e7b8d69/index.html","7e3ef4c5e062fc96de1092c4d39550e8"],["/posts/2f28d14b/index.html","1120c6164b5c295e2df783f6d85b7a32"],["/posts/2f6e1383/index.html","b1f75cf1c898df73b0c12789cc61196c"],["/posts/30bfd1cf/index.html","efa463b66ea0f91cb113675c5432c654"],["/posts/33235106/index.html","fbd0faf49085a89b5b7d278b6a041cbd"],["/posts/344e951f/index.html","949cd5cbe534cb6cb1590de63aa42fbd"],["/posts/35e2bcf6/index.html","f74449a9049cba85e77f82067d30e58b"],["/posts/365e96c5/index.html","5096717df31cc33416f30bd0a54f3e16"],["/posts/36e331e3/index.html","99a66bf2c05789098c2e9ecaa5454130"],["/posts/372df90a/index.html","51f72349927344659aab1847259fd255"],["/posts/37c547df/index.html","eae244ee354c2589e4343c4afc6184d4"],["/posts/38a88481/index.html","db73287ccc35be4fd19bf45f5c5cb4e2"],["/posts/3914bfed/index.html","fd5acb965e777843e5d5359f48813834"],["/posts/3b56780c/index.html","db3fca8d8486d167787f770f8328fd66"],["/posts/3e4bb613/index.html","8178fb9f1a53e36bbff3085c9e69ffb4"],["/posts/3f2e933/index.html","27eac86bf0e63b9cd8b4e31388b393f7"],["/posts/3f6e5f9e/index.html","9d477f770e8355718544048bd453695c"],["/posts/4349a589/index.html","dc8b83e683854fa9c2120d6cc388389b"],["/posts/44246190/index.html","d1bbe0c5652731ec9252112853480ecc"],["/posts/456550f/index.html","7e70d5bd70e72b77078aae4c468198da"],["/posts/470ac03d/index.html","84b7e1ba0b3d1724d1fc136e46faaeef"],["/posts/49249ac9/index.html","858083d9c8d44f8d826c9d6996892ffb"],["/posts/49f2d2a/index.html","473d83ca50b9ccaa9b91bbe8256959b9"],["/posts/4e6d4eb4/index.html","bd05041581d67bcd5d91b71e0e87e543"],["/posts/50caf1d4/index.html","c24c5ff0efa584b1237c0d1fda7f1467"],["/posts/51139400/index.html","c4a21813cb915a3310c54183f40f74c0"],["/posts/512c9a09/index.html","cf31fdb5c76acaa29313e7c83916349c"],["/posts/5205b330/index.html","05886b0a5342cb5eeaa6164f4b8511ab"],["/posts/52d36cab/index.html","a1273e9b8952eca934e918385c9b5680"],["/posts/532a083a/index.html","154ad67d865184ed477b191b5b8fb572"],["/posts/537d2c2a/index.html","880d278e32a647c5a99be59220aeb3bf"],["/posts/54383ba0/index.html","6d7d0c4444f94ff629e52dd6e81cb81c"],["/posts/54667693/index.html","68fba3abbca5919341de9320775bd8de"],["/posts/5508212c/index.html","3dad227624f4e11268dd978265954321"],["/posts/571564e5/index.html","ddab2aad3d3ced08bf91f093de869652"],["/posts/57900fe5/index.html","c07a908709a7a7e53095d956308352be"],["/posts/589a214a/index.html","ab88169d941cd0321683b90d80e7eac1"],["/posts/599a2b19/index.html","0b2f9bedede2646bdc29ee053233adc2"],["/posts/59c05382/index.html","5c0ea2b9ae435f7594eb1b7ed135ef83"],["/posts/5a5294c8/index.html","2929787706e405f1726ff34fd1dc2a3b"],["/posts/5b8c69d5/index.html","0e3dc77c4c5fa034427a5b9892313e3b"],["/posts/5d3da28e/index.html","df45fd11f7b47598f88c061e7360cfbb"],["/posts/5d3f50d1/index.html","3ce298b9b51af569f11e3c0b2812515d"],["/posts/5ef7ef00/index.html","2ff9536c77baa761bbcd78fe4c6c1ba7"],["/posts/60b5dd06/index.html","fca2a02225fabbc8434faa5a55e7ae8b"],["/posts/61477045/index.html","499b3817c6a5185cf34d7e1c762ffad0"],["/posts/69d79f93/index.html","358628b882fbce8fae5501aae8f7ad28"],["/posts/6b2f046/index.html","7e6f21f9dbf47eaae47a17b24968ae91"],["/posts/6b4610c4/index.html","54de2a683229877c03fc876390e3bbd6"],["/posts/6bbf03f0/index.html","d86b9dff46298f5f76aa0d2e96121853"],["/posts/7000d139/index.html","92c8330c15bafe01f0833610bb5644e5"],["/posts/72f94093/index.html","e51301e78de4307552094281ed344537"],["/posts/7380b71/index.html","e151385b3d7e90a6ec699f2eb2456c08"],["/posts/738eee3b/index.html","f3d28f07c8e2a2df7502f21cdca45738"],["/posts/73981dbc/index.html","fa1e8940bf89a34288fcbb4e24689ba8"],["/posts/74d60fd9/index.html","87aefb9bc72cfff56a2cde929e867796"],["/posts/74f5d9a5/index.html","3f5540e47780a2c13c75237342f9b786"],["/posts/750f2ce3/index.html","7f62517693890133090d2de168e975c6"],["/posts/75ceb627/index.html","52e164172284ec95f83cb802e407f955"],["/posts/7725b75a/index.html","b9629f7d35737ee3d4af2374eb9db653"],["/posts/79ef335/index.html","37fa55d9b80f70d38e3a89edc845eda2"],["/posts/7bbd3149/index.html","207b712a4b9fa8f4302c0713ca7f5ff3"],["/posts/7c20e8d5/index.html","c7128d9116ba3b1b2029451ea5280ba6"],["/posts/7d3ea75e/index.html","19ac35a81d6fc89ae8e710402844a293"],["/posts/7d43958e/index.html","b94914676486b69bd63f7155868fd181"],["/posts/807ac7f2/index.html","ab91c09bce80b57429f0991e91fec3c7"],["/posts/81738fa0/index.html","fee3d287e5db1c78315bfc457095e1ff"],["/posts/817c41b4/index.html","8d87128dcff5c435811b9f3d408ac4d7"],["/posts/84ee8e34/index.html","a83c46146ba83b05673d7f8f21cc824a"],["/posts/86f3f130/index.html","e44b9e798e564d9776658af1895e5e41"],["/posts/8837602f/index.html","0b21dc09a0b076ad32bfaade60bcc7e6"],["/posts/89589a03/index.html","e9842c458c6ed3c24aa551db073ab44b"],["/posts/8bcef008/index.html","c712490d4472b0a8e5bdd7d2df70e7ab"],["/posts/8bf9abeb/index.html","02ef3cdd6f02ceca09091e545b669d3f"],["/posts/8e5f5686/index.html","1a79e511a520f1b8fe2d87920b26a993"],["/posts/8fa6b8c7/index.html","e8af25082e708502064bac705d815e5b"],["/posts/9029a3de/index.html","47f4abbf87b358d83fdaf72d50627562"],["/posts/909d9a5d/index.html","84ce4e375c9edb9ab9960a0b4024b02c"],["/posts/91404b94/index.html","e9e768872e1bdd3a586fea3b727ea7a3"],["/posts/932e3747/index.html","7f02e2d696c2123f7d32b6d1d36d54ed"],["/posts/98e67280/index.html","6dbb4125cae88350f10fde72b738033d"],["/posts/9a4d13ef/index.html","2fee06e2272056743206f128f5fd5a04"],["/posts/9afbb889/index.html","a1289bd00ee544545190058ba4b0e53c"],["/posts/9be63ba/index.html","9ff1305c93668ec29bc8a001fa4d3aa9"],["/posts/9d967c90/index.html","65c0e470068d15fdad7438bf97a107a9"],["/posts/9eadcdf6/index.html","50d53293d63a6eedb8d789a3ea2a7341"],["/posts/9f97db8f/index.html","bd087a14e26d0054d5979807540696a4"],["/posts/9ffb4388/index.html","c0aacdedb41ce066e3a8e88d18a10870"],["/posts/a094d027/index.html","9befb9f749f469e7763588d45f040495"],["/posts/a27042c6/index.html","cdd4d6cfda254d3f9cab68833a853a85"],["/posts/a29cc732/index.html","1e8333714412fcf58beca4540a140678"],["/posts/a44a518/index.html","8d8decbc47b4d9eb840f5b9406b9ae48"],["/posts/a4f2a748/index.html","a6055f28fb4cf97a2d229d476432cc09"],["/posts/a7dc32c9/index.html","d176fce85a12b47f420c92c96982fe0a"],["/posts/a7f753ec/index.html","0b3d12f8cf7b975f9258a5cd38b488bd"],["/posts/ab176793/index.html","ee14ec88fa5c48f65aaad24dbe166068"],["/posts/ab34095a/index.html","2c09c6f05416f5fd7e9a84c579c4e81e"],["/posts/ad47c4a5/index.html","3054481416237b8c0584d34c36128e05"],["/posts/adb93761/index.html","01dc688684c4ab7d39bc1744a0477e12"],["/posts/ae8f7b74/index.html","1d12c2db05e81f2d384acea20354f622"],["/posts/af9e049c/index.html","8455e86e5cecbb4fa9a002516a286b5d"],["/posts/b0f1a367/index.html","08307e4ee4577ec4066a22c9bdcf7ed3"],["/posts/b0f98e2c/index.html","f689b2ef08c5ab24c5b74162a46210a5"],["/posts/b33131fd/index.html","221f455900369959eab5a221ac40fdb1"],["/posts/b36eb520/index.html","05e0ee3e800f36b73f5df450c2d73e5a"],["/posts/b542fc02/index.html","825813bf7863c1a9cf5f0f28de27fa74"],["/posts/b54eeeb4/index.html","2e512cf2cd930d870f7bdc25be1d9dd8"],["/posts/b84f3f3c/index.html","451427e279d13796c196c28a6eab2dca"],["/posts/b94fc207/index.html","97340748ade7fb8d34eea233c0b3ae9c"],["/posts/b981a6b4/index.html","df248ac57642fa637dae58dd268524ac"],["/posts/bcea326a/index.html","33e56d974c767b99d32c15b918a4630e"],["/posts/beb19e80/index.html","2e7a758b88ab4e4656bfb7e0d8ecf17b"],["/posts/bec490f8/index.html","f5d9155f5898433063a2a992b1256301"],["/posts/bf7bde0e/index.html","c149bbb849fe603df6870b4f6cae50ed"],["/posts/c03f17c9/index.html","41b9ccbf3255fc56e698de1f6794d8ab"],["/posts/c35bc572/index.html","b8158b3be7e8aaa90bb9b2b42ac332f5"],["/posts/c436016b/index.html","092273f0a4a7c380e184d949b16c6fd1"],["/posts/c4efc741/index.html","18cb3925ccb8b9cd176322a2fd449363"],["/posts/c5e8a08e/index.html","3b84a0948eaf4bd94bb76b310e582146"],["/posts/c7db1dc0/index.html","cbd8205e3197b14561871128c02df1c8"],["/posts/c7febeba/index.html","e0dfe180c73caab9ecbba0e6e3b4527b"],["/posts/c9c3a06e/index.html","b998ff253b28e1abe9c82097dc8f8ff0"],["/posts/cc6d2cf2/index.html","45c03ec3cfa4c44c1438e1be976b952c"],["/posts/ce48f291/index.html","80adb2381a18a0cf2e1a61fe6e3d15f6"],["/posts/cf480faa/index.html","fe50999a8c6e2d87cf7e1f4e759aca3f"],["/posts/d090b4d/index.html","0ab43d6cb76d9204024e9bdf6191d055"],["/posts/d1995044/index.html","41df64144fad0aaedda3c15c149b7dda"],["/posts/d2d34977/index.html","fbb728216f7ca088712192ea5e30a1cc"],["/posts/d3647a92/index.html","7da4ccb57c6b5edf64f93d816396bffb"],["/posts/d3f6b818/index.html","600bda516952e9de7084fd08415e8cea"],["/posts/d465029c/index.html","638cb84872f965852bbf85c52de0d214"],["/posts/d9884be2/index.html","bbb7e8f6131a5a01610cf18a518dfec8"],["/posts/da40f433/index.html","f3502ac27fae71a855dc1f4a85fb8e89"],["/posts/dae71d5f/index.html","2900cdba6571e8aeead5649de89c58e3"],["/posts/db9fbe47/index.html","636e8e9044e16895b5eba19e786a7e27"],["/posts/dbba997d/index.html","d2dd9befd6e5e280bf438504a3dc3f80"],["/posts/dc94f8a1/index.html","bd6b5ee6a7ddb53d7af6d80b0263588a"],["/posts/dfe9b67/index.html","0ac74396260f0389cd152b5916274b4f"],["/posts/e0387d80/index.html","50f043f66751428cc799d29f7021659e"],["/posts/e356f7b3/index.html","66fdc5b7b74058c5691ef32d0bc6c74a"],["/posts/e3acb366/index.html","3bb08c4c3a27bdb056efecefec52ecfa"],["/posts/e450354f/index.html","76677882aa533b372f3210efebb44b14"],["/posts/e489223c/index.html","ff2afc621f263ac8baf71336b427a1b2"],["/posts/ea914c06/index.html","dbe01739cd3efe3b94a92212e89e0dea"],["/posts/eaa8f31e/index.html","1963e59672288c700c452dcf6bc58dca"],["/posts/eac19412/index.html","f0f0783043aeecb3941844bf48121c56"],["/posts/edfc881f/index.html","e6014193237570e9614b0c5f13896a94"],["/posts/eec0bbd1/index.html","4edc175862b66eca6108c46c19b015a1"],["/posts/ef22c7c2/index.html","e59c36f3ac49d40db06e55748e09402a"],["/posts/ef271825/index.html","866dcedf656fed6fbd050991a9d151be"],["/posts/f209578c/index.html","8a58ab9a0d3f3bd6416d3a041c9d4df2"],["/posts/f3e9bea2/index.html","b380c84777c5f8e78c2b6496ff84d127"],["/posts/f67b7122/index.html","c3e0f7d7fbc9914073d4e70c5bfb28a0"],["/posts/f7abba28/index.html","3ea29166e38280efbe9e714d6951fa9c"],["/posts/faffd764/index.html","f86ad88b01d8df83bcd7b5990d7c66d6"],["/posts/fb684fb0/index.html","f4b141d7b68562d0c874663e4d449227"],["/posts/fc57199f/index.html","e8ef1bd549d770ffcee4ff9cff33d394"],["/posts/fc6e9a7d/index.html","994e8f2580f05c581b81d5081a393153"],["/posts/fc7bc02a/index.html","eeedf02a958d355f94da79003858bdfe"],["/posts/fd67c5cb/index.html","663331fcad3c94385de2c037fcf4b78f"],["/posts/fdde061e/index.html","15d5732bd56d7e65f3eae26acc7e43de"],["/tags/HTTP/index.html","e4f804cce0e2639920ce8a9e17601a72"],["/tags/Hexo/index.html","eb6f9c5c0f610acee5458ddaecc8a6d7"],["/tags/Hexo常用命令/index.html","a7e9856c010e8f1446046abbf3b5a6bb"],["/tags/Nodejs博客系统/index.html","5a3f443b61535cb53cabfd5546d5b059"],["/tags/ajax/index.html","894a2df5380eeb88d2944acce2024f43"],["/tags/ajax/page/2/index.html","3be1749aba7df5a2b1708945232d3f6f"],["/tags/curl/index.html","a17c6a636e8a166640622ee749317644"],["/tags/index.html","e551fa4c66a06df07999c81fae329949"],["/tags/json/index.html","997926cdca63be7d790d0bff3ef539d8"],["/tags/mongodb/index.html","d38929220f576549585f142ad75d7806"],["/tags/nodejs/index.html","ab99e26c34e0b20ef02f6253838ec30b"],["/tags/promise/index.html","1e4df56d80711a79405b1ed32f4f632f"],["/tags/中国近代史纲要/index.html","03b02635e58fc5b4bec73c08b7c24ca2"],["/tags/日语/index.html","5b449229cfdff7909b667244ffc9727d"],["/tags/标签外挂/index.html","90868f33b78fec0d5818f6a819405b2f"],["/tags/目录索引/index.html","79bc203aeab9e989a0dadff01eba61d6"],["/tags/管理经济学/index.html","c7e6696408a049e33921491e0d00e48d"],["/tags/考前突击/index.html","4e930cdf834a07b798ed93834490eee1"],["/tags/考前突击/page/2/index.html","e8ca3433e1df6c509d2bcff2f946c84c"],["/tags/自考/index.html","596c8bcad57cb5bf11ee53debe23e617"],["/tags/计算机网络原理/index.html","b647e18093ea58002e47ff4ed187f42c"],["/tags/运筹学/index.html","7d922b8dbaee7ae00dc06b0aaf6e04c3"],["/tags/马克思主义/index.html","5dea6ffd8379bf97d353c6df0379eca8"]];
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




