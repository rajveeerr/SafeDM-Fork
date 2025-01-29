import React, { useEffect, useState } from 'react';
import { Settings2, Share2, Wand2, Bell, Shield, Eye, MessageSquare, FileText, User, AlertTriangle, PencilOff, UserRoundSearch } from 'lucide-react';
import { getToken, isAuthenticated } from '~utils/auth';

const ToggleButton = ({ label, enabled, onToggle, disabled }) => (
  <div className="plasmo-flex plasmo-items-center plasmo-justify-between plasmo-p-3 plasmo-bg-gray-800 plasmo-rounded-lg plasmo-mb-3">
    <span className="plasmo-text-sm plasmo-text-gray-300">{label}</span>
    <button
      className={`plasmo-w-12 plasmo-h-6 plasmo-rounded-full plasmo-p-1 plasmo-transition-colors ${enabled ? 'plasmo-bg-blue-600' : 'plasmo-bg-gray-600'} ${disabled ? 'plasmo-opacity-50 plasmo-cursor-not-allowed' : ''}`}
      onClick={!disabled ? onToggle : undefined}
      disabled={disabled}
    >
      <div className={`plasmo-w-4 plasmo-h-4 plasmo-bg-white plasmo-rounded-full plasmo-transition-transform ${enabled ? 'plasmo-translate-x-6' : 'plasmo-translate-x-0'}`} />
    </button>
  </div>
);

