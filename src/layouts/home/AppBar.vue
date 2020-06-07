<template>
  <div>
    <v-snackbar multi-line :color="color" top right v-model="snackbar">
      {{ status }}
      <v-btn
        dark
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>
    <v-app-bar
      id="home-app-bar"
      app
      color="white"
      elevation="1"
      height="80"
    >
      <base-img
        :src="require('@/assets/logo_da.png')"
        class="mr-3 hidden-xs-only"
        contain
        max-width="150"
        width="100%"
      />
      <v-spacer />
        <!-- <v-date-picker v-model="picker"></v-date-picker> -->

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
        >
          <v-tab 
            to="/"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text>
            Belajar
          </v-tab>
          <!-- <v-tab 
            to="/about"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text>
            About
          </v-tab> -->
          <v-tab 
            to="/about"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text>
            Kelas Yang Diikuti
          </v-tab>
          <v-tab 
            to="/profile"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text>
            Profile
          </v-tab>
          <v-tab 
            @click="login()"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text>
            Masuk
          </v-tab>
          <v-tab 
            @click="daftar()"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text>
            Daftar
          </v-tab>
        </v-tabs>
      </div>

      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="drawer = !drawer"
      />
    </v-app-bar>
    <home-drawer
      v-model="drawer"
      :items="items"
    />
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Masuk</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Email*" hint="email yang telah didaftarkan"
                  persistent-hint
                  required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Password*" type="password" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Tutup</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Masuk</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Daftar</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row no-gutters>
              <v-col cols="12" style="margin-bottom:10px;">
                <v-text-field v-model="auth.nama" label="Nama*" required hint="nama lengkap akan digunakan untuk sertifikat kelulusan"
                  persistent-hint></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="auth.email" label="Email*" 
                  required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="auth.password" label="Password*" type="password" required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="auth.alamat" label="Alamat Lengkap"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="auth.no_hp" label="Nomer Hp"></v-text-field>
              </v-col>
              <v-row style="padding-top:0px;">
                <v-col class="d-flex" cols="6" sm="6" style="padding-top:0px;">
                  <v-text-field v-model="auth.sekolah" label="Sekolah" required hint="tuliskan lulus jika sudah tidak bersekolah"
                  persistent-hint></v-text-field>
                </v-col>
                <v-col class="d-flex" cols="6" sm="6" style="padding-top:0px;">
                  <v-dialog
                    ref="dialog"
                    v-model="modal"
                    :return-value.sync="date"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="date"
                        label="Picker in dialog"
                        prepend-icon="event"
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false">Cancel</v-btn>
                      <v-btn text color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
               </v-row>
              <v-row>
                <v-col class="d-flex" cols="6" sm="6">
                  <v-select
                    item-text="jenis_disabilitas"
                    item-value="id"
                    v-model="auth.jenis_disabilitas"
                    :items="jenis_disabilitas"
                    label="Jenis Disabilitas"
                  ></v-select>
                </v-col>
                <v-col class="d-flex" cols="6" sm="6">
                  <v-select
                    item-text="jenis_kelamin"
                    item-value="id"
                    v-model="auth.jenis_kelamin"
                    :items="jenis_kelamin"
                    label="Jenis Kelamin"
                  ></v-select>
                </v-col>
              </v-row>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog2 = false">Tutup</v-btn>
          <v-btn color="blue darken-1" text @click="save()" >Daftar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    name: 'HomeAppBar',

    components: {
      HomeDrawer: () => import('./Drawer'),
    },

    data: () => ({
      status: '',
      color: '',
      snackbar: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      host: 'http://api.diffableacademy.com/index.php',
      fromDateMenu: false,
      fromDateVal: null,
      minDate: "2020-07-04",
      maxDate: "2021-08-30",
      items: [
        'Tuna Netra',
        'Tuna Rungu',
        'Tuna Wicara',
        'Tuna Daksa,',
        'Tuna Laras',
        'Tuna Grahita',
        'Tuna Ganda',
        'Lain-lain'
      ],
      items2: [
        'Pria',
        'Wanita'
      ],
      dialog: false,
      dialog2: false,
      drawer: null,
      items: [
        'Home',
        'About',
        'Contact',
        'Pro',
      ],
      jenis_kelamin: {},
      jenis_disabilitas: {},
      auth: {
        email: '',
        password: '',
        nama: '',
        tanggal_lahir: '',
        no_hp: '',
        alamat: '',
        sekolah: '',
        jenis_disabilitas: '',
        jenis_kelamin: ''
      }
    }),
    computed: {
      fromDateDisp() {
        return this.fromDateVal;
      }
    },
    mounted() {
      this.getJenisKelamin()
      this.getJenisDisabilitas()
    },
    methods: {
      getJenisKelamin() {
        axios.get(this.host + '/auth/jenis_kelamin').then(res => {
          this.jenis_kelamin = res.data
          console.log(res)
        }).catch ((err) => {
          console.log(err);
        })
      },
      getJenisDisabilitas() {
        axios.get(this.host + '/auth/jenis_disabilitas').then(res => {
          this.jenis_disabilitas = res.data
        }).catch ((err) => {
          console.log(err);
        })
      },
      login() {
        this.dialog = true
      },
      daftar() {
        this.dialog2 = true
      },
      save() {
        const qs = require('querystring')
        this.auth.tanggal_lahir = this.date
        console.log(JSON.stringify(this.auth))
        let rawData = {
          email: this.auth.email,
          password: this.auth.password,
          nama: this.auth.nama,
          tanggal_lahir: this.auth.tanggal_lahir,
          no_hp: this.auth.no_hp,
          alamat: this.auth.alamat,
          sekolah: this.auth.sekolah,
          jenis_disabilitas: this.auth.jenis_disabilitas,
          jenis_kelamin: this.auth.jenis_kelamin
        }
        axios({
          method: 'post',
          url: this.host + '/auth/register',
          // responseType: 'json',
          data: this.auth,
          // data: qs.stringify(this.auth)
          config: { headers: { 'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
          console.log(response)
          this.status = 'Data berhasil tersimpan'
          this.color = 'success'
          this.snackbar = true
        })
        .catch(error => {
          this.status = 'Error' + error
          this.color = 'error'
          this.snackbar = true
        })

      }
    }
  }
</script>

<style lang="sass">
  #home-app-bar
    .v-tabs-slider
      max-width: 24px
      margin: 0 auto

    .v-tab
      &::before
        display: none
</style>
