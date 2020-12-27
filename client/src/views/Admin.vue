<template>
    <div class="admin_wrap">
        <el-container style="height: 100%">
            <el-aside width="250px" style="height: 100%">
                <div class="logo">考题系统</div>
                <div class="menu">
                    <el-menu
                        default-active="1"
                        class="el-menu-vertical-demo"
                        @select="selectMenu"
                        background-color="#545c64"
                        text-color="#fff"
                        active-text-color="#ffd04b"
                        style="height: 100%"
                    >
                        <router-link to="/admin/exam" tag="span">
                            <el-menu-item index="1">
                                <span slot="title">
                                    <i class="el-icon-menu"></i>考试管理
                                </span>
                            </el-menu-item>
                        </router-link>
                        <router-link to="/admin/qesBank" tag="span">
                            <el-menu-item index="2">
                                <span slot="title">
                                    <i class="el-icon-location"></i>题库管理
                                </span>
                            </el-menu-item>
                        </router-link>
                    </el-menu>
                </div>
            </el-aside>
            <el-main style="height:100%;">
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
export default {
    name: "",
    data() {
        return {};
    },
    methods: {
        selectMenu(index) {
            console.log(index);
        },
    },
};
</script>

<style lang='scss' scoped>
.admin_wrap {
    width: 100%;
    height: 100%;
    .logo {
        height: 120px;
        background: #545c64;
        margin-right: 1px;
        color: #fff;
    }
    .menu {
        box-sizing: border-box;
        height: calc(100% - 120px);
    }
}
</style>
