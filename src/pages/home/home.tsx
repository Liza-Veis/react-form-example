import { FC, useState } from 'react';

import { UserDto, CreateUserDto } from 'common/types/types';
import { CreateUserForm, UserList } from './components/components';
import styles from './styles.module.scss';

const Home: FC = () => {
  const [users, setUsers] = useState<UserDto[]>([]);

  const createUser = (payload: CreateUserDto): void => {
    const user: UserDto = {
      ...payload,
      id: crypto.randomUUID(),
    };

    setUsers([...users, user]);
  };

  return (
    <div className={styles.wrapper}>
      <CreateUserForm onSubmit={createUser} />
      <UserList items={users} />
    </div>
  );
};

export default Home;
