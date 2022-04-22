import { FC } from 'react';

import { UserDto } from 'common/types/types';
import styles from './styles.module.scss';

type UserListProps = {
  items: UserDto[];
};

const UserList: FC<UserListProps> = ({ items }) => {
  return (
    <div className={styles.wrapper}>
      {items.map(({ id, name, email }) => (
        <div key={id} className={styles.userCard}>
          <span>name: {name}</span>
          <span>email: {email}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
