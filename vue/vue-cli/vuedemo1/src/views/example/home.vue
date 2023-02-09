<template>
  <div class="container">
    <div class="room-list">
      <template v-for="item in roomInfo">
        <RoomItem :info="item" class="item" />
      </template>
    </div>
  </div>
</template>

<script setup>
import RoomItem from "@/components/example/RoomItem.vue";
const roomInfo = [
  { img: "", description: "这是描述，这是描述111" },
  { img: "", description: "这是描述，这是描述222" },
  { img: "", description: "这是描述，这是描述333" },
];
</script>

<style scoped>
.room-list {
  display: flex;
}
.item {
  margin: 0 15px;
}
</style>
