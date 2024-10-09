
const FriendListItem = ({ avatar, name, isOnline }) => { // Отримання пропсів
  return (
      <div>
          <img src={avatar} alt={`${name}'s avatar`} width="48" className="friend-list__avatar" />
            <p className="friend-list__name">{name}</p>
            <p className={`friend-list__status ${isOnline ? 'online' : 'offline'}`}>
              {isOnline ? 'Online' : 'Offline'}
            </p>
    </div>
  )
}

export default FriendListItem;