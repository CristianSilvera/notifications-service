import { Module } from "@nestjs/common";
import { SendNotification } from "src/application/use-cases/send-notification";
import { DatabaseModule } from "./database/database.module";
import { NotificationsController } from "./http/controllers/notifications.controller";
// 1:26:26

@Module({
    imports: [DatabaseModule],
    controllers: [NotificationsController],
    providers: [SendNotification],
})

export class HttpModule {}