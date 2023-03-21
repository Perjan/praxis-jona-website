// export default function Playground() {
//     return (
//         <>
//             <h1>Use this page for copy/pasting everything</h1>

//             <div class="bg-gray-900">
//   <header class="absolute inset-x-0 top-0 z-50">
//     <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
//       <div class="flex lg:flex-1">
//         <a href="#" class="-m-1.5 p-1.5">
//           <span class="sr-only">Your Company</span>
//           <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="">
//         </a>
//       </div>
//       <div class="flex lg:hidden">
//         <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400">
//           <span class="sr-only">Open main menu</span>
//           <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//             <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
//           </svg>
//         </button>
//       </div>
//       <div class="hidden lg:flex lg:gap-x-12">
//         <a href="#" class="text-sm font-semibold leading-6 text-white">Product</a>

//         <a href="#" class="text-sm font-semibold leading-6 text-white">Features</a>

//         <a href="#" class="text-sm font-semibold leading-6 text-white">Marketplace</a>

//         <a href="#" class="text-sm font-semibold leading-6 text-white">Company</a>
//       </div>
//       <div class="hidden lg:flex lg:flex-1 lg:justify-end">
//         <a href="#" class="text-sm font-semibold leading-6 text-white">Log in <span aria-hidden="true">&rarr;</span></a>
//       </div>
//     </nav>
//     <!-- Mobile menu, show/hide based on menu open state. -->
//     <div class="lg:hidden" role="dialog" aria-modal="true">
//       <!-- Background backdrop, show/hide based on slide-over state. -->
//       <div class="fixed inset-0 z-50"></div>
//       <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
//         <div class="flex items-center justify-between">
//           <a href="#" class="-m-1.5 p-1.5">
//             <span class="sr-only">Your Company</span>
//             <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="">
//           </a>
//           <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400">
//             <span class="sr-only">Close menu</span>
//             <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
//               <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>
//         <div class="mt-6 flow-root">
//           <div class="-my-6 divide-y divide-gray-500/25">
//             <div class="space-y-2 py-6">
//               <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800">Product</a>

//               <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800">Features</a>

//               <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800">Marketplace</a>

//               <a href="#" class="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800">Company</a>
//             </div>
//             <div class="py-6">
//               <a href="#" class="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-white hover:bg-gray-800">Log in</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </header>

//   <div class="relative isolate pt-14">
//     <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
//       <svg class="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
//         <path fill="url(#f4773080-2a16-4ab4-9fd7-579fec69a4f7)" fill-opacity=".2" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
//         <defs>
//           <linearGradient id="f4773080-2a16-4ab4-9fd7-579fec69a4f7" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
//             <stop stop-color="#9089FC" />
//             <stop offset="1" stop-color="#FF80B5" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//     <div class="py-24 sm:py-32 lg:pb-40">
//       <div class="mx-auto max-w-7xl px-6 lg:px-8">
//         <div class="mx-auto max-w-2xl text-center">
//           <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Data to enrich your online business</h1>
//           <p class="mt-6 text-lg leading-8 text-gray-300">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
//           <div class="mt-10 flex items-center justify-center gap-x-6">
//             <a href="#" class="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">Get started</a>
//             <a href="#" class="text-sm font-semibold leading-6 text-white">Learn more <span aria-hidden="true">→</span></a>
//           </div>
//         </div>
//         <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" width="2432" height="1442" class="mt-16 rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10 sm:mt-24">
//       </div>
//     </div>
//     <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
//       <svg class="relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]" viewBox="0 0 1155 678">
//         <path fill="url(#ee0717bf-3e43-49df-b1bd-de36422ed3d3)" fill-opacity=".2" d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z" />
//         <defs>
//           <linearGradient id="ee0717bf-3e43-49df-b1bd-de36422ed3d3" x1="1155.49" x2="-78.208" y1=".177" y2="474.645" gradientUnits="userSpaceOnUse">
//             <stop stop-color="#9089FC" />
//             <stop offset="1" stop-color="#FF80B5" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   </div>
// </div>

//         </>
//     )
// }