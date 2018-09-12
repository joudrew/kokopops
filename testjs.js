$(function () {
		  // Grab the template script
		  var theTemplateScript = $("#block-expressions-template").html();

		  // This is our block helper
		  // The name of our helper is provided as the first parameter - in this case 'uppercase'
			Handlebars.registerHelper('grouped_each', function(every, context, options) {
    		var out = "", subcontext = [], i;
    			if (context && context.length > 0) {
        		for (i = 0; i < context.length; i++) {
            	if (i > 0 && i % every === 0) {
                out += options.fn(subcontext);
                subcontext = [];
            	}
            subcontext.push(context[i]);
        	}
        out += options.fn(subcontext);
    	}
    	return out;
		});

		  // Compile the template
		  var theTemplate = Handlebars.compile(theTemplateScript);

		  // Define our data object
		  var context = {
			people: [
				{ imgSRC:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Egyptian_Mau_Bronze.jpg/1200px-Egyptian_Mau_Bronze.jpg',
					firstName: 'Egyptian',
					lastName: 'Mau',
					description: 'test'},
				{ imgSRC:'https://www.catster.com/wp-content/uploads/2017/09/A-tabby-cat-with-an-ID-collar-on.jpg',
					firstName: 'Tabby',
					lastName: 'Cat',
					description: 'test',},
				{ imgSRC:'https://cdn3-www.cattime.com/assets/uploads/gallery/siamese-cats-and-kittens-pictures/siamese-cat-kitten-picture-1.jpg',
					firtName: 'Siamese',
					lastName: 'Cat',
					description: 'test'},
				{ imgSRC:'https://cdn2-www.cattime.com/assets/uploads/gallery/persian-cats-and-kittens/persian-cats-and-kittens-1.jpg',
					firstName: 'Persian',
					lastName: 'Cat',
					description: 'test'},
				{ imgSRC:'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/12_December/what+do+Russian+Blue+cats+look+like+_+cat+resting+on+a+sofa.jpg',
					firstName: 'Russian Blue',
					lastName: 'Cat',
					description: 'test'}
				]
		  };

		  // Pass our data to the template
		  var theCompiledHtml = theTemplate(context);

		  // Add the compiled html to the page
		  $('.content-placeholder').html(theCompiledHtml);

	});
