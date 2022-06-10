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
export default {
  name: 'NavBar',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
