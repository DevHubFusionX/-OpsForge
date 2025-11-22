You are building a complete SaaS platform called “OpsForge”.  
Create the full dry project structure, including folder hierarchy, routing system, layouts, page components, reusable UI components, icon map, and the full theme configuration.

### PROJECT TYPE

A SaaS dashboard with:

- Landing page
- Auth pages
- Multi-tenant workspace system
- Dashboard with multiple modules
- Shared components
- Dark UI theme only

Use best-practice modern architecture for a Next.js or React project (choose the best fit automatically).

### BRAND IDENTITY

Use this exact design system:

PRIMARY COLORS:

- Primary: #0A0F1F (dark navy black)
- Secondary: #1E3A8A (deep blue)
- Accent: #38BDF8 (light blue)

TEXT COLORS:

- #FFFFFF (primary)
- #D1D5DB (secondary)
- #6B7280 (muted)

SURFACE / BACKGROUND VARIANTS:

- #0F172A (surface)
- #111827 (card background)
- #1E293B (table rows / panels)

STATUS COLORS:

- Success: #10B981
- Warning: #F59E0B
- Danger: #EF4444

### TYPOGRAPHY

Headings: Sora or Space Grotesk  
Body: Inter or Plus Jakarta Sans

### ICON STYLE

- Outline icons
- 2px stroke
- Slightly rounded ends
- Provide an icon registry (a single file mapping icon names to actual components)

### CREATE:

1. **Full Folder Structure**  
   A clean enterprise-style structure that includes:

- app/
- components/
- hooks/
- lib/
- utils/
- styles/
- icons/
- types/
- contexts/
- store/
- config/
- services/

2. **APP ROUTES**  
   Generate the full route map including:

Landing pages:

- /
- /pricing
- /features
- /demo

Auth:

- /auth/login
- /auth/register
- /auth/forgot-password

Workspace system:

- /workspace
- /workspace/[id]

Dashboard pages (inside workspace):

- /dashboard
- /automations
- /crm
- /analytics
- /media
- /billing
- /settings

3. **LAYOUTS**
   Generate:

- RootLayout
- AuthLayout
- LandingLayout
- DashboardLayout
- WorkspaceLayout

Each layout should:

- Include navigation
- Sidebar
- Topbar
- Theme provider
- Metadata setup
- Responsive container

4. **GLOBAL THEME CONFIG**
   Create:

- color tokens
- spacing scale
- border radius scale
- shadow scale
- typography system
- component tokens (buttons, inputs, card, badge, navbar, sidebar)

5. **COMPONENTS**
   Generate the structure + placeholder code for:

Core:

- Button
- Input
- Card
- Modal
- Dropdown
- Tooltip
- Badge
- Table
- Avatar
- Tabs
- Toast
- Loader
- Skeleton

Dashboard UI:

- Sidebar
- Topbar
- PageHeader
- EmptyState
- StatsCard
- ChartCard

Forms:

- FormField
- FormSection

Navigation:

- NavLink
- NavSection

Automation Builder:

- WorkflowCard
- NodeCard
- ConnectionLine

Media Library:

- FileCard
- UploadDropzone

CRM:

- ContactCard
- TagBadge

6. **ICON REGISTRY**
   List icons for:

- Dashboard
- Automations
- CRM
- Media
- Analytics
- Billing
- Settings
- Workspace
- Logout
- Notifications
- Search
- User

7. **RETURN EVERYTHING IN CLEAN CODE BLOCKS**
   Write everything in DRY, modular, production-ready format.

Make sure to:

- Use consistent naming conventions
- Follow clean architecture
- Prefill skeleton functions + components
- Include comments for what each file does

Do not add filler text.  
Just the structure, skeleton files, routes, theme, icons, and layout templates.
