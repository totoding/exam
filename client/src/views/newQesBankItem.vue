<template>
    <div class="newQesBankItem">
        <div class="left_qes">
            <InsertQes :types="type" @transfer="transfer" />
        </div>
        <div class="right_view">
            <div class="right_top_count">
                <div class="item" v-for="(item,index) in qesList" :key="index">
                    <el-tag
                        :key="tag"
                        size="medium"
                        :disable-transitions="true"
                        @close="handleClose(tag)"
                    >
                        {{index}}
                    </el-tag>
                </div> 
            </div>
            <div class="right_bottom_view">
                <div class="title">预览</div>
                <div class="content">
                    <el-card class="box-card">
                        <div slot="header" class="clearfix">
                            <span>{{ form.qeustionContent }} </span>
                        </div>
                        <div class="text item">A. {{ form.optionA }}</div>
                        <div class="text item">B. {{ form.optionB }}</div>
                        <div class="text item">C. {{ form.optionC }}</div>
                        <div class="text item">D. {{ form.optionD }}</div>
                    </el-card>
                    <div class="answer">答案 : {{ answer }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import InsertQes from "@/components/InsertQes";
import QesCountList from "@/components/QesCountList";
import QesView from "@/components/QesView";
export default {
    name: "newQes",
    components: {
        InsertQes,
        QesCountList,
        QesView,
    },
    data() {
        return {
            type: "new",
            form: {},
            qesList : [1,2,3,4,5,6,7,8,9,0]
        };
    },
    computed: {
        answer() {
            let answerStr = "";

            if (this.form.answer) {
                this.form.answer.forEach((item) => {
                    answerStr += "," + item + "";
                });
                answerStr = answerStr.substr(1);
            }
            return this.form.answer ? answerStr : "";
        },
    },
    methods: {
        transfer(val) {
            this.form = val;
        },
        handleClose(id) {},
    },
};
</script>

<style lang='scss' scoped>
.newQesBankItem {
    width: 100%;
    height: 100%;
    display: flex;
    .left_qes {
        width: 40%;
        height: 100%;
        box-sizing: border-box;
        border-right: 1px sienna solid;
    }
    .right_view {
        flex: 1;
        height: 100%;
        .right_top_count {
            height: 300px;
            border-bottom: 1px solid black;
            display: flex;
            flex-wrap: wrap;
            cursor: pointer;
            .item {
                margin: 5px;
            }
        }
        .right_bottom_view {
            padding: 20px;
            .content {
                padding: 20px 0;
                .text {
                    font-size: 14px;
                }
                .item {
                    padding: 18px 0;
                }
            }
            .answer {
                padding: 10px 0;
            }
        }
    }
}
</style>
