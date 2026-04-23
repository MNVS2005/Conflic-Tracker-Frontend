import { defineStore } from 'pinia'
import api from '../API' // 👈 usamos tu instancia

export const useConflictStore = defineStore('conflicts', {

  state: () => ({
    conflicts: [],
    search: '',
    loading: false,
    error: null
  }),

  getters: {
    filteredConflicts(state) {
      return state.conflicts.filter(c =>
        c.name?.toLowerCase().includes(state.search.toLowerCase())
      )
    }
  },

  actions: {

    // 🔹 GET ALL
    async loadConflicts() {
      this.loading = true
      this.error = null

      try {
        const res = await api.get('/api/admin/conflict')
        this.conflicts = res.data

      } catch (error) {
        console.error('Error cargando conflictos:', error)
        this.error = 'No se pudieron cargar los conflictos'
        this.conflicts = []

      } finally {
        this.loading = false
      }
    },

    // 🔹 GET BY ID
    async getConflictById(id) {
      try {
        const res = await api.get(`/api/admin/conflict/${id}`)
        return res.data

      } catch (error) {
        console.error('Error obteniendo conflicto:', error)
        this.error = 'Error al obtener el conflicto'
        return null
      }
    },

    // 🔹 CREATE
    async createConflict(data) {
      this.error = null

      try {
        await api.post('/api/admin/conflict', data)
        await this.loadConflicts()

      } catch (error) {
        console.error('Error creando conflicto:', error)
        this.error = 'Error al crear el conflicto'
      }
    },

    // 🔹 DELETE
    async deleteConflict(id) {
      this.error = null

      try {
        await api.delete(`/api/admin/conflict/${id}`)
        await this.loadConflicts()

      } catch (error) {
        console.error('Error eliminando conflicto:', error)
        this.error = 'Error al eliminar el conflicto'
      }
    },

    // 🔹 UPDATE
    async updateConflict(id, data) {
      this.error = null

      try {
        await api.put(`/api/admin/conflict/${id}`, data)
        await this.loadConflicts()

      } catch (error) {
        console.error('Error actualizando conflicto:', error)
        this.error = 'Error al actualizar el conflicto'
      }
    }

  }
})