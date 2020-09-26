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

var precacheConfig = [["/404.html","11a2126bc940f9e7e24bfebc6764e078"],["/about/index.html","b07b5241c930e5a1a7538d27ce3fe09f"],["/aplayers/index.html","2358e652a016ba0775bbcd66c7776449"],["/archives/2020/02/index.html","4440209b3dc10da23c27ae6d8e7edc0a"],["/archives/2020/02/page/2/index.html","a174bb1e00b156844e267c23e915ba42"],["/archives/2020/02/page/3/index.html","95b565bc1a29f83e98ed9333486c4cd4"],["/archives/2020/02/page/4/index.html","178dbbbf5ee91da5ef123ca4551c13df"],["/archives/2020/03/index.html","c1a5eb4e5a800e5d9bff41f0938d3fb1"],["/archives/2020/03/page/2/index.html","263e6018a76ce593a3c1c3f8c55749b4"],["/archives/2020/03/page/3/index.html","7092e4cb7c4e5f3d747b4f2a678cff8e"],["/archives/2020/03/page/4/index.html","7a51399969422d0c94f70bfa7fa3806e"],["/archives/2020/03/page/5/index.html","43d5191893157a2808787faaf0f2ccc2"],["/archives/2020/03/page/6/index.html","5fc69c80367e6ba0c9e7ff234bd69ded"],["/archives/2020/03/page/7/index.html","6dad56d3681212be89a6be55e11e71c6"],["/archives/2020/03/page/8/index.html","0cff0ef42a74aece4c6c5b206a3659d2"],["/archives/2020/04/index.html","21a2594312ac88bdc0509270c2619f56"],["/archives/2020/04/page/2/index.html","7b41e8ee258b0f4424e4fcb20b0e37c9"],["/archives/2020/04/page/3/index.html","e5e284f4f2803bc4bceae57e7dc36a30"],["/archives/2020/04/page/4/index.html","dcfb60af45f33a442398a5651e4915eb"],["/archives/2020/05/index.html","563bc30af502307f7c3e2fde608296ee"],["/archives/2020/07/index.html","2e454aca1279a669ea0221fd2d7f53b4"],["/archives/2020/07/page/2/index.html","6b51518da37a841e93c0180e78d4d99a"],["/archives/2020/08/index.html","2722e745f159dbd662e30f0328af303a"],["/archives/2020/08/page/2/index.html","377f4dc9972b3eb694f7cbf9ccf13a18"],["/archives/2020/09/index.html","88994783fd89d9922db097f9c88b1321"],["/archives/2020/09/page/2/index.html","3952f3bde57df588aab583c07110de27"],["/archives/2020/09/page/3/index.html","6dcf3631ba90f6ade967bcd7ef5ef427"],["/archives/2020/index.html","3014f3bbe524494286295c8adfc5671e"],["/archives/2020/page/10/index.html","1a9ebdb91ed9105e84290b505149dcfa"],["/archives/2020/page/11/index.html","394fc96fe290cd01d8918fadc23f512e"],["/archives/2020/page/12/index.html","3e1b6afa1cbc3b3ea3efc6f5de5b2416"],["/archives/2020/page/13/index.html","3db8eec20ac58b423c4577709e4204d2"],["/archives/2020/page/14/index.html","cc0d3eb6f376e613fbf0d87fd58e442f"],["/archives/2020/page/15/index.html","a538ab8fa338ac3c8f0c6e98023ef27a"],["/archives/2020/page/16/index.html","76ae55d0f834d2fe69949e0c14dda7e9"],["/archives/2020/page/17/index.html","27daa39c4e579ad4d2c205770adfbbc3"],["/archives/2020/page/18/index.html","5e78d9f837ddb0333bc82caac8cb4aa4"],["/archives/2020/page/19/index.html","192bb88db969843b236957f86be66ceb"],["/archives/2020/page/2/index.html","ede9750cc9c43f6577e96bc944f8f53a"],["/archives/2020/page/3/index.html","0c40c6fff5306f63ba41714dec433f81"],["/archives/2020/page/4/index.html","691cdb0269f483df67b15e7e1bb526da"],["/archives/2020/page/5/index.html","b50f7850d13d96183a1a4a8e1859bf38"],["/archives/2020/page/6/index.html","45fe5128494266e7f0de097c3a54669f"],["/archives/2020/page/7/index.html","d1af96fad2430aeacb9c655f5b7ba615"],["/archives/2020/page/8/index.html","ee3a0de13ff1035d1eb29835adac5d52"],["/archives/2020/page/9/index.html","d8ee31399802fdeffd79d653b2cda1a8"],["/archives/index.html","301e52216de5322b0652a03ecae48e81"],["/archives/page/10/index.html","043ce1d2ffb7d6c9ecd5e0f572c04cdd"],["/archives/page/11/index.html","4f5edec37140096ffeae9a3c72431305"],["/archives/page/12/index.html","afd5afe509f83d2c565d64022f7b4ca2"],["/archives/page/13/index.html","8405c1b6b1b5228b0d819e0b2ef23c70"],["/archives/page/14/index.html","b87954bef7cb07eb06db675ceea89dc9"],["/archives/page/15/index.html","bdc4bd33c182c1c0cc1333f2ea4d34d1"],["/archives/page/16/index.html","f97f6a9bf1a2d48255ab14c1f2cc1d29"],["/archives/page/17/index.html","993b9cb9af6efc961a7911c4ef8e398f"],["/archives/page/18/index.html","388489c83bd8047d6a8bfe9cc6a88736"],["/archives/page/19/index.html","0854528992560246e317a7a0d8b67966"],["/archives/page/2/index.html","430a38fcc38150a73b2888787db28690"],["/archives/page/3/index.html","7190bd35773dfcbd9cc6391f94377d14"],["/archives/page/4/index.html","acf105dfa34c8b6c9c86dac513d5ff32"],["/archives/page/5/index.html","5ff8f2762f4fcc893f9645c709a6411f"],["/archives/page/6/index.html","56d8f78032d179c3f26ffbc57144feda"],["/archives/page/7/index.html","860b7f4da377b906c49ce4bc9f021323"],["/archives/page/8/index.html","12b9f9fe7b201d15cd8b0fb90f5fe28e"],["/archives/page/9/index.html","11f54d151b7114bd56fc07cf2bfe0ffd"],["/bangumis/index.html","9e39a9e6074791a715d198cd5ad8cf09"],["/categories/Ajax/index.html","1afcf2679bfdcdb26ed6cd329fb0e450"],["/categories/Ajax/page/2/index.html","594d9cdc6ea8a8dd16ba59500f6543f1"],["/categories/HTTP/index.html","8d5cbabf5486cd92bb06438261ba8520"],["/categories/Hexo/index.html","0a959d11131b30bef715eae34c900d6d"],["/categories/Hexo/标签外挂/index.html","9b906aef7e9c8178a4b6f2011a1b86eb"],["/categories/Hexo常用命令/index.html","d092e034624eb40182a92c7e57d51f17"],["/categories/JSON/index.html","a668ae1082e52f01f3ed52b92322c8e4"],["/categories/MongoDB/index.html","40999c8937e6ba22dc76102c5a276600"],["/categories/Nodejs/index.html","240aef8ef48acd46cb441387183e47cc"],["/categories/Nodejs博客系统/index.html","df6fc0c5e37f5b0c4e0c117885ddc0a5"],["/categories/index.html","746d203ae6f32e25f5fbebe1c077bf0a"],["/categories/日语/index.html","20e49386376b04f00c6cb88dbc4bb0d1"],["/categories/自学考试/index.html","85d22a9e10edf54dfd7935968719eaa4"],["/categories/自学考试/page/2/index.html","dd6c39d73784fe3b41ea634f3470fcdf"],["/categories/自学考试/中国近代史纲要/index.html","5deee01d872c135a5e3e0e198a13a9d4"],["/categories/自学考试/管理经济学/index.html","c3054a4b8409577776af0353f9a82799"],["/categories/自学考试/考前突击/index.html","78570f6ad8b5fdb187e2c6dd259ab549"],["/categories/自学考试/考前突击/page/2/index.html","e0840cc6d7dfc934751f19b6bd378ad2"],["/categories/自学考试/计算机网络原理/index.html","d78c359efc242e611cadfced0a4ec5bc"],["/categories/自学考试/运筹学/index.html","543f99a78fe2bb05af09dbff072c87bc"],["/categories/自学考试/马克思主义/index.html","23498a98558c8c0aa69fe2d73750e662"],["/css/index.css","02768e0f539a91b829374d4d7c70325e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","329f7e0bd5a75f9782bb4ae499ae535c"],["/js/calendar.js","6fff09f54899d56c5750b90db564ad16"],["/js/fireworks.js","fb89d0d04079fffcaef92f0033984567"],["/js/languages.js","edc0ec6b454f9dcbf2b1e967f5d4b771"],["/js/main.js","e16cfff0ec151d4418487584f6852845"],["/js/search/algolia.js","6739a0bf84ecd8af6c7c0a9358ddfafc"],["/js/search/local-search.js","5b41a01c3d1db3024b0318d008272cc8"],["/js/third-party/ClickShowText.js","f66854e27a08e7c5ca9f2c479fdeff3f"],["/js/third-party/activate-power-mode.js","a861d0b73e7094953515191204d75d82"],["/js/third-party/canvas-nest.js","ed04d96de51f7762a29e5645f2e7cfe1"],["/js/third-party/canvas-ribbon.js","2039abf8dd6b9d6f8601ae90242d300c"],["/js/third-party/click_heart.js","3822ab26483f0d27b48a9e090d360d1a"],["/js/third-party/fireworks.js","8ad5d796e461b063ae83a2d3b663a07a"],["/js/third-party/piao.js","5c518085c8f77ccc6025eaf7a9878fb2"],["/js/tw_cn.js","52509f1772c3badbb490b31502ea3e33"],["/js/utils.js","582f6b4c5d0d1ff7d5f6c994855bd11d"],["/links/index.html","16bd78ddaad8431e671b742442c0973b"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","1819497fe4328d67c9cf267690e0f541"],["/page/3/index.html","4f3278e22db32cfae6491c500e960997"],["/page/4/index.html","59b72acaff2edf274b5144d288df0bca"],["/page/5/index.html","039fb40add7104b11eba677ffed4f640"],["/plays/fluid/LDR_LLL1_0.png","65b063168317bdd54a8c18e0ff0096bc"],["/plays/fluid/dat.gui.min.js","b87024acb876bb767a7c27a5747d015d"],["/plays/fluid/index.html","f8237015bac1b993f2d47021b4f87d25"],["/plays/fluid/script.js","05d850c6db55e5092f36690f9311a285"],["/plays/mikutap/css/mikutap.css","325c78697c87a3f62edd09be21ec5903"],["/plays/mikutap/index.html","8d7600d26e0e4ad28cdf3557a5857706"],["/plays/mikutap/js/mikutap.min.js","110ad1060ee41e6f41f7f6232337fd4e"],["/plays/mikutap/shared/js/common-2.min.js","43e49a61141c64bcf8d7981f7a6a26f5"],["/plays/mikutap/shared/sp/css/common.css","da9b00bf3729866428f53b69ee9da8ed"],["/posts/10812f0/index.html","b836b051ec06c16cae1b640b6e94cb8d"],["/posts/126b275/index.html","6606aec2b04ebdaba8683fcdc9c87f18"],["/posts/12d95a5e/index.html","ce31c420975c0bf706e6b470ecfbb434"],["/posts/1367417b/index.html","acff27e1deee1c9e7f57bb32118e4b4d"],["/posts/13886e3f/index.html","ea96f7218112b099874622defd11d8e2"],["/posts/145193a5/index.html","8fcf938da29061ca43cf23167278c5bc"],["/posts/149dde25/index.html","46a60a493f59ed5782316f6020499373"],["/posts/152fa65b/index.html","c60472c451ee691c607ba84880c94c9c"],["/posts/169e7dda/index.html","04b158a71d5250e1f4792667286539b7"],["/posts/1875100e/index.html","89b6cf484cdf935a6791fb9107bd8a68"],["/posts/18eaef7d/index.html","773de9e1ad8c363971aa1a1f0729ea08"],["/posts/1a0bc7b7/index.html","526cc0a56163d21148620cdb1118e23c"],["/posts/1a20a057/index.html","09038956efc594f3a283d9b184561d5d"],["/posts/1a998be6/index.html","c863171b08047888d6a4742547ca7069"],["/posts/1bffbd20/index.html","b1f4c212ec32b7f73b0e7322c55745d6"],["/posts/1c5a0485/index.html","d85749f417dc7035ec6ddfc067d3481b"],["/posts/1e638f78/index.html","a87100dd113158b3f536b0f440ea03d8"],["/posts/1fb53120/index.html","891a96511c0242dcf0a339945441e53a"],["/posts/21466e86/index.html","5d24de0c68769aedd6a831ad9709c8d5"],["/posts/21abcf1a/index.html","6ebf3788f022eaef2e543b5df6f1688a"],["/posts/21c250b1/index.html","24b01fa4ab43967b7ff96cfd07812287"],["/posts/2287cc/index.html","24566b34e97be90c54ceeee5192a4641"],["/posts/236bfea3/index.html","453f13fb83b713d2ecca80d61af2c81a"],["/posts/24caea6b/index.html","86a1d4945fb9a9239d8d0c1a724de8a1"],["/posts/25d45c3d/index.html","2a675e030d9363e3cac237b6543afa6e"],["/posts/262baa9f/index.html","ecba23461babb6ddcfe9d38f494aed14"],["/posts/27cdc142/index.html","d2e712c7fcf57418773fc6e6fc041e81"],["/posts/2895c4bb/index.html","14300311d93a894de3073c65e3be500f"],["/posts/28987ff3/index.html","51aaa0b1892064dddd63f66bc21776ec"],["/posts/29f0df96/index.html","ce9d7d96f0dc5fd41f99876c95775896"],["/posts/2a1d2b6f/index.html","ffd047154fe68f394018109d0a9aabf0"],["/posts/2a386047/index.html","f07e7d046b1d6d10a840e09c706a448f"],["/posts/2b770baf/index.html","e0fb966c724f257eeedd72e4525664e7"],["/posts/2cda4a8/index.html","3c93a4a252439f23f371f08143f965d8"],["/posts/2d020832/index.html","5cb5c2f2945f2b224819478b40036225"],["/posts/2e0c129d/index.html","37f1c9da5b1c6562cc3e8bdceaa8db8d"],["/posts/2e7563a0/index.html","7b1ca6ab31cd0c150fc0acb245e7b6de"],["/posts/2e7b8d69/index.html","db551a9d41dfb78d1905a24c545bc45c"],["/posts/2f28d14b/index.html","3655834d721d147d266dbcfd10d5f5cb"],["/posts/2f6e1383/index.html","93f8ba3238434c11ce966b23de603e65"],["/posts/30bfd1cf/index.html","911ec70bbf666fbb5e4e6d07bdc91c52"],["/posts/33235106/index.html","ac69e960abe0d182fd4a19ecf6aa6319"],["/posts/344e951f/index.html","3339cb80c5691ae294fdd37acccc72e0"],["/posts/35e2bcf6/index.html","c316071a2a00a5629d89a6ac2b5f411b"],["/posts/365e96c5/index.html","ea9f7bcff9bf65ef39a7469978a76f77"],["/posts/36e331e3/index.html","8fd275ba610aea9399e85a38175f7372"],["/posts/372df90a/index.html","8cfadf33b36a427f035c569a37ab19e6"],["/posts/37c547df/index.html","2a39221c0d92abeaa578b0906820ce76"],["/posts/38a88481/index.html","2d4f81724c04f887fbd2932f65e62ee4"],["/posts/3b56780c/index.html","1932995abcc02d6587e1f20ac94eb150"],["/posts/3e4bb613/index.html","d1e3c4ae5e6c22cd50854a83d11b6caf"],["/posts/3f2e933/index.html","aaa76b86cf9158b901af2225d2ffa933"],["/posts/3f6e5f9e/index.html","4810fe94224be6ce8b0e3c6c33e2feda"],["/posts/4349a589/index.html","832d5816ba7f9bfb11f4143313a1b7d4"],["/posts/44246190/index.html","dca1f93aef78c2704078a053003e3c72"],["/posts/456550f/index.html","1a60cede051a2ab1d639e96638829d83"],["/posts/470ac03d/index.html","9ec1cb78d53a24cb197ff2449223b9a5"],["/posts/49249ac9/index.html","8d8e299d38d51f4f76346c876f7d7a1f"],["/posts/49f2d2a/index.html","3b7995a844d06207e2c0f4c56c79063e"],["/posts/4e6d4eb4/index.html","189d0c25c7636ee92717be9cb5f34c7f"],["/posts/50caf1d4/index.html","fa12450fd50b859f9a18e4ce828c9104"],["/posts/51139400/index.html","f2f065f8c91d3344e7588bbf05be4a0a"],["/posts/512c9a09/index.html","52450bec234396b62dd67764ee465e49"],["/posts/5205b330/index.html","b613200eddfd21dea64af31c1dab41c0"],["/posts/52d36cab/index.html","813bfb18762f1fd6a80a22b2c710d5a6"],["/posts/532a083a/index.html","ba49ba9f6d12a1b4616a0339af24b0c6"],["/posts/537d2c2a/index.html","752c3224849f8305e73d59d7aa50982a"],["/posts/54383ba0/index.html","5d19620e6351081b9d599157a75afc7d"],["/posts/54667693/index.html","dece662158ea9635d3e39866f4bc657e"],["/posts/5508212c/index.html","3240eec222a6911da4783550d3109e78"],["/posts/571564e5/index.html","715d7066501436e6d783347c410b0c1c"],["/posts/57900fe5/index.html","9688644e390dc20835c0929843b221d1"],["/posts/589a214a/index.html","7daa8cc82b0267f15f74e9fbf6460eb0"],["/posts/599a2b19/index.html","f0129f5acf10b7ad1db79035ca099e1a"],["/posts/59c05382/index.html","dabc206d659fa03806463d63ff8d604d"],["/posts/5a5294c8/index.html","f213b2c7148a559bbc7f54756db49565"],["/posts/5d3da28e/index.html","562e24542c1a73e6e8e6d51c3f630152"],["/posts/5d3f50d1/index.html","a699a0e00815ce8b0898eb576f6f5563"],["/posts/5ef7ef00/index.html","21184d0c020f2cbf7ce24d072e244c0c"],["/posts/60b5dd06/index.html","9da16887623e691c6ef2c485b09bb149"],["/posts/61477045/index.html","7d7016601e2e52f18ad9fd10af775a65"],["/posts/69d79f93/index.html","0ba58ea6ee66a147d36d75a8ea896783"],["/posts/6b2f046/index.html","5466a04a11f4102ad452d42e55302fe3"],["/posts/6b4610c4/index.html","5743044b95692f81803713d1bc040a35"],["/posts/7000d139/index.html","ce4a2cf8765fd9ca0fe5fa9b5d1b4023"],["/posts/72f94093/index.html","5eee932e4f424f7abbd4853f688ebedd"],["/posts/7380b71/index.html","9e00c7df49df0f146f003983cf3253d9"],["/posts/738eee3b/index.html","930dc318cfeb9cb2888c6c9fde7adefe"],["/posts/73981dbc/index.html","90980854c3735d6741a02442818cfbe6"],["/posts/74d60fd9/index.html","a35f0d4582357f8bb5bac4ba371f6986"],["/posts/74f5d9a5/index.html","80bb63ee1225c2cfe679fa5a0e7790d0"],["/posts/750f2ce3/index.html","a62f611aa0da3becedf7f0fd10e3bdd3"],["/posts/7725b75a/index.html","3e5900d0637c345c146c6f4f840f17fa"],["/posts/79ef335/index.html","421cec58046bed6d663af34185474ca0"],["/posts/7bbd3149/index.html","dae3e487c7dcd07762a48660b84d8acc"],["/posts/7c20e8d5/index.html","ef633b71c095943f01021d9b42baafa9"],["/posts/7d3ea75e/index.html","2a96c7264277cdade370471c05e90f91"],["/posts/7d43958e/index.html","2fcb3e5b0f14311a1dc5c6f92fb7cb33"],["/posts/807ac7f2/index.html","ad2a872497dbe777d3d5fa979099a624"],["/posts/81738fa0/index.html","d2b138682b1162da1603b79814c87633"],["/posts/817c41b4/index.html","f98aa50c47029265bf9cf018cbc0386b"],["/posts/84ee8e34/index.html","2415e295a11b42ad38ad319bdc8ffcb5"],["/posts/86f3f130/index.html","e44b9e798e564d9776658af1895e5e41"],["/posts/8837602f/index.html","81b90b68d648c27334fc3ab432964912"],["/posts/89589a03/index.html","90fcea5914186f5b23a5b87ddec179da"],["/posts/8bcef008/index.html","8588a206956a89bc7fea6991c1ad0cfe"],["/posts/8bf9abeb/index.html","9e24d6bc1b3c6c911b4351bd468d8f40"],["/posts/8e5f5686/index.html","ea24aee24f39d45f819f92ec26087b39"],["/posts/8fa6b8c7/index.html","2e76f21ce77139ca8e55486b71403075"],["/posts/9029a3de/index.html","c9ee0fe7fe9f06d17b041bf0451da834"],["/posts/909d9a5d/index.html","115f777c904820c8ffb2408115cd2d25"],["/posts/91404b94/index.html","262b1508b4d864b3f8e7eeb5d7b99989"],["/posts/932e3747/index.html","f71be8d7a086629fdfab961ab385fe2e"],["/posts/98e67280/index.html","88aac3ec570f3a7d4cec900cb035f1dc"],["/posts/9a4d13ef/index.html","df91bcf06dad61ad8566afad23cb86af"],["/posts/9afbb889/index.html","a25e286af18c20a01bd73eb51dcdbf09"],["/posts/9be63ba/index.html","06467205d808150f89beb3179d2ae601"],["/posts/9d967c90/index.html","ac36bd0b3fdfcb0390f6d1c476e9cfab"],["/posts/9ffb4388/index.html","bd3c6df76ca4678f43a9a5a3254698bf"],["/posts/a094d027/index.html","ead1918146a872c29f968b3d78a45e1b"],["/posts/a27042c6/index.html","d898c7876d1ea354a6fbd856e54b7390"],["/posts/a29cc732/index.html","a2357fff71f558b79312012fe270ce29"],["/posts/a44a518/index.html","8bf24532006e66d439c59fda77db501f"],["/posts/a4f2a748/index.html","7d6f8c09d169baaa4e0eb7d261c3a288"],["/posts/a7dc32c9/index.html","fa12ec39161b2230a1dda335ced43abd"],["/posts/a7f753ec/index.html","2070aa3f508b37a3460002e153123f47"],["/posts/ab176793/index.html","e14f600b9d623b11cbfc7dc01a9f1584"],["/posts/ab34095a/index.html","bdc912346721d3f899fd3f6991e638ae"],["/posts/ad47c4a5/index.html","423aad24e97686cb263d96ef28b4bc0e"],["/posts/adb93761/index.html","01dc688684c4ab7d39bc1744a0477e12"],["/posts/ae8f7b74/index.html","da059cea289cb8d01dd58a7e75a32305"],["/posts/af9e049c/index.html","87adfd15f02a470794f9288d2f7500ac"],["/posts/b0f1a367/index.html","d39cc6b047c214171ed78a40bfe2c7b8"],["/posts/b0f98e2c/index.html","c08b0674632383a0586f1659dff3c349"],["/posts/b33131fd/index.html","57d7e6437a63e803fc487bd30e532f6f"],["/posts/b36eb520/index.html","6e25fc8fd1e89b31e1dd02184eabdd09"],["/posts/b542fc02/index.html","b25acdbf27e64d4f71c4ff323a6d5a42"],["/posts/b54eeeb4/index.html","68370067311937ec7903c21fe3aaa702"],["/posts/b84f3f3c/index.html","911399ac5b0403c913301e04e8353907"],["/posts/b94fc207/index.html","e0500ca6c818f74654aacf92b3fab344"],["/posts/b981a6b4/index.html","8bdea928b690565e0a80316b9a0fbae9"],["/posts/bcea326a/index.html","f10aecb45cad927d4818f0882f2ddbfd"],["/posts/beb19e80/index.html","0d5715359343937713f1c414355619bb"],["/posts/bec490f8/index.html","7eca8d60e92f77d218441e71d957af8c"],["/posts/bf7bde0e/index.html","73562ce7d83d554450ad0fb474754eca"],["/posts/c03f17c9/index.html","e6f465c8a92e2bac06c94f39072b80e8"],["/posts/c35bc572/index.html","8519b32aa3ae033aaf20aa7ff6a229e4"],["/posts/c436016b/index.html","f14f2c2bed840893116e404286e7f7d3"],["/posts/c4efc741/index.html","b95f546c113a399cbe21200ab35de906"],["/posts/c5e8a08e/index.html","504f419b0192ae513e6fff559b77b9a6"],["/posts/c7db1dc0/index.html","b0d09bd232eedaf289202aad33928534"],["/posts/c7febeba/index.html","8390fb9ea4b5bd8aadc71dba4d30c049"],["/posts/c9c3a06e/index.html","cc07aa0b3793e7a9f42cc426b04f1460"],["/posts/cc6d2cf2/index.html","c95820574702008b75a516e595adcf64"],["/posts/ce48f291/index.html","dc5364c8355b393bed05edd0dfd9b92b"],["/posts/cf480faa/index.html","6d980659907f482f348abf4e20677815"],["/posts/d090b4d/index.html","3073b1b3be842e5b773adeef37515462"],["/posts/d1995044/index.html","6f44ca37fcc8da31dd4f02be596bca55"],["/posts/d2d34977/index.html","4d7c1ddb7a778fcf06ae9c2b9a46d6d2"],["/posts/d3647a92/index.html","823b359e7b992670a28b20676f33b566"],["/posts/d3f6b818/index.html","c877e429bc0b812816ad4945d2bc3774"],["/posts/d465029c/index.html","8a8620267f5ef793084d659c3ca1e0ea"],["/posts/d9884be2/index.html","0443192b21f4c86fa46e11f8f1d9749b"],["/posts/da40f433/index.html","d3342abae9e59928ca340c8688ae238e"],["/posts/dae71d5f/index.html","d084cfad6d4b635d567756dd4fbc54f9"],["/posts/db9fbe47/index.html","0e5895ebd640763c79994521aa191910"],["/posts/dc94f8a1/index.html","2e55ec490449894551735021f2865cae"],["/posts/dfe9b67/index.html","d199e065cc8655aa6950797b5625fc5e"],["/posts/e0387d80/index.html","3fdf0056bcf1dc57ca72854fad4f980c"],["/posts/e356f7b3/index.html","cd47f4f54f4d68da943a375f785e55b2"],["/posts/e3acb366/index.html","336b9a475e46a37400d3720e7d224945"],["/posts/e450354f/index.html","b3ac0f9ac21ef8746f6a127e9f64ab86"],["/posts/e489223c/index.html","2f14e0563e84eb9b034683375291ee38"],["/posts/ea914c06/index.html","08d89b6eaad0a3406250e1935a869b5d"],["/posts/eaa8f31e/index.html","8db7ffdeca2a31d3c2aff1e7e981ce4c"],["/posts/eac19412/index.html","5faef80be6d5398e00b7c43f78eecc91"],["/posts/edfc881f/index.html","8b622b7d28502bdad5a4d40a758a071c"],["/posts/eec0bbd1/index.html","add046f7ddbb83173aa80801207c8dde"],["/posts/ef22c7c2/index.html","a5c7c4b341360e0a38b1b2d7685496ad"],["/posts/ef271825/index.html","e6ce54ac51a627aa9b8340061724a11f"],["/posts/f209578c/index.html","0a6266a7109ca7e830eb6c340ef65b2e"],["/posts/f3e9bea2/index.html","e04320f9a37479ae259fa532cd190e92"],["/posts/f67b7122/index.html","be3b3fbd772ffab1f50049fe5cfc9bfd"],["/posts/f7abba28/index.html","92af166fd08cbcefa1465131c0cb3c5b"],["/posts/faffd764/index.html","894f5b04ace0bbb5dc84c560b72fea42"],["/posts/fb684fb0/index.html","9354c159d7246d0fb6fa19fdc4759dc5"],["/posts/fc57199f/index.html","a9b7478c0a295522b5c135d9f0d7fe15"],["/posts/fc6e9a7d/index.html","a25b58a7ea1da10461c1c3fd4d1bd320"],["/posts/fc7bc02a/index.html","86c799bfa404cb8a6e4edb1a865f4556"],["/posts/fd67c5cb/index.html","eb6ac8858561b668cc4267ad37153762"],["/posts/fdde061e/index.html","23a5d0feda4378372087cff35be61cba"],["/tags/HTTP/index.html","9b568973e73ddd3af531271e7dd634f6"],["/tags/Hexo/index.html","5d7d47c61c07beb04bada5fb67d1a182"],["/tags/Hexo常用命令/index.html","12323890c746e028bee3813db168d651"],["/tags/Nodejs博客系统/index.html","7275ab0e740b616dbb1b7eefa3468843"],["/tags/ajax/index.html","1bed3c359a5b184f9b961437678f7772"],["/tags/ajax/page/2/index.html","520d9fb09ec0092b469f0cca77f81c5b"],["/tags/curl/index.html","004b9a6eb040a87a8ade0697b0a0e1bb"],["/tags/index.html","957b677a6be7b86d34b8494b8d32cccf"],["/tags/json/index.html","fb7cea39ac8e4a88cb84ffd39c281958"],["/tags/mongodb/index.html","170ad2e9e22a63d7167aa725fa9f100a"],["/tags/nodejs/index.html","1840c1173d09069a23f3dd16180076a6"],["/tags/中国近代史纲要/index.html","47f7b402a6e7143d3eda4245492a500b"],["/tags/日语/index.html","1a6b3658f29ac48e533ff29e6f4be1ae"],["/tags/标签外挂/index.html","2922e6e8ee4ba91ea1beaf367bdc76b7"],["/tags/目录索引/index.html","941963449efbeedc60ae749b248032e9"],["/tags/管理经济学/index.html","0ace9b7ec39086c96b4f8eb3d6331761"],["/tags/考前突击/index.html","16e855a6fe8f44b9b52ba98e7db1dd85"],["/tags/考前突击/page/2/index.html","15921c1fb0cae02fac33ca18278d599c"],["/tags/自考/index.html","9b20de5999c7f152a5ee8ec03d4bb42c"],["/tags/计算机网络原理/index.html","a64bd1f0c60687cd24a8d4869ec49f01"],["/tags/运筹学/index.html","ecf75bc7c134ff394a872542af2aa502"],["/tags/马克思主义/index.html","945dab5371dcd90c37444ac0bd27cc31"]];
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




