import styles from './Profile.module.scss';

interface ProfileProps { }

export const Profile = ({ }: ProfileProps) => (
  <div className={styles.profile}>
    Profile Component
  </div>
);
