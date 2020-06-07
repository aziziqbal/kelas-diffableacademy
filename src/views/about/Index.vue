<template>
  <v-theme-provider>
    <section id="hero-alt">
      <base-img
        :height="$vuetify.breakpoint.mdAndUp ? 250 : 225"
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
          justify="left"
        >
          <v-col cols="12">
            <base-heading
              title="Introduction Vue JS Framework"
              space="2"
              weight="500"
              style="color:white;"
            />
            <div
              style="color:White;margin-bottom:20px;"
            >
              Disusun oleh: Diffable Academy <br>
              Level: Dasar <br>
              <v-btn color="white" style="margin-top:10px;">Daftar Kelas</v-btn>
            </div>
            <!-- <base-divider
              color="primary"
              dense
            /> -->
          </v-col>
        </v-row>
      </base-img>
       <!-- <v-tabs
        background-color="#305871"
        v-model="tab"
        centered
        style="color:black;"
        color="white"
      >
        <v-tabs-slider></v-tabs-slider>
        <v-tab ripple>
          Materi
        </v-tab>
        <v-tab ripple>
          Tugas
        </v-tab> -->
        <!-- <v-tab-item style="background-color:#FAFAFA;padding:20px;"> -->
        <div style="background-color:#FAFAFA;padding:20px;">
          <v-row>
            <v-col class="d-flex" cols="12" sm="4" style="padding-top:0px;">
              <div style=";width:100%;">
                <v-card
                  class="mx-auto"
                >
                  <v-toolbar
                    color="#305871"
                    dark
                  >
                    <v-toolbar-title>Daftar Materi</v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-btn icon>
                      <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                  </v-toolbar>

                  <v-list two-line>
                    <v-list-item-group
                      v-model="selected"
                      multiple
                      active-class="pink--text"
                    >
                      <template v-for="(item, index) in items">
                        <v-list-item :key="item.title">
                          <template v-slot:default="{ active, toggle }">
                            <v-list-item-content>
                              <v-list-item-title v-text="item.title"></v-list-item-title>
                              <v-list-item-subtitle class="text--primary" v-text="item.headline"></v-list-item-subtitle>
                            </v-list-item-content>
                          </template>
                        </v-list-item>

                        <v-divider
                          v-if="index + 1 < items.length"
                          :key="index"
                        ></v-divider>
                      </template>
                    </v-list-item-group>
                  </v-list>
                </v-card>
              </div>
            </v-col>
            <v-col class="d-flex" cols="12" sm="8" style="padding-top:0px;">
              <v-card
                class="mx-auto"
                style="width:100%;"
                outlined
              >
                <v-list-item three-line>
                  <v-list-item-content>
                    <div class="overline mb-4" style="letter-spacing: normal;">Materi 1 </div>
                    <v-list-item-title class="headline mb-1" style="letter-spacing: normal;">Introduction Vue JS</v-list-item-title>
                    <!-- <v-list-item-subtitle>Loremp isump</v-list-item-subtitle> -->
                    <v-card-text style="padding:0px;margin-top:20px;">
                      <div style="letter-spacing: normal;text-align:justify;margin-bottom:20px;">
                        Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.

If you’d like to learn more about Vue before diving in, we created a video walking through the core principles and a sample project.

If you are an experienced frontend developer and want to know how Vue compares to other libraries/frameworks, check out the Comparison with Other Frameworks.
                      </div>
                      <youtube :video-id="videoId" :player-vars="playerVars" @playing="playing"></youtube>
                    </v-card-text>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-col>
          </v-row>
        </div>
        <!-- </v-tab-item> -->
        <!-- <v-tab-item style="background-color:#FAFAFA;padding:20px;">
          2
        </v-tab-item> -->
       <!-- </v-tabs> -->
    </section>
  </v-theme-provider>
</template>

<script>
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
      videoId: 'lG0Ys-2d4MA',
      playerVars: {
        autoplay: 1
      },
      title: '',
      tab: null,
      selected: [0],
      items: [
        {
          headline: 'What is Vue JS ?',
          title: 'Materi 1',
        },
        {
          headline: 'What is Vue JS ?',
          title: 'Materi 2',
        },
        {
          headline: 'What is Vue JS ?',
          title: 'Materi 3',
        },
        {
          headline: 'What is Vue JS ?',
          title: 'Materi 4',
        },
        {
          headline: 'What is Vue JS ?',
          title: 'Materi 5',
        },
        {
          headline: 'What is Vue JS ?',
          title: 'Materi 6',
        },
        {
          headline: 'What is Vue JS ?',
          title: 'Materi 7',
        },
        {
          headline: 'What is Vue JS ?',
          title: 'Materi 8',
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
    playing() {
      console.log('\o/ we are watching!!!')
    }
  }
  }
</script>

<style lang="sass">
  iframe
    width: 100%
  #hero-alt
    .v-breadcrumbs__item
      color: #FFFFFF
</style>
