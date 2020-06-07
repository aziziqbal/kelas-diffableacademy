<template>
  <v-theme-provider dark>
    <section id="hero-alt">
      <base-img
        :height="$vuetify.breakpoint.mdAndUp ? 150 : 225"
        :gradient="gradient"
        :src="require('@/assets/article-2.jpg')"
        color="white"
        flat
        max-width="100%"
        tile
      >
        <!-- <v-row
          v-if="title"
          align="center"
          class="ma-0 fill-height text-center"
          justify="center"
        >
          <v-col cols="12">
            <base-heading
              :title="title"
              space="2"
              weight="500"
            />

            <base-divider
              color="primary"
              dense
            />

            <v-breadcrumbs
              :items="items"
              class="justify-center pa-0"
              divider=">"
            />
          </v-col>
        </v-row> -->
      </base-img>
      <div>
        <v-container>
          <v-row no-gutters>
            <v-col cols="12" sm="3" align="center">
              <v-avatar
                class="profile"
                color="grey"
                size="164"
                tile
                style="position: unset;margin: -80px auto 0 auto;}"
              >
                <v-img src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg"></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" sm="4" align="start">
              <div class="nama">
                Muh Aziz Iqbal
              </div>
              <div class="demo-solution demo-solution--flexbox">
                <v-icon color="black">mdi-map-marker-radius</v-icon>
                <div class="alamat">
                  Kota Yogyakarta, Daerah Istimewa Yogyakarta
                </div>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </div>
      <v-container style="background-color:">
        <v-row justify="space-between" style="backg">
          <div class="nama" style="margin-left:23px;border-bottom:1px solid #3A91D8;margin-top:40px;">
            Kelas Yang Dipelajari
          </div>
        </v-row>
        <v-row justify="space-between" style="margin-top:20px;">
          <v-col
            v-for="card in cards"
            :key="card.title"
            cols="12"
            md="4"
            style="background-color:;"
          >
            <v-card
              class="mx-auto"
              style="background-color:white;"
              max-width="344"
              dark
            >
              <v-img
                :src="require('@/assets/article-2.jpg')"
                height="200px"
              ></v-img>

              <v-card-title style="color:#305871;letter-spacing: normal;">
                Pemrograman Web
              </v-card-title>

              <v-card-subtitle style="color:black;letter-spacing: normal;">
                Dasar Pemrograman Web
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="black">Lihat Kelas</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-theme-provider>
</template>

<script>
  // Components
  import {
    HexToRGBA,
    RGBAtoCSS,
  } from 'vuetify/lib/util/colorUtils'

  export default {
    name: 'SectionHeroAlt',

    metaInfo () {
      return {
        changed: meta => (this.title = meta.titleChunk.toUpperCase()),
      }
    },

    provide: {
      heading: { align: 'center' },
    },

    data: () => ({
      title: '',
      cards: [
        {
          title: 'Grow your Re1venue',
          subtitle: 'Best Productivity',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '01',
        },
        {
          title: 'Affordable Pric5es',
          subtitle: 'Special Offers',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '02',
        },
        {
          title: 'Target Setting',
          subtitle: 'Income Flow',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '03',
        },
        {
          title: 'Grow your Revenue2',
          subtitle: 'Best Productivity',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '01',
        },
        {
          title: 'Afford4able Prices',
          subtitle: 'Special Offers',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '02',
        },
        {
          title: 'Target Sett2ing',
          subtitle: 'Income Flow',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '03',
        },
      ],
    }),

    computed: {
      gradient () {
        const color = `${this.$vuetify.theme.themes.light.secondary}CC`
        const overlay = 'rgba(5, 11, 31, 0.8)'
        console.log(color)
        console.log(overlay)
        return `to top, ${overlay}, ${overlay}`
      },
      src () {
        return this.$route.meta.src
      },
      items () {
        return [
          { text: 'HOME', to: '/' },
          { text: this.title },
        ]
      },
    },
  }
</script>

<style lang="scss">
  #hero-alt{
    .v-breadcrumbs__item {
      color: #FFFFFF
    }
  }
  .nama {
    // margin-left:10px;
    margin-bottom:5px;
    font-size:2em;
  }
  .alamat {
    margin-left:10px;
  }
  .demo-problem, .demo-solution {
    font-size: 1em;
  }

  .demo-solution--flexbox {
    display: flex;
    align-items: center;
    margin:auto;
    v-icon {
      margin: 10px;
      padding: 10px;
      transition: margin 300ms;
    }
    
    &:hover {
      img {
        margin-left: 15px;
      }
    }
  }
</style>
