<template>
  <main class="adminhomepage">
    <div
      class="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white"
    >
      <!-- Header-->
      <div
        class="fixed w-full flex items-center justify-between h-14 text-white z-10"
      >
        <div
          class="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-yellow-400 border-none"
        >
          <img
            class="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden"
            src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
          />
          <span class="hidden md:block">ADMIN</span>
        </div>
      </div>
      <!--Sidebar-->
      <div
        class="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-zinc-800 h-full text-white transition-all duration-300 border-none z-10 sidebar"
      >
        <div
          class="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow"
        >
          <ul class="flex flex-col py-4 space-y-1">
            <li class="px-5 hidden md:block">
              <div class="flex flex-row items-center h-8">
                <div
                  class="text-sm font-light tracking-wide text-gray-400 uppercase">Main
                </div>
              </div>
            </li>
            <li>
              <a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">
                    </path>
                  </svg>
                </span>
                <span @click="gtDashboard" class="ml-2 text-sm tracking-wide truncate">Dashboard</span>
              </a>
            </li>
            <li>
              <a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4">
                    </path>
                  </svg>
                </span>
                <span @click="gtResidents" class="ml-2 text-sm tracking-wide truncate">Residents</span>
              </a>
            </li>
            <li>
              <a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z">
                    </path>
                  </svg>
                </span>
                <span @click="gtAppointment" class="ml-2 text-sm tracking-wide truncate">Appointments</span
                >
                <span class="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full" >New</span>
              </a>
            </li>
            <li>
              <a class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                <span class="inline-flex justify-center items-center ml-4">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9">
                    </path>
                  </svg>
                </span>
                <span @click="gtRevenues" class="ml-2 text-sm tracking-wide truncate">Revenue Records</span>
              </a>
            </li>
            <li class="px-5 hidden md:block">
              <div class="flex flex-row items-center mt-5 h-8">
                <div class="text-sm font-light tracking-wide text-gray-400 uppercase">Settings
                </div>
              </div>
            </li>
            <li>
              <a
                class="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
              >
                <span class="inline-flex justify-center items-center ml-4">
                  <svg
                    class="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    ></path>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </span>
                <span 
                @click="logout"
                class="ml-2 text-sm tracking-wide truncate"
                  >Logout</span
                >
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="h-full ml-14 mt-14 mb-10 md:ml-64">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <div
            class="bg-amber-400 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-teal-500 text-white font-medium group">
            <div
              class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">
                </path>
              </svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">{{pendcount}}</p>
              <p>Pending Appointments</p>
            </div>
          </div>
          <div
            class="bg-amber-400 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-teal-500 text-white font-medium group">
            <div
              class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z">
                </path>
              </svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">{{apptodaycount}}</p>
              <p>Apointment Today</p>
            </div>
          </div>
          <div
            class="bg-amber-400 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-teal-500 text-white font-medium group">
            <div
              class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6">
                </path>
              </svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">{{totalappcount}}</p>
              <p>Total Appointments</p>
            </div>
          </div>
          <div
            class="bg-amber-400 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-teal-500 text-white font-medium group">
            <div
              class="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12"
            >
              <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                class="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
                <path
                  stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z">
                </path>
              </svg>
            </div>
            <div class="text-right">
              <p class="text-2xl">{{'P '+totalrevenuetoday}}</p>
              <p>Today's Revenue</p>
            </div>
          </div>
        </div>

          <h2 class=" ml-5 mt-5 text-lg font-semibold text-left">Today's Appointment</h2>
          
          <div class="mt-4 mx-4">
            <div class="w-full overflow-hidden rounded-lg shadow-xs">
              <div class="w-full overflow-x-auto">
                <table class="w-full">
                  <thead>
                    <tr
                      class="flex text-xs font-semibold tracking-wide text-center text-gray-500 uppercase border-b">
                      <th class="w-1/5 px-4 py-3">Name</th>
                      <th class="w-1/5 px-4 py-3">Amount</th>
                      <th class="w-1/5 px-4 py-3">Status</th>
                      <th class="w-1/5 px-4 py-3">Date</th>
                      <th class="w-1/5 px-4 py-3">Request</th>
                    </tr>
                  </thead>
                  <tbody class="bg-white divide-y">
                        <!-- CLEARANCE -->
                        <!-- <tr class="flex bg-gray-50 hover:bg-gray-100 text-gray-700 text-center"
                        v-for="clearance in clearanceRequest" :key="clearance.id">
                          <td class="w-1/5 px-4 py-3">
                            <div class="flex items-center text-sm">
                              <div>
                                <p class="font-semibold text-center">
                                  {{clearance.BCfirst}}{{space}}{{clearance.BCmiddle}}{{space}}{{clearance.BClast}}
                                  </p>
                                <p class="text-xs text-gray-600 text-center">{{clearance.BCpurok}}</p>
                              </div>
                            </div>
                          </td>
                          <td class="w-1/5 px-4 py-3 text-sm text-center">{{"PHP " + clearance.BCtotalcost}}</td>
                          <td class="w-1/5 px-4 py-3 text-xs text-center">
                            <span
                              class="px-2 py-1 font-semibold leading-tight text-purple-700 bg-purple-100 rounded-full">{{clearance.BCreqstat}}
                            </span>
                          </td>
                          <td class="w-1/5 px-4 py-3 text-sm text-center">
                            <p>{{clearance.BCdate}}</p>
                            <p>{{clearance.BCtime}}</p>
                          </td>
                          <td class="w-1/5 px-4 py-3 text-sm text-center">Barangay Clearance{{clearance.BCcedula}}</td>
                        </tr> -->
                        <!-- INDIGENCY -->
                        <!-- <tr class="flex bg-gray-50 hover:bg-gray-100 text-gray-700 text-center"
                        v-for="indigency in indigencyRequest" :key="indigency.id">
                          <td class="w-1/5 px-4 py-3">
                            <div class="flex items-center text-sm">
                              <div>
                                <p class="font-semibold text-center">
                                  {{indigency.BIfirst}}{{space}}{{indigency.BImiddle}}{{space}}{{indigency.BIlast}}
                                  </p>
                                <p class="text-xs text-gray-600 text-center">{{indigency.BIpurok}}</p>
                              </div>
                            </div>
                          </td>
                          <td class="w-1/5 px-4 py-3 text-sm text-center">{{"PHP " + indigency.BItotalcost}}</td>
                          <td class="w-1/5 px-4 py-3 text-xs text-center">
                            <span
                              class="px-2 py-1 font-semibold leading-tight text-purple-700 bg-purple-100 rounded-full">{{indigency.BIreqstat}}
                            </span>
                          </td>
                          <td class="w-1/5 px-4 py-3 text-sm text-center">
                            <p>{{indigency.BIdate}}</p>
                            <p>{{indigency.BItime}}</p>
                          </td>
                          <td class="w-1/5 px-4 py-3 text-sm text-center">Certificate of Indigency{{indigency.BIcedula}}</td>
                        </tr> -->
                        <!-- RESIDENCY -->
                        <!-- <tr class="flex bg-gray-50 hover:bg-gray-100 text-gray-700 text-center"
                        v-for="residency in residencyRequest" :key="residency.id">
                          <td class="w-1/5 px-4 py-3">
                            <div class="flex items-center text-sm">
                              <div>
                                <p class="font-semibold text-center">
                                  {{residency.BRfirst}}{{space}}{{residency.BRmiddle}}{{space}}{{residency.BRlast}}
                                  </p>
                                <p class="text-xs text-gray-600 text-center">{{residency.BRpurok}}</p>
                              </div>
                            </div>
                          </td>
                          <td class="w-1/5 px-4 py-3 text-sm text-center">{{"PHP " + residency.BRtotalcost}}</td>
                          <td class="w-1/5 px-4 py-3 text-xs text-center">
                            <span
                              class="px-2 py-1 font-semibold leading-tight text-purple-700 bg-purple-100 rounded-full">{{residency.BRreqstat}}
                            </span>
                          </td>
                          <td class="w-1/5 px-4 py-3 text-sm text-center">
                            <p>{{residency.BRdate}}</p>
                            <p>{{residency.BRtime}}</p>
                          </td>
                          <td class="w-1/5 px-4 py-3 text-sm text-center">Certificate of Residency{{residency.BRcedula}}</td>
                        </tr> -->
                        <!-- PERMIT -->
                        <!-- <tr class="flex bg-gray-50 hover:bg-gray-100 text-gray-700 text-center"
                         v-for="permit in permitRequest" :key="permit.id">
                          <td class="w-1/5 px-4 py-3">
                            <div class="flex items-center text-sm">
                              <div>
                                <p class="font-semibold text-center">
                                  {{permit.BPfirst}}{{space}}{{permit.BPmiddle}}{{space}}{{permit.BPlast}}
                                  </p>
                                <p class="text-xs text-gray-600 text-center">{{permit.BPvenue}}</p>
                              </div>
                            </div>
                          </td>
                          <td class="w-1/5 px-4 py-3 text-sm text-center">{{ "PHP " + permit.BPtotalcost}}</td>
                          <td class="w-1/5 px-4 py-3 text-xs text-center">
                            <span
                              class="px-2 py-1 font-semibold leading-tight text-purple-700 bg-purple-100 rounded-full">{{permit.BPreqstat}}
                            </span>
                          </td>
                          <td class="w-1/5 px-4 py-3 text-sm text-center">
                            <p>{{permit.BPdate}}</p>
                            <p>{{permit.BPtime}}</p>
                          </td>
                          <td class="w-1/5 px-4 py-3 text-sm text-center">Barangay Permit{{permit.BPcedula}}</td>
                        </tr> -->

                        <!-- list -->
                        <tr
                        v-for="request in list" :key="request.id">
                          <div class="flex bg-gray-50 hover:bg-gray-100 text-gray-700 text-center" 
                          v-if="request.reqtype === 'clearance'">
                            <td class="w-1/5 px-4 py-3">
                              <div class="flex items-center text-sm">
                                <div>
                                  <p class="font-semibold text-center">
                                    {{request.BCfirst}}{{space}}{{request.BCmiddle}}{{space}}{{request.BClast}}
                                    </p>
                                  <p class="text-xs text-gray-600 text-center">{{request.BCpurok}}</p>
                                </div>
                              </div>
                            </td>
                            <td class="w-1/5 px-4 py-3 text-sm text-center">{{"PHP " + request.BCtotalcost}}</td>
                            <td class="w-1/5 px-4 py-3 text-xs text-center">
                              <span
                                class="px-2 py-1 font-semibold leading-tight text-purple-700 bg-purple-100 rounded-full">{{request.BCreqstat}}
                              </span>
                            </td>
                            <td class="w-1/5 px-4 py-3 text-sm text-center">
                              <p>{{request.BCdate}}</p>
                              <p>{{request.BCtime}}</p>
                            </td>
                            <td class="w-1/5 px-4 py-3 text-sm text-center">Barangay Clearance{{request.BCcedula}}</td>
                          
                          </div>
                          <div class="flex bg-gray-50 hover:bg-gray-100 text-gray-700 text-center" 
                          v-else-if="request.reqtype === 'indigency'">
                            <td class="w-1/5 px-4 py-3">
                              <div class="flex items-center text-sm">
                                <div>
                                  <p class="font-semibold text-center">
                                    {{request.BIfirst}}{{space}}{{request.BImiddle}}{{space}}{{request.BIlast}}
                                    </p>
                                  <p class="text-xs text-gray-600 text-center">{{request.BIpurok}}</p>
                                </div>
                              </div>
                            </td>
                            <td class="w-1/5 px-4 py-3 text-sm text-center">{{"PHP " + request.BItotalcost}}</td>
                            <td class="w-1/5 px-4 py-3 text-xs text-center">
                              <span
                                class="px-2 py-1 font-semibold leading-tight text-purple-700 bg-purple-100 rounded-full">{{request.BIreqstat}}
                              </span>
                            </td>
                            <td class="w-1/5 px-4 py-3 text-sm text-center">
                              <p>{{request.BIdate}}</p>
                              <p>{{request.BItime}}</p>
                            </td>
                            <td class="w-1/5 px-4 py-3 text-sm text-center">Certificate of Indigency{{request.BIcedula}}</td>
                          
                          </div>
                          <div class="flex bg-gray-50 hover:bg-gray-100 text-gray-700 text-center" 
                          v-else-if="request.reqtype === 'residency'">
                            <td class="w-1/5 px-4 py-3">
                              <div class="flex items-center text-sm">
                                <div>
                                  <p class="font-semibold text-center">
                                    {{request.BRfirst}}{{space}}{{request.BRmiddle}}{{space}}{{request.BRlast}}
                                    </p>
                                  <p class="text-xs text-gray-600 text-center">{{request.BRpurok}}</p>
                                </div>
                              </div>
                            </td>
                            <td class="w-1/5 px-4 py-3 text-sm text-center">{{"PHP " + request.BRtotalcost}}</td>
                            <td class="w-1/5 px-4 py-3 text-xs text-center">
                              <span
                                class="px-2 py-1 font-semibold leading-tight text-purple-700 bg-purple-100 rounded-full">{{request.BRreqstat}}
                              </span>
                            </td>
                            <td class="w-1/5 px-4 py-3 text-sm text-center">
                              <p>{{request.BRdate}}</p>
                              <p>{{request.BRtime}}</p>
                            </td>
                            <td class="w-1/5 px-4 py-3 text-sm text-center">Certificate of Residency{{request.BRcedula}}</td>
                          </div>
                          <div class="flex bg-gray-50 hover:bg-gray-100 text-gray-700 text-center" 
                          v-else-if="request.reqtype === 'permit'">
                            <td class="w-1/5 px-4 py-3">
                              <div class="flex items-center text-sm">
                                <div>
                                  <p class="font-semibold text-center">
                                    {{request.BPfirst}}{{space}}{{request.BPmiddle}}{{space}}{{request.BPlast}}
                                    </p>
                                  <p class="text-xs text-gray-600 text-center">{{request.BPvenue}}</p>
                                </div>
                              </div>
                            </td>
                            <td class="w-1/5 px-4 py-3 text-sm text-center">{{ "PHP " + request.BPtotalcost}}</td>
                            <td class="w-1/5 px-4 py-3 text-xs text-center">
                              <span
                                class="px-2 py-1 font-semibold leading-tight text-purple-700 bg-purple-100 rounded-full">{{request.BPreqstat}}
                              </span>
                            </td>
                            <td class="w-1/5 px-4 py-3 text-sm text-center">
                              <p>{{request.BPdate}}</p>
                              <p>{{request.BPtime}}</p>
                            </td>
                            <td class="w-1/5 px-4 py-3 text-sm text-center">Barangay Permit{{request.BPcedula}}</td>
                          </div>
                        </tr>
                    
                  </tbody>
                </table>
              </div>
            </div>
          </div>
       
      </div>
    </div>
  </main>
