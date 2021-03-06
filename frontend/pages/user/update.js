import Layout from '../../components/Layout';
import Private from '../../components/auth/Private/Private';
import ProfileUpdate from '../../components/auth/ProfileUpdate/ProfileUpdate';

const UserProfileUpdate = () => (
  <Layout>
    <Private>
      <ProfileUpdate />
    </Private>
  </Layout>
);

export default UserProfileUpdate;