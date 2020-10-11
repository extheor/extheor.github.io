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

var precacheConfig = [["/404.html","9873ec54ca7813a183c2ee9ad2e7e958"],["/about/index.html","19aedf4940650b29b816a63ed27f0c84"],["/aplayers/index.html","bd3a9ecf2d7df8cebd43a3b12d62e96e"],["/archives/2020/02/index.html","266718b7d396d4685160c018b26c1c73"],["/archives/2020/02/page/2/index.html","6208d70f808d2e32f3c0eeea10907ade"],["/archives/2020/02/page/3/index.html","abe86fff00112cecceffcb9e81aaf91e"],["/archives/2020/02/page/4/index.html","ec89d9ec46f85c2c0d21f69569ab3df3"],["/archives/2020/03/index.html","e2b3710ebdd1f98a4a0664e620e58508"],["/archives/2020/03/page/2/index.html","86c767937fb03a81248a51fb7d21d9c5"],["/archives/2020/03/page/3/index.html","e5177883f4a0e89a91e171b14edcf92a"],["/archives/2020/03/page/4/index.html","c6a9a170342804c4b528e559ba67660a"],["/archives/2020/03/page/5/index.html","2f0ed474c02f3fbdb6ecd6c99b890e0a"],["/archives/2020/03/page/6/index.html","15b8417e051c08af34269721cf223bc8"],["/archives/2020/03/page/7/index.html","ed66bbc7a5dfdc8a51452c06331b78a7"],["/archives/2020/03/page/8/index.html","8840b1049646b5821fdfa5a07b2f3178"],["/archives/2020/04/index.html","d289bbd84aaf7c98a4ba4ddabecb7450"],["/archives/2020/04/page/2/index.html","0c373be8aef1dd993ca8eb515fec49d1"],["/archives/2020/04/page/3/index.html","3db3256e0512bf1834cd3b48fbfef54c"],["/archives/2020/04/page/4/index.html","cc8384830a54d816dfba3b3d69cbddac"],["/archives/2020/05/index.html","357f02a029fc6e9ebae7e108952e5411"],["/archives/2020/07/index.html","dcfe9ae8e70b499c04536fe7e14d71b7"],["/archives/2020/07/page/2/index.html","a4e631fe8ea4c5f3ec2adb3a4bbb2a57"],["/archives/2020/08/index.html","2b64123b9621ce5df5e43af42b6e67f6"],["/archives/2020/08/page/2/index.html","0df3bf097035761e6859e1ce7ef7b5f3"],["/archives/2020/09/index.html","9043bbee65a785b564fcd78afddf2555"],["/archives/2020/09/page/2/index.html","825c9829d8e8f661a1ed68b4665dcbaa"],["/archives/2020/09/page/3/index.html","bbc5aff7c7918ca84469e75b0b527f74"],["/archives/2020/10/index.html","c3f4540f985b3e548b228c2f9c230b7a"],["/archives/2020/index.html","2e7506bebbb3a930b0ab2c8e713683d5"],["/archives/2020/page/10/index.html","8f487b421e12c12a1eb3dc719480c1c1"],["/archives/2020/page/11/index.html","36ec7d9e32d4b18cf04f6b10d30826bd"],["/archives/2020/page/12/index.html","ddfba12e70a33a752bb4b585c140d9fa"],["/archives/2020/page/13/index.html","293fcac912c1ddd06ebe90cc4aa1744e"],["/archives/2020/page/14/index.html","94a8bfc6e6bf9a790a39a018c4528e88"],["/archives/2020/page/15/index.html","4efab2e278e35b49efce816d08e2c07a"],["/archives/2020/page/16/index.html","17c0e58e142558d3dbb74a0f68c821d9"],["/archives/2020/page/17/index.html","ae97dc195d77abf27e7a66d1ef875951"],["/archives/2020/page/18/index.html","a3ec9d5b5b394c488f8a47395403eb9b"],["/archives/2020/page/19/index.html","3e9615bea17fd03eea8be6caca23bfa3"],["/archives/2020/page/2/index.html","cc96736fc77f83281c8ec7955f68fdae"],["/archives/2020/page/20/index.html","5e147e3f38bc4bd2b5812e31ba61bb34"],["/archives/2020/page/3/index.html","370f007fca24dc5b21fe011d811c1acf"],["/archives/2020/page/4/index.html","c6cdec8fe3de1250e77bc46122b88d75"],["/archives/2020/page/5/index.html","dea010e93f85f008b1e63b0269547d89"],["/archives/2020/page/6/index.html","02d736698c682e8e5a8ccd08536e30c2"],["/archives/2020/page/7/index.html","200a9f276c3fea69fc513ad44f2d7321"],["/archives/2020/page/8/index.html","94d78a5f2b726cb7d8faf5314400f937"],["/archives/2020/page/9/index.html","6bdb2ff8581df13496b615021f79c7d0"],["/archives/index.html","fa6e17254e3c53d0f4161490f8a086a6"],["/archives/page/10/index.html","99ebafc2c036dbdabd190b3a98262313"],["/archives/page/11/index.html","1f119129ea1b1789e91e53ec588ebee0"],["/archives/page/12/index.html","ace00e223fe01bb431360acc93f5a854"],["/archives/page/13/index.html","9cb5aee7e3866a35a925a52891b84429"],["/archives/page/14/index.html","5814d49d443f91aa5af7f704a8cc1273"],["/archives/page/15/index.html","1364d86648f9ac7cad0448526fc018b2"],["/archives/page/16/index.html","ebaa78af3beb43e4c9c9ac0af5e177ad"],["/archives/page/17/index.html","13f795d1108eee4e660ae191a924b616"],["/archives/page/18/index.html","5aff7ebd09a60905c1c51c9cffd108fb"],["/archives/page/19/index.html","f3c446a87dc1855e96946e468de3e0bb"],["/archives/page/2/index.html","c8d4c6678feade78ef58ad8e4f73ed1e"],["/archives/page/20/index.html","fd288475d39a5df9538c489753f53933"],["/archives/page/3/index.html","63ad9114d2d6a8ea14fc8130dc3c65ca"],["/archives/page/4/index.html","5b2594fb5ab8e19da14214087cdfd8a6"],["/archives/page/5/index.html","68a0262251cb569b576bced8915f06fc"],["/archives/page/6/index.html","fb41ec841aaf19da5231dbcacc18c8d2"],["/archives/page/7/index.html","43ddef0c24df27a8bc3d2eb86032471c"],["/archives/page/8/index.html","deadba9e3cec3edb605aa46b67878940"],["/archives/page/9/index.html","807b179cb4fd7d70ccbb1ea46dfd5115"],["/baidu_verify_code-DtGRV5OBxw.html","07e9abc173ae32e40062edd5e904eb45"],["/bangumis/index.html","c0a0d2259995006a184d110c8e805d33"],["/categories/Ajax/index.html","d0373bfee69605247d2351f286dad298"],["/categories/Ajax/page/2/index.html","db6cd57974d75d4f6be0a85626d360fa"],["/categories/HTTP/index.html","cf0565c120a6544417e1826de387ab79"],["/categories/Hexo/index.html","9355eca8b9ed28e44d8a25030cbf4db9"],["/categories/Hexo/标签外挂/index.html","6207ad590a7acf704c51a1f469e74e9b"],["/categories/Hexo常用命令/index.html","1d14a28ea33f1310eb7bcbbfa0076159"],["/categories/JSON/index.html","811a8cd8c6e179b03d8c0ab3e44ab404"],["/categories/MongoDB/index.html","65dfc9558d717869a3ad91861ec10193"],["/categories/Nodejs/index.html","8286fb0c59c48702896cff2dac540974"],["/categories/Nodejs博客系统/index.html","c094fd7ec170c862bf18fea5ee2e0fc3"],["/categories/index.html","62e6b2f517dec238623237799277dd2d"],["/categories/promise/index.html","dc5183da4df1a38dab12fbe896c0ab93"],["/categories/日语/index.html","6cdde4f0a88fd89223b4f00830f94113"],["/categories/自学考试/index.html","a325747277ac449e054d496b9596ee9f"],["/categories/自学考试/page/2/index.html","ac1fe5190d816ec9d59677ab727a21f3"],["/categories/自学考试/中国近代史纲要/index.html","b109877af623266293c664a6be69b6b2"],["/categories/自学考试/管理经济学/index.html","09c9452f122a19c9c92c0a18fd2d57f5"],["/categories/自学考试/考前突击/index.html","8e5a802ebe674edc71f63c3eba286f40"],["/categories/自学考试/考前突击/page/2/index.html","6dd33126cbbbb7472b6eeb7a33605ba9"],["/categories/自学考试/计算机网络原理/index.html","49221653067ad9bcc7ae91219cdfe72f"],["/categories/自学考试/运筹学/index.html","de01685dadd075f28fdd590c9af80e80"],["/categories/自学考试/马克思主义/index.html","54d1cb0b9f973a0df3b84198592017be"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","5aac7aa667c4f6d52d8d5192ec1f50e4"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","7115eca8d419439a0bd76bea0115f787"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","849f9e3a7095b51b9764b7f5b2146827"],["/page/3/index.html","5a50ba706f20bfb90c7ce22e9f22351f"],["/page/4/index.html","682f47aaa64219337eac69c8ab485452"],["/page/5/index.html","b136d55ed567bf7a698e110857bda053"],["/page/6/index.html","bc97349d281dafe1d234bb220692ceed"],["/page/7/index.html","77e362b34b59254b03150839354b0b99"],["/posts/10812f0/index.html","1c13b6d4e376fa0aef31f223cd0c0225"],["/posts/126b275/index.html","70359f7952a1e240877f11e918b2c0a4"],["/posts/12d95a5e/index.html","7ad9e7500a1403fd43fb185c20b54708"],["/posts/1367417b/index.html","3a7ed7dcfdbdb963d06f036917879436"],["/posts/13886e3f/index.html","946ef5b8d42c49ffb54d942968d05761"],["/posts/145193a5/index.html","f312e9626142e947656c465d3fec5598"],["/posts/149dde25/index.html","3eb63c1ac89fa7b071ef8d668aed390f"],["/posts/152fa65b/index.html","9d0a73b411dc0340974af0cf2710234e"],["/posts/169e7dda/index.html","54439bd2fa1e0fbbb8b9f3d54a2d4ddf"],["/posts/1875100e/index.html","79ebdee0cb95f3743afbeea4dba6ad78"],["/posts/18eaef7d/index.html","6b987ce36cfd006684f9af6889f2ebc6"],["/posts/1a0bc7b7/index.html","a588681116482ccd8697d5ca97a07418"],["/posts/1a20a057/index.html","fc75fe1fdf2dfb9693db2f0e8fcb86eb"],["/posts/1a998be6/index.html","1c747bb4f70847d74609bd81531dc3a1"],["/posts/1bffbd20/index.html","c53e4408d3631454035fba56196c85c0"],["/posts/1c5a0485/index.html","132110305fb4ffe6b417ab9592327145"],["/posts/1e638f78/index.html","cda6ea68c7159b13f00243ba41ac6e2a"],["/posts/1fb53120/index.html","94832183f2ba5413e0720352fc6a09d9"],["/posts/21466e86/index.html","522057f18cab707764bedda631b9e3ef"],["/posts/21abcf1a/index.html","ff7f9e31479c98358f9f5a3382626a4e"],["/posts/21c250b1/index.html","efafb1067bb624b2e1fa9258e47d6bfd"],["/posts/2287cc/index.html","ad57d4b662ff8a176988d381c4d15a33"],["/posts/236bfea3/index.html","f0f100fab917a238d879ca49eea3629a"],["/posts/24caea6b/index.html","c1e69f865129465817d5a62edf5d0db6"],["/posts/25d45c3d/index.html","d326ef5290115bcd55f250a9d9d54a5d"],["/posts/262baa9f/index.html","d125e947e4706e901229ac0b05bbb161"],["/posts/27cdc142/index.html","018d9ccc06e3c245600d3da0c2568db7"],["/posts/2895c4bb/index.html","60cbe754072d741c7061802bf87aa6c4"],["/posts/28987ff3/index.html","3c12ed0993cad4a5c444106863658d25"],["/posts/29f0df96/index.html","6a7dbe3d6fd4e062bf8e735637a4efcb"],["/posts/2a1d2b6f/index.html","c982f2b6e70a394724e95237e7d78420"],["/posts/2a386047/index.html","316e29f3f53ce07f575015e1ee58a08d"],["/posts/2b770baf/index.html","f1ffa1e890f6ac4be939ef703e127daf"],["/posts/2cda4a8/index.html","af171497ae2edf931cf9977e5d40e1ca"],["/posts/2d020832/index.html","8687784bcfcb2f7de717f261124f201a"],["/posts/2d6d3bd/index.html","8ff06716f40ecae773d100bf28fc8330"],["/posts/2e0c129d/index.html","8cc7b9610d725695c44ff537417da252"],["/posts/2e7563a0/index.html","b15cdcfbd2b0c3950e3bd740e5de9e96"],["/posts/2e7b8d69/index.html","8b8a287bf5421e44d8752cf2c928238c"],["/posts/2f28d14b/index.html","b987691379f26c84be77a9407e90ac97"],["/posts/2f6e1383/index.html","f2e90f363cc808e3b58f8f6ac78728c4"],["/posts/30bfd1cf/index.html","08da39c62a5183b4617c0768b0179bb7"],["/posts/33235106/index.html","246d46642e51c84dbe6db55fa577a373"],["/posts/344e951f/index.html","04437979895dc2cbbb53dfb389b642b7"],["/posts/35e2bcf6/index.html","69b2aab66fd0a1ec425478771c738b30"],["/posts/365e96c5/index.html","9b0c3e90fcbe0acd922209af7a3b8b10"],["/posts/36e331e3/index.html","8b33bd0421094e96305b2e5f9c09a779"],["/posts/372df90a/index.html","ab2e0371a23a3e228b64e73a3df69da4"],["/posts/37c547df/index.html","6fe99c9d1863559b9ef4e1dddfeb2b02"],["/posts/38a88481/index.html","8b415d49408b54231f2151833e6dddf0"],["/posts/3914bfed/index.html","c773928cb75bdb69048db3ceb674decc"],["/posts/3b56780c/index.html","592c8f59ed224167aef78c4add1b66c3"],["/posts/3e4bb613/index.html","21924c97351a9b405ffa8bba99e4105b"],["/posts/3f2e933/index.html","73ea7cbe7433d3b12e38ebb6251a3af4"],["/posts/3f6e5f9e/index.html","a0c60465132cdb3e2ae540f416f50579"],["/posts/4349a589/index.html","09a163b60280b30807fbaf46805d299b"],["/posts/44246190/index.html","23d402566cd39cf19e72352350d4ebce"],["/posts/456550f/index.html","3330850c4d3fa433e578117610d3fd12"],["/posts/470ac03d/index.html","36bcf8517d50bf5c9fff1097974eaf7e"],["/posts/49249ac9/index.html","548ade57ce73790452cf022c2545dbe3"],["/posts/49f2d2a/index.html","15ab5c2c06873b965bf61e5728a87ed1"],["/posts/4e6d4eb4/index.html","1e09e16150925d52e20436683735c4b3"],["/posts/50caf1d4/index.html","191ac533edf0fd411239921680fb9c4f"],["/posts/51139400/index.html","1bfd1067274f78c3998a26382f9321ee"],["/posts/512c9a09/index.html","44ceda7702ccd890411cb13134063f69"],["/posts/5205b330/index.html","b11131d37994eea4055ded1878104996"],["/posts/52d36cab/index.html","7893d7e69da6f57476fb9bf91d66045d"],["/posts/532a083a/index.html","60a5ed6880f87d5d12a2965b799ba894"],["/posts/537d2c2a/index.html","35ea8ed98586ce0a7882e79f06743097"],["/posts/54383ba0/index.html","fa63b3c295e607cbeea7f2d380a09964"],["/posts/54667693/index.html","88df904604c28e0639c9819517e92a5c"],["/posts/5508212c/index.html","58a8682a5036f792f7cbc3b8019883c5"],["/posts/571564e5/index.html","3a9fe13494689c8ce3441559b3d84376"],["/posts/57900fe5/index.html","33357b9b48ad7db8a1b0f088ea015d6f"],["/posts/589a214a/index.html","c71a8133556270e124d68e6873d29173"],["/posts/599a2b19/index.html","5b0a2e1d4fe04e295f83a472d60e6bce"],["/posts/59c05382/index.html","9845bcc0412cc6dd0349b9eb3a563307"],["/posts/5a5294c8/index.html","9327fe484675e42253d1436521d4312b"],["/posts/5b8c69d5/index.html","6e9d802b00c099607dc26e88ef45c395"],["/posts/5d3da28e/index.html","61a38b6e2cb83268d0fa84ca0e7a79ea"],["/posts/5d3f50d1/index.html","8e79e23084538abb32ec9103a722bc36"],["/posts/5ef7ef00/index.html","d804468cfce587da9e497fae548072f5"],["/posts/60b5dd06/index.html","fdcccd7b0fa25c6ba86e03528356194b"],["/posts/61477045/index.html","6ff8a9853939ca379fa3d5d535401327"],["/posts/69d79f93/index.html","164b8730284bc77f77cb6dc9f60602d1"],["/posts/6b2f046/index.html","f06752d010008200baf2624d5a92e6b1"],["/posts/6b4610c4/index.html","e15be0649cf6aa95255d80ecc577f276"],["/posts/6bbf03f0/index.html","a11f292e0c0323f30309145e64b4a207"],["/posts/7000d139/index.html","0519dc3947d111875292a8f0c1bad416"],["/posts/72f94093/index.html","2a5159e76452a1e030774eda5a1024c9"],["/posts/7380b71/index.html","df8dec39add88f8d84475e03cee178c2"],["/posts/738eee3b/index.html","fb694b46c9837106555bfcf949974505"],["/posts/73981dbc/index.html","a13da4cd4d7eedfe3a94acf2aefae341"],["/posts/74d60fd9/index.html","fa1e6111426a511e6516b65c518cb188"],["/posts/74f5d9a5/index.html","b09fa7165adc56f9b60752ed6809920d"],["/posts/750f2ce3/index.html","2bc23d026610c7e86c8ecefb79ff66ca"],["/posts/75ceb627/index.html","ebba7b1217d19b2fc85fc982d3aa3865"],["/posts/7725b75a/index.html","27648f29b7c83c75188d7796e912c44a"],["/posts/79ef335/index.html","d8f460a61a2ef483ef0a02ea97d2ef57"],["/posts/7bbd3149/index.html","7f42ea3fc58b080d2ad3645b7dc16971"],["/posts/7c20e8d5/index.html","9c9cf0b2cccc193a410b24a7eab44547"],["/posts/7d3ea75e/index.html","9425dedd9dfc2d27879f395bb8dd03f7"],["/posts/7d43958e/index.html","c5af001f961ca8d1c6423d3e243f2f4f"],["/posts/807ac7f2/index.html","7e2cb4e92ec36797da6938afc66588c4"],["/posts/81738fa0/index.html","432f96c18df78b3658d775daa26f0dd8"],["/posts/817c41b4/index.html","8444071d26b28de84e98da9bff1a3c16"],["/posts/84ee8e34/index.html","19154d3827c0bd1b32c7ccee6d523a2d"],["/posts/8837602f/index.html","eaf02789f8fd647b5b2c05a370edae90"],["/posts/89589a03/index.html","45d727463a9f0e074f98604be34bc331"],["/posts/8bcef008/index.html","e689bff10061d753c069683e3db72a46"],["/posts/8bf9abeb/index.html","e6f6e9bbe0fe0ef2ebd283af886b1c0b"],["/posts/8e5f5686/index.html","05e6b5981d2d218987d0fd42a93b8226"],["/posts/8fa6b8c7/index.html","49aa8bb26a77e263a878ffd661664bd0"],["/posts/9029a3de/index.html","30ce793d73d6179c20a57b8c02ea1c67"],["/posts/909d9a5d/index.html","ed7f05e5235bd06c26b1ae3bb3f082a7"],["/posts/91404b94/index.html","9ad0d32c468a3357bbe1bffb6cda1df9"],["/posts/932e3747/index.html","90f77eea28e7a636a20f72cb9458d39c"],["/posts/95fc9e6e/index.html","0bf7616ef9891293f1cb84cc1e8241dc"],["/posts/98e67280/index.html","0202b62f12fb28cdbc46d3c74fedf945"],["/posts/9a4d13ef/index.html","296956389f45d37c7c552fb48aed5ff3"],["/posts/9afbb889/index.html","adb5ed786a3df474e74836fc2d657165"],["/posts/9be63ba/index.html","ce5f3844958375850643869162847caf"],["/posts/9d967c90/index.html","840997264852d227b1dcda15a011a86b"],["/posts/9eadcdf6/index.html","f892a83a0d05c68c509c90d801518354"],["/posts/9f97db8f/index.html","085abea8843e08eac858c9f05b863ea5"],["/posts/9ffb4388/index.html","fda6bac806ba06f066e4c0d3baa1a374"],["/posts/a094d027/index.html","ba44056bc5826d6f88c36f99c94ebb31"],["/posts/a27042c6/index.html","1cbad9579c79eb94b05f988d9dedc083"],["/posts/a29cc732/index.html","edb61e743f9d32cf13c3cdfc36497392"],["/posts/a44a518/index.html","6960347883889d4829559b7919cb5903"],["/posts/a4f2a748/index.html","c8ccf4fcd51c3d4d5d445e362f6830c8"],["/posts/a7dc32c9/index.html","00845cd810300a17261a0b94f5667ee1"],["/posts/a7f753ec/index.html","1c0588bd7fac19b2fb47fcc3281600f5"],["/posts/ab176793/index.html","21240d4bf5e43d633e096b1a43efb048"],["/posts/ab34095a/index.html","84933a576b3a78f43d1f0c1bdc1fa356"],["/posts/ad47c4a5/index.html","b5b608cb131bdcefc76478bc46eed5d7"],["/posts/ae8f7b74/index.html","ac0483a35886ed15071cc7fc79a95c7e"],["/posts/af43816b/index.html","6f59da383f1aed90ebefacba5b7169c9"],["/posts/af9e049c/index.html","cabb2bba88f4e3eee048323327234ba6"],["/posts/b0f1a367/index.html","0aea896b5e79be381d136f3fc5b9bd1f"],["/posts/b0f98e2c/index.html","e8643deac7f701e012c542843fc9d47d"],["/posts/b33131fd/index.html","e9307e5295a4aa357ecf3cde24e47a54"],["/posts/b36eb520/index.html","17bc0d43c43871b9b2a5d2bb1787c393"],["/posts/b542fc02/index.html","2c73fa2359c2aea9d6bb8a2eb85059bb"],["/posts/b54eeeb4/index.html","cec259ff29e510b54447f26249d6683e"],["/posts/b84f3f3c/index.html","4ddd6c18e20beb9ccde50b735b58c9e0"],["/posts/b94fc207/index.html","ade7e43adb10389c1b3c3bed215da60e"],["/posts/b981a6b4/index.html","72531208f652eb759f0b5339df1155f9"],["/posts/bcea326a/index.html","9aab4369c41df8c82857869da03987bb"],["/posts/beb19e80/index.html","b0c6b9f9adf647419a85728dc6c3a822"],["/posts/bec490f8/index.html","44184cc88ed2e37f1498c333d1c3c7f4"],["/posts/bf7bde0e/index.html","590b9cc36bc4ed33c6205bf24180c731"],["/posts/c03f17c9/index.html","1505f0306a77d7296bad4607190cad21"],["/posts/c35bc572/index.html","de4edfc8eae3dbe9213935baa8162a09"],["/posts/c436016b/index.html","cdd3db14c419ee90244fe4c9d81a50f9"],["/posts/c4efc741/index.html","ed4278ada5931de6d77739114ee9b962"],["/posts/c5e8a08e/index.html","ebd4bf1ee89a8d869053aeb98fb67a53"],["/posts/c7db1dc0/index.html","b58bb4032ec46da46e324b6215a2ac5e"],["/posts/c7febeba/index.html","74b9842b986cfbd3f4e7d7c9f8157f00"],["/posts/c9c3a06e/index.html","f2b87f27119058bc5b34cd04e624df87"],["/posts/cc6d2cf2/index.html","779edc8166d6920f1cecdf9d8ae8bc67"],["/posts/ce48f291/index.html","81cfd3c08d95d91a8036dd01eb9381dd"],["/posts/cf480faa/index.html","e3cb577fbfe179d7a227d410ac34a7ac"],["/posts/d090b4d/index.html","b10c62b0cbd8b93c026dced180a4eb69"],["/posts/d1995044/index.html","a6bf6a01b7072a14cdc4983cc74d028f"],["/posts/d2d34977/index.html","5bc4db1bc92422224b60b1c7f9d9718b"],["/posts/d3647a92/index.html","09b5e7f3bb24f586a69c39fa437d0b82"],["/posts/d3f6b818/index.html","a16f946af5140d41e38adc3c60e5a619"],["/posts/d465029c/index.html","19a3c515b94737251a96053b246f95bc"],["/posts/d9884be2/index.html","6f4db279f375690f43fe8848aa4795fe"],["/posts/da40f433/index.html","ab3fb1dcaf82641fb1270518472a35ba"],["/posts/dae71d5f/index.html","8d097037de9d27d3f8bfbeea42c960ca"],["/posts/db9fbe47/index.html","932de6284d140a07ee33bb0a1b162c53"],["/posts/dbba997d/index.html","cb0a45ec76b97f45d64a96fa433e88b4"],["/posts/dc94f8a1/index.html","476a5131c13e35a2959b292724b22dfd"],["/posts/dfe9b67/index.html","5949139761d91660c8ac9c669d173431"],["/posts/e0387d80/index.html","b66e220d68f7a5c34af3d7b8e8210237"],["/posts/e356f7b3/index.html","9e220ae9450938857a7f5d8948b9170d"],["/posts/e3acb366/index.html","b619e2dd2493ff05f7b35d00de29b450"],["/posts/e450354f/index.html","4356e829d82ccf9030276137a0f6224a"],["/posts/e489223c/index.html","6f9797e5644f0b99792f00c7f60bedcb"],["/posts/ea914c06/index.html","a13baecfee9a6d86727530aac233ab90"],["/posts/eaa8f31e/index.html","1e22d635a62aeb45c258cb9d6b2c7765"],["/posts/eac19412/index.html","7e43874a467cc42f150ddeb0ba2fb70b"],["/posts/edfc881f/index.html","93e7d8db4927d042ab29b0762d490cf5"],["/posts/eec0bbd1/index.html","e32dbcd128f12260fa778efaf9d2b2fd"],["/posts/ef22c7c2/index.html","7aea4ff6e91915a07f9ec65d1a211553"],["/posts/ef271825/index.html","1559d7584840a937f09cbaa0fa77af41"],["/posts/f209578c/index.html","5df791a34fcbbc697705aec932b5cbf9"],["/posts/f3e9bea2/index.html","8cae82dc2fa1e194088a8eb2be37a09a"],["/posts/f67b7122/index.html","82ee240b612846c8c22268f92dc06d23"],["/posts/f7abba28/index.html","5835aa03170be7936ebc415b703a5946"],["/posts/faffd764/index.html","d95844fe02a349da1c39f9f5bb3227a9"],["/posts/fb684fb0/index.html","c6f6bf50a8603c220a5d3df230a21e1f"],["/posts/fc57199f/index.html","08e6652110a799f0ba334fb5e667064b"],["/posts/fc6e9a7d/index.html","fc32063b93236d0e153683c095e80aa9"],["/posts/fc7bc02a/index.html","5d2cb02774333572716a91eb4beebbb8"],["/posts/fd67c5cb/index.html","b8891850dfed92251e72fb822d03daca"],["/posts/fdde061e/index.html","79ed5ae4d1856dbe48fb532b22079040"],["/tags/HTTP/index.html","5aeff21f24c0f87f9aabc4355f6698fc"],["/tags/Hexo/index.html","648fa1ad8546c3ae0a56503aa7bba1f9"],["/tags/Hexo常用命令/index.html","545be51f33bc57822ba12f2e69aaf676"],["/tags/Nodejs博客系统/index.html","3780fccb5158f36a73bf01fb0897a428"],["/tags/ajax/index.html","2ebf293e56f75da07e69aa18ef3a0502"],["/tags/ajax/page/2/index.html","c9d245840c7a807bbf141f35db9ce13e"],["/tags/curl/index.html","3a1a760ae3f584ea08e9670153794c9d"],["/tags/index.html","f048543c80114ecca160dc7720a5ef21"],["/tags/json/index.html","13a1c8ce517812b49b348109beb1fda5"],["/tags/mongodb/index.html","26909d0524c1b2cb7fdbabf771106de5"],["/tags/nodejs/index.html","2ba57eda08b8184b9cf70e63f8c9baa3"],["/tags/promise/index.html","27831afdb3ef47d8331901a3d4571d82"],["/tags/中国近代史纲要/index.html","030110712ada63b24f1d69aba922d8c1"],["/tags/日语/index.html","7d73556e43909e6fa23abaa33f88cd01"],["/tags/标签外挂/index.html","99581afbbcd4fc572a91b9847b831aad"],["/tags/目录索引/index.html","901204c431ce39ec9fed44d79b415b66"],["/tags/管理经济学/index.html","5e3be338ed521c025b72d72a74d0c701"],["/tags/考前突击/index.html","0058a24f5a1d2aeed9f693c930f6719d"],["/tags/考前突击/page/2/index.html","851b719df441186ca5b9ea17496851d2"],["/tags/自考/index.html","4247671a45ceee2168a25f162a755faf"],["/tags/计算机网络原理/index.html","d3f4c2bb05e016db8611c6e1b65d387b"],["/tags/运筹学/index.html","22a8e7d564684622bcfe9f57a2cca0da"],["/tags/马克思主义/index.html","3553c6bb2c528765c2a7a896266f3ab7"]];
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




