<template>
  <div main="trackcertpage">
    <div class="bg-white flex flex-col font-sans">
      <div class="w-screen shadow-lg">
        <Nav />
      </div>
      <div class="bg-gray-200 mt-3 h-screen">
        <!-- CLEARANCE -->
        <div
          v-if="clearanceExist"
          class="flex justify-evenly mt-1 py-10 bg-gray-200"
        >
          <div
            v-if="currentClearance"
            class="relative lg:w-1/3 w-2/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500"
          >
            <div class="absolute right-3 top-3">
              <text
                @click="editc(creqstat)"
                class="lg:text-4xl text-3xl material-icons text-amber-500 cursor-pointer mr-2 hover:text-amber-300"
                >edit</text
              >
              <text
                @click="Cdelete(creqstat)"
                class="lg:text-4xl text-3xl material-icons text-amber-500 cursor-pointer hover:text-amber-300"
                >cancel</text
              >
            </div>
            <div class="flex relative">
              <h1 class="text-xl font-semibold text-left">
                Barangay Clearance
              </h1>
            </div>
            <hr class="mb-1 border-t border-teal-400 w-3/4" />
            <div class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Name:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ cname }}</text
              >
            </div>
            <div class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Appointment Date:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ cdate + " at " + ctime }}</text
              >
            </div>
            <div class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Total Cost:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ ctotalcost }}</text
              >
            </div>
            <div class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Status:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ cstatus }}</text
              >
            </div>
            <div v-if="cdissapproved" class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Reason:
              </p>
              <text
                class="ml-3 font-semibold text-justify lg:text-md mt-4 text-gray-800"
                >{{ creason }}</text
              >
            </div>
          </div>
          <div
            v-if="editClearance"
            class="relative w-2/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500"
          >
            <h1 class="text-xl font-semibold text-left">Barangay Clearance</h1>
            <div class="absolute right-3 top-3">
              <text
                @click="canceleditc"
                class="text-4xl material-icons text-amber-500 cursor-pointer hover:text-amber-300"
                >cancel</text
              >
            </div>
            <div class="flex mt-5 text-left">
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >First Name</label
                >
                <input
                  v-model="newcfirst"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Midle Name</label
                >
                <input
                  v-model="newcmiddle"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Middle Name"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Last Name</label
                >
                <input
                  v-model="newclast"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Suffix</label
                >
                <input
                  v-model="newcsuffix"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Suffix"
                />
              </div>
            </div>
            <div class="flex mt-5 text-left">
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Purok</label
                >
                <select
                  v-model="newcpurok"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="purok1">Purok 1</option>
                  <option value="purok2">Purok 2</option>
                  <option value="purok3">Purok 3</option>
                </select>
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Citizenship</label
                >
                <input
                  v-model="newccitizenship"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Citizenship"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Status</label
                >
                <select
                  v-model="newcstatus"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Separated">Separated</option>
                </select>
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Age</label
                >
                <input
                  v-model="newcage"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Age"
                />
              </div>
            </div>
            <div class="flex mt-5 text-left">
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Quantity</label
                >
                <select
                  v-model="newcquantity"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2"
                  >Include Cedula</label
                >
                <select
                  v-model="newccedula"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div class="grid grid-cols-1 px-3 w-1/2">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Purpose</label
                >
                <input
                  v-model="newcpurpose"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Purpose"
                />
              </div>
            </div>
            <div class="flex justify-evenly">
              <div class="mt-5">
                <div
                  @click="SaveClearanceInfo"
                  class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
                >
                  Save
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="deleteclearance"
            class="relative w-1/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500"
          >
            <div class="flex relative">
              <h1 class="text-xl font-semibold text-left">
                Delete Barangay Clearance?
              </h1>
            </div>
            <hr class="mb-1 border-t border-teal-400 w-3/4" />
            <p class="text-red-500 uppercase font-bold">WARNING:</p>
            <p>
              Deleting this will automatically
              <span class="text-yellow-300 uppercase font-bold">CANCEL</span>
              your appointment
            </p>
            <div class="justify-evenly right-10 mt-10 flex">
              <div
                @click="confirmdelete"
                class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
              >
                Delete
              </div>
              <div
                @click="canceldelete"
                class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
              >
                Cancel
              </div>
            </div>
          </div>
        </div>

        <!-- INDIGENCY -->
        <div
          v-if="indigencyExist"
          class="flex justify-evenly mt-1 py-10 bg-gray-200"
        >
          <div
            v-if="currentIndigency"
            class="relative lg:w-1/3 w-2/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500"
          >
            <div class="absolute right-3 top-3">
              <text
                @click="editi(ireqstat)"
                class="lg:text-4xl text-3xl material-icons text-amber-500 cursor-pointer mr-2 hover:text-amber-300"
                >edit</text
              >
              <text
                @click="Idelete(ireqstat)"
                class="lg:text-4xl text-3xl material-icons text-amber-500 cursor-pointer hover:text-amber-300"
                >cancel</text
              >
            </div>
            <div class="flex relative">
              <h1 class="text-xl font-semibold text-left">
                Certificate of Indigency
              </h1>
            </div>
            <hr class="mb-1 border-t border-teal-400 w-3/4" />
            <div class="flex">
              <p class="font-semibold text-justify text- mt-4 text-cyan-600">
                Name:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ iname }}</text
              >
            </div>
            <div class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Appointment Date:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ idate + " at " + itime }}</text
              >
            </div>
            <div class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Total Cost:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ itotalcost }}</text
              >
            </div>
            <div class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Status:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ istatus }}</text
              >
            </div>
            <div v-if="idissapproved" class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Reason:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ ireason }}</text
              >
            </div>
          </div>
          <div
            v-if="editIndigency"
            class="relative lg:w-1/3 w-2/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500"
          >
            <h1 class="text-xl font-semibold text-left">
              Certificate of Indigency
            </h1>
            <div class="absolute right-3 top-3">
              <text
                @click="cancelediti"
                class="text-4xl material-icons text-amber-500 cursor-pointer hover:text-amber-300"
                >cancel</text
              >
            </div>
            <div class="flex mt-5 text-left">
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >First Name</label
                >
                <input
                  v-model="newifirst"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Midle Name</label
                >
                <input
                  v-model="newimiddle"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Middle Name"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Last Name</label
                >
                <input
                  v-model="newilast"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Suffix</label
                >
                <input
                  v-model="newisuffix"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Suffix"
                />
              </div>
            </div>
            <div class="flex mt-5 text-left">
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Purok</label
                >
                <select
                  v-model="newipurok"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="purok1">Purok 1</option>
                  <option value="purok2">Purok 2</option>
                  <option value="purok3">Purok 3</option>
                </select>
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Citizenship</label
                >
                <input
                  v-model="newicitizenship"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Citizenship"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Status</label
                >
                <select
                  v-model="newistatus"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Separated">Separated</option>
                </select>
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Age</label
                >
                <input
                  v-model="newiage"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Age"
                />
              </div>
            </div>
            <div class="flex mt-5 text-left">
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Quantity</label
                >
                <select
                  v-model="newiquantity"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2"
                  >Include Cedula</label
                >
                <select
                  v-model="newicedula"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div class="grid grid-cols-1 px-3 w-1/2">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Purpose</label
                >
                <input
                  v-model="newipurpose"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Purpose"
                />
              </div>
            </div>
            <div class="flex justify-evenly">
              <div class="mt-5">
                <div
                  @click="SaveIndigencyInfo"
                  class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
                >
                  Save
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="deleteindigency"
            class="relative w-1/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500"
          >
            <div class="flex relative">
              <h1 class="text-xl font-semibold text-left">
                Delete Certificate of Indigency?
              </h1>
            </div>
            <hr class="mb-1 border-t border-teal-400 w-3/4" />
            <p class="text-red-500 uppercase font-bold">WARNING:</p>
            <p>
              Deleting this will automatically
              <span class="text-yellow-300 uppercase font-bold">CANCEL</span>
              your appointment
            </p>
            <div class="justify-evenly right-10 mt-10 flex">
              <div
                @click="confirmdeletei"
                class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
              >
                Delete
              </div>
              <div
                @click="canceldeletei"
                class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
        <!-- RESIDENCY -->
        <div
          v-if="residencyExist"
          class="flex justify-evenly mt-1 py-10 bg-gray-200"
        >
          <div
            v-if="currentResidency"
            class="relative lg:w-1/3 w-2/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500"
          >
            <div class="absolute right-3 top-3">
              <text
                @click="editr(ireqstat)"
                class="lg:text-4xl text-3xl material-icons text-amber-500 cursor-pointer mr-2 hover:text-amber-300"
                >edit</text
              >
              <text
                @click="Rdelete(ireqstat)"
                class="lg:text-4xl text-3xl material-icons text-amber-500 cursor-pointer hover:text-amber-300"
                >cancel</text
              >
            </div>
            <div class="flex relative">
              <h1 class="text-xl font-semibold text-left">
                Certificate of Residency
              </h1>
            </div>
            <hr class="mb-1 border-t border-teal-400 w-3/4" />
            <div class="flex">
              <p class="font-semibold text-justify text- mt-4 text-cyan-600">
                Name:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ rname }}</text
              >
            </div>
            <div class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Appointment Date:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ rdate + " at " + rtime }}</text
              >
            </div>
            <div class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Total Cost:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ rtotalcost }}</text
              >
            </div>
            <div class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Status:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ rstatus }}</text
              >
            </div>
            <div v-if="rdissapproved" class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Reason:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ rreason }}</text
              >
            </div>
          </div>
          <div
            v-if="editResidency"
            class="relative w-2/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500"
          >
            <h1 class="text-xl font-semibold text-left">
              Certificate of Residency
            </h1>
            <div class="absolute right-3 top-3">
              <text
                @click="canceleditr"
                class="text-4xl material-icons text-amber-500 cursor-pointer hover:text-amber-300"
                >cancel</text
              >
            </div>
            <div class="flex mt-5 text-left">
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >First Name</label
                >
                <input
                  v-model="newrfirst"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Midle Name</label
                >
                <input
                  v-model="newrmiddle"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Middle Name"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Last Name</label
                >
                <input
                  v-model="newrlast"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Suffix</label
                >
                <input
                  v-model="newrsuffix"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Suffix"
                />
              </div>
            </div>
            <div class="flex mt-5 text-left">
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Purok</label
                >
                <select
                  v-model="newrpurok"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="purok1">Purok 1</option>
                  <option value="purok2">Purok 2</option>
                  <option value="purok3">Purok 3</option>
                </select>
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Citizenship</label
                >
                <input
                  v-model="newrcitizenship"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Citizenship"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Status</label
                >
                <select
                  v-model="newrstatus"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="Single">Single</option>
                  <option value="Married">Married</option>
                  <option value="Widowed">Widowed</option>
                  <option value="Divorced">Divorced</option>
                  <option value="Separated">Separated</option>
                </select>
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Age</label
                >
                <input
                  v-model="newrage"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Age"
                />
              </div>
            </div>
            <div class="flex mt-5 text-left">
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Quantity</label
                >
                <select
                  v-model="newrquantity"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                </select>
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="block mt-2 text-xs font-semibold text-gray-600 uppercase ml-2"
                  >Include Cedula</label
                >
                <select
                  v-model="newrcedula"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div class="grid grid-cols-1 px-3 w-1/2">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Purpose</label
                >
                <input
                  v-model="newrpurpose"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Purpose"
                />
              </div>
            </div>
            <div class="flex justify-evenly">
              <div class="mt-5">
                <div
                  @click="SaveResidencyInfo"
                  class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
                >
                  Save
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="deleteresidency"
            class="relative w-1/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500"
          >
            <div class="flex relative">
              <h1 class="text-xl font-semibold text-left">
                Delete Certificate of Residency?
              </h1>
            </div>
            <hr class="mb-1 border-t border-teal-400 w-3/4" />
            <p class="text-red-500 uppercase font-bold">WARNING:</p>
            <p>
              Deleting this will automatically
              <span class="text-yellow-300 uppercase font-bold">CANCEL</span>
              your appointment
            </p>
            <div class="justify-evenly right-10 mt-10 flex">
              <div
                @click="confirmdeleter"
                class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
              >
                Delete
              </div>
              <div
                @click="canceldeleter"
                class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
              >
                Cancel
              </div>
            </div>
          </div>
        </div>
        <!-- PERMIT -->
        <div
          v-if="permitExist"
          class="flex justify-evenly mt-1 py-10 bg-gray-200"
        >
          <div
            v-if="currentPermit"
            class="relative lg:w-1/3 w-2/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500"
          >
            <div class="absolute right-3 top-3">
              <text
                @click="editp(pstatus)"
                class="lg:text-4xl text-3xl material-icons text-amber-500 cursor-pointer mr-2 hover:text-amber-300"
                >edit</text
              >
              <text
                @click="Pdelete(pstatus)"
                class="lg:text-4xl text-3xl material-icons text-amber-500 cursor-pointer hover:text-amber-300"
                >cancel</text
              >
            </div>
            <div class="flex relative">
              <h1 class="lg:text-xl font-semibold text-left">Barangay Permit</h1>
            </div>
            <hr class="mb-1 border-t border-teal-400 w-3/4" />
            <div class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Name:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ pname }}</text
              >
            </div>
            <div class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Appointment Date:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ pdate + " at " + ptime }}</text
              >
            </div>
            <div class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Total Cost:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ ptotalcost }}</text
              >
            </div>
            <div class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Status:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ pstatus }}</text
              >
            </div>
            <div v-if="pdissapproved" class="flex">
              <p class="font-semibold text-justify text-md mt-4 text-cyan-600">
                Reason:
              </p>
              <text
                class="ml-3 font-semibold text-justify text-md mt-4 text-gray-800"
                >{{ preason }}</text
              >
            </div>
          </div>
          <div
            v-if="editPermit"
            class="relative w-2/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500"
          >
            <h1 class="text-xl font-semibold text-left">Barangay Permit</h1>
            <div class="absolute right-3 top-3">
              <text
                @click="canceleditp"
                class="text-4xl material-icons text-amber-500 cursor-pointer hover:text-amber-300"
                >cancel</text
              >
            </div>

            <div class="flex mt-5 text-left">
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >First Name</label
                >
                <input
                  v-model="newpfirst"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Midle Name</label
                >
                <input
                  v-model="newpmiddle"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Middle Name"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Last Name</label
                >
                <input
                  v-model="newplast"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Suffix</label
                >
                <input
                  v-model="newpsuffix"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Suffix"
                />
              </div>
            </div>
            <div class="flex mt-5 text-left">
              <div class="grid grid-cols-1 px-3 w-2/5">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Business Name</label
                >
                <input
                  v-model="newpbname"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Name of Business"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/5">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Venue</label
                >
                <select
                  v-model="newpvenue"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="purok1">purok1</option>
                  <option value="purok2">purok2</option>
                  <option value="purok3">purok3</option>
                </select>
              </div>
              <div class="grid grid-cols-1 px-3 w-2/5">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Business Nature</label
                >
                <input
                  v-model="newpnature"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Nature of Business"
                />
              </div>
            </div>
            <div class="flex mt-5 mb-5 text-left">
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Effectivity</label
                >
                <Datepicker
                  v-model="month"
                  monthPicker
                  :minDate="new Date().toISOString().substr(0, 10)"
                />
              </div>
              <div class="grid grid-cols-1 px-3 w-1/4">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Include Cedula</label
                >
                <select
                  v-model="newpcedula"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                >
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              <div class="grid grid-cols-1 px-3 w-1/2">
                <label
                  class="uppercase md:text-sm text-xs text-gray-500 text-light font-semibold"
                  >Purpose</label
                >
                <input
                  v-model="newppurpose"
                  class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  type="text"
                  placeholder="Purpose"
                />
              </div>
            </div>
            <div class="flex justify-evenly">
              <div class="mt-5">
                <div
                  @click="SavePermitInfo"
                  class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
                >
                  Save
                </div>
              </div>
            </div>
          </div>
          <div
            v-if="deletepermit"
            class="relative w-1/3 px-10 py-10 rounded-lg border-2 bg-gray-100 border-gray-500"
          >
            <div class="flex relative">
              <h1 class="text-xl font-semibold text-left">
                Delete Barangay Permit?
              </h1>
            </div>
            <hr class="mb-1 border-t border-teal-400 w-3/4" />
            <p class="text-red-500 uppercase font-bold">WARNING:</p>
            <p>
              Deleting this will automatically
              <span class="text-yellow-300 uppercase font-bold">CANCEL</span>
              your appointment
            </p>
            <div class="justify-evenly right-10 mt-10 flex">
              <div
                @click="confirmdeletep"
                class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
              >
                Delete
              </div>
              <div
                @click="canceldeletep"
                class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
              >
                Cancel
              </div>
            </div>
          </div>
        </div>

        <div
          v-if="empty"
          class="flex justify-evenly mt-1 py-10 h-screen object-center"
        >
          <div class="w-1/2 px-10 py-10 object-center">
            <text
              class="text-4xl text-amber-500 cursor-pointer mr-2 hover:text-amber-300"
              >You have no pending transactions at the moment</text
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import Nav from "../components/Nav.vue";
import "@vuepic/vue-datepicker/dist/main.css";
import { app } from "../firebase";
import { ref } from "vue";
import {
  clearanceColRef,
  permitColRef,
  indigencyColRef,
  residencyColRef,
} from "../firebase";
import {
  getFirestore,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
} from "firebase/firestore";

