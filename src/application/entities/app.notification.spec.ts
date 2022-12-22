import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {

  it('should be able to crete a notification', () => {
    const notification = new Notification({
      content: new Content('You have a new friend request!'),
      category: 'social',
      recipientId: 'example-recipient-id',

    });

    expect(notification).toBeTruthy();
  });

});
