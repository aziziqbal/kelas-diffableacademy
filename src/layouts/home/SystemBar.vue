<template>
  <v-system-bar
    v-if="model"
    app
    color="#305871"
    class="px-4"
    dark
    height="58"
  >
    <v-row>
      <v-col cols="2">
      </v-col>
      <v-col class="d-flex justify-space-around">
      <div style="color:white;font-size:16px;font-weight:bold;text-align:center;">
        Daftar dan Belajar Sekarang
      </div>
      </v-col>
      <v-col cols="2" class="d-flex justify-end">
        <v-btn
          class="text-capitalize grey--text mr-n2 mr-sm-n1"
          small
          text
          @click="model = false"
        >
          <v-icon
            color="white"
            :left="$vuetify.breakpoint.smAndUp"
          >
            mdi-close
          </v-icon>

          <span
            class="hidden-xs-only"
            style="color:white;"
          >
            Tutup
          </span>
        </v-btn>
      </v-col>
    </v-row>
  </v-system-bar>
</template>

<script>
  export default {
    name: 'HomeSystemBar',

    data: () => ({
      model: true,
    }),
  }
</script>
