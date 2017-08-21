$.ajax({
    url: "https://raw.githubusercontent.com/iteliosbrasil/itelios-frontend-challenge/master/products.json",
    dataType: "json",
  	error: function(el){ console.log('Erro ao acessar o arquivo'); }, 
    success: function(el) {

    	$.each(el, function(key, value) {
    		cross = value.data;
    		visited = cross.item;
    		count = cross.widget;
    		recommendation = cross.recommendation;


            $('.cross-sell .visited').append(templateItens(visited));

            for (var i = 0; i < count.size; i++) {
            	var itens = recommendation[i];
            	$('.cross-sell .recommendation-itens').append(templateItens(itens));
            }

			$('.cross-sell .recommendation-itens').owlCarousel({
				responsiveClass:true,
			    responsive:{
			        0:{
			            items:1,
			        },
			        600:{
			            items:2,
			        },
			        1000:{
			            items:3,
			            nav:false,
			            loop:false
			        }
			    }
			});
        });
    }
});

function templateItens(product) {

	image = 'http:' + product.imageName;

	paymentConditions = product.productInfo.paymentConditions;
	paymentConditions = paymentConditions.replace('ou até ', 'ou até <b>');
	paymentConditions = paymentConditions.replace('sem juros', '</b> sem juros');


	return '<div class="product-item">\n\
						<div class="box-image">\n\
							<a href="">\n\
								<img src="' + image + '">\n\
							</a>\n\
						</div>\n\
						<div class="product-details">\n\
							<h2 class="product-name">\n\
								' + product.name + '\n\
							</h2>\n\
							<div class="price-box">\n\
								<div class="regular-price">\n\
									<span class="price-label">Por:</span>\n\
									<span class="price">'+ product.price +'</span>\n\
								</div>\n\
								<div class="parcel-price">\n\
									'+ paymentConditions +'\n\
								</div>\n\
							</div>\n\
						</div>\n\
						<div class="product-actions">\n\
							<a href="" class="add-to-cart">\n\
								adicionar ao carrinho \n\
								<i class="material-icons">add_shopping_cart</i>\n\
							</a>\n\
						</div>\n\
					</div>\n\
				</div>'
					;	
}
