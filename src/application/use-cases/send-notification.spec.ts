import { InMemoryNotificationRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { SendNotification } from "./send-notification";

// is my own repository or database...

describe('Send notification', () => {

    it('should be able to send notification', async () => {
     const notificationRepository = new InMemoryNotificationRepository()
     const sendNotification = new SendNotification(notificationRepository);

     const {notification} = await sendNotification.execute({
        content: 'This is a notification',
        category: 'social',
        recipientId: 'example-recipint-id',

     });

     expect (notificationRepository.notifications).toHaveLength(1);
     expect (notificationRepository.notifications[0]).toEqual(notification);
     
    });
  
  });