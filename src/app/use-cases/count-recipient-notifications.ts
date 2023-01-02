import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '@app/repositories/notification-repository';

interface CountRecipentNotificationsRequest {
  recipientId: string;
}

interface CountRecipentNotificationsResponse {
  count: number;
}
@Injectable()
export class CountRecipientNotifications {
  constructor(private notificationsRepository: NotificationsRepository) {}

  async execute(
    request: CountRecipentNotificationsRequest,
  ): Promise<CountRecipentNotificationsResponse> {
    const { recipientId } = request;
    const count = await this.notificationsRepository.countManyByRecipientId(
      recipientId,
    );
    return { count };
  }
}
