import axios from 'axios'
import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { OtherSubreddit, Subreddit } from '~/customTypes'

const API_ENDPOINT = 'http://localhost:4000/subreddit/'

@Module({
  stateFactory: true,
  namespaced: true
})
export default class OtherSubreddits extends VuexModule {
      otherSubreddits : OtherSubreddit[] = [];

      @Mutation
      setOtherSubreddits (otherSubreddits: OtherSubreddit[]) {
        this.otherSubreddits = otherSubreddits
      }

      @Action({ rawError: true })
      async fetchOtherSubreddits () {
        const { data } = await axios.get<Array<Subreddit>>(`${API_ENDPOINT}`)

        const otherSubredditsData: OtherSubreddit[] = data.map(subreddit => ({ slug: subreddit.slug, members: subreddit.members }))

        // for some reason accessing the mutation from this doesn't work, so I have to resort to this
        // this.setOtherSubreddits(otherSubredditsData)
        this.context.commit('setOtherSubreddits', otherSubredditsData)
      }

      @Action
      clearOtherSubreddits () {
        this.context.commit('setOtherSubreddits', [])
      }
}
