const charactersAPI = new APIHandler('http://localhost:8000');
const container = document.querySelector(".characters-container");

window.addEventListener('load', () => {

  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI.getFullList().then(characters => {
      container.innerHTML = ""; // Remove all the content of the container
      for (let i = 0; i < characters.length; i++) {
        container.innerHTML += `
        <div class="character-info">
          <div class="name">${characters[i].name}</div>
          <div class="occupation">${characters[i].occupation}</div>
          <div class="cartoon">${
          characters[i].cartoon ? "Cartoon" : "Not a cartoon"
          }</div>
          <div class="weapon">${characters[i].weapon}</div>
        </div>
        `;
      }
    });
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {

    let id = document.getElementById('fetchOneID').value
    charactersAPI.getOneRegisterid(id).then(data => {
      let charCard = document.getElementById('characterCard')

      charCard.getElementsByClassName('name')[0].innerText = `Character Name: ` + data.name
      charCard.getElementsByClassName('occupation')[0].innerText = `Occupation: ` + data.occupation
      charCard.getElementsByClassName('cartoon')[0].innerText = 'Cartoon: ' + data.cartoon
      charCard.getElementsByClassName('weapon')[0].innerText = 'Weapon: ' + data.weapon
    })


  });

  document.getElementById('new-character-form').addEventListener('submit', function (event) {

    // when you use submit, you want to prevent the default (if you use axios)
    event.preventDefault()

    let form = document.getElementById('new-character-form')
    let name = form.getElementsByTagName('input')[0].value
    let occupation = form.getElementsByTagName('input')[1].value
    let weapon = form.getElementsByTagName('input')[2].value
    let cartoon = form.getElementsByTagName('input')[3].checked

    charactersAPI
      .createOneRegister({
        name: name,
        occupation: occupation,
        weapon: weapon,
        cartoon: cartoon
      }).then((data) => {
        console.log('result : ', data)
        // fetchAllAndShow()
        container.innerHTML = `
        <div class="character-info">
          <div class="name">${data.name.name}</div>
          <div class="occupation">${data.name.occupation}</div>
          <div class="cartoon">${
          data.name.cartoon ? "Cartoon" : "Not a cartoon"
          }</div>
          <div class="weapon">${data.name.weapon}</div>
        </div>
        `;
      })
  })


  //   document.getElementById('delete-one').addEventListener('click', function (event) {

  //     let char_id = document.getElementById('character-id-delete').value

  //     axios.delete(`http://localhost:8000/characters/${char_id}`).then(data => {
  //       console.log(data)
  //       Document.getElementById('delete-one').style.color = 'light-green'
  //     }).catch(() => {
  //       Document.getElementById('delete-one').style.color = 'red'
  //     });
  //   })

  //   document.getElementById('edit-character-form').addEventListener('submit', function (event) {



  //   });

  //   document.getElementById('new-character-form').addEventListener('submit', function (event) {
  //     // let name = document.getElementById('fetchOneID').value
  //     //     axios.put('http://localhost:8000/characters', ){name: }}

  //   });

})
