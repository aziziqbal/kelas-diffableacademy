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
    <v-app-bar id="home-app-bar" app color="white" elevation="1" height="80">
      <base-img
        :src="require('@/assets/logo_da.png')"
        class="mr-3"
        contain
        max-width="120"
        width="100%"
      />
      <v-spacer />
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
          <v-tab
            to="/"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text>
            Kelas yang dipelajari
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
            v-show="ceklogin"
            @click="login()"
            :ripple="false"
            active-class="text--primary"
            class="font-weight-bold"
            min-width="96"
            text>
            Masuk
          </v-tab>
          <v-tab
            v-show="ceklogin"
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
    <v-navigation-drawer
      bottom
      color="transparent"
      fixed
      v-model="drawer"
      height="auto"
      overlay-color="secondary"
      overlay-opacity=".8"
      temporary
      v-bind="$attrs"
      v-on="$listeners"
    >
      <v-list color="white" shaped>
        <v-list-item to="/" color="primary">
          <v-list-item-content>
            <v-list-item-title v-text="'Beranda'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/profile" color="primary">
          <v-list-item-content>
            <v-list-item-title v-text="'Profile'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="login()" color="primary">
          <v-list-item-content>
            <v-list-item-title v-text="'Login'" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="daftar()" color="primary">
          <v-list-item-content>
            <v-list-item-title v-text="'Daftar'" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">Masuk</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            {{ statusUser }}
            <v-row>
              <v-col cols="12">
                <v-text-field v-model="dataLogin.email" label="Email*" hint="email yang telah didaftarkan"
                  persistent-hint
                  required></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="dataLogin.password" label="Password*" type="password" required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Tutup</v-btn>
          <v-btn color="blue darken-1" text @click="masuk()">Masuk</v-btn>
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
                <v-text-field v-model="auth.full_name" label="Nama*" required hint="nama lengkap akan digunakan untuk sertifikat kelulusan"
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
                <v-text-field v-model="auth.location" label="Alamat Lengkap"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field v-model="auth.phone" label="Nomer Hp"></v-text-field>
              </v-col>
              <v-row style="padding-top:0px;">
                <v-col class="d-flex" cols="6" sm="6" style="padding-top:0px;">
                  <v-text-field v-model="auth.school" label="Sekolah" required hint="tuliskan lulus jika sudah tidak bersekolah"
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
                    item-text="type_of_disability"
                    item-value="id"
                    v-model="auth.type_of_disability"
                    :items="jenis_disabilitas"
                    label="Jenis Disabilitas"
                  ></v-select>
                </v-col>
                <v-col class="d-flex" cols="6" sm="6">
                  <v-select
                    item-text="gender"
                    item-value="id"
                    v-model="auth.gender"
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
import { mapState, mapGetters } from 'vuex'

  export default {
    name: 'HomeAppBar',

    data: () => ({
      ceklogin: true,
      dataUser: {},
      status: '',
      color: '',
      snackbar: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      host: 'https://api.diffableacademy.com/index.php',
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
        'Beranda',
        'Profile',
        'Masuk',
        'Daftar',
      ],
      jenis_kelamin: {},
      jenis_disabilitas: {},
      auth: {
        email: '',
        password: '',
        full_name: '',
        date_of_birth: '',
        phone: '',
        location: '',
        school: '',
        type_of_disability: '',
        gender: ''
      },
      dataLogin: {
        email: '',
        password: ''
      },
      dataLogin2: {}
    }),
    // computed: mapState([
    //   'user'
    // ]),
    computed: {
      ...mapState(['user', 'statusUser']),
      fromDateDisp() {
        return this.fromDateVal;
      }
    },
    mounted() {
      this.getUser()
      this.getJenisKelamin()
      this.getJenisDisabilitas()
    },
    methods: {
      getUser() {
        this.dataLogin2 = JSON.parse(localStorage.getItem('dataUserLocal'));
        console.log(this.dataLogin2.status)
        if (this.dataLogin2.status === true) {
          this.ceklogin = false
        } else {
          this.ceklogin = true
        }
      },
      getJenisKelamin() {
        axios.get(this.host + '/auth/gender').then(res => {
          this.jenis_kelamin = res.data
          console.log(this.jenis_kelamin)
        }).catch ((err) => {
          console.log(err);
        })
      },
      getJenisDisabilitas() {
        axios.get(this.host + '/auth/type_of_disability').then(res => {
          this.jenis_disabilitas = res.data
          console.log(this.jenis_disabilitas)
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
        this.auth.date_of_birth = this.date
        let rawData = {
          email: this.auth.email,
          password: this.auth.password,
          full_name: this.auth.full_name,
          date_of_birth: this.auth.date_of_birth,
          phone: this.auth.phone,
          location: this.auth.location,
          school: this.auth.school,
          type_of_disability: this.auth.type_of_disability,
          gender: this.auth.gender
        }
        axios({
          method: 'post',
          url: this.host + '/auth/register',
          data: this.auth,
          config: { headers: { 'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
          this.status = 'Data berhasil tersimpan'
          this.color = 'success'
          this.snackbar = true
          this.dialog2 = false
        })
        .catch(error => {
          this.status = 'Error' + error
          this.color = 'error'
          this.snackbar = true
        })

      },
      masuk() {
        axios({
          method: 'post',
          url: this.host + '/auth/login',
          data: this.dataLogin,
          config: { headers: { 'Content-Type': 'multipart/form-data' }}
        })
        .then(response => {
          this.dataUser = response.data
          this.$store.dispatch('createEvent', this.dataUser)
          localStorage.setItem('dataUserLocal',  JSON.stringify(this.dataUser))
          this.status = 'Selamat datang '
          this.color = 'success'
          this.snackbar = true
          // this.dialog2 = false
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
