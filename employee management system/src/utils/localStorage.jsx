const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new": true,
        "failed": false,
        "title": "Prepare Report",
        "description": "Compile the weekly sales report",
        "date": "2024-10-10",
        "category": "Reporting"
      },
      {
        "active": false,
        "new": false,
        "failed": true,
        "title": "Client Meeting",
        "description": "Discuss project requirements with client",
        "date": "2024-10-05",
        "category": "Meetings"
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new": false,
        "failed": false,
        "title": "Update Database",
        "description": "Ensure all client details are up to date",
        "date": "2024-10-07",
        "category": "Database"
      },
      {
        "active": false,
        "new": false,
        "failed": true,
        "title": "Team Presentation",
        "description": "Present quarterly results to the team",
        "date": "2024-10-08",
        "category": "Presentation"
      },
      {
        "active": true,
        "new": true,
        "failed": false,
        "title": "Code Review",
        "description": "Review the latest code updates",
        "date": "2024-10-09",
        "category": "Development"
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new": true,
        "failed": false,
        "title": "Write Documentation",
        "description": "Complete project documentation",
        "date": "2024-10-10",
        "category": "Documentation"
      },
      {
        "active": false,
        "new": false,
        "failed": false,
        "title": "Data Analysis",
        "description": "Analyze survey data for trends",
        "date": "2024-10-11",
        "category": "Analysis"
      },
      {
        "active": false,
        "new": true,
        "failed": true,
        "title": "Server Maintenance",
        "description": "Conduct maintenance on main server",
        "date": "2024-10-12",
        "category": "IT"
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "new": true,
        "failed": false,
        "title": "Customer Follow-Up",
        "description": "Check in with clients post-delivery",
        "date": "2024-10-13",
        "category": "Customer Service"
      },
      {
        "active": false,
        "new": false,
        "failed": true,
        "title": "Budget Planning",
        "description": "Plan budget for next quarter",
        "date": "2024-10-14",
        "category": "Finance"
      },
      {
        "active": true,
        "new": false,
        "failed": false,
        "title": "Training",
        "description": "Attend skills training session",
        "date": "2024-10-15",
        "category": "Training"
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "active": false,
        "new": true,
        "failed": false,
        "title": "Market Research",
        "description": "Research market trends",
        "date": "2024-10-16",
        "category": "Research"
      },
      {
        "active": true,
        "new": true,
        "failed": false,
        "title": "Product Testing",
        "description": "Test new product features",
        "date": "2024-10-17",
        "category": "Quality Assurance"
      },
      {
        "active": true,
        "new": false,
        "failed": false,
        "title": "Email Campaign",
        "description": "Send out monthly newsletter",
        "date": "2024-10-18",
        "category": "Marketing"
      }
    ]
  }
];




const  admin= [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
      }];


      export  const setLocalStorage = ()=>{
                localStorage.setItem('employee',JSON.stringify(employees))
                localStorage.setItem('admin',JSON.stringify(admin))
      }
      export const getLocalStorage= () => {
         const employees = JSON.parse(localStorage.getItem('employee'))
         const admin = JSON.parse(localStorage.getItem('admin'))

   return {employees, admin}
      }