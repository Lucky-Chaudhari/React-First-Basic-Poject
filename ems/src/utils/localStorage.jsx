const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Complete Documentation",
        taskDescription: "Finalize the project documentation.",
        taskDate: "2024-11-22",
        category: "Documentation",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Team Meeting",
        taskDescription: "Attend the weekly sync-up meeting.",
        taskDate: "2024-11-23",
        category: "Meeting",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    }
  },
  {
    id: 2,
    firstName: "Ishaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Code Review",
        taskDescription: "Review the pull requests in the repository.",
        taskDate: "2024-11-22",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Fix Bug #123",
        taskDescription: "Resolve the issue causing login failure.",
        taskDate: "2024-11-24",
        category: "Bug Fixing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    }
  },
  {
    id: 3,
    firstName: "Vihaan",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Update UI Design",
        taskDescription: "Improve the landing page UI.",
        taskDate: "2024-11-22",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Write Test Cases",
        taskDescription: "Create unit tests for the new features.",
        taskDate: "2024-11-25",
        category: "Testing",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    }
  },
  {
    id: 4,
    firstName: "Aditya",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Optimize Database",
        taskDescription: "Analyze and optimize slow database queries.",
        taskDate: "2024-11-24",
        category: "Database",
        active: true,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        taskTitle: "Prepare Presentation",
        taskDescription: "Prepare slides for the client meeting.",
        taskDate: "2024-11-22",
        category: "Presentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ],
    taskNumbers: {
      active: 1,
      newTask: 0,
      completed: 1,
      failed: 1
    }
  },
  {
    id: 5,
    firstName: "Aryan",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        taskTitle: "Deploy Application",
        taskDescription: "Deploy the new version to the production server.",
        taskDate: "2024-11-22",
        category: "Deployment",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        taskTitle: "Monitor Performance",
        taskDescription: "Monitor application performance after deployment.",
        taskDate: "2024-11-23",
        category: "Monitoring",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ],
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 0,
      failed: 0
    }
  }
];




const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",

  }];
  export  const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

  }
  export const getLocalStorage = () => {
    const employees =JSON.parse (localStorage.getItem('employees'))
    const admin =JSON.parse (localStorage.getItem('admin'))
    return{employees, admin}
  }