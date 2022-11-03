AFRAME.registerComponent('comics-posters', {
    init: function(){
        this.placesContainer = this.placesContainer;
        this.createCards();
    },

    createCards: function(){
        const thumbNailsRef = [
        {
            id = 'superman',
            url: './posters/superman-poster.jpeg',
        },
        {
            id = 'spiderman',
            url: './posters/spiderman-poster.jpeg',
        },
        {
            id = 'captainAmerica',
            url: './posters/captainAmerica.jpeg',
        },
        {
            id = 'outerSpace',
            url: './posters/outer-space.jpeg',
        },
    ];
    let previousXPosition = -60;
    for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 25;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderEl = this.createBorder(position, item.id);
  
        // Thumbnail Element
        const thumbNail = this.createThumbNail(item);
        borderEl.appendChild(thumbNail);
  
        this.placesContainer.appendChild(borderEl);
      }
    },
  
    createBorder: function (position, id) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("id", id);
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        radiusInner: 20,
        radiusOuter: 40,
      });
      entityEl.setAttribute("position", position);
      entityEl.setAttribute("material", {
        color: "#0077CC",
      });
  
      return entityEl;
    },
  
    createThumbNail: function (item) {
      const entityEl = document.createElement("a-entity");
      entityEl.setAttribute("visible", true);
      entityEl.setAttribute("geometry", {
        primitive: "plane",
        width: 25,
        height: 20
      });
      entityEl.setAttribute("material", { src: item.url });
      entityEl.setAttribute('position', {x:0, y:5, z:0.1});
      return entityEl;
    },
  });