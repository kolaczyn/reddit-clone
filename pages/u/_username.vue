<template>
  <UserCard class="w-96 m-2" :username="username" :description="description" :karma="karma" :cake-day="cakeDay" />
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
