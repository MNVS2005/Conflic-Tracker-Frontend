import { defineStore } from 'pinia'
import axios from 'axios'

const API = '/api/admin/conflict'

export const useConflictStore = defineStore('conflicts', {

  state: () => ({
    conflicts: [],
    search: '',
    loading: false
  }),

  getters: {
    filteredConflicts(state) {
      return state.conflicts.filter(c =>
        c.name.toLowerCase().includes(state.search.toLowerCase())
      )
    }
  },

  actions: {

    // 🔹 GET ALL
    async loadConflicts() {
      this.loading = true
      try {
        const res = await axios.get(API)
        this.conflicts = res.data
      } catch (error) {
        console.error("Error cargando conflictos", error)
      } finally {
        this.loading = false
      }
    },

    // 🔹 GET BY ID
    async getConflictById(id) {
      const res = await axios.get(`${API}/${id}`)
      return res.data
    },

    // 🔹 CREATE
    async createConflict(data) {
      await axios.post(API, data)
      this.loadConflicts()
    },

    // 🔹 DELETE
    async deleteConflict(id) {
      await axios.delete(`${API}/${id}`)
      this.loadConflicts()
    },

    // 🔹 UPDATE (cuando lo agregues)
    async updateConflict(id, data) {
      await axios.put(`${API}/${id}`, data)
      this.loadConflicts()
    }

  }
})