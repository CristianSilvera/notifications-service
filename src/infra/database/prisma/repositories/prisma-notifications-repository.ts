import { Injectable } from "@nestjs/common/decorators";
import { Notification } from "@application/entities/notification";
import { NotificationRepository } from "@application/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";
import { PrismaNotificationMapper } from "../mappers/prisma-notification-mapper";

@Injectable()
export class PrismaNotificationsRepository implements NotificationRepository {

    constructor(private prismaService: PrismaService) {}
    findManyByRecipientId(recipientId: string): Promise<Notification[]> {
        throw new Error("Method not implemented.");
    }
    countManyByRecipientId(recipientId: string): Promise<number> {
        throw new Error("Method not implemented.");
    }
    async findById(notificationId: string): Promise<Notification> {
        throw new Error("Method not implemented.");
    }
    

    async create(notification: Notification): Promise<void> {
        const raw = PrismaNotificationMapper.toPrisma(notification)

        await this.prismaService.notification.create({
            data: raw,
        });
    }
    
    async save(notificacione: Notification): Promise<void> {
        throw new Error("Method not implemented.");
    }
}