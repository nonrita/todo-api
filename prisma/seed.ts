import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const alice = await prisma.todo.upsert({
    where: { id: 0 },
    update: {},
    create: {
      title: 'test',
      text: 'this is test',
    },
  });

  console.log({ alice });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });