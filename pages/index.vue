<script lang="ts" setup>
const { getLocale} = useI18n()
const locale = getLocale()
</script>
<template>
    <h1>I18N MICRO TEST</h1>
    <h2>{{ $t('cart') }}</h2>
    <h2>{{ locale }}</h2>
</template>