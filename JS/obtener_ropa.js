$(document).ready(function(){
    $.get('https://fakestoreapi.com/products',
        function(data){
            $('#grid').empty();
            $.each(data, function(i, item) {
                
                var elemento = `
                    <a class="col-sm-12 col-md-4 col-lg-3 nav-link" href="royalCanin.html">
                        <img src="${item.image}" class="img-fluid" style="height: 300px;" alt="Imagen producto">
                        <p> ${item.price} </p>
                        <p> ${item.title} </p>
                        <p> ${item.description} </p>
                    </a>
                `;

                $('#grid').append(elemento);
            });
        }
    )
});