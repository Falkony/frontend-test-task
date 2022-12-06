<script setup>
defineProps({
    post: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div>
        <pre>{{ post }}</pre>  
    </div>
</template>

<style lang="scss" scoped>

</style>