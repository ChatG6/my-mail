import React from 'react';
import { Search, LogOut } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';

const InboxTopBar = ({ user, onLogout }) => {
  return (
    <div className="bg-white border-b p-4 flex items-center justify-between">
      <div className="flex items-center space-x-4 flex-1">
        <span>Welcome, {user.full_name}</span>
        <div className="flex-1">
          <Input 
            type="text"
            placeholder="Search emails..."
            icon={Search}
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
            {user.full_name.charAt(0)}
          </div>
          <span>{user.full_name}</span>
        </div>
        <Button 
          onClick={onLogout} 
          variant="outline"
          className="flex items-center space-x-2"
        >
          <LogOut size={16} />
          <span>Logout</span>
        </Button>
      </div>
    </div>
  );
};

export default InboxTopBar;