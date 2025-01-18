import React from 'react';
import EmailItem from './EmailItem';

const EmailList = ({ emails, onSelectEmail }) => {
  return (
    <div className="flex-1 overflow-auto">
      {emails.map((email, index) => (
        <EmailItem 
          key={index} 
          email={email} 
          onSelect={() => onSelectEmail(email)}
        />
      ))}
    </div>
  );
};

export default EmailList;