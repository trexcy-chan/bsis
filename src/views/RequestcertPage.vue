<template>
  <div main="requestcertpage">
    <div class="bg-white flex flex-col font-sans">
      <div class="lg:flex">
          <Nav class="fixed z-10"/>
        <div class="lg:w-1/4 mt-5 lg:px-10 text-left mx-auto block w-min">
          <label class="font-bold text-amber-500 uppercase"
            >Request Certificate</label
          >
          <div class="block mt-10 w-60">
            <ul class="whitespace-nowrap">
              <li
                v-if="dat1"
                @click="DateTime"
                class="bg-none hover:bg-teal-100 border border-gray-400 text-gray-500 px-1"
              >
                Date and Time
              </li>
              <li
                v-if="dat2"
                class="bg-none hover:bg-teal-100 border border-gray-400 text-amber-500 px-1"
              >
                Date and Time
              </li>
              <li
                v-if="ai1"
                class="bg-none hover:bg-teal-100 border border-gray-400 text-gray-500 px-1"
              >
                Application Information
              </li>
              <li
                v-if="ai2"
                class="bg-none hover:bg-teal-100 border border-gray-400 text-amber-500 px-1"
              >
                Application Information
              </li>
              <li
                v-if="rai1"
                class="bg-none hover:bg-teal-100 border border-gray-400 text-gray-500 px-1"
              >
                Review Application Information
              </li>
              <li
                v-if="rai2"
                class="bg-none hover:bg-teal-100 border border-gray-400 text-amber-500 px-1"
              >
                Review Application Information
              </li>
            </ul>
          </div>
        </div>
         <div class="lg:w-3/4 h-screen w-11/12 mx-auto">
          <div v-if="start" class="lg:w-3/4 mt-5">
            <form class="">
              <h1 class="text-2xl font-semibold text-left lg:mt-20">
                Notes and Instructions:
              </h1>
              <h2 class="text-lg text-left text-red-400 mt-7 font-medium">
                PLEASE BRING THE FOLLOWING:
              </h2>
              <p class="font-semibold text-justify text-lg mt-4 text-cyan-600">
                Valid Resident ID
              </p>
              <p class="font-normal text-justify lg:ml-6">
                Upon claiming the requested certificate, the resident must bring
                1 valid ID in acquiring the requested certificate.
              </p>
              <p class="font-semibold text-justify text-lg mt-4 text-cyan-600">
                Resident Cedula
              </p>
              <p class="font-normal text-justify lg:ml-6">
                Cedula is one of the requirements upon claiming the requested
                certificate. The resident may bring the physical and valid
                cedula in the brgy office, nonetheless, if the resident doesn't
                have it, the cedula will be added in the requested certificate
                with the prescribe amount.
              </p>

              <div class="w-full flex justify-evenly mt-10">
                <div
                  @click="DateTime"
                  class="lg:w-1/4 w-1/3 h-10 rounded-full bg-amber-500 hover:bg-amber-300 my-3 text-center cursor-pointer text-xl text-white font-medium py-1"
                >
                  Proceed
                </div>
              </div>
            </form>
          </div>
          <div v-if="OptionDateTime">
            <div class="mt-5 ml-10 text-xl text-left font-bold text-cyan-500">
              Select Date & Time
            </div>
            <div class="lg:flex justify-evenly mt-5 px-5">
              <div class="text-left">
                <text class="font-bold text-amber-500 uppercase">Date</text>
                <Datepicker
                  v-model="calendar"
                  inline
                  autoApply
                  :minDate="new Date().toISOString().substr(0, 10)"
                  :disabledWeekDays="[0]"
                  class="mt-5"
                  :enableTimePicker="false"
                ></Datepicker>
              </div>
              <div class="text-left lg:mt-0 mt-10">
                <text class="font-bold text-amber-500 uppercase mb-5 block">Time</text>

                <Datepicker
                  v-model="time"
                  timePicker
                  :is24="false"
                  :minTime="{ hours: 8, minutes: 30 }"
                  :maxTime="{ hours: 16, minutes: 50 }"
                />

                <div class="lg:ml-4 mt-6 text-justify font-semibold">
                  <p class="text-red-500">
                    Note: There is no office during these holidays:
                  </p>
                  <ul class="mt-1.5">
                    <li>January 1- New Year's Day</li>
                    <li>April 9- Araw ng Kagitingan Day</li>
                    <li>June 12- Independence Day</li>
                    <li>November 30- Bonifacio Day</li>
                    <li>December 25- Christmas</li>
                    <li>December 31- New Year's Eve</li>
                  </ul>
                </div>
              </div>
            </div>

            <button
              @click="savedate"
              class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 text-center cursor-pointer text-xl text-white font-medium py-1 lg:float-right lg:mr-44 mx-auto lg:my-0 my-16"
            >
              Request
            </button>

            <div
              v-if="previewdate"
              class="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
              style="background: rgba(0, 0, 0, 0.7)"
            >
              <div
                class="border border-blue-500 shadow-lg modal-container bg-white lg:w-4/12 w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
              >
                <div class="modal-content py-4 text-left px-6">

                  <div class="flex justify-between items-center pb-3">
                    <p class="text-2xl font-bold text-gray-500">
                      Your Appointment Date and Time:
                    </p>
                    <div
                      @click="closepreview"
                      class="modal-close cursor-pointer z-50"
                    >
                      <svg
                        class="fill-current text-gray-500"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                      >
                        <path
                          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div class="my-5 mr-5 ml-5 flex justify-center">
                    <form class="w-full">
                      <div class="">
                        <div class="flex">
                          <p class="font-semibold">Date:</p>
                          <p class="font-semibold text-justify ml-2">
                            {{ selectedDate }}
                          </p>
                        </div>
                        <div class="flex">
                          <p class="font-semibold">Time:</p>
                          <p class="font-semibold text-justify ml-2">
                            {{ selectedTime }}
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>

                  <div class="flex justify-end pt-2 space-x-14">
                    <button
                      @click="closepreview"
                      class="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      @click="AppInfo"
                      class="px-4 bg-amber-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div v-if="OptionAppInfo" class="w-full">
            <div class="h-screen">
              <div class="mt-5 mb-4 text-center">
                <label class="font-bold text-amber-500 uppercase"
                  >Application Information</label
                >
              </div>
             
                <div class="lg:w-3/4 lg:flex px-5 lg:mt-10">
                  <label
                    class="whitespace-nowrap block  text-lg font-semibold text-gray-600 mx-3"
                    >Certificate Type:</label
                  >
                  <select
                    v-model="ctype"
                    class="py-2 px-3 rounded-lg border-2 font-semibold border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent w-10/12"
                  >
                    <option value="BARANGAY CLEARANCE">
                      BARANGAY CLEARANCE
                    </option>
                    <option value="BUSINESS PERMIT">BUSINESS PERMIT</option>
                    <option value="CERTIFICATE OF INDIGENCY">
                      CERTIFICATE OF INDIGENCY
                    </option>
                    <option value="CERTIFICATE OF RESIDENCY">
                      CERTIFICATE OF RESIDENCY
                    </option>
                  </select>
                  <div
                    @click="SelectCert"
                    class="w-32 h-10 rounded-lg bg-amber-500 hover:bg-amber-300 text-center cursor-pointer text-xl text-white font-medium lg:mx-3 mx-auto lg:mt-1 mt-5 py-1"
                  >
                    Continue
                  </div>
                </div>
              

              <div v-if="BrgyClearance" class="mt-3 px-5 w-full h-3/4">
                <div class="lg:p-0 p-3 w-full lg:h-1/5 bg-teal-100 rounded text-left">
                  <p class="pt-0 font-bold text-blue-700 pt-3 lg:ml-5 text-lg">
                    BARANGAY CLEARANCE
                  </p>
                  <p class="font-bold text-neutral-800 pt-1 lg:ml-10 text-base">
                    Issued identification documents needed for many important
                    business job or personal transactions.
                  </p>
                </div>
                <div class="mt-5 w-full px-2 rounded border-2">
                  <div class="text-center">
                    <p class="font-bold text-amber-500 pt-3 text-lg">
                      Please provide all the information below
                    </p>
                  </div>
                  <div class="lg:flex lg:mt-10 text-left">
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >First Name</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent uppercase"
                        type="text"
                        >{{ first }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Midle Name</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ middle }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Last Name</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ last }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Suffix</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ suffix }}</text
                      >
                    </div>
                  </div>
                  <div class="lg:flex mt-5 text-left">
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Purok</label
                      >

                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ purok }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Citizenship</label
                      >
                      <input
                        v-model="iccitizenship"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="Citizenship"
                      />
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Status</label
                      >
                      <select
                        v-model="icstatus"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Widowed">Widowed</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Separated">Separated</option>
                      </select>
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Age</label
                      >
                      <input
                        v-model="icage"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="Age"
                      />
                    </div>
                  </div>
                  <div class="lg:flex lg:mt-5 lg:mb-5 text-left">
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Quantity</label
                      >
                      <select
                        v-model="icquantity"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="block lg:mt-2 text-sm font-semibold text-gray-600 uppercase"
                        >Include Cedula</label
                      >
                      <select
                        v-model="icedula"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/2">
                      <label
                        class="block lg:mt-2 text-sm font-semibold text-gray-600 uppercase"
                        >Purpose</label
                      >
                      <input
                        v-model="icpurpose"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="Purpose"
                      />
                    </div>
                  </div>
                  <div class="lg:flex justify-evenly lg:mb-3 my-10">
                    <div class="flex mx-auto w-min">
                      <div
                        @click="ClearanceInfo"
                        class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
                      >
                        Request
                      </div>
                      <div
                        @click="DateTime"
                        class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1"
                      >
                        Back
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="BrgyPermit" class="mt-3 px-5 w-full h-3/4">
                <div class="lg:p-0 p-3 w-full lg:h-1/5 bg-teal-100 rounded text-left">
                  <p class="pt-0 font-bold text-blue-700 pt-3 lg:ml-5 text-lg">
                    BARANGAY PERMIT
                  </p>
                  <p class="font-bold text-neutral-800 pt-1 lg:ml-10 text-base">
                    This certifies that your business complies with the
                    requirements of the barangay where your business operates.
                  </p>
                </div>
                <div class="mt-5 w-full px-2 rounded border-2">
                  <div class="text-center">
                    <p class="font-bold text-amber-500 pt-3 text-lg">
                      Please provide all the information below
                    </p>
                  </div>
                  <div class="lg:flex lg:mt-10 text-left">
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >First Name</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ first }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Midle Name</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ middle }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Last Name</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ last }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Suffix</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ suffix }}</text
                      >
                    </div>
                  </div>
                  <div class="lg:flex lg:mt-5 text-left">
                    <div class="grid grid-cols-1 px-3 lg:w-2/5 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Business Name</label
                      >
                      <input
                        v-model="ipbname"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="Name of Business"
                      />
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/5 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Venue</label
                      >
                      <select
                        v-model="ipvenue"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option value="purok1">purok1</option>
                        <option value="purok2">purok2</option>
                        <option value="purok3">purok3</option>
                      </select>
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-2/5 lg:mb-0  mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Business Nature</label
                      >
                      <input
                        v-model="ipnature"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="Nature of Business"
                      />
                    </div>
                  </div>
                  <div class="lg:flex lg:mt-5 lg:mb-5 text-left">
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0  mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Effectivity</label
                      >
                      <Datepicker
                        v-model="month"
                        monthPicker
                        :minDate="new Date().toISOString().substr(0, 10)"
                      />
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0  mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Include Cedula</label
                      >
                      <select
                        v-model="ipcedula"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/2 lg:mb-0  mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Purpose</label
                      >
                      <input
                        v-model="ippurpose"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="Purpose"
                      />
                    </div>
                  </div>
                  <div class="flex justify-evenly mb-3 mx-auto">
                    <div class="flex">
                      <div
                        @click="PermitInfo"
                        class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
                      >
                        Request
                      </div>
                      <div
                        @click="DateTime"
                        class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1"
                      >
                        Back
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="BrgyIndigency" class="mt-3 px-5 w-full h-3/4">
                <div class="lg:p-0 p-3 w-full lg:h-1/5 bg-teal-100 rounded text-left">
                  <p class="pt-0 font-bold text-blue-700 pt-3 lg:ml-5 text-lg">
                    CERTIFICATE OF INDIGENCY
                  </p>
                  <p class="font-bold text-neutral-800 pt-1 lg:ml-10 text-base">
                    One of the requirements to avail charitable institutions,
                    government and non-government organizations for legal
                    assistance.
                  </p>
                </div>
                <div class="mt-5 w-full px-2 rounded border-2">
                  <div class="text-center">
                    <p class="font-bold text-amber-500 pt-3 text-lg">
                      Please provide all the information below
                    </p>
                  </div>
                  <div class="lg:flex lg:mt-10 text-left">
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >First Name</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ first }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Midle Name</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ middle }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Last Name</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ last }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Suffix</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ suffix }}</text
                      >
                    </div>
                  </div>
                  <div class="lg:flex mt-5 text-left">
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Purok</label
                      >

                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ purok }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Citizenship</label
                      >
                      <input
                        v-model="iicitizenship"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="Citizenship"
                      />
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Status</label
                      >
                      <select
                        v-model="iistatus"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Widowed">Widowed</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Separated">Separated</option>
                      </select>
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Age</label
                      >
                      <input
                        v-model="iiage"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="Age"
                      />
                    </div>
                  </div>
                  <div class="lg:flex lg:mt-5 lg:mb-5 text-left">
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Quantity</label
                      >
                      <select
                        v-model="iiquantity"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="block mt-2 text-sm font-semibold text-gray-600 uppercase ml-2"
                        >Include Cedula</label
                      >
                      <select
                        v-model="iicedula"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/2">
                      <label
                        class="block mt-2 text-sm font-semibold text-gray-600 uppercase ml-2"
                        >Purpose</label
                      >
                      <input
                        v-model="iipurpose"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="Purpose"
                      />
                    </div>
                  </div>
                  <div class="lg:flex justify-evenly lg:mb-3 my-10">
                    <div class="flex mx-auto w-min">
                      <div
                        @click="IndigencyInfo"
                        class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
                      >
                        Request
                      </div>
                      <div
                        @click="DateTime"
                        class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1"
                      >
                        Back
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-if="BrgyResidency" class="mt-3 px-5 w-full h-3/4">
                <div class="lg:p-0 p-3 w-full lg:h-1/5 bg-teal-100 rounded text-left">
                  <p class="font-bold text-blue-700 pt-3 lg:ml-5 text-lg">
                    CERTIFICATE OF RESIDENCY
                  </p>
                  <p class="font-bold text-neutral-800 pt-1 lg:ml-10 text-base">
                    One of the documents to apply jobs or open a bank account.
                  </p>
                </div>
                <div class="mt-5 w-full px-2 rounded border-2">
                  <div class="text-center">
                    <p class="font-bold text-amber-500 pt-3 text-lg">
                      Please provide all the information below
                    </p>
                  </div>
                  <div class="lg:flex lg:mt-10 text-left">
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >First Name</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ first }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Midle Name</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ middle }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Last Name</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ last }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Suffix</label
                      >
                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ suffix }}</text
                      >
                    </div>
                  </div>
                  <div class="lg:flex mt-5 text-left">
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Purok</label
                      >

                      <text
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        >{{ purok }}</text
                      >
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Citizenship</label
                      >
                      <input
                        v-model="ircitizenship"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="Citizenship"
                      />
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Status</label
                      >
                      <select
                        v-model="irstatus"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option value="Single">Single</option>
                        <option value="Married">Married</option>
                        <option value="Widowed">Widowed</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Separated">Separated</option>
                      </select>
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Age</label
                      >
                      <input
                        v-model="irage"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="Age"
                      />
                    </div>
                  </div>
                  <div class="lg:flex lg:mt-5 lg:mb-5 text-left">
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="uppercase text-sm text-gray-500 text-light font-semibold"
                        >Quantity</label
                      >
                      <select
                        v-model="irquantity"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option value="1">1</option>
                        <option value="2">2</option>
                      </select>
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/4 lg:mb-0 mb-5">
                      <label
                        class="block mt-2 text-sm font-semibold text-gray-600 uppercase ml-2"
                        >Include Cedula</label
                      >
                      <select
                        v-model="ircedula"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      >
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                    </div>
                    <div class="grid grid-cols-1 px-3 lg:w-1/2">
                      <label
                        class="block mt-2 text-sm font-semibold text-gray-600 uppercase ml-2"
                        >Purpose</label
                      >
                      <input
                        v-model="irpurpose"
                        class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        type="text"
                        placeholder="Purpose"
                      />
                    </div>
                  </div>
                  <div class="lg:flex justify-evenly lg:mb-3 my-10">
                    <div class="flex mx-auto w-min">
                      <div
                        @click="ResidencyInfo"
                        class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
                      >
                        Request
                      </div>
                      <div
                        @click="DateTime"
                        class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1"
                      >
                        Back
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div v-if="OptionRevAppInfo" class="lg:px-10 mt-5">
            <div v-if="clearance">
              <h1 class="text-xl font-semibold text-left text-amber-600 mt-5">
                Review Application Information
              </h1>
              <form @submit.prevent="addclearance">
                <div class="lg:ml-10">
                  <div class="flex mt-8">
                    <p class="font-semibold text-justify text-cyan-600 lg:text-lg">
                      Type of Certificate:
                    </p>
                    <p class="font-semibold text-justify lg:text-lg ml-2">
                      Barangay Clearance
                    </p>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify lg:text-lg text-cyan-600">
                      Date and Time:
                    </p>
                    <text class="font-semibold text-justify lg:text-lg ml-2">
                      {{ selectedDate }}
                    </text>
                    <p class="font-semibold text-justify lg:text-lg mx-2">at</p>
                    <text class="font-semibold text-justify lg:text-lg ml-2">
                      {{ selectedTime }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 lg:text-lg">
                      First Name:
                    </p>
                    <text class="font-semibold text-justify lg:text-lg ml-2">
                      {{ first }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 lg:text-lg">
                      Middle Name:
                    </p>
                    <text class="font-semibold text-justify lg:text-lg ml-2">
                      {{ middle }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 lg:text-lg">
                      Last Name:
                    </p>
                    <text class="font-semibold text-justify lg:text-lg ml-2">
                      {{ last }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 lg:text-lg">
                      Suffix :
                    </p>
                    <text class="font-semibold text-justify lg:text-lg ml-2">
                      {{ suffix }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 lg:text-lg">
                      Purok :
                    </p>
                    <text class="font-semibold text-justify lg:text-lg ml-2">
                      {{ purok }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 lg:text-lg">
                      Citizenship :
                    </p>
                    <text class="font-semibold text-justify lg:text-lg ml-2">
                      {{ iccitizenship }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 lg:text-lg">
                      Status :
                    </p>
                    <text class="font-semibold text-justify lg:text-lg ml-2">
                      {{ icstatus }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 lg:text-lg">
                      Age :
                    </p>
                    <text class="font-semibold text-justify lg:text-lg ml-2"
                      >{{ icage }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 lg:text-lg">
                      Quantity :
                    </p>
                    <text class="font-semibold text-justify lg:text-lg ml-2">
                      {{ icquantity }}</text
                    >
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 lg:text-lg">
                      Purpose :
                    </p>
                    <text class="font-semibold text-justify lg:text-lg ml-2">
                      {{ icpurpose }}</text
                    >
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 lg:text-lg">
                      With Cedula :
                    </p>
                    <text class="font-semibold text-justify lg:text-lg ml-2">
                      {{ icedula }}</text
                    >
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 lg:text-lg">
                      Total Cost :
                    </p>
                    <text
                      class="font-bold text-red-500 text-justify lg:text-lg ml-2"
                    >
                      {{ totalcost }}</text
                    >
                  </div>
                  <div class="mt-10 flex">
                    <input
                      type="submit"
                      value="Confirm"
                      class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
                    />
                    <div
                      @click="AppInfo"
                      class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1"
                    >
                      Back
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div v-if="permit">
              <h1 class="text-xl font-semibold text-left text-amber-600">
                Review Application Information
              </h1>
              <form @submit.prevent="addpermit">
                <div class="ml-10">
                  <div class="flex mt-5">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Type of Certificate:
                    </p>
                    <p class="font-semibold text-justify text-lg ml-2">
                      Barangay Permit
                    </p>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-lg text-cyan-600">
                      Date and Time:
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ selectedDate }}
                    </text>
                    <p class="font-semibold text-justify text-lg mx-2">at</p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ selectedTime }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      First Name:
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ first }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Middle Name:
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ middle }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Last Name:
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ last }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Suffix :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ suffix }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Business Name :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ ipbname }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Venue :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ ipvenue }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Business Nature :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2"
                      >{{ ipnature }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Effectivity :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ ipeffectivity }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      With Cedula :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ ipcedula }}</text
                    >
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Purpose :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ ippurpose }}</text
                    >
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Total Cost :
                    </p>
                    <text
                      class="font-bold text-red-500 text-justify text-lg ml-2"
                    >
                      {{ totalcost }}</text
                    >
                  </div>
                  <div class="mt-10 flex">
                    <input
                      type="submit"
                      value="Confirm"
                      class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
                    />
                    <div
                      @click="AppInfo"
                      class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1"
                    >
                      Back
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div v-if="indigency">
              <h1 class="text-xl font-semibold text-left text-amber-600">
                Review Application Information
              </h1>
              <form @submit.prevent="addindigency">
                <div class="ml-10">
                  <div class="flex mt-5">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Type of Certificate:
                    </p>
                    <p class="font-semibold text-justify text-lg ml-2">
                      Certificate of Indigency
                    </p>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-lg text-cyan-600">
                      Date and Time:
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ selectedDate }}
                    </text>
                    <p class="font-semibold text-justify text-lg mx-2">at</p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ selectedTime }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      First Name:
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ first }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Middle Name:
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ middle }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Last Name:
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ last }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Suffix :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ suffix }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Purok :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ purok }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Citizenship :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ iicitizenship }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Status :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ iistatus }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Age :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2"
                      >{{ iiage }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Quantity :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ iiquantity }}</text
                    >
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Purpose :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ iipurpose }}</text
                    >
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      With Cedula :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ iicedula }}</text
                    >
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Total Cost :
                    </p>
                    <text
                      class="font-bold text-red-500 text-justify text-lg ml-2"
                    >
                      {{ totalcost }}</text
                    >
                  </div>
                  <div class="mt-10 flex">
                    <input
                      type="submit"
                      value="Confirm"
                      class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
                    />
                    <div
                      @click="AppInfo"
                      class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1"
                    >
                      Back
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div v-if="residency">
              <h1 class="text-xl font-semibold text-left text-amber-600">
                Review Application Information
              </h1>
              <form @submit.prevent="addresidency">
                <div class="ml-10">
                  <div class="flex mt-5">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Type of Certificate:
                    </p>
                    <p class="font-semibold text-justify text-lg ml-2">
                      Certificate of Residency
                    </p>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-lg text-cyan-600">
                      Date and Time:
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ selectedDate }}
                    </text>
                    <p class="font-semibold text-justify text-lg mx-2">at</p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ selectedTime }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      First Name:
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ first }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Middle Name:
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ middle }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Last Name:
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ last }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Suffix :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ suffix }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Purok :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ purok }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Citizenship :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ ircitizenship }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Status :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ irstatus }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Age :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2"
                      >{{ irage }}
                    </text>
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Quantity :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ irquantity }}</text
                    >
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Purpose :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ irpurpose }}</text
                    >
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      With Cedula :
                    </p>
                    <text class="font-semibold text-justify text-lg ml-2">
                      {{ ircedula }}</text
                    >
                  </div>
                  <div class="flex mt-1">
                    <p class="font-semibold text-justify text-cyan-600 text-lg">
                      Total Cost :
                    </p>
                    <text
                      class="font-bold text-red-500 text-justify text-lg ml-2"
                    >
                      {{ totalcost }}</text
                    >
                  </div>
                  <div class="mt-10 flex">
                    <input
                      type="submit"
                      value="Confirm"
                      class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1 mr-2"
                    />
                    <div
                      @click="AppInfo"
                      class="w-32 h-10 rounded-full bg-amber-500 hover:bg-amber-300 mt-3 text-center cursor-pointer text-xl text-white font-medium py-1"
                    >
                      Back
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { ref } from "vue";
import { app } from "../firebase";
// import { auth } from "../firebase";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
export default {
  components: { 
    Datepicker, 
    Nav },
  setup() {
    const calendar = ref(new Date());
    const time = ref({ hours: 8, minutes: 30 });
    const month = ref({
      month: new Date().getMonth(),
      year: new Date().getFullYear(),
    });

    return {
      time,
      month,
      calendar,
    };
  },
  data() {
    return {
      recentdate: ref(new Date()),

      selectedDate: "",
      selectedTime: "",
      first: "",
      middle: "",
      last: "",
      suffix: "",
      purok: "",
      ctype: "",
      ftype: "",
      totalcost: "",

      previewdate: false,
      BrgyClearance: false,
      BrgyPermit: false,
      BrgyIndigency: false,
      BrgyResidency: false,
      start: true,
      OptionAppInfo: false,
      OptionDateTime: false,
      OptionRevAppInfo: false,
      dat1: true,
      dat2: false,
      ai1: true,
      ai2: false,
      rai1: true,
      rai2: false,

      clearance: false,
      permit: false,
      indigency: false,
      residency: false,
      ipeffectivity: "",
    };
  },
  created() {
    this.userID = this.$route.params.id;
    this.loadresident();
  },

  methods: {
    async loadresident() {
      const db = getFirestore(app);
      const userid = this.userID;
      const residentRef = doc(db, "residents", userid);
      const residentSnap = await getDoc(residentRef);

      if (residentSnap.exists) {
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
    },
    async SelectCert() {
      if (this.ctype == "BARANGAY CLEARANCE") {
        const db = getFirestore(app);
        const userid = this.userID;
        const clearanceRef = doc(db, "Clearance Requests", userid);
        const clearanceSnap = await getDoc(clearanceRef);

        if (clearanceSnap.exists()) {
          this.$toast.info("YOU STILL HAVE AN ONGOING CLEARANCE REQUEST", {
            position: "top",
          });
        } else {
          this.ftype = "BARANGAY CLEARANCE";
          this.BrgyClearance = true;
          this.BrgyPermit = false;
          this.BrgyIndigency = false;
          this.Residency = false;
        }
      } else if (this.ctype == "BUSINESS PERMIT") {
        const db = getFirestore(app);
        const userid = this.userID;
        const permitRef = doc(db, "Permit Requests", userid);
        const permitSnap = await getDoc(permitRef);

        if (permitSnap.exists()) {
          this.$toast.info("YOU STILL HAVE AN ONGOING PERMIT REQUEST", {
            position: "top",
          });
        } else {
          this.ftype = "BUSINESS PERMIT";
          this.BrgyClearance = false;
          this.BrgyPermit = true;
          this.BrgyIndigency = false;
          this.Residency = false;
        }
      } else if (this.ctype == "CERTIFICATE OF INDIGENCY") {
        const db = getFirestore(app);
        const userid = this.userID;
        const indigencyRef = doc(db, "Indigency Requests", userid);
        const indigencySnap = await getDoc(indigencyRef);

        if (indigencySnap.exists()) {
          this.$toast.info("YOU STILL HAVE AN ONGOING INDIGENCY REQUEST", {
            position: "top",
          });
        } else {
          this.ftype = "CERTIFICATE OF INDIGENCY";
          this.BrgyClearance = false;
          this.BrgyPermit = false;
          this.BrgyIndigency = true;
          this.Residency = false;
        }
      } else if (this.ctype == "CERTIFICATE OF RESIDENCY") {
        const db = getFirestore(app);
        const userid = this.userID;
        const residencyRef = doc(db, "Residency Requests", userid);
        const residencySnap = await getDoc(residencyRef);
        if (residencySnap.exists()) {
          this.$toast.info("YOU STILL HAVE AN ONGOING RESIDENCY REQUEST", {
            position: "top",
          });
        } else {
          this.ftype = "CERTIFICATE OF RESIDENCY";
          this.BrgyClearance = false;
          this.BrgyPermit = false;
          this.BrgyIndigency = false;
          this.BrgyResidency = true;
        }
      }
    },
    DateTime() {
      this.OptionDateTime = true;
      this.OptionAppInfo = false;
      this.OptionRevAppInfo = false;
      this.start = false;

      this.dat1 = false;
      this.ai1 = true;
      this.rai1 = true;
      this.dat2 = true;
      this.ai2 = false;
      this.rai2 = false;
    },
    ClearanceInfo() {
      var cost = 0;
      if (this.icedula == "Yes") {
        cost = cost + 60;
      }
      this.totalcost = cost + 70 * this.icquantity;

      if (
        this.iccitizenship == null ||
        this.icstatus == null ||
        this.icage == null ||
        this.icquantity == null ||
        this.icedula == null
      ) {
        this.$toast.warning("Parameters cant be empty", {
          position: "top",
        });
      } else if (this.ftype == this.ctype) {
        this.clearance = true;
        this.permit = false;
        this.indigency = false;
        this.residency = false;
        this.OptionRevAppInfo = true;
        this.OptionDateTime = false;
        this.OptionAppInfo = false;
        this.start = false;

        this.dat1 = true;
        this.ai1 = true;
        this.rai1 = false;
        this.dat2 = false;
        this.ai2 = false;
        this.rai2 = true;
      } else {
        this.$toast.info("Click Continue before proceeding", {
          position: "top",
        });
      }
    },
    IndigencyInfo() {
      var cost = 0;
      if (this.iicedula == "Yes") {
        cost = cost + 60;
      }
      this.totalcost = cost + 70 * this.iiquantity;

      if (
        this.iicitizenship == null ||
        this.iistatus == null ||
        this.iiage == null ||
        this.iiquantity == null ||
        this.iicedula == null
      ) {
        this.$toast.warning("Parameters cant be empty", {
          position: "top",
        });
      } else if (this.ftype == this.ctype) {
        this.clearance = false;
        this.permit = false;
        this.indigency = true;
        this.OptionRevAppInfo = true;
        this.OptionDateTime = false;
        this.OptionAppInfo = false;
        this.start = false;

        this.dat1 = true;
        this.ai1 = true;
        this.rai1 = false;
        this.dat2 = false;
        this.ai2 = false;
        this.rai2 = true;
      } else {
        this.$toast.info("Click Continue before proceeding", {
          position: "top",
        });
      }
    },
    ResidencyInfo() {
      var cost = 0;
      if (this.ircedula == "Yes") {
        cost = cost + 60;
      }
      this.totalcost = cost + 70 * this.irquantity;

      if (
        this.ircitizenship == null ||
        this.irstatus == null ||
        this.irage == null ||
        this.irquantity == null ||
        this.ircedula == null
      ) {
        this.$toast.warning("Parameters cant be empty", {
          position: "top",
        });
      } else if (this.ftype == this.ctype) {
        this.clearance = false;
        this.permit = false;
        this.indigency = false;
        this.residency = true;
        this.OptionRevAppInfo = true;
        this.OptionDateTime = false;
        this.OptionAppInfo = false;
        this.start = false;

        this.dat1 = true;
        this.ai1 = true;
        this.rai1 = false;
        this.dat2 = false;
        this.ai2 = false;
        this.rai2 = true;
      } else {
        this.$toast.info("Click Continue before proceeding", {
          position: "top",
        });
      }
    },
    PermitInfo() {
      var cost = 70;
      if (this.ipcedula == "Yes") {
        cost = cost + 60;
      }
      this.totalcost = cost;

      this.yearadded = this.month.year + 1;

      if (this.month.month == 0) {
        this.ipeffectivity = "January to December, " + this.month.year;
      } else if (this.month.month == 1) {
        this.ipeffectivity = "Febuary to January, " + this.yearadded;
      } else if (this.month.month == 2) {
        this.ipeffectivity = "March to Febuary, " + this.yearadded;
      } else if (this.month.month == 3) {
        this.ipeffectivity = "April to March, " + this.yearadded;
      } else if (this.month.month == 4) {
        this.ipeffectivity = "May to April, " + this.yearadded;
      } else if (this.month.month == 5) {
        this.ipeffectivity = "June to May, " + this.yearadded;
      } else if (this.month.month == 6) {
        this.ipeffectivity = "July to June, " + this.yearadded;
      } else if (this.month.month == 7) {
        this.ipeffectivity = "August to July, " + this.yearadded;
      } else if (this.month.month == 8) {
        this.ipeffectivity = "September to August, " + this.yearadded;
      } else if (this.month.month == 9) {
        this.ipeffectivity = "October to September, " + this.yearadded;
      } else if (this.month.month == 10) {
        this.ipeffectivity = "November to October, " + this.yearadded;
      } else if (this.month.month == 11) {
        this.ipeffectivity = "December to November, " + this.month.year;
      }

      //
      if (
        this.ipbname == null ||
        this.ipvenue == null ||
        this.ipnature == null ||
        this.ipcedula == null ||
        this.ipeffectivity == null ||
        this.ippurpose == null
      ) {
        this.$toast.info("Parameters cant be empty", {
          position: "top",
        });
      } else if (this.ftype == this.ctype) {
        this.clearance = false;
        this.permit = true;
        this.indigency = false;
        this.residency = false;
        this.OptionRevAppInfo = true;
        this.OptionDateTime = false;
        this.OptionAppInfo = false;
        this.start = false;

        this.dat1 = true;
        this.ai1 = true;
        this.rai1 = false;
        this.dat2 = false;
        this.ai2 = false;
        this.rai2 = true;
      } else {
        this.$toast.info("Click Continue before proceeding", {
          position: "top",
        });
      }
    },
    AppInfo() {
      this.OptionDateTime = false;
      this.OptionAppInfo = true;
      this.OptionRevAppInfo = false;
      this.start = false;

      this.dat1 = true;
      this.ai1 = false;
      this.rai1 = true;
      this.dat2 = false;
      this.ai2 = true;
      this.rai2 = false;
    },
    savedate() {
      const x =
        "" +
        this.calendar.getMonth() +
        this.calendar.getDate() +
        this.calendar.getFullYear();
      const y =
        "" +
        this.recentdate.getMonth() +
        this.recentdate.getDate() +
        this.recentdate.getFullYear();
      const time1 = parseInt("" + this.time.hours + this.time.minutes);
      const time2 = parseInt(
        "" + this.calendar.getHours() + this.calendar.getMinutes()
      );

      if (x.includes("Sun")) {
        this.$toast.warning("No office on Sundays", { position: "top" });
      } else if (
        x.includes("Jan 01") ||
        x.includes("Apr 09") ||
        x.includes("Jun 12") ||
        x.includes("Nov 30") ||
        x.includes("Dec 25") ||
        x.includes("Dec 31")
      ) {
        this.$toast.warning("No office on Holidays", { position: "top" });
      } else if (x == y && time1 < time2 && time1 >= 830) {
        this.$toast.warning("Invalid Time", { position: "top" });
      } else {
        if (this.calendar.getMonth() == 0) {
          this.selectedDate =
            "January " +
            this.calendar.getDate() +
            ", " +
            this.calendar.getFullYear();
        } else if (this.calendar.getMonth() == 1) {
          this.selectedDate =
            "Febuary" +
            this.calendar.getDate() +
            ", " +
            this.calendar.getFullYear();
        } else if (this.calendar.getMonth() == 2) {
          this.selectedDate =
            "March " +
            this.calendar.getDate() +
            ", " +
            this.calendar.getFullYear();
        } else if (this.calendar.getMonth() == 3) {
          this.selectedDate =
            "April " +
            this.calendar.getDate() +
            ", " +
            this.calendar.getFullYear();
        } else if (this.calendar.getMonth() == 4) {
          this.selectedDate =
            "May " +
            this.calendar.getDate() +
            ", " +
            this.calendar.getFullYear();
        } else if (this.calendar.getMonth() == 5) {
          this.selectedDate =
            "June " +
            this.calendar.getDate() +
            ", " +
            this.calendar.getFullYear();
        } else if (this.calendar.getMonth() == 6) {
          this.selectedDate =
            "July " +
            this.calendar.getDate() +
            ", " +
            this.calendar.getFullYear();
        } else if (this.calendar.getMonth() == 7) {
          this.selectedDate =
            "August " +
            this.calendar.getDate() +
            ", " +
            this.calendar.getFullYear();
        } else if (this.calendar.getMonth() == 8) {
          this.selectedDate =
            "September " +
            this.calendar.getDate() +
            ", " +
            this.calendar.getFullYear();
        } else if (this.calendar.getMonth() == 9) {
          this.selectedDate =
            "October " +
            this.calendar.getDate() +
            ", " +
            this.calendar.getFullYear();
        } else if (this.calendar.getMonth() == 10) {
          this.selectedDate =
            "November " +
            this.calendar.getDate() +
            ", " +
            this.calendar.getFullYear();
        } else if (this.calendar.getMonth() == 11) {
          this.selectedDate =
            "December " +
            this.calendar.getDate() +
            ", " +
            this.calendar.getFullYear();
        }

        this.previewdate = true;
        if (this.time.hours >= 12) {
          this.ampm = " PM";
          if (this.time.minutes < 10) {
            this.selectedTime =
              this.time.hours - 12 + ":0" + this.time.minutes + this.ampm;
          } else {
            this.selectedTime =
              this.time.hours - 12 + ":" + this.time.minutes + this.ampm;
          }
        } else {
          this.ampm = " AM";
          if (this.time.minutes < 10) {
            this.selectedTime =
              this.time.hours + ":0" + this.time.minutes + this.ampm;
          } else {
            this.selectedTime =
              this.time.hours + ":" + this.time.minutes + this.ampm;
          }
        }

        if (this.time.hours < 10) {
          this.quehr = "0" + this.time.hours;
        } else {
          this.quehr = "" + this.time.hours;
        }

        if (this.time.minutes < 10) {
          this.quemin = "0" + this.time.minutes;
        } else {
          this.quemin = "" + this.time.minutes;
        }
      }
    },
    gtreqcert() {
      const userID = this.userID;
      this.$router.push(`/requestcertpage/${userID}`);
    },
    gttrackcert() {
      const userID = this.userID;
      this.$router.push(`/trackcertpage/${userID}`);
    },
    gthome() {
      const userID = this.userID;
      this.$router.push(`/homepage/${userID}`);
    },

    logout() {
      const first = this.first;
      const middle = this.middle;
      const last = this.last;
      const suffix = this.suffix;
      const purok = this.purok;
      const phonenumber = this.phonenumber;
      const password = this.password;
      const logintoken = "No";

      const db = getFirestore(app);
      const userID = this.userID;
      console.log("Creating Data");
      setDoc(doc(db, "residents", userID), {
        userID,
        first,
        middle,
        last,
        suffix,
        purok,
        phonenumber,
        password,
        logintoken,
      });
      this.$toast.success("Logged Out!", { position: "top" });
      this.$router.push("/");
    },
    async addclearance() {
      const BCdate = this.selectedDate;
      const BCtime = this.selectedTime;
      const BCfirst = this.first;
      const BCmiddle = this.middle;
      const BClast = this.last;
      const BCsuffix = this.suffix;
      const BCpurok = this.purok;
      const BCcitizenship = this.iccitizenship;
      const BCstatus = this.icstatus;
      const BCage = this.icage;
      const BCquantity = this.icquantity;
      const BCcedula = this.icedula;
      const BCpurpose = this.icpurpose;
      const BCtotalcost = this.totalcost;
      const BCreqstat = "Pending";
      const m = this.calendar.getMonth();
      const d = this.calendar.getDate();
      const y = this.calendar.getFullYear();
      if (m < 10) {
        this.mo = "0" + m;
      } else {
        this.mo = m;
      }
      if (d < 10) {
        this.da = "0" + d;
      } else {
        this.da = d;
      }
      const stringque = "" + y + this.mo + this.da + this.quehr + this.quemin;
      const que = parseInt(stringque);

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
      this.$toast.success("Request Successful", {
        position: "top",
      });

      const userID = this.userID;
      this.$router.push(`/homepage/${userID}`);
    },
    async addindigency() {
      const BIdate = this.selectedDate;
      const BItime = this.selectedTime;
      const BIfirst = this.first;
      const BImiddle = this.middle;
      const BIlast = this.last;
      const BIsuffix = this.suffix;
      const BIpurok = this.purok;
      const BIcitizenship = this.iicitizenship;
      const BIstatus = this.iistatus;
      const BIage = this.iiage;
      const BIquantity = this.iiquantity;
      const BIcedula = this.iicedula;
      const BIpurpose = this.iipurpose;
      const BItotalcost = this.totalcost;
      const BIreqstat = "Pending";
      const m = this.calendar.getMonth();
      const d = this.calendar.getDate();
      const y = this.calendar.getFullYear();
      if (m < 10) {
        this.mo = "0" + m;
      } else {
        this.mo = m;
      }
      if (d < 10) {
        this.da = "0" + d;
      } else {
        this.da = d;
      }
      const stringque = "" + y + this.mo + this.da + this.quehr + this.quemin;
      const que = parseInt(stringque);

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
      this.$toast.success("Request Successful", {
        position: "top",
      });

      const userID = this.userID;
      this.$router.push(`/homepage/${userID}`);
    },
    async addresidency() {
      const BRdate = this.selectedDate;
      const BRtime = this.selectedTime;
      const BRfirst = this.first;
      const BRmiddle = this.middle;
      const BRlast = this.last;
      const BRsuffix = this.suffix;
      const BRpurok = this.purok;
      const BRcitizenship = this.ircitizenship;
      const BRstatus = this.irstatus;
      const BRage = this.irage;
      const BRquantity = this.irquantity;
      const BRcedula = this.ircedula;
      const BRpurpose = this.irpurpose;
      const BRtotalcost = this.totalcost;
      const BRreqstat = "Pending";
      const m = this.calendar.getMonth();
      const d = this.calendar.getDate();
      const y = this.calendar.getFullYear();
      if (m < 10) {
        this.mo = "0" + m;
      } else {
        this.mo = m;
      }
      if (d < 10) {
        this.da = "0" + d;
      } else {
        this.da = d;
      }
      const stringque = "" + y + this.mo + this.da + this.quehr + this.quemin;
      const que = parseInt(stringque);

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
      this.$toast.success("Request Successful", {
        position: "top",
      });

      const userID = this.userID;
      this.$router.push(`/homepage/${userID}`);
    },
    async addpermit() {
      const BPdate = this.selectedDate;
      const BPtime = this.selectedTime;
      const BPfirst = this.first;
      const BPmiddle = this.middle;
      const BPlast = this.last;
      const BPsuffix = this.suffix;
      const BPbname = this.ipbname;
      const BPvenue = this.ipvenue;
      const BPnature = this.ipnature;
      const BPeffectivity = this.ipeffectivity;
      const BPcedula = this.ipcedula;
      const BPpurpose = this.ippurpose;
      const BPtotalcost = this.totalcost;
      const BPreqstat = "Pending";
      const BPedate = this.month;
      const m = this.calendar.getMonth();
      const d = this.calendar.getDate();
      const y = this.calendar.getFullYear();
      if (m < 10) {
        this.mo = "0" + m;
      } else {
        this.mo = m;
      }
      if (d < 10) {
        this.da = "0" + d;
      } else {
        this.da = d;
      }
      const stringque = "" + y + this.mo + this.da + this.quehr + this.quemin;
      const que = parseInt(stringque);

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
      this.$toast.success("Request Successful", {
        position: "top",
      });

      const userID = this.userID;
      this.$router.push(`/homepage/${userID}`);
    },
    closepreview() {
      this.previewdate = false;
    },
  },
};
</script>
