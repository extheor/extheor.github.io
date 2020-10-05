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

var precacheConfig = [["/404.html","c9a852d1e5d43c443f28dbb12d2b5504"],["/about/index.html","9bcee5c151090a14bfed2a2083a701f1"],["/aplayers/index.html","00e59bafa9f198b63357f69cf03c2ac2"],["/archives/2020/02/index.html","d44b184831db0fc920ab18adbf260fe5"],["/archives/2020/02/page/2/index.html","5d4e456abbc113f3100c7c0fa95eef52"],["/archives/2020/02/page/3/index.html","730d9349d5c1b75dd4179b93104004da"],["/archives/2020/02/page/4/index.html","ccfcf1be516201dab097a25b4981d2ed"],["/archives/2020/03/index.html","721b4f7950a01353d53c68d22d380420"],["/archives/2020/03/page/2/index.html","84abcb01ef486360bebd8c4b83d19340"],["/archives/2020/03/page/3/index.html","24ffc055022d53fea22edbfec5632400"],["/archives/2020/03/page/4/index.html","56c4b8b806459986dac74f25ef649aef"],["/archives/2020/03/page/5/index.html","9ff84441784b7e72bdd0ab43e990eddb"],["/archives/2020/03/page/6/index.html","f389638fd3e4cf9f7f8f8a3e72d1e52f"],["/archives/2020/03/page/7/index.html","9a56cc9a587d348b4838bbc55122f335"],["/archives/2020/03/page/8/index.html","66e8712b700dbbaf6b930887a60dbfa1"],["/archives/2020/04/index.html","646c7c3a9c161df919734637d0a2fefb"],["/archives/2020/04/page/2/index.html","0abd5c0e23f89343c4de7b950f27802e"],["/archives/2020/04/page/3/index.html","281cb328c736e47f70f064090dd02ee0"],["/archives/2020/04/page/4/index.html","7d9f875cf25cd885cf4a951a3784b783"],["/archives/2020/05/index.html","33605d568e66a9e98f0ae2fc09d7cbc8"],["/archives/2020/07/index.html","485e7e3a8ea0a687de09a03e3cda6de6"],["/archives/2020/07/page/2/index.html","c28663c47030f8feece2af2934b54cf5"],["/archives/2020/08/index.html","118f0a98731645086d99788b8a4e6b92"],["/archives/2020/08/page/2/index.html","a907c98cf5a633c09002d902d168295d"],["/archives/2020/09/index.html","1f2ede2806a52d13e2723f86dea898fe"],["/archives/2020/09/page/2/index.html","d8fc9a3077a50da412e62ef96f282181"],["/archives/2020/09/page/3/index.html","899bbe32950f38d07f33bea6ee60d2d3"],["/archives/2020/10/index.html","db966a8a3d44c3fdf88fa56b57e63e0a"],["/archives/2020/index.html","57c16e2052698c45590e6b1aaf175f86"],["/archives/2020/page/10/index.html","afeb4c479d446b53769b8fd2ceb93fb7"],["/archives/2020/page/11/index.html","d4c17ae17c46b2a1a033f45774f6dec6"],["/archives/2020/page/12/index.html","51ce0a450698fe973c90b19b4995bb4e"],["/archives/2020/page/13/index.html","14bd77a6ab4ddb92f1ffb20f2f9921e1"],["/archives/2020/page/14/index.html","c54870641793ed91dd6c122ba4372f33"],["/archives/2020/page/15/index.html","9eb0b1a338e19d63023972a42585c9d2"],["/archives/2020/page/16/index.html","6246cd0778254f551cc8ddde9dc7a34d"],["/archives/2020/page/17/index.html","931aa91aa644c2316d22843b2483e95a"],["/archives/2020/page/18/index.html","cbdf69b6a966dd51712f7f5b6ebc454a"],["/archives/2020/page/19/index.html","ec8902642a46c6b8ddd7994feed5d3d0"],["/archives/2020/page/2/index.html","132ddd7c91258b4d5b096c3162ca68d4"],["/archives/2020/page/20/index.html","9d663a25203baf149beeb1d07877d2d7"],["/archives/2020/page/3/index.html","e77f854a5998d3aff3e73a0c57336453"],["/archives/2020/page/4/index.html","f7e2dd54be3da8f540ff208754e2fd17"],["/archives/2020/page/5/index.html","cc5ebd5a3d7fbd5775681e4ec15d219f"],["/archives/2020/page/6/index.html","c085cdb6902e23e0946ea61d54ba0ca1"],["/archives/2020/page/7/index.html","730b2a2271f5c2bd854fa6ff8b40fc82"],["/archives/2020/page/8/index.html","7d2bf50343e78795bc1b0e8c012b2d51"],["/archives/2020/page/9/index.html","44bd6287ef2a0ae9d1e7e3c8d08c2b4f"],["/archives/index.html","6eef6bce990ed68559d6c60087df028f"],["/archives/page/10/index.html","06a580ad8ca27a52c58f2a5f4b603f2f"],["/archives/page/11/index.html","f3f3c8bc4093b69774d51af865c88669"],["/archives/page/12/index.html","a2260b967957afb562115d428be9d48b"],["/archives/page/13/index.html","3272f1cef9acf7ebf8279f120d0ffb85"],["/archives/page/14/index.html","5495504f62d81395cd00156aae62ad42"],["/archives/page/15/index.html","eee65140cb76b42ae19c06c16e93f27e"],["/archives/page/16/index.html","283cb7313003a2afb7b5bcc6545fc99d"],["/archives/page/17/index.html","9219d27442cd0bd06eeb46e068d9cf2f"],["/archives/page/18/index.html","d2b5588830afd4b7d629fb95211d1fab"],["/archives/page/19/index.html","0a7d088ea3882dbea5a7e3bc67cf18ff"],["/archives/page/2/index.html","4862b2ba9510dbc25861753746793185"],["/archives/page/20/index.html","e73f7abb6c469d3fd9ba7b2b9e34d7df"],["/archives/page/3/index.html","ec6ef66b1c2c2bddb44bdacba50f665c"],["/archives/page/4/index.html","be8594ea2a9249850e9f0ba156ff9d06"],["/archives/page/5/index.html","71437ea55f68a14ecd5433cec924c109"],["/archives/page/6/index.html","9da9b3c2fe29ebf9a9b36736ca8205b8"],["/archives/page/7/index.html","0d535520c5ccb2fb2a03a67ac42f0739"],["/archives/page/8/index.html","7c591628ef0fba0a40da340d4ab6b71a"],["/archives/page/9/index.html","6dd04a8a22f93cc45e9feae10f4b8da2"],["/bangumis/index.html","924e5b3aa102ae4747ad89ed01779f08"],["/categories/Ajax/index.html","a1ed39810b06651912f450540c456744"],["/categories/Ajax/page/2/index.html","ddb5e8a0a95f72f5bf1a581fbdf2f369"],["/categories/HTTP/index.html","1291a81b1c2965ef354921076ffeaecd"],["/categories/Hexo/index.html","12526f4448b9d3df7eee2044db60bdf8"],["/categories/Hexo/标签外挂/index.html","c07ca9a28f902781e56f1b70af0613d0"],["/categories/Hexo常用命令/index.html","2edeba06b9d4df310807c6ab7ff86bda"],["/categories/JSON/index.html","b8a8c344ef5745dd13390ee445733b3a"],["/categories/MongoDB/index.html","d33adf79f24a1d67ebd1c5a953208113"],["/categories/Nodejs/index.html","1df1c265292193f31c6517cc34edb777"],["/categories/Nodejs博客系统/index.html","630e9643692d0e53264cef53f4962f6a"],["/categories/index.html","3014672951f9e9e7a31260eb6bb605a9"],["/categories/promise/index.html","6f557813700d4c14e79f2897e000d0bf"],["/categories/日语/index.html","f3d70c056f0fc317cffe69ec83c8e91f"],["/categories/自学考试/index.html","d11d90e53ffadb8213b2eb295cec750d"],["/categories/自学考试/page/2/index.html","9e0621ff367e06ca7110fae17d86e849"],["/categories/自学考试/中国近代史纲要/index.html","3f58fefc3b8556b5c473287358af1900"],["/categories/自学考试/管理经济学/index.html","76f31d303d2609766157fbb40a7b1677"],["/categories/自学考试/考前突击/index.html","d341bf2c7eee8bffa430c70427dac832"],["/categories/自学考试/考前突击/page/2/index.html","c8e053003becc21112b6625ca96fe3cf"],["/categories/自学考试/计算机网络原理/index.html","317caac353e50e32848b12b0e95ba9cc"],["/categories/自学考试/运筹学/index.html","3bde5b79286c0db8a33a083b04dc8166"],["/categories/自学考试/马克思主义/index.html","8ee5ece7fad8ec52dddb2f321069ac59"],["/css/index.css","02768e0f539a91b829374d4d7c70325e"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","04f1e1ad515554052904edca5b16e302"],["/js/calendar.js","4336f9d58a8e0eed18a395341703688f"],["/js/fireworks.js","fb89d0d04079fffcaef92f0033984567"],["/js/languages.js","edc0ec6b454f9dcbf2b1e967f5d4b771"],["/js/main.js","6982ad26b05be60ebe6799ae418e4c43"],["/js/search/algolia.js","6739a0bf84ecd8af6c7c0a9358ddfafc"],["/js/search/local-search.js","5b41a01c3d1db3024b0318d008272cc8"],["/js/third-party/ClickShowText.js","f66854e27a08e7c5ca9f2c479fdeff3f"],["/js/third-party/activate-power-mode.js","911c1917956b94eeb7a83c0747ba73dc"],["/js/third-party/canvas-nest.js","41f8f312423ab0de3ebce72c84bdc8db"],["/js/third-party/canvas-ribbon.js","1e2ceec82796abeb136789890fd21324"],["/js/third-party/click_heart.js","3822ab26483f0d27b48a9e090d360d1a"],["/js/third-party/fireworks.js","8ad5d796e461b063ae83a2d3b663a07a"],["/js/third-party/piao.js","61afde8ebbdca49f96916124bf329d0d"],["/js/tw_cn.js","31643aef7152b776085e9e9190388dc4"],["/js/utils.js","582f6b4c5d0d1ff7d5f6c994855bd11d"],["/links/index.html","53b7e00506a570647a8be372071417c9"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","13400b3929f3e67d0f1ba22b45f27064"],["/page/3/index.html","b484192f283f011413c89f238d759280"],["/page/4/index.html","0d6541ddeae1ae15cf0a3bc28ee42115"],["/page/5/index.html","cdd3eb992cc376ec3630272385ffbb8f"],["/page/6/index.html","f7c5d5ef935084f26c0413dcdbd0105a"],["/plays/fluid/LDR_LLL1_0.png","65b063168317bdd54a8c18e0ff0096bc"],["/plays/fluid/dat.gui.min.js","b87024acb876bb767a7c27a5747d015d"],["/plays/fluid/index.html","ad96278b19975b503ae56b8018e4a1df"],["/plays/fluid/script.js","05d850c6db55e5092f36690f9311a285"],["/plays/mikutap/css/mikutap.css","325c78697c87a3f62edd09be21ec5903"],["/plays/mikutap/index.html","fb2263f57f7816f72709dd2abb5d8f23"],["/plays/mikutap/js/mikutap.min.js","110ad1060ee41e6f41f7f6232337fd4e"],["/plays/mikutap/shared/js/common-2.min.js","43e49a61141c64bcf8d7981f7a6a26f5"],["/plays/mikutap/shared/sp/css/common.css","da9b00bf3729866428f53b69ee9da8ed"],["/posts/10812f0/index.html","f735e7026dd8d604f45f589ed969b13c"],["/posts/126b275/index.html","f02d21b792c18d73e8317eb785793913"],["/posts/12d95a5e/index.html","dec97405b75734d63fc599d8abd8edf1"],["/posts/1367417b/index.html","e6a80d86125d2952e4044031cc81cc56"],["/posts/13886e3f/index.html","3105691f32ba872cec891ec54f661bd3"],["/posts/145193a5/index.html","edf05c7d4656caacc07d0e5be56e6362"],["/posts/149dde25/index.html","bf851fdf8113270915070d873c6cd278"],["/posts/152fa65b/index.html","56b5d22e4c72bdf82a0c63f1b37b9a17"],["/posts/169e7dda/index.html","ffca1e74c729374121af4b4fc1c3e922"],["/posts/1875100e/index.html","f246afd69e30da9063c59d5652bf6624"],["/posts/18eaef7d/index.html","43d27372c1bc8a3bc3611f402f09d04a"],["/posts/1a0bc7b7/index.html","91281b89018e81614ed1b5be393d7612"],["/posts/1a20a057/index.html","49416297ca99af8ff5742558bf769dfa"],["/posts/1a998be6/index.html","1f79f1a51184f055048ade7f5ff61af2"],["/posts/1bffbd20/index.html","3e2ebc82fdd8ce183449e366ebcee18f"],["/posts/1c5a0485/index.html","f98c3812fec14a47b3d2df2b745bf92a"],["/posts/1e638f78/index.html","f5358e4f16d1248ec848315b02d6fa80"],["/posts/1fb53120/index.html","3973b3386d3636a38552217952f771ef"],["/posts/21466e86/index.html","c893740d9ea9044fe01013fa0aaa7687"],["/posts/21abcf1a/index.html","d15e2c432ffb7be289887ad5d23fc950"],["/posts/21c250b1/index.html","63fbf8d3bd146d825f871becb4e1e2bd"],["/posts/2287cc/index.html","f4f69c07cb959367e5504092dcb41480"],["/posts/236bfea3/index.html","f06b28e7261b6e1ebaa33a3317e6c4b3"],["/posts/24caea6b/index.html","1550052445f8612fb83fc2a20b0a2245"],["/posts/25d45c3d/index.html","ba29a9fb72829a9e96cbad1211d83730"],["/posts/262baa9f/index.html","3c9698d5b3094eb12c5cb695a12da078"],["/posts/27cdc142/index.html","cb55736ecf9fa76532bf7dfb1dfbb84c"],["/posts/2895c4bb/index.html","d00d89f6637974d3cf8df0489879edd5"],["/posts/28987ff3/index.html","4a6dd3b5440fef4f2b09bcd232bb035a"],["/posts/29f0df96/index.html","ff2ace22244515cca6e99d4b563efbf5"],["/posts/2a1d2b6f/index.html","026fa25b2720473d031e2c78a71b3a11"],["/posts/2a386047/index.html","dd3ba6169b83bb98b1995af6fddb1905"],["/posts/2b770baf/index.html","e28c1853922e1402d374585334af9b0b"],["/posts/2cda4a8/index.html","8ec6f6a6f740fd7ae6ae3c3d603409cb"],["/posts/2d020832/index.html","ace26958c851b8357656e99d14e9fec5"],["/posts/2d6d3bd/index.html","f54f03b661c17c118409afb3caf81c8e"],["/posts/2e0c129d/index.html","9ca4dfae9986da8689dbed0d84356baf"],["/posts/2e7563a0/index.html","b5e0eb62df8671902d56f05d22ea587d"],["/posts/2e7b8d69/index.html","525f2d7b96555e20cfa594f6248391d0"],["/posts/2f28d14b/index.html","b74db7af1f5118e270ff0d03f59e9702"],["/posts/2f6e1383/index.html","9e8cd9948ef0a61b491dd1ed82f4f752"],["/posts/30bfd1cf/index.html","84cd31f50bc279bf2fe80d25013271fe"],["/posts/33235106/index.html","6ad07763996f09d2f86b9cfc4d579693"],["/posts/344e951f/index.html","8d6a1e0b958b964cbff665a10698a69f"],["/posts/35e2bcf6/index.html","43e1d69e33eb3c7b40469f63722ebf83"],["/posts/365e96c5/index.html","9f992c138a0db5977cc8b65e10c63a85"],["/posts/36e331e3/index.html","f2b36655acf683f86e1b264b7e6bf3b6"],["/posts/372df90a/index.html","c753c2ce2ba011cb9ca6b452a2a0d118"],["/posts/37c547df/index.html","e6c38a652a0477f3b47178f113506c56"],["/posts/38a88481/index.html","5315b030d0df868896c0d4e45b0439dd"],["/posts/3914bfed/index.html","61f27f06017db43648386fd936780302"],["/posts/3b56780c/index.html","a21c5d229f8e408379b05af09cbd9b85"],["/posts/3e4bb613/index.html","b6c7c21216a17127c0edb48d093789ce"],["/posts/3f2e933/index.html","06344a2e2a508475603e87bd00bc30f7"],["/posts/3f6e5f9e/index.html","5df3934614c31e68df968ba1ac318b53"],["/posts/4349a589/index.html","3a212265f1b86416d2c49b66047e44bd"],["/posts/44246190/index.html","15f07b5fdbbf5ca7c278ca68888f383e"],["/posts/456550f/index.html","ced6ecc0c2ad8eb9744302e0793fd373"],["/posts/470ac03d/index.html","570c4de2358fbc05f0b3403c9f0b0458"],["/posts/49249ac9/index.html","a6c66e02475a08527de812fd9c7c2457"],["/posts/49f2d2a/index.html","53b67b166d687293d6b97c8f31d6c276"],["/posts/4e6d4eb4/index.html","fad6342ae17a7ccde3d59fb7a160aef7"],["/posts/50caf1d4/index.html","bab6f8e9638b146049157c62a3e70a3b"],["/posts/51139400/index.html","f5b6f117170a586c069860f5f8078bc0"],["/posts/512c9a09/index.html","53f0b0638ce62388396bfb3c87a2f7c4"],["/posts/5205b330/index.html","1896ba6fffca5f5ebe303312f5661139"],["/posts/52d36cab/index.html","8798ca143388fb196426c21e58eddb8f"],["/posts/532a083a/index.html","4ba248d97e7960bbb5112f958579880a"],["/posts/537d2c2a/index.html","b4440f59e73826b04a7db009268b7a96"],["/posts/54383ba0/index.html","89754a95dc2aba50b5ba70358d5b2f05"],["/posts/54667693/index.html","a50d8fa4bf437b513437950c9273848b"],["/posts/5508212c/index.html","e3d57f7fa8cdcc4471b11fc33c9587f9"],["/posts/571564e5/index.html","83cdad4e1fbf032d25e576d0a931dce3"],["/posts/57900fe5/index.html","001b5bc25eaa9a10a508f4abf16c1dcd"],["/posts/589a214a/index.html","0d2a2f4a160808c039bf25076e7a691d"],["/posts/599a2b19/index.html","3bb9508e07bfab52ec9c0c3f352c8a82"],["/posts/59c05382/index.html","257ea60d36008371123d575b98842373"],["/posts/5a5294c8/index.html","75106f4ffb6c769281ee3fdfd3b975c8"],["/posts/5b8c69d5/index.html","683b32fa3db22ad0c719ff2a035eca25"],["/posts/5d3da28e/index.html","14eeeec542c77859e8dab6b29aa93ff3"],["/posts/5d3f50d1/index.html","929415d400acee0009e9f9a9dda606a9"],["/posts/5ef7ef00/index.html","ec7e5e48d59fc366074219480022280e"],["/posts/60b5dd06/index.html","d435f1b50415d2cfbdc78a0e6bbc3807"],["/posts/61477045/index.html","21e26c3298ce7b8cde26daa0bc36ac38"],["/posts/69d79f93/index.html","db2623b84401e05fe283e8617c565296"],["/posts/6b2f046/index.html","de01e106658788b3b1b148948e54e8eb"],["/posts/6b4610c4/index.html","ddf27349723fe6cb60df35d8565dc114"],["/posts/6bbf03f0/index.html","c674f6f99a596054bffe00dde752a1d0"],["/posts/7000d139/index.html","8ec44fa7fb3cb6226e5bb2453a0b9784"],["/posts/72f94093/index.html","669cbc561b8bcaf2f93023c4b5079ec9"],["/posts/7380b71/index.html","0f77c8b78c803149c709ba14fe810a7b"],["/posts/738eee3b/index.html","d46d6cdee1eace4a9ee15a7cbb584c9c"],["/posts/73981dbc/index.html","75055fd5dc07a4c859dd5286259310ac"],["/posts/74d60fd9/index.html","4075dbfc51d677fe3ffa954e6c468841"],["/posts/74f5d9a5/index.html","87e40f13b0500fb74a3f2ca08810ee29"],["/posts/750f2ce3/index.html","d5a49d7f161cf2b835c9e25d1435ae50"],["/posts/75ceb627/index.html","efbfd71f75f7581ad441af5cfa60b2a7"],["/posts/7725b75a/index.html","f27726190f7df45202d9d4c9363ee458"],["/posts/79ef335/index.html","3b953573cecc01d52eb1466d3805888a"],["/posts/7bbd3149/index.html","04c59ec02be885f31e4ae5648afad8d1"],["/posts/7c20e8d5/index.html","8f36f9d731bad89802ae66e61ce23aad"],["/posts/7d3ea75e/index.html","60871b718efade59bed2fb1e41a1981c"],["/posts/7d43958e/index.html","392800965c557ba611400488e9dfa5d3"],["/posts/807ac7f2/index.html","dd704942dc5d66ef8a8e8d19c1163425"],["/posts/81738fa0/index.html","99e56d27800685b7eacd480d353fc3e6"],["/posts/817c41b4/index.html","9e579ea0fa7b49fd050b003973eb8f9e"],["/posts/84ee8e34/index.html","7a1ad710b60f0912992b5afaed1fa999"],["/posts/86f3f130/index.html","e44b9e798e564d9776658af1895e5e41"],["/posts/8837602f/index.html","467b8f43134ba38734bb29fe34615ebe"],["/posts/89589a03/index.html","6c565e49b87463e14091a4a6824f28e0"],["/posts/8bcef008/index.html","f13578896c6a1e91078f962918c128e3"],["/posts/8bf9abeb/index.html","3e56eff1be8bd40919e615070b28d013"],["/posts/8e5f5686/index.html","36def4fb3181bdd2a986244838247ff3"],["/posts/8fa6b8c7/index.html","7ed61043e865c6b501454cad8771036b"],["/posts/9029a3de/index.html","c7faee349852d955d4eb1d02660517c0"],["/posts/909d9a5d/index.html","55f9eda3249986eaf0e05a4c44f5586e"],["/posts/91404b94/index.html","278d8c5ec42c5583a7cc3e93d7768910"],["/posts/932e3747/index.html","6947cff4b971bda652c4556fbcd42d32"],["/posts/98e67280/index.html","0522e39eaf4590fd9e1dc87a2c1abaa8"],["/posts/9a4d13ef/index.html","b9e55e0b3214dfcd2d8ca6f6e3079d99"],["/posts/9afbb889/index.html","254d2fc31abf9f6ff032b50c163a8273"],["/posts/9be63ba/index.html","17e07dfadb4fba9ff6a448a4bcd98bc5"],["/posts/9d967c90/index.html","2ec76c3b39110ffcee2e62c750c1d149"],["/posts/9eadcdf6/index.html","cd4446643882f4f49f0f1db647aaa363"],["/posts/9f97db8f/index.html","2025e673930e91b73b380b222a5f22d0"],["/posts/9ffb4388/index.html","3c676b9405696de698e592403512ad34"],["/posts/a094d027/index.html","dfba6b6641140f11cfabdc67a013c0f2"],["/posts/a27042c6/index.html","11b0a3edd43af95fad93a25575aca232"],["/posts/a29cc732/index.html","b4278a3075783a43d1be46fed9692de1"],["/posts/a44a518/index.html","c7ca53c03b9e7949df32859e3a07d665"],["/posts/a4f2a748/index.html","1d28f59da983431eac6a481abcfdec8e"],["/posts/a7dc32c9/index.html","06721676c436c1cb0fc83dfd004254b4"],["/posts/a7f753ec/index.html","ad2be4c8166bf3e41d2f2d51e419804a"],["/posts/ab176793/index.html","c55511144fe0dd9bd8520c9b817542b1"],["/posts/ab34095a/index.html","d176cdd5d3e9e27d49a6f40d69f3b723"],["/posts/ad47c4a5/index.html","7678c633e44cd7a1bb57dd14c0cb33b8"],["/posts/adb93761/index.html","01dc688684c4ab7d39bc1744a0477e12"],["/posts/ae8f7b74/index.html","ac590e01fdf63dcdeb5ec0f43ce5a08f"],["/posts/af9e049c/index.html","c188c951728cf8ae62eb25f28a188a8c"],["/posts/b0f1a367/index.html","e581d1cb6e982b0aab0f91dea5b4f3b3"],["/posts/b0f98e2c/index.html","30dbed0a9a46326ecdc5f186b8650673"],["/posts/b33131fd/index.html","4a3f7ff5dd39df385cc44ed553cf35e1"],["/posts/b36eb520/index.html","5b534041f18711d0570caa3a2bd6960a"],["/posts/b542fc02/index.html","72524a694a895927737412522aea8ed3"],["/posts/b54eeeb4/index.html","cf83bb30fd4a62145c082d398a8dd67d"],["/posts/b84f3f3c/index.html","dfefd4dbbccdeb319d072dae4257df08"],["/posts/b94fc207/index.html","b7b10ad661ef8cad5a9452dd7d17277f"],["/posts/b981a6b4/index.html","d2ab30b150932123e9059343db2ba5ce"],["/posts/bcea326a/index.html","8fc0760fccc2e0dcff2fe11b2cf5a8fb"],["/posts/beb19e80/index.html","56e3ec46844a3246822181e022644e01"],["/posts/bec490f8/index.html","6fb0f82d4edc1e80505e72a4edc5ee36"],["/posts/bf7bde0e/index.html","2b8a7113c5e1d39ad9cc370e0b56f26d"],["/posts/c03f17c9/index.html","3b1c7cf9a2d96abaafb7e3762db1f953"],["/posts/c35bc572/index.html","ecce20409dcca502a595703b10f5e627"],["/posts/c436016b/index.html","4c7289fc10f75b79715e548066183b0f"],["/posts/c4efc741/index.html","df9b17af0f36ba1769a73a2c1f8896fe"],["/posts/c5e8a08e/index.html","0885588126f042d654e70c05ce6499e3"],["/posts/c7db1dc0/index.html","e8b13a0fd6a242541caa39277a931ce3"],["/posts/c7febeba/index.html","ab93e0a6dae1168e406a2302c4e82a6f"],["/posts/c9c3a06e/index.html","19cc48eb9c8ca54e78ee916635fe8402"],["/posts/cc6d2cf2/index.html","c2d52911da10d597775917a3a20a8277"],["/posts/ce48f291/index.html","712597fc379d3a05a038c2e887c0f64f"],["/posts/cf480faa/index.html","45b308d02d134246d529ebf348f0482a"],["/posts/d090b4d/index.html","d434e3132fad8ef54ecad6ad5d78eac5"],["/posts/d1995044/index.html","860fa9e7d14571aeb7c62e867b888288"],["/posts/d2d34977/index.html","97c13ee2d8459cb6d33c2ef0895b3c85"],["/posts/d3647a92/index.html","fa4e45f0247bde6a352b01bb51f8d379"],["/posts/d3f6b818/index.html","955ef2cdb531db7e98dd1531b6e1369a"],["/posts/d465029c/index.html","2b993261085991c5348d2b4268024918"],["/posts/d9884be2/index.html","16ea3950db9cfb1f3eefc280c8dfb180"],["/posts/da40f433/index.html","a2a0d190e845c7e4ec2dae61a4549cf5"],["/posts/dae71d5f/index.html","726e3b6ddb2563b1fa2f8f4329fce49d"],["/posts/db9fbe47/index.html","e95b03b1d156a0d82785142dad0f5212"],["/posts/dbba997d/index.html","7f54bfbb9233dbb178d8c596ff64a089"],["/posts/dc94f8a1/index.html","61bec86b1b67a0ea69b95b60fb844b4c"],["/posts/dfe9b67/index.html","e202239663b6e0c750617f6b072a1ae4"],["/posts/e0387d80/index.html","0d1118680ae1af078e15b74c847168bb"],["/posts/e356f7b3/index.html","09135ab5f623d73bd73dd297e6d6275f"],["/posts/e3acb366/index.html","0b7bd416664bd4b56266cde6099c5a1a"],["/posts/e450354f/index.html","4884deb846947a66e887a0ad1a194f71"],["/posts/e489223c/index.html","ef671c8cda486e433c5f5a6ef0347ff1"],["/posts/ea914c06/index.html","86403784d6ce09afb4ffdbe76e1b328a"],["/posts/eaa8f31e/index.html","68c994f6d602f6885670e409d5425337"],["/posts/eac19412/index.html","d3e40da109acfd6a92f266db9f3ac97d"],["/posts/edfc881f/index.html","69b0e5dde21d3fda064d05564a18e498"],["/posts/eec0bbd1/index.html","3b2e3596a83c71ecee664b8021e1c088"],["/posts/ef22c7c2/index.html","5a2a1fc8f642d904f4064d7fdaed570f"],["/posts/ef271825/index.html","9bcc99ddeb6d313dfa0313c1b5bbecd2"],["/posts/f209578c/index.html","7a75bddf8b658a65ff112127d3c043ca"],["/posts/f3e9bea2/index.html","30ac431def5b3f8491ebae0af802f677"],["/posts/f67b7122/index.html","36f3fa900fdd65269950c38a12c98f72"],["/posts/f7abba28/index.html","1b02ebfde119b21f40e92daf34a24089"],["/posts/faffd764/index.html","b8f2664884536bc9b23ac6db9ae30c18"],["/posts/fb684fb0/index.html","423e6bf45568a4326e128ca6077c1ccf"],["/posts/fc57199f/index.html","9688046b4e14221ab29ebcc8e0e82ddb"],["/posts/fc6e9a7d/index.html","7b366435b1b461859db6c95f4e4288da"],["/posts/fc7bc02a/index.html","ba9cab67e8aa7dd5cc80c799b55ead87"],["/posts/fd67c5cb/index.html","8a6fb46ccd0a5c1e00217ed7a2797c5a"],["/posts/fdde061e/index.html","7e0763e95989c471ba067a02c3b707e0"],["/tags/HTTP/index.html","afaf9e4878edc672fbdd49fd36218664"],["/tags/Hexo/index.html","17004c8ee9da4e02b2caa904c64d8cb9"],["/tags/Hexo常用命令/index.html","7cc220edff706d5754ffdf0f4253e883"],["/tags/Nodejs博客系统/index.html","0a1c3cdd9274f48bbe0b2f1020cd6272"],["/tags/ajax/index.html","37f550e70d6b7b00f7a4476a63794696"],["/tags/ajax/page/2/index.html","25baff42a87bd393f012bfa106a34da8"],["/tags/curl/index.html","524cefc67cac223718107784dddc42ee"],["/tags/index.html","6dbc474bd32762aee2524096d8fde0bf"],["/tags/json/index.html","0b93e7af90b76c1e3ec5d141996cdb6b"],["/tags/mongodb/index.html","3f573d00d57f958c696642e327552192"],["/tags/nodejs/index.html","a492478283fa79f4e8fa3f65e371b3b2"],["/tags/promise/index.html","8a5cafd189425dbb08c8f1996871de18"],["/tags/中国近代史纲要/index.html","b3ceadec9832b7b0967cb742239bd697"],["/tags/日语/index.html","a8135269bc6344eb47e610174091036c"],["/tags/标签外挂/index.html","6235ff876dea7b2a11656219a56425e9"],["/tags/目录索引/index.html","8ae0ada6262494dd020a72f17f7457b3"],["/tags/管理经济学/index.html","04587ae6b392b62eba057e3d94410a25"],["/tags/考前突击/index.html","edd8aababc3e2f763a58527bfdb4b1f0"],["/tags/考前突击/page/2/index.html","a2f748da2712d2a50e2d10bd932dd762"],["/tags/自考/index.html","4d7fd6b08abaf3b896346d383eda31f0"],["/tags/计算机网络原理/index.html","ac5b6e13915312a6021bc908bdc29347"],["/tags/运筹学/index.html","30e71d24db0e914647450c2c3b747e40"],["/tags/马克思主义/index.html","1bb2490eae95afb9aee89f3797528211"]];
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




