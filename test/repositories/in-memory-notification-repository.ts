import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notification-repository';

// isso daqui esta funcionando como um banco de dados para testes
// desacoplamento de camadas

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  countManyByRecipientId(): Promise<number> {
    throw new Error('Method not implemented.');
  }
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(
      (item) => item.id == notificationId,
    );

    if (!notification) {
      return null;
    }
    return notification;
  }

  async save(notification: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(
      (item) => item.id == notification.id,
    );

    if (notificationIndex >= 0) {
      this.notifications[notificationIndex] = notification;
    }
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
