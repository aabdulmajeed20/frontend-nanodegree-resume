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
        "android", "front-end", "Java"
    ],
    "biopic": "images/myImg.jpg"
};
var education = {
    "schools": [{
        "name": "KSU",
        "location": "Riyadh",
        "degree": "Bachelore",
        "majors": ["CS"],
        "dates": "2014",
        "url": "edugate.ksu.edu.sa"
    }],
    "onlineCourses": [{
            "title": "JavaScript",
            "school": "Udacity",
            "dates": "2017",
            "url": "www.udacity.com"
        },
        {
            "title": "android",
            "school": "Udemy",
            "dates": "2015",
            "url": "www.udemy.com"
        }
    ]
};
var work = {
    "jobs": [{
        "employer": "Aramco",
        "title": "Technical services",
        "location": "Dhahran",
        "dates": "July 2, 2017",
        "description": "I worked on a research of mobile application for wayfinding,"
        + " which is provide a map in a center which i worked in."
    }]
};
var projects = {
    "projects": [{
        "title": "Qattah project",
        "dates": "2014",
        "description": "It is an android application made for trips with friends,"
        + " which provide a summation of the payment of each one and divide it on"
        + " members. (it is not a complete project)",
        "images": ["images/project_img2.png", "images/project_img1.png", "images/project_img3.png"]
    }]
};

var data = "%data%";
bio.display = function() {
    var formattedName = HTMLheaderName.replace(data, bio.name);
    var formattedRole = HTMLheaderRole.replace(data, bio.role);
    var formattedMobile = HTMLmobile.replace(data, bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace(data, bio.contacts.email);
    var formattedGithub = HTMLgithub.replace(data, bio.contacts.github);
    var formattedLocation = HTMLlocation.replace(data, bio.contacts.location);
    $("#header").prepend(formattedName + formattedRole);
    $("#topContacts , #footerContacts").append(formattedMobile + formattedEmail + formattedGithub + formattedLocation);

    var formattedBiopic = HTMLbioPic.replace(data, bio.biopic);
    var formattedWelcome = HTMLwelcomeMsg.replace(data, bio.welcomeMessage);
    $("#header").append(formattedBiopic);
    $("#header").append(formattedWelcome);
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace(data, skill);
            $("#skills").append(formattedSkill);
        });

    }
};
bio.display();

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);
        var formattedName = HTMLschoolName.replace(data, school.name);
        var formattedLocation = HTMLschoolLocation.replace(data, school.location);
        var formattedDegree = HTMLschoolDegree.replace(data, school.degree);
        var formattedMajor = HTMLschoolMajor.replace(data, school.majors);
        var formattedDates = HTMLschoolDates.replace(data, school.dates);
        $(".education-entry:last").append(formattedName + formattedLocation + formattedDegree + formattedDates);
        $(".education-entry:last").append(formattedMajor);
    });
    $(".education-entry:last").append(HTMLonlineClasses);
    education.onlineCourses.forEach(function(course) {

        var formattedTitle = HTMLonlineTitle.replace(data, course.title);
        var formattedSchool = HTMLonlineSchool.replace(data, course.school);
        var formattedDates = HTMLonlineDates.replace(data, course.dates);
        var formattedURL = HTMLonlineURL.replace(data, course.url);
        $(".education-entry:last").append(formattedTitle + formattedSchool + formattedDates + formattedURL);
    });
};
education.display();

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace(data, job.employer);
        var formattedTitle = HTMLworkTitle.replace(data, job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        var formattedDates = HTMLworkDates.replace(data, job.dates);
        var formattedLocation = HTMLworkLocation.replace(data, job.location);
        var formattedDescription = HTMLworkDescription.replace(data, job.description);
        $(".work-entry:last").append(formattedEmployerTitle + formattedDates + formattedLocation + formattedDescription);
    });
};
work.display();

projects.display = function() {
    projects.projects.forEach(function(project) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace(data, project.title);
        var formattedDates = HTMLprojectDates.replace(data, project.dates);
        var formattedDescription = HTMLprojectDescription.replace(data, project.description);
        $(".project-entry:last").append(formattedTitle + formattedDates + formattedDescription);
        project.images.forEach(function(image) {
            var formattedImage = HTMLprojectImage.replace(data, image);
            $(".project-entry:last").append(formattedImage);
        });
    });
};
projects.display();
$("#mapDiv").append(googleMap);