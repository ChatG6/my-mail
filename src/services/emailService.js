import axios from 'axios';

const BASE_URL = 'https://apisample-git-main-maan-najjars-projects.vercel.app';

// Fetch emails
export const fetchEmails = async (folder = 'Inbox') => {
  try {
    const token = localStorage.getItem('access_token');
    
    if (!token) {
      throw new Error('No access token');
    }

    const response = await axios.get(`${BASE_URL}/emails`, {
      params: { folder },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Failed to fetch emails:', error);
    throw error;
  }
};

// Search emails
export const searchEmails = async (query) => {
  try {
    const token = localStorage.getItem('access_token');
    
    const response = await axios.get(`${BASE_URL}/search`, {
      params: { query },
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Search emails error:', error);
    throw error;
  }
};

// Send email
export const sendEmail = async (emailData) => {
  try {
    const token = localStorage.getItem('access_token');
    
    const response = await axios.post(`${BASE_URL}/send`, emailData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    return response.data;
  } catch (error) {
    console.error('Send email error:', error);
    throw error;
  }
};

// Mark email as read
export const markEmailAsRead = async (emailId) => {
  try {
    const token = localStorage.getItem('access_token');
    
    const response = await axios.patch(`${BASE_URL}/emails/${emailId}/read`, {}, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Mark as read error:', error);
    throw error;
  }
};

// Delete email
export const deleteEmail = async (emailId) => {
  try {
    const token = localStorage.getItem('access_token');
    
    const response = await axios.delete(`${BASE_URL}/emails/${emailId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    return response.data;
  } catch (error) {
    console.error('Delete email error:', error);
    throw error;
  }
};