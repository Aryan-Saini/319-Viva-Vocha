export interface Slide {
  id: number;
  title: string;
  type: 'title' | 'users' | 'persona' | 'stories' | 'requirements' | 'wbs' | 'schedule' | 'risk' | 'performance' | 'security' | 'thank-you' | 'scope';
  content: SlideContent;
}

export interface SlideContent {
  subtitle?: string;
  team?: TeamMember[];
  personas?: Persona[];
  items?: string[];
  sections?: Section[];
  goals?: string[];
  painPoints?: string[];
  requirements?: Requirement[];
  wbsData?: WBSNode;
  wbsImage?: boolean;
  wbsImageSrc?: string;
  risks?: Risk[];
  metrics?: Metric[];
  assumptions?: Assumption[];
  milestones?: Milestone[];
  scheduleImage?: boolean;
  scopeItems?: { left: string[]; right: string[] };
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface Persona {
  name: string;
  age: number;
  role: string;
  avatar?: string;
}

export interface Section {
  title: string;
  items: string[];
  priority?: 'must' | 'should' | 'could';
}

export interface Requirement {
  name: string;
  description: string;
}

export interface WBSNode {
  title: string;
  children?: WBSNode[];
}

export interface Risk {
  risk: string;
  probability: 'Low' | 'Medium' | 'High';
  impact: 'Low' | 'Medium' | 'High';
  mitigation: string;
}

export interface Metric {
  value: string;
  label: string;
  description: string;
}

export interface Assumption {
  title: string;
  description: string;
}

export interface Milestone {
  date: string;
  title: string;
}

export const slides: Slide[] = [
  {
    id: 1,
    title: "Content Management System",
    type: 'title',
    content: {
      subtitle: "Powered by: Group B",
      team: [
        { name: "Shreyan Das", role: "Project Manager" },
        { name: "Aryan Saini", role: "Client Liaison" },
        { name: "Kyaw Min Oo", role: "UX/Workflow Design" },
        { name: "Michael Sam", role: "QA Lead" },
        { name: "David Falade", role: "DevOps" }
      ]
    }
  },
  {
    id: 2,
    title: "Our Users",
    type: 'users',
    content: {
      personas: [
        { name: "Alice", age: 41, role: "Case Worker" },
        { name: "Bob", age: 21, role: "Intake Worker" },
        { name: "Jake", age: 31, role: "Data Analyst" },
        { name: "Sam", age: 38, role: "System Admin" }
      ]
    }
  },
  {
    id: 3,
    title: "Alice - Case Worker",
    type: 'persona',
    content: {
      goals: [
        "Document client interactions accurately with dates",
        "Track each client's progress towards their goals(housing/education/employment)"
      ],
      painPoints: [
        "If a client is in multiple programs, hard to update notes or get a complete history",
        "24 hour tracking adds bloat to the process of taking notes"
      ]
    }
  },
  {
    id: 4,
    title: "Bob - Intake Worker",
    type: 'persona',
    content: {
      goals: [
        "Enter user details in relevant program after determining eligibility",
        "Maintain confidentiality and abide by privacy laws"
      ],
      painPoints: [
        "Hard to know if a client is in a program already or if they are a returning client",
        "Hamburger selection tool as well as bloated program list make it cumbersome to navigate"
      ]
    }
  },
  {
    id: 5,
    title: "Jake - Data Analyst",
    type: 'persona',
    content: {
      goals: [
        "Produce Excel reports on the metrics in the data tracker based on the goals client set and mail them to donors",
        "Download visualisations to use in external communications/websites, etc."
      ],
      painPoints: [
        "Current reports section provides aggregate counts on irrelevant metrics like age, referral info, sex, etc",
        "Reports double count clients if they are in multiple programs"
      ]
    }
  },
  {
    id: 6,
    title: "Sam - System Admin",
    type: 'persona',
    content: {
      goals: [
        "Manage user roles and permissions across different staff types",
        "Ensure compliance with privacy laws and organizational policies"
      ],
      painPoints: [
        "Limited tools to audit data changes (who edited what, and when)",
        "Balancing ease of use for staff with strict security and privacy requirements"
      ]
    }
  },
  {
    id: 7,
    title: "User Stories - Areas of Focus",
    type: 'stories',
    content: {
      items: [
        "Analytics and Reporting",
        "Data Flow",
        "Case Note Management",
        "Client Management",
        "Authentication and Repudiation"
      ]
    }
  },
  {
    id: 8,
    title: "Authentication and Repudiation",
    type: 'requirements',
    content: {
      sections: [
        {
          title: "Logging in (Must have)",
          items: ["Be able to log in, reset password"]
        },
        {
          title: "Employee Sign up (Must have)",
          items: ["System admin can add new employees"]
        }
      ]
    }
  },
  {
    id: 9,
    title: "Client Management",
    type: 'requirements',
    content: {
      sections: [
        { title: "Client Intake (Must have)", items: ["Add new clients to the system"] },
        { title: "Search and Filter Clients (Must have)", items: ["Search by name/ID"] },
        { title: "Dashboard Overview (Should have)", items: ["View  active cases"] },
        { title: "Cross Worker Visibility (Must have)", items: ["View clients as a non-primary worker"] },
        { title: "Client Goal Setting (Must have)", items: ["Track client progress through their goals"] }
      ]
    }
  },
  {
    id: 10,
    title: "Case Notes Management",
    type: 'requirements',
    content: {
      sections: [
        { title: "Case Notes Addition (Must have)", items: ["Add time stamped case notes"] },
        { title: "Case Note Viewing (Must have)", items: ["See all case notes with dates"] },
        { title: "Editing Case Notes (Must have)", items: ["Edit notes to keep records accurate"] },
        { title: "Case Note Deletion (Must have)", items: ["Delete erroneous entries"] },
        { title: "Case Notes Filtering   (Must have)", items: ["Filter case notes using date range"] }
      ]
    }
  },
  {
    id: 11,
    title: "Data Flow",
    type: 'requirements',
    content: {
      sections: [
        { title: "Bulk Data Import (Should have)", items: ["As a data manager, I want to import client data from Excel or spreadsheet software"] },
        { title: "Data Export (Should have)", items: ["As a staff admin, I want to export client data to Excel for analysis"] }
      ]
    }
  },
  {
    id: 12,
    title: "Analysis and Reporting",
    type: 'requirements',
    content: {
      sections: [
        { title: "Data Visualization (Should have)", items: ["Get visualizations on key performance indicators"] },
        { title: "Reporting (Should have)", items: ["Pre-built reports and custom report builder"] }
      ]
    }
  },
  {
    id: 13,
    title: "Functional Requirements - Areas of Focus",
    type: 'stories',
    content: {
      items: [
        "User Management (3)",
        "Client Management (3)",
        "Case Note Management (5)",
        "Data Flow (2)",
        "Analytics and Reporting (2)"
      ]
    }
  },
  {
    id: 14,
    title: "User Management - Functional Requirements",
    type: 'requirements',
    content: {
      requirements: [
        { name: "User Authentication and Authorisation", description: "The system shall authenticate users via password/username combinations" },
        { name: "Role Based Permissions", description: "The system shall enforce granular permissions based on user roles" },
        { name: "Audit Logging", description: "The system shall maintain an immutable log of all data modifications including user, timestamp and changes made" }
      ]
    }
  },
  {
    id: 15,
    title: "Client Management - Functional Requirements",
    type: 'requirements',
    content: {
      requirements: [
        { name: "Client Profile Management", description: "The system shall allow the creation and editing of clients" },
        { name: "Program Milestone Visualisation", description: "The system shall display client progress to their goals on the case overview page" },
        { name: "Search and Filter Clients", description: "The system shall provide searching  and filtering on client records like name,program, date, etc" }
      ]
    }
  },
  {
    id: 16,
    title: "Case Note Management - Functional Requirements",
    type: 'requirements',
    content: {
      items: [
        "Case Note Viewing",
        "Case Note Search and Filter",
        "Case Note Addition",
        "Case Note Deletion",
        "Case Note Editing"
      ]
    }
  },
  {
    id: 17,
    title: "Data Flow - Functional Requirements",
    type: 'requirements',
    content: {
      requirements: [
        { name: "Bulk Import", description: "The system shall accept bulk client data uploads from Excel/CSV files with validation and error reporting." },
        { name: "Export Functionality", description: "The system shall export client data to Excel/CSV formats with user-selectable fields and filtering options." }
      ]
    }
  },
  {
    id: 18,
    title: "Analytics and Reporting - Functional Requirements",
    type: 'requirements',
    content: {
      requirements: [
        { name: "Reports", description: "The system shall generate standard reports on fixed KPIs like client outcomes over customizable date ranges (monthly, quarterly, yearly, etc)" },
        { name: "Data Visualization", description: "The system shall generate basic graphs (histograms, pie charts, etc) on fixed KPIs" }
      ]
    }
  },
  {
    id: 19,
    title: "Performance Requirements",
    type: 'performance',
    content: {
      metrics: [
        { value: "< 2s", label: "Page Load Time", description: "All pages from dashboard must load within 2 seconds under normal network conditions, 95% of the time. Test: Lighthouse TTI measurements across all core pages with client records (db)" },
        { value: "10", label: "Concurrent Users", description: "System supports 10 simultaneous users without response time degradation beyond 20%. Test: k6 load testing with mixed read/write operations. Mornings." }
      ]
    }
  },
  {
    id: 20,
    title: "Usability Requirement",
    type: 'performance',
    content: {
      metrics: [
        { value: "30 Minutes", label: "Time for new staff to complete core tasks without formal training", description: "Test: Usability testing with 3-5 CPSC 319 classmates timing task completion" }
      ],
      items: [
        "Access Client Logs - Navigate to specific client records and view historical log entries quickly",
        "View Case Profiles - Access comprehensive client case information and documentation",
        "Add Case Notes - Create new case note entries with intuitive form workflows"
      ]
    }
  },
  {
    id: 21,
    title: "Security & Privacy",
    type: 'security',
    content: {
      sections: [
        {
          title: "Canadian Data Storage",
          items: [
            "All client data, backups, and logs stored exclusively on Canadian servers",
            "No data transit through non-Canadian servers under any circumstances",
            "Legal compliance for vulnerable population data protection",
            "Enforcement: Canadian-only cloud regions, policy configurations"
          ]
        },
        {
          title: "Browser-Based Protection",
          items: [
            "No sensitive identifiers in URLs (e.g., /clients/john-smith)",
            "HTTP headers prevent browser caching of client data",
            "Session storage cleared on logout",
            "Back button shows 'session expired' after logout",
            "Enforcement: URL inspection, cache tests, header verification using browser dev tools"
          ]
        }
      ]
    }
  },
  {
    id: 22,
    title: "Assumptions",
    type: 'requirements',
    content: {
      requirements: [
        { name: "Internet Connectivity", description: "Users have reliable internet access. No offline editing support due to privacy concerns with caching." },
        { name: "Basic Computer Literacy", description: "Staff can use web browsers and navigate forms. No prior case management system experience required." },
        { name: "Modern Browsers Only", description: "Chrome, Firefox, Safari, Edge on desktop. Mobile or native browsers not supported due to complex data entry forms." },
        { name: "Scale Expectations for NFRs", description: "~10 concurrent users and fewer than 2,000 clients within operational period." },
        { name: "Data Migration", description: "Existing client data can be exported in CSV/Excel format for structured import into our system." }
      ]
    }
  },
  {
    id: 23,
    title: "Risk Management Overview",
    type: 'stories',
    content: {
      items: [
        "Protect Client Data",
        "Meet Stakeholder Needs",
        "Ensure Usability"
      ]
    }
  },
  {
    id: 24,
    title: "Risk Table",
    type: 'risk',
    content: {
      risks: [
        { risk: "Data Security Breach", probability: "Low", impact: "High", mitigation: "No data leaking to LLMs" },
        { risk: "Poor User Adoption (Complex UI)", probability: "Low", impact: "High", mitigation: "User centered design decisions" },
        { risk: "Data Migration Errors", probability: "Medium", impact: "High", mitigation: "Migration testing if legacy data format is provided" },
        { risk: "Scope Creep/Feature Bloat", probability: "High", impact: "Medium", mitigation: "Clearly defined scope" }
      ]
    }
  },
  {
    id: 25,
    title: "Work Breakdown Structure",
    type: 'wbs',
    content: {
      wbsImage: true,
      wbsData: {
        title: "Aunt Leah's Case Management System",
        children: [
          {
            title: "1. Planning",
            children: [
              { title: "Client Communication", children: [
                { title: "1.1.1 Get Requirements from Client" },
                { title: "1.1.2 Get feedback/validation for requirements planning" },
                { title: "1.1.3 Sign NDA" },
                { title: "1.1.4 Establish Communication Channels" }
              ]},
              { title: "Project Organization", children: [
                { title: "1.2.1 Define Team Roles & Responsibility" },
                { title: "1.2.2 Workflow Setup (git/code review process)" },
                { title: "1.2.3 Outline Expectations in team contract" },
                { title: "1.2.4 Communication planning" },
                { title: "1.2.5 Task Management process/software" },
                { title: "1.2.6 Meeting Schedule" }
              ]},
              { title: "Project Planning", children: [
                { title: "1.3.1 Work Breakdown Structure" },
                { title: "1.3.2 Project Timeline" },
                { title: "1.3.3 User Personas" },
                { title: "1.3.4 User Stories" },
                { title: "1.3.5 Functional Requirements" },
                { title: "1.3.6 Non-Functional Requirements" },
                { title: "1.3.7 Risk Management" },
                { title: "1.3.8 Define Scope" }
              ]}
            ]
          },
          {
            title: "2. Development",
            children: [
              { title: "System Design", children: [
                { title: "2.1.1 High Level Architecture" },
                { title: "2.1.2 Database Schema Design" },
                { title: "2.1.3 API/Interface Design" },
                { title: "2.1.4 Security Decisions" },
                { title: "2.1.5 Tech Stack Selection" }
              ]},
              { title: "Backend Development", children: [
                { title: "2.2.1 Database Implementation" },
                { title: "2.2.2 Security" },
                { title: "2.2.3 Business logic" },
                { title: "2.2.4 Error Handling" },
                { title: "2.2.5 Audit Log Implementation" },
                { title: "2.2.6 Permission and access control logic" }
              ]},
              { title: "Frontend Development", children: [
                { title: "2.3.1 UX/UI Design" },
                { title: "2.3.2 UI layout & components" },
                { title: "2.3.3 State Management" },
                { title: "2.3.4 Form Validation" },
                { title: "2.3.5 API Integration" }
              ]}
            ]
          },
          {
            title: "3. Testing",
            children: [
              { title: "Test Planning", children: [
                { title: "3.1.1 Define test cases" },
                { title: "3.1.2 Acceptance criteria" },
                { title: "3.1.3 Test data preparation" }
              ]},
              { title: "Automated Tests", children: [
                { title: "3.2.1 Unit Tests" },
                { title: "3.2.2 Integration Tests" },
                { title: "3.2.3 Load testing / Concurrent Users Testing" },
                { title: "3.2.4 Performance Testing" }
              ]},
              { title: "Manual QA", children: [
                { title: "3.3.1 Regression Testing" },
                { title: "3.3.2 Usability Testing" },
                { title: "3.3.3 Exploratory Testing" },
                { title: "3.3.4 End to End testing" }
              ]}
            ]
          },
          {
            title: "4. Deployment",
            children: [
              { title: "Deployment Prep", children: [
                { title: "4.1.1 Environment Setup and Config" },
                { title: "4.1.2 Domain + DNS management" },
                { title: "4.1.3 CI/CD Pipeline" },
                { title: "4.1.4 Staging/QA Environment" },
                { title: "4.1.5 Production Environment" },
                { title: "4.1.6 Backup & Rollback Plan" },
                { title: "4.1.7 Hosting Region Selection" }
              ]},
              { title: "System Deployment", children: [
                { title: "4.2.1 Log Monitoring" },
                { title: "4.2.2 Smoke Testing" },
                { title: "4.2.3 Performance Monitoring" },
                { title: "4.2.4 Alerting" }
              ]},
              { title: "Handover", children: [
                { title: "4.3.1 Documentation Delivery" },
                { title: "4.3.2 Client Training" },
                { title: "4.3.3 Handover Meeting" },
                { title: "4.3.4 User Acceptance Testing (UAT)" }
              ]}
            ]
          }
        ]
      }
    }
  },
  {
    id: 26,
    title: "WBS - Planning",
    type: 'wbs',
    content: {
      wbsImage: true,
      wbsImageSrc: 'VV2',
      wbsData: {
        title: "1. Planning",
        children: [
          { title: "Client Communication", children: [
            { title: "Get Requirements from Client" },
            { title: "Get feedback/validation for requirements planning" },
            { title: "Sign NDA" },
            { title: "Establish Communication Channels" }
          ]},
          { title: "Project Organization", children: [
            { title: "Define Team Roles & Responsibility" },
            { title: "Workflow Setup (git/code review process)" },
            { title: "Outline Expectations in team contract" },
            { title: "Communication planning" },
            { title: "Task Management process/software" },
            { title: "Meeting Schedule" }
          ]},
          { title: "Project Planning", children: [
            { title: "Work Breakdown Structure" },
            { title: "Project Timeline" },
            { title: "User Personas" },
            { title: "User Stories" },
            { title: "Functional Requirements" },
            { title: "Non-Functional Requirements" },
            { title: "Risk Management" },
            { title: "Define Scope" }
          ]}
        ]
      }
    }
  },
  {
    id: 27,
    title: "WBS - Development",
    type: 'wbs',
    content: {
      wbsImage: true,
      wbsImageSrc: 'VV3',
      wbsData: {
        title: "2. Development",
        children: [
          { title: "System Design", children: [
            { title: "High Level Architecture" },
            { title: "Database Schema Design" },
            { title: "API/Interface Design" },
            { title: "Security Decisions" },
            { title: "Tech Stack Selection" }
          ]},
          { title: "Backend Development", children: [
            { title: "Database Implementation" },
            { title: "Security" },
            { title: "Business logic" },
            { title: "Error Handling" },
            { title: "Audit Log Implementation" },
            { title: "Permission and access control logic" }
          ]},
          { title: "Frontend Development", children: [
            { title: "UX/UI Design" },
            { title: "UI layout & components" },
            { title: "State Management" },
            { title: "Form Validation" },
            { title: "API Integration" }
          ]}
        ]
      }
    }
  },
  {
    id: 28,
    title: "WBS - Testing",
    type: 'wbs',
    content: {
      wbsImage: true,
      wbsImageSrc: 'VV4',
      wbsData: {
        title: "3. Testing",
        children: [
          { title: "Test Planning", children: [
            { title: "Define test cases" },
            { title: "Acceptance criteria" },
            { title: "Test data preparation" }
          ]},
          { title: "Automated Tests", children: [
            { title: "Unit Tests" },
            { title: "Integration Tests" },
            { title: "Load testing / Concurrent Users Testing" },
            { title: "Performance Testing" }
          ]},
          { title: "Manual QA", children: [
            { title: "Regression Testing" },
            { title: "Usability Testing" },
            { title: "Exploratory Testing" },
            { title: "End to End testing" }
          ]}
        ]
      }
    }
  },
  {
    id: 29,
    title: "WBS - Deployment",
    type: 'wbs',
    content: {
      wbsImage: true,
      wbsImageSrc: 'VV5',
      wbsData: {
        title: "4. Deployment",
        children: [
          { title: "Deployment Prep", children: [
            { title: "Environment Setup and Config" },
            { title: "Domain + DNS management" },
            { title: "CI/CD Pipeline" },
            { title: "Staging/QA Environment" },
            { title: "Production Environment" },
            { title: "Backup & Rollback Plan" },
            { title: "Hosting Region Selection" }
          ]},
          { title: "System Deployment", children: [
            { title: "Log Monitoring" },
            { title: "Smoke Testing" },
            { title: "Performance Monitoring" },
            { title: "Alerting" }
          ]},
          { title: "Handover", children: [
            { title: "Documentation Delivery" },
            { title: "Client Training" },
            { title: "Handover Meeting" },
            { title: "User Acceptance Testing (UAT)" }
          ]}
        ]
      }
    }
  },
  {
    id: 30,
    title: "Project Schedule",
    type: 'schedule',
    content: {
      scheduleImage: true,
      milestones: [
        { date: "Jan 29", title: "Project Requirements Document" },
        { date: "Feb 6", title: "Project Design Document" },
        { date: "Feb 23", title: "Minimum Viable Product (MVP)" },
        { date: "Mar 3", title: "Project Test Plan" },
        { date: "Apr 8", title: "Final Deliverable/Project Showcase" }
      ],
      sections: [
        { title: "Planning and Validation", items: ["Focused on analysis, validation, coordination, and verification"] },
        { title: "Core Dev/Implementation", items: ["Focused on development and implementation of our MVP"] },
        { title: "Design Windows", items: ["Focused on High Level Architecture & DB Design"] }
      ]
    }
  },
  {
    id: 31,
    title: "In Scope",
    type: 'scope',
    content: {
      scopeItems: {
        left: [
          "User authentication & RBAC (Role Based Authentication Control)",
          "Employee management (Admin)",
          "Client intake & profile management",
          "Case notes creation, viewing & soft deletion",
          "Case notes viewing & filtering"
        ],
        right: [
          "Client goals & milestone tracking",
          "Client search & filtering",
          "Caseworker dashboard",
          "Data export (CSV/Excel)",
          "Reporting & predefined analytics"
        ]
      }
    }
  },
  {
    id: 32,
    title: "Out of Scope",
    type: 'scope',
    content: {
      scopeItems: {
        left: [
          "Native mobile applications (iOS/Android)",
          "Offline access or data entry",
          "Advanced analytics & AI insights",
          "Real-time collaboration or live editing"
        ],
        right: [
          "Custom report builders",
          "Export formats beyond CSV & Excel",
          "Legacy system maintenance",
          "External third-party integrations",
          "Data migration"
        ]
      }
    }
  },
  {
    id: 33,
    title: "Thank You",
    type: 'thank-you',
    content: {
      subtitle: "Thank you for listening"
    }
  }
];
