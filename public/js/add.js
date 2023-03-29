const submitSimple = async () => {
  event.preventDefault();
  let sentence = document.getElementById('sentence').value;
  let structure = document.getElementById('structure').value;
  structure = JSON.parse(structure);
  let type = 'simple';
  let data = {
    sentence: sentence,
    type: type,
    structure: structure,
  };
  data = JSON.stringify(data);

  const rawResponse = await fetch('http://localhost:8080/api/simple', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: data,
  });

  if (rawResponse.status === 400 || rawResponse.status === 500) {
    alert('Failed to add new sentence diagram!');
  } else {
    window.location.assign('http://localhost:8080/portal/sentences');
  }
};

const prettyPrint = () => {
  event.preventDefault();
  var ugly = document.getElementById('structure').value;
  var obj = JSON.parse(ugly);
  var pretty = JSON.stringify(obj, undefined, 4);
  document.getElementById('structure').value = pretty;
};

const exampleStructure = {
  subject: {
    word: 'dog',
    type: 'noun',
    modifier: [
      {
        word: 'The',
        type: 'adjective',
        modifier: [],
      },
      {
        word: 'sly',
        type: 'adjective',
        modifier: [],
      },
    ],
  },
  predicate: {
    word: 'caught',
    type: 'verb',
    modifier: [
      {
        word: 'quickly',
        type: 'adjective',
        modifier: [],
      },
    ],
  },
  object: {
    word: 'hen',
    type: 'verb',
    modifier: [
      {
        word: 'the',
        type: 'adjective',
        modifier: [],
      },
    ],
  },
};

const pre = document.querySelectorAll('pre');
pre.forEach((p) => {
  p.innerHTML = JSON.stringify(exampleStructure, undefined, 4);
});
