<template>
    <li >
        <router-link :to="{path:href}">
                    {{content}}
        </router-link>
    </li>
</template>

<script>
export default {
props:['href','content','index'],

}
</script>
<style>
    .headlist {height:60px;overflow:hidden}
    .headlist li{float:left;color:#303133; padding: 0 20px;height:60px;line-height:60px;font-size:14px;cursor:pointer}
    .headlist .liston a{color:#ff3535;display:block}
</style>