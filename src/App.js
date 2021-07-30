import Profile from './components/Profile/Profile';
import user from './user.json';
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
        stats={user.stats}
      />

      <StatisticsList title="Upload stats" stats={statisticalData} />
      <StatisticsList stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </Container>
  );
}
