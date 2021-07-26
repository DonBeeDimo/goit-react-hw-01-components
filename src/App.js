import Profile from './components/Profile/Profile';
import user from './user.json';
import SectionSt from './components/Statistics/SectionSt';
import statisticalData from './statistical-data.json';
import StatisticsList from './components/Statistics/StatisticsList';
import FriendList from './components/FriendList/FriendList';
import friends from './friends.json';
import transactions from './transactions.json';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import Container from './components/Container/Contaiter';

export default function App() {
  return (
    <Container>
      <Profile
        src={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <SectionSt title="Upload stats">
        <StatisticsList stats={statisticalData} />
      </SectionSt>

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}
