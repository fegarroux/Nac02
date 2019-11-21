import RirAPI from '@/api/rir.api'

class RirServices {
    async getFacts() {
        try {
            const response = await RirAPI.getFacts()
            if (response && response.data) {
                return response.data
            }
        } catch (error) {
            throw error
        }
    }
}
export default new RirServices()