const Exam = require("./Exam")
const Examinee = require("./Examinee")

Exam.hasMany(Examinee, {
   foreignKey : "examId" 
})
Examinee.belongsTo(Exam);