export interface Slide2 {
  id: number;
  title: string;
  type: 'title' | 'toc' | 'summary' | 'tech-stack' | 'tech-comparison' | 'design-decision' | 'ui-design' | 'api-routes' | 'database' | 'references' | 'thank-you' | 'image-slide' | 'qna';
  content: Slide2Content;
}

export interface Slide2Content {
  subtitle?: string;
  team?: TeamMember[];
  items?: string[];
  sections?: Section[];
  techStack?: TechStackItem[];
  comparison?: ComparisonTable;
  decision?: DesignDecision;
  apiRoutes?: APIRoute[];
  uiPage?: UIPage;
  references?: Reference[];
  imageSrc?: string;
  imageCaption?: string;
  qnaItems?: QnAItem[];
}

export interface QnAItem {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
}

export interface Section {
  title: string;
  items: string[];
}

export interface TechStackItem {
  layer: string;
  technology: string;
  purpose: string;
}

export interface ComparisonTable {
  title: string;
  chosen: string;
  alternatives: Alternative[];
  pros: string[];
  cons: string[];
}

export interface Alternative {
  name: string;
  pros: string[];
  cons: string[];
}

export interface DesignDecision {
  title: string;
  decision: string;
  rationale: string[];
  tradeoffs: {
    lost: string[];
    gained: string[];
  };
}

export interface APIRoute {
  method: string;
  route: string;
  description: string;
  responseCodes?: string[];
}

export interface UIPage {
  name: string;
  description: string;
  features: string[];
  apiCalls: string[];
  figmaLink?: string;
}

export interface Reference {
  number: string;
  text: string;
}

