import './Profile.modules.css'; // імпорт стилів

const Profile = (props) => {
  const { name, tag, location, image, stats } = props;
  
  return (
    <div className="profile-container">
      <div className="profile-header">
        <img src={image} alt={`${name}'s avatar`} className="profile-avatar" />
        <p className="profile-name">{name}</p>
        <p className="profile-tag">@{tag}</p>
        <p className="profile-location">{location}</p>
      </div>
      
      <ul className="profile-stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
