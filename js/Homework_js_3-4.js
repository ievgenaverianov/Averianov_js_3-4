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
    var oTestQuestionsList = document.createElement('ol');
    document.body.appendChild(oTestQuestionsList);
    for (var i = 1; i <= 3; i++) {
      var oTestQuestionsItem = document.createElement('li');
      oTestQuestionsItem.innerHTML = 'Вопрос №' + i;
      oTestQuestionsList.appendChild(oTestQuestionsItem);
      this.createAnswers(oTestQuestionsItem, i);
    }
  },
  /**
   * Method that creates the answers of the test with checkboxes
   */
  createAnswers: function (oSingleQuestion, sSingleAnswerId) {
      var oTestAnswersList = document.createElement('ul');
      oSingleQuestion.appendChild(oTestAnswersList);
      for (var k = 0; k < 3; k++) {
        var oTestAnswer = document.createElement('li');
        oTestAnswersList.appendChild(oTestAnswer);

        var sTestAnswerId = 'answerId' + k + sSingleAnswerId;

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
    // }
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
    this.createButton();
  }
};

oTest.createTest();
document.body.classList.add('container');
