import axios from 'axios'

const initialState = {
  slug: '',
  members: 0,
  online: 0,
  createdAt: '',
  description: '',
  slogan: ''
}

const API_ENDPOINT = 'http://localhost:4000/subreddit/'

export const state = () => (initialState)

export const mutations = {
  setSubreddit (state, payload) {
    // I could use a little bit of TypeScript in here, to make things extra safe
    for (const key in payload) {
      if (key === 'posts') {
        continue
      }
      state[key] = payload[key]
    }
  }
}

export const actions = {
  async fetchSubredditData (context, payload) {
    const slug = payload
    // const { slug } = payload
    const { data } = await axios.get(`${API_ENDPOINT}?slug=${slug}`)
    const [subredditInfo] = data
    console.log(subredditInfo)
    context.commit('setSubreddit', subredditInfo)
  },
  resetState (context) {
    context.commit('setSubreddit', initialState)
  }
}

export const getters = {
  stats: state => [
    {
      label: 'Members',
      number: state.members
    },

    {
      label: 'Online',
      number: state.online
    }
  ]
}
