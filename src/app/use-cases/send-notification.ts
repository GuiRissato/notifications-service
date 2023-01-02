import { Content } from '@app/entities/content';
import { Notification } from '@app/entities/notification';
import { NotificationsRepository } from '@app/repositories/notification-repository';
import { Injectable } from '@nestjs/common';

interface SendNotificationRequest {
  recipientId: string;
  content: string;
  category: string;
}

interface SendNotificationResponse {
  notification: Notification;
}
@Injectable()
export class SendNotification {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: SendNotificationRequest,
  ): Promise<SendNotificationResponse> {
    const { recipientId, content, category } = request;

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    });

    // persistir essa notificacaio no banco
    // criar uma camanda de persistencia sem ter um banco de dados na app
    // inversao de dependencia
    await this.notificationsRepository.create(notification);
    return {
      notification,
    };
  }
}
