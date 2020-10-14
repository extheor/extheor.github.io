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

var precacheConfig = [["/404.html","e06c3eda0df10535673680dd2ed4687b"],["/about/index.html","3afeb6d912e3c7a8b19af161aa9a3d43"],["/aplayers/index.html","7294ae36a04c0a06d95ccef42a4f28df"],["/archives/2020/02/index.html","2409e1a0a3e3db7730ec800da81d8282"],["/archives/2020/02/page/2/index.html","9217647e99bfad8cf14ef9be05a76415"],["/archives/2020/02/page/3/index.html","00a905a0e1afce88fc23e108bf9ec36e"],["/archives/2020/02/page/4/index.html","f3a48652a2470d1213eb7d1212f723aa"],["/archives/2020/03/index.html","f14c58fb3b93fdc176d6b4240060a0ba"],["/archives/2020/03/page/2/index.html","448dc484b92891ef60a7d4fd078a8aa5"],["/archives/2020/03/page/3/index.html","45a7ae8a24bf8bdd0c64b023b6ea661b"],["/archives/2020/03/page/4/index.html","4dec048d07c3a085f2955bde9b5e0b6a"],["/archives/2020/03/page/5/index.html","c01605c38783a7e80af831bdd33072ad"],["/archives/2020/03/page/6/index.html","1419d7f5717ea384ad0d3cc4c2f94d16"],["/archives/2020/03/page/7/index.html","a6516cbf591c40429d282d1c2f6d8694"],["/archives/2020/03/page/8/index.html","7a5c8a0c057b997bbaf1079090595909"],["/archives/2020/04/index.html","14cecb2d897b4cc7b5eb5593611dd7a7"],["/archives/2020/04/page/2/index.html","6a3ae7f13b14bebaeac13f26fa6abd5b"],["/archives/2020/04/page/3/index.html","5742e1130eecb07b6f918114ff2f02ac"],["/archives/2020/04/page/4/index.html","493352dca3214085a9dd16481c802746"],["/archives/2020/05/index.html","c4ab4af40640101b9c56f949162b4666"],["/archives/2020/07/index.html","5344580611958ca73b7cdce0df4aa3b5"],["/archives/2020/07/page/2/index.html","be8392c8753a23359cadf98880240b31"],["/archives/2020/08/index.html","52e371a3aea8d36c4b62a7040ecfe3f5"],["/archives/2020/08/page/2/index.html","2a72c198085e37a94734e4d9534c2795"],["/archives/2020/09/index.html","5d1f16acf2d369512c3e03887fe20cf6"],["/archives/2020/09/page/2/index.html","290769f82c43f4408e415fafe44d1de8"],["/archives/2020/09/page/3/index.html","cd62aa0ed8af1e29f9c343409667a87c"],["/archives/2020/10/index.html","d1af5f7d2590357b1699eb79d36e1dca"],["/archives/2020/index.html","fd15fe22fc82a84c8c01929c5ad19e24"],["/archives/2020/page/10/index.html","9f4b79262ae67ccee03740e4c3b81bc0"],["/archives/2020/page/11/index.html","98f8f1250dc0002c907f3542100a7e0c"],["/archives/2020/page/12/index.html","1718ee1474b411a32500a112152fcf33"],["/archives/2020/page/13/index.html","47412c3ea172cb5b2511add40d9df200"],["/archives/2020/page/14/index.html","f471fb4d8bbe8ee49cf5c593baecbf82"],["/archives/2020/page/15/index.html","6f27935ce86d787cf990dda4b7182558"],["/archives/2020/page/16/index.html","7d024a905456e5f81e631a12520c41c1"],["/archives/2020/page/17/index.html","0c346a73e6878ecad8e0a3087826d369"],["/archives/2020/page/18/index.html","de32b57f80c8fb0f83a3c5b64ce0580c"],["/archives/2020/page/19/index.html","a3debf36e36989e7043ced5bd080842f"],["/archives/2020/page/2/index.html","3ad8dd8087d723e2e6cd678c75367a2c"],["/archives/2020/page/20/index.html","356c294e39a8978ee2bfb353aaa612c8"],["/archives/2020/page/3/index.html","7ae7a378db0065b5cad032ec962041b0"],["/archives/2020/page/4/index.html","f1ef47bbac53f02ad9466f7d5965e800"],["/archives/2020/page/5/index.html","27194067ab7ab920591164c2f9eb05eb"],["/archives/2020/page/6/index.html","6ec742e59c479c5bc62bdd5e6566f839"],["/archives/2020/page/7/index.html","a5748e83e70a6c137d7268b15d372292"],["/archives/2020/page/8/index.html","d72caf8185c4a28e640f59ac6a22ff11"],["/archives/2020/page/9/index.html","a11cb96e1ecbf54c3cd327e3e1a79c73"],["/archives/index.html","a8104fede0ddab1c61478b011434fab2"],["/archives/page/10/index.html","c7a6e3b747bfdd861249a7b8244c2098"],["/archives/page/11/index.html","42af33ccd74a84d52f037b53e06c26ad"],["/archives/page/12/index.html","551e67453dff90c99ca37d2ad289a56a"],["/archives/page/13/index.html","68adb54d1359818f60ce10bb7c9dc0fd"],["/archives/page/14/index.html","183198bf3a2a2d9c3d7b3bf088e11318"],["/archives/page/15/index.html","6c57a5d2d47fdde255eda316b8375a1e"],["/archives/page/16/index.html","a7f9a57969a975101df92df0c65662d9"],["/archives/page/17/index.html","d4e65da6dde47ca4996bcead78a845b1"],["/archives/page/18/index.html","5a82c5a6b62cab01b3147e501ade8b02"],["/archives/page/19/index.html","7318353b1bcb972585825771d3bfc3c0"],["/archives/page/2/index.html","0b4c05904be12b41024d9ab9af5e4254"],["/archives/page/20/index.html","80b50b1eae6e2142a1dff193620959df"],["/archives/page/3/index.html","17115843a2bd97dc7c5d74e410bb5559"],["/archives/page/4/index.html","e2fa91d41b5b326f6a30b88fff58ee24"],["/archives/page/5/index.html","c014a9ed37473f6f6e35f445b5533c65"],["/archives/page/6/index.html","2d38da3fd65d933366fafa34297f83e6"],["/archives/page/7/index.html","4d7dc9b68ee933670f95cca49b3711cc"],["/archives/page/8/index.html","bcde45ec6825fe008e0c7926d4e42819"],["/archives/page/9/index.html","1ae2ec28743402704a45fa4bb6d962ae"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","b1312d871fde228402bdcfe92c261fbb"],["/categories/index.html","ea0481b554844740a9327287a0337ce3"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","6b6dd6829268958c99856b4a2876960c"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","bf564cf23af272d4dc446c94fc7259e2"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","80ad62ed007dd3c877aefad3e1e37a2f"],["/page/3/index.html","0c3fc18d23d8e401ad4df5e91cc77b00"],["/page/4/index.html","ad4d1e7735a8873107e27dd9229eb0b6"],["/page/5/index.html","5d346173b6607cb511b44ae53e84d226"],["/page/6/index.html","12007048865270b3fd0735471fd71cee"],["/page/7/index.html","54c82165c76f4aed2b2acb34e620c52d"],["/posts/10812f0/index.html","00152389b4313403f5f5647d19a09850"],["/posts/126b275/index.html","f3771dba09014e0652e529947cde2655"],["/posts/12d95a5e/index.html","de624cb936899783f53c893d3ff6fb08"],["/posts/1367417b/index.html","4914ed36826bef0d5db92cf85966a7eb"],["/posts/13886e3f/index.html","e3815425d8b6d5fac9262ddee20c6018"],["/posts/145193a5/index.html","9fcf47aa739ad879ee92679b08a23e94"],["/posts/149dde25/index.html","20b5a4d307c0fb9174784557d39695dc"],["/posts/152fa65b/index.html","f8f34261e2adf2253065e38ea0809c4f"],["/posts/169e7dda/index.html","5baf45676468f82eb330344c58ce418f"],["/posts/1875100e/index.html","4c7d6059a99468d7b09698eeceacaa47"],["/posts/18eaef7d/index.html","718c78c588ca7d764807460be006fef1"],["/posts/1a0bc7b7/index.html","72f3e2c0fd0ad661bee76d9383b7f151"],["/posts/1a20a057/index.html","f1a73a23bb9da1b2793f91a8a7fa7cde"],["/posts/1a998be6/index.html","38a22613d799cb83a6672c19b26930a2"],["/posts/1bffbd20/index.html","dc5b94564f4506106eb8eb5663c9049d"],["/posts/1c5a0485/index.html","7ee0d2d86f359418a46aaeb08cc1f7b2"],["/posts/1e638f78/index.html","d5e0971b2838cc8e7dbbfc084252d739"],["/posts/1fb53120/index.html","86d68cd571e3fa064aada3851c854ea0"],["/posts/21466e86/index.html","ff93f22ea933b3c6487e79c40064cf13"],["/posts/21abcf1a/index.html","c51b28d07b637b4db1ce9135d36a9ffc"],["/posts/21c250b1/index.html","3cac69f36b4bdbc0b3a51a3f8ba4b23e"],["/posts/2287cc/index.html","d7f27fb64df516b343dfbac4c85fe3f6"],["/posts/236bfea3/index.html","e8d1c1fe3b8369b364baaaef34def8a3"],["/posts/24caea6b/index.html","c6a1d50cf48dc67495b2121a27f064f2"],["/posts/25d45c3d/index.html","ab769b87196e36122b187d17aa4fb407"],["/posts/262baa9f/index.html","1018836492bd40fa213dde35da11ad43"],["/posts/27cdc142/index.html","539c9f904ca540280f25331b498b5c23"],["/posts/2895c4bb/index.html","9a50cb587dc379d7210f3192b71adf50"],["/posts/28987ff3/index.html","47fbdd3e177f77cfc84f732841b1ddb7"],["/posts/29f0df96/index.html","807551801a46077e44820c3a311c332e"],["/posts/2a1d2b6f/index.html","28bedf2afaba5ef8f77c308f424b1f5d"],["/posts/2a386047/index.html","462c46a175f3603f1f58a7a1aefc6200"],["/posts/2b770baf/index.html","c835c845de62507b1f3c67bea14180d9"],["/posts/2cda4a8/index.html","88baedeb8956a455debe28390d0453a2"],["/posts/2d020832/index.html","d75d98db88e3da9782a1fc9a59100ab2"],["/posts/2d6d3bd/index.html","f21f619c95cfbd8d22dfe9703b316989"],["/posts/2e0c129d/index.html","71dec1b85fff56ccb5e84e824772c9d5"],["/posts/2e7563a0/index.html","e8ba087d6b0fe8a7868ff07608102a93"],["/posts/2e7b8d69/index.html","23d3e612830362d77d6a74d7e3328cd4"],["/posts/2f28d14b/index.html","6f329fbfb04e8adc5913bd7e80db2ed5"],["/posts/2f6e1383/index.html","daa17ce8fec74554d7140e4f10d4967b"],["/posts/30bfd1cf/index.html","fee73a6eac24d5ff01e9d270616e3f93"],["/posts/33235106/index.html","4fdda1657d410c01780a8b5115f09f2f"],["/posts/344e951f/index.html","92a166481cff67b2ed398942e1222395"],["/posts/35e2bcf6/index.html","137599babea18af2b1a9e2ce129c181c"],["/posts/365e96c5/index.html","2a3447e523d1d04007a400b405a8e4b1"],["/posts/36e331e3/index.html","5025ce9d2bdfe6bf290512d75bb8d3ed"],["/posts/372df90a/index.html","1933461499cffc566d304aa61b4818a3"],["/posts/37c547df/index.html","4af8b1fa7a1dfec15ad56ae9be708e5c"],["/posts/38a88481/index.html","6e4875b04eb53c8e76751ff5e9432b1e"],["/posts/3914bfed/index.html","1e14778f450d24c0e650d3392328119b"],["/posts/3b56780c/index.html","fd3e6cde6822b0927dcc949aa901d7bd"],["/posts/3e4bb613/index.html","643a1537729d0b5195a7ed2bc1c5899c"],["/posts/3f2e933/index.html","3ca9ebac70518f146b35a7ac94e44f3a"],["/posts/3f6e5f9e/index.html","144ff10fae01fb54334f4b5e88e51ca7"],["/posts/4349a589/index.html","a3c3f4dbc80c9547e4a7ecebe50f2cff"],["/posts/44246190/index.html","ee172db0e7c055004b22d09ce46cc6d8"],["/posts/456550f/index.html","9465d34968e1c7fe914325654e664add"],["/posts/470ac03d/index.html","edad8c7e2f13aa5ff498253ce67686cc"],["/posts/49249ac9/index.html","a3e87e5af4f7bac5803fe6d5c278a062"],["/posts/49f2d2a/index.html","b87f4590da9e46cd271451b96c1e7436"],["/posts/4e6d4eb4/index.html","064865af1170e6aded410d889b77c3b5"],["/posts/50caf1d4/index.html","1de903871fadb5764d75fc9ac6bccac3"],["/posts/51139400/index.html","b5e0608e42d7ff433a8e8b30b4fc1527"],["/posts/512c9a09/index.html","2b23f7118c878df705d1f25ee385bd37"],["/posts/5205b330/index.html","e83c411418f49f49458e58e67c279d0d"],["/posts/52d36cab/index.html","c512f75a1692095c05856ae492d8aa18"],["/posts/532a083a/index.html","dd42b0ac6caa24057babc6de167f0408"],["/posts/537d2c2a/index.html","e580aae27c2226218cbbdbbede2ced51"],["/posts/54383ba0/index.html","8840d10ab5e7fc60501770ee8fb08299"],["/posts/54667693/index.html","52508c54c41373f3d1e915289c7c3fa0"],["/posts/5508212c/index.html","be11c157c9b6a2c1f990d2d06b83b02d"],["/posts/571564e5/index.html","dc5a15afebb7ee3b3dbac3c00f998cca"],["/posts/57900fe5/index.html","64c5450993e6b9206391ba6bc5b27510"],["/posts/589a214a/index.html","845dadb7e106f3b9f3f3b4cb56385a74"],["/posts/599a2b19/index.html","fd015b6fa58f5ddcf9679f8797c95dc7"],["/posts/59c05382/index.html","03c1e28c3709032f18b5fa4e4501eb08"],["/posts/5a5294c8/index.html","5c2392f5b3c3fe58174bc0a54661fc53"],["/posts/5b8c69d5/index.html","5e3e7f9527273a316c5be2f962125f36"],["/posts/5d3da28e/index.html","52fd3b0a37a2885f1627903e70d4f272"],["/posts/5d3f50d1/index.html","da6087a3472c6fe16142bd7a26299fe7"],["/posts/5ef7ef00/index.html","5aab3d490114a6fd5335340e1b108b60"],["/posts/60b5dd06/index.html","7d44ede9288ffe807622dad6f0daecd9"],["/posts/61477045/index.html","bae2432921ac210337ba080656ed6e0c"],["/posts/69d79f93/index.html","d9458947f10134a5eefb6fdc900e7906"],["/posts/6b2f046/index.html","3a408aac214428c31f24c3de35fdf36c"],["/posts/6b4610c4/index.html","db7bc0aab0736a89b790c3afd6b86ce6"],["/posts/6bbf03f0/index.html","9a598f1ed7bf1e325dcf06b3c3b88fa6"],["/posts/7000d139/index.html","3e8dd19e45c6e3fc20b1b9c3825f5982"],["/posts/72f94093/index.html","ddca7bcead6f66bb2057f8711bc5928b"],["/posts/7380b71/index.html","09d3e161b2153657a148a211bbb363c5"],["/posts/738eee3b/index.html","1d80c8db066bc08df4335d23d544a486"],["/posts/73981dbc/index.html","789a64df22191b569c5032708de44948"],["/posts/74d60fd9/index.html","d57dda32af8330977c5ea3a121f88781"],["/posts/74f5d9a5/index.html","a0b7d78dcfca1dfa50cadddfacc12277"],["/posts/750f2ce3/index.html","76d563bc2fee43c314177c6c080c9fc3"],["/posts/75ceb627/index.html","647ec2667383bc73919e57a2aa32a2ce"],["/posts/7725b75a/index.html","29a371175217a0361c0435dab7bc2854"],["/posts/79ef335/index.html","73bef8456620cfd17f650e51f876c749"],["/posts/7bbd3149/index.html","4181a26ce796b4fc488cf228d957de5d"],["/posts/7c20e8d5/index.html","48941db9e361ae426920856b6fb8ff57"],["/posts/7d3ea75e/index.html","102446372a106688a07006060aae7f49"],["/posts/7d43958e/index.html","a49f4ad48a6e9c4b68e1877f5b1b820f"],["/posts/807ac7f2/index.html","a78c15a6fafe1f76ba5378604e10dcfb"],["/posts/81738fa0/index.html","7aeb1d93500992e6a1a52d461b9b8fcb"],["/posts/817c41b4/index.html","a1de2d7edcb528f328984c7872fb87ac"],["/posts/84ee8e34/index.html","5b2105fb1413f2d0af3a1f470ec9e7b2"],["/posts/8837602f/index.html","8e89f7a8ec00540bacf6c37e5ba48923"],["/posts/89589a03/index.html","bf19af47c6cd872e444ed19d7498eb21"],["/posts/8bcef008/index.html","95a6f9f6348a5608f49190ff975b4614"],["/posts/8bf9abeb/index.html","17ff31dde5916881b92c0607bf5078c1"],["/posts/8e5f5686/index.html","997b835af2606c6a6ec16e3251e97fbd"],["/posts/8fa6b8c7/index.html","359a9d0c37cfe537d2b4ee506c3e58bf"],["/posts/9029a3de/index.html","823e52f8d4de50b9d933a57474f06d71"],["/posts/909d9a5d/index.html","8b0ca0afdbb194063159ab0dff957700"],["/posts/91404b94/index.html","08efcbb679a19397c6e01a31d9a6181b"],["/posts/932e3747/index.html","e14375be8650136020964f57f2b64b13"],["/posts/95fc9e6e/index.html","bb79414fbd877403142224e4c493b6bd"],["/posts/98e67280/index.html","20428d082c18f41631a8aaadf4518b2f"],["/posts/9a4d13ef/index.html","f833ee583d53c22fc094cd48ec2ec539"],["/posts/9afbb889/index.html","ed6f343d928117beda1cf4023a813781"],["/posts/9be63ba/index.html","2640208cf7da8874c78544d7420105a7"],["/posts/9d967c90/index.html","03bbf6a8636cccdd1710c0bc5f69d1c3"],["/posts/9eadcdf6/index.html","404e6c92e9df29470a7e46d042ce3045"],["/posts/9f97db8f/index.html","ffdd89d729d31cfb972bc1fcb66dcc35"],["/posts/9ffb4388/index.html","9821495bb458afdc6217d962e85b2d04"],["/posts/a094d027/index.html","437cee97bd814f1630a1239d35ee7279"],["/posts/a27042c6/index.html","4e7789031355c3169c5e6c1d6ff5c676"],["/posts/a29cc732/index.html","3c893311cc916ea8ee5a7cd98d76fd6b"],["/posts/a44a518/index.html","a248e9ecddb7411bb57fc53424f40f38"],["/posts/a4f2a748/index.html","919f76f8da455f6500bdb93b38ab9ebe"],["/posts/a7dc32c9/index.html","ccfb40a7edb527ab163c5a521af28ee8"],["/posts/a7f753ec/index.html","ae22c7e6aa9803ad1d73f7971252dfcf"],["/posts/ab176793/index.html","e148748a83dc2cb03af668122cca8a2d"],["/posts/ab34095a/index.html","23301d025cc9c23467bb72d1577efdd7"],["/posts/ad47c4a5/index.html","38551c9d0f0eb934425b8c0ecc076d31"],["/posts/ae8f7b74/index.html","01b7e1b5f4305489c36a617dc5dc0a55"],["/posts/af43816b/index.html","2850752f4b464e0fa249f43d9ff7bcfd"],["/posts/af9e049c/index.html","587d7815aa8dcfa384393552fc0164c1"],["/posts/b0f1a367/index.html","69e957ef9c62335d745a1dca406c220e"],["/posts/b0f98e2c/index.html","0b6eaf216a15ab42e0a06ab843388bcd"],["/posts/b33131fd/index.html","2744657de35f2e38f6405146ce3a1884"],["/posts/b36eb520/index.html","dad047eb025042d091529158b6de0fed"],["/posts/b542fc02/index.html","756df8a9c58c1ef3840ef0b9e44160df"],["/posts/b54eeeb4/index.html","fe9f9eb26f5eac0869ee8dfa5ebbc8af"],["/posts/b84f3f3c/index.html","5242fef49e77f74f3d4114fe9301fae1"],["/posts/b94fc207/index.html","6d4472d89082cdb88c0b9efa0cee068c"],["/posts/b981a6b4/index.html","68b77f6693eece8142ecdfda0fa94276"],["/posts/bcea326a/index.html","af55e35ab5e83f8a243852b7d4158861"],["/posts/beb19e80/index.html","0b108ceae4d7e92c875e3b105cc2d154"],["/posts/bec490f8/index.html","19d37c694862530c56c4e45da61a57ac"],["/posts/bf7bde0e/index.html","decb4ed8913cda31ddf70c87995a6458"],["/posts/c03f17c9/index.html","c027846e2f00a5b37db4f8b099b8533d"],["/posts/c35bc572/index.html","dca7870f74cd9e3e6d2d8e78a5a51159"],["/posts/c436016b/index.html","6309aade7c72d85f8bae6d3eb30681e3"],["/posts/c4efc741/index.html","696ac98b6bb43421de702872e2fce45b"],["/posts/c5e8a08e/index.html","948cb0cfc00b4c935ffb789836601a4f"],["/posts/c7db1dc0/index.html","b5b3c299cd9adc0e300725b7cefa5717"],["/posts/c7febeba/index.html","f859727a72630dae2588ecd35710d48c"],["/posts/c9c3a06e/index.html","454497e8823464be424c916981a18fae"],["/posts/cc6d2cf2/index.html","092fe0af274cf19d76b4cf9b35750542"],["/posts/ce48f291/index.html","954668cc65722b7de5352c96b276e952"],["/posts/cf480faa/index.html","f13e1d6c889c813936f931271c648b5c"],["/posts/d090b4d/index.html","5f41b69a5186768f60720dafda98c4ea"],["/posts/d1995044/index.html","0689bfdf2dedec20ccc7f46587cf8b1a"],["/posts/d2d34977/index.html","b8c564626ebda4cde32205dc83d82bdd"],["/posts/d3647a92/index.html","6b4cde9395b7d959e18949b4c6590263"],["/posts/d3f6b818/index.html","4182e41dd107bf20a39384c07377dba7"],["/posts/d465029c/index.html","c2565f1864771a8412a329ad0b28ab67"],["/posts/d9884be2/index.html","62e70e9a5d3a52edcba95a9e3089d473"],["/posts/da40f433/index.html","4c8303037f8b3d73c22831bc4b6e6738"],["/posts/dae71d5f/index.html","a83b08b87e8ef0c397cf3124a003d443"],["/posts/db9fbe47/index.html","0462ee01471bdb9c70b795042f221a04"],["/posts/dbba997d/index.html","ee4ba7a0e372e8661b611f96df0c17a0"],["/posts/dc94f8a1/index.html","030dbdcb28dbd676ddbc99dab0ed8b0d"],["/posts/dfe9b67/index.html","1690f6a505d17d3020fa7a826befd0f9"],["/posts/e0387d80/index.html","84569d7692aa86179ab631344e50911e"],["/posts/e356f7b3/index.html","fb698a6281726b4354045acad8243a2a"],["/posts/e3acb366/index.html","eff2261d65cef12c281d0e79366507b1"],["/posts/e450354f/index.html","b9cfe00e907be659684c598049a3011e"],["/posts/e489223c/index.html","0ad178ad5d2cbe684c6eb419bff72550"],["/posts/ea914c06/index.html","0f3b1100ff33a747b9d7277a17ebea23"],["/posts/eaa8f31e/index.html","c98d69119b9fb23d71a0f586cb04be77"],["/posts/eac19412/index.html","751478a3d438421bea3e467f48b399ae"],["/posts/edfc881f/index.html","c62187ec23458da1b5fca2a65cd0ffba"],["/posts/eec0bbd1/index.html","81fe290d2694c0c86e9269adf4d2f608"],["/posts/ef22c7c2/index.html","3f61883344bd75afe43a97c797228369"],["/posts/ef271825/index.html","7a21de2012d429fae2142206b919426f"],["/posts/f209578c/index.html","c6f0f8116f33dd46969f4f25c865a1df"],["/posts/f3e9bea2/index.html","eb745aa671cb2ef9ae00188e3a214b56"],["/posts/f67b7122/index.html","8d974b95ac2954ef488726012eddc608"],["/posts/f7abba28/index.html","d0b13369698cf5373be4772471b7afe0"],["/posts/faffd764/index.html","8b7c36c3f5fd8e936c2b468907e26986"],["/posts/fb684fb0/index.html","154bf7ebe0d6636ed19f9683a03fd4c3"],["/posts/fc57199f/index.html","e818a3568386b274e61aa7e73317cee5"],["/posts/fc6e9a7d/index.html","f48c84b2bcb0bc3c654390221654fcdd"],["/posts/fc7bc02a/index.html","e5b8982ef6576b16416b910c0fb9e446"],["/posts/fd67c5cb/index.html","9b245fc97e559bd4bd8b5f29e3987730"],["/posts/fdde061e/index.html","e068ec75754580cbaec6cfffcca6fabb"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/index.html","c68f449eedcd35e9d42acad41c982d7d"]];
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




