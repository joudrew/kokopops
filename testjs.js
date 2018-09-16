$(function () {
		  // Grab the template script
		  var theTemplateScript = $("#board-members-template").html();

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
					position: 'Position',
					major: 'ABC',
					year: '20XX',
					bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'},
				{ imgSRC:'https://www.catster.com/wp-content/uploads/2017/09/A-tabby-cat-with-an-ID-collar-on.jpg',
					firstName: 'Tabby',
					lastName: 'Cat',
					position: 'Position',
					major: 'ABC',
					year: '20XX',
					bio: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium'},
				{ imgSRC:'https://cdn3-www.cattime.com/assets/uploads/gallery/siamese-cats-and-kittens-pictures/siamese-cat-kitten-picture-1.jpg',
					firtName: 'Siamese',
					lastName: 'Cat',
					position: 'Position',
					major: 'ABC',
					year: '20XX',
					bio: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum'},
				{ imgSRC:'https://cdn2-www.cattime.com/assets/uploads/gallery/persian-cats-and-kittens/persian-cats-and-kittens-1.jpg',
					firstName: 'Persian',
					lastName: 'Cat',
					position: 'Position',
					major: 'ABC',
					year: '20XX',
					bio: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'},
				{ imgSRC:'https://d3544la1u8djza.cloudfront.net/APHI/Blog/2016/12_December/what+do+Russian+Blue+cats+look+like+_+cat+resting+on+a+sofa.jpg',
					firstName: 'Russian Blue',
					lastName: 'Cat',
					position: 'Position',
					major: 'ABC',
					year: '20XX',
					bio: 'Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae'}
				]
		  };

		  // Pass our data to the template
		  var theCompiledHtml = theTemplate(context);

		  // Add the compiled html to the page
		  $('.board-members-profile').html(theCompiledHtml);

	});
