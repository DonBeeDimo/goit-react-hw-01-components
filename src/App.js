// import Profile from './components/Profile';
// import user from './user.json';
import Statistics from './components/Statistics';
import statisticalData from './statistical-data.json';

// export default function App() {
//   return (
//     <div>
//       <Profile
//         src={user.avatar}
//         name={user.name}
//         tag={user.tag}
//         location={user.location}
//         followers={user.stats.followers}
//         views={user.stats.views}
//         likes={user.stats.likes}
//       />
//     </div>
//   );
// }

export default function AppSt() {
  return (
    <div>
      {statisticalData.map(statistics => (
        <Statistics
          title="Upload stats"
          label={statisticalData.label}
          percentage={statisticalData.percentage}
        />
      ))}
    </div>
  );
}
