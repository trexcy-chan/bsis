<template>
   <div class="bg-white flex flex-col font-sans">
  <Nav class="fixed"/>

    <div class="text-left ml-10 mr-10 mt-8">
      <h1 class="text-teal-500 text-4xl font-extrabold mt-12">ABOUT</h1>
      <p class="text-justify mt-4 ">Panaliwad-on is a barangay municipality of Salvador, in the province of Lanao del Norte. 
        <br>
        Its population as determined by the 2020 Cencus was 1, 148. This represented 3.57% of the total
        population of Salvador.
      </p>
    </div>

    <div class="text-left ml-10 mr-10">
      <h1 class="text-teal-500 text-4xl font-extrabold mt-12">VISION</h1>
      <p class="text-justify mt-4 ">We envision Barangay Panaliwad-on to be a community of law-abiding, diligent, and healthy
        individual;
        <br>
        A citizenry that is morally and socially innovative; pleasant, drug-free, tidy, ecologically conscious, and always ready to help.
      </p>
    </div>

     <div class="text-left ml-10 mr-10 mb-10">
      <h1 class="text-teal-500 text-4xl font-extrabold mt-12">MISSION</h1>
      <p class="text-justify mt-4 ">To ensure that all persons have equitable access to the government's services, to assist community members 
        with any difficulties
        <br>
        or grievances they may have, and to assure each individual's continuous productivity so that he/she can contribute to the common good.
      </p>
    </div>

   </div>
</template>

<script>
import { app } from "../firebase";
import Nav from "../components/Nav.vue";
import { getFirestore, getDoc, doc, setDoc} from "firebase/firestore";
export default{
  async mounted() {
      this.userID = this.$route.params.id;
    
      const db = getFirestore(app);
      const userid = this.userID;
      const residentRef = doc(db, "residents", userid);
      const residentSnap = await getDoc(residentRef);

      if (residentSnap.exists()) {
        if(residentSnap.data().logintoken=='Yes'){
          this.first = residentSnap.data().first;
          this.middle = residentSnap.data().middle;
          this.last = residentSnap.data().last;
          this.suffix = residentSnap.data().suffix;
          this.purok = residentSnap.data().purok;
          this.phonenumber = residentSnap.data().phonenumber;
          this.password = residentSnap.data().password;
          
        }
        else {
          this.$router.push('/');
        }
      } else {
          this.$router.push('/');
        console.log("No such document!"); 
      }
  },
  components:{
    Nav
  },
methods:{
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
}

}
</script>
