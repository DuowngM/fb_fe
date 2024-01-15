import Repository from './Repository'
const resourse = '/notification'

export default {
  renderNotification({ userId }) {
    console.log(userId)
    try {
      return Repository.get(`${resourse}?userId=${userId}`)
    } catch (error) {
      console.log(error)
    }
  },

  sendNotificationId(payload) {
    return Repository.patch(payload)
  },
}
