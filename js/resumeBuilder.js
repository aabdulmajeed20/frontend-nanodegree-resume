var bio = {
    "name": "Majeed Fahad",
    "role": "Developer",
    "contacts": {
        "mobile": "0540366642",
        "email": "aabdulmajeed16@gmail.com",
        "github": "https://github.com/aabdulmajeed20",
        "location": "Riyadh"
    },
    "welcomeMessage": "Hello Everybody",
    "skills": [
        "android", "front-end", "back-end", "Java"
    ],
    "biopic": "images/fry.jpg"
};
var education = {
    "schools": [
        {
            "name": "KSU",
            "location": "Riyadh",
            "degree": "Bachelore",
            "major": ["CS"],
            "dates": "2014",
            "url": "edugate.ksu.edu.sa"
        }
    ],
    "OnlineCourses": [
        {
            "title": "JavaScript",
            "School": "Udacity",
            "dates": "2017",
            "url": "www.udacity.com"
        },
        {
            "title": "android",
            "School": "Udemy",
            "date": "2015",
            "url": "www.udemy.com"
        }
    ]
};
var work = {
    "jobs": [
        {
            "employer": "Fahad Altaweel",
            "title": "programmer",
            "location": "Riyadh",
            "dates": "January ",
            "description": "dd"
        },
        {
            "employer": "Aramco",
            "title": "developer",
            "location": "Sharqiyah",
            "dates": "",
            "description": "desc"
        }
    ]
};
var projects = {
    "projects": [
        {
            "title": "some title..",
            "dates": "2017",
            "description": "some description which I don't know what can I write in it. some description which I don't know what can I write in it. some description which I don't know what can I write in it. some description which I don't know what can I write in it.",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }
    ]
};

bio.display = function () {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts , #footerContacts").append(formattedMobile + formattedEmail
        + formattedGithub + formattedLocation);

    var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcome);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function (skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        })

    }
}
bio.display();

education.display = function(){
    education.schools.forEach(function(school){
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace("%data%",school.name);
        var formattedLocation = HTMLschoolLocation.replace("%data%",school.location);
        var formattedDegree = HTMLschoolDegree.replace("%data%",school.degree);
        var formattedMajor = HTMLschoolMajor.replace("%data%",school.major);
        var formattedDates = HTMLschoolDates.replace("%data%",school.dates);
        $(".education-entry:last").append(formattedName + formattedLocation
            + formattedDegree + formattedDates);
        $(".education-entry:last").append(formattedMajor);
    })
    $(".education-entry:last").append(HTMLonlineClasses);
    education.OnlineCourses.forEach(function(course){
        
        var formattedTitle = HTMLonlineTitle.replace("%data%", course.title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
        var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
        var formattedURL = HTMLonlineURL.replace("%data%", course.url);
        $(".education-entry:last").append(formattedTitle + formattedSchool 
            + formattedDates + formattedURL);
    })
}
education.display();

work.display = function () {
    work.jobs.forEach(function (job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedEmployerTitle + formattedDates
            + formattedLocation + formattedDescription);
    })
}
work.display();
// $(document).click(function(loc) {
//   logClicks(loc.pageX, loc.pageY);
// });

// function inName(name){
//     var fullname = name.split(" ");
//     var result = "";
//     if(fullname.length === 2){
//         fullname[0] = fullname[0].slice(0,1).toUpperCase() + fullname[0].slice(1);
//         fullname[1] = fullname[1].toUpperCase();
//         result = fullname.join(" ");
//     }
//     return result;
// }
// $("#main").append(internationalizeButton);
projects.display = function () {
    projects.projects.forEach(function (project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
        $(".project-entry:last").append(formattedTitle + formattedDates
            + formattedDescription);
        project.images.forEach(function (image) {
            var formattedImage = HTMLprojectImage.replace("%data%", image);
            $(".project-entry:last").append(formattedImage);
        })
    })
}
projects.display();
$("#mapDiv").append(googleMap);