const HomePage = () => {
  const [toggles, setToggles] = useState({
    notifications: true,
    automaticBlocking: false,
    hideMessages: true,
    autoReport: false,
    profileTag: true,
    enableExtension: true
  });
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();
      setIsLoggedIn(authenticated);
    };

    checkAuth();

    const handleStorageChange = (changes:any, area:any) => {
      if (area === 'local' && changes.authToken) {
        isAuthenticated().then(authenticated => {
          setIsLoggedIn(authenticated);
        });
      }
    };

    chrome.storage.onChanged.addListener(handleStorageChange);

    return () => {
      chrome.storage.onChanged.removeListener(handleStorageChange);
    };
}, []);


  const handleToggle = (key:any) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="plasmo-w-[320px] plasmo-min-h-[480px] plasmo-bg-gray-900 plasmo-text-white plasmo-p-4 plasmo-font-sans relative">
      {!isLoggedIn && (
        <p className="plasmo-text-white plasmo-bg-yellow-200/10  plasmo-p-2 plasmo-h-min plasmo-mb-2 plasmo-text-xs">
          Please log in to use all features of this extension.
        </p>
      )}
      <div className="plasmo-mb-6">
        <h1 className="plasmo-text-2xl plasmo-mb-2">
          Welcome to <span className="plasmo-text-blue-500">HS-Saver!</span>
        </h1>
        <p className="plasmo-text-gray-400 plasmo-text-sm plasmo-mb-4">
          Protect yourself from online harassment
        </p>

        <div className="plasmo-bg-gray-800 plasmo-rounded-lg plasmo-p-4 plasmo-mb-6">
          <div className="plasmo-aspect-video plasmo-bg-gray-700 plasmo-rounded-md plasmo-flex plasmo-items-center plasmo-justify-center plasmo-mb-4">
            <button
              className="plasmo-flex plasmo-items-center plasmo-gap-2 plasmo-bg-gray-900 plasmo-text-white plasmo-px-4 plasmo-py-2 plasmo-rounded-md plasmo-hover:bg-gray-800 plasmo-transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isLoggedIn}
            >
              <span className="plasmo-text-lg">▶</span>
              Watch tutorial
            </button>
          </div>
        </div>

        <div className="plasmo-space-y-2 plasmo-mb-6">
          <h2 className="plasmo-text-lg plasmo-font-medium plasmo-mb-3">Protection Settings</h2>

          <ToggleButton
            label="Enable Extension"
            enabled={toggles.enableExtension}
            onToggle={() => handleToggle('enableExtension')}
            disabled={!isLoggedIn}
          />
          <ToggleButton
            label="Automatic Blocking"
            enabled={toggles.automaticBlocking}
            onToggle={() => handleToggle('automaticBlocking')}
            disabled={true}
          />

          <ToggleButton
            label="Hide Abusive Messages"
            enabled={toggles.hideMessages}
            onToggle={() => handleToggle('hideMessages')}
            disabled={!isLoggedIn}
          />

          <ToggleButton
            label="Automatic Report Generation"
            enabled={toggles.autoReport}
            onToggle={() => handleToggle('autoReport')}
            disabled={!isLoggedIn}
          />

          <ToggleButton
            label="Show Profile Warning Tags"
            enabled={toggles.profileTag}
            onToggle={() => handleToggle('profileTag')}
            disabled={!isLoggedIn}
          />
        </div>

        <div className="plasmo-grid plasmo-grid-cols-2 plasmo-gap-3 plasmo-mb-6">
          <button
            className="plasmo-flex plasmo-items-center plasmo-gap-2 plasmo-bg-gray-800 plasmo-p-3 plasmo-rounded-lg plasmo-hover:bg-gray-700 plasmo-transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isLoggedIn}
          >
            <FileText className="plasmo-w-5 plasmo-h-5 plasmo-text-blue-500" />
            <span className="plasmo-text-sm">View Reports</span>
          </button>
          <button
            className="plasmo-flex plasmo-items-center plasmo-gap-2 plasmo-bg-gray-800 plasmo-p-3 plasmo-rounded-lg plasmo-hover:bg-gray-700 plasmo-transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isLoggedIn}
          >
            <User className="plasmo-w-5 plasmo-h-5 plasmo-text-blue-500" />
            <span className="plasmo-text-sm">Blocked Users</span>
          </button>
          <button
            className="plasmo-flex plasmo-items-center plasmo-gap-2 plasmo-bg-gray-800 plasmo-p-3 plasmo-rounded-lg plasmo-hover:bg-gray-700 plasmo-transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isLoggedIn}
          >
            <MessageSquare className="plasmo-w-5 plasmo-h-5 plasmo-text-blue-500" />
            <span className="plasmo-text-sm">Messages Log</span>
          </button>
          <button
            className="plasmo-flex plasmo-items-center plasmo-gap-2 plasmo-bg-gray-800 plasmo-p-3 plasmo-rounded-lg plasmo-hover:bg-gray-700 plasmo-transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isLoggedIn}
          >
            <AlertTriangle className="plasmo-w-5 plasmo-h-5 plasmo-text-blue-500" />
            <span className="plasmo-text-sm">Help Center</span>
          </button>
          <button
            className="plasmo-flex plasmo-items-center plasmo-gap-2 plasmo-bg-gray-800 plasmo-p-3 plasmo-rounded-lg plasmo-hover:bg-gray-700 plasmo-transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isLoggedIn}
          >
            <PencilOff className="plasmo-w-5 plasmo-h-5 plasmo-text-blue-500" />
            <span className="plasmo-text-sm">Blacklist Keywords</span>
          </button>
          <button
            className="plasmo-flex plasmo-items-center plasmo-gap-2 plasmo-bg-gray-800 plasmo-p-3 plasmo-rounded-lg plasmo-hover:bg-gray-700 plasmo-transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!isLoggedIn}
          >
            <UserRoundSearch className="plasmo-w-5 plasmo-h-5 plasmo-text-blue-500" />
            <span className="plasmo-text-sm">All Detected Harrasers</span>
          </button>
        </div>
      </div>

      <div className="plasmo-flex plasmo-gap-2 plasmo-mt-auto">
        <button
          className="plasmo-flex-1 plasmo-flex plasmo-items-center plasmo-justify-center plasmo-gap-2 plasmo-bg-blue-600 plasmo-text-white plasmo-px-4 plasmo-py-2 plasmo-rounded-md plasmo-hover:bg-blue-700 plasmo-transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!isLoggedIn}
        >
          <Shield className="plasmo-w-4 plasmo-h-4" />
          Save Preferences
        </button>
      </div>
    </div>
  );
};

export default HomePage;