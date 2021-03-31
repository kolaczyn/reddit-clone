<template>
  <div>
    <SidebarAboutCommunity :stats="stats">
      {{ stats }}
      <template #header>
        About Community
      </template>
      <template #about>
        Lorem ipsum, dolor stit amet consectetur adipisicing elit. Eveniet amet
        doloribus natus dolorum a voluptate incidunt temporibus suscipit molestias
        quaerat doloremque, provident, asperiores adipisci similique obcaecati.
      </template>
      <template #created>
        <span>Created Oct 23, 2011</span>
      </template>
    </SidebarAboutCommunity>
    <SidebarRelatedCommunities />
  </div>
</template>

<script>
export default {
  data () {
    return {
      stats: [
        { number: '4.0m', label: 'Dads' },
        { number: '2.0k', label: 'Groaning Now' }
      ]
    }
  }
}
</script>
