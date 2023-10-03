document.addEventListener("DOMContentLoaded", function () {
    const studentForm = document.getElementById("student-form");
    const calculateButton = document.getElementById("calculate-button");
    const resultContainer = document.querySelector(".result");
    const backButton = document.getElementById("back-button");

    calculateButton.addEventListener("click", function () {
        const studentName = document.getElementById("student-name").value;
        const subject = document.getElementById("subject").value;
        const grade1 = parseFloat(document.getElementById("grade1").value);
        const grade2 = parseFloat(document.getElementById("grade2").value);
        const grade3 = parseFloat(document.getElementById("grade3").value);

        const average = (grade1 + grade2 + grade3) / 3;
        const condition = average >= 6 ? "Aprovado" : "Recuperação";

        document.getElementById("result-name").textContent = studentName;
        document.getElementById("result-subject").textContent = subject;
        document.getElementById("result-grade1").textContent = grade1;
        document.getElementById("result-grade2").textContent = grade2;
        document.getElementById("result-grade3").textContent = grade3;
        document.getElementById("result-average").textContent = average.toFixed(2);
        document.getElementById("result-condition").textContent = condition;

        resultContainer.style.display = "block";
    });

    backButton.addEventListener("click", function () {
        resultContainer.style.display = "none";
        studentForm.reset();
    });
});