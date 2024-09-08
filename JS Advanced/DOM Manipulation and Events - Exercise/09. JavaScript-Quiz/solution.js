function solve() {
  const answers = new Set(['onclick', 'JSON.stringify()', 'A programming API for HTML and XML documents']);
  const result = document.querySelector('ul li h1');
  const sectons = document.querySelectorAll('section')
  const maxAnswers = 6;
  let question = 0;

  for (const section of sectons) {
    section.addEventListener('click', onClick);
  }

  function onClick(e) {
    if (e.target.tagName === 'P') {
      addAnswer(e);
      changeSection(e);

      if (question === 3) {
        result.textContent = answers.size === 3
      ? 'You are recognized as top JavaScript fan!'
      : `You have ${maxAnswers - answers.size} right answers`;
      }
    }
  }

  function addAnswer(e) {
    answers.add(e.target.textContent);
    question++;
  }

  function changeSection(e) {
    const section = e.currentTarget;
    section.style.display = 'none';
    section.parentElement.children[question + 1].style.display = 'block';
  }
}