export const slides2: Slide2[] = [
  {
    id: 1,
    title: "Design Report",
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
    title: "Table of Contents",
    type: 'toc',
    content: {
      items: [
        "Executive Summary",
        "Technical Stack Overview",
        "Technology Justifications",
        "Design Decisions",
        "Front-End Design / UX",
        "API Routes",
        "Database Architecture",
        "References"
      ]
    }
  },
  {
    id: 3,
    title: "Executive Summary",
    type: 'summary',
    content: {
      sections: [
        {
          title: "Project Overview",
          items: [
            "Content management system for Aunt Leah's Place",
            "Supports employees in managing programs and tracking client progress",
            "Client-server monolithic architecture for constrained development window"
          ]
        },
        {
          title: "Key Design Choices",
          items: [
            "Prioritized development velocity over future scalability",
            "Strong consistency over availability for data integrity",
            "Self-hosted authentication for Canadian data compliance"
          ]
        }
      ]
    }
  },
  {
    id: 4,
    title: "Tech Stack",
    type: 'image-slide',
    content: {
      imageSrc: "image14"
    }
  },
  {
    id: 5,
    title: "Technical Stack Overview",
    type: 'tech-stack',
    content: {
      techStack: [
        { layer: "Frontend/Backend", technology: "Next.js", purpose: "All-in-one web framework with batteries included" },
        { layer: "Frontend", technology: "shadcn/ui", purpose: "Library for reusable components" },
        { layer: "Frontend", technology: "Tailwind CSS", purpose: "Customise components to use our scheme" },
        { layer: "Backend", technology: "Prisma", purpose: "TypeScript support and SQL abstraction" },
        { layer: "Backend", technology: "BetterAuth", purpose: "Auth library with 2FA, RBAC support" },
        { layer: "Backend", technology: "Resend", purpose: "Email service for verification tokens" },
        { layer: "Testing", technology: "Vitest", purpose: "Unit testing library" },
        { layer: "Database", technology: "AWS RDS Postgres", purpose: "SQL database for client data" },
        { layer: "Storage", technology: "AWS S3", purpose: "File storage for ad-hoc purposes" },
        { layer: "Hosting", technology: "AWS (ca-central-1)", purpose: "Canadian cloud hosting for compliance" }
      ]
    }
  },
  {
    id: 6,
    title: "Next.js - Why We Chose It",
    type: 'tech-comparison',
    content: {
      comparison: {
        title: "Next.js (with TypeScript)",
        chosen: "Next.js",
        pros: [
          "Out-of-box routing, server/client rendering reduces setup time",
          "Built-in optimizations for LCP and TTI (key NFRs)",
          "Frontend/backend coupled avoids CORS issues",
          "Team has prior experience, reducing learning curve"
        ],
        cons: [
          "Harder to deploy on non-Vercel services including AWS"
        ],
        alternatives: [
          {
            name: "React + Express",
            pros: ["Flexible, lightweight JS bundle", "Team familiar with React"],
            cons: ["Extra setup", "Possible schema drift", "CORS issues"]
          },
          {
            name: "Vue.js",
            pros: ["Virtual DOM for faster loads", "Two-way data binding"],
            cons: ["Smaller ecosystem", "Larger learning curve for team"]
          }
        ]
      }
    }
  },
  {
    id: 7,
    title: "shadcn/ui + Tailwind CSS",
    type: 'tech-comparison',
    content: {
      comparison: {
        title: "UI Component Library",
        chosen: "shadcn/ui + Tailwind CSS",
        pros: [
          "Rich component library for reusable components",
          "Download only needed components (full code ownership)",
          "Easy customization without creating wrappers",
          "Forms include end-to-end validation and data sanitization"
        ],
        cons: [
          "Manual update/migration via CLI"
        ],
        alternatives: [
          {
            name: "Material UI",
            pros: ["Enterprise-ready", "Easier learning curve"],
            cons: ["CSS-in-JS runtime slows performance", "Entire library shipped in bundle", "Hard to customize"]
          }
        ]
      }
    }
  },
  {
    id: 8,
    title: "Prisma ORM",
    type: 'tech-comparison',
    content: {
      comparison: {
        title: "Database ORM",
        chosen: "Prisma",
        pros: [
          "Good for simple SQL queries with incredible DX",
          "Team familiarity reduces learning curve",
          "Excellent migration support for easy DB switching",
          "PostgreSQL adapter with out-of-box support"
        ],
        cons: [
          "Larger bundle size compared to alternatives",
          "Cold starts increase page load times",
          "Complex joins are slow"
        ],
        alternatives: []
      }
    }
  },
  {
    id: 9,
    title: "BetterAuth - Authentication",
    type: 'tech-comparison',
    content: {
      comparison: {
        title: "Authentication Solution",
        chosen: "BetterAuth (Self-hosted)",
        pros: [
          "Dedicated 2FA support (key must-have from client)",
          "Integrates well with Prisma for end-to-end type safety",
          "Self-hosted = free + Canadian data compliance",
          "Plugins for password reset, verification tokens, RBAC"
        ],
        cons: [
          "Self-hosted auth can lead to security vulnerabilities"
        ],
        alternatives: [
          {
            name: "NextAuth (Auth.js)",
            pros: ["Widely supported", "Large ecosystem", "Granular control"],
            cons: ["No 2FA plugins", "Manual RBAC implementation", "High learning curve"]
          }
        ]
      }
    }
  },
  {
    id: 10,
    title: "Email & Testing Services",
    type: 'tech-comparison',
    content: {
      comparison: {
        title: "Supporting Services",
        chosen: "Resend + Vitest",
        pros: [
          "Resend: JSX/TSX email templates integrate with React",
          "Resend: 1000 emails/month free tier sufficient for tokens",
          "Vitest: Faster in watch mode, lower memory usage",
          "Vitest: Jest-like syntax for easy team adoption"
        ],
        cons: [
          "Resend: Fixed free tier impacts scalability",
          "Vitest: Different runtime than Next.js turbopack"
        ],
        alternatives: [
          {
            name: "Nodemailer",
            pros: ["Lightweight SMTP", "No cost beyond hosting"],
            cons: ["Requires separate mail server setup", "No JSX templates"]
          },
          {
            name: "Jest",
            pros: ["Legacy testing system", "Big ecosystem"],
            cons: ["Spins up own runtime", "Lots of config required"]
          }
        ]
      }
    }
  },
  {
    id: 11,
    title: "AWS Infrastructure",
    type: 'tech-comparison',
    content: {
      comparison: {
        title: "Cloud Hosting",
        chosen: "AWS (RDS, S3, Lambda/Amplify)",
        pros: [
          "Dedicated Canadian data centers (ca-central-1)",
          "Complete suite of services in single platform",
          "Team familiarity with AWS",
          "Compliance with privacy regulations"
        ],
        cons: [
          "Lambda can lead to vendor lock-in",
          "Data privacy setup may need extra configuration"
        ],
        alternatives: [
          {
            name: "Vercel + Vercel Postgres",
            pros: ["Seamless Next.js deployment", "Built-in CI/CD"],
            cons: ["Database hosted in US (dealbreaker)", "Limited DB features"]
          },
          {
            name: "Self-Hosted VPS",
            pros: ["Maximum control", "Lower cost"],
            cons: ["Security concerns", "High operational overhead"]
          }
        ]
      }
    }
  },
  {
    id: 12,
    title: "Design Decisions Overview",
    type: 'toc',
    content: {
      items: [
        "Monolithic vs Microservices Architecture",
        "Consistency vs Availability",
        "SQL vs NoSQL Database",
        "Self-hosted vs SaaS Authentication",
        "Testing Strategy",
        "REST API vs gRPC"
      ]
    }
  },
  {
    id: 13,
    title: "Monolithic Architecture",
    type: 'design-decision',
    content: {
      decision: {
        title: "Monolithic vs Microservices",
        decision: "Monolithic Architecture",
        rationale: [
          "Max 10 concurrent users, <2000 clients - monolithic sufficient",
          "6-8 week development window prioritizes velocity",
          "No inter-service communication reduces overhead",
          "Single CI/CD pipeline instead of one per microservice",
          "Shared TypeScript types force frontend/backend consistency"
        ],
        tradeoffs: {
          lost: [
            "Scalability sacrificed for speed",
            "Future migration to microservices harder",
            "Larger application bundle"
          ],
          gained: [
            "Less complex application saves 20+ hours dev time",
            "Simpler deployment process"
          ]
        }
      }
    }
  },
  {
    id: 14,
    title: "Strong Consistency",
    type: 'design-decision',
    content: {
      decision: {
        title: "Consistency vs Availability",
        decision: "Strong Consistency over Availability",
        rationale: [
          "Audit trail requires consistent logs (stale data = missed unauthorized use)",
          "Case notes/client details need immediate change visibility",
          "Session token invalidation must be consistent for security",
          "Single region AWS (~99.9% availability) sufficient for 10 users"
        ],
        tradeoffs: {
          lost: [
            "99.99% uptime from distributed deployment",
            "Database write locks increase latency"
          ],
          gained: [
            "Audit trail compliance",
            "Immediate synchronous updates",
            "Consistent session invalidation prevents data leaks"
          ]
        }
      }
    }
  },
  {
    id: 15,
    title: "PostgreSQL Database",
    type: 'design-decision',
    content: {
      decision: {
        title: "SQL vs NoSQL Database",
        decision: "SQL Database (PostgreSQL)",
        rationale: [
          "Data is inherently relational (clients → programs → case notes)",
          "ACID compliance required - can't lose case notes",
          "Joins required for reports and data visualizations"
        ],
        tradeoffs: {
          lost: [
            "Schema migrations required for structural changes"
          ],
          gained: [
            "Data integrity guarantees",
            "Powerful query capabilities",
            "Prisma ORM saves 8-12 hours on API layer"
          ]
        }
      }
    }
  },
  {
    id: 16,
    title: "Self-Hosted Authentication",
    type: 'design-decision',
    content: {
      decision: {
        title: "Self-hosted vs SaaS Auth",
        decision: "Self-hosted BetterAuth",
        rationale: [
          "Popular SaaS (Clerk) lacks dedicated Canadian storage",
          "Minimize enterprise solutions for lower costs",
          "Simplify future handover process"
        ],
        tradeoffs: {
          lost: [
            "Must maintain auth service ourselves",
            "Increased complexity (5-6 hours extra work)"
          ],
          gained: [
            "Compliance with BC eHealth Act regulations",
            "Zero ongoing costs"
          ]
        }
      }
    }
  },
  {
    id: 17,
    title: "Testing Strategy",
    type: 'design-decision',
    content: {
      decision: {
        title: "Automated vs Manual Testing",
        decision: "Automated Unit/Integration + Manual UAT for UI",
        rationale: [
          "Automated UI tests (Storybook/Playwright) are time-consuming",
          "UI expected to change frequently with client feedback",
          "Backend/database requirements stable after dev starts",
          "70% coverage target on business logic, utilities, data transforms"
        ],
        tradeoffs: {
          lost: [
            "Not covering every edge case may miss production errors"
          ],
          gained: [
            "Increased velocity",
            "Less workload for team"
          ]
        }
      }
    }
  },
  {
    id: 18,
    title: "REST API",
    type: 'design-decision',
    content: {
      decision: {
        title: "REST API vs gRPC",
        decision: "REST API",
        rationale: [
          "Most operations are CRUD operations",
          "REST JSON responses sufficient for application scale",
          "Team more familiar with REST APIs"
        ],
        tradeoffs: {
          lost: [
            "Slower communication vs gRPC binary protocol",
            "Increased payload size from JSON"
          ],
          gained: [
            "Stateless API improves future scalability",
            "Broader ecosystem of tools and libraries",
            "Faster development with team familiarity"
          ]
        }
      }
    }
  },
  {
    id: 19,
    title: "Front-End Design Overview",
    type: 'toc',
    content: {
      items: [
        "Design Reference (shadcn/ui)",
        "Client Profile Page",
        "Case Note Page",
        "Login Page",
        "Admin Page",
        "Reports Page",
        "Main Dashboard"
      ]
    }
  },
  {
    id: 20,
    title: "Client Profile Page",
    type: 'ui-design',
    content: {
      uiPage: {
        name: "Client Profile Page",
        description: "Comprehensive client information management with improved navigation",
        features: [
          "Core action buttons (save, delete) on sticky top component",
          "Collapsible sections reduce scroll fatigue",
          "Case Notes section for easy navigation",
          "Client File Edit History for audit trail"
        ],
        apiCalls: [
          "GET /api/clients/:clientId - Load all fields",
          "PATCH /api/clients/:clientId - Save changes"
        ],
        figmaLink: "https://www.figma.com/design/kVoviqAYpTWBLe7BMbdTBQ"
      },
      imageSrc: "image12"
    }
  },
  {
    id: 21,
    title: "Case Note Page",
    type: 'ui-design',
    content: {
      uiPage: {
        name: "Case Note Page",
        description: "Streamlined case note management with improved UX",
        features: [
          "Sticky action buttons at top",
          "Status indicator (Draft/Edit Mode/Published)",
          "Removed 24-hour clock for each section",
          "Auto-collapse empty sections",
          "Tag system replaces abbreviation legend",
          "Case note history for audit trail"
        ],
        apiCalls: [
          "GET /api/case-notes/:caseNoteId - Load note",
          "PATCH /api/case-notes/:caseNoteId - Save changes",
          "DELETE /api/case-notes/:caseNoteId - Delete note"
        ]
      },
      imageSrc: "image7"
    }
  },
  {
    id: 22,
    title: "Login Page",
    type: 'ui-design',
    content: {
      uiPage: {
        name: "Login Page",
        description: "Secure authentication with password reset flow",
        features: [
          "Email/password authentication",
          "Forgot password triggers email with reset code",
          "Two-step password reset process",
          "Clean, minimal design"
        ],
        apiCalls: [
          "POST /api/auth/request-password-reset",
          "POST /api/auth/reset-password",
          "POST /api/auth/sign-in/email"
        ],
        figmaLink: "https://www.figma.com/design/kVoviqAYpTWBLe7BMbdTBQ"
      },
      imageSrc: "image3"
    }
  },
  {
    id: 23,
    title: "Admin Page",
    type: 'ui-design',
    content: {
      uiPage: {
        name: "Admin Page",
        description: "User management for system administrators",
        features: [
          "List all users in system",
          "Create new user accounts",
          "Edit user details via modal",
          "Delete user accounts",
          "Role-based access control"
        ],
        apiCalls: [
          "GET /api/admin/users - List users",
          "POST /api/admin/users - Create user",
          "PATCH /api/admin/users/:userId - Update user",
          "DELETE /api/admin/users/:userId - Delete user"
        ]
      },
      imageSrc: "image10"
    }
  },
  {
    id: 24,
    title: "Reports Page",
    type: 'ui-design',
    content: {
      uiPage: {
        name: "Reports Page",
        description: "Analytics and reporting with flexible filtering",
        features: [
          "Pre-built reports for common metrics",
          "Multi-criteria filtering",
          "Automatic deduplication across programs",
          "Interactive visualizations (bar, pie, line)",
          "Excel export for filtered data",
          "Save report presets"
        ],
        apiCalls: [
          "GET /api/saved-reports - Load saved reports",
          "POST /api/reports - Generate report",
          "POST /api/reports/:reportId/export/excel",
          "POST /api/saved-reports - Save preset"
        ],
        figmaLink: "https://app.visily.ai/projects/49c24821-3755-4aac-a28f-2a026bf8660c"
      },
      imageSrc: "image9"
    }
  },
  {
    id: 25,
    title: "API Routes - Reports",
    type: 'api-routes',
    content: {
      sections: [
        {
          title: "Reports API",
          items: [
            "POST /api/reports - Generate a report",
            "GET /api/reports/:reportId - Get generated report",
            "DELETE /api/reports/:reportId - Delete report"
          ]
        },
        {
          title: "Report Exports",
          items: [
            "POST /api/reports/:reportId/export/excel",
            "POST /api/reports/:reportId/export/csv",
            "POST /api/reports/:reportId/export/pdf"
          ]
        },
        {
          title: "Saved Reports",
          items: [
            "POST /api/saved-reports - Save configuration",
            "GET /api/saved-reports - Get all saved",
            "DELETE /api/saved-reports/:id - Delete saved"
          ]
        }
      ]
    }
  },
  {
    id: 26,
    title: "API Routes - Clients",
    type: 'api-routes',
    content: {
      sections: [
        {
          title: "Client Info",
          items: [
            "GET /api/clients/:clientId - Retrieve profile",
            "GET /api/clients/:clientId/case-notes - Get all case notes",
            "PATCH /api/clients/:clientId - Update client info"
          ]
        },
        {
          title: "Case Notes",
          items: [
            "GET /api/case-notes/:caseNoteId - Retrieve note",
            "POST /api/case-notes - Create new note",
            "PATCH /api/case-notes/:caseNoteId - Update note",
            "DELETE /api/case-notes/:caseNoteId - Delete note"
          ]
        }
      ]
    }
  },
  {
    id: 27,
    title: "API Routes - Auth & Admin",
    type: 'api-routes',
    content: {
      sections: [
        {
          title: "Authentication",
          items: [
            "POST /api/auth/sign-in/email - Sign in",
            "POST /api/auth/sign-out - Sign out",
            "POST /api/auth/request-password-reset",
            "POST /api/auth/reset-password"
          ]
        },
        {
          title: "Two-Factor Auth",
          items: [
            "POST /api/auth/2fa/setup - Generate secret",
            "POST /api/auth/2fa/verify - Verify OTP",
            "POST /api/auth/2fa/enable - Enable 2FA",
            "POST /api/auth/2fa/disable - Disable 2FA"
          ]
        },
        {
          title: "Admin (ADMIN only)",
          items: [
            "GET /api/admin/users - List all users",
            "POST /api/admin/users - Create user",
            "PATCH /api/admin/users/:userId - Update user",
            "DELETE /api/admin/users/:userId - Delete user"
          ]
        }
      ]
    }
  },
  {
    id: 28,
    title: "Thank You",
    type: 'thank-you',
    content: {
      subtitle: "Questions?"
    }
  },
  {
    id: 29,
    title: "Anticipated Questions",
    type: 'qna',
    content: {
      qnaItems: [
        {
          question: "Why Prisma over raw SQL or other ORMs?",
          answer: "Prisma provides excellent TypeScript integration with auto-generated types, reducing runtime errors. Its migration system simplifies database changes, and the team already has experience with it, saving 8-12 hours on the API layer."
        },
        {
          question: "Why not use Vercel for hosting since you're using Next.js?",
          answer: "Vercel's database services are hosted in the US, which violates Canadian data residency requirements for healthcare-adjacent data. AWS ca-central-1 ensures all client data stays in Canada for PIPEDA compliance."
        },
        {
          question: "Why self-hosted auth instead of a managed service like Auth0?",
          answer: "Most managed auth services (Clerk, Auth0) don't guarantee Canadian data storage. BetterAuth is self-hosted on our AWS infrastructure, ensuring compliance while providing built-in 2FA and RBAC support at zero ongoing cost."
        },
        {
          question: "How will you handle the 6-8 week timeline?",
          answer: "We prioritized development velocity: monolithic architecture eliminates microservice overhead, Next.js reduces setup time, and manual UI testing (vs automated) lets us iterate faster with client feedback."
        },
        {
          question: "What happens if the system needs to scale beyond 10 users?",
          answer: "The monolithic architecture can handle moderate growth. For significant scaling, the clean separation of concerns allows future migration to microservices. PostgreSQL and AWS infrastructure both scale vertically first."
        },
        {
          question: "Why strong consistency over availability?",
          answer: "For a case management system, data integrity is critical. Stale audit logs could miss unauthorized access, and inconsistent case notes could affect client care. Single-region AWS provides ~99.9% uptime, sufficient for 10 concurrent users."
        }
      ]
    }
  },
  // APPENDIX SECTION - slides 30-32
  {
    id: 30,
    title: "Persona Diagram",
    type: 'database',
    content: {
      sections: [
        {
          title: "Design Decisions",
          items: [
            "Bare bones structure to build off once example data received",
            "CUID for all primary keys (collision-resistant, URL-safe)",
            "Soft deletion (is_active flag) for undo and historical records"
          ]
        },
        {
          title: "Key Relationships",
          items: [
            "Clients → Programs (1:many)",
            "Clients → Case Notes (0:many)",
            "Users → Roles (many:many via RBAC)"
          ]
        }
      ],
      imageSrc: "image16"
    }
  },
  {
    id: 31,
    title: "Navigation Diagrams",
    type: 'image-slide',
    content: {
      imageSrc: "image15",
      imageCaption: "Main page navigation diagrams showing the user journey through the application"
    }
  },
  {
    id: 32,
    title: "References",
    type: 'references',
    content: {
      references: [
        { number: "1", text: "Better Auth - Email & Password Documentation" },
        { number: "2", text: "Better Auth - Two-Factor Authentication Plugin" },
        { number: "3", text: "Better Auth - Admin Plugin" },
        { number: "4", text: "Next.js - Image Optimization" },
        { number: "5", text: "Next.js - Compiler Architecture" },
        { number: "6", text: "Next.js - Linking and Navigating" },
        { number: "7", text: "shadcn/ui - Introduction" },
        { number: "8", text: "shadcn/ui - TanStack Form" },
        { number: "9", text: "Prisma - Migrate Overview" },
        { number: "10", text: "Prisma - PostgreSQL Connector" },
        { number: "11", text: "PortSwigger - Authentication Vulnerabilities" },
        { number: "12", text: "Resend - Send Email API" },
        { number: "13", text: "Resend - Pricing" },
        { number: "14", text: "Vite - Why Vite" },
        { number: "15", text: "AWS - Regional Product Services" },
        { number: "16", text: "PIPEDA - Privacy Laws in Canada" }
      ]
    }
  }
];