export default {
  components: { Datepicker, Nav },
  setup() {
    const month = ref({
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    });
    return {
      month,
    };
  },
  data() {
    return {
      ReqType: "",
      emonth: "",
      eyear: "",

      cname: "",
      cstatus: "",
      ctime: "",
      cdate: "",
      ctotalcost: "",
      newcfirst: "",
      newcmiddle: "",
      newclast: "",
      newcsuffix: "",
      newcpurok: "",
      newccitizenship: "",
      newcstatus: "",
      newcage: "",
      newcquantity: "",
      newccedula: "",
      newcpurpose: "",

      clearanceExist: false,
      currentClearance: false,
      editClearance: false,
      deleteclearance: false,
      indigencyExist: false,
      currentIndigency: false,
      editIndigency: false,
      deleteindigency: false,
      residencyExist: false,
      currentResidency: false,
      editResidency: false,
      deleteresidency: false,
      permitExist: false,
      currentPermit: false,
      editPermit: false,
      deletePermit: false,
      empty: true,
      cdissapproved: false,
      pdissapproved: false,
      idissapproved: false,
      rdisapproved: false,
    };
  },
  mounted() {
    this.userID = this.$route.params.id;
    this.loadrequests();
  },
  methods: {
    async loadrequests() {
      const db = getFirestore(app);
      const userid = this.userID;

      //Load Resident Details
      const residentRef = doc(db, "residents", userid);
      const residentSnap = await getDoc(residentRef);
      if (residentSnap.exists()) {
        if (residentSnap.data().logintoken == "Yes") {
          this.first = residentSnap.data().first;
          this.middle = residentSnap.data().middle;
          this.last = residentSnap.data().last;
          this.suffix = residentSnap.data().suffix;
          this.purok = residentSnap.data().purok;
          this.phonenumber = residentSnap.data().phonenumber;
          this.password = residentSnap.data().password;
        } else {
          this.$router.push("/");
        }
      } else {
        this.$router.push("/");
        console.log("No such document!");
      }

      const clearanceRef = doc(db, "Clearance Requests", userid);
      const clearanceSnap = await getDoc(clearanceRef);
      const permitRef = doc(db, "Permit Requests", userid);
      const permitSnap = await getDoc(permitRef);
      const indigencyRef = doc(db, "Indigency Requests", userid);
      const indigencySnap = await getDoc(indigencyRef);
      const residencyRef = doc(db, "Residency Requests", userid);
      const residencySnap = await getDoc(residencyRef);

      if (
        clearanceSnap.exists() ||
        permitSnap.exists() ||
        indigencySnap.exists() ||
        residencySnap.exists()
      ) {
        if (clearanceSnap.exists()) {
          this.clearanceExist = true;
          this.currentClearance = true;
          this.editClearance = false;
          this.empty = false;
          this.cname =
            clearanceSnap.data().BCfirst +
            " " +
            clearanceSnap.data().BCmiddle +
            " " +
            clearanceSnap.data().BClast;
          this.cstatus = clearanceSnap.data().BCreqstat;
          this.cdate = clearanceSnap.data().BCdate;
          this.ctime = clearanceSnap.data().BCtime;
          this.creqstat = clearanceSnap.data().BCreqstat;
          this.ctotalcost = clearanceSnap.data().BCtotalcost;

          this.m = clearanceSnap.data().m;
          this.d = clearanceSnap.data().d;
          this.y = clearanceSnap.data().y;
          this.cque = clearanceSnap.data().que;

          if (this.creqstat == "Disapproved") {
            this.cdissapproved = true;
            this.creason = clearanceSnap.data().BCreason;
          } else {
            this.cdissapproved = false;
          }

          this.newcfirst = clearanceSnap.data().BCfirst;
          this.newcmiddle = clearanceSnap.data().BCmiddle;
          this.newclast = clearanceSnap.data().BClast;
          this.newcsuffix = clearanceSnap.data().BCsuffix;
          this.newcpurok = clearanceSnap.data().BCpurok;
          this.newccitizenship = clearanceSnap.data().BCcitizenship;
          this.newcstatus = clearanceSnap.data().BCstatus;
          this.newcage = clearanceSnap.data().BCage;
          this.newcquantity = clearanceSnap.data().BCquantity;
          this.newccedula = clearanceSnap.data().BCcedula;
          this.newcpurpose = clearanceSnap.data().BCpurpose;
        }
        if (permitSnap.exists()) {
          this.permitExist = true;
          this.currentPermit = true;
          this.editPermit = false;
          this.empty = false;
          this.pname =
            permitSnap.data().BPfirst +
            " " +
            permitSnap.data().BPmiddle +
            " " +
            permitSnap.data().BPlast;
          this.pstatus = permitSnap.data().BPreqstat;
          this.pdate = permitSnap.data().BPdate;
          this.ptime = permitSnap.data().BPtime;
          this.ptotalcost = permitSnap.data().BPtotalcost;

          this.m = permitSnap.data().m;
          this.d = permitSnap.data().d;
          this.y = permitSnap.data().y;
          this.pque = permitSnap.data().que;

          if (this.pstatus == "Disapproved") {
            this.pdissapproved = true;
            this.preason = permitSnap.data().BPreason;
          } else {
            this.pdissapproved = false;
          }

          this.month = permitSnap.data().BPedate;
          this.newpfirst = permitSnap.data().BPfirst;
          this.newpmiddle = permitSnap.data().BPmiddle;
          this.newplast = permitSnap.data().BPlast;
          this.newpsuffix = permitSnap.data().BPsuffix;
          this.newpbname = permitSnap.data().BPbname;
          this.newpvenue = permitSnap.data().BPvenue;
          this.newpnature = permitSnap.data().BPnature;
          this.newpcedula = permitSnap.data().BPcedula;
          this.newppurpose = permitSnap.data().BPpurpose;
        }
        if (indigencySnap.exists()) {
          this.indigencyExist = true;
          this.currentIndigency = true;
          this.editIndigency = false;
          this.empty = false;
          this.iname =
            indigencySnap.data().BIfirst +
            " " +
            indigencySnap.data().BImiddle +
            " " +
            indigencySnap.data().BIlast;
          this.istatus = indigencySnap.data().BIreqstat;
          this.idate = indigencySnap.data().BIdate;
          this.itime = indigencySnap.data().BItime;
          this.ireqstat = indigencySnap.data().BIreqstat;
          this.itotalcost = indigencySnap.data().BItotalcost;

          this.m = indigencySnap.data().m;
          this.d = indigencySnap.data().d;
          this.y = indigencySnap.data().y;
          this.ique = indigencySnap.data().que;

          if (this.ireqstat == "Disapproved") {
            this.idissapproved = true;
            this.ireason = indigencySnap.data().BIreason;
          } else {
            this.idissapproved = false;
          }

          this.newifirst = indigencySnap.data().BIfirst;
          this.newimiddle = indigencySnap.data().BImiddle;
          this.newilast = indigencySnap.data().BIlast;
          this.newisuffix = indigencySnap.data().BIsuffix;
          this.newipurok = indigencySnap.data().BIpurok;
          this.newicitizenship = indigencySnap.data().BIcitizenship;
          this.newistatus = indigencySnap.data().BIstatus;
          this.newiage = indigencySnap.data().BIage;
          this.newiquantity = indigencySnap.data().BIquantity;
          this.newicedula = indigencySnap.data().BIcedula;
          this.newipurpose = indigencySnap.data().BIpurpose;
        }
        if (residencySnap.exists()) {
          this.residencyExist = true;
          this.currentResidency = true;
          this.editResidency = false;
          this.empty = false;
          this.rname =
            residencySnap.data().BRfirst +
            " " +
            residencySnap.data().BRmiddle +
            " " +
            residencySnap.data().BRlast;
          this.rstatus = residencySnap.data().BRreqstat;
          this.rdate = residencySnap.data().BRdate;
          this.rtime = residencySnap.data().BRtime;
          this.rreqstat = residencySnap.data().BRreqstat;
          this.rtotalcost = residencySnap.data().BRtotalcost;

          this.m = residencySnap.data().m;
          this.d = residencySnap.data().d;
          this.y = residencySnap.data().y;
          this.rque = residencySnap.data().que;

          if (this.rreqstat == "Disapproved") {
            this.rdissapproved = true;
            this.rreason = residencySnap.data().BRreason;
          } else {
            this.rdissapproved = false;
          }

          this.newrfirst = residencySnap.data().BRfirst;
          this.newrmiddle = residencySnap.data().BRmiddle;
          this.newrlast = residencySnap.data().BRlast;
          this.newrsuffix = residencySnap.data().BRsuffix;
          this.newrpurok = residencySnap.data().BRpurok;
          this.newrcitizenship = residencySnap.data().BRcitizenship;
          this.newrstatus = residencySnap.data().BRstatus;
          this.newrage = residencySnap.data().BRage;
          this.newrquantity = residencySnap.data().BRquantity;
          this.newrcedula = residencySnap.data().BRcedula;
          this.newrpurpose = residencySnap.data().BRpurpose;
        }
      } else {
        console.log("No such document!");
        this.empty = true;
      }
    },
    //Barangay Residency
    Rdelete(status) {
      if (status == "Pending" || status == "Disapproved") {
        this.deleteresidency = true;
        this.currentResidency = false;
      } else {
        this.$toast.warning("Can only delete Pending or Disapproved Requests", {
          position: "top",
        });
      }
    },
    editr(status) {
      if (status == "Pending") {
        this.residencyExist = true;
        this.currentResidency = false;
        this.editResidency = true;
      } else {
        this.$toast.warning("Can only Edit Pending Requests", {
          position: "top",
        });
      }
    },
    async SaveResidencyInfo() {
      var cost = 0;
      if (this.newrcedula == "Yes") {
        cost = cost + 60;
      }

      const BRtotalcost = cost + 70 * this.newiquantity;
      const BRdate = this.rdate;
      const BRtime = this.rtime;
      const BRfirst = this.newrfirst;
      const BRmiddle = this.newrmiddle;
      const BRlast = this.newrlast;
      const BRsuffix = this.newrsuffix;
      const BRpurok = this.newrpurok;
      const BRcitizenship = this.newrcitizenship;
      const BRstatus = this.newrstatus;
      const BRage = this.newrage;
      const BRquantity = this.newrquantity;
      const BRcedula = this.newrcedula;
      const BRpurpose = this.newrpurpose;
      const BRreqstat = "Pending";

      const m = this.m;
      const d = this.d;
      const y = this.y;
      const que = this.cque;

      const db = getFirestore(app);
      const currendID = this.userID;
      console.log("Creating Data");
      await setDoc(doc(db, "Residency Requests", currendID), {
        currendID,
        BRdate,
        BRtime,
        BRfirst,
        BRmiddle,
        BRlast,
        BRsuffix,
        BRpurok,
        BRcitizenship,
        BRstatus,
        BRage,
        BRquantity,
        BRcedula,
        BRtotalcost,
        BRpurpose,
        BRreqstat,
        m,
        d,
        y,
        que,
      });
      this.$toast.success("Changes Saved", {
        position: "top",
      });
      this.loadrequests();
    },
    canceleditr() {
      this.residencyExist = true;
      this.currentResidency = true;
      this.editResidency = false;
    },
    canceldeleter() {
      this.deleteresidency = false;
      this.loadrequests();
    },
    async confirmdeleter() {
      let resiRef = doc(residencyColRef, this.userID);
      await deleteDoc(resiRef);
      this.$toast.success("deleted", {
        position: "top",
      });
      this.deleteresidency = false;
      console.log("deleted");
      this.loadrequests();
    },
    //Barangay Indigency
    Idelete(status) {
      if (status == "Pending" || status == "Disapproved") {
        this.deleteindigency = true;
        this.currentIndigency = false;
      } else {
        this.$toast.warning("Can only delete Pending or Disapproved Requests", {
          position: "top",
        });
      }
    },
    editi(status) {
      if (status == "Pending") {
        this.indigencyExist = true;
        this.currentIndigency = false;
        this.editIndigency = true;
      } else {
        this.$toast.warning("Can only Edit Pending Requests", {
          position: "top",
        });
      }
    },
    async SaveIndigencyInfo() {
      var cost = 0;
      if (this.newicedula == "Yes") {
        cost = cost + 60;
      }

      const BItotalcost = cost + 70 * this.newiquantity;
      const BIdate = this.idate;
      const BItime = this.itime;
      const BIfirst = this.newifirst;
      const BImiddle = this.newimiddle;
      const BIlast = this.newilast;
      const BIsuffix = this.newisuffix;
      const BIpurok = this.newipurok;
      const BIcitizenship = this.newicitizenship;
      const BIstatus = this.newistatus;
      const BIage = this.newiage;
      const BIquantity = this.newiquantity;
      const BIcedula = this.newicedula;
      const BIpurpose = this.newipurpose;
      const BIreqstat = "Pending";

      const m = this.m;
      const d = this.d;
      const y = this.y;
      const que = this.ique;

      const db = getFirestore(app);
      const currendID = this.userID;
      console.log("Creating Data");
      await setDoc(doc(db, "Indigency Requests", currendID), {
        currendID,
        BIdate,
        BItime,
        BIfirst,
        BImiddle,
        BIlast,
        BIsuffix,
        BIpurok,
        BIcitizenship,
        BIstatus,
        BIage,
        BIquantity,
        BIcedula,
        BItotalcost,
        BIpurpose,
        BIreqstat,
        m,
        d,
        y,
        que,
      });
      this.$toast.success("Changes Saved", {
        position: "top",
      });
      this.loadrequests();
    },
    cancelediti() {
      this.indigencyExist = true;
      this.currentIndigency = true;
      this.editIndigency = false;
    },
    canceldeletei() {
      this.deleteindigency = false;
      this.loadrequests();
    },
    async confirmdeletei() {
      let indiRef = doc(indigencyColRef, this.userID);
      await deleteDoc(indiRef);
      this.$toast.success("deleted", {
        position: "top",
      });
      this.deleteindigency = false;
      console.log("deleted");
      this.loadrequests();
    },

    //Barangay Clearance
    Cdelete(status) {
      if (status == "Pending" || status == "Disapproved") {
        this.deleteclearance = true;
        this.currentClearance = false;
      } else {
        this.$toast.warning("Can only delete Pending or Disapproved Requests", {
          position: "top",
        });
      }
    },
    editc(status) {
      if (status == "Pending") {
        this.clearanceExist = true;
        this.currentClearance = false;
        this.editClearance = true;
      } else {
        this.$toast.warning("Can only Edit Pending Requests", {
          position: "top",
        });
      }
    },
    async SaveClearanceInfo() {
      var cost = 0;
      if (this.newccedula == "Yes") {
        cost = cost + 60;
      }

      const BCtotalcost = cost + 70 * this.newcquantity;
      const BCdate = this.cdate;
      const BCtime = this.ctime;
      const BCfirst = this.newcfirst;
      const BCmiddle = this.newcmiddle;
      const BClast = this.newclast;
      const BCsuffix = this.newcsuffix;
      const BCpurok = this.newcpurok;
      const BCcitizenship = this.newccitizenship;
      const BCstatus = this.newcstatus;
      const BCage = this.newcage;
      const BCquantity = this.newcquantity;
      const BCcedula = this.newccedula;
      const BCpurpose = this.newcpurpose;
      const BCreqstat = "Pending";

      const m = this.m;
      const d = this.d;
      const y = this.y;
      const que = this.cque;

      const db = getFirestore(app);
      const currendID = this.userID;
      console.log("Creating Data");
      await setDoc(doc(db, "Clearance Requests", currendID), {
        currendID,
        BCdate,
        BCtime,
        BCfirst,
        BCmiddle,
        BClast,
        BCsuffix,
        BCpurok,
        BCcitizenship,
        BCstatus,
        BCage,
        BCquantity,
        BCcedula,
        BCtotalcost,
        BCpurpose,
        BCreqstat,
        m,
        d,
        y,
        que,
      });
      this.$toast.success("Changes Saved", {
        position: "top",
      });
      this.loadrequests();
    },
    canceleditc() {
      this.clearanceExist = true;
      this.currentClearance = true;
      this.editClearance = false;
    },
    canceldelete() {
      this.deleteclearance = false;
      this.loadrequests();
    },
    async confirmdelete() {
      let cleRef = doc(clearanceColRef, this.userID);
      await deleteDoc(cleRef);
      this.$toast.success("deleted", {
        position: "top",
      });
      this.deleteclearance = false;
      console.log("deleted");
      this.loadrequests();
    },

    // Barangay Permit
    Pdelete(status) {
      if (status == "Pending" || status == "Disapproved") {
        this.deletepermit = true;
        this.currentPermit = false;
      } else {
        this.$toast.warning("Can only delete Pending or Disapproved Requests", {
          position: "top",
        });
      }
    },
    editp(status) {
      if (status == "Pending") {
        this.permitExist = true;
        this.currentPermit = false;
        this.editPermit = true;
      } else {
        this.$toast.warning("Can only edit Pending Requests", {
          position: "top",
        });
      }
    },
    async SavePermitInfo() {
      var cost = 70;
      if (this.newpcedula == "Yes") {
        cost = cost + 60;
      }

      if (this.month.month == 0) {
        this.newpeffectivity = "January, " + this.month.year;
      } else if (this.month.month == 1) {
        this.newpeffectivity = "Febuary, " + this.month.year;
      } else if (this.month.month == 2) {
        this.newpeffectivity = "March, " + this.month.year;
      } else if (this.month.month == 3) {
        this.newpeffectivity = "April, " + this.month.year;
      } else if (this.month.month == 4) {
        this.newpeffectivity = "May, " + this.month.year;
      } else if (this.month.month == 5) {
        this.newpeffectivity = "June, " + this.month.year;
      } else if (this.month.month == 6) {
        this.newpeffectivity = "July, " + this.month.year;
      } else if (this.month.month == 7) {
        this.newpeffectivity = "August, " + this.month.year;
      } else if (this.month.month == 8) {
        this.newpeffectivity = "September, " + this.month.year;
      } else if (this.month.month == 9) {
        this.newpeffectivity = "October, " + this.month.year;
      } else if (this.month.month == 10) {
        this.newpeffectivity = "November, " + this.month.year;
      } else if (this.month.month == 11) {
        this.newpeffectivity = "December, " + this.month.year;
      }

      const BPdate = this.pdate;
      const BPtime = this.ptime;
      const BPfirst = this.newpfirst;
      const BPmiddle = this.newpmiddle;
      const BPlast = this.newplast;
      const BPsuffix = this.newpsuffix;
      const BPbname = this.newpbname;
      const BPvenue = this.newpvenue;
      const BPnature = this.newpnature;
      const BPeffectivity = this.newpeffectivity;
      const BPcedula = this.newpcedula;
      const BPpurpose = this.newppurpose;
      const BPtotalcost = cost;
      const BPreqstat = "Pending";
      const BPedate = this.month;

      const m = this.m;
      const d = this.d;
      const y = this.y;
      const que = this.pque;

      const db = getFirestore(app);
      const currendID = this.userID;
      console.log("Creating Data");
      await setDoc(doc(db, "Permit Requests", currendID), {
        currendID,
        BPdate,
        BPtime,
        BPfirst,
        BPmiddle,
        BPlast,
        BPsuffix,
        BPbname,
        BPvenue,
        BPnature,
        BPcedula,
        BPpurpose,
        BPtotalcost,
        BPreqstat,
        BPeffectivity,
        BPedate,
        m,
        d,
        y,
        que,
      });
      this.$toast.success("Document Added Successfully", {
        position: "top",
      });
      this.loadrequests();
    },
    canceleditp() {
      this.permitExist = true;
      this.currentPermit = true;
      this.editPermit = false;
    },
    canceldeletep() {
      this.deletepermit = false;
      this.loadrequests();
    },
    async confirmdeletep() {
      let perRef = doc(permitColRef, this.userID);
      await deleteDoc(perRef);
      this.$toast.info("deleted", {
        position: "top",
      });
      this.deletepermit = false;
      console.log("deleted");
      this.loadrequests();
    },

    
  },
};
</script>
