$(function() {
 	$.ajax({
		url: 'https://www.codeschool.com/users/yoderman94.json',
		dataType: 'jsonp',
		success: function(response) {
		  // handle response
		  //console.log('response', response)
		  // console.log(response.user.username);
		  console.log('response', response.courses.completed);

		  addCourses(response.courses.completed); // call the function addCourses and pass in the JSON data
		}
  	});


	function addCourses(courses){

		var $badges = $('#badges'); // function for the badges variable
		
		courses.forEach(function(course) { // Start the loop 
			var	$course = $('<div />', { // create the div
					'class' : "course" // add the class
				}).appendTo($badges); //append to the #badges ID
			
			// console.log(course.title);
			// create and add the text to the h3 tag in course div
			$('<h3 />', { 
				text: course.title
			}).appendTo($course);


			$('<img />', { 
				src: course.badge,
				title: course.title
			}).appendTo($course);

			$('<a />', { 
				href: course.url,
				target: '_blank',
				class: 'btn btn-primary',
				text: "See Course"
			}).appendTo($course);
		});

	}

});