</template>

<script>
import { clearanceColRef,permitColRef,releasedColRef,app,indigencyColRef,residencyColRef } from "../../firebase";
import { getFirestore, getDoc, doc ,setDoc,getDocs} from "firebase/firestore";
import { ref } from 'vue';
export default {
    data(){
        return{
            currentdate: ref(new Date()),
            dateToday:'',

            totalrevenuetoday:'0',
            totalappcount:'0',
            pendcount:'0',
            apptodaycount:'0',
            
            // clearanceRequest: [],
            // permitRequest: [],
            // indigencyRequest: [],
            // residencyRequest: [],
            list:[],
            space: ' ',
            def: true,
            modify: false,
            wCedula:'',
        }
    },
    async created(){
        const db = getFirestore(app);
        const userid = this.$route.params.id;
        const adminRef = doc(db, "Admin", userid);
        const adminSnap = await getDoc(adminRef);
        if(adminSnap.exists()){
            if(adminSnap.data().admintoken == 'Yes'){
              this.countreq();
            } else {
              this.$router.push("/admin-login");
            }
        } else {
          this.$router.push("/admin-login");
        }
    },
    methods: {
        async countreq(){
            
            if( this.currentdate.getMonth()==0){ 
                        this.dateToday = "January " + this.currentdate.getDate() + ", " +this.currentdate.getFullYear();
            } else if( this.currentdate.getMonth()==1){
                        this.dateToday = "Febuary" + this.currentdate.getDate() + ", " +this.currentdate.getFullYear();
            } else if( this.currentdate.getMonth()==2){
                        this.dateToday = "March " + this.currentdate.getDate() + ", " +this.currentdate.getFullYear();
            } else if( this.currentdate.getMonth()==3){
                        this.dateToday = "April " + this.currentdate.getDate() + ", " +this.currentdate.getFullYear();
            } else if( this.currentdate.getMonth()==4){
                        this.dateToday = "May " + this.currentdate.getDate() + ", " +this.currentdate.getFullYear();
            } else if( this.currentdate.getMonth()==5){
                        this.dateToday = "June " + this.currentdate.getDate() + ", " +this.currentdate.getFullYear();
            } else if( this.currentdate.getMonth()==6){
                        this.dateToday = "July " + this.currentdate.getDate() + ", " +this.currentdate.getFullYear();
            } else if( this.currentdate.getMonth()==7){
                        this.dateToday = "August " + this.currentdate.getDate() + ", " +this.currentdate.getFullYear();
            } else if( this.currentdate.getMonth()==8){
                        this.dateToday = "September " + this.currentdate.getDate() + ", " +this.currentdate.getFullYear();
            } else  if( this.currentdate.getMonth()==9){
                        this.dateToday = "October " + this.currentdate.getDate() + ", " +this.currentdate.getFullYear();
            } else  if( this.currentdate.getMonth()==10){
                        this.dateToday = "November " + this.currentdate.getDate() + ", " +this.currentdate.getFullYear();
            } else  if( this.currentdate.getMonth()==11){
                        this.dateToday = "December " + this.currentdate.getDate() + ", " +this.currentdate.getFullYear();
            } 

            let clearanceSnapshot = await getDocs(clearanceColRef);
            //let clearanceRequest =[];
            let permitSnapshot = await getDocs(permitColRef);
            //let permitRequest =[];
            let indigencySnapshot = await getDocs(indigencyColRef);
            //let indigencyRequest = [];
            let residencySnapshot = await getDocs(residencyColRef);
            //let residencyRequest = [];

            var listcount = 0;
            var listmax = 0;
            var listmin = 9999999999999;
            var count = 0;
            var apptoday=0;  
            var totalapp=0;
            clearanceSnapshot.forEach((clearance) =>{  
                let clearanceData = clearance.data();  
                if(clearanceData.BCdate==this.dateToday){
                  listcount = listcount +1;
                  if(clearanceData.que > listmax){
                    listmax = clearanceData.que;
                  } if (clearanceData.que < listmin){
                    listmin = clearanceData.que; 
                  }
                }if(clearanceData.BCreqstat=="Pending"){
                  count = count + 1;
                } if(clearanceData.BCreqstat!='Disapproved'){
                  totalapp = totalapp +1;
                }
              });
            indigencySnapshot.forEach((indigency) =>{  
                let indigencyData = indigency.data();  
                if(indigencyData.BIdate==this.dateToday){
                  listcount = listcount +1;
                  if(indigencyData.que > listmax){
                    listmax = indigencyData.que;
                  } if (indigencyData.que < listmin) {
                    listmin = indigencyData.que; 
                  }
                }if(indigencyData.BIreqstat=="Pending"){
                  count = count + 1;
                } if(indigencyData.BIreqstat!='Disapproved'){
                  totalapp = totalapp +1;
                }
              });  
            residencySnapshot.forEach((residency) =>{  
                let residencyData = residency.data(); 
                if(residencyData.BRdate==this.dateToday){
                  listcount = listcount +1;
                  if(residencyData.que > listmax){
                    listmax = residencyData.que;
                  } if(residencyData.que < listmin){
                  listmin = residencyData.que; 
                  }
                }if(residencyData.BRreqstat=="Pending"){
                  count = count + 1;
                } if(residencyData.BRreqstat!='Disapproved'){
                  totalapp = totalapp +1;
                } 
              });  
            permitSnapshot.forEach((permit) =>{   
                let permitData = permit.data(); 
                if(permitData.BPdate==this.dateToday){
                  listcount = listcount +1;
                  if(permitData.que > listmax){
                    listmax = permitData.que;
                  } if (permitData.que < listmin){
                    listmin = permitData.que; 
                  }
                }if(permitData.BPreqstat=="Pending"){
                  count = count + 1;
                } if(permitData.BPreqstat!='Disapproved'){
                  totalapp = totalapp +1;
                }
              });  
            if(listcount==1){
              listmax = listmin;
            }
           
            const list=[];
            for(listmin;listmax>=listmin;listmin++){

            // clearance
            clearanceSnapshot.forEach((clearance) =>{
                let clearanceData = clearance.data();
                clearanceData.id = clearance.id;
                if(clearanceData.BCdate==this.dateToday && clearanceData.que == listmin){
                  //clearanceRequest.push(clearanceData);
                  clearanceData.reqtype = 'clearance';
                  list.push(clearanceData);
                  apptoday = apptoday +1;
                  if (clearanceData.BCcedula=="Yes"){
                    clearanceData.BCcedula = ', Cedula'
                  } else{
                    clearanceData.BCcedula = ''
                  }
                } 
                  
            });
            // indigency
            indigencySnapshot.forEach((indigency) =>{
                let indigencyData = indigency.data();
                indigencyData.id = indigency.id;
                if(indigencyData.BIdate==this.dateToday && indigencyData.que == listmin){
                  //indigencyRequest.push(indigencyData);
                  indigencyData.reqtype = 'indigency';
                  list.push(indigencyData);
                  apptoday = apptoday +1;
                  if (indigencyData.BIcedula=="Yes"){
                    indigencyData.BIcedula = ', Cedula'
                  } else{
                    indigencyData.BIcedula = ''
                  }
                } 
                  
            });            
            // residency
            residencySnapshot.forEach((residency) =>{
                let residencyData = residency.data();
                residencyData.id = residency.id;
                if(residencyData.BRdate==this.dateToday && residencyData.que == listmin){
                  //residencyRequest.push(residencyData);
                  residencyData.reqtype = 'residency';
                  list.push(residencyData);
                  apptoday = apptoday +1;
                  if (residencyData.BRcedula=="Yes"){
                    residencyData.BRcedula = ', Cedula'
                  } else{
                    residencyData.BRcedula = ''
                  }
                } 
                  
            });            
            // permit
            permitSnapshot.forEach((permit) =>{
                let permitData = permit.data();
                permitData.id = permit.id;
                if(permitData.BPdate==this.dateToday && permitData.que == listmin){
                  //permitRequest.push(permitData);
                  permitData.reqtype = 'permit';
                  list.push(permitData);
                  apptoday = apptoday +1;
                  if (permitData.BPcedula=="Yes"){
                    permitData.BPcedula = ', Cedula'
                  } else{
                    permitData.BPcedula = ''
                  }
                }
                  
            });            
            }

            let releasedSnapshot = await getDocs(releasedColRef);
            var todaysrevenue = 0;
            releasedSnapshot.forEach((released) =>{
            let releasedData = released.data();
            releasedData.id = released.id;
            if(releasedData.date==this.dateToday){
              todaysrevenue = todaysrevenue +releasedData.amount;
            }
            
            });


            this.list = list;


            this.pendcount = count;
            this.apptodaycount = apptoday;
            this.totalappcount = totalapp;
            this.totalrevenuetoday = todaysrevenue;


        },
        gtAppointment(){
          const adminID = this.$route.params.id;
          this.$router.push(`/appointmentpage/${adminID}`);
        },
        gtRevenues(){
          const adminID = this.$route.params.id;
          this.$router.push(`/revenue/${adminID}`);
        },
        gtResidents(){
          const adminID = this.$route.params.id;
          this.$router.push(`/resident/${adminID}`);
        },
        gtDashboard(){
          const adminID = this.$route.params.id;
          this.$router.push(`/adminhomepage/${adminID}`);
        }, 
        async logout(){
        const db = getFirestore(app);
        const userid = this.$route.params.id;
        const adminRef = doc(db, "Admin", userid);
        const adminSnap = await getDoc(adminRef)
        if(adminSnap.exists()){
          const adminID = adminSnap.data().adminID;
          const admintoken = 'No';
          const username = adminSnap.data().username;
          const password = adminSnap.data().password;

          setDoc(doc(db, "Admin",adminID ),{ adminID,admintoken,username,password})
          this.$toast.success("Logged out!", {position: "top"});

          this.$router.push('/admin-login');
        }
        }
    }
}
</script>
