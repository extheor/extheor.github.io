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

var precacheConfig = [["/404.html","fbfffa38c06d63d88100fd84158842e4"],["/about/index.html","3de310e71cac66ea11fb8fcf6bdfb12b"],["/aplayers/index.html","4a0c72ad88c4e3d793008f3b95d1098b"],["/archives/2020/02/index.html","a7dc1ea61babc49068269d7b0ae4930a"],["/archives/2020/02/page/2/index.html","404f0232086f82922c12f25fdb94b171"],["/archives/2020/02/page/3/index.html","5b364de4fbb5367445d7a39134e2b0d4"],["/archives/2020/02/page/4/index.html","bd7ed1f7dcfe13a9639a3d701cabb26c"],["/archives/2020/03/index.html","fa4fd9b2eb13cbca873e234b2721abe2"],["/archives/2020/03/page/2/index.html","bbd44f14bb72e318d205f8f64615c5e2"],["/archives/2020/03/page/3/index.html","14614d1c97aebe1e581a0b54b7e73ec4"],["/archives/2020/03/page/4/index.html","09b83e723f116fe344a6cce37500ff8a"],["/archives/2020/03/page/5/index.html","f0f66caa4d7e5fbfd5598e2279033888"],["/archives/2020/03/page/6/index.html","2789bbc5f62e896980af7fbe043844f3"],["/archives/2020/03/page/7/index.html","a1b1fb2a8040f94cea6e5d2de66a60a9"],["/archives/2020/03/page/8/index.html","e50d965a951e05f6543f2bd58d189565"],["/archives/2020/04/index.html","a3589c228e7b3fab116fb5ff220e3b9d"],["/archives/2020/04/page/2/index.html","d85ae708e6b9eeabee8311a1ca7b69a1"],["/archives/2020/04/page/3/index.html","43dd351d757d8eff5538f1b998dfb3c4"],["/archives/2020/04/page/4/index.html","14348ebbcacacd85a17c6bc827407a87"],["/archives/2020/05/index.html","87e1d3345910bf326f97c35f5969a690"],["/archives/2020/07/index.html","3a94833be3a9f5ae1fc2f2f2725aaafd"],["/archives/2020/07/page/2/index.html","0dd221033dd6bcc5d5bf5b5ebe8f1781"],["/archives/2020/08/index.html","c6cdcd77b300f9e2fcb684067c0bd051"],["/archives/2020/08/page/2/index.html","f23449aee71fecfa62bc4cdc64476e64"],["/archives/2020/09/index.html","5f0bfe8d7ade54c4255b76cf1d240dfe"],["/archives/2020/09/page/2/index.html","cc90a17c03ecb1552746763c4ac253ec"],["/archives/2020/09/page/3/index.html","6f05fbcc20c00872b5cad566dbd62833"],["/archives/2020/10/index.html","b75a4d7a981c3b777422d127b359b3ee"],["/archives/2020/index.html","37927656c6c810596831e709fa7bc14a"],["/archives/2020/page/10/index.html","a5e46b360b57351e824af18e5622fa98"],["/archives/2020/page/11/index.html","7b5f9752219f476dcefbde48d08065fc"],["/archives/2020/page/12/index.html","be735c9ccc71edae833f15a2e19fe2e4"],["/archives/2020/page/13/index.html","a7435006ac57e8e1c57ad517f0502fec"],["/archives/2020/page/14/index.html","34c673887cccb0dab0f54a1e82faff5a"],["/archives/2020/page/15/index.html","b34b10ee69112d76706240543b227e7d"],["/archives/2020/page/16/index.html","c8906ff5e6ccea13bc8ca11c4c144360"],["/archives/2020/page/17/index.html","d4295b98cbd1fd3d742615977b4638e0"],["/archives/2020/page/18/index.html","d5b0c641513cdaf4f62bad0380b11904"],["/archives/2020/page/19/index.html","d9db0becdbcc86ea83fb226ff4db1c33"],["/archives/2020/page/2/index.html","09ebf268db39b99fed544f8808a22d2d"],["/archives/2020/page/20/index.html","ceeed35ecf8dee30a0f90bf7a219b5b1"],["/archives/2020/page/3/index.html","9f772f43c5df5f3a39e45be2433eb8e0"],["/archives/2020/page/4/index.html","4785d4cbd63caed460738d4dfb98cb26"],["/archives/2020/page/5/index.html","69258e481d91ff0c9f0371ba093207c7"],["/archives/2020/page/6/index.html","f2e3b6aead09bff0893e32087152d634"],["/archives/2020/page/7/index.html","c773cc6f6dfa0a2d1903d7b22413db0b"],["/archives/2020/page/8/index.html","f489d63299f31bb22c8c1bbb50920fe1"],["/archives/2020/page/9/index.html","890b406f452b0aa84564597d8a4c360d"],["/archives/index.html","905fd7b4e3baaf586186a5774f580b20"],["/archives/page/10/index.html","6e4bbcab319a82ee0407007ca697d6ba"],["/archives/page/11/index.html","ac3a57caba25a94f388f31b3410be35a"],["/archives/page/12/index.html","720e5b24b209ad036564f75987725d80"],["/archives/page/13/index.html","e3465170990048deedf8a735c7a0db33"],["/archives/page/14/index.html","830fba42b0d1c8c8f150904bdee2b4a6"],["/archives/page/15/index.html","5648efdf1455d0a965236e7a4426c246"],["/archives/page/16/index.html","88218cb597171f65196375e91264b66e"],["/archives/page/17/index.html","c85c06825d636a5c5bfe91882c9c05cd"],["/archives/page/18/index.html","c15b74d3b17dc209fb87099494ea370f"],["/archives/page/19/index.html","3d9c20ba6bbff7c8ca5a1ca4f0549c12"],["/archives/page/2/index.html","f2b4c2cdd6bba367d22f439502791d07"],["/archives/page/20/index.html","affffbfa61e23309551add7c1c948c93"],["/archives/page/3/index.html","fc77f4c4f6b030329b6ffa344cc5148d"],["/archives/page/4/index.html","2623d6c2e91bc5c471ae3767cb0eeb23"],["/archives/page/5/index.html","46e083014862ed5a0febe54f6981ef9f"],["/archives/page/6/index.html","de48d72a3e463b1cabe906bd472c934c"],["/archives/page/7/index.html","1791b69f063b92db2a02324ca18ed939"],["/archives/page/8/index.html","d9fb65062af012335fae3cfffca71f41"],["/archives/page/9/index.html","157ccb5c3a62a45da7ae127f62ce2f62"],["/baidu_verify_code-DtGRV5OBxw.html","07e9abc173ae32e40062edd5e904eb45"],["/bangumis/index.html","617282b25b35ac5206432564da2ab19a"],["/categories/Ajax/index.html","affd7dcb3ea63af5e49fda06cde12e7d"],["/categories/Ajax/page/2/index.html","47e9454375e7c86bc2f9d73c16831bf2"],["/categories/HTTP/index.html","bbb076338fd6e0082a336c41da889cf0"],["/categories/Hexo/index.html","4ca46a48467a9b45ee90b5044b56a6f7"],["/categories/Hexo/标签外挂/index.html","28203db8e4c832b161ee4cef253f6381"],["/categories/Hexo常用命令/index.html","8b9ea1aab6fc9f014f7cba70029c9bd7"],["/categories/JSON/index.html","2cd3c38e0a9c5ac9ff334e53e9a9d757"],["/categories/MongoDB/index.html","bc5f9a8c070a5f547587170af59b7642"],["/categories/Nodejs/index.html","73fddd32a0eeee06d07e093601060d7d"],["/categories/Nodejs博客系统/index.html","c3d06e0fb8572e0371021f7a60435a7c"],["/categories/index.html","96e9adfc3c7f2f0c98c12c464edac6b5"],["/categories/promise/index.html","703383a0c759e4e00aca75bec0081885"],["/categories/日语/index.html","c0fb3e509e027f55b3f3b6d7c913376a"],["/categories/自学考试/index.html","f078781359b78d4becafdaab4b8a510c"],["/categories/自学考试/page/2/index.html","36689d8040da4b77fd3a70e538f609a4"],["/categories/自学考试/中国近代史纲要/index.html","afa1be900e96a4237d501d802780a57c"],["/categories/自学考试/管理经济学/index.html","32d305f19832ae0ba0df2530b691c2da"],["/categories/自学考试/考前突击/index.html","ca7708f167de921d9c034c392e632e90"],["/categories/自学考试/考前突击/page/2/index.html","0815f9f040aee9ba1f6a2ef48eda6e33"],["/categories/自学考试/计算机网络原理/index.html","b85e9863cc42948f9f1b90ffebf400dd"],["/categories/自学考试/运筹学/index.html","a2fb8e972bc5d9ec1f6726644c40acbf"],["/categories/自学考试/马克思主义/index.html","a314741ce28a95f5e50fdd61af67aa28"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","5456fb80362b6d4210c9499b5e550e3b"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","550deac5fdea1a88694b44db70c855c6"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","ab8f3df6429aa2993a114a720e04212a"],["/page/3/index.html","46e20299f2d7a1484302f05a5d8911d9"],["/page/4/index.html","7128b78db75bf9df3973de14fdfeb492"],["/page/5/index.html","56db9b65e556c69efbfdc7be933acc72"],["/page/6/index.html","9cef6ed08f8b74570677b409500b0c09"],["/page/7/index.html","a062f248d4c06a84912677b70804934d"],["/posts/10812f0/index.html","09e83a735cb8063f78227afff328b2dd"],["/posts/126b275/index.html","6d5487ea2cde4fab0118443d525ddcb9"],["/posts/12d95a5e/index.html","90447d89203bcf2e43a05c06b7860380"],["/posts/1367417b/index.html","a5b0f01c7babb5609b3651e0b5fd7111"],["/posts/13886e3f/index.html","6a9d6df034d97abdcc6959982a6ee14a"],["/posts/145193a5/index.html","f224ba1d447678f0682626e79657863b"],["/posts/149dde25/index.html","8f79e0ee8f4bef21af156a165acc444b"],["/posts/152fa65b/index.html","c8cb96d27d9deb608896722b87304028"],["/posts/169e7dda/index.html","102b19fd1cda7075208e14e085d15669"],["/posts/1875100e/index.html","3fed2acebcb07f7e9835b003df6bff05"],["/posts/18eaef7d/index.html","710a6470bbcaf24b662d146894909d9f"],["/posts/1a0bc7b7/index.html","905f311fee5f729aad1e4f1e3ec1a1b3"],["/posts/1a20a057/index.html","40a98af41455a372b5e9949427d2d640"],["/posts/1a998be6/index.html","9356c236ab48ce2c8d2b32976bb2b5a2"],["/posts/1bffbd20/index.html","7d77c616ffec37217f3158905ec0392b"],["/posts/1c5a0485/index.html","a9ec7dc5fea84dbedb820fb800eaeb6c"],["/posts/1e638f78/index.html","21aa54b98f4271f728b2155e5834cab1"],["/posts/1fb53120/index.html","c25be1c2ff4c80ee60c74cf899b92d7a"],["/posts/21466e86/index.html","20cfd4a74aa08ece4e822ed2aebba8d0"],["/posts/21abcf1a/index.html","ddd61d3eb7c6b47e1beda82af8d9b39e"],["/posts/21c250b1/index.html","5163625b5f280d1f22f45796df030094"],["/posts/2287cc/index.html","e00a4549fc19702e977766fd7186443f"],["/posts/236bfea3/index.html","a887cdbbe40d4df1cc9df103e80d5db3"],["/posts/24caea6b/index.html","b6d897551b0ca8dc85634a756012b557"],["/posts/25d45c3d/index.html","8cf81778b2de048ec62660d04e12551c"],["/posts/262baa9f/index.html","7523c55644586cab1bb60bfaea774ab7"],["/posts/27cdc142/index.html","92c1efd18fbe750cfc3583c8a9dc2e6c"],["/posts/2895c4bb/index.html","6f2cfa45430ce448c490a2446143d7c7"],["/posts/28987ff3/index.html","95ea4053de87129c7de26325f483bff0"],["/posts/29f0df96/index.html","a11f28f6550f7053866478a6afa332db"],["/posts/2a1d2b6f/index.html","9220f7416d2e777e094a8f8c6ace2c67"],["/posts/2a386047/index.html","3faffee5fa3a0e7282ec0d1c5dc0618f"],["/posts/2b770baf/index.html","4abe8c5655361b6498abeacf823f9479"],["/posts/2cda4a8/index.html","64b1a59bbad7871cb57fc2a40da395fa"],["/posts/2d020832/index.html","1acefb1a6c72a7195011ddd7d372b03f"],["/posts/2d6d3bd/index.html","787bddaaed665ae2ecf68cd3bcd2a67a"],["/posts/2e0c129d/index.html","14a172fdfa8b30aa572dd5b268106e7b"],["/posts/2e7563a0/index.html","bae8185726f8deebff52e4ffbc234ef7"],["/posts/2e7b8d69/index.html","6db45e79858b78030ed781da0d903af7"],["/posts/2f28d14b/index.html","36f6d2566096d169eedd4db34771d0f0"],["/posts/2f6e1383/index.html","98cc6912f4000fcc022d4793853ebcca"],["/posts/30bfd1cf/index.html","d73f92bf97180d850d39e57870273c0c"],["/posts/33235106/index.html","e000f187b7219eee4b98e3a0ffdf7557"],["/posts/344e951f/index.html","cb78943b5902f522761654c5c31760e5"],["/posts/35e2bcf6/index.html","f36f215608bc2706a4512575eb297638"],["/posts/365e96c5/index.html","523ab57cf11a718355df42a8fb8a7d3f"],["/posts/36e331e3/index.html","aa764216b60925082603331d2a4d31e3"],["/posts/372df90a/index.html","d4e45cc9b18de3819efb48b6cefc18e5"],["/posts/37c547df/index.html","f5725a5681609e2a0a31a40af259a533"],["/posts/38a88481/index.html","de469986bfba2dd8fa68f641a6bf6c0a"],["/posts/3914bfed/index.html","338c870f28eec51155cd6ecf22935207"],["/posts/3b56780c/index.html","be7197931d9ea8578a65c558dd7fca3d"],["/posts/3e4bb613/index.html","3c0003a6b5ca7fccb0217c9bb5b47cb3"],["/posts/3f2e933/index.html","895f0aa18571730b48c23d063129ae38"],["/posts/3f6e5f9e/index.html","50885afd9d6c22f0b89235f3b618eb2f"],["/posts/4349a589/index.html","659fe78583764305c8f25bd23478a866"],["/posts/44246190/index.html","c138f349b1ec5409c29c766632df9ce7"],["/posts/456550f/index.html","0015bbb222cf3f389c70deea5938c9f7"],["/posts/470ac03d/index.html","d23293284e64e3d797b33f015af47ae7"],["/posts/49249ac9/index.html","019a04a7520bf3483bf99ee211efd946"],["/posts/49f2d2a/index.html","84172fef9df9e8a2c2c0e54fd0156959"],["/posts/4e6d4eb4/index.html","b6cd7e5a83ba4fd3575e0ab8eff7dc38"],["/posts/50caf1d4/index.html","8af6951b7629f4016e097ce39f1f6f13"],["/posts/51139400/index.html","2c3e8cf7e14bac3dd67d1ce396d97332"],["/posts/512c9a09/index.html","36ab2eb4fc14aea197bf6e3a3947a8c7"],["/posts/5205b330/index.html","811c482d4a22719b101978714ce94e3e"],["/posts/52d36cab/index.html","b4a561459764b2cd7c4f16d983bac933"],["/posts/532a083a/index.html","de8b8dd569429800867d330859479b9c"],["/posts/537d2c2a/index.html","3347a9edfd92ad71f18c8c45b50e676b"],["/posts/54383ba0/index.html","36d60a58a6a57d404b2da8f26db2bc71"],["/posts/54667693/index.html","728b248950815ebfe52dddb2e552fd9d"],["/posts/5508212c/index.html","4cf614ce78ba4f869e28eba8d92d0e51"],["/posts/571564e5/index.html","d8b47b8f8a7e18e105fd1b6428265040"],["/posts/57900fe5/index.html","af610c01228bb5b5f85b7711ca118a72"],["/posts/589a214a/index.html","acd8e389db7dca170e6c917e7611a410"],["/posts/599a2b19/index.html","2eba459549f2d485bc7900fd6ad9a0f6"],["/posts/59c05382/index.html","7e3d49c97fc9c998d70cf6cd1412d4c0"],["/posts/5a5294c8/index.html","b7da9c6363de16bef6424a78a4656586"],["/posts/5b8c69d5/index.html","f7cf6312358ccfcdedf499b3f28a3f0a"],["/posts/5d3da28e/index.html","7a39c6246d3e0059daa04ca8be16e463"],["/posts/5d3f50d1/index.html","c95415d808cbda6a8af9caa1d2fe1e6c"],["/posts/5ef7ef00/index.html","c4b5f13910697c9031ccef5b934dbc56"],["/posts/60b5dd06/index.html","7edd8ffbe186b4127da1338e2e759429"],["/posts/61477045/index.html","8528c75e4d572fad35aa60021a0d577f"],["/posts/69d79f93/index.html","fad8452db1b722de6a016f5d0ceb1b4b"],["/posts/6b2f046/index.html","e3be5ae8c353b14339636793a99edd93"],["/posts/6b4610c4/index.html","dc8b00cfd3e5e9f051a79fc77e236eac"],["/posts/6bbf03f0/index.html","4c22def1a9b9c03cd47309ed366cfb7f"],["/posts/7000d139/index.html","362db670da573e9740dbaa1c149fb3ff"],["/posts/72f94093/index.html","553f368564a57b980cfc40783d4a1a56"],["/posts/7380b71/index.html","109cb261308758140b6e07cf426571ac"],["/posts/738eee3b/index.html","044f963e8e533e0cb65cd1f0fa1b4ddf"],["/posts/73981dbc/index.html","f80727ab78076f7e36db5f46a75f47b6"],["/posts/74d60fd9/index.html","98161b87ce14a93817714858987fdb63"],["/posts/74f5d9a5/index.html","37fd25f885724ce79a2c0eef9051277a"],["/posts/750f2ce3/index.html","427ae58857435798bd75da606af87ebe"],["/posts/75ceb627/index.html","962bacc2e4d6e711de4a23fdb2d6b423"],["/posts/7725b75a/index.html","8f01f49305b704db43862cee3be7a4b5"],["/posts/79ef335/index.html","ffcaf914e353a01d7a57a78cc38f2a95"],["/posts/7bbd3149/index.html","faf02402897a2309005d829b0dbb1a6a"],["/posts/7c20e8d5/index.html","ed93b47d05b833acbdf33b06e737b39f"],["/posts/7d3ea75e/index.html","c2d13fcf0f132bfb67d161af00652819"],["/posts/7d43958e/index.html","0dee5776e369d158ce98d22933cc6bef"],["/posts/807ac7f2/index.html","5dfe1504334b7769d3964e33c3695f15"],["/posts/81738fa0/index.html","3a82f9ddf718c97825c655f7544cc2de"],["/posts/817c41b4/index.html","228bb6f4b4fe7923fe3db8c28fe76884"],["/posts/84ee8e34/index.html","dd38fab290e5f2a1179ace8f2cd9504b"],["/posts/8837602f/index.html","20038eb417ff8fd6171ea3cce4ba4b99"],["/posts/89589a03/index.html","5a95725c8c691484a0ff50fa399aa539"],["/posts/8bcef008/index.html","95391749ba4ea1a966b1de966e6ead80"],["/posts/8bf9abeb/index.html","f13afe7980b57515651f15430cae8dba"],["/posts/8e5f5686/index.html","dd59e843bdce581def0880ddeda7d8fd"],["/posts/8fa6b8c7/index.html","f5b06c3e68304a12a5d6a6f188e19f24"],["/posts/9029a3de/index.html","21b5e07e8d58d7e3f2632bb4162e8390"],["/posts/909d9a5d/index.html","89eb151057f534b4484dbbd32506b9b7"],["/posts/91404b94/index.html","af863ea586dbfbc1f98bd619e61f6b41"],["/posts/932e3747/index.html","9730c3ea25760cec4ebae9490202ee19"],["/posts/95fc9e6e/index.html","a612c2aabc6cc2377efb7d1ca001dfeb"],["/posts/98e67280/index.html","eecc49d93047136294596081c07aedf5"],["/posts/9a4d13ef/index.html","949f0c1d820fc1ee1a13d47e5e71ebfc"],["/posts/9afbb889/index.html","001e38ebe92086201c8054c80452669a"],["/posts/9be63ba/index.html","1f50f2d6159313b50583df2c42bd9ab5"],["/posts/9d967c90/index.html","7c13789e4698279d985cdf0e1acf00e6"],["/posts/9eadcdf6/index.html","7f8ecaaec7c0d8977b337aebcd7c982c"],["/posts/9f97db8f/index.html","1e37d7e7d07e2c703b0ae13dfedab234"],["/posts/9ffb4388/index.html","77c84f34e8d418e05edb6670953674ba"],["/posts/a094d027/index.html","e0663b9b7718c161fff8b24ba49f25c6"],["/posts/a27042c6/index.html","0b0cc87c8f1944de65a08ee18aef15df"],["/posts/a29cc732/index.html","cdb3d57105d42dc9533e05ec51cb4a92"],["/posts/a44a518/index.html","64ebf8fa8fef69e77659dbc220342ba0"],["/posts/a4f2a748/index.html","ee1da0ce1cb73f5a6d44bc21808db50e"],["/posts/a7dc32c9/index.html","f4568520879e235f43af214a8d9a3265"],["/posts/a7f753ec/index.html","27c5f54b36a8587b361f06ea33f47189"],["/posts/ab176793/index.html","fb8c5a4727863bcf0afeb8e0a96c2cb6"],["/posts/ab34095a/index.html","48066256f37ce9479988112301bcd512"],["/posts/ad47c4a5/index.html","ac739ec22f00531453ffd82255edf50c"],["/posts/ae8f7b74/index.html","aaf4eefbeafb9a6c6afc061051c42d11"],["/posts/af43816b/index.html","3db760bc4b24508d26b22073bc6e36bd"],["/posts/af9e049c/index.html","910a375e94d9d2861e4c206a638d1488"],["/posts/b0f1a367/index.html","c8cbbd4200146654cadbda5988e35391"],["/posts/b0f98e2c/index.html","3b99ff0ea84c2eb0bf8806083a5810a6"],["/posts/b33131fd/index.html","a3e9afc1e772e9cf857fb5ada327675b"],["/posts/b36eb520/index.html","b484ba081c2be3087a714fe6e84d5765"],["/posts/b542fc02/index.html","3ffe3ada28f7fc1b775332ee194a7d19"],["/posts/b54eeeb4/index.html","20162f04ed540d8d8451dc7c5c388136"],["/posts/b84f3f3c/index.html","b1805594a8450095bf90203c33b27aba"],["/posts/b94fc207/index.html","ec7eeff8e530c31ebc9d7be9326c1bdc"],["/posts/b981a6b4/index.html","0eef5061e0ee0203b654be2066445e61"],["/posts/bcea326a/index.html","d894ef251bcebc27d6fab503e45b002e"],["/posts/beb19e80/index.html","8f4177bf9ebd3c9b33a5582ac301cb05"],["/posts/bec490f8/index.html","62e49f7cefacdede673a55582425af02"],["/posts/bf7bde0e/index.html","0788b9d0269df199be82f9d2b29fd04d"],["/posts/c03f17c9/index.html","63dc4f77481be680a90eeb13c9324b08"],["/posts/c35bc572/index.html","af23cac59bd1d10dfa21f3496b0583f8"],["/posts/c436016b/index.html","0235f1bdbd455fbf7ead8d8c433de3e8"],["/posts/c4efc741/index.html","142488389e6f62c9d90bb58fb40013ff"],["/posts/c5e8a08e/index.html","6c95c2b7cd1b2c03aea35bcda309ade0"],["/posts/c7db1dc0/index.html","3893b571398a00d83e30b8680a996fb3"],["/posts/c7febeba/index.html","c0e50dd2dfe22f38f6251ccaa9676e6c"],["/posts/c9c3a06e/index.html","866655d31d1ac75dc06a1c43e3ba3cd1"],["/posts/cc6d2cf2/index.html","62dc58a323bf8138621f35ca1e07a2cb"],["/posts/ce48f291/index.html","d83b41aef7b3ec74e0227cca7d72a743"],["/posts/cf480faa/index.html","9f317f97b3bbaca1100b4fa7417e403c"],["/posts/d090b4d/index.html","71bbb5a79a28fa7a97867b4c073227bf"],["/posts/d1995044/index.html","77899248af1c1001d737a4a74a4117dc"],["/posts/d2d34977/index.html","709a782b78bf95d7fae7398c8906a5f5"],["/posts/d3647a92/index.html","bd75cf49a8a72d894387a8b0225884c5"],["/posts/d3f6b818/index.html","bd44638aa37b7b834a55b5a87e71afb0"],["/posts/d465029c/index.html","a2b195dccaa3d83c3ea90a213b33e845"],["/posts/d9884be2/index.html","d0bf57ebbbe2d5c46fef09c8db391d85"],["/posts/da40f433/index.html","01a36f930e95e07cadf2da19075ae1df"],["/posts/dae71d5f/index.html","fbe80112c080adc150205caed7863704"],["/posts/db9fbe47/index.html","702251e40e5f1a79f9c5e246d9ea27a1"],["/posts/dbba997d/index.html","9e5da06c83c135d410049069bf3820f0"],["/posts/dc94f8a1/index.html","b06d6f42a2d4e551dd3101f6cdf56fea"],["/posts/dfe9b67/index.html","a1b7ec190d5d0076f29287cb11370a55"],["/posts/e0387d80/index.html","3635574dfc9e3cfc5b0bc86b73f6eb69"],["/posts/e356f7b3/index.html","5959b2043d0d68fdc8332ffad09f63ba"],["/posts/e3acb366/index.html","11040c05f6c4fb5d4d86d49d6ef02eb5"],["/posts/e450354f/index.html","fb47da76f7bd94131ec83348c8ba88ba"],["/posts/e489223c/index.html","18b79f4d6e807a673fbf71fb5f003b3d"],["/posts/ea914c06/index.html","a8c6118ec7abaf4cf6f21402134008b9"],["/posts/eaa8f31e/index.html","1bad86cac4ca5527dbddcb4f0c35c079"],["/posts/eac19412/index.html","4ebac7cbaa67dd5516253b11148e38c7"],["/posts/edfc881f/index.html","389f5cf605a86c374e2c6b12739e4040"],["/posts/eec0bbd1/index.html","3566cf1034e31c6c0969bdb04ab8e410"],["/posts/ef22c7c2/index.html","412056a96550ab3582975173f9734bb7"],["/posts/ef271825/index.html","0bc30d377c9c7d9f74965baa6e61dd94"],["/posts/f209578c/index.html","25f0916f82df9c2894fab0b410f37b78"],["/posts/f3e9bea2/index.html","2f7171a43ae7523967be767a98761154"],["/posts/f67b7122/index.html","c3c64a2796446ba118a756d1cd530638"],["/posts/f7abba28/index.html","c354e4a34b7159c12be5d82456c64331"],["/posts/faffd764/index.html","68eebd86b5e2e123e65c17ea4fd149dd"],["/posts/fb684fb0/index.html","9594355daa2ccbc71810d64f148864ed"],["/posts/fc57199f/index.html","015cc7ddcc8f9a5dea3d1e58d7e08be6"],["/posts/fc6e9a7d/index.html","2c213ec9cf5069d96870ba97b7c644f3"],["/posts/fc7bc02a/index.html","33ccfbecb8fcf1786b2346b7308dc46e"],["/posts/fd67c5cb/index.html","9f696a4822cf7d1b1db26ed0d27d4a06"],["/posts/fdde061e/index.html","c9016051366a9169539e6aecce7c6cab"],["/tags/HTTP/index.html","cca5f4031a1896d40cf1fe108343e4cd"],["/tags/Hexo/index.html","3ff294117f686e4aa7bd3840e2aa2d22"],["/tags/Hexo常用命令/index.html","c3a89a8689325c151197fa79588a7a6d"],["/tags/Nodejs博客系统/index.html","12f2d29cdc5a284527ba36ac8082a09e"],["/tags/ajax/index.html","96a88784a65375bcd512278e6f621b8f"],["/tags/ajax/page/2/index.html","4c9eaf69a14c8c61ba9be4baaabc2cf0"],["/tags/curl/index.html","44211b6bcb7914294e0df187a3621368"],["/tags/index.html","a21632a9feae9b04fc06b4ed8c0cac95"],["/tags/json/index.html","04cea79ba680cc182241b0a43d13c002"],["/tags/mongodb/index.html","a3da7fe63e669831524f436721e96d9b"],["/tags/nodejs/index.html","dff9f94d64745ba3784b466634d36cf3"],["/tags/promise/index.html","b3eb5f0d290a9d3e6d1fc6b750a53571"],["/tags/中国近代史纲要/index.html","ac09821137c2e2d09004d03d1d43eaae"],["/tags/日语/index.html","60fd05dda884fce8187822c67d54bfd1"],["/tags/标签外挂/index.html","8d4f0dd92552b0c82ac63f39bd3e6edd"],["/tags/目录索引/index.html","b4fd6ac05435e06c0e34500767f8d905"],["/tags/管理经济学/index.html","1e719343828159dcd765c39a500b5926"],["/tags/考前突击/index.html","b1deb91589076597056e6651b09f1351"],["/tags/考前突击/page/2/index.html","943b44c415b87e7a140a64e9acefbe0a"],["/tags/自考/index.html","335fdf219f8e0282ecd985e3e49a296c"],["/tags/计算机网络原理/index.html","e16154f32d112ab363918a42c3e24918"],["/tags/运筹学/index.html","9df57e49e67cfa56bd67497e7c1effc0"],["/tags/马克思主义/index.html","f19a8ff8029ed2cd872492b1c96dca3b"]];
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




