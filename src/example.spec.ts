class FriendsList {
  friends = [];

  addFriend(name) {
    this.friends.push(name);
    this.announceFriendship(name);
  }

  announceFriendship(name) {
    console.log(`${name} is now a friend!`);
  }

  removeFriend(name) {
    const idx = this.friends.indexOf(name);

    if (idx === -1) {
      throw new Error('Friend not found!');
    }

    this.friends.splice(idx, 1);
  }
}

describe('FriendsList', () => {
  let friendsList: FriendsList;

  beforeEach(() => {
    friendsList = new FriendsList();
  });

  it('Initialize friends list', () => {
    expect(friendsList.friends.length).toEqual(0);
  });

  it('Adds a friend to the list', () => {
    friendsList.addFriend('Cosy');
    expect(friendsList.friends.length).toEqual(1);
  });

  it('Announces friendship', () => {
    friendsList.announceFriendship = jest.fn();
    expect(friendsList.announceFriendship).not.toHaveBeenCalled();
    friendsList.addFriend('Cosy');
    expect(friendsList.announceFriendship).toHaveBeenCalled();
  });

  describe('removeFriend', () => {
    it('removes a friend from the list', () => {
      friendsList.addFriend('Cosy');
      expect(friendsList.friends[0]).toEqual('Cosy');
      friendsList.removeFriend('Cosy');
      expect(friendsList.friends[0]).toBeUndefined();
    });

    it('throws an error as friend does not exist', () => {
      expect(() => friendsList.removeFriend('Cosy')).toThrow(
        new Error('Friend not found!'),
      );
    });
  });
});
