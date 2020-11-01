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

var precacheConfig = [["/404.html","7b8bf60bd32d791fd0f43b303ada0377"],["/about/index.html","5bc67dfbae23e2d17e03b62c2e994b6e"],["/aplayers/index.html","18016c48baf639c369d3195df0865a50"],["/archives/2020/02/index.html","217d42919779704c974e7789582f1105"],["/archives/2020/02/page/2/index.html","fee357fe2f4d6329ca3ff756b19c2bde"],["/archives/2020/02/page/3/index.html","75e9ac024acf7f352663fcf71c5a5594"],["/archives/2020/02/page/4/index.html","fb80d33cdf13ea131e5718b688daddfe"],["/archives/2020/03/index.html","3364343d46cd49599f38c83d7575bf44"],["/archives/2020/03/page/2/index.html","9bfe542d2d91c4f049fbe99494b4f17c"],["/archives/2020/03/page/3/index.html","b1706bcb01b6aa9599f4fa4f62bc264d"],["/archives/2020/03/page/4/index.html","a718f0ce8ffdec10cc5f1dee1c0cd577"],["/archives/2020/03/page/5/index.html","e896aaee17d6f8809f2ebcf104731371"],["/archives/2020/03/page/6/index.html","ff76b5f32d8ceb67aeb21f00edc473f2"],["/archives/2020/03/page/7/index.html","f2e2a6bf73351312bb852ce71e843e40"],["/archives/2020/03/page/8/index.html","d6954b7bddb6109033abcedf4b5e7439"],["/archives/2020/04/index.html","43b7e2b4835ad205de444d41842c833f"],["/archives/2020/04/page/2/index.html","64b07da39707acbe35996538ad090243"],["/archives/2020/04/page/3/index.html","33948b1c74339ebf0a59bbb22ec1adc4"],["/archives/2020/04/page/4/index.html","abce9219298df405bb82433cf60db622"],["/archives/2020/05/index.html","f58d6a16296fb49da7ab4aa261b9282f"],["/archives/2020/07/index.html","b954d2a16b5bd00c8d2dbe2874e07333"],["/archives/2020/07/page/2/index.html","90ad394295161c962114af5a2e02f270"],["/archives/2020/08/index.html","c7191597d106c31d3ce0e380dfe1ad32"],["/archives/2020/08/page/2/index.html","50c6745d5fc03ec376a65cbabe140809"],["/archives/2020/09/index.html","810e319937f86cb14ff577124c908724"],["/archives/2020/09/page/2/index.html","e2ed556ca8eaa8dacb2bd5434d243be1"],["/archives/2020/09/page/3/index.html","8b2a79e7139fd3dafc040fd517057425"],["/archives/2020/10/index.html","1d51e07aa680e53855aee12130ec2145"],["/archives/2020/10/page/2/index.html","6f7459e0551e2d41a2c5033a0d3b546c"],["/archives/2020/index.html","2916ef0e6ee6384e51ebf1c32b6c3a51"],["/archives/2020/page/10/index.html","75814d7590f4cbab8cca86c7e34c5385"],["/archives/2020/page/11/index.html","b2754666821426cc1c44ae340a31b7cb"],["/archives/2020/page/12/index.html","7ec714acd45bef15975552ac312c34fd"],["/archives/2020/page/13/index.html","7f4dcba47fceee01bfed8130b9452ca0"],["/archives/2020/page/14/index.html","1b0c2a1f4953c9e5077329a66ac38344"],["/archives/2020/page/15/index.html","101dae17f519f61f15860d23eee99abc"],["/archives/2020/page/16/index.html","cb6738cc9407c262d3fabc10c00993d2"],["/archives/2020/page/17/index.html","c251f81d3373e8717d06a600876fb44f"],["/archives/2020/page/18/index.html","efe301c0bd0a89999f8d29d716c6efc2"],["/archives/2020/page/19/index.html","40db4dff7d358950ba160f643b87c50d"],["/archives/2020/page/2/index.html","21ca175d0495ea4cdcd98c980efc94e8"],["/archives/2020/page/20/index.html","49777722ad2a2bf609df0d61c7f6f4c7"],["/archives/2020/page/21/index.html","4edc0b18c04225adbca238507450894e"],["/archives/2020/page/22/index.html","db0ba03037ccc75d8c8d038d6b8f2f7b"],["/archives/2020/page/3/index.html","727857f4565a1cf1392a9394b2054df4"],["/archives/2020/page/4/index.html","6c9fbccd26278de4435a16abfa3a5ed5"],["/archives/2020/page/5/index.html","ac9041fd7ecb3d5bcc5ef68774c9d1f6"],["/archives/2020/page/6/index.html","5519272027fa9a71a6adc794ec8373e1"],["/archives/2020/page/7/index.html","8521f538ac636536593b5dfce0fc6e73"],["/archives/2020/page/8/index.html","cc44296cb7e3a07d0d13549c1ba9a443"],["/archives/2020/page/9/index.html","d7b1d762fddaadb50c40aba37c03c34c"],["/archives/index.html","ed7868f8271136751185cfbbee534377"],["/archives/page/10/index.html","77c648ff720a6c01d8fe1c8622a815e1"],["/archives/page/11/index.html","b12e0aa151f9990d10956b32fb476063"],["/archives/page/12/index.html","48e416b65718875e5b6981d29edd8c82"],["/archives/page/13/index.html","9c4fa0dcb067bc0c3b51e7f2eba41946"],["/archives/page/14/index.html","b58f336da00eebc6cb571e19b1f2b902"],["/archives/page/15/index.html","3a9521c18cff4f75c254d50539b5d37b"],["/archives/page/16/index.html","499f2107c5374690bb0aa8828165e015"],["/archives/page/17/index.html","7a58c4b05a246bab384b9d6e67eb0c63"],["/archives/page/18/index.html","d63c92b78773373d346de1c4924c72b5"],["/archives/page/19/index.html","bc364ea58adc705fa208fef7ff40012a"],["/archives/page/2/index.html","ac1ce7eb77e8e5e87e9055bedf39fba5"],["/archives/page/20/index.html","589d7b5453887bccf50edd80df8caf25"],["/archives/page/21/index.html","c9010972d5111abc6c1fd0314df5872b"],["/archives/page/22/index.html","6621e8c82f37e66d45eff71b8f9cbc26"],["/archives/page/3/index.html","405720bb3c0899b0c22ad9d2bf289f20"],["/archives/page/4/index.html","bf7cb067900d4d65856f9ec4a0c31610"],["/archives/page/5/index.html","87c6603fedead09e0fe40bfb4f67a403"],["/archives/page/6/index.html","a5a408e7584d7e23b5fcfa49a792f770"],["/archives/page/7/index.html","4ff671f50ff47796e3b17d00a90cc1cf"],["/archives/page/8/index.html","f6dd38ccdbbddce0cc4e816e44e4af43"],["/archives/page/9/index.html","2a5aea8e17236f65e36d8cb4905fe793"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","755702a6bce15990f900b8b2d15ace59"],["/categories/Ajax/index.html","fef677abcda6f65e3e9771db683d0339"],["/categories/Ajax/page/2/index.html","5760baa32a4c018be3d20c00540a9830"],["/categories/ES6/index.html","73a5f88f8f91bde713d0cf6db31e5651"],["/categories/ES6/page/2/index.html","e0a23c676ec7e2d4c19de8d545d0758e"],["/categories/FL/index.html","390e13c3d69fa13a71531a30f1d55a41"],["/categories/HTTP/index.html","d59a3b622335b10f32c27a272a3c63e8"],["/categories/Hexo/index.html","88d06af1289356fe9f756774db2c2aac"],["/categories/Hexo/标签外挂/index.html","1275ee47ba2a2d6c4e88fe5ea6b6a2b0"],["/categories/Hexo常用命令/index.html","6b140000f55b65a6c38afef648eb2e92"],["/categories/JSON/index.html","9af27d6683a79eab60370ed512e9842c"],["/categories/MongoDB/index.html","2f66b0a9433ec19ab70a8ff57f7d0bde"],["/categories/Nodejs/index.html","fffa59ee5a121bf6bdc90aa0eca7d110"],["/categories/Nodejs博客实战/index.html","d079d3a3ed7879e6dc0f7e8478909c7c"],["/categories/index.html","b0200b5facf2e67274f05f7cbafe0343"],["/categories/promise/index.html","072c5146127879f9e329ccdfb8519e2c"],["/categories/日语/index.html","3a95c1e0899074099fd07953428ec5c0"],["/categories/自学考试/index.html","b2ed36feccfc9896a17ae5f8b4f4afa2"],["/categories/自学考试/page/2/index.html","57b5de9fe1e2822eb678ade7c7f3d310"],["/categories/自学考试/中国近代史纲要/index.html","8f1ba2d3c385b57e1d7425bc0c86a679"],["/categories/自学考试/管理经济学/index.html","679005f4364cd45cee084aaae5ce494f"],["/categories/自学考试/考前突击/index.html","569fc75af6b3a801e0f3e44431572126"],["/categories/自学考试/考前突击/page/2/index.html","930d180401d3c11e6aef554d8efdba8b"],["/categories/自学考试/计算机网络原理/index.html","b8b57cc06eb1a5a0c4dc26d50871635f"],["/categories/自学考试/运筹学/index.html","37dd8d2999795fc96744f240830ba3a3"],["/categories/自学考试/马克思主义/index.html","cab94148c301bcc68937b30563890e80"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/favicon.png","831793361f36a5524d7c2c8e5a5e791c"],["/images/flags/flag-cn.png","aec786dd377f7498121b2b989285de13"],["/images/flags/flag-us.png","4e484b374a934ec7a0c318fa3039a18f"],["/images/logo-collapsed@2x.png","5a7921ae91c9497d9c479db2ed247271"],["/images/logo@2x.png","7dff419a181fc2ee0d21e7759b9fdff5"],["/images/logo_dark@2x.png","7618f56d3783393049d5486b34c83f1b"],["/images/logos/github.png","3ca867b4d49b00409911b0e7d221993d"],["/images/logos/myblog.png","c65b405af280672770a5e68dbc602608"],["/images/off_on.png","1bdd36870ded5c5d39e24fcdc65b0cb5"],["/images/search_icon.png","73b5f23fe9023e21c9d90b25d73f3881"],["/images/webstack_banner_cn.png","49008f34a922e970792cacb5d17b51a0"],["/images/webstack_icon_producthunt.png","2ba473dc05e96515bb57a7bb00c4d703"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","d40af581ba1315a394268793055c7eeb"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","a5a3c915112277e82378989b9a37c0b4"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","7d808ebe18000bef601b993442dcb62a"],["/page/3/index.html","7e8285898143e40c2eef421965a839d8"],["/page/4/index.html","b074e9d21f9167195e40cccc119965b8"],["/page/5/index.html","6401ee5ecb07209e315e9329a4b635be"],["/page/6/index.html","bb24a823410241e29d1c3f5f4209bc84"],["/page/7/index.html","0a56f0ed04df758538e1a4f8c1e799f4"],["/page/8/index.html","67b6a7ac7b2dbb0d8acab447c0010e42"],["/posts/10812f0/index.html","5ae86094cd0a7f170b4e9175558de268"],["/posts/126b275/index.html","c4342836d94a8a089632c525212d648d"],["/posts/12d95a5e/index.html","fb45d3e1938305690157ec1f90d59755"],["/posts/1367417b/index.html","218238f6eb75e34711a9242ef0d45d72"],["/posts/13886e3f/index.html","1eb89dde7b515e17bd02ae9fc674c0c2"],["/posts/145193a5/index.html","d215dbcb7d139da9eacf8df295e761af"],["/posts/149dde25/index.html","16ed466037da60502872a1ddcf0bdb67"],["/posts/152fa65b/index.html","de961e964202168269002a52916a44d0"],["/posts/169e7dda/index.html","b0572428946c3031e799a027336151d8"],["/posts/1875100e/index.html","71c6b94c89bd4e05796080febdad5565"],["/posts/18eaef7d/index.html","994e59c73852b3287fb2041930abc2e8"],["/posts/1a0bc7b7/index.html","6ae10c2e509fbfd1ef3ef14ef65ef8c8"],["/posts/1a20a057/index.html","411580ea356dab96a714ffefdc8d9c27"],["/posts/1a998be6/index.html","50a989e811e9fc96391882c770296259"],["/posts/1bffbd20/index.html","86c9184c5b487bd45dd880a834329e39"],["/posts/1c5a0485/index.html","cb0ab4b3f6a52602417297a45fa1efce"],["/posts/1e638f78/index.html","b38ca633e65ef2fc990fddf498109d09"],["/posts/1e967920/index.html","12deb5d444fa966c2c63e63e5fec709b"],["/posts/1fb53120/index.html","d963ae296e596de56f9b012b10117059"],["/posts/21466e86/index.html","c86a3ccfd91109a614600a8bca0b78b3"],["/posts/21abcf1a/index.html","42b1a139efe33c3409437f3af94e3b25"],["/posts/21c250b1/index.html","d644cfd2c5caa1df03c8904443b73ff9"],["/posts/2287cc/index.html","cdd3bdfd2f30735e714d65b16199a3a9"],["/posts/236bfea3/index.html","d9277090ae2be203bf0392109c3e2b5f"],["/posts/24caea6b/index.html","e9347d79eba51ff441be4173907ef2ad"],["/posts/25d45c3d/index.html","6882b76712b1ad6769109a03738e64be"],["/posts/262baa9f/index.html","5228bb1745913431ab23077af3e462e9"],["/posts/26f82f65/index.html","26090c146dbb79c1837aa9d189614e58"],["/posts/27cdc142/index.html","39955a13b41ad5c5f20364c025f2bd24"],["/posts/2895c4bb/index.html","218b332bfe9cb086e9c06fc71c711d75"],["/posts/28987ff3/index.html","7ace11daebd46864cb7ea86cdc826182"],["/posts/298cfeed/index.html","d81334739f12c565721e61b35fa64a6e"],["/posts/29f0df96/index.html","7b3ef7d8f7eae9d8fdc39e0ec27ebfa1"],["/posts/2a1d2b6f/index.html","7602c25d5619648bf13ff563a369dd0d"],["/posts/2a386047/index.html","49118b2ebde1de99e9d0874c07e64e17"],["/posts/2b2f44ba/index.html","2f68dee817a1087dfae2ad7c47118b92"],["/posts/2b770baf/index.html","807bd8c86455999d8d0d6710455abaf7"],["/posts/2cda4a8/index.html","434b74c7260d918b135a0277ac074f26"],["/posts/2d020832/index.html","768dd3383c22090a3953b1c1cf0ce1ea"],["/posts/2d6d3bd/index.html","b97a7cfff3838e1bf3a25e708f28fd18"],["/posts/2e0c129d/index.html","a6542e32a0817c214960fce636709ca7"],["/posts/2e7563a0/index.html","e7a565e6509a96375493baf39ffcd960"],["/posts/2e7b8d69/index.html","99e62e85a61cbe5635278f80409855f7"],["/posts/2f28d14b/index.html","a3b9e14a82338e6e1a8e0409b5d8b903"],["/posts/2f6e1383/index.html","00cb0cf47e130877654103ddc43a2109"],["/posts/30bfd1cf/index.html","8e8189fd9a38bfa17defef67f06f743e"],["/posts/33235106/index.html","bcb1752c7fb3d21b27aecf6f9b51e79c"],["/posts/344e951f/index.html","9adf7493acfe5fa1ea7e88487ba87374"],["/posts/35e2bcf6/index.html","652523d6b9be5c77809a77d0b1666394"],["/posts/365e96c5/index.html","d02577f2c7e05d37bbed20a0f3e1888d"],["/posts/36e331e3/index.html","572167375b1ad045281aac617adb0b4a"],["/posts/372df90a/index.html","e1dd77cc272635089d2634dea6b7daba"],["/posts/37c547df/index.html","4e5bec2c0a96c8b04a3eb246f5b42678"],["/posts/380dfa6c/index.html","e8f9de9f5e95b5cced33061d5bd27903"],["/posts/3859c98f/index.html","b01e5b567df88be0474f63697151e25e"],["/posts/38a88481/index.html","dac9746dd279f97f88e141f5c3c87b1d"],["/posts/3914bfed/index.html","31f2fc706bbe4cf3169cea9ed79e4ebf"],["/posts/3b56780c/index.html","086655a93737a02a66a03ee25497eef4"],["/posts/3d1ef1fa/index.html","0d60305da4b075345d557bf59e778f5d"],["/posts/3e4bb613/index.html","ab705bafe8ff2a78c02ad060f6f84ef9"],["/posts/3f2e933/index.html","fe68d2b8170ee9bd49a9c919b13e62c0"],["/posts/3f6e5f9e/index.html","4c0318d2f8322076f938508f2f63329a"],["/posts/4349a589/index.html","2aefcf520acdf5d406ee283467cf1f4c"],["/posts/44246190/index.html","90373d2c480ec2688860df8180b3e29b"],["/posts/456550f/index.html","ca4ce219d85a9d31298ee199a2bd95a5"],["/posts/470ac03d/index.html","d214addbaa16572c3a938cbc6f1ac241"],["/posts/470d45ef/index.html","a6bf543356e5a5d69b2c111802769773"],["/posts/49249ac9/index.html","6527d59a23e32452024cfdbd10298e8c"],["/posts/49f2d2a/index.html","b138c48f085a6f5bed814e7d58d59cf8"],["/posts/4e6d4eb4/index.html","a5826996b9d1b75fabfae4ac5152c860"],["/posts/4f346c5/index.html","a525e82d99c9ecaf0bbb924939072bce"],["/posts/50caf1d4/index.html","414dd84f699f2fd9bd5d76ecc8f30f49"],["/posts/51139400/index.html","9bc7471d3ecf4b3892d6848171f85c1e"],["/posts/512c9a09/index.html","40ccb7f8c939ecb8c5f4641e2c02aa72"],["/posts/5205b330/index.html","ed162d19569f46e1c8ff6b1ffe259d07"],["/posts/52d36cab/index.html","4134a9014c00a3d2fc71b5a91ff35777"],["/posts/532a083a/index.html","2a54b4d0535553b1c36c6ed2690f1016"],["/posts/537d2c2a/index.html","e3e328b3221a63c9bcc189f385d2a944"],["/posts/54383ba0/index.html","145ef785679cbf2049491ea873b48087"],["/posts/54667693/index.html","df63735ca9518330d41295629f6c6e1d"],["/posts/5508212c/index.html","3b06bda708f12e37fed18477f655e1e0"],["/posts/571564e5/index.html","3d8a5d395a038fda35fe51c987aa02bb"],["/posts/57900fe5/index.html","cae7ea68880ca44deaa0cfcaecc85ae0"],["/posts/589a214a/index.html","d38b18c3dd22903387879699251dbb1f"],["/posts/599a2b19/index.html","b2951bf2e85cc3a615d6955bf9164f89"],["/posts/59c05382/index.html","a2ddc99e8eb3f02540321adc0985de16"],["/posts/5a5294c8/index.html","13722c76d4a491c11b1905be36e42b6d"],["/posts/5d3da28e/index.html","93e564c1cc9617441a347d09a7d9ea9e"],["/posts/5d3f50d1/index.html","8bbe549df30b35a19d71f7c5a9821e47"],["/posts/5ef7ef00/index.html","959fb192b1434dddb0b9e4da9a976633"],["/posts/5f1fa8df/index.html","bdab9f5405679651c8c516d88a488080"],["/posts/60b5dd06/index.html","382aaa2681c49ba4fff87c40ef25eadd"],["/posts/61477045/index.html","eb642c2994c3a0fc34b9d4128485a65f"],["/posts/69d79f93/index.html","2d3a9230ea8653b47d1a4e0f06a7de16"],["/posts/6b2f046/index.html","0cae5420cd4a9877a03a3e147325d2cd"],["/posts/6b4610c4/index.html","f9113893f4cf1cdaa664b225fb3df9f2"],["/posts/6bbf03f0/index.html","a4f99cf556e6c0e1f6871c49c84a6e4b"],["/posts/7000d139/index.html","432a372869694586e372f77ea16c8dee"],["/posts/72f94093/index.html","919a5dfda32f49afb2dceaf1b882ef7a"],["/posts/7380b71/index.html","8f199dd3850a05437408d9d0bdfb1535"],["/posts/738eee3b/index.html","fdc1acc1c633ba52c660c21ff0ed2e99"],["/posts/73981dbc/index.html","36e361696e5ab781a9972b8707cc92c4"],["/posts/74d60fd9/index.html","3547a4d8650e91cd3f2e90814d35746d"],["/posts/74f5d9a5/index.html","51c9ebc978082f4bb1343699de564e4e"],["/posts/750f2ce3/index.html","98de24ffaaf272ad4cea114eca21de24"],["/posts/75ceb627/index.html","89621ef2e2f7ed1680d154d33fe209b0"],["/posts/7725b75a/index.html","6dfc3e2c97f6100c42b584e1f43c77bb"],["/posts/79ef335/index.html","cb92bf261903acc105c24d76217d8c8f"],["/posts/7bbd3149/index.html","6f5855e9091c93daf542fea487a93ea9"],["/posts/7c20e8d5/index.html","18da1d3a792ca8ca6d4a1430025c10d8"],["/posts/7d3ea75e/index.html","82416e77598e13b3635aa6003f5bb48d"],["/posts/7d43958e/index.html","23fc47eac81fca445f22bd948b82843b"],["/posts/807ac7f2/index.html","980dcb657c0cf4df26e8fd5b9d264f72"],["/posts/81738fa0/index.html","b436eea4cd509d3000e61a88aaf4a37c"],["/posts/817c41b4/index.html","5893407bc06d93434885b85e07e6bb9b"],["/posts/84ee8e34/index.html","db9f15f82f3ead279456079caf1ba268"],["/posts/8837602f/index.html","537c93ac7384b607df12af6cabf544e2"],["/posts/89589a03/index.html","1a6953e3105f4735c07ab8620632a149"],["/posts/8bcef008/index.html","581e2ed3deb010c9e859fcbdb51a084b"],["/posts/8bf9abeb/index.html","65a195a25e4ff20331f3b0f6df2a65ae"],["/posts/8e5f5686/index.html","83645c93450ecd8e4c5d8454fac0f98e"],["/posts/8fa6b8c7/index.html","25eae97666a95173a45dece6d03c162c"],["/posts/9029a3de/index.html","df6750c7dbbced59b06dd428b2172aa7"],["/posts/909d9a5d/index.html","b99f3848145eaea07170e17c39de5b06"],["/posts/91404b94/index.html","80e3a8b96e9d9550fd90e09c703cc216"],["/posts/932e3747/index.html","ce63d80f34940e64196cf2c67d679605"],["/posts/95fc9e6e/index.html","2b778db6bf374aa49edb7c4e600ac8e4"],["/posts/98e67280/index.html","a663a27519d155989ec4c9e4bc7fa461"],["/posts/9a4d13ef/index.html","7c24d681c8747a147d006fd1807ce011"],["/posts/9afbb889/index.html","4de6db6e29ba2c55bad5d2c9a794829f"],["/posts/9be63ba/index.html","c620184df75092f439d5f6725279a18f"],["/posts/9d967c90/index.html","4ddffc584bd26487446df926ffbdbdc7"],["/posts/9eadcdf6/index.html","6db946adb21c978ee8b85a867b2c01e3"],["/posts/9efd76a3/index.html","4f7e4ff6cdeef2aaa19f7571c3451827"],["/posts/9f97db8f/index.html","b444fdec58460c249716979cd855aa8c"],["/posts/9ffb4388/index.html","93a27f1f009f184a3afd61c7188b20b5"],["/posts/a094d027/index.html","4a3b6fd9e7ff6f00ab0253eb9c0c02c1"],["/posts/a27042c6/index.html","8d7ddf253bbd865e5156a2bc989acb40"],["/posts/a29cc732/index.html","467412f13b7f826b1f812e601dee5fba"],["/posts/a44a518/index.html","31a89380e44f841ee9cc11e1514cbcb1"],["/posts/a4f2a748/index.html","f967e8a91bcb66f740c84428144f1f9b"],["/posts/a7dc32c9/index.html","d7fc50096f0f75072dd59b9b182f5ed0"],["/posts/a7f753ec/index.html","9ce1f67ea0eaea804b1eae223e6ae71f"],["/posts/a9168bc5/index.html","d29e364397bad118c30c5524ff853a96"],["/posts/ab176793/index.html","73397b9bace2767bb3eecfb956b268d6"],["/posts/ab34095a/index.html","47ec062b4751c7d5cd7a181f32d12785"],["/posts/ad47c4a5/index.html","d880a91406431a102a1bc858dc4b55b2"],["/posts/ae8f7b74/index.html","084e24953bf0b67e039ee5c8b353be17"],["/posts/af43816b/index.html","ec5011890e1122808fc66ef5e1179d13"],["/posts/af9e049c/index.html","b222a9ab7e737f66e4350d3b2ea8dd81"],["/posts/b0f1a367/index.html","6616f2bd2135b240a20dadb3f8e41846"],["/posts/b0f98e2c/index.html","e3892e5b26a63339e4965fc9f829fe03"],["/posts/b33131fd/index.html","ee2d46928532e23b8b34b0af0ad1ebfe"],["/posts/b36eb520/index.html","0a69de5863507dd8748296d09597d1ac"],["/posts/b542fc02/index.html","cf089625e5f39463b8d630f978d0be7f"],["/posts/b54eeeb4/index.html","0a81ebe736843cd6310cb15cc123a6fc"],["/posts/b84f3f3c/index.html","fc821a38f3bd841fb5a84f3b1b9dc34e"],["/posts/b94fc207/index.html","e2d5bb76745aa776324838d9a9e17b79"],["/posts/b981a6b4/index.html","b321afe346b50598a67b8dee3529ee89"],["/posts/bcea326a/index.html","97e748211332968f31ea8ea6363c8088"],["/posts/beb19e80/index.html","693f59378ff44cbef809aa153561a70d"],["/posts/bec490f8/index.html","fb9520ae3b95b4e7377daeb18791eeb0"],["/posts/bf7bde0e/index.html","86c84c92b32df911c578c3da0d713788"],["/posts/c03f17c9/index.html","0c3bc1e7904e396c57ed9f265e04cd34"],["/posts/c35bc572/index.html","6749ee1cfde210a559906d7e76ccf5cb"],["/posts/c436016b/index.html","1e1a43343d78856cd7b3b711f6257aaa"],["/posts/c4efc741/index.html","f67e427e0bfdd4cddeaf92a7e05a86f0"],["/posts/c5e8a08e/index.html","302c7b379934cbf03076e76c8a99b2c1"],["/posts/c7db1dc0/index.html","c703a1e07ea5aaf352d48694cd992410"],["/posts/c7febeba/index.html","1b66d68e13c8e1c839ea92c211718669"],["/posts/c9c3a06e/index.html","cd352b3dad8c6cac2612076194140802"],["/posts/cc6d2cf2/index.html","8cf78bbcd4497a3f124b59e8029ff2f9"],["/posts/ce48f291/index.html","525a82ceefb7bbc6d5a32f4e48ec1851"],["/posts/cf480faa/index.html","d9dcee0f4aa43d70290c39141d395eac"],["/posts/d090b4d/index.html","015375696130ec5fb685d67514f20360"],["/posts/d1995044/index.html","fc63be0b9748222946ebc06ab9e18f4e"],["/posts/d2d34977/index.html","7708cd1623ea55f6187b683e4aa81921"],["/posts/d3647a92/index.html","f74e14b3d4927d3312168aa2c2231077"],["/posts/d3f6b818/index.html","c57e5e0bfe6ddbea3dbe109c87ae0294"],["/posts/d465029c/index.html","d678158049a5967c0662adceedcc4dba"],["/posts/d9884be2/index.html","c9a518a952feaf19572c01b185ba0d84"],["/posts/da40f433/index.html","2b1be8cf296c631305114589619d2fc8"],["/posts/dae71d5f/index.html","f13032c13f538525a6ea971f25744a34"],["/posts/db9fbe47/index.html","ce26f0daef94615dadeca45dfa3a6cbe"],["/posts/dbba997d/index.html","800076880c378bbd168e749415e0d50d"],["/posts/dc94f8a1/index.html","fb1f911b53ccb81c8235fdf1d61e2381"],["/posts/dfe9b67/index.html","40f4b2ba2106181ee26ed55262137206"],["/posts/e0387d80/index.html","1555ec0f5992e0655242b27b06badf03"],["/posts/e356f7b3/index.html","3929209367d669925914bf6e924dd38b"],["/posts/e3acb366/index.html","9eccb5e944d66f32f1b0f63911f4c363"],["/posts/e450354f/index.html","5d66205df84e8ff752ae8757ca5bec33"],["/posts/e489223c/index.html","0271c653a919ddfdd65206a7978fd32e"],["/posts/e9a8ddd1/index.html","a51bd16ace42f11b6f9484bcbe2f9893"],["/posts/ea914c06/index.html","dbb4446547fb4b368abce238d285fc98"],["/posts/eaa8f31e/index.html","9cf8b847b9544e850c5968531c52695c"],["/posts/eac19412/index.html","d61ad90fbd1648333b4e87fc376826c7"],["/posts/edfc881f/index.html","6816d95f7edd1a56ab48f63ec4c900be"],["/posts/eec0bbd1/index.html","1ed48506a183c8a0509113a2d9ca5a6a"],["/posts/ef22c7c2/index.html","3eac3f4f56211c4433a35e4bbde8439f"],["/posts/ef271825/index.html","164be17991aa843ca050956860d4cc39"],["/posts/f209578c/index.html","621e55e68fddb772c5b7ced4888ed2c6"],["/posts/f3e9bea2/index.html","c9f446b1c2938848a2f4a467f7ae4bb1"],["/posts/f67b7122/index.html","0e44cb93dd95ee83c7d252e951facbb6"],["/posts/f7abba28/index.html","3ae4744c130235ae08f4704dc2517b1f"],["/posts/faffd764/index.html","35eae07e15f74fddead654dbeacf362d"],["/posts/fb684fb0/index.html","64297afaa5ce5417bb14cdb0d58f7f8b"],["/posts/fc57199f/index.html","431e981eaf24af825c42d18f7a19baf7"],["/posts/fc6e9a7d/index.html","cbd172bb7bbf16d42889e28e57aa5b8d"],["/posts/fc7bc02a/index.html","77c97f29d8d8af0cbd5aa7f320edc41e"],["/posts/fd67c5cb/index.html","6132506d0a9ad631ad8cdab143338645"],["/posts/fdde061e/index.html","73de4e26494d4663184b951e6ca225e1"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","3228a080ef230c8ae524200fef51b7bd"],["/tags/ES6/page/2/index.html","dc948503fdccc851e0578512cecf9a73"],["/tags/FL/index.html","36d99f974413d77d2f7ab92bb5b7ee65"],["/tags/HTTP/index.html","91958579599540f322481cee9196cb81"],["/tags/Hexo/index.html","4ccf9e27af4a87b1ba3d4ded2eefb1bb"],["/tags/Hexo常用命令/index.html","c90162b986b56684ff12abad45c64612"],["/tags/Nodejs博客实战/index.html","dd1b6f93c2476304586d0af7818390da"],["/tags/ajax/index.html","4ac5f1f437253c6365331b1ba3c1b319"],["/tags/ajax/page/2/index.html","250ba91c8a6ff4fa810c93fa1d055e7a"],["/tags/curl/index.html","f6a7bd335ff7b65251026bb66e7cd542"],["/tags/index.html","adcceb35b2e5fbb9f9b301c48c6a2221"],["/tags/json/index.html","a9f6f2852be6c08a76c434cea288fa75"],["/tags/mongodb/index.html","5f6fec0f023f3d9b7933282daf449f34"],["/tags/nodejs/index.html","df3bb7dcea704524905e63a38fe5ba13"],["/tags/promise/index.html","5178cd49e7f2b88bb1f61883a4606907"],["/tags/中国近代史纲要/index.html","099c5de7e8bf57ad1742a948f76ed8b9"],["/tags/日语/index.html","0559b57d822aa088908f90fdc013da55"],["/tags/标签外挂/index.html","3d1adcf824528dbc3ab811091e0717e9"],["/tags/目录索引/index.html","989bf64e5ce55d08e3241f0ec3c06300"],["/tags/管理经济学/index.html","7edc5dfd3bd8fd8fb6aaac692cd0b2ea"],["/tags/考前突击/index.html","7fa04c59f45f40d166c7fb4b8e451d63"],["/tags/考前突击/page/2/index.html","26a1f0d7fe70e148c519386434b18b38"],["/tags/自考/index.html","e7000a5f069f70ba4b4e3de0a8e75a2b"],["/tags/计算机网络原理/index.html","17877d4297cdc5f27447d10c70784e49"],["/tags/运筹学/index.html","fb9e53ef3bc903fea975f41a59c160b8"],["/tags/马克思主义/index.html","dc442ee2c4a3ee32d8e70b79dfc5bf17"]];
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




