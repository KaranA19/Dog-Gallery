const fetchDogData = async () => {
    let data = new Object();
    var settings = {
      url: "https://api.thedogapi.com/v1/images/search?limit=20",
      method: "GET",
      timeout: 0,
      headers: {
        "x-api-key": "505c167e-72d0-4e7b-9f88-603e9969cfff"
      }
    };
  
    data = await $.ajax(settings).done(function (response) {
    return response;
    });
    return data;
  };
  
  const buildCards = (data) => {
    const cardsContainer = $(".cards-container");
   
    data.forEach((item) => {
      if (item.breeds.length) {
        console.log(item);
        const dog = item.breeds[0];
        
        let class_name = "";
  
        const element = `
        <div class="card single__card" >
            <img class="card__image" src=${item.url} class="card-img-top" alt=${dog.name}>
            <div class="card-body card__body">
              <h3 class="card-title card__title mb-3">${dog.name}</h3>
              <p><strong>Weight</strong> : ${dog.weight.metric}</p>
              <p><strong>Height</strong> : ${dog.height.metric}</p>
              <p class=${class_name} ><strong>Breed Group</strong> : ${dog.breed_group}</p>
              <p><strong>Bred For</strong> : ${dog.bred_for}</p>
              <p><strong>Life Span</strong> : ${dog.life_span}</p>
              <p><strong>Temperament</strong> : ${dog.temperament}</p>
            </div>
        </div>
                `;
  
        cardsContainer.append(element);
      }
    });
  };
  
  $(document).ready(() => {
    fetchDogData().then((res) => buildCards(res));
  });