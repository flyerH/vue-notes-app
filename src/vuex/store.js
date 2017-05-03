/**
 * Created by He on 2017/4/27.
 * E-mail:408348116@qq.com
 */
import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';

/* eslint no-shadow: ["error", { "allow": ["state"] }] */
Vue.use(Vuex);

const state = {
  notes: [],
  activeNote: {}
};

const mutations = {
  ADD_NOTE(state) {
    const newNote = {
      text: 'New Note',
      favorite: false
    };
    state.notes.push(newNote);
    state.activeNote = newNote;
  },
  EDIT_NOTE(state, text) {
    state.activeNote.text = text;
  },

  DELETE_NOTE(state) {
    state.notes.splice(state.notes.indexOf(state.activeNote), 1);
    state.activeNote = state.notes[0] || {};
  },

  TOGGLE_FAVORITE(state) {
    state.activeNote.favorite = !state.activeNote.favorite;
  },

  SET_ACTIVE_NOTE(state, note) {
    state.activeNote = note;
  }
};

const getters = {
  notes: state => state.notes,
  activeNote: state => state.activeNote,
  activeNoteText: state => state.activeNote.text
};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
});
