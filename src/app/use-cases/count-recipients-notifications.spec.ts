import { makeNotification } from '@test/factories/notification-factory';
import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notification-repository';
import { CountRecipientNotifications } from './count-recipient-notifications';

describe('count recipient Notification', () => {
  it('Should be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
