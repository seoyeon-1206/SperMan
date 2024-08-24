// components/PostCard.tsx
import React from 'react';
import styles from './PostCard.module.css';

interface PostCardProps {
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

const PostCard: React.FC<PostCardProps> = ({ image, title, subtitle, description }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <h3 className={styles.subtitle}>{subtitle}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
};

export default PostCard;
