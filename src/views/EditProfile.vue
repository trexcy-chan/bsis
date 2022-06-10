<template>
  <main class="editprofile">
      <div class="bg-white flex flex-col font-sans">
        <div class="w-screen shadow-md">
         <Nav/> 
        </div>

        <div class="w-full lg:px-20 px-3">
          <div
            class="lg:px-10 px-3 py-5 w-full mt-10 rounded-lg border-2 border-gray-500"
          >
            <form v-if="viewing" class="relative">
              <label class="block mb-1 text-xl text-amber-500 font-semibold"
                >Resident Information</label
              >
              <hr class="border-b mb-2 border-teal-400" />
              <div>
                <div class="lg:flex w-full text-center">
                  <div class="grid grid-cols-1 px-3 lg:w-1/4 text-left">
                    <label
                      class="block mt-2 text-sm text-cyan-600 font-semibold"
                      >First Name:
                    </label>
                    <text
                      class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"
                      >{{ first }}</text
                    >
                  </div>
                  <div class="grid grid-cols-1 px-3 lg:w-1/4 text-left">
                    <label
                      class="block mt-2 text-sm text-cyan-600 font-semibold"
                      >Middle Name:
                    </label>
                    <text
                      class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"
                      >{{ middle }}</text
                    >
                  </div>
                  <div class="grid grid-cols-1 px-3 lg:w-1/4 text-left">
                    <label
                      class="block mt-2 text-sm text-cyan-600 font-semibold"
                      >Last Name:
                    </label>
                    <text
                      class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"
                    >
                      {{ last }}</text
                    >
                  </div>
                  <div class="grid grid-cols-1 px-3 lg:w-1/4 text-left">
                    <label
                      class="block mt-2 text-sm text-cyan-600 font-semibold"
                      >Suffix:
                    </label>
                    <text
                      class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"
                      >{{ suffix }}</text
                    >
                  </div>
                </div>
                <div class="lg:flex w-full mt-3">
                  <div class="grid grid-cols-1 px-3 lg:w-1/4 text-left">
                    <label
                      class="block mt-2 text-sm text-cyan-600 font-semibold"
                      >Purok:
                    </label>
                    <text
                      class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"
                      >{{ purok }}</text
                    >
                  </div>
                  <div
                    class="grid grid-cols-1 lg:px-3 lg:w-1/2 text-left px-3 mt-2"
                  >
                    <label
                      class="block mt-2 text-sm text-cyan-600 font-semibold"
                      >Phone Number:
                    </label>
                    <div class="flex w-full">
                      <text
                        class="font-semibold text-justify text-lg rounded-xl bg-white pr-3 mt-3"
                        >+63</text
                      >
                      <text
                        class="lg:w-1/2 font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1 w-10/12"
                        >{{ phonenumber }}</text
                      >
                    </div>
                  </div>
                </div>
                <div class="block right-3 bottom-4 mx-auto mt-10 lg:w-min">
                  <div class="lg:flex lg:gap-5">
                    <div
                      class="mb-5 lg:mb-0 lg:w-52 bg-cyan-400 rounded-full border-2 border-cyan-400 text-white hover:text-cyan-500 hover:bg-cyan-100"
                    >
                      <text
                        @click="closeopenmodal"
                        class="text-xl cursor-pointer whitespace-nowrap"
                        >Change Password
                      </text>
                    </div>
                    <div
                      class="lg:w-20 bg-cyan-400 rounded-full border-2 border-cyan-400 text-white hover:text-cyan-500 hover:bg-cyan-100 whitespace-nowrap"
                    >
                      <text @click="edit" class="text-xl cursor-pointer"
                        >Edit
                        <text class="text-xl material-icons cursor-pointer"
                          >edit</text
                        >
                      </text>
                    </div>
                  </div>
                </div>
                <hr class="border-b mt-10 border-teal-400" />
              </div>
            </form>
            <form v-if="editing" class="relative">
              <label class="block mb-1 text-xl text-amber-500 font-semibold"
                >Update Resident Information</label
              >
              <hr class="border-b mb-2 border-teal-400" />
              <div>
                <div class="flex w-full text-center">
                  <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                    <label
                      class="block mt-2 text-sm text-cyan-600 font-semibold"
                      >First Name:
                    </label>
                    <input
                      v-model="newfirst"
                      class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"
                    />
                  </div>
                  <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                    <label
                      class="block mt-2 text-sm text-cyan-600 font-semibold"
                      >Middle Name:
                    </label>
                    <input
                      v-model="newmiddle"
                      class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"
                    />
                  </div>
                  <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                    <label
                      class="block mt-2 text-sm text-cyan-600 font-semibold"
                      >Last Name:
                    </label>
                    <input
                      v-model="newlast"
                      class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"
                    />
                  </div>
                </div>
                <div class="flex w-full mt-3">
                  <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                    <label
                      class="block mt-2 text-sm text-cyan-600 font-semibold"
                      >Suffix:
                    </label>
                    <input
                      v-model="newsuffix"
                      class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"
                    />
                  </div>
                  <div class="grid grid-cols-1 px-3 w-1/4 text-left">
                    <label
                      class="block mt-2 text-sm text-cyan-600 font-semibold"
                      >Purok:
                    </label>
                    <select
                      v-model="newpurok"
                      class="font-semibold text-justify text-lg rounded-xl border-2 bg-white px-2 py-1 mt-1"
                    >
                      <option value="purok1">purok 1</option>
                      <option value="purok2">purok 2</option>
                      <option value="purok3">purok 3</option>
                    </select>
                  </div>
                  <div class="flex absolute right-3 bottom-4">
                    <div
                      class="bg-cyan-400 rounded-full border-2 border-cyan-400 text-white hover:text-cyan-500 hover:bg-cyan-100"
                    >
                      <text @click="save" class="text-xl cursor-pointer mx-3"
                        >Save
                        <text class="text-xl material-icons cursor-pointer"
                          >save</text
                        >
                      </text>
                    </div>
                    <div
                      class="ml-2 bg-cyan-400 rounded-full border-2 border-cyan-400 text-white hover:text-cyan-500 hover:bg-cyan-100"
                    >
                      <text @click="cancel" class="text-xl cursor-pointer mx-3"
                        >Cancel
                        <text class="text-xl material-icons cursor-pointer"
                          >cancel</text
                        >
                      </text>
                    </div>
                  </div>
                </div>
              </div>
              <hr class="border-b mt-10 border-teal-400" />
            </form>
          </div>
        </div>

        <!---Change Password Modal-->
        <div
          v-if="changepasswordmodal"
          class="main-modal fixed w-full inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
          style="background: rgba(0, 0, 0, 0.7)"
        >
          <div
            class="border border-blue-500 shadow-lg modal-container bg-white w-4/12 md:max-w-11/12 mx-auto rounded-xl shadow-lg z-50 overflow-y-auto"
          >
            <div class="modal-content py-4 text-left px-6">
              <!--Title-->
              <div class="flex justify-between items-center pb-3">
                <p class="text-2xl font-bold text-gray-500">Change Password</p>
                <div
                  @click="closeopenmodal"
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
              <!--Body-->
              <div class="my-5 mr-5 ml-5 flex justify-evenly">
                <div class="">
                  <label class="text-md text-gray-600">Password:</label>
                  <div>
                    <input
                      v-model="currentpassword"
                      class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      type="password"
                      placeholder="Enter Current Password"
                    />
                  </div>
                  <label class="text-md text-gray-600">New Password:</label>
                  <div>
                    <input
                      v-model="newpassword"
                      class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      type="password"
                      placeholder="Enter New Password"
                    />
                  </div>
                  <label class="text-md text-gray-600">Confirm Password:</label>
                  <div>
                    <input
                      v-model="confirmpassword"
                      class="py-2 px-3 rounded-lg border-2 border-teal-400 mt-1 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                      type="password"
                      placeholder="Confirm New Password"
                    />
                  </div>
                </div>
              </div>
              <!--Footer-->
              <div class="flex justify-end pt-2 space-x-14">
                <button
                  @click="closeopenmodal"
                  class="px-4 bg-gray-200 p-3 rounded text-black hover:bg-gray-300 font-semibold"
                >
                  Cancel
                </button>
                <button
                  @click="changepass"
                  class="px-4 bg-blue-500 p-3 ml-3 rounded-lg text-white hover:bg-teal-400"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </main>
