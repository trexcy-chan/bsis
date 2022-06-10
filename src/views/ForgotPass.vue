<template>
	<div class="h-screen content mx-auto bg-gray-200">
		<div class="flex justify-center px-10">
			<div class="w-full xl:w-3/4 lg:w-11/12 flex justify-evenly mt-10 xl:mt-20 md:mt-10">
				<div class="w-full md:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
					<div class="px-8 mb-4 text-center">
						<h3 class="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
						<p class="mb-4 text-sm text-gray-700">
							We get it, stuff happens. Just enter your phone number below and we'll send you an
							OTP to reset your password!
						</p>
					</div>
					<form v-if="phase1" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
						<div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700">
								Phone Number
							</label>
							<input v-model="phonenumber"
								class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								type="number"
								placeholder="Enter Phone Number..."/>
						</div>   
                        <div class="flex justify-evenly mb-5">
                            <div id="recaptcha-container" class="w-full">
                            </div>
                        </div>
						<div class="mb-6 text-center">
							<button @click="gtphase2"
								class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
								type="button"
							>
								Reset Password
							</button>
						</div>
						<hr class="mb-6 border-t" />
						<div class="text-center">
							<a @click="gtregister" class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"> Create an Account!</a>
						</div>
						<div class="text-center">
							<a @click="gtlogin" class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
								Already have an account? Login!
							</a>
						</div>
					</form>
					<form v-if="phase2" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
						<div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700">
								Enter OTP Code
							</label>
							<input v-model="otpcode"
								class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								type="number"
								placeholder="Enter OTP Code..."/>
						</div>
						<div class="mb-6 text-center">
							<button  @click="gtphase3"
								class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
								type="button"
							>
								Submit
							</button>
						</div>
						<hr class="mb-6 border-t" />
						<div class="text-center">
							<a @click="gtregister" class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"> Create an Account!</a>
						</div>
						<div class="text-center">
							<a @click="gtlogin" class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
								Already have an account? Login!
							</a>
						</div>
					</form>
					<form v-if="phase3" class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
						<div class="mb-4">
							<label class="block mb-2 text-sm font-bold text-gray-700">
								Enter New Password
							</label>
							<input v-model="newpassword"
								class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								type="password" 
								placeholder="Enter new Password..."/>
						</div>
                        <div class="mb-4">
							<input  v-model="newpassword2"
								class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
								type="password"
								placeholder="Confirm New Password..."/>
						</div>
						<div class="mb-6 text-center">
							<button @click="confirm"
								class="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
								type="button"
							>
								Confirm
							</button>
						</div>
						<hr class="mb-6 border-t" />
						<div class="text-center">
							<a @click="gtregister" class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"> Create an Account!</a>
						</div>
						<div class="text-center">
							<a @click="gtlogin" class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800">
								Already have an account? Login!
							</a>
						</div>
					</form>
					</div>
				</div>
			</div>
		</div>


</template>

<script>
import { auth,app } from "../firebase";
import { getAuth, signInWithPhoneNumber, RecaptchaVerifier,} from "firebase/auth";
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore";
export default {
    data(){
        return{
            phonenumber:'',
            otpcode:'',
            userID:'',
            newpassword:'',
            newpassword2:'',

            phase1:true,
            phase2:false,
            phase3:false,
        }
    },
    methods:{
        gtphase1(){
                this.phase1 = true;
                this.phase2 = false;
                this.phase3 = false;
        },
        gtphase2(){
            if(this.phonenumber == ''){
                this.$toast.error('Invalid Number',{
                    position:"top"
                });
            } else{
                this.submit();
            }
        },
        gtphase3(){
            this.verifyOtp();
        },
        async confirm(){
            if(this.newpassword == ''){
                this.$toast.warning('Please enter new password',{
                    position: "top"
                });
            } else if(this.newpassword2 == ''){
                this.$toast.warning('Please confirm new password',
                {
                    position:"top"
                });
            } else if(this.newpassword2 != this.newpassword){
                this.$toast.error('Pasword do not match', {
                    position:"top"
                });
            } else{
                const db = getFirestore(app)
                const userid = this.userID;  
                const residentRef = doc(db, "residents",userid);
                const residentSnap = await getDoc(residentRef);  

                if(residentSnap.exists()){
                        
                    const first = residentSnap.data().first;
                    const middle = residentSnap.data().middle;
                    const last = residentSnap.data().last;
                    const purok = residentSnap.data().purok;
                    const suffix = residentSnap.data().suffix;
                    const phonenumber = residentSnap.data().phonenumber;
                    const password =  window.btoa(this.newpassword);//encrypt
                    const logintoken = 'No';

                    const db = getFirestore(app);
                    const userID = this.userID;
                    console.log("Saving Data");
                    await setDoc(doc(db, "residents",userID ),{ userID, phonenumber, first, middle, last, suffix, purok, password,logintoken })
                    this.$toast.success ("Changes Saved");
                    this.gtlogin();

                } else{
                    console.log("No such document!");
                }

            }
        },

        
        gtlogin(){
        this.$router.push("/");
        },
        async submit() {
            let phoneNumber = '+63'+this.phonenumber;
            const auth = getAuth(app);
            window.recaptchaVerifier = new RecaptchaVerifier(
            "recaptcha-container",
            {
                size: "normal",
                callback: () => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                // ...
                },
            },
            auth
            );

            const appVerifier = window.recaptchaVerifier;

            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
            .then((confirmationResult) => {
                window.confirmationResult = confirmationResult;

                this.phase1 = false;
                this.phase2 = true;
                this.phase3 = false;


            })
            .catch((error) => {
                console.log(error);
                this.$toast.error("Error ! SMS not sent", {
                    position: "top"
                });
                this.gtphase1();
            });
        },
        verifyOtp() {
            const code = this.otpcode;
            window.confirmationResult
            .confirm(code)
            .then((result) => {
            // User signed in successfully.
            const user = result.user;
            console.log(user);
            this.$toast.success('Verified!', {
                position: "top"
            });
            this.userID = auth.currentUser.uid;
            this.phase1 = false;
            this.phase2 = false;
            this.phase3 = true;
            
            })
            .catch((error) => {
            console.log(error);
            this.$toast.error('Invalid OTP', {
                position: "top"
            });
            
            this.otpcode='';
            this.phonenumber='';
            this.gtphase1();
            });
        },
        gtregister(){
            this.$router.push("/residentsignuppage")
        }
    }
}
</script>

<style>

</style>