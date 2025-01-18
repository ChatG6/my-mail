import React from 'react';
import { Mail, Star } from 'lucide-react';

const InboxSidebar = ({ folders, selectedFolder, onSelectFolder }) => {
  return (
    <div className="w-64 bg-white border-r">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-blue-600">MyMail</h1>
      </div>
      <nav className="mt-4">
        {folders.map((folder) => (
          <button
            key={folder.label}
            onClick={() => onSelectFolder(folder.label)}
            className={`w-full text-left p-3 flex items-center space-x-3 ${
              selectedFolder === folder.label 
                ? 'bg-blue-50 text-blue-600' 
                : 'hover:bg-gray-50'
            }`}
          >
            {folder.label === 'Inbox' ? <Mail /> : <Star />}
            <span>{folder.label}</span>
            <span className="ml-auto text-sm text-gray-500">
              {folder.messages.length}
            </span>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default InboxSidebar;