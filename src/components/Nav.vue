<template>
   <div class="w-screen shadow-md h-14 bg-white">
          <div class="mx-auto lg:px-8 w-11/12">
            <header class="lg:flex justify-between">
              <div class="lg:order-2 order-1 ">
                <button
                  class="
                    flex
                    lg:hidden
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
                <nav class="hidden lg:flex gap-10 p-0 mt-4">
                  <a
                    @click="$parent.gthome"
                    class="text-gray-800 hover:text-teal-400"
                    >Home</a
                  >
                  <a
                    @click="$parent.gttrackcert"
                    class="text-gray-800 hover:text-teal-400"
                    >Appointment</a
                  >
                  <a
                    @click="$parent.gtreqcert"
                    class="text-gray-800 hover:text-teal-400"
                    >Schedule an Appointment</a
                  >
                  <a
                    @click="$parent.logout"
                    class="
                      right-1
                      bg-amber-500
                      hover:bg-teal-300
                      rounded-full
                      uppercase
                      text-white
                      py-2
                      px-6
                      -mt-2
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
export default {
  name: 'NavBar',
}
</script>