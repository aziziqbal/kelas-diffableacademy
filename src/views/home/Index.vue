<template>
  <v-theme-provider dark>
    <section id="hero-alt">
      <base-img
        :height="$vuetify.breakpoint.mdAndUp ? 350 : 225"
        :gradient="gradient"
        :src="src"
        color="#45516b"
        flat
        max-width="100%"
        tile
      >
        <v-row
          align="center"
          class="ma-0 fill-height text-center"
          justify="center"
        >
          <v-col cols="12">
            <base-heading
              title="Daftar Sekarang"
              space="2"
              weight="500"
            />
            <div
              style="color:White;margin-bottom:20px;"
            >
              Nonton video pembelajaran dan tanam ilmu sekarang untuk meraih panen di masa depan
            </div>
            <base-divider
              color="primary"
              dense
            />
          </v-col>
        </v-row>
      </base-img>
      <base-section
        id="contact-us"
        class="primary"
        space="36"
      >
        <v-row
          align="center"
          class="ma-0"
          justify="center"
        >
          <base-title
            space="0"
            title="Mau belajar apa ?"
          />

          <v-responsive
            class="px-4 mx-6"
            max-width="600"
            width="100%"
          >
            <base-text-field
              hide-details
              label="Pilih nama kelas"
            >
              <template v-slot:append-outer>
                <v-btn
                  class="ml-n1"
                  height="40"
                  outlined
                  style="margin-top: -7px;"
                >
                  Cari
                </v-btn>
              </template>
            </base-text-field>
          </v-responsive>
        </v-row>
      </base-section>
      <base-section
        id="about-our-product"
        style="background-color:#F2F5F7"
      >
        <v-container>
          <v-row>
            <v-col
              v-for="card in cards"
              :key="card.title"
              cols="12"
              md="4"
            >
              <v-card
                class="mx-auto"
                max-width="344"
                outlined
                style="background-color:white;"
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div
                      class="overline mb-4"
                      style="color:black;"
                    >Gratis</div>
                    <v-list-item-title
                      style="color:black;"
                      class="headline mb-1"
                    >Design Grafis</v-list-item-title>
                    <v-list-item-subtitle
                      style="color:black"
                    >
                    Pengantar design grafis untuk pemula</v-list-item-subtitle>
                  </v-list-item-content>

                  <v-list-item-avatar
                    tile
                    size="80"
                    color="grey"
                  ></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                  <v-btn
                    color="primary"
                    text
                    style="font-weight:bold"
                    @click="lihatkelas()"
                  >Lihat Kelas  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </base-section>
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
        {
          title: 'Grow yo3ur Revenue',
          subtitle: 'Best Productivity',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '01',
        },
        {
          title: 'Affordable Pr2ices',
          subtitle: 'Special Offers',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '02',
        },
        {
          title: '5Target Setting',
          subtitle: 'Income Flow',
          text: 'Similique sunt in culpa qui officia deserunt mollitia animi, id est laborut dolorum fuga.harum quidem rerum facilis estexpedita distinctio.',
          callout: '03',
        },
      ],
    }),

    computed: {
      gradient () {
        const color = `${this.$vuetify.theme.themes.light.secondary}CC`
        const overlay = RGBAtoCSS(HexToRGBA(color))

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
     methods: {
      lihatkelas() {
        this.$router.push({ path: 'about' })
      }
     }
  }
</script>

<style lang="sass" scoped>
  #hero-alt
    .v-breadcrumbs__item
      color: #FFFFFF
</style>
