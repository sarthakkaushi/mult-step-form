let mainData = {
  firstInput: "",
  secondInput: "",
  firstStepCompletd: false,
  secondStepCompletd: false
};
(function() {
  const secondStepContainer = document.getElementById("second-step");
  const thirdStepContainer = document.getElementById("third-step");

  secondStepContainer.style.display = "none";
  thirdStepContainer.style.display = "none";
})();

const nextBtnFirstStep = document.getElementById("nextBtn-firstStep");
nextBtnFirstStep.addEventListener("click", () => {
  if (document.getElementById("usr").value.length > 2 === true) {
    mainData.firstInput = document.getElementById("usr").value;
    document.getElementById("usr").value = mainData.firstInput;
    mainData.firstStepCompletd = true;
    secondStep();
  } else {
    msg("Name length cannot be less than 2", "alert-warning");
    // alert("Name Should Be atleast 3 Character");
  }
});
const secondStep = () => {
  if (mainData.firstStepCompletd === true) {
    document.getElementById("first-step").style.display = "none";
    document.getElementById("second-step").style.display = "block";
    document
      .getElementById("nextBtn-secondStep")
      .addEventListener("click", () => {
        if (document.getElementById("psw").value.length > 6) {
          mainData.secondInput = document.getElementById("psw").value;
          document.getElementById("usr").value = mainData.secondInput;
          mainData.secondStepCompletd = true;

          thirdStep();
        } else {
          msg("Password length cannot be less than 6", "alert-warning");
        }
      });
  }
};

const backButtonFunction = from => {
  if (from === "thirdStep") {
    document.getElementById("first-step").style.display = "none";
    document.getElementById("third-step").style.display = "none";
    document.getElementById("second-step").style.display = "block";
  }
  if (from === "secondStep") {
    document.getElementById("first-step").style.display = "block";
    document.getElementById("third-step").style.display = "none";
    document.getElementById("second-step").style.display = "none";
  }
};

document
  .getElementById("backBtn-secondStep")
  .addEventListener("click", () => backButtonFunction("secondStep"));

const thirdStep = () => {
  if (mainData.secondStepCompletd === true) {
    document.getElementById("first-step").style.display = "none";
    document.getElementById("second-step").style.display = "none";
    document.getElementById("third-step").style.display = "block";
    document
      .getElementById("backBtn-thirdStep")
      .addEventListener("click", () => {
        mainData.secondStepCompletd === false;
      });
  }
};

const msg = (text, type) => {
  document.getElementById("msg").innerHTML = text;
  document.getElementById("msg").classList.add(type);
  setTimeout(() => {
    document.getElementById("msg").innerHTML = "";
    document.getElementById("msg").classList.remove(type);
  }, 3000);
};
