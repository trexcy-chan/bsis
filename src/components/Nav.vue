<template>
   <div class="w-screen shadow-md lg:h-auto h-14">
          <div class="mx-auto lg:px-8">
            <header class="lg:flex items-center justify-between">
              <div class="lg:order-2 order-1">
                <button
                  class="
                    flex
                    md:hidden
                    flex-col
                    absolute
                    top-0
                    -left-1
                    p-4
                    mt-2
                  "
                >
                  <span class="w-5 h-px mb-1 bg-amber-500"></span>
                  <span class="w-5 h-px mb-1 bg-amber-500"></span>
                  <span class="w-5 h-px mb-1 bg-amber-500"></span>
                </button>
                <nav class="hidden md:flex text-md">
                  <a
                    @click="gthome"
                    class="text-gray-800 hover:text-teal-400 py-3 px-6"
                    >Home</a
                  >
                  <a
                    @click="gttrackcert"
                    class="text-gray-800 hover:text-teal-400 py-3 px-6"
                    >Appointment</a
                  >
                  <a
                    @click="gtreqcert"
                    class="text-gray-800 hover:text-teal-400 py-3 px-6"
                    >Schedule an Appointment</a
                  >
                  <a
                    @click="logout"
                    class="
                      right-1
                      bg-amber-500
                      hover:bg-teal-300
                      rounded-full
                      uppercase
                      text-white
                      py-3
                      px-6
                    "
                    >Log out</a
                  >
                </nav>
              </div>

              <h1
                class="
                  lg:order-1
                  order-2
                  font-bold
                  text-center text-2xl text-amber-500
                  mt-3
                "
              >
                BCI <span class="text-teal-500">SYSTEM</span>
              </h1>
            </header>
          </div>
        </div>
</template>

<script>
// import { app } from "../firebase";
// import { getFirestore, doc, setDoc} from "firebase/firestore";
export default {
  name: 'NavBar',
  // methods:{
  // gteditprofile() {
  //     const userID = this.userID;
  //     this.$router.push(`/editprofile/${userID}`);
  //   },
  //   gtreqcert() {
  //     const userID = this.userID;
  //     this.$router.push(`/requestcertpage/${userID}`);
  //   },
  //   gttrackcert() {
  //     const userID = this.userID;
  //     this.$router.push(`/trackcertpage/${userID}`);
  //   },
  //   gthome() {
  //     const userID = this.userID;
  //     this.$router.push(`/homepage/${userID}`);
  //   },
  //   gtabout() {
  //     const userID = this.userID;
  //     this.$router.push(`/about/${userID}`);
  //   },
  //   logout() {
  //     const first = this.first;
  //     const middle = this.middle;
  //     const last = this.last;
  //     const suffix = this.suffix;
  //     const purok = this.purok;
  //     const phonenumber = this.phonenumber;
  //     const password = this.password;
  //     const logintoken = "No";

  //     const db = getFirestore(app);
  //     const userID = this.userID;
  //     console.log("Creating Data");
  //     setDoc(doc(db, "residents", userID), {
  //       userID,
  //       first,
  //       middle,
  //       last,
  //       suffix,
  //       purok,
  //       phonenumber,
  //       password,
  //       logintoken,
  //     });
  //     this.$toast.success("Logged Out!", { position: "top" });
  //     this.$router.push("/");
  //   },
  // }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
