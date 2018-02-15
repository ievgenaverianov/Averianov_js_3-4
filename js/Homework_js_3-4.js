var oTest = {
  /**
   * Method that creates <h4> tag - the title of the test
   */
  createTitle: function () {
    var oTestTitle = document.createElement('h4');
    oTestTitle.innerHTML = 'Тест по программированию';
    document.body.appendChild(oTestTitle);
  },
  /**
   * Method that creates the questions of the test
   */
  createQuestions: function () {
    var oTestQuestions = document.createElement('ol');
    document.body.appendChild(oTestQuestions);
    for (var i = 1; i <= 3; i++) {
      var oTestQuestionsItem = document.createElement('li');
      oTestQuestionsItem.innerHTML = 'Вопрос №' + i;
      oTestQuestions.appendChild(oTestQuestionsItem);
    }
  },
  /**
   * Method that creates the answers of the test with checkboxes
   */
  createAnswers: function () {
    var aQuestions = document.getElementsByTagName('li');
    for (var i = 0; i < aQuestions.length; i++) {
      var oQuestion = aQuestions[i];
      var oAnswersList = document.createElement('ul');
      oQuestion.appendChild(oAnswersList);
    }

    var aAnswers = document.getElementsByTagName('ul');
    console.log(aAnswers);
    for (i = 0; i < aAnswers.length; i++) {
      for (var k = 0; k < 3; k++) {
        var oAnswer = aAnswers[i];
        var oTestAnswer = document.createElement('li');
        oAnswer.appendChild(oTestAnswer);

        var sTestAnswerId = 'test_answer' + i + k;

        var oTestAnswerCheckbox = document.createElement('input');
        oTestAnswerCheckbox.setAttribute('type', 'checkbox');
        oTestAnswerCheckbox.setAttribute('id', sTestAnswerId);
        oTestAnswerCheckbox.classList.add('form-check-input', 'test-answer-checkbox');
        oTestAnswer.appendChild(oTestAnswerCheckbox);

        var oTestAnswerText = document.createElement('label');
        oTestAnswerText.innerHTML = 'Вариант ответа №' + (k + 1);
        oTestAnswerText.setAttribute('for', sTestAnswerId);
        oTestAnswer.appendChild(oTestAnswerText);
      }
    }
  },
  /**
   * Method that creates <button> tag - the button that submits the answers for the test
   */
  createButton: function () {
    var oTestButton = document.createElement('button');
    oTestButton.innerHTML = 'Проверить мои результаты';
    oTestButton.classList.add('btn', 'btn-primary', 'centered-button');
    document.body.appendChild(oTestButton);
  },
  /**
   * Method that includes all previous methods and creates the whole test
   */
  createTest: function () {
    this.createTitle();
    this.createQuestions();
    this.createAnswers();
    this.createButton();
  }
};

oTest.createTest();
document.body.classList.add('container');
