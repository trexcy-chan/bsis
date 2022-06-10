<template>
  <main class="homepage">
    <div class="h-screen bg-white content mx-auto bg-gray-200">
      <div class="flex flex-col font-sans">
        <Nav/>
        <body class="container mx-auto px-8 mt-10">
          <div class="float-left text-left">
            <label class="lg:text-5xl text-xl text-amber-400 indent-0.5 block">WELCOME!</label>
            <text class="lg:text-4xl text-gray-700 font-bold uppercase indent-0.5 mt-1 border-b border-teal-400 ml-1 block">{{ residentname }}</text>
           
           
              <text class="text-lg text-stone-400 uppercase indent-0.5 mt-2 ml-2">
              {{ purok }}
            </text>
            <label class="lg:text-5xl font-bold ml-1 text-amber-400 mt-3 block">BARANGAY PANALIWAD-ON,</label>
            <label class="lg:text-5xl font-bold ml-1 text-amber-400">SALVADOR,</label>
            <label class="lg:text-5xl font-bold ml-1 text-teal-400 block">LANAO DEL NORTE</label>
            <label class="lg:text-2xl text-gray-500 ml-1 mb-5 block">We're here to serve you in a fast, safe, and easy way</label>
            <a
              @click="gtabout"
              class=" 
                text-white
                sm:font-xl
                uppercase
                py-3
                px-6
                sm:py-4 sm:px-8
                rounded-full
                shadow-lg
                bg-amber-500
                hover:bg-green-800
                mt-8
                sm:mt-16
              "
              >About Us</a
            >
          </div>
        </body>

        <div class="mt-10 text-center">
            <ion-label class="lg:text-6xl text-2xl lg:text-teal-300 text-black"
              >How can we help you?</ion-label
            >
          </div>
          <div class="lg:flex justify-evenly block my-10">
            <div class="px-2 py-2 rounded bg-white hover:bg-gray-300">
              <a @click="gtreqcert">
                <div class="lg:w-52 h-52">
                  <img
                    class="scale-75 mx-auto w-52 h-52"
                    src="../assets/images/requestcert.png"
                  />
                </div>
                <label
                  class="text-xl text-teal-400 font-bold block text-center uppercase"
                  >Request Certificate</label
                >
              </a>
            </div>

            <div class="px-2 py-2 rounded bg-white hover:bg-gray-300">
              <a @click="gttrackcert">
                <div class="lg:w-52 h-52">
                  <img
                    class="scale-95 mx-auto w-52 h-52"
                    src="../assets/images/trackcert.png"
                  />
                </div>
                <label
                  class="text-lg text-teal-400 font-bold block text-center uppercase"
                  >Track your Certificate</label
                >
              </a>
            </div>

            <div class="px-2 py-2 rounded bg-white hover:bg-gray-300">
              <a @click="gteditprofile">
                <div class="lg:w-52 h-52">
                  <img
                    class="scale-75 mx-auto w-52 h-52"
                    src="../assets/images/editprofile.png"
                  />
                </div>
                <label
                  class="text-lg text-teal-400 font-bold block text-center uppercase"
                  >Edit Profile</label
                >
              </a>
            </div>
          </div>
      </div>
    </div>
  </main>
</template>

<script>
import { app } from "../firebase";
import Nav from "../components/Nav.vue";
import { getFirestore, getDoc, doc} from "firebase/firestore";
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
  components:{
  Nav
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
 
   
  
  
  },
};
</script>

<style scoped>
body {
  background-image: url(../assets/images/landing.png);
  background-repeat: no-repeat;
  background-position: right;
}
@media only screen and (max-width: 1023px) {
  body {
    background-image: none;
  }
}
</style>
