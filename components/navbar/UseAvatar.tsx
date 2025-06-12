'use client'; 

import { LuUser } from 'react-icons/lu';


interface UserAvatarProps {
  profileImage: string | null;
}

export default function UserAvatar({ profileImage }: UserAvatarProps) {
  if (profileImage) {
    return (
      <img
        src={profileImage}
        className='w-6 h-6 rounded-full object-cover'
        alt='User profile' 
      />
    );
  }
  return <LuUser className='w-6 h-6 bg-primary rounded-full text-white' />;
}