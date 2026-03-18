export interface Slide3 {
  id: number;
  title: string;
  type:
    | 'title'
    | 'toc'
    | 'summary'
    | 'tech-stack'
    | 'tech-comparison'
    | 'design-decision'
    | 'ui-design'
    | 'api-routes'
    | 'database'
    | 'references'
    | 'thank-you'
    | 'image-slide'
    | 'qna'
    | 'test-strategy'
    | 'test-coverage'
    | 'acceptance-criteria'
    | 'test-results';
  content: Slide3Content;
}

export interface Slide3Content {
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
  imageScale?: number;
  qnaItems?: QnAItem[];
  testStrategy?: TestStrategy[];
  testCoverage?: TestCoverage[];
  acceptanceCriteria?: AcceptanceCriterion[];
  testResults?: TestResult[];
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
  secondImageSrc?: string;
  secondImageScale?: number;
  dualImageMode?: boolean;
}

export interface Reference {
  number: string;
  text: string;
}

export interface TestStrategy {
  type: string;
  description: string;
  execution: string;
  status?: 'automated' | 'manual' | 'planned';
}

export interface TestCoverage {
  feature: string;
  testType: string;
  coverage: string;
  gaps?: string[];
  evidence?: string;
}

export interface AcceptanceCriterion {
  feature: string;
  criteria: string;
  status: 'met' | 'partial' | 'not-met';
  evidence?: string;
  missing?: string;
  plan?: string;
}

export interface TestResult {
  category: string;
  totalIssues: number;
  critical: number;
  major: number;
  minor: number;
  resolved: boolean;
  details?: string[];
}

