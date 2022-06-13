<template>
  <main class="homepage">
    <div class="h-screen bg-white content mx-auto">
      <div class="flex flex-col font-sans">
        <Nav class="fixed" />
        <div class="mt-20 mx-auto lg:px-8 w-11/12">
          <div class="lg:flex gap-5">
            <div class="text-left lg:w-1/3">
            <p class="lg:text-3xl text-xl text-amber-400 lg:block"
              >WELCOME!</p>
            <text
              class="
                lg:text-4xl
                text-gray-700
                font-bold
                uppercase
                indent-0.5
                border-b border-teal-400
                lg:block
                w-min
                whitespace-nowrap
              "
              >{{ residentname }}</text
            >

            <p class="lg:text-3xl text-stone-400 uppercase mt-1 mb-1 lg:block">
              {{ purok }}
            </p>
            <p class="lg:text-3xl font-bold text-amber-400 block"
              >BARANGAY PANALIWAD-ON,</p
            >
            <p class="lg:text-3xl font-bold text-amber-400"
              >SALVADOR,</p
            >
            <p class="lg:text-3xl font-bold text-teal-400 block"
              >LANAO DEL NORTE</p
            >
            <p class="lg:text-xl text-gray-500 lg:mb-5 block lg:whitespace-nowrap"
              >We're here to serve you in a fast, safe, and easy way</p>
            <a
              @click="gtabout"
              class="
                text-white
                uppercase
                lg:px-6
                px-4
                lg:py-3
                py-2
                rounded-full
                shadow-lg
                bg-amber-500
                hover:bg-green-800
                lg:mt-3
                mt-5
                block
                w-min
                whitespace-nowrap
                
              "
              >About Us</a
            >
            </div>
            <div class="bg-image lg:h-15 lg:w-2/3"></div>
          </div>
          <div class="block">
            <div class="animate-bounce lg:mt-20 my-10 text-center lg:text-5xl text-2xl lg:text-teal-300 lg:font-normal text-teal-400">
              How can we help you?
            </div>
          
            <div class="lg:flex gap-10 my-5 lg:w-8/12 w-10/12 mx-auto">
              <a
                @click="gtreqcert"
                class="
                  block
                  shadow
                  px-2
                  py-2
                  rounded
                  bg-white
                  hover:bg-gray-300
                  mb-10
                  lg:w-11/12
                  mx-auto
                "
              >
                <img
                  class="mx-auto w-44 h-44"
                  src="../assets/images/requestcert.png"
                />

                <label
                  class="
                    text-xl text-teal-400
                    font-bold
                    block
                    text-center
                    uppercase
                    whitespace-nowrap
                    mt-5
                    
                  "
                  >Request Certificate</label
                >
              </a>

              <a
                @click="gttrackcert"
                class="
                  block
                  shadow
                  px-2
                  py-2
                  rounded
                  bg-white
                  hover:bg-gray-300
                  mb-10
                  lg:w-11/12
                  mx-auto
                "
              >
                <img
                  class="mx-auto w-44 h-44"
                  src="../assets/images/trackcert.png"
                />

                <label
                  class="
                    text-lg text-teal-400
                    font-bold
                    block
                    text-center
                    uppercase
                    whitespace-nowrap
                    mt-5
                  "
                  >Track your Certificate</label
                >
              </a>

              <a
                @click="gteditprofile"
                class="
                  block
                  shadow
                  px-2
                  py-2
                  rounded
                  bg-white
                  hover:bg-gray-300
                  mb-10
                  lg:w-11/12
                  mx-auto
                "
              >
                <img
                  class="mx-auto w-44 h-44"
                  src="../assets/images/editprofile.png"
                />

                <label
                  class="
                    text-lg text-teal-400
                    font-bold
                    block
                    text-center
                    uppercase
                    whitespace-nowrap
                    mt-5
                  "
                  >Edit Profile</label
                >
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { app } from "../firebase";
import Nav from "../components/Nav.vue";
import { getFirestore, getDoc, doc, setDoc } from "firebase/firestore";
export default {
  data() {
    return {
      first: null,
      last: null,
      purok: null,
      residentname: null,
      userID: "",
    };
  },
  components: {
    Nav,
  },
  mounted() {
    this.userID = this.$route.params.id;
    this.loadresident();
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
          this.last = residentSnap.data().last;
          this.purok = residentSnap.data().purok;
          this.residentname = this.first + " " + this.last;

          this.middle = residentSnap.data().middle;
          this.suffix = residentSnap.data().suffix;
          this.phonenumber = residentSnap.data().phonenumber;
          this.password = residentSnap.data().password;
        } else {
          this.$router.push("/");
        }
      } else {
        console.log("No such document!");
      }
    },
      gteditprofile() {
      const userID = this.userID;
      this.$router.push(`/editprofile/${userID}`);
    },
    gtabout() {
      const userID = this.userID;
      this.$router.push(`/about/${userID}`);
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
  },
};
</script>

<style scoped>
.bg-image {
  background-image: url(../assets/images/landing.png);
  background-repeat: no-repeat;
  background-position: right;
}
@media only screen and (max-width: 1023px) {
  .bg-image {
    background-image: none;
  }
}
</style>
