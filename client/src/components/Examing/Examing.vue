<template>
    <div class="examing_wrap">
        <Title/>
        <div class="content">
            <div class="left_controller_wrap layout">
                <Progress/>
                <NextBtn/>
                <Mark/>
                <div class="submit_paper">
                    交卷
                </div>
            </div>
            <div class="middle_qusetion_wrap layout">
                <Question :active="0" />
            </div>
            <div class="right_answersheet_wrap layout">
                <AnswerSheet/>
            </div>
        </div>
    </div>
</template>

<script>
import Title from './Title';
import Progress from './Progress';
import NextBtn from './NextBtn';
import Mark from './Mark';
import Question from './Question';
import AnswerSheet from './AnswerSheet';
export default {
    components : {
        Title,
        Progress,
        NextBtn,
        Mark,
        Question,
        AnswerSheet
    }
}
</script>

<style lang="scss" scoped>
    .examing_wrap{
        width: 100%;
        height: 100%;
        .content{
            width: 90%;
            margin: 20px auto;
            height: calc(100% - 50px);
            display: flex;
            justify-content: space-between;
            .layout{
                height: 100%;
            }
            .left_controller_wrap{
                width: 250px;
            }
            .middle_qusetion_wrap{
                flex: 1;
            }
            .right_answersheet_wrap{
                width: 380px;
            }
        }
    }
</style>