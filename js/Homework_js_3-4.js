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
   * Method that creates <ul> tags - the questions of the test
   */
  createQuestion: function () {
    for (var i = 1; i <= 3; i++)
    {
      var oTestQuestion = document.createElement('ul');
      oTestQuestion.innerHTML = i + '. Вопрос №' + i;
      document.body.appendChild(oTestQuestion);
      oTestQuestion.classList.add('list-group');
    }
  },
  /**
   * Method that creates <li> tags - the answers of the test with checkboxes
   */
  createAnswers: function () {
    var aQuestions = document.getElementsByTagName('ul');
    for (var i = 0; i <= 2; i++) {
      for (var k = 1; k <= 3; k++) {
      var oTestAnswer = document.createElement('li');
      var oTestAnswerCheckbox = document.createElement('input');
      var oTestAnswerText = document.createElement('label');
      aQuestions[i].appendChild(oTestAnswer);
      oTestAnswer.appendChild(oTestAnswerCheckbox);
      oTestAnswer.appendChild(oTestAnswerText);
      oTestAnswerCheckbox.setAttribute('type', 'checkbox');
      oTestAnswerCheckbox.setAttribute('id', 'test_answer' + i +k);
      oTestAnswerCheckbox.classList.add('form-check-input');
      oTestAnswerText.innerHTML = 'Вариант ответа №' + k;
      oTestAnswerText.setAttribute('for', 'test_answer' + i + k);
      }
    }
  },
  /**
   * Method that creates <button> tag - the button that submits the answers for the test
   */
  createButton: function () {
    var oTestButton = document.createElement('button');
    oTestButton.innerHTML = 'Проверить мои результаты';
    document.body.appendChild(oTestButton);
    oTestButton.classList.add('btn', 'btn-primary');
  },
  /**
   * Method that includes all previous methods and creates the whole test
   */
  createTest: function () {
    this.createTitle();
    this.createQuestion();
    this.createAnswers();
    this.createButton();
  }
};

oTest.createTest();
document.body.classList.add('container');
