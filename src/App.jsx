import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingScreen from './components/loading/LoadingScreen';
import LandingLayout from './app/LandingLayout';
import LandingPage from './app/landing/LandingPage';
import LoginPage from './app/auth/LoginPage';
import RegisterPage from './app/auth/RegisterPage';
import ForgotPasswordPage from './app/auth/ForgotPasswordPage';
import DashboardLayout from './app/DashboardLayout';
import DashboardPage from './app/dashboard/DashboardPage';
import AutomationsPage from './app/automations/AutomationsPage';
import CRMPage from './app/crm/CRMPage';
import AnalyticsPage from './app/analytics/AnalyticsPage';
import BillingPage from './app/billing/BillingPage';
import MediaPage from './app/media/MediaPage';
import SettingsPage from './app/settings/SettingsPage';
import AIToolsPage from './app/ai-tools/AIToolsPage';
import InvoicesPage from './app/invoices/InvoicesPage';
import EmailCampaignsPage from './app/email-campaigns/EmailCampaignsPage';
import SocialSchedulerPage from './app/social-scheduler/SocialSchedulerPage';
import TasksPage from './app/tasks/TasksPage';
import TemplatesPage from './app/templates/TemplatesPage';
import IntegrationsPage from './app/integrations/IntegrationsPage';
import NotificationsPage from './app/notifications/NotificationsPage';
import { routes } from './config/routes';

function App() {
  const [loading, setLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Always show loading screen for testing
    // Remove this comment and uncomment below for production
    // const hasVisited = sessionStorage.getItem('hasVisited');
    // if (hasVisited) {
    //   setLoading(false);
    //   setShowContent(true);
    // } else {
    //   sessionStorage.setItem('hasVisited', 'true');
    // }
  }, []);

  const handleLoadingComplete = () => {
    setLoading(false);
    setShowContent(true);
  };

  return (
    <>
      {loading && <LoadingScreen onComplete={handleLoadingComplete} />}
      {showContent && (
    <Router>
      <Routes>
        <Route path="/" element={<LandingLayout><LandingPage /></LandingLayout>} />
        <Route path="/auth/login" element={<LoginPage />} />
        <Route path="/auth/register" element={<RegisterPage />} />
        <Route path="/auth/forgot-password" element={<ForgotPasswordPage />} />
        
        {/* Dashboard Routes */}
        <Route path="/dashboard" element={<DashboardLayout><DashboardPage /></DashboardLayout>} />
        <Route path="/automations" element={<DashboardLayout><AutomationsPage /></DashboardLayout>} />
        <Route path="/crm" element={<DashboardLayout><CRMPage /></DashboardLayout>} />
        <Route path="/analytics" element={<DashboardLayout><AnalyticsPage /></DashboardLayout>} />
        <Route path="/billing" element={<DashboardLayout><BillingPage /></DashboardLayout>} />
        <Route path="/media" element={<DashboardLayout><MediaPage /></DashboardLayout>} />
        <Route path="/ai-tools" element={<DashboardLayout><AIToolsPage /></DashboardLayout>} />
        <Route path="/invoices" element={<DashboardLayout><InvoicesPage /></DashboardLayout>} />
        <Route path="/email-campaigns" element={<DashboardLayout><EmailCampaignsPage /></DashboardLayout>} />
        <Route path="/social-scheduler" element={<DashboardLayout><SocialSchedulerPage /></DashboardLayout>} />
        <Route path="/tasks" element={<DashboardLayout><TasksPage /></DashboardLayout>} />
        <Route path="/templates" element={<DashboardLayout><TemplatesPage /></DashboardLayout>} />
        <Route path="/integrations" element={<DashboardLayout><IntegrationsPage /></DashboardLayout>} />
        <Route path="/notifications" element={<DashboardLayout><NotificationsPage /></DashboardLayout>} />
        <Route path="/settings" element={<DashboardLayout><SettingsPage /></DashboardLayout>} />
      </Routes>
    </Router>
      )}
    </>
  );
}

export default App;
