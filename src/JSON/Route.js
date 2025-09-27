[
    {
        "path": "/",
        "component": "Login",
        "roles": [],
        "isProtected": false
    },
    {
        "path": "/Addfaculty",
        "component": "AddFaculty",
        "roles": ["admin"],
        "isProtected": true
    },
    {
        "path": "/Faculty",
        "component": "Faculty",
        "roles": ["admin", "staff", "student"],
        "isProtected": true
    },
    {
        "path": "/scoreboard",
        "component": "Scoreboard",
        "roles": ["admin", "staff", "student"],
        "isProtected": true
    },
    {
        "path": "/Facultyinfo/:id",
        "component": "FacultyInfo",
        "roles": ["admin", "staff", "student"],
        "isProtected": true
    },
    {
        "path": "/Meenties",
        "component": "Meenties",
        "roles": ["admin", "staff"],
        "isProtected": true
    },
    {
        "path": "/AddMeenties",
        "component": "AddMeenties",
        "roles": ["admin", "staff"],
        "isProtected": true
    },
    {
        "path": "/Report",
        "component": "ReportPage",
        "roles": ["admin"],
        "isProtected": true
    }
]
