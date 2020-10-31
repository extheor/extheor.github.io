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

var precacheConfig = [["/404.html","daa682671e5260a382285ee65146730c"],["/about/index.html","32f1ab64ac51589ce1093a9225a2dc67"],["/aplayers/index.html","3340fc9a4f102b6417b6c43442abd1d0"],["/archives/2020/02/index.html","05db7e8c996cfc6d693ce032e5955034"],["/archives/2020/02/page/2/index.html","3242cdc0189ad7fafabbecb7cf52e9e3"],["/archives/2020/02/page/3/index.html","35c55b7b082f4184a9bdab43717c785f"],["/archives/2020/02/page/4/index.html","c5f10371181633b735aae0605fe9c494"],["/archives/2020/03/index.html","43489d01756929c293f55ffcd7402771"],["/archives/2020/03/page/2/index.html","fc4bb3c87dac6d48b74e04ed18e02cb4"],["/archives/2020/03/page/3/index.html","9bd5e63bf8a80b3253a6dfcba1b53ed7"],["/archives/2020/03/page/4/index.html","8f89c3bde266db947bab57448c3cd0a6"],["/archives/2020/03/page/5/index.html","69c78677f6040b40201f051fa74e0c65"],["/archives/2020/03/page/6/index.html","3302a9886621e46f426a7e1d300bca72"],["/archives/2020/03/page/7/index.html","34c12f0ffe9b7277722d91b3d7473648"],["/archives/2020/03/page/8/index.html","ca269adccaebb6a933768f03e0e813f3"],["/archives/2020/04/index.html","ff257c916f2c80e6c14139b0a31add9a"],["/archives/2020/04/page/2/index.html","d0a7aae13eecf22886927df05aac2f2e"],["/archives/2020/04/page/3/index.html","e24c745a67c8ed045ca166f8664d7341"],["/archives/2020/04/page/4/index.html","3a7e717b0bc501bb6857cf0faaa34b36"],["/archives/2020/05/index.html","daa695fcfd1f92f922dffcceea8fcc6e"],["/archives/2020/07/index.html","7f58fe6685a569cfe6b2d83a174cd474"],["/archives/2020/07/page/2/index.html","65c5fbf784e2960635461e769bf4c489"],["/archives/2020/08/index.html","166b08450fb48945ad3ca6774cde5af4"],["/archives/2020/08/page/2/index.html","606c5ca443e2a9cfdc302fd77a452480"],["/archives/2020/09/index.html","f94b43fba9d9ff0dfacadaf89562113d"],["/archives/2020/09/page/2/index.html","2b746fce1868f551482a7a4d096589a8"],["/archives/2020/09/page/3/index.html","6f0a183d5dffe4259996032b07c88be1"],["/archives/2020/10/index.html","9a59a1a99573efa6bd6c1755becc023b"],["/archives/2020/10/page/2/index.html","0c826d517f6772e75e17d9ad4fd76fb5"],["/archives/2020/index.html","2a8844204a4bc6d867dfb6c3a36012ca"],["/archives/2020/page/10/index.html","29b4db05e7001c82f943f02c4fd0943e"],["/archives/2020/page/11/index.html","f438c284a23f8aa7ac54b764be3e01fa"],["/archives/2020/page/12/index.html","1191852bf422f3c4ded645cd74635015"],["/archives/2020/page/13/index.html","9735d910d2d404169b7269380e8e9fa6"],["/archives/2020/page/14/index.html","23cc11e1da38a8359ae4a92f9334fbab"],["/archives/2020/page/15/index.html","de59bbc1af274b21c61ecd427dfa8a4f"],["/archives/2020/page/16/index.html","92240d68fcdfc60b44d09605dead4191"],["/archives/2020/page/17/index.html","8eec4bfee43a2edec440f8f136e003bb"],["/archives/2020/page/18/index.html","83806aa27e6b3c824a0e57ddbaa64a8b"],["/archives/2020/page/19/index.html","b9f1cba4b1d54457c99ad672f6d6acb1"],["/archives/2020/page/2/index.html","7b5634cc2eb7d5a4fa862a22e1e27f60"],["/archives/2020/page/20/index.html","325c8e45e927c9491199a55dfb5cffb0"],["/archives/2020/page/21/index.html","abeeec40f8397bef4a715ed1e7d3c10b"],["/archives/2020/page/22/index.html","0ce3c3398426ac990ae85663e6807e1d"],["/archives/2020/page/3/index.html","aba94fadfca720a3dbec3ce9f63db08d"],["/archives/2020/page/4/index.html","5bb34d2098f8e8d8c15972cb65b3659a"],["/archives/2020/page/5/index.html","58904e52172345c9b8c0eaf8607f6407"],["/archives/2020/page/6/index.html","8e54191db4bbee210b8ad76fdcf03003"],["/archives/2020/page/7/index.html","d9ddd84c22a52fd7ae94ef73c098815e"],["/archives/2020/page/8/index.html","e10547c5baa6495c653e237f53a41eeb"],["/archives/2020/page/9/index.html","2ace2e90818528fff68fae544c67f1ad"],["/archives/index.html","d28b1de47c810177956ea4231e09bca5"],["/archives/page/10/index.html","d8267fca164702668431e0b618533647"],["/archives/page/11/index.html","66b2c03a426b9237b9956f3858a14a6a"],["/archives/page/12/index.html","333781bb71d1f7d759e42bcf89b71cbe"],["/archives/page/13/index.html","d66406834ebcb7921be4a6a03de15352"],["/archives/page/14/index.html","8ae46769f19f488f08ecdb13e59a0163"],["/archives/page/15/index.html","746ff71775fe7f683bca7ccc27eb09bd"],["/archives/page/16/index.html","8272f552cfe93eae1d471b439abcfc58"],["/archives/page/17/index.html","8690dc430ca8d71d0c997e63469f8ffc"],["/archives/page/18/index.html","6870b49cad0cc6a9ec3302aaee38c39c"],["/archives/page/19/index.html","293aa7e1a1f3cca7d307b64d88b1cbda"],["/archives/page/2/index.html","ad108b6c6d9062bf5202fff31d0ea4d1"],["/archives/page/20/index.html","219df7048489083da4846f734509cd80"],["/archives/page/21/index.html","f08066dd9f25bf2071d09e2006acb1b1"],["/archives/page/22/index.html","a45b2fffe349c483a7789bc7ed47b55e"],["/archives/page/3/index.html","918923a10e61b7facfcaac11c5b93f30"],["/archives/page/4/index.html","6db9faab5ecf01f7cdbdb13032f7bfec"],["/archives/page/5/index.html","954ae243797c61fa003c268e62c10c70"],["/archives/page/6/index.html","e4d91d6ceffc09939ee8ab0173f5a44b"],["/archives/page/7/index.html","f347b985e6836c8622336c6c591c8310"],["/archives/page/8/index.html","ee99b8c25cb64bba6eba913128492096"],["/archives/page/9/index.html","44aa648d6225049f984122b0af2c885a"],["/baidu_verify_code-DtGRV5OBxw.html","8688526741f4b57205fa1c6c45d2920e"],["/bangumis/index.html","1afab3c9d6c4717bf295bf9228724683"],["/categories/Ajax/index.html","85d83c3ca04e414a6d86c63c7281a34a"],["/categories/Ajax/page/2/index.html","ec96b9f3d9c17613d959d18e95fe74ba"],["/categories/ES6/index.html","cea9b762405473cc7ad8d0702f89751f"],["/categories/ES6/page/2/index.html","c95d47c20b0fe40f54558e4cee043f29"],["/categories/FL/index.html","e590fb935a92f5f3b0750b3fd69d1b73"],["/categories/HTTP/index.html","83e574d7d1fee4e7da9828a95cdf3ee9"],["/categories/Hexo/index.html","121a4df4b736b5a654152d4d53e5f245"],["/categories/Hexo/标签外挂/index.html","bb08567ea9a51b494cb65b0ac7fe6ae9"],["/categories/Hexo常用命令/index.html","b35cbdc994312ed953c3d720e2b60488"],["/categories/JSON/index.html","f38c495233c294ae379a6c618f8856e9"],["/categories/MongoDB/index.html","d44b443fefd4c4ac314e5a15e10cb810"],["/categories/Nodejs/index.html","6557457755b3220099950c09dece1e52"],["/categories/Nodejs博客实战/index.html","e07c2b6f9ec75d663a06e5c37badd9b5"],["/categories/index.html","d3101670970012c1ea58080ee73ad490"],["/categories/promise/index.html","2873a6a7daff44acac570899ab8d82b3"],["/categories/日语/index.html","20746e6339caf037e51529cb68d559c4"],["/categories/自学考试/index.html","9289398e30a5b4ba0bd0d3a8c3605d6f"],["/categories/自学考试/page/2/index.html","d0f16378e02722daff736d508e1ed875"],["/categories/自学考试/中国近代史纲要/index.html","2b8fffb8549ff194973f26104a50131a"],["/categories/自学考试/管理经济学/index.html","4ec0f2c925ef4d00cd1dfbafaea7730b"],["/categories/自学考试/考前突击/index.html","104bdbacc22b04845e8c64fc774e4c67"],["/categories/自学考试/考前突击/page/2/index.html","6085fbb97b0e5cad6d43ad414d70cf54"],["/categories/自学考试/计算机网络原理/index.html","7d9e8907b87b9c97ea02d5df5a0d3fc1"],["/categories/自学考试/运筹学/index.html","7581c50cc8af3b6cf4ad84decc013c20"],["/categories/自学考试/马克思主义/index.html","c4e6197baa074df7f4c32cba052f19cc"],["/css/index.css","c4ec84a6c789a35e4011d326dea05f29"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/avatar.png","c1c9c029184b6d2c6e1424332cae157e"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","c207cf1f874e9a07fee855439a136a39"],["/js/calendar.js","ab505a87db5ff94b84015e8109248e97"],["/js/fireworks.js","812970bf2c6a341762d5d3d831f9bf9b"],["/js/languages.js","d1c295e6a6b4aa759ebc59da79641bf1"],["/js/main.js","166cff8cf693810c7d6b5f9ccace42f6"],["/js/search/algolia.js","c9af02da2fc1f7d634843f61536369d1"],["/js/search/local-search.js","c33665b06edc70004a016ba9db4205b4"],["/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["/js/third-party/canvas-ribbon.js","4ca518354a167db9fe0869c0982ff215"],["/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["/js/third-party/piao.js","5c8c9ff4bb9bed49e333387a54eae9be"],["/js/tw_cn.js","cdd48d9e77b0c7c0f15cafecdd7ca97e"],["/js/utils.js","2b6654e8b462dd647ba1b124a6ac7ab2"],["/links/index.html","204579f18ebadc028299ffc4644fdfdc"],["/live2dw/assets/moc/z16.1024/texture_00.png","0a1969e9c0d0f1509604bb2b19de0783"],["/live2dw/assets/moc/z16.256/texture_00.png","b925d20a4fdfe8a65b09199a1224e581"],["/live2dw/assets/moc/z16.512/texture_00.png","96f5efb6dd9e3c69de8424b142214452"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/page/2/index.html","967d94db9f4bac8a3a072a9fc37afdff"],["/page/3/index.html","5cc837d313bd588f65a5c73cb2008ba8"],["/page/4/index.html","77fe28a326120816bcbb8c0cc9290992"],["/page/5/index.html","a4e5aa88f1fd8e27e75940b27629ad48"],["/page/6/index.html","8950b4bfad055dad1113fd7e37a46165"],["/page/7/index.html","43644d0fab23ff16968f87eba377c409"],["/page/8/index.html","41af44aa1b070f5cc265f5193888c0b7"],["/posts/10812f0/index.html","693b2477fdd7399590663b7298b9ddb5"],["/posts/126b275/index.html","a7aa29c67db0dd54de009b399dc3241a"],["/posts/12d95a5e/index.html","c23b327232038b8ec558c9d5670e024b"],["/posts/1367417b/index.html","96dfaf15f21ef47337c6380e38eab106"],["/posts/13886e3f/index.html","f4f3c78af89dc6812b09536c2e0a3de9"],["/posts/145193a5/index.html","15ee21f6144f6f7b62ac82141dfd8d33"],["/posts/149dde25/index.html","aee71647b71f75ce0b65faf114889acc"],["/posts/152fa65b/index.html","a89285ef8fe2d928346d807eb489732a"],["/posts/169e7dda/index.html","13343b4c8d2ca322f3e82ee707c969bd"],["/posts/1875100e/index.html","c429fb5cb2f985def1280f2eb49be9de"],["/posts/18eaef7d/index.html","27f8c21b570be2a0c3c1ed77ee416a22"],["/posts/1a0bc7b7/index.html","1c0de8eb436aee2e653a9fad2c33a6ac"],["/posts/1a20a057/index.html","80ddc4a881cd85a68220f9640c1cdfb2"],["/posts/1a998be6/index.html","2da854f8f7ef9baeee67791379510061"],["/posts/1bffbd20/index.html","8ed249e722a04876c436f7505c166ea3"],["/posts/1c5a0485/index.html","68b7eb518e64ffdf8afef0aa2db7d189"],["/posts/1e638f78/index.html","bc9fe502584e4b2c0014733c948199e4"],["/posts/1e967920/index.html","55f14b6ad70faa370df66c68ef131888"],["/posts/1fb53120/index.html","154b1df3a3f38c4de292036bfa0d427b"],["/posts/21466e86/index.html","477fa8604938f76e37f73d47db6692db"],["/posts/21abcf1a/index.html","6195eada923434346d884966d7d4751a"],["/posts/21c250b1/index.html","38b5213283cfc575e84276fabc28733a"],["/posts/2287cc/index.html","f8a595df3736f5bb7001ef4ee7773961"],["/posts/236bfea3/index.html","a224840d1400369e2836a35790d96a32"],["/posts/24caea6b/index.html","c15368d07635e1b5ef1248b32396bd80"],["/posts/25d45c3d/index.html","b9f05458f49c457d54142611ed747b16"],["/posts/262baa9f/index.html","0f6a48b48e89780f8caed163c760a261"],["/posts/26f82f65/index.html","1c6ed4582e5a6cea9ec65790ef71867a"],["/posts/27cdc142/index.html","d2f661bd86356198cf7dc5d4abafc47c"],["/posts/2895c4bb/index.html","84bf3823ddfc7516b6d621b36561f3de"],["/posts/28987ff3/index.html","7f16260c42e850e60c3325f71072d7ca"],["/posts/298cfeed/index.html","d19d6ccb4886ed4dba9f5f7796799865"],["/posts/29f0df96/index.html","02c184e01b5c2db6bc11930a166208d3"],["/posts/2a1d2b6f/index.html","3993180983dc1ec1ab3e9eb39a974210"],["/posts/2a386047/index.html","191cac36ffc67455841e9bf6db3417d4"],["/posts/2b2f44ba/index.html","15a488465318196858eba63ea7d6ce06"],["/posts/2b770baf/index.html","1cf458a11ad2eb985f370c1783f8b6d8"],["/posts/2cda4a8/index.html","83ecf558a72d74f7d652c5b57b9cf8c1"],["/posts/2d020832/index.html","fb5684e089d57a812ee829b846798d0a"],["/posts/2d6d3bd/index.html","205cf11419e9367dd4949fc377925c8c"],["/posts/2e0c129d/index.html","125888f9507b12f0e2c1b82d0146b6d6"],["/posts/2e7563a0/index.html","991a2d18e1934cc9ceefedb2f9835b37"],["/posts/2e7b8d69/index.html","e9ca8d597b1b60b7c1bdeda2f901b24a"],["/posts/2f28d14b/index.html","8022224ed7f26810f50bc2ff1f536f32"],["/posts/2f6e1383/index.html","2b341b0fa9d475886ada354ed310f09a"],["/posts/30bfd1cf/index.html","b4ed06b8c24ffae7197be5efc82f2091"],["/posts/33235106/index.html","80e1b42a473eaa94a806ba1dabf86ba2"],["/posts/344e951f/index.html","3d6a7179635bc97177bbc9469f826b2b"],["/posts/35e2bcf6/index.html","1614524a1dbb0622c008658d9f205562"],["/posts/365e96c5/index.html","9b61e3824b38d11fc7a9f93b74f9591e"],["/posts/36e331e3/index.html","2080ab7995e5683a10f91354baa99695"],["/posts/372df90a/index.html","29220df251dc1cc1785960a1efe7b9ff"],["/posts/37c547df/index.html","a2004d0a7fe9653fcd01a00af3076066"],["/posts/380dfa6c/index.html","81aa977e4078174a5be0c489634426c7"],["/posts/3859c98f/index.html","08469d506c0fe378704c968579b748c0"],["/posts/38a88481/index.html","1bcb0ae27d4a2aed56d533205c4b764e"],["/posts/3914bfed/index.html","cc7e15da3ff8674ada1f02473c7b1bdf"],["/posts/3b56780c/index.html","b6fe1819b3948789dd2e59f2ddd01a9e"],["/posts/3d1ef1fa/index.html","69398cc1592ead1bd04c7d2d205e4f87"],["/posts/3e4bb613/index.html","52e669aeb4dee21d035c498f7a12634e"],["/posts/3f2e933/index.html","fcdbce92f263f8f08c41a69f28dd7532"],["/posts/3f6e5f9e/index.html","b2f7d6c48a14da64bb731cb0a3868b6a"],["/posts/4349a589/index.html","8181057dd5ee49fa05e597d548ef7444"],["/posts/44246190/index.html","a6825f96bdca305b1149afdf3aac2eaf"],["/posts/456550f/index.html","b00f1569f1b3788a032cc4f714d5141b"],["/posts/470ac03d/index.html","514c5e7daa756e71b550952ab4c5047d"],["/posts/470d45ef/index.html","220a98be645f69c7374366d661b68969"],["/posts/49249ac9/index.html","8407e8aada29e2edc58d2735667c2c4e"],["/posts/49f2d2a/index.html","f5ffacb05e98c0af61511441e98d9dae"],["/posts/4e6d4eb4/index.html","c681804f3dbdaebdfa7808d707b1f431"],["/posts/4f346c5/index.html","5eb1c7706fe3b09ac1afd135257a4f64"],["/posts/50caf1d4/index.html","3fd12b2190767707c41ef3462fe82321"],["/posts/51139400/index.html","4f9c3dc205b3f3aced2c60f81cf30bbf"],["/posts/512c9a09/index.html","9ae24cfbc11881de423d2a0f3c62fd47"],["/posts/5205b330/index.html","026171d3da85ced2c5163491c6922e7d"],["/posts/52d36cab/index.html","dbffc42c3c895c7d32b4ba6342a6afa3"],["/posts/532a083a/index.html","0979c8752ecd090be10a7a29abcfcbbd"],["/posts/537d2c2a/index.html","41c0ccfb008e00f393d32cabd8080cbf"],["/posts/54383ba0/index.html","e2465bd22f800a08d9653919f464a120"],["/posts/54667693/index.html","f1ea2e8cb6da7de56ebdc72b4f4657a0"],["/posts/5508212c/index.html","5480d07013195ccd9e37c5c4e2dd46f3"],["/posts/571564e5/index.html","11e9fe9235806a19fc80f08256bb24b5"],["/posts/57900fe5/index.html","cb103d53a71917e1914e8aba46100bed"],["/posts/589a214a/index.html","4ddd1d1f1914493de16ddb77e7edda04"],["/posts/599a2b19/index.html","6324fae13c78cba4f4c1b588a4a2e0f1"],["/posts/59c05382/index.html","30381a4775cc84946958bf08bccb3927"],["/posts/5a5294c8/index.html","2d2576eb61680687a68377c7fd6e30f4"],["/posts/5d3da28e/index.html","022ea55d7b0215b75afb29b477347843"],["/posts/5d3f50d1/index.html","694816396184505ea590532f70bd5f56"],["/posts/5ef7ef00/index.html","89ab5410de813e7c1712b08f11578c9b"],["/posts/5f1fa8df/index.html","12e851adcd719725ffc10ca3b6e4c9f5"],["/posts/60b5dd06/index.html","1478b8bc3978eb41f23c1361006fe27e"],["/posts/61477045/index.html","c1f55f39fbada4cd50db6e13e77569ad"],["/posts/69d79f93/index.html","c3aba88d727828627585ed86dcbfee07"],["/posts/6b2f046/index.html","ef2ef1c7a02422d5859580d0bc1c43e5"],["/posts/6b4610c4/index.html","c718d1e7acee367263e448961d86d5eb"],["/posts/6bbf03f0/index.html","1ec52a17b93e3063dcb37305bff500a2"],["/posts/7000d139/index.html","f0fbdee5bff8c3f536cd1ab469d87248"],["/posts/72f94093/index.html","1a2ff07b84afc04f37419cacd6e95b13"],["/posts/7380b71/index.html","79c21923c83994e5c1cac3ed0f3599f6"],["/posts/738eee3b/index.html","d6612cc73d1130418b96d6492d7310b3"],["/posts/73981dbc/index.html","b7b2cd91123634e5eebe26aabab47ef0"],["/posts/74d60fd9/index.html","790e9e01f7d420d91d5a5118e72919ba"],["/posts/74f5d9a5/index.html","e8802e16738300c6856465a4a86f17bf"],["/posts/750f2ce3/index.html","3823d5836c5bfc9bc7c648b3d9b65a3f"],["/posts/75ceb627/index.html","6dc94dbbd922b7221aac9a07195168fe"],["/posts/7725b75a/index.html","dd12e12839003a24df01e2922cee8f36"],["/posts/79ef335/index.html","1aa281a5e593be0b0cd029709f8d2161"],["/posts/7bbd3149/index.html","6c53a75bef58598fb06c559c99afa342"],["/posts/7c20e8d5/index.html","6099055cc40910ec01636c123b127332"],["/posts/7d3ea75e/index.html","dd14d18e6bf5506da67debbbdf32003c"],["/posts/7d43958e/index.html","0afaf64a92eb092702e34cfb845bd3f0"],["/posts/807ac7f2/index.html","e04d36eece17f75e4b65710aac4becb4"],["/posts/81738fa0/index.html","56b265cbe8252f7b59bb29ca2019732b"],["/posts/817c41b4/index.html","2214aba06b4ecb489506205083748691"],["/posts/84ee8e34/index.html","f8acdd7c23c5832b6fd642898fef70e3"],["/posts/8837602f/index.html","34d07a189a1f8006875c236d1e5df04d"],["/posts/89589a03/index.html","fbcee939210a54298d529395d2e6e826"],["/posts/8bcef008/index.html","5228a82ede674ae4af8e2f966c4b882f"],["/posts/8bf9abeb/index.html","a4333900522bff741cb6dd57c4819681"],["/posts/8e5f5686/index.html","838d5afd217d95dc297a9b1d30eea0ba"],["/posts/8fa6b8c7/index.html","d3d28aeacd97ce0d827c0510d80275de"],["/posts/9029a3de/index.html","5b73d27167c241f6e2e6e4573b893f97"],["/posts/909d9a5d/index.html","e8dcfa1ab55bd6c41e7ab1b599d2579d"],["/posts/91404b94/index.html","c2992de779ca0ff6853dc037a911faac"],["/posts/932e3747/index.html","1986b02d1879570b1446f5e826f8344a"],["/posts/95fc9e6e/index.html","9fb4abfe7a61ba2458097fa9b074dac0"],["/posts/98e67280/index.html","a357eb028e25ac029151e39c329db963"],["/posts/9a4d13ef/index.html","e90f23ce06bf3fced59f6c68a0462e0b"],["/posts/9afbb889/index.html","6211b782127aedf54d327a0dce666880"],["/posts/9be63ba/index.html","fa67936a59a7160f20ccb35d245ff147"],["/posts/9d967c90/index.html","e6d9cb40aab010dbc9a1e1bfb526745d"],["/posts/9eadcdf6/index.html","adc2ae4c3e1a3f31ddd2aaf7e8928e31"],["/posts/9efd76a3/index.html","3726cbd54900c5f0ada75376af0e544e"],["/posts/9f97db8f/index.html","16054296e91cb63bed014f9e723ca464"],["/posts/9ffb4388/index.html","ad94e4aaa54e6b11c3c04da042cb5076"],["/posts/a094d027/index.html","d7f1944e9a3fe49ec415fe433431844d"],["/posts/a27042c6/index.html","815f7f262fc27eef6e7017b53e57f0b9"],["/posts/a29cc732/index.html","a001f460dcd207b3457793820723deb6"],["/posts/a44a518/index.html","4209d342e1af3793cf9008b7c2177e18"],["/posts/a4f2a748/index.html","e8b9e2fb89b2f1422c46449799f41af1"],["/posts/a7dc32c9/index.html","902bd60ffe3eb058e5e8d3c914751967"],["/posts/a7f753ec/index.html","409fa359133da78c1a7fb2bf3ee6f713"],["/posts/a9168bc5/index.html","cc3936f67ddcf7bd8361595d590c5463"],["/posts/ab176793/index.html","2f77ccb146df972da7e62cf3986e8c78"],["/posts/ab34095a/index.html","334225008f376210a295e0f1dbaf09b4"],["/posts/ad47c4a5/index.html","8f248ccbd60d4d3db452b60285d77ea7"],["/posts/ae8f7b74/index.html","028469ecceefc10e720681d0544ac944"],["/posts/af43816b/index.html","7375783dc011a22d5fa0c0d33f378079"],["/posts/af9e049c/index.html","89bd7ea574e0b47f72208699020bd55d"],["/posts/b0f1a367/index.html","da93ec23df2ee0910e53de22397e0349"],["/posts/b0f98e2c/index.html","1086b4ff15d3ae0cf3ecafe623eee520"],["/posts/b33131fd/index.html","a3f4a41f88e3f9726e3f2e15f9a6c839"],["/posts/b36eb520/index.html","2a32d99050adde347f194603c2213e84"],["/posts/b542fc02/index.html","cd55616a2980e8f2164bca60ab50cee6"],["/posts/b54eeeb4/index.html","d50f413e6602cf2cd2a78cbdf8dc9978"],["/posts/b84f3f3c/index.html","364bd0109f53838f01bd93756c098cfa"],["/posts/b94fc207/index.html","397edefb2f4b3fee36f7f166e4ed97c0"],["/posts/b981a6b4/index.html","d375162da120fdc1c7d20b6ebfb0f26e"],["/posts/bcea326a/index.html","1dde7e1d29a5bef16132c01d3d85a00d"],["/posts/beb19e80/index.html","6ad368ce9e8af6cf1b37d92ce0063eb0"],["/posts/bec490f8/index.html","89f2fd0176bf2ac0da53b4881821547c"],["/posts/bf7bde0e/index.html","a209f2545ad50eb561dc745a8920d84d"],["/posts/c03f17c9/index.html","aee48c1b1451cd477512c706e020b36e"],["/posts/c35bc572/index.html","1d04ea285e69f2b0f06fbfbf2f91fc18"],["/posts/c436016b/index.html","55bf8cbdf168356b4cf5273fc635e6ce"],["/posts/c4efc741/index.html","9bc5d9bf746436fef5ef153c923e44e0"],["/posts/c5e8a08e/index.html","e88d3bf234beaf64148a9e104c9d036b"],["/posts/c7db1dc0/index.html","9e4443d30f4b7d620b421e36928dff7e"],["/posts/c7febeba/index.html","51453a959ab2c056a2fb4a8b1530e88f"],["/posts/c9c3a06e/index.html","a7d00f0438e9d1328026913610fc923f"],["/posts/cc6d2cf2/index.html","8dff072c0e27247cd5e325e1cd287b41"],["/posts/ce48f291/index.html","dbd7eb61c1512c966ed8539f3b162be9"],["/posts/cf480faa/index.html","8effb6077ad3018d626d47cd56a2f1ef"],["/posts/d090b4d/index.html","f794f32fbab1e086684894b1f64b02b3"],["/posts/d1995044/index.html","e653b966584cb61de974e41ef9882096"],["/posts/d2d34977/index.html","b0b88bc2dbba77cd1e15b292b54b81f3"],["/posts/d3647a92/index.html","8db09d4a5743a077bbc1ff670766122a"],["/posts/d3f6b818/index.html","545f4b928b66fd75a463ee43fce22466"],["/posts/d465029c/index.html","8601a0a6744c084751abc78029354a52"],["/posts/d9884be2/index.html","929bb4c8696abb3e9187ef8d75bfb430"],["/posts/da40f433/index.html","f3470ede87f1a5239bf567cac2ec59ad"],["/posts/dae71d5f/index.html","12a2225e9693d63ba834a6a25b71fa38"],["/posts/db9fbe47/index.html","3322672d429a35638240b4af12471d39"],["/posts/dbba997d/index.html","158fd9f9df3210f520c580210b113843"],["/posts/dc94f8a1/index.html","4ad971911f77567aed1964447be3b1a7"],["/posts/dfe9b67/index.html","62808410bff3a327d87f8f77ca69baf4"],["/posts/e0387d80/index.html","276fb3b19b757e4f243cbdef7505f9e8"],["/posts/e356f7b3/index.html","470f561a6d433e9b98982e00d74a712a"],["/posts/e3acb366/index.html","00369cce58439e44c33b72d949020894"],["/posts/e450354f/index.html","d72ded900ddc1f6d95f3abde518f3788"],["/posts/e489223c/index.html","99d1829bdf29b406d76bf0897d6b224d"],["/posts/e9a8ddd1/index.html","dc8da41ec5baabc010a4470308a0e022"],["/posts/ea914c06/index.html","dde2ac9c8f6ea883aa403e285e82c5c2"],["/posts/eaa8f31e/index.html","a2fdf68bc62ea573c2d4c175fb9568ce"],["/posts/eac19412/index.html","7ab85523c7d8a602acd36705c3ebf5ff"],["/posts/edfc881f/index.html","0a33c5764be8bbe717402bfd96ef07f1"],["/posts/eec0bbd1/index.html","f7471e66eae2096aa5f8bf746a8486e4"],["/posts/ef22c7c2/index.html","19f2b74772cce8b8b13a9cd2c804b5aa"],["/posts/ef271825/index.html","41749a3f3f6a6cc6c222ac5471218c24"],["/posts/f209578c/index.html","4a0f4b1b8c59c895b438ee6efda40659"],["/posts/f3e9bea2/index.html","c2b02d7f126e695719721b6b994977fc"],["/posts/f67b7122/index.html","68fcd10f706797b4e4c26c537c647ac6"],["/posts/f7abba28/index.html","9c503560f29bdbcf3b59341ec41e2178"],["/posts/faffd764/index.html","8804e5f2686fab9fe03973b81aa0ded5"],["/posts/fb684fb0/index.html","6e2edbb34ff7427d4f3b3a7594915b80"],["/posts/fc57199f/index.html","4310ef7817d10d33f352ac56e88e2574"],["/posts/fc6e9a7d/index.html","10b7e6f9522374cb53753e7f01d6714f"],["/posts/fc7bc02a/index.html","1fcbee2a1e1972c2cf09a6b43260844d"],["/posts/fd67c5cb/index.html","caee969c227870c8ff6300deb8b002ff"],["/posts/fdde061e/index.html","e907c4191c4c206c6768754da850ebc0"],["/sw.js","f397c4d52fe6774eadf5455fad4f49b7"],["/tags/ES6/index.html","f2e345906296622cb3a3f6c9a7ec7511"],["/tags/ES6/page/2/index.html","814e716c5ea6ee12b1078e727b82a915"],["/tags/FL/index.html","19508d3cb6083858624e15177aeb5b01"],["/tags/HTTP/index.html","b84941ab9ce734e5fe1e7637ce25b527"],["/tags/Hexo/index.html","790c809b0e51c962ec61377ef99989b7"],["/tags/Hexo常用命令/index.html","95861a73eca5e4de1e7101b0bfc5b32f"],["/tags/Nodejs博客实战/index.html","eeabeec266b33f457b1da48435f7c8ba"],["/tags/ajax/index.html","7933d1aaebb5fea8db30256f4dde3356"],["/tags/ajax/page/2/index.html","47bf3c8f6f644773245dd97ddeb086fd"],["/tags/curl/index.html","217b1b691d6505adf25ead2bb5065ed4"],["/tags/index.html","e2732aae9ee233dcc2d49802302f943b"],["/tags/json/index.html","eb4ac029b001b26abeb7778848730b3c"],["/tags/mongodb/index.html","3b361125f633f885ff6a4505b6f6d4ee"],["/tags/nodejs/index.html","a414ddbaae52221d8d0485ab3302bf06"],["/tags/promise/index.html","64f9116db894168ce27d2c95aff1ce31"],["/tags/中国近代史纲要/index.html","d3a81b23f95757e80ad2ced7926ec8fe"],["/tags/日语/index.html","884e4ac2732d4b7a95c182c593a0386c"],["/tags/标签外挂/index.html","ae561ee1e661922af929f1c7bada3064"],["/tags/目录索引/index.html","d98561e6c6f465188bc6c1916a61f45e"],["/tags/管理经济学/index.html","fa8e9ea47d0f7a83f72983a996aca526"],["/tags/考前突击/index.html","91542acd18aa0724c7ee632ce047f85a"],["/tags/考前突击/page/2/index.html","eda62fb64fc803ff5a2bc7135d4968a1"],["/tags/自考/index.html","372b0beb14a5f37faa787e043ee5e7da"],["/tags/计算机网络原理/index.html","a35601dfb827381a5f5af774aaf57022"],["/tags/运筹学/index.html","7615f679287126bb1b5c0652692a4c06"],["/tags/马克思主义/index.html","08916ba26b912f664eeb96fcb04495e8"],["/webstacks/index.html","b7871e3b51d769a2cd87baad95bc61e4"]];
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