</template>

<script>
import { app } from "../firebase";
import Nav from "../components/Nav.vue"
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
export default {
  data() {
    return {
      viewing: true,
      editing: false,
      newfirst: "",
      newmiddle: "",
      newlast: "",
      newsuffix: "",
      newpurok: "",
      phonenumber: "",
      password: "",
      changepasswordmodal: false,

      currentpassword: "",
      newpassword: "",
      confirmpassword: "",
    };
  },
  mounted() {
    this.userID = this.$route.params.id;
    this.loadresident();
  },
  components:{
  Nav
  },
  methods: {
    async loadresident() {
      const db = getFirestore(app);
      const userid = this.userID;
      const residentRef = doc(db, "residents", userid);
      const residentSnap = await getDoc(residentRef);

      if (residentSnap.exists()) {
        if (residentSnap.data().logintoken == "Yes") {
          this.first = residentSnap.data().first;
          this.middle = residentSnap.data().middle;
          this.last = residentSnap.data().last;
          this.purok = residentSnap.data().purok;
          this.suffix = residentSnap.data().suffix;
          if (this.suffix == "") {
            this.suffix = "n/a";
          }
          this.phonenumber = residentSnap.data().phonenumber;
          this.password = residentSnap.data().password;

          this.newfirst = this.first;
          this.newmiddle = this.middle;
          this.newlast = this.last;
          this.newpurok = this.purok;
          this.newsuffix = this.suffix;
        } else {
          this.$router.push("/");
        }
      } else {
        this.$router.push("/");
        console.log("No such document!");
      }
    },
    edit() {
      this.viewing = false;
      this.editing = true;
    },
    async save() {
      const phonenumber = this.phonenumber;
      const first = this.newfirst;
      const middle = this.newmiddle;
      const last = this.newlast;
      const suffix = this.newsuffix;
      const purok = this.newpurok;
      const password = this.password;
      const logintoken = "Yes";

      this.first = this.newfirst;
      this.middle = this.newmiddle;
      this.last = this.newlast;
      this.purok = this.newpurok;
      this.suffix = this.newsuffix;

      const db = getFirestore(app);
      const userID = this.userID;
      console.log("Saving Data");
      await setDoc(doc(db, "residents", userID), {
        userID,
        phonenumber,
        first,
        middle,
        last,
        suffix,
        purok,
        password,
        logintoken,
      });
      this.$toast.success("Changes Saved");
      this.viewing = true;
      this.editing = false;
      this.changepasswordmodal = false;
      this.loadresident();
    },
    cancel() {
      this.viewing = true;
      this.editing = false;
    },
    gteditprofile() {
      const userID = this.userID;
      this.$router.push(`/editprofile/${userID}`);
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
    closeopenmodal() {
      this.currentpassword = "";
      this.newpassword = "";
      this.confirmpassword = "";

      if (this.changepasswordmodal == false) {
        this.changepasswordmodal = true;
      } else {
        this.changepasswordmodal = false;
      }
    },
    changepass() {
      const password = window.btoa(this.currentpassword); //encrypt
      if (
        this.currentpassword == "" ||
        this.newpassword == "" ||
        this.confirmpassword == ""
      ) {
        this.$toast.error("Dont Leave Blanks!", { position: "top" });
      } else if (password != this.password) {
        this.$toast.error("Wrong password", { position: "top" });
      } else if (this.newpassword != this.confirmpassword) {
        this.$toast.error("New password doesnt match!", { position: "top" });
      } else {
        this.password = window.btoa(this.newpassword); //encrypt
        this.save();
      }
    },
  },
};
</script>

<style></style>
