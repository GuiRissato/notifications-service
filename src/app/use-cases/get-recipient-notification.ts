import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '@app/repositories/notification-repository';
import { Notification } from '@app/entities/notification';

interface GetRecipentNotificationsRequest {
  recipientId: string;
}

interface GetRecipentNotificationsResponse {
  notifications: Notification[];
}
@Injectable()
export class GetRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: GetRecipentNotificationsRequest,
  ): Promise<GetRecipentNotificationsResponse> {
    const { recipientId } = request;
    const notifications =
      await this.notificationsRepository.findManyByRecipientId(recipientId);

    return { notifications };
  }
}
