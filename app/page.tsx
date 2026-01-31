import DiagonalAccent from '@/components/diagonalAccent';
import Name from '@/components/name';
import AboutMe from '@/components/aboutMe';
import ProfileImage from '@/components/image';
import ReachOut from '@/components/reachOut/reachOut';

export default function Home() {
  return (
    <>
      <DiagonalAccent />
      <Name />
      <AboutMe />
      <ProfileImage />
      <ReachOut />
    </>
  );
}
