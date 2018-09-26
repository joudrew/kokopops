$(function () {
		  // Grab the template script
		  var boardtmpscript = $("#board-members-template").html();
			var teamtmpscript = $("#team-members-template").html();

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
		  var boardtmp = Handlebars.compile(boardtmpscript);

		  // Define our data object
		  var context = {};
			$.getJSON('board18data.json', {format: "json"}).done(
				function(data){
					console.log(data);
					context = data;

					// Pass our data to the template
					var boardhtml = boardtmp(context);

					// Add the compiled html to the page
					$('.board-members-profile').html(boardhtml);
				}
			)

			var teamtmp = Handlebars.compile(teamtmpscript);
			var tcontext= {};
			$.getJSON('team18data.json', {format: "json"}).done(
				function(data){
					console.log(data);
					tcontext = data;

					// Pass our data to the template
					var teamhtml = teamtmp(tcontext);

					// Add the compiled html to the page
					$('.team-members-profile').html(teamhtml);
				}
			)
	});
