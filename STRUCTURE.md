# OpsForge Project Structure

## Directory Overview

```
src/
├── app/                          # Page components and layouts
│   ├── landing/                  # Landing pages
│   ├── auth/                     # Authentication pages
│   ├── workspace/                # Workspace pages
│   ├── dashboard/                # Dashboard pages
│   ├── automations/              # Automation pages
│   ├── crm/                      # CRM pages
│   ├── analytics/                # Analytics pages
│   ├── media/                    # Media library pages
│   ├── billing/                  # Billing pages
│   ├── settings/                 # Settings pages
│   ├── RootLayout.jsx            # Root layout wrapper
│   ├── AuthLayout.jsx            # Auth layout wrapper
│   ├── LandingLayout.jsx         # Landing layout wrapper
│   ├── DashboardLayout.jsx       # Dashboard layout wrapper
│   └── WorkspaceLayout.jsx       # Workspace layout wrapper
│
├── components/                   # Reusable components
│   ├── core/                     # Core UI components
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Card.jsx
│   │   ├── Badge.jsx
│   │   ├── Modal.jsx
│   │   ├── Avatar.jsx
│   │   ├── Loader.jsx
│   │   ├── Table.jsx
│   │   └── index.js
│   ├── dashboard/                # Dashboard-specific components
│   │   ├── Sidebar.jsx
│   │   ├── Topbar.jsx
│   │   ├── PageHeader.jsx
│   │   ├── StatsCard.jsx
│   │   ├── ChartCard.jsx
│   │   ├── EmptyState.jsx
│   │   └── index.js
│   ├── forms/                    # Form components
│   │   ├── FormField.jsx
│   │   └── FormSection.jsx
│   ├── navigation/               # Navigation components
│   │   └── NavLink.jsx
│   ├── automation/               # Automation builder components
│   │   ├── WorkflowCard.jsx
│   │   ├── NodeCard.jsx
│   │   └── ConnectionLine.jsx
│   ├── media/                    # Media library components
│   │   ├── FileCard.jsx
│   │   └── UploadDropzone.jsx
│   └── crm/                      # CRM components
│       ├── ContactCard.jsx
│       └── TagBadge.jsx
│
├── config/                       # Configuration files
│   ├── theme.js                  # Design tokens and theme
│   └── routes.js                 # Route definitions
│
├── contexts/                     # React contexts
│   ├── AuthContext.jsx
│   └── WorkspaceContext.jsx
│
├── hooks/                        # Custom React hooks
│   ├── useAuth.js
│   └── useWorkspace.js
│
├── icons/                        # Icon registry
│   └── iconRegistry.js
│
├── lib/                          # Library utilities
│   └── (placeholder for libraries)
│
├── services/                     # API services
│   ├── authService.js
│   ├── workflowService.js
│   └── contactService.js
│
├── store/                        # State management
│   └── index.js
│
├── styles/                       # Global styles
│   └── globals.css
│
├── types/                        # TypeScript definitions
│   └── index.ts
│
└── utils/                        # Utility functions
    ├── api.js                    # API client
    ├── validators.js             # Validation functions
    └── formatters.js             # Formatting functions
```

## Routes Map

### Landing Pages
- `/` - Home page
- `/pricing` - Pricing page
- `/features` - Features page
- `/demo` - Demo page

### Authentication
- `/auth/login` - Login page
- `/auth/register` - Register page
- `/auth/forgot-password` - Password reset page

### Workspace
- `/workspace` - Workspace list
- `/workspace/[id]` - Workspace detail

### Dashboard
- `/dashboard` - Main dashboard
- `/automations` - Automations module
- `/crm` - CRM module
- `/analytics` - Analytics module
- `/media` - Media library
- `/billing` - Billing management
- `/settings` - Settings page

## Component Hierarchy

### Core Components
- Button (variants: primary, secondary, ghost, danger)
- Input (with error states)
- Card (with header, body, footer)
- Badge (with status variants)
- Modal (with overlay)
- Avatar (with initials fallback)
- Loader & Skeleton (loading states)
- Table (with responsive wrapper)

### Dashboard Components
- Sidebar (navigation)
- Topbar (header with search)
- PageHeader (title + action)
- StatsCard (metrics display)
- ChartCard (chart container)
- EmptyState (no data state)

### Specialized Components
- WorkflowCard (automation display)
- NodeCard (workflow node)
- ConnectionLine (node connector)
- FileCard (media item)
- UploadDropzone (file upload)
- ContactCard (CRM contact)
- TagBadge (tag display)

## Theme Configuration

### Colors
- Primary: #0A0F1F (dark navy)
- Secondary: #1E3A8A (deep blue)
- Accent: #38BDF8 (light blue)
- Success: #10B981
- Warning: #F59E0B
- Danger: #EF4444

### Typography
- Headings: Sora, Space Grotesk
- Body: Inter, Plus Jakarta Sans

### Spacing Scale
- xs: 0.25rem
- sm: 0.5rem
- md: 1rem
- lg: 1.5rem
- xl: 2rem

## Services

### Auth Service
- login(email, password)
- register(email, password, name)
- logout()
- getCurrentUser()
- refreshToken()
- resetPassword(email)

### Workflow Service
- getWorkflows(workspaceId)
- getWorkflow(workspaceId, workflowId)
- createWorkflow(workspaceId, data)
- updateWorkflow(workspaceId, workflowId, data)
- deleteWorkflow(workspaceId, workflowId)
- executeWorkflow(workspaceId, workflowId)

### Contact Service
- getContacts(workspaceId)
- getContact(workspaceId, contactId)
- createContact(workspaceId, data)
- updateContact(workspaceId, contactId, data)
- deleteContact(workspaceId, contactId)
- searchContacts(workspaceId, query)

## Utilities

### API Client
- apiCall(endpoint, options)
- get(endpoint)
- post(endpoint, data)
- put(endpoint, data)
- del(endpoint)

### Validators
- validateEmail(email)
- validatePassword(password)
- validateRequired(value)
- validateMinLength(value, min)
- validateMaxLength(value, max)
- validatePhoneNumber(phone)

### Formatters
- formatDate(date)
- formatTime(date)
- formatCurrency(amount, currency)
- formatFileSize(bytes)
- truncateText(text, length)

## Hooks

### useAuth
- user
- loading
- error
- login(email, password)
- logout()

### useWorkspace
- workspace
- workspaces
- loading
- fetchWorkspaces()
- selectWorkspace(id)

## Contexts

### AuthContext
- user
- loading
- login()
- logout()

### WorkspaceContext
- workspace
- workspaces
- selectWorkspace()

## Getting Started

1. Install dependencies: `npm install`
2. Start development server: `npm run dev`
3. Build for production: `npm run build`
4. Run tests: `npm test`

## Best Practices

- Use components from `components/core` for UI elements
- Import utilities from `utils/` for common functions
- Use services from `services/` for API calls
- Leverage hooks from `hooks/` for state management
- Follow the theme configuration for consistent styling
- Use TypeScript types from `types/` for type safety
