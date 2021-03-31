<template>
  <ul class="flex">
    <li>
      <PostInteractionButton>
        <template #icon>
          <IconComment />
        </template>
        <span>
          {{ commentsCount }} Comments
        </span>
      </PostInteractionButton>
    </li>
    <li>
      <PostInteractionButton>
        <template #icon>
          <IconShare />
        </template>
        <span>
          Share
        </span>
      </PostInteractionButton>
    </li>
    <li>
      <PostInteractionButton>
        <template #icon>
          <IconSave />
        </template>
        <span>
          Save
        </span>
      </PostInteractionButton>
    </li>
    <li>
      <PostInteractionButton>
        <template #icon>
          <IconTripleDot />
        </template>
      </PostInteractionButton>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    commentsCount: {
      type: Number,
      required: true
    }
  }
}
</script>
