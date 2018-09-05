$(function () {
		  // Grab the template script
		  var theTemplateScript = $("#block-expressions-template").html();

		  // This is our block helper
		  // The name of our helper is provided as the first parameter - in this case 'uppercase'
		  //Handlebars.registerHelper('uppercase', function(options) {

			// "this" is the context that existed when calling the helper.

			// The options object has a special function - fn. This is a
			// compiled version of the template that is contained between the opening and closing
			// blocks of this helper. To get a string, call fn with the context:

			//return options.fn(this).toUpperCase();

		  //});

		  // Compile the template
		  var theTemplate = Handlebars.compile(theTemplateScript);

		  // Define our data object
		  var context = {
			people: [
			{ firstName: 'Homer', lastName: 'Simpson'},
			{ firstName: 'Peter', lastName: 'Griffin'},
			{ firstName: 'Eric', lastName: 'Cartman'},
			{ firstName: 'Kenny', lastName: 'McCormick'},
			{ firstName: 'Bart', lastName: 'Simpson'}
			]
		  };

		  // Pass our data to the template
		  var theCompiledHtml = theTemplate(context);

		  // Add the compiled html to the page
		  $('.content-placeholder').html(theCompiledHtml);

	});
