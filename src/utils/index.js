
export const checkAuth = () => {
    try {
        const userDetails = localStorage.getItem('userDetails')
        return JSON.parse(userDetails)
    } catch (error) {
        return false
    }
}