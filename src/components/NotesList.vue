<template>
  <div id="notes-list">

    <div id="list-header">
      <h2>vue-notes-app</h2>
      <div class="btn-group btn-group-justified" role="group">
        <!-- All Notes button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
                  @click="show = 'all'"
                  :class="{active: show === 'all'}">
           所有笔记
          </button>
        </div>
        <!-- Favorites Button -->
        <div class="btn-group" role="group">
          <button type="button" class="btn btn-default"
                  @click="show = 'favorites'"
                  :class="{active: show === 'favorites'}">
           收藏
          </button>
        </div>
      </div>
    </div>
    <!-- render notes in a list -->
    <div class="container">
      <div class="list-group">
        <a v-for="note in filteredNotes"
           class="list-group-item" href="#"
           :class="{active: activeNote === note}"
           @click="updateActiveNote(note)">
          <h4 class="list-group-item-heading">
            {{note.text.trim().substring(0, 30)}}
          </h4>
        </a>
      </div>
    </div>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    data() {
      return {
        show: 'all'
      };
    },
    computed: {
        // 可以采用如下写法，获取getters,2.0新增了mapGetters
     /* notes() {
        return this.$store.state.notes;
      },
      activeNote() {
        return this.$store.state.activeNote;
      },*/
      ...mapGetters(['notes', 'activeNote']),
      filteredNotes() {
        if (this.show === 'all') {
          return this.notes;
        } else if (this.show === 'favorites') {
          return this.notes.filter(note => note.favorite);
        }
        return false;
      }
    },
    methods: {
      ...mapActions(['updateActiveNote'])
    }
  };
</script>
