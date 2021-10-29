$(document).ready(function (){
  
           
      var postsUno = [
        {
          title: "Tecnologías que están transformado el turismo",
          content:
            "Análisis de los principales avances tecnológicos que van a transformar el turismo: el Internet de las Cosas, el 5G, el Big Data, el Blockchain (y el bitcoin), los Asistentes Virtuales, la Inteligencia Artificial, la Realidad Virtual y la 4ª Revolución Industrial (Automatización y Robotización)",
        },
      ];
     
      postsUno.forEach((item) => {
        var post = `<article class="post">
        <div class="art1">
        <div class="container">
            <div class="container col-9">
                <div class="row">
                    <div class="col-6 mt-5">
                        <h2>${item.title}</h2>
                        <p>${item.content}</p>
                    </div>
                    <div class="col-6 mt-5">
                        <div class="card">
                            <img src="img/teatro.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Artículo completo</h5>
                                <a href="articuloUno.html" class="btn ">Click aquí</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                    </article>`;
        $("#postsUno").append(post);
      });

      var postsDos = [
        {
          title: "Consejos para viajar, pero también ahorrar en 2022",
          content:
            "Tras 18 meses de pausa y en los que solo visitamos destinos cercanos, los mexicanos están empezando poco a poco a descubrir de nuevo el mundo y disfrutar una vez más experiencias de viaje en el extranjero",
        },
      ];

      postsDos.forEach((item) => {
        var post = `<article class="post">
        <div class="art2">
        <div class="container">
            <div class="container col-9">
                <div class="row">
                    <div class="col-6 mt-5">
                        <div class="card">
                            <img src="img/arcos.jpg" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">Artículo completo</h5>
                                <a href="articuloDos.html" class="btn btn-primary">Click aquí</a>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 mt-5">
                        <h2>${item.title}</h2>
                        <p>${item.content}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
                    </article>`;
        $("#postsDos").append(post);
      });


    
});