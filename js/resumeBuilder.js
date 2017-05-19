var work = {
    "jobs": [
        {
            "employer": "Planet Express",
            "title": "iOS Dev",
            "location": "shenzhen",
            "dates": "2015.8.1~2016.7.1",
            "description": "Helping with app redesign. Addressed performance in multiple areas. Added image " +
            "caching, and tuned calls to Parse. App is built upon Parse backend. "
        },
        {
            "employer": "Panucci's Pizza",
            "title": "iOS Dev",
            "location": "shenzhen",
            "dates": "2017.3.8~now",
            "description": "Created custom internal iOS framework utilized by all iOS apps. Framework included support for " +
            "multiple scanning implementations including linea-pro 2d / 3d hardware scanners and the ZBarlibrary."
        }
    ]
};

var bio = {
    name: "John Doe",
    role: "Web Developer",
    welcomeMessage: "do something cool",
    biopic: "images/fry.jpg",
    contacts: {
        mobile: "650-555-5555",
        email: "john@example.com",
        github: "johndoe",
        twitter: "@johndoe",
        location: "San Francisco"
    },
    skill: ["swift", "objective-c", "JS", "programming"]
};

var projects = [
    {
        "title": "iOS Dev",
        "dates": "2015.8.1~2016.7.1",
        "description": "Successfully reduced the bug backlog for Quality Measures Reporter (QMR), fixing issues found  " +
        "in Javascript, Struts2 Actions, Spring, and Hibernate areas. ",
        "image": "images/project1.png"
    },
    {
        "title": "iOS Dev",
        "dates": "2017.3.8~now",
        "description": "Designed and implemented Quality Advisor header, feature menu system, and User Admin area " +
        "using Sruts2, Spring 2.5, Spring, Jsp pages, and the Dojo Javascript framework.",
        "image": "images/project2.jpeg"
    }
];

// education
// education 包含一个 schools 数组。schools 数组中的每个对象都包含 name、location、degree、dates 和 url 字符串，以及 major 字符串的 majors 数组。

// education 还包含一个 onlineCourses 数组。onlineCourses 数组中的每个对象都应该包含 title、school、dates 和 url 字符串。
var education = {
    "schools": [
        {
            "name": "Wuhan University",
            "location": "Wuhan",
            "degree": "Masters",
            "dates": "2008",
            "url": "",
            "majors": ["CS"]
        }
    ],
    "onlineCourses": [
        {
            "schools": "Udacity",
            "title": "JavaScript Course",
            "dates": "2017.3~2017.6",
            "url": "https://cn.udacity.com/"
        }
    ]
};
(function () {

    "use strict";

    /*
     This is empty on purpose! Your code to build the resume will go here.
     */



    var placeholderKey = "%data%";

    function displayResumeHeader() {

        var header = $("#header");
        var formattedName = HTMLheaderName.replace(placeholderKey, bio.name);
        var formattedRole = HTMLheaderRole.replace(placeholderKey, bio.role);
        [formattedRole, formattedName].forEach(function (element) {
            header.prepend(element);
        });

        var topcontacts = $('#topcontactss');
        var formattedMobile = HTMLmobile.replace(placeholderKey, bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace(placeholderKey, bio.contacts.email);
        var formattedGithub = HTMLgithub.replace(placeholderKey, bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace(placeholderKey, bio.contacts.twitter);
        var formattedLocation = HTMLlocation.replace(placeholderKey, bio.contacts.location);
        [formattedMobile, formattedEmail, formattedGithub, formattedTwitter, formattedLocation].forEach(function (element) {
            topcontacts.append(element);
        });

        var bioPic = HTMLbioPic.replace(placeholderKey, bio.biopic);
        var bioWelcome = HTMLwelcomeMsg.replace(placeholderKey, bio.welcomeMessage);
        [bioPic, bioWelcome].forEach(function (element) {
            header.append(element);
        });
        if (bio.skill.length > 0) {
            header.append(HTMLskillsStart);
            bio.skill.forEach(function (element) {
                var formattedSkill = HTMLskills.replace(placeholderKey, element);
                $("#skills").append(formattedSkill);
            });
        }

    }

    function displayWorkExperience() {
        $("#workExperience").append(HTMLworkStart);
        work.jobs.forEach(function (job) {
            var employer = HTMLworkEmployer.replace(placeholderKey, job.employer);
            var title = HTMLworkTitle.replace(placeholderKey, job.title);
            var location = HTMLworkLocation.replace(placeholderKey, job.location);
            var dates = HTMLworkDates.replace(placeholderKey, job.dates);
            var description = HTMLworkDescription.replace(placeholderKey, job.description);

            var $workExperience = $(".work-entry:last");
            $workExperience.append(employer + title);
            // $workExperience.append(title);
            $workExperience.append(location);
            $workExperience.append(dates);
            $workExperience.append(description);
        });
    }

    function displayProject() {
        var HTMLProject = $("#projects");
        HTMLProject.append(HTMLprojectStart);
        var projectEntry = $(".project-entry");
        projects.forEach(function (project) {
            var formattedTitle = HTMLprojectTitle.replace(placeholderKey, project.title);
            var formattedDates = HTMLprojectDates.replace(placeholderKey, project.dates);
            var formattedDes = HTMLprojectDescription.replace(placeholderKey, project.description);
            var formattedImg = HTMLprojectImage.replace(placeholderKey, project.image);
            [formattedTitle, formattedDates, formattedDes, formattedImg].forEach(function (element) {
                projectEntry.append(element);
            });
        });
    }

    function displayEducation() {
        var educationID = $("#education");
        educationID.append(HTMLschoolStart);
        var educationEntry = $(".education-entry:last");
        education.schools.forEach(function (school) {
            var formattedSchoolName = HTMLschoolName.replace(placeholderKey, school.name)
                + HTMLschoolDegree.replace(placeholderKey, school.degree);
            var formattedDate = HTMLschoolDates.replace(placeholderKey, school.dates);
            var formattedLocation = HTMLschoolLocation.replace(placeholderKey, school.location);
            var formattedMajor = HTMLschoolMajor.replace(placeholderKey, school.majors);
            [formattedSchoolName, formattedDate, formattedLocation, formattedMajor].forEach(function (element) {
                educationEntry.append(element);
            });
        });

        educationID.append(HTMLonlineClasses);
        educationID.append(HTMLschoolStart);
        education.onlineCourses.forEach(function (onlineCourse) {
            var title = HTMLonlineTitle.replace(placeholderKey, onlineCourse.title);
            var schoolName = HTMLonlineSchool.replace(placeholderKey, onlineCourse.schools);
            var date = HTMLonlineDates.replace(placeholderKey, onlineCourse.dates);
            var url = HTMLonlineURL.replace(placeholderKey, onlineCourse.url);
            [title + schoolName, date, url].forEach(function (element) {
                $(".education-entry:last").append(element);
            });
        });
    }

    function displayMap() {
        var mapID = $("#mapDiv");
        mapID.append(googleMap);
    }

    function displayResume() {
        displayWorkExperience();
        displayResumeHeader();
        displayProject();
        displayEducation();
        displayMap();
    }

    displayResume();
    // $(document).click(function (loc) {
    //     logClicks(loc.pageX, loc.pageY);
    // });

    // function inName(name) {
    //     name = name.trim().split(" ");
    //     console.log(name);
    //     name[1] = name[1].toUpperCase();
    //     name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();
    //     return name[0] + " " + name[1];
    // }
    //
    // $("#main").append(internationalizeButton);
}());



