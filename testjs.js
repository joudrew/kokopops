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
		  var context = {};
			$.getJSON('board18data.json', {format: "json"}).done(
				function(data){
					console.log(data);
					context = data;
					var theCompiledHtml = theTemplate(context);
					$('.board-members-profile').html(theCompiledHtml);
				}
			)

		  // Pass our data to the template
		  // var theCompiledHtml = theTemplate(context);

		  // Add the compiled html to the page
		  // $('.board-members-profile').html(theCompiledHtml);

	});
