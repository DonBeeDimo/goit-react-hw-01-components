import Profile from './components/Profile';
import user from './profile.json';

export default function App() {
  return (
    <div>
      <Profile
        src={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}
