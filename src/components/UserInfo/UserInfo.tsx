import React from 'react';

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface UserProps {
  user: User;
}

export const UserInfo: React.FC<UserProps> = ({ user }) => (
  <>
    <a className="UserInfo" href={`mailto:${user.email}`}>
      {user.name}
    </a>
  </>
);