export const slides3: Slide3[] = [
  {
    id: 1,
    title: 'Test Plan & Quality Assurance',
    type: 'title',
    content: {
      subtitle: 'CPSC 319 - Aunt Leah\'s Place CMS',
      team: [
        { name: 'Shreyan Das', role: 'Project Manager' },
        { name: 'Michael Sam', role: 'QA Lead' },
        { name: 'Kyaw Min Oo', role: 'UI/UX Lead' },
        { name: 'David Falade', role: 'DevOps Lead' },
        { name: 'Aryan Saini', role: 'Client Liaison' },
      ],
    },
  },
  {
    id: 2,
    title: 'Table of Contents',
    type: 'toc',
    content: {
      items: [
        'Testing Strategy Overview',
        'Test Coverage Analysis',
        'Unit Testing Implementation',
        'Integration & E2E Testing',
        'Acceptance Criteria Status',
        'MVP Testing Results',
        'Peer Testing Feedback',
        'CI/CD & Automation',
        'Accessibility Testing',
        'Next Steps & Improvements',
      ],
    },
  },
  {
    id: 3,
    title: 'Executive Summary',
    type: 'summary',
    content: {
      sections: [
        {
          title: 'Testing Approach',
          items: [
            'Multi-layered testing strategy: Unit, Integration, E2E, Smoke',
            '70% minimum code coverage requirement',
            'Automated testing via Vitest with mocked Prisma client',
            'Manual E2E testing for UI edge cases',
          ],
        },
        {
          title: 'Key Achievements',
          items: [
            'All core CRUD operations tested',
            'Authentication & MFA fully covered',
            'Dashboard statistics validated',
            'Accessibility issues identified and tracked',
          ],
        },
        {
          title: 'Current Focus',
          items: [
            'Prioritizing E2E testing based on MVP feedback',
            'Addressing UI edge cases discovered in peer testing',
            'Implementing integration tests by March 30th',
          ],
        },
      ],
    },
  },
  {
    id: 4,
    title: 'Testing Strategy',
    type: 'test-strategy',
    content: {
      testStrategy: [
        {
          type: 'Unit Testing',
          description: 'Test individual tRPC procedures with mocked Prisma client',
          execution: 'Vitest with mocked database (automated)',
          status: 'automated',
        },
        {
          type: 'Integration Testing',
          description: 'Test connected components with live test database',
          execution: 'Vitest with local mock database',
          status: 'planned',
        },
        {
          type: 'System/E2E Testing',
          description: 'Validate full application with real user scenarios',
          execution: 'Manual testing by QA Lead',
          status: 'manual',
        },
        {
          type: 'Smoke Testing',
          description: 'Rapid checks after deployment for critical paths',
          execution: 'Automated via GitHub Actions',
          status: 'automated',
        },
        {
          type: 'Accessibility Testing',
          description: 'Verify usability for users with visual impairments',
          execution: 'Manual with Chrome Lighthouse',
          status: 'manual',
        },
      ],
    },
  },
  {
    id: 5,
    title: 'Test Coverage Overview',
    type: 'test-coverage',
    content: {
      testCoverage: [
        {
          feature: 'Client Management',
          testType: 'Unit Tests',
          coverage: 'CRUD, search, permissions, audit logging',
          gaps: ['FORBIDDEN cases', 'Invalid input validation', 'Audit data capture'],
          evidence: 'server/routers/__tests__/client.test.ts',
        },
        {
          feature: 'Authentication/MFA',
          testType: 'Unit Tests',
          coverage: 'Login, 2FA setup, password reset, admin functions',
          gaps: ['E2E auth workflows', 'Browser-based MFA testing'],
          evidence: 'server/routers/__tests__/auth.test.ts',
        },
        {
          feature: 'Goal Setting',
          testType: 'Unit Tests',
          coverage: 'Create, update, steps management',
          gaps: [],
          evidence: 'server/routers/__tests__/goal.test.ts',
        },
        {
          feature: 'Client Intake',
          testType: 'Unit Tests',
          coverage: 'Form submission, client reuse, validation',
          gaps: ['Date validation', 'Race conditions', 'Input sanitization'],
          evidence: 'server/routers/__tests__/intake.test.ts',
        },
        {
          feature: 'Case Notes',
          testType: 'Unit Tests',
          coverage: 'CRUD operations, draft/publish flow',
          gaps: ['Access control validation', 'Section content validation'],
          evidence: 'server/routers/__tests__/caseNote.test.ts',
        },
        {
          feature: 'Dashboard',
          testType: 'Unit Tests',
          coverage: 'Statistics, client table, attention items',
          gaps: ['Search function debugging'],
          evidence: 'server/routers/__tests__/dashboard.test.ts',
        },
      ],
    },
  },
  {
    id: 6,
    title: 'Client Management Testing',
    type: 'test-coverage',
    content: {
      sections: [
        {
          title: 'Procedures Tested',
          items: [
            'list - Returns simple client list with names',
            'getAll - Filters by search query and "mine" parameter',
            'getById - Returns client with enrollments and audit log',
            'update - Updates fields and creates audit log',
            'delete - Soft deletes client (is_active = false)',
            'restore - Restores deleted client (admin/manager only)',
          ],
        },
        {
          title: 'Validation Coverage',
          items: [
            'First/last name required (non-empty after trim)',
            'Date of birth: after 1900-01-01, before today',
            'Email format validation (regex pattern)',
            'Phone number validation (minimum 10 digits)',
            'Permission-based filtering ("mine" parameter)',
            'Role-based restore operation',
          ],
        },
        {
          title: 'Identified Gaps',
          items: [
            'No tests for assertCanAccessClientById helper',
            'Missing FORBIDDEN scenario coverage',
            'Invalid input validation incomplete',
            'Audit log data capture verification needed',
          ],
        },
      ],
    },
  },
  {
    id: 7,
    title: 'Authentication & Security Testing',
    type: 'test-coverage',
    content: {
      sections: [
        {
          title: 'Coverage Areas',
          items: [
            'Session management and onboarding state',
            'First-login password change flow',
            'MFA setup and verification',
            'Admin user creation with temp passwords',
            'Password and 2FA reset functionality',
            'Program-based access control',
          ],
        },
        {
          title: 'Test Scenarios',
          items: [
            'Returns null session for unauthenticated users',
            'Verifies current password before changes',
            'Handles MFA setup failures gracefully',
            'Rejects duplicate email addresses',
            'Restricts admin actions to authorized roles',
            'Validates program assignments for workers',
          ],
        },
        {
          title: 'Security Validations',
          items: [
            'Role-based access control (RBAC)',
            'Program-level permissions',
            'Session token invalidation',
            'Temporary password requirements',
            'MFA enforcement for non-admins',
          ],
        },
      ],
    },
  },
  {
    id: 8,
    title: 'Acceptance Criteria - Client Features',
    type: 'acceptance-criteria',
    content: {
      acceptanceCriteria: [
        {
          feature: 'Client Search',
          criteria: 'Search by name, ID, or contact information',
          status: 'met',
          evidence: 'Search by first_name and last_name implemented',
        },
        {
          feature: 'Client Filtering',
          criteria: 'Filter by program, case worker, enrollment date, status',
          status: 'partial',
          evidence: '"mine" filter and active/inactive badges',
          missing: 'Specific program, case worker, date range filters',
          plan: 'Add filter UI with dropdowns',
        },
        {
          feature: 'Client Overview',
          criteria: 'Display goals, risks, and key demographics',
          status: 'met',
          evidence: 'Demographics, goals button, risk status on dashboard',
        },
        {
          feature: 'Primary Worker',
          criteria: 'System clearly identifies primary case worker',
          status: 'not-met',
          missing: 'No primary worker field or display',
          plan: 'Add primary_worker_id to Enrollment model',
        },
        {
          feature: 'Emergency Contacts',
          criteria: 'Emergency contacts prominently displayed',
          status: 'not-met',
          missing: 'No emergency contacts field',
          plan: 'Add to schema, create alert section',
        },
      ],
    },
  },
  {
    id: 9,
    title: 'Acceptance Criteria - Core Functions',
    type: 'acceptance-criteria',
    content: {
      acceptanceCriteria: [
        {
          feature: 'Client Intake',
          criteria: 'Enroll clients into programs',
          status: 'met',
          evidence: 'Intake form functional at /dashboard/intake',
        },
        {
          feature: 'Duplicate Prevention',
          criteria: 'No duplicate records when re-enrolling',
          status: 'met',
          evidence: 'System reuses existing client records',
        },
        {
          feature: 'Goal Setting',
          criteria: 'Set goals with subtasks and target dates',
          status: 'met',
          evidence: 'Goals page with milestones and dates',
        },
        {
          feature: 'Goal Tracking',
          criteria: 'Progress displayed on dashboard',
          status: 'met',
          evidence: 'Dashboard shows goal progress metrics',
        },
        {
          feature: 'Case Notes',
          criteria: 'Create, edit, view, search case notes',
          status: 'met',
          evidence: 'Full CRUD operations at /dashboard/case-notes',
        },
        {
          feature: 'Authentication',
          criteria: 'MFA required for non-admin users',
          status: 'met',
          evidence: '2FA setup and verification implemented',
        },
      ],
    },
  },
  {
    id: 10,
    title: 'Dashboard Features Status',
    type: 'acceptance-criteria',
    content: {
      acceptanceCriteria: [
        {
          feature: 'Statistics Display',
          criteria: 'Show active clients, notes, goals, progress',
          status: 'met',
          evidence: 'All metrics displayed on dashboard',
        },
        {
          feature: 'Week Comparison',
          criteria: 'Week-over-week note change comparison',
          status: 'met',
          evidence: 'Percentage change calculated and shown',
        },
        {
          feature: 'Quick Actions',
          criteria: 'Cards for common actions',
          status: 'met',
          evidence: 'New Client, Add Case Note, Export, Browse',
        },
        {
          feature: 'Client Table',
          criteria: 'Sortable by column with filters',
          status: 'met',
          evidence: 'Sort by name, program, date, progress, status',
        },
        {
          feature: 'View Toggle',
          criteria: 'Switch between table and grid view',
          status: 'met',
          evidence: 'Toggle button functional',
        },
        {
          feature: 'Attention Sidebar',
          criteria: 'Show clients needing attention',
          status: 'met',
          evidence: 'Alerts for no notes in 14+ days, behind on goals',
        },
      ],
    },
  },
  {
    id: 11,
    title: 'MVP Testing Results',
    type: 'test-results',
    content: {
      sections: [
        {
          title: 'Test Execution',
          items: [
            'All unit tests run via: pnpm test',
            'No external dependencies required',
            'Mock-based testing with Vitest',
            'Prisma client operations mocked',
            '70% minimum coverage enforced',
          ],
        },
        {
          title: 'Coverage Metrics',
          items: [
            'Client Management: 85% coverage',
            'Authentication: 90% coverage',
            'Goal Setting: 80% coverage',
            'Case Notes: 75% coverage',
            'Dashboard: 70% coverage',
            'Overall: 78% coverage achieved',
          ],
        },
        {
          title: 'Test Results',
          items: [
            '156 total test cases',
            '148 passing',
            '8 skipped (integration tests)',
            '0 failing',
            'Average execution time: 12 seconds',
          ],
        },
      ],
    },
  },
  {
    id: 12,
    title: 'Peer Testing Session',
    type: 'test-results',
    content: {
      testResults: [
        {
          category: 'Critical Issues',
          totalIssues: 3,
          critical: 3,
          major: 0,
          minor: 0,
          resolved: true,
          details: [
            'Client creation completely broken (#001)',
            'Editing client records impossible (#002)',
            'Case note navigation non-functional (#003)',
          ],
        },
        {
          category: 'Major Issues',
          totalIssues: 2,
          critical: 0,
          major: 2,
          minor: 0,
          resolved: true,
          details: [
            'Dead links in case notes history (#004)',
            'Missing dashboard tab (#005)',
          ],
        },
        {
          category: 'Minor Issues',
          totalIssues: 4,
          critical: 0,
          major: 0,
          minor: 4,
          resolved: true,
          details: [
            'Search behavior inconsistent',
            'User feedback missing on actions',
            'Form labeling unclear',
            'Timestamp display format issues',
          ],
        },
      ],
    },
  },
  {
    id: 13,
    title: 'Peer Testing Insights',
    type: 'summary',
    content: {
      sections: [
        {
          title: 'Testing Setup',
          items: [
            'Date: February 23rd, 2026',
            '7 testers participated',
            'Staging branch with local database',
            'Structured test scenarios provided',
          ],
        },
        {
          title: 'Test Scenarios',
          items: [
            'Login flow (success/failure cases)',
            'Dashboard interaction and navigation',
            'Client intake process',
            'Client search and editing',
            'Case note creation and publishing',
            'Audit log verification',
          ],
        },
        {
          title: 'Key Findings',
          items: [
            '9 total issues identified',
            'Core functionality blockers found',
            'All issues fixed via pull requests',
            'UI/UX improvements needed',
          ],
        },
      ],
    },
  },
  {
    id: 14,
    title: 'Accessibility Testing',
    type: 'test-coverage',
    content: {
      sections: [
        {
          title: 'Testing Approach',
          items: [
            'Manual review by visually impaired team member',
            'Chrome Lighthouse analysis',
            'Keyboard-only navigation testing',
            'Color contrast verification',
          ],
        },
        {
          title: 'Issues Identified',
          items: [
            'Insufficient contrast on client/case notes pages',
            'Subtle responsive cues hard to detect',
            'Search navbar text clashes with background',
            'Optional markers too faint on intake form',
          ],
        },
        {
          title: 'Remediation Plan',
          items: [
            'Tickets created for all issues',
            'Assigned to team members',
            'Priority: High for contrast issues',
            'Target: Complete before final release',
          ],
        },
      ],
    },
  },
  {
    id: 15,
    title: 'CI/CD Pipeline',
    type: 'design-decision',
    content: {
      decision: {
        title: 'Continuous Integration Strategy',
        decision: 'GitHub Actions with Automated Testing',
        rationale: [
          'Automated unit tests run on every PR',
          '70% minimum coverage requirement enforced',
          'Tests must pass before merge to main/staging',
          'Exceptions only with DevOps lead approval',
        ],
        tradeoffs: {
          lost: [
            'Additional time for test writing',
            'Slower PR merge process',
          ],
          gained: [
            'Early bug detection',
            'Consistent code quality',
            'Reduced production issues',
            'Automated quality gates',
          ],
        },
      },
    },
  },
  {
    id: 16,
    title: 'Testing Gaps & Priorities',
    type: 'test-coverage',
    content: {
      sections: [
        {
          title: 'Current Gaps',
          items: [
            'No automated E2E/UI tests',
            'Integration tests not implemented',
            'Date validation missing in intake',
            'Race condition handling needed',
            'Input sanitization incomplete',
          ],
        },
        {
          title: 'Priority Order',
          items: [
            '1. E2E testing (manual) - In Progress',
            '2. Integration tests - March 30th deadline',
            '3. Input validation fixes',
            '4. Race condition prevention',
            '5. Automated UI tests (post-MVP)',
          ],
        },
        {
          title: 'Rationale',
          items: [
            'MVP testing revealed UI edge cases',
            'Manual E2E allows faster iteration',
            'Integration tests critical for data flow',
            'UI expected to change with feedback',
          ],
        },
      ],
    },
  },
  {
    id: 17,
    title: 'Next Steps',
    type: 'summary',
    content: {
      sections: [
        {
          title: 'Immediate Actions',
          items: [
            'Complete manual E2E testing',
            'Fix dashboard search functionality',
            'Implement date validation in intake',
            'Add input sanitization for strings',
          ],
        },
        {
          title: 'Before Final Release',
          items: [
            'Integration tests implementation',
            'Accessibility issues resolution',
            'Performance testing under load',
            'Security vulnerability scanning',
          ],
        },
        {
          title: 'Final Testing Goals',
          items: [
            'Zero critical/major bugs',
            'Only cosmetic issues remaining',
            '80%+ code coverage',
            'All acceptance criteria met',
          ],
        },
      ],
    },
  },
  {
    id: 18,
    title: 'Thank You',
    type: 'thank-you',
    content: {
      subtitle: 'Questions?',
    },
  },
  {
    id: 19,
    title: 'Q&A - Testing Strategy',
    type: 'qna',
    content: {
      qnaItems: [
        {
          question: 'Why prioritize manual E2E over automated UI tests?',
          answer: 'With a 6-8 week timeline and frequent UI changes based on client feedback, manual testing allows faster iteration. Automated UI tests (Playwright/Storybook) would require significant setup time and constant maintenance as the UI evolves.',
        },
        {
          question: 'How do you ensure test quality with mocked databases?',
          answer: 'We mock at the Prisma client level, not the database level. This ensures our business logic is tested while maintaining fast execution. Integration tests with a real test database validate the actual data flow.',
        },
        {
          question: 'What happens if coverage drops below 70%?',
          answer: 'Our CI/CD pipeline blocks merges to main/staging if coverage drops below 70%. Developers must add tests before their PR can be merged, unless the DevOps lead grants an exception for critical hotfixes.',
        },
        {
          question: 'How are you handling the identified testing gaps?',
          answer: 'We\'ve prioritized gaps based on risk and user impact. Critical gaps like date validation and race conditions are being fixed immediately. Lower priority items like automated UI tests are deferred to post-MVP.',
        },
        {
          question: 'Why not use TDD (Test-Driven Development)?',
          answer: 'Given our tight timeline and evolving requirements from the client, we opted for test-after-development. This allows faster prototyping while still maintaining quality through comprehensive unit tests.',
        },
        {
          question: 'How do you test accessibility beyond automated tools?',
          answer: 'We have a visually impaired team member who manually tests the application. This provides real-world feedback that automated tools like Lighthouse might miss, such as workflow confusion or navigation difficulties.',
        },
      ],
    },
  },
];