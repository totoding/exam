<template>
    <div class="home">
        <Header />
        <div class="content">
            <div class="left_enroll">
                <EnrollEntrance/>
            </div>
            <div class="right_exam">
                <ExamEntrance/>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "@/components/Header";
import EnrollEntrance from "@/components/EnrollEntrance";
import ExamEntrance from "@/components/ExamEntrance";

export default {
    name: "Home",
    components: {
        Header,
        EnrollEntrance,
        ExamEntrance
    },
};
</script>
