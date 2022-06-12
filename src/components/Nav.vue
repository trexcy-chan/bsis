<template>
   <div  
   class="w-screen shadow-md h-14 bg-white">
          <div class="mx-auto lg:px-8 w-full">
            <header 
             class="lg:flex justify-between">
             <h1
                class="
                  font-bold
                  text-center text-2xl text-amber-500
                  mt-3 
                  bg-white
                  lg:bg-inherit
                "
              >
                BCI <span class="text-teal-500">SYSTEM</span>
              </h1>
              <div @click="toggleNav"
              class="lg:order-2 order-1">
                <button
                  class="
                    flex
                    lg:hidden
                    flex-col
                    absolute
                    top-0
                    ml-3
                    py-6
                    block
                  "
                >
                  <span class="w-5 h-px mb-1 bg-amber-500"></span>
                  <span class="w-5 h-px mb-1 bg-amber-500"></span>
                  <span class="w-5 h-px mb-1 bg-amber-500"></span>
                </button>
                <nav 
                :class="showMenu ? 'flex' : 'hidden'"
                class="
                flex-col
                mt-3
                space-y-4
                lg:flex lg:space-y-0 lg:flex-row 
                lg:space-x-10 lg:-mt-4 lg:bg-inherit bg-white w-full
                lg:shadow-none
                shadow-md
                ">
                
                  <a

                    @click="$parent.gthome"
                    class="text-gray-800 hover:text-teal-400 text-left"
                    >Home</a
                  >
                  <a
                    @click="$parent.gttrackcert"
                    class="text-gray-800 hover:text-teal-400 text-left"
                    >Appointment</a
                  >
                  <a
                    @click="$parent.gtreqcert"
                    class="text-gray-800 hover:text-teal-400 text-left"
                    >Schedule an Appointment</a
                  >
                  <a
                    @click="$parent.logout"
                    class="
                      right-1
                      left-5
                      bg-amber-500
                      hover:bg-teal-300
                      rounded-full
                      uppercase
                      text-white
                      py-0.5
                      px-6
                      lg:w-auto
                      w-1/2
                    "
                    >Log out</a
                  >
                </nav>
              </div>

              
            </header>
          </div>
        </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'NavBar',
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },  
}
</script>