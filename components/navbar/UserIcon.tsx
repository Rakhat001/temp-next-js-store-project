
import { currentUser } from '@clerk/nextjs/server'; 
import UserAvatar from './UseAvatar';

async function UserIcon() {
  const user = await currentUser();
  const profileImage = user?.imageUrl || null; 
  return <UserAvatar profileImage={profileImage} />;
}

export default UserIcon;