// import './FriendList.modules.css'; // Імпорт стилів

// const FriendList = ({ friends }) => {
//   return (
//     <div className="friend-list">
//       <ul className="friend-list__ul">
//         {friends.map(({ id, avatar, name, isOnline }) => (
//           <li key={id} className="friend-list__item">
//             <img src={avatar} alt={`${name}'s avatar`} width="48" className="friend-list__avatar" />
//             <p className="friend-list__name">{name}</p>
//             <p className={`friend-list__status ${isOnline ? 'online' : 'offline'}`}>
//               {isOnline ? 'Online' : 'Offline'}
//             </p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default FriendList;

import './FriendList.modules.css'; // Імпорт стилів
import FriendListItem from './FriendListItem'; // Правильний імпорт компонента

const FriendList = ({ friends }) => {
  return (
    <div className="friend-list">
      <ul className="friend-list__ul">
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li key={id} className="friend-list__item">
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} /> {/* Передача пропсів */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;

