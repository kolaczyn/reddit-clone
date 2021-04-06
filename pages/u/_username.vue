<template>
  <LayoutMediumContainer>
    <LayoutMainTwoCols class="mt-2 mx-auto">
      <template #first>
        <FilterBar class="mb-2" />
        <PostsTimeline />
      </template>
      <template #second>
        <UserCard :username="username" :description="description" :karma="karma" :cake-day="cakeDay" />
      </template>
    </LayoutMainTwoCols>
  </LayoutMediumContainer>
</template>

<script>
export default {
  asyncData ({ params }) {
    const { username } = params
    const description = 'Tenetur itaque ea molestiae non blanditiis hic earum. Corporis aperiam voluptatibus ut deserunt. Voluptatibus est officiis odit et. Sit natus nobis quos'
    const karma = 1234
    const cakeDay = '2019-01-01'
    return { username, description, karma, cakeDay }
  }
}
</script>
