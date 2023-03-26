const copyToClipboard = () => {
  event.preventDefault();
  let copyText = document.querySelector('pre').innerHTML;
  navigator.clipboard.writeText(copyText);
};

const dButtons = document.querySelectorAll('.d-button');

dButtons.forEach((d) => {
  d.addEventListener('click', async function (e) {
    const id = e.target.id;
    const rawResponse = await fetch(`http://localhost:8080/api/simple/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const content = await rawResponse.json();

    console.log(content);
    window.location.reload();
  });
});
