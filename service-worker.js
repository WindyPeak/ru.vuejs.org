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

var precacheConfig = [["/2014/03/22/vuejs-010-release/index.html","721710f845f08fd554d74fea7f5dc2cb"],["/2014/07/29/vue-next/index.html","a7657f6aeaa9fa847213d3b7d5cd0108"],["/2014/11/09/vue-011-release/index.html","86b6d60989418dd5a33f6b0b89860fb1"],["/2014/12/08/011-component/index.html","83f7af5f4d2328bc762bff38e5f29bb3"],["/2015/06/11/012-release/index.html","22f4b79491763f80bcd67bfcaa0dc46a"],["/2015/10/26/1.0.0-release/index.html","c1624875cf36e8d07332015eab8ea691"],["/2015/10/28/why-no-template-url/index.html","21a6eb240ff9a8c93367febefa99ff28"],["/2015/12/28/vue-cli/index.html","e476a8da345be2db5fac8445fa324e6f"],["/2016/02/06/common-gotchas/index.html","7a7dae103377efdbba6bb92d7323e270"],["/2016/03/14/march-update/index.html","b802a5dd29761936cdc4e92a86e8cabb"],["/2016/04/27/announcing-2.0/index.html","f928299a7e12e8bed1739fc46731f073"],["/api/index.html","176a72f4aaa42c3b6a404d370e87fbb8"],["/archives/2014/03/index.html","c1f0bb62b3bc0b5664d0f0c5203fc14c"],["/archives/2014/07/index.html","4b59f74387fbfe6cda52ac6e4be13fa7"],["/archives/2014/11/index.html","47311cb72060552536333cc83d4e2ef7"],["/archives/2014/12/index.html","b533fc3823626281366c7709f0c476b6"],["/archives/2014/index.html","271b50461bf820aea1815524396d7dea"],["/archives/2015/06/index.html","2072b8728027654254e5b136656f3560"],["/archives/2015/10/index.html","15d97522dcda75af61f3ece386205e16"],["/archives/2015/12/index.html","facff5587c02c68862791a0cfa75dc50"],["/archives/2015/index.html","6f9b1cc49e5dbbe8e4736d2dd82fc3c8"],["/archives/2016/02/index.html","56cb15e34c5b2dbaa37ba23034617ce5"],["/archives/2016/03/index.html","f55a3cc3d987dbcf751f548f022cf6a2"],["/archives/2016/04/index.html","eec1f600ae1fe01a71359369f0af6466"],["/archives/2016/index.html","35b61e70268e73c5a74329052ad553a8"],["/archives/index.html","cafffe6635ca8b4a13ddbf82e25a8af6"],["/archives/page/2/index.html","6af417bfabab21a29c4c83277ff8b8ea"],["/atom.xml","b223ce7e61ff121e955ce3b0ab40606a"],["/browserconfig.xml","a1327babc882f9875f57f5b367c9ffc9"],["/coc/index.html","cd792c5ba89945c689ac91c78545be72"],["/css/benchmark.css","b083e0006589a5ba88a250eb8ee12cc5"],["/css/index.css","2083dbd452f5d3d8d2fb690df3601766"],["/css/page.css","ac1704028edcb4292962da61c0c0dfb7"],["/css/search.css","9597a3c53c68ed297e49fb1f1dd331a4"],["/examples/commits.html","3cd3b2db40187e7f2d236473bae9ce59"],["/examples/elastic-header.html","198f4c19911bf30785905adb996ef899"],["/examples/firebase.html","266080b80e262a2b93289d466d1337b5"],["/examples/grid-component.html","3119ba25bb6b9dcc2f40d3f60e2136df"],["/examples/hackernews.html","f793aeb8d340c60945b0a58f3afa25c9"],["/examples/index.html","dc91b34e726c12318c4d083a3090c156"],["/examples/modal.html","88b6a98ec8a44cd783eaf0d71fcf46a7"],["/examples/select2.html","b812ad3b215af513c979c0d9759fe5c9"],["/examples/svg.html","0a1876c72d22212d243ed8c2d5b0404e"],["/examples/todomvc.html","a048618225f78a66ff322bb1dde98a37"],["/examples/tree-view.html","4815e09c4b3af4132da0e95dc1fbc945"],["/fonts/SourceSansPro-Light.otf.woff","7d901d6001e12e3fd36572daa796e9cc"],["/fonts/SourceSansPro-Regular.otf.woff","bbd955e1383a2ab663298511a163d3dc"],["/fonts/SourceSansPro-Semibold.otf.woff","99f66ff4eab8123edcaa32fd744cb791"],["/guide/class-and-style.html","a3174f2083dd58fbd1aa965dcc98133f"],["/guide/comparison.html","7c06634379b01b8e7ef0dfc90b9b8517"],["/guide/components.html","d98663b0d45a91f0a40541c1efe2bbfc"],["/guide/computed.html","3fcf408c7cdfd856ea75b6a5562ba8aa"],["/guide/conditional.html","896e19e7955f2616eb31ab4d8c65178c"],["/guide/custom-directive.html","697987fdd04783febdbff2aa2932c41d"],["/guide/deployment.html","be96515c673712671d042337366ddf63"],["/guide/events.html","0ebaec88003f2e1ab59ff868764d961a"],["/guide/forms.html","09ead2d35e42cdd09d848b27ec357491"],["/guide/index.html","e3171c7c94b236d5caa91894d8fdd581"],["/guide/installation.html","8acd1ab4fbaa082958259bf3a22d7b22"],["/guide/instance.html","61021765831307e8278d034c23502dd6"],["/guide/join.html","f2287c54050c9b576ed05af7baf6af73"],["/guide/list.html","772e05d65b4587501785906a4b681efd"],["/guide/migration-vue-router.html","e0d8a3e2dc09e2bda939c23c1e967765"],["/guide/migration-vuex.html","9b8659c8a4506acd24f2c0e3bee160f3"],["/guide/migration.html","af37d4bfb217e88a7f02eb92c446497f"],["/guide/mixins.html","270f751a44e1d1e18b9a31406a34fe8b"],["/guide/plugins.html","40467c9724e4917ae32582ac543db41b"],["/guide/reactivity.html","5b1e83c4a12b5f3e687e89e0a0b1ef05"],["/guide/render-function.html","4139dd80783f9eecb92d57dcf23dc54d"],["/guide/routing.html","f7f89a93550ee84e925ed84d6912a650"],["/guide/single-file-components.html","095eb3d7152439579d7a56227fe273f4"],["/guide/ssr.html","9143accd02c56349a3ec40d79eeefb4d"],["/guide/state-management.html","81ea6d4aee3ef538b507e4a5a0c3e3a0"],["/guide/syntax.html","611a256a910e0d1adfd5b418535e0ac1"],["/guide/transitioning-state.html","3f36248a3d9f6f21f10725f15775c5d6"],["/guide/transitions.html","4513c62165ee217697830a40e1795365"],["/guide/unit-testing.html","0f69c6b7a8d743af6384b8a2208b9a33"],["/images/aaha.png","77bfeb59f772f37444c9cefe00785cf2"],["/images/accelebrate.png","e030e08131cebe8b43c89df18d710ded"],["/images/alligator_io.svg","1ffe0191e22a65337f9cb224790f5222"],["/images/bacancy_technology.png","5810bb8253b1e35ba437373ff83f82d3"],["/images/bestvpn_co.png","afbe252b6b59bc3cdac2e7dec69eac39"],["/images/bit.png","9638a3f44bf471876effb80ea0659f73"],["/images/blokt_cryptocurrency_news.png","1517a40ef0fafa2968313c2febef3ad3"],["/images/breakpoint_hit.png","114924925a4ec0f23236012bc3dc8422"],["/images/breakpoint_set.png","6439856732303cfeb3806d52dd681191"],["/images/chaitin.png","549e43997790dc624c477424acbfe228"],["/images/check.png","c634675b753a1a03b587c43d8b535600"],["/images/cloudstudio.png","fc480cf4c2b06591f58e7e91666226af"],["/images/coding.png","10c55345da3c2374563b096f5c86d781"],["/images/coin-bch.png","ddfab54149483e02f3cd540a47e2782b"],["/images/coin-btc.png","d90559bb202766dd6ddabf71dd1680be"],["/images/coin-eth.png","70ae70292937880fe9e77c2c7dc38f86"],["/images/coin-ltc.png","9e756bd611ac7355515153cecbc20d36"],["/images/components.png","b5c08269dfc26ae6d7db3801e9efd296"],["/images/config_add.png","353cd8b2a1bdf9fc4c74a80c5f38090a"],["/images/data.png","8624e58259d141a93c1d23b2c72904cd"],["/images/dcloud.gif","ade7c64e66506b6cff10292efea16ee8"],["/images/derek_pollard.png","b1c4d535b619865d80d6cf1b2e370300"],["/images/devsquad.png","e639ea4fd0d7053fc0928d4ff9fefb2a"],["/images/devtools-storage-chrome.png","ac1f3b275b87e2fec9c4df951347be81"],["/images/devtools-storage-edge.png","3e92a3bea017b8398e71db0a2419a191"],["/images/devtools-storage.png","e742c3b1d526bee7be77c050f4bffc92"],["/images/devtools-timetravel.gif","fca84f3fb8a8d10274eb2fc7ed9b65f9"],["/images/dom-tree.png","f70b86bfbbfe1962dc5d6125105f1122"],["/images/dopamine.png","17222090b66cfca59f1ccf8b9843f595"],["/images/down.png","2f948222df409af3121254d5fe0ed377"],["/images/earthlink.png","88f1bd15252b11484834176965844e22"],["/images/energy_comparison.png","1f3f2809057b867842c99679e2723b3e"],["/images/feed.png","a9bbd11a96e1cbcc49bf8fa857a0d70f"],["/images/firestick_tricks.png","1ee05223a5b12fe910cb8428d57223d8"],["/images/frontend_love.png","b514babc53a0f3ddc854b0b14a54a489"],["/images/gitee.png","429b3c31a180461c4fb66e5ac20e1385"],["/images/gridsome.png","e82a2f872ec319bbb5d0a804288cd9b7"],["/images/hn-architecture.png","46cae6ac236cf9e8c42be2018d69afc6"],["/images/hn.png","99176cdebac521e823be519aef514bb3"],["/images/html_burger.png","c7ce1344d001e7a236a89694ed59d988"],["/images/icons.png","ad6ee8c400066e15712cdef4342023da"],["/images/icons/android-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/images/icons/android-icon-192x192.png","5d10eaab941eb596ee59ffc53652d035"],["/images/icons/android-icon-36x36.png","bb757d234def1a6b53d793dbf4879578"],["/images/icons/android-icon-48x48.png","0d33c4fc51e2bb020bf8dd7cd05db875"],["/images/icons/android-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/images/icons/android-icon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/images/icons/apple-icon-114x114.png","f4fd30f3a26b932843b8c5cef9f2186e"],["/images/icons/apple-icon-120x120.png","b6a574d63d52ef9c89189b67bcac5cbd"],["/images/icons/apple-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/images/icons/apple-icon-152x152.png","f53787bf41febf2b044931a305ccaf2a"],["/images/icons/apple-icon-180x180.png","9f6b1e3b92b2c5bd5b7d79501bb6e612"],["/images/icons/apple-icon-57x57.png","83f622ba0994866abc56ace068b6551c"],["/images/icons/apple-icon-60x60.png","643f761bc39f86c70f17cd1fed3b8e08"],["/images/icons/apple-icon-72x72.png","702c4fafca31d670f9bd8b2d185ced39"],["/images/icons/apple-icon-76x76.png","94d9af047b86d99657b5efb88a0d1c7b"],["/images/icons/apple-icon-precomposed.png","707758f591323153a4f1cb3a8d9641fa"],["/images/icons/apple-icon.png","707758f591323153a4f1cb3a8d9641fa"],["/images/icons/favicon-16x16.png","a5a9da66870189b0539223c38c8a7749"],["/images/icons/favicon-32x32.png","3d60db0d77303b2414ddd50cf2472bf7"],["/images/icons/favicon-96x96.png","0ebff702851985ea6ba891cf6e6e7ddd"],["/images/icons/ms-icon-144x144.png","e67b8d54852c2fbf40be2a8eb0590f5b"],["/images/icons/ms-icon-150x150.png","e8cdf492981122a2548bc247c7b4067d"],["/images/icons/ms-icon-310x310.png","1721f8303ec2349002b5980a01f27cef"],["/images/icons/ms-icon-70x70.png","a110cf0132b00b23a8605ca72a8874ba"],["/images/icons_8.png","ffcdd01817ecdb32b92bd2f1e4d75e84"],["/images/inkoop.png","1cff77d2c927657d3aceeba2c12db892"],["/images/intygrate.png","fdd390b44a4aeed763f53f4e8f6529e4"],["/images/isle_of_code.png","42f662ab71b943889f8f8b56515350f2"],["/images/laravel.png","9a2fba3eca41e26743dc731e3a4469b6"],["/images/lifecycle.png","e0a342d6e978cec8c83354bbaaa3b0e9"],["/images/logged-proxied-data.png","716e3c41aacf453cfaedd61c2795f0ec"],["/images/logo.png","cf23526f451784ff137f161b8fe18d5a"],["/images/marcus_hiles.png","8b55f40abd154200ce72b8cdb6a8d90f"],["/images/memory-leak-example.png","c2fae8bd6d8fa50632f9cde80be8b3f6"],["/images/menu.png","0b414c367f5e7c0eb1b40f1076216b08"],["/images/modus.png","6498c04fee5b8542449b350e77180379"],["/images/mvvm.png","841485f73dfdd2773c544649948c505d"],["/images/nativescript.png","05c94493b428db55bb441faaca4b02d8"],["/images/neds.png","1f1a2a46c2575019ae07a90205f60b65"],["/images/onsen_ui.png","e41569bcb10fbca3f361d818b29ed7fd"],["/images/opteo.png","e80eaa359d4722af5fd8fed79fb9eec5"],["/images/passionate_people.png","03e59e28347e1dcd165e4e1525afb545"],["/images/patreon.png","99eb0cdcab5f46697e07bec273607903"],["/images/paypal.png","067bd556ce9e4c76538a8057adb6d596"],["/images/props-events.png","fa3d27510609ecde97606107a83c3dbb"],["/images/search-by-algolia.png","3f22d84b817bb896bd5bef0705ff8fc7"],["/images/search.png","3a38056b0f3ec4fcac63c4d1c3841cab"],["/images/shopware_ag.png","e2ded483c0660bd629938e37f388d9fb"],["/images/shopware_ag.svg","5d2a8176b6e1b0a348339746de3edf28"],["/images/special-sponsor-spot.png","860ea231e9bd1b3ff35e627eb83bb936"],["/images/state.png","ee5d4923234c072fabbd9269425b2fcd"],["/images/stdlib.png","8693858c969505b29339bf84c0a5cbdf"],["/images/syncfusion.png","fd1617455479c2e3265656c167faeb91"],["/images/tidelift.png","831935bd53d7d2d4eea9427c5f874816"],["/images/tighten_co.png","003364e7044150e2979cbfe03d640cec"],["/images/tooltwist.png","b81bfd5ae608e965d03aaa5a4164373e"],["/images/transition.png","5990c1dff7dc7a8fb3b34b4462bd0105"],["/images/typescript-type-error.png","1665e7350370c091d397383a7355d3a6"],["/images/valuecoders.png","818ca42a745e018ace0c55c36a7ae3dd"],["/images/vehikl.png","3bd1b88aa9d242d308e838f2342d7660"],["/images/vpnranks.png","a657f71ef96eb8c22c7f1496c01ca53a"],["/images/vue-component-with-preprocessors.png","a5cb959052c9cda793e23a6e3a6a122c"],["/images/vue-component.png","6a7040cfd4330a536d980c69e2e8dd18"],["/images/vuejobs.png","77ed618e17571d1a2d77ad7bc53e8fc4"],["/images/vuemastery.png","6f09ce143467fba22039bde3f2070c19"],["/images/vueschool.png","3d92b4f1a8fcbe3be0d0e89950a1a705"],["/images/vuetify.png","c7cfff77abb10162cb0b7c2ed3b6ac51"],["/images/webdock.png","6b8d3d271ba4d05daf83ad75d21221d1"],["/images/wilderminds.png","cd98b69653b51369da2e765097f13d6f"],["/images/x_team.png","a6cfaebb0c0dc17d348bc9c6fd5758ef"],["/images/yakaz.png","f1918919114e35d6091e67370450e8bd"],["/index.html","11d1a37fcf29d55372636e0a0d3318ff"],["/js/common.js","08bf9fbe4dbd2e089655814c466ee22f"],["/js/css.escape.js","fe4db48c9e3f272a6d12cf1312de889e"],["/js/smooth-scroll.min.js","ecaa94f311c27bd2ac704a9658ff9cef"],["/js/vue.js","d5c38adb09ff79efa1c4d0745dfd308c"],["/js/vue.min.js","17e942ea0854bd9dce2070bae6826937"],["/manifest.json","bd8de9895abf2cc1faa760a8bd1004d8"],["/menu/index.html","78d3c3a0ddefa4649cd469dd52ac2f75"],["/page/2/index.html","cebfd35b7f513d24dfe8b89ec641c651"],["/perf/index.html","894c3edc44dd67ef9842d326b5e94f48"],["/support-vuejs/index.html","320914edb9b6035afaa2b72652437669"],["/v2/api/index.html","b2be14c423a3a1acfd925be9c0bfb174"],["/v2/cookbook/adding-instance-properties.html","f9fa20720bbac4f9ab665d199ff76405"],["/v2/cookbook/avoiding-memory-leaks.html","e4db1a7e9294bde2f97336d9a7ebb9b5"],["/v2/cookbook/client-side-storage.html","a547b722183cab96c4024c6975e29655"],["/v2/cookbook/creating-custom-scroll-directives.html","1348fbd4767b2e48cfc1fbea7e26a0e6"],["/v2/cookbook/debugging-in-vscode.html","2a8db3d71adb72a8db6514b2a79e2fa4"],["/v2/cookbook/dockerize-vuejs-app.html","18281066c440c378f241fec09f38559b"],["/v2/cookbook/editable-svg-icons.html","faebb4687087855a1b0ee60f0bf560b3"],["/v2/cookbook/form-validation.html","a616cdde2d7bc69bb765ada5db16bba6"],["/v2/cookbook/index.html","1c5bcef03cce206b60d7159c38c2792f"],["/v2/cookbook/packaging-sfc-for-npm.html","f91d86bfbec6b3e4cff0863c6fd4fd7d"],["/v2/cookbook/practical-use-of-scoped-slots.html","5aaed0ada0a6d1232681b0f974173a19"],["/v2/cookbook/serverless-blog.html","9674770f318646fb75f2bbf93a9c82e4"],["/v2/cookbook/unit-testing-vue-components.html","f692b0c18b892ed23079e021f4ac6d64"],["/v2/cookbook/using-axios-to-consume-apis.html","d47421247519f6f1e84b5eb921c799aa"],["/v2/examples/commits.html","3fe9af406133c293bacfd2d7f23f8504"],["/v2/examples/deepstream.html","55cbeb1082a7816a240797b8cd13a0bd"],["/v2/examples/elastic-header.html","0abaa1cac241cac023c42c805dd36c40"],["/v2/examples/firebase.html","2c2537bf37b5f73f0ef1a93a50798d21"],["/v2/examples/grid-component.html","6379c835419b1113783e57c8dbb7c454"],["/v2/examples/hackernews.html","a09198a4db6a71e671fbf0e889176f1a"],["/v2/examples/index.html","50857a91941d2ece1ed0c884f7b64fa2"],["/v2/examples/modal.html","33a30bd898400ee03410d058a9ef4aa3"],["/v2/examples/select2.html","b30570cd93d013bebbe5883ec13577e5"],["/v2/examples/svg.html","3b2ba3a4880c103203dbf4612fe2f074"],["/v2/examples/themes.html","1f240c56116781d15b019eab665890bb"],["/v2/examples/todomvc.html","64b3030244a936fa0619d9ed49781d57"],["/v2/examples/tree-view.html","2694654435bb722c25e4cad5cfa688b0"],["/v2/guide/class-and-style.html","55ab2653b090018df845e5f75801af3f"],["/v2/guide/comparison.html","5128e9e70b41e58b33c66489550941ca"],["/v2/guide/components-custom-events.html","0125f7360e02053efd4a97c5c09f6010"],["/v2/guide/components-dynamic-async.html","b756a79c50c7f89f2b0948bda515e407"],["/v2/guide/components-edge-cases.html","aaf1fb2b3b829ceb4295e9ffb74bcb28"],["/v2/guide/components-props.html","2820368e5540b27e52de55f36105e87b"],["/v2/guide/components-registration.html","536c8ec690f1bd1d64dfe4879ccce114"],["/v2/guide/components-slots.html","6f05865e7d43563de1cd32d327a6cf30"],["/v2/guide/components.html","6afc5adfef3c919a7fbecf0168b3a354"],["/v2/guide/computed.html","c344239fb1be9b0848a4c54be3fa4f29"],["/v2/guide/conditional.html","fff96d81ac0419d53db8df099f454c8b"],["/v2/guide/custom-directive.html","49a310303c1587bc6a0af0996bf901b1"],["/v2/guide/deployment.html","b67616c13819337d5a034bafc584568a"],["/v2/guide/events.html","dc216b645a87929388b0c10af6ec07dc"],["/v2/guide/filters.html","119f0561732725893614e43b8a338766"],["/v2/guide/forms.html","457892d8840aa1c4fd8b5f6717e91c8d"],["/v2/guide/index.html","56122f35b9dc4ab3ea353df1efb024e9"],["/v2/guide/installation.html","e46982709e164c422c517409903a99ec"],["/v2/guide/instance.html","054c64eb35512dadc960ad0640711d34"],["/v2/guide/join.html","56edff45d3af274350c1566384c0177e"],["/v2/guide/list.html","9377b6d76304dab2a7eb71382b738089"],["/v2/guide/migration-vue-router.html","0780dad941cf15082b02f3dfacb5537b"],["/v2/guide/migration-vuex.html","b0ac28c8e98d456bdd1f4576563fee3e"],["/v2/guide/migration.html","e89af8e9bc4a193b6674bab71e7c5ae9"],["/v2/guide/mixins.html","d609e5ce8da176cd4be3a1ad23124915"],["/v2/guide/plugins.html","eeaec9865239631cd81bb33ab325b43f"],["/v2/guide/reactivity.html","5e209a709b29f5e229dd60ebb3ebbba2"],["/v2/guide/render-function.html","39b549778d5b01d2c05836b80ccf1d88"],["/v2/guide/routing.html","55334dc95a74471589a28bf2acb55620"],["/v2/guide/single-file-components.html","09367eeb04185a7f75cb04da062fc786"],["/v2/guide/ssr.html","a7ada2baae8a2b94918d21d43a963fbc"],["/v2/guide/state-management.html","f39614bd5b0f2cf5764d7af92d7ea6f7"],["/v2/guide/syntax.html","722e10d334080f6ac00070ced9c9a36a"],["/v2/guide/team.html","bd1843d8a5f138405ddefc80f2f44e63"],["/v2/guide/transitioning-state.html","4a96fbd8d3e2951a3f47e0232785d0d1"],["/v2/guide/transitions.html","46cdb670dcbebfeec9d10773856e6091"],["/v2/guide/typescript.html","48a0d05f46f6c5d11f145068a171a674"],["/v2/guide/unit-testing.html","18ab1afe6dc36c2e07a9e41d0f0d359e"],["/v2/search/index.html","4a21ae26f655cafc8a26c3235888f02e"],["/v2/style-guide/index.html","1fd5f242cc5ce72dc2b088eecbab96a3"]];
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

toolbox.router.get("/*", toolbox.networkFirst, {"origin":"sendgrid.sp1.convertro.com"});
toolbox.router.get("/*", toolbox.networkFirst, {"origin":"ad.doubleclick.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdn.jsdelivr.net"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.googleapis.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"fonts.gstatic.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"cdnjs.cloudflare.com"});
toolbox.router.get("/*", toolbox.cacheFirst, {"origin":"maxcdn.bootstrapcdn.com"});




