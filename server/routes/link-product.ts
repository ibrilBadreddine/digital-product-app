import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
        try {
            const body = await readBody(event);
            const storeId = event.context.session.storeId;
            const file = body.file;
            const productId = body.id;

            return await prisma.product.create({
            data: {
                id: productId,
                storeId: storeId,
                file: file
            },
        });
    } catch (error) {
        throw error;
    }